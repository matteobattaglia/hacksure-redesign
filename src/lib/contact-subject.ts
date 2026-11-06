function singleLine(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

/** Subject line shared by the browser Web3Forms submit and the server providers. */
export function contactSubject(input: {
  subjectPrefix?: string;
  name: string;
  company?: string;
}): string {
  const prefix = singleLine(input.subjectPrefix || "").slice(0, 80) || "[Hacksure]";
  const name = singleLine(input.name) || "—";
  const company = singleLine(input.company || "");
  return company
    ? `${prefix} Nuovo contatto — ${name} (${company})`
    : `${prefix} Nuovo contatto — ${name}`;
}
