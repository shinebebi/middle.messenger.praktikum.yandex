import Block from '../../../utils/Block';

interface IChangeInfo {
    title: string
    value: string
    name: string
    minlength?: string
    maxlength?: string
    type?: string
}

export default class ChangeInfo extends Block {
    constructor({title, value, name, minlength, maxlength, type}: IChangeInfo) {
        super({
            title,
            value,
            name,
            minlength,
            maxlength,
            type,
        });
    }

    render() {
        // language=hbs
        return `
            <div class="info-block">
                <h3 class="field-name">{{title}}</h3>
                <div class="input-and-error_block">
                    <input class="input_form person-info {{name}}" value="{{value}}" name="{{name}}" minlength="{{minlength}}" maxlength="{{maxlength}}" type="{{type}}" style="color: #1E1E1E" required/>
                    <span class="{{name}}-error"></span>
                </div>
            </div>
        `
    }
}