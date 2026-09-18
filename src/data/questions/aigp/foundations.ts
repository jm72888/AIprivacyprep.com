import type { Question } from '../../../lib/types'

// Domain 1: AI Foundations & Concepts (questions 9-40)
export const foundationsQuestions: Question[] = [
  {
    id: 'aigp-foundations-9',
    domainId: 'aigp-foundations',
    prompt:
      "A lender trains a model on 50,000 past loan applications, each tagged with whether the borrower eventually defaulted, so the model can predict default risk for new applicants. Which learning approach is this?",
    choices: [
      'Unsupervised learning, because the model discovers default patterns on its own',
      'Supervised learning, because each training example is paired with a known outcome label',
      'Reinforcement learning, because the model is rewarded for each correct default prediction',
      'Self-supervised learning, because the labels are generated from the input data itself',
    ],
    correctIndex: 1,
    explanation:
      'Training on examples paired with known outcomes (defaulted or not) is supervised learning. Unsupervised learning has no labels, reinforcement learning learns from rewards through interaction with an environment, and self-supervised learning derives labels from the raw data, such as predicting the next word.',
  },
  {
    id: 'aigp-foundations-10',
    domainId: 'aigp-foundations',
    prompt:
      'A warehouse robot learns to pick items by trying different grip strategies, receiving a positive signal when an item is picked successfully and a negative one when it is dropped. Which learning paradigm does this describe?',
    choices: [
      'Supervised learning from a labeled dataset of successful grips',
      'Unsupervised clustering of grip strategies by similarity',
      'Reinforcement learning through trial, error, and reward signals',
      'Transfer learning from a model trained on a related picking task',
    ],
    correctIndex: 2,
    explanation:
      'Reinforcement learning trains an agent through interaction with its environment, using rewards and penalties to shape its behavior. There is no pre-labeled dataset here, the goal is not to find clusters, and nothing indicates a model was reused from another task.',
  },
  {
    id: 'aigp-foundations-11',
    domainId: 'aigp-foundations',
    prompt:
      "After pretraining, a chatbot developer has human reviewers rank pairs of model responses by helpfulness and harmlessness, then uses those rankings to further tune the model's behavior. What is this technique called?",
    choices: [
      'Reinforcement learning from human feedback (RLHF)',
      'Retrieval-augmented generation (RAG)',
      'Federated learning across reviewer devices',
      'Data augmentation using human-written example responses',
    ],
    correctIndex: 0,
    explanation:
      'RLHF trains a reward model on human preference rankings and then optimizes the language model against it, which is a common way to align model behavior with human expectations. RAG adds retrieved documents at query time, federated learning trains across distributed devices, and data augmentation expands a training set.',
  },
  {
    id: 'aigp-foundations-12',
    domainId: 'aigp-foundations',
    prompt:
      "A hospital takes a general-purpose image model and continues training it on 3,000 labeled chest X-rays so it can detect pneumonia, rather than training a model from scratch. What is the main reason this approach is attractive?",
    choices: [
      'It removes the need to validate the model on hospital data before use',
      'It guarantees the model will not inherit biases from its original training data',
      'It moves legal responsibility for the model to the original developer',
      'It reuses learned features, so far less domain data and compute are needed',
    ],
    correctIndex: 3,
    explanation:
      'Transfer learning (fine-tuning) reuses representations learned during pretraining, so a strong model can be built with a small labeled dataset and modest compute. It does not remove the need for validation, it can carry over biases from the base model, and it does not shift the deploying organization\'s accountability.',
  },
  {
    id: 'aigp-foundations-13',
    domainId: 'aigp-foundations',
    prompt:
      "A company connects its language model to a search index of current internal policy documents, and the system inserts the most relevant passages into each prompt before the model answers. What is the main purpose of this design?",
    choices: [
      'To permanently update the model\'s weights with the latest policy documents each night',
      'To ground answers in current, specific sources without retraining the model',
      'To prevent the model from ever producing inaccurate statements',
      'To reduce the model\'s context window so responses are faster',
    ],
    correctIndex: 1,
    explanation:
      'Retrieval-augmented generation supplies relevant, up-to-date documents at query time so answers can draw on specific sources without changing the model\'s weights. It reduces but does not eliminate inaccurate output, and it typically uses more of the context window, not less.',
  },
  {
    id: 'aigp-foundations-14',
    domainId: 'aigp-foundations',
    prompt:
      "A legal team pastes a 900-page contract into a chatbot and finds that its answers ignore clauses near the start of the document. The vendor explains the model can only consider a limited amount of text at once. Which concept explains this?",
    choices: [
      'The model\'s training data cutoff date',
      'The model\'s temperature setting',
      'The model\'s context window limit',
      'The model\'s parameter count',
    ],
    correctIndex: 2,
    explanation:
      'The context window is the maximum amount of text, measured in tokens, a model can process in one request; content beyond it is truncated or dropped. The training cutoff concerns what the model learned, temperature controls randomness, and parameter count describes model size.',
  },
  {
    id: 'aigp-foundations-15',
    domainId: 'aigp-foundations',
    prompt:
      "An auditor asks the same generative AI model the same question twice and receives two differently worded answers. The team is told this is expected. Which factor most directly explains the variation?",
    choices: [
      'Probabilistic sampling of output tokens, influenced by settings such as temperature',
      'The model updating its own weights from the first question before answering the second',
      'A malfunction in the model that should be logged and reported as an AI incident',
      'The auditor\'s account being routed to a different model each time',
    ],
    correctIndex: 0,
    explanation:
      'Generative models sample each next token from a probability distribution, so identical prompts can yield different outputs unless sampling is made deterministic. Models do not retrain between requests, and non-determinism is normal behavior, although it matters for testing and reproducibility.',
  },
  {
    id: 'aigp-foundations-16',
    domainId: 'aigp-foundations',
    prompt:
      "A search system converts each product description into a list of numbers so that descriptions with similar meanings end up close together, even when they share no words. What are these numerical representations called?",
    choices: [
      'Hyperparameters',
      'Checksums',
      'Weights',
      'Embeddings',
    ],
    correctIndex: 3,
    explanation:
      'Embeddings are vector representations that place semantically similar items near each other, enabling similarity search. Hyperparameters are training settings, weights are the model\'s learned internal parameters, and checksums verify data integrity.',
  },
  {
    id: 'aigp-foundations-17',
    domainId: 'aigp-foundations',
    prompt:
      "A chess engine can beat world champions but cannot hold a conversation, drive a car, or read an X-ray. How is a system like this best classified?",
    choices: [
      'Artificial general intelligence, because it exceeds human performance',
      'Narrow AI, because its competence is limited to a specific task',
      'Superintelligence, because it outperforms the best human experts',
      'Symbolic AI, because chess has well-defined rules',
    ],
    correctIndex: 1,
    explanation:
      'Narrow (or weak) AI performs well on specific tasks but does not generalize across domains. Superhuman performance at one task is not general intelligence, and whether an engine is symbolic depends on how it was built, not on the rules of the game.',
  },
  {
    id: 'aigp-foundations-18',
    domainId: 'aigp-foundations',
    prompt:
      "A regulator asks why a deep neural network used for fraud detection cannot simply list the rules it follows. Which answer is most accurate?",
    choices: [
      'The vendor is withholding the rules as a trade secret',
      'The rules exist but are encrypted in the model file',
      'Its behavior emerges from millions of learned weights, not explicit rules',
      'Neural networks follow no logic and produce essentially random outputs that cannot be traced',
    ],
    correctIndex: 2,
    explanation:
      'Deep learning models encode patterns across many layers of learned weights rather than human-readable rules, which is why they are described as opaque and why post-hoc explanation methods exist. The outputs are not random, and the difficulty is structural rather than a matter of secrecy or encryption.',
  },
  {
    id: 'aigp-foundations-19',
    domainId: 'aigp-foundations',
    prompt:
      "To train a fraud model without exposing real customer records, a bank generates artificial transactions that mimic the statistical patterns of its real data. What is the most important governance caveat for this approach?",
    choices: [
      'Synthetic data can still leak real records or carry over the source data\'s biases',
      'Synthetic data is always treated as personal data under the GDPR',
      'Synthetic data cannot be used to train machine learning models',
      'Synthetic data removes the need to test the model on real-world data before it is deployed',
    ],
    correctIndex: 0,
    explanation:
      'Synthetic data can reduce privacy risk, but poorly generated data may memorize and reproduce real records, and it inherits whatever biases the source data contains. It is widely used for training, is not automatically personal data, and still requires validation against real-world conditions.',
  },
  {
    id: 'aigp-foundations-20',
    domainId: 'aigp-foundations',
    prompt:
      "An attacker quietly inserts a few hundred mislabeled examples into a public dataset that a company later scrapes to train a spam filter, causing the filter to let the attacker's messages through. What type of attack is this?",
    choices: [
      'Model inversion',
      'Prompt injection',
      'Evasion with adversarial examples',
      'Data poisoning',
    ],
    correctIndex: 3,
    explanation:
      'Data poisoning corrupts training data to change how a model behaves once trained. Evasion attacks manipulate inputs at inference time, prompt injection targets instruction-following models through their inputs, and model inversion tries to reconstruct training data from a model.',
  },
  {
    id: 'aigp-foundations-21',
    domainId: 'aigp-foundations',
    prompt:
      "An AI email assistant summarizes incoming messages. One message contains hidden text instructing the assistant to forward the user's inbox to an outside address, and the assistant attempts to do so. What vulnerability does this show?",
    choices: [
      'Data poisoning that corrupted the assistant training data before launch',
      'Indirect prompt injection through content the assistant processes',
      'Overfitting to the user\'s writing style',
      'Model drift caused by changes in the format of incoming emails',
    ],
    correctIndex: 1,
    explanation:
      'Indirect prompt injection hides instructions in content an AI system reads, such as emails or web pages, so the model treats attacker text as commands. Nothing here involves altering training data, poor generalization, or a shift in input distribution.',
  },
  {
    id: 'aigp-foundations-22',
    domainId: 'aigp-foundations',
    prompt:
      "Researchers show that by querying a medical model and analyzing its confidence scores, they can determine whether a specific patient's record was part of the training data. What kind of privacy attack is this?",
    choices: [
      'Membership inference',
      'Data poisoning',
      'Model extraction attack',
      'Jailbreaking',
    ],
    correctIndex: 0,
    explanation:
      'Membership inference attacks determine whether a particular record was in a model\'s training set, which can itself reveal sensitive facts, such as a diagnosis. Model extraction copies a model\'s functionality, poisoning corrupts training data, and jailbreaking bypasses a model\'s safety restrictions.',
  },
  {
    id: 'aigp-foundations-23',
    domainId: 'aigp-foundations',
    prompt:
      "A very simple model scores poorly on both its training data and its validation data, missing obvious patterns in each. What does this most likely indicate?",
    choices: [
      'Overfitting, because the model memorized the training data instead of learning general rules',
      'Data leakage between the training and validation sets',
      'Underfitting, because the model is too simple to capture the patterns',
      'Concept drift, because the data changed after training',
    ],
    correctIndex: 2,
    explanation:
      'Poor performance on both training and validation data is the classic sign of underfitting, where the model lacks the capacity to learn the underlying patterns. Overfitting shows strong training but weak validation results, and leakage typically inflates validation scores rather than lowering them.',
  },
  {
    id: 'aigp-foundations-24',
    domainId: 'aigp-foundations',
    prompt:
      "A cancer-screening model is tuned so that it misses as few true cancers as possible, accepting that more healthy patients will be flagged for follow-up tests. Which metric is being prioritized?",
    choices: [
      'Precision',
      'Specificity',
      'Overall model accuracy',
      'Recall (sensitivity)',
    ],
    correctIndex: 3,
    explanation:
      'Recall measures the share of actual positives the model catches, so maximizing it minimizes missed cancers at the cost of more false positives. Precision measures how many flagged cases are truly positive, specificity measures correctly cleared negatives, and accuracy blends all outcomes together.',
  },
  {
    id: 'aigp-foundations-25',
    domainId: 'aigp-foundations',
    prompt:
      "A fraud model reports 99.5% accuracy on a dataset in which only 0.5% of transactions are fraudulent. Why should a governance reviewer be skeptical of this number?",
    choices: [
      'Accuracy above 99% always indicates the model was tested on training data',
      'A model that never flags fraud would score the same accuracy',
      'Fraud models are legally required to report precision instead of accuracy',
      'High accuracy means the model is overfitting to rare cases',
    ],
    correctIndex: 1,
    explanation:
      'With heavily imbalanced classes, a model that labels everything "not fraud" is 99.5% accurate while catching nothing, so accuracy alone is misleading. Reviewers should ask for metrics such as recall, precision, and per-class results.',
  },
  {
    id: 'aigp-foundations-26',
    domainId: 'aigp-foundations',
    prompt:
      "After a new law changes which transactions count as money laundering, a well-performing detection model starts missing cases, even though the transactions it sees look much the same as before. Which phenomenon is this?",
    choices: [
      'Concept drift, because the relationship between inputs and the correct label changed',
      'Data drift, because the statistical distribution of the incoming transactions changed',
      'Underfitting, because the model was too simple to learn laundering patterns from the start',
      'Label leakage, because the target variable was present among the input features',
    ],
    correctIndex: 0,
    explanation:
      'Concept drift occurs when what counts as the correct output changes even though inputs look similar. Data drift is a change in the input distribution itself, which is not described here, and nothing suggests the model was underfit or leaked labels.',
  },
  {
    id: 'aigp-foundations-27',
    domainId: 'aigp-foundations',
    prompt:
      "A lab reports that a larger version of its language model can perform multi-step arithmetic that smaller versions could not, although it was never specifically trained for that task. Why does this matter for governance?",
    choices: [
      'It proves larger models are always safer and more reliable than smaller ones',
      'It means capability testing is only necessary for the very largest models on the market',
      'It shows the model was trained on the test data and should be withdrawn from use',
      'Capabilities can appear with scale, so models need testing for unexpected abilities',
    ],
    correctIndex: 3,
    explanation:
      'Capabilities that appear only at larger scales make it hard to predict a model\'s abilities in advance, which is why capability evaluations and red teaming matter for frontier models. This says nothing about larger models being safer, and smaller models still need testing.',
  },
  {
    id: 'aigp-foundations-28',
    domainId: 'aigp-foundations',
    prompt:
      "A company plans to let an AI system book travel, send emails, and make purchases on employees' behalf by calling external tools with little human review between steps. What new risk does this agentic design introduce compared with a chatbot that only drafts text?",
    choices: [
      'The model will hallucinate far more often simply because it has been given tools',
      'Agentic systems cannot be monitored or logged',
      'Errors or manipulation can turn directly into real-world actions',
      'Tool use makes the model\'s training data publicly visible',
    ],
    correctIndex: 2,
    explanation:
      'When an AI system can take actions, its mistakes or a successful prompt injection can cause real effects, such as unwanted purchases or data leaving the company, without a human catching them first. Agentic systems can and should be logged, and tool use does not by itself increase hallucination or expose training data.',
  },
  {
    id: 'aigp-foundations-29',
    domainId: 'aigp-foundations',
    prompt:
      "An insurer adopts a model that accepts a photo of vehicle damage along with the policyholder's written description and produces a repair estimate. What type of model is this?",
    choices: [
      'A multimodal model',
      'A rules-based expert system',
      'A clustering model',
      'A recommender system',
    ],
    correctIndex: 0,
    explanation:
      'A model that processes more than one type of input, here images and text, is multimodal. Expert systems apply hand-written rules, clustering groups unlabeled data, and recommender systems rank items for users.',
  },
  {
    id: 'aigp-foundations-30',
    domainId: 'aigp-foundations',
    prompt:
      "Which statement best distinguishes a generative model from a discriminative (predictive) model?",
    choices: [
      'Generative models are always larger, while discriminative models are always smaller',
      'Generative models produce new content, while discriminative models classify or predict',
      'Discriminative models are unregulated, while generative models are always high-risk',
      'Generative models need no training data at all, while discriminative models need labeled data',
    ],
    correctIndex: 1,
    explanation:
      'Generative models learn to produce new outputs such as text or images, while discriminative models learn to assign labels or predictions to inputs. Size varies widely in both, both need training data, and both can be used in high-risk settings.',
  },
  {
    id: 'aigp-foundations-31',
    domainId: 'aigp-foundations',
    prompt:
      "A content moderation model performs poorly, and an investigation finds that the contractors who labeled its training data received vague instructions and often disagreed about what counted as harassment. What is the root problem?",
    choices: [
      'The model architecture was too small to capture the nuances of harassment',
      'The model was deployed without a model card documenting its known limitations',
      'The training data was not encrypted at rest while the contractors worked on it',
      'Inconsistent, noisy labels undermined the ground truth the model learned from',
    ],
    correctIndex: 3,
    explanation:
      'A supervised model can only be as good as its labels; unclear annotation guidelines produce inconsistent ground truth, which caps model quality. Model size, missing documentation, and encryption do not explain labels that contradict each other.',
  },
  {
    id: 'aigp-foundations-32',
    domainId: 'aigp-foundations',
    prompt:
      "A triage model outputs a 90% confidence score on its predictions, but an audit finds that cases scored at 90% are correct only 60% of the time. What property is the model lacking?",
    choices: [
      'Interpretability',
      'Robustness to adversarial inputs',
      'Calibration',
      'Fairness across groups',
    ],
    correctIndex: 2,
    explanation:
      'A well-calibrated model\'s confidence scores match observed accuracy, so 90% confidence should be right about 90% of the time. Poor calibration misleads the people who rely on those scores, and it is a distinct issue from interpretability, adversarial robustness, or group fairness.',
  },
  {
    id: 'aigp-foundations-33',
    domainId: 'aigp-foundations',
    prompt:
      "A company is choosing between an open-weight model it can download and run on its own servers and a closed model it can only reach through a vendor's API. Which tradeoff is most accurate from a governance perspective?",
    choices: [
      'Open weights give more control over data and customization, but shift more safety work to the company',
      'Closed models remove all of the company\'s responsibility for how outputs are used',
      'Open-weight models are exempt from AI regulation because anyone can download and inspect them',
      'Closed models always provide more transparency about their training data because vendors must disclose it',
    ],
    correctIndex: 0,
    explanation:
      'Self-hosting an open-weight model keeps data in-house and allows deep customization, but the company takes on safeguards, security patching, and monitoring the vendor would otherwise handle. Using an API does not remove deployer responsibility, open models are not generally exempt from regulation, and closed models are often less transparent.',
  },
  {
    id: 'aigp-foundations-34',
    domainId: 'aigp-foundations',
    prompt:
      "An employee asks a language model about a regulation adopted last month, and the model confidently describes the draft version instead. There is no retrieval component. What is the most likely explanation?",
    choices: [
      'The model was deliberately trained to prefer draft legislation',
      'The model\'s knowledge stops at its training data cutoff',
      'The model\'s temperature was set too low',
      'The regulation was too long to fit in the context window',
    ],
    correctIndex: 1,
    explanation:
      'A model without retrieval only knows what was in its training data, so events after its training cutoff are missing or outdated. Temperature affects randomness rather than knowledge, and the context window is irrelevant when the regulation was never provided in the prompt.',
  },
  {
    id: 'aigp-foundations-35',
    domainId: 'aigp-foundations',
    prompt:
      "A benefits agency uses a system in which policy experts wrote hundreds of explicit if-then rules to decide eligibility. How does this differ from a machine learning approach?",
    choices: [
      'Rules-based systems cannot produce biased outcomes',
      'Rules-based systems learn from data just like machine learning models',
      'Rules-based systems are not considered AI under any framework',
      'Its logic is written by people rather than learned from data',
    ],
    correctIndex: 3,
    explanation:
      'Expert (rules-based) systems apply logic authored by people, while machine learning infers patterns from data. Hand-written rules can still encode bias, and some legal definitions, including the EU AI Act\'s, can cover certain logic-based systems depending on how they work.',
  },
  {
    id: 'aigp-foundations-36',
    domainId: 'aigp-foundations',
    prompt:
      "A power grid's AI system rebalances loads automatically, while an operator watches a dashboard and can intervene if something looks wrong. Which oversight model is this?",
    choices: [
      'Human-in-the-loop, because a human reviews and approves every decision',
      'Human-out-of-the-loop, because no human is involved',
      'Human-on-the-loop, because a human supervises and can intervene',
      'Human-in-command, because a human designed the system',
    ],
    correctIndex: 2,
    explanation:
      'Human-on-the-loop means the system acts on its own while a human monitors and can step in. Human-in-the-loop requires human approval for each decision, and human-out-of-the-loop means no real-time human oversight at all.',
  },
  {
    id: 'aigp-foundations-37',
    domainId: 'aigp-foundations',
    prompt:
      "A lender uses a post-hoc explanation tool that estimates how much each input feature contributed to a loan decision. What is an important limitation of these tools?",
    choices: [
      'They approximate the model\'s behavior and can be unstable or misleading',
      'They can only be used on linear models',
      'They reveal the full training dataset to the applicant',
      'They legally satisfy every explanation requirement on their own, in every jurisdiction',
    ],
    correctIndex: 0,
    explanation:
      'Methods such as SHAP and LIME approximate a model\'s behavior locally; their results can vary between runs and may not reflect the model\'s true reasoning. They work with complex models, do not expose training data, and do not automatically meet legal explanation requirements.',
  },
  {
    id: 'aigp-foundations-38',
    domainId: 'aigp-foundations',
    prompt:
      "Several hospitals want to train a shared diagnostic model without pooling patient records in one place. Each hospital trains the model locally and sends only model updates to a central server. What is this technique?",
    choices: [
      'Differential privacy',
      'Federated learning',
      'Homomorphic encryption',
      'Transfer learning',
    ],
    correctIndex: 1,
    explanation:
      'Federated learning trains a shared model across decentralized data sources and exchanges model updates instead of raw data. Differential privacy adds calibrated noise, homomorphic encryption allows computation on encrypted data, and transfer learning reuses a pretrained model. These techniques are often combined.',
  },
  {
    id: 'aigp-foundations-39',
    domainId: 'aigp-foundations',
    prompt:
      "A census bureau adds carefully calibrated random noise to published statistics so that no individual's data can be confidently inferred, while overall trends remain accurate. Which technique is this?",
    choices: [
      'Pseudonymization of records',
      'Data masking',
      'Differential privacy',
      'Tokenization',
    ],
    correctIndex: 2,
    explanation:
      'Differential privacy adds mathematically calibrated noise to give a measurable guarantee that any one person\'s data has limited effect on the output. Pseudonymization replaces identifiers but can often be reversed, while masking and tokenization hide specific values without that statistical guarantee.',
  },
  {
    id: 'aigp-foundations-40',
    domainId: 'aigp-foundations',
    prompt:
      "A vendor claims its model scored 95% on a well-known public benchmark. It later emerges that the benchmark's test questions appeared in the model's training data. Why does this undermine the claim?",
    choices: [
      'Public benchmarks are not allowed in vendor marketing',
      'Benchmark scores above 90% are statistically impossible',
      'Training on public benchmark data violates copyright law in all cases and invalidates the score',
      'The model may have memorized answers, so the score overstates real ability',
    ],
    correctIndex: 3,
    explanation:
      'Benchmark contamination lets a model recall answers it has already seen, inflating scores without showing real generalization. That is why evaluators check for overlap and use held-out or private test sets.',
  },
]
