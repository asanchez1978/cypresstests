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

    increaseIkeaQuestionsValue(question: string){
        return cy.xpath(ikeaInsuranceProcess.ikeaIncreaseButton(question))
    }

    decreaseIkeaQuestionsValue(question: string){
        return cy.xpath(ikeaInsuranceProcess.ikeaDecreaseButton(question))
    }

}

export const ikea_insurance = new ikeaInsurance()