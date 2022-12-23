Feature: Job Search Test
  As a user I should be able to search a job

  @sanity @regression
  Scenario Outline: User should be able to find jobs with different job titles successfully
    Given I am on home page
    When I enter job title "<Job Title>"
    And I enter Location "<Location>"
    And I select distance "<Distance>"
    And I click on 'More Search Options' Link
    And I enter salaryMin "<Minimum Salary>"
    And I enter salaryMax "<Maximum Salary>"
    And I select salaryType "<Salary Type>"
    And I select jobType "<Job Type>"
    And I click on 'Find' Jobs button
    Then I should be able to find jobs with different job titles successfully
    And I verify the result "<Result>"
    Examples:
      | Job Title           | Location   | Distance        | Minimum Salary | Maximum Salary | Salary Type | Job Type       | Result                                           |
      | Tester              | Harrow     | up to 5 miles   | 30000          | 500000         | Per annum   | Permanent      | Permanent Tester jobs in Harrow on the Hill      |
      | Accountant          | London     | up to 15 miles  | 2000           | 4000           | Per month   | Contract       | Contract Accountant jobs in London               |
      | Chef                | Birmingham | up to 25 miles  | 100            | 400            | Per month   | Temporary      | Temporary Chef jobs in Birmingham                |
      | Software Developer  | London     | up to 100 miles | 1000           | 3000           | Per week    | Part Time      | Part Time Software Developer jobs in London      |
      | Civil Engineer      | Manchester | up to 50 miles  | 15             | 30             | Per hour    | Apprenticeship | Apprenticeship Civil Engineer jobs in Manchester |
      | Area Manager        | Portsmouth | up to 10 miles  | 50             | 300            | Per day     | Contract       | Contract Area Manager jobs in Portsmouth         |
      | Banking Team Leader | Glasgow    | up to 2 miles   | 20000          | 40000          | Per annum   | Permanent      | Permanent Banking Team Leader jobs in Glasgow    |

