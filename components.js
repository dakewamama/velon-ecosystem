export const revision = "ddd4f77514ae2f40bd2d6723b5772b2c48d5f764";
export const source = `https://github.com/dakewamama/velon/tree/${revision}`;

export const components = [
  {
    id: "cataloger",
    keywords: "deployment executable versions verification provenance",
    name: "Cataloger",
    category: "Deployment evidence",
    summary: "Establish which native deployment Velon can interpret.",
    description:
      "Binds a Solana cluster, program and supported slot range to executable identity, schema, adapter and verification evidence.",
    input: "Program bytes, deployment metadata and verified support records.",
    output: "A supported native context, or an explicit unsupported result.",
    boundary:
      "An RPC response alone does not establish that a deployment is supported. Support is bounded to the verified version and slot range.",
    path: "runtime/crates/cataloger",
    contract: "runtime/README.md",
    repository: "https://github.com/dakewamama/cataloger",
    related: ["sdk", "indexer"],
  },
  {
    id: "sdk",
    keywords: "adapters permissions actions instructions signing simulation",
    name: "Catalyst SDK",
    category: "Native interpretation",
    summary:
      "Translate supported native permissions and construct native actions.",
    description:
      "Adapters interpret authorization from native state, express it in ARM and compare the meaning of state before and after a reviewed action.",
    input:
      "Native account state, verified deployment context and evidence references.",
    output: "Permission meaning, native instructions and semantic changes.",
    boundary:
      "A simulation is evidence about that execution. It does not prove a future signed transaction will succeed or become finalized.",
    path: "sdk",
    contract: "sdk/README.md",
    repository: "https://github.com/dakewamama/catalyst-sdk",
    related: ["cataloger", "arm", "console"],
  },
  {
    id: "arm",
    keywords: "permissions authorization constraints schema model",
    name: "ARM",
    category: "Authorization meaning",
    summary:
      "Describe who can do what, to which resource, under which conditions.",
    description:
      "The protocol-neutral permission model represents subjects, principals, capabilities, constraints, lifecycle, parent relationships and evidence.",
    input: "Meaning compiled by a native adapter.",
    output: "Structured authorizations and conservative evaluations.",
    boundary:
      "ARM does not fetch accounts, verify a program deployment or authenticate evidence. Those responsibilities stay with its callers.",
    path: "arm",
    contract: "arm/README.md",
    repository: "https://github.com/dakewamama/arm",
    related: ["sdk"],
  },
  {
    id: "indexer",
    keywords:
      "history payments charges transactions signatures events replay gaps backfill",
    name: "Indexer",
    category: "Historical facts",
    summary:
      "Retain activity, transaction evidence and the gaps in what is known.",
    description:
      "The existing Catalyst indexer retains transaction and event positions, reconciles finalized RPC evidence and exposes paginated historical activity.",
    input:
      "Historical transactions, provisional deliveries and independently fetched finalized RPC results.",
    output:
      "Retained activity with provenance, finality, coverage and evidence references.",
    boundary:
      "A reused account address is not a historical authorization identity. Attribution remains unresolved when lifecycle evidence cannot prove the connection.",
    path: "runtime/services/catalyst-indexer",
    contract: "docs/engineering/HISTORY.md",
    repository: "https://github.com/dakewamama/cataloger",
    related: ["cataloger", "console"],
  },
  {
    id: "console",
    keywords: "wallet dashboard cancel revoke user interface",
    name: "Console",
    category: "User understanding & control",
    summary:
      "Make permissions, activity and available controls understandable.",
    description:
      "The console connects native interpretation and retained history to a wallet review flow, with technical evidence accessible alongside the explanation.",
    input:
      "Current observations, historical facts and reviewed native actions.",
    output:
      "Permission explanations, wallet signing and independently checked action receipts.",
    boundary:
      "A submitted signature does not prove revocation. A successful control needs finalized transaction and post-state verification.",
    path: "app",
    contract: "docs/engineering/CONTROLS.md",
    repository: "https://github.com/dakewamama/catalyst-demo",
    related: ["sdk", "indexer"],
  },
];
