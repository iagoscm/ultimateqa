describe('Cadastro de Usuário', () => {
  beforeEach(() => {
    cy.visit('https://www.automationexercise.com/login');
    });

  it('Não deve permitir envio com campos obrigatórios vazios', () => {
    cy.get('#form > div > div > div:nth-child(3) > div > form > button').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Preencha este campo.')
    })
  });

  it('Preenchendo somente senha', () => {
    cy.get('#form > div > div > div:nth-child(3) > div > form > input[type=text]:nth-child(2)').type('User');
    cy.get('#form > div > div > div:nth-child(3) > div > form > input[type=email]:nth-child(3)').type('1234aaaaaaa5@gmail.com');
    cy.get('#form > div > div > div:nth-child(3) > div > form > button').click();
    cy.get('#password').type('1234');
    cy.get('#form > div > div > div > div > form > button').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Preencha este campo.')
    })
  });
});