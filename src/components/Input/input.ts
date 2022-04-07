import Block from '../../../utils/Block';

interface IInputProps {
    name: string;
    minlength?: string;
    maxlength?: string;
    type?: string
}

export default class Input extends Block {
    constructor({ name, minlength, maxlength, type }: IInputProps) {
        super({
            name,
            minlength,
            maxlength,
            type
        });
    }

    render() {
        // language=hbs
        return `
            <div class="input_container">
                <p class="field-name {{name}}-field-name"></p>
                <input placeholder="{{name}}" class="input {{name}}" name="{{name}}" minlength="{{minlength}}" maxlength="{{maxlength}}" type="{{type}}" required/>
                <span class="{{name}}-error"></span>
            </div>
        `
    }
}