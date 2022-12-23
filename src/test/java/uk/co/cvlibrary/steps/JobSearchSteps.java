package uk.co.cvlibrary.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import uk.co.cvlibrary.pages.HomePage;
import uk.co.cvlibrary.pages.ResultPage;

public class JobSearchSteps {

    @Given("^I am on home page$")
    public void iAmOnHomePage() throws InterruptedException {
        new HomePage().clickOnAcceptAll();
    }

    @When("^I enter job title \"([^\"]*)\"$")
    public void iEnterJobTitle(String jobTitle) throws InterruptedException {
        new HomePage().enterJobTitle(jobTitle);

    }

    @And("^I enter Location \"([^\"]*)\"$")
    public void iEnterLocation(String location) {
        new HomePage().enterLocation(location);
    }

    @And("^I select distance \"([^\"]*)\"$")
    public void iSelectDistance(String distance) throws InterruptedException {
        new HomePage().selectDistance(distance);
    }

    @And("^I click on 'More Search Options' Link$")
    public void iClickOnMoreSearchOptionsLink() {
        new HomePage().clickOnMoreSearchOptionLink();
    }

    @And("^I enter salaryMin \"([^\"]*)\"$")
    public void iEnterSalaryMin(String salaryMin) {
        new HomePage().enterMinSalary(salaryMin);

    }

    @And("^I enter salaryMax \"([^\"]*)\"$")
    public void iEnterSalaryMax(String salaryMax) {
        new HomePage().enterMaxSalary(salaryMax);
    }

    @And("^I select salaryType \"([^\"]*)\"$")
    public void iSelectSalaryType(String salaryType) {
        new HomePage().selectSalaryType(salaryType);
    }

    @And("^I select jobType \"([^\"]*)\"$")
    public void iSelectJobType(String jobType) {
        new HomePage().selectJobType(jobType);
    }

    @And("^I click on 'Find' Jobs button$")
    public void iClickOnFindJobsButton() {
        new HomePage().clickOnFindJobsButton();
    }

    @Then("^I should be able to find jobs with different job titles successfully$")
    public void iShouldBeAbleToFindJobsWithDifferentJobTitlesSuccessfully() {
    }

    @And("^I verify the result \"([^\"]*)\"$")
    public void iVerifyTheResult(String result) {
        Assert.assertTrue(new ResultPage().verifyTheResults().contains(result));
    }
}
