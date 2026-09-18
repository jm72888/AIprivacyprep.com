import type { Question } from '../../../lib/types'

// Domain 4: AI Law & Standards (questions 9-40)
export const lawQuestions: Question[] = [
  {
    id: 'aigp-law-9',
    domainId: 'aigp-law',
    prompt:
      "Under the EU AI Act, what is the maximum fine for engaging in a prohibited AI practice?",
    choices: [
      'Up to EUR 7.5 million or 1% of worldwide annual turnover',
      'Up to EUR 15 million or 3% of worldwide annual turnover',
      'Up to EUR 20 million or 4% of worldwide annual turnover',
      'Up to EUR 35 million or 7% of worldwide annual turnover',
    ],
    correctIndex: 3,
    explanation:
      'Prohibited practices carry the highest tier: up to EUR 35 million or 7% of worldwide annual turnover, whichever is higher. Most other violations are capped at EUR 15 million or 3%, and supplying incorrect information to authorities at EUR 7.5 million or 1%. The 20 million / 4% tier comes from the GDPR.',
  },
  {
    id: 'aigp-law-10',
    domainId: 'aigp-law',
    prompt:
      "A US company with no EU offices provides an AI resume-screening service to an employer in Germany, and the system's outputs are used there. Does the EU AI Act apply to the US company?",
    choices: [
      'No, because the company has no office, staff, servers, or other establishment in the EU',
      'Yes, because the Act covers non-EU providers whose system outputs are used in the EU',
      'Only if the company has voluntarily registered with an EU market authority',
      'Only if the company processes personal data of EU citizens as a controller',
    ],
    correctIndex: 1,
    explanation:
      'The AI Act has extraterritorial reach: it applies to providers placing systems on the EU market, and to providers and deployers in third countries where the system\'s output is used in the EU. Its scope turns on market placement and use, not only on processing personal data.',
  },
  {
    id: 'aigp-law-11',
    domainId: 'aigp-law',
    prompt:
      "Under the EU AI Act, a software company builds an AI credit-scoring system and sells it to a bank, which uses it to assess customers. What are their respective roles?",
    choices: [
      'The software company is the provider and the bank is the deployer',
      'The bank is the provider and the software company is the deployer',
      'Both are providers with identical obligations',
      'Both are deployers, because neither is an EU authority',
    ],
    correctIndex: 0,
    explanation:
      'The provider develops the system and places it on the market under its own name, while the deployer uses it under its authority. Providers carry most design and conformity obligations; deployers have their own duties, such as human oversight and monitoring.',
  },
  {
    id: 'aigp-law-12',
    domainId: 'aigp-law',
    prompt:
      "A bank buys a high-risk AI system, substantially modifies it, and markets the modified version to other banks under its own brand. How does the EU AI Act treat the bank?",
    choices: [
      'As a deployer only, since it did not build the original system',
      'As exempt, because the original provider remains fully responsible',
      'As a provider, taking on the provider\'s obligations',
      'As a distributor with no compliance obligations',
    ],
    correctIndex: 2,
    explanation:
      'Under the AI Act, a deployer or other party becomes a provider if it puts its name or trademark on a high-risk system, makes a substantial modification, or changes its intended purpose so that it becomes high-risk. It then takes on provider obligations.',
  },
  {
    id: 'aigp-law-13',
    domainId: 'aigp-law',
    prompt:
      "Which obligation applies to all providers of general-purpose AI (GPAI) models under the EU AI Act, not only those whose models pose systemic risk?",
    choices: [
      'Conducting adversarial testing of the model and reporting serious incidents to the AI Office',
      'Obtaining CE marking through a notified body',
      'Registering every downstream application in the EU database',
      'Maintaining a copyright policy and publishing a summary of training content',
    ],
    correctIndex: 3,
    explanation:
      'All GPAI providers must keep technical documentation, provide information to downstream providers, maintain a policy to comply with EU copyright law, and publish a sufficiently detailed summary of training content. Adversarial testing and incident reporting are additional duties for models with systemic risk.',
  },
  {
    id: 'aigp-law-14',
    domainId: 'aigp-law',
    prompt:
      "Under the EU AI Act, when is a general-purpose AI model presumed to have high-impact capabilities, and therefore systemic risk?",
    choices: [
      'When it has more than 10,000 registered business users across the EU',
      'When the cumulative compute used to train it exceeds 10^25 floating-point operations',
      'When it can generate text, images, audio, and video from a single prompt or conversation',
      'When its provider has worldwide annual revenue above EUR 1 billion',
    ],
    correctIndex: 1,
    explanation:
      'The Act presumes high-impact capabilities when training compute exceeds 10^25 FLOPs, and the Commission can also designate models based on other criteria. User counts, modality, and provider revenue do not trigger the presumption.',
  },
  {
    id: 'aigp-law-15',
    domainId: 'aigp-law',
    prompt:
      "A company deploys an AI system that generates realistic video of real people for an advertising campaign. Under the EU AI Act's transparency rules, what must the deployer do?",
    choices: [
      'Disclose that the content has been artificially generated or manipulated',
      'Obtain a conformity assessment from a notified body before the campaign is released',
      'Register the campaign in the EU database as a high-risk AI system',
      'Nothing, because commercial advertising is exempt from the AI Act',
    ],
    correctIndex: 0,
    explanation:
      'Article 50 requires deployers of systems that generate deepfakes to disclose that the content is artificial, with limited adjustments for evidently artistic or satirical works. Providers must also mark synthetic outputs in a machine-readable way. This is a transparency duty, not a high-risk classification.',
  },
  {
    id: 'aigp-law-16',
    domainId: 'aigp-law',
    prompt:
      "Under the EU AI Act, which deployers must carry out a fundamental rights impact assessment before using certain high-risk AI systems?",
    choices: [
      'All deployers of any AI system, regardless of its risk classification',
      'Only providers of general-purpose AI models with systemic risk',
      'Public bodies, public-service providers, and certain credit and insurance deployers',
      'Only deployers with more than 250 employees or more than EUR 50 million in annual turnover',
    ],
    correctIndex: 2,
    explanation:
      'Article 27 requires a fundamental rights impact assessment from bodies governed by public law, private entities providing public services, and deployers of high-risk systems for creditworthiness assessment or life and health insurance pricing. It is not tied to company size and does not cover all deployers.',
  },
  {
    id: 'aigp-law-17',
    domainId: 'aigp-law',
    prompt:
      "A company uses several AI tools internally but builds none of them. Which EU AI Act obligation applies to it regardless of the tools' risk level?",
    choices: [
      'Registering each tool it uses in the EU database for high-risk systems',
      'Conducting its own conformity assessment for each tool before use',
      'Publishing a summary of the training data used by each tool',
      'Taking measures to ensure sufficient AI literacy among staff who use AI',
    ],
    correctIndex: 3,
    explanation:
      'Article 4 requires both providers and deployers to take measures to ensure a sufficient level of AI literacy among staff dealing with AI systems. It applies broadly, not just to high-risk systems.',
  },
  {
    id: 'aigp-law-18',
    domainId: 'aigp-law',
    prompt:
      "What is the purpose of the AI regulatory sandboxes that EU member states must establish under the AI Act?",
    choices: [
      'To exempt participating companies from all of the AI Act\'s obligations on a permanent basis',
      'To give a controlled environment to develop and test AI under regulatory supervision',
      'To store copies of all high-risk AI systems for inspection',
      'To let regulators develop their own AI systems',
    ],
    correctIndex: 1,
    explanation:
      'Regulatory sandboxes let organizations, with priority access for SMEs and start-ups, develop and test innovative AI under supervision before market placement. Participation does not grant a permanent exemption from the rules.',
  },
  {
    id: 'aigp-law-19',
    domainId: 'aigp-law',
    prompt:
      "A lender uses a fully automated system to reject online loan applications with no human involvement. Under GDPR Article 22, which statement is correct?",
    choices: [
      'Such decisions are always prohibited, with no exceptions for contracts or consent',
      'Such decisions are allowed only if the lender is an EU-licensed bank or other credit institution',
      'Individuals may object only after the loan term would have ended, not at the time',
      'They are restricted unless an exception applies, and safeguards such as human review apply',
    ],
    correctIndex: 3,
    explanation:
      'Article 22 gives people the right not to be subject to solely automated decisions with legal or similarly significant effects, unless the decision is necessary for a contract, authorized by law, or based on explicit consent. Even then, safeguards such as the right to human intervention and to contest the decision apply.',
  },
  {
    id: 'aigp-law-20',
    domainId: 'aigp-law',
    prompt:
      "Under the GDPR, which planned AI use would most clearly require a data protection impact assessment?",
    choices: [
      'Systematic, extensive profiling that produces decisions with legal effects on people',
      'Using a spell-checker on internal documents that mention employees by name',
      'Training a forecasting model on fully anonymized historical weather data',
      'Using AI to sort the office supply inventory and automatically reorder paper and toner',
    ],
    correctIndex: 0,
    explanation:
      'Article 35 requires a DPIA for processing likely to result in high risk, explicitly including systematic and extensive evaluation of people based on automated processing, including profiling, that produces legal or similarly significant effects. The other examples involve little or no personal data risk.',
  },
  {
    id: 'aigp-law-21',
    domainId: 'aigp-law',
    prompt:
      "In its December 2024 opinion on AI models, what did the European Data Protection Board say about using legitimate interest as a legal basis for developing AI models with personal data?",
    choices: [
      'Legitimate interest can never be used for AI development; consent is always required',
      'Legitimate interest applies automatically to any AI model that serves a business purpose',
      'It may be possible, but only after passing the three-step necessity and balancing test',
      'Only explicit consent or a specific EU law can justify using personal data for AI training',
    ],
    correctIndex: 2,
    explanation:
      'The EDPB\'s Opinion 28/2024 found that legitimate interest may be a valid legal basis for developing and deploying AI models, but controllers must pass the three-step test covering a legitimate interest, necessity, and balancing against individuals\' rights. It also noted that AI models trained on personal data are not automatically anonymous.',
  },
  {
    id: 'aigp-law-22',
    domainId: 'aigp-law',
    prompt:
      "An individual subject to a solely automated decision about them makes a GDPR access request. Beyond their personal data, what information are they entitled to?",
    choices: [
      'The full source code of the model and its configuration files',
      'Meaningful information about the logic involved and the likely consequences for them',
      'The names and decision outcomes of every other person whose data was processed by the system',
      'A copy of the complete training dataset used to build the model',
    ],
    correctIndex: 1,
    explanation:
      'For automated decisions covered by Article 22, Article 15 gives a right to meaningful information about the logic involved and the significance and envisaged consequences of the processing. It does not require disclosing source code, training data, or other people\'s data.',
  },
  {
    id: 'aigp-law-23',
    domainId: 'aigp-law',
    prompt:
      "Which NIST AI Risk Management Framework function is described as cross-cutting, establishing policies, accountability structures, and a culture of risk management that informs the other three functions?",
    choices: [
      'Map',
      'Measure',
      'Manage',
      'Govern',
    ],
    correctIndex: 3,
    explanation:
      'Govern is the cross-cutting function that sets organizational policies, roles, accountability, and culture. Map establishes context and identifies risks, Measure analyzes and tracks them, and Manage prioritizes and acts on them.',
  },
  {
    id: 'aigp-law-24',
    domainId: 'aigp-law',
    prompt:
      "Having measured the risks of a new AI system, a team now decides which risks to treat first, allocates resources to mitigations, and plans how to respond to and recover from incidents. Which NIST AI RMF function is this?",
    choices: [
      'Manage',
      'Map',
      'Govern',
      'Measure',
    ],
    correctIndex: 0,
    explanation:
      'The Manage function covers prioritizing risks, allocating resources, and planning responses and recovery, based on what Map and Measure produced. Govern sets the overarching policies and accountability.',
  },
  {
    id: 'aigp-law-25',
    domainId: 'aigp-law',
    prompt:
      "Which of the following is one of the characteristics of trustworthy AI listed in the NIST AI Risk Management Framework?",
    choices: [
      'Profitable and scalable',
      'Open source and freely available',
      'Privacy-enhanced',
      'Fully autonomous',
    ],
    correctIndex: 2,
    explanation:
      'NIST lists valid and reliable; safe; secure and resilient; accountable and transparent; explainable and interpretable; privacy-enhanced; and fair with harmful bias managed. Profitability, open source status, and autonomy are not trustworthiness characteristics.',
  },
  {
    id: 'aigp-law-26',
    domainId: 'aigp-law',
    prompt:
      "An organization wants NIST guidance specifically on risks such as confabulation, harmful content, and information integrity that are unique to or worsened by generative AI. Which document should it consult?",
    choices: [
      'NIST SP 800-53 security controls',
      'The NIST Cybersecurity Framework (CSF) 2.0',
      'The NIST Privacy Framework',
      'The NIST AI 600-1 Generative AI Profile',
    ],
    correctIndex: 3,
    explanation:
      'NIST AI 600-1, a companion to the AI RMF published in 2024, identifies risks specific to generative AI and suggests actions to manage them. The other documents address security or privacy more broadly.',
  },
  {
    id: 'aigp-law-27',
    domainId: 'aigp-law',
    prompt:
      "How does ISO/IEC 23894 differ from ISO/IEC 42001?",
    choices: [
      'ISO/IEC 23894 is a certifiable management system standard, and 42001 is guidance only',
      'ISO/IEC 23894 is risk management guidance; 42001 sets certifiable management system requirements',
      'ISO/IEC 23894 applies only in the EU, while ISO/IEC 42001 applies only in the United States',
      'They are the same AI standard, published under two numbers for different industries',
    ],
    correctIndex: 1,
    explanation:
      'ISO/IEC 23894 provides guidance on managing AI risk, building on ISO 31000, while ISO/IEC 42001 sets requirements for an AI management system that organizations can be certified against. Both are international standards.',
  },
  {
    id: 'aigp-law-28',
    domainId: 'aigp-law',
    prompt:
      "Under New York City Local Law 144, what must an employer do before using an automated employment decision tool to screen candidates for jobs in the city?",
    choices: [
      'Obtain a bias audit by an independent auditor, publish a summary, and notify candidates',
      'Obtain approval from the New York State Attorney General and register the tool',
      'Stop using the tool for all candidates over age 40 to avoid any age discrimination claims',
      'Replace every output of the tool with a separate human decision in each case',
    ],
    correctIndex: 0,
    explanation:
      'Local Law 144 requires an independent bias audit within the year before use, a public summary of the results, and notice to candidates and employees. It does not require state approval or a ban on the tool.',
  },
  {
    id: 'aigp-law-29',
    domainId: 'aigp-law',
    prompt:
      "The Colorado AI Act focuses on 'high-risk artificial intelligence systems.' What central duty does it place on developers and deployers of those systems?",
    choices: [
      'To register every high-risk AI system with the Federal Trade Commission before deployment',
      'To obtain explicit written consent before any use of AI with consumers',
      'To use reasonable care to protect consumers from algorithmic discrimination',
      'To publish their model weights and training data for public inspection',
    ],
    correctIndex: 2,
    explanation:
      'The Colorado law requires developers and deployers of high-risk systems that make or substantially influence consequential decisions, such as in employment, lending, or housing, to use reasonable care to protect consumers from algorithmic discrimination. It is enforced by the state attorney general.',
  },
  {
    id: 'aigp-law-30',
    domainId: 'aigp-law',
    prompt:
      "The US Federal Trade Commission has required some companies to delete algorithms trained on data that was collected unlawfully. What is this remedy commonly called, and under what authority has the FTC acted?",
    choices: [
      'Model licensing, under its authority to enforce the federal Copyright Act',
      'Algorithmic disgorgement, under its authority over unfair or deceptive practices',
      'Data localization, under its authority from the federal Privacy Act of 1974 and related rules',
      'Mandatory open-sourcing, under its antitrust authority from the Sherman Act',
    ],
    correctIndex: 1,
    explanation:
      'The FTC has used its Section 5 authority over unfair or deceptive practices to require deletion of models and algorithms built on improperly obtained data, a remedy often called algorithmic disgorgement. It has also acted against deceptive claims about AI products.',
  },
  {
    id: 'aigp-law-31',
    domainId: 'aigp-law',
    prompt:
      "A US lender uses a complex machine learning model to deny credit. Under the Equal Credit Opportunity Act and Regulation B, what must it provide to rejected applicants?",
    choices: [
      'A copy of the model\'s source code',
      'Nothing, because complex models are exempt from explanation requirements',
      'A general statement that the decision was made by AI',
      'A statement of the specific principal reasons for the denial',
    ],
    correctIndex: 3,
    explanation:
      'Regulation B requires creditors to give specific principal reasons for adverse action, and using a complex algorithm does not exempt them. Lenders must be able to derive accurate reasons from their models.',
  },
  {
    id: 'aigp-law-32',
    domainId: 'aigp-law',
    prompt:
      "A company plans to use employees' fingerprints for AI-based timekeeping at its Illinois offices. What makes the Illinois Biometric Information Privacy Act (BIPA) especially significant for this plan?",
    choices: [
      'It requires written consent and gives individuals a private right to sue',
      'It bans all biometric technology in workplaces located anywhere in the state of Illinois',
      'It applies only to state and local government agencies in Illinois',
      'It is enforced only through voluntary industry codes of conduct',
    ],
    correctIndex: 0,
    explanation:
      'BIPA requires informed written consent and a published retention policy before collecting biometric identifiers, and it lets individuals sue for statutory damages. That private right of action has led to major litigation and settlements.',
  },
  {
    id: 'aigp-law-33',
    domainId: 'aigp-law',
    prompt:
      "What distinguishes the Council of Europe's Framework Convention on Artificial Intelligence, opened for signature in 2024?",
    choices: [
      'It is a voluntary code of conduct that AI companies may choose to sign',
      'It replaces the EU AI Act for all EU member states',
      'It is the first legally binding international treaty on AI',
      'It applies only to military uses of AI',
    ],
    correctIndex: 2,
    explanation:
      'The Framework Convention on AI and Human Rights, Democracy and the Rule of Law is the first legally binding international treaty on AI, open to countries beyond Europe. It sits alongside, rather than replacing, the EU AI Act, and national security activities are largely excluded from its scope.',
  },
  {
    id: 'aigp-law-34',
    domainId: 'aigp-law',
    prompt:
      "Which statement best describes China's approach to regulating public-facing generative AI services?",
    choices: [
      'China has no rules specific to generative AI and relies on general law',
      'China relies only on voluntary industry standards issued by trade groups',
      'China bans all public-facing generative AI services built by private companies',
      'China applies targeted rules, including algorithm filing and AI content labeling',
    ],
    correctIndex: 3,
    explanation:
      'China regulates specific AI applications through targeted measures, such as the 2023 Interim Measures for generative AI services and rules on algorithmic recommendation, deep synthesis, and labeling AI-generated content. These include algorithm filing and security assessment obligations for certain services.',
  },
  {
    id: 'aigp-law-35',
    domainId: 'aigp-law',
    prompt:
      "Singapore's Model AI Governance Framework and its AI Verify testing toolkit are best described as what kind of approach?",
    choices: [
      'A binding law with criminal penalties for non-compliant AI developers',
      'A voluntary, practical framework and testing toolkit for responsible AI',
      'A ban on the use of AI in the financial sector without approval',
      'A mandatory licensing regime for all AI developers operating in Singapore',
    ],
    correctIndex: 1,
    explanation:
      'Singapore has favored voluntary, practical guidance: the Model AI Governance Framework sets out implementable practices, and AI Verify offers a testing framework and toolkit for organizations to assess their systems. Neither is a binding licensing or penalty regime.',
  },
  {
    id: 'aigp-law-36',
    domainId: 'aigp-law',
    prompt:
      "What is the UNESCO Recommendation on the Ethics of Artificial Intelligence, adopted in 2021?",
    choices: [
      'A global, non-binding standard on AI ethics adopted by UNESCO member states',
      'A binding treaty enforced by the International Court of Justice against member states',
      'A technical standard for certifying AI systems',
      'A US federal regulation on AI in education',
    ],
    correctIndex: 0,
    explanation:
      'The UNESCO Recommendation is a global, non-binding instrument adopted by member states that sets out values, principles, and policy action areas for ethical AI. It is not a treaty, technical standard, or national regulation.',
  },
  {
    id: 'aigp-law-37',
    domainId: 'aigp-law',
    prompt:
      "Under the revised EU Product Liability Directive adopted in 2024, how is AI software treated?",
    choices: [
      'Software is excluded from product liability entirely, as it is a service',
      'Only physical hardware containing AI can be defective under the Directive',
      'Software, including AI systems, can be a product subject to strict liability for defects',
      'AI developers are fully immune from liability if they comply with every AI Act requirement',
    ],
    correctIndex: 2,
    explanation:
      'The revised Product Liability Directive explicitly includes software, including AI systems, as a product, so people harmed by defective software can seek compensation without proving fault. Complying with the AI Act does not create immunity.',
  },
  {
    id: 'aigp-law-38',
    domainId: 'aigp-law',
    prompt:
      "An AI developer trains a general-purpose model on text scraped from EU websites. Under EU copyright law and the AI Act, what must it respect?",
    choices: [
      'Nothing, because all publicly accessible web content is in the public domain',
      'Only copyright notices displayed in the page footer',
      'Only content published by EU government bodies',
      'Rights holders\' reservations (opt-outs) from text and data mining',
    ],
    correctIndex: 3,
    explanation:
      'The EU Copyright in the Digital Single Market Directive allows text and data mining unless rights holders have expressly reserved their rights, for example in machine-readable form. The AI Act requires GPAI providers to have a policy to identify and respect those reservations.',
  },
  {
    id: 'aigp-law-39',
    domainId: 'aigp-law',
    prompt:
      "A medical device maker wants its FDA-cleared AI imaging software to keep improving after authorization without filing a new submission for every update. Which FDA mechanism supports this?",
    choices: [
      'A predetermined change control plan that is authorized in advance',
      'A general exemption from review for all AI-enabled device updates',
      'A manufacturer self-certification that each update is safe',
      'An annual user fee paid in place of any premarket review',
    ],
    correctIndex: 0,
    explanation:
      'The FDA\'s predetermined change control plan approach lets manufacturers get planned modifications, along with the methods for developing and validating them, authorized in advance. Changes outside the plan still need their own review.',
  },
  {
    id: 'aigp-law-40',
    domainId: 'aigp-law',
    prompt:
      "A US employer uses a vendor's AI assessment tool that screens out a significantly higher share of Black applicants. The employer argues the vendor is responsible. Which statement is most accurate under US anti-discrimination law?",
    choices: [
      'Only the vendor can be liable, because it built the tool',
      'The employer can be liable for disparate impact from tools it chooses to use',
      'Anti-discrimination laws do not apply to automated tools',
      'Liability arises only if the tool explicitly uses race or another protected trait as an input',
    ],
    correctIndex: 1,
    explanation:
      'Employers remain responsible for selection procedures they use, including vendor tools, and disparate impact can arise without any protected attribute as an input. The four-fifths rule of thumb from the federal Uniform Guidelines is often used as an initial check for adverse impact.',
  },
]
