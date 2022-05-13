import Block from '../../../utils/Block';

interface ILinkProps {
    text: string;
    onClick?: () => void;
    color?: string;
    style: string
}

export default class Link extends Block {
    constructor(props: ILinkProps) {
        const {
            onClick, text, color, style
        } = props;

        super({
            text,
            events: {
                click: onClick,
            },
            color,
            style
        });
    }

    render() {
        // language=hbs
        return `
            <button class="{{style}}" type="button" style="color: {{color}}">{{text}}</button>
        `
    }
}