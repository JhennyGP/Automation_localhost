import Base from './_base.page.js'
import { EL_Home} from './components/home.elements.js'

export class Home extends Base {

    static pagina_logada() {
        super.verifyIfElementExists(EL_Home.BTN_PAGE_1)
        super.verifyIfElementExists(EL_Home.BTN_ICON_USER)
    }
    static clicar_btn_logout() {
        super.clickOnElement(EL_Home.BTN_ICON_USER)
        super.clickOnElement(EL_Home.BTN_LOGOUT)
    }
    
}