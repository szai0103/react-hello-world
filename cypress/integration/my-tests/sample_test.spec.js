describe('Home Page', () => {
    it('contains greeting message', () => {
        cy.visit('/');

        cy.get('.greeting').find('h1')
            .should(($h1) => {
                expect($h1).to.have.length(1);

                expect($h1).to.have.text('Hello, World!')
            });

    })


    it('contains app version number from package.json', () => {
        cy.visit('/');

        cy.get('.greeting').find('h3')
            .should(($h3) => {
                expect($h3).to.have.length(1);

                const env = !process.env.NODE_ENV ? 'test' : process.env.NODE_ENV;

                expect($h3).to.have
                    .text(`This application version number is: v ${require('../../../package').version} ${env}`)
            });

    })
});
