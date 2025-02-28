import { expect, test } from "@playwright/test";
import { credentials } from "../DadosPessoais/senhas.spec";

test('Validações de Cadastro/Edição/Remoção', async ({ page }) => {

    // Realizar login com usuario ADMIN
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(await page.title()).toBe('OrangeHRM');

    await page.locator('[placeholder="Username"]').fill(credentials.email);
    await page.locator('[placeholder="Password"]').fill(credentials.senha);

    await page.locator("//button[contains(.,'Login')]").click();

    //Cadastrar colaborador PIM
    await page.locator("//span[contains(.,'PIM')]").click();
    await page.locator("//button[contains(.,'Add')]").click();

    await page.pause();
    


});