class ClientsPage {
    #region
    get addUserButton () {return $('button.clients-add-user-dialog')}
    get userCreateForm () { return $('div.add-user-modal form') }
    get surnameField () { return $('input[formcontrolname="userSurname"]')}
    get firstnameField () { return $('input[formcontrolname="userName"]')}
    get maleGenderOption () { return $('mat-radio-group mat-radio-button:nth-child(1) div.mat-radio-label-content') }
    get emailField () { return  $('input[formcontrolname="email"]')}
    get phoneNumberField () { return $('input[formcontrolname="phone"]')}
    get datebirthField () { return $('input[formcontrolname="birthday"]')}
    get user () { return $('//span[contains(text(), "Asakeev Aidar")]')};
    get nameField () { return $('input[placeholder="Имя"]')};
    get saveButton () { return $('button[name="save"]')}
    #endregion

    async open(){
        await browser.url('http://167.114.201.175:5000/clients');
        await browser.pause(5000);
    }

    async fillSurname(surname){
        await this.surnameField.setValue(surname);
    }

    async fillFirstName(firstname){
        await this.firstnameField.setValue(firstname);
    }

    async chooseGenderOption(){
        await this.maleGenderOption.click();
    }

    async fillEmail(email){
        await this.emailField.setValue(email);
    }

    async fillPhonenumber(number){
        await this.phoneNumberField.setValue(number);
    }

    async fillDatebirth(datebirth){
        await this.datebirthField.setValue(datebirth);
    }

    async updateName(newName){
        await this.nameField.setValue(newName);
    }

    async clickOnUser(){
        await this.user.click();
    }

    async clickSave(){
        await this.saveButton.click();
        await browser.pause(5000);
    }

    async clickCreateuser(){
        await this.addUserButton.click();
        await browser.pause(5000);
    }
    async toExist(){
        await expect(this.userCreateForm).toExist();
    }
}

module.exports = new ClientsPage();