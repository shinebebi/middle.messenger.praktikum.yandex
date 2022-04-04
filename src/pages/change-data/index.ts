import { renderDOM } from '../../../utils/renderDOM'
import ChangeDataPage from './change-data'
import ChangeInfo from '../../components/Change-info/change-info'
import Button from '../../components/Button/button'
import {registerComponent} from '../../../utils/registerComponent'
document.addEventListener('DOMContentLoaded', () => {
    registerComponent(ChangeInfo)
    registerComponent(Button)
    const changeDataPage = new ChangeDataPage()
    renderDOM('#app', changeDataPage)
})