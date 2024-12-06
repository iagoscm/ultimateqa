namespace UltimateQA.Models
{
    using Microsoft.Playwright;
    using System.Threading.Tasks;

    public class Login
    {
        private readonly IPage _page;
        private readonly ILocator _username;
        private readonly ILocator _password;
        private readonly ILocator _enter;
        private readonly ILocator _errorMessage;
        private readonly ILocator _shownName;

        public Login(IPage page)
        {
            _page = page;
            _username = page.Locator("[placeholder='Email']");
            _password = page.Locator("[placeholder='Password']");
            _enter = page.GetByRole(AriaRole.Button, new() { Name = "Sign in" });
            _errorMessage = page.Locator("#notice > ul > li");
            _shownName = page.GetByLabel("Toggle menu");
        }

        public async Task LoginAsync(string username, string password)
        {
            await _username.FillAsync(username);
            await _password.FillAsync(password);
            await _enter.ClickAsync();
        }

        public async Task LoginValidationAsync(string username, string password)
        {
            await LoginAsync(username, password);
            await _shownName.WaitForAsync(new() { Timeout = 15000 });
            var text = await _shownName.InnerTextAsync();
            Assert.AreEqual("Teste T  ", text);
        }

        public async Task WrongLoginAsync(string username, string password)
        {
            await LoginAsync(username, password);
            await _errorMessage.WaitForAsync(new() { Timeout = 15000 });
            var text = await _errorMessage.InnerTextAsync();
            Assert.AreEqual("Invalid email or password.", text);
        }
    }
}