import Base from './_base.page.js'
import { EL_Table } from './components/table.elements.js' 
import { EL_Home } from './components/home.elements.js' 

export class Table extends Base {

    static acessar_pagina_1(){
        super.clickOnElement(EL_Home.BTN_PAGE_1)
    }

    static validar_titulo(){
        cy.get(EL_Table.TXT_TITULO).should('have.text', 'Table');
    }

    static validar_colunas(){
        cy.get(EL_Table.COLUNA1).should('have.text', 'Name');
        cy.get(EL_Table.COLUNA2).should('have.text', 'Borrow');
        cy.get(EL_Table.COLUNA3).should('have.text', 'Repayment');
    }

    static validar_registros(){
        super.verifyIfElementExists(EL_Table.REGISTRO_10)
    }

    static ir_para_proxima_pagina(){
        super.clickOnElement(EL_Table.PAG_2)
    }

    static voltar_pagina(){
        super.clickOnElement(EL_Table.PAG_1)
    }

    static validar_registros_2(){
        super.verifyIfElementExists(EL_Table.REGISTRO_1)
    }

    static clicar_coluna_name(){
        super.clickOnElement(EL_Table.COLUNA1)
    }

    static validar_registro_ordenado(){
        cy.get(EL_Table.REGISTRO_10).should('not.exist');
    }
}