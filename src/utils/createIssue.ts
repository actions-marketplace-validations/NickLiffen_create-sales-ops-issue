import { Octokit } from "@octokit/action";

export const createIssue = async (
  githubRepository: string,
  issueTitle: string,
  issueBody: string
): Promise<string> => {
  const octokit = new Octokit();
  const [owner, repo] = githubRepository.split("/");
  const { data } = await octokit.request("POST /repos/{owner}/{repo}/issues", {
    owner,
    repo,
    title: issueTitle,
    body: issueBody,
  });
  return data.html_url;
};
