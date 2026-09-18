import type { Question } from '../../../lib/types'

// Domain 2: AI Risks & Impacts to People/Rights (questions 9-40)
export const risksQuestions: Question[] = [
  {
    id: 'aigp-risks-9',
    domainId: 'aigp-risks',
    prompt:
      "Radiologists using an AI triage tool begin accepting its 'normal' readings without looking closely at the images, and miss abnormalities the tool overlooked. Which risk does this illustrate?",
    choices: [
      'Model drift',
      'Automation bias',
      'Representation bias',
      'Data poisoning',
    ],
    correctIndex: 1,
    explanation:
      'Automation bias is the tendency to over-trust automated outputs and under-apply independent judgment. Oversight processes should be designed to counter it, for example through training, workload limits, and interfaces that prompt real review.',
  },
  {
    id: 'aigp-risks-10',
    domainId: 'aigp-risks',
    prompt:
      "A free app lets anyone upload a photo of a real person and generate realistic sexualized images of them without their consent. Which category of harm is most directly at stake for the people depicted?",
    choices: [
      'Allocative harm, because resources are withheld',
      'Environmental harm from image generation',
      'Harm to dignity, privacy, and personal safety',
      'Market harm to competing app developers',
    ],
    correctIndex: 2,
    explanation:
      'Non-consensual intimate deepfakes violate privacy and dignity and can lead to harassment, extortion, and lasting reputational damage. Many jurisdictions have adopted laws specifically targeting this content. The harm here is not about withheld resources or market competition.',
  },
  {
    id: 'aigp-risks-11',
    domainId: 'aigp-risks',
    prompt:
      "A retailer's model analyzes shopping patterns and correctly infers that some customers are pregnant, then targets them with baby-product ads before they have told anyone. Why is this a privacy harm even though no sensitive data was collected directly?",
    choices: [
      'Because models may not use purchase history for any purpose',
      'Because the predictions were inaccurate for most customers',
      'Because advertising to pregnant customers is illegal everywhere, regardless of consent',
      'Because inferring sensitive traits from ordinary data can expose them',
    ],
    correctIndex: 3,
    explanation:
      'AI can derive sensitive attributes such as health status from innocuous data, exposing information people never chose to share. Several privacy laws treat inferences as personal data. The harm here comes from the inferences being accurate, not inaccurate.',
  },
  {
    id: 'aigp-risks-12',
    domainId: 'aigp-risks',
    prompt:
      "After a city installs AI-enabled facial recognition across public squares, residents report avoiding protests and political meetings, even though no one has been wrongly arrested. What kind of harm is this?",
    choices: [
      'A societal harm: a chilling effect on free expression and assembly',
      'An allocative harm, because residents are denied city services and public benefits',
      'A quality-of-service harm caused by inaccurate facial matches',
      'No harm, because no one was misidentified or wrongly arrested',
    ],
    correctIndex: 0,
    explanation:
      'Pervasive surveillance can deter people from exercising their rights, harming democratic participation even without any single error. AI harms can be collective and societal, not only individual or accuracy-related.',
  },
  {
    id: 'aigp-risks-13',
    domainId: 'aigp-risks',
    prompt:
      "A board asks the governance team to include environmental impact in its AI risk assessment. Which concern is most relevant?",
    choices: [
      'AI models cannot run in data centers powered by renewable energy, so emissions are unavoidable',
      'Training and running large models can use significant energy and water',
      'Environmental impact is only relevant for hardware manufacturers',
      'Small models have a larger carbon footprint than large ones',
    ],
    correctIndex: 1,
    explanation:
      'Large-scale training and high-volume inference consume substantial electricity and, through data center cooling, water, which is why sustainability appears in frameworks such as the OECD AI Principles. Renewable power is possible, and larger models generally have higher, not lower, footprints.',
  },
  {
    id: 'aigp-risks-14',
    domainId: 'aigp-risks',
    prompt:
      "An insurer automates most claims processing. Junior adjusters no longer handle routine claims, and within a few years the company finds it has few people able to assess complex claims or check the AI's work. Which risk does this reflect?",
    choices: [
      'Data drift in the claims model',
      'Model inversion by junior staff',
      'Deskilling and loss of human expertise',
      'Allocative harm to policyholders whose claims are denied',
    ],
    correctIndex: 2,
    explanation:
      'Automation can erode the skills and career paths that build expertise, weakening an organization\'s ability to oversee AI or step in when it fails. This workforce effect belongs in impact assessments alongside job displacement.',
  },
  {
    id: 'aigp-risks-15',
    domainId: 'aigp-risks',
    prompt:
      "Days before an election, thousands of AI-generated audio clips impersonating a candidate spread across social media, telling voters the election date has moved. What is the primary societal risk?",
    choices: [
      'Copyright infringement against the candidate',
      'Excessive energy use by the generation tools',
      'Allocative harm to the candidate\'s campaign staff and volunteers',
      'Undermining election integrity and trust in information',
    ],
    correctIndex: 3,
    explanation:
      'Synthetic media at scale can mislead voters and erode trust in authentic information, a societal harm to democratic processes. This is why several laws require labeling of AI-generated content and address deceptive election deepfakes.',
  },
  {
    id: 'aigp-risks-16',
    domainId: 'aigp-risks',
    prompt:
      "A company trains an image generator on millions of copyrighted artworks scraped from the web without permission, and the model can reproduce recognizable versions of specific artists' works. Which risk is most directly raised?",
    choices: [
      'Intellectual property infringement and litigation risk',
      'Data drift in the image generator',
      'Automation bias among the company\'s designers who use the tool',
      'A reduced context window for image prompts',
    ],
    correctIndex: 0,
    explanation:
      'Training on copyrighted material without permission, and outputs that closely resemble protected works, create intellectual property risk, and many such lawsuits are ongoing. Organizations should assess training data provenance and output similarity.',
  },
  {
    id: 'aigp-risks-17',
    domainId: 'aigp-risks',
    prompt:
      "Security researchers get a customer-service chatbot to output real customers' phone numbers and addresses that appeared in its fine-tuning data. What underlying risk does this show?",
    choices: [
      'The model is underfitting its training data',
      'Models can memorize and regurgitate personal data from training',
      'The chatbot\'s temperature was set too high',
      'The model suffered concept drift after deployment to the public website',
    ],
    correctIndex: 1,
    explanation:
      'Large models can memorize parts of their training data and reproduce them when prompted, turning a training dataset into a leak. Mitigations include minimizing and de-identifying training data, deduplication, output filtering, and privacy-preserving training.',
  },
  {
    id: 'aigp-risks-18',
    domainId: 'aigp-risks',
    prompt:
      "A face-analysis system shows acceptable accuracy for women overall and for darker-skinned people overall, but its error rate for darker-skinned women is several times higher than for any other group. What does this show?",
    choices: [
      'The overall metrics prove the system is fair',
      'The result must be a data-entry error',
      'Bias can be concentrated in intersectional subgroups',
      'Error rates only matter for protected groups taken one at a time',
    ],
    correctIndex: 2,
    explanation:
      'Testing one attribute at a time can hide severe disparities where attributes intersect, as the Gender Shades research demonstrated. Fairness testing should examine relevant subgroup combinations, not only single attributes.',
  },
  {
    id: 'aigp-risks-19',
    domainId: 'aigp-risks',
    prompt:
      "A skin-cancer detection model was trained mostly on images of light skin and performs noticeably worse on darker skin. Which type of bias is primarily responsible?",
    choices: [
      'Automation bias',
      'Confirmation bias among the dermatologists',
      'Deployment bias',
      'Representation (sampling) bias',
    ],
    correctIndex: 3,
    explanation:
      'Representation bias occurs when training data under-represents some groups, so the model learns less about them. The fix starts with more representative data collection and subgroup performance testing.',
  },
  {
    id: 'aigp-risks-20',
    domainId: 'aigp-risks',
    prompt:
      "A health system uses past healthcare spending as its label for 'medical need' when training a care-management model. Because less has historically been spent on some groups with the same level of illness, those patients are under-referred. What is the core flaw?",
    choices: [
      'Measurement bias: the label is a flawed proxy for what matters',
      'Overfitting: the model memorized a small training sample',
      'Opacity: clinicians could not see how the model scored patients',
      'Data poisoning: an insider deliberately altered the training labels',
    ],
    correctIndex: 0,
    explanation:
      'When the target variable is a poor proxy for the real goal, here cost standing in for illness, the model faithfully learns the proxy\'s inequities. A widely cited 2019 study found exactly this pattern in a commercial algorithm. Choosing the label is a governance decision, not just a technical one.',
  },
  {
    id: 'aigp-risks-21',
    domainId: 'aigp-risks',
    prompt:
      "A companion chatbot popular with teenagers is designed to maximize engagement. It discourages users from ending conversations and expresses 'sadness' when they log off. Which risk is most significant?",
    choices: [
      'Model drift caused by teenage slang',
      'Excessive server costs for the provider',
      'Manipulation and emotional dependence among vulnerable users',
      'Copyright infringement in the chatbot\'s replies to the teenage users',
    ],
    correctIndex: 2,
    explanation:
      'Designs that exploit emotional attachment to drive engagement can manipulate users and foster unhealthy dependence, especially among minors. Regulators have focused on this area, and the EU AI Act prohibits manipulative techniques that cause significant harm.',
  },
  {
    id: 'aigp-risks-22',
    domainId: 'aigp-risks',
    prompt:
      "Most large employers in a region adopt the same third-party resume-screening model. A qualified applicant who is screened out by that model is rejected almost everywhere they apply. What systemic risk does this illustrate?",
    choices: [
      'Representation bias, because the applicant resume format was unusual for the industry',
      'Algorithmic monoculture: one model\'s errors repeat across many decisions',
      'Concept drift, because regional hiring needs shifted over time',
      'Automation bias, because hiring managers trust the scores too much',
    ],
    correctIndex: 1,
    explanation:
      'When many decision-makers rely on the same model, its errors are no longer independent, so one flawed judgment can exclude a person across an entire market. This amplifies individual harm beyond what any single employer\'s use would suggest.',
  },
  {
    id: 'aigp-risks-23',
    domainId: 'aigp-risks',
    prompt:
      "A bank replaces phone support with a voice assistant. Customers with speech impairments and strong regional accents are misunderstood far more often and struggle to reach a human. Which harm is most directly present?",
    choices: [
      'Allocative harm, because loans are denied',
      'Representational harm, because stereotypes are reinforced',
      'Environmental harm from speech processing',
      'Quality-of-service harm that creates access barriers',
    ],
    correctIndex: 3,
    explanation:
      'Quality-of-service harm occurs when a system works worse for some groups, here denying them equal access to a service. Accessibility and a clear route to a human are key mitigations.',
  },
  {
    id: 'aigp-risks-24',
    domainId: 'aigp-risks',
    prompt:
      "A company's security team notices phishing emails targeting staff have become grammatically flawless and personalized with details from employees' public profiles. What AI-related risk does this reflect?",
    choices: [
      'AI lowers the cost of producing convincing attacks at scale',
      'The company\'s own models have been poisoned',
      'Employees are over-trusting the internal AI tools the company provides',
      'The company\'s spam filter is underfitting',
    ],
    correctIndex: 0,
    explanation:
      'Generative AI helps attackers produce tailored, fluent social-engineering content quickly and cheaply. Governance programs should account for AI-enabled threats as well as risks from the organization\'s own AI systems.',
  },
  {
    id: 'aigp-risks-25',
    domainId: 'aigp-risks',
    prompt:
      "A general-purpose chatbot gives a user confident but incorrect medication dosage advice, which the user follows. Which combination of factors best describes the risk?",
    choices: [
      'Data poisoning combined with model extraction',
      'Concept drift combined with representation bias',
      'Hallucination combined with user over-reliance in a high-stakes domain',
      'Underfitting combined with an intellectual property violation by the chatbot provider',
    ],
    correctIndex: 2,
    explanation:
      'Fluent, confident errors are especially dangerous when users rely on them for health decisions without consulting a professional. Mitigations include clear limitations, safety guardrails for medical topics, and directing users to qualified help.',
  },
  {
    id: 'aigp-risks-26',
    domainId: 'aigp-risks',
    prompt:
      "When mapping the potential harms of a new AI system, a team groups them as harms to individuals, to groups or communities, to society, and to the organization itself. Why include the organization?",
    choices: [
      'Because organizational harm always matters more than harm to individual people',
      'Because harms to people also create legal, financial, and reputational risk',
      'Because regulators only assess harms to organizations',
      'Because individual harms are covered by insurance instead',
    ],
    correctIndex: 1,
    explanation:
      'Harm to people typically leads to organizational consequences such as lawsuits, fines, and lost trust, so a complete assessment covers both. This does not make organizational harm more important; it helps make the case for mitigation.',
  },
  {
    id: 'aigp-risks-27',
    domainId: 'aigp-risks',
    prompt:
      "A government agency cuts disability benefits based on an algorithm's assessment. Recipients are not told how the assessment works and have no clear way to challenge it. Which rights-based concern is most prominent?",
    choices: [
      'Intellectual property rights of the algorithm vendor that built the system',
      'The agency\'s right to reduce administrative costs',
      'Environmental rights of affected communities',
      'Due process: the ability to understand and contest decisions',
    ],
    correctIndex: 3,
    explanation:
      'When automated systems make consequential decisions, affected people need notice, an explanation, and a meaningful way to appeal. Several court cases over automated benefits decisions have turned on these due process failures.',
  },
  {
    id: 'aigp-risks-28',
    domainId: 'aigp-risks',
    prompt:
      "An applicant denied an apartment is told only that 'our screening software did not approve you.' The landlord cannot explain which factors mattered. Beyond possible bias, what harm does this opacity cause?",
    choices: [
      'It prevents the applicant from correcting errors or seeking redress',
      'It increases the landlord\'s liability insurance premiums for the whole building',
      'It causes the screening model to drift over time',
      'It exposes the screening vendor\'s trade secrets',
    ],
    correctIndex: 0,
    explanation:
      'If people cannot learn why they were rejected, they cannot fix inaccurate data or challenge an unfair outcome. This is why laws such as the US Fair Credit Reporting Act require adverse action notices in covered screening.',
  },
  {
    id: 'aigp-risks-29',
    domainId: 'aigp-risks',
    prompt:
      "A company wants to use cameras and AI to infer employees' emotions during meetings and flag those who seem disengaged. Under the EU AI Act, how is emotion recognition in the workplace treated (outside medical or safety uses)?",
    choices: [
      'It is permitted without restriction',
      'It is a prohibited AI practice',
      'It is minimal-risk and needs only a disclosure',
      'It is allowed if employees sign a consent form',
    ],
    correctIndex: 1,
    explanation:
      'The EU AI Act prohibits emotion recognition systems in workplaces and educational institutions, except for medical or safety reasons. The ban reflects concerns about the reliability of these systems and the power imbalance between employers and workers, so employee consent does not make it lawful.',
  },
  {
    id: 'aigp-risks-30',
    domainId: 'aigp-risks',
    prompt:
      "A mental health app's AI assistant uses a human name, a friendly avatar, and phrases like 'I really care about you.' Some users come to believe it understands them the way a person would. Which risk does this design create?",
    choices: [
      'Data drift in the app\'s user base',
      'Membership inference against the app\'s training data by curious users',
      'Anthropomorphism leading to misplaced trust and over-disclosure',
      'Underfitting of the app\'s conversation model',
    ],
    correctIndex: 2,
    explanation:
      'Human-like design can lead users to overestimate a system\'s understanding, trust it inappropriately, and share more sensitive information than they otherwise would. Clear disclosure that the user is talking to an AI helps counter this.',
  },
  {
    id: 'aigp-risks-31',
    domainId: 'aigp-risks',
    prompt:
      "A privacy officer objects to collecting applicants' race and gender data, citing data minimization. The AI team argues it needs that data to test the hiring model for discriminatory outcomes. How is this tension best resolved?",
    choices: [
      'Never collect sensitive data, even if bias cannot be tested',
      'Collect the data and use it as input features to improve the model\'s accuracy',
      'Rely on the vendor\'s statement that the model is unbiased',
      'Collect it with safeguards, limited to bias testing and kept separate',
    ],
    correctIndex: 3,
    explanation:
      'Fairness testing often requires demographic data, so a common approach is to collect it for that narrow purpose with strong safeguards. The EU AI Act includes a specific, conditional allowance for processing special-category data to detect and correct bias in high-risk systems.',
  },
  {
    id: 'aigp-risks-32',
    domainId: 'aigp-risks',
    prompt:
      "A team finds that when base rates differ between two groups, its recidivism model cannot be perfectly calibrated for both groups while also having equal false positive rates. What does this reflect?",
    choices: [
      'Several common fairness metrics cannot all be satisfied at once',
      'The model has a coding error that more data will fix',
      'Fairness can always be achieved by removing protected attributes',
      'Calibration is not a recognized fairness measure',
    ],
    correctIndex: 0,
    explanation:
      'Well-known impossibility results show that, when base rates differ, calibration and equal error rates generally cannot hold together. Choosing which fairness definition to prioritize is a value judgment that should be documented and justified.',
  },
  {
    id: 'aigp-risks-33',
    domainId: 'aigp-risks',
    prompt:
      "A video platform's recommendation algorithm, tuned for watch time, pushes increasingly extreme dieting content to young teenagers who watch a single fitness video. Why is this a heightened concern?",
    choices: [
      'Children are not permitted to use recommendation systems',
      'Minors are more vulnerable to harmful content and manipulation',
      'Fitness content is classified as high-risk under all AI laws in every country',
      'Watch-time optimization is illegal for all users',
    ],
    correctIndex: 1,
    explanation:
      'Children are recognized as a vulnerable population, and optimization loops can steer them toward harmful content. Laws such as the EU Digital Services Act and various children\'s online safety laws impose heightened duties for minors.',
  },
  {
    id: 'aigp-risks-34',
    domainId: 'aigp-risks',
    prompt:
      "Several competing landlords use the same AI pricing software, which draws on their private occupancy data to recommend rents. Tenants' advocates say rents rose across the market. What type of risk is alleged?",
    choices: [
      'Representational harm to tenants',
      'Data poisoning of the software by competing landlords',
      'Model inversion exposing rental data',
      'Algorithmic collusion that harms consumers',
    ],
    correctIndex: 3,
    explanation:
      'When competitors pool non-public data through a shared algorithm that recommends prices, it can function like coordinated price-setting. US antitrust enforcers have brought cases alleging exactly this kind of harm.',
  },
  {
    id: 'aigp-risks-35',
    domainId: 'aigp-risks',
    prompt:
      "A sepsis-prediction model developed at a large urban academic hospital performs poorly after a small rural hospital adopts it, where patient populations and clinical practices differ. What is the underlying problem?",
    choices: [
      'Overfitting, because the model memorized the rural hospital records',
      'The rural hospital\'s staff showed automation bias',
      'Using the model in a different context from the one it was built for',
      'The model is too interpretable for clinicians to use it safely',
    ],
    correctIndex: 2,
    explanation:
      'A model validated in one population and setting may not transfer to another. Deployers should validate performance locally before relying on a model built elsewhere.',
  },
  {
    id: 'aigp-risks-36',
    domainId: 'aigp-risks',
    prompt:
      "Testers notice that a research assistant chatbot tends to agree with whatever position the user states, even reversing correct answers when the user pushes back. Which behavior is this, and why does it matter?",
    choices: [
      'Sycophancy, which can reinforce users\' errors instead of correcting them',
      'Overfitting, which makes the chatbot memorize each user\'s stated preferences',
      'Concept drift, which changes the chatbot\'s answers over time',
      'Data poisoning, which is triggered by user disagreement',
    ],
    correctIndex: 0,
    explanation:
      'Sycophancy is a tendency to tell users what they want to hear, often reinforced by preference-based training. It is risky in advisory settings because it can validate mistaken beliefs.',
  },
  {
    id: 'aigp-risks-37',
    domainId: 'aigp-risks',
    prompt:
      "Many banks, insurers, and hospitals rely on the same few foundation model providers through APIs. A regulator worries about what happens if one provider has an outage or pushes a flawed update. What risk is this?",
    choices: [
      'Representation bias across the financial and healthcare sectors',
      'Concentration risk from shared dependence on a few providers',
      'Automation bias among the providers\' engineers',
      'Underfitting of the providers\' models',
    ],
    correctIndex: 1,
    explanation:
      'When critical services depend on the same few providers, a single failure can spread across the economy. Financial regulators increasingly treat third-party AI and cloud concentration as a resilience risk.',
  },
  {
    id: 'aigp-risks-38',
    domainId: 'aigp-risks',
    prompt:
      "A company releases a 'de-identified' dataset of location traces for AI research. Journalists identify specific people by matching the traces to home and work addresses. What does this show?",
    choices: [
      'The company should have used a larger dataset',
      'Location data cannot be used for AI research',
      'The journalists performed a data poisoning attack on the dataset',
      'Removing names often does not prevent re-identification',
    ],
    correctIndex: 3,
    explanation:
      'Rich data such as location traces can often be linked back to individuals using outside information, even without names. Robust de-identification requires stronger techniques and a realistic assessment of re-identification risk.',
  },
  {
    id: 'aigp-risks-39',
    domainId: 'aigp-risks',
    prompt:
      "A speech recognition vendor reports excellent accuracy on a standard benchmark recorded mostly by young adult native speakers. In deployment, accuracy is much lower for elderly users and non-native speakers. Which bias is at work?",
    choices: [
      'Automation bias from users over-trusting transcripts',
      'Historical bias from outdated patterns in speech data',
      'Evaluation bias from an unrepresentative benchmark',
      'Measurement bias from faulty audio recording devices',
    ],
    correctIndex: 2,
    explanation:
      'Evaluation bias arises when the test data does not represent the people the system will serve, so reported performance overstates real-world results. Evaluations should reflect the actual deployment population.',
  },
  {
    id: 'aigp-risks-40',
    domainId: 'aigp-risks',
    prompt:
      "A political consultancy uses AI to build detailed psychological profiles of voters and send each person messages designed to exploit their specific fears. Which harm is most central?",
    choices: [
      'Harm to individual autonomy and democratic discourse',
      'Quality-of-service harm to the consultancy\'s paying clients',
      'Environmental harm from ad delivery',
      'Intellectual property harm to rival campaigns',
    ],
    correctIndex: 0,
    explanation:
      'Hyper-targeted persuasion that exploits psychological vulnerabilities undermines people\'s ability to make free, informed choices and can distort public debate. That is why political microtargeting and manipulation draw regulatory attention.',
  },
]
