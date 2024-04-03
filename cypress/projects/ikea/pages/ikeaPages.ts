import { ikeaInsuranceProcess } from "../attributes/ikeaAttibutes"
import 'cypress-xpath';

class ikeaInsurance {

    get ikeaStartButton() {
        return cy.get(ikeaInsuranceProcess.ikeaStartInsurance)
      }
    get ikeaCookies() {
        return cy.get(ikeaInsuranceProcess.ikeaCookiesAccept)
      }

    ikeaQuestionTitle(inputText: string) {
        return cy.xpath(ikeaInsuranceProcess.ikeaQuestionTitle(inputText));
      }

    get ikeaTypeOfOwnershipTittle(){
      return cy.get(ikeaInsuranceProcess.ikeaOwnershipTittle);
    }

    get ikeaRoomsValues(){
        return cy.xpath(ikeaInsuranceProcess.ikeaCurrentRooms)
      }

    get ikeaAdultsValues(){
        return cy.xpath(ikeaInsuranceProcess.ikeaCurrentAdults)
      }

    get ikeaChildrenValues(){
        return cy.xpath(ikeaInsuranceProcess.ikeaCurrentChildren)
      }

    get ikeaSubmitButton(){
      return cy.get(ikeaInsuranceProcess.ikeaSubmitButton)
      }

    get ikeaPostalCodeCity(){
      return cy.xpath(ikeaInsuranceProcess.ikeaPostCodeInput)
    }

    get ikeaDOB(){
      return cy.xpath(ikeaInsuranceProcess.ikeaDateOfBirth)
    }

    get ikeaFirstSteepProcess(){
      return cy.get(ikeaInsuranceProcess.ikeaChooseProgress)
    }

    increaseIkeaQuestionsValue(question: string){
        return cy.xpath(ikeaInsuranceProcess.ikeaIncreaseButton(question))
      }

    decreaseIkeaQuestionsValue(question: string){
        return cy.xpath(ikeaInsuranceProcess.ikeaDecreaseButton(question))
      }

    furnitureIkeaType(furniture: string){
        return cy.xpath(ikeaInsuranceProcess.ikeaFurnitureRadio(furniture))
      }

    ownershipIkeaType(ownership: string){
        return cy.get(ikeaInsuranceProcess.ikeaHouseOwnership(ownership))
      }

    ikeaPostalCodeCityOption(option: string){
      return cy.xpath(ikeaInsuranceProcess.ikeaCityPostCodeOption(option))
    }

    configureQuestionsValues(defaultValue: number, valueToSet: number, stepValue:number ,questionTestId: string): void {
      cy.log("Default value:", defaultValue);
      cy.wait(1000);
      if (defaultValue < valueToSet) {
          while (defaultValue < valueToSet) {
              ikea_insurance.increaseIkeaQuestionsValue(questionTestId).click();
              defaultValue += stepValue;
              cy.log("Updated value after click:", defaultValue, "of value", valueToSet);
              cy.wait(500);
          }
      } else if (defaultValue > valueToSet) {
          while (defaultValue > valueToSet) {
              ikea_insurance.decreaseIkeaQuestionsValue(questionTestId).click();
              defaultValue -= stepValue;
              cy.log("Updated value after click:", defaultValue, "of value:", valueToSet);
              cy.wait(500);
          }
      }
  }

}

export const ikea_insurance = new ikeaInsurance()