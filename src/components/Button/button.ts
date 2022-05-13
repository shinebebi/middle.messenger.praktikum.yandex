import Block from '../../../utils/Block';

interface IButtonProps {
    text: string;
    onClick?: () => void
}

export default class Button extends Block {
    constructor(props: IButtonProps) {
        const {
            onClick, text
        } = props;

        super({
            text,
            events: {
                click: onClick,
            },
        });
    }

    render() {
        // language=hbs
        return `
            <button class="btn_auth_form submit" type="submit">{{text}}</button>
        `
    }
}