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

    it("Update and view client", async ()=>{
        await LoginPage.toHaveUrl();
        await ClientsPage.clickOnUser();
        await ClientsPage.updateName("AidarDakansa");
        await ClientsPage.clickSave();
    })
})