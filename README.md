# Create Sales Ops Issue for GHAS Trial

The purpose of this Github Action is to create an issue within the Sales Support (Operations) GitHub Repository. This will notify them that a GHAS trial needs to be enabled. 

This GitHub Action takes three inputs:

1. **SFDC Body**. This is the structured object sent from Salesforce to GitHub. It has all the data in about the trial. 
2. **Approver**: The GitHub Username of the person who approved the trial from an ASE Side. 
3. **Issue Number**: The GitHub Issue Number tracking this in the GitHub Advanced Security Field Repository. 
4. **GitHub Token**: The GitHub Token which will create the issue within the Sales Support (Operations) GitHub Repository.

This GitHub Action then outputs two values:

1. **Issue Number**: The GitHub Issue Number created on the Sales Support (Operations) GitHub Repository.
2. **Issue URL**: The GitHub Issue URL created on the Sales Support (Operations) GitHub Repository.