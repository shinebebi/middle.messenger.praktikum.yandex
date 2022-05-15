import Block from '../../../utils/Block';

interface ISendButtonProps {
    onClick?: () => void;
    goToProfile?: string;
}

export default class SendButton extends Block {
    constructor(props: ISendButtonProps) {
        const {
            onClick, goToProfile
        } = props;

        super({
            goToProfile,
            events: {
                click: onClick,
            },

        });
    }

    render() {
        // language=hbs
        return `
            <button type="button" class="send-button {{goToProfile}}">
                <div class="send-img"></div>
            </button>
        `
    }
}