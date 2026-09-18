import type { Question } from '../../../lib/types'

// Domain 3: AI Development Lifecycle & Governance (questions 9-40)
export const lifecycleQuestions: Question[] = [
  {
    id: 'aigp-lifecycle-9',
    domainId: 'aigp-lifecycle',
    prompt:
      "Months after launch, a regulator asks a company where the training data for its credit model came from and what transformations were applied to it. The team cannot answer. Which practice was missing?",
    choices: [
      'Hyperparameter tuning logs',
      'Data provenance and lineage documentation',
      'A user acceptance test plan',
      'A model performance dashboard with accuracy trends',
    ],
    correctIndex: 1,
    explanation:
      'Data provenance and lineage records show where data came from, under what terms, and how it was processed, which is essential for accountability and compliance. Performance dashboards and tuning logs do not capture the data\'s origins.',
  },
  {
    id: 'aigp-lifecycle-10',
    domainId: 'aigp-lifecycle',
    prompt:
      "A retailer wants to train a new AI model using customer data originally collected only to fulfill orders. Under data protection principles such as the GDPR's purpose limitation, what must it do first?",
    choices: [
      'Nothing, because the data is already held and was collected lawfully',
      'Delete all order data and ask customers to re-submit their orders',
      'Assess whether the new use is compatible or needs its own legal basis',
      'Publish the training dataset so customers can see how it is used',
    ],
    correctIndex: 2,
    explanation:
      'Purpose limitation means data collected for one purpose cannot simply be reused for an incompatible one. The organization must assess compatibility or establish a separate lawful basis, and it may need to update notices.',
  },
  {
    id: 'aigp-lifecycle-11',
    domainId: 'aigp-lifecycle',
    prompt:
      "Before sending thousands of support tickets to an outside vendor for labeling, what should an AI team prioritize to protect both data quality and privacy?",
    choices: [
      'Clear annotation guidelines, quality checks, and minimizing personal data shared',
      'Paying labelers per item and letting them work as quickly as they like',
      'Letting each labeler define the categories as they see fit for each ticket',
      'Sending full customer records so labelers have as much context as possible',
    ],
    correctIndex: 0,
    explanation:
      'Good labeling needs consistent guidelines and quality control such as agreement checks, and sharing data with vendors should be minimized and covered by contract. Fast per-item pay, ad hoc categories, and oversharing all undermine quality or privacy.',
  },
  {
    id: 'aigp-lifecycle-12',
    domainId: 'aigp-lifecycle',
    prompt:
      "A team splits its data into training, validation, and test sets. What is the specific role of the test set?",
    choices: [
      'To train the model weights after the validation set is exhausted',
      'To choose between competing hyperparameter settings during tuning',
      'To store backup copies of the training data in case of loss',
      'To give a final, unbiased estimate of performance on unseen data',
    ],
    correctIndex: 3,
    explanation:
      'The test set is held back until the end to estimate how the finished model will perform on new data. Training data fits the weights and validation data guides tuning; reusing either to report final performance inflates results.',
  },
  {
    id: 'aigp-lifecycle-13',
    domainId: 'aigp-lifecycle',
    prompt:
      "Before launching a public chatbot, a company hires specialists to deliberately try to make it produce harmful, biased, or confidential output. What is this activity called, and when is it most valuable?",
    choices: [
      'User acceptance testing, run once after launch with a group of real customers',
      'Red teaming, run before deployment and repeated after major changes',
      'Unit testing, run once by developers during the initial coding',
      'Load testing, run to confirm servers can handle peak traffic',
    ],
    correctIndex: 1,
    explanation:
      'Red teaming uses adversarial testing to uncover failure modes before real users find them, and it should be repeated when the system changes. Unit and load testing check code correctness and capacity, not harmful model behavior.',
  },
  {
    id: 'aigp-lifecycle-14',
    domainId: 'aigp-lifecycle',
    prompt:
      "A hiring model is ready for launch, but the team has only measured overall accuracy. What should happen before deployment?",
    choices: [
      'Launch now and look for bias complaints afterward',
      'Increase overall accuracy until it passes 95%',
      'Test performance and outcomes across relevant demographic subgroups',
      'Remove all demographic data from the organization\'s systems before launch',
    ],
    correctIndex: 2,
    explanation:
      'Overall accuracy can hide large disparities, so fairness testing across subgroups is a pre-deployment requirement for consequential systems. Waiting for complaints shifts the harm onto applicants.',
  },
  {
    id: 'aigp-lifecycle-15',
    domainId: 'aigp-lifecycle',
    prompt:
      "An approved model is retrained on six more months of data using the same code. The team wants to push it to production immediately, since 'nothing changed but the data.' What is the governance issue?",
    choices: [
      'A retrained model is a new version that needs validation before release',
      'Retraining with new data is prohibited for models that have already been approved',
      'The original approval automatically covers any retraining',
      'Only changes to the code, not the data, require review',
    ],
    correctIndex: 0,
    explanation:
      'New data can change a model\'s behavior and fairness, so each retrained version should pass validation and change-management checks. Retraining is normal, but it is not automatically covered by an earlier approval.',
  },
  {
    id: 'aigp-lifecycle-16',
    domainId: 'aigp-lifecycle',
    prompt:
      "A bank runs a new fraud model silently alongside the existing one for a month, comparing their decisions without letting the new model affect customers. What is this deployment technique?",
    choices: [
      'A/B testing with live customer impact',
      'Big-bang deployment',
      'Canary release to all customers',
      'Shadow deployment',
    ],
    correctIndex: 3,
    explanation:
      'Shadow deployment runs a new model on real traffic without acting on its outputs, allowing safe comparison. A/B tests and canary releases expose some users to the new model, and big-bang deployment switches everyone at once.',
  },
  {
    id: 'aigp-lifecycle-17',
    domainId: 'aigp-lifecycle',
    prompt:
      "When is the best time to define how the organization will respond if a new AI system causes harm, including who is notified and how the system can be paused?",
    choices: [
      'After the first incident, when the risks are clearer',
      'Before deployment, as part of launch readiness',
      'Only if a regulator requests it',
      'During the annual audit cycle',
    ],
    correctIndex: 1,
    explanation:
      'Incident response plans, escalation paths, and a way to pause or roll back the system should be in place before launch. Improvising during an incident leads to slower, less effective responses.',
  },
  {
    id: 'aigp-lifecycle-18',
    domainId: 'aigp-lifecycle',
    prompt:
      "A high-risk AI system automatically records the input data, timestamps, and outputs for each decision. Which lifecycle objective does this primarily support?",
    choices: [
      'Reducing inference costs by caching and reusing frequent decisions',
      'Improving model accuracy in real time through feedback',
      'Traceability for audits, investigations, and monitoring',
      'Speeding up model training by reusing logged examples',
    ],
    correctIndex: 2,
    explanation:
      'Automatic logging enables decisions to be reconstructed and investigated, and it supports post-market monitoring. The EU AI Act requires high-risk systems to allow automatic recording of events for this purpose.',
  },
  {
    id: 'aigp-lifecycle-19',
    domainId: 'aigp-lifecycle',
    prompt:
      "A benefits agency requires human review of AI eligibility recommendations. Which interface design best supports meaningful oversight?",
    choices: [
      'Showing only the AI\'s final decision with an Approve button',
      'Hiding the AI\'s recommendation until the reviewer has decided each case independently',
      'Requiring reviewers to process 200 cases per hour',
      'Showing key factors and confidence, with an easy override and reason field',
    ],
    correctIndex: 3,
    explanation:
      'Reviewers need enough context to judge a recommendation and a practical way to disagree. An approve-only interface and high quotas encourage rubber-stamping, while hiding the recommendation entirely removes its value to the reviewer.',
  },
  {
    id: 'aigp-lifecycle-20',
    domainId: 'aigp-lifecycle',
    prompt:
      "Before development starts, a governance team insists on documented thresholds a model must meet, such as maximum error rates by subgroup, before it can launch. Why set these in advance?",
    choices: [
      'To prevent the bar from being lowered to fit whatever results come in',
      'To guarantee the model will pass on the first attempt',
      'Because regulators require exactly the same threshold for every model in every sector',
      'To avoid having to test the model at all',
    ],
    correctIndex: 0,
    explanation:
      'Pre-defined acceptance criteria make go/no-go decisions objective and auditable, and they stop teams from rationalizing weak results after the fact. Thresholds depend on context, and testing is still required to show they are met.',
  },
  {
    id: 'aigp-lifecycle-21',
    domainId: 'aigp-lifecycle',
    prompt:
      "A company plans to build a claims-summarization feature on top of a third-party foundation model accessed through an API. What should the team evaluate first?",
    choices: [
      'Only the vendor headline benchmark scores and published leaderboard rankings',
      'Performance and risks on its own use case and data, plus the vendor\'s data terms',
      'Nothing, because the vendor is responsible for the model and all of its outputs',
      'Whether the vendor model is the largest and newest one available on the market',
    ],
    correctIndex: 1,
    explanation:
      'General benchmarks do not show how a model performs on a specific task, so deployers should test it on representative data and review the vendor\'s terms on data use, retention, and security. Using a vendor model does not transfer the deployer\'s responsibilities.',
  },
  {
    id: 'aigp-lifecycle-22',
    domainId: 'aigp-lifecycle',
    prompt:
      "After launch, a team wants to learn about problems that monitoring metrics might miss, such as confusing outputs or unfair treatment users notice. What should it build in?",
    choices: [
      'A longer terms-of-service agreement',
      'More frequent model retraining',
      'Easy channels for users to flag issues, routed to the team',
      'A higher confidence threshold for all outputs shown to users',
    ],
    correctIndex: 2,
    explanation:
      'User feedback and complaint channels surface real-world issues that automated metrics cannot detect, and they feed monitoring and incident processes. Retraining or changing thresholds without that input may not address the actual problem.',
  },
  {
    id: 'aigp-lifecycle-23',
    domainId: 'aigp-lifecycle',
    prompt:
      "An auditor asks a team to reproduce exactly the model version that denied a particular applicant 14 months ago. What must the team have maintained?",
    choices: [
      'A copy of the current production model and its latest release notes',
      'The original project proposal',
      'A record of the applicant\'s email address',
      'Versioned models, code, data snapshots, and configurations',
    ],
    correctIndex: 3,
    explanation:
      'Reproducing a past decision requires versioning every ingredient: model artifacts, code, training data references, and configuration. The current model may behave differently from the one in use at the time.',
  },
  {
    id: 'aigp-lifecycle-24',
    domainId: 'aigp-lifecycle',
    prompt:
      "A team plans to supplement scarce real data with synthetic records to train a rare-disease model. What validation step is most important?",
    choices: [
      'Check that synthetic data matches real-world patterns and test the model on real data',
      'Confirm the synthetic data generator is open source and widely used by others',
      'Make sure synthetic records outnumber real records at least ten to one in training',
      'Skip real-data testing, since synthetic data carries no privacy or accuracy risk',
    ],
    correctIndex: 0,
    explanation:
      'Synthetic data can distort or miss real patterns, so its fidelity must be checked and the model\'s performance confirmed on real data. Synthetic data can also still carry privacy risk if it reproduces real records.',
  },
  {
    id: 'aigp-lifecycle-25',
    domainId: 'aigp-lifecycle',
    prompt:
      "Designing a churn-prediction model, a data scientist proposes including customers' full browsing histories 'in case they help.' Which principle should shape the decision?",
    choices: [
      'Maximize features, since more data always improves the accuracy of any model',
      'Data minimization: use only data necessary for the stated purpose',
      'Include all data, but encrypt it at rest',
      'Let the model decide which data to collect in the future',
    ],
    correctIndex: 1,
    explanation:
      'Privacy by design and data minimization call for collecting and using only data that is necessary and proportionate. Encryption protects data but does not justify collecting it, and extra features do not always improve a model.',
  },
  {
    id: 'aigp-lifecycle-26',
    domainId: 'aigp-lifecycle',
    prompt:
      "An organization is decommissioning an AI system. Which step is most often overlooked but important from a privacy standpoint?",
    choices: [
      'Announcing the decommissioning on social media and the company website',
      'Keeping the system running quietly in the background as an emergency backup',
      'Applying retention rules to its training data, logs, and model artifacts',
      'Transferring the model to an unrelated business unit for possible future reuse',
    ],
    correctIndex: 2,
    explanation:
      'Retired systems often leave behind copies of personal data, logs, and models that can themselves contain personal data. Retention schedules should decide what is archived for accountability and what is securely deleted.',
  },
  {
    id: 'aigp-lifecycle-27',
    domainId: 'aigp-lifecycle',
    prompt:
      "A team accepts slightly lower overall accuracy in exchange for much smaller error-rate differences between groups. What should it do with this decision?",
    choices: [
      'Keep it informal to avoid legal discovery',
      'Reverse it, since accuracy should always be maximized',
      'Leave it to the individual data scientist to decide without any review',
      'Document the tradeoff, the reasoning, and who approved it',
    ],
    correctIndex: 3,
    explanation:
      'Design tradeoffs between accuracy and fairness are value judgments that should be documented and approved at the right level of authority. That record supports accountability and later review.',
  },
  {
    id: 'aigp-lifecycle-28',
    domainId: 'aigp-lifecycle',
    prompt:
      "When should an AI impact assessment be carried out for a new system?",
    choices: [
      'Early in design, then revisited as the system and its use change',
      'Once, immediately before launch, after the design is final',
      'Only after complaints from affected people are received',
      'Only when a regulator formally asks the organization to produce one',
    ],
    correctIndex: 0,
    explanation:
      'Impact assessments are most useful early, when findings can still shape design, and they should be updated as the system, data, or context changes. A single pre-launch check often comes too late to influence key choices.',
  },
  {
    id: 'aigp-lifecycle-29',
    domainId: 'aigp-lifecycle',
    prompt:
      "A city designing an AI tool to prioritize housing inspections invites tenant groups and landlord associations to review early prototypes. What is the main governance benefit?",
    choices: [
      'It transfers legal liability for the tool to the community groups',
      'It surfaces impacts and blind spots the design team may miss',
      'It removes the need for technical testing',
      'It guarantees the tool will be popular',
    ],
    correctIndex: 1,
    explanation:
      'Engaging affected stakeholders brings in lived experience and helps identify harms and fairness concerns early. It complements technical testing rather than replacing it, and it does not shift accountability.',
  },
  {
    id: 'aigp-lifecycle-30',
    domainId: 'aigp-lifecycle',
    prompt:
      "A self-driving delivery robot performs well in sunny test conditions. Before a city-wide launch, what testing gap should be addressed?",
    choices: [
      'Repeating tests on the exact sunny routes already driven successfully',
      'Increasing the robot top speed so deliveries finish before any bad weather arrives',
      'Robustness testing under rare and unusual conditions such as snow or glare',
      'Reducing the number of sensors to lower cost and simplify maintenance',
    ],
    correctIndex: 2,
    explanation:
      'Robustness testing checks how a system behaves in conditions that differ from its training and test data, such as bad weather, sensor noise, or unusual obstacles. Repeating familiar conditions does not reveal these failure modes.',
  },
  {
    id: 'aigp-lifecycle-31',
    domainId: 'aigp-lifecycle',
    prompt:
      "Under the EU AI Act, what must providers of high-risk AI systems do after placing a system on the market?",
    choices: [
      'Nothing further, once the initial conformity assessment has been completed',
      'Retrain the system every month',
      'Publish the model weights',
      'Run a post-market monitoring system proportionate to the risks',
    ],
    correctIndex: 3,
    explanation:
      'Providers of high-risk systems must establish post-market monitoring to collect and analyze performance data throughout the system\'s life and to report serious incidents. Compliance continues after launch.',
  },
  {
    id: 'aigp-lifecycle-32',
    domainId: 'aigp-lifecycle',
    prompt:
      "A company adds components around its customer-facing language model that block responses containing personal data, profanity, or off-topic content before they reach users. What are these components called?",
    choices: [
      'Output guardrails',
      'Embeddings',
      'Hyperparameters',
      'Training checkpoints',
    ],
    correctIndex: 0,
    explanation:
      'Guardrails are controls that filter or constrain model inputs and outputs to enforce policy. They are a common layer of defense for generative AI but can be bypassed, so they should be tested along with the model.',
  },
  {
    id: 'aigp-lifecycle-33',
    domainId: 'aigp-lifecycle',
    prompt:
      "A product manager edits the system prompt of a production chatbot directly in the live console to change its tone, with no review or testing. What is the governance concern?",
    choices: [
      'System prompts are ignored by most language models, so edits have no effect',
      'Prompt changes can alter behavior and need change control like code',
      'Tone changes to a chatbot are prohibited under most AI regulations',
      'Only engineers are legally allowed to read or edit system prompts',
    ],
    correctIndex: 1,
    explanation:
      'System prompts materially shape model behavior, including safety behavior, so changes should be versioned, tested, and approved. An unreviewed edit can quietly break safeguards.',
  },
  {
    id: 'aigp-lifecycle-34',
    domainId: 'aigp-lifecycle',
    prompt:
      "To evaluate thousands of chatbot answers quickly, a team uses a second language model to grade them. What is the main limitation to manage?",
    choices: [
      'Model graders cannot evaluate free-form text, only multiple-choice answers',
      'Using a model grader is prohibited for companies in regulated industries',
      'The grading model can have its own biases, so it must be checked against human review',
      'Model grading always produces exactly the same scores that expert human reviewers would give',
    ],
    correctIndex: 2,
    explanation:
      'Automated graders scale well but can share blind spots with the system being tested, favor certain styles, or misjudge quality. Teams should calibrate them against human evaluation on a sample.',
  },
  {
    id: 'aigp-lifecycle-35',
    domainId: 'aigp-lifecycle',
    prompt:
      "What is the benefit of defining specific rollback triggers, such as 'revert if the complaint rate doubles,' before deploying a new model version?",
    choices: [
      'It guarantees the new version will never need to be rolled back in production',
      'It removes the need to monitor the new version once it has been deployed',
      'It makes the new version legally compliant with AI regulations automatically',
      'It enables fast, pre-agreed action instead of debating during an incident',
    ],
    correctIndex: 3,
    explanation:
      'Pre-agreed rollback criteria let teams act quickly and consistently when monitoring shows a problem, limiting harm. They depend on monitoring rather than replacing it.',
  },
  {
    id: 'aigp-lifecycle-36',
    domainId: 'aigp-lifecycle',
    prompt:
      "Under the EU AI Act, what must generally happen before a provider places a high-risk AI system on the EU market?",
    choices: [
      'A conformity assessment showing it meets the Act\'s requirements',
      'Approval of the individual system by a vote of the European Parliament',
      'Publication of the full training data on the provider website',
      'A public comment period of at least 90 days in every member state',
    ],
    correctIndex: 0,
    explanation:
      'High-risk systems must undergo conformity assessment, which for many systems is based on internal control, before being placed on the market. Providers must then draw up an EU declaration of conformity and apply the CE marking.',
  },
  {
    id: 'aigp-lifecycle-37',
    domainId: 'aigp-lifecycle',
    prompt:
      "Which of the following is part of the technical documentation the EU AI Act requires for high-risk AI systems?",
    choices: [
      'The personal contact details and qualifications of every developer',
      'A description of the system, its development process, data, and performance',
      'A list of all customers who purchased the system and copies of their contracts',
      'The provider marketing plan and pricing strategy for the system',
    ],
    correctIndex: 1,
    explanation:
      'Technical documentation must describe the system\'s design, development, data, performance, risk management, and oversight measures so authorities can assess compliance. Customer lists and marketing plans are not part of it.',
  },
  {
    id: 'aigp-lifecycle-38',
    domainId: 'aigp-lifecycle',
    prompt:
      "The EU AI Act sets data and data governance requirements for training, validation, and testing datasets used in high-risk AI systems. Which requirement is included?",
    choices: [
      'Datasets must contain at least one million records so that results are statistically valid',
      'Datasets must be made publicly available so affected people can inspect them',
      'Datasets must be relevant, sufficiently representative, and as error-free as possible',
      'Datasets must be collected only within the EU and stored on EU servers',
    ],
    correctIndex: 2,
    explanation:
      'Article 10 requires appropriate data governance and datasets that are relevant, sufficiently representative, and as error-free and complete as possible for the intended purpose, including examination for possible biases. There is no size, publication, or EU-only collection requirement.',
  },
  {
    id: 'aigp-lifecycle-39',
    domainId: 'aigp-lifecycle',
    prompt:
      "A company retires a customer-facing AI system that made recommendations to users. Which step best supports accountability after retirement?",
    choices: [
      'Destroy every record immediately, including decision logs, to reduce legal and privacy risk',
      'Leave the system online without monitoring until users stop relying on it',
      'Reuse the model for a different purpose without a new review or approval',
      'Keep documentation and required records, and tell affected users about the change',
    ],
    correctIndex: 3,
    explanation:
      'Keeping documentation and legally required records preserves the ability to answer questions about past decisions, and informing users manages the transition. Immediate destruction can breach retention duties, and reuse without review skips governance.',
  },
  {
    id: 'aigp-lifecycle-40',
    domainId: 'aigp-lifecycle',
    prompt:
      "A company's AI vendor updates its underlying model without notice, and the company's document-classification accuracy quietly drops. Which control would have caught this soonest?",
    choices: [
      'Ongoing monitoring and regression tests on the company\'s own use case',
      'A longer initial vendor contract with a fixed price for the whole term',
      'An annual review of the vendor marketing materials and product release notes',
      'Switching to the largest and most expensive model tier the vendor offers',
    ],
    correctIndex: 0,
    explanation:
      'Third-party models can change underneath a deployer, so continuous monitoring and regression tests on representative data are needed to detect shifts. Contracts should also require notice of material model changes.',
  },
]
