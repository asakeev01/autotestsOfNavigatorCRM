describe("Client Suit", ()=> {
    it("Update client", async () => {
        await browser.url('http://167.114.201.175:5000/login');
        await browser.pause(5000);
        const loginField = await $('input[name="userName"]');
        await loginField.setValue("Admin");
        const passwordField = await $('input.password');
        await passwordField.setValue("Admin@Navi");
        await $('button[type="submit"]').click();
        await browser.pause(20000);
        await expect(browser).toHaveUrlContaining('clients');

        const user = await $('//span[contains(text(), "Asakeev Aidar")]');
        await user.click();
        await browser.pause(5000);

        const nameField = await $('input[placeholder="Имя"]');
        await nameField.setValue("AidarDakansa")

        const saveButton = await $('button[name="save"]');
        await saveButton.click();
        await browser.pause(5000);
    })
})
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
        await ClientsPage.clickOnUser();
        await ClientsPage.updateName("Aidar");
        await ClientsPage.clickSave();
    })
})