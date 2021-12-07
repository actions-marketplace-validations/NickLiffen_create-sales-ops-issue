export const issueBodyTemplate = (
  data: IssueBodyTemplate,
  approverInput: string,
  issueNumberInput: string
): string => {
  let orgs = "";

  data.github_org.map((org, index) => {
    orgs += `**Org ${index + 1}**: ${org} <br /> `;
  });

  const org = `${orgs} <br /> (**If possible**, enaling GHAS on the enterprise of these orgs would be great)`;

  const PSEngineer = data.ps_engineer
    ? `@${data.ps_engineer}`
    : "N/A : No PS Engineer Assigned";

  const ghecCustomerResponse =
    data.instance_type === "GitHub Enterprise Cloud"
      ? ":white_check_mark:"
      : ":x:";
  const ghesCustomerResponse =
    data.instance_type === "GitHub Enterprise Server"
      ? ":white_check_mark:"
      : ":x:";
  const ghaeCustomerResponse =
    data.instance_type === "GitHub AE" ? ":white_check_mark:" : ":x:";

  return `
 **Item** | **Description**
 :--: | :--
 **Client/Prospect:** | ${data.client_name}
 **GHEC Customer?:** | ${ghecCustomerResponse}
 **GHES Customer?:** | ${ghesCustomerResponse}
 **GHAE Customer?:** | ${ghaeCustomerResponse}
 **:stop_sign: Add-ons?** | <li>- [x] __Advanced Security__</li>
 **Orgs to Enable GHAS:** | ${org}
 **Trial/Extension Length:** | ${data.trial_duration} days
 **Additional details:** | _(i.e. why does your customer need an extension)_
 **POC Issue:** | [advanced-security-field/${issueNumberInput}](https://github.com/github/advanced-security-field/${issueNumberInput})
 **Salesforce POC Object:** | ${data.sfdc_poc_url}
 **Links:** | 
 **Tag:** | Sales Rep: @${data.sales_rep} <br /> Solutions Engineer: @${data.solution_engineer} <br /> Professional Services Engineer: ${PSEngineer}
 
 Approved By: __@${approverInput}__
 
 ---
 **Mention:** _@github/sales-support_ _@github/revenue_ (for :eyes: and :+1: on all day 46-90 requests)`;
};
