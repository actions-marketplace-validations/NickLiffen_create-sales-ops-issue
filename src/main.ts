import { issueBodyTemplate, issueTitleTemplate, createIssue } from "./utils";

import * as core from "@actions/core";

const run = async (): Promise<void> => {
  try {
    const issueBody = JSON.parse(
      core.getInput("issueBodyPayload", { required: false })
    ) as IssueBodyTemplate;
    const approverInput = core.getInput("approver", { required: false });
    const issueNumberInput = core.getInput("issueNumber", { required: false });
    const githubRepositoryInput = core.getInput("githubRepository", {
      required: false,
    });

    const issueData = await issueBodyTemplate(
      issueBody,
      approverInput,
      issueNumberInput
    );
    const issueTitle = await issueTitleTemplate(issueBody);

    const issueURL = await createIssue(
      githubRepositoryInput,
      issueTitle,
      issueData
    );

    console.log(`The issue has been created here: ${issueURL}`);
  } catch (error) {
    console.error(error);
  }
};

run();
