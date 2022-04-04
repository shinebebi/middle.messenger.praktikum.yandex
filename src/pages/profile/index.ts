import { renderDOM } from '../../../utils/renderDOM'
import ProfilePage from '../profile/profile'
import Info from "../../components/Info/info"
import {registerComponent} from '../../../utils/registerComponent'
document.addEventListener('DOMContentLoaded', () => {
    registerComponent(Info)
    const profilePage = new ProfilePage()
    renderDOM('#app', profilePage)
})