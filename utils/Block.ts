import EventBus from './EventBus'
import {v4 as makeUUID} from 'uuid';
// @ts-ignore
import Handlebars from 'handlebars'
export default class Block {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render"
    };

    id = makeUUID();
    _element: HTMLElement | null = null;
    _meta: {  props: any };
    children: Record<string, Block>

    props: any;
    eventBus: () => EventBus;

    /** JSDoc
     * @param {string} tagName
     * @param {Object} props
     *
     * @returns {void}
     */
    constructor(propsAndChildren: any = {}) {
        const eventBus = new EventBus();
        const { props, children } = this.getChildren(propsAndChildren)
        this.children = children
        this._meta = {
            props
        };

        this.props = this._makePropsProxy(props);

        this.initChildren()

        this.eventBus = () => eventBus;

        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }

    getChildren(propsAndChildren: any) {
        const children: any = {};
        const props: any = {};
        Object.entries(propsAndChildren).map(([key, value]) => {
            if (value instanceof Block) {
                children[key] = value;
            } else if (Array.isArray(value) && value.every(v => (v instanceof Block))){
                children[key] = value
            } else {
                props[key] = value;
            }
        })
        return {props, children}
    }

    private _registerEvents(eventBus: EventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }


    init() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    private _componentDidMount() {
        this.componentDidMount();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    componentDidMount() {

    }

    private _componentDidUpdate(oldProps: any, newProps: any) {
        const response = this.componentDidUpdate(oldProps, newProps);
        if (!response) {
            return;
        }
        this._render();
    }

    componentDidUpdate(oldProps, newProps) {
        return true;
    }

    setProps = (nextProps: any) => {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);
    };

    get element(): HTMLElement | null {
        return this._element;
    }

    private _render() {
        const templateString = this.render();
        const fragment = this.compile(templateString, {...this.props})
        const newElement = fragment.firstElementChild as HTMLElement;
        /*if (this._element) {
            this._removeEvents()
            this._element.replaceWith(newElement)
        }*/
        this._element = newElement;
        this._addEvents()
    }

    render(): string {
        return '';
    }

    getContent(): HTMLElement | null {
        return this.element;
    }

    private _makePropsProxy(props: any) {
        const self = this;
        return new Proxy(props as unknown as object, {
            get(target: Record<string, unknown>, prop: string) {
                const value = target[prop];
                return typeof value === "function" ? value.bind(target) : value;
            },
            set(target: Record<string, unknown>, prop: string, value: unknown) {
                const oldProps = {...target}
                target[prop] = value;
                self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, target);
                return true;
            },
            deleteProperty() {
                throw new Error("Нет доступа");
            }
        });
    }

    private _addEvents() {
        const events: Record<string, () => void> = (this.props as any).events;
        if (!events) {
            return
        }
        Object.keys(events).forEach(([event, listener]) => {
            this._element!.addEventListener(event, events[listener]);
        });
    }

    private _removeEvents() {
        const events: Record<string, () => void> = (this.props as any).events;
        if (!events || !this._element) {
            return;
        }
        Object.keys(events).forEach(([event, listener]) => {
            this._element!.removeEventListener(event, events[listener]);
        });
    }

    private _createDocumentElement(tagName: string): HTMLElement {
        return document.createElement(tagName);
    }

    show() {
        this.getContent()!.style.display = "block";
    }

    hide() {
        this.getContent()!.style.display = "none";
    }
    compile(templateString: string, context: any) {
        const fragment = this._createDocumentElement('template') as HTMLTemplateElement;
        const template = Handlebars.compile(templateString)
        const htmlString = template({...context, children: this.children})
        fragment.innerHTML = htmlString;
        Object.entries(this.children).forEach(([id, component]) => {
            const stub = fragment.content.querySelector(`[data-id="id-${id}"]`);

            if (!stub) {
                return;
            }
            stub.replaceWith(component.getContent()!);
        });
        return fragment.content;
    }
    initChildren() {

    }
}

