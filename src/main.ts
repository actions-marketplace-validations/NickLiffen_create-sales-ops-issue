import { issueBodyTemplate } from "./utils";
import { issueTitleTemplate } from "./utils";

const run = async (): Promise<void> => {
  const data = {
    client_name: "Client Name",
    base_licence_type: "GitHub Enterprise Cloud",
    github_cloud_org_name: "Cloud Name",
    github_server_org_name: "n/a",
    ghas_trial_length: "30 days",
    ghas_issue_link: "[ghas/#4342](https://google.com)",
    people_interested_in_trial: "@nickliffen",
    person_who_approved_trial: "@nickliffen",
  } as issueBodyTemplate;

  const issueData = await issueBodyTemplate(data);
  const issueTitle = await issueTitleTemplate(data);

  console.log(issueData);
};

run();
