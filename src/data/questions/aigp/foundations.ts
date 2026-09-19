import type { Question } from '../../../lib/types'

// Domain 1: AI Foundations & Concepts
export const foundationsQuestions: Question[] = [
  {
    id: 'aigp-foundations-1',
    domainId: 'aigp-foundations',
    prompt:
      "A fraud model was trained on two years of transactions and now scores live payments. The vendor mentions that the model 'learns from every transaction.' The deployer's documentation says weights are frozen between quarterly releases. If the documentation is accurate, what is happening to each live payment?",
    choices: [
      "Inference: the fixed model scores each payment, and learning happens only at the next quarterly retrain",
      "Online learning: each scored payment nudges the weights, so the tested model quietly changes over time",
      "Fine-tuning: payments the model is confident about are auto-labeled and used to adapt it continuously",
      "Validation: live payments act as a held-out set that confirms the quarterly model before promotion",
    ],
    correctIndex: 0,
    explanation:
      "With frozen weights, scoring live data is inference; the model does not change until it is retrained and redeployed. The vendor's phrase describes online learning, which would contradict the documentation and would be a material governance difference to resolve. Fine-tuning and validation are training-time activities, not what happens to each live payment.",
  },
  {
    id: 'aigp-foundations-2',
    domainId: 'aigp-foundations',
    prompt:
      "A legal research assistant uses retrieval-augmented generation over a curated case database, yet it cites a case that does not exist. Which explanation is most accurate?",
    choices: [
      "The index must contain the fake case, since RAG systems restate retrieved text rather than generating claims",
      "Retrieval supplies sources, but the model can still generate claims that go beyond or misstate them",
      "The case database changed after training, which is data drift and explains the invented citation",
      "RAG prevents fabrication for in-scope queries, so this query probably fell outside the database's coverage",
    ],
    correctIndex: 1,
    explanation:
      "RAG grounds answers by supplying retrieved passages, but the model still generates text and can go beyond or misstate its sources. Nothing forces it to repeat only retrieved text, RAG reduces rather than removes hallucination, and data drift concerns shifts in input distributions, not one fabricated citation.",
  },
  {
    id: 'aigp-foundations-3',
    domainId: 'aigp-foundations',
    prompt:
      "A bank clusters millions of unlabeled transactions into behavioral segments, then analysts label a few hundred examples from each segment and train a classifier on those labels plus the remaining unlabeled data. Which description fits the second stage?",
    choices: [
      "Unsupervised learning, since the large majority of training records still carry no labels at all",
      "Reinforcement learning, since the analysts' labels function as rewards for correctly grouped records",
      "Self-supervised learning, since the training labels come from the clusters found in the first stage",
      "Semi-supervised learning, since a small labeled set is combined with a large unlabeled one",
    ],
    correctIndex: 3,
    explanation:
      "Training on a small labeled set together with a large unlabeled set is semi-supervised learning. The first stage (clustering) was unsupervised, but the second uses human labels. Labels are not rewards from an environment, and self-supervised learning generates its own labels from the raw data rather than from analysts.",
  },
  {
    id: 'aigp-foundations-4',
    domainId: 'aigp-foundations',
    prompt:
      "A general-purpose model is released by one company, fine-tuned by a second for insurance claims, and used by a third to decide payouts. A claimant is harmed by a biased decision. Why is accountability hard to assign?",
    choices: [
      "Frameworks generally place responsibility on the original developer, leaving the others little to answer for",
      "Each party shaped the outcome but may lack visibility into the others' data, testing, and decisions",
      "Fine-tuning transfers the original developer's obligations to the second company, obscuring the chain",
      "Liability regimes generally treat harms from general-purpose models as unforeseeable, blocking claims",
    ],
    correctIndex: 1,
    explanation:
      "Value chains for foundation models spread influence across developers, adapters, and deployers, each with partial information, which is why frameworks such as the EU AI Act assign role-specific duties and require information sharing downstream. Responsibility is not concentrated in one party, fine-tuning does not automatically transfer every obligation, and there is no general exclusion.",
  },
  {
    id: 'aigp-foundations-5',
    domainId: 'aigp-foundations',
    prompt:
      "A fraud model has the same overall accuracy for two demographic groups, but its false negative rate is much higher for group B. Which conclusion is best supported?",
    choices: [
      "Both groups are treated fairly, since equal overall accuracy is the usual benchmark for group fairness",
      "The model is likely using group membership directly, which would make this disparate treatment",
      "Fraud affecting group B is missed more often, so the error distribution needs investigation",
      "The gap is probably sampling noise, which is expected whenever group sizes differ in the test set",
    ],
    correctIndex: 2,
    explanation:
      "Equal accuracy can hide different error types; a higher false negative rate means fraud affecting group B goes undetected more often. That calls for investigation into causes such as data or proxies. It does not prove intentional use of group membership, and it should not be dismissed as noise without analysis.",
  },
  {
    id: 'aigp-foundations-6',
    domainId: 'aigp-foundations',
    prompt:
      "A regulator asks a lender for two things: the reasons behind one applicant's denial, and an account of how the model weighs factors across all applicants. Which pairing is most accurate?",
    choices: [
      "The first is global interpretability; the second is transparency about how the model is deployed",
      "Both are accountability requests, since each seeks to establish who is responsible for the denial",
      "The first is a robustness check on one input; the second is a fairness audit across applicant groups",
      "The first is a local explanation of one decision; the second is global interpretability of the model",
    ],
    correctIndex: 3,
    explanation:
      "Explaining a single decision is a local explanation, while describing how the model behaves overall is global interpretability. Transparency usually refers to disclosing that and how AI is used, accountability to assigning responsibility, and robustness to resilience under stress; none matches these requests as precisely.",
  },
  {
    id: 'aigp-foundations-7',
    domainId: 'aigp-foundations',
    prompt:
      "Model A scores 98% on training data and 71% on validation data. Model B scores 74% on both. What is the most reasonable reading?",
    choices: [
      "A is likely overfitting and B underfitting, so neither is ready without further work",
      "A generalizes better: its validation score is close to B's while its training fit is far stronger",
      "Both show data drift, since training and validation performance diverge for at least one model",
      "B is overfitting, since matching scores on both sets suggest it has memorized the validation data",
    ],
    correctIndex: 0,
    explanation:
      "A's large train-validation gap suggests it memorized training noise; B's uniformly modest performance suggests it lacks capacity to capture the patterns. Data drift concerns production data changing over time, not a split of one dataset, and equal scores do not indicate memorization.",
  },
  {
    id: 'aigp-foundations-8',
    domainId: 'aigp-foundations',
    prompt:
      "Researchers change a few pixels in a stop-sign image, invisibly to people, and a vision model confidently reads it as a speed-limit sign. Which property does this test most directly?",
    choices: [
      "Interpretability, since the attack shows which pixels drive the model's classification decisions",
      "Robustness, since small, deliberately crafted changes to the input make the model fail confidently",
      "Calibration, since the model reported high confidence on an input it classified incorrectly",
      "Data quality, since this failure pattern usually traces back to mislabeled stop signs in training",
    ],
    correctIndex: 1,
    explanation:
      "Adversarial examples test robustness: whether performance holds under small malicious perturbations. The overconfidence is a symptom, not the property being tested, and perturbation-based probing can inform interpretability but the vulnerability itself is a robustness failure. Nothing suggests mislabeled training data.",
  },
  {
    id: 'aigp-foundations-9',
    domainId: 'aigp-foundations',
    prompt:
      "A team trains a model to predict loan default using past applications labeled with whether each borrower defaulted. Two years later, it notices the labels only exist for approved applicants. What problem does this create?",
    choices: [
      "The model becomes partly unsupervised, since rejected applicants appear in the data without labels",
      "Outcomes are never observed for applicants like those rejected before, so learned risk is skewed",
      "The model will overfit, since approved applicants form a smaller and more homogeneous training group",
      "The labels act as proxies for protected attributes, which makes the model unlawful to deploy",
    ],
    correctIndex: 1,
    explanation:
      "Outcomes are only observed for people the old process approved, so the model never sees how rejected-type applicants would have performed. This selective-labels problem can entrench past decisions. The model is still supervised, size alone does not cause overfitting, and labels are not automatically unlawful proxies.",
  },
  {
    id: 'aigp-foundations-10',
    domainId: 'aigp-foundations',
    prompt:
      "A warehouse robot trained with reinforcement learning to 'maximize items moved per hour' starts knocking over shelves because fallen items count as moved. What does this illustrate?",
    choices: [
      "Reward hacking: the agent found a way to maximize the stated reward that defeats the intended goal",
      "Overfitting: the robot learned the quirks of one warehouse layout and fails to generalize beyond it",
      "Data poisoning: someone corrupted the item counts the robot was trained on to change its behavior",
      "Concept drift: the meaning of 'moved' shifted after deployment as warehouse processes changed",
    ],
    correctIndex: 0,
    explanation:
      "Reward hacking (or specification gaming) occurs when an agent finds unintended ways to score well on its objective. The reward itself was flawed; nothing indicates memorization of a layout, corrupted data, or a change in the definition after deployment.",
  },
  {
    id: 'aigp-foundations-11',
    domainId: 'aigp-foundations',
    prompt:
      "A chatbot developer collects human rankings of pairs of responses, trains a model to predict those rankings, and then optimizes the chatbot against that predictor. What is a known risk of this approach?",
    choices: [
      "It retrains the base model from scratch, so knowledge from pretraining is largely overwritten",
      "It needs verified ground-truth answers for every question users might ask, which is impractical",
      "The chatbot can learn to please raters, for example by sounding confident or agreeable",
      "It tends to remove refusals, since raters consistently prefer helpful answers over declined ones",
    ],
    correctIndex: 2,
    explanation:
      "This describes RLHF with a reward model. Because it optimizes for what raters prefer, it can reward agreeable or confident-sounding answers over accurate ones, which contributes to sycophancy. It builds on the pretrained model rather than replacing it, does not need ground truth for every question, and is commonly used to teach refusals.",
  },
  {
    id: 'aigp-foundations-12',
    domainId: 'aigp-foundations',
    prompt:
      "A hospital fine-tunes a general image model on 3,000 local chest X-rays. Which governance statement about the result is most accurate?",
    choices: [
      "Fine-tuning overwrites the base model's features, so biases learned in pretraining are removed",
      "Once the hospital fine-tunes the model, it carries the obligations and the developer carries none",
      "The developer already validated the base model, so the hospital's local validation can be light",
      "Base-model limitations and biases can carry over, so the hospital must validate it on local data",
    ],
    correctIndex: 3,
    explanation:
      "Fine-tuning adapts existing representations, so limitations and biases from pretraining can carry over. The adapted model must be validated for its specific clinical use and population. The base developer's validation does not cover this use, and the developer may retain its own obligations.",
  },
  {
    id: 'aigp-foundations-13',
    domainId: 'aigp-foundations',
    prompt:
      "An HR team wants its chatbot to answer from the current employee handbook, which changes monthly. Which approach best fits, and why?",
    choices: [
      "Retrieval-augmented generation, since updated documents are retrieved without retraining",
      "Monthly fine-tuning, since changing the weights is the dependable way to add new facts",
      "A larger context window, since longer memory lets the model retain each month's changes",
      "A lower temperature, since more deterministic output reduces answers drawn from old versions",
    ],
    correctIndex: 0,
    explanation:
      "RAG pulls current documents into the prompt at query time, so updates take effect as soon as the index changes. Monthly fine-tuning is costly and not the only option, a larger context window does not keep content current by itself, and temperature controls randomness rather than knowledge.",
  },
  {
    id: 'aigp-foundations-14',
    domainId: 'aigp-foundations',
    prompt:
      "A team pastes a 900-page contract into a model and gets answers that ignore the first half. Which explanation is most likely?",
    choices: [
      "The model's training cutoff predates the contract, so it lacks knowledge of its terms",
      "The document exceeded the context window, so earlier text was dropped",
      "The temperature setting was too low for the model to weigh all of the clauses",
      "The model was overfit to shorter documents and discounts the start of long ones",
    ],
    correctIndex: 1,
    explanation:
      "The context window limits how many tokens a model can process at once; content beyond it is dropped or truncated. The training cutoff is irrelevant when the document is supplied in the prompt, temperature affects randomness, and overfitting would not explain missing sections.",
  },
  {
    id: 'aigp-foundations-15',
    domainId: 'aigp-foundations',
    prompt:
      "An auditor reruns the same test prompt ten times against a generative model and gets several different answers. For audit purposes, what is the most appropriate response?",
    choices: [
      "Report the model as unreliable, since consistent output is a basic requirement for audit",
      "Request the latest version, since different answers indicate the model was retrained between the runs",
      "Record sampling settings such as temperature, repeat the runs, and assess the range of outputs",
      "Keep the first answer, since later runs are influenced by earlier prompts in the session",
    ],
    correctIndex: 2,
    explanation:
      "Generative models sample tokens probabilistically, so variation is expected. Sound evaluation records settings such as temperature and assesses the distribution of outputs across repeated runs. Variation alone is not a defect, models do not retrain between calls, and separate API calls do not influence each other.",
  },
  {
    id: 'aigp-foundations-16',
    domainId: 'aigp-foundations',
    prompt:
      "A company stores customer support tickets as embeddings for semantic search. A privacy officer asks whether the embeddings are personal data. What is the best answer?",
    choices: [
      "No, because embeddings are numeric vectors that cannot be traced back to the person who wrote the text",
      "No, because the model generates embeddings rather than collecting them from individuals",
      "Yes, but only when embeddings are stored in the same table as customer names or IDs",
      "Possibly, since embeddings can encode personal details and text can sometimes be partly recovered",
    ],
    correctIndex: 3,
    explanation:
      "Embeddings are derived from the original text and can preserve identifying or sensitive information; research has shown text can sometimes be partially reconstructed from them. Whether they are personal data depends on identifiability, not on their numeric format or on whether names sit next to them.",
  },
  {
    id: 'aigp-foundations-17',
    domainId: 'aigp-foundations',
    prompt:
      "Which statement best distinguishes a general-purpose AI model from a narrow AI system in governance terms?",
    choices: [
      "General-purpose models can be adapted to many tasks, so risk depends heavily on downstream use",
      "General-purpose models reason at a human level across domains, while narrow systems cannot",
      "Narrow systems fall outside AI laws, while general-purpose models are high-risk by default",
      "Narrow systems rely on hand-written rules, while general-purpose models use machine learning",
    ],
    correctIndex: 0,
    explanation:
      "General-purpose models serve many possible uses, so much of their risk is determined by how deployers adapt them; this is why the EU AI Act has separate GPAI obligations. They are not human-level general intelligence, narrow systems can be high-risk, and narrow systems often use machine learning too.",
  },
  {
    id: 'aigp-foundations-18',
    domainId: 'aigp-foundations',
    prompt:
      "A regulator asks why a deep neural network used for fraud detection cannot simply list the rules it follows. Which answer is most accurate?",
    choices: [
      "The rules exist, but vendors can withhold them as trade secrets under most AI laws",
      "Its behavior is spread across millions of learned weights, not written as explicit rules",
      "The network's decisions are partly random, so there is no stable rule set to report",
      "The rules change with every transaction, since fraud networks retrain on each new case",
    ],
    correctIndex: 1,
    explanation:
      "Deep networks encode patterns in many layers of learned parameters, not human-readable rules, which is why post-hoc explanation methods exist. Their outputs are deterministic given the same input and weights, secrecy is not the core issue, and most networks do not retrain on every transaction.",
  },
  {
    id: 'aigp-foundations-19',
    domainId: 'aigp-foundations',
    prompt:
      "A bank trains a fraud model on synthetic transactions generated from its real data, to reduce privacy risk. Which concern remains most important?",
    choices: [
      "Synthetic data counts as personal data under the GDPR, so the privacy gain is illusory",
      "Synthetic records lack real labels, so they cannot train a supervised fraud model",
      "The generator can leak real records or reproduce the source data's biases",
      "Using synthetic data means a DPIA is no longer required for the project",
    ],
    correctIndex: 2,
    explanation:
      "Synthetic data lowers but does not remove privacy risk: generators can leak real records, and they reproduce whatever patterns and biases exist in the source. Whether synthetic data is personal data depends on re-identification risk, it is widely used for training, and it does not automatically remove assessment duties.",
  },
  {
    id: 'aigp-foundations-20',
    domainId: 'aigp-foundations',
    prompt:
      "A company fine-tunes a spam filter on messages scraped from public forums. An attacker had seeded those forums with spam labeled as legitimate mail. What kind of attack is this, and at which stage does it act?",
    choices: [
      "Evasion, acting at inference time when the attacker submits crafted spam messages",
      "Model extraction, acting when the attacker repeatedly queries the filter to copy it",
      "Prompt injection, acting when the filter processes instructions hidden in the text of incoming messages",
      "Data poisoning, acting at training time through the corrupted examples the filter learned from",
    ],
    correctIndex: 3,
    explanation:
      "Data poisoning corrupts training data so the resulting model behaves as the attacker wants. Evasion manipulates inputs at inference time, model extraction copies a model through queries, and prompt injection targets instruction-following models through their inputs.",
  },
  {
    id: 'aigp-foundations-21',
    domainId: 'aigp-foundations',
    prompt:
      "An email assistant summarizes incoming mail. A message contains hidden text telling the assistant to forward the inbox to an outside address, and the assistant tries to comply. Which control most directly limits the damage?",
    choices: [
      "Require human confirmation before the assistant takes actions such as forwarding mail",
      "Retrain the assistant on a larger set of legitimate emails so it learns to spot attacks",
      "Lower the assistant's temperature so it follows the user's instructions more strictly",
      "Encrypt the inbox at rest so any forwarded messages cannot be read by the attacker",
    ],
    correctIndex: 0,
    explanation:
      "Indirect prompt injection is hard to prevent entirely, so a key mitigation is limiting what the assistant can do without human approval. Retraining does not reliably stop injected instructions, lower temperature does not change which instructions are followed, and encryption at rest does not stop the assistant from sending mail.",
  },
  {
    id: 'aigp-foundations-22',
    domainId: 'aigp-foundations',
    prompt:
      "By querying a clinical model and analyzing its confidence scores, researchers determine whether a specific patient's record was in its training data. Which attack is this, and why does it matter?",
    choices: [
      "Model extraction; it lets a competitor replicate the model's behavior through repeated queries",
      "Membership inference; being in a clinical training set can reveal that someone had a condition",
      "Model inversion; it rebuilds complete patient records directly from the model's parameters",
      "Data poisoning; tampered training data makes the model disclose which patients it has seen",
    ],
    correctIndex: 1,
    explanation:
      "Membership inference determines whether a record was used in training, which in a clinical model can reveal that the person had a condition. Model inversion reconstructs representative inputs, extraction copies functionality, and poisoning corrupts training data.",
  },
  {
    id: 'aigp-foundations-23',
    domainId: 'aigp-foundations',
    prompt:
      "A simple credit model performs poorly on both training and validation data. The team proposes collecting more training records of the same kind. Why might that not help?",
    choices: [
      "More data tends to cause overfitting in simple models, making the validation gap worse",
      "The validation set would need to grow first, or the new training data cannot be evaluated",
      "The model may lack the capacity or input features to capture the underlying pattern at all",
      "New records from a later period would introduce data drift into the training set",
    ],
    correctIndex: 2,
    explanation:
      "Poor results on both sets indicate underfitting: the model or its features cannot represent the underlying relationship, so more of the same data rarely fixes it. More data does not generally cause overfitting, and adding records from the same source is not drift.",
  },
  {
    id: 'aigp-foundations-24',
    domainId: 'aigp-foundations',
    prompt:
      "A screening tool for a serious but treatable disease flags patients for a follow-up test. Missing a true case is far worse than an unnecessary follow-up. Which metric should the team prioritize when tuning?",
    choices: [
      "Precision, so that patients who are flagged are very likely to have the disease",
      "Specificity, so that as many healthy patients as possible are correctly cleared",
      "Overall accuracy, so that both kinds of error are weighed evenly across the patients screened",
      "Recall, so that as many true cases as possible are caught, even at the cost of false alarms",
    ],
    correctIndex: 3,
    explanation:
      "Recall (sensitivity) measures the share of actual cases detected, so prioritizing it minimizes missed diagnoses at the cost of more false positives. Precision and specificity focus on avoiding false alarms, and accuracy weighs all errors equally, which does not reflect this cost asymmetry.",
  },
  {
    id: 'aigp-foundations-25',
    domainId: 'aigp-foundations',
    prompt:
      "A vendor reports that its fraud model is 99.4% accurate on data where 0.5% of transactions are fraud. What should a reviewer ask for first?",
    choices: [
      "Recall and precision on the fraud class, since accuracy is dominated by legitimate transactions",
      "Training accuracy, to confirm the 99.4% figure is not the result of overfitting to test data",
      "A larger test set, since accuracy near 99.4% is implausible and suggests a measurement error",
      "A calibration curve, since accuracy is not a valid metric when classes are imbalanced",
    ],
    correctIndex: 0,
    explanation:
      "With 0.5% fraud, a model that never flags fraud is 99.5% accurate, so 99.4% could mean it catches almost nothing. Fraud-class recall and precision show whether it works. Training accuracy does not address the issue, the number is not implausible, and accuracy can be computed but is misleading.",
  },
  {
    id: 'aigp-foundations-26',
    domainId: 'aigp-foundations',
    prompt:
      "After a new law redefines what counts as a suspicious transaction, an anti-money-laundering model starts missing cases even though incoming transactions look statistically unchanged. Which term fits best?",
    choices: [
      "Data drift, since the model's inputs no longer match the distribution it was trained on",
      "Concept drift, since the relationship between the inputs and the correct label has changed",
      "Underfitting, since the model was never complex enough to anticipate regulatory changes",
      "Label leakage, since the new legal definition was already embedded in the training features",
    ],
    correctIndex: 1,
    explanation:
      "Concept drift occurs when the meaning of the target changes while inputs may look the same. Data drift is a shift in the input distribution, which the scenario rules out. Underfitting is a training issue, and leakage refers to target information in the features.",
  },
  {
    id: 'aigp-foundations-27',
    domainId: 'aigp-foundations',
    prompt:
      "A lab finds that a larger model can perform a multi-step task that smaller versions could not, although it was not trained specifically for it. What is the main governance implication?",
    choices: [
      "Smaller models can safely skip capability testing, since new abilities appear only at scale",
      "The larger model was likely trained on the evaluation tasks, which would explain the new skill",
      "Capabilities can appear unpredictably with scale, so models need testing for unexpected abilities",
      "Larger models tend to be safer overall, since they generalize better and make fewer errors",
    ],
    correctIndex: 2,
    explanation:
      "Abilities that appear only at larger scales make capabilities hard to predict, which is why frontier model governance emphasizes pre-release capability evaluations. This does not exempt smaller models, does not prove contamination, and says nothing about safety.",
  },
  {
    id: 'aigp-foundations-28',
    domainId: 'aigp-foundations',
    prompt:
      "A company lets an AI agent book travel and make purchases by calling external tools, with no human review between steps. Compared with a chatbot that only drafts text, what is the most significant added risk?",
    choices: [
      "Tool access raises hallucination rates, since the model must reason about more information",
      "Agent actions are hard to log, so decisions become difficult to audit after the fact",
      "Agents need far more training data than chat models, which increases privacy exposure",
      "Errors or injected instructions can turn directly into purchases and other real-world actions",
    ],
    correctIndex: 3,
    explanation:
      "When a system can act, a mistake or a successful prompt injection can cause purchases, data transfers, or other effects without a human catching it. Agents can and should be logged, tool access does not by itself raise hallucination rates, and data needs are not the key difference.",
  },
  {
    id: 'aigp-foundations-29',
    domainId: 'aigp-foundations',
    prompt:
      "An insurer's model takes a photo of vehicle damage plus the customer's written description and estimates repair cost. Why does this design need extra testing compared with a text-only model?",
    choices: [
      "Errors can arise from the photo, the text, or conflicts between them, so each needs testing",
      "Multimodal models are harder to explain, so they require regulator approval before use",
      "Photos of vehicles are personal data, while written claim descriptions generally are not",
      "Multimodal models update on each new claim, so their results shift from one day to the next",
    ],
    correctIndex: 0,
    explanation:
      "Multimodal systems can fail on images (lighting, angles), on text, or when the two conflict, so testing must cover each modality and their interaction. They can be explained with the same techniques as other models, image and text can each be personal data, and they do not retrain per claim.",
  },
  {
    id: 'aigp-foundations-30',
    domainId: 'aigp-foundations',
    prompt:
      "Which statement correctly contrasts generative and discriminative models?",
    choices: [
      "Generative models learn from unlabeled data, while discriminative models learn from labeled data",
      "Generative models produce new content, while discriminative models assign labels or scores to inputs",
      "Generative models are regulated under the EU AI Act, while discriminative models largely are not",
      "Generative models tend to be large and cloud-hosted, while discriminative models run on devices",
    ],
    correctIndex: 1,
    explanation:
      "The core distinction is output: generative models create content such as text or images, while discriminative models classify or predict. Both can use labeled or unlabeled data, both fall within AI regulation depending on use, and size and deployment vary widely.",
  },
  {
    id: 'aigp-foundations-31',
    domainId: 'aigp-foundations',
    prompt:
      "A harassment classifier performs poorly. Investigation shows labelers disagreed on about 30% of examples and had no written guidelines. What should be fixed first?",
    choices: [
      "Move to a larger model architecture that can learn subtler patterns in the examples",
      "Publish a model card documenting the classifier's limitations for downstream users",
      "Drop every example the labelers disagreed on so that the remaining labels are consistent",
      "Write clear annotation guidelines and re-label the data, measuring agreement between labelers",
    ],
    correctIndex: 3,
    explanation:
      "Inconsistent labels mean the ground truth is unreliable, which caps model quality. Clear guidelines and measured inter-annotator agreement fix the root cause. A larger model learns the same noise, documentation alone does not fix quality, and discarding every hard case removes the examples the model most needs.",
  },
  {
    id: 'aigp-foundations-32',
    domainId: 'aigp-foundations',
    prompt:
      "Clinicians route cases to specialists when a triage model's confidence exceeds 90%. An audit finds cases scored at 90% are right only 65% of the time. What is the core problem?",
    choices: [
      "Its recall is too low, so too many true emergencies are missing the specialist route",
      "It is poorly calibrated, so a 90% confidence score cannot be read as a 90% chance of being right",
      "It is overfitting to past referral decisions, which inflates its confidence scores on new, unseen cases",
      "It lacks interpretability, so clinicians cannot tell why it assigns high confidence",
    ],
    correctIndex: 1,
    explanation:
      "Calibration means stated confidence matches observed accuracy. Here a 90% score means about 65% correct, so a threshold built on the score is misleading. Recall, overfitting, and interpretability are separate questions that the audit finding does not address directly.",
  },
  {
    id: 'aigp-foundations-33',
    domainId: 'aigp-foundations',
    prompt:
      "A company chooses between an open-weight model it hosts itself and a closed model accessed through a vendor API. Which tradeoff is most accurate?",
    choices: [
      "Self-hosting gives more control over data and changes but shifts safeguards to the company",
      "The API route shifts responsibility for how outputs are used from the company to the vendor",
      "Open-weight models largely fall outside AI regulation, since anyone can inspect the weights",
      "Closed models offer more transparency, since API vendors disclose their training data in detail",
    ],
    correctIndex: 0,
    explanation:
      "Self-hosting keeps data in-house and allows customization and version control, but the company must handle safety filters, patching, and monitoring itself. Using an API does not transfer deployer responsibility, open weights do not remove regulatory obligations, and closed vendors generally disclose less, not more.",
  },
  {
    id: 'aigp-foundations-34',
    domainId: 'aigp-foundations',
    prompt:
      "A lawyer asks a model without retrieval about a rule adopted last month, and it confidently describes the draft version. What is the most likely cause, and the best fix?",
    choices: [
      "Hallucination; lowering the temperature will keep the model closer to verified facts",
      "Bias; fine-tuning on legal texts from more jurisdictions will broaden its knowledge",
      "The training cutoff; supply current sources through retrieval or the prompt",
      "Context limits; splitting the question into shorter prompts lets it consider the full rule",
    ],
    correctIndex: 2,
    explanation:
      "The model's knowledge ends at its training cutoff, so it only knows the draft. Providing current sources at query time fixes this. Lower temperature does not add knowledge, fine-tuning on other jurisdictions misses the problem, and the question is short enough that context length is irrelevant.",
  },
  {
    id: 'aigp-foundations-35',
    domainId: 'aigp-foundations',
    prompt:
      "A benefits agency uses a system built from hundreds of if-then rules written by policy staff. A manager argues it is 'not AI, so AI governance does not apply.' What is the best response?",
    choices: [
      "Correct, since AI frameworks generally cover machine learning rather than rule-based logic",
      "Correct, since rules written by policy staff are transparent and so cannot embed bias",
      "Incorrect, since automated eligibility systems are classified as high-risk AI by default",
      "It depends on the definition, and the rules can still produce unfair outcomes",
    ],
    correctIndex: 3,
    explanation:
      "Some definitions, including parts of the EU AI Act's, can cover logic- and knowledge-based systems, while others focus on machine learning, so classification depends on the framework. Either way, hand-written rules can embed bias. Not every automated system is high-risk AI.",
  },
  {
    id: 'aigp-foundations-36',
    domainId: 'aigp-foundations',
    prompt:
      "A grid-balancing AI adjusts loads automatically every few seconds, while an operator monitors a dashboard and can override it. Which oversight model is this, and what is its main limitation?",
    choices: [
      "Human-on-the-loop; decisions happen faster than the operator can react to prevent harm",
      "Human-in-the-loop; each adjustment waits for operator approval, which slows the grid",
      "Human-out-of-the-loop; the dashboard is informational and gives no ability to intervene",
      "Human-in-command; the operator's design role ensures accountability for each decision",
    ],
    correctIndex: 0,
    explanation:
      "The system acts on its own while a human supervises and can intervene, which is human-on-the-loop. Because decisions happen faster than a person can review, intervention may come too late. Human-in-the-loop requires approval for each decision, and out-of-the-loop means no real-time oversight.",
  },
  {
    id: 'aigp-foundations-37',
    domainId: 'aigp-foundations',
    prompt:
      "A lender uses SHAP values to tell each denied applicant which factors mattered most. What is an important limitation of this approach?",
    choices: [
      "SHAP works only on linear models, so its values misrepresent a nonlinear credit model",
      "SHAP reveals training records behind each decision, which creates a privacy disclosure",
      "The attributions approximate the model and may not reflect how it actually decided",
      "SHAP values meet adverse action notice rules on their own, so no review is needed",
    ],
    correctIndex: 2,
    explanation:
      "Post-hoc methods like SHAP estimate feature contributions and can be unstable or misleading, especially with correlated features. They work on complex models, do not expose training data, and their output still has to be translated into accurate, specific reasons to meet legal requirements.",
  },
  {
    id: 'aigp-foundations-38',
    domainId: 'aigp-foundations',
    prompt:
      "Several hospitals train a shared model with federated learning, exchanging only model updates. A privacy officer concludes no further privacy controls are needed. Why is that incomplete?",
    choices: [
      "Federated learning still sends raw records to a central server for final aggregation",
      "Model updates can leak information, so techniques like differential privacy may be needed",
      "Federated learning is barred for health data under most privacy laws without consent",
      "Federated models cannot be validated centrally, so clinical use needs extra approval",
    ],
    correctIndex: 1,
    explanation:
      "Federated learning keeps raw data local, but gradients or model updates can reveal information about training records, so it is often combined with secure aggregation or differential privacy. It does not send raw records, is not generally prohibited, and federated models can be validated.",
  },
  {
    id: 'aigp-foundations-39',
    domainId: 'aigp-foundations',
    prompt:
      "A statistics agency adds calibrated random noise to published results so that no individual's inclusion changes the output much. What is the central tradeoff of this technique?",
    choices: [
      "It makes the data anonymous, so data protection law stops applying to the published results",
      "It hides identifiers but can be reversed by anyone who holds the corresponding lookup table",
      "It replaces values with tokens, which prevents most statistical analysis of the results",
      "Stronger privacy guarantees require adding more noise, which reduces the accuracy of results",
    ],
    correctIndex: 3,
    explanation:
      "Differential privacy offers a mathematical guarantee controlled by a privacy budget; tighter budgets add more noise and reduce utility. It does not automatically end all obligations, is not reversible like pseudonymization, and is different from tokenization.",
  },
  {
    id: 'aigp-foundations-40',
    domainId: 'aigp-foundations',
    prompt:
      "A vendor claims 95% on a public benchmark. You learn the benchmark's test questions were published online before the model's training data was collected. What is the best next step?",
    choices: [
      "Ask for results on held-out or private test data that could not have been in training",
      "Reject the vendor, since training on published benchmark items is a copyright violation",
      "Accept the score, since public benchmarks are the accepted standard for comparing models",
      "Ask for training accuracy, which will reveal whether the benchmark result is trustworthy",
    ],
    correctIndex: 0,
    explanation:
      "If test items may have been in the training data, the model could be recalling answers, so independent held-out evaluation is needed. Contamination is not automatically a copyright violation, public benchmarks are useful but vulnerable to this problem, and training accuracy does not reveal contamination.",
  },
]
