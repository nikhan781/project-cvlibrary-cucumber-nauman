package uk.co.cvlibrary.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import uk.co.cvlibrary.utility.Utility;

public class ResultPage extends Utility {
    //Declaring WebElements Variable
    @CacheLookup
    @FindBy(xpath = "//h1[@class='search-header__title']")
    WebElement resultText;

    //This method will verify the result text
    public String verifyTheResults() {
        String result = getTextFromElement(resultText);
        return result;
    }

}
