const LoginPage = require( "../pageobjects/login.page");
const ClientsPage = require("../pageobjects/client.page");

describe("Client Suit", ()=>{
    beforeEach( async() => {
        await LoginPage.open();
        await LoginPage.login('Admin', 'Admin@Navi');
    })

    afterEach( async()=>{
        await browser.reloadSession();
    })

    it("Create client", async ()=>{
        await LoginPage.toHaveUrl();
        await ClientsPage.clickCreateuser();
        await expect(ClientsPage.userCreateForm).toExist();
        await ClientsPage.fillSurname('Asakeev');
        await ClientsPage.fillFirstName('Aidar');
        await ClientsPage.chooseGenderOption();
        await ClientsPage.fillEmail('aidar@mail.ru');
        await ClientsPage.fillPhonenumber('996707910434');
        await ClientsPage.fillDatebirth('02/12/2000');
        await ClientsPage.clickSave();
        await browser.acceptAlert();
        await browser.pause(5000);
        await LoginPage.toHaveUrl();
    })
})