import type { Question } from '../../lib/types'

export const cippEQuestions: Question[] = [
  // Domain 1: cipp-e-foundations — Data Protection Laws & Origins
  {
    id: 'cipp-e-foundations-1',
    domainId: 'cipp-e-foundations',
    prompt:
      'Which Council of Europe treaty, opened for signature in 1981, was the first binding international instrument specifically addressing the automatic processing of personal data?',
    choices: [
      'The European Convention on Human Rights',
      'Convention 108',
      'The OECD Privacy Guidelines',
      'The Data Protection Directive (95/46/EC)',
    ],
    correctIndex: 1,
    explanation:
      'Convention 108, adopted by the Council of Europe in 1981, was the first legally binding international agreement dealing specifically with automated processing of personal data, predating both the OECD Guidelines\' broader (non-binding) scope in practice and the EU Directive by over a decade.',
  },
  {
    id: 'cipp-e-foundations-2',
    domainId: 'cipp-e-foundations',
    prompt:
      'Article 8 of the EU Charter of Fundamental Rights is significant in European data protection law primarily because it:',
    choices: [
      'Creates a general right to privacy identical to Article 7 of the Charter',
      'Establishes the protection of personal data as a distinct fundamental right, separate from the right to privacy',
      'Grants the European Commission exclusive power to legislate on data protection',
      'Sets out the specific fines a supervisory authority may impose',
    ],
    correctIndex: 1,
    explanation:
      'Article 8 recognizes data protection as its own fundamental right, distinct from the right to respect for private and family life in Article 7, which is why EU data protection law is treated as a freestanding legal field rather than merely a subset of privacy law.',
  },
  {
    id: 'cipp-e-foundations-3',
    domainId: 'cipp-e-foundations',
    prompt:
      'Before the GDPR became directly applicable in all EU member states, the primary EU-level instrument governing personal data processing was:',
    choices: [
      'The ePrivacy Directive',
      'The Data Protection Directive 95/46/EC',
      'The Charter of Fundamental Rights',
      'The Treaty of Lisbon',
    ],
    correctIndex: 1,
    explanation:
      'Directive 95/46/EC, the Data Protection Directive, governed EU personal data processing from 1995 until it was repealed and replaced by the GDPR in 2018; unlike the GDPR it required transposition into national law, leading to fragmentation across member states.',
  },
  {
    id: 'cipp-e-foundations-4',
    domainId: 'cipp-e-foundations',
    prompt:
      'A key structural difference between the GDPR and its predecessor, the Data Protection Directive, is that the GDPR:',
    choices: [
      'Only applies to public sector bodies',
      'Is a regulation that applies directly in all member states without national transposition',
      'Removed the concept of a data controller',
      'Applies only to companies headquartered in the EU',
    ],
    correctIndex: 1,
    explanation:
      'As a regulation rather than a directive, the GDPR has direct legal effect across all EU member states without needing implementing national legislation, which was the main mechanism used to harmonize an area previously fragmented under the Directive.',
  },
  {
    id: 'cipp-e-foundations-5',
    domainId: 'cipp-e-foundations',
    prompt: 'Under the GDPR, which of the following would NOT generally qualify as "personal data"?',
    choices: [
      'An IP address that can be linked to an identifiable individual',
      'A properly and irreversibly anonymized dataset from which no individual can be re-identified',
      'An employee ID number used internally to identify a staff member',
      'A photograph of a person\'s face stored in a customer database',
    ],
    correctIndex: 1,
    explanation:
      'The GDPR expressly excludes truly and irreversibly anonymized information from its scope because such data can no longer be linked to an identifiable individual, whereas pseudonymized data (like an internal ID) remains personal data since re-identification is still possible.',
  },
  {
    id: 'cipp-e-foundations-6',
    domainId: 'cipp-e-foundations',
    prompt:
      'A US-based online retailer with no EU establishment regularly offers goods for sale to consumers in France and Germany, with prices listed in euros and shipping to those countries. Under the GDPR\'s territorial scope, this company is most likely:',
    choices: [
      'Outside GDPR scope because it has no EU establishment',
      'Subject to the GDPR under Article 3(2) because it offers goods to individuals in the EU',
      'Subject only to French law, not German law',
      'Exempt because it is a small or medium-sized enterprise',
    ],
    correctIndex: 1,
    explanation:
      'Article 3(2) extends the GDPR\'s reach to non-EU controllers that offer goods or services to individuals in the EU; targeting factors such as pricing in euros and shipping to EU member states are strong evidence of such offering, regardless of the company\'s physical location.',
  },
  {
    id: 'cipp-e-foundations-7',
    domainId: 'cipp-e-foundations',
    prompt: 'Which of the following best describes the relationship between the GDPR and national data protection law in EU member states?',
    choices: [
      'The GDPR fully harmonizes every aspect of data protection, leaving no room for national law',
      'The GDPR leaves certain matters, such as processing in the employment context, open for member states to legislate on within limits set by the Regulation',
      'National data protection authorities have been abolished and replaced entirely by the European Commission',
      'Member states may opt out of the GDPR entirely if they already had a strong data protection law',
    ],
    correctIndex: 1,
    explanation:
      'While the GDPR is directly applicable, it contains numerous "opening clauses" (for example, Article 88 on employee data) that allow or require member states to adopt more specific national rules in defined areas, so full uniformity was not the goal.',
  },
  {
    id: 'cipp-e-foundations-8',
    domainId: 'cipp-e-foundations',
    prompt: 'The term "data subject" as used throughout the GDPR refers to:',
    choices: [
      'Any organization that determines the purposes of processing personal data',
      'An identified or identifiable natural person to whom personal data relates',
      'A government body responsible for enforcing data protection law',
      'Any legal entity, including companies, whose data is processed',
    ],
    correctIndex: 1,
    explanation:
      'The GDPR defines "data subject" as an identified or identifiable living natural person; the Regulation protects natural persons only, so legal entities such as corporations do not qualify as data subjects.',
  },

  // Domain 2: cipp-e-controllers-processors — Controllers & Processors
  {
    id: 'cipp-e-controllers-processors-1',
    domainId: 'cipp-e-controllers-processors',
    prompt: 'Under the GDPR, a "controller" is best defined as the entity that:',
    choices: [
      'Physically stores personal data on its servers',
      'Determines the purposes and means of processing personal data',
      'Processes personal data solely on documented instructions from another party',
      'Is appointed by a supervisory authority to oversee compliance',
    ],
    correctIndex: 1,
    explanation:
      'Article 4(7) defines a controller as the natural or legal person that determines the purposes and means of processing, which is the key factor distinguishing a controller from a processor, who acts only on the controller\'s instructions.',
  },
  {
    id: 'cipp-e-controllers-processors-2',
    domainId: 'cipp-e-controllers-processors',
    prompt:
      'A payroll company processes employee salary data strictly according to detailed written instructions from its client company, and has no discretion over why or how the data is used beyond running payroll. The payroll company is best classified as a:',
    choices: ['Controller', 'Joint controller', 'Processor', 'Data subject'],
    correctIndex: 2,
    explanation:
      'Because the payroll company processes data only on the client\'s instructions and does not decide the purposes or essential means of processing, it is acting as a processor, while the client company that determines why the payroll is run remains the controller.',
  },
  {
    id: 'cipp-e-controllers-processors-3',
    domainId: 'cipp-e-controllers-processors',
    prompt: 'Two companies jointly decide to run a shared marketing platform and together determine both the purposes and the essential means of processing customer data collected through it. Under the GDPR, these companies are:',
    choices: [
      'Independent controllers who owe each other no obligations',
      'Joint controllers, who under Article 26 must determine their respective responsibilities in a transparent arrangement',
      'One controller and one processor by default',
      'Exempt from Article 26 because they are private companies',
    ],
    correctIndex: 1,
    explanation:
      'Article 26 applies when two or more controllers jointly determine the purposes and means of processing; they must set out in a transparent arrangement which of them will perform which obligations, particularly regarding data subject rights and transparency information.',
  },
  {
    id: 'cipp-e-controllers-processors-4',
    domainId: 'cipp-e-controllers-processors',
    prompt: 'Which of the following is a mandatory element that Article 28 requires to be included in a contract between a controller and a processor?',
    choices: [
      'A guarantee that the processor will never engage a sub-processor under any circumstances',
      'An obligation on the processor to assist the controller in responding to data subject rights requests',
      'A requirement that the processor be located within the same member state as the controller',
      'A clause fixing the processor\'s liability at a specific monetary cap chosen by the processor',
      ],
    correctIndex: 1,
    explanation:
      'Article 28(3) requires the processing contract to include, among other things, an obligation on the processor to assist the controller with fulfilling its duty to respond to requests exercising data subjects\' rights, taking into account the nature of the processing.',
  },
  {
    id: 'cipp-e-controllers-processors-5',
    domainId: 'cipp-e-controllers-processors',
    prompt: 'A processor wants to engage a new sub-processor to help deliver a cloud storage service. Under Article 28, the processor must generally:',
    choices: [
      'Obtain the controller\'s prior specific or general written authorization before engaging the sub-processor',
      'Notify the relevant supervisory authority directly, bypassing the controller',
      'Simply proceed, since sub-processing is unrestricted under the GDPR',
      'Wait for a decision from the European Data Protection Board',
    ],
    correctIndex: 0,
    explanation:
      'Article 28(2) prohibits a processor from engaging another processor without the controller\'s prior specific or general written authorization, and where general authorization is given, the processor must inform the controller of any intended changes so the controller can object.',
  },
  {
    id: 'cipp-e-controllers-processors-6',
    domainId: 'cipp-e-controllers-processors',
    prompt: 'The GDPR\'s accountability principle, reflected in Article 5(2), primarily requires controllers to:',
    choices: [
      'Publish their internal risk assessments on a public website',
      'Be able to demonstrate compliance with the data protection principles, not merely comply with them',
      'Report annually to the European Commission regardless of any incidents',
      'Appoint a data protection officer in every case, without exception',
    ],
    correctIndex: 1,
    explanation:
      'Accountability under Article 5(2) means a controller must not only comply with the principles in Article 5(1) but must also be able to demonstrate that compliance, typically through documentation, policies, and records such as those required by Article 30.',
  },
  {
    id: 'cipp-e-controllers-processors-7',
    domainId: 'cipp-e-controllers-processors',
    prompt: 'If a processor goes beyond the controller\'s instructions and starts determining its own purposes for using personal data, the GDPR treats the processor as:',
    choices: [
      'Still a processor, since the initial contract governs the relationship',
      'A controller in respect of that processing, and subject to controller obligations for it',
      'Automatically exempt from all obligations',
      'A joint controller with the original controller for all processing activities by default',
    ],
    correctIndex: 1,
    explanation:
      'Article 28(10) makes clear that if a processor infringes the GDPR by determining the purposes and means of processing itself, it is considered a controller in respect of that processing and becomes subject to the corresponding controller obligations and liability.',
  },
  {
    id: 'cipp-e-controllers-processors-8',
    domainId: 'cipp-e-controllers-processors',
    prompt: 'Which record-keeping obligation under Article 30 applies specifically to processors (not just controllers)?',
    choices: [
      'Maintaining a record of all categories of processing carried out on behalf of each controller',
      'Maintaining a record of the legal basis relied upon for each processing purpose',
      'Publishing a data protection impact assessment for every processing activity',
      'Recording the identity of every data subject whose data is processed',
    ],
    correctIndex: 0,
    explanation:
      'Article 30(2) requires processors to maintain a record of all categories of processing activities carried out on behalf of each controller, which is a distinct but parallel obligation to the more detailed record controllers must keep under Article 30(1).',
  },

  // Domain 3: cipp-e-processing — Processing Personal Data
  {
    id: 'cipp-e-processing-1',
    domainId: 'cipp-e-processing',
    prompt: 'Which of the following is one of the six lawful bases for processing personal data listed in Article 6 of the GDPR?',
    choices: [
      'The processing is convenient for the controller\'s business model',
      'The processing is necessary for the performance of a contract to which the data subject is party',
      'The processing has been approved internally by the controller\'s management',
      'The data subject is a customer of the controller',
    ],
    correctIndex: 1,
    explanation:
      'Article 6(1)(b) provides a lawful basis where processing is necessary for the performance of a contract with the data subject, or to take steps at the data subject\'s request prior to entering into a contract; mere convenience or an existing customer relationship is not itself a lawful basis.',
  },
  {
    id: 'cipp-e-processing-2',
    domainId: 'cipp-e-processing',
    prompt: 'A hospital needs to process a patient\'s health records to provide medical treatment. Health data falls under Article 9 as a special category of data. Which Article 9(2) exception is most directly relevant to justify this processing?',
    choices: [
      'Processing necessary for reasons of substantial public interest',
      'Processing necessary for the purposes of preventive or occupational medicine, medical diagnosis, or the provision of health care',
      'Processing based on the data subject\'s political opinions',
      'Processing manifestly made public by the data subject',
    ],
    correctIndex: 1,
    explanation:
      'Article 9(2)(h) specifically permits processing of health data where necessary for medical diagnosis, the provision of health or social care, or treatment, provided it is carried out subject to appropriate safeguards such as professional secrecy obligations.',
  },
  {
    id: 'cipp-e-processing-3',
    domainId: 'cipp-e-processing',
    prompt: 'Under Article 5(1)(c), the principle of "data minimisation" requires that personal data be:',
    choices: [
      'Collected in the smallest possible file size to save storage costs',
      'Adequate, relevant and limited to what is necessary in relation to the purposes for which it is processed',
      'Anonymized within 30 days of collection',
      'Shared only with data protection authorities and no one else',
    ],
    correctIndex: 1,
    explanation:
      'Data minimisation means a controller should collect and retain only the personal data that is adequate, relevant, and necessary for the specified purpose, rather than gathering data broadly on the chance it might become useful later.',
  },
  {
    id: 'cipp-e-processing-4',
    domainId: 'cipp-e-processing',
    prompt: 'For consent to be valid as a lawful basis under the GDPR, it must be all of the following EXCEPT:',
    choices: ['Freely given', 'Specific and informed', 'Unambiguous', 'Permanent and irrevocable'],
    correctIndex: 3,
    explanation:
      'Consent under the GDPR must be freely given, specific, informed, and unambiguous, but it can never be irrevocable — Article 7(3) requires that data subjects be able to withdraw consent at any time, as easily as it was given.',
  },
  {
    id: 'cipp-e-processing-5',
    domainId: 'cipp-e-processing',
    prompt: 'A retailer wants to rely on "legitimate interests" under Article 6(1)(f) to send existing customers marketing about similar products. To do this properly, the retailer should first:',
    choices: [
      'Skip any assessment, since legitimate interests never requires balancing',
      'Conduct a legitimate interests assessment weighing its interests against the impact on data subjects\' rights and freedoms',
      'Obtain explicit written consent regardless, since legitimate interests cannot apply to marketing',
      'Notify the European Data Protection Board before proceeding',
    ],
    correctIndex: 1,
    explanation:
      'Reliance on legitimate interests requires a balancing test (often documented as a legitimate interests assessment) weighing the controller\'s interests against the data subject\'s rights and reasonable expectations; direct marketing is explicitly recognized in Recital 47 as a potential legitimate interest, subject to that balancing and the right to object.',
  },
  {
    id: 'cipp-e-processing-6',
    domainId: 'cipp-e-processing',
    prompt: 'Which of the following is NOT one of the categories of special category data explicitly listed in Article 9 of the GDPR?',
    choices: [
      'Data revealing racial or ethnic origin',
      'Genetic data',
      'Financial account and credit history data',
      'Data concerning a person\'s sex life or sexual orientation',
    ],
    correctIndex: 2,
    explanation:
      'Article 9(1) lists categories such as racial or ethnic origin, genetic data, biometric data used for identification, health data, and data concerning sex life or sexual orientation; financial and credit data is sensitive in a commercial sense but is not a listed special category under Article 9.',
  },
  {
    id: 'cipp-e-processing-7',
    domainId: 'cipp-e-processing',
    prompt: 'The principle of "storage limitation" under Article 5(1)(e) requires that personal data be:',
    choices: [
      'Kept in a form permitting identification of data subjects for no longer than necessary for the purposes for which it is processed',
      'Stored exclusively within the European Economic Area',
      'Deleted automatically after exactly 12 months in all cases',
      'Encrypted at rest at all times',
    ],
    correctIndex: 0,
    explanation:
      'Storage limitation requires controllers to keep personal data in identifiable form only as long as necessary for the purposes of processing, which typically means setting and applying defined retention periods rather than a fixed universal timeframe.',
  },
  {
    id: 'cipp-e-processing-8',
    domainId: 'cipp-e-processing',
    prompt: 'A company collects job applicants\' data for a specific vacancy and later wants to use that same data to build a general talent pool for future, unspecified roles. This scenario is most directly relevant to which Article 5 principle?',
    choices: [
      'Accuracy',
      'Purpose limitation',
      'Integrity and confidentiality',
      'Lawfulness of processing only, with no relevance to purpose limitation',
    ],
    correctIndex: 1,
    explanation:
      'Purpose limitation under Article 5(1)(b) requires that personal data collected for specified, explicit purposes not be further processed in a manner incompatible with those purposes, so reusing applicant data for an open-ended talent pool raises a purpose limitation issue requiring compatibility assessment or a new lawful basis.',
  },

  // Domain 4: cipp-e-subject-rights — Data Subjects' Rights
  {
    id: 'cipp-e-subject-rights-1',
    domainId: 'cipp-e-subject-rights',
    prompt: 'Under Article 15, the right of access entitles a data subject to obtain from the controller:',
    choices: [
      'Only confirmation that processing is or is not taking place, with no further information',
      'Confirmation that their data is being processed, plus access to that data and specified supplementary information such as the purposes of processing',
      'The right to demand the controller cease all processing immediately',
      'A copy of the controller\'s entire internal database, including other individuals\' unrelated records',
    ],
    correctIndex: 1,
    explanation:
      'Article 15 gives data subjects the right to confirmation of whether their data is being processed and, where it is, access to that data along with information such as the purposes of processing, recipients, retention period, and the existence of other rights.',
  },
  {
    id: 'cipp-e-subject-rights-2',
    domainId: 'cipp-e-subject-rights',
    prompt: 'An individual asks an online platform to erase their account data under Article 17. The platform argues it must retain certain transaction records to comply with a statutory tax retention obligation. What is the most accurate outcome?',
    choices: [
      'The platform must comply with the erasure request in full, since Article 17 always overrides other laws',
      'The platform may refuse erasure of the specific records needed to comply with the legal retention obligation, relying on the Article 17(3) exception',
      'The individual\'s request is automatically invalid because they are a platform user',
      'The platform must erase the data but keep an identical backup indefinitely',
    ],
    correctIndex: 1,
    explanation:
      'Article 17(3)(b) provides that the right to erasure does not apply where processing is necessary for compliance with a legal obligation, so the platform can lawfully retain the specific records required for tax law compliance while still erasing other account data no longer needed.',
  },
  {
    id: 'cipp-e-subject-rights-3',
    domainId: 'cipp-e-subject-rights',
    prompt: 'The right to data portability under Article 20 applies to personal data that the data subject has provided to a controller, where the processing is based on:',
    choices: [
      'Any lawful basis whatsoever, including legitimate interests',
      'Consent or a contract, and is carried out by automated means',
      'Only public interest tasks',
      'Legal obligation exclusively',
    ],
    correctIndex: 1,
    explanation:
      'Article 20 restricts portability to data provided by the data subject where processing is based on consent (Article 6(1)(a) or 9(2)(a)) or on a contract (Article 6(1)(b)), and where the processing is carried out by automated means; it does not apply generally to all lawful bases.',
  },
  {
    id: 'cipp-e-subject-rights-4',
    domainId: 'cipp-e-subject-rights',
    prompt: 'When a controller processes personal data based on legitimate interests for direct marketing purposes, and the data subject objects under Article 21(2), the controller must:',
    choices: [
      'Continue processing if it believes its interests are compelling enough',
      'Stop processing the data for direct marketing purposes, as this objection right is absolute in that context',
      'Only stop if the data subject also files a complaint with a supervisory authority',
      'Charge the data subject a fee to process the objection',
    ],
    correctIndex: 1,
    explanation:
      'Article 21(2) and (3) provide that where a data subject objects to processing for direct marketing purposes, the controller must stop such processing; unlike objections based on the general legitimate interests/public task grounds under Article 21(1), this right is not subject to a balancing test.',
  },
  {
    id: 'cipp-e-subject-rights-5',
    domainId: 'cipp-e-subject-rights',
    prompt: 'Article 22 gives data subjects a right related to automated decision-making, including profiling. This right most accurately means the data subject has:',
    choices: [
      'An absolute right never to be subject to any form of profiling under any circumstances',
      'The right not to be subject to a decision based solely on automated processing, including profiling, that produces legal or similarly significant effects, subject to specific exceptions',
      'The right to demand a human review every single automated calculation performed by a company, regardless of impact',
      'No rights at all, since Article 22 only applies to public authorities',
    ],
    correctIndex: 1,
    explanation:
      'Article 22(1) grants a right not to be subject to solely automated decisions, including profiling, that produce legal effects or similarly significantly affect the individual, but Article 22(2) allows exceptions such as necessity for a contract, authorization by law, or explicit consent, generally coupled with safeguards like a right to obtain human intervention.',
  },
  {
    id: 'cipp-e-subject-rights-6',
    domainId: 'cipp-e-subject-rights',
    prompt: 'A data subject discovers that a controller holds an incorrect date of birth on file. Which right allows them to have this corrected?',
    choices: ['Right to erasure', 'Right to rectification', 'Right to restriction of processing', 'Right to object'],
    correctIndex: 1,
    explanation:
      'Article 16 provides the right to rectification, entitling data subjects to have inaccurate personal data concerning them corrected without undue delay, and to have incomplete data completed.',
  },
  {
    id: 'cipp-e-subject-rights-7',
    domainId: 'cipp-e-subject-rights',
    prompt: 'Under Article 18, a data subject may request "restriction of processing" in certain circumstances, such as while the accuracy of their data is being contested. During restriction, the controller may generally still:',
    choices: [
      'Freely process the data for any purpose it chooses',
      'Only store the data, and otherwise process it solely with the data subject\'s consent or for limited grounds such as legal claims',
      'Permanently delete the data instead of restricting it',
      'Transfer the data to any third party without limitation',
    ],
    correctIndex: 1,
    explanation:
      'Article 18(2) provides that once processing is restricted, the data may generally only be stored, and otherwise processed only with the data subject\'s consent, for the establishment, exercise or defense of legal claims, for the protection of another person\'s rights, or for important public interest reasons.',
  },
  {
    id: 'cipp-e-subject-rights-8',
    domainId: 'cipp-e-subject-rights',
    prompt: 'Under the GDPR, how long does a controller generally have to respond to a data subject access request, absent an extension?',
    choices: ['72 hours', 'One month', 'Six months', 'One year'],
    correctIndex: 1,
    explanation:
      'Article 12(3) requires controllers to respond to requests exercising data subject rights, including access requests, without undue delay and in any event within one month of receipt, extendable by a further two months for complex or numerous requests with notification to the data subject.',
  },

  // Domain 5: cipp-e-transfers — International Data Transfers
  {
    id: 'cipp-e-transfers-1',
    domainId: 'cipp-e-transfers',
    prompt: 'An "adequacy decision" issued by the European Commission under Article 45 of the GDPR has the effect that:',
    choices: [
      'Personal data may be transferred to the recipient country without requiring any additional safeguard, as if the transfer were within the EU',
      'Standard Contractual Clauses must still be signed for every transfer',
      'The recipient country must additionally sign Binding Corporate Rules',
      'It only applies to transfers of special category data',
    ],
    correctIndex: 0,
    explanation:
      'Where the European Commission has determined that a third country, territory, or sector ensures an adequate level of data protection under Article 45, personal data can flow to that destination without needing further transfer safeguards such as SCCs.',
  },
  {
    id: 'cipp-e-transfers-2',
    domainId: 'cipp-e-transfers',
    prompt: 'Standard Contractual Clauses (SCCs) under Article 46 serve as a transfer mechanism primarily by:',
    choices: [
      'Replacing the need for any lawful basis for the underlying processing',
      'Providing standardized, Commission-approved contractual commitments that impose data protection obligations on the parties to a transfer',
      'Automatically granting adequacy status to the destination country',
      'Applying exclusively to transfers between EU member states',
    ],
    correctIndex: 1,
    explanation:
      'SCCs are contractual clauses adopted or approved by the European Commission that data exporters and importers can incorporate into their agreements to provide appropriate safeguards for personal data transferred to third countries lacking an adequacy decision.',
  },
  {
    id: 'cipp-e-transfers-3',
    domainId: 'cipp-e-transfers',
    prompt: 'Binding Corporate Rules (BCRs) are a transfer mechanism most suited to:',
    choices: [
      'A one-off transfer between two unrelated companies',
      'Intra-group transfers of personal data within a multinational corporate group, once approved by a competent supervisory authority',
      'Transfers where no safeguards are needed at all',
      'Transfers exclusively involving special category data of employees only',
    ],
    correctIndex: 1,
    explanation:
      'BCRs, provided for in Article 47, are internal rules adopted by a corporate group for transfers of personal data among its own entities across borders, and must be approved by the competent supervisory authority through the BCR cooperation procedure before they can be relied on.',
  },
  {
    id: 'cipp-e-transfers-4',
    domainId: 'cipp-e-transfers',
    prompt: 'In the "Schrems II" ruling (Case C-311/18), the Court of Justice of the European Union primarily addressed:',
    choices: [
      'The validity of the original EU-US Safe Harbor framework only',
      'The validity of Standard Contractual Clauses generally, and invalidated the EU-US Privacy Shield due to concerns about US government surveillance access',
      'Whether the GDPR applies to non-EU controllers at all',
      'The maximum administrative fine a supervisory authority may impose',
    ],
    correctIndex: 1,
    explanation:
      'In Schrems II, the CJEU upheld the validity of SCCs in principle but invalidated the EU-US Privacy Shield, finding that US surveillance laws did not provide protections essentially equivalent to EU law, and held that exporters must assess, on a case-by-case basis, whether SCCs provide effective protection in the destination country, adding supplementary measures where needed.',
  },
  {
    id: 'cipp-e-transfers-5',
    domainId: 'cipp-e-transfers',
    prompt: 'Following Schrems II, an organization relying on SCCs to transfer data to a third country should, as a best practice:',
    choices: [
      'Assume SCCs alone are always sufficient and take no further action',
      'Conduct a transfer impact assessment evaluating the destination country\'s laws and, where necessary, implement supplementary measures',
      'Cease all international transfers permanently',
      'Rely solely on the recipient\'s internal privacy policy as sufficient protection',
    ],
    correctIndex: 1,
    explanation:
      'Post-Schrems II guidance from the EDPB calls for exporters to conduct a transfer impact assessment examining the legal regime and surveillance practices of the destination country, and to implement supplementary technical, contractual, or organizational measures where the assessment reveals the SCCs alone would not provide equivalent protection.',
  },
  {
    id: 'cipp-e-transfers-6',
    domainId: 'cipp-e-transfers',
    prompt: 'Chapter V of the GDPR, governing international data transfers, applies to which of the following?',
    choices: [
      'Transfers of personal data from a controller or processor in the EU to a recipient in a third country or an international organization',
      'Only transfers of anonymized data',
      'Only transfers made by public authorities',
      'Purely domestic transfers between two companies established in the same EU member state',
    ],
    correctIndex: 0,
    explanation:
      'Chapter V (Articles 44-50) specifically regulates transfers of personal data to third countries or international organizations, ensuring that the level of protection guaranteed by the GDPR is not undermined once data leaves the EEA.',
  },
  {
    id: 'cipp-e-transfers-7',
    domainId: 'cipp-e-transfers',
    prompt: 'Article 49 provides derogations that may permit an international transfer in the absence of an adequacy decision or appropriate safeguards. Which of the following is one such derogation?',
    choices: [
      'The transfer is more convenient for the controller\'s IT infrastructure',
      'The transfer is necessary for the performance of a contract between the data subject and the controller',
      'The recipient country has a comparable population size to an EU member state',
      'The controller has fewer than 250 employees',
    ],
    correctIndex: 1,
    explanation:
      'Article 49(1)(b) allows transfers necessary for the performance of a contract between the data subject and the controller, or for pre-contractual measures taken at the data subject\'s request; these derogations are intended to be used narrowly for specific, occasional transfers rather than as a general substitute for other transfer mechanisms.',
  },
  {
    id: 'cipp-e-transfers-8',
    domainId: 'cipp-e-transfers',
    prompt: 'A company wants to transfer employee personal data from its EU subsidiary to its parent company in a third country with no adequacy decision, on an ongoing, systematic basis. Which mechanism is generally most appropriate for this kind of recurring, structured intra-group transfer?',
    choices: [
      'Relying repeatedly on the Article 49 derogation for occasional transfers',
      'Binding Corporate Rules or Standard Contractual Clauses, each providing appropriate, durable safeguards for the ongoing transfer',
      'Simply obtaining verbal assurance from the parent company',
      'No mechanism is required if the parent and subsidiary share a brand name',
    ],
    correctIndex: 1,
    explanation:
      'For regular, structured transfers such as ongoing intra-group HR data flows, mechanisms like BCRs or SCCs are appropriate because they provide durable, documented safeguards, whereas Article 49 derogations are meant to be interpreted restrictively and used only for occasional, non-repetitive transfers.',
  },

  // Domain 6: cipp-e-enforcement — Regulation & Enforcement
  {
    id: 'cipp-e-enforcement-1',
    domainId: 'cipp-e-enforcement',
    prompt: 'The "one-stop-shop" mechanism under the GDPR is designed to:',
    choices: [
      'Require a controller to deal separately with every supervisory authority in every member state where it processes data',
      'Allow a controller or processor with establishments in multiple member states to generally deal with a single lead supervisory authority for cross-border processing',
      'Give the European Commission direct enforcement power over all cases',
      'Apply only to data breaches, not to other compliance matters',
    ],
    correctIndex: 1,
    explanation:
      'The one-stop-shop mechanism, set out in Article 56, allows a controller or processor engaged in cross-border processing to have its lead supervisory authority (typically where its main establishment is located) act as the primary contact and decision-maker, coordinating with other concerned authorities.',
  },
  {
    id: 'cipp-e-enforcement-2',
    domainId: 'cipp-e-enforcement',
    prompt: 'The European Data Protection Board (EDPB) is primarily responsible for:',
    choices: [
      'Issuing individual administrative fines directly against companies',
      'Ensuring consistent application of the GDPR across the EU, including through guidelines and binding decisions in dispute resolution between supervisory authorities',
      'Acting as the sole data protection authority for all of the EU',
      'Approving national legislation before it can be adopted',
    ],
    correctIndex: 1,
    explanation:
      'The EDPB, established under Article 68, is composed of representatives of national supervisory authorities and the European Data Protection Supervisor, and its role is to promote consistent GDPR application through guidelines, opinions, and binding decisions in the Article 65 dispute resolution procedure, rather than issuing fines itself.',
  },
  {
    id: 'cipp-e-enforcement-3',
    domainId: 'cipp-e-enforcement',
    prompt: 'Under Article 83, the higher tier of administrative fines (up to 20 million euros or 4% of global annual turnover, whichever is greater) applies to infringements of which type of provision?',
    choices: [
      'Only provisions relating to record-keeping under Article 30',
      'Core provisions such as the basic principles for processing, lawful basis requirements, and data subjects\' rights',
      'Only provisions relating to cookie banners',
      'Only breaches affecting fewer than 100 data subjects',
    ],
    correctIndex: 1,
    explanation:
      'Article 83(5) reserves the higher fining tier for the most serious infringements, including violations of the basic principles for processing (Article 5), the conditions for lawful processing (Article 6), and data subjects\' rights, reflecting their central importance to the GDPR\'s protective scheme.',
  },
  {
    id: 'cipp-e-enforcement-4',
    domainId: 'cipp-e-enforcement',
    prompt: 'Under Article 33, a controller that experiences a personal data breach must generally notify the competent supervisory authority within:',
    choices: [
      '24 hours of becoming aware of the breach, with no exceptions',
      '72 hours of becoming aware of the breach, unless it is unlikely to result in a risk to individuals\' rights and freedoms',
      '30 days of becoming aware of the breach',
      'Only when requested to do so by the supervisory authority',
    ],
    correctIndex: 1,
    explanation:
      'Article 33(1) requires notification to the supervisory authority without undue delay and, where feasible, within 72 hours of the controller becoming aware of the breach, unless the breach is unlikely to result in a risk to the rights and freedoms of natural persons.',
  },
  {
    id: 'cipp-e-enforcement-5',
    domainId: 'cipp-e-enforcement',
    prompt: 'Under Article 34, a controller must communicate a personal data breach directly to affected data subjects when:',
    choices: [
      'Any breach occurs, regardless of severity',
      'The breach is likely to result in a high risk to the rights and freedoms of natural persons',
      'The supervisory authority has fewer than five staff members',
      'The breach involves fewer than ten records',
    ],
    correctIndex: 1,
    explanation:
      'Article 34(1) requires controllers to communicate a breach to the affected individuals, without undue delay, only where the breach is likely to result in a high risk to their rights and freedoms, a higher threshold than the general notification duty to the supervisory authority under Article 33.',
  },
  {
    id: 'cipp-e-enforcement-6',
    domainId: 'cipp-e-enforcement',
    prompt: 'A company\'s "lead supervisory authority" for the purposes of the one-stop-shop mechanism is generally determined by:',
    choices: [
      'Where the largest number of the company\'s customers are located',
      'The location of the company\'s main establishment, meaning the place of its central administration in the EU (or where decisions on processing purposes and means are taken)',
      'Whichever supervisory authority first opens an investigation',
      'A random allocation by the European Commission',
    ],
    correctIndex: 1,
    explanation:
      'Under Article 56 and the related definitions in Article 4(16), the lead supervisory authority is generally that of the member state where the controller\'s main establishment, i.e., its central administration in the EU or the place where key processing decisions are made, is located.',
  },
  {
    id: 'cipp-e-enforcement-7',
    domainId: 'cipp-e-enforcement',
    prompt: 'When setting the amount of an administrative fine under Article 83(2), a supervisory authority is required to take into account factors including:',
    choices: [
      'Only the size of the controller\'s marketing budget',
      'The nature, gravity and duration of the infringement, and whether it was intentional or negligent, among other listed factors',
      'The controller\'s stock price on the day of the decision',
      'Exclusively the number of employees at the company',
    ],
    correctIndex: 1,
    explanation:
      'Article 83(2) lists a range of factors supervisory authorities must consider, including the nature, gravity and duration of the infringement, whether it was intentional or negligent, any mitigating action taken, and the degree of cooperation with the authority, to ensure fines are effective, proportionate and dissuasive.',
  },
  {
    id: 'cipp-e-enforcement-8',
    domainId: 'cipp-e-enforcement',
    prompt: 'A data subject in one EU member state wishes to lodge a complaint about a controller established in a different member state. Under the GDPR, the data subject may generally:',
    choices: [
      'Only complain to the supervisory authority in the member state where the controller is established',
      'Lodge a complaint with the supervisory authority of their own habitual residence, place of work, or the place of the alleged infringement',
      'Not lodge any complaint, since only the controller\'s national authority has jurisdiction',
      'Only complain directly to the European Data Protection Board',
    ],
    correctIndex: 1,
    explanation:
      'Article 77 gives data subjects the right to lodge a complaint with a supervisory authority in the member state of their habitual residence, place of work, or place of the alleged infringement, regardless of where the controller or processor is established, with that authority then coordinating with the lead authority as needed.',
  },
]
