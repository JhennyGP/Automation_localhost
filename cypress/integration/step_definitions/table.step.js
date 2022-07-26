/// <reference types="cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { Table } from '../../pages/table.page'
import { General } from '../../pages/general.page'
import { Login } from '../../pages/login.page'

Given(`que esteja logado`, () => {
    General.acessar_site(), Login.preencher_login_type("valid"), Login.clicar_Log_In()
});

And(`que esteja na pagina 1`, () => {
    return Table.acessar_pagina_1()
});

//Validar página Table
Then(`deverá apresentar o titulo Table`, () => {
    return Table.validar_titulo()
});

And(`deverá estar visível as colunas {string}, {string} e {string}`, () => {
    return Table.validar_colunas()
});

//Validar paginação
Given(`que existam mais de 10 registros por página`, () => {
    return Table.validar_registros()
});

When(`clicar nas páginas seguintes`, () => {
    return Table.ir_para_proxima_pagina()
});

Then(`deverá visualizar mais registros.`, () => {
    return Table.validar_registros_2(), Table.voltar_pagina()
});

//Validar ordenação
When(`clicar na coluna Name`, () => {
    return Table.clicar_coluna_name()
});

Then(`os registros deverão ser ordenados pela ordem escolhida.`, () => {
    return Table.validar_registro_ordenado()
});
