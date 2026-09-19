import type { Question } from '../../../lib/types'

// Domain 5: Responsible AI Governance & Risk Management
export const governanceQuestions: Question[] = [
  {
    id: 'aigp-governance-1',
    domainId: 'aigp-governance',
    prompt:
      "A company appoints its first head of AI governance. Several business units already use AI tools. Which sequence of first steps is most appropriate?",
    choices: [
      "Draft detailed technical standards for each model type, then discover which models are in use",
      "Secure a mandate and define scope and roles, then inventory existing AI and assess risk",
      "Commission an external audit of each AI system before policies or roles are defined",
      "Pause AI use across the company until a complete policy framework has been approved",
    ],
    correctIndex: 1,
    explanation:
      "A program needs a mandate, scope, and clear roles, and then visibility into existing AI through an inventory so risks can be prioritized. Writing detailed standards before knowing what exists, auditing against undefined expectations, or halting all use are poorly sequenced or disproportionate.",
  },
  {
    id: 'aigp-governance-2',
    domainId: 'aigp-governance',
    prompt:
      "A company buys an AI hiring tool and negotiates a contract that places all liability for biased outcomes on the vendor. Why is this, by itself, insufficient third-party risk management?",
    choices: [
      "Liability clauses of this kind are generally unenforceable against AI technology vendors",
      "Indemnities typically cover direct losses, so the company would still absorb regulatory fines and penalties",
      "The deployer can remain responsible and applicants are still harmed, so it needs its own oversight",
      "Contracts cannot allocate AI-specific risks until AI liability law has been harmonized",
    ],
    correctIndex: 2,
    explanation:
      "Employers typically remain accountable for their hiring decisions regardless of contract terms, and indemnity does not prevent harm to applicants. Deployers still need due diligence, testing, and monitoring. Liability clauses can be enforceable and useful; they are just not a substitute for oversight.",
  },
  {
    id: 'aigp-governance-3',
    domainId: 'aigp-governance',
    prompt:
      "A hospital requires a physician to approve every case flagged by a diagnostic AI. Physicians say they are pressured to approve quickly and rarely deviate from the AI. What is the most important fix?",
    choices: [
      "Remove the sign-off requirement, since it adds delay without improving outcomes",
      "Require a second physician to approve each case, so two reviewers check every flag",
      "Give physicians the time, training, and authority to disagree, and track override rates",
      "Replace the system with a more accurate model, so that approvals are less risky",
    ],
    correctIndex: 2,
    explanation:
      "Oversight only works if reviewers have the capacity and real authority to disagree. Monitoring overrides shows whether review is meaningful. Removing oversight or adding another pressured reviewer does not fix the incentive problem, and a better model does not restore independent judgment.",
  },
  {
    id: 'aigp-governance-4',
    domainId: 'aigp-governance',
    prompt:
      "A company discovers that a deployed AI system has produced biased outcomes for customers for months. Legal counsel is engaged. What should happen first?",
    choices: [
      "Publish a statement explaining the issue, so customers hear about it from the company first",
      "Contain the harm by pausing or limiting the system, while preserving evidence",
      "Retrain the model on corrected data and redeploy it as quickly as possible",
      "Wait for the root-cause analysis, so that any action is based on complete facts",
    ],
    correctIndex: 1,
    explanation:
      "Incident response starts by containing ongoing harm and preserving logs and evidence, followed by investigation, remediation, notification where required, and lessons learned. Rushing a retrained model risks new errors, and waiting for full analysis lets harm continue. External communication comes after the facts are clearer.",
  },
  {
    id: 'aigp-governance-5',
    domainId: 'aigp-governance',
    prompt:
      "A team completes a pre-deployment risk assessment, logs several risks, and considers its governance work finished. What is the main misunderstanding?",
    choices: [
      "Risk assessments belong after deployment, once real-world outcomes can be measured",
      "Each logged risk has to be eliminated before launch, or the system cannot proceed",
      "Assessments are needed for systems built in-house, not for purchased tools",
      "Identified risks need treatment, owners, and monitoring, not just documentation",
    ],
    correctIndex: 3,
    explanation:
      "Assessment is the start of risk management: risks need owners, mitigations, acceptance decisions for residual risk, and monitoring over time. Risks rarely can be eliminated completely, assessments matter before launch too, and bought systems also need them.",
  },
  {
    id: 'aigp-governance-6',
    domainId: 'aigp-governance',
    prompt:
      "In a three lines model applied to AI, which assignment is correct?",
    choices: [
      "First line: internal audit; second line: developers; third line: compliance",
      "First line: the board; second line: executive management; third line: product and engineering teams",
      "First: teams that own AI risk; second: risk and compliance oversight; third: internal audit",
      "First line: compliance; second line: product owners; third line: external regulators",
    ],
    correctIndex: 2,
    explanation:
      "The first line owns and manages risk in day-to-day work, the second line sets frameworks and provides oversight and challenge, and internal audit provides independent assurance. The board oversees the whole model rather than serving as a line, and regulators are external to it.",
  },
  {
    id: 'aigp-governance-7',
    domainId: 'aigp-governance',
    prompt:
      "Two companies' AI systems cause similar harm. Company A has a named owner, decision records, and a clear process to remedy harm. Company B has none of these. Which principle does Company A demonstrate?",
    choices: [
      "Accountability",
      "Explainability",
      "Transparency",
      "Robustness",
    ],
    correctIndex: 0,
    explanation:
      "Accountability means clear ownership, traceable decisions, and the ability to answer for and remedy outcomes. Transparency concerns disclosing how and where AI is used, explainability concerns understanding outputs, and robustness concerns reliable performance. Records support transparency, but ownership plus the ability to answer for and remedy outcomes is accountability.",
  },
  {
    id: 'aigp-governance-8',
    domainId: 'aigp-governance',
    prompt:
      "A system assessed a year ago as moderate risk for adult customers is now being used to make decisions about minors. What should happen?",
    choices: [
      "No reassessment, since the system itself and its accuracy have not changed",
      "A new risk assessment before extending use to the new population",
      "A note in the annual governance report describing the expanded use",
      "Confirmation from the original vendor that the system supports the new use",
    ],
    correctIndex: 1,
    explanation:
      "Risk depends on context and affected population; minors are more vulnerable, and new legal obligations may apply. A material change in use triggers reassessment before expansion. An unchanged system can carry very different risk in a new context.",
  },
  {
    id: 'aigp-governance-9',
    domainId: 'aigp-governance',
    prompt:
      "When building an AI inventory, which set of fields is most useful for governance?",
    choices: [
      "Model name, parameter count, architecture, and programming language",
      "Owner, purpose, data used, vendor, affected people, and risk tier",
      "Launch date, product name, number of users, and business sponsor",
      "Hosting provider, server region, uptime, and incident ticket history",
    ],
    correctIndex: 1,
    explanation:
      "Governance needs to know who is accountable, what each system does, what data it uses, who it affects, and how risky it is; these fields drive assessment, monitoring, and regulatory compliance. Technical specs, marketing details, and hosting metrics are secondary.",
  },
  {
    id: 'aigp-governance-10',
    domainId: 'aigp-governance',
    prompt:
      "A company has a board-approved commitment to fair AI, specific testing thresholds, and step-by-step instructions for running bias tests. How are these three documents best labeled, in that order?",
    choices: [
      "Procedure, standard, policy",
      "Standard, policy, procedure",
      "Policy, procedure, standard",
      "Policy, standard, procedure",
    ],
    correctIndex: 3,
    explanation:
      "A policy states high-level commitments, a standard sets specific measurable requirements, and a procedure gives step-by-step instructions. This layering keeps principles stable while operational detail evolves.",
  },
  {
    id: 'aigp-governance-11',
    domainId: 'aigp-governance',
    prompt:
      "A company is forming an AI governance committee to approve high-risk use cases. Which composition is most appropriate?",
    choices: [
      "Senior data scientists, since they understand model behavior and failure modes best",
      "The legal department alone, since approving high-risk uses is a compliance decision",
      "Cross-functional leads from legal, privacy, security, risk, tech, and the business",
      "External advisors only, so decisions are fully independent of management pressure",
    ],
    correctIndex: 2,
    explanation:
      "AI risks span technical, legal, ethical, and business concerns, so effective committees combine those perspectives and have defined authority. Single-function or purely external groups miss important risks or lack accountability within the organization.",
  },
  {
    id: 'aigp-governance-12',
    domainId: 'aigp-governance',
    prompt:
      "A hospital board states that AI may not make final clinical decisions without physician review, but moderate risk is acceptable in administrative automation. What has the board set?",
    choices: [
      "Its AI risk appetite",
      "Its incident response plan",
      "Its model validation standard",
      "Its data retention policy",
    ],
    correctIndex: 0,
    explanation:
      "Risk appetite defines how much and what kind of risk the organization will accept in pursuit of its goals, guiding which AI uses are pursued and how tightly they are controlled.",
  },
  {
    id: 'aigp-governance-13',
    domainId: 'aigp-governance',
    prompt:
      "After an incident, nobody could say whether product, data science, or compliance was supposed to approve model changes. Which tool most directly prevents this?",
    choices: [
      "A shared model monitoring dashboard with alerts visible to each team",
      "A statement of AI ethics principles endorsed by the executive leadership team",
      "A matrix assigning who is responsible, accountable, consulted, and informed",
      "An annual survey measuring AI awareness and attitudes across the organization",
    ],
    correctIndex: 2,
    explanation:
      "A RACI matrix assigns decision rights and roles for each governance activity, including approvals. Dashboards, principles, and surveys do not assign responsibility.",
  },
  {
    id: 'aigp-governance-14',
    domainId: 'aigp-governance',
    prompt:
      "Business units launch AI projects without informing governance, which learns about them only after launch. Which control fixes this at the source?",
    choices: [
      "Annual internal audits of each business unit to find undisclosed AI projects",
      "A required intake process that screens and risk-tiers new AI use cases early",
      "A rule that AI projects need the CEO's personal approval before they start",
      "A temporary freeze on new AI projects until the governance team has capacity",
    ],
    correctIndex: 1,
    explanation:
      "An intake and triage process gives governance early visibility and routes higher-risk use cases to deeper review. Annual audits find problems too late, CEO approval does not scale, and bans are disproportionate.",
  },
  {
    id: 'aigp-governance-15',
    domainId: 'aigp-governance',
    prompt:
      "A survey shows employees paste client documents into free public chatbots using personal accounts. What is the most effective response?",
    choices: [
      "Provide approved tools with enterprise protections, plus clear rules and training",
      "Block every public AI website on the corporate network and on company devices",
      "Discipline employees who used public chatbots, to deter future violations",
      "Accept the practice, since the productivity gains outweigh the data risk",
    ],
    correctIndex: 0,
    explanation:
      "Shadow AI usually reflects real demand. Sanctioned tools with proper data protection, backed by clear rules and training, reduce leakage more effectively than bans, which drive use onto personal devices, or tolerating uncontrolled data sharing.",
  },
  {
    id: 'aigp-governance-16',
    domainId: 'aigp-governance',
    prompt:
      "Which provision is most important in an employee acceptable use policy for generative AI?",
    choices: [
      "A list of approved vendors, with each vendor's own usage guidelines attached",
      "A requirement to label each AI-assisted document with the tool and version used",
      "A ban on AI use in customer-facing work, regardless of the task or the data involved",
      "Rules on what data may be entered and a duty to check outputs before relying on them",
    ],
    correctIndex: 3,
    explanation:
      "Acceptable use policies should address which data can be entered, such as confidential or personal data, and require people to verify outputs before use. The other options do not address the main risks.",
  },
  {
    id: 'aigp-governance-17',
    domainId: 'aigp-governance',
    prompt:
      "A procurement team is assessing an AI vendor for a high-risk use. Which due diligence question is most important?",
    choices: [
      "What is the vendor's size, growth rate, and number of enterprise customers?",
      "How was the model tested for accuracy and bias, and what can you share?",
      "Which industry awards and analyst rankings has the vendor received?",
      "What uptime and support response times does the vendor guarantee?",
    ],
    correctIndex: 1,
    explanation:
      "Due diligence should examine testing methods, bias and performance results, documentation such as model cards, data handling, security, and incident history. Size and awards say little about the system's risks.",
  },
  {
    id: 'aigp-governance-18',
    domainId: 'aigp-governance',
    prompt:
      "A company is negotiating a contract for a third-party AI service that processes customer data. Which clause is most important from an AI governance perspective?",
    choices: [
      "Limits on training with company data, plus audit, change-notice, and incident rights",
      "A fixed price and uptime guarantee for the full term of the agreement",
      "Exclusive access to the vendor's newest model for the length of the contract",
      "Broad indemnity for AI-related losses, which reduces the need for further vendor oversight",
    ],
    correctIndex: 0,
    explanation:
      "Key AI contract terms restrict vendor reuse of customer data, give audit or assurance rights, require notice of material model changes, and set incident notification duties. Pricing, exclusivity, and branding do not manage AI risk.",
  },
  {
    id: 'aigp-governance-19',
    domainId: 'aigp-governance',
    prompt:
      "A company rolls out the same one-hour AI awareness video to everyone from engineers to the board. What change would most improve its AI literacy program?",
    choices: [
      "Make the video longer and more detailed so it covers each topic in depth",
      "Train only the data science team, since they build and maintain the AI systems",
      "Replace the video with a written AI policy that employees sign each year",
      "Tailor training to each role's responsibilities and the AI tools they use",
    ],
    correctIndex: 3,
    explanation:
      "Effective AI literacy is role-based: developers need technical risk training, reviewers need oversight skills, and executives need to understand accountability and governance. The EU AI Act's literacy duty also points to training appropriate to context and role.",
  },
  {
    id: 'aigp-governance-20',
    domainId: 'aigp-governance',
    prompt:
      "A board asks how it will know whether the AI governance program is working. Which metric is most meaningful?",
    choices: [
      "Number of AI tools and licenses purchased across the company and its subsidiaries this year",
      "Number of AI policies and standards approved and published this year",
      "Share of high-risk systems with current assessments, and AI incident resolution time",
      "Number of employees who have completed the general AI awareness video",
    ],
    correctIndex: 2,
    explanation:
      "Useful metrics show coverage and effectiveness, such as assessment completion for high-risk systems, monitoring coverage, and incident resolution. Counting tools, pages, or press releases does not show whether risk is managed.",
  },
  {
    id: 'aigp-governance-21',
    domainId: 'aigp-governance',
    prompt:
      "What is the board of directors' most appropriate role in AI governance?",
    choices: [
      "Approving each AI model personally before it is deployed to customers",
      "Overseeing AI strategy and risk and holding management accountable",
      "Writing the technical testing and validation procedures for AI systems",
      "Leaving AI to management entirely, since it is an operational matter",
    ],
    correctIndex: 1,
    explanation:
      "Boards set tone, approve risk appetite and major policies, receive risk reporting, and hold management accountable. Approving individual models and writing procedures are management responsibilities.",
  },
  {
    id: 'aigp-governance-22',
    domainId: 'aigp-governance',
    prompt:
      "What does internal audit contribute to AI governance that the first and second lines do not?",
    choices: [
      "Building and deploying AI systems that the business units request",
      "Writing the AI risk policies and standards that the first line follows",
      "Independent assurance that controls work, reported to the board",
      "Monitoring each model's performance daily and escalating any drift",
    ],
    correctIndex: 2,
    explanation:
      "Internal audit independently evaluates whether first-line controls and second-line oversight are designed and operating effectively and reports to the board or audit committee. It does not build systems or write the policies it audits.",
  },
  {
    id: 'aigp-governance-23',
    domainId: 'aigp-governance',
    prompt:
      "A risk assessment finds that fully automated termination decisions carry unacceptable risk that no control can reduce enough. Which risk treatment fits?",
    choices: [
      "Transfer, by buying insurance that covers claims from wrongful terminations",
      "Avoid, by not pursuing that use or fundamentally redesigning it",
      "Accept, with a documented sign-off from the head of human resources",
      "Mitigate, by adding an explanation of the AI's role to termination letters",
    ],
    correctIndex: 1,
    explanation:
      "When risk cannot be brought within appetite, avoidance is appropriate. Insurance does not prevent harm to employees, accepting an unacceptable risk contradicts the finding, and a disclaimer is not a real mitigation.",
  },
  {
    id: 'aigp-governance-24',
    domainId: 'aigp-governance',
    prompt:
      "After mitigation, residual risk remains in a new customer-facing AI system. Who should formally accept it?",
    choices: [
      "An accountable executive with authority set out in the risk policy",
      "The lead developer, who best understands the system's technical limitations",
      "The AI vendor, which can accept residual risk on the deployer's behalf",
      "The compliance team, which reviews every AI system before it launches",
    ],
    correctIndex: 0,
    explanation:
      "Residual risk should be accepted by someone authorized under the risk framework, usually a senior accountable owner, and the decision documented. Developers lack that authority, and vendors cannot accept risk on the deployer's behalf.",
  },
  {
    id: 'aigp-governance-25',
    domainId: 'aigp-governance',
    prompt:
      "A company already has mature privacy, security, and model risk programs. What is the most efficient way to establish AI governance?",
    choices: [
      "Build a separate AI program with its own policies, committees, and tooling",
      "Extend the privacy program to cover AI, since most AI risks involve personal data",
      "Wait for AI-specific regulation in the company's main markets before acting",
      "Integrate AI risks into existing programs and add AI-specific elements",
    ],
    correctIndex: 3,
    explanation:
      "Building on existing structures such as impact assessments, security reviews, and model validation, while adding AI-specific controls like fairness testing and GenAI safeguards, avoids duplication. Privacy alone leaves gaps, and waiting leaves risks unmanaged.",
  },
  {
    id: 'aigp-governance-26',
    domainId: 'aigp-governance',
    prompt:
      "A company hires a firm to audit its AI hiring tool for bias. The same firm built and sells the tool. What is the main problem?",
    choices: [
      "Audits of hiring tools may be performed only by government-accredited firms",
      "The firm lacks independence, which undermines the audit's credibility",
      "The firm cannot access the tool's training data without the vendor's consent",
      "The audit should be done internally, since external audits expose trade secrets",
    ],
    correctIndex: 1,
    explanation:
      "Assurance is only credible if the auditor is independent of what it evaluates. New York City's Local Law 144, for example, requires bias audits by independent auditors.",
  },
  {
    id: 'aigp-governance-27',
    domainId: 'aigp-governance',
    prompt:
      "An engineer believes a deployed model is harming customers but fears retaliation from the manager who championed it. Which mechanism helps most?",
    choices: [
      "An open-door policy that encourages staff to raise concerns with their managers",
      "A rule that AI issues be reported through the project's regular status meetings",
      "A confidential escalation channel with protection against retaliation",
      "Rotating the engineer to another project to reduce friction with the manager",
    ],
    correctIndex: 2,
    explanation:
      "Confidential speak-up channels with anti-retaliation protection let people raise concerns that would otherwise be suppressed. Laws such as the EU Whistleblower Directive and many frontier AI safety commitments emphasize such protections.",
  },
  {
    id: 'aigp-governance-28',
    domainId: 'aigp-governance',
    prompt:
      "Two years after launch, a regulator asks for the risk assessment, approvals, and test results for an AI system. Which practice makes this possible?",
    choices: [
      "Keeping governance records in a controlled repository under a retention schedule",
      "Recreating the documents from team members' recollections when a regulator asks",
      "Storing records in project members' email so each decision stays with its author",
      "Deleting project records after launch, to limit data that could be subpoenaed",
    ],
    correctIndex: 0,
    explanation:
      "Accountability depends on being able to show what was decided, by whom, and on what evidence. Records recreated after the fact are not credible, and scattered or deleted records cannot support a response.",
  },
  {
    id: 'aigp-governance-29',
    domainId: 'aigp-governance',
    prompt:
      "An AI ethics board reviews high-profile projects, but product teams often ignore its recommendations without consequence. What is the core weakness?",
    choices: [
      "The board meets too rarely to review projects before they are launched",
      "The board's members come from too many disciplines to agree on decisions",
      "The board reviews too few projects to see patterns across the company",
      "The board lacks authority, and its decisions are not built into approvals",
    ],
    correctIndex: 3,
    explanation:
      "Advisory bodies without decision rights, escalation paths, or a place in approval workflows are easily sidelined. Governance bodies need clear mandates and authority.",
  },
  {
    id: 'aigp-governance-30',
    domainId: 'aigp-governance',
    prompt:
      "AI laws and guidance are changing quickly in the jurisdictions where a company operates. Which practice best keeps its governance program current?",
    choices: [
      "Reviewing regulations when the legal team is notified of an enforcement action",
      "Following the laws of the headquarters country, which usually set the strictest bar",
      "Structured horizon scanning with owners and a process to update policies",
      "Pausing new AI projects until the regulatory landscape has settled down",
    ],
    correctIndex: 2,
    explanation:
      "Horizon scanning tracks emerging laws, guidance, and standards, assesses their impact, and feeds changes into policies and controls. Reacting only to enforcement or ignoring other jurisdictions leaves the company exposed.",
  },
  {
    id: 'aigp-governance-31',
    domainId: 'aigp-governance',
    prompt:
      "A model approved for recommending products is repurposed by another team to set customers' credit limits. What should happen first?",
    choices: [
      "No new review, since the model was already approved and is technically unchanged",
      "A technical check that the model performs well on the new credit data",
      "A new risk assessment and approval for the new, higher-stakes use",
      "Sign-off from the team that built the model, since it knows its limits",
    ],
    correctIndex: 2,
    explanation:
      "Risk depends on use, and credit decisions carry legal obligations and serious consequences. The original approval covered a different context. A technical check or the builders' sign-off does not assess the new risks.",
  },
  {
    id: 'aigp-governance-32',
    domainId: 'aigp-governance',
    prompt:
      "Under the EU AI Act, what must a provider do on learning of a serious incident involving its high-risk system?",
    choices: [
      "Report it to the relevant market surveillance authorities within set deadlines",
      "Describe it in the next annual compliance report submitted to the AI Office",
      "Escalate it to the board and document the company's internal response",
      "Report it only if an affected person files a complaint or legal claim",
    ],
    correctIndex: 0,
    explanation:
      "Providers must report serious incidents to the market surveillance authorities of the member states where they occurred, within deadlines set by the Act. Internal escalation alone does not meet the obligation.",
  },
  {
    id: 'aigp-governance-33',
    domainId: 'aigp-governance',
    prompt:
      "A company wants to build public trust in its use of AI. Which action is most credible?",
    choices: [
      "Stating in advertising that its AI has been independently certified as unbiased",
      "Declining to comment on AI use, to avoid statements that could create liability",
      "Publishing its model source code so anyone can inspect how decisions are made",
      "Publishing where it uses AI, how it is governed, and how to raise concerns",
    ],
    correctIndex: 3,
    explanation:
      "Meaningful transparency explains where AI is used, what safeguards exist, and how people can seek recourse. Absolute claims like 'completely unbiased' are misleading and can draw regulatory action, and unexplained code is not meaningful to most people.",
  },
  {
    id: 'aigp-governance-34',
    domainId: 'aigp-governance',
    prompt:
      "A team wants to use an open-source model from a public repository in a commercial product. Which check is essential?",
    choices: [
      "That the model is widely downloaded and well rated by the developer community",
      "The license terms, the model's provenance, and its known limitations",
      "That the repository includes clear setup instructions and example code",
      "That the model is the most recent release from a well-known AI lab",
    ],
    correctIndex: 1,
    explanation:
      "Open-source licenses may restrict commercial or certain uses, and provenance, training data, and safety testing vary widely. Popularity, documentation quality, and recency do not show the model is legally usable or fit for purpose.",
  },
  {
    id: 'aigp-governance-35',
    domainId: 'aigp-governance',
    prompt:
      "Under the EU AI Act, deployers of high-risk systems must assign human oversight. Which description best matches the requirement?",
    choices: [
      "Oversight rotated weekly among available staff, so no one person becomes complacent",
      "Oversight by people with the needed competence, training, authority, and support",
      "Oversight by the provider's staff, who understand the system best, on the deployer's behalf",
      "Oversight triggered when a user complains, so reviewers focus on contested decisions",
    ],
    correctIndex: 1,
    explanation:
      "Article 26 requires deployers to assign human oversight to natural persons who have the necessary competence, training, and authority, as well as the necessary support. Oversight is the deployer's duty and must be continuous, not complaint-driven.",
  },
  {
    id: 'aigp-governance-36',
    domainId: 'aigp-governance',
    prompt:
      "A governance team applies the same lengthy review to an internal meeting-notes summarizer as to a system that approves mortgages. What principle is being overlooked?",
    choices: [
      "Proportionality: governance effort should scale with each system's potential impact",
      "Transparency: AI systems should each be disclosed publicly in the same level of detail",
      "Accountability: each AI system needs a named owner before it can be used",
      "Explainability: each model should be interpretable before it can be approved",
    ],
    correctIndex: 0,
    explanation:
      "Risk-based governance scales scrutiny to potential impact. Uniform heavy review wastes resources and can push teams toward unapproved workarounds, while under-reviewing high-risk systems. The other principles apply but are not what is missing here.",
  },
  {
    id: 'aigp-governance-37',
    domainId: 'aigp-governance',
    prompt:
      "A company ends a three-year contract with an AI vendor that processed customer data and fine-tuned models on it. What is the most important exit step?",
    choices: [
      "Renewing with the same vendor on shorter terms, to keep the relationship open",
      "Keeping the vendor's system access active for a transition period, in case the data is needed",
      "Announcing the change of vendor to customers who interacted with the system",
      "Confirmation that company data and derived artifacts, like fine-tuned models, are deleted",
    ],
    correctIndex: 3,
    explanation:
      "Offboarding should confirm return or deletion of data and derived artifacts such as fine-tuned models that may encode customer data, and revoke access. Leaving access active creates security risk.",
  },
  {
    id: 'aigp-governance-38',
    domainId: 'aigp-governance',
    prompt:
      "Customer complaints show an AI claims system often misreads handwritten forms, but the model team never sees complaint data. What is the most important governance improvement?",
    choices: [
      "Route complaint data to model owners and connect it to monitoring and incidents",
      "Stop accepting handwritten forms, so the model only processes typed claims",
      "Consolidate complaint channels, so the complaints team can respond faster",
      "Retrain the model daily, so it adapts to new handwriting without feedback",
    ],
    correctIndex: 0,
    explanation:
      "Complaints are an important signal of real-world failures; connecting them to model owners and monitoring closes the loop so problems are investigated and fixed. Changing intake or retraining blindly does not address the missing feedback path.",
  },
  {
    id: 'aigp-governance-39',
    domainId: 'aigp-governance',
    prompt:
      "Business leaders say AI governance is slowing experimentation. Which approach best balances innovation and risk?",
    choices: [
      "Suspend governance review for experiments, and apply it at production launch instead",
      "Approve experiments once the governance team confirms they carry no meaningful risk",
      "Let each business team decide for itself whether governance applies to its work",
      "A controlled sandbox with pre-approved data and lighter review for low-risk tests",
    ],
    correctIndex: 3,
    explanation:
      "Internal sandboxes and tiered review allow fast experimentation within guardrails, with fuller review before production or higher-risk use. Suspending governance or self-selection invites unmanaged risk, and zero-risk projects do not exist.",
  },
  {
    id: 'aigp-governance-40',
    domainId: 'aigp-governance',
    prompt:
      "An AI governance program has well-written policies, but executives routinely override them to meet launch dates. What is the most fundamental weakness?",
    choices: [
      "The policies are too long and detailed for busy executives to apply consistently in practice",
      "The review process has no service-level targets, so launches are delayed",
      "Leadership does not support governance in practice, so staff treat policies as optional",
      "The governance team reports to legal rather than to technology leadership",
    ],
    correctIndex: 2,
    explanation:
      "Tone at the top decides whether governance is followed. When leaders bypass controls, staff learn the policies are optional, whatever the documents say.",
  },
]
