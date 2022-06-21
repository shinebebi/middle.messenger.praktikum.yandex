import Block from './Block';

import * as Handlebars from 'handlebars';
import { HelperOptions } from 'handlebars';

interface BlockConstructable<Props = any> {
    new(props: Props): Block;
}
export default function registerComponent(Component: BlockConstructable) {
    Handlebars.registerHelper(Component.name, function ({ hash: { ref, ...hash }, data }: HelperOptions) {
        if (!data.root.children) {
            data.root.children = {};
        }

        if (!data.root.refs) {
            console.log('bye')
            data.root.refs = {};
        }

        const { children, refs } = data.root;

        const component = new Component(hash);

        children[component.id] = component;

        if (ref) {
            console.log('nice')
            refs[ref] = component.getContent();
        }
        console.log('hi')
        return `<div data-id="id-${component.id}"></div>`;
    })
}