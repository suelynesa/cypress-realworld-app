# Test Summary Report

## Project
Real World App – QA Testing Project

## Scope
This report summarizes the testing activities performed on the Real World App with focus on the following features:

- User Login
- User Registration
- Money Transfer

## Test Approach

The testing process included:

- Test case design
- Manual test execution
- Bug reporting
- Risk analysis
- End-to-end automation using Cypress

## Test Environment

Environment: Localhost  
URL: http://localhost:3000  
Browser: Chrome 145  
Operating System: Windows 10 Pro  

## Test Results

| Metric | Result |
|------|------|
| Total Test Cases | 25 |
| Executed | 25 |
| Passed | 18 |
| Failed | 7 |
| Blocked | 0 |

## Critical Findings

During the execution of the transfer feature tests, a critical defect was identified.

The system allows negative transfer values, which results in an increase of the user account balance instead of decreasing it.

This issue breaks financial integrity rules and represents a critical security risk.

## Automation Coverage

The following scenarios were automated using Cypress:

- Successful money transfer
- Transfer with negative value
- Transfer with cents

## Conclusion

The testing process identified several validation issues in the transfer functionality.  
The most critical issue involves improper validation of transfer amounts, which may lead to incorrect account balances.

Further validation rules and input restrictions should be implemented to prevent financial inconsistencies.