import Block from '../../../utils/Block';
import {store} from "../../../utils/store";

export interface IMessageProps {
    content: any,
}

export default class Message extends Block {
    constructor({content}: IMessageProps) {
        function fnc() {
            return store.state.user.profile.id === content.userId;
        }

        super({
            content,
            style: fnc() && 'main-user'
        });
    }

    render() {
        // language=hbs
        return `
            <div class="others {{style}}">
                <p class="massage-text">
                    {{content.content}}
                </p>
            </div>
        `
    }
}