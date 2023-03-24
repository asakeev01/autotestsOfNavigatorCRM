const LoginPage = require( "../pageobjects/login.page");
const CompanyPage = require("../pageobjects/company.page");

describe("Company Suit", ()=>{
    beforeEach( async() => {
        await LoginPage.open();
        await LoginPage.login('Admin', 'Admin@Navi');
    })

    afterEach( async()=>{
        await browser.reloadSession();
    })

    it("Update company", async ()=>{
        await LoginPage.toHaveUrl();
        await CompanyPage.switchToCompanies();
        await expect(browser).toHaveUrlContaining('companies');
        await expect(ClientsPage.userCreateForm).toExist();
        await CompanyPage.clickCompany();
        await CompanyPage.updateName("BirComapanias");
        await CompanyPage.clickSave();
        await CompanyPage.clickSure();
    })
})