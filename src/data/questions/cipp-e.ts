import type { Question } from '../../lib/types'

export const cippEQuestions: Question[] = [
  // Domain 1: cipp-e-foundations — Data Protection Laws & Origins
  {
    id: 'cipp-e-foundations-1',
    domainId: 'cipp-e-foundations',
    prompt:
      'A non-EU country wants to align its domestic law with an international data protection framework that is legally binding on ratifying states, open to accession by countries outside Europe, and predates the EU Data Protection Directive by over a decade. Which instrument fits this description?',
    choices: [
      'The OECD Privacy Guidelines',
      'Convention 108',
      'The APEC Privacy Framework',
      'Article 8 of the EU Charter of Fundamental Rights',
    ],
    correctIndex: 1,
    explanation:
      'Convention 108 (Council of Europe, 1981) is a binding treaty open to accession by non-European states, unlike the OECD Guidelines, which are influential but non-binding, and the Charter, which is an EU-only instrument not open to third-country accession.',
  },
  {
    id: 'cipp-e-foundations-2',
    domainId: 'cipp-e-foundations',
    prompt:
      'A company argues that because its practices satisfy Article 8 of the European Convention on Human Rights (respect for private and family life), it has no separate obligations under EU data protection law. Why is this reasoning flawed?',
    choices: [
      'ECHR Article 8 and Charter Article 8 are the same provision, so satisfying one automatically satisfies EU data protection law',
      'The EU Charter of Fundamental Rights recognizes protection of personal data as a distinct fundamental right under its own Article 8, separate from the general right to privacy, so compliance with a privacy-focused standard does not itself satisfy the data-protection-specific right',
      'The ECHR was repealed by the GDPR and no longer has any legal relevance in the EU',
      'Only public authorities, never private companies, are bound by the Charter',
    ],
    correctIndex: 1,
    explanation:
      'The Charter treats data protection (Article 8) as a freestanding right distinct from the general privacy right in Article 7, and this is a different, EU-specific instrument from the Council of Europe\'s ECHR; conflating ECHR Article 8 privacy protections with the Charter\'s dedicated data protection right is the common mistake this question tests.',
  },
  {
    id: 'cipp-e-foundations-3',
    domainId: 'cipp-e-foundations',
    prompt:
      'Before 25 May 2018, a controller operating across several EU member states under Directive 95/46/EC faced different registration formalities and enforcement approaches in each country. This fragmentation existed primarily because the Directive:',
    choices: [
      'Applied only in member states that chose to opt in voluntarily',
      'Required transposition into national law, leaving member states discretion in how they implemented its provisions',
      'Was overridden immediately by each state\'s constitution',
      'Delegated all enforcement exclusively to the European Commission',
    ],
    correctIndex: 1,
    explanation:
      'As a directive, 95/46/EC set harmonized objectives but required each member state to transpose it into national legislation, which produced the exact kind of divergence in registration and enforcement rules the GDPR was later designed to eliminate by taking direct effect.',
  },
  {
    id: 'cipp-e-foundations-4',
    domainId: 'cipp-e-foundations',
    prompt:
      'After 25 May 2018, a multinational\'s legal team could no longer point to gaps between different countries\' national implementing legislation to explain regional variation in its core compliance program, as it previously could under Directive 95/46/EC. This is best explained by the fact that the GDPR:',
    choices: [
      'Applies only to public sector bodies',
      'Is a regulation with direct legal effect in every member state, requiring no national transposition',
      'Eliminated the distinction between controllers and processors',
      'Applies only to companies headquartered within the EU',
    ],
    correctIndex: 1,
    explanation:
      'Because the GDPR is a regulation, it applies uniformly and directly across all member states without implementing legislation, removing the main source of the cross-border inconsistency that existed under the Directive; it did not abolish the controller/processor distinction or limit itself to public bodies or EU-headquartered companies.',
  },
  {
    id: 'cipp-e-foundations-5',
    domainId: 'cipp-e-foundations',
    prompt:
      'A company replaces customer names in a dataset with a cryptographic hash, but keeps the key needed to reverse the hash stored separately within the organization. Under the GDPR, this hashed dataset is:',
    choices: [
      'Anonymized data, falling entirely outside the scope of the GDPR',
      'Pseudonymized personal data, still within GDPR scope because re-identification remains possible using the retained key',
      'Automatically classified as special category data because it has been hashed',
      'Outside GDPR scope because the hash string itself contains no readable name',
    ],
    correctIndex: 1,
    explanation:
      'Recital 26 makes clear that pseudonymized data which could be attributed to an individual through the use of additional information remains personal data; true anonymization only occurs when re-identification is no longer reasonably possible by any means, which is not the case where the organization itself retains the re-identification key.',
  },
  {
    id: 'cipp-e-foundations-6',
    domainId: 'cipp-e-foundations',
    prompt:
      'A Brazil-based analytics firm has no office, staff, or equipment in the EU, but it embeds tracking code on websites specifically to profile the on-site browsing behavior of visitors located in the EU for ad-targeting purposes. Which provision most likely brings the firm within GDPR scope?',
    choices: [
      'Article 3(1), because the firm has an establishment in the EU',
      'Article 3(2)(b), because the firm monitors the behavior of individuals in the EU',
      'Article 3(3), because the firm processes data on behalf of an EU public authority',
      'No provision applies, because the firm never offers goods or services for sale',
    ],
    correctIndex: 1,
    explanation:
      'Article 3(2)(b) extends GDPR scope to non-EU entities that monitor the behavior of individuals in the EU, which fits behavioral profiling via tracking code; Article 3(1) requires an actual EU establishment, which the firm lacks, and this scenario is a monitoring case rather than the goods/services-offering limb of Article 3(2)(a).',
  },
  {
    id: 'cipp-e-foundations-7',
    domainId: 'cipp-e-foundations',
    prompt:
      'A German subsidiary of a US company wants to roll out a single EU-wide employee monitoring policy, but its works council points out that German law imposes additional restrictions on processing employee data beyond the GDPR\'s baseline text. This is possible because:',
    choices: [
      'Germany has opted out of the GDPR for employment-related processing',
      'Article 88 permits member states to adopt more specific rules on processing employee personal data in the employment context, within the limits set by the Regulation',
      'The GDPR does not apply to employment data at all, leaving the entire field to national law',
      'Works councils hold an automatic veto over any EU regulation',
    ],
    correctIndex: 1,
    explanation:
      'Article 88 is one of several GDPR "opening clauses" letting member states legislate more specifically in defined areas, including employment; this does not mean the GDPR is inapplicable to employee data generally, only that member states may layer additional, more specific safeguards on top of it.',
  },
  {
    id: 'cipp-e-foundations-8',
    domainId: 'cipp-e-foundations',
    prompt:
      'A GDPR complaint is filed on behalf of "Acme Consulting Ltd," a limited company, alleging that a marketing firm processed its general business contact details without a lawful basis. How is this complaint most likely to fare?',
    choices: [
      'It succeeds automatically, since all data connected to a business is personal data',
      'It fails as framed, because a data subject must be an identified or identifiable natural (living) person, and a limited company is a legal, not natural, person',
      'It succeeds only if the company employs fewer than ten people',
      'It succeeds because company data is a listed special category under Article 9',
    ],
    correctIndex: 1,
    explanation:
      'The GDPR protects natural persons; a limited company itself cannot be a data subject, though data about a specific named individual employee (for example, an individual\'s personal work email) could separately qualify as that individual\'s personal data — but the complaint as framed, on behalf of the company itself, does not fall within GDPR protection.',
  },

  // Domain 2: cipp-e-controllers-processors — Controllers & Processors
  {
    id: 'cipp-e-controllers-processors-1',
    domainId: 'cipp-e-controllers-processors',
    prompt:
      'A startup builds a mobile app and independently decides which user analytics to collect, why, and how long to keep them, but pays an outside company merely to host the servers, with that company having no input into what is collected. Under Article 4(7), who is the controller for the analytics processing?',
    choices: [
      'The hosting company, because it physically possesses the servers storing the data',
      'The startup, because it determines the purposes and means of the processing',
      'Both companies automatically, as joint controllers, simply because two organizations are involved',
      'Neither company, because the processing is carried out through automated analytics tools',
    ],
    correctIndex: 1,
    explanation:
      'Controller status turns on who determines the purposes and means of processing, not on who physically possesses the infrastructure; the hosting company acting purely as an instructed technical provider is a processor, and joint controllership under Article 26 requires a genuine shared determination of purposes and means, which is absent here.',
  },
  {
    id: 'cipp-e-controllers-processors-2',
    domainId: 'cipp-e-controllers-processors',
    prompt:
      'A payroll bureau runs monthly payroll for a client strictly according to the client\'s detailed written instructions, has no say over what employee data is collected or how long it is retained, and may use the data only as directed. Despite having direct read access to the raw salary data, the payroll bureau is best classified as a:',
    choices: [
      'Controller, because it has direct access to sensitive salary data',
      'Joint controller, because payroll processing necessarily involves shared responsibility',
      'Processor, because it acts solely on the client\'s documented instructions without determining the purposes or means of processing',
      'Data subject, because its own staff\'s data is embedded within the payroll files it handles',
    ],
    correctIndex: 2,
    explanation:
      'Mere access to data is not the test for controller status; the determinative factor is who decides why and how the processing occurs, and here that is the client, making the bureau a processor — the tempting "access equals control" reasoning in the first option is a common but incorrect shortcut.',
  },
  {
    id: 'cipp-e-controllers-processors-3',
    domainId: 'cipp-e-controllers-processors',
    prompt:
      'Two airlines jointly design and operate a shared loyalty program, together deciding what customer data to collect and how it will be used across both brands. One airline later claims it bears no responsibility toward customers because its partner alone handles customer service. Is this claim consistent with Article 26?',
    choices: [
      'Yes, because only one joint controller needs to be designated as a contact point for data subjects',
      'No — joint controllers must transparently allocate their respective responsibilities, but the essence of that arrangement must be made available to data subjects, and internal allocation does not eliminate either party\'s own accountability or potential liability',
      'Yes, because Article 26 only applies when both joint controllers are established in the same member state',
      'No, but only because the airline industry is separately regulated',
    ],
    correctIndex: 1,
    explanation:
      'Article 26 requires joint controllers to determine their respective responsibilities in a transparent arrangement and make its essence available to data subjects, but under Article 26(3) data subjects may exercise their rights against either controller regardless of the internal split, and both can remain liable under Article 82.',
  },
  {
    id: 'cipp-e-controllers-processors-4',
    domainId: 'cipp-e-controllers-processors',
    prompt:
      'A controller\'s legal team is drafting a data processing agreement and wants to confirm what Article 28(3) actually requires as mandatory content. Which of the following is a required term?',
    choices: [
      'A blanket prohibition on the processor ever engaging any sub-processor, without exception',
      'An obligation on the processor to assist the controller in fulfilling its duty to respond to requests exercising data subjects\' rights',
      'A clause fixing the processor\'s total liability at an amount the processor itself selects',
      'A guarantee that the processor will indemnify the controller for all regulatory fines however caused',
    ],
    correctIndex: 1,
    explanation:
      'Article 28(3)(e) requires the contract to include an obligation on the processor to assist the controller with data subject rights requests; sub-processing is not banned outright (Article 28(2) permits it with authorization), and Article 28(3) does not mandate self-selected liability caps or blanket indemnities.',
  },
  {
    id: 'cipp-e-controllers-processors-5',
    domainId: 'cipp-e-controllers-processors',
    prompt:
      'A cloud processor\'s contract contains a general written authorization for new sub-processors, conditioned on giving the controller advance notice of any change. The controller objects to a specific proposed sub-processor within the notice period. Under Article 28(2), what should happen?',
    choices: [
      'The processor may proceed regardless, since general authorization was already given up front',
      'The processor must give the controller a genuine opportunity to object, meaning the objection should be addressed before that specific sub-processor is engaged',
      'The controller\'s objection is legally irrelevant unless it is also lodged with a supervisory authority',
      'General authorization automatically becomes void the moment any objection is raised, terminating the entire processing contract',
    ],
    correctIndex: 1,
    explanation:
      'General authorization under Article 28(2) must be paired with a real, functioning right for the controller to object to specific changes; it is not a one-time blanket permission that overrides subsequent objections, but an objection also does not automatically void the whole contract.',
  },
  {
    id: 'cipp-e-controllers-processors-6',
    domainId: 'cipp-e-controllers-processors',
    prompt:
      'A controller has written, GDPR-compliant privacy policies covering every processing activity, but keeps no records showing why each measure was adopted or how ongoing compliance is monitored. A supervisory authority is most likely to find this insufficient under which principle?',
    choices: [
      'Data minimisation, because the policies themselves constitute excess data',
      'Accountability under Article 5(2), which requires the controller to be able to demonstrate compliance with the principles, not merely comply with them on paper',
      'Storage limitation, because policies must be deleted once they are superseded',
      'Purpose limitation, because having written policies is itself a secondary processing purpose',
    ],
    correctIndex: 1,
    explanation:
      'Article 5(2) requires demonstrable compliance, typically evidenced through documentation, monitoring records, and processes such as those required by Article 30, not merely the existence of policy text; the other principles listed are unrelated to this specific documentation gap.',
  },
  {
    id: 'cipp-e-controllers-processors-7',
    domainId: 'cipp-e-controllers-processors',
    prompt:
      'A data breach occurs because a processor failed to implement the security measures required by its Article 28 contract, even though the controller\'s instructions were lawful and clear. Under Article 82, which statement about liability is most accurate?',
    choices: [
      'Only the processor is liable, since it directly caused the breach through inadequate security',
      'Both the controller and processor may be held liable, and Article 82(4) makes them jointly and severally liable for the entire damage where both are involved in the same processing operation, though each may seek contribution from the other proportionate to responsibility',
      'Only the controller is liable, since it is always liable for the acts of any processor it engages',
      'Neither party is liable if the breach resulted from a technical failure rather than deliberate human misconduct',
    ],
    correctIndex: 1,
    explanation:
      'Article 82(4) and (5) establish joint and several liability toward the affected data subject where both parties are involved in the same processing giving rise to damage, with an internal right of contribution based on each party\'s share of responsibility; liability is not automatically confined to just one party or excluded for non-deliberate failures.',
  },
  {
    id: 'cipp-e-controllers-processors-8',
    domainId: 'cipp-e-controllers-processors',
    prompt:
      'A processor\'s compliance officer is comparing its Article 30(2) record-keeping duty with the controller\'s Article 30(1) duty. Which statement correctly distinguishes the processor\'s obligation?',
    choices: [
      'The processor must record all categories of processing carried out on behalf of each controller, which is narrower than the controller\'s more detailed record of processing purposes and legal bases',
      'The processor has no independent Article 30 obligation, since only controllers must maintain processing records',
      'The processor must record the identity of every individual data subject whose data it processes',
      'The processor must publish a data protection impact assessment for every controller it serves',
    ],
    correctIndex: 0,
    explanation:
      'Article 30(2) imposes a parallel but narrower record-keeping duty on processors, limited to categories of processing carried out per controller, whereas Article 30(1) requires controllers to record more detailed information such as purposes and, where applicable, legal bases and transfer safeguards; DPIAs are a separate Article 35 obligation, not part of Article 30.',
  },

  // Domain 3: cipp-e-processing — Processing Personal Data
  {
    id: 'cipp-e-processing-1',
    domainId: 'cipp-e-processing',
    prompt:
      'An online retailer wants to process payment details and send an order confirmation immediately after a customer completes checkout, without collecting any additional consent for that specific processing. Which Article 6(1) basis most directly supports it?',
    choices: [
      'Article 6(1)(a), consent, because placing an order implies consent to all related processing',
      'Article 6(1)(b), because the processing is necessary to perform the contract the customer has just entered into',
      'Article 6(1)(f), legitimate interests, because retailers have an inherent interest in fulfilling orders',
      'Article 6(1)(c), legal obligation, because tax law requires retailers to process order data',
    ],
    correctIndex: 1,
    explanation:
      'Article 6(1)(b) is the precise fit for processing necessary to perform a contract with the data subject; legitimate interests would only be reached for processing not necessary to the contract itself, and the legal obligation ground fits a distinct, specific statutory duty like tax-record retention rather than order fulfillment.',
  },
  {
    id: 'cipp-e-processing-2',
    domainId: 'cipp-e-processing',
    prompt:
      'A hospital wants to process patient health records not for direct treatment, but to compile national infection-rate statistics as required by a public health law. Which Article 9(2) ground fits this secondary statistical use, as distinct from direct care?',
    choices: [
      'Article 9(2)(h), the provision of health or social care and treatment',
      'Article 9(2)(i), processing necessary for reasons of public interest in the area of public health',
      'Article 9(2)(a), explicit consent from each patient',
      'Article 9(2)(f), establishment, exercise or defense of legal claims',
    ],
    correctIndex: 1,
    explanation:
      'Article 9(2)(h) covers direct treatment and care, while Article 9(2)(i) is the specific ground for public health purposes such as statistical monitoring under EU or member state law, subject to suitable safeguards like professional secrecy; the two grounds are easy to conflate but apply to different purposes.',
  },
  {
    id: 'cipp-e-processing-3',
    domainId: 'cipp-e-processing',
    prompt:
      'A ride-sharing app collects a user\'s precise real-time GPS location, which is needed to arrange the trip, but also silently copies the user\'s entire phone contacts list and photo gallery metadata "in case it is useful for future features." Which Article 5 principle does the contacts and photo collection most directly violate?',
    choices: [
      'Accuracy, because contact lists quickly become outdated',
      'Data minimisation, because the collection is not adequate, relevant, or limited to what is necessary for providing a ride-sharing service',
      'Storage limitation, because contacts must be deleted immediately after each individual trip',
      'Lawfulness, because location data is inherently unlawful to collect',
    ],
    correctIndex: 1,
    explanation:
      'Article 5(1)(c) requires collection to be limited to what is necessary for the stated purpose; speculative "might be useful later" collection of contacts and photo metadata is the classic data minimisation violation, distinct from accuracy, storage limitation, or lawfulness issues.',
  },
  {
    id: 'cipp-e-processing-4',
    domainId: 'cipp-e-processing',
    prompt:
      'A cookie banner states: "By continuing to browse this site you consent to all cookies. Once given, consent cannot be withdrawn." Beyond the fact that mere continued browsing is not a valid affirmative act, which additional GDPR requirement for consent does the second sentence violate?',
    choices: [
      'The requirement that consent be freely given',
      'The requirement that consent be specific and granular by purpose',
      'The requirement that data subjects be able to withdraw consent at any time, as easily as it was given',
      'The requirement that consent be documented in a signed paper form',
    ],
    correctIndex: 2,
    explanation:
      'Article 7(3) guarantees a right to withdraw consent at any time, as easily as it was given; declaring consent permanent and irrevocable directly contradicts this, independent of the separate problem that "continuing to browse" fails to constitute a valid unambiguous affirmative act in the first place.',
  },
  {
    id: 'cipp-e-processing-5',
    domainId: 'cipp-e-processing',
    prompt:
      'A retailer wants to rely on legitimate interests under Article 6(1)(f) to email existing customers about similar products. A properly conducted assessment requires the retailer to establish all of the following EXCEPT:',
    choices: [
      'It has a legitimate interest in carrying out the processing',
      'The processing is necessary to achieve that interest',
      'The data subject has given explicit written consent to that specific processing',
      'The interest is not overridden by the data subject\'s own interests, rights, or freedoms',
    ],
    correctIndex: 2,
    explanation:
      'The Article 6(1)(f) legitimate interests test has three limbs — purpose, necessity, and balancing — none of which involve consent, which is a separate and mutually exclusive lawful basis under Article 6(1)(a); requiring consent would collapse the distinction between the two bases entirely.',
  },
  {
    id: 'cipp-e-processing-6',
    domainId: 'cipp-e-processing',
    prompt:
      'A bank\'s fraud detection system flags a customer\'s transactions as higher risk partly based on data inferred about the customer\'s likely religious dietary habits, derived from merchant category codes rather than volunteered directly. Under Article 9, this inferred data is:',
    choices: [
      'Not special category data, because it was inferred rather than directly provided by the customer',
      'Special category data revealing religious beliefs, since Article 9 applies to data revealing such beliefs regardless of whether it was volunteered or inferred',
      'Financial data, and therefore automatically excluded from Article 9\'s scope',
      'Special category data only if the bank formally labels it as such internally',
    ],
    correctIndex: 1,
    explanation:
      'CJEU and EDPB guidance confirm that data revealing a special category attribute is protected under Article 9 regardless of whether it was directly provided or derived by inference; the method of derivation does not remove the protection, and internal labeling has no bearing on the data\'s legal classification.',
  },
  {
    id: 'cipp-e-processing-7',
    domainId: 'cipp-e-processing',
    prompt:
      'An employer retains CCTV footage from its office for three years "in case it is ever needed," with no defined retention schedule or documented link to a specific purpose. This practice most directly risks violating:',
    choices: [
      'Integrity and confidentiality, because CCTV footage must always be encrypted',
      'Storage limitation, because personal data should be kept in identifiable form no longer than necessary for the purpose for which it is processed',
      'Lawfulness, because CCTV monitoring is inherently unlawful under the GDPR',
      'Data minimisation, because the cameras capture too wide a physical area',
    ],
    correctIndex: 1,
    explanation:
      'Article 5(1)(e) requires a defined, purpose-linked retention period; an indefinite "just in case" retention practice with no documented justification is the textbook storage limitation failure, distinct from encryption, lawfulness, or minimisation concerns.',
  },
  {
    id: 'cipp-e-processing-8',
    domainId: 'cipp-e-processing',
    prompt:
      'A recruiter collects CVs for a specific advertised vacancy. Six months after the role is filled, without informing candidates or identifying a new lawful basis, the recruiter starts using the same CVs to build a searchable talent pool for unrelated future roles across multiple clients. What must the recruiter assess, and under which principle?',
    choices: [
      'Accuracy — simply whether the CVs remain up to date',
      'Purpose limitation — whether the new use is compatible with the original purpose, considering factors such as the link between the purposes and candidates\' reasonable expectations, or else a new lawful basis is required',
      'Integrity and confidentiality — only whether the CVs are stored securely',
      'Nothing, since purpose limitation ceases to apply once data has been lawfully collected',
    ],
    correctIndex: 1,
    explanation:
      'Article 5(1)(b) requires further processing to be compatible with the original specified purpose; repurposing job-specific CVs into an open-ended, cross-client talent pool without a compatibility assessment or fresh lawful basis is a purpose limitation problem, not merely a storage or security issue.',
  },

  // Domain 4: cipp-e-subject-rights — Data Subjects' Rights
  {
    id: 'cipp-e-subject-rights-1',
    domainId: 'cipp-e-subject-rights',
    prompt:
      'A data subject submits an Article 15 access request to a hospital for all records mentioning them, including entries where a family member\'s own health information is discussed alongside theirs. What should the hospital do?',
    choices: [
      'Disclose the entire record verbatim, including the family member\'s health data, since Article 15 requires full disclosure of anything mentioning the requester',
      'Provide the requester\'s own personal data, but withhold or redact the family member\'s personal data where disclosure would adversely affect that other person\'s rights and freedoms',
      'Refuse the entire request outright, since mixed records can never be disclosed',
      'Disclose only the family member\'s data, since the requester already knows their own medical history',
    ],
    correctIndex: 1,
    explanation:
      'Article 15(4) provides that the right of access must not adversely affect the rights and freedoms of others, so controllers typically redact or withhold third-party personal data while still providing the requester\'s own data — refusing the whole request or disclosing everything unredacted are both overcorrections.',
  },
  {
    id: 'cipp-e-subject-rights-2',
    domainId: 'cipp-e-subject-rights',
    prompt:
      'A customer asks a bank to erase their account data under Article 17 after closing the account, but the bank must retain transaction records for five years under national anti-money-laundering law. What should the bank do?',
    choices: [
      'Erase everything immediately, since an Article 17 request always overrides other legal obligations',
      'Refuse erasure of the specific records needed for the statutory retention period under the Article 17(3)(b) exception, while erasing other data no longer needed for any purpose',
      'Ignore the request entirely, since banks are categorically exempt from Article 17',
      'Erase the official records but keep an informal duplicate copy outside its official systems to satisfy both obligations',
    ],
    correctIndex: 1,
    explanation:
      'Article 17(3)(b) disapplies the erasure right where processing is necessary for compliance with a legal obligation, allowing the bank to retain only what the AML law requires while still erasing the rest — retaining an off-books "shadow copy" would itself be unlawful, undocumented processing.',
  },
  {
    id: 'cipp-e-subject-rights-3',
    domainId: 'cipp-e-subject-rights',
    prompt:
      'A streaming service processes viewing history under legitimate interests (Article 6(1)(f)) to improve recommendations, and separately processes billing details under a contract (Article 6(1)(b)) that the user actively supplied. A user invokes Article 20 to port their data to a competitor. Which data must be provided in a portable format?',
    choices: [
      'Both the viewing history and the billing details, since Article 20 applies to any data the controller holds',
      'Only the billing details provided under the contract, since Article 20 does not extend to data processed on the basis of legitimate interests',
      'Only the viewing history, since it is the more commercially valuable dataset',
      'Neither, since streaming services are categorically excluded from Article 20',
    ],
    correctIndex: 1,
    explanation:
      'Article 20 is limited to data provided by the data subject and processed on the basis of consent or contract; processing under legitimate interests falls outside its scope entirely, regardless of how the data was generated or how valuable it is.',
  },
  {
    id: 'cipp-e-subject-rights-4',
    domainId: 'cipp-e-subject-rights',
    prompt:
      'A charity relies on legitimate interests to (1) send fundraising appeals by post and (2) run internal analytics on donation patterns to refine its programs. A supporter objects to both uses under Article 21. How should the charity\'s response differ between the two?',
    choices: [
      'It must stop both immediately and unconditionally, since every Article 21 objection has identical legal effect',
      'For the fundraising appeals (direct marketing), it must stop unconditionally under Article 21(2)-(3); for the analytics use, it may continue only if it demonstrates compelling legitimate grounds that override the supporter\'s interests, rights, and freedoms under Article 21(1)',
      'It may refuse both objections if it genuinely believes its own interests are compelling enough',
      'It must stop the analytics unconditionally but may continue the fundraising appeals if it can show compelling grounds',
    ],
    correctIndex: 1,
    explanation:
      'Direct marketing objections under Article 21(2) are absolute with no balancing test, while objections to other legitimate-interest processing under Article 21(1) require the controller to demonstrate compelling legitimate grounds that override the individual\'s interests — reversing which objection is absolute is the key trap here.',
  },
  {
    id: 'cipp-e-subject-rights-5',
    domainId: 'cipp-e-subject-rights',
    prompt:
      'An online lender uses a fully automated algorithm to approve or deny loan applications with no human involvement, relying on the applicant\'s explicit consent under Article 22(2)(c). A denied applicant receives no explanation. What must the lender still provide despite having valid consent?',
    choices: [
      'Nothing further, since explicit consent under Article 22(2)(c) removes all remaining obligations',
      'Suitable measures to safeguard the applicant\'s rights, including at least the right to obtain human intervention, to express their point of view, and to contest the decision',
      'A binding guarantee that automated decision-making will never be used for that applicant again',
      'Nothing, because Article 22 does not apply to financial services',
    ],
    correctIndex: 1,
    explanation:
      'Article 22(3) requires suitable safeguards, including at minimum human intervention, the right to express a viewpoint, and the right to contest the decision, and these apply even where the automated decision rests on explicit consent or contract necessity — consent alone does not satisfy Article 22\'s separate safeguard requirement.',
  },
  {
    id: 'cipp-e-subject-rights-6',
    domainId: 'cipp-e-subject-rights',
    prompt:
      'A data subject disputes the accuracy of their date of birth on file and asks the controller to correct it, but the controller needs time to verify which date is correct. Pending that verification, what is the data subject additionally entitled to request?',
    choices: [
      'Immediate and permanent erasure of the date of birth field',
      'Restriction of processing of that data under Article 18(1)(a), while its accuracy is being verified',
      'Compensation regardless of whether any harm has actually been suffered',
      'Nothing further, since the rectification request alone covers this situation',
    ],
    correctIndex: 1,
    explanation:
      'Article 18(1)(a) specifically allows a data subject to obtain restriction of processing while the accuracy of contested data is being verified, complementing rather than duplicating the separate rectification right under Article 16.',
  },
  {
    id: 'cipp-e-subject-rights-7',
    domainId: 'cipp-e-subject-rights',
    prompt:
      'A controller restricts a data subject\'s data under Article 18 following an objection under Article 21(1), while it verifies whether its own grounds override the data subject\'s interests. During this restriction period, the controller receives a routine, unrelated marketing analytics request. May it process the restricted data for that purpose?',
    choices: [
      'Yes, because restriction only limits erasure, not other forms of processing',
      'No — while restricted, the data may generally only be stored, and otherwise processed only with the data subject\'s consent, or for the establishment, exercise, or defense of legal claims, the protection of another person\'s rights, or important public interest reasons',
      'Yes, provided the controller documents the analytics request internally',
      'No, because restriction requires the data to be permanently deleted instead',
    ],
    correctIndex: 1,
    explanation:
      'Article 18(2) narrowly limits what may be done with restricted data to storage plus a short, defined list of exceptions; routine marketing analytics does not fall within consent, legal claims, protecting another\'s rights, or important public interest, so it is not permitted during restriction.',
  },
  {
    id: 'cipp-e-subject-rights-8',
    domainId: 'cipp-e-subject-rights',
    prompt:
      'A controller receives a complex access request on 3 March involving voluminous records requiring significant collation, and properly notifies the data subject within the first month that an extension is needed. By what date must the controller provide a substantive response at the latest?',
    choices: [
      '3 April, since extensions are not available for access requests',
      '3 June, since Article 12(3) allows the initial one-month period to be extended by a further two months for complex or numerous requests, provided the data subject is informed within the first month',
      '3 September, since complex requests receive a standard six-month extension',
      'Immediately, since merely notifying the data subject of an extension satisfies the deadline on its own',
    ],
    correctIndex: 1,
    explanation:
      'Article 12(3) sets a baseline one-month response period extendable by up to two further months for complexity or volume, with the extension conditioned on timely notice to the data subject; 3 March plus one month plus two further months lands on 3 June, not 3 April or 3 September.',
  },

  // Domain 5: cipp-e-transfers — International Data Transfers
  {
    id: 'cipp-e-transfers-1',
    domainId: 'cipp-e-transfers',
    prompt:
      'The European Commission has issued an adequacy decision for Country A. A controller in Country A then transfers the same data on to a processor in Country B, which has no adequacy decision or other safeguard. Does the original adequacy decision for Country A cover this onward transfer to Country B?',
    choices: [
      'Yes, because adequacy for Country A automatically extends to any onward transfer it makes',
      'No — an adequacy decision authorizes the specific transfer from the EU to the adequate country; a further onward transfer to a different, non-adequate country requires its own separate transfer mechanism or safeguard',
      'Yes, provided Country A and Country B belong to the same regional trade bloc',
      'No, because adequacy decisions never permit any onward transfer under any circumstances',
    ],
    correctIndex: 1,
    explanation:
      'Adequacy under Article 45 covers the EU-to-adequate-country flow itself; it does not automatically legitimize whatever the recipient subsequently does with the data, so an onward transfer to a non-adequate third country needs its own basis, though adequacy decisions can themselves include onward-transfer conditions.',
  },
  {
    id: 'cipp-e-transfers-2',
    domainId: 'cipp-e-transfers',
    prompt:
      'An EU controller transfers data to a processor in a third country with no adequacy decision, and that processor in turn needs to pass some of the data to its own sub-processor in a different third country. Under the European Commission\'s 2021 modular Standard Contractual Clauses, which statement is accurate?',
    choices: [
      'A single set of SCCs can never be used to cover more than one transfer relationship',
      'The SCCs contain distinct modules for different transfer scenarios (such as controller-to-processor and processor-to-sub-processor), so the appropriate module can be selected for each leg of the transfer',
      'SCCs may only be used for controller-to-controller transfers',
      'Once SCCs are signed for the first transfer, no further safeguard is needed for the sub-processor transfer',
    ],
    correctIndex: 1,
    explanation:
      'The 2021 modular SCCs were specifically designed to cover multiple transfer scenarios (controller-to-controller, controller-to-processor, processor-to-processor, and processor-to-controller) within one instrument, so the processor-to-sub-processor leg needs its own appropriate module rather than being automatically covered.',
  },
  {
    id: 'cipp-e-transfers-3',
    domainId: 'cipp-e-transfers',
    prompt:
      'A multinational group wants to adopt Binding Corporate Rules covering recurring transfers of HR data among its subsidiaries worldwide, including entities that act as processors for other group companies. Which statement about BCRs is accurate?',
    choices: [
      'BCRs can be self-certified by the group with no regulatory involvement',
      'Separate BCR frameworks exist for controllers and for processors, and either type must be approved by a competent supervisory authority before being relied upon',
      'BCRs may only be used by group entities located outside the EU',
      'BCRs automatically expire after twelve months and must be renegotiated annually regardless of any changes to the group',
    ],
    correctIndex: 1,
    explanation:
      'Article 47 provides for both controller BCRs (BCR-C) and processor BCRs (BCR-P), each requiring formal approval by a competent supervisory authority through the cooperation and consistency procedure; there is no self-certification route and no automatic twelve-month expiry.',
  },
  {
    id: 'cipp-e-transfers-4',
    domainId: 'cipp-e-transfers',
    prompt:
      'In Case C-311/18 (Schrems II), the CJEU was asked to assess the general validity of Standard Contractual Clauses as a transfer mechanism, and separately the validity of the EU-US Privacy Shield. What was the outcome?',
    choices: [
      'The Court invalidated SCCs entirely while leaving the Privacy Shield intact',
      'The Court upheld the general validity of SCCs, subject to a case-by-case assessment of the destination country\'s laws, while invalidating the Privacy Shield over concerns about US surveillance law',
      'The Court invalidated both SCCs and the Privacy Shield, effectively ending all EU-US personal data transfers',
      'The Court addressed only jurisdictional questions and did not rule on either mechanism\'s validity',
    ],
    correctIndex: 1,
    explanation:
      'Schrems II upheld SCCs as a valid mechanism in principle while requiring exporters to assess, case by case, whether the destination country\'s laws undermine the protections SCCs provide, and separately struck down the Privacy Shield because US surveillance law did not offer essentially equivalent protection.',
  },
  {
    id: 'cipp-e-transfers-5',
    domainId: 'cipp-e-transfers',
    prompt:
      'A transfer impact assessment concludes that a destination country\'s surveillance laws could allow public authorities to access transferred data in a manner not essentially equivalent to EU protections, even with SCCs in place. Per EDPB Recommendations 01/2020, what should the controller do next?',
    choices: [
      'Proceed with the transfer unchanged, since signed SCCs alone always satisfy Chapter V regardless of the assessment\'s findings',
      'Identify and implement supplementary measures — technical (such as strong encryption with keys held outside the destination country), contractual, and/or organizational — that address the specific risk, or suspend the transfer if no effective measures exist',
      'Automatically switch every future transfer to that country to the Article 49 derogations instead',
      'Notify only the affected data subjects, with no need to alter the safeguards themselves',
    ],
    correctIndex: 1,
    explanation:
      'The EDPB\'s six-step recommendations require exporters to layer supplementary measures onto SCCs where the destination country\'s legal regime undermines their effectiveness, and to suspend the transfer if no combination of measures can bring protection up to an essentially equivalent level; Article 49 derogations are not a substitute mechanism for routine transfers.',
  },
  {
    id: 'cipp-e-transfers-6',
    domainId: 'cipp-e-transfers',
    prompt:
      'An EU company\'s support staff use a ticketing system that employees of its parent company, located in a third country with no adequacy decision, can remotely log into and view EU customer data on, without any copy of the data ever being physically sent abroad. Does this arrangement fall within GDPR Chapter V?',
    choices: [
      'No, because Chapter V only covers the physical export of data outside the EU, not remote viewing',
      'Yes — under EDPB guidance, remote access to personal data from a third country constitutes a transfer for Chapter V purposes, even though the data itself remains stored on EU servers',
      'No, because intra-group access is automatically exempt from Chapter V',
      'Yes, but only if the parent company is charged a fee for accessing the data',
    ],
    correctIndex: 1,
    explanation:
      'EDPB Guidelines 05/2021 on the interplay between Article 3 and Chapter V confirm that remote access to EU-stored data from a third country is itself treated as a transfer requiring a Chapter V safeguard, regardless of whether a physical copy leaves the EU or whether any fee changes hands.',
  },
  {
    id: 'cipp-e-transfers-7',
    domainId: 'cipp-e-transfers',
    prompt:
      'An EU company needs to send a one-off set of employee data to a third country to defend itself in ongoing foreign litigation brought by a former employee, with no time to arrange SCCs before an imminent court deadline and no adequacy decision available. Which Article 49 derogation most directly applies?',
    choices: [
      'Necessity for important reasons of public interest recognized in EU or member state law',
      'Necessity for the establishment, exercise, or defense of legal claims',
      'Necessity for the performance of a contract between the controller and the data subject',
      'The vital interests of the data subject where they are incapable of giving consent',
    ],
    correctIndex: 1,
    explanation:
      'Article 49(1)(e) is tailored precisely to legal claims like this litigation defense; the public interest ground under Article 49(1)(d) generally requires specific recognition in EU or member state law and typically applies to government or regulatory cooperation rather than private disputes, and the contract-performance and vital-interests derogations do not fit these facts.',
  },
  {
    id: 'cipp-e-transfers-8',
    domainId: 'cipp-e-transfers',
    prompt:
      'A company transfers HR data from its EU subsidiary to its non-EU parent every payroll cycle, indefinitely, with no adequacy decision available for the destination country. Its legal team proposes relying on the Article 49(1)(b) contract-performance derogation for each monthly transfer going forward. Why is this approach problematic under EDPB guidance?',
    choices: [
      'Article 49(1)(b) requires paying a supervisory authority fee each time it is used',
      'Article 49 derogations are meant to be interpreted restrictively and used for occasional, non-repetitive transfers, not as a substitute for a durable mechanism like SCCs or BCRs for regular, structured transfers',
      'Article 49(1)(b) applies only to transfers of special category data',
      'Article 49 derogations cannot be relied upon by any company with more than 250 employees',
    ],
    correctIndex: 1,
    explanation:
      'EDPB guidance stresses that Article 49 derogations are exceptions to the general rule and should not be used to legitimize regular, repetitive, large-scale transfers such as monthly payroll data flows; a durable safeguard like SCCs or BCRs is the appropriate mechanism for that kind of ongoing intra-group transfer.',
  },

  // Domain 6: cipp-e-enforcement — Regulation & Enforcement
  {
    id: 'cipp-e-enforcement-1',
    domainId: 'cipp-e-enforcement',
    prompt:
      'A retailer has establishments in France, Germany, and Poland and runs a single EU-wide customer database processed centrally from its Paris headquarters, where decisions about processing purposes are made. A German customer complains to the German supervisory authority. What role does the one-stop-shop mechanism play?',
    choices: [
      'The German authority alone must handle the case from start to finish, since the complainant is German',
      'The French authority, as the lead supervisory authority where the main establishment is located, will generally act as the primary decision-maker, coordinating with the German authority as a concerned authority',
      'The one-stop-shop mechanism does not apply because more than two member states are involved',
      'The European Commission automatically takes over the investigation from all national authorities',
    ],
    correctIndex: 1,
    explanation:
      'Under Article 56, the lead supervisory authority is generally that of the controller\'s main establishment (here, France), which coordinates cross-border cases with other concerned authorities such as Germany\'s; involving more than two member states does not disable the mechanism.',
  },
  {
    id: 'cipp-e-enforcement-2',
    domainId: 'cipp-e-enforcement',
    prompt:
      'A lead supervisory authority circulates a draft decision on a cross-border case to other concerned supervisory authorities, several of which raise relevant and reasoned objections that remain unresolved. What happens next under the GDPR\'s cooperation and consistency mechanism?',
    choices: [
      'The lead authority\'s original draft automatically becomes final regardless of the objections',
      'The matter is referred to the EDPB, which adopts a binding decision under Article 65 that the lead authority\'s final decision must reflect',
      'The European Commission issues the final, binding ruling on the matter',
      'Each concerned authority issues its own separate, independently enforceable decision for its own territory',
    ],
    correctIndex: 1,
    explanation:
      'Article 65 gives the EDPB power to adopt a binding decision resolving unresolved, relevant and reasoned objections in the consistency mechanism, which the lead authority must then reflect in its final decision — the Commission has no such adjudicative role, and fragmented parallel national decisions are exactly what the mechanism is designed to prevent.',
  },
  {
    id: 'cipp-e-enforcement-3',
    domainId: 'cipp-e-enforcement',
    prompt:
      'A controller fails to maintain adequate Article 30 records of processing, a documentation failure, and separately relies on no valid legal basis at all for a large-scale processing operation. How does Article 83 tier these two infringements?',
    choices: [
      'Both fall under the same lower fining tier, since both are procedural in nature',
      'The Article 30 record-keeping failure falls under the lower tier (up to €10 million or 2% of global turnover), while processing with no lawful basis falls under the higher tier (up to €20 million or 4% of global turnover), because it violates a core Article 6 condition for lawful processing',
      'Both fall under the higher tier, since the GDPR treats all infringements with equal severity',
      'Neither triggers a fine under Article 83, since both first require a court order',
    ],
    correctIndex: 1,
    explanation:
      'Article 83(4)(a) places obligations such as Article 30 record-keeping in the lower fining tier, while Article 83(5)(a) reserves the higher tier for violations of core provisions including the lawful basis requirements in Article 6, reflecting the greater seriousness of processing entirely without a legal basis.',
  },
  {
    id: 'cipp-e-enforcement-4',
    domainId: 'cipp-e-enforcement',
    prompt:
      'A processor discovers a security incident affecting personal data it processes on behalf of a controller. Under Article 33, what is the processor\'s obligation, and when does the controller\'s own 72-hour notification clock start?',
    choices: [
      'The processor must itself notify the competent supervisory authority within 72 hours of discovering the incident',
      'The processor has no direct duty to notify the supervisory authority; it must notify the controller without undue delay, and the controller\'s 72-hour clock to notify the supervisory authority runs from when the controller itself becomes aware of the breach',
      'The processor must wait for explicit instructions from the controller before taking any action whatsoever',
      'The processor must notify affected data subjects directly within 24 hours of discovery',
    ],
    correctIndex: 1,
    explanation:
      'Article 33(2) obliges the processor to notify the controller without undue delay after becoming aware of a breach, while the standalone duty to notify the supervisory authority under Article 33(1) rests with the controller and is triggered by the controller\'s own awareness, not the processor\'s discovery date.',
  },
  {
    id: 'cipp-e-enforcement-5',
    domainId: 'cipp-e-enforcement',
    prompt:
      'A laptop with an unencrypted export of customers\' names, addresses, and purchase history is stolen from an employee\'s car. In a separate incident, a stolen laptop contains customer data that was strongly encrypted with keys that were never exposed. How does Article 34 likely treat these two incidents?',
    choices: [
      'Both require notifying the affected individuals, since any theft of a device is automatically treated as high risk',
      'The unencrypted breach likely requires notifying affected individuals given the high risk of harm, while the encrypted breach may fall within the Article 34(3)(a) exception because the data was rendered unintelligible to unauthorized persons',
      'Neither requires notifying individuals, since both incidents involved physical theft rather than a remote cyberattack',
      'Only the encrypted breach requires notifying individuals, since encrypted data is inherently treated as more sensitive',
    ],
    correctIndex: 1,
    explanation:
      'Article 34(1) requires notification to individuals only where the breach is likely to result in high risk; Article 34(3)(a) specifically exempts breaches where appropriate protection (such as encryption rendering the data unintelligible) was applied to the affected data, which fits the encrypted-laptop scenario but not the unencrypted one.',
  },
  {
    id: 'cipp-e-enforcement-6',
    domainId: 'cipp-e-enforcement',
    prompt:
      'A bakery chain operates only in Portugal, has no establishments in any other member state, and its processing of customer loyalty-card data has no effect on individuals outside Portugal. Does the one-stop-shop lead supervisory authority mechanism apply to this processing?',
    choices: [
      'Yes, the bakery must still formally designate a lead authority from among all EU member states',
      'No — the one-stop-shop mechanism applies only to cross-border processing; since this processing is purely domestic, the Portuguese authority handles it directly without the lead authority procedure',
      'Yes, because every controller established anywhere in the EU must use the one-stop-shop mechanism regardless of the scope of its processing',
      'No, because purely domestic controllers fall outside any supervisory authority\'s jurisdiction',
    ],
    correctIndex: 1,
    explanation:
      'The one-stop-shop and lead authority concept exists specifically to manage cross-border processing under Article 56; purely domestic processing with no cross-border element is simply supervised directly by the relevant national authority, which retains full jurisdiction.',
  },
  {
    id: 'cipp-e-enforcement-7',
    domainId: 'cipp-e-enforcement',
    prompt:
      'In setting a fine against a controller for a data breach, a supervisory authority notes that the controller self-reported promptly, cooperated fully with the investigation, and had already implemented most recommended technical safeguards, though one gap remained. Under Article 83(2), how should these facts factor in?',
    choices: [
      'They are irrelevant, since Article 83(2) considers only the number of affected data subjects',
      'They are mitigating factors the authority must take into account, alongside the nature, gravity, and duration of the infringement and whether it was intentional or negligent, in setting a fine that remains effective, proportionate, and dissuasive',
      'They automatically eliminate any possibility of a fine being imposed at all',
      'They are relevant only in criminal proceedings, not in setting administrative fines',
    ],
    correctIndex: 1,
    explanation:
      'Article 83(2) lists a broad set of factors — including cooperation, mitigating action, and the degree of prior technical compliance — that authorities must weigh alongside the nature and gravity of the infringement; good-faith cooperation reduces but does not automatically eliminate a fine.',
  },
  {
    id: 'cipp-e-enforcement-8',
    domainId: 'cipp-e-enforcement',
    prompt:
      'A Spanish resident who has been working remotely from Portugal for several months discovers that a controller established solely in Sweden has been misusing her data. Where may she lodge a complaint under Article 77?',
    choices: [
      'Only in Sweden, since that is where the controller is established',
      'Only in Spain, since that is her formal place of residence',
      'With the supervisory authority of her habitual residence, her place of work, or the place of the alleged infringement — potentially Spain, Portugal, or Sweden depending on the facts — not limited to the controller\'s establishment',
      'She cannot lodge a complaint at all unless she first obtains a ruling from a Swedish court',
    ],
    correctIndex: 2,
    explanation:
      'Article 77 lets a data subject lodge a complaint with the supervisory authority of their habitual residence, place of work, or the place of the alleged infringement, regardless of where the controller is established, so more than one authority could have jurisdiction here depending on which location applies.',
  },
]
