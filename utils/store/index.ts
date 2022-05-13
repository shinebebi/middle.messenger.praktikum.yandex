import user from './user';
import chats from "./chats";
import {Store} from './store';
import Block from '../Block';


export const store = new Store({
    user, chats
});


export function connect(stateToProps: (state: any) => any, Component: typeof Block) {
    return class WithStore extends Component {
        constructor(props: any) {
            super({...props, ...stateToProps(store.getState())});
        }

        componentDidMount(props: any) {
            super.componentDidMount(props);

            store.on('changed', () => {
                this.setProps({
                    ...this.props,
                    ...stateToProps(store.getState())
                });
            });
        }
    };
}