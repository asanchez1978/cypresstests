export const ikeaInsuranceProcess = {

        ikeaStartInsurance: '[data-testid="cta_screenhero"]',
        ikeaCookiesAccept: '[data-testid="consent-accept-all"]',
        ikeaCurrentRooms: '//*[@id="ROOMS"]',
        //ikeaIncreaseButton: '//div[@data-testid="Questions.questions.ROOMS"]//button[@aria-label="numericField.increment"]',
        //ikeaDecreaseButton: '//div[@data-testid="Questions.questions.ROOMS"]//button[@aria-label="numericField.decrement"]',

        ikeaQuestionTitle: (inputText: string) => `//*[@data-testid="Questions.title" and text()="${inputText}"]`,
        ikeaIncreaseButton: (question: string) => `//div[@data-testid="Questions.questions.${question}"]//button[@aria-label="numericField.increment"]`,
        ikeaDecreaseButton: (question: string) => `//div[@data-testid="Questions.questions.${question}"]//button[@aria-label="numericField.decrement"]`,

}