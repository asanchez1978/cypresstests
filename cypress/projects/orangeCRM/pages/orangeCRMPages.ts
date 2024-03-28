import { orangeCRMDashboard, orangeCRMLogin } from "../attributes/orangeCRMAttributes"
import 'cypress-xpath';

class orangeCRM {

    get companyLogo() {
        return cy.xpath(orangeCRMLogin.orangeCRMlogo)
      }

    get companyUsername() {
        return cy.xpath(orangeCRMLogin.orangeCRMusername)
      }

    get companyPassword() {
        return cy.xpath(orangeCRMLogin.orangeCRMpassword)
      }

    get companyLoginButton() {
        return cy.xpath(orangeCRMLogin.orangeCRMloginButton)
      }

    get companyLoginIncorrectPassword(){
        return cy.xpath(orangeCRMLogin.orangeCRMbadLoginMessage)
    }

    companyMainDashboard(option: string) {
        return cy.xpath(orangeCRMDashboard.orangeCRMMenu(option))
    }

    get companyLoginResetPassword(){
      return cy.xpath(orangeCRMLogin.orangeCRMresetPassword)
    }

    get companyLoginSubmitResetPassword(){
      return cy.xpath(orangeCRMLogin.orangeCRMresetSubmitPassword)
    }

    get companyLoginSuccessResetPassword(){
      return cy.xpath(orangeCRMLogin.orangeCRMsuccessResetMessage)
    }

}

export const orange_crm = new orangeCRM()