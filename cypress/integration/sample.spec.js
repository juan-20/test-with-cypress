
import Chance from 'chance';
const chance = new Chance();

describe('Firestarter', () => {

    const email = chance.email();
    const pass = '12345678';
    const name = 'juan'
    const CPF = '34580-5'

    beforeEach(() => {
        cy.visit('http://speckdougdev.mybluemix.net');
    })

    it('Tem titulo', () => {
        cy.contains('Login')
        cy.contains('Cadastre-se')
    })
    it('Click login', () => {
        cy.get('.btn-next').click();
    })

    it('Form', () => {
        // tenta logar e da erro
        cy.get('input[type=text]').type(email);
        cy.get('input[type=password]').type(pass);
        cy.get('.btn-next').click();
        // clica em criar conta
        cy.contains('Cadastre-se').click();
        // confere a url
        cy.url().should('include', 'signup');
        cy.contains('Email').type(email);
        cy.contains('Nome Completo').type(name);
        cy.get('input[type=password]').type(pass);
        cy.contains('Criar minha conta Speck').click();

        cy.url().should('include', 'signin');
        cy.get('input[type=text]').type(email);
        cy.get('input[type=password]').type(pass);
        cy.get('.btn-next').click();
        //volta para a home

        cy.url().should('include', 'personal');
        // cy.get('#f90861b7-45bc-4dfc-88b9-6c7428352c92label').click();
        // cy.contains('Masculino').click();
        // cy.contains('CPF').click({ force: true }).type(CPF, { force: true });



    })





})