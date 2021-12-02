// import { issueBodyTemplate } from "./utils";
// import { issueTitleTemplate } from "./utils";

import * as core from "@actions/core";

const run = async (): Promise<void> => {
  const issueBodyPayload = core.getInput("issueBodyPayload", {
    required: true,
  });
  //const approver = core.getBooleanInput("approver", { required: true });
  //const issueNumber = core.getInput("issueNumber", { required: true });
  // const githubToken = core.getInput("githubToken", { required: true });

  console.log(`issueBodyPayload: ${issueBodyPayload}`);
  console.log(typeof issueBodyPayload);
  const nick = JSON.parse(issueBodyPayload);
  console.log(`nick: ${nick}`);
  console.log(typeof nick);

  // const issueData = await issueBodyTemplate(data);
  //const issueTitle = await issueTitleTemplate(data);

  // console.log(issueData);
};

run();
