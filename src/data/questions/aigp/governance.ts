import type { Question } from '../../../lib/types'

// Domain 5: Responsible AI Governance & Risk Management (questions 9-40)
export const governanceQuestions: Question[] = [
  {
    id: 'aigp-governance-9',
    domainId: 'aigp-governance',
    prompt:
      "A newly appointed head of AI governance cannot say how many AI systems the company uses, who owns them, or what they do. What should be established first to fix this?",
    choices: [
      'A public statement of AI principles endorsed by the CEO',
      'An AI system inventory with owners, purposes, and risk levels',
      'A company-wide ban on all AI tools until a formal policy has been written',
      'A plan to build and train an in-house foundation model',
    ],
    correctIndex: 1,
    explanation:
      'An organization cannot govern AI it does not know about. An inventory recording each system\'s owner, purpose, data, vendor, and risk tier is the foundation for risk assessment, monitoring, and regulatory compliance.',
  },
  {
    id: 'aigp-governance-10',
    domainId: 'aigp-governance',
    prompt:
      "A company's AI governance documents include a board-approved statement that 'AI must be used fairly and transparently,' a set of specific testing thresholds, and step-by-step instructions for running a bias test. How are these three layers best described?",
    choices: [
      'Procedures, standards, and policy, listed in that order',
      'Standards, policy, and procedures, in that order',
      'Policy, standards, and procedures, in that order',
      'Three versions of the same policy',
    ],
    correctIndex: 2,
    explanation:
      'A policy states high-level commitments, standards set specific measurable requirements, and procedures give step-by-step instructions for meeting them. This layering keeps principles stable while letting operational detail change.',
  },
  {
    id: 'aigp-governance-11',
    domainId: 'aigp-governance',
    prompt:
      "A company is forming an AI governance committee. Which membership is most appropriate?",
    choices: [
      'Data scientists only, since they understand how the models are built and tested',
      'Only the legal department, since AI governance is fundamentally a compliance matter',
      'Only external consultants, to ensure the committee is fully independent of management',
      'Cross-functional leads from legal, privacy, security, risk, technology, and the business',
    ],
    correctIndex: 3,
    explanation:
      'AI risks cut across technical, legal, ethical, and business areas, so effective committees bring those perspectives together with clear decision rights. A single-discipline group will miss important risks.',
  },
  {
    id: 'aigp-governance-12',
    domainId: 'aigp-governance',
    prompt:
      "The board of a hospital network formally states that it will not use AI to make final clinical decisions without physician review, but will accept moderate risk in administrative automation. What has the board defined?",
    choices: [
      'Its AI risk appetite',
      'Its model architecture standards',
      'Its data retention schedule',
      'Its incident response plan',
    ],
    correctIndex: 0,
    explanation:
      'Risk appetite describes how much and what kinds of risk an organization is willing to accept in pursuit of its goals. It guides which AI uses are pursued and how strictly they are controlled.',
  },
  {
    id: 'aigp-governance-13',
    domainId: 'aigp-governance',
    prompt:
      "An AI incident shows that nobody knew whether the product team, the data science team, or compliance was supposed to approve model changes. Which tool most directly prevents this confusion?",
    choices: [
      'A larger model monitoring dashboard with more real-time performance charts for executives',
      'A RACI matrix defining who is responsible, accountable, consulted, and informed',
      'A new AI ethics principles statement approved by the board of directors',
      'An annual AI awareness survey sent to all product and data science staff',
    ],
    correctIndex: 1,
    explanation:
      'A RACI matrix assigns clear roles for each governance activity, including who approves changes. Principles statements and dashboards do not assign decision rights.',
  },
  {
    id: 'aigp-governance-14',
    domainId: 'aigp-governance',
    prompt:
      "Business units start AI projects without telling anyone, and governance learns about them only after launch. Which process fixes this at the source?",
    choices: [
      'Annual internal audits of all business units to find unreported AI projects',
      'Banning all AI projects unless the CEO reviews and approves each one personally',
      'A required intake and triage process that screens and risk-tiers new AI use cases',
      'Hiring more data scientists into each business unit to build AI projects faster',
    ],
    correctIndex: 2,
    explanation:
      'An intake process gives governance visibility at the start, sorts use cases by risk, and routes higher-risk ones to deeper review. Annual audits find problems too late, and routing everything to the CEO does not scale.',
  },
  {
    id: 'aigp-governance-15',
    domainId: 'aigp-governance',
    prompt:
      "A survey finds many employees paste client documents into free public chatbots using personal accounts. What is the best governance response?",
    choices: [
      'Ignore it, since the tools improve productivity and employees are using them anyway',
      'Discipline every employee who has used a public chatbot for any work task',
      'Block all internet access on work devices so no chatbot can be reached',
      'Provide approved tools with proper data protections, plus clear acceptable use rules',
    ],
    correctIndex: 3,
    explanation:
      '"Shadow AI" usually reflects real demand. Offering sanctioned tools with enterprise data protections, together with clear rules and training, reduces data leakage more effectively than blanket bans or ignoring the problem.',
  },
  {
    id: 'aigp-governance-16',
    domainId: 'aigp-governance',
    prompt:
      "Which provision is most important to include in an employee acceptable use policy for generative AI tools?",
    choices: [
      'Rules on what data may be entered, and a duty to check outputs before relying on them',
      'A requirement that all AI outputs be posted publicly for transparency purposes',
      'A ban on using any AI tools outside of normal business hours and office locations',
      'A requirement to always use the most expensive and advanced AI tool available',
    ],
    correctIndex: 0,
    explanation:
      'Acceptable use policies should say what data can and cannot be entered, such as confidential or personal data, and require people to review AI outputs for accuracy before using them. The other options do not address the real risks.',
  },
  {
    id: 'aigp-governance-17',
    domainId: 'aigp-governance',
    prompt:
      "A procurement team is evaluating an AI vendor for a high-risk use case. Which question is most important to include in the due diligence?",
    choices: [
      'How many employees does the vendor have, and how fast is it growing?',
      'How was the model tested for accuracy and bias, and what documentation can you share?',
      'Which cloud provider hosts the vendor corporate website, blog, and other marketing pages?',
      'Does the vendor sponsor major industry conferences and publish white papers?',
    ],
    correctIndex: 1,
    explanation:
      'Due diligence for AI vendors should cover testing methods, bias and performance results, documentation such as model cards, data handling, security, and incident history. Company size and marketing activity say little about the system\'s risks.',
  },
  {
    id: 'aigp-governance-18',
    domainId: 'aigp-governance',
    prompt:
      "A company is negotiating a contract for a third-party AI service that will process customer data. Which clause is most important from an AI governance perspective?",
    choices: [
      'A clause setting the format and logo placement on the vendor monthly invoices',
      'A clause requiring the vendor to write its software in a specific programming language',
      'Limits on the vendor using company data to train its models, plus audit and notice rights',
      'A clause preventing the company from ever switching to a different AI vendor',
    ],
    correctIndex: 2,
    explanation:
      'Key AI contract terms include restrictions on using customer data for vendor training, rights to audit or receive assurance reports, notice of material model changes, incident notification, and data deletion. Lock-in clauses and cosmetic terms do not manage AI risk.',
  },
  {
    id: 'aigp-governance-19',
    domainId: 'aigp-governance',
    prompt:
      "A company rolls out the same one-hour AI awareness video to every employee, from software engineers to the board. What improvement would make its AI literacy program more effective?",
    choices: [
      'Removing training entirely so employees can spend the time on their work',
      'Making the same video longer so it covers every topic in more depth',
      'Training only the data science team, since they build the AI systems',
      'Tailoring training to each role\'s responsibilities and the AI they use',
    ],
    correctIndex: 3,
    explanation:
      'Effective AI literacy is role-based: developers need technical risk training, reviewers need oversight skills, and executives need to understand governance and accountability. The EU AI Act\'s literacy obligation also points to context-appropriate training.',
  },
  {
    id: 'aigp-governance-20',
    domainId: 'aigp-governance',
    prompt:
      "A board asks how it can tell whether the AI governance program is working. Which metric is most meaningful?",
    choices: [
      'Share of high-risk systems with current assessments, and time taken to resolve AI incidents',
      'Number of AI-related press releases issued and positive media mentions received each year',
      'Total number of AI tools purchased and the amount spent on AI licenses each year',
      'Number of pages in the AI policy and how many times it has been revised this year',
    ],
    correctIndex: 0,
    explanation:
      'Useful governance metrics measure coverage and effectiveness, such as assessment completion for high-risk systems, monitoring coverage, and incident response times. Counting documents, tools, or press releases does not show whether risk is being managed.',
  },
  {
    id: 'aigp-governance-21',
    domainId: 'aigp-governance',
    prompt:
      "What is the board of directors' most appropriate role in AI governance?",
    choices: [
      'Approving every individual model personally before it is deployed',
      'Overseeing AI strategy and risk, and holding management accountable',
      'Writing the technical testing procedures that data scientists follow',
      'Having no role, since AI is an operational matter for management alone',
    ],
    correctIndex: 1,
    explanation:
      'Boards provide oversight: they set the tone, approve risk appetite and major policies, receive regular risk reporting, and hold management accountable. Approving individual models or writing procedures is management\'s job.',
  },
  {
    id: 'aigp-governance-22',
    domainId: 'aigp-governance',
    prompt:
      "In a three lines of defense model, what does internal audit add to AI governance that the first and second lines do not?",
    choices: [
      'It builds and deploys the AI systems that the business units request, fund, and use',
      'It writes the AI risk policies and standards that the first line must follow',
      'It gives independent assurance that governance and controls work as intended',
      'It handles customer complaints about AI decisions and responds to each one',
    ],
    correctIndex: 2,
    explanation:
      'Internal audit, the third line, independently assesses whether the first line\'s controls and the second line\'s oversight are designed and operating effectively, and reports to the board or audit committee. It does not build systems or write the policies it audits.',
  },
  {
    id: 'aigp-governance-23',
    domainId: 'aigp-governance',
    prompt:
      "A risk assessment finds that a proposed AI tool for fully automated firing decisions carries unacceptable risk that no control could reduce enough. Which risk treatment is most appropriate?",
    choices: [
      'Transfer the risk by buying an insurance policy',
      'Accept the risk and proceed',
      'Mitigate the risk with a disclaimer',
      'Avoid the risk by not pursuing that use',
    ],
    correctIndex: 3,
    explanation:
      'When risk cannot be reduced to an acceptable level, avoidance, meaning not doing the activity or redesigning it fundamentally, is the right treatment. Insurance does not prevent the harm, and a disclaimer is not a real mitigation.',
  },
  {
    id: 'aigp-governance-24',
    domainId: 'aigp-governance',
    prompt:
      "After mitigations, some residual risk remains in a new customer-facing AI system. Who should formally accept that residual risk?",
    choices: [
      'An accountable executive with the authority set out in the risk policy',
      'The most junior developer on the project, who knows the code best',
      'The AI vendor, acting on behalf of the company that deploys the system',
      'No one, since residual risk after mitigation does not need formal acceptance',
    ],
    correctIndex: 0,
    explanation:
      'Residual risk should be formally accepted by someone with the authority to do so under the organization\'s risk framework, typically a senior accountable owner, and the decision should be documented. Vendors cannot accept risk on the deployer\'s behalf.',
  },
  {
    id: 'aigp-governance-25',
    domainId: 'aigp-governance',
    prompt:
      "A company already has mature privacy, security, and model risk management programs. What is the most efficient way to build AI governance?",
    choices: [
      'Create a completely separate AI program with its own policies, committees, and tools',
      'Integrate AI risks into existing programs and fill the gaps they don\'t cover',
      'Rely entirely on the privacy program',
      'Wait until an AI-specific law requires a program',
    ],
    correctIndex: 1,
    explanation:
      'AI governance works best built on existing structures such as privacy impact assessments, security reviews, and model validation, while adding AI-specific elements like fairness testing and GenAI controls. A fully separate program duplicates effort, and relying on privacy alone leaves gaps.',
  },
  {
    id: 'aigp-governance-26',
    domainId: 'aigp-governance',
    prompt:
      "A company hires an outside firm to audit its AI hiring tool for bias. The same firm also built and sells the tool. What is the main problem?",
    choices: [
      'External audits are not allowed for AI tools used in hiring decisions',
      'The audit will take too long because the firm knows the tool too well',
      'The auditor lacks independence, which undermines the audit\'s credibility',
      'The firm will charge too much because it faces no competition for the audit work',
    ],
    correctIndex: 2,
    explanation:
      'Assurance is only credible if the auditor is independent of the system it evaluates. Some laws, such as New York City\'s Local Law 144, require bias audits by independent auditors for this reason.',
  },
  {
    id: 'aigp-governance-27',
    domainId: 'aigp-governance',
    prompt:
      "An engineer believes a deployed model is harming customers but fears retaliation for raising it with their manager, who championed the project. What governance mechanism helps here?",
    choices: [
      'A requirement that all concerns be raised openly in scheduled team meetings',
      'A policy that only managers may report AI issues directly to the governance committee',
      'Removing the engineer from the project to avoid conflict with the manager',
      'A confidential escalation or speak-up channel with anti-retaliation protection',
    ],
    correctIndex: 3,
    explanation:
      'Confidential reporting channels with protection from retaliation let people raise concerns that might otherwise be suppressed. Frontier AI safety commitments and some laws, such as the EU Whistleblower Directive, emphasize such protections.',
  },
  {
    id: 'aigp-governance-28',
    domainId: 'aigp-governance',
    prompt:
      "Two years after deployment, a regulator asks a company to show the risk assessment, approvals, and test results for an AI system. Which practice makes this possible?",
    choices: [
      'Keeping governance records under a defined retention schedule',
      'Deleting all project records after launch',
      'Storing records only in employees\' personal email accounts and laptops',
      'Recreating the documents when a regulator asks',
    ],
    correctIndex: 0,
    explanation:
      'Accountability depends on being able to show what was decided, by whom, and on what evidence. Governance records should be kept in a controlled repository under a retention schedule. Recreating them after the fact is not credible.',
  },
  {
    id: 'aigp-governance-29',
    domainId: 'aigp-governance',
    prompt:
      "A company's AI ethics board reviews high-profile projects, but product teams are free to ignore its recommendations and often do. What is the core weakness?",
    choices: [
      'The board meets too often, which slows down product teams unnecessarily',
      'The board lacks authority, and its decisions are not integrated into approval processes',
      'The board has too many members from different disciplines to reach agreement on anything',
      'The board reviews too few low-risk projects to understand everyday AI use',
    ],
    correctIndex: 1,
    explanation:
      'Advisory bodies without decision rights, escalation paths, or a place in approval workflows tend to be sidelined. Governance bodies need clear mandates and authority to be effective.',
  },
  {
    id: 'aigp-governance-30',
    domainId: 'aigp-governance',
    prompt:
      "AI laws and guidance are changing quickly across the jurisdictions where a company operates. Which practice best keeps its governance program current?",
    choices: [
      'Reviewing regulations only after receiving an enforcement notice',
      'Following only the laws of the single country where the company has its global headquarters',
      'Structured regulatory horizon scanning with owners and a process to update policies',
      'Freezing all AI projects until the laws in every jurisdiction settle down',
    ],
    correctIndex: 2,
    explanation:
      'Horizon scanning systematically tracks emerging laws, guidance, and standards, assesses their impact, and feeds changes into policies and controls. Reacting only to enforcement or ignoring other jurisdictions leaves the program exposed.',
  },
  {
    id: 'aigp-governance-31',
    domainId: 'aigp-governance',
    prompt:
      "A model approved for recommending products is later repurposed by another team to set customers' credit limits. What should happen before that reuse?",
    choices: [
      'Nothing, since the model was already approved',
      'Only a check that the model still runs correctly on the new data',
      'Approval from the original development team only',
      'A new risk assessment for the new, higher-stakes use',
    ],
    correctIndex: 3,
    explanation:
      'Risk depends on use, so a new purpose, especially a consequential one like credit decisions, requires a fresh assessment and approval. The original approval covered a different context, and credit may bring new legal obligations.',
  },
  {
    id: 'aigp-governance-32',
    domainId: 'aigp-governance',
    prompt:
      "Under the EU AI Act, what must a provider do when it becomes aware of a serious incident involving its high-risk AI system?",
    choices: [
      'Report it to the market surveillance authorities within set deadlines',
      'Wait for its next annual compliance report to mention the incident',
      'Notify only its own board of directors and keep the matter internal',
      'Report it only if an affected customer files a lawsuit over the resulting harm',
    ],
    correctIndex: 0,
    explanation:
      'Providers of high-risk systems must report serious incidents to the market surveillance authorities of the member states where they occurred, within deadlines set in the Act. Internal escalation alone is not enough.',
  },
  {
    id: 'aigp-governance-33',
    domainId: 'aigp-governance',
    prompt:
      "A company wants to build public trust in how it uses AI. Which action is most credible?",
    choices: [
      'Stating in its advertising that its AI systems are completely unbiased and error-free',
      'Publishing where it uses AI, how it is governed, and how people can raise concerns',
      'Refusing to answer questions about its AI use in order to protect trade secrets',
      'Publishing all of its model source code online without any explanation or context',
    ],
    correctIndex: 1,
    explanation:
      'Meaningful transparency explains where AI is used, what safeguards exist, and how people can seek recourse. Absolute claims such as "completely unbiased" are misleading and can themselves draw regulatory action.',
  },
  {
    id: 'aigp-governance-34',
    domainId: 'aigp-governance',
    prompt:
      "A development team wants to use an open-source model downloaded from a public repository in a commercial product. Which governance check is essential?",
    choices: [
      'Confirming the model has many downloads and positive reviews from users',
      'Checking that the repository has a professional logo and a detailed README',
      'Reviewing the license terms, the model\'s provenance, and known limitations',
      'Verifying the model was released in the last month, so it is the newest option',
    ],
    correctIndex: 2,
    explanation:
      'Open-source models come with licenses that may restrict commercial or certain uses, and their provenance, training data, and safety testing vary widely. Popularity and recency do not establish that a model is fit for purpose or legally usable.',
  },
  {
    id: 'aigp-governance-35',
    domainId: 'aigp-governance',
    prompt:
      "A company assigns human reviewers to oversee a high-risk AI system. Which combination makes that oversight effective?",
    choices: [
      'Reviewers with no special training and very high daily case quotas',
      'Reviewers who may view every output but have no power to change or stop them',
      'Reviewers drawn at random from any department each week for fairness',
      'Reviewers with the competence, authority, and time to override the system',
    ],
    correctIndex: 3,
    explanation:
      'Effective oversight requires people who understand the system\'s capabilities and limits, have the authority to intervene, and have enough time to do so. The EU AI Act requires deployers to assign oversight to people with the necessary competence, training, and authority.',
  },
  {
    id: 'aigp-governance-36',
    domainId: 'aigp-governance',
    prompt:
      "A governance team applies the same lengthy review to an internal meeting-notes summarizer as to an AI system that approves mortgages. What principle is being overlooked?",
    choices: [
      'Proportionality: governance effort should match the level of risk',
      'Transparency: all AI systems must be publicly disclosed in the same level of detail',
      'Accountability: every system needs an owner',
      'Explainability: all models must be interpretable',
    ],
    correctIndex: 0,
    explanation:
      'Risk-based governance scales scrutiny to potential impact, so low-risk tools get a light review and high-risk systems get the full one. Uniform heavy review wastes resources and can push teams toward unapproved workarounds.',
  },
  {
    id: 'aigp-governance-37',
    domainId: 'aigp-governance',
    prompt:
      "A company ends its contract with an AI vendor that processed customer data for three years. What governance step is most important at exit?",
    choices: [
      'Signing a new contract with the same vendor to keep the relationship open for the future',
      'Confirmation that company data and derived artifacts are returned or deleted',
      'Keeping the vendor\'s access credentials active in case they are needed',
      'Publishing a press release announcing the change of AI vendor',
    ],
    correctIndex: 1,
    explanation:
      'Vendor offboarding should confirm return or deletion of data, including artifacts such as fine-tuned models where relevant, and revoke access. Leaving credentials active creates security risk.',
  },
  {
    id: 'aigp-governance-38',
    domainId: 'aigp-governance',
    prompt:
      "Customer complaints show that an AI claims-handling system often misreads handwritten forms, but the model team never sees the complaint data. What governance improvement is needed?",
    choices: [
      'Stop accepting handwritten forms without notice',
      'Reduce the number of complaint channels',
      'Route complaint data to the model owners and monitoring processes',
      'Retrain the model every day regardless of what the complaints actually say',
    ],
    correctIndex: 2,
    explanation:
      'Complaints are an important signal about real-world failures. Connecting them to model owners, monitoring, and incident processes closes the loop so problems are investigated and fixed.',
  },
  {
    id: 'aigp-governance-39',
    domainId: 'aigp-governance',
    prompt:
      "Business leaders complain that AI governance is slowing experimentation. Which approach best balances innovation with risk management?",
    choices: [
      'Suspend governance for all experiments until they are ready for customers',
      'Approve only projects that the governance team confirms carry zero risk',
      'Let each business team decide for itself whether governance applies to its work',
      'A controlled sandbox with pre-approved data and lighter review for low-risk tests',
    ],
    correctIndex: 3,
    explanation:
      'Internal sandboxes and tiered review let teams experiment quickly within guardrails, with fuller review before production or higher-risk use. Suspending governance or leaving it to each team invites unmanaged risk, and zero-risk projects do not exist.',
  },
  {
    id: 'aigp-governance-40',
    domainId: 'aigp-governance',
    prompt:
      "An AI governance program has well-written policies, but executives routinely override them to hit launch dates. What is the most fundamental weakness?",
    choices: [
      'Leadership culture that does not support governance',
      'The policies are too short to cover every situation',
      'The AI models are too large and complex to govern',
      'The company has too few AI tools to justify governance',
    ],
    correctIndex: 0,
    explanation:
      'Tone at the top determines whether governance is followed in practice. If leaders bypass controls, staff learn that the policies are optional, whatever the documents say.',
  },
]
