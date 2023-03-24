class CompanyPage {
    #region
    get companies() { return $('a[href="/companies"]')};
    get company() { return $('//span[contains(text(), "BirKompania")]')};
    get nameField() {return $('textarea[placeholder="Название компании"]')};
    get saveButton() {return $('button[name="save"]')};
    get sureButton() { return $('button.modal-btn-ok')};
    get saveButton () { return $('button[name="save"]')}
    #endregion

    async switchToCompanies(){
        await this.companies.click();
        await browser.pause(2000);
    }

    async clickCompany(){
        await this.company.click();
        await browser.pause(2000);
    }

    async updateName(newName){
        await this.nameField.setValue(newName);
    }

    async clickSave(){
        await this.saveButton.click();
    }

    async clickSure(){
        await this.sureButton.click();
        await browser.pause(5000);
    }
}

module.exports = new CompanyPage();