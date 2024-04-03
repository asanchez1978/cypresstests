export const ikeaInsuranceProcess = {

        ikeaStartInsurance: '[data-testid="cta_screenhero"]',
        ikeaCookiesAccept: '[data-testid="consent-accept-all"]',
        ikeaCurrentRooms: '//*[@id="ROOMS"]',
        ikeaCurrentAdults: '//*[@id="ADULTS"]',
        ikeaCurrentChildren: '//*[@id="CHILDREN"]',
        ikeaSubmitButton: '[data-testid="submitButton"]',
        ikeaPostCodeInput: '//*[@id="CITY_CH"]',
        ikeaDateOfBirth: '//*[@id="DOB_HH_CH"]',
        ikeaOwnershipTittle:'[data-testid="Questions.questions.OWNERSHIP"]',
        ikeaChooseProgress:'[data-testid="JourneyProgress.steps.0.progress"]',

        ikeaQuestionTitle: (inputText: string) => `//*[@data-testid="Questions.title" and text()="${inputText}"]`,
        ikeaIncreaseButton: (question: string) => `//div[@data-testid="Questions.questions.${question}"]//button[@aria-label="numericField.increment"]`,
        ikeaDecreaseButton: (question: string) => `//div[@data-testid="Questions.questions.${question}"]//button[@aria-label="numericField.decrement"]`,
        ikeaFurnitureRadio: (furniture: string) => `//input[@id="${furniture}"]`,
        ikeaHouseOwnership: (ownership: string) => `[data-testid="radioInput.OWNERSHIP.${ownership}"]`,
        ikeaCityPostCodeOption: (option: string) => `//*[@id="downshift-0-item-${option}"]`
}