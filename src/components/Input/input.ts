import Block from '../../../utils/Block';

interface IInputProps {
    name: string;
    minlength?: string;
    maxlength?: string;
    type?: string;
    value?: string
}

export default class Input extends Block {
    constructor({ name, minlength, maxlength, type, value }: IInputProps) {
        super({
            name,
            minlength,
            maxlength,
            type,
            value
        });
    }

    render() {
        // language=hbs
        return `
            <div class="input_container_form">
                <p class="field-name {{name}}-field-name"></p>
                <input placeholder="{{name}}" class="input_form {{name}}" name="{{name}}" minlength="{{minlength}}" maxlength="{{maxlength}}" type="{{type}}" required/>
                <span class="{{name}}-error"></span>
            </div>
        `
    }
}