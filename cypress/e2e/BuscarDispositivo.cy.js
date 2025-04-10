/// <reference types="cypress" />

describe('Buscar dispositivo', () => {

    it('Buscar dispositivo', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/7',
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.id).to.equal("7");
        });
    });

    it('Buscar dispositivo inexistente', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/ASUHSSHASHAHHJSJCNUDN',
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.equal(404);
            expect(response.body.error).to.equal("Oject with id=ASUHSSHASHAHHJSJCNUDN was not found.");
        });
    });

    it('Cadastrar dispositivo', () => {
        cy.request({
            method: 'POST',
            url: 'https://api.restful-api.dev/objects',
            failOnStatusCode: false,
            body: {
                "name": "Apple iPhone 11",
                "data": {
                    "year": 2019,
                    "price": 699,
                    "CPU model": "A13 Bionic",
                    "Hard disk size": "128GB"
                }
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.name).to.equal("Apple iPhone 11");
        });
    });
});