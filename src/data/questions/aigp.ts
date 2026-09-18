import type { Question } from '../../lib/types'
import { foundationsQuestions } from './aigp/foundations'
import { risksQuestions } from './aigp/risks'
import { lifecycleQuestions } from './aigp/lifecycle'
import { lawQuestions } from './aigp/law'
import { governanceQuestions } from './aigp/governance'

const originalQuestions: Question[] = [
  // ---------------------------------------------------------------------
  // Domain 1: AI Foundations & Concepts
  // ---------------------------------------------------------------------
  {
    id: 'aigp-foundations-1',
    domainId: 'aigp-foundations',
    prompt:
      'A team has finished fitting a fraud-detection model\'s weights to two years of historical transaction data and has now frozen the model to begin scoring live transactions in real time. Which statement correctly identifies the phase the model has just entered and how it differs from the phase that preceded it?',
    choices: [
      'The model has entered the inference phase, in which the frozen model generates outputs on new inputs; the preceding training phase was when its parameters were fit to historical data',
      'The model has entered a second training phase, since scoring live data continuously updates the model\'s weights unless online learning is explicitly disabled',
      'The model has entered the validation phase, which occurs after inference to select the best-performing hyperparameters',
      'The model has entered the fine-tuning phase, in which a foundation model already trained on broad data is adapted to the fraud-detection task using new labeled examples',
    ],
    correctIndex: 0,
    explanation:
      'Once parameters are frozen, scoring new transactions is inference, not training — weights do not change during ordinary inference unless an online-learning mechanism is deliberately built in, which is not implied here. Validation and fine-tuning are pre-deployment activities, not what is happening during live scoring.',
  },
  {
    id: 'aigp-foundations-2',
    domainId: 'aigp-foundations',
    prompt:
      'A generative AI assistant augmented with a retrieval component designed to ground its answers in a curated knowledge base nonetheless cites a legal case that does not exist, presented with high confidence. Which term precisely describes this failure, and why does it persist despite retrieval augmentation?',
    choices: [
      'Hallucination — the model generates fluent but unsupported or fabricated content; retrieval augmentation reduces but does not eliminate this risk because the model can still generate ungrounded text',
      'Data drift — a change in the statistical properties of input data over time relative to the training distribution, not a single fabricated output',
      'Overfitting — excessive fit to training data that reduces generalization, not the fabrication of unsupported content',
      'Model collapse — degradation caused by repeatedly training successive model generations on synthetic, model-generated data',
    ],
    correctIndex: 0,
    explanation:
      'Hallucination is the correct term for confident, fabricated content; retrieval augmentation lowers but does not guarantee zero hallucination risk. Data drift, overfitting, and model collapse are real but distinct phenomena that do not describe a single fabricated citation.',
  },
  {
    id: 'aigp-foundations-3',
    domainId: 'aigp-foundations',
    prompt:
      'A data science team feeds a large set of unlabeled transaction records into an algorithm that groups them into clusters of similar behavior without being told in advance what the clusters should represent. Which learning paradigm does this best exemplify, and what distinguishes it from reinforcement learning?',
    choices: [
      'Unsupervised learning; it discovers structure in unlabeled data without a reward signal, whereas reinforcement learning optimizes an agent\'s actions based on rewards or penalties received through interaction with an environment',
      'Supervised learning; both approaches rely on labeled outcome variables to guide training, differing only in the type of label used',
      'Semi-supervised learning; it combines a small labeled dataset with a larger unlabeled one, whereas reinforcement learning uses no labels at all',
      'Reinforcement learning; the clustering algorithm assigns a reward signal to each group-membership decision it makes',
    ],
    correctIndex: 0,
    explanation:
      'With no labels at all and no reward signal, this is unsupervised learning. Semi-supervised learning requires at least some labeled data, which is not present here, and reinforcement learning is defined by reward-driven interaction with an environment, not clustering.',
  },
  {
    id: 'aigp-foundations-4',
    domainId: 'aigp-foundations',
    prompt:
      'A vendor markets a large model pretrained on a broad, diverse corpus that customers can subsequently adapt through fine-tuning or prompting for tasks ranging from summarization to code generation. From a governance standpoint, which characteristic of this model most complicates assigning accountability across the AI value chain?',
    choices: [
      'Its general-purpose nature means the original developer often cannot foresee every downstream application, creating shared responsibility between the upstream model provider and the downstream deployers who adapt it for specific use cases',
      'Its narrow training on a single task means only the original developer bears any responsibility for downstream harms',
      'Its status as a rules-based expert system exempts it from the data governance obligations that apply to statistical models',
      'Its small parameter count and low compute requirements place it outside the scope of most AI-specific regulatory frameworks',
    ],
    correctIndex: 0,
    explanation:
      'Foundation models are broadly trained and generally adapted for many unforeseen downstream uses, which is precisely why accountability tends to be shared between the upstream provider and downstream deployers. The other options mischaracterize foundation models as narrow, rule-based, or small — none of which is accurate.',
  },
  {
    id: 'aigp-foundations-5',
    domainId: 'aigp-foundations',
    prompt:
      'A fraud model achieves equal overall accuracy across demographic groups but has a substantially higher false negative rate for one group when flagging fraudulent transactions. Which statement most accurately characterizes this situation?',
    choices: [
      'The model is unbiased, because bias only exists when overall accuracy differs across groups',
      'The model may still exhibit algorithmic bias, because equal overall accuracy can mask disparities in specific error types, such as false negative rates, that produce systematically worse outcomes for one group',
      'The disparity is attributable solely to random noise and carries no governance implications as long as sample sizes are adequate',
      'The disparity indicates disparate treatment, since the model must be intentionally using group membership to set different thresholds',
    ],
    correctIndex: 1,
    explanation:
      'Equal overall accuracy can hide unequal error-type distributions; a group-specific false negative gap is a recognized fairness concern even when top-line accuracy looks balanced. This is not automatically disparate treatment, which requires intentional use of a protected characteristic, and it should not be dismissed as mere noise without investigation.',
  },
  {
    id: 'aigp-foundations-6',
    domainId: 'aigp-foundations',
    prompt:
      'A credit union\'s compliance officer asks the model team not merely for a plain-language reason code explaining one applicant\'s denial, but for a description of the model\'s internal logic thorough enough that a technical reviewer could understand how the model generally reaches decisions across all applicants. Which term best captures this second, broader request as distinct from the first?',
    choices: [
      'Interpretability — understanding the model\'s internal mechanics — as distinct from explainability, which is a human-understandable account of one specific outcome',
      'Transparency, since both requests are simply forms of disclosure that an AI system exists and is being used',
      'Accountability, since the request seeks to assign legal responsibility for the denial rather than to understand model behavior',
      'Robustness, since the request evaluates how consistently the model performs under distributional shift',
    ],
    correctIndex: 0,
    explanation:
      'Interpretability concerns understanding a model\'s general internal logic, while explainability typically concerns justifying a specific output — the first request. Transparency is about disclosing a system\'s existence and general function, accountability is about assigning responsibility, and robustness concerns resilience to noisy or adversarial inputs; none of these fit the second request as precisely.',
  },
  {
    id: 'aigp-foundations-7',
    domainId: 'aigp-foundations',
    prompt:
      'During validation, a complex model shows high accuracy on the training set but a marked drop in accuracy on the validation set, while a simpler baseline model shows similarly mediocre accuracy on both sets. What do these results most likely indicate about the two models, respectively?',
    choices: [
      'The complex model is overfitting to noise or idiosyncrasies in the training data, while the baseline is likely underfitting, failing to capture enough of the underlying structure in the data',
      'The complex model is underfitting, since high training accuracy always signals insufficient model capacity, while the baseline is well-calibrated',
      'Both models are exhibiting data drift, which occurs whenever training and validation accuracy diverge regardless of model complexity',
      'The complex model demonstrates strong generalization, while the baseline suffers from overfitting to the training set',
    ],
    correctIndex: 0,
    explanation:
      'A large train-validation accuracy gap on the complex model is the classic signature of overfitting; consistently mediocre performance on both sets for the simple model indicates underfitting. The other options invert these labels or misapply the unrelated concept of data drift, which concerns shifts in production data over time, not train/validation splits of the same dataset.',
  },
  {
    id: 'aigp-foundations-8',
    domainId: 'aigp-foundations',
    prompt:
      'Security researchers add small, imperceptible perturbations to a handful of pixels in an image, causing an otherwise accurate image classifier to confidently mislabel it. Which system quality is most directly implicated by this vulnerability, and how does it differ from interpretability?',
    choices: [
      'Robustness — the ability to maintain reliable performance under adversarial or unexpected inputs — as distinct from interpretability, which concerns understanding the model\'s internal decision logic rather than its resilience to manipulation',
      'Interpretability, because the perturbation reveals which pixels the model weights most heavily, directly explaining the model\'s internal logic',
      'Explainability, because the misclassification itself constitutes a human-understandable justification for the model\'s output',
      'Data governance, because the issue necessarily stems from improperly labeled training images rather than model design',
    ],
    correctIndex: 0,
    explanation:
      'Susceptibility to small adversarial perturbations is a robustness failure. While some interpretability techniques do use perturbations to probe model behavior, the described vulnerability itself is a resilience problem, not an explanation of the model\'s reasoning, and nothing in the scenario points to a labeling defect.',
  },

  // ---------------------------------------------------------------------
  // Domain 2: AI Risks & Impacts to People/Rights
  // ---------------------------------------------------------------------
  {
    id: 'aigp-risks-1',
    domainId: 'aigp-risks',
    prompt:
      'A resume-screening tool does not take gender or race as inputs, yet systematically scores graduates of certain women\'s colleges and historically Black colleges lower than similarly qualified graduates of other institutions. Which concept most precisely names this phenomenon, and why does excluding protected attributes fail to prevent it?',
    choices: [
      'Proxy discrimination — features correlated with a protected characteristic, such as institution attended, can encode much of the same information that characteristic would have provided, reproducing disparate outcomes even when it is excluded',
      'Disparate treatment — the tool is intentionally using race and gender, simply through an indirect data field',
      'A data minimization failure — the tool is collecting more personal data than necessary for the hiring decision',
      'Statistical noise — the pattern reflects random variation in a limited sample with no systemic implications',
    ],
    correctIndex: 0,
    explanation:
      'This is the textbook proxy discrimination pattern: correlated variables reproduce the effect of an excluded protected attribute. It is not necessarily disparate treatment, which requires intentional use of the protected characteristic itself, and calling it a data minimization issue or noise mischaracterizes a fairness problem as an unrelated or non-systemic one.',
  },
  {
    id: 'aigp-risks-2',
    domainId: 'aigp-risks',
    prompt:
      'Under widely referenced AI risk-tiering approaches, such as the EU AI Act\'s list of high-risk use cases, which of the following is most likely to be classified as high-risk rather than limited- or minimal-risk?',
    choices: [
      'A chatbot, disclosed to users as an AI system, that answers general customer-service FAQs',
      'An AI system used to evaluate the creditworthiness of natural persons, determining their access to essential financial services',
      'A spam filter that sorts incoming email into a junk folder',
      'A video game non-player-character behavior engine',
    ],
    correctIndex: 1,
    explanation:
      'Creditworthiness evaluation determining access to essential financial services is a recurring example of a high-risk use case because of its material effect on individuals\' lives. A disclosed general-FAQ chatbot is limited-risk (transparency obligations only), and spam filters and game NPC engines are typically minimal-risk.',
  },
  {
    id: 'aigp-risks-3',
    domainId: 'aigp-risks',
    prompt:
      'An image-search tool, when queried for "CEO," returns results overwhelmingly depicting one demographic group, reinforcing a stereotype about who occupies leadership roles, even though the tool is never used to make any decision about a real person. Which category of AI harm does this best illustrate, and how does it differ from an allocative harm?',
    choices: [
      'Representational harm — it concerns how a group is portrayed or stereotyped, not a decision about the distribution of an actual opportunity or resource to an individual, which would instead be an allocative harm',
      'Allocative harm — because search ranking is itself a resource being unequally distributed among the CEOs shown in the results',
      'Quality-of-service harm — because the tool performs less accurately for underrepresented groups\' search queries',
      'Existential harm — because stereotyped representation poses a civilization-level risk',
    ],
    correctIndex: 0,
    explanation:
      'Representational harm concerns portrayal and stereotyping rather than the distribution of a concrete resource or opportunity to an individual, which is the hallmark of an allocative harm. Quality-of-service harm refers to differential accuracy or performance across groups, not stereotyped content, and there is no basis here for an existential-risk characterization.',
  },
  {
    id: 'aigp-risks-4',
    domainId: 'aigp-risks',
    prompt:
      'A predictive policing tool trained on historical arrest data — reflecting decades of documented over-policing in specific neighborhoods — is deployed to direct patrol resources. Officers are then dispatched more often to those neighborhoods, generating more arrests there, which are fed back into the model as new training data. What governance concern does this scenario most specifically illustrate?',
    choices: [
      'A reinforcing feedback loop in which biased historical data drives biased deployment decisions that generate more biased data, entrenching and amplifying the original disparity over time',
      'Model drift, in which the statistical properties of incoming data diverge from the training distribution due to factors unrelated to the model\'s own outputs',
      'Overfitting, because the model has learned the training data too precisely to generalize to new neighborhoods',
      'A one-time data quality issue that will resolve automatically once enough new data accumulates',
    ],
    correctIndex: 0,
    explanation:
      'This is a self-reinforcing feedback loop: the model\'s own outputs shape the future data it is trained on, entrenching bias rather than resolving it. Ordinary drift is typically driven by exogenous change rather than the model\'s own outputs, and neither overfitting nor a "one-time" characterization captures the compounding, self-perpetuating nature of the problem.',
  },
  {
    id: 'aigp-risks-5',
    domainId: 'aigp-risks',
    prompt:
      'A regulator\'s guidance requires that individuals interacting with a customer service AI system be informed they are communicating with an AI and given general information about the system\'s capabilities and limitations, without requiring disclosure of proprietary model architecture or source code. Which responsible-AI principle does this requirement most directly implement?',
    choices: [
      'Transparency — providing stakeholders with appropriate, meaningful information about a system\'s existence, function, and limits, which is distinct from a technical explanation of a specific output or full disclosure of source code',
      'Explainability — because informing a user they are speaking with an AI constitutes a case-specific justification of a decision',
      'Data minimization — because limiting disclosure of architecture reduces the amount of information processed about the system',
      'Open-source licensing — because withholding source code implies the system operates under a closed license model',
    ],
    correctIndex: 0,
    explanation:
      'This requirement is transparency: giving stakeholders meaningful information about the system\'s existence and general function without requiring full technical disclosure. Explainability typically concerns justifying specific outputs rather than disclosing a system\'s existence, and data minimization and licensing are unrelated concepts to this scenario.',
  },
  {
    id: 'aigp-risks-6',
    domainId: 'aigp-risks',
    prompt:
      'An airline\'s dynamic pricing algorithm sets higher fares for customers whose device and browsing data suggest they are booking last-minute for a family emergency — a group not defined by any protected characteristic, but one the model has learned is less price-sensitive. Which fairness concern does this practice most directly raise, even though no protected class is involved?',
    choices: [
      'Exploitation of behavioral or situational vulnerability — a fairness and consumer-protection concern distinct from protected-class discrimination, since distributive fairness analysis is not limited to legally protected categories',
      'Disparate treatment, since the airline is intentionally and directly using a protected characteristic to set prices',
      'No fairness concern arises at all, because responsible AI fairness analysis only applies when a legally protected class is affected',
      'A data minimization failure, because the airline is collecting browsing data unrelated to the flight booking',
    ],
    correctIndex: 0,
    explanation:
      'Responsible AI fairness analysis extends beyond legally protected classes to include exploitation of situational or behavioral vulnerability, which is exactly what this scenario describes. There is no protected characteristic involved, so disparate treatment does not apply, and the concern here is fairness-related rather than a data minimization issue.',
  },
  {
    id: 'aigp-risks-7',
    domainId: 'aigp-risks',
    prompt:
      'A lender\'s underwriting algorithm does not consider race as an input, but an audit finds the approval rate for a racial minority group is significantly lower than for others even after controlling for creditworthiness. Separately, a loan officer at the same institution is found to have manually overridden the algorithm\'s approvals specifically to deny more applications from members of that same group. How should these two findings be classified, respectively?',
    choices: [
      'The algorithm\'s disparate outcome may constitute disparate impact — a facially neutral practice producing unequal effects — while the loan officer\'s conduct constitutes disparate treatment — intentional differential treatment based on a protected characteristic',
      'Both findings constitute disparate treatment, since any unequal outcome traced to a protected characteristic is treated identically under fair lending analysis regardless of intent',
      'The algorithm\'s outcome constitutes disparate treatment because it is automated, while the loan officer\'s conduct constitutes disparate impact because it involves human discretion',
      'Neither finding is relevant unless the institution\'s overall approval rate falls below the industry average',
    ],
    correctIndex: 0,
    explanation:
      'The algorithm\'s facially neutral but unequal outcome is the classic disparate impact scenario, while the officer\'s deliberate targeting of a protected group is disparate treatment. Intent is the key distinguishing factor, so treating both findings identically or reversing the labels based on automation versus human discretion is incorrect.',
  },
  {
    id: 'aigp-risks-8',
    domainId: 'aigp-risks',
    prompt:
      'An automated content moderation system flags and removes posts written in a regional dialect associated with an ethnic minority at a substantially higher rate than posts in the dominant dialect, even when the flagged posts do not violate content policy. A human rights impact assessment would most appropriately characterize this finding as implicating which combination of concerns?',
    choices: [
      'Freedom of expression and non-discrimination, since the system\'s differential and inaccurate enforcement disproportionately silences a group\'s speech based on a characteristic linked to ethnicity',
      'Only a technical accuracy issue with no human rights dimension, since content moderation errors are a normal and expected part of automated systems operating at scale',
      'Data portability and interoperability, since the issue concerns the system\'s ability to export flagged content in a standard format',
      'Intellectual property, since removed posts may contain content owned by members of the minority group',
    ],
    correctIndex: 0,
    explanation:
      'Disproportionate, inaccurate suppression of one group\'s speech implicates freedom of expression and non-discrimination, which is why human rights impact assessments treat such disparities as substantive findings rather than incidental technical noise. Portability and intellectual property are unrelated to the facts described.',
  },

  // ---------------------------------------------------------------------
  // Domain 3: AI Development Lifecycle & Governance
  // ---------------------------------------------------------------------
  {
    id: 'aigp-lifecycle-1',
    domainId: 'aigp-lifecycle',
    prompt:
      'A team preparing documentation for a newly developed model needs an artifact summarizing the model\'s intended use, evaluation results across demographic subgroups, and known limitations — as distinct from an artifact documenting the provenance and composition of the data used to train it. Which artifact are they preparing?',
    choices: [
      'A model card, which documents a model\'s intended use, performance characteristics (including across subgroups), and limitations, distinct from a datasheet for datasets, which documents the training data itself',
      'A datasheet for datasets, since performance evaluation results are a property of the data rather than of the trained model',
      'A data protection impact assessment, a legally mandated privacy-specific document rather than a general-purpose model documentation artifact',
      'A service level agreement, which governs contractual uptime and support commitments between vendor and customer',
    ],
    correctIndex: 0,
    explanation:
      'This is precisely the purpose of a model card. A datasheet for datasets documents the data, not the trained model\'s performance; a DPIA is a distinct privacy-risk instrument; and an SLA governs contractual terms, not model behavior or limitations.',
  },
  {
    id: 'aigp-lifecycle-2',
    domainId: 'aigp-lifecycle',
    prompt:
      'A team has already begun collecting and labeling training data for a new hiring-screening model but has not yet formally documented the system\'s intended use case, target population, or acceptable error-rate thresholds. From a governance perspective, what is the most significant problem with this sequencing?',
    choices: [
      'These parameters should generally be defined during design and problem-definition, before data collection begins, so that data collection, model choice, and testing criteria can be shaped by intended use and risk tolerance rather than retrofitted afterward',
      'There is no problem, since intended use and risk thresholds are properly defined only after a model has been trained and its actual performance is known',
      'The sequencing is appropriate, since data collection is always the first stage of the AI lifecycle regardless of use case',
      'The sequencing only matters for systems formally classified as high-risk under a specific regulatory framework and has no general governance relevance',
    ],
    correctIndex: 0,
    explanation:
      'Defining use case, target population, and risk tolerance up front lets those decisions shape everything downstream. Defining them only after training, treating data collection as always-first, or limiting the concern to formally high-risk systems all understate the general governance value of design-stage scoping.',
  },
  {
    id: 'aigp-lifecycle-3',
    domainId: 'aigp-lifecycle',
    prompt:
      'A privacy officer is told that because a dataset has an accompanying "datasheet for datasets," no separate data protection impact assessment is required before using that data to train a high-risk system. Why is this reasoning flawed?',
    choices: [
      'A datasheet documents a dataset\'s provenance, composition, and recommended and discouraged uses, but it is not a legal risk assessment and does not evaluate or mitigate privacy risks to individuals the way a DPIA does',
      'It is not flawed; a datasheet for datasets is functionally equivalent to a data protection impact assessment in every recognized framework',
      'A datasheet is exclusively a financial document tracking data acquisition costs and has no bearing on privacy analysis whatsoever',
      'The reasoning is flawed only because datasheets are optional documents that most organizations choose not to produce at all',
    ],
    correctIndex: 0,
    explanation:
      'A datasheet describes the dataset; it does not assess or mitigate privacy risk to individuals, which is the specific function of a DPIA. It is not a financial record, and the flaw in the reasoning is substantive (mismatched purpose), not merely about how commonly datasheets are produced.',
  },
  {
    id: 'aigp-lifecycle-4',
    domainId: 'aigp-lifecycle',
    prompt:
      'Six months after deployment, a credit-scoring model\'s approval rates begin shifting as applicant demographics and economic conditions diverge from those reflected in the original training data. Which lifecycle activity should have been in place to detect this early, and why is pre-deployment validation alone insufficient to catch it?',
    choices: [
      'Post-deployment (production) monitoring, because pre-deployment validation only assesses performance against historical hold-out data and cannot detect degradation caused by real-world shifts that occur after launch',
      'Hyperparameter tuning, because adjusting learning rate and regularization settings during training would have prevented any future performance changes',
      'Cross-validation, because it estimates performance variance across splits of the same historical dataset and would have flagged future drift',
      'Data labeling quality assurance, because mislabeled training examples are the only possible cause of performance changes after deployment',
    ],
    correctIndex: 0,
    explanation:
      'Only ongoing production monitoring can catch shifts that occur after training data was fixed. Hyperparameter tuning and cross-validation both operate on historical data before deployment and cannot foresee future distributional change, and labeling QA addresses a different, narrower problem than drift.',
  },
  {
    id: 'aigp-lifecycle-5',
    domainId: 'aigp-lifecycle',
    prompt:
      'A bank\'s model development team wants to deploy a new underwriting model. Best-practice AI governance calls for a review before deployment. Which of the following most accurately reflects where that review responsibility should sit, and why?',
    choices: [
      'An independent model risk or governance function, structurally separate from the development team, should review and approve the model before deployment — similar to a "second line of defense" — to avoid the conflict of interest inherent in a team validating its own work',
      'Internal audit should conduct this pre-deployment review, since internal audit is responsible for approving all models before they go live as part of its ordinary first-line duties',
      'The development team itself is best positioned to conduct this review, since no one else could meaningfully assess a model they did not build',
      'No formal review is necessary before deployment as long as the model passes automated unit tests for code quality',
    ],
    correctIndex: 0,
    explanation:
      'A structurally independent second-line function avoids the self-review conflict of interest. Internal audit is generally a third-line assurance function providing periodic, independent assurance rather than routine pre-deployment sign-off, and neither self-review by developers nor code-quality unit tests substitute for a risk-focused approval process.',
  },
  {
    id: 'aigp-lifecycle-6',
    domainId: 'aigp-lifecycle',
    prompt:
      'A team uses a validation set to select the best-performing combination of hyperparameters, then reports the model\'s final accuracy using that same validation set as evidence of real-world performance. What is the flaw in this approach, and what should they have done instead?',
    choices: [
      'Reusing the validation set for final performance reporting is optimistic because the model selection process was already tuned to perform well on it; a separate, untouched test set should be used to produce an unbiased estimate of generalization performance',
      'There is no flaw, since the validation and test sets serve an identical purpose and are interchangeable at any stage of model development',
      'The flaw is that the validation set should have been used for training instead, since more training data always improves the final reported accuracy',
      'The flaw is that hyperparameter tuning should never be performed on any held-out data and should instead rely solely on training set performance',
    ],
    correctIndex: 0,
    explanation:
      'Because the validation set already influenced model selection, reusing it for the final performance claim overstates real-world accuracy; a held-out test set untouched during tuning gives an unbiased estimate. Validation and test sets are not interchangeable, and neither of the other options addresses the actual statistical bias created by reuse.',
  },
  {
    id: 'aigp-lifecycle-7',
    domainId: 'aigp-lifecycle',
    prompt:
      'An organization is retiring a legacy loan-underwriting model and replacing it with a new one. Applicants previously denied by the legacy model are not automatically eligible for re-evaluation under the new model. From a governance standpoint, what is the most significant gap in this decommissioning approach?',
    choices: [
      'It fails to address continuity for individuals affected by the legacy system\'s past decisions, alongside data retention and downstream dependency obligations, all of which should be deliberately managed rather than left unresolved when a system is retired',
      'There is no gap, because decommissioning obligations end the moment a replacement system becomes operational',
      'The only relevant gap is that the legacy model\'s source code was not made open-source before decommissioning',
      'The only relevant gap is that the new model was not trained on data identical to the legacy model\'s training data',
    ],
    correctIndex: 0,
    explanation:
      'Decommissioning should deliberately address continuity for previously affected individuals as well as data retention and dependency questions; those obligations do not simply end when a replacement goes live. Open-sourcing code and matching training data between old and new models are not the governance issues raised by this scenario.',
  },
  {
    id: 'aigp-lifecycle-8',
    domainId: 'aigp-lifecycle',
    prompt:
      'A team builds automated pipelines that retrain a model on a schedule, run validation checks before promoting a new model version to production, and roll back deployments if monitored performance degrades. Which discipline does this most precisely describe, and how does it differ from general software DevOps?',
    choices: [
      'MLOps, which extends DevOps practices to address model-specific concerns such as retraining triggers, data and model versioning, and performance-based rollback, beyond the code-deployment focus of traditional DevOps',
      'Data engineering, which is limited to building pipelines that ingest and transform raw data and does not extend to retraining, validation, or deployment of trained models',
      'Traditional DevOps, since retraining and rollback based on model performance require no different practices than deploying and rolling back conventional application code',
      'Quality assurance testing, which is limited to pre-release manual testing of software features unrelated to production monitoring',
    ],
    correctIndex: 0,
    explanation:
      'This is MLOps: DevOps-style automation extended to handle model-specific lifecycle needs like retraining, versioning of data and models, and performance-triggered rollback. Data engineering is narrower (data pipelines only), traditional DevOps does not natively handle model performance-based rollback, and QA testing is a different, narrower activity.',
  },

  // ---------------------------------------------------------------------
  // Domain 4: AI Law & Standards
  // ---------------------------------------------------------------------
  {
    id: 'aigp-law-1',
    domainId: 'aigp-law',
    prompt:
      'Which statement correctly ranks the intensity of ex-ante compliance obligations across the EU AI Act\'s risk categories, from most to least extensive, for AI systems that are permitted to be placed on the market at all?',
    choices: [
      'High-risk systems (subject to conformity assessment, technical documentation, and risk management) carry more extensive obligations than limited-risk systems (subject mainly to transparency duties), which in turn carry more obligations than minimal-risk systems (subject to voluntary codes of conduct)',
      'Limited-risk systems carry the most extensive obligations, because transparency requirements apply to a broader range of systems than conformity assessment does',
      'Minimal-risk and high-risk systems are subject to identical obligations, since the Act applies uniform requirements to all systems that are not outright prohibited',
      'Prohibited systems carry the most extensive compliance obligations, since they require the highest level of documentation to justify their continued use',
    ],
    correctIndex: 0,
    explanation:
      'High-risk obligations are the most extensive among permitted systems; limited-risk systems face only targeted transparency duties; minimal-risk systems face largely voluntary measures. Prohibited systems are banned outright rather than subject to compliance documentation, so they are not "regulated more heavily" — they simply may not be placed on the market.',
  },
  {
    id: 'aigp-law-2',
    domainId: 'aigp-law',
    prompt:
      'A team is cataloguing the intended purpose, context of use, and stakeholders potentially impacted by a new AI system before deciding whether and how to proceed with development. Under the NIST AI Risk Management Framework, which function does this activity primarily fall under?',
    choices: [
      'Map — establishing context, identifying stakeholders, and framing the risks relevant to a specific AI system\'s intended purpose and use',
      'Govern — cultivating an organization-wide risk management culture and establishing policy, a cross-cutting function rather than one tied to a specific system\'s context',
      'Measure — employing quantitative and qualitative methods to analyze and track identified risks',
      'Manage — allocating resources to identified and prioritized risks on an ongoing basis',
    ],
    correctIndex: 0,
    explanation:
      'Cataloguing context, purpose, and stakeholders for a specific system is the Map function. Govern is the cross-cutting organizational foundation rather than system-specific context-setting, and Measure and Manage both presuppose that mapping has already occurred.',
  },
  {
    id: 'aigp-law-3',
    domainId: 'aigp-law',
    prompt:
      'An organization wants a certifiable standard establishing organizational requirements for an AI management system — analogous in structure and certifiability to ISO/IEC 27001 for information security — rather than a set of AI risk management guidance without a certification scheme. Which standard should it look to?',
    choices: [
      'ISO/IEC 42001, a certifiable management system standard specifying requirements for establishing, implementing, maintaining, and continually improving an AI management system',
      'ISO/IEC 23894, which provides AI risk management guidance but, unlike 42001, is not structured as a certifiable management system standard',
      'ISO/IEC 27001, a certifiable management system standard, but one focused specifically on information security rather than the governance of AI systems as such',
      'The NIST AI Risk Management Framework, a voluntary U.S. government framework rather than an ISO certification standard',
    ],
    correctIndex: 0,
    explanation:
      'ISO/IEC 42001 is the certifiable AI management system standard. ISO/IEC 23894 provides related risk management guidance but is not a certification scheme; ISO/IEC 27001 is certifiable but scoped to information security, not AI governance broadly; and the NIST AI RMF is voluntary U.S. guidance, not an ISO certification standard.',
  },
  {
    id: 'aigp-law-4',
    domainId: 'aigp-law',
    prompt:
      'Which pairing correctly matches an OECD AI Principle with an accurate description of its content?',
    choices: [
      '"Transparency and explainability" — AI actors should provide meaningful information appropriate to the context to foster understanding and enable those adversely affected to understand and challenge outcomes',
      '"Robustness, security and safety" — AI systems should be designed to maximize processing speed, even where this requires disabling safety monitoring during peak load',
      '"Human-centered values and fairness" — AI systems should be optimized exclusively for economic efficiency, with human rights considerations addressed only where legally mandated',
      '"Accountability" — organizations are accountable only for AI systems developed entirely in-house and bear no responsibility for systems obtained from third-party vendors',
    ],
    correctIndex: 0,
    explanation:
      'The transparency and explainability principle is accurately described. The other three options invert or hollow out the actual content of their named principles — robustness does not mean prioritizing speed over safety, human-centered values do not mean pure economic optimization, and accountability is not limited to in-house-built systems.',
  },
  {
    id: 'aigp-law-5',
    domainId: 'aigp-law',
    prompt:
      'A bank deploys an AI system to evaluate loan applications. A human loan officer technically reviews every output but, in practice, approves the AI\'s recommendation in over 99% of cases within seconds, without independently verifying the underlying data. Under a risk-tiered regulatory approach, why would this system likely still be classified as high-risk despite nominal human review?',
    choices: [
      'Because the human review is not "meaningful" — the officer lacks the practical opportunity, information, or incentive to genuinely scrutinize and potentially override the output — so the system\'s material effect on access to credit remains largely automated',
      'Because any AI system involved in a financial services process is automatically classified as high-risk regardless of human involvement, use case, or impact',
      'Because the system processes personal data, and any AI system processing personal data is automatically high-risk under a risk-tiered approach',
      'Because the bank has not published its source code publicly, and lack of open-sourcing itself elevates the risk tier',
    ],
    correctIndex: 0,
    explanation:
      'Risk-tiering frameworks look at whether human oversight is meaningful in practice, not merely nominal — rubber-stamp review does not neutralize a system\'s material impact. Financial-services involvement and personal-data processing alone do not automatically dictate the tier, and source-code openness is not a recognized risk-tiering factor.',
  },
  {
    id: 'aigp-law-6',
    domainId: 'aigp-law',
    prompt:
      'Which of the following is most accurately characterized as an outright prohibited AI practice, rather than a high-risk practice subject to compliance obligations?',
    choices: [
      'Use of subliminal, manipulative, or deceptive techniques that materially distort a person\'s behavior in a manner likely to cause significant harm',
      'Use of an AI system as a safety component in the management and operation of critical infrastructure, such as electricity or water supply networks',
      'Use of an AI system to assess the creditworthiness of loan applicants at a retail bank',
      'Use of an AI system to screen resumes and rank job candidates for an open position',
    ],
    correctIndex: 0,
    explanation:
      'Manipulative or deceptive techniques causing significant harm are treated as an outright prohibited practice, not merely a regulated high-risk use. Safety components in critical infrastructure, credit scoring, and resume screening/candidate ranking are all recurring examples of high-risk uses subject to compliance obligations, not prohibition.',
  },
  {
    id: 'aigp-law-7',
    domainId: 'aigp-law',
    prompt:
      'After identifying and contextualizing risks associated with a new AI system, a team next develops quantitative metrics to benchmark the system\'s error rates across demographic subgroups and track them over time. Under the NIST AI RMF, this activity most directly corresponds to which function, and how does it differ from the function that follows it?',
    choices: [
      'Measure — analyzing, benchmarking, and tracking identified risks using appropriate methods and metrics; the subsequent Manage function then uses that evidence to prioritize and respond to risks, such as through mitigation or acceptance decisions',
      'Manage — prioritizing and allocating resources to risks; the subsequent Measure function then verifies whether the selected mitigation reduced the benchmarked metrics',
      'Govern — establishing the policies under which any metric may be developed; the subsequent Map function then applies those policies to a specific system\'s context',
      'Map — identifying which stakeholders should be consulted about acceptable error rates; the subsequent Govern function then finalizes organizational policy on those thresholds',
    ],
    correctIndex: 0,
    explanation:
      'Benchmarking and tracking risk metrics is the Measure function, which feeds into the subsequent Manage function\'s prioritization and response decisions. The other options reverse the actual Measure-then-Manage order or misdescribe Govern and Map, which occur earlier and cover different activities.',
  },
  {
    id: 'aigp-law-8',
    domainId: 'aigp-law',
    prompt:
      'A policymaker proposes applying an identical, maximally stringent set of compliance obligations to every AI system regardless of its use case or potential for harm, arguing this is simpler than a tiered approach. What is the strongest governance-based critique of this proposal, relative to a risk-tiered approach?',
    choices: [
      'A uniform maximal standard imposes disproportionate compliance burdens on low-risk applications without necessarily improving outcomes, whereas a risk-tiered approach calibrates obligations to potential harm, focusing the most rigorous scrutiny where it is most needed',
      'A uniform maximal standard is preferable because it eliminates the need for any organization to classify its AI systems at all, which is itself a compliance benefit',
      'There is no meaningful critique, because regulatory stringency and organizational compliance cost are unrelated to one another',
      'A uniform maximal standard is preferable because it guarantees that no prohibited AI practice could ever occur, regardless of how it is defined or enforced',
    ],
    correctIndex: 0,
    explanation:
      'The central critique of one-size-fits-all regulation is disproportionate burden on low-risk uses without a corresponding safety benefit, which risk-tiering avoids by calibrating obligations to harm. Claiming it eliminates classification burden, that cost and stringency are unrelated, or that it guarantees no prohibited conduct all misstate how uniform maximal regulation actually functions.',
  },

  // ---------------------------------------------------------------------
  // Domain 5: Responsible AI Governance & Risk Management
  // ---------------------------------------------------------------------
  {
    id: 'aigp-governance-1',
    domainId: 'aigp-governance',
    prompt:
      'A newly formed AI governance function is deciding where to begin. Which sequencing reflects the generally recommended foundation for a new AI governance program?',
    choices: [
      'Establish clear governance structures, defined roles, and executive-sponsored cross-functional oversight first, so that subsequent risk assessments, policies, and controls have clear ownership and authority behind them',
      'Begin by conducting individual risk assessments on every existing AI system before any governance structure, roles, or executive sponsorship are established, since structure can be added later',
      'Begin by drafting detailed technical model documentation standards, deferring any discussion of organizational roles or executive sponsorship until standards are finalized',
      'Wait for a specific regulatory trigger or enforcement action before allocating any resources to governance structure',
    ],
    correctIndex: 0,
    explanation:
      'Establishing accountable structure and sponsorship first gives subsequent risk assessments and controls a clear owner and mandate. Running assessments or drafting documentation standards before anyone is accountable for acting on them, or waiting for enforcement to force the issue, are recognized as weaker starting points.',
  },
  {
    id: 'aigp-governance-2',
    domainId: 'aigp-governance',
    prompt:
      'A company procures a third-party AI hiring tool and negotiates a contract that places all liability for bias-related harms on the vendor. Why is this contractual allocation of liability, standing alone, insufficient as a third-party AI risk management practice?',
    choices: [
      'Contractual liability shifting does not eliminate the deploying organization\'s own regulatory exposure, reputational risk, or duty to conduct due diligence and ongoing monitoring, since accountability to affected individuals and regulators typically remains with the deploying organization regardless of private contract terms',
      'It is not insufficient; contractual liability allocation to the vendor fully satisfies an organization\'s third-party AI risk management obligations in all cases',
      'It is insufficient only because contracts involving AI systems are generally unenforceable under current law',
      'It is insufficient only because the vendor, not the deploying company, is legally prohibited from accepting any liability for AI-related harms',
    ],
    correctIndex: 0,
    explanation:
      'A private contract term does not extinguish a deploying organization\'s own regulatory or reputational exposure, or its practical duty of due diligence and monitoring — accountability to affected individuals typically still runs to the deployer. The other options rest on false premises about contract enforceability or a supposed prohibition on vendor liability.',
  },
  {
    id: 'aigp-governance-3',
    domainId: 'aigp-governance',
    prompt:
      'A hospital deploys a diagnostic AI system with a policy requiring a physician to sign off on every AI-flagged case. In practice, physicians report feeling pressured to approve the system\'s recommendations quickly and rarely deviate from them, even when their own initial impression differed. What governance gap does this scenario most directly illustrate?',
    choices: [
      'A lack of meaningful human oversight — nominal sign-off does not satisfy the requirement if the reviewer lacks the practical time, incentive, or psychological latitude to genuinely question or override the system, a dynamic often driven by automation bias',
      'A data quality gap, since the scenario describes issues with the AI system\'s underlying training data rather than the review process',
      'A model drift issue, since the physicians\' behavior indicates the model\'s statistical performance has degraded since deployment',
      'An explainability gap, since the physicians would readily override the system if only its outputs were accompanied by a plain-language justification',
    ],
    correctIndex: 0,
    explanation:
      'This describes rubber-stamp review driven by automation bias and workflow pressure, which is a human-oversight design failure. Nothing in the scenario points to training data quality or a statistical performance decline, and the described pressure is not primarily about the absence of an explanation.',
  },
  {
    id: 'aigp-governance-4',
    domainId: 'aigp-governance',
    prompt:
      'An organization discovers that a deployed AI system has been producing systematically biased outputs affecting real customers for several months. Legal counsel is engaged, and the team begins assessing impact. Which of the following best completes a sound immediate incident response, consistent with an assess-contain-remediate sequence?',
    choices: [
      'Contain the issue (for example, by limiting or pausing the affected functionality as appropriate), determine remediation for affected individuals, and evaluate any applicable notification obligations to regulators or affected parties, all documented as part of the response',
      'Defer any containment action until the next scheduled quarterly model review, since containment before a full root-cause analysis is complete is considered premature',
      'Limit the response to an internal engineering fix, since bias-related incidents do not typically carry notification or remediation obligations toward affected individuals',
      'Rely exclusively on the vendor\'s incident response process if the biased component was licensed from a third party, since the deploying organization has no independent obligation to respond',
    ],
    correctIndex: 0,
    explanation:
      'Sound incident response moves promptly to contain, remediate, and evaluate notification obligations rather than waiting for a full root-cause analysis or a scheduled review. Bias incidents can carry real remediation and notification obligations, and using a third-party component does not relieve the deploying organization of its own responsibility to respond.',
  },
  {
    id: 'aigp-governance-5',
    domainId: 'aigp-governance',
    prompt:
      'A team completes a pre-deployment AI risk assessment for a new system and concludes that, because several risks were identified and the assessment process itself is now complete, no further action is required. What misunderstanding does this reflect about the purpose of an AI risk assessment?',
    choices: [
      'A risk assessment is meant to inform decisions about mitigating, transferring, or knowingly accepting identified risks with appropriate controls — completing the assessment does not itself resolve or mitigate the risks it identifies',
      'There is no misunderstanding; once a risk assessment is documented, no further mitigation, monitoring, or acceptance decision is required regardless of the risks identified',
      'The misunderstanding is that risk assessments should be conducted only after deployment, never before, so the timing itself was the actual error',
      'The misunderstanding is that risk assessments are exclusively a legal function and should never have involved the technical team at all',
    ],
    correctIndex: 0,
    explanation:
      'A risk assessment identifies risks so a deliberate mitigation, transfer, or acceptance decision can follow — documenting the risk is not the same as addressing it. The timing described (pre-deployment) was appropriate, and cross-functional involvement of both legal and technical teams is generally a strength, not a flaw.',
  },
  {
    id: 'aigp-governance-6',
    domainId: 'aigp-governance',
    prompt:
      'In a "three lines of defense" model applied to AI governance, which of the following correctly identifies all three lines and their respective roles?',
    choices: [
      'First line: business and technical teams that build and operate AI systems and own day-to-day risk; second line: risk, compliance, or AI governance functions that set policy and independently oversee risk; third line: internal audit, which provides independent assurance on the effectiveness of the first two lines',
      'First line: internal audit; second line: business and technical teams; third line: risk and compliance functions',
      'First line: risk and compliance functions; second line: internal audit; third line: business and technical teams',
      'All three lines are performed by the same independent risk function to ensure consistency, with no involvement from business or technical teams',
    ],
    correctIndex: 0,
    explanation:
      'The standard model places operating teams as the first line, risk/compliance/governance as the second line, and internal audit providing independent assurance as the third line. The other options scramble this ordering or incorrectly remove operating teams from the model altogether.',
  },
  {
    id: 'aigp-governance-7',
    domainId: 'aigp-governance',
    prompt:
      'Two organizations each deploy similar AI systems that cause comparable harm. Organization A has documented clear ownership, decision logs, and a designated individual empowered to explain and remedy the system\'s outcomes. Organization B has none of this, and after the harm occurs, no single person or team can explain how the decision was made or who approved the system\'s deployment. Which principle does Organization B\'s failure most directly violate?',
    choices: [
      'Accountability — the absence of identifiable ownership and the inability to explain or remedy the system\'s outcomes prevents affected individuals and regulators from obtaining a meaningful response, regardless of whether the underlying technical harm was foreseeable',
      'Robustness — the failure stems from the system\'s technical inability to withstand adversarial or noisy inputs',
      'Data minimization — the failure stems from Organization B collecting excessive personal data relative to Organization A',
      'Portability — the failure stems from Organization B\'s inability to transfer the AI system to a new infrastructure provider',
    ],
    correctIndex: 0,
    explanation:
      'The scenario describes an organizational ownership and answerability gap, which is squarely an accountability failure, not a technical robustness problem. Nothing in the facts concerns excessive data collection or infrastructure portability, so those principles do not fit.',
  },
  {
    id: 'aigp-governance-8',
    domainId: 'aigp-governance',
    prompt:
      'A deployed AI system\'s risk classification was last assessed a year ago. Since then, the organization has begun using the system to make decisions about a new, previously unassessed population (minors, rather than only adults), while the underlying model code has not changed at all. Should this trigger an earlier-than-scheduled reassessment, and why?',
    choices: [
      'Yes — a material change in the deployment context or affected population can significantly alter a system\'s risk profile even without any change to the underlying model code, so an unchanged codebase does not by itself indicate an unchanged risk level',
      'No — reassessment should only be triggered by changes to the model\'s code or architecture, since population and context changes do not affect a system\'s risk classification',
      'No — because the system already passed its scheduled annual review, no additional review is needed until the next scheduled cycle regardless of intervening changes',
      'Yes, but only because minors are a population the system was technically capable of processing all along, making this purely a documentation update rather than a substantive reassessment',
    ],
    correctIndex: 0,
    explanation:
      'Risk profile depends on context and affected population, not just code — extending use to a new, more vulnerable population like minors is a material change that warrants an earlier reassessment even with zero code changes. Treating it as code-change-only, deferring to the next scheduled cycle, or waving it off as "merely documentation" all understate the substantive risk shift.',
  },
]

export const aigpQuestions: Question[] = [
  ...originalQuestions,
  ...foundationsQuestions,
  ...risksQuestions,
  ...lifecycleQuestions,
  ...lawQuestions,
  ...governanceQuestions,
]
