namespace UltimateQA.Tests
{

    using Microsoft.Playwright;
    using Microsoft.VisualStudio.TestTools.UnitTesting;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using UltimateQA.Models;

    [TestClass]
    public class LoginTests
    {
        private IPlaywright _playwright;
        private IBrowser _browser;

        [TestInitialize]
        public async Task Setup()
        {
            _playwright = await Playwright.CreateAsync();
            _browser = await _playwright.Chromium.LaunchAsync(new BrowserTypeLaunchOptions { Headless = true });
        }

        [TestCleanup]
        public async Task Cleanup()
        {
            await _browser.DisposeAsync();
            _playwright.Dispose();
        }

        [TestMethod]
        public async Task Login_Success()
        {
            var page = await _browser.NewPageAsync();
            var home = new PaginaPrincipal(page);
            await home.NavigateAsync();
            await home.ClickLoginAsync();

            var login = new Login(page);
            await login.LoginValidationAsync("testelogin123@gmail.com", "TesteTestando123");
        }

        [DataTestMethod]
        [DataRow("testelogin", "TesteTestando123", "usuário errado")]
        [DataRow("testelogin123@gmail.com", "12345678", "senha errada")]
        [DataRow("testelogin123", "12345678", "usuário e senha errados")]
        public async Task Login_Failure(string username, string password, string description)
        {
            var page = await _browser.NewPageAsync();
            var home = new PaginaPrincipal(page);
            await home.NavigateAsync();
            await home.ClickLoginAsync();

            var login = new Login(page);
            await login.WrongLoginAsync(username, password);
        }
    }

}