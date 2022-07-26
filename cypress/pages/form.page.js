import Base from './_base.page.js'
import { EL_Home } from './components/home.elements.js'
import { EL_Form } from './components/form.elements.js'

export class Form extends Base {

    static acessar_pagina_2() {
        super.clickOnElement(EL_Home.BTN_PAGE_2)
    }

    static validar_titulo() {
        cy.get(EL_Form.TITULO).should('have.text', 'Form Items');
    }

    static validar_campos() {
        cy.get(EL_Form.TXT_RADIO).should('have.text', 'Radio Button');
        cy.get(EL_Form.TXT_INPUT).should('have.text', 'Input');
        cy.get(EL_Form.TXT_SELECT).should('have.text', 'Select');
        cy.get(EL_Form.TXT_TREESELECT).should('have.text', 'TreeSelect');
        cy.get(EL_Form.TXT_CASCADER).should('have.text', 'Cascader');
        cy.get(EL_Form.TXT_DATE).should('have.text', 'DatePicker');
    }

    static validar_slider() {
        cy.get(EL_Form.TXT_SLIDER).should('have.text', 'Slider with InputNumber');
    }

    static validar_switch() {
        cy.get(EL_Form.TXT_SWITCH).should('have.text', 'Switch');
    }

    static validar_TextArea() {
        cy.get(EL_Form.TXT_AREA).should('have.text', 'TextArea');
    }

    static clicar_registrar() {
        super.clickOnElement(EL_Form.BTN_REGISTER)
    }

    static clicar_horizontal() {
        super.clickOnElement(EL_Form.BTN_HORIZONTAL)
    }
    static clicar_vertical() {
        super.clickOnElement(EL_Form.BTN_VERTICAL)
    }
    static clicar_inline() {
        super.clickOnElement(EL_Form.BTN_INLINE)
    }

    static preencher_input(txt) {
        super.typeValue(EL_Form.BTN_INPUT, txt)
    }

    static selecionar_select() {
        super.clickOnElement(EL_Form.BTN_SELECT)
        super.clickOnElement(EL_Form.BTN_OPTION_SELECT)
    }

    static selecionar_treeSelect() {
        super.clickOnElement(EL_Form.BTN_TREESELECT)
        super.clickOnElement(EL_Form.BTN_TREESELECT_OPEN)
        super.clickOnElement(EL_Form.BTN_TREESELECT_OPTIONS)
    }

    static slecionar_cascader() {
        super.clickOnElement(EL_Form.BTN_CASCADER)
        super.clickOnElement(EL_Form.BTN_CASCADER_OP1)
        super.clickOnElement(EL_Form.BTN_CASCADER_OP2)
    }

    static selecionar_data_hoje() {
        super.clickOnElement(EL_Form.BTN_DATE)
        super.clickOnElement(EL_Form.BTN_DATE_TODAY)
    }

    static clicar_switch() {
        super.clickOnElement(EL_Form.BTN_SWITCH)
    }

    static preencher_TextArea(txt) {
        super.typeValue(EL_Form.BTN_AREA, txt)
    }

    static slider() {
        it('deslizar a opção Slider with InputNumber', function () {
            const dataTransfer = new DataTransfer()
            cy.get('.ant-calendar-input-wrap').trigger('dragstart', { dataTransfer })
            // melhorar slider utilizando porcentagem do elemento
            cy.get('left: 80%;').trigger('drop', { dataTransfer })
        })
    }

    static inserir_num_slider(int){
        super.typeValue(EL_Form.INP_SLIDER, int)
    }

}