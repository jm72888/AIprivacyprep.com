import type { Question } from '../../lib/types'

export const aigpQuestions: Question[] = [
  // ---------------------------------------------------------------------
  // Domain 1: AI Foundations & Concepts
  // ---------------------------------------------------------------------
  {
    id: 'aigp-foundations-1',
    domainId: 'aigp-foundations',
    prompt:
      'Which statement best distinguishes "training" from "inference" in a machine learning system?',
    choices: [
      'Training is when a deployed model makes predictions on new data, while inference is when the model learns parameters from a dataset',
      'Training is the process of adjusting a model\'s internal parameters using data, while inference is the process of using the trained model to generate outputs on new inputs',
      'Training and inference both refer to the same process, but training happens in the cloud and inference happens on a local device',
      'Training only applies to supervised learning, while inference only applies to unsupervised learning',
    ],
    correctIndex: 1,
    explanation:
      'Training is the phase where a model\'s parameters (e.g., weights) are fit to data; inference is the subsequent phase where the trained model is applied to produce outputs on new, unseen inputs.',
  },
  {
    id: 'aigp-foundations-2',
    domainId: 'aigp-foundations',
    prompt:
      'A model consistently produces fluent, confident-sounding text that includes fabricated facts not supported by its training data or any retrieved source. This phenomenon is commonly referred to as:',
    choices: ['Overfitting', 'Hallucination', 'Data drift', 'Gradient descent'],
    correctIndex: 1,
    explanation:
      'Hallucination describes outputs that are plausible-sounding but factually incorrect or unsupported, a well-known risk in generative AI systems that governance programs must address.',
  },
  {
    id: 'aigp-foundations-3',
    domainId: 'aigp-foundations',
    prompt: 'In machine learning, what best characterizes "unsupervised learning"?',
    choices: [
      'The model is trained on labeled input-output pairs to predict a known target',
      'The model learns patterns or structure in data without labeled outcomes, such as through clustering',
      'The model learns by receiving rewards or penalties for actions taken in an environment',
      'The model is fine-tuned using human feedback on preferred outputs',
    ],
    correctIndex: 1,
    explanation:
      'Unsupervised learning finds structure (such as clusters or associations) in unlabeled data, in contrast to supervised learning (labeled data) and reinforcement learning (reward-based feedback).',
  },
  {
    id: 'aigp-foundations-4',
    domainId: 'aigp-foundations',
    prompt:
      'A large language model is described as a "foundation model." Which characteristic most accurately describes what this means?',
    choices: [
      'It is a small model trained for a single narrow task and never reused',
      'It is a broadly trained model that can be adapted or fine-tuned for many downstream tasks',
      'It is a model that only performs image recognition tasks',
      'It is a rules-based expert system that does not use machine learning',
    ],
    correctIndex: 1,
    explanation:
      'Foundation models are large models trained on broad data at scale that serve as a base which can be adapted (e.g., via fine-tuning or prompting) to a wide range of downstream applications.',
  },
  {
    id: 'aigp-foundations-5',
    domainId: 'aigp-foundations',
    prompt: 'Which of the following best defines "algorithmic bias" in an AI system?',
    choices: [
      'Random noise in the training data that has no systematic effect on outputs',
      'Systematic and repeatable errors in a system\'s outputs that create unfair outcomes for particular groups',
      'The intentional removal of protected class attributes from a dataset',
      'A technique used to increase model accuracy on a validation set',
    ],
    correctIndex: 1,
    explanation:
      'Algorithmic bias refers to systematic, repeatable errors that produce unfair or skewed outcomes, often disadvantaging particular groups, distinguishing it from random statistical noise.',
  },
  {
    id: 'aigp-foundations-6',
    domainId: 'aigp-foundations',
    prompt:
      'A governance professional asks a data science team to explain, in terms understandable to a non-technical decision-maker, why a model denied a specific loan application. This request most directly concerns the model\'s:',
    choices: ['Latency', 'Explainability', 'Throughput', 'Compression ratio'],
    correctIndex: 1,
    explanation:
      'Explainability refers to the ability to describe, in human-understandable terms, how and why a model produced a particular output, which is essential for accountability to affected individuals.',
  },
  {
    id: 'aigp-foundations-7',
    domainId: 'aigp-foundations',
    prompt:
      'A model performs well on its training dataset but performs poorly when exposed to new, real-world inputs it has not seen before. This is best described as:',
    choices: [
      'Underfitting',
      'Overfitting',
      'Federated learning',
      'Transfer learning',
    ],
    correctIndex: 1,
    explanation:
      'Overfitting occurs when a model learns patterns (including noise) too specific to its training data, harming its ability to generalize to new, unseen inputs.',
  },
  {
    id: 'aigp-foundations-8',
    domainId: 'aigp-foundations',
    prompt:
      'Which term describes an AI system\'s ability to maintain reliable performance when faced with noisy, unexpected, or adversarial inputs?',
    choices: ['Robustness', 'Interpretability', 'Portability', 'Scalability'],
    correctIndex: 0,
    explanation:
      'Robustness refers to a system\'s ability to continue performing reliably under variation, noise, or adversarial conditions, a key quality attribute assessed in AI risk management.',
  },

  // ---------------------------------------------------------------------
  // Domain 2: AI Risks & Impacts to People/Rights
  // ---------------------------------------------------------------------
  {
    id: 'aigp-risks-1',
    domainId: 'aigp-risks',
    prompt:
      'An organization deploys a resume-screening AI tool and later discovers it systematically ranks candidates from a particular demographic group lower than equally qualified candidates from other groups, even though the model does not use demographic data as an input. This outcome is best described as:',
    choices: [
      'A false positive rate difference with no governance relevance',
      'Proxy discrimination, where correlated variables produce disparate outcomes for a protected group',
      'A data availability failure with no fairness implications',
      'An acceptable outcome because demographic data was excluded from the model',
    ],
    correctIndex: 1,
    explanation:
      'Even without directly using protected attributes, models can rely on correlated proxy variables (e.g., zip code, schools attended) that reproduce discriminatory outcomes, known as proxy discrimination.',
  },
  {
    id: 'aigp-risks-2',
    domainId: 'aigp-risks',
    prompt:
      'Which of the following AI use cases is most commonly identified across governance frameworks as posing elevated risk to fundamental rights, warranting heightened scrutiny?',
    choices: [
      'A chatbot that answers general product FAQ questions',
      'A spam filter for personal email',
      'An algorithmic tool used to make hiring, credit, or law enforcement decisions about individuals',
      'A recommendation engine suggesting music playlists',
    ],
    correctIndex: 2,
    explanation:
      'Tools that materially affect access to employment, credit, or liberty are consistently treated as higher-risk because erroneous or biased outputs can cause significant, hard-to-reverse harm to individuals.',
  },
  {
    id: 'aigp-risks-3',
    domainId: 'aigp-risks',
    prompt: 'In AI harms taxonomies, "representational harm" most directly refers to:',
    choices: [
      'Financial loss caused by an incorrect credit decision',
      'Physical injury caused by an autonomous system',
      'Harm arising from how a system portrays, stereotypes, or under-represents particular groups',
      'Loss of intellectual property due to model training on copyrighted works',
    ],
    correctIndex: 2,
    explanation:
      'Representational harms concern how AI systems depict or characterize groups of people, such as reinforcing stereotypes, as distinct from allocative harms like the unfair distribution of resources or opportunities.',
  },
  {
    id: 'aigp-risks-4',
    domainId: 'aigp-risks',
    prompt:
      'A predictive policing tool is trained on historical arrest data from a city with a documented history of disproportionate policing in certain neighborhoods. What is the most significant governance concern with deploying this tool?',
    choices: [
      'The tool will run slower than a rules-based system',
      'The tool may perpetuate and amplify historical bias, directing further disproportionate enforcement toward already over-policed communities',
      'The tool cannot be explained to a non-technical audience',
      'The tool will require more computing power than alternatives',
    ],
    correctIndex: 1,
    explanation:
      'When training data reflects historical patterns of biased enforcement, a model trained on it risks encoding and amplifying that bias, creating a feedback loop that perpetuates disparate impact.',
  },
  {
    id: 'aigp-risks-5',
    domainId: 'aigp-risks',
    prompt: 'Which concept best captures the goal of "transparency" as a responsible AI principle?',
    choices: [
      'Ensuring a model never makes an incorrect prediction',
      'Providing appropriate information to stakeholders about how an AI system works, its capabilities, and its limitations',
      'Making all training data publicly available regardless of privacy considerations',
      'Guaranteeing that a model\'s source code is open source',
    ],
    correctIndex: 1,
    explanation:
      'Transparency is about giving stakeholders (users, regulators, affected individuals) meaningful information about a system\'s function, capabilities, and limits — not a guarantee of accuracy or full code disclosure.',
  },
  {
    id: 'aigp-risks-6',
    domainId: 'aigp-risks',
    prompt:
      'A company uses an AI system to set individualized prices for the same product based on inferred willingness to pay. Which fairness concern is most directly raised by this practice?',
    choices: [
      'Model latency during peak usage',
      'Potential for the pricing model to disadvantage certain groups of consumers based on inferred characteristics, raising distributive fairness concerns',
      'Excessive use of cloud storage',
      'Reduced need for human customer service staff',
    ],
    correctIndex: 1,
    explanation:
      'Personalized or algorithmic pricing raises distributive fairness concerns when the inferred characteristics used to set prices correlate with protected or vulnerable attributes, resulting in unequal treatment.',
  },
  {
    id: 'aigp-risks-7',
    domainId: 'aigp-risks',
    prompt:
      'Which of the following best describes the difference between "disparate treatment" and "disparate impact" in the context of AI-driven decision-making?',
    choices: [
      'Disparate treatment involves intentionally different treatment based on a protected characteristic, while disparate impact involves a facially neutral practice that produces unequal outcomes for a protected group',
      'Disparate treatment and disparate impact are two names for the identical legal concept',
      'Disparate impact only applies to AI systems, while disparate treatment only applies to human decision-makers',
      'Disparate treatment refers to unequal system performance across languages, while disparate impact refers to unequal system uptime',
    ],
    correctIndex: 0,
    explanation:
      'Disparate treatment is intentional differential treatment based on a protected class, whereas disparate impact concerns facially neutral policies or systems that nonetheless produce disproportionately negative effects on a protected group.',
  },
  {
    id: 'aigp-risks-8',
    domainId: 'aigp-risks',
    prompt:
      'An automated content moderation system disproportionately removes posts written in a regional dialect associated with a particular ethnic minority, effectively silencing that group\'s speech more than others. This is best characterized as a risk to:',
    choices: [
      'Model training cost efficiency',
      'Freedom of expression and equal treatment, both of which are recognized human rights impacts of AI systems',
      'Server uptime',
      'Intellectual property ownership',
    ],
    correctIndex: 1,
    explanation:
      'Disparate suppression of speech from a particular group implicates human rights concerns such as freedom of expression and non-discrimination, which governance frameworks require organizations to assess for high-impact AI systems.',
  },

  // ---------------------------------------------------------------------
  // Domain 3: AI Development Lifecycle & Governance
  // ---------------------------------------------------------------------
  {
    id: 'aigp-lifecycle-1',
    domainId: 'aigp-lifecycle',
    prompt:
      'A "model card" is best described as which of the following artifacts in AI governance documentation?',
    choices: [
      'A legal contract between the AI vendor and the customer',
      'A structured document summarizing a model\'s intended use, performance characteristics, limitations, and evaluation results',
      'A record of individual users\' login credentials for a deployed system',
      'A financial statement describing the cost of training a model',
    ],
    correctIndex: 1,
    explanation:
      'Model cards are standardized documentation that communicate a model\'s purpose, performance across relevant conditions, limitations, and evaluation data to support informed and responsible use.',
  },
  {
    id: 'aigp-lifecycle-2',
    domainId: 'aigp-lifecycle',
    prompt:
      'At which stage of the AI development lifecycle is it most appropriate to first define the intended use case, target population, and acceptable risk thresholds for a system?',
    choices: [
      'During decommissioning, after the system has been retired',
      'During the design and problem-definition stage, before data collection and model development begin',
      'Only after the model has been fully trained and deployed',
      'During post-deployment monitoring, once real-world data is available',
    ],
    correctIndex: 1,
    explanation:
      'Defining intended use, target population, and risk tolerance at the design stage allows these considerations to shape data collection, model choice, and testing, rather than being retrofitted after deployment.',
  },
  {
    id: 'aigp-lifecycle-3',
    domainId: 'aigp-lifecycle',
    prompt:
      'A "datasheet for datasets" primarily serves which governance purpose in the AI lifecycle?',
    choices: [
      'It documents the provenance, composition, collection process, and intended uses of a dataset used to train or evaluate a model',
      'It replaces the need for a data protection impact assessment',
      'It is a billing record for cloud storage costs',
      'It certifies that a dataset contains no personal data',
    ],
    correctIndex: 0,
    explanation:
      'Datasheets for datasets document how data was collected, what it contains, and its recommended and discouraged uses, supporting downstream risk assessment and accountability.',
  },
  {
    id: 'aigp-lifecycle-4',
    domainId: 'aigp-lifecycle',
    prompt:
      'Which lifecycle activity is most directly intended to detect "model drift" — a decline in model performance as real-world data patterns diverge from training data?',
    choices: [
      'Pre-training data labeling',
      'Post-deployment monitoring',
      'Initial model architecture selection',
      'Vendor contract negotiation',
    ],
    correctIndex: 1,
    explanation:
      'Post-deployment monitoring tracks a model\'s ongoing performance against production data, allowing an organization to detect drift and trigger retraining or remediation before harm accumulates.',
  },
  {
    id: 'aigp-lifecycle-5',
    domainId: 'aigp-lifecycle',
    prompt:
      'In a mature AI governance program, which function is typically responsible for independently reviewing and approving whether a model meets organizational risk criteria before deployment, separate from the team that built the model?',
    choices: [
      'The same data science team that developed the model, with no separate review',
      'An independent model risk, governance, or review function operating with appropriate separation from the development team',
      'The marketing department',
      'External end users of the product',
    ],
    correctIndex: 1,
    explanation:
      'Effective governance relies on a degree of independence between those who build a model and those who validate and approve it for deployment, similar to a "second line of defense" model risk function.',
  },
  {
    id: 'aigp-lifecycle-6',
    domainId: 'aigp-lifecycle',
    prompt:
      'Which of the following best describes the purpose of a held-out "test set" that is distinct from the training and validation sets?',
    choices: [
      'To provide additional training data to improve model accuracy',
      'To give an unbiased estimate of how the final model will perform on new, unseen data',
      'To store data that will never be used for any purpose',
      'To replace the need for model documentation',
    ],
    correctIndex: 1,
    explanation:
      'A held-out test set, not used during training or hyperparameter tuning, provides a more realistic, unbiased estimate of how a model will generalize to new data once deployed.',
  },
  {
    id: 'aigp-lifecycle-7',
    domainId: 'aigp-lifecycle',
    prompt:
      'When an organization decides to retire ("decommission") an AI system, which governance consideration is most important to address as part of that process?',
    choices: [
      'Ensuring downstream dependencies, data retention obligations, and continuity of any affected decisions are properly managed and documented',
      'Immediately deleting all records related to the system with no further review',
      'Transferring the model to a competitor',
      'Skipping any review since the system is no longer in use',
    ],
    correctIndex: 0,
    explanation:
      'Decommissioning should be managed deliberately, addressing dependent systems, data retention/deletion obligations, and how previously affected individuals or decisions are handled, not treated as a non-event.',
  },
  {
    id: 'aigp-lifecycle-8',
    domainId: 'aigp-lifecycle',
    prompt:
      'An MLOps team is responsible for which of the following activities within the AI development lifecycle?',
    choices: [
      'Drafting national AI legislation',
      'Operationalizing and maintaining the infrastructure, pipelines, and processes for deploying, monitoring, and updating models in production',
      'Conducting external financial audits of the company',
      'Negotiating employee compensation packages',
    ],
    correctIndex: 1,
    explanation:
      'MLOps focuses on the engineering practices and infrastructure that support reliably building, deploying, monitoring, and updating machine learning models throughout their operational life.',
  },

  // ---------------------------------------------------------------------
  // Domain 4: AI Law & Standards
  // ---------------------------------------------------------------------
  {
    id: 'aigp-law-1',
    domainId: 'aigp-law',
    prompt:
      'Under the EU AI Act\'s risk-tiered approach, which category of AI systems is subject to the most extensive set of ex-ante obligations, including conformity assessment, prior to being placed on the market?',
    choices: [
      'Minimal-risk systems',
      'High-risk systems',
      'Systems banned outright, such as social scoring by public authorities',
      'Limited-risk systems subject only to transparency obligations',
    ],
    correctIndex: 1,
    explanation:
      'High-risk AI systems under the EU AI Act carry the most extensive pre-market obligations (e.g., risk management, data governance, technical documentation, conformity assessment); prohibited systems are banned entirely rather than regulated, and minimal/limited-risk systems face lighter or no such obligations.',
  },
  {
    id: 'aigp-law-2',
    domainId: 'aigp-law',
    prompt:
      'Which of the following best describes the four core functions of the NIST AI Risk Management Framework (AI RMF)?',
    choices: [
      'Design, Build, Test, Ship',
      'Govern, Map, Measure, Manage',
      'Plan, Develop, Deploy, Retire',
      'Collect, Train, Validate, Monitor',
    ],
    correctIndex: 1,
    explanation:
      'The NIST AI RMF organizes its guidance around four functions: Govern (establishing a risk culture and oversight), Map (understanding context and risks), Measure (analyzing and tracking risks), and Manage (prioritizing and responding to risks).',
  },
  {
    id: 'aigp-law-3',
    domainId: 'aigp-law',
    prompt: 'ISO/IEC 42001 is best described as:',
    choices: [
      'A binding international treaty on AI liability',
      'A management system standard specifying requirements for establishing, implementing, maintaining, and improving an AI management system within an organization',
      'A technical protocol for training neural networks',
      'A certification limited exclusively to generative AI chatbots',
    ],
    correctIndex: 1,
    explanation:
      'ISO/IEC 42001 is a management system standard (analogous in structure to ISO 27001 for information security) that provides organizational requirements for governing AI responsibly, rather than a technical training protocol or a treaty.',
  },
  {
    id: 'aigp-law-4',
    domainId: 'aigp-law',
    prompt:
      'Which of the following is a foundational value expressed in the OECD AI Principles regarding the design of AI systems?',
    choices: [
      'AI systems should maximize data collection regardless of necessity',
      'AI systems should be designed to respect human rights, democratic values, and be transparent and explainable, with mechanisms for accountability',
      'AI systems should be exempt from any human oversight once deployed',
      'AI systems should prioritize processing speed above all other considerations',
    ],
    correctIndex: 1,
    explanation:
      'The OECD AI Principles emphasize human-centered values, transparency, explainability, robustness, and accountability as foundations for trustworthy AI, rather than unconstrained data collection or speed.',
  },
  {
    id: 'aigp-law-5',
    domainId: 'aigp-law',
    prompt:
      'A company deploys an AI system that is used to make automated decisions about applicants for a loan, with limited human involvement in the final decision. Under an emerging AI regulatory framework modeled on tiered risk, which factor would most likely elevate this system into a higher regulatory risk category?',
    choices: [
      'The system\'s use of cloud infrastructure rather than on-premises servers',
      'The system\'s significant effect on individuals\' access to essential financial services with limited human review',
      'The system\'s use of the Python programming language',
      'The system\'s deployment on a weekday rather than a weekend',
    ],
    correctIndex: 1,
    explanation:
      'Risk-tiering frameworks generally elevate systems that materially affect access to essential services (like credit) with minimal meaningful human oversight, since erroneous automated decisions can significantly harm individuals.',
  },
  {
    id: 'aigp-law-6',
    domainId: 'aigp-law',
    prompt:
      'Under the EU AI Act framework, which of the following practices is treated as an outright prohibited use of AI, rather than merely a high-risk one subject to compliance obligations?',
    choices: [
      'Using AI to filter spam email',
      'Using AI-based social scoring by public authorities that leads to detrimental or disproportionate treatment of individuals in unrelated contexts',
      'Using AI to recommend movies to a user',
      'Using AI to translate documents between languages',
    ],
    correctIndex: 1,
    explanation:
      'The EU AI Act designates certain uses, such as social scoring by public authorities that produces unjustified or disproportionate treatment, as prohibited practices rather than merely regulated high-risk uses.',
  },
  {
    id: 'aigp-law-7',
    domainId: 'aigp-law',
    prompt:
      'Within the NIST AI RMF, the "Measure" function is primarily concerned with which activity?',
    choices: [
      'Establishing the organization\'s overall risk culture and policies',
      'Employing quantitative and qualitative methods to analyze, assess, benchmark, and track identified AI risks',
      'Deciding whether to fully cease all AI use in the organization',
      'Drafting external marketing materials about the AI product',
    ],
    correctIndex: 1,
    explanation:
      'The Measure function focuses on analyzing, benchmarking, and tracking risks using appropriate methods and metrics, providing the evidence base that informs the subsequent Manage function.',
  },
  {
    id: 'aigp-law-8',
    domainId: 'aigp-law',
    prompt:
      'Why do many jurisdictions increasingly favor a "risk-based" or "risk-tiered" approach to AI regulation rather than a single uniform rule applied to all AI systems?',
    choices: [
      'Because it allows regulators to ignore AI systems used in low-stakes contexts entirely with no obligations whatsoever',
      'Because it calibrates the intensity of obligations to the level of potential harm a system poses, avoiding unnecessary burden on low-risk uses while imposing stricter requirements on higher-risk ones',
      'Because it guarantees that no AI system can ever cause harm',
      'Because it is required by international trade law in all cases',
    ],
    correctIndex: 1,
    explanation:
      'Risk-tiered regulation aims to proportionally match regulatory burden to potential harm, imposing lighter requirements on lower-risk applications and more rigorous obligations on higher-risk or prohibited uses.',
  },

  // ---------------------------------------------------------------------
  // Domain 5: Responsible AI Governance & Risk Management
  // ---------------------------------------------------------------------
  {
    id: 'aigp-governance-1',
    domainId: 'aigp-governance',
    prompt:
      'An organization is establishing its AI governance program. Which of the following is generally considered a foundational first step?',
    choices: [
      'Deploying as many AI systems as possible before defining any policies',
      'Establishing clear governance structures, roles, and accountability, including executive sponsorship and cross-functional oversight',
      'Waiting until a regulator issues an enforcement action before taking any action',
      'Relying solely on individual engineers to self-police ethical concerns with no formal structure',
    ],
    correctIndex: 1,
    explanation:
      'Effective AI governance programs start by establishing clear roles, accountability, and cross-functional oversight (e.g., an AI governance committee with executive sponsorship), rather than waiting for external pressure or relying on informal self-policing.',
  },
  {
    id: 'aigp-governance-2',
    domainId: 'aigp-governance',
    prompt:
      'A company procures a third-party AI tool from an external vendor to use in its hiring process. Which practice best reflects sound third-party AI risk management?',
    choices: [
      'Assuming the vendor has already addressed all bias and compliance risks with no further review needed',
      'Conducting due diligence on the vendor\'s model documentation, testing results, and contractual assurances, and monitoring the tool\'s performance after deployment',
      'Avoiding any contractual terms related to AI performance or bias since the vendor built the tool',
      'Deploying the tool without informing internal stakeholders responsible for compliance',
    ],
    correctIndex: 1,
    explanation:
      'Sound third-party risk management requires due diligence before procurement (reviewing documentation, testing, and contractual protections) plus ongoing monitoring after deployment, since the deploying organization typically retains accountability for outcomes.',
  },
  {
    id: 'aigp-governance-3',
    domainId: 'aigp-governance',
    prompt:
      'Which of the following best describes "meaningful human oversight" of an automated decision-making system?',
    choices: [
      'A human clicks "approve" on every output without any real ability to review or override the decision',
      'A human with the authority, competence, and information necessary to review, question, and if appropriate override or intervene in the system\'s decisions',
      'Human oversight is unnecessary if the system has high measured accuracy',
      'A human is present in the building where the servers are located',
    ],
    correctIndex: 1,
    explanation:
      'Meaningful human oversight requires that the human reviewer actually has the authority, training, and information needed to understand and, where necessary, override or intervene in a system\'s outputs — not just nominal or rubber-stamp involvement.',
  },
  {
    id: 'aigp-governance-4',
    domainId: 'aigp-governance',
    prompt:
      'An organization discovers that a deployed AI system has been producing systematically biased outputs affecting real customers for several months. What is the most appropriate immediate step according to sound AI incident response practice?',
    choices: [
      'Continue normal operations until the next scheduled model review, since incidents are handled only on a fixed annual cycle',
      'Trigger the organization\'s AI incident response process: assess impact and affected individuals, contain the issue, and determine remediation and notification obligations',
      'Permanently delete all logs related to the system to avoid documentation of the issue',
      'Publicly blame the vendor without conducting any internal investigation',
    ],
    correctIndex: 1,
    explanation:
      'A mature AI incident response process requires prompt impact assessment, containment, and determination of remediation and any notification obligations, rather than waiting for a scheduled review or avoiding investigation.',
  },
  {
    id: 'aigp-governance-5',
    domainId: 'aigp-governance',
    prompt:
      'Which of the following best describes the purpose of an AI risk assessment conducted before deploying a new system?',
    choices: [
      'To guarantee the system will never produce an incorrect output',
      'To systematically identify, analyze, and evaluate potential risks and harms associated with the system so they can be mitigated or accepted with appropriate controls',
      'To replace the need for any technical testing of the model',
      'To determine the marketing budget for the AI product',
    ],
    correctIndex: 1,
    explanation:
      'An AI risk assessment is a structured process to identify and evaluate potential risks and harms so that appropriate mitigations, controls, or risk-acceptance decisions can be made prior to and during deployment.',
  },
  {
    id: 'aigp-governance-6',
    domainId: 'aigp-governance',
    prompt:
      'In a "three lines of defense" model applied to AI governance, which function typically serves as the second line, providing independent risk oversight distinct from the teams building and operating the AI systems?',
    choices: [
      'The data science and engineering teams that build the models',
      'Risk management, compliance, or AI governance functions that set policy and independently review risk',
      'External customers of the AI product',
      'The board\'s external auditors, who serve as the first line',
    ],
    correctIndex: 1,
    explanation:
      'In the three lines of defense model, the first line is the business/technical teams operating the AI, the second line is risk/compliance/governance functions providing independent oversight and policy-setting, and the third line is internal audit.',
  },
  {
    id: 'aigp-governance-7',
    domainId: 'aigp-governance',
    prompt:
      'Why is accountability considered a core principle of responsible AI governance, distinct from mere compliance with technical requirements?',
    choices: [
      'Accountability ensures that some person or entity within the organization can be identified as responsible for an AI system\'s outcomes and can answer for and remedy any resulting harms',
      'Accountability means that no individual is ever responsible for an AI system\'s behavior',
      'Accountability only applies to fully autonomous systems with no human involvement',
      'Accountability is only relevant after a regulator has imposed a fine',
    ],
    correctIndex: 0,
    explanation:
      'Accountability requires clear ownership so that a responsible party can explain, justify, and remedy an AI system\'s decisions and outcomes, supporting redress for affected individuals rather than diffusing responsibility.',
  },
  {
    id: 'aigp-governance-8',
    domainId: 'aigp-governance',
    prompt:
      'An AI governance committee is deciding how frequently to reassess the risk classification of a deployed AI system. Which factor should most strongly justify triggering an earlier-than-scheduled reassessment?',
    choices: [
      'The system has run without any code changes for a short period of time',
      'The system\'s use case, input data characteristics, or deployment context has materially changed since the last assessment',
      'The original developer of the system has left the company',
      'A competitor has released a similar product',
    ],
    correctIndex: 1,
    explanation:
      'Material changes to a system\'s use case, data, or deployment context can significantly alter its risk profile, warranting a reassessment outside the normal review cycle rather than waiting for the next scheduled review.',
  },
]
