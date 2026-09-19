import type { Question } from '../../../lib/types'

// Domain 3: AI Development Lifecycle & Governance
export const lifecycleQuestions: Question[] = [
  {
    id: 'aigp-lifecycle-1',
    domainId: 'aigp-lifecycle',
    prompt:
      "A team is documenting a new credit model. It needs one artifact describing the model's intended use, performance across demographic subgroups, and known limitations, and another describing how the training dataset was collected and what it contains. Which pair fits?",
    choices: [
      "A datasheet for the model and a model card for the dataset",
      "A model card for the model and a datasheet for the dataset",
      "A data protection impact assessment covering both the model and its data",
      "A system card for the model and a data processing agreement for the dataset",
    ],
    correctIndex: 1,
    explanation:
      "Model cards document a model's intended use, evaluation across groups, and limitations; datasheets for datasets document a dataset's motivation, composition, and collection. A DPIA assesses privacy risk rather than documenting either, and a data processing agreement is a contract, not dataset documentation.",
  },
  {
    id: 'aigp-lifecycle-2',
    domainId: 'aigp-lifecycle',
    prompt:
      "A team has started collecting and labeling data for a hiring model, but has not yet documented the intended use, the target population, or acceptable error rates. What is the main risk of this sequence?",
    choices: [
      "Data collection may lag, pushing the model's launch date past the business deadline",
      "Labeling will cost more than if a baseline model had been trained on existing data first",
      "Data choices are made without criteria for judging whether they fit the purpose",
      "The model will be classed as high-risk under the EU AI Act because documentation is missing",
    ],
    correctIndex: 2,
    explanation:
      "Without a defined purpose, population, and success criteria, the team cannot tell whether the data is relevant, representative, or sufficient, and it risks building something unfit or unlawful. Speed and cost are secondary, and risk classification depends on the use, not on missing documentation.",
  },
  {
    id: 'aigp-lifecycle-3',
    domainId: 'aigp-lifecycle',
    prompt:
      "A dataset used to train a high-risk system comes with a detailed datasheet. A manager argues this makes a separate data protection impact assessment unnecessary. Why is that wrong?",
    choices: [
      "A datasheet describes the data; a DPIA assesses risks to people and how to mitigate them",
      "Datasheets can be relied on for public datasets but not for internally collected data",
      "A DPIA is triggered by dataset size, and this dataset falls below the legal record threshold",
      "Datasheets must be reviewed by the supervisory authority before they can replace a DPIA",
    ],
    correctIndex: 0,
    explanation:
      "Documentation of a dataset does not assess the necessity, proportionality, and risks of processing personal data, which is what a DPIA does. The other options invent restrictions: datasheets apply to any dataset, DPIAs are triggered by risk rather than size, and datasheets need no regulator approval.",
  },
  {
    id: 'aigp-lifecycle-4',
    domainId: 'aigp-lifecycle',
    prompt:
      "Six months after launch, a credit model's approval rates shift as applicant demographics and economic conditions change. Which lifecycle control should have caught this first?",
    choices: [
      "The pre-deployment fairness assessment, which should have anticipated demographic change",
      "The model card's list of known limitations, which flags populations the model may not fit",
      "The quarterly internal audit, which samples models from the inventory for review",
      "Ongoing monitoring of input distributions and outcomes against alert thresholds",
    ],
    correctIndex: 3,
    explanation:
      "Drift happens after launch, so it is caught by continuous monitoring of inputs, outputs, and performance with alert thresholds. Pre-deployment tests cannot see future conditions, a model card documents rather than detects, and an audit may be too infrequent to catch drift early.",
  },
  {
    id: 'aigp-lifecycle-5',
    domainId: 'aigp-lifecycle',
    prompt:
      "A bank's model development team wants to deploy a new underwriting model. Under sound model risk management, who should perform the pre-deployment validation?",
    choices: [
      "The developers, since they understand the model's design choices and weaknesses best",
      "A validation function independent of the development team, able to challenge the model",
      "The business unit that requested the model, since it owns the resulting credit risk",
      "The vendor of the modeling platform, since it knows how the algorithms were implemented",
    ],
    correctIndex: 1,
    explanation:
      "Effective challenge requires validation by people independent of development, as model risk guidance such as the US SR 11-7 expects. Developers and the requesting business have incentives to approve, and a software vendor is not positioned to validate the bank's specific use.",
  },
  {
    id: 'aigp-lifecycle-6',
    domainId: 'aigp-lifecycle',
    prompt:
      "A team tunes hyperparameters on a validation set, then reports final accuracy on that same set as evidence for regulators. What is wrong, and how should it be fixed?",
    choices: [
      "Nothing, provided the validation set is large enough to give a stable accuracy estimate",
      "Merge the validation set into training and report the cross-validated training accuracy",
      "The score is optimistically biased; final performance should come from an untouched test set",
      "Tune hyperparameters on the training set instead, so the validation score stays clean",
    ],
    correctIndex: 2,
    explanation:
      "Choosing settings on the validation set means the model is partly fit to it, so the score overstates real performance. An untouched test set gives an unbiased estimate. Size does not fix the leakage, merging removes the ability to evaluate, and tuning on training data leads to overfitting.",
  },
  {
    id: 'aigp-lifecycle-7',
    domainId: 'aigp-lifecycle',
    prompt:
      "A lender replaces a legacy underwriting model after finding it was miscalibrated for some groups. Applicants the old model denied are not re-evaluated. Which governance question should be raised?",
    choices: [
      "Whether applicants harmed by the retired model's errors need review or remediation",
      "Whether the new model's documentation should reference the legacy model's known flaws",
      "Whether the legacy model should be archived so it can be restored if the new one fails",
      "Whether the new model should reuse the old model's features to keep decisions consistent",
    ],
    correctIndex: 0,
    explanation:
      "Retirement does not undo past decisions; if the old model was flawed, the organization should consider whether affected people deserve review or remediation. The other questions concern documentation or engineering choices and do not address the harm.",
  },
  {
    id: 'aigp-lifecycle-8',
    domainId: 'aigp-lifecycle',
    prompt:
      "A team builds pipelines that retrain models on a schedule, run automated checks before promotion, and roll back when monitored performance drops. From a governance view, what is the main benefit, and the main caveat?",
    choices: [
      "It removes the need for human sign-off, since every release passes the same automated checks",
      "It helps ensure fairness, since checks run automatically on every retrained version",
      "It can replace model documentation, since the pipeline records every run and artifact",
      "Controls become consistent, but checks must cover fairness, not just accuracy",
    ],
    correctIndex: 3,
    explanation:
      "MLOps automation enforces the same controls on every release, but it only checks what it is configured to check; fairness, safety, and other governance criteria must be built in. Automation does not remove the need for human approval of material changes, guarantee fairness, or replace documentation.",
  },
  {
    id: 'aigp-lifecycle-9',
    domainId: 'aigp-lifecycle',
    prompt:
      "A regulator asks where a credit model's training data came from, under what terms, and how it was transformed. The team cannot answer. Which practice was missing?",
    choices: [
      "Model performance monitoring with drift alerts",
      "Data provenance and lineage records",
      "Hyperparameter and experiment tracking logs",
      "User acceptance testing sign-off records",
    ],
    correctIndex: 1,
    explanation:
      "Provenance and lineage records capture data origins, licensing or consent terms, and processing steps, which regulators increasingly expect. Monitoring, tuning logs, and acceptance tests do not document where data came from.",
  },
  {
    id: 'aigp-lifecycle-10',
    domainId: 'aigp-lifecycle',
    prompt:
      "A retailer wants to train a model on customer data collected only to fulfill orders. Under GDPR purpose limitation, what should it do first?",
    choices: [
      "Proceed, since the data was lawfully collected and is already held by the retailer",
      "Assess whether the new purpose is compatible, and find a legal basis if not",
      "Delete the order data and collect a fresh dataset specifically for model training",
      "Remove customer names first, which anonymizes the data and ends GDPR obligations",
    ],
    correctIndex: 1,
    explanation:
      "Reusing data for a new purpose requires a compatibility assessment or a separate lawful basis, plus updated transparency. Lawful original collection does not cover every later use, deletion is not required, and removing names usually produces pseudonymized data that is still personal data.",
  },
  {
    id: 'aigp-lifecycle-11',
    domainId: 'aigp-lifecycle',
    prompt:
      "A team is about to send 50,000 support tickets to an outside labeling vendor. Which step best protects both label quality and privacy?",
    choices: [
      "Pay per item so labelers work quickly, and spot-check a small sample at the end",
      "Send full customer records so labelers have the context to classify tickets accurately",
      "Let experienced labelers define the categories themselves, since they know the domain",
      "Write annotation guidelines, measure labeler agreement, and strip unneeded personal data",
    ],
    correctIndex: 3,
    explanation:
      "Clear guidelines and agreement checks keep labels consistent, and minimizing personal data sent to a vendor reduces privacy risk. Speed-based pay can lower quality, full records overshare, and ad hoc categories produce inconsistent labels.",
  },
  {
    id: 'aigp-lifecycle-12',
    domainId: 'aigp-lifecycle',
    prompt:
      "A team uses training, validation, and test splits. Which statement about the test set is correct?",
    choices: [
      "It is used to adjust the weights once validation-based tuning is complete",
      "It is used to choose between competing hyperparameter settings",
      "It stays untouched until the end, to estimate performance on unseen data",
      "It is used to measure drift by comparing it with production data after launch",
    ],
    correctIndex: 2,
    explanation:
      "The test set is held back to give an unbiased estimate of final performance. Training data fits weights, validation data guides tuning, and drift is measured against production data after launch.",
  },
  {
    id: 'aigp-lifecycle-13',
    domainId: 'aigp-lifecycle',
    prompt:
      "A company plans to launch a public chatbot next month. Which activity is best suited to finding ways it can be manipulated into harmful or confidential output before launch?",
    choices: [
      "Adversarial red teaming by testers who try to break the chatbot's safeguards",
      "Load testing to confirm servers can handle launch-day traffic and response times",
      "User acceptance testing with a pilot group of friendly, experienced customers",
      "Unit and integration tests on the code that calls the model API and filters responses",
    ],
    correctIndex: 0,
    explanation:
      "Red teaming uses deliberate adversarial testing to uncover jailbreaks, data leaks, and harmful outputs, and should be repeated after major changes. Load, acceptance, and unit tests check capacity, usability, and code correctness, not adversarial behavior.",
  },
  {
    id: 'aigp-lifecycle-14',
    domainId: 'aigp-lifecycle',
    prompt:
      "A hiring model is ready for launch. The team measured overall accuracy on a representative test set. What must happen before deployment?",
    choices: [
      "Nothing further, since a representative test set already reflects every group",
      "Measure performance and outcomes by subgroup against set thresholds",
      "Raise overall accuracy above the vendor's published industry benchmark",
      "Publish the model card so candidates can review the model's limitations",
    ],
    correctIndex: 1,
    explanation:
      "A representative test set still produces one overall number that can hide large subgroup disparities, so fairness testing by group is needed. Beating a benchmark and publishing documentation do not show that outcomes are fair.",
  },
  {
    id: 'aigp-lifecycle-15',
    domainId: 'aigp-lifecycle',
    prompt:
      "An approved model is retrained on six more months of data using identical code. The team wants to deploy it the same day, arguing that 'only the data changed.' What is the best response?",
    choices: [
      "Deploy it, since the original approval covered the model's design and code",
      "Deploy it and record the retraining in the model's change log so the next audit can review it",
      "Block it, since approved models may not be retrained without a full re-approval",
      "Treat it as a new version that must pass validation and fairness checks before release",
    ],
    correctIndex: 3,
    explanation:
      "New data can shift performance and fairness, so each retrained version should pass defined checks before release. Retraining is normal, but earlier approval does not cover an untested version, and after-the-fact documentation is not a control.",
  },
  {
    id: 'aigp-lifecycle-16',
    domainId: 'aigp-lifecycle',
    prompt:
      "A bank wants to compare a new fraud model's decisions with the current model on real traffic, without any customer being affected by the new model. Which deployment approach fits?",
    choices: [
      "Shadow deployment, with outputs logged but not acted on",
      "Canary release to a small share of live customers",
      "A/B test with randomly assigned live customers",
      "Blue-green deployment with an instant traffic switchover",
    ],
    correctIndex: 0,
    explanation:
      "Shadow deployment runs the new model on live inputs but does not act on its outputs. Canary releases and A/B tests expose some real users to the new model, and blue-green deployment switches traffic between environments.",
  },
  {
    id: 'aigp-lifecycle-17',
    domainId: 'aigp-lifecycle',
    prompt:
      "Which element is most important to have in place before a customer-facing AI system goes live, rather than being developed afterward?",
    choices: [
      "A retraining schedule, so the model stays accurate as customer behavior changes",
      "An incident response plan, including owners and how to pause or roll back the system",
      "A plan for a public report on the system's first year of real-world performance",
      "A feature roadmap, so users know what improvements to expect after launch",
    ],
    correctIndex: 1,
    explanation:
      "If something goes wrong on day one, the organization needs escalation paths, owners, and a way to pause or roll back already in place. Retraining schedules, annual reports, and roadmaps can follow later.",
  },
  {
    id: 'aigp-lifecycle-18',
    domainId: 'aigp-lifecycle',
    prompt:
      "The EU AI Act requires high-risk systems to allow automatic logging of events. Which purpose does this primarily serve?",
    choices: [
      "Reducing inference costs by caching and reusing responses to repeated requests",
      "Supporting continuous learning by feeding each decision back into the model",
      "Traceability, so decisions can be reconstructed for monitoring and investigations",
      "Building a labeled dataset for training the next version of the system",
    ],
    correctIndex: 2,
    explanation:
      "Record-keeping lets decisions be reconstructed and supports monitoring and investigation of incidents. Logs may have other uses, but that is not the legal purpose, and reusing them for training would raise its own data protection questions.",
  },
  {
    id: 'aigp-lifecycle-19',
    domainId: 'aigp-lifecycle',
    prompt:
      "A benefits agency requires caseworkers to review AI eligibility recommendations. Which design best supports meaningful oversight?",
    choices: [
      "Show the recommendation with one-click approval, to keep review fast and consistent",
      "Hide the recommendation until the caseworker has decided, to prevent anchoring on it",
      "Show key factors and confidence, and make overrides easy with a reason",
      "Set a high case quota so reviews stay consistent and backlogs do not build up",
    ],
    correctIndex: 2,
    explanation:
      "Reviewers need context to judge a recommendation and a practical way to disagree, with reasons recorded for monitoring. Approve-only screens and high quotas encourage rubber-stamping. Hiding recommendations in every case can have value in some settings but discards useful information and is not generally required.",
  },
  {
    id: 'aigp-lifecycle-20',
    domainId: 'aigp-lifecycle',
    prompt:
      "Why should acceptance thresholds for a model, such as maximum subgroup error rates, be set before testing begins?",
    choices: [
      "So the bar cannot be quietly adjusted afterward to fit whatever results appear",
      "Because regulators expect identical thresholds for every model in a given sector",
      "So that the model is tuned to pass the thresholds on its first formal test",
      "Because thresholds are legally fixed once testing has formally started",
    ],
    correctIndex: 0,
    explanation:
      "Setting criteria in advance makes go/no-go decisions objective and auditable. Thresholds depend on context, testing can still fail, and criteria can be revised through a documented process when justified.",
  },
  {
    id: 'aigp-lifecycle-21',
    domainId: 'aigp-lifecycle',
    prompt:
      "A company plans to build a claims-summarization feature on a third-party foundation model API. Which evaluation should come first?",
    choices: [
      "Comparing the vendor's public benchmark scores with those of competing models",
      "Checking which available model offers the largest context window for long claims",
      "Reviewing the vendor's security certifications, such as SOC 2 and ISO/IEC 27001",
      "Testing on representative claims and reviewing the vendor's data terms",
    ],
    correctIndex: 3,
    explanation:
      "General benchmarks and features do not show fitness for a specific task, so testing on representative data comes first, alongside terms on data use, retention, and training. Security certifications matter but cover only part of the risk.",
  },
  {
    id: 'aigp-lifecycle-22',
    domainId: 'aigp-lifecycle',
    prompt:
      "After launch, which source is most likely to reveal problems that automated monitoring metrics miss, such as confusing or unfair outputs?",
    choices: [
      "More frequent retraining, so the model keeps pace with new patterns in user inputs",
      "Structured channels for users and affected people to report problems they notice",
      "A higher confidence threshold, so uncertain outputs are suppressed before users see them",
      "Clearer terms of service that explain the system's limitations to every user",
    ],
    correctIndex: 1,
    explanation:
      "User and stakeholder feedback surfaces real-world problems that metrics cannot see, and it should feed monitoring and incident processes. Retraining or threshold changes without that input may not address the actual issue.",
  },
  {
    id: 'aigp-lifecycle-23',
    domainId: 'aigp-lifecycle',
    prompt:
      "An auditor asks a team to reproduce the exact model that denied an applicant 14 months ago. Which practice makes this possible?",
    choices: [
      "Keeping the current production model and its release notes",
      "Storing the applicant's original application file and the decision letter",
      "Versioning models, code, data references, and configuration for every release",
      "Retaining the design documents and the original model risk assessment",
    ],
    correctIndex: 2,
    explanation:
      "Reproducing a past decision requires the exact model version and everything used to produce it. The current model may behave differently, and the application file or design document alone cannot recreate the decision.",
  },
  {
    id: 'aigp-lifecycle-24',
    domainId: 'aigp-lifecycle',
    prompt:
      "A team supplements scarce real data with synthetic records to train a rare-disease model. Which validation step matters most?",
    choices: [
      "Checking that synthetic data keeps real patterns, and testing on real data",
      "Confirming the synthetic data generator is open source and independently reviewed",
      "Generating synthetic records in large volumes so they outnumber the real records",
      "Skipping privacy review, since synthetic data contains no real patient records",
    ],
    correctIndex: 0,
    explanation:
      "Synthetic data can distort or miss real patterns, so fidelity must be checked and final performance confirmed on real data. Open-source status and volume ratios do not ensure quality, and synthetic data can still reproduce real records.",
  },
  {
    id: 'aigp-lifecycle-25',
    domainId: 'aigp-lifecycle',
    prompt:
      "Designing a churn model, a data scientist wants to add customers' full browsing histories 'in case they help.' Which principle should decide this?",
    choices: [
      "Include them, since additional features tend to improve accuracy in churn models",
      "Include the data, provided it is encrypted at rest and access is logged",
      "Include it for now and remove it later if feature analysis shows it is unhelpful",
      "Use only data that is necessary and proportionate for the stated purpose of the model",
    ],
    correctIndex: 3,
    explanation:
      "Data minimization and privacy by design require that data be necessary for the purpose before it is collected or used. Encryption protects data but does not justify collecting it, and extra features do not reliably help.",
  },
  {
    id: 'aigp-lifecycle-26',
    domainId: 'aigp-lifecycle',
    prompt:
      "An organization is decommissioning an AI system. Which step is most often overlooked from a privacy standpoint?",
    choices: [
      "Announcing the retirement to customers and explaining what replaces the system",
      "Applying retention rules to training data, logs, and model artifacts",
      "Archiving the system's user interface designs and user research findings",
      "Transferring software licenses and support contracts to the replacement vendor",
    ],
    correctIndex: 1,
    explanation:
      "Retired systems leave behind datasets, logs, and models that can contain personal data. Retention schedules should decide what is kept for accountability and what is securely deleted. The other steps matter operationally but not for privacy.",
  },
  {
    id: 'aigp-lifecycle-27',
    domainId: 'aigp-lifecycle',
    prompt:
      "A team accepts slightly lower overall accuracy to greatly reduce error-rate gaps between groups. What should it do with this decision?",
    choices: [
      "Document the tradeoff, the reasoning behind it, and who approved it at what level",
      "Keep the decision informal, to limit what could surface in legal discovery",
      "Reverse it, since overall accuracy should be optimized before fairness adjustments",
      "Leave it with the data scientist who built the model, who best understands it",
    ],
    correctIndex: 0,
    explanation:
      "Tradeoffs between accuracy and fairness are value judgments that should be documented and approved at the right level of authority, which supports accountability and later review. Hiding or informally delegating them undermines governance.",
  },
  {
    id: 'aigp-lifecycle-28',
    domainId: 'aigp-lifecycle',
    prompt:
      "When is an AI impact assessment most useful?",
    choices: [
      "Once, immediately before launch, when the design is final and fully documented",
      "After the first year of operation, when real outcome data is available to assess",
      "When a regulator or customer requests one as part of a review or complaint",
      "Early in design, and then updated whenever the system, its data, or its use changes",
    ],
    correctIndex: 3,
    explanation:
      "Assessments are most valuable when their findings can still shape design, and they should be revisited when the system, data, or context changes. A single pre-launch check often comes too late to influence key decisions.",
  },
  {
    id: 'aigp-lifecycle-29',
    domainId: 'aigp-lifecycle',
    prompt:
      "A city designing an AI tool to prioritize housing inspections invites tenant and landlord groups to review early prototypes. What is the main governance benefit?",
    choices: [
      "It shares legal responsibility for the tool's outcomes with the community groups",
      "It surfaces impacts and blind spots the design team may miss, while design can still change",
      "It can stand in for technical fairness testing, since affected groups are best placed to judge fairness",
      "It ensures public acceptance of the tool once it is deployed across the city",
    ],
    correctIndex: 1,
    explanation:
      "Engaging affected stakeholders brings in lived experience and helps identify harms early. It complements rather than replaces technical testing, and it does not shift accountability or guarantee acceptance.",
  },
  {
    id: 'aigp-lifecycle-30',
    domainId: 'aigp-lifecycle',
    prompt:
      "A delivery robot performed well in months of testing on sunny days along fixed routes. Before a city-wide launch, which testing gap matters most?",
    choices: [
      "Performance on the same routes at higher speeds and heavier loads",
      "Behavior in conditions it has not met, such as rain, glare, or crowds",
      "Battery life and charging times under normal daily delivery schedules",
      "Customer satisfaction with delivery times on the existing test routes",
    ],
    correctIndex: 1,
    explanation:
      "Robustness testing checks how a system behaves in conditions that differ from its test data, which is where serious failures tend to occur. Speed, battery, and satisfaction are operational metrics that do not reveal these failure modes.",
  },
  {
    id: 'aigp-lifecycle-31',
    domainId: 'aigp-lifecycle',
    prompt:
      "Under the EU AI Act, what continues after a provider places a high-risk system on the market?",
    choices: [
      "Nothing further, provided the conformity assessment and CE marking are complete",
      "Annual re-certification of the system by a notified body in each member state",
      "Post-market monitoring proportionate to the risks, plus serious-incident reporting",
      "Retraining at least monthly so the system reflects current real-world data",
    ],
    correctIndex: 2,
    explanation:
      "Providers must run post-market monitoring throughout the system's life and report serious incidents. The Act does not require annual notified-body re-certification for every system or a retraining schedule.",
  },
  {
    id: 'aigp-lifecycle-32',
    domainId: 'aigp-lifecycle',
    prompt:
      "A company adds filters around its customer-facing language model that block responses containing personal data or off-topic content. What is the main caveat of relying on these guardrails?",
    choices: [
      "Guardrails can be bypassed, so they need testing and should be one layer of several",
      "Guardrails make outputs deterministic, which can make responses feel repetitive",
      "Guardrails replace the need for red teaming, which can lead teams to skip it",
      "Guardrails work reliably only on open-weight models that the company hosts itself",
    ],
    correctIndex: 0,
    explanation:
      "Input and output filters are useful but can be evaded, so they should be tested and combined with other controls such as data minimization and monitoring. They do not make outputs deterministic, replace red teaming, or depend on open weights.",
  },
  {
    id: 'aigp-lifecycle-33',
    domainId: 'aigp-lifecycle',
    prompt:
      "A product manager edits a production chatbot's system prompt directly in the live console, with no review. Why is this a governance problem?",
    choices: [
      "System prompts have little effect on behavior, so the risk is mostly reputational",
      "Only engineers are legally permitted to edit prompts on production AI systems",
      "Prompt changes can alter behavior, including safety, so they need change control",
      "Editing prompts voids the model vendor's warranty and support commitments",
    ],
    correctIndex: 2,
    explanation:
      "System prompts materially shape behavior, so changes should be versioned, tested, and approved like code. There is no legal rule about who may edit them, and warranty terms are not the governance issue.",
  },
  {
    id: 'aigp-lifecycle-34',
    domainId: 'aigp-lifecycle',
    prompt:
      "To evaluate thousands of chatbot answers, a team uses a second language model as a grader. What is the key limitation to manage?",
    choices: [
      "Model graders can score multiple-choice answers but not free-form text",
      "The grader has its own biases, so it should be checked against human review",
      "Using a model grader is prohibited for evaluations in regulated industries",
      "Model graders give scores identical to human reviewers, so spot checks add little",
    ],
    correctIndex: 1,
    explanation:
      "Automated graders scale well but may favor certain styles or share failure modes with the model being tested, so they should be calibrated against human evaluation on a sample. They can grade free text and are not generally prohibited.",
  },
  {
    id: 'aigp-lifecycle-35',
    domainId: 'aigp-lifecycle',
    prompt:
      "What is the main benefit of agreeing on rollback triggers, such as 'revert if complaints double,' before deploying a model update?",
    choices: [
      "It ensures the update will not need to be rolled back once it is in production",
      "It reduces the need for close monitoring, since the triggers act automatically",
      "It makes the update compliant with AI regulations that require rollback plans",
      "It allows fast, consistent action instead of debate during an incident",
    ],
    correctIndex: 3,
    explanation:
      "Pre-agreed triggers let teams act quickly when monitoring shows a problem, limiting harm. They rely on monitoring rather than replacing it and do not by themselves ensure compliance.",
  },
  {
    id: 'aigp-lifecycle-36',
    domainId: 'aigp-lifecycle',
    prompt:
      "Under the EU AI Act, many high-risk systems listed in Annex III can undergo conformity assessment based on internal control. What does that mean?",
    choices: [
      "The provider self-assesses without a notified body and declares conformity",
      "No conformity assessment is required, provided the system is registered in the EU database",
      "A national market surveillance authority must approve each system before launch",
      "The deployer performs the assessment, since it controls how the system is used",
    ],
    correctIndex: 0,
    explanation:
      "For most Annex III systems, providers self-assess against the requirements, draw up an EU declaration of conformity, and affix CE marking. Some systems, such as certain biometric ones, may need a notified body. Assessment is still required, and it is the provider's responsibility.",
  },
  {
    id: 'aigp-lifecycle-37',
    domainId: 'aigp-lifecycle',
    prompt:
      "Which of the following belongs in the technical documentation the EU AI Act requires for high-risk systems?",
    choices: [
      "The personal contact details and qualifications of each developer on the team",
      "A list of customers and the contract terms under which the system is supplied to each of them",
      "A description of the system, its development, data, performance, and risk management",
      "The provider's marketing materials and pricing plans for the system",
    ],
    correctIndex: 2,
    explanation:
      "Technical documentation must let authorities assess compliance, covering design, development process, data, performance metrics, risk management, and human oversight measures. Customer lists and commercial plans are not required.",
  },
  {
    id: 'aigp-lifecycle-38',
    domainId: 'aigp-lifecycle',
    prompt:
      "Which requirement does the EU AI Act place on training, validation, and testing data for high-risk systems?",
    choices: [
      "Data must be collected and stored within the EU for the system's full lifecycle",
      "Data must be published so that affected people can inspect how the system was trained",
      "Data must include a minimum number of records set out in harmonised standards",
      "Data must be relevant, sufficiently representative, and as error-free as possible",
    ],
    correctIndex: 3,
    explanation:
      "Article 10 requires appropriate data governance, including examination for possible biases, and datasets that are relevant, sufficiently representative, and as error-free and complete as possible for the intended purpose. There is no location, publication, or size requirement.",
  },
  {
    id: 'aigp-lifecycle-39',
    domainId: 'aigp-lifecycle',
    prompt:
      "A company retires a customer-facing recommendation system. Which step best supports accountability afterward?",
    choices: [
      "Delete all records immediately, to reduce the organization's data protection exposure",
      "Keep required documentation and decision records, and inform users",
      "Leave the system running without monitoring until usage naturally stops",
      "Reuse the model for a related purpose, since it has already been approved once",
    ],
    correctIndex: 1,
    explanation:
      "Keeping documentation and legally required records preserves the ability to answer questions about past decisions, and informing users manages the transition. Immediate deletion can breach retention duties, and unmonitored operation or unreviewed reuse bypasses governance.",
  },
  {
    id: 'aigp-lifecycle-40',
    domainId: 'aigp-lifecycle',
    prompt:
      "A company's AI vendor updates its underlying model without notice, and document-classification accuracy quietly drops. Which combination of controls would best catch and prevent this?",
    choices: [
      "A longer vendor contract with fixed pricing and service levels for uptime",
      "Switching to the vendor's premium tier, which offers more stable model versions",
      "An annual review of the vendor's release notes and published model changes",
      "Regression tests and monitoring on its own use case, plus contractual change notice",
    ],
    correctIndex: 3,
    explanation:
      "Third-party models can change underneath a deployer, so continuous monitoring and regression tests on representative data detect shifts, and contracts should require notice of material changes. Price, tier, and annual reviews do not catch silent updates.",
  },
]
