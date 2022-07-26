import Base from './_base.page.js'

export class General extends Base {

    static acessar_site() {
        cy.reload(true)
        cy.visit('/')
    }
}