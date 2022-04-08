import Block from '../utils/Block'
import { renderDOM } from '../utils/renderDOM'
import Button from "./components/Button/button"
import {registerComponent} from '../utils/registerComponent'
export default class Main extends Block {
    constructor() {
        super();
    }
    render() {
        //language=hbs
        return `
            <section>
                {{{Button text="Sign In"}}}
            </section>
        `
    }
}
document.addEventListener('DOMContentLoaded', () => {
    registerComponent(Button)
    const main = new Main()
    // @ts-ignore
    renderDOM('#app', main)
})