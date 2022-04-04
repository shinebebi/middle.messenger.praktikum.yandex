import Block from '../../../utils/Block';
import {IInfoProps} from '../Info/info'



export default class ChangeInfo extends Block {
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
                <input class="person-info" value="{{value}}"/>
            </div>
        `
    }
}