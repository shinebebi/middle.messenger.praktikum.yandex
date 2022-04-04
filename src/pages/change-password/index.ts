import { renderDOM } from '../../../utils/renderDOM'
import ChangePasswordPage from './change-password'
import ChangeInfo from '../../components/Change-info/change-info'
import Button from '../../components/Button/button'
import {registerComponent} from '../../../utils/registerComponent'
document.addEventListener('DOMContentLoaded', () => {
    registerComponent(ChangeInfo)
    registerComponent(Button)
    const changePasswordPage = new ChangePasswordPage()
    renderDOM('#app', changePasswordPage)
})