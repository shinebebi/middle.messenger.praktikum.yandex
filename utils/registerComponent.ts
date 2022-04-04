import Block from './Block';
// @ts-ignore
import  { HelperOptions } from 'handlebars';

// @ts-ignore
import Handlebars from 'handlebars'


export function registerComponent(Component: typeof Block) {
    Handlebars.registerHelper(Component.name, function ({ hash, data }: HelperOptions) {
        if (!data.root.children) {
            data.root.children = {};
        }
        const { children } = data.root;
        const component = new Component(hash);
        children[component.id] = component;
        return `<div data-id="id-${component.id}"></div>`;
    })
}