import { expect, test } from "@playwright/test";
import { credentials } from "../DadosPessoais/senhas.spec";

test('Validações de Cadastro/Edição/Remoção', async ({ page }) => {

    // Realizar login com usuario ADMIN
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(await page.title()).toBe('OrangeHRM');

    await page.locator('[placeholder="Username"]').fill(credentials.email);
    await page.locator('[placeholder="Password"]').fill(credentials.senha);

    await page.locator("//button[contains(.,'Login')]").click();

    // Cadastrar colaborador PIM
    await page.locator("//span[contains(.,'PIM')]").click();
    await page.locator("//button[contains(.,'Add')]").click();

    
    // Registrando User
    await page.locator('[placeholder="First Name"]').fill('Trevor');
    await page.locator('[placeholder="Last Name"]').fill('Santos');

    await page.locator("//span[contains(@class, 'oxd-switch-input')]").click();

    await page.locator("(//div//input)[8]").fill('Trevor');

    await page.locator("(//input[@type='password'])[1]").fill('123Teste');
    await page.locator("(//input[@type='password'])[2]").fill('123Teste');

    await page.locator("//button[contains(@class, 'oxd-button--secondary')]").click();

    await expect(page.locator('.oxd-text--toast-title')).toHaveText('Success');

    await page.pause();


});