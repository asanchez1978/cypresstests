import { ikea_insurance } from 'cypress/projects/ikea/pages/ikeaPages';
/// <reference types="Cypress" />

const numberOfRooms = 6;
const moreThan14 = 3;
const youngerThan14 = 1;
const furnitureType = "2";
const ownerType = "1";
const cityOrPostcode = "Neuchâtel";
const cityOrPostcodeOption = "0";
const dateOfBirth= "10101978"

let defaultGetValue: number;

describe("Ikea", () => {

    beforeEach(() => {
        cy.visit(Cypress.env('IKEA_URL'));
        cy.title().should("eq", "Household insurance developed for IKEA by iptiQ");
      })

    it("Ikea insurance process", () => {

        ikea_insurance.ikeaStartButton.should("be.visible").click();
        ikea_insurance.ikeaCookies.should("be.visible").click();
        ikea_insurance.ikeaQuestionTitle("How many rooms does your home have?").should("be.visible");

        // Set the numbers of rooms
        ikea_insurance.ikeaRoomsValues.invoke('val').then(val => {
            defaultGetValue = parseFloat(String(val));
            ikea_insurance.configureQuestionsValues(defaultGetValue,numberOfRooms,0.5,"ROOMS")
        });

        ikea_insurance.ikeaSubmitButton.click();

        // Set the Adults
        ikea_insurance.ikeaQuestionTitle("How many people live in your home?").should("be.visible");
        ikea_insurance.ikeaAdultsValues.invoke('val').then(val => {
            defaultGetValue = parseFloat(String(val));
            ikea_insurance.configureQuestionsValues(defaultGetValue,moreThan14,1,"ADULTS")
        });

        // Set the Children
        ikea_insurance.ikeaChildrenValues.invoke('val').then(val => {
            defaultGetValue = parseFloat(String(val));
            ikea_insurance.configureQuestionsValues(defaultGetValue,youngerThan14,1,"CHILDREN")
        });

        ikea_insurance.ikeaSubmitButton.click();

        // Set the Furniture type
        ikea_insurance.ikeaQuestionTitle("How is your home furnished?").should("be.visible");
        ikea_insurance.furnitureIkeaType(furnitureType).click({force: true});

        ikea_insurance.ikeaSubmitButton.click();

        // Set the ownership type
        ikea_insurance.ikeaTypeOfOwnershipTittle.should("be.visible");
        ikea_insurance.ownershipIkeaType(ownerType).click({force: true});

        ikea_insurance.ikeaSubmitButton.click();

        // Set the city/postal code
        ikea_insurance.ikeaQuestionTitle("Where is your main residence?").should("be.visible");
        ikea_insurance.ikeaPostalCodeCity.click().type(cityOrPostcode);
        ikea_insurance.ikeaPostalCodeCityOption(cityOrPostcodeOption).click();

        ikea_insurance.ikeaSubmitButton.click();

        // Set the date of birth
        ikea_insurance.ikeaQuestionTitle("What is your date of birth?").should("be.visible");
        ikea_insurance.ikeaDOB.click().type(dateOfBirth);

        ikea_insurance.ikeaSubmitButton.click();

        // Check the final process

        ikea_insurance.ikeaFirstSteepProcess.should("be.visible");


    });
})