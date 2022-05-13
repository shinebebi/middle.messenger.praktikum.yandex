import Block from '../../../utils/Block';

interface ISendButtonProps {
    onClick?: () => void
}

export default class SendButton extends Block {
    constructor(props: ISendButtonProps) {
        const {
            onClick,
        } = props;

        super({
            events: {
                click: onClick,
            },

        });
    }

    render() {
        // language=hbs
        return `
            <button type="button" class="send-button">
                <div class="send-img"></div>
            </button>
        `
    }
}