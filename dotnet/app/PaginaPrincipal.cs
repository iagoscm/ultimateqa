namespace UltimateQA.Models
{
    using Microsoft.Playwright;
    using System.Threading.Tasks;

    public class PaginaPrincipal
    {
        private readonly IPage _page;

        public PaginaPrincipal(IPage page)
        {
            _page = page;
        }

        public async Task NavigateAsync()
        {
            await _page.GotoAsync("https://ultimateqa.com/automation");
        }

        public async Task ClickLoginAsync()
        {
            var loginLink = _page.GetByRole(AriaRole.Link, new() { Name = "Login automation" });
            await loginLink.ClickAsync();
            await _page.WaitForURLAsync("https://courses.ultimateqa.com/users/sign_in", new() { Timeout = 15000 });
        }
    }
}