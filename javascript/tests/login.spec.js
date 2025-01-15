const { test, expect } = require('@playwright/test');
const { Login } = require('../models/login');
const { PaginaPrincipal } = require('../models/paginaPrincipal');

test.beforeEach(async ({ page }) => {
  const home = new PaginaPrincipal(page)
  await home.navigate()
  await home.clickLogin()
});

test.describe.parallel('Login', () => {
  test('sucesso', async ({ page }) => {
    const login = new Login(page);
    await login.loginValidation('testelogin123@gmail.com', 'TesteTestando123');
  });

  const invalidLogins = [
    { username: 'testelogin', password: 'TesteTestando123', description: 'usuário errado' },
    { username: 'testelogin123@gmail.com', password: '12345678', description: 'senha errada' },
    { username: 'testelogin123', password: '12345678', description: 'usuário e senha errados' },
  ];

  invalidLogins.forEach(({ username, password, description }) => {
    test(`falha: ${description}`, async ({ page }) => {
      const login = new Login(page);
      await login.wrongLogin(username, password);
    });
  });
});
