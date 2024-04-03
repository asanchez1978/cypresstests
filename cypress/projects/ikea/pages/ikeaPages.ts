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

    increaseIkeaQuestionsValue(question: string){
        return cy.xpath(ikeaInsuranceProcess.ikeaIncreaseButton(question))
      }

    decreaseIkeaQuestionsValue(question: string){
        return cy.xpath(ikeaInsuranceProcess.ikeaDecreaseButton(question))
      }

    furnitureIkeaType(question: string){
        return cy.xpath(ikeaInsuranceProcess.ikeaFurnitureRadio(question))
      }

    configureQuestionsValues(defaultValue: number, valueToSet: number, stepValue:number ,questionTestId: string): void {
      cy.log("Default value:", defaultValue);
      cy.wait(1000);
      if (defaultValue < valueToSet) {
          while (defaultValue < valueToSet) {
              ikea_insurance.increaseIkeaQuestionsValue(questionTestId).click();
              defaultValue += stepValue;
              cy.log("Updated value after click:", defaultValue, "of value", valueToSet);
          }
      } else if (defaultValue > valueToSet) {
          while (defaultValue > valueToSet) {
              ikea_insurance.decreaseIkeaQuestionsValue(questionTestId).click();
              defaultValue -= stepValue;
              cy.log("Updated value after click:", defaultValue, "of value:", valueToSet);
          }
      }
  }

}

export const ikea_insurance = new ikeaInsurance()