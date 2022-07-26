import Base from './_base.page.js'
import { Factory } from '../fixtures/factory' 
import { EL_Login } from './components/login.elements.js'

export class Login extends Base {
    static validar_texto_login(){
        super.validateElementText(EL_Login.TXT_LOGIN, 'Login with your Account')

    }
    static validar_pagina_login(){
        super.verifyIfElementExists(EL_Login.INP_USERNAME)
        super.verifyIfElementExists(EL_Login.INP_PASSWORD)

    }
    static validar_botao_login(){
    super.verifyIfElementExists(EL_Login.BTN_LOGIN)
    }

    static preencher_login_type(type) {
        let dados_login = Factory.login(type)
        cy.get(EL_Login.INP_USERNAME).type(dados_login.userName)
        cy.get(EL_Login.INP_PASSWORD).type(dados_login.password)
    }

    static clicar_Log_In(){
        super.clickOnElement(EL_Login.BTN_LOGIN)
    }

    static msg_error_login() {
        super.verifyIfElementExists(EL_Login.TXT_ERRO)
    }

    static msg_vazio_login() {
        super.verifyIfElementExists(EL_Login.TXT_VAZIO)
    }

    static logout(){
        super.clickOnElement(EL_Login.BTN_LOGOUT)
    }

}