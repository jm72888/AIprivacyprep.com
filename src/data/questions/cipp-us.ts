import type { Question } from '../../lib/types'

export const cippUsQuestions: Question[] = [
  // ---------------------------------------------------------------------
  // Domain: Introduction to the US Privacy Environment
  // ---------------------------------------------------------------------
  {
    id: 'cipp-us-intro-1',
    domainId: 'cipp-us-intro',
    prompt:
      'Which term best describes the overall structure of privacy regulation in the United States, as opposed to the omnibus approach used in the European Union?',
    choices: [
      'A unified, single-statute model',
      'A sectoral (sector-by-sector) model',
      'A purely self-executing treaty model',
      'A single-regulator command-and-control model',
    ],
    correctIndex: 1,
    explanation:
      'The US relies on a patchwork of sector-specific and state-level laws (e.g., HIPAA for health data, GLBA for financial data) rather than one comprehensive federal privacy statute, making it a sectoral system.',
  },
  {
    id: 'cipp-us-intro-2',
    domainId: 'cipp-us-intro',
    prompt:
      'Which federal agency has historically been the primary enforcer of consumer privacy and data security through its authority over "unfair or deceptive acts or practices"?',
    choices: [
      'Department of Justice',
      'Federal Communications Commission',
      'Federal Trade Commission',
      'Securities and Exchange Commission',
    ],
    correctIndex: 2,
    explanation:
      'The FTC uses Section 5 of the FTC Act to bring enforcement actions against companies whose privacy or data security practices are unfair or deceptive, making it the leading general-purpose privacy regulator in the US.',
  },
  {
    id: 'cipp-us-intro-3',
    domainId: 'cipp-us-intro',
    prompt:
      'A company publishes a privacy policy promising it will never sell customer data, then sells that data to a marketing firm. Under FTC enforcement practice, this is most likely to be characterized as which type of violation?',
    choices: [
      'An unfair practice only',
      'A deceptive practice',
      'A breach of fiduciary duty',
      'A violation of the Fourth Amendment',
    ],
    correctIndex: 1,
    explanation:
      'Failing to honor a stated privacy promise is a classic example of a "deceptive" practice under Section 5, since it misleads consumers about how their information will actually be used.',
  },
  {
    id: 'cipp-us-intro-4',
    domainId: 'cipp-us-intro',
    prompt:
      'The Fair Information Practice Principles (FIPPs) most directly influenced which of the following?',
    choices: [
      'The drafting of criminal wiretap statutes',
      'The design of many modern privacy frameworks, including notice, choice, and access concepts',
      'The federal minimum wage laws',
      'The structure of the US patent system',
    ],
    correctIndex: 1,
    explanation:
      'FIPPs, first articulated in a 1973 US government report, established foundational concepts such as notice, choice, access, and security that underpin many later privacy laws and frameworks worldwide.',
  },
  {
    id: 'cipp-us-intro-5',
    domainId: 'cipp-us-intro',
    prompt:
      'Under the US common law tradition, which of the following is a recognized privacy-related tort?',
    choices: [
      'Intrusion upon seclusion',
      'Negligent misrepresentation of contract terms',
      'Breach of the implied warranty of merchantability',
      'Unjust enrichment',
    ],
    correctIndex: 0,
    explanation:
      'Intrusion upon seclusion is one of the four privacy torts recognized in US common law (alongside public disclosure of private facts, false light, and appropriation), addressing intentional intrusion into a person\'s private affairs.',
  },
  {
    id: 'cipp-us-intro-6',
    domainId: 'cipp-us-intro',
    prompt:
      'Industry self-regulatory programs, such as trade association codes of conduct, primarily serve which function in the US privacy landscape?',
    choices: [
      'They replace the need for any state legislation',
      'They supplement statutory law by creating voluntary standards, often enforceable by the FTC if violated',
      'They give companies immunity from all privacy litigation',
      'They automatically preempt federal law',
    ],
    correctIndex: 1,
    explanation:
      'Self-regulatory codes are voluntary, but once a company publicly commits to one, failing to comply can be treated as a deceptive practice enforceable by the FTC, giving such codes real practical weight.',
  },
  {
    id: 'cipp-us-intro-7',
    domainId: 'cipp-us-intro',
    prompt:
      'Which of the following best explains why the United States generally has not been recognized by the European Commission as providing "adequate" data protection under EU law?',
    choices: [
      'The US has no criminal justice system',
      'US law lacks a single comprehensive federal data protection statute and independent oversight authority comparable to EU standards',
      'The US does not allow any cross-border data transfers',
      'The US requires all companies to store data only domestically',
    ],
    correctIndex: 1,
    explanation:
      'The EU\'s adequacy standard looks for comprehensive, consistently enforced protections and independent oversight; the US sectoral approach and lack of a single supervisory authority have historically fallen short of that standard, prompting mechanisms like the EU-US Data Privacy Framework.',
  },
  {
    id: 'cipp-us-intro-8',
    domainId: 'cipp-us-intro',
    prompt:
      'A consumer advocacy group petitions a federal agency to investigate a mobile app for collecting more location data than disclosed in its privacy notice. Which legal theory most directly supports the agency taking action?',
    choices: [
      'The app violated the Takings Clause of the Fifth Amendment',
      'The app engaged in a deceptive practice by not matching its actual data collection to its disclosed practices',
      'The app violated the dormant Commerce Clause',
      'The app committed a violation of the Sherman Antitrust Act',
    ],
    correctIndex: 1,
    explanation:
      'When actual data practices diverge from what a privacy notice discloses, this creates a deceptive practice claim, which is the FTC\'s primary tool for consumer privacy enforcement.',
  },

  // ---------------------------------------------------------------------
  // Domain: Limits on Private-Sector Collection & Use of Data
  // ---------------------------------------------------------------------
  {
    id: 'cipp-us-private-sector-1',
    domainId: 'cipp-us-private-sector',
    prompt:
      'A landlord uses a tenant screening report from a consumer reporting agency to deny a rental application. Which federal law governs the landlord\'s obligation to notify the applicant of the adverse action?',
    choices: [
      'Gramm-Leach-Bliley Act',
      'Fair Credit Reporting Act',
      'Fair Housing Act only',
      'Children\'s Online Privacy Protection Act',
    ],
    correctIndex: 1,
    explanation:
      'The FCRA governs consumer reports used for purposes like tenant screening and requires an adverse action notice, including the name of the reporting agency and the consumer\'s right to dispute inaccurate information.',
  },
  {
    id: 'cipp-us-private-sector-2',
    domainId: 'cipp-us-private-sector',
    prompt:
      'Under the Gramm-Leach-Bliley Act (GLBA) Safeguards Rule, financial institutions are primarily required to do what?',
    choices: [
      'Obtain opt-in consent before collecting any customer data',
      'Implement a comprehensive written information security program to protect customer financial data',
      'Publish quarterly financial statements to the SEC',
      'Delete all customer records after account closure',
    ],
    correctIndex: 1,
    explanation:
      'The GLBA Safeguards Rule requires covered financial institutions to develop, implement, and maintain a written information security program reasonably designed to protect nonpublic personal information.',
  },
  {
    id: 'cipp-us-private-sector-3',
    domainId: 'cipp-us-private-sector',
    prompt:
      'A hospital shares a patient\'s treatment records with a billing contractor that processes insurance claims on the hospital\'s behalf. Under HIPAA, what is this contractor considered?',
    choices: [
      'A covered entity',
      'A business associate',
      'A data fiduciary',
      'A third-party beneficiary',
    ],
    correctIndex: 1,
    explanation:
      'Under HIPAA, a business associate is a person or entity that performs functions involving the use or disclosure of protected health information on behalf of a covered entity, and must sign a business associate agreement.',
  },
  {
    id: 'cipp-us-private-sector-4',
    domainId: 'cipp-us-private-sector',
    prompt:
      'An operator of a website aimed at general audiences discovers that a significant portion of its users are children under 13 and that it has been collecting their email addresses without parental consent. Which federal law has likely been violated?',
    choices: [
      'COPPA (Children\'s Online Privacy Protection Act)',
      'FERPA (Family Educational Rights and Privacy Act)',
      'CAN-SPAM Act',
      'TCPA (Telephone Consumer Protection Act)',
    ],
    correctIndex: 0,
    explanation:
      'COPPA requires operators of websites or online services that collect personal information from children under 13 (including those with actual knowledge of such users) to obtain verifiable parental consent before collection.',
  },
  {
    id: 'cipp-us-private-sector-5',
    domainId: 'cipp-us-private-sector',
    prompt:
      'A company uses an autodialer to send unsolicited marketing text messages to consumers\' cell phones without prior express consent. Which law most directly addresses this practice?',
    choices: [
      'CAN-SPAM Act',
      'Video Privacy Protection Act',
      'Telephone Consumer Protection Act (TCPA)',
      'Fair Debt Collection Practices Act',
    ],
    correctIndex: 2,
    explanation:
      'The TCPA restricts the use of automated telephone dialing systems and prerecorded messages, including text messages, to cell phones without the recipient\'s prior express consent.',
  },
  {
    id: 'cipp-us-private-sector-6',
    domainId: 'cipp-us-private-sector',
    prompt:
      'Under the CAN-SPAM Act, which of the following is a requirement for commercial email senders?',
    choices: [
      'Obtain opt-in consent before sending any commercial email',
      'Include a functioning opt-out mechanism and honor opt-out requests within a reasonable time',
      'Encrypt all commercial emails in transit',
      'Register with the FTC before sending marketing emails',
    ],
    correctIndex: 1,
    explanation:
      'CAN-SPAM is primarily an opt-out (not opt-in) regime requiring accurate header information, clear identification as an advertisement, a valid physical address, and a working mechanism to opt out of future emails, which must be honored within 10 business days.',
  },
  {
    id: 'cipp-us-private-sector-7',
    domainId: 'cipp-us-private-sector',
    prompt:
      'A streaming video service discloses a subscriber\'s list of rented movie titles to a data broker without consent. Which law is most directly implicated?',
    choices: [
      'Video Privacy Protection Act (VPPA)',
      'Driver\'s Privacy Protection Act',
      'Electronic Communications Privacy Act',
      'Right to Financial Privacy Act',
    ],
    correctIndex: 0,
    explanation:
      'The VPPA restricts the disclosure of a consumer\'s video rental or viewing history by "video tape service providers," a concept that courts have extended to cover streaming services in many contexts.',
  },
  {
    id: 'cipp-us-private-sector-8',
    domainId: 'cipp-us-private-sector',
    prompt:
      'A bank wants to share a customer\'s account transaction history with an unaffiliated marketing company for the marketing company\'s own use. Under GLBA\'s Privacy Rule, what must the bank generally do first?',
    choices: [
      'Nothing; GLBA does not restrict sharing with unaffiliated third parties',
      'Give the customer notice and an opportunity to opt out of the disclosure',
      'Obtain a court order authorizing the disclosure',
      'Report the disclosure to the Consumer Financial Protection Bureau within 24 hours',
    ],
    correctIndex: 1,
    explanation:
      'GLBA\'s Privacy Rule generally requires financial institutions to provide notice and an opt-out opportunity before sharing nonpublic personal information with unaffiliated third parties for their own marketing purposes.',
  },

  // ---------------------------------------------------------------------
  // Domain: Government & Court Access to Private-Sector Info
  // ---------------------------------------------------------------------
  {
    id: 'cipp-us-government-access-1',
    domainId: 'cipp-us-government-access',
    prompt:
      'Which constitutional provision generally protects individuals against unreasonable government searches and seizures, forming the basis for many US government-access privacy doctrines?',
    choices: [
      'First Amendment',
      'Fourth Amendment',
      'Fifth Amendment',
      'Fourteenth Amendment',
    ],
    correctIndex: 1,
    explanation:
      'The Fourth Amendment protects against unreasonable searches and seizures and generally requires a warrant based on probable cause, underpinning much of US law on government access to private information.',
  },
  {
    id: 'cipp-us-government-access-2',
    domainId: 'cipp-us-government-access',
    prompt:
      'Under the Stored Communications Act (part of ECPA), what is generally required for the government to compel disclosure of the contents of emails held by a provider that have been in electronic storage for 180 days or less?',
    choices: [
      'A simple subpoena with no judicial involvement',
      'A search warrant based on probable cause',
      'A verbal request to the service provider',
      'Nothing; such content is not protected',
    ],
    correctIndex: 1,
    explanation:
      'The SCA generally requires a warrant supported by probable cause for the government to compel disclosure of the contents of communications in electronic storage for 180 days or less, reflecting a higher protection standard for more recent communications.',
  },
  {
    id: 'cipp-us-government-access-3',
    domainId: 'cipp-us-government-access',
    prompt:
      'The Foreign Intelligence Surveillance Act (FISA) primarily governs which type of government surveillance activity?',
    choices: [
      'Domestic criminal wiretaps for ordinary law enforcement investigations',
      'Surveillance conducted for foreign intelligence purposes, often involving a specialized court',
      'Employer monitoring of employee email',
      'State-level license plate reader programs',
    ],
    correctIndex: 1,
    explanation:
      'FISA establishes procedures for electronic surveillance and physical searches conducted to gather foreign intelligence information, with oversight provided by the specialized Foreign Intelligence Surveillance Court (FISC).',
  },
  {
    id: 'cipp-us-government-access-4',
    domainId: 'cipp-us-government-access',
    prompt:
      'A national security letter (NSL) issued to an internet service provider typically compels disclosure of what type of information?',
    choices: [
      'The full content of a user\'s stored emails',
      'Non-content subscriber and transactional records',
      'Biometric data collected at airports',
      'Tax return information held by the IRS',
    ],
    correctIndex: 1,
    explanation:
      'NSLs are administrative demands that typically compel disclosure of non-content information such as subscriber name, address, and billing records, rather than the content of communications, and often come with a gag order.',
  },
  {
    id: 'cipp-us-government-access-5',
    domainId: 'cipp-us-government-access',
    prompt:
      'In Carpenter v. United States, the Supreme Court held that the government generally needs a warrant to obtain what type of records?',
    choices: [
      'Publicly posted social media content',
      'Historical cell-site location information held by a wireless carrier',
      'Corporate tax filings',
      'Public property deed records',
    ],
    correctIndex: 1,
    explanation:
      'In Carpenter (2018), the Supreme Court held that accessing historical cell-site location records revealing a person\'s movements over an extended period generally requires a warrant, limiting application of the third-party doctrine in that context.',
  },
  {
    id: 'cipp-us-government-access-6',
    domainId: 'cipp-us-government-access',
    prompt:
      'Under the third-party doctrine as traditionally applied prior to more recent limitations, why did courts historically find reduced Fourth Amendment protection for records held by a bank or phone company?',
    choices: [
      'Because such records are automatically classified as public records',
      'Because individuals were considered to have no reasonable expectation of privacy in information voluntarily conveyed to a third party',
      'Because banks and phone companies are considered government agencies',
      'Because the Fifth Amendment only protects tangible property',
    ],
    correctIndex: 1,
    explanation:
      'The third-party doctrine held that a person who voluntarily shares information with a third party (such as a bank) generally assumes the risk that the third party may share that information with the government, reducing Fourth Amendment protection, though this has since been narrowed in cases like Carpenter.',
  },
  {
    id: 'cipp-us-government-access-7',
    domainId: 'cipp-us-government-access',
    prompt:
      'A law enforcement agency wants real-time access to the content of a suspect\'s ongoing phone calls. Which legal instrument is generally required under the Wiretap Act (Title III of ECPA)?',
    choices: [
      'A simple subpoena',
      'A super warrant with heightened procedural requirements, such as a showing of necessity and minimization procedures',
      'No legal process at all, since phone calls are not protected',
      'A National Security Letter',
    ],
    correctIndex: 1,
    explanation:
      'Title III imposes some of the strictest requirements in US surveillance law for real-time interception of wire communications, requiring a court order that shows probable cause, necessity, and includes minimization procedures.',
  },
  {
    id: 'cipp-us-government-access-8',
    domainId: 'cipp-us-government-access',
    prompt:
      'A grand jury issues a subpoena to a cloud storage provider seeking a customer\'s basic subscriber information (name, address, and length of service). Under the Stored Communications Act, what standard typically applies to this kind of request?',
    choices: [
      'A warrant based on probable cause is always required',
      'A subpoena is generally sufficient for basic subscriber information',
      'The customer must personally consent before any disclosure',
      'Such requests are categorically prohibited under ECPA',
    ],
    correctIndex: 1,
    explanation:
      'The SCA sets a tiered structure of legal process, and basic subscriber information can generally be obtained with a subpoena, a lower threshold than the warrant required for content of communications.',
  },

  // ---------------------------------------------------------------------
  // Domain: Workplace Privacy
  // ---------------------------------------------------------------------
  {
    id: 'cipp-us-workplace-1',
    domainId: 'cipp-us-workplace',
    prompt:
      'An employer wants to run a pre-employment background check on a job candidate through a third-party consumer reporting agency. Under the FCRA, what must the employer do before obtaining the report?',
    choices: [
      'Nothing; employer background checks are exempt from the FCRA',
      'Provide a clear written disclosure and obtain the candidate\'s written authorization',
      'Notify the candidate\'s current employer',
      'File a report with the EEOC',
    ],
    correctIndex: 1,
    explanation:
      'The FCRA requires employers to provide a standalone written disclosure that a background check may be obtained and to get the candidate\'s written authorization before procuring a consumer report for employment purposes.',
  },
  {
    id: 'cipp-us-workplace-2',
    domainId: 'cipp-us-workplace',
    prompt:
      'Which of the following best describes the general legal standard for an employer monitoring employee email sent through company-owned systems in most US states?',
    choices: [
      'It is categorically illegal without a court order',
      'Employers generally have significant latitude to monitor, especially when a policy notifies employees of monitoring and reduces any reasonable expectation of privacy',
      'It is only allowed if the employee is suspected of a felony',
      'It requires the same warrant standard as law enforcement searches',
    ],
    correctIndex: 1,
    explanation:
      'US employers generally have broad ability to monitor communications on company-owned systems, and providing a clear monitoring policy further reduces employees\' reasonable expectation of privacy, limiting related legal claims.',
  },
  {
    id: 'cipp-us-workplace-3',
    domainId: 'cipp-us-workplace',
    prompt:
      'An employee reports suspected securities fraud by their employer to the Securities and Exchange Commission and is subsequently terminated. Which category of law is most relevant to protecting this employee?',
    choices: [
      'Whistleblower protection laws',
      'The Video Privacy Protection Act',
      'The Fair Credit Reporting Act',
      'COPPA',
    ],
    correctIndex: 0,
    explanation:
      'Whistleblower protection statutes, such as provisions in Sarbanes-Oxley and Dodd-Frank, prohibit retaliation against employees who report certain types of misconduct, including securities fraud, to regulators.',
  },
  {
    id: 'cipp-us-workplace-4',
    domainId: 'cipp-us-workplace',
    prompt:
      'A trucking company requires drivers in safety-sensitive positions to undergo random drug testing under Department of Transportation regulations. This is an example of what kind of workplace privacy limitation?',
    choices: [
      'A purely voluntary industry best practice with no legal basis',
      'A government-mandated drug testing requirement tied to public safety in a regulated industry',
      'A violation of the Fourth Amendment because it involves a private employer',
      'An FCRA background check requirement',
    ],
    correctIndex: 1,
    explanation:
      'Federal regulations in safety-sensitive transportation industries mandate drug and alcohol testing programs, including random testing, to protect public safety, creating a legally grounded limitation on employee privacy in that context.',
  },
  {
    id: 'cipp-us-workplace-5',
    domainId: 'cipp-us-workplace',
    prompt:
      'An employer contacts a former supervisor for a reference on a job applicant. If the former supervisor provides only job title, dates of employment, and eligibility for rehire, this practice reflects what common risk-management approach many employers take?',
    choices: [
      'A limited "neutral reference" policy designed to reduce defamation and negligent-referral liability exposure',
      'A mandatory federal requirement under the FCRA',
      'A HIPAA-required minimum necessary disclosure',
      'A COPPA-compliant verification process',
    ],
    correctIndex: 0,
    explanation:
      'Many employers adopt neutral reference policies, disclosing only limited, objective facts to reduce the risk of defamation claims or negligent-referral liability, even though no single federal statute mandates this exact practice.',
  },
  {
    id: 'cipp-us-workplace-6',
    domainId: 'cipp-us-workplace',
    prompt:
      'A company implements a Bring Your Own Device (BYOD) program allowing employees to use personal smartphones for work email. What is a key privacy challenge this creates?',
    choices: [
      'BYOD programs are illegal in all US states',
      'Balancing the employer\'s need for security and data control against the employee\'s privacy interest in personal data on the same device',
      'BYOD automatically triggers HIPAA covered entity status',
      'BYOD eliminates any need for a mobile device management policy',
    ],
    correctIndex: 1,
    explanation:
      'BYOD programs blend personal and corporate data on one device, raising challenges around remote wipe capabilities, monitoring scope, and access to personal photos, messages, or apps unrelated to work, which employers typically address through clear policies.',
  },
  {
    id: 'cipp-us-workplace-7',
    domainId: 'cipp-us-workplace',
    prompt:
      'An employer wants to install video cameras in an employee break room. Which factor is most likely to make this practice legally risky in many states?',
    choices: [
      'Break rooms are always considered public spaces with no privacy expectation',
      'The break room may be viewed as a space where employees have a heightened reasonable expectation of privacy',
      'Video monitoring is banned everywhere in the United States',
      'Only unionized workplaces have any restriction on video monitoring',
    ],
    correctIndex: 1,
    explanation:
      'Areas like break rooms, restrooms, and locker rooms are generally treated as spaces with a heightened expectation of privacy, and covert monitoring there carries greater legal risk than monitoring in open work areas.',
  },
  {
    id: 'cipp-us-workplace-8',
    domainId: 'cipp-us-workplace',
    prompt:
      'An applicant is rejected for a job partly because of information in a background check report, and the employer fails to provide a pre-adverse action notice with a copy of the report before making the final decision. What has most likely occurred?',
    choices: [
      'A violation of the Fair Credit Reporting Act\'s adverse action procedures',
      'A violation of the Telephone Consumer Protection Act',
      'A violation of the Video Privacy Protection Act',
      'No violation, since employers can reject any applicant without notice',
    ],
    correctIndex: 0,
    explanation:
      'The FCRA requires employers to provide a pre-adverse action notice, including a copy of the report and a summary of rights, before taking adverse action based on a consumer report, giving the applicant a chance to dispute inaccuracies.',
  },

  // ---------------------------------------------------------------------
  // Domain: State Privacy Laws
  // ---------------------------------------------------------------------
  {
    id: 'cipp-us-state-laws-1',
    domainId: 'cipp-us-state-laws',
    prompt:
      'Most US state data breach notification laws generally require notification to affected residents when what occurs?',
    choices: [
      'Any change to a company\'s privacy policy',
      'Unauthorized acquisition of unencrypted personal information that compromises its security, confidentiality, or integrity',
      'Any marketing email is sent without consent',
      'A company changes its registered agent',
    ],
    correctIndex: 1,
    explanation:
      'Most state breach notification statutes are triggered by unauthorized acquisition (or in some states, access) to unencrypted personal information, such as a Social Security number combined with a name, that compromises its security.',
  },
  {
    id: 'cipp-us-state-laws-2',
    domainId: 'cipp-us-state-laws',
    prompt:
      'Under the California Consumer Privacy Act as amended by the CPRA, which of the following is a right generally granted to California consumers?',
    choices: [
      'The right to demand a company relocate its headquarters',
      'The right to know, delete, and correct personal information, and to opt out of the sale or sharing of personal information',
      'The right to a guaranteed minimum wage from any data broker',
      'The right to sue any company for any privacy violation regardless of harm',
    ],
    correctIndex: 1,
    explanation:
      'The CCPA/CPRA grants California consumers rights including access (right to know), deletion, correction, and the ability to opt out of the sale or sharing of their personal information, along with a limited private right of action for certain data breaches.',
  },
  {
    id: 'cipp-us-state-laws-3',
    domainId: 'cipp-us-state-laws',
    prompt:
      'Illinois\' Biometric Information Privacy Act (BIPA) primarily regulates the collection and handling of what type of data?',
    choices: [
      'Credit card numbers',
      'Biometric identifiers such as fingerprints, retina scans, and voiceprints',
      'Vehicle license plate numbers only',
      'Publicly available court records',
    ],
    correctIndex: 1,
    explanation:
      'BIPA regulates the collection, use, and retention of biometric identifiers and biometric information, requiring informed written consent before collection and imposing strict data handling and destruction requirements.',
  },
  {
    id: 'cipp-us-state-laws-4',
    domainId: 'cipp-us-state-laws',
    prompt:
      'A company suffers a data breach affecting residents in multiple states. Which of the following best describes a practical compliance challenge this creates?',
    choices: [
      'There is no challenge, since all states have identical breach notification requirements',
      'The company must analyze and comply with each affected state\'s distinct definitions, timelines, and notification requirements',
      'Federal law automatically preempts all state breach notification laws',
      'Only California has a breach notification law, so other states can be ignored',
    ],
    correctIndex: 1,
    explanation:
      'State breach notification laws vary in their definitions of personal information, notification timelines, required notice content, and regulator notification thresholds, requiring a state-by-state compliance analysis after a multi-state breach.',
  },
  {
    id: 'cipp-us-state-laws-5',
    domainId: 'cipp-us-state-laws',
    prompt:
      'Which of the following states was among the first to enact a comprehensive consumer privacy law modeled in part on GDPR-style rights, following California\'s lead?',
    choices: [
      'Wyoming',
      'Virginia (Virginia Consumer Data Protection Act)',
      'Alabama',
      'Mississippi',
    ],
    correctIndex: 1,
    explanation:
      'Virginia enacted the Consumer Data Protection Act (VCDPA), one of the earliest comprehensive state privacy laws after California, establishing consumer rights and controller/processor obligations similar in structure to other emerging state frameworks.',
  },
  {
    id: 'cipp-us-state-laws-6',
    domainId: 'cipp-us-state-laws',
    prompt:
      'Under BIPA, a company that collects employee fingerprints for a timeclock system without first obtaining written consent and providing required disclosures faces what kind of legal exposure?',
    choices: [
      'None, because BIPA only applies to government agencies',
      'Potential statutory damages through a private right of action available to individuals under BIPA',
      'Automatic criminal prosecution only',
      'Liability only if a data breach actually occurs',
    ],
    correctIndex: 1,
    explanation:
      'BIPA is notable for including a private right of action, allowing individuals to sue for statutory damages even without proof of actual harm, which has led to significant litigation exposure for noncompliant companies.',
  },
  {
    id: 'cipp-us-state-laws-7',
    domainId: 'cipp-us-state-laws',
    prompt:
      'Which entity is generally responsible for enforcing the California Consumer Privacy Act following the CPRA amendments?',
    choices: [
      'The Federal Trade Commission exclusively',
      'The California Privacy Protection Agency, along with the California Attorney General',
      'The Securities and Exchange Commission',
      'The Department of Homeland Security',
    ],
    correctIndex: 1,
    explanation:
      'The CPRA created the California Privacy Protection Agency (CPPA), the first dedicated US state privacy regulator, which shares enforcement authority with the California Attorney General.',
  },
  {
    id: 'cipp-us-state-laws-8',
    domainId: 'cipp-us-state-laws',
    prompt:
      'A retailer operating only in Texas experiences a breach exposing customer names and driver\'s license numbers. Which factor primarily determines which state\'s breach notification law applies to a given affected individual?',
    choices: [
      'The state where the retailer\'s headquarters is located, regardless of where customers live',
      'Generally, the residency of the affected individual, since most state breach laws protect their own residents',
      'The state where the servers are physically located only',
      'Federal law only, since state breach laws do not apply to retailers',
    ],
    correctIndex: 1,
    explanation:
      'Most state breach notification laws are drafted to protect residents of that state, meaning the applicable law typically follows the residency of the affected individual rather than the company\'s location.',
  },
]
