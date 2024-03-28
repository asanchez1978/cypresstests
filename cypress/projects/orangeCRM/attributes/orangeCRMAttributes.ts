export const orangeCRMLogin = {
        orangeCRMlogo: '//img[@alt="company-branding"]',
        orangeCRMusername:'//input[@name="username"]',
        orangeCRMpassword: '//input[@name="password"]',
        orangeCRMloginButton: '//button[@type="submit"]',
        orangeCRMbadLoginMessage: '//p[@class="oxd-text oxd-text--p oxd-alert-content-text" and text()="Invalid credentials"]',
        orangeCRMresetPassword: '//p[@class="oxd-text oxd-text--p orangehrm-login-forgot-header"]',
        orangeCRMresetSubmitPassword: '//button[@type="submit" and text()=" Reset Password "]',
        orangeCRMsuccessResetMessage: '//h6[@class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]'
}

export const orangeCRMDashboard = {
        orangeCRMMenu: (optionMenu: string) => `//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"  and text()="${optionMenu}"]`
}