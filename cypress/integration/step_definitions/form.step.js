/// <reference types="cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { Form } from '../../pages/form.page';
import { General } from '../../pages/general.page';
import { Login } from '../../pages/login.page';

// Validar página Form
When(`acessar a página Form`, () => {
	return Form.acessar_pagina_2()
});

Then(`deverá apresentar o titulo Form Itens`, () => {
	return Form.validar_titulo()
});

And(`deverá possuir os elementos: Radio Button: Horizontal, Vertical e In Line e campos: Input, Select, TreeSelect, Cascader, Date Picker.`, () => {
	return Form.validar_campos()
});

And(`deverá possuir a opção Slider with InputNumber para arrastar ou inserir um numeral no campo abaixo dele.`, () => {
	return Form.validar_slider()
});

And(`deverá possuir um Switch para habilitar ou desabilitar`, () => {
	return Form.validar_switch()
});

And(`deverá possuir um TextArea editável.`, () => {
	return Form.validar_TextArea()
});

And(`deverá possuir o botão Register.`, () => {
	return Form.clicar_registrar()
});

//Form - Registro válido - 1
When(`selecionar a opção Horizontal do Radio Button`, () => {
	return Form.clicar_horizontal()
});

And(`preencher o campo Input com {string}`, (txt) => {
	return Form.preencher_input(txt)
});

And(`selecionar a opção {string} do Select`, () => {
	return Form.selecionar_select()
});

And(`selecionar uma opção do TreeSelect`, () => {
	return Form.selecionar_treeSelect()
});

And(`selecionar uma opção do Cascader`, () => {
	return Form.slecionar_cascader()
});

And(`selecionar uma data válida`, () => {
	return Form.selecionar_data_hoje()
});

And(`deslizar a opção Slider with InputNumber`, () => {
	return Form.slider()
});

And(`clicar na opção Switch`, () => {
	return Form.clicar_switch()
});

And(`preencher com um {string} o TextArea`, (txt) => {
	return Form.preencher_TextArea(txt)
});

// And(`clicar no botão Register`, () => {
// 	return true;
// });

// Then(`o registro deve ser efetuado com sucesso.`, () => {
// 	return true;
// });

//Form - Registro válido - 2

Given(`que esteja na página Form`, () => {
	return General.acessar_site(),
    Form.acessar_pagina_2()
});

When(`selecionar a opção Vertical do Radio Button`, () => {
	return Form.clicar_vertical()
});

And(`preencher o campo Input com {string}`, (txt) => {
	return Form.preencher_input(txt)
});

And(`digitar o número {int} no campo Slider with InputNumber`, (int) => {
	return Form.inserir_num_slider(int)
});

And(`selecionar uma data válida`, () => {
	return Form.selecionar_data_hoje()
});

And(`preencher com um {string} o TextArea`, (txt) => {
	return Form.preencher_TextArea(txt)
});

And(`selecionar uma opção do TreeSelect`, () => {
	return Form.selecionar_treeSelect()
});

And(`selecionar uma opção do Cascader`, () => {
	return Form.slecionar_cascader()
});

And(`selecionar a opção {string} do Select`, () => {
	return Form.selecionar_select()
});

// And(`clicar no botão Register`, () => {
// 	return true;
// });

// Then(`o registro deve ser efetuado com sucesso.`, () => {
// 	return true;
// });

// Form - Registro válido - 3

Given(`que esteja na página Form`, () => {
	return General.acessar_site(),
    Form.acessar_pagina_2()
});

When(`selecionar a opção In Line do Radio Button`, () => {
	return Form.clicar_inline()
});

And(`preencher o campo Input com {string}`, (txt) => {
	return Form.preencher_input(txt)
});

And(`selecionar a opção {string} do Select`, () => {
	return Form.selecionar_select()
});

And(`selecionar uma opção do TreeSelect`, () => {
	return Form.selecionar_treeSelect()
});

And(`selecionar uma opção do Cascader`, () => {
	return Form.slecionar_cascader()
});

And(`selecionar uma data válida`, () => {
	return Form.selecionar_data_hoje()
});

And(`preencher com um {string} o TextArea`, (txt) => {
	return Form.preencher_TextArea(txt)
});

// And(`clicar no botão Register`, () => {
// 	return true;
// });

// Then(`o registro deve ser efetuado com sucesso.`, () => {
// 	return true;
// });