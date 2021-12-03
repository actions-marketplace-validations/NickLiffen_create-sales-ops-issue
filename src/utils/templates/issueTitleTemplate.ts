export const issueTitleTemplate = ({
  client_name,
}: IssueBodyTemplate): string =>
  `Enable GitHub Advanced Security Trial: ${client_name}`;
