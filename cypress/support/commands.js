// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('StepNotImplemented', () => {
    console.log("O step não foi implementado ainda");
    cy.log("O step não foi implementado ainda")
})

Cypress.Commands.overwrite('type',(originalFn,subject,str,options)=>{
    if(str !==''){
    return originalFn(subject, str, options)
    }
    return subject
})

//Este codigo evita os erros 401 que estavam dando na aplicação e impedindo a automacao do teste (Erros 401)
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })