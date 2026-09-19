import type { Question } from '../../../lib/types'

// Domain 4: AI Law & Standards
export const lawQuestions: Question[] = [
  {
    id: 'aigp-law-1',
    domainId: 'aigp-law',
    prompt:
      "Which statement best describes how obligations scale across the EU AI Act's risk categories for AI systems that are allowed on the market?",
    choices: [
      "High-risk: extensive requirements; some limited-risk systems: transparency; minimal-risk: nothing specific",
      "Limited-risk systems carry the heaviest documentation duties, since they interact directly with people",
      "Permitted systems undergo conformity assessment, with its depth scaled to the risk category",
      "Minimal-risk systems need to register in the EU database but otherwise face no specific requirements",
    ],
    correctIndex: 0,
    explanation:
      "High-risk systems face requirements on risk management, data, documentation, oversight, and conformity assessment. Systems like chatbots and deepfake generators carry Article 50 transparency duties, and minimal-risk systems have no specific new obligations beyond general ones such as AI literacy. Conformity assessment and registration apply to high-risk systems.",
  },
  {
    id: 'aigp-law-2',
    domainId: 'aigp-law',
    prompt:
      "Before development, a team documents a system's intended purpose, context of use, affected stakeholders, and potential impacts. Under the NIST AI RMF, which function is this?",
    choices: [
      "Govern",
      "Measure",
      "Map",
      "Manage",
    ],
    correctIndex: 2,
    explanation:
      "Map establishes context: intended purposes, settings, stakeholders, and potential impacts, which frames the risks. Govern sets organizational policies and culture, Measure analyzes and tracks risks with metrics, and Manage prioritizes and acts on them.",
  },
  {
    id: 'aigp-law-3',
    domainId: 'aigp-law',
    prompt:
      "An organization wants a certifiable standard for an AI management system, structured like ISO/IEC 27001 for information security. Which standard fits?",
    choices: [
      "ISO/IEC 23894",
      "ISO/IEC 22989",
      "ISO/IEC 42001",
      "ISO 31000",
    ],
    correctIndex: 2,
    explanation:
      "ISO/IEC 42001 specifies requirements for an AI management system and can be certified against. ISO/IEC 23894 gives guidance on AI risk management, ISO/IEC 22989 defines AI concepts and terminology, and ISO 31000 is general risk management guidance; none of those is a certifiable management system standard.",
  },
  {
    id: 'aigp-law-4',
    domainId: 'aigp-law',
    prompt:
      "Which of these is one of the OECD's values-based AI Principles?",
    choices: [
      "Accountability: AI actors should be accountable for the proper functioning of AI systems",
      "Economic returns: AI should deliver measurable productivity gains for the organizations using it",
      "Openness: AI systems should be released with publicly available code and model weights",
      "Autonomy: AI systems should minimize human intervention wherever it is technically safe to do so",
    ],
    correctIndex: 0,
    explanation:
      "The OECD's values-based principles cover inclusive growth and well-being; human rights and democratic values including fairness and privacy; transparency and explainability; robustness, security, and safety; and accountability. Profitability, open-sourcing, and autonomy are not among them.",
  },
  {
    id: 'aigp-law-5',
    domainId: 'aigp-law',
    prompt:
      "A bank's loan officer 'reviews' every AI credit decision but approves over 99% within seconds without examining the file. Under the GDPR, why might these still count as solely automated decisions?",
    choices: [
      "Any decision in which AI plays a material role counts as solely automated under the GDPR",
      "Token review without real authority or consideration does not take a decision outside Article 22",
      "Credit decisions are treated as solely automated by definition, whatever review takes place",
      "The officer does not sign each decision, and a signature is what establishes human involvement",
    ],
    correctIndex: 1,
    explanation:
      "Regulatory guidance on Article 22 says human involvement must be meaningful: the reviewer needs the authority and competence to change the outcome and must actually consider the relevant information. Rubber-stamping does not qualify. AI involvement alone does not make a decision solely automated, and signatures are not the test.",
  },
  {
    id: 'aigp-law-6',
    domainId: 'aigp-law',
    prompt:
      "Which of the following is a prohibited practice under the EU AI Act, rather than a high-risk use?",
    choices: [
      "AI used by schools to evaluate students' exam performance and assign grades",
      "AI used by employers to screen and rank job applications from candidates",
      "AI used by lenders to assess the creditworthiness of individual loan applicants",
      "AI that builds facial recognition databases by untargeted scraping of online images",
    ],
    correctIndex: 3,
    explanation:
      "Untargeted scraping of facial images from the internet or CCTV to build facial recognition databases is prohibited under Article 5. Education assessment, hiring, and credit scoring are listed high-risk uses that are allowed subject to requirements.",
  },
  {
    id: 'aigp-law-7',
    domainId: 'aigp-law',
    prompt:
      "After identifying risks for a new system, a team develops metrics to benchmark error rates by subgroup and tracks them over time. Which NIST AI RMF function is this?",
    choices: [
      "Map",
      "Measure",
      "Govern",
      "Manage",
    ],
    correctIndex: 1,
    explanation:
      "Measure uses quantitative and qualitative methods to analyze, assess, benchmark, and monitor AI risks. Map establishes context, Govern sets policies and culture, and Manage prioritizes and responds to risks based on those measurements.",
  },
  {
    id: 'aigp-law-8',
    domainId: 'aigp-law',
    prompt:
      "A policymaker proposes applying the same strict requirements to every AI system regardless of use. What is the strongest argument for a risk-based approach instead?",
    choices: [
      "It lets large companies rely on their own governance programs instead of the rules",
      "It allows each company to decide which requirements apply to its own systems",
      "It matches oversight to potential harm, focusing resources where risk is greatest",
      "It removes the need for a legal definition of what counts as an AI system",
    ],
    correctIndex: 2,
    explanation:
      "Risk-based regulation scales obligations to the potential for harm, avoiding heavy burdens on low-risk uses while concentrating scrutiny where it matters. It does not exempt large companies, let companies self-select their rules, or remove the need for definitions.",
  },
  {
    id: 'aigp-law-9',
    domainId: 'aigp-law',
    prompt:
      "Under the EU AI Act, what is the maximum administrative fine for placing a prohibited AI practice on the market?",
    choices: [
      "EUR 20 million or 4% of worldwide annual turnover, whichever is higher",
      "EUR 15 million or 3% of worldwide annual turnover, whichever is higher",
      "EUR 35 million or 7% of worldwide annual turnover, whichever is higher",
      "EUR 7.5 million or 1% of worldwide annual turnover, whichever is higher",
    ],
    correctIndex: 2,
    explanation:
      "Prohibited practices carry the top tier of EUR 35 million or 7%. Most other violations are capped at EUR 15 million or 3%, and supplying incorrect information at EUR 7.5 million or 1%. The 20 million / 4% figure is the GDPR's top tier. For SMEs, the lower of the two amounts applies.",
  },
  {
    id: 'aigp-law-10',
    domainId: 'aigp-law',
    prompt:
      "A US company with no EU presence sells an AI resume-screening service to a German employer, which uses it to evaluate candidates in Germany. Does the EU AI Act apply to the US company?",
    choices: [
      "No, the Act covers providers and deployers established in the EU",
      "No, the German employer is covered as the deployer, but the vendor is not",
      "Only if the US company processes EU residents' personal data under the GDPR",
      "Yes, as a provider placing a system on the EU market, wherever it is established",
    ],
    correctIndex: 3,
    explanation:
      "The Act covers providers placing systems on the EU market regardless of where they are established, and also third-country providers and deployers whose system outputs are used in the EU. The German employer has deployer obligations too. Scope is based on market placement and use, not on GDPR processing.",
  },
  {
    id: 'aigp-law-11',
    domainId: 'aigp-law',
    prompt:
      "Under the EU AI Act, which obligation falls on a deployer of a high-risk system, rather than on its provider?",
    choices: [
      "Carrying out the conformity assessment before the system is put into service",
      "Drawing up the technical documentation that describes the system's design",
      "Assigning competent human oversight and following the instructions for use",
      "Operating the quality management system that governs the system's design",
    ],
    correctIndex: 2,
    explanation:
      "Deployers must use high-risk systems according to the instructions for use, assign human oversight to people with the necessary competence and authority, monitor operation, and keep logs under their control. Conformity assessment, technical documentation, and the quality management system are provider obligations.",
  },
  {
    id: 'aigp-law-12',
    domainId: 'aigp-law',
    prompt:
      "A bank buys a high-risk AI system and, without changing it, starts using it for a purpose the provider did not intend, which is itself a high-risk use. How does the EU AI Act treat the bank?",
    choices: [
      "As a deployer only, since it made no technical changes to the system itself",
      "As a provider, since changing the intended purpose to a high-risk use shifts duties to it",
      "As a distributor, since it resells the system's outputs without developing the system",
      "As exempt, since the original provider remains responsible for how its system is used",
    ],
    correctIndex: 1,
    explanation:
      "Under Article 25, a party becomes a provider if it puts its name on a high-risk system, makes a substantial modification, or changes the intended purpose in a way that makes the system high-risk. Technical changes are not required for the last route.",
  },
  {
    id: 'aigp-law-13',
    domainId: 'aigp-law',
    prompt:
      "A provider releases a general-purpose AI model under a free and open-source license, and the model does not pose systemic risk. Which EU AI Act obligation still applies?",
    choices: [
      "Maintaining a copyright policy and publishing a training-content summary",
      "Conducting adversarial testing and reporting serious incidents to the AI Office",
      "Obtaining CE marking through a notified body before the model is released",
      "None, since free and open-source GPAI models are exempt from the Act's GPAI rules",
    ],
    correctIndex: 0,
    explanation:
      "Open-source GPAI models without systemic risk are exempt from some documentation duties, but providers must still maintain a copyright compliance policy and publish a training-content summary. Adversarial testing and incident reporting apply to systemic-risk models, and CE marking concerns high-risk systems.",
  },
  {
    id: 'aigp-law-14',
    domainId: 'aigp-law',
    prompt:
      "Under the EU AI Act, when is a general-purpose AI model presumed to have high-impact capabilities, and so systemic risk?",
    choices: [
      "When more than 10,000 registered business users in the EU access the model",
      "When the model can generate text, images, and audio from a single prompt",
      "When the provider's worldwide annual turnover exceeds EUR 1 billion",
      "When cumulative training compute exceeds 10^25 floating-point operations",
    ],
    correctIndex: 3,
    explanation:
      "The Act presumes high-impact capabilities above 10^25 FLOPs of training compute, and the Commission can also designate models based on other criteria, such as reach, which is where user numbers matter. User counts alone do not trigger the presumption, and modality and turnover are not criteria.",
  },
  {
    id: 'aigp-law-15',
    domainId: 'aigp-law',
    prompt:
      "A company uses an AI system to generate a realistic video of a real politician for a satirical show that is clearly presented as satire. What does the EU AI Act require of the deployer?",
    choices: [
      "Nothing, since evidently satirical content is exempt from the deepfake disclosure rules",
      "A conformity assessment, since deepfakes of public figures are classed as high-risk",
      "Disclosure that the content is generated, in a way that does not hamper the work",
      "Written consent from the politician, which the Act requires for deepfakes of real people",
    ],
    correctIndex: 2,
    explanation:
      "Deployers must disclose deepfakes. For evidently artistic, creative, satirical, or fictional works, the duty is limited to disclosing the existence of generated content in a way that does not hamper the work, rather than removed entirely. Deepfakes are not high-risk by default, and the Act does not impose a consent requirement.",
  },
  {
    id: 'aigp-law-16',
    domainId: 'aigp-law',
    prompt:
      "Under the EU AI Act, which deployer must carry out a fundamental rights impact assessment before using a high-risk system?",
    choices: [
      "A private bank using AI to evaluate the creditworthiness of individuals",
      "A private retailer using a high-risk AI system to allocate shifts to warehouse staff",
      "Any company with more than 250 employees that deploys a high-risk AI system",
      "A provider of a general-purpose AI model that has been classified as systemic-risk",
    ],
    correctIndex: 0,
    explanation:
      "Article 27 applies to public bodies, private entities providing public services, and deployers of high-risk systems for creditworthiness evaluation or life and health insurance pricing. Company size is not the trigger, a staff-scheduling tool is not in these categories, and GPAI providers are not deployers.",
  },
  {
    id: 'aigp-law-17',
    domainId: 'aigp-law',
    prompt:
      "Which EU AI Act obligation applied from February 2025, the same date as the prohibitions, to both providers and deployers regardless of system risk?",
    choices: [
      "Registering high-risk systems in the EU database before they are placed on the market",
      "Taking measures to ensure a sufficient level of AI literacy among staff",
      "Carrying out fundamental rights impact assessments before deploying AI systems",
      "Setting up post-market monitoring for every AI system placed on the market",
    ],
    correctIndex: 1,
    explanation:
      "Article 4's AI literacy duty and the Article 5 prohibitions applied from 2 February 2025, and the literacy duty covers providers and deployers generally. Registration, fundamental rights impact assessments, and post-market monitoring are tied to high-risk systems and apply later.",
  },
  {
    id: 'aigp-law-18',
    domainId: 'aigp-law',
    prompt:
      "A start-up tests an innovative AI system in an EU AI regulatory sandbox. Which statement is accurate?",
    choices: [
      "Participation exempts the system from high-risk requirements once it leaves the sandbox",
      "Participation shifts liability for harm to third parties onto the supervising authority",
      "It permits supervised development and testing; the start-up remains liable for harm to others",
      "Sandboxes are available only to providers of general-purpose AI models with systemic risk",
    ],
    correctIndex: 2,
    explanation:
      "Sandboxes provide a controlled environment for development and testing under regulatory supervision, with priority access for SMEs and start-ups. Participants remain liable under applicable liability law for damage to third parties, though good-faith compliance with the sandbox plan can limit administrative fines. There is no permanent exemption.",
  },
  {
    id: 'aigp-law-19',
    domainId: 'aigp-law',
    prompt:
      "A lender relies on explicit consent to make fully automated loan decisions under GDPR Article 22. Which safeguard must it still provide?",
    choices: [
      "The rights to human intervention, to express a view, and to contest the decision",
      "A guarantee that the model processes no special-category data about the applicant",
      "Annual registration of the decision-making model with the supervisory authority",
      "Disclosure of the model's source code to applicants who request it",
    ],
    correctIndex: 0,
    explanation:
      "When solely automated decisions rely on contract necessity or explicit consent, the controller must still provide at least human intervention, the right to express a view, and the right to contest. The other options are not Article 22 requirements; special-category data has its own additional restrictions.",
  },
  {
    id: 'aigp-law-20',
    domainId: 'aigp-law',
    prompt:
      "A DPIA for an AI profiling system finds high residual risk that the controller cannot mitigate. What does the GDPR require next?",
    choices: [
      "Proceed, since documenting the residual risk in the DPIA meets the accountability duty",
      "Notify each affected individual of the residual risk before processing begins",
      "Obtain certification from an accredited body confirming the risk is acceptable",
      "Consult the supervisory authority before starting the processing",
    ],
    correctIndex: 3,
    explanation:
      "Under Article 36, when a DPIA shows high risk that cannot be mitigated, the controller must consult the supervisory authority before processing. Documentation alone is not enough, and neither individual notification nor certification replaces prior consultation.",
  },
  {
    id: 'aigp-law-21',
    domainId: 'aigp-law',
    prompt:
      "According to the European Data Protection Board's 2024 opinion on AI models, which statement is accurate?",
    choices: [
      "Models trained on personal data are anonymous by default, so the GDPR stops applying",
      "Legitimate interest is excluded as a basis for training AI models on personal data",
      "Legitimate interest may work, subject to the three-step necessity and balancing test",
      "Explicit consent is the sole lawful basis for training AI models on personal data",
    ],
    correctIndex: 2,
    explanation:
      "The EDPB's Opinion 28/2024 said legitimate interest may be relied on for AI model development if the three-step test is met, and that models trained on personal data are not automatically anonymous; anonymity must be assessed case by case.",
  },
  {
    id: 'aigp-law-22',
    domainId: 'aigp-law',
    prompt:
      "An individual subject to a solely automated decision makes a GDPR access request. What are they entitled to beyond their personal data?",
    choices: [
      "The model's full source code and weights, so the individual can verify the decision",
      "Meaningful information about the logic involved and the likely consequences",
      "The personal data of other individuals processed by the same decision system",
      "A complete copy of the training dataset used to build the decision system",
    ],
    correctIndex: 1,
    explanation:
      "Articles 13 to 15 require meaningful information about the logic involved in Article 22 decisions and their significance and envisaged consequences. This does not extend to source code, others' data, or full training datasets, and trade secrets are weighed against the right.",
  },
  {
    id: 'aigp-law-23',
    domainId: 'aigp-law',
    prompt:
      "Which NIST AI RMF function covers establishing policies, accountability structures, workforce diversity, and processes for managing third-party AI risk, and is described as cross-cutting?",
    choices: [
      "Govern",
      "Map",
      "Measure",
      "Manage",
    ],
    correctIndex: 0,
    explanation:
      "Govern is the cross-cutting function that establishes culture, policies, roles, and processes, including for third-party risk, and informs the other three. Map sets context, Measure assesses risks, and Manage acts on them.",
  },
  {
    id: 'aigp-law-24',
    domainId: 'aigp-law',
    prompt:
      "A team has measured risks and now decides which to treat first, allocates resources, plans responses to incidents, and monitors deployed systems. Which NIST AI RMF function is this?",
    choices: [
      "Map",
      "Govern",
      "Measure",
      "Manage",
    ],
    correctIndex: 3,
    explanation:
      "Manage allocates resources to mapped and measured risks, plans and executes responses, and includes post-deployment monitoring and incident communication. Govern sets overarching policy, and Map and Measure come before prioritization.",
  },
  {
    id: 'aigp-law-25',
    domainId: 'aigp-law',
    prompt:
      "In the NIST AI RMF, which trustworthiness characteristic is described as a necessary condition for the others, and which one as spanning all of them?",
    choices: [
      "Safe is the foundation; explainable and interpretable spans the others",
      "Valid and reliable is the foundation; accountable and transparent spans the others",
      "Fair with harmful bias managed is the foundation; privacy-enhanced spans the others",
      "Secure and resilient is the foundation; safe relates to each of the others",
    ],
    correctIndex: 1,
    explanation:
      "NIST depicts valid and reliable as a necessary base for trustworthiness and accountable and transparent as relating to all the other characteristics. The remaining characteristics are safe; secure and resilient; explainable and interpretable; privacy-enhanced; and fair with harmful bias managed.",
  },
  {
    id: 'aigp-law-26',
    domainId: 'aigp-law',
    prompt:
      "An organization wants NIST guidance on risks such as confabulation, information integrity, and harmful content that are specific to or heightened by generative AI. Which document fits?",
    choices: [
      "NIST SP 800-53",
      "The NIST Privacy Framework",
      "NIST AI 600-1, the Generative AI Profile",
      "The NIST Cybersecurity Framework 2.0",
    ],
    correctIndex: 2,
    explanation:
      "NIST AI 600-1, published in 2024 as a profile of the AI RMF, identifies risks unique to or worsened by generative AI and suggests actions. SP 800-53 is a security control catalog, and the Privacy and Cybersecurity Frameworks address broader domains.",
  },
  {
    id: 'aigp-law-27',
    domainId: 'aigp-law',
    prompt:
      "An organization certified to ISO/IEC 42001 is asked which document it would use for more detailed guidance on identifying and treating AI-specific risks. Which is the best answer?",
    choices: [
      "ISO/IEC 27001",
      "ISO/IEC 22989",
      "ISO 9001",
      "ISO/IEC 23894",
    ],
    correctIndex: 3,
    explanation:
      "ISO/IEC 23894 provides guidance on AI risk management, building on ISO 31000, and complements 42001's management system requirements. ISO/IEC 27001 covers information security, ISO/IEC 22989 covers AI terminology, and ISO 9001 covers quality management.",
  },
  {
    id: 'aigp-law-28',
    domainId: 'aigp-law',
    prompt:
      "Under New York City Local Law 144, what must an employer do before using an automated employment decision tool for candidates in the city?",
    choices: [
      "An independent bias audit within the past year, a published summary, and candidate notice",
      "Approval of the tool by the city's Commission on Human Rights before its first use",
      "Evidence that the tool's selection rates are equal across the demographic categories audited",
      "A human decision replacing the tool's output for candidates who are screened out",
    ],
    correctIndex: 0,
    explanation:
      "The law requires an independent bias audit no more than a year before use, a public summary including impact ratios, and notice to candidates. It does not require agency approval, identical selection rates, or human replacement of outputs.",
  },
  {
    id: 'aigp-law-29',
    domainId: 'aigp-law',
    prompt:
      "Under the Colorado AI Act, how can a deployer of a high-risk AI system benefit from following a recognized framework such as the NIST AI RMF or ISO/IEC 42001?",
    choices: [
      "It exempts the deployer from the law's consumer notice and explanation requirements",
      "It lets the deployer skip impact assessments, since the framework covers the same ground",
      "It transfers liability for algorithmic discrimination from the deployer to the developer",
      "It supports a rebuttable presumption of reasonable care and an affirmative defense",
    ],
    correctIndex: 3,
    explanation:
      "The Colorado law provides a rebuttable presumption of reasonable care for deployers who meet its requirements, and an affirmative defense for those who discover and cure violations while complying with a recognized framework such as the NIST AI RMF or ISO/IEC 42001. Frameworks do not remove notice or impact assessment duties or shift liability.",
  },
  {
    id: 'aigp-law-30',
    domainId: 'aigp-law',
    prompt:
      "The US FTC has ordered companies to delete models and algorithms built with improperly obtained data. What is this remedy commonly called, and what is its legal basis?",
    choices: [
      "Model licensing, under federal copyright law protecting the affected data",
      "Algorithmic disgorgement, under its authority over unfair or deceptive practices",
      "Data localization, under the Privacy Act of 1974 governing personal records",
      "Mandatory open-sourcing, under the Sherman Act's rules on anticompetitive conduct",
    ],
    correctIndex: 1,
    explanation:
      "The FTC has used Section 5 of the FTC Act to require deletion of algorithms trained on unlawfully obtained data, often called algorithmic disgorgement. In the Rite Aid case it also barred the company from using facial recognition for five years.",
  },
  {
    id: 'aigp-law-31',
    domainId: 'aigp-law',
    prompt:
      "A US lender uses a complex model and sends denied applicants a checklist-style notice listing generic reasons such as 'insufficient credit history,' though the model mainly relied on other factors. What is the problem under ECOA and Regulation B?",
    choices: [
      "None, since standard checklist reasons from the sample forms are acceptable in all cases",
      "Complex machine learning models are exempt from specific adverse action reasons",
      "The lender should provide the model's source code or feature weights instead",
      "The reasons must reflect the principal factors the model actually used",
    ],
    correctIndex: 3,
    explanation:
      "Adverse action notices must state the specific principal reasons for the decision. Using generic reasons that do not reflect what the model actually relied on does not comply, and model complexity is not an exemption. Source code is not required.",
  },
  {
    id: 'aigp-law-32',
    domainId: 'aigp-law',
    prompt:
      "What makes the Illinois Biometric Information Privacy Act especially significant for companies using facial recognition or fingerprint systems?",
    choices: [
      "It bans biometric technology in Illinois workplaces unless employees opt in",
      "It requires written consent and gives individuals a private right of action",
      "It applies only to state agencies and their contractors that collect biometrics",
      "It is enforced by the Illinois attorney general, with no individual lawsuits",
    ],
    correctIndex: 1,
    explanation:
      "BIPA requires notice, informed written consent, and a public retention policy before collecting biometric identifiers, and lets individuals sue for statutory damages, which has produced large settlements. It regulates rather than bans biometrics and applies to private entities.",
  },
  {
    id: 'aigp-law-33',
    domainId: 'aigp-law',
    prompt:
      "Which statement about the Council of Europe's Framework Convention on Artificial Intelligence is accurate?",
    choices: [
      "It is a voluntary code of conduct that AI developers can choose to sign",
      "It is the first binding international AI treaty, open to non-European states",
      "It replaces the EU AI Act for EU member states that ratify the convention",
      "It applies mainly to military and national security uses of AI systems",
    ],
    correctIndex: 1,
    explanation:
      "The Framework Convention on AI and Human Rights, Democracy and the Rule of Law, opened for signature in 2024, is the first binding international AI treaty and can be joined by non-member states. It complements the EU AI Act, and national security and defense are largely outside its scope.",
  },
  {
    id: 'aigp-law-34',
    domainId: 'aigp-law',
    prompt:
      "Which description best fits China's approach to regulating AI?",
    choices: [
      "A single comprehensive AI law modeled closely on the EU AI Act's risk tiers and conformity rules",
      "Voluntary industry guidelines, with no binding rules specific to AI services",
      "Targeted rules for specific technologies, such as recommendation algorithms and generative AI",
      "A ban on public-facing generative AI services offered by private companies",
    ],
    correctIndex: 2,
    explanation:
      "China has regulated AI through a series of targeted measures, including rules on recommendation algorithms, deep synthesis, generative AI services, and labeling of AI-generated content, with obligations such as algorithm filing for certain services. It has no single EU-style law, and generative AI services are permitted under these rules.",
  },
  {
    id: 'aigp-law-35',
    domainId: 'aigp-law',
    prompt:
      "Singapore's Model AI Governance Framework and AI Verify toolkit are best described as what?",
    choices: [
      "A binding law with criminal penalties for AI developers that fail to comply",
      "A mandatory licensing regime for AI systems deployed in Singapore",
      "A voluntary framework and toolkit for demonstrating responsible AI",
      "A ban on AI in financial services without prior approval from the regulator",
    ],
    correctIndex: 2,
    explanation:
      "Singapore has favored voluntary, practical tools: the Model AI Governance Framework sets out implementable practices, and AI Verify offers a testing framework and toolkit. Neither is a licensing or penalty regime.",
  },
  {
    id: 'aigp-law-36',
    domainId: 'aigp-law',
    prompt:
      "Which statement about the UNESCO Recommendation on the Ethics of Artificial Intelligence is accurate?",
    choices: [
      "A non-binding global standard adopted by UNESCO member states in 2021",
      "A binding treaty enforced by the International Court of Justice against states",
      "A technical standard that certification bodies use to certify AI systems",
      "A framework that applies to AI used in education, science, and culture only",
    ],
    correctIndex: 0,
    explanation:
      "The UNESCO Recommendation is a global, non-binding instrument setting out values, principles, and policy areas for ethical AI. Despite UNESCO's education mandate, it covers AI broadly, and it is neither a treaty nor a certification standard.",
  },
  {
    id: 'aigp-law-37',
    domainId: 'aigp-law',
    prompt:
      "The EU revised its Product Liability Directive in 2024. How does it treat AI software?",
    choices: [
      "Software is excluded, so physical products containing AI remain the focus of liability",
      "AI providers are immune from claims if they comply with the AI Act's requirements",
      "Open-source AI software is covered, while commercial software falls under contract law",
      "Software, including AI, is a product, so defects can lead to no-fault liability",
    ],
    correctIndex: 3,
    explanation:
      "The revised directive explicitly treats software, including AI systems, as a product, so people harmed by defects can claim compensation without proving fault. AI Act compliance does not give immunity, and free open-source software developed outside commercial activity is generally excluded rather than singled out.",
  },
  {
    id: 'aigp-law-38',
    domainId: 'aigp-law',
    prompt:
      "A GPAI provider trains on text scraped from EU websites. Under EU copyright law and the AI Act, what must its copyright policy address?",
    choices: [
      "Identifying and respecting rights holders' opt-outs from text and data mining",
      "Obtaining an individual license for each web page included in the training data",
      "Nothing, since text and data mining for AI training is permitted under research exceptions",
      "Removing any content that was published before the AI Act entered into force",
    ],
    correctIndex: 0,
    explanation:
      "The Digital Single Market Directive permits text and data mining unless rights holders expressly reserve their rights, such as through machine-readable opt-outs, and the AI Act requires GPAI providers to identify and respect those reservations. Individual licenses are not required for all content.",
  },
  {
    id: 'aigp-law-39',
    domainId: 'aigp-law',
    prompt:
      "A maker of FDA-authorized AI imaging software wants to retrain it periodically without a new submission each time. Which FDA mechanism supports this?",
    choices: [
      "A general exemption from premarket review for AI-enabled device updates",
      "A predetermined change control plan authorized in advance",
      "A self-certification filed with the FDA after each model update",
      "An annual user fee paid in place of premarket review for updates",
    ],
    correctIndex: 1,
    explanation:
      "A predetermined change control plan describes planned modifications and how they will be developed and validated, and is authorized with the device. Changes outside the plan still need their own submission. There is no general exemption or fee-based alternative.",
  },
  {
    id: 'aigp-law-40',
    domainId: 'aigp-law',
    prompt:
      "A US employer's vendor assessment tool selects Black applicants at a rate well below 80% of the rate for white applicants. The employer says the vendor is responsible. Which statement is most accurate?",
    choices: [
      "Only the vendor can be liable, since it designed and validated the tool",
      "There is no disparate impact issue unless the tool uses race as an input",
      "The four-fifths rule establishes unlawful discrimination, ending the analysis",
      "The employer can be liable for disparate impact from a tool it uses",
    ],
    correctIndex: 3,
    explanation:
      "Employers remain responsible under Title VII for selection procedures they use, including vendor tools, and disparate impact does not require race as an input. The four-fifths rule from the Uniform Guidelines is a rule of thumb that signals possible adverse impact; it prompts further analysis rather than proving a violation.",
  },
]
