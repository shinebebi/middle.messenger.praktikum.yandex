import Block from '../../../utils/Block';

interface IButtonProps {
    text: string;
    onClick?: () => void
}

export default class Button extends Block {
    constructor({text, onClick}: IButtonProps) {
        super({
            text,
            events: {
                click: onClick
            }
        });
    }

    render() {
        // language=hbs
        return `
            <button class="btn_auth submit" type="button">{{text}}</button>
        `
    }
}