import type { Question } from '../../../lib/types'

// Domain 2: AI Risks & Impacts to People/Rights
export const risksQuestions: Question[] = [
  {
    id: 'aigp-risks-1',
    domainId: 'aigp-risks',
    prompt:
      "A resume screener never sees gender or race, yet it scores graduates of women's colleges and historically Black colleges lower than similar candidates. The vendor says removing the college field will fix the problem. Why is that likely insufficient?",
    choices: [
      "Other features, such as activities, clubs, or zip code, may carry the same signal as the college",
      "Dropping the field would turn a disparate impact problem into a disparate treatment problem",
      "The disparity comes from where the score cutoff is set, so input features are not the cause",
      "College attended is itself a protected attribute, so removing it needs regulatory sign-off",
    ],
    correctIndex: 0,
    explanation:
      "Proxy discrimination arises when correlated features encode protected characteristics. Dropping one proxy often leaves others that recreate the pattern, so outcomes must be tested after the change. Removing a field does not create disparate treatment, thresholds alone do not explain feature-driven scoring, and colleges are not protected attributes.",
  },
  {
    id: 'aigp-risks-2',
    domainId: 'aigp-risks',
    prompt:
      "Under the EU AI Act, which of these systems is most likely to be classified as high-risk?",
    choices: [
      "A bank's AI system that flags potentially fraudulent card transactions for review",
      "A retailer's chatbot that answers customer questions about its returns policy",
      "An AI system that evaluates individual loan applicants' creditworthiness",
      "A recommender that suggests insurance add-ons based on a customer's browsing history",
    ],
    correctIndex: 2,
    explanation:
      "Creditworthiness assessment of natural persons is listed in Annex III as high-risk. The Act specifically carves out AI used to detect financial fraud from that category. A customer-service chatbot mainly carries transparency duties, and ordinary product recommenders are generally not high-risk.",
  },
  {
    id: 'aigp-risks-3',
    domainId: 'aigp-risks',
    prompt:
      "An image search for 'nurse' returns almost only women, and a search for 'engineer' almost only men. No decisions about individuals are made. Which harm is most clearly present?",
    choices: [
      "Allocative harm, since ranking decides which images, and so which people, receive visibility",
      "Quality-of-service harm, since the tool returns less relevant results for some users' queries",
      "Representational harm, since it reinforces stereotypes about who does these jobs",
      "No harm under most frameworks, since no individual is denied a resource or opportunity",
    ],
    correctIndex: 2,
    explanation:
      "Representational harm concerns how groups are portrayed, such as reinforcing occupational stereotypes, even without decisions about individuals. Allocative harm involves withholding resources or opportunities, quality-of-service harm involves unequal performance for users, and the absence of an individual decision does not mean there is no harm.",
  },
  {
    id: 'aigp-risks-4',
    domainId: 'aigp-risks',
    prompt:
      "A predictive policing tool trained on past arrests sends more patrols to certain neighborhoods. More patrols lead to more recorded arrests there, which feed the next training cycle. What is the most accurate description?",
    choices: [
      "Concept drift, since the relationship between neighborhood features and crime shifts over time",
      "A feedback loop, in which the tool's outputs shape its future data and amplify historical bias",
      "Automation bias, since officers follow the tool's patrol recommendations without questioning them",
      "Overfitting, since the model has memorized the arrest history of a handful of specific areas",
    ],
    correctIndex: 1,
    explanation:
      "The model's outputs shape the data it later learns from, so over-policing produces more records, which justify more policing. This runaway feedback loop can amplify historical bias regardless of true crime rates. Drift, automation bias, and overfitting do not capture this self-reinforcing cycle.",
  },
  {
    id: 'aigp-risks-5',
    domainId: 'aigp-risks',
    prompt:
      "A company deploys a customer-service chatbot. Under the EU AI Act, what is the core obligation for this kind of system, assuming it is not used for any high-risk purpose?",
    choices: [
      "Make sure people are informed they are interacting with AI, unless it is obvious from the context",
      "Complete a conformity assessment and register the chatbot in the EU database before it goes live to customers",
      "Obtain each user's explicit consent to AI processing before the conversation can begin",
      "Offer a human agent as an alternative at the start of every customer conversation",
    ],
    correctIndex: 0,
    explanation:
      "Systems that interact directly with people carry a transparency duty under Article 50: people must be informed they are dealing with AI unless it is obvious from context. Conformity assessment and registration apply to high-risk systems, and the Act does not require consent or a human alternative for every chat.",
  },
  {
    id: 'aigp-risks-6',
    domainId: 'aigp-risks',
    prompt:
      "An airline's pricing algorithm raises fares for users whose behavior suggests an urgent family emergency. The group is not defined by any protected characteristic. Why is this still an ethical concern?",
    choices: [
      "It becomes a concern only if the targeted group correlates with a protected characteristic",
      "Dynamic pricing based on behavioral data is unlawful in most jurisdictions regardless of target",
      "The algorithm is overfitting to a small subgroup of travelers with unusual booking patterns",
      "It exploits people's vulnerability at a moment of distress, which is unfair even if lawful",
    ],
    correctIndex: 3,
    explanation:
      "Targeting people because they are in distress raises fairness and manipulation concerns even without a protected characteristic; exploiting vulnerabilities is a recognized AI ethics issue. Protected-class correlation would add legal exposure but is not required for the concern, dynamic pricing is not generally unlawful, and nothing suggests overfitting.",
  },
  {
    id: 'aigp-risks-7',
    domainId: 'aigp-risks',
    prompt:
      "Lender A's model excludes race but approves minority applicants at much lower rates after controlling for creditworthiness. Lender B's model explicitly assigns a penalty to applicants from one racial group. How are these best classified under US anti-discrimination concepts?",
    choices: [
      "Both are disparate treatment, because both produce racially unequal outcomes",
      "Both are disparate impact, because neither lender intended to discriminate",
      "A reflects disparate impact; B reflects disparate treatment",
      "A reflects disparate treatment; B reflects disparate impact",
    ],
    correctIndex: 2,
    explanation:
      "Disparate treatment involves explicitly treating people differently because of a protected characteristic, as Lender B does. Disparate impact involves facially neutral practices that disproportionately harm a protected group without adequate justification, as with Lender A. Intent is not required for disparate impact, and explicit classification is treatment, not impact.",
  },
  {
    id: 'aigp-risks-8',
    domainId: 'aigp-risks',
    prompt:
      "A moderation model removes posts written in a dialect associated with an ethnic minority far more often than equivalent posts in the dominant dialect. Which remedy addresses the root cause most directly?",
    choices: [
      "Lower the removal threshold for all posts so that fewer posts in any dialect are flagged",
      "Disclose to users that moderation is automated so they can appeal removals they disagree with",
      "Exempt posts in that dialect from automated moderation and review them by hand instead",
      "Improve training data and labeling so the dialect is represented and judged accurately",
    ],
    correctIndex: 3,
    explanation:
      "The disparity likely comes from under-representation or biased labeling of the dialect in training data, so the fix is better data and annotation followed by subgroup testing. A global threshold change affects everyone without fixing the gap, a disclaimer does not reduce harm, and excluding the dialect from moderation creates a different unequal treatment.",
  },
  {
    id: 'aigp-risks-9',
    domainId: 'aigp-risks',
    prompt:
      "Radiologists using an AI triage tool start accepting its 'normal' readings with little review and miss abnormalities it overlooked. Which intervention best targets the underlying behavior?",
    choices: [
      "Retrain the model to improve accuracy on abnormal scans, since fewer misses means less harm",
      "Withdraw the tool, since any AI assistance in diagnosis creates this kind of over-reliance",
      "Display a warning on each reading that the AI's output may be incorrect and needs review",
      "Design workflows that require independent review, and audit how often reviewers override",
    ],
    correctIndex: 3,
    explanation:
      "This is automation bias: people over-trust automated outputs. Countering it requires workflow and interface design that prompts real review, plus monitoring whether reviewers ever disagree. Better accuracy helps but does not change the behavior, removing the tool gives up its benefits, and disclaimers alone rarely change behavior.",
  },
  {
    id: 'aigp-risks-10',
    domainId: 'aigp-risks',
    prompt:
      "An app lets anyone upload a photo of a real person and generate sexualized images of them. The developer argues it is only a 'tool' and users are responsible. Which risk-management view is most defensible?",
    choices: [
      "The developer bears little responsibility if its terms of service clearly prohibit this misuse",
      "The harm is foreseeable, so the developer should design safeguards against this use",
      "The issue is mainly one of copyright in the uploaded photos rather than harm to the person",
      "The risk is acceptable if every generated image carries a visible AI-generated label",
    ],
    correctIndex: 1,
    explanation:
      "When misuse is foreseeable and severe, responsible AI practice and a growing number of laws expect developers to build in safeguards, not rely on terms of service. The central harm is to the depicted person's privacy, dignity, and safety rather than to copyright, and labeling does not undo non-consensual intimate imagery.",
  },
  {
    id: 'aigp-risks-11',
    domainId: 'aigp-risks',
    prompt:
      "A retailer's model infers from purchases that certain customers are likely pregnant and targets them with baby-product ads. It collected no health data directly. Why do many privacy frameworks still treat this as a sensitive-data issue?",
    choices: [
      "Inferences about health can themselves be sensitive personal data, even when derived from purchases",
      "Purchase histories are classified as health data in most jurisdictions once linked to a person",
      "Targeted advertising of health-related products is prohibited under most privacy frameworks",
      "The inferences were inaccurate for many customers, which turns them into sensitive data",
    ],
    correctIndex: 0,
    explanation:
      "Inferred characteristics, especially health status, can be personal and sensitive data even when derived from ordinary information; several regulators and courts have treated inferences this way. Purchase data is not universally health data, targeted ads are not generally banned, and the concern arises precisely when inferences are accurate.",
  },
  {
    id: 'aigp-risks-12',
    domainId: 'aigp-risks',
    prompt:
      "A city installs facial recognition in public squares. It has a very low error rate and no wrongful arrests, but attendance at protests drops. Which harm does this best illustrate?",
    choices: [
      "An allocative harm, since some residents effectively lose access to shared public spaces and services",
      "A quality-of-service harm, since recognition accuracy differs across residents' faces",
      "A chilling effect on free expression and assembly, which is a societal harm even without errors",
      "No harm in legal terms, since the system is accurate and has caused no wrongful arrests",
    ],
    correctIndex: 2,
    explanation:
      "Pervasive surveillance can deter lawful activity such as protest, harming rights and democratic participation even when the system is accurate. That makes it a societal harm independent of error rates. Nothing indicates denial of access or unequal performance.",
  },
  {
    id: 'aigp-risks-13',
    domainId: 'aigp-risks',
    prompt:
      "A board asks the governance team to include environmental impact in its AI risk assessment. Which factor is most relevant?",
    choices: [
      "Whether the model can run on hardware in data centers powered by renewable energy",
      "The energy and cooling-water use of training large models and serving them at high volume",
      "Whether the vendor holds an environmental management certification such as ISO 14001",
      "The carbon cost of storing model documentation and training datasets over their lifetime",
    ],
    correctIndex: 1,
    explanation:
      "Training large models and serving them at scale consume significant electricity and cooling water, which is the main environmental footprint of AI. Renewable power and vendor certifications can reduce or signal impact but are not the impact itself, and documentation storage is negligible.",
  },
  {
    id: 'aigp-risks-14',
    domainId: 'aigp-risks',
    prompt:
      "An insurer automates routine claims. Years later, few staff can assess complex claims or check the AI's work, because junior roles that built that expertise disappeared. Which risk was underestimated?",
    choices: [
      "Deskilling, which weakens the organization's ability to oversee and back up the AI",
      "Data drift, which eroded the model's accuracy on complex claims as claim types changed",
      "Automation bias, which led reviewers to accept the AI's outputs without real scrutiny",
      "Allocative harm, which left some policyholders with unfair claim decisions over time",
    ],
    correctIndex: 0,
    explanation:
      "Automation can remove the work through which people build expertise, leaving too few skilled staff to oversee the system or take over if it fails. Automation bias concerns over-trust by existing reviewers, not loss of skills, and the scenario does not describe drift or unfair decisions.",
  },
  {
    id: 'aigp-risks-15',
    domainId: 'aigp-risks',
    prompt:
      "Days before an election, AI-generated audio clips impersonating a candidate spread online, telling voters the election date has changed. Which measure most directly addresses this type of risk at the system level?",
    choices: [
      "Requiring candidates to register copyright in their voices so platforms can remove clones",
      "Capping the compute available to voice-generation models to slow the production of clones",
      "Banning AI-generated political content outright during election periods in all jurisdictions",
      "Provenance marking and labeling of synthetic media, combined with detection by the platforms",
    ],
    correctIndex: 3,
    explanation:
      "Watermarking, provenance standards, and labeling help people and platforms identify synthetic media, and several laws now require labeling of AI-generated content. Copyright does not protect a voice in most places, energy limits are unrelated, and blanket bans raise free-expression problems and are not the general approach.",
  },
  {
    id: 'aigp-risks-16',
    domainId: 'aigp-risks',
    prompt:
      "A company trains an image generator on scraped artwork. The model can reproduce recognizable versions of specific artists' works. Which risk does this most directly create for the company?",
    choices: [
      "Privacy risk, since artists' names in training captions make the dataset personal data",
      "Intellectual property infringement claims, since outputs closely resemble protected works",
      "Concept drift, since artistic styles in the training data change over time",
      "Reputational risk only, since training on public images is lawful in most jurisdictions",
    ],
    correctIndex: 1,
    explanation:
      "Training on copyrighted works and producing outputs that closely resemble them creates intellectual property exposure, and many such lawsuits are ongoing. Names in captions could raise minor privacy questions but are not the main risk, style drift is unrelated, and the legality of training on copyrighted works is contested and litigated rather than settled, so the risk is not only reputational.",
  },
  {
    id: 'aigp-risks-17',
    domainId: 'aigp-risks',
    prompt:
      "Researchers get a customer-service chatbot to output real customers' phone numbers that appeared in its fine-tuning data. Which mitigation addresses the cause most directly?",
    choices: [
      "Raise the model's temperature so memorized sequences are less likely to be reproduced",
      "Remove or de-identify customers' personal data before it is used for fine-tuning",
      "Add a disclaimer that responses may contain inaccurate or outdated information",
      "Rate-limit users so that no one can send enough queries to extract training data",
    ],
    correctIndex: 1,
    explanation:
      "Models can memorize and regurgitate training data, so the most direct fix is not training on unnecessary personal data. Output filters help as an extra layer. Higher temperature does not reliably prevent memorized output, a disclaimer does not stop the leak, and rate limits only slow extraction rather than removing the data.",
  },
  {
    id: 'aigp-risks-18',
    domainId: 'aigp-risks',
    prompt:
      "A face-analysis system performs acceptably for women overall and for darker-skinned people overall, but its error rate for darker-skinned women is several times higher. What does this show about fairness testing?",
    choices: [
      "Testing one attribute at a time can hide severe disparities where attributes intersect",
      "Overall metrics are sufficient if each group meets the accuracy threshold separately",
      "Intersectional results are unreliable, since those subgroups are too small to measure",
      "Error rates matter mainly for groups protected by anti-discrimination law, not subgroups",
    ],
    correctIndex: 0,
    explanation:
      "Disparities can concentrate where attributes intersect, as the Gender Shades research demonstrated, so testing should cover relevant combinations. Small subgroups call for care with confidence intervals, not for ignoring the results.",
  },
  {
    id: 'aigp-risks-19',
    domainId: 'aigp-risks',
    prompt:
      "A skin-lesion model was trained mostly on light-skinned patients and performs worse on darker skin. Which bias is primarily responsible, and at which stage did it enter?",
    choices: [
      "Measurement bias, introduced when the diagnostic labels for each lesion were defined",
      "Automation bias, introduced when dermatologists began relying on the tool's output",
      "Representation bias, introduced when the training data was collected from a skewed population",
      "Evaluation bias, introduced when the test set was drawn from the same skewed population as training",
    ],
    correctIndex: 2,
    explanation:
      "Under-representing a population in training data is representation (sampling) bias, which enters at data collection. Evaluation bias would affect how performance is reported, measurement bias concerns flawed labels or proxies, and automation bias concerns how people use the output.",
  },
  {
    id: 'aigp-risks-20',
    domainId: 'aigp-risks',
    prompt:
      "A health system trains a care-management model using past healthcare spending as its measure of 'medical need.' Because less was historically spent on some groups with equal illness, they are under-referred. Which fix targets the root cause?",
    choices: [
      "Add more patients from the under-referred groups so the model learns their patterns",
      "Remove race and ethnicity from the input features so the model cannot use them",
      "Replace the cost-based target with one that measures illness directly",
      "Lower the referral threshold for everyone so more patients in every group are referred",
    ],
    correctIndex: 2,
    explanation:
      "The label itself is a biased proxy: cost reflects unequal access, not need. A widely cited 2019 study showed that changing the target to a direct health measure greatly reduced the disparity. More data or removing race keeps the flawed target, and a uniform threshold change does not fix it.",
  },
  {
    id: 'aigp-risks-21',
    domainId: 'aigp-risks',
    prompt:
      "A companion chatbot popular with teenagers is tuned to maximize engagement. It discourages users from ending chats and expresses 'sadness' when they leave. Under the EU AI Act, this design is most relevant to which provision?",
    choices: [
      "The transparency duty requiring users to be told they are interacting with an AI system",
      "The high-risk category for AI systems used in education and vocational training",
      "The obligations for providers of general-purpose AI models with systemic risk",
      "The ban on manipulative techniques or exploiting vulnerabilities that cause significant harm",
    ],
    correctIndex: 3,
    explanation:
      "The Act prohibits AI that uses manipulative techniques or exploits vulnerabilities such as age to materially distort behavior in ways that cause or are likely to cause significant harm. Transparency duties would also apply, but they do not address the manipulative design. This is not an education use, and GPAI obligations concern model providers.",
  },
  {
    id: 'aigp-risks-22',
    domainId: 'aigp-risks',
    prompt:
      "Most large employers in a region use the same vendor's screening model. An applicant it scores poorly is rejected nearly everywhere. What systemic risk does this illustrate?",
    choices: [
      "Algorithmic monoculture: one model's errors repeat across many decisions",
      "Representation bias, since the applicant's profile is uncommon in the vendor's training data",
      "Concept drift, since the skills regional employers need have shifted since training",
      "Automation bias, since recruiters across employers defer to the vendor's scores",
    ],
    correctIndex: 0,
    explanation:
      "When many decision-makers rely on the same model, its errors are correlated rather than independent, so a single flawed judgment can exclude someone from an entire market. The other concepts describe different problems and do not capture this system-wide effect.",
  },
  {
    id: 'aigp-risks-23',
    domainId: 'aigp-risks',
    prompt:
      "A bank replaces phone support with a voice assistant that misunderstands customers with speech impairments far more often, and it offers no easy route to a human. Which harm is most directly present?",
    choices: [
      "Representational harm, since the system portrays people with disabilities as less capable",
      "Quality-of-service harm, since the system works worse for some customers and blocks their access",
      "Allocative harm, since customers who cannot use the support line are denied financial products they need",
      "No distinct harm, provided the bank offers equivalent support through its website",
    ],
    correctIndex: 1,
    explanation:
      "Quality-of-service harm occurs when a system works worse for some groups, here blocking access to banking support. Accessibility testing and an easy path to a human are key mitigations. No stereotyping or loan decision is described.",
  },
  {
    id: 'aigp-risks-24',
    domainId: 'aigp-risks',
    prompt:
      "Phishing emails targeting a company's staff become fluent, personalized, and far more numerous. How should the AI governance program treat this?",
    choices: [
      "As out of scope, since it involves no AI system the company itself builds or operates",
      "As a data poisoning incident, since attackers are feeding crafted content to company models",
      "As grounds to ban staff use of generative AI, since it is the source of the new threat",
      "As an external AI-enabled threat, to be assessed in the AI risk program alongside security",
    ],
    correctIndex: 3,
    explanation:
      "AI lowers the cost of convincing social engineering, and governance programs should consider AI-enabled threats to the organization, not only risks from its own systems, typically in coordination with security. It is not poisoning of the company's models, and banning internal tools does not stop external attackers.",
  },
  {
    id: 'aigp-risks-25',
    domainId: 'aigp-risks',
    prompt:
      "A general-purpose chatbot gives a user a confident but wrong medication dosage, which the user follows. Which combination best describes the risk?",
    choices: [
      "Data poisoning combined with membership inference against the chatbot's training data",
      "Hallucination combined with user over-reliance in a high-stakes medical context",
      "Concept drift combined with representation bias in the medical training data",
      "Underfitting combined with a lack of explainability about how the dose was chosen",
    ],
    correctIndex: 1,
    explanation:
      "Fluent, confident errors are dangerous when users rely on them for health decisions without consulting a professional. Mitigations include guardrails for medical topics and clear direction to qualified help. The scenario does not indicate poisoning, drift, or underfitting.",
  },
  {
    id: 'aigp-risks-26',
    domainId: 'aigp-risks',
    prompt:
      "A team maps harms to individuals, groups, society, and the organization itself. A colleague says organizational harm does not belong in an ethics assessment. What is the best reply?",
    choices: [
      "Agree, since ethics assessments should focus on external stakeholders, not the organization",
      "Agree, since organizational harms belong in enterprise risk registers, not AI assessments",
      "Disagree, since harms to people typically create legal and reputational risk as well",
      "Disagree, since organizational harm is usually the most significant category to weigh",
    ],
    correctIndex: 2,
    explanation:
      "Mapping organizational consequences alongside harms to people gives a complete picture and helps justify mitigation investment. It does not make organizational harm more important than harm to people.",
  },
  {
    id: 'aigp-risks-27',
    domainId: 'aigp-risks',
    prompt:
      "An agency cuts disability benefits based on an algorithmic assessment. Recipients are not told how it works and have no clear way to appeal. Which safeguard is most urgently missing?",
    choices: [
      "Notice of the automated assessment, an explanation, and a meaningful way to contest the decision",
      "Encryption of recipients' records at rest and in transit, to protect their sensitive health and income data",
      "A larger and more recent training dataset, so the assessment reflects current recipients",
      "Publication of the model's source code, so recipients can see exactly how it works",
    ],
    correctIndex: 0,
    explanation:
      "When automated systems make consequential decisions, due process requires notice, understandable reasons, and a real path to challenge the outcome; several court cases have turned on these failures. Encryption and more data do not address this, and source code alone rarely gives people a usable explanation.",
  },
  {
    id: 'aigp-risks-28',
    domainId: 'aigp-risks',
    prompt:
      "An applicant is denied an apartment and told only that 'the screening software did not approve you.' Beyond possible bias, what is the most significant harm of this opacity?",
    choices: [
      "It forces the vendor to disclose trade secrets once the applicant requests the criteria",
      "It leads to model drift, since denied applicants cannot provide corrective feedback",
      "It prevents the applicant from correcting inaccurate records or challenging an unfair result",
      "It shifts legal liability for the decision from the landlord onto the software vendor",
    ],
    correctIndex: 2,
    explanation:
      "Without knowing why they were rejected, people cannot fix inaccurate records or challenge an unfair result. In the US, tenant screening can trigger Fair Credit Reporting Act adverse action notices for this reason.",
  },
  {
    id: 'aigp-risks-29',
    domainId: 'aigp-risks',
    prompt:
      "A company wants to use cameras to infer employees' emotions in meetings to measure engagement, with signed employee consent. Under the EU AI Act, what is the status of this use?",
    choices: [
      "Permitted, since written employee consent provides a valid lawful basis for processing the data",
      "High-risk, so it requires a conformity assessment and human oversight before use",
      "Prohibited, since emotion recognition at work is banned except for medical or safety reasons",
      "Limited-risk, so the employer only needs to tell employees the system is in use",
    ],
    correctIndex: 2,
    explanation:
      "The Act prohibits emotion recognition in workplaces and education institutions, except for medical or safety reasons. Consent does not lift the prohibition, which reflects concerns about reliability and the power imbalance between employers and workers. Emotion recognition in other contexts can be high-risk.",
  },
  {
    id: 'aigp-risks-30',
    domainId: 'aigp-risks',
    prompt:
      "A mental health app's AI assistant has a human name and says things like 'I really care about you.' Users begin sharing highly sensitive details. Which risk does this design most directly create?",
    choices: [
      "Anthropomorphism, leading users to misplaced trust and over-disclosure of sensitive details",
      "Membership inference, since disclosed details could later be extracted from the model's training data",
      "Sycophancy, since the assistant is trained to tell users what they want to hear",
      "Automation bias, since users defer to the assistant's advice instead of clinicians",
    ],
    correctIndex: 0,
    explanation:
      "Human-like design can lead users to overestimate a system's understanding and care, trust it inappropriately, and disclose more than they otherwise would. Clear AI disclosure and limits on emotional language help counter this.",
  },
  {
    id: 'aigp-risks-31',
    domainId: 'aigp-risks',
    prompt:
      "A privacy officer refuses to let the AI team collect applicants' race and gender, citing data minimization. The team needs that data to test a hiring model for discrimination. What is the best resolution?",
    choices: [
      "Never collect it, since data minimization takes priority over optional fairness testing",
      "Collect it and use it as a model input, so the model can correct for group differences",
      "Rely on the vendor's audit showing the model is unbiased, which avoids collecting the data",
      "Collect it with safeguards, limited to bias testing and kept separate from decisions",
    ],
    correctIndex: 3,
    explanation:
      "Fairness testing often needs demographic data, so it can be collected for that narrow purpose with strong safeguards. The EU AI Act includes a conditional allowance for processing special-category data to detect and correct bias in high-risk systems. Using it as a model input would create disparate treatment risk.",
  },
  {
    id: 'aigp-risks-32',
    domainId: 'aigp-risks',
    prompt:
      "A recidivism model is well calibrated for two groups, but one group has a much higher false positive rate. The groups have different base rates. What does fairness research say about fixing this?",
    choices: [
      "Retraining with more data will let calibration and equal error rates hold together",
      "Some fairness criteria cannot all be met at once, so the tradeoff must be chosen and justified",
      "Removing the group attribute from the inputs will equalize the false positive rates",
      "Calibration is not a recognized fairness criterion, so the error-rate gap is the issue to fix",
    ],
    correctIndex: 1,
    explanation:
      "With different base rates, calibration and equal false positive and negative rates generally cannot all hold, as impossibility results show. Choosing which criterion matters is a value judgment that should be documented. More data or dropping the attribute does not remove the conflict, and calibration is a recognized criterion.",
  },
  {
    id: 'aigp-risks-33',
    domainId: 'aigp-risks',
    prompt:
      "A video platform's recommender, tuned for watch time, pushes young teenagers from one fitness video toward extreme dieting content. Why is this a heightened concern?",
    choices: [
      "Minors are more vulnerable, and several laws impose extra duties toward them",
      "Fitness and diet content is a high-risk category under the EU AI Act's Annex III",
      "Recommender systems may not be used for users under 18 under the Digital Services Act",
      "Watch-time optimization is an unfair commercial practice for users of any age in the EU",
    ],
    correctIndex: 0,
    explanation:
      "Children are a recognized vulnerable group, and optimization loops can steer them toward harmful content. Laws such as the EU Digital Services Act impose heightened protections for minors. Fitness content is not a high-risk category, and recommenders and engagement metrics are not banned outright.",
  },
  {
    id: 'aigp-risks-34',
    domainId: 'aigp-risks',
    prompt:
      "Competing landlords all use the same AI pricing software, which pools their private occupancy data to recommend rents. Rents rise across the market. Which risk have US enforcers alleged in similar cases?",
    choices: [
      "Data poisoning, since each landlord feeds occupancy data that skews the shared model",
      "Representational harm, since tenants in the area are portrayed as able to pay more",
      "Model inversion, since competitors can reconstruct each landlord's private occupancy data",
      "Algorithmic coordination on prices through pooled private data, functioning like price-fixing",
    ],
    correctIndex: 3,
    explanation:
      "When competitors share non-public data through a common algorithm that sets or recommends prices, it can function like coordinated price-setting. US antitrust enforcers have brought cases on this theory. The scenario does not involve poisoning, stereotyping, or reconstruction of data.",
  },
  {
    id: 'aigp-risks-35',
    domainId: 'aigp-risks',
    prompt:
      "A sepsis model built at a large urban teaching hospital performs poorly at a small rural hospital with different patients and practices. What should the rural hospital have done before relying on it?",
    choices: [
      "Confirmed the model is certified or cleared by a national regulator for clinical use",
      "Retrained the model from scratch using only its own patients' records and outcomes",
      "Validated the model's performance on its own patient population and clinical workflows",
      "Relied on the developer's peer-reviewed accuracy figures from the original hospital",
    ],
    correctIndex: 2,
    explanation:
      "Models do not always transfer across populations and settings, so deployers should validate locally before relying on them. Certification or published figures describe performance elsewhere, and full retraining may not be necessary or feasible.",
  },
  {
    id: 'aigp-risks-36',
    domainId: 'aigp-risks',
    prompt:
      "Testers notice a research chatbot changes correct answers to incorrect ones when users push back. Which behavior is this, and why does it matter for advisory uses?",
    choices: [
      "Hallucination, since the model generates new but unsupported claims when challenged",
      "Sycophancy, since agreeing with users can reinforce their mistakes",
      "Concept drift, since the chatbot's answers change as the conversation goes on",
      "Overfitting, since the chatbot has memorized how each user tends to react",
    ],
    correctIndex: 1,
    explanation:
      "Sycophancy is a tendency to tell users what they want to hear, often reinforced by preference-based training. In advisory settings it can validate errors instead of correcting them. The model is abandoning correct answers rather than inventing unrelated facts.",
  },
  {
    id: 'aigp-risks-37',
    domainId: 'aigp-risks',
    prompt:
      "Many banks, insurers, and hospitals depend on the same few foundation model providers. A regulator worries about a single provider outage or flawed update. What is this risk, and which control is most relevant?",
    choices: [
      "Representation bias; require each provider to show diverse training data before use",
      "Automation bias; require institutions to have staff review every output from the models",
      "Concentration risk; plan for resilience, including fallbacks and exit strategies",
      "Underfitting; require providers to use larger and more capable models in critical sectors",
    ],
    correctIndex: 2,
    explanation:
      "Shared dependence on a few providers means one failure can spread across the economy. Financial regulators increasingly expect third-party resilience planning, including contingency and exit plans. The other options misname the risk.",
  },
  {
    id: 'aigp-risks-38',
    domainId: 'aigp-risks',
    prompt:
      "A company publishes 'de-identified' location traces for research. Journalists re-identify people by matching traces to home and work locations. What does this demonstrate?",
    choices: [
      "The dataset was too small; a larger one would have hidden individuals in the crowd",
      "Location data may not be used for research without each person's explicit consent",
      "Removing names often fails to prevent re-identification when the data is rich and detailed",
      "The journalists carried out a membership inference attack against the dataset",
    ],
    correctIndex: 2,
    explanation:
      "High-dimensional data such as location traces can often be linked back to individuals using outside information, even without names. Robust de-identification needs stronger techniques and a realistic re-identification risk assessment. Size does not solve this, and research use is not prohibited.",
  },
  {
    id: 'aigp-risks-39',
    domainId: 'aigp-risks',
    prompt:
      "A speech recognition vendor reports excellent accuracy on a benchmark recorded mostly by young native speakers. In use, accuracy is much lower for older and non-native speakers. Which bias is most directly at work?",
    choices: [
      "Historical bias, since the training speech reflects outdated patterns of pronunciation and vocabulary",
      "Evaluation bias, since the benchmark does not represent the people who actually use the product",
      "Automation bias, since users trust transcripts without checking them against the audio",
      "Measurement bias, since older users tend to use lower-quality recording equipment",
    ],
    correctIndex: 1,
    explanation:
      "Evaluation bias occurs when test data does not represent the deployment population, so reported performance overstates real results. Representation bias in training may also be present, but the misleading claim comes from the unrepresentative benchmark.",
  },
  {
    id: 'aigp-risks-40',
    domainId: 'aigp-risks',
    prompt:
      "A political consultancy uses AI to build psychological profiles of voters and sends each person messages designed to exploit their specific fears. Which harm is most central?",
    choices: [
      "Harm to individual autonomy and to democratic discourse, through exploitation of personal fears",
      "Privacy harm only, since the core issue is the collection of voters' personal data",
      "Allocative harm, since some voters receive less information than others about the candidates in the race",
      "Representational harm, since voter groups are portrayed through stereotyped messaging",
    ],
    correctIndex: 0,
    explanation:
      "Hyper-targeted persuasion that exploits psychological vulnerabilities undermines people's ability to make free, informed choices and can distort public debate. That is why political microtargeting draws regulatory scrutiny.",
  },
]
