export const issueTitleTemplate = ({
  client_name,
}: issueBodyTemplate): string =>
  `Enable GitHub Advanced Security Trial: ${client_name}`;
