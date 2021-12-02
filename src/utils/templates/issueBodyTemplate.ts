export const issueBodyTemplate = ({
  client_name,
  base_licence_type,
  github_cloud_org_name,
  github_server_org_name,
  ghas_trial_length,
  ghas_issue_link,
  people_interested_in_trial,
  person_who_approved_trial,
}: issueBodyTemplate): string => `
**Item** | **Description**
:--: | :--
**Client/Prospect** | ${client_name}
**Base License Type** | <li>- [x] ${base_licence_type}</li>
**:stop_sign: Add-ons?** | <li>- [x] __Advanced Security__</li>
**Admin email** | 
**Cloud org name** | ${github_cloud_org_name}
**Server org name** | ${github_server_org_name}
**Trial/Extension Length** | ${ghas_trial_length}
**Additional details** | _(i.e. why does your customer need an extension)_
**POC Issue** | ${ghas_issue_link}
**Links** | 
**Tag** | ${people_interested_in_trial}

Approved By: __${person_who_approved_trial}__

---
**Mention:** _@github/sales-support_ _@github/revenue_ (for :eyes: and :+1: on all day 46-90 requests)`;
