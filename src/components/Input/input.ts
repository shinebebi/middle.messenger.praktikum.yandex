import Block from '../../../utils/Block';

interface IInputProps {
    name: string;
}

export default class Input extends Block {
    constructor({name}: IInputProps) {
        super({
            name
        });
    }

    render() {
        // language=hbs
        return `
            <div class="input_container">
                <p class="field-name {{name}}-field-name"></p>
                <input placeholder="{{name}}" class="input {{name}}" name="{{name}}" required/>
                <span class="{{name}}-error"></span>
            </div>
        `
    }
}