import { ikea_insurance } from 'cypress/projects/orangeCRM/pages/ikeaPages';
/// <reference types="Cypress" />

const numberOfRooms = 6;
let defaultRoomsValue: number;
describe("Ikea", () => {

    beforeEach(() => {
        cy.visit(Cypress.env('IKEA_URL'));
        cy.title().should("eq", "Household insurance developed for IKEA by iptiQ");
      })

    it("Ikea insurance process", () => {

        ikea_insurance.ikeaStartButton.should("be.visible").click();
        ikea_insurance.ikeaCookies.should("be.visible").click();
        ikea_insurance.ikeaQuestionTitle("How many rooms does your home have?").should("be.visible");
        ikea_insurance.ikeaRoomsValues.invoke('val').then(val => {
            defaultRoomsValue = parseFloat(String(val));
            cy.log("Initial rooms value:",defaultRoomsValue);
            cy.wait(1000);

            if (defaultRoomsValue < numberOfRooms) {
            while (defaultRoomsValue < numberOfRooms) {
                    ikea_insurance.increaseIkeaQuestionsValue("ROOMS").click();
                    defaultRoomsValue += 0.5;
                    cy.log("Updated value after click:",defaultRoomsValue,"of number rooms:",numberOfRooms);
                }
            } else if (defaultRoomsValue > numberOfRooms) {
            while (defaultRoomsValue > numberOfRooms) {
                    ikea_insurance.decreaseIkeaQuestionsValue("ROOMS").click();
                    defaultRoomsValue -= 0.5;
                    cy.log("Updated value after click:",defaultRoomsValue,"of number rooms:",numberOfRooms);
            }
        }
    });

    });
})