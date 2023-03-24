const Page = require('./page');

class LoginPage extends Page {

    get inputUsername () {
        return $('input[name="userName"]');
    }

    get inputPassword () {
        return $('input.password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        await browser.pause(5000);
    }

    async open () {
        await browser.url('http://167.114.201.175:5000/login');
        await browser.pause(10000);
    }

    async toHaveUrl(){
        await expect(browser).toHaveUrlContaining('clients');
    }
}

module.exports = new LoginPage();
