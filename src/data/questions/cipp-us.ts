import type { Question } from '../../lib/types'

export const cippUsQuestions: Question[] = [
  // ---------------------------------------------------------------------
  // Domain: Introduction to the US Privacy Environment
  // ---------------------------------------------------------------------
  {
    id: 'cipp-us-intro-1',
    domainId: 'cipp-us-intro',
    prompt:
      "A compliance officer moving from an EU-based company to a US-based company is surprised to find no single statute equivalent to the GDPR governing all personal data. Which term best captures the structural reason for this?",
    choices: [
      'The US follows an omnibus model enforced by a single data protection authority',
      'The US follows a sectoral model, regulating privacy through separate laws targeted at specific industries and data types',
      'The US has no privacy law at all outside of common-law contract doctrine',
      'The US relies solely on self-executing international treaties ratified by Congress',
    ],
    correctIndex: 1,
    explanation:
      "The US relies on a patchwork of sector-specific federal laws (HIPAA, GLBA, COPPA, etc.) plus state statutes rather than one comprehensive statute, making it sectoral. Choice A describes the EU's omnibus approach, which is the opposite of the US model; the US in fact has extensive privacy regulation, so C is wrong.",
  },
  {
    id: 'cipp-us-intro-2',
    domainId: 'cipp-us-intro',
    prompt:
      "An online retailer's app has a flaw exposing customers' full payment card numbers to any other app on the phone, even though the retailer never made any express promise about its security practices. The FTC brings an enforcement action under Section 5. Which prong of the FTC's authority is most directly at issue?",
    choices: [
      'Deception, because the company misrepresented its data security practices',
      'Unfairness, because the practice causes substantial consumer injury that is not reasonably avoidable and not outweighed by countervailing benefits',
      'Antitrust, because the flaw harms the company\'s competitors',
      'Unfairness, but only because the company separately violated a specific state statute',
    ],
    correctIndex: 1,
    explanation:
      'Because the company never made a representation about security, there is no misrepresentation to support a deception claim (making choice A a tempting but incorrect pick); the FTC instead relies on the unfairness prong, which requires substantial, unavoidable injury not outweighed by benefits and does not depend on any prior promise.',
  },
  {
    id: 'cipp-us-intro-3',
    domainId: 'cipp-us-intro',
    prompt:
      "A company's privacy policy promises it will never sell customer data, then it sells that data to a marketing firm anyway. Under FTC enforcement practice, this is best characterized as which type of violation?",
    choices: [
      'An unfairness violation only, since no reasonable consumer reads privacy policies',
      'A deceptive practice, since the company\'s actual conduct contradicted its express representation',
      'A breach of fiduciary duty enforceable only by state attorneys general',
      'A violation of the Fourth Amendment\'s search and seizure protections',
    ],
    correctIndex: 1,
    explanation:
      'Failing to honor a stated privacy promise is a textbook deceptive practice under Section 5, since it misleads consumers about how their data will be used regardless of injury; the Fourth Amendment restrains government action, not private companies, so it has no application here.',
  },
  {
    id: 'cipp-us-intro-4',
    domainId: 'cipp-us-intro',
    prompt:
      "An app's privacy notice discloses exactly what data is collected, lets users opt out of certain secondary uses, and limits use of the data to only the disclosed purposes. This design most directly reflects which set of principles?",
    choices: [
      'Notice/Awareness and Use Limitation, drawn from the Fair Information Practice Principles (FIPPs)',
      'Data minimization and the right to erasure, concepts that originated exclusively in the GDPR',
      'The Onward Transfer and Accountability Principles of the EU-US Data Privacy Framework',
      'Purpose limitation, a concept first created by the California Consumer Privacy Act',
    ],
    correctIndex: 0,
    explanation:
      'FIPPs, articulated in a 1973 US government report, established notice, choice, use limitation, access, and security concepts that predate and influenced later frameworks. Choices C and D misattribute Data Privacy Framework or CCPA-specific mechanisms as the source, and choice B wrongly claims these concepts began with the GDPR.',
  },
  {
    id: 'cipp-us-intro-5',
    domainId: 'cipp-us-intro',
    prompt:
      "A tabloid publishes truthful but highly embarrassing private medical details about a person, obtained without permission, that are not of legitimate public concern. Which privacy tort best fits this claim?",
    choices: [
      'Defamation, because the publication damaged the person\'s reputation',
      'Public disclosure of private facts, because the statements were true but highly offensive and not newsworthy',
      'False light, because the publication created a false impression of the person',
      'Appropriation, because the tabloid used the person\'s name for commercial gain',
    ],
    correctIndex: 1,
    explanation:
      'Public disclosure of private facts protects against publicizing true, highly offensive private information lacking legitimate public interest. Defamation and false light both require a false statement or impression, which is absent here since the facts were true; appropriation concerns commercial use of identity, not disclosure of facts.',
  },
  {
    id: 'cipp-us-intro-6',
    domainId: 'cipp-us-intro',
    prompt:
      "A company publicly states it adheres to a well-known advertising industry self-regulatory code, but its ad-targeting practices do not actually comply with that code's opt-out requirements. What is the most likely legal consequence?",
    choices: [
      'None, because self-regulatory codes are voluntary and therefore unenforceable',
      'The FTC may pursue the company for a deceptive practice, since the public claim of compliance was false',
      'The code\'s sponsoring trade association can impose criminal penalties directly on the company',
      'The claim automatically triggers liability under COPPA regardless of the audience',
    ],
    correctIndex: 1,
    explanation:
      'Although self-regulatory codes are voluntary to join, once a company publicly represents that it complies, falling short of that promise becomes an actionable deceptive practice the FTC can pursue — voluntary origin does not mean unenforceable. Trade associations lack criminal authority, and COPPA is specific to children\'s data, not implicated merely by an ad-targeting misrepresentation.',
  },
  {
    id: 'cipp-us-intro-7',
    domainId: 'cipp-us-intro',
    prompt:
      "After the Court of Justice of the European Union invalidated the EU-US Privacy Shield in Schrems II, what mechanism did the US and EU adopt to facilitate transatlantic transfers while addressing the Court's surveillance-related concerns?",
    choices: [
      'A binding treaty ratified by the US Senate establishing a joint EU-US data protection authority',
      'The EU-US Data Privacy Framework, which added new redress mechanisms and an independent review process for signals-intelligence complaints',
      'Full adoption of the GDPR as binding US federal law',
      'An amendment eliminating all collection under FISA Section 702',
    ],
    correctIndex: 1,
    explanation:
      'The Data Privacy Framework relies on a US executive order creating new redress mechanisms, including a Data Protection Review Court, rather than a ratified treaty or wholesale adoption of GDPR. Section 702 collection was not eliminated; it was subjected to new oversight and redress procedures instead.',
  },
  {
    id: 'cipp-us-intro-8',
    domainId: 'cipp-us-intro',
    prompt:
      "A consumer advocacy group asks the FTC to investigate a mobile app that collects far more precise location data than its privacy notice discloses. Which enforcement theory best fits, and why is it stronger than the alternative?",
    choices: [
      'Deception, because the actual data practices do not match the notice\'s representations, regardless of whether the extra collection causes concrete harm',
      'Unfairness, because any collection of location data automatically causes substantial injury',
      'A Fourth Amendment claim, because the FTC is a government actor conducting an unreasonable search',
      'Breach of contract, since a privacy notice is a legally binding sales contract in every US jurisdiction',
    ],
    correctIndex: 0,
    explanation:
      'Deception requires only a material misrepresentation likely to mislead consumers, not proof of harm, making it the better fit here. Unfairness requires proof of substantial, unavoidable injury that a mismatched notice alone does not establish; the Fourth Amendment and contract theories do not apply to an FTC administrative enforcement action of this kind.',
  },

  // ---------------------------------------------------------------------
  // Domain: Limits on Private-Sector Collection & Use of Data
  // ---------------------------------------------------------------------
  {
    id: 'cipp-us-private-sector-1',
    domainId: 'cipp-us-private-sector',
    prompt:
      "A landlord denies a rental application based substantially on a tenant screening report purchased from a company that qualifies as a consumer reporting agency. Under the FCRA, who bears the obligation to send the applicant an adverse action notice?",
    choices: [
      'The consumer reporting agency, since it compiled the report\'s content',
      'The landlord, as the "user" of the consumer report who took the adverse action, even though the agency compiled the report',
      'Neither party, because FCRA adverse action notice duties apply only to employment screening, not tenant screening',
      'HUD exclusively, because the Fair Housing Act preempts FCRA\'s notice requirements in the rental context',
    ],
    correctIndex: 1,
    explanation:
      'The FCRA places the adverse action notice duty on the "user" of the report — here, the landlord — not the reporting agency. FCRA\'s adverse action provisions apply broadly to consumer reports used for credit, insurance, employment, and tenant screening, and the Fair Housing Act operates alongside FCRA rather than displacing its notice requirement.',
  },
  {
    id: 'cipp-us-private-sector-2',
    domainId: 'cipp-us-private-sector',
    prompt:
      "A car dealership does not make loans itself but regularly arranges third-party financing and leases for customers as a routine part of its business. Under GLBA, how is the dealership most likely classified?",
    choices: [
      'Exempt from GLBA entirely because it is a retailer rather than a bank',
      'A "financial institution" under GLBA\'s broad definition, because arranging consumer financing is a financial activity, making it subject to the Safeguards Rule',
      'Regulated instead exclusively by HIPAA, since it collects identity information from customers',
      'Subject to GLBA only if the dealership is publicly traded',
    ],
    correctIndex: 1,
    explanation:
      'GLBA defines "financial institution" broadly to cover entities significantly engaged in financial activities such as extending or arranging credit, which brings auto dealers that arrange financing within the Safeguards Rule even though they are not banks. HIPAA governs health information, not this kind of customer data, and public-trading status is irrelevant to GLBA coverage.',
  },
  {
    id: 'cipp-us-private-sector-3',
    domainId: 'cipp-us-private-sector',
    prompt:
      "A hospital contracts with a company that physically transports paper medical records between facilities but never accesses or reads their contents. Under HIPAA, is this transport company a business associate?",
    choices: [
      'Yes, any contractor that physically handles records containing PHI is automatically a business associate',
      'No — under the narrow "conduit" exception, entities that merely transport information without accessing its content on more than a transient basis are generally not business associates',
      'Yes, but only if the contractor is paid above a statutory minimum fee threshold',
      'No, because HIPAA\'s definition of business associate excludes all third-party contractors',
    ],
    correctIndex: 1,
    explanation:
      'HHS guidance recognizes a narrow conduit exception for entities like couriers or transmission services that do not access PHI content beyond what is necessary to perform transport. Choice A overstates the rule (mere physical custody alone doesn\'t create business associate status when there\'s no meaningful access), while choice D is wrong because contractors that do use or disclose PHI on a covered entity\'s behalf are routinely business associates.',
  },
  {
    id: 'cipp-us-private-sector-4',
    domainId: 'cipp-us-private-sector',
    prompt:
      "A children's educational app collects a child's email address solely to send one email seeking the parent's verifiable consent, and deletes it if consent is not received within a reasonable time. Under COPPA, must the operator obtain verifiable parental consent before this limited, initial collection?",
    choices: [
      'Yes — COPPA requires verifiable parental consent before any collection of any information from a child, without exception',
      'No — COPPA includes a specific exception permitting collection of online contact information for the sole purpose of obtaining parental consent',
      'No, because an email address is not considered "personal information" under COPPA',
      'Yes, but only if the app has more than 100,000 child users',
    ],
    correctIndex: 1,
    explanation:
      'COPPA specifically exempts collecting a parent\'s (or child\'s) online contact information used solely to obtain or provide notice of parental consent, provided the information is deleted if consent isn\'t obtained. Email addresses are explicitly enumerated as personal information under COPPA, so choice C misstates the rule, and there is no such user-count exception.',
  },
  {
    id: 'cipp-us-private-sector-5',
    domainId: 'cipp-us-private-sector',
    prompt:
      "A retailer sends autodialed marketing text messages to customers who had only provided their phone numbers, two years earlier, to receive shipping updates on a single order. No separate marketing consent was obtained. Is this practice compliant with the TCPA?",
    choices: [
      'Yes, because an established business relationship with a past customer permits ongoing autodialed marketing texts',
      'No — current FCC rules require prior express written consent specific to autodialed marketing messages, and consent given for shipping updates does not satisfy that requirement',
      'Yes, because consent for one purpose automatically extends to all future communications from the same company',
      'No, because the TCPA bans all commercial text messages regardless of any consent obtained',
    ],
    correctIndex: 1,
    explanation:
      'A 2012 FCC order eliminated the established-business-relationship exemption for autodialed/prerecorded marketing calls and texts to wireless numbers, requiring prior express written consent specific to marketing. Consent is purpose-specific, so shipping-update consent doesn\'t cover marketing texts, and the TCPA does permit marketing texts with proper consent, so an outright ban is incorrect.',
  },
  {
    id: 'cipp-us-private-sector-6',
    domainId: 'cipp-us-private-sector',
    prompt:
      "Which statement correctly describes a commercial emailer's consent obligations under the CAN-SPAM Act before sending marketing email to a purchased list?",
    choices: [
      'Opt-in consent must be obtained before the first marketing email is sent',
      'No prior opt-in consent is required, but the email must include accurate headers, clear ad identification, a valid physical postal address, and a working opt-out mechanism honored within 10 business days',
      'State laws banning unsolicited commercial email fully preempt CAN-SPAM in every jurisdiction',
      'The sender must register the mailing list with the FTC before the first email is sent',
    ],
    correctIndex: 1,
    explanation:
      'Unlike the TCPA\'s opt-in regime for text messages, CAN-SPAM is primarily an opt-out law with specific formatting, identification, and opt-out mechanics. The preemption actually runs the other direction — CAN-SPAM generally preempts state anti-spam laws except those addressing fraud or deception — and there is no FTC list-registration requirement.',
  },
  {
    id: 'cipp-us-private-sector-7',
    domainId: 'cipp-us-private-sector',
    prompt:
      "A streaming service wants to share a specific subscriber's viewing history with a third-party analytics company for the analytics company's own product development, unrelated to the subscriber's original transaction. What does the VPPA generally require first?",
    choices: [
      'Nothing, because the VPPA only restricts disclosures made to government entities',
      'Informed, written consent from the subscriber, obtained in a manner distinct from other legal obligations and allowing an ongoing opportunity to withdraw',
      'A single sentence buried in the general terms of service is sufficient and remains valid indefinitely with no ability to withdraw',
      'A court order is always required, regardless of any consent the subscriber might give',
    ],
    correctIndex: 1,
    explanation:
      "The VPPA restricts private-sector disclosure of a person's video viewing history, not just government access, and its consent must be obtained distinctly from other legal or financial terms, with an opportunity to withdraw — a buried, indefinite terms-of-service clause typically will not satisfy this standard. A court order is only one of several lawful bases for disclosure, not the exclusive path.",
  },
  {
    id: 'cipp-us-private-sector-8',
    domainId: 'cipp-us-private-sector',
    prompt:
      "A bank shares a customer's account number with a third-party payment processor solely to complete a wire transfer the customer requested. Under GLBA's Privacy Rule, must the bank first offer the customer an opt-out?",
    choices: [
      'Yes, any disclosure to an unaffiliated third party requires a prior opt-out opportunity, without exception',
      'No — GLBA includes an exception for disclosures necessary to effect, administer, or enforce a transaction the customer requested, which does not trigger opt-out rights',
      'No, because wire transfers fall entirely outside GLBA\'s scope',
      'Yes, but only because the processor is unaffiliated rather than affiliated with the bank',
    ],
    correctIndex: 1,
    explanation:
      "GLBA's opt-out requirement for sharing with unaffiliated third parties has statutory exceptions, including disclosures needed to process a transaction the customer requested — a scenario like this one falls squarely within that exception. Choice A ignores those exceptions, and choice D misidentifies the reason no opt-out is needed (it isn't merely about affiliation status).",
  },

  // ---------------------------------------------------------------------
  // Domain: Government & Court Access to Private-Sector Info
  // ---------------------------------------------------------------------
  {
    id: 'cipp-us-government-access-1',
    domainId: 'cipp-us-government-access',
    prompt:
      "Government agents, without a warrant, attach a GPS tracking device to a suspect's car and monitor its movements for a month. Which constitutional provision most directly governs whether this constitutes a 'search' requiring a warrant?",
    choices: [
      'The Fifth Amendment\'s privilege against self-incrimination',
      'The Fourth Amendment\'s protection against unreasonable searches and seizures',
      'The Ninth Amendment\'s protection of unenumerated rights',
      'The First Amendment\'s freedom of association',
    ],
    correctIndex: 1,
    explanation:
      "The Supreme Court in United States v. Jones held that physically installing a GPS device is a Fourth Amendment search. The Fifth Amendment concerns compelled testimony, not physical surveillance, and the Ninth and First Amendments address different interests (unenumerated rights and associational freedom) not centrally at issue in a GPS-tracking case.",
  },
  {
    id: 'cipp-us-government-access-2',
    domainId: 'cipp-us-government-access',
    prompt:
      "Under the literal text of the Stored Communications Act, opened emails held in storage for more than 180 days could technically be compelled with a subpoena rather than a warrant. Why do most major email providers today require a warrant for email content regardless of age?",
    choices: [
      'Congress amended the SCA in 2015 to formally eliminate the 180-day distinction',
      'Following the Sixth Circuit\'s decision in United States v. Warshak, most providers treat a warrant as necessary for all stored email content to avoid Fourth Amendment liability, even though the statutory text was never formally amended',
      'The Supreme Court struck down the Stored Communications Act as unconstitutional in its entirety',
      'State law fully preempts the SCA for any email content stored longer than 180 days',
    ],
    correctIndex: 1,
    explanation:
      "Warshak held that email users have a reasonable expectation of privacy in stored email content, pushing providers toward a warrant-for-all-content practice as a matter of caution even though the SCA's statutory text with its 180-day distinction remains unchanged. No such 2015 amendment or Supreme Court invalidation occurred, and state law does not preempt this federal statute.",
  },
  {
    id: 'cipp-us-government-access-3',
    domainId: 'cipp-us-government-access',
    prompt:
      "The government wants to conduct surveillance of a non-US person believed to be located outside the United States for foreign intelligence purposes, incidentally collecting some communications with US persons. Which authority most directly permits this without an individualized warrant based on ordinary criminal probable cause?",
    choices: [
      'Title III of the Wiretap Act',
      'Section 702 of the FISA Amendments Act, which authorizes targeting non-US persons reasonably believed to be located abroad',
      'The Stored Communications Act\'s subpoena provisions',
      'Section 215 of the USA PATRIOT Act, which historically enabled bulk collection of US persons\' telephone metadata',
    ],
    correctIndex: 1,
    explanation:
      "Section 702 permits targeting non-US persons abroad under FISC-approved certifications rather than individualized warrants. Section 215 is a related but distinct authority historically used for bulk domestic telephone metadata (later reformed), not for targeting foreign persons abroad, making it a close but incorrect choice; Title III and SCA subpoenas govern different, domestic contexts.",
  },
  {
    id: 'cipp-us-government-access-4',
    domainId: 'cipp-us-government-access',
    prompt:
      "An ISP receives a National Security Letter demanding non-content subscriber records, along with a nondisclosure requirement barring it from telling the customer. Which statement about that nondisclosure requirement is accurate under current law?",
    choices: [
      'The gag order is permanent and can never be challenged in court',
      'The recipient may petition a court to modify or set aside the nondisclosure requirement, and periodic judicial review procedures apply following USA FREEDOM Act reforms',
      'NSLs can no longer include any nondisclosure requirement under current law',
      'The gag order automatically expires after 24 hours in every case',
    ],
    correctIndex: 1,
    explanation:
      "Post-2015 reforms allow NSL recipients to seek judicial review of nondisclosure requirements, with periodic reassessment rather than an unreviewable permanent gag. NSLs still can include nondisclosure requirements, and there is no fixed 24-hour expiration rule.",
  },
  {
    id: 'cipp-us-government-access-5',
    domainId: 'cipp-us-government-access',
    prompt:
      "In Carpenter v. United States (2018), the Supreme Court required a warrant for long-term historical cell-site location information. Which of the following best describes a limitation the Court placed on its own holding?",
    choices: [
      'The decision explicitly overruled the third-party doctrine in its entirety, including for bank records',
      'The Court described its holding as narrow, leaving the traditional third-party doctrine — such as for bank records under United States v. Miller — otherwise intact',
      'The decision applies only to state law enforcement, not federal agencies',
      'The decision requires a warrant for government access to any third-party business record whatsoever',
    ],
    correctIndex: 1,
    explanation:
      'The Carpenter majority expressly called its holding narrow and limited to the unique, comprehensive tracking capability of historical CSLI, declining to disturb the third-party doctrine\'s application to conventional business records like bank records. Choices A and D describe the common overreading of Carpenter as a wholesale doctrinal reversal, which the opinion itself disclaimed.',
  },
  {
    id: 'cipp-us-government-access-6',
    domainId: 'cipp-us-government-access',
    prompt:
      "In Smith v. Maryland, the Supreme Court held that a person has no reasonable expectation of privacy in which category of information, forming a foundation of the traditional third-party doctrine?",
    choices: [
      'The content of a person\'s telephone conversations',
      'The numbers a person dials, voluntarily conveyed to and recorded by the telephone company',
      'The physical location of a person\'s home',
      'Medical records held by a treating physician',
    ],
    correctIndex: 1,
    explanation:
      'Smith held that dialed phone numbers, captured by a pen register, are voluntarily conveyed to the phone company and therefore not protected by a reasonable expectation of privacy. Call content is treated differently and more protectively under Title III and Katz, and home location and medical records were not the subject of this case.',
  },
  {
    id: 'cipp-us-government-access-7',
    domainId: 'cipp-us-government-access',
    prompt:
      "Law enforcement wants to intercept the real-time audio content of a suspect's ongoing phone calls under Title III of the Wiretap Act. How does the applicable standard compare to the standard for installing a pen register on the same phone?",
    choices: [
      'Both require only a certification that the information is relevant to an investigation',
      'Wiretap interception requires a court order supported by probable cause, necessity, and minimization procedures — a materially higher standard than the mere relevance certification required for a pen register',
      'A pen register requires probable cause while wiretap interception requires only a relevance certification',
      'Both require the same warrant standard used for an ordinary Fourth Amendment search of a home',
    ],
    correctIndex: 1,
    explanation:
      'Title III interception is one of the most demanding standards in US surveillance law, requiring probable cause, a showing of necessity, and minimization procedures, while a pen register order requires only a certification of relevance to an investigation — a far lower bar. Choice C reverses these standards, a common trap.',
  },
  {
    id: 'cipp-us-government-access-8',
    domainId: 'cipp-us-government-access',
    prompt:
      "Under the Stored Communications Act's tiered structure for compelling records from an internet service provider, which correctly ranks the legal process required, from least to most demanding?",
    choices: [
      'Subpoena for basic subscriber information, then a court order under the "specific and articulable facts" standard for other non-content records, then a warrant for content in storage 180 days or less',
      'Warrant for basic subscriber information, then subpoena for transactional records, then court order for content',
      'A court order is required for every category of record, regardless of type',
      'Subpoena for content regardless of age, with a warrant needed only for basic subscriber information',
    ],
    correctIndex: 0,
    explanation:
      "The SCA sets an escalating tier: a subpoena suffices for basic subscriber information, a Section 2703(d) court order (specific and articulable facts) is needed for other non-content records, and a warrant is required for content in storage 180 days or less. The other choices scramble this ordering or flatten the tiered structure the statute is built around.",
  },

  // ---------------------------------------------------------------------
  // Domain: Workplace Privacy
  // ---------------------------------------------------------------------
  {
    id: 'cipp-us-workplace-1',
    domainId: 'cipp-us-workplace',
    prompt:
      "An employer's job application packet includes, on the same page as the FCRA background-check disclosure, a liability waiver releasing the employer from claims related to the check. What is the most likely problem with this practice?",
    choices: [
      'There is no problem, as long as the applicant signs an authorization somewhere in the packet',
      'The disclosure likely violates the FCRA requirement that the disclosure document consist solely of the disclosure, since combining it with a liability waiver or other extraneous terms has been found to breach the "standalone document" rule',
      'The problem is a COPPA violation, since minors may submit job applications',
      'There is no problem, because the FCRA applies only to current employees, not job applicants',
    ],
    correctIndex: 1,
    explanation:
      'FCRA requires the disclosure document to consist "solely" of the disclosure; adding a liability waiver or other extraneous provisions has repeatedly been found to violate that standalone requirement, regardless of whether authorization is eventually obtained. COPPA is unrelated to adult job applicants, and FCRA plainly covers pre-employment screening of applicants, not just current employees.',
  },
  {
    id: 'cipp-us-workplace-2',
    domainId: 'cipp-us-workplace',
    prompt:
      "An employee occasionally logs into a personal, non-work email account through a browser on a company-owned laptop. The employer's monitoring software captures the content of that personal account without the employee's knowledge. Which statement best reflects the legal risk?",
    choices: [
      'There is no risk, because anything occurring on company-owned equipment is automatically covered by ECPA\'s business-extension exception',
      'There is meaningful legal risk, because the business-extension and consent exceptions to the Wiretap Act primarily protect monitoring of company communications and business use, not necessarily personal, non-work accounts accessed incidentally on a company device',
      'There is no risk, because ECPA applies only to government actors, not private employers',
      'There is no risk, because personal webmail loses all legal protection once accessed from an employer-owned device',
    ],
    correctIndex: 1,
    explanation:
      "The common assumption that anything on company equipment is automatically 'fair game' overstates the scope of ECPA's exceptions, which are tied to business-related use and valid consent rather than device ownership alone; capturing personal, unrelated account content can exceed that scope. ECPA's Wiretap Act does apply to private-sector interception, not just government conduct.",
  },
  {
    id: 'cipp-us-workplace-3',
    domainId: 'cipp-us-workplace',
    prompt:
      "An employee reports suspected securities fraud directly to the SEC, bypassing internal company channels, and is later terminated. Under Dodd-Frank's whistleblower provisions, which statement is most accurate?",
    choices: [
      'The employee has no protection because they failed to first exhaust internal company reporting channels',
      'The employee may be protected and potentially eligible for a monetary award, because Dodd-Frank protects whistleblowers who report directly to the SEC and, unlike some internal-reporting scenarios, does not require exhausting internal channels first',
      'Only anonymous tips qualify for protection under any federal whistleblower statute',
      'Dodd-Frank whistleblower protection applies only to employees who are also corporate officers of a publicly traded company',
    ],
    correctIndex: 1,
    explanation:
      "Because the employee reported directly to the SEC, Dodd-Frank's anti-retaliation protection applies (the Supreme Court's Digital Realty Trust decision actually holds Dodd-Frank protection turns on reporting to the SEC, which happened here); no exhaustion of internal channels is required. There is no anonymity requirement or officer-only limitation on this protection.",
  },
  {
    id: 'cipp-us-workplace-4',
    domainId: 'cipp-us-workplace',
    prompt:
      "A trucking company subjects safety-sensitive drivers to random drug testing under Department of Transportation regulations. An applicant argues this violates the ADA. Why does this argument generally fail?",
    choices: [
      'The ADA does not apply to private employers at all',
      'Testing for illegal drug use is generally not treated as a "medical examination" restricted by the ADA, and current illegal drug users are not protected as individuals with disabilities under the Act',
      'DOT regulations preempt the entire Americans with Disabilities Act across all industries',
      'The ADA protects only visible physical disabilities, not any drug-related conditions',
    ],
    correctIndex: 1,
    explanation:
      'ADA regulations specifically exclude tests for illegal drug use from the definition of "medical examination," and current illegal drug use is excluded from ADA disability protection, which is why DOT-mandated testing generally survives an ADA challenge. Choice C overstates the preemption (it is limited to the safety-sensitive testing context, not the entire ADA), and choice A and D mischaracterize the ADA\'s general scope.',
  },
  {
    id: 'cipp-us-workplace-5',
    domainId: 'cipp-us-workplace',
    prompt:
      "A former employer, when contacted for a reference, truthfully states that an employee was terminated for falsifying expense reports. The former employee sues for defamation. Why is the former employer likely protected?",
    choices: [
      'Truthful statements can never form the basis of any tort claim whatsoever',
      'Many states recognize a qualified privilege for good-faith, truthful employment references, protecting the employer unless the statement was made with malice or knowing falsity',
      'HIPAA immunizes all employment-related communications between employers',
      'Federal law grants employers absolute immunity for any statement made during a reference check, regardless of intent',
    ],
    correctIndex: 1,
    explanation:
      "The qualified privilege for good-faith references is conditional, not absolute — it can be lost if the employer acts with malice, unlike choice D's claim of blanket federal immunity. Choice A is also inaccurate as a general legal principle since truth is a defense specifically to defamation, not necessarily to every conceivable tort. HIPAA governs health information, not general employment references, making choice C the wrong statute.",
  },
  {
    id: 'cipp-us-workplace-6',
    domainId: 'cipp-us-workplace',
    prompt:
      "An employer remotely wipes a terminated employee's personal smartphone enrolled in its BYOD/mobile device management program, deleting the employee's personal photos along with corporate email. What is the most significant legal risk this creates for the employer?",
    choices: [
      'None, because BYOD enrollment is always a complete waiver of every personal privacy interest in the device',
      'Potential liability for exceeding the scope of a clearly communicated BYOD policy, particularly if the wipe destroyed personal data beyond what the employee agreed the employer could access or delete',
      'An automatic HIPAA violation, since HIPAA governs any employer-managed mobile device',
      'An automatic COPPA violation, because minors may possess smartphones',
    ],
    correctIndex: 1,
    explanation:
      'Courts scrutinize BYOD/MDM actions against the actual scope of the policy the employee agreed to, so a blanket "complete waiver" assumption in choice A is unreliable, especially where personal data beyond the agreed scope is destroyed. HIPAA applies to protected health information handled by covered entities and business associates, not generically to employer device management, and COPPA is limited to children\'s online services.',
  },
  {
    id: 'cipp-us-workplace-7',
    domainId: 'cipp-us-workplace',
    prompt:
      "An employer installs hidden video cameras in an employee restroom to investigate suspected theft occurring nearby. Compared to installing similar cameras on an open sales floor, why is the restroom placement especially legally risky?",
    choices: [
      'There is no meaningful legal difference between the two locations under US law',
      'Many states have statutes or strong common-law protections that categorically restrict or prohibit surveillance in restrooms, locker rooms, and similar areas of heightened personal privacy, unlike open work areas',
      'Restroom surveillance is regulated exclusively by OSHA, which permits it whenever a safety justification exists',
      'Only unionized employers face any restriction on restroom camera placement, under the National Labor Relations Act',
    ],
    correctIndex: 1,
    explanation:
      'Areas like restrooms and locker rooms carry heightened privacy expectations and are often subject to specific statutory or common-law restrictions, distinguishing them from open work areas. OSHA does not generally authorize such surveillance, and NLRA-based surveillance concerns (protecting concerted activity) are a distinct issue that is not limited to unionized workplaces.',
  },
  {
    id: 'cipp-us-workplace-8',
    domainId: 'cipp-us-workplace',
    prompt:
      "An employer, after reviewing a background check report, sends the applicant a single notice — containing the CRA's contact information and a summary of FCRA rights — at the same time it announces the final decision not to hire. No earlier notice was sent. What is deficient about this process under the FCRA?",
    choices: [
      'Nothing — a single combined notice sent at the time of the final decision fully satisfies the FCRA',
      'The employer failed to send a separate pre-adverse action notice, including a copy of the report, before making the final decision, denying the applicant a meaningful chance to dispute inaccuracies beforehand',
      'The employer was never required to send any notice, since entry-level positions are exempt from FCRA',
      'The deficiency is actually a COPPA violation because the applicant\'s age was not verified',
    ],
    correctIndex: 1,
    explanation:
      "The FCRA requires a two-step process: a pre-adverse action notice with a copy of the report and rights summary before the decision, giving the applicant time to dispute inaccuracies, followed by a post-decision adverse action notice — combining them into one after-the-fact notice fails to satisfy the pre-adverse action step. There is no entry-level exemption, and COPPA is irrelevant to adult employment screening.",
  },

  // ---------------------------------------------------------------------
  // Domain: State Privacy Laws
  // ---------------------------------------------------------------------
  {
    id: 'cipp-us-state-laws-1',
    domainId: 'cipp-us-state-laws',
    prompt:
      "A company's database containing encrypted Social Security numbers is accessed by an intruder who also compromised the encryption key in the same incident. Under most state breach notification laws' encryption safe harbor, what is the likely result?",
    choices: [
      'No notification is required, because the underlying data was encrypted',
      'Notification is still likely required, because most encryption safe harbors do not apply once the encryption key was also compromised, effectively rendering the data readable',
      'Notification is required regardless of encryption status, because states impose strict liability for any unauthorized access to any data',
      'Only federal law, not state law, governs this situation',
    ],
    correctIndex: 1,
    explanation:
      "Encryption safe harbors typically apply only if the means to decrypt the data were not also compromised; once the key is exposed alongside the encrypted data, most statutes treat the information as effectively unencrypted, triggering notification. There is no blanket strict-liability rule regardless of encryption, and state law — not federal law — remains the primary breach notification regime in the US.",
  },
  {
    id: 'cipp-us-state-laws-2',
    domainId: 'cipp-us-state-laws',
    prompt:
      "Under the CPRA amendments to the CCPA, a business discloses personal information to an ad-tech partner for cross-context behavioral advertising, with no exchange of money. What is this activity best described as, and what right does it trigger?",
    choices: [
      'A "sale," since CCPA/CPRA only recognizes monetary exchanges as sale-triggering activity',
      'A "share," a category CPRA added specifically to reach cross-context behavioral advertising disclosures even absent monetary consideration, triggering its own opt-out right',
      'It is not covered by CCPA/CPRA at all, because no money changed hands',
      'Processing of "sensitive personal information" that is automatically exempt from any opt-out requirement',
    ],
    correctIndex: 1,
    explanation:
      'CPRA created the "share" concept specifically to capture cross-context behavioral advertising disclosures that businesses argued fell outside "sale" because no consideration changed hands, and it comes with its own "Do Not Sell or Share" opt-out right. Choice A misses that CPRA closed exactly this gap, and choice C wrongly assumes no consideration means no coverage at all.',
  },
  {
    id: 'cipp-us-state-laws-3',
    domainId: 'cipp-us-state-laws',
    prompt:
      "An Illinois employer implements a fingerprint-based timeclock without first obtaining a written release from employees, who scan their fingerprints daily for two years. Following the Illinois Supreme Court's decision in Cothron v. White Castle, how is the employer's BIPA exposure best characterized?",
    choices: [
      'A single violation occurred at the moment of first collection, capping damages at one statutory penalty per employee',
      'A separate claim can accrue with each individual scan lacking proper consent, meaning damages could compound well beyond a single per-employee violation',
      'BIPA does not apply to employment timeclock systems, only to consumer-facing biometric uses',
      'No violation occurred, because fingerprints are excluded from BIPA\'s definition of "biometric identifier"',
    ],
    correctIndex: 1,
    explanation:
      'Cothron held that a separate BIPA claim can accrue with each scan lacking proper consent rather than just the first collection, significantly increasing potential damages exposure — rejecting the single-accrual theory in choice A. BIPA squarely covers employer use of employee fingerprints, and fingerprints are explicitly listed as a biometric identifier under the statute.',
  },
  {
    id: 'cipp-us-state-laws-4',
    domainId: 'cipp-us-state-laws',
    prompt:
      "A retailer discovers a breach exposing customers' names paired with driver's license numbers in some states, and for other affected customers, names paired with online account usernames and security questions. Why can't the retailer apply a single notification analysis across all affected states?",
    choices: [
      'It can — state breach notification laws are effectively identical, so one analysis will always suffice',
      'States differ in their statutory definitions of "personal information" (some include usernames and security answers, others do not), as well as in notification timelines and content requirements, requiring a state-by-state analysis',
      'Federal law fully preempts and standardizes all state breach notification laws',
      'Only the state where the retailer is incorporated has a valid breach notification law',
    ],
    correctIndex: 1,
    explanation:
      "State breach statutes vary meaningfully in what counts as covered personal information, applicable timelines, and required notice content, so a multi-state breach requires a jurisdiction-by-jurisdiction analysis. There is no general federal preemption of state breach notification laws, and every state (not just the retailer's state of incorporation) now has its own breach notification statute.",
  },
  {
    id: 'cipp-us-state-laws-5',
    domainId: 'cipp-us-state-laws',
    prompt:
      "A company has no physical presence in Virginia but sells software online to Virginia residents, processing the personal data of 120,000 Virginia consumers annually while never selling any personal data. Is the company likely subject to the VCDPA?",
    choices: [
      'No, because the VCDPA applies only to companies that sell personal data',
      'Yes — the VCDPA applies to entities conducting business in Virginia (including online-only businesses) that control or process the personal data of at least 100,000 Virginia consumers in a calendar year, regardless of whether they sell data',
      'No, because the VCDPA only applies to companies with a physical office in Virginia',
      'Yes, but only if the company also meets a minimum revenue threshold that applies to every covered entity, regardless of consumer volume',
    ],
    correctIndex: 1,
    explanation:
      'The VCDPA\'s 100,000-consumer threshold applies on its own, without any sale-of-data requirement; a separate, alternative prong (25,000 consumers plus over 50% of revenue from data sales) is the one tied to selling data, so choice A conflates the two prongs. There is no physical-presence requirement, and the revenue threshold in choice D is not a universal add-on but part of that alternative, lower-volume prong only.',
  },
  {
    id: 'cipp-us-state-laws-6',
    domainId: 'cipp-us-state-laws',
    prompt:
      "A Colorado consumer wants to sue a company directly in court for violating the Colorado Privacy Act, without first involving the state Attorney General. Is this generally possible?",
    choices: [
      'Yes, the Colorado Privacy Act, like the CCPA, includes a broad private right of action for any violation',
      'No — like most comprehensive state privacy laws outside California and Illinois\' biometric law, the Colorado Privacy Act is enforced exclusively by the state Attorney General and district attorneys, with no general private right of action',
      'Yes, but only for violations involving biometric data, since BIPA\'s private right of action applies nationwide',
      'No, because Colorado has no privacy enforcement mechanism at all',
    ],
    correctIndex: 1,
    explanation:
      'Most comprehensive state privacy statutes, including Colorado\'s, are enforced solely by the state Attorney General (and, for Colorado, district attorneys), unlike CCPA\'s narrow private right of action for certain breaches or BIPA\'s broad private right of action. BIPA itself is an Illinois-specific statute and does not apply nationwide, and Colorado clearly does have AG enforcement authority.',
  },
  {
    id: 'cipp-us-state-laws-7',
    domainId: 'cipp-us-state-laws',
    prompt:
      "Since the CPRA amendments took effect, which statement most accurately describes California's privacy enforcement landscape?",
    choices: [
      'The FTC took over all enforcement of California-specific privacy law, replacing state authority',
      'The California Privacy Protection Agency (CPPA) was granted rulemaking and administrative enforcement authority, operating alongside continued civil enforcement authority held by the California Attorney General',
      'Enforcement authority shifted entirely to individual consumers, who now have an unlimited private right of action for any CCPA violation',
      'The California Attorney General lost all authority to enforce the CCPA/CPRA once the CPPA was created',
    ],
    correctIndex: 1,
    explanation:
      "The CPPA, created by CPRA, holds rulemaking and administrative enforcement power concurrently with the Attorney General's continued civil enforcement authority — the AG did not lose that authority, contrary to choice D. The FTC did not assume California-specific enforcement, and the private right of action remains limited to certain data breach scenarios rather than being unlimited.",
  },
  {
    id: 'cipp-us-state-laws-8',
    domainId: 'cipp-us-state-laws',
    prompt:
      "A retailer that operates only in Texas experiences a breach exposing the names and driver's license numbers of customers who live in several different states. Which factor primarily determines which state's breach notification law applies to a given affected individual?",
    choices: [
      'The state where the retailer\'s headquarters is located, regardless of where the affected customers live',
      'Generally, the residency of the affected individual, since most state breach notification laws are drafted to protect their own residents',
      'The state where the retailer\'s servers happen to be physically located',
      'Federal law only, since state breach notification laws do not apply to retailers headquartered outside the affected states',
    ],
    correctIndex: 1,
    explanation:
      "Most state breach notification statutes protect residents of that state regardless of where the breached company is headquartered or where its servers sit, so the applicable law generally follows each individual's residency. There is no general rule limiting these statutes to companies headquartered within the state, and no overriding federal breach notification law displaces this state-by-state framework for general commercial breaches.",
  },
]
