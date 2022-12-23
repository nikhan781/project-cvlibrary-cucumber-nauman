$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("jobsearchtest.feature");
formatter.feature({
  "line": 1,
  "name": "Job Search Test",
  "description": "As a user I should be able to search a job",
  "id": "job-search-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should be able to find jobs with different job titles successfully",
  "description": "",
  "id": "job-search-test;user-should-be-able-to-find-jobs-with-different-job-titles-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter job title \"\u003cJob Title\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter Location \"\u003cLocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select distance \"\u003cDistance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on \u0027More Search Options\u0027 Link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter salaryMin \"\u003cMinimum Salary\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter salaryMax \"\u003cMaximum Salary\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select salaryType \"\u003cSalary Type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select jobType \"\u003cJob Type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on \u0027Find\u0027 Jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should be able to find jobs with different job titles successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I verify the result \"\u003cResult\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "job-search-test;user-should-be-able-to-find-jobs-with-different-job-titles-successfully;",
  "rows": [
    {
      "cells": [
        "Job Title",
        "Location",
        "Distance",
        "Minimum Salary",
        "Maximum Salary",
        "Salary Type",
        "Job Type",
        "Result"
      ],
      "line": 18,
      "id": "job-search-test;user-should-be-able-to-find-jobs-with-different-job-titles-successfully;;1"
    },
    {
      "cells": [
        "Tester",
        "Harrow",
        "up to 5 miles",
        "30000",
        "500000",
        "Per annum",
        "Permanent",
        "Permanent Tester jobs in Harrow on the Hill"
      ],
      "line": 19,
      "id": "job-search-test;user-should-be-able-to-find-jobs-with-different-job-titles-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "User should be able to find jobs with different job titles successfully",
  "description": "",
  "id": "job-search-test;user-should-be-able-to-find-jobs-with-different-job-titles-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter job title \"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter Location \"Harrow\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select distance \"up to 5 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on \u0027More Search Options\u0027 Link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter salaryMin \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter salaryMax \"500000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select salaryType \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select jobType \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on \u0027Find\u0027 Jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should be able to find jobs with different job titles successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I verify the result \"Permanent Tester jobs in Harrow on the Hill\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 65970700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 42963500,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy17.sendKeys(Unknown Source)\r\n\tat uk.co.cvlibrary.utility.Utility.sendTextToElement(Utility.java:75)\r\n\tat uk.co.cvlibrary.pages.HomePage.enterJobTitle(HomePage.java:44)\r\n\tat uk.co.cvlibrary.cucumber.steps.JobSearchSteps.iEnterJobTitle(JobSearchSteps.java:18)\r\n\tat ✽.When I enter job title \"Tester\"(jobsearchtest.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 5 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionsLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMin(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "500000",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMax(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "JobSearchSteps.iShouldBeAbleToFindJobsWithDifferentJobTitlesSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Tester jobs in Harrow on the Hill",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iVerifyTheResult(String)"
});
formatter.result({
  "status": "skipped"
});
});