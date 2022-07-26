/// <reference types="cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { General } from '../../pages/general.page'
import { Home } from '../../pages/home.page';
import { Login } from '../../pages/login.page'

beforeEach(() => {
	Given(`que esteja na página de Login`, () => {
		General.acessar_site()
	});
});

// Efetuar login válido
When(`inserir username e password do tipo {string}`, (type) => {
	return Login.preencher_login_type(type)
});

And(`clicar em Log In`, () => {
	return Login.clicar_Log_In()
});

Then(`o usuário deve ser conectado com sucesso`, () => {
	return Home.pagina_logada()
});

// Tentativas de login invalidos
When(`Inserir dados do tipo {string}`, (type) => {
	return Login.preencher_login_type(type)
});

And(`clicar em Log In`, () => {
	return Login.clicar_Log_In()
});

Then(`o usuário deve receber uma mensagem {string}`, (msg) => {
	return Login.msg_error_login(msg)
});


// tentativa campos vazios
When(`clicar em Log In`, () => {
	return Login.clicar_Log_In()
});

Then(`deve ser mostrado a mensagem {string}`, (msg) => {
	return Login.msg_vazio_login(msg)
});

Then(`deve ser mostrado a mensagem {string}`, (msg) => {
	return Login.msg_vazio_login(msg)
});

// Validar tela de Login
Then(`deverá apresentar o texto “Login with your Account”`, () => {
	return Login.validar_texto_login()
});

And(`deverá estar visível os campos Username e Password`, () => {
	return Login.validar_pagina_login()
});

Then(`deverá estar visível o botão Log In`, () => {
	return Login.validar_botao_login()
});

// logout
Given(`esteja na página principal conectado`, () => {
	return Home.pagina_logada()
});

When(`Clicar no botão Logout`, () => {
	return Home.clicar_btn_logout()
});

Then(`o usuário deve voltar para a página de login.`, () => {
	return Login.validar_pagina_login()
});