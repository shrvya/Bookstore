const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");
async function example() {
  var email = "Shrishetty@gmail.com";
  var password = "Shri489%$555";
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000/Login");
  await driver.findElement(By.name("email")).sendKeys(email, Key.RETURN);
  await driver.sleep(1000);
  await driver.findElement(By.name("password")).sendKeys(password, Key.RETURN);
  await driver.sleep(1000);
  await driver.findElement(By.id("submit")).click();
  await driver.sleep(1000);
  
  
 
}
example();