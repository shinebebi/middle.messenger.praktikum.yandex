import Block from '../../../utils/Block';

export interface IInfoProps {
    title: string,
    value: string
}

export default class Info extends Block {
    constructor({title, value}: IInfoProps) {
        super({
            title,
            value
        });
    }

    render() {
        // language=hbs
        return `
            <div class="info-block">
                <h3 class="field-name">{{title}}</h3>
                <p class="person-info">{{value}}</p>
            </div>
        `
    }
}