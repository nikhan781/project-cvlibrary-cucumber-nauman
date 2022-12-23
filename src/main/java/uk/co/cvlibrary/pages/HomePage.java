package uk.co.cvlibrary.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import uk.co.cvlibrary.utility.Utility;

public class HomePage extends Utility {
    //Declaring WebElements Variable
    @CacheLookup
    @FindBy(xpath = "//input[@id='keywords']")
    WebElement jobTitleFiled;
    @CacheLookup
    @FindBy(xpath = "//input[@id='location']")
    WebElement locationField;
    @CacheLookup
    @FindBy(xpath = "(//select[@name='distance'])[2]")
    WebElement distanceDropDown;
    @CacheLookup
    @FindBy(xpath = "//button[@id='toggle-hp-search']")
    WebElement moreSearchOptionsLink;
    @CacheLookup
    @FindBy(id = "salarymin")
    WebElement salaryMin;
    @CacheLookup
    @FindBy(id = "salarymax")
    WebElement salaryMax;
    @CacheLookup
    @FindBy(xpath = "//select[@id='salarytype']")
    WebElement salaryTypeDropDown;
    @CacheLookup
    @FindBy(xpath = "//select[@id='tempperm']")
    WebElement jobTypeDropDown;
    @CacheLookup
    @FindBy(xpath = "//input[@id='hp-search-btn']")
    WebElement findJobsBtn;

    @CacheLookup
    @FindBy(xpath = "(//span[@class='mat-button-wrapper'])[3]")
    WebElement acceptAll;

    //This method will send text to WebElement
    public void enterJobTitle(String jobtitle) throws InterruptedException {
        Thread.sleep(1500);
        sendTextToElement(jobTitleFiled, jobtitle);
    }

    //This method will send text to WebElement
    public void enterLocation(String location) {
        sendTextToElement(locationField, location);

    }

    //This method will select a WebElement
    public void selectDistance(String distance) throws InterruptedException {
        selectByVisibleTextFromDropDown(distanceDropDown, distance);
        Thread.sleep(1500);

    }

    //This method will send text to WebElement
    public void enterMinSalary(String minSalary) {
        sendTextToElement(salaryMin, minSalary);

    }

    //This method will send text to WebElement
    public void enterMaxSalary(String maxSalary) {
        sendTextToElement(salaryMax, maxSalary);

    }

    //This method will select a WebElement
    public void selectSalaryType(String sType) {
        selectByVisibleTextFromDropDown(salaryTypeDropDown, sType);

    }

    //This method will select a WebElement
    public void selectJobType(String jobType) {
        selectByVisibleTextFromDropDown(jobTypeDropDown, jobType);

    }

    //This method will click on WebElement
    public void clickOnMoreSearchOptionLink() {
        clickOnElement(moreSearchOptionsLink);

    }

    //This method will click on WebElement
    public void clickOnFindJobsButton() {
        clickOnElement(findJobsBtn);

    }

    public void clickOnAcceptAll() throws InterruptedException {
        Thread.sleep(1000);
        driver.switchTo().frame(4);
        clickOnElement(acceptAll);

    }

}
