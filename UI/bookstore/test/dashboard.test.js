const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");
async function example() {
 
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000/Dashboard");
  await driver.findElement(By.id("addtobag")).click();
  await driver.sleep(1000);
  await driver.findElement(By.id("cart")).click();
  await driver.sleep(1000);
  await driver.findElement(By.id("book")).click();
  await driver.sleep(1000);
}
example();