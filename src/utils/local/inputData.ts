export const issueBodyPayload = (): string => {
  return `{"instance_type":"ghec","github_org":["test-1"],"trial_duration":30,"team_responsbile":"se","region":"amer_e_central","sales_rep":"@bob-test","solution_engineer":"@bob-test","ps_engineer":null,"sfdc_poc_url":"https://sfurl.com","github_customers_url":"https://github.com/githubcustomers/1","core_languages":["js"],"current_sec_tools":["nothing"],"current_ci_tools":["az","ga"]}`;
};

export const approver = (): string => "NickLiffen";

export const issueNumber = (): string => "123";

export const token = (): string => "12345";
