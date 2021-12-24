require("chromedriver");
const {By,Key,Builder} = require("selenium-webdriver");
async function example(){
    var searchString = "Automation testing with Selenium and JavaScript";

    //To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("chrome").build();

     //To fetch http://google.com from the browser with our code.
     await driver.get("http://localhost:3000/");
         
     //To send a search query by passing the value in searchString.
     await driver.findElement(By.name("firstname")).sendKeys("Shrivyy",Key.RETURN);
     await driver.findElement(By.name("lastname")).sendKeys("Shetty",Key.RETURN);
     await driver.findElement(By.name("username")).sendKeys("ShrivyaShetty@gmail.com",Key.RETURN);
     await driver.sleep(1000);
     
     await driver.findElement(By.name("password")).sendKeys("Shri7889$%%",Key.RETURN);
     await driver.sleep(1000);
     await driver.findElement(By.name("phoneNumber")).sendKeys("9874563210",Key.RETURN);
     await driver.sleep(1000);
     await driver.findElement(By.id("next-button")).click();
    await driver.sleep(1000);
     
     await driver.quit();

}
example()