// data/countries.ts

export interface Topic {
  title: string;
  status: 'Addressed' | 'Partial' | 'None';
  icon: string;
}

export interface Country {
  id: string;
  name: string;
  flag: string;
  lawName: string;
  authority: string;
  region: 'Asia' | 'Europe' | 'Americas' | 'Africa' | 'Oceania' | 'Middle East';
  level: 'Comprehensive' | 'Substantial' | 'Moderate' | 'Limited' | 'None';
  overview: string;
  detailedContent?: string;
  topics: Topic[];
  coordinates: { lat: number; lng: number };
  color: string;
}

export const countries: Country[] = [
  // ============================
  // ===== ASIA (15) =====
  // ============================
  {
    id: 'china',
    name: 'China',
    flag: '🇨🇳',
    lawName: 'Personal Information Protection Law (PIPL)',
    authority: 'Cyberspace Administration of China (CAC)',
    region: 'Asia',
    level: 'Comprehensive',
    overview: "China's PIPL, effective November 2021, alongside the Data Security Law and Cybersecurity Law, creates one of the world's most comprehensive data governance frameworks. Notable for strong data localisation requirements, strict cross-border transfer rules, and significant penalties.",
    detailedContent: `
<h2>What is the PIPL?</h2>
<p>The <strong>Personal Information Protection Law of the People's Republic of China</strong> (Chinese: 中华人民共和国个人信息保护法; pinyin: Zhōnghuá rénmín gònghéguó gèrén xìnxī bǎohù fǎ), referred to as the Personal Information Protection Law or ("PIPL"), aims to protect personal information rights and interests, standardize personal information handling activities, and promote the rational use of personal information. It also specifically addresses the transfer of personal data outside China.</p>
<p>The PIPL was adopted on <strong>August 20, 2021</strong>, and is effective <strong>November 1, 2021</strong>. It is related to, and builds on top of both China's Cybersecurity Law ("CSL") and China's Data Security Law ("DSL"). A reference English version was published on December 29, 2021.</p>

<h2>History and Background</h2>
<p>On August 20, 2021, the Standing Committee of the 13th National People's Congress passed the Personal Information Protection Law. The law applies to the activities of handling the personal information of natural persons within the borders of China.</p>
<p>In comparison to countries in the West, China has developed its privacy laws over time at a slower pace. In recent years, though, China has more actively developed regulations, as the nation is considered a "global cyberforce." China's policies differ from Western nations in that their perception of privacy is different due to historical and cultural reasons. During the drafting process, the European Union's General Data Protection Regulation ("GDPR") was used as a model, and in some areas, PIPL closely tracks the GDPR.</p>

<h2>Scope and Jurisdiction</h2>
<p>The PIPL generally covers all organizations operating in China processing personal information.</p>
<h3>Long-arm Jurisdiction</h3>
<p>Some provisions also include long-arm jurisdiction over data collection and processes of organizations outside China. These apply when:</p>
<ul>
<li>The purpose is to provide products or services to natural persons inside the borders;</li>
<li>Analyzing or assessing activities of natural persons inside the borders;</li>
<li>Other circumstances provided in laws or administrative regulations.</li>
</ul>
<p>This presumably applies to offshore or multi-national companies with Chinese customers in China, for example, Amazon who might be shipping goods to a Chinese buyer, or Apple who may have Chinese users in the American App Store. All such entities are required to establish a dedicated entity or appoint a representative within China.</p>

<h3>Exemptions</h3>
<p>There are few exemptions, but one that was added during late drafting provides a non-consent legal basis for handling employee data, though employee consent is still needed for overseas transfer, such as to a global corporate parent.</p>

<h2>Key Themes and Definitions</h2>
<p>Individual privacy, control, and consent are consistent themes throughout the law. The law defines several key terms:</p>
<ul>
<li><strong>Personal Information:</strong> Any type of information that identifies or can identify natural persons recorded electronically or by other means, but does not include anonymized information.</li>
<li><strong>Sensitive Personal Information:</strong> Personal information that once leaked or illegally used can easily cause natural persons to suffer encroachments on their dignity or harms to their persons or property. This includes biometrics (including facial recognition), religious faith, particular identities, medical care and health, financial status, location tracking, and the personal information of minors under the age of 14.</li>
<li><strong>Individuals:</strong> People whose data is being collected or processed (similar to the GDPR's Data Subject).</li>
<li><strong>Personal Information Handlers:</strong> Organizations or individuals that independently make decisions about the purposes and methods of personal information handling.</li>
<li><strong>Entrusted Persons:</strong> External entities who Information Handlers entrust to handle personal information (third parties).</li>
<li><strong>Large Processors:</strong> Companies that process large amounts of data, as defined in Article 40, including Critical Information Infrastructure Operators ("CIIO").</li>
<li><strong>Handling of Personal Information:</strong> Includes personal information collection, storage, use, processing, transmission, provision, disclosure, deletion, etc.</li>
<li><strong>Automated Decision-Making:</strong> The use of computer programs to automatically analyze, evaluate, and make decisions on personal information on personal behavior habits, hobbies, or economic, health, credit status, and so forth.</li>
<li><strong>De-Identification:</strong> The process of handling personal information to make it impossible to identify a specific natural person without the help of additional information.</li>
<li><strong>Anonymization:</strong> The process in which personal information is handled so that it cannot be used to identify a specific natural person and cannot be restored after being so handled.</li>
</ul>

<h2>Legal Basis for Processing</h2>
<p>All personal information collection and processing must have one of the following legal bases:</p>
<ul>
<li>Individuals' consent obtained;</li>
<li>Where necessary to conclude or fulfill a contract in which the individual is an interested party, or where necessary to conduct human resources management according to lawfully formulated labor rules and structures and lawfully concluded collective contracts;</li>
<li>Where necessary to fulfill statutory duties and responsibilities or statutory obligations;</li>
<li>Where necessary to respond to sudden public health incidents or protect natural persons' lives and health, or the security of their property, under emergency conditions;</li>
<li>Handling personal information within a reasonable scope to implement news reporting, public opinion supervision, and other such activities for the public interest;</li>
<li>When handling personal information disclosed by persons themselves or otherwise already lawfully disclosed, within a reasonable scope in accordance with the provisions of this Law;</li>
<li>Other circumstances provided in laws and administrative regulations.</li>
</ul>
<p>Unlike in the GDPR, there is <strong>no legitimate interests basis</strong>. Therefore, most consumers will likely be covered by giving their direct consent (such as for cookies, newsletters, etc.) or by contract fulfillment (such as shipping goods to them or providing services).</p>

<h2>Consent Requirements</h2>
<p>Consent is a major concern of the PIPL and a key legal basis on which handlers can process personal information. If there is no other legal basis for processing data, handlers must get consent for data collection and processing, and this consent can be revoked by any individual at any time. Handlers are not allowed to refuse to provide products or services if an individual withholds or withdraws their consent for non-essential processing.</p>
<p><strong>Separate consent</strong> is specifically required in a number of situations:</p>
<ul>
<li>Transfer of personal data by data controllers to third parties (Article 23);</li>
<li>Publication of personal data (Article 25);</li>
<li>Publication or provision of personal data collected by equipment installed in public places for security purposes, such as personal images (Article 26);</li>
<li>Processing of sensitive personal data (Article 29); and</li>
<li>Cross-border transfers of personal data (Article 39).</li>
</ul>
<p>Consent for these situations cannot be "bundled" and must be obtained separately. Where a change occurs in the purpose of personal information handling, the handling method, or the categories of handled personal information, the individual's consent shall be obtained again.</p>

<h2>Individual Rights</h2>
<p>Individuals have several specific rights under the PIPL – they can:</p>
<ul>
<li><strong>Know & Decide:</strong> Refuse and limit how their data is handled.</li>
<li><strong>Access & Copy:</strong> View and copy their data.</li>
<li><strong>Correct or Complete:</strong> Request to correct inaccurate data.</li>
<li><strong>Erasure:</strong> Request their information be deleted and/or revoke consent.</li>
<li><strong>Explanation:</strong> Request handlers explain their handling of an individual's personal information.</li>
<li><strong>Portability:</strong> Request moving their data to another handler.</li>
</ul>

<h2>Automated Decision Making and Facial Recognition</h2>
<p>There are specific rules for automated decision making in the PIPL, including the right of individuals to opt-out, such as disabling product recommendations. The law specifically requires "transparency of the decision-making and the fairness and justice of the handling result shall be guaranteed, and they may not engage in unreasonable differential treatment of individuals in trading conditions."</p>
<p>Companies pushing delivery or commercial sales to individuals through automated decision-making methods shall simultaneously provide the option to not target an individual's characteristics, or provide the individual with a convenient method to refuse.</p>
<p><strong>Facial recognition:</strong> The PIPL specifically covers the use of facial recognition in public spaces, including that it can only be used for public security reasons unless each individual separately consents. The installation of image collection or personal identity recognition equipment in public venues shall occur as required to safeguard public security and observe relevant State regulations, with clear indicating signs installed.</p>

<h2>Handler Obligations & Impact Assessments</h2>
<p>Personal information handlers have several specific obligations, including formulating internal management structures, implementing categorized management of personal information, adopting technical security measures (encryption, de-identification), determining operational limits, conducting security training, and formulating incident response plans. All handlers must "regularly engage in audits of their personal information handling and compliance."</p>
<p>Under certain circumstances (handling sensitive data, automated decision-making, providing data abroad, etc.), handlers must perform a <strong>personal information protection impact assessment</strong>. These assessments must include whether the handling purpose is lawful and necessary, the influence on individuals' rights and risks, and whether protective measures are effective.</p>

<h2>Data Localisation and Security</h2>
<p>The PIPL has specific requirements on data localization, the storage and processing of personal information in China. Information handlers must take measures to ensure personal information handling conforms to provisions and prevents unauthorized access, leaks, distortion, or loss. Agreements are required when a handler entrusts personal data handling to another handler.</p>

<h2>Breach Notification</h2>
<p>All data leaks must be reported internally, and if "harm may have been created," they may be required to notify the individuals affected. Notification details must include:</p>
<ul>
<li>The information categories, causes, and possible harm caused by the leak, distortion, or loss that occurred or might have occurred;</li>
<li>The remedial measures taken by the personal information handler and measures individuals can adopt to mitigate harm;</li>
<li>Contact method of the personal information handler.</li>
</ul>

<h2>Large Handlers</h2>
<p>Large-scale handlers, such as those "providing important Internet platform services, that have a large number of users, and whose business models are complex," also have specific obligations:</p>
<ul>
<li>Establish and complete personal information protection compliance systems and structures according to State regulations, and establish an independent body composed mainly of outside members to supervise personal information protection circumstances;</li>
<li>Abide by the principles of openness, fairness, and justice; formulate platform rules; and clarify the standards for intra-platform product or service providers;</li>
<li>Stop providing services to product or service providers on the platform that seriously violate laws or administrative regulations;</li>
<li>Regularly release personal information protection social responsibility reports, and accept society's supervision.</li>
</ul>

<h2>Overseas Transfers</h2>
<p>Moving personal information outside China is only allowed if one of these conditions is satisfied:</p>
<ul>
<li>Passing a security assessment organized by the State cybersecurity and information department according to Article 40 of this Law;</li>
<li>Undergoing personal information protection certification conducted by a specialized body;</li>
<li>Concluding a contract with the foreign receiving side in accordance with a standard contract formulated by the State cyberspace and information department;</li>
<li>Other conditions provided in laws and administrative regulations.</li>
</ul>
<p>All such transfers require each individual's separate consent and notification about "the foreign receiving side's name, contact method, handling purpose, handling methods, and personal information categories."</p>
<p>In March 2024, the <strong>Provisions on Promoting and Regulating Cross-Border Data Flows</strong> became effective. These provisions aim to integrate obligations across the Cybersecurity Law, Data Security Law, and PIPL, and require a CAC-led review of data exports across China's borders in certain circumstances.</p>

<h3>Sharing Data with Foreign Governments</h3>
<p>Information handlers are prohibited from sharing any personal information with foreign judicial or law enforcement agencies without approval. This has raised concerns among law firms about how multi-national corporations would respond to judicial inquiries in other countries.</p>

<h2>Government Departments (State Organs)</h2>
<p>The PIPL includes a legal basis for how government ("State Organs") can collect and process data. Generally, the government must follow the same rules as non-government entities, including notifications. There are some exceptions, such as when notification "shall impede State organs' fulfillment of their statutory duties and responsibilities."</p>
`,
    coordinates: { lat: 35.0, lng: 105.0 },
    color: '#EF4444',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Addressed', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Addressed', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Partial', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'Addressed', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Addressed', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Addressed', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'india',
    name: 'India',
    flag: '🇮🇳',
    lawName: 'Digital Personal Data Protection Act (DPDP) 2023',
    authority: 'Data Protection Board of India (DPBI)',
    region: 'Asia',
    level: 'Comprehensive',
    overview: "India's Digital Personal Data Protection Act, 2023 (DPDP Act) is the country's first comprehensive data protection law, enacted after the Supreme Court's landmark Puttaswamy judgment (2017) recognised privacy as a fundamental right under Article 21. The Act regulates only digital personal data and applies to processing within India as well as extraterritorially where goods or services are offered to Indian data principals. It introduces a consent-first model, obligations for Data Fiduciaries, rights for Data Principals, and establishes the Data Protection Board of India as an adjudicatory body. The DPDP Rules, 2025 were notified in November 2025 with a phased 18-month implementation timeline, making compliance a live operational requirement rather than a future concern. Notable features include a unique 'she/her' drafting convention, no distinction between personal and sensitive personal data, and penalties reaching ₹250 crore for security failures.",
    detailedContent: `
<h2>What is the DPDP Act 2023?</h2>
<p>The <strong>Digital Personal Data Protection Act, 2023</strong> (also known as DPDP Act or DPDPA-2023) is an act of the Parliament of India to provide for the processing of digital personal data in a manner that recognises both the right of individuals to protect their personal data and the need to process such personal data for lawful purposes.</p>
<p><strong>Unique fact:</strong> This is the first Act of the Parliament of India where "she/her" pronouns were used, unlike the usual "he/him" pronouns.</p>

<h2>Timeline: From Bill to Act</h2>
<ul>
<li><strong>18 November 2022:</strong> The Ministry of Electronics and Information Technology released the Digital Personal Data Protection Bill, 2022 for public consultation.</li>
<li><strong>5 July 2023:</strong> The cabinet approved the Digital Personal Data Protection Bill, 2023, which was the revised version of the 2022 bill.</li>
<li><strong>3 August 2023:</strong> Digital Personal Data Protection Bill, 2023 was introduced in Lok Sabha, the lower house of the Parliament of India.</li>
<li><strong>7 August 2023:</strong> Digital Personal Data Protection Bill, 2023 was passed by Lok Sabha.</li>
<li><strong>9 August 2023:</strong> Digital Personal Data Protection Bill, 2023 was introduced and passed by Rajya Sabha, the upper house of the Parliament of India.</li>
<li><strong>11 August 2023:</strong> President of India gave assent to the Digital Personal Data Protection Bill, 2023, which made it the Digital Personal Data Protection Act, 2023.</li>
<li><strong>13 November 2025:</strong> Provisions in respect of establishment of the Data Protection Board of India brought into force.</li>
</ul>

<h2>Background: The Right to Privacy Verdict</h2>
<p>On <strong>24 August 2017</strong>, the Supreme Court of India gave the Right to Privacy verdict. In the case of <em>Justice K. S. Puttaswamy (Retd.) and Anr. vs Union of India And Ors.</em>, the Supreme Court held that the Right to Privacy is a fundamental right protected under Article 21 and Part III of the Indian Constitution.</p>
<p>After the verdict, the Government of India set up a data protection framework which started taking steps towards the creation of the data protection legislation after the Supreme Court of India's privacy verdict.</p>
<p>On <strong>22 December 2017</strong>, the constitution of a committee of experts to deliberate on a data protection framework for India took place by the chairmanship of Justice B.N. Srikrishna.</p>
<p>After the Government of India constituted an expert committee, the committee sought public consultation on various white papers on data protection framework for India.</p>
<p>The Personal Data Protection Bill, 2018 draft was released. The committee of experts under chairmanship of Justice B.N. Srikrishna released their Data Protection Committee report.</p>
<p>On <strong>14 August 2018</strong>, the Ministry of Electronics and Information Technology sought feedback on the Draft Personal Data Protection Bill.</p>

<h2>Personal Data Protection Bill, 2019</h2>
<p>The Ministry of Electronics and Information Technology set up a committee to study issues related to data protection. The committee was chaired by retired Supreme Court judge Justice B. N. Srikrishna. The committee submitted the draft version of Personal Data Protection in July 2018. The report was later modified several times by the Government of India and, after receiving the approval of central cabinet, the draft legislation was tabled in the Parliament of India on <strong>11 December 2019</strong>.</p>
<p><strong>On 4 December 2019</strong>, after further deliberations, the Bill was approved by the cabinet ministry of India.</p>
<p><strong>On 11 December 2019</strong>, the Personal Data Protection Bill, 2019 was tabled in Lok Sabha and referred to the Joint Parliamentary Committee.</p>
<p><strong>On 16 December 2021</strong>, the standing committee submitted its report on the bill.</p>
<p><strong>On 3 August 2022</strong>, the Personal Data Protection Bill, 2019 was withdrawn.</p>

<h3>Aim of the 2019 Bill</h3>
<p>The Bill aimed to provide for protection of the privacy of individuals relating to their personal data, specify the flow and usage of personal data, create a relationship of trust between persons and entities processing the personal data, protect the fundamental rights of individuals whose personal data are processed, create a framework for organisational and technical measures in processing of data, lay down norms for social media intermediary, cross-border transfer, accountability of entities processing personal data, remedies for unauthorised and harmful processing, and to establish a Data Protection Authority of India for the said purposes and for matters connected therewith or incidental thereto.</p>
<p>It provided for extensive provisions around collection of consent, assessment of datasets, data flows and transfers of personal data, including to third countries and other aspects around anonymized and non-personal data.</p>

<h3>Criticism and Withdrawal of the 2019 Bill</h3>
<p>The revised 2019 Bill was criticized by <strong>Justice B. N. Srikrishna</strong>, the drafter of the original Bill, as having the ability to turn India into an <strong>"Orwellian State"</strong>. In an interview with Economic Times, Srikrishna said: <em>"The government can at any time access private data or government agency data on grounds of sovereignty or public order. This has dangerous implications."</em></p>
<p>The role of social media intermediaries is being regulated more tightly on several fronts. The Wikimedia Foundation hoped that the PDP bill would prove the lesser evil compared with the Draft Information Technology [Intermediary Guidelines (Amendment) Rules] 2018.</p>
<p>Forbes India reported that "there are concerns that the Bill gives the government blanket powers to access citizens' data."</p>
<p>The bill, after being tabled, was referred to the JPC which was chaired by Meenakshi Lekhi. After it received criticism from stakeholders, opposition, and experts, the bill was withdrawn from the Parliament of India on <strong>3 August 2022</strong>.</p>

<h2>Digital Personal Data Protection Bill, 2023</h2>
<h3>Aim</h3>
<p>The Bill provides for the processing of digital personal data in a manner that recognizes both the rights of the individuals to protect their personal data and the need to process such personal data for lawful purposes and for matters connected therewith or incidental thereto.</p>
<p>The Digital Personal Data Protection Bill, 2023 is the draft version of the Digital Personal Data Protection Act, 2023. Initially the government released the Digital Personal Data Protection Bill, 2022 on <strong>18 November 2022</strong> for public consultation till 2 January 2023, and approved the revised version of the earlier draft, which was released for public consultation, making it the Digital Personal Data Protection Bill, 2023.</p>

<h3>Timeline, Introduction and Passage</h3>
<ul>
<li><strong>18 November 2022:</strong> The Digital Personal Data Protection Bill, 2022 was released for public consultation; the deadline for receiving comments was 17 December 2022.</li>
<li><strong>17 December 2022:</strong> The Ministry of Electronics and Information Technology extended the deadline for receiving public comments till 2 January 2023.</li>
<li><strong>5 July 2023:</strong> The cabinet approved the Digital Personal Data Protection Bill, 2023, which is the revised version of the bill that was put up for public consultation earlier.</li>
<li><strong>3 August 2023:</strong> The revised version of the Digital Personal Data Protection Bill, 2022 — which is the Digital Personal Data Protection Bill, 2023 — was introduced by <strong>Ashwini Vaishnaw</strong>, Minister of Electronics and Information Technology, in Lok Sabha.</li>
<li><strong>7 August 2023:</strong> The bill was passed by Lok Sabha.</li>
<li><strong>9 August 2023:</strong> The bill was introduced and passed in the upper house of the Indian Parliament, Rajya Sabha.</li>
<li><strong>11 August 2023:</strong> <strong>Draupadi Murmu</strong>, President of India, gave assent to the Digital Personal Data Protection Bill, 2023, which made it the Digital Personal Data Protection Act, 2023.</li>
</ul>

<h2>Overview of the Act</h2>
<p>The Act protects digital personal data (that is, the data by which a person may be identified) by providing for the following:</p>
<ul>
<li>The obligations of <strong>Data Fiduciaries</strong> (that is, persons, companies, and government entities who process data) for data processing (that is, collection, storage, or any other operation on personal data).</li>
<li>The rights and duties of <strong>Data Principals</strong> (that is, the person to whom the data relates).</li>
<li>Financial penalties for breach of rights, duties, and obligations.</li>
<li>Establishment of the <strong>Data Protection Board of India</strong>.</li>
</ul>

<h2>DPDP Act vs GDPR: Key Differences</h2>
<p>The DPDP Act, 2023 and the European Union's General Data Protection Regulation (GDPR) share similar principles but differ in key aspects. The DPDP Act applies only to digital personal data, while GDPR covers all forms of personal data. Unlike GDPR, the DPDP Act does not distinguish between personal and sensitive personal data. Both laws grant similar rights to individuals but differ in their approach to legal bases for data processing.</p>
<table>
<thead>
<tr><th>Feature</th><th>DPDP Act 2023 (India)</th><th>GDPR (EU)</th></tr>
</thead>
<tbody>
<tr><td><strong>Scope</strong></td><td>Regulates digital personal data processing; includes extraterritorial application for offering goods/services in India.</td><td>Covers all personal data, digital or otherwise; applies to any organization processing data of individuals within the EU, irrespective of location.</td></tr>
<tr><td><strong>Type of Data</strong></td><td>Limited to digital personal data.</td><td>Covers all personal data, including non-digital.</td></tr>
<tr><td><strong>Legal Basis for Processing</strong></td><td>Consent required with some legitimate use cases (e.g., employment, legal obligations, emergencies). Does not include contractual necessity or legitimate interests.</td><td>Consent if alternative bases do not apply, e.g., legitimate interests, contractual necessity, legal obligations, emergencies ("vital interests"), etc.</td></tr>
<tr><td><strong>Data Principal Rights</strong></td><td>Right to access, correction, erasure, grievance redressal. Unique rights: appoint another to exercise rights on data principal's behalf in event of death/incapacity.</td><td>Rights to be informed, access, rectification, erasure, restriction of processing, data portability, objection, not to be subject to automated decisions.</td></tr>
<tr><td><strong>Cross-Border Data Transfers</strong></td><td>Permitted unless to jurisdictions restricted by Indian Government.</td><td>Permitted based on adequacy decisions.</td></tr>
</tbody>
</table>

<h2>Data Protection Board of India</h2>
<p>Under <strong>Section 18</strong> of the Digital Personal Data Protection Act, 2023, the Data Protection Board of India is a body that adjudicates the dispute(s) between those whose personal data has been given to a platform and the platform which has in turn breached the obligations under the law.</p>

<h2>Rights and Provisions</h2>
<ul>
<li>Right to access personal data.</li>
<li>Right to correction and erasure of data.</li>
<li>Right to revoke consent.</li>
<li>Special provisions for the protection of data related to minors (under 18 children).</li>
<li>Minimum penalty for breach is <strong>₹50 crore INR</strong>.</li>
<li>The terms and conditions and information related to collection of data should be made available in all the <strong>22 languages</strong> in the 8th Schedule of the Indian Constitution.</li>
<li>Right to grievance redressal.</li>
<li>Right to nominate a consent manager to manage their data-related requests on behalf of a data principal (the right to nominate a person to exercise rights in case of death or incapacity).</li>
<li>The Act does not permit processing which is detrimental to the well-being of children or involves their tracking, behavioral monitoring, or targeted advertising.</li>
<li>The Act requires notification of data breaches to the Data Protection Board and affected individuals.</li>
</ul>

<h2>Exemptions Under the Act</h2>
<p>The Act has made exemptions from the regulations related to the Act. They are:</p>
<ul>
<li>The processing of personal data is necessary for enforcing any legal right or claim.</li>
<li>The processing of personal data by any court or tribunal or any other body in India which is entrusted by law with the performance of any judicial or quasi-judicial or regulatory or supervisory function, where such processing is necessary for the performance of such function.</li>
<li>Personal data is processed in the interest of prevention, detection, investigation, or prosecution of any offence or contravention of any law for the time being in force in India.</li>
<li>Personal data of Data Principals not within the territory of India is processed pursuant to any contract entered into with any person outside the territory of India by any person based in India.</li>
<li>The processing is necessary for a scheme of compromise or arrangement or merger or amalgamation of two or more companies, or a reconstruction by way of demerger or otherwise of a company, or transfer of undertaking of one or more company to another company, or involving division of one or more companies, approved by a court or tribunal or other authority competent to do so by any law for the time being in force.</li>
<li>The processing is for the purpose of ascertaining the financial information and assets and liabilities of any person who has defaulted in payment due on account of a loan or advance taken from a financial institution, subject to such processing being in accordance with the provisions regarding disclosure of information or data in any other law for the time being in force.</li>
</ul>

<h2>Criticism of the Act</h2>
<p>Several points of criticism have been recorded by the Editors Guild of India, Press Club of India, RTI activists, and the INDIA Bloc.</p>
<p><strong>Main criticism:</strong> The Act is only applicable to the data collected digitally and when offline data gets digitized. Not having applicability on offline personal data was criticized, as there is no framework on how such data is handled.</p>

<h2>Quick Summary</h2>
<table>
<tbody>
<tr><td><strong>Full Name</strong></td><td>Digital Personal Data Protection Act, 2023</td></tr>
<tr><td><strong>Also Known As</strong></td><td>DPDP Act / DPDPA-2023</td></tr>
<tr><td><strong>Passed</strong></td><td>11 August 2023</td></tr>
<tr><td><strong>Board Established</strong></td><td>13 November 2025</td></tr>
<tr><td><strong>Scope</strong></td><td>Digital personal data only</td></tr>
<tr><td><strong>Regulator</strong></td><td>Data Protection Board of India</td></tr>
<tr><td><strong>Minimum Penalty</strong></td><td>₹50 crore</td></tr>
<tr><td><strong>Unique Feature</strong></td><td>First Indian Act using "she/her" pronouns</td></tr>
<tr><td><strong>Key Difference from GDPR</strong></td><td>No distinction between personal and sensitive personal data; consent-first model</td></tr>
</tbody>
</table>
`,
    coordinates: { lat: 20.0, lng: 77.0 },
    color: '#F59E0B',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Addressed', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Partial', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'Addressed', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Addressed', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Addressed', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'japan',
    name: 'Japan',
    flag: '🇯🇵',
    lawName: 'Act on Protection of Personal Information (APPI)',
    authority: 'Personal Information Protection Commission (PPC)',
    region: 'Asia',
    level: 'Comprehensive',
    overview: "Japan's APPI, amended in 2022, is Asia's oldest data protection law. It establishes a national commission, provides comprehensive rights to individuals, and imposes obligations on data controllers. Japan has received adequacy recognition from the EU.",
    coordinates: { lat: 35.0, lng: 135.0 },
    color: '#EC4899',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Partial', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Partial', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'Addressed', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Addressed', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'south-korea',
    name: 'South Korea',
    flag: '🇰🇷',
    lawName: 'Personal Information Protection Act (PIPA)',
    authority: 'Personal Information Protection Commission (PIPC)',
    region: 'Asia',
    level: 'Comprehensive',
    overview: "South Korea's PIPA, comprehensive and GDPR-like, establishes a dedicated commission and provides extensive rights to data subjects. The law has been instrumental in shaping data protection in Asia.",
    coordinates: { lat: 36.0, lng: 128.0 },
    color: '#8B5CF6',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Addressed', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Addressed', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'Addressed', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Addressed', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'singapore',
    name: 'Singapore',
    flag: '🇸🇬',
    lawName: 'Personal Data Protection Act (PDPA)',
    authority: 'Personal Data Protection Commission (PDPC)',
    region: 'Asia',
    level: 'Comprehensive',
    overview: "Singapore's PDPA, in effect since 2014, is a comprehensive framework for data protection. The PDPC is an active regulator that enforces compliance through advisory guidelines, enforcement decisions, and financial penalties.",
    coordinates: { lat: 1.3, lng: 103.8 },
    color: '#EF4444',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Addressed', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Partial', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'Addressed', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Addressed', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'malaysia',
    name: 'Malaysia',
    flag: '🇲🇾',
    lawName: 'Personal Data Protection Act 2010 (PDPA)',
    authority: 'Personal Data Protection Department (PDPD)',
    region: 'Asia',
    level: 'Substantial',
    overview: "Malaysia's PDPA, effective 2013, provides a framework for processing personal data in commercial transactions. The law established the PDPD, which has issued directives and guidance on key compliance areas.",
    coordinates: { lat: 4.2, lng: 101.9 },
    color: '#3B82F6',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Partial', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Partial', icon: 'Shield' },
      { title: "Children's Data", status: 'Partial', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'None', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'None', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Partial', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'philippines',
    name: 'Philippines',
    flag: '🇵🇭',
    lawName: 'Data Privacy Act of 2012',
    authority: 'National Privacy Commission (NPC)',
    region: 'Asia',
    level: 'Comprehensive',
    overview: "The Philippines' Data Privacy Act, a comprehensive GDPR-like law, established the National Privacy Commission. The NPC actively enforces compliance and issues guidance, making the Philippines a leader in data protection in Southeast Asia.",
    coordinates: { lat: 12.8, lng: 122.0 },
    color: '#22C55E',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Addressed', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Addressed', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'Partial', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Addressed', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'indonesia',
    name: 'Indonesia',
    flag: '🇮🇩',
    lawName: 'Personal Data Protection Law (PDP Law)',
    authority: 'President of Indonesia',
    region: 'Asia',
    level: 'Moderate',
    overview: "Indonesia's PDP Law, enacted in 2022, establishes a comprehensive but evolving framework. The law introduces important concepts like data subject rights and obligations for data controllers, though the independent authority is not yet fully operational.",
    coordinates: { lat: -2.5, lng: 118.0 },
    color: '#EF4444',
    topics: [
      { title: 'Data Protection Authority', status: 'Partial', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Partial', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Partial', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'None', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Addressed', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Partial', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'thailand',
    name: 'Thailand',
    flag: '🇹🇭',
    lawName: 'Personal Data Protection Act (PDPA)',
    authority: 'Personal Data Protection Committee (PDPC)',
    region: 'Asia',
    level: 'Comprehensive',
    overview: "Thailand's PDPA, modeled on GDPR, is a comprehensive law that applies to both public and private sectors. The PDPC is the regulatory authority responsible for enforcement and guidance.",
    coordinates: { lat: 15.0, lng: 101.0 },
    color: '#8B5CF6',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Addressed', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Addressed', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'Partial', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Addressed', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'vietnam',
    name: 'Vietnam',
    flag: '🇻🇳',
    lawName: 'Personal Data Protection Decree (PDPD)',
    authority: 'Ministry of Public Security',
    region: 'Asia',
    level: 'Moderate',
    overview: "Vietnam's PDPD 2023 introduces a comprehensive framework for personal data processing. The law, enforced by the Ministry of Public Security, establishes rights for individuals and obligations for data controllers.",
    coordinates: { lat: 16.0, lng: 108.0 },
    color: '#EF4444',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Addressed', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Partial', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'None', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Addressed', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Partial', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'taiwan',
    name: 'Taiwan',
    flag: '🇹🇼',
    lawName: 'Personal Data Protection Act (PDPA)',
    authority: 'National Development Council (NDC)',
    region: 'Asia',
    level: 'Comprehensive',
    overview: "Taiwan's PDPA, effective since 2012 and amended multiple times, provides a comprehensive framework for personal data protection. The law covers both public and private sectors and includes provisions for cross-border data transfers.",
    coordinates: { lat: 23.5, lng: 121.0 },
    color: '#3B82F6',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Partial', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Addressed', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'Partial', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Addressed', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'hong-kong',
    name: 'Hong Kong',
    flag: '🇭🇰',
    lawName: 'Personal Data (Privacy) Ordinance (PDPO)',
    authority: 'Office of the Privacy Commissioner for Personal Data (PCPD)',
    region: 'Asia',
    level: 'Substantial',
    overview: "Hong Kong's PDPO, in effect since 1996, is Asia's oldest data protection law. The PCPD is an active regulator that enforces compliance through investigations, enforcement notices, and guidance.",
    coordinates: { lat: 22.3, lng: 114.2 },
    color: '#22C55E',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Partial', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Partial', icon: 'Shield' },
      { title: "Children's Data", status: 'Partial', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Addressed', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'None', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Partial', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'pakistan',
    name: 'Pakistan',
    flag: '🇵🇰',
    lawName: 'Personal Data Protection Bill (PDPB)',
    authority: 'Ministry of IT and Telecommunication',
    region: 'Asia',
    level: 'Moderate',
    overview: "Pakistan's PDPB is currently under consideration and is expected to establish a comprehensive framework for data protection. The law will create a Data Protection Authority and define obligations for data controllers.",
    coordinates: { lat: 30.0, lng: 70.0 },
    color: '#F59E0B',
    topics: [
      { title: 'Data Protection Authority', status: 'Partial', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Partial', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Partial', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Partial', icon: 'Shield' },
      { title: "Children's Data", status: 'Partial', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'None', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'None', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'None', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Addressed', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Partial', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'bangladesh',
    name: 'Bangladesh',
    flag: '🇧🇩',
    lawName: 'Data Protection Act 2023',
    authority: 'Digital Security Agency',
    region: 'Asia',
    level: 'Moderate',
    overview: "Bangladesh's Data Protection Act 2023 establishes a framework for data protection in the country. The law applies to both public and private sectors and includes provisions for data subject rights and obligations for data controllers.",
    coordinates: { lat: 24.0, lng: 90.0 },
    color: '#8B5CF6',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Partial', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Partial', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Partial', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'None', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'None', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'None', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Addressed', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Partial', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'sri-lanka',
    name: 'Sri Lanka',
    flag: '🇱🇰',
    lawName: 'Personal Data Protection Act (PDPA)',
    authority: 'Data Protection Authority (DPA)',
    region: 'Asia',
    level: 'Moderate',
    overview: "Sri Lanka's PDPA, effective 2022, establishes a moderate framework for data protection. The law creates a Data Protection Authority and provides rights to data subjects.",
    coordinates: { lat: 7.0, lng: 81.0 },
    color: '#3B82F6',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Partial', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Partial', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Partial', icon: 'Shield' },
      { title: "Children's Data", status: 'Partial', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'None', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'None', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'None', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Partial', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },

  // ============================
  // ===== EUROPE (12) =====
  // ============================
  {
    id: 'eu',
    name: 'European Union',
    flag: '🇪🇺',
    lawName: 'General Data Protection Regulation (GDPR)',
    authority: 'European Data Protection Board (EDPB)',
    region: 'Europe',
    level: 'Comprehensive',
    overview: "The GDPR is the world's most influential data protection framework. It provides comprehensive rights to individuals, imposes strict obligations on data controllers and processors, and established the One-Stop-Shop mechanism for cross-border enforcement.",
    coordinates: { lat: 50.0, lng: 10.0 },
    color: '#3B82F6',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Addressed', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Addressed', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'Addressed', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Addressed', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    lawName: 'UK GDPR & Data Protection Act 2018',
    authority: "Information Commissioner's Office (ICO)",
    region: 'Europe',
    level: 'Comprehensive',
    overview: "Post-Brexit, the UK has retained GDPR principles through the UK GDPR and Data Protection Act 2018. The ICO remains an active regulator, and the UK maintains its adequacy decision from the EU.",
    coordinates: { lat: 55.0, lng: -3.0 },
    color: '#8B5CF6',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Addressed', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Addressed', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'Addressed', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Addressed', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    lawName: 'Federal Data Protection Act (BDSG)',
    authority: 'Federal Commissioner for Data Protection (BfDI)',
    region: 'Europe',
    level: 'Comprehensive',
    overview: "Germany's BDSG, complemented by GDPR, provides a comprehensive data protection framework. The law includes sector-specific provisions and is enforced by the BfDI, which is an active regulator.",
    coordinates: { lat: 51.0, lng: 10.0 },
    color: '#EF4444',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Addressed', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Addressed', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Addressed', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'Addressed', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Addressed', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'france',
    name: 'France',
    flag: '🇫🇷',
    lawName: 'Data Protection Act (Loi Informatique et Libertés)',
    authority: 'CNIL (Commission Nationale de l\'Informatique et des Libertés)',
    region: 'Europe',
    level: 'Comprehensive',
    overview: "France's Data Protection Act, complemented by GDPR, provides a comprehensive framework. The CNIL is an active regulator that enforces compliance and issues guidance to organizations.",
    coordinates: { lat: 46.0, lng: 2.0 },
    color: '#3B82F6',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Addressed', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Addressed', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Addressed', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'Addressed', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Addressed', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'italy',
    name: 'Italy',
    flag: '🇮🇹',
    lawName: 'Personal Data Protection Code (Codice Privacy)',
    authority: 'Italian Data Protection Authority (Garante Privacy)',
    region: 'Europe',
    level: 'Comprehensive',
    overview: "Italy's Privacy Code, complemented by GDPR, provides a comprehensive framework. The Garante Privacy is an active regulator that enforces compliance and issues guidance.",
    coordinates: { lat: 42.0, lng: 12.0 },
    color: '#22C55E',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Addressed', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Addressed', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'Addressed', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Addressed', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'spain',
    name: 'Spain',
    flag: '🇪🇸',
    lawName: 'Organic Law on Data Protection (LOPDGDD)',
    authority: 'Spanish Data Protection Agency (AEPD)',
    region: 'Europe',
    level: 'Comprehensive',
    overview: "Spain's LOPDGDD, complemented by GDPR, provides a comprehensive framework. The AEPD is an active regulator that enforces compliance and issues guidance to organizations.",
    coordinates: { lat: 40.0, lng: -4.0 },
    color: '#F59E0B',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Addressed', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Addressed', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'Addressed', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Addressed', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'netherlands',
    name: 'Netherlands',
    flag: '🇳🇱',
    lawName: 'Dutch Data Protection Act (UAVG)',
    authority: 'Dutch Data Protection Authority (AP)',
    region: 'Europe',
    level: 'Comprehensive',
    overview: "The Netherlands' UAVG, complemented by GDPR, provides a comprehensive framework. The AP is an active regulator that enforces compliance and issues guidance.",
    coordinates: { lat: 52.0, lng: 5.0 },
    color: '#EF4444',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Addressed', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Addressed', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'Addressed', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Addressed', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'ireland',
    name: 'Ireland',
    flag: '🇮🇪',
    lawName: 'Data Protection Act 2018',
    authority: 'Data Protection Commission (DPC)',
    region: 'Europe',
    level: 'Comprehensive',
    overview: "Ireland's Data Protection Act 2018, complemented by GDPR, establishes the DPC as the lead regulator for many global tech companies. The DPC is one of the most active regulators in Europe.",
    coordinates: { lat: 53.0, lng: -8.0 },
    color: '#22C55E',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Addressed', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Addressed', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'Addressed', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Addressed', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'poland',
    name: 'Poland',
    flag: '🇵🇱',
    lawName: 'Data Protection Act of 2018',
    authority: 'Personal Data Protection Office (UODO)',
    region: 'Europe',
    level: 'Comprehensive',
    overview: "Poland's Data Protection Act, complemented by GDPR, provides a comprehensive framework. The UODO is an active regulator that enforces compliance and issues guidance.",
    coordinates: { lat: 52.0, lng: 19.0 },
    color: '#8B5CF6',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Addressed', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Addressed', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'Addressed', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Addressed', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'sweden',
    name: 'Sweden',
    flag: '🇸🇪',
    lawName: 'Data Protection Act (2018:218)',
    authority: 'Swedish Authority for Privacy Protection (IMY)',
    region: 'Europe',
    level: 'Comprehensive',
    overview: "Sweden's Data Protection Act, complemented by GDPR, provides a comprehensive framework. The IMY is an active regulator that enforces compliance and issues guidance.",
    coordinates: { lat: 60.0, lng: 18.0 },
    color: '#3B82F6',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Addressed', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Addressed', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'Addressed', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Addressed', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'belgium',
    name: 'Belgium',
    flag: '🇧🇪',
    lawName: 'Data Protection Act of 2018',
    authority: 'Belgian Data Protection Authority (GBA)',
    region: 'Europe',
    level: 'Comprehensive',
    overview: "Belgium's Data Protection Act, complemented by GDPR, provides a comprehensive framework. The GBA is an active regulator that enforces compliance and issues guidance.",
    coordinates: { lat: 50.5, lng: 4.5 },
    color: '#F59E0B',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Addressed', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Addressed', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'Addressed', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Addressed', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'turkey',
    name: 'Turkey',
    flag: '🇹🇷',
    lawName: 'Law on Protection of Personal Data (KVKK)',
    authority: 'Personal Data Protection Authority (KVKK)',
    region: 'Europe',
    level: 'Comprehensive',
    overview: "Turkey's KVKK, effective 2016, is modeled on GDPR but has its own specificities. The law applies to both public and private sectors and established the KVKK authority which actively enforces compliance.",
    coordinates: { lat: 39.0, lng: 35.0 },
    color: '#EF4444',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Addressed', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Addressed', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'Partial', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Addressed', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Partial', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'switzerland',
    name: 'Switzerland',
    flag: '🇨🇭',
    lawName: 'Federal Act on Data Protection (FADP)',
    authority: 'Federal Data Protection and Information Commissioner (FDPIC)',
    region: 'Europe',
    level: 'Comprehensive',
    overview: "Switzerland's revised FADP, effective 2023, is a modern, GDPR-like framework. It maintains adequacy with the EU and is enforced by the FDPIC, which is an experienced data protection authority.",
    coordinates: { lat: 46.0, lng: 8.0 },
    color: '#EF4444',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Addressed', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Addressed', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'Addressed', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Partial', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'norway',
    name: 'Norway',
    flag: '🇳🇴',
    lawName: 'GDPR (as EEA Member)',
    authority: 'Norwegian Data Protection Authority (Datatilsynet)',
    region: 'Europe',
    level: 'Comprehensive',
    overview: "Norway, as an EEA member, has implemented the GDPR. The Norwegian Data Protection Authority is an active regulator that enforces compliance and issues guidance to organizations.",
    coordinates: { lat: 62.0, lng: 10.0 },
    color: '#EF4444',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Addressed', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Addressed', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'Addressed', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Addressed', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },

  // ============================
  // ===== AMERICAS (8) =====
  // ============================
  {
    id: 'usa',
    name: 'United States',
    flag: '🇺🇸',
    lawName: 'State-Level Privacy Laws (CCPA, CPRA, etc.)',
    authority: 'Various State Attorneys General',
    region: 'Americas',
    level: 'Substantial',
    overview: "The US has a patchwork of state-level data protection laws, led by California's CCPA/CPRA. Other states have followed with their own frameworks. Federal sector-specific laws apply to healthcare (HIPAA), finance (GLBA), and children (COPPA).",
    coordinates: { lat: 37.0, lng: -95.0 },
    color: '#22C55E',
    topics: [
      { title: 'Data Protection Authority', status: 'Partial', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Partial', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Partial', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Addressed', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Addressed', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'Partial', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Partial', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'brazil',
    name: 'Brazil',
    flag: '🇧🇷',
    lawName: 'Lei Geral de Proteção de Dados (LGPD)',
    authority: 'Autoridade Nacional de Proteção de Dados (ANPD)',
    region: 'Americas',
    level: 'Comprehensive',
    overview: "Brazil's LGPD, effective September 2020, is Latin America's most comprehensive data protection law. Modeled on GDPR, it establishes a National Data Protection Authority (ANPD) and provides extensive rights to data subjects.",
    coordinates: { lat: -14.0, lng: -51.0 },
    color: '#22D3EE',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Addressed', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Addressed', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'Partial', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Addressed', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    lawName: 'Personal Information Protection and Electronic Documents Act (PIPEDA)',
    authority: 'Office of the Privacy Commissioner (OPC)',
    region: 'Americas',
    level: 'Substantial',
    overview: "Canada's PIPEDA, in effect since 2001, is a federal law governing private sector data processing. The OPC is an active regulator that enforces compliance and offers guidance.",
    coordinates: { lat: 45.0, lng: -75.0 },
    color: '#EF4444',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Partial', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Addressed', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'Partial', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Partial', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'mexico',
    name: 'Mexico',
    flag: '🇲🇽',
    lawName: 'Ley Federal de Protección de Datos Personales (LFPD)',
    authority: 'INAI (National Institute for Transparency)',
    region: 'Americas',
    level: 'Comprehensive',
    overview: "Mexico's LFPD, effective 2010, is a comprehensive data protection law that applies to both public and private sectors. The INAI is the independent authority responsible for enforcement.",
    coordinates: { lat: 19.0, lng: -99.0 },
    color: '#22C55E',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Addressed', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Addressed', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'Partial', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Addressed', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'argentina',
    name: 'Argentina',
    flag: '🇦🇷',
    lawName: 'Personal Data Protection Law No. 25,326',
    authority: 'Agency for Access to Public Information (AAIP)',
    region: 'Americas',
    level: 'Comprehensive',
    overview: "Argentina's law, effective in 2000, is Latin America's first comprehensive data protection law. It has been recognized as adequate by the EU and is enforced by the AAIP.",
    coordinates: { lat: -35.0, lng: -63.0 },
    color: '#3B82F6',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Partial', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Addressed', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'None', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Partial', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'chile',
    name: 'Chile',
    flag: '🇨🇱',
    lawName: 'Law No. 19,628 on Protection of Private Life',
    authority: 'Agency for Data Protection',
    region: 'Americas',
    level: 'Moderate',
    overview: "Chile's Data Protection Law, though established, provides a moderate level of protection. The law is currently being updated to strengthen the framework and create an independent data protection authority.",
    coordinates: { lat: -35.0, lng: -71.0 },
    color: '#8B5CF6',
    topics: [
      { title: 'Data Protection Authority', status: 'Partial', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Partial', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'None', icon: 'Shield' },
      { title: "Children's Data", status: 'Partial', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'None', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Partial', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'None', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Partial', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'colombia',
    name: 'Colombia',
    flag: '🇨🇴',
    lawName: 'Statutory Law 1581 of 2012',
    authority: 'Superintendence of Industry and Commerce (SIC)',
    region: 'Americas',
    level: 'Substantial',
    overview: "Colombia's Statutory Law 1581, effective 2012, provides a substantial framework for data protection. The SIC is the regulatory authority responsible for enforcement and guidance.",
    coordinates: { lat: 4.0, lng: -72.0 },
    color: '#F59E0B',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Addressed', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Partial', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'None', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Addressed', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'peru',
    name: 'Peru',
    flag: '🇵🇪',
    lawName: 'Personal Data Protection Law No. 29733',
    authority: 'National Authority for Personal Data Protection',
    region: 'Americas',
    level: 'Moderate',
    overview: "Peru's Personal Data Protection Law, effective 2013, provides a moderate framework. The law applies to both public and private sectors and includes provisions for data subject rights.",
    coordinates: { lat: -9.0, lng: -75.0 },
    color: '#EF4444',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Partial', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Partial', icon: 'Shield' },
      { title: "Children's Data", status: 'Partial', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Partial', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'None', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Partial', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },

  // ============================
  // ===== MIDDLE EAST (6) =====
  // ============================
  {
    id: 'saudi-arabia',
    name: 'Saudi Arabia',
    flag: '🇸🇦',
    lawName: 'Personal Data Protection Law (PDPL) 2021',
    authority: 'Saudi Data & AI Authority (SDAIA)',
    region: 'Middle East',
    level: 'Substantial',
    overview: "Saudi Arabia's PDPL, effective 2023, applies to processing of personal data within Saudi Arabia and extraterritorially. SDAIA oversees enforcement. The law includes data localisation provisions and imposes significant penalties for non-compliance.",
    coordinates: { lat: 23.0, lng: 45.0 },
    color: '#22C55E',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Addressed', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Addressed', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'Addressed', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Addressed', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Addressed', icon: 'Shield' },
      { title: 'Government Data', status: 'Partial', icon: 'Building' },
    ],
  },
  {
    id: 'uae',
    name: 'United Arab Emirates',
    flag: '🇦🇪',
    lawName: 'Federal Decree-Law No. 45 of 2021',
    authority: 'Ministry of AI & Data',
    region: 'Middle East',
    level: 'Substantial',
    overview: "The UAE's Federal Data Protection Law, effective 2022, establishes a comprehensive framework for protecting personal data. The law applies to all organizations operating in the UAE and includes provisions for data subject rights and cross-border transfers.",
    coordinates: { lat: 24.0, lng: 54.0 },
    color: '#F59E0B',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Addressed', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Addressed', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'Addressed', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Addressed', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'israel',
    name: 'Israel',
    flag: '🇮🇱',
    lawName: 'Privacy Protection Law, 1981',
    authority: 'Privacy Protection Authority (PPA)',
    region: 'Middle East',
    level: 'Moderate',
    overview: "Israel's Privacy Protection Law, though established, has moderate coverage. The law is currently under review and expected to be updated to provide a more comprehensive framework in line with international standards.",
    coordinates: { lat: 31.0, lng: 34.0 },
    color: '#3B82F6',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Partial', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Partial', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Addressed', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'None', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Partial', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'qatar',
    name: 'Qatar',
    flag: '🇶🇦',
    lawName: 'Personal Data Protection Law No. 13 of 2016',
    authority: 'Ministry of Transport and Communications',
    region: 'Middle East',
    level: 'Moderate',
    overview: "Qatar's Personal Data Protection Law, effective 2016, provides a moderate framework. The law applies to both public and private sectors and establishes obligations for data controllers.",
    coordinates: { lat: 25.0, lng: 51.0 },
    color: '#8B5CF6',
    topics: [
      { title: 'Data Protection Authority', status: 'Partial', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Partial', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Partial', icon: 'Shield' },
      { title: "Children's Data", status: 'Partial', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'None', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Partial', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'None', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Addressed', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Partial', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'bahrain',
    name: 'Bahrain',
    flag: '🇧🇭',
    lawName: 'Personal Data Protection Law (PDPL)',
    authority: 'Ministry of Interior',
    region: 'Middle East',
    level: 'Moderate',
    overview: "Bahrain's PDPL, effective 2023, establishes a moderate framework for data protection. The law applies to both public and private sectors and includes provisions for data subject rights.",
    coordinates: { lat: 26.0, lng: 50.0 },
    color: '#22C55E',
    topics: [
      { title: 'Data Protection Authority', status: 'Partial', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Partial', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Partial', icon: 'Shield' },
      { title: "Children's Data", status: 'Partial', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'None', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Partial', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'None', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Addressed', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Partial', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'kuwait',
    name: 'Kuwait',
    flag: '🇰🇼',
    lawName: 'Personal Data Protection Law',
    authority: 'Ministry of Commerce and Industry',
    region: 'Middle East',
    level: 'Moderate',
    overview: "Kuwait's Personal Data Protection Law is currently being developed, with a draft framework expected to align with international standards, including provisions for data subject rights and obligations for data controllers.",
    coordinates: { lat: 29.0, lng: 47.0 },
    color: '#3B82F6',
    topics: [
      { title: 'Data Protection Authority', status: 'Partial', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Partial', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Partial', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Partial', icon: 'Shield' },
      { title: "Children's Data", status: 'Partial', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'None', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'None', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'None', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Addressed', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Partial', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },

  // ============================
  // ===== AFRICA (7) =====
  // ============================
  {
    id: 'south-africa',
    name: 'South Africa',
    flag: '🇿🇦',
    lawName: 'Protection of Personal Information Act (POPIA)',
    authority: 'Information Regulator',
    region: 'Africa',
    level: 'Comprehensive',
    overview: "South Africa's POPIA, effective 2021, is Africa's most comprehensive data protection law. It established the Information Regulator, which enforces compliance and issues guidance to organizations.",
    coordinates: { lat: -30.0, lng: 25.0 },
    color: '#EF4444',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Addressed', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Addressed', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'Partial', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Addressed', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'kenya',
    name: 'Kenya',
    flag: '🇰🇪',
    lawName: 'Data Protection Act, 2019',
    authority: 'Office of the Data Protection Commissioner (ODPC)',
    region: 'Africa',
    level: 'Substantial',
    overview: "Kenya's Data Protection Act, effective 2019, is a comprehensive law that established the ODPC. The ODPC has been actively enforcing compliance and issuing guidance since becoming operational.",
    coordinates: { lat: -0.0, lng: 38.0 },
    color: '#22C55E',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Addressed', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Addressed', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'Partial', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Addressed', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'nigeria',
    name: 'Nigeria',
    flag: '🇳🇬',
    lawName: 'Nigeria Data Protection Regulation (NDPR)',
    authority: 'Nigeria Data Protection Bureau (NDPB)',
    region: 'Africa',
    level: 'Moderate',
    overview: "Nigeria's NDPR, effective 2019, is a moderate framework that applies to all organizations processing personal data. The NDPB is the regulatory authority responsible for enforcing compliance.",
    coordinates: { lat: 9.0, lng: 8.0 },
    color: '#F59E0B',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Addressed', icon: 'Shield' },
      { title: "Children's Data", status: 'Partial', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Partial', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'None', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Partial', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'egypt',
    name: 'Egypt',
    flag: '🇪🇬',
    lawName: 'Data Protection Law No. 151 of 2020',
    authority: 'Egyptian Data Protection Center (EDPC)',
    region: 'Africa',
    level: 'Moderate',
    overview: "Egypt's Data Protection Law, effective 2020, establishes a moderate framework for data protection. The EDPC is the regulatory authority responsible for enforcement and oversight.",
    coordinates: { lat: 26.0, lng: 30.0 },
    color: '#8B5CF6',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Partial', icon: 'Shield' },
      { title: "Children's Data", status: 'Partial', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Partial', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'None', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Addressed', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Partial', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'ghana',
    name: 'Ghana',
    flag: '🇬🇭',
    lawName: 'Data Protection Act, 2012 (Act 843)',
    authority: 'Data Protection Commission (DPC)',
    region: 'Africa',
    level: 'Substantial',
    overview: "Ghana's Data Protection Act, effective 2012, provides a substantial framework. The DPC is the regulatory authority responsible for enforcement and guidance to organizations.",
    coordinates: { lat: 7.9, lng: -1.0 },
    color: '#EF4444',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Addressed', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Partial', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'None', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Partial', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'morocco',
    name: 'Morocco',
    flag: '🇲🇦',
    lawName: 'Law No. 09-08 on Personal Data Protection',
    authority: 'National Commission for Data Protection (CNDP)',
    region: 'Africa',
    level: 'Substantial',
    overview: "Morocco's Law No. 09-08, effective 2009, provides a substantial framework for data protection. The CNDP is the regulatory authority responsible for enforcement and guidance.",
    coordinates: { lat: 31.0, lng: -7.0 },
    color: '#F59E0B',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Addressed', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Partial', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'None', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Addressed', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'tanzania',
    name: 'Tanzania',
    flag: '🇹🇿',
    lawName: 'Personal Data Protection Act, 2022',
    authority: 'Personal Data Protection Commission (PDPC)',
    region: 'Africa',
    level: 'Moderate',
    overview: "Tanzania's Personal Data Protection Act, effective 2022, establishes a moderate framework. The PDPC is the regulatory authority responsible for enforcement and oversight.",
    coordinates: { lat: -6.0, lng: 34.0 },
    color: '#22C55E',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Partial', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Partial', icon: 'Shield' },
      { title: "Children's Data", status: 'Partial', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'None', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'None', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'None', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Addressed', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Partial', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },

  // ============================
  // ===== OCEANIA (3) =====
  // ============================
  {
    id: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    lawName: 'Privacy Act 1988',
    authority: 'Office of the Australian Information Commissioner (OAIC)',
    region: 'Oceania',
    level: 'Substantial',
    overview: "Australia's Privacy Act, effective 1988, is a substantial framework. The OAIC is the independent authority that enforces compliance and provides guidance on the law.",
    coordinates: { lat: -25.0, lng: 134.0 },
    color: '#3B82F6',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Partial', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Addressed', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'Partial', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Partial', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'new-zealand',
    name: 'New Zealand',
    flag: '🇳🇿',
    lawName: 'Privacy Act 2020',
    authority: 'Office of the Privacy Commissioner (OPC)',
    region: 'Oceania',
    level: 'Comprehensive',
    overview: "New Zealand's Privacy Act 2020, effective December 2020, is a modern and comprehensive law. The OPC is an active regulator that enforces compliance and offers guidance to organizations.",
    coordinates: { lat: -42.0, lng: 173.0 },
    color: '#EF4444',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Addressed', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Addressed', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'Addressed', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Addressed', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'papua-new-guinea',
    name: 'Papua New Guinea',
    flag: '🇵🇬',
    lawName: 'Data Protection Bill',
    authority: 'Ministry of ICT',
    region: 'Oceania',
    level: 'Limited',
    overview: "Papua New Guinea's Data Protection Bill is currently being developed, with expectations to align with international standards. The law is expected to establish a framework for data protection in the country.",
    coordinates: { lat: -6.0, lng: 147.0 },
    color: '#F59E0B',
    topics: [
      { title: 'Data Protection Authority', status: 'None', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Partial', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Partial', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'None', icon: 'Globe' },
      { title: 'Breach Notification', status: 'None', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'None', icon: 'Shield' },
      { title: "Children's Data", status: 'None', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Partial', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'None', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'None', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'None', icon: 'Scale' },
      { title: 'Data Localisation', status: 'None', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'None', icon: 'Shield' },
      { title: 'Government Data', status: 'Partial', icon: 'Building' },
    ],
  },








    {
    id: 'russia',
    name: 'Russia',
    flag: '🇷🇺',
    lawName: 'Federal Law No. 152-FZ on Personal Data',
    authority: 'Roskomnadzor',
    region: 'Europe',
    level: 'Moderate',
    overview: "Russia's data protection law focuses on data localisation, requiring personal data of Russian citizens to be stored within Russia. Roskomnadzor enforces compliance.",
    coordinates: { lat: 60.0, lng: 100.0 },
    color: '#3B82F6',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Partial', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Partial', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Partial', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'None', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Addressed', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'Partial', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },


  // ===== ADDITIONAL COUNTRIES (reviewed October 2026) =====
  {
    id: 'uruguay',
    name: 'Uruguay',
    flag: '🇺🇾',
    lawName: 'Personal Data Protection Law No. 18,331',
    authority: 'Regulatory and Control Unit of Personal Data (URCDP)',
    region: 'Americas',
    level: 'Substantial',
    overview: "Uruguay's Law No. 18,331 establishes rights and duties for personal-data processing and is complemented by implementing regulations. The URCDP supervises compliance; verify current rules and international-transfer requirements for the specific use case.",
    coordinates: { lat: -32.5, lng: -55.8 },
    color: '#3B82F6',
    topics: [
      { title: "Data Protection Authority", status: 'Addressed', icon: 'Building' },
      { title: "Consent Requirements", status: 'Addressed', icon: 'CheckCircle' },
      { title: "Data Subject Rights", status: 'Addressed', icon: 'Users' },
      { title: "Cross-Border Transfer", status: 'Addressed', icon: 'Globe' },
      { title: "Breach Notification", status: 'Partial', icon: 'AlertCircle' },
      { title: "DPO Requirements", status: 'Partial', icon: 'Shield' },
      { title: "Children's Data", status: 'Partial', icon: 'Users' },
      { title: "Penalties & Enforcement", status: 'Addressed', icon: 'AlertTriangle' },
      { title: "Sector-Specific Rules", status: 'Partial', icon: 'Database' },
      { title: "Cookie/Tracking", status: 'Partial', icon: 'FileText' },
      { title: "AI & Automated Decisions", status: 'Partial', icon: 'Scale' },
      { title: "Data Localisation", status: 'Partial', icon: 'Database' },
      { title: "Significant Data Fiduciary", status: 'None', icon: 'Shield' },
      { title: "Government Data", status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'ecuador',
    name: 'Ecuador',
    flag: '🇪🇨',
    lawName: 'Organic Law on Personal Data Protection (LOPDP)',
    authority: 'Superintendence of Personal Data Protection (SPDP)',
    region: 'Americas',
    level: 'Comprehensive',
    overview: "Ecuador's 2021 LOPDP is supplemented by its General Regulation and evolving SPDP secondary rules. The SPDP supervises and enforces the framework; implementation details should be checked against current resolutions.",
    coordinates: { lat: -1.4, lng: -78.4 },
    color: '#22C55E',
    topics: [
      { title: "Data Protection Authority", status: 'Addressed', icon: 'Building' },
      { title: "Consent Requirements", status: 'Addressed', icon: 'CheckCircle' },
      { title: "Data Subject Rights", status: 'Addressed', icon: 'Users' },
      { title: "Cross-Border Transfer", status: 'Addressed', icon: 'Globe' },
      { title: "Breach Notification", status: 'Addressed', icon: 'AlertCircle' },
      { title: "DPO Requirements", status: 'Addressed', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: "Penalties & Enforcement", status: 'Addressed', icon: 'AlertTriangle' },
      { title: "Sector-Specific Rules", status: 'Partial', icon: 'Database' },
      { title: "Cookie/Tracking", status: 'Partial', icon: 'FileText' },
      { title: "AI & Automated Decisions", status: 'Partial', icon: 'Scale' },
      { title: "Data Localisation", status: 'Partial', icon: 'Database' },
      { title: "Significant Data Fiduciary", status: 'None', icon: 'Shield' },
      { title: "Government Data", status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'uganda',
    name: 'Uganda',
    flag: '🇺🇬',
    lawName: 'Data Protection and Privacy Act, 2019',
    authority: 'Personal Data Protection Office (PDPO)',
    region: 'Africa',
    level: 'Substantial',
    overview: "Uganda's Data Protection and Privacy Act, 2019 regulates the collection and processing of personal data and provides rights to individuals. The PDPO administers registration and compliance functions.",
    coordinates: { lat: 1.4, lng: 32.3 },
    color: '#F59E0B',
    topics: [
      { title: "Data Protection Authority", status: 'Addressed', icon: 'Building' },
      { title: "Consent Requirements", status: 'Addressed', icon: 'CheckCircle' },
      { title: "Data Subject Rights", status: 'Addressed', icon: 'Users' },
      { title: "Cross-Border Transfer", status: 'Addressed', icon: 'Globe' },
      { title: "Breach Notification", status: 'Addressed', icon: 'AlertCircle' },
      { title: "DPO Requirements", status: 'Addressed', icon: 'Shield' },
      { title: "Children's Data", status: 'Partial', icon: 'Users' },
      { title: "Penalties & Enforcement", status: 'Addressed', icon: 'AlertTriangle' },
      { title: "Sector-Specific Rules", status: 'Partial', icon: 'Database' },
      { title: "Cookie/Tracking", status: 'Partial', icon: 'FileText' },
      { title: "AI & Automated Decisions", status: 'None', icon: 'Scale' },
      { title: "Data Localisation", status: 'Partial', icon: 'Database' },
      { title: "Significant Data Fiduciary", status: 'None', icon: 'Shield' },
      { title: "Government Data", status: 'Addressed', icon: 'Building' },
    ],
  },
    {
    id: 'rwanda',
    name: 'Rwanda',
    flag: '🇷🇼',
    lawName: 'Law No. 058/2021 on the Protection of Personal Data and Privacy',
    authority: 'National Cyber Security Authority (NCSA)',
    region: 'Africa',
    level: 'Comprehensive',
    overview: "Rwanda enacted its first comprehensive data protection legislation, Law No. 058/2021 on the Protection of Personal Data and Privacy, on 13 October 2021. The law entered into force on 15 October 2021, with a transition period that ended in October 2023. Notably, Rwanda opted not to create a separate data protection authority; instead, the National Cyber Security Authority (NCSA) serves as the supervisory authority. The law has extra-territorial scope, mandatory registration for controllers and processors, a strict 48-hour breach notification requirement, and a unique right for data subjects to designate an heir to their personal data. Penalties can reach up to 10 years' imprisonment and 5% of annual turnover for criminal offences.",
    detailedContent: `
<h2>What is Rwanda's Data Protection Law?</h2>
<p>Rwanda's first comprehensive data protection legislation, <strong>Law No. 058/2021 Relating to the Protection of Personal Data and Privacy</strong>, was enacted on 13 October 2021 and officially gazetted on 15 October 2021. It came into force on the date of its publication in the Official Gazette.</p>
<p>The law aims to protect personal data and privacy while determining the rules for their processing. It is part of Rwanda's broader strategy to build a knowledge-based economy and aligns with international best practices, drawing significant inspiration from the EU GDPR and the African Union Convention on Cyber Security and Personal Data Protection (Malabo Convention).</p>
<p>Existing controllers and processors were given a transition period until <strong>14 October 2023</strong> to bring their operations into compliance. New controllers and processors entering the market are expected to comply immediately.</p>

<h2>Constitutional Foundation</h2>
<p>The right to privacy is enshrined in <strong>Article 23 of the Constitution of Rwanda</strong>, which guarantees that the private life, family, home, and correspondence of a person shall not be subjected to arbitrary interference. This constitutional guarantee forms the bedrock of the Data Protection Law.</p>

<h2>Scope and Extra-Territorial Application</h2>
<p>The law applies to:</p>
<ul>
<li>The processing of personal data by electronic or other means using an automated or non-automated platform; and</li>
<li>A data controller, data processor, or third party who:
  <ul>
    <li>Is established or resides in Rwanda and processes personal data while in Rwanda; or</li>
    <li>Is neither established nor resides in Rwanda but processes personal data of data subjects located in Rwanda.</li>
  </ul>
</li>
</ul>
<p>This extra-territorial scope goes <strong>further than the GDPR</strong> — it does not limit itself to processing related to offering goods or services or monitoring behaviour. Any organisation processing data of individuals located in Rwanda, regardless of size or volume, must comply with the law. Data processors are directly liable under this law and face almost the same obligations and sanctions as data controllers.</p>

<h2>Key Definitions</h2>
<h3>Personal Data</h3>
<p>Any information relating to an identified or identifiable natural person who can be identified, directly or indirectly, by reference to an identifier such as a name, identification number, location data, online identifier, or factors specific to the physical, psychological, genetic, mental, economic, cultural, or social identity of that person.</p>

<h3>Sensitive Personal Data</h3>
<p>Information revealing a person's:</p>
<ul>
<li>Race;</li>
<li>Health status;</li>
<li>Criminal records;</li>
<li>Medical records;</li>
<li>Social origin;</li>
<li>Religious or philosophical beliefs;</li>
<li>Political opinion;</li>
<li>Genetic or biometric information;</li>
<li>Sexual life; or</li>
<li>Family details.</li>
</ul>

<h3>Other Key Terms</h3>
<p>The law introduces several GDPR-inspired definitions, including <em>tokenisation</em> (replacing sensitive data with unique identification symbols), <em>profiling</em> (automated processing to evaluate personal aspects), and <em>pseudonymisation</em>. <em>Consent</em> must be freely given, specific, informed, and unambiguous — expressed orally, in writing, electronically, or by clear affirmative action.</p>

<h2>Supervisory Authority: NCSA</h2>
<p>Unlike many jurisdictions, Rwanda did <strong>not create a standalone data protection authority</strong>. The <strong>National Cyber Security Authority (NCSA)</strong> serves as the supervisory authority, with the power to issue mandatory and optional regulations, oversee compliance, and impose sanctions.</p>
<p>Sector-specific regulatory authorities (such as the Rwanda Utilities Regulatory Authority for the ICT sector) may, in conjunction with NCSA, issue sector-specific regulations governing personal data and privacy protection.</p>

<h2>Registration Requirement (Mandatory)</h2>
<p>This is a distinctive feature of African data protection laws. <strong>Any person who intends to be a data controller or data processor must register with the NCSA before processing personal data.</strong> The application must include:</p>
<ul>
<li>Identity and designated single point of contact;</li>
<li>Identity and address of the representative (if nominated);</li>
<li>Description of the personal data to be processed and categories of data subjects;</li>
<li>Whether the applicant holds or is likely to hold the types of personal data based on operating sectors;</li>
<li>Purposes of processing;</li>
<li>Categories of recipients to whom data will be disclosed;</li>
<li>Countries to which data will be transferred directly or indirectly;</li>
<li>Risks in processing and measures to prevent such risks.</li>
</ul>
<p>The NCSA issues a registration certificate within <strong>30 working days</strong> of receiving the application. Certificates have an expiry date determined by NCSA regulation and must be renewed within 45 working days before expiry. Changes to registered information must be reported within 15 working days.</p>

<h2>Data Protection Principles</h2>
<p>Controllers and processors must ensure that personal data:</p>
<ul>
<li>Are processed lawfully, fairly, and transparently;</li>
<li>Are collected for explicit, specified, and legitimate purposes and not further processed incompatibly;</li>
<li>Are related to the purposes for which processing was requested;</li>
<li>Are accurate and, where necessary, kept up to date;</li>
<li>Are kept in a form permitting identification for no longer than necessary;</li>
<li>Are processed in compliance with data subjects' rights.</li>
</ul>

<h2>Lawful Grounds for Processing</h2>
<p>Processing is lawful if at least one of the following applies:</p>
<ul>
<li>The data subject has given <strong>consent</strong> for a specified purpose (opt-in basis);</li>
<li>Processing is necessary for the performance of a <strong>contract</strong> to which the data subject is a party, or pre-contractual measures at the data subject's request;</li>
<li>Processing is necessary for compliance with a <strong>legal obligation</strong>;</li>
<li>Processing is necessary to protect the <strong>vital interests</strong> of the data subject or another person;</li>
<li>Processing is necessary for the performance of a <strong>task in the public interest</strong> or exercise of official authority;</li>
<li>Processing is necessary for the <strong>performance of duties of a public entity</strong>;</li>
<li>Processing is necessary for the <strong>legitimate interests</strong> of the controller or a third-party recipient (unless overridden by the data subject's rights and freedoms);</li>
<li>Processing is for <strong>research purposes</strong> upon authorisation by the relevant institution.</li>
</ul>
<p>Rwanda is one of the few African countries that explicitly recognises the legitimate interests basis — most ECOWAS member states do not.</p>

<h2>Children's Data</h2>
<p>For a child under the age of <strong>16</strong>, consent must be obtained from a holder of parental responsibility. Consent is acceptable only if given in the best interest of the child. Consent is not required where processing is necessary to protect the child's vital interests.</p>

<h2>Data Subject Rights</h2>
<p>Data subjects enjoy a comprehensive set of rights:</p>
<ul>
<li><strong>Right to information:</strong> About purposes, recipients, source of data, and transfers;</li>
<li><strong>Right of access:</strong> To request a copy of personal data and a description of what the controller holds;</li>
<li><strong>Right to object:</strong> To stop processing that causes or is likely to cause loss, sadness, or anxiety; an absolute right to object to direct marketing;</li>
<li><strong>Right to personal data portability:</strong> To receive data in a structured, readable format and have it transmitted to another controller where technically feasible;</li>
<li><strong>Right not to be subject to automated decision-making:</strong> Including profiling, unless based on explicit consent, contract necessity, or law authorisation;</li>
<li><strong>Right to restriction of processing:</strong> Where accuracy is contested, processing is unlawful, or an objection is pending verification;</li>
<li><strong>Right to erasure:</strong> Where data are no longer necessary, consent is withdrawn, an objection is upheld, or processing was unlawful;</li>
<li><strong>Right to rectification:</strong> To correct inaccurate or incomplete personal data;</li>
<li><strong>Right to designate an heir:</strong> A unique right — while personal data itself does not pass through succession, where the data subject left a will, they can grant an heir full or restricted rights over their personal data;</li>
<li><strong>Right to representation:</strong> For minors under 16, persons with physical impairments, persons with medically determinable mental impairments, or where otherwise authorised in writing.</li>
</ul>
<p>Controllers must respond to requests within <strong>30 days</strong>. If unsatisfied, data subjects may appeal to NCSA within 30 days, and NCSA must respond within 60 days.</p>

<h2>Data Protection Officer (DPO)</h2>
<p>Controllers and processors must appoint a Data Protection Officer (DPO) where:</p>
<ul>
<li>Processing is carried out by a public or private corporate body or legal entity (except courts);</li>
<li>Core activities consist of processing operations that require <strong>regular and systematic monitoring</strong> of data subjects on a <strong>large scale</strong>; or</li>
<li>Core activities consist of <strong>large-scale processing</strong> of special categories of data or personal data relating to criminal convictions.</li>
</ul>
<p>The DPO must have expert knowledge of personal data protection. They may be a permanent staff member or a contractor under a service agreement. A group of undertakings may appoint a single DPO provided the DPO is easily accessible from each establishment. The DPO's contact details must be published and communicated to NCSA.</p>

<h2>Controller and Processor Obligations</h2>
<p>Key obligations include:</p>
<ul>
<li>Implement appropriate <strong>technical and organisational measures</strong>;</li>
<li>Maintain a <strong>record of personal data processing operations</strong>;</li>
<li>Carry out <strong>data protection impact assessments (DPIAs)</strong> where processing is likely to result in high risk — including systematic and extensive evaluation through automated processing, large-scale processing of sensitive data, systematic monitoring of publicly accessible areas, processing identified by NCSA as high-risk, or use of new technologies;</li>
<li>Maintain <strong>personal data logging</strong> at least for collection, alteration, access, disclosure, combination, and erasure;</li>
<li>Designate a <strong>representative in Rwanda</strong> if not established locally;</li>
<li>Obtain a <strong>registration certificate</strong> before processing personal data;</li>
<li>Provide required <strong>information to data subjects</strong> at the time of collection (identity, purposes, recipients, rights, retention period, transfers).</li>
</ul>

<h2>Data Breach Notification</h2>
<p>Rwanda has a <strong>strict breach notification regime</strong>, shorter than the GDPR:</p>
<ul>
<li>Data controllers must notify the <strong>supervisory authority within 48 hours</strong> of becoming aware of a personal data breach;</li>
<li>Data processors must notify the <strong>data controller within 48 hours</strong> of becoming aware;</li>
<li>A detailed breach <strong>report must be submitted to NCSA within 72 hours</strong>;</li>
<li>Where the breach is likely to result in a <strong>high risk</strong> to data subjects' rights and freedoms, the controller must communicate the breach to affected data subjects in writing or electronically;</li>
<li>Notification to data subjects is not required if the controller has implemented protective measures rendering the breach unlikely to result in high risk, has taken measures ensuring the high risk is no longer likely, or has communicated to the public in an equally effective manner.</li>
</ul>

<h2>Cross-Border Data Transfer</h2>
<p>Cross-border transfers are permitted only under specific circumstances:</p>
<ul>
<li><strong>Authorisation from NCSA</strong> after providing proof of appropriate safeguards;</li>
<li>The data subject has <strong>consented</strong>;</li>
<li>The transfer is <strong>necessary</strong> for:
  <ul>
    <li>Performance of a contract between the data subject and controller, or pre-contractual measures;</li>
    <li>Performance of a contract concluded in the data subject's interest;</li>
    <li>Public interest grounds;</li>
    <li>Establishment, exercise, or defence of a legal claim;</li>
    <li>Protection of vital interests where the data subject is physically or legally incapable of consenting;</li>
    <li>Compelling legitimate interests not overridden by the data subject's rights, where the transfer is not repetitive and concerns only a limited number of data subjects, and appropriate safeguards are in place;</li>
    <li>Performance of international instruments ratified by Rwanda.</li>
  </ul>
</li>
</ul>
<p>The controller or processor must enter into a <strong>written contract</strong> with the recipient setting out roles and responsibilities. NCSA may prohibit or suspend transfers to protect data subjects' rights.</p>

<h2>Data Localisation Requirement</h2>
<p>This is a notable feature of Rwanda's framework. <strong>Personal data must be stored in Rwanda</strong>. Storage outside Rwanda is permitted <strong>only if</strong> the controller or processor holds a valid <strong>registration certificate authorising storage outside Rwanda</strong>, issued by NCSA. This effectively creates a certificate-based exemption regime for overseas storage.</p>

<h2>Data Retention</h2>
<p>Data must be retained until the purposes of processing are fulfilled. Longer retention is permitted where:</p>
<ul>
<li>Authorised by law;</li>
<li>Required by a contract between parties;</li>
<li>The data relates to a function or activity for which it was collected;</li>
<li>Necessary for preventing, detecting, investigating, prosecuting, or punishing an offender;</li>
<li>Necessary to protect national security;</li>
<li>Necessary to enforce a court order;</li>
<li>Necessary to enforce legislation relating to public revenue collection;</li>
<li>Necessary to conduct proceedings before a court;</li>
<li>Necessary for authorised research;</li>
<li>The data subject has consented.</li>
</ul>
<p>At the end of retention, data must be destroyed in a manner that prevents reconstruction in intelligible form.</p>

<h2>Enforcement and Penalties</h2>
<p>The law provides for both administrative and criminal sanctions:</p>

<h3>Administrative Sanctions</h3>
<p>For misconducts such as failure to maintain records, failure to log processing, operating without a registration certificate, failure to report changes, failure to designate a DPO, or failure to notify a breach, controllers, processors, or third parties may be fined:</p>
<ul>
<li>Between <strong>RWF 2,000,000 and RWF 5,000,000</strong>, OR</li>
<li><strong>1% of global turnover</strong> of the preceding financial year (for corporate bodies).</li>
</ul>

<h3>Criminal Sanctions</h3>
<p>The law criminalises various offences, with penalties including:</p>
<ul>
<li><strong>Illegal access, collection, use, sharing, transfer, or disclosure of personal data:</strong> 1–3 years' imprisonment and/or RWF 7,000,000–10,000,000 fine;</li>
<li><strong>Re-identification of de-identified data:</strong> 1–3 years' imprisonment and/or RWF 7,000,000–10,000,000 fine;</li>
<li><strong>Destruction, erasure, concealment, or alteration of data:</strong> 3–5 years' imprisonment and/or RWF 7,000,000–10,000,000 fine;</li>
<li><strong>Sale of personal data:</strong> 5–7 years' imprisonment and/or RWF 12,000,000–15,000,000 fine;</li>
<li><strong>Illegal collection or processing of sensitive data:</strong> <strong>7–10 years' imprisonment</strong> and/or RWF 20,000,000–25,000,000 fine;</li>
<li><strong>Providing false information during registration:</strong> 1–3 years' imprisonment and/or RWF 3,000,000–5,000,000 fine.</li>
</ul>
<p>Corporate bodies may be fined up to <strong>5% of annual turnover</strong> of the preceding financial year for criminal offences. Courts may also order seizure or confiscation of items used in the offence and order temporary or permanent closure of the entity or premises.</p>

<h2>Dispute Resolution and Compensation</h2>
<p>NCSA is the organ in charge of settling conflicts arising under the law. A person dissatisfied with NCSA's decision may file a case with a competent court. Anyone who suffers serious damage due to a controller's or processor's violation has the right to claim compensation in court. However, controllers/processors are exempt from liability if they prove they were not responsible for the damage.</p>

<h2>Unique Features of Rwanda's Law</h2>
<ul>
<li><strong>No standalone DPA:</strong> NCSA serves as the supervisory authority, unlike most African jurisdictions that have established dedicated data protection authorities;</li>
<li><strong>Mandatory registration:</strong> Both controllers and processors must register before processing data;</li>
<li><strong>48-hour breach notification:</strong> Stricter than GDPR's 72-hour rule;</li>
<li><strong>Right to designate an heir:</strong> A unique right that allows data subjects to grant an heir rights over their personal data after death;</li>
<li><strong>Direct processor liability:</strong> Processors face almost the same obligations and sanctions as controllers, which is uncommon;</li>
<li><strong>Broader extra-territorial scope:</strong> Applies to any entity processing data of individuals in Rwanda, regardless of goods/services offering or behaviour monitoring;</li>
<li><strong>Data localisation with certification exception:</strong> Data must be stored in Rwanda unless the controller holds a certificate authorising storage abroad.</li>
</ul>

<h2>Transition and Implementation</h2>
<p>The transition period for existing controllers and processors ended on <strong>14 October 2023</strong>. NCSA has been tasked with issuing implementing regulations on various aspects, including:</p>
<ul>
<li>Designation of representatives;</li>
<li>Management and migration of data in case of business closure or change;</li>
<li>Additional requirements for registration;</li>
<li>Validity and renewal of registration certificates;</li>
<li>Additional misconducts and sanctions;</li>
<li>Additional grounds for retention and cross-border transfer.</li>
</ul>

<h2>Quick Summary</h2>
<table>
<tbody>
<tr><td><strong>Full Name</strong></td><td>Law No. 058/2021 Relating to the Protection of Personal Data and Privacy</td></tr>
<tr><td><strong>Enacted</strong></td><td>13 October 2021</td></tr>
<tr><td><strong>In Force From</strong></td><td>15 October 2021 (published in Official Gazette)</td></tr>
<tr><td><strong>Transition Period Ended</strong></td><td>14 October 2023</td></tr>
<tr><td><strong>Regulator</strong></td><td>National Cyber Security Authority (NCSA)</td></tr>
<tr><td><strong>Dedicated DPA</strong></td><td>No (NCSA serves the role)</td></tr>
<tr><td><strong>Registration</strong></td><td>Mandatory for controllers and processors</td></tr>
<tr><td><strong>DPO</strong></td><td>Required in specified circumstances</td></tr>
<tr><td><strong>Breach Notification</strong></td><td>48 hours to NCSA; 72-hour report</td></tr>
<tr><td><strong>Children's Consent Age</strong></td><td>Under 16 (parental consent required)</td></tr>
<tr><td><strong>Cross-Border Transfer</strong></td><td>Authorisation, consent, or specific necessity grounds</td></tr>
<tr><td><strong>Data Localisation</strong></td><td>Yes (with certification exception for overseas storage)</td></tr>
<tr><td><strong>Max Administrative Fine</strong></td><td>RWF 5,000,000 or 1% of global turnover</td></tr>
<tr><td><strong>Max Criminal Penalty</strong></td><td>Up to 10 years' imprisonment; 5% of turnover for companies</td></tr>
<tr><td><strong>Unique Feature</strong></td><td>Right to designate an heir to personal data</td></tr>
</tbody>
</table>
`,
    coordinates: { lat: -1.9, lng: 29.9 },
    color: '#8B5CF6',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Addressed', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Partial', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'Addressed', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Addressed', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'None', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'zambia',
    name: 'Zambia',
    flag: '🇿🇲',
    lawName: 'Data Protection Act No. 3 of 2021',
    authority: 'Data Protection Commission (DPC)',
    region: 'Africa',
    level: 'Substantial',
    overview: "Zambia's Data Protection Act No. 3 of 2021 establishes a framework for personal-data processing, data-subject rights, and controller/processor obligations. The Data Protection Commission is the relevant supervisory body.",
    coordinates: { lat: -13.1, lng: 27.8 },
    color: '#22C55E',
    topics: [
      { title: "Data Protection Authority", status: 'Addressed', icon: 'Building' },
      { title: "Consent Requirements", status: 'Addressed', icon: 'CheckCircle' },
      { title: "Data Subject Rights", status: 'Addressed', icon: 'Users' },
      { title: "Cross-Border Transfer", status: 'Addressed', icon: 'Globe' },
      { title: "Breach Notification", status: 'Partial', icon: 'AlertCircle' },
      { title: "DPO Requirements", status: 'Partial', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: "Penalties & Enforcement", status: 'Addressed', icon: 'AlertTriangle' },
      { title: "Sector-Specific Rules", status: 'Partial', icon: 'Database' },
      { title: "Cookie/Tracking", status: 'Partial', icon: 'FileText' },
      { title: "AI & Automated Decisions", status: 'None', icon: 'Scale' },
      { title: "Data Localisation", status: 'Partial', icon: 'Database' },
      { title: "Significant Data Fiduciary", status: 'None', icon: 'Shield' },
      { title: "Government Data", status: 'Addressed', icon: 'Building' },
    ],
  },
  {
    id: 'oman',
    name: 'Oman',
    flag: '🇴🇲',
    lawName: 'Personal Data Protection Law (Royal Decree No. 6/2022)',
    authority: 'Personal Data Protection Department, Ministry of Transport, Communications and Information Technology (MTCIT)',
    region: 'Middle East',
    level: 'Substantial',
    overview: "Oman's Personal Data Protection Law is supplemented by Executive Regulations issued in 2024, with amendments made in 2026. The MTCIT's Personal Data Protection Department administers the framework; check the latest consolidated law before relying on individual obligations.",
    coordinates: { lat: 21.0, lng: 57.0 },
    color: '#EF4444',
    topics: [
      { title: "Data Protection Authority", status: 'Addressed', icon: 'Building' },
      { title: "Consent Requirements", status: 'Addressed', icon: 'CheckCircle' },
      { title: "Data Subject Rights", status: 'Addressed', icon: 'Users' },
      { title: "Cross-Border Transfer", status: 'Addressed', icon: 'Globe' },
      { title: "Breach Notification", status: 'Addressed', icon: 'AlertCircle' },
      { title: "DPO Requirements", status: 'Partial', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: "Penalties & Enforcement", status: 'Addressed', icon: 'AlertTriangle' },
      { title: "Sector-Specific Rules", status: 'Partial', icon: 'Database' },
      { title: "Cookie/Tracking", status: 'Partial', icon: 'FileText' },
      { title: "AI & Automated Decisions", status: 'Partial', icon: 'Scale' },
      { title: "Data Localisation", status: 'Partial', icon: 'Database' },
      { title: "Significant Data Fiduciary", status: 'None', icon: 'Shield' },
      { title: "Government Data", status: 'Partial', icon: 'Building' },
    ],
  },


  // ===== ADDITIONAL COUNTRIES (30 new entries; verify official sources before compliance use) =====
  {
    id: 'albania',
    name: 'Albania',
    flag: '🇦🇱',
    lawName: 'Law No. 124/2024 on Personal Data Protection',
    authority: 'Information and Data Protection Commissioner (IDP Commissioner)',
    region: 'Europe',
    level: 'Comprehensive',
    overview: "Albania's Law No. 124/2024 modernizes the personal-data framework and aligns it more closely with European data-protection standards. Confirm commencement and implementing requirements against current official publications.",
    coordinates: { lat: 41.2, lng: 20.0 },
    color: '#3B82F6',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Partial', icon: 'Shield' },
      { title: 'Children\'s Data', status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Partial', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'Partial', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'None', icon: 'Shield' },
      { title: 'Government Data', status: 'Partial', icon: 'Building' },
    ],
  },
  {
    id: 'andorra',
    name: 'Andorra',
    flag: '🇦🇩',
    lawName: 'Qualified Law 29/2021 on Personal Data Protection',
    authority: 'Andorran Data Protection Agency (APDA)',
    region: 'Europe',
    level: 'Comprehensive',
    overview: "Andorra's Qualified Law 29/2021 establishes personal-data processing rules and individual rights, with the APDA supervising compliance. Specific obligations depend on the processing context and applicable implementing rules.",
    coordinates: { lat: 42.5, lng: 1.6 },
    color: '#8B5CF6',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Partial', icon: 'Shield' },
      { title: 'Children\'s Data', status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Partial', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'Partial', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'None', icon: 'Shield' },
      { title: 'Government Data', status: 'Partial', icon: 'Building' },
    ],
  },
    {
    id: 'serbia',
    name: 'Serbia',
    flag: '🇷🇸',
    lawName: 'Law on Personal Data Protection (2018)',
    authority: 'Commissioner for Information of Public Importance and Personal Data Protection',
    region: 'Europe',
    level: 'Comprehensive',
    overview: "Serbia's data protection framework is anchored in the Law on Personal Data Protection (PDPA), adopted in November 2018 and applicable since 21 August 2019, which replaced the outdated 2008 law. Widely regarded as one of the most GDPR-aligned frameworks in the Western Balkans, the law covers processing principles, data subject rights, controller and processor obligations, and DPO requirements. Cross-border transfers operate through a two-tier mechanism — transfers to adequate countries proceed without prior authorisation, while transfers to non-adequate jurisdictions require appropriate safeguards such as standard contractual clauses or binding corporate rules. The supervisory authority is the Commissioner for Information of Public Importance and Personal Data Protection, which holds investigative, corrective, and advisory powers. Serbia adopted a Personal Data Protection Strategy for 2023–2030 and is actively pursuing EU adequacy, though a new draft law remains under consultation as of 2026.",
    detailedContent: `
<h2>What is the Serbian Data Protection Law?</h2>
<p>The Serbian Parliament enacted the <strong>new Law on Personal Data Protection in November 2018</strong> (published in the "Official Gazette of the Republic of Serbia" no. 87/2018), which became applicable as of <strong>21 August 2019</strong> (the "New DP Law"). As of that date, the New DP Law replaced and derogated the previously applicable Law on Personal Data Protection from 2008 (the "Old DP Law"), which had caused a number of ambiguities and uncertainties in practice for market participants.</p>
<p>The long-awaited New DP Law was enacted as part of the process of accession of the Republic of Serbia to the European Union and harmonization of Serbian regulations with the <em>acquis communautaire</em>, as well as for the purpose of more efficient protection of personal data in the Republic of Serbia.</p>
<p>Although the New DP Law reflects numerous principles envisaged under the EU General Data Protection Regulation (Regulation (EU) 2016/679, the "GDPR"), and a number of its provisions are a translation of GDPR provisions, it must be noted that this is a <strong>completely new piece of legislation</strong> that is different from the GDPR in certain aspects (e.g. the New DP Law does not include recitals from the GDPR, and it does not provide for the enormous fines prescribed under the GDPR).</p>

<h2>Access to Public Information (FOI)</h2>
<p>In Serbia, access to public information is guaranteed in the <strong>Constitution</strong> and protected by the <strong>Law on Free Access to Information of Public Importance</strong>, adopted in 2003 and amended in 2007, 2009, 2010, and 2021. The scope of the right entails that everyone in Serbia has the right to access information of public importance, to be informed whether public authorities hold specific information, whether such information is already accessible, and to obtain a copy of the requested information.</p>
<p>The right of access to public information is defined in <strong>Article 51 of the Constitution of Serbia</strong>, which establishes the right of everybody to be informed about issues of public importance and the deriving obligation of state bodies and public organizations to guarantee access to such information.</p>
<p>Serbia is considered among the countries with the best regulatory framework regarding access to information of public relevance: the <strong>Global Right to Information Rating</strong>, compiled by NGOs AccessInfo and Centre for Law and Democracy, ranks the country in the <strong>second position</strong> in its global ranking assessing the quality of legislative frameworks regulating FOI across the world.</p>
<p>The latest amendments to the Law, applying as of <strong>17 February 2022</strong>, broadened the definition of public bodies bound by its provisions, strengthened the position of the Commissioner in terms of enforcement of his decisions, and enabled him to lodge misdemeanor complaints and issue misdemeanor orders.</p>

<h2>Scope of the Right to Access Information</h2>
<p>The scope of the law is valued positively especially inasmuch as it extends the right to access to information to <strong>all natural persons</strong>, notwithstanding their citizenship, temporary or permanent residence in the country. Moreover, the right to access information applies to the executive, legislative, and judicial bodies, state-owned enterprises, as well as other public authorities and private bodies that perform a public function or that receive significant public funding (Art. 3).</p>
<p>Requests should be lodged in written form, with no need for the applicant to specify the reason for the request. The public authority shall reply without delay and <strong>within 15 days at the latest</strong>. If the requested information entails consequences for the protection of a person's life or freedom, public health and the environment, the time span at the disposal of authorities is reduced to <strong>48 hours</strong>. In cases in which the document contains information that the public has no legitimate interest to know, the applicant has the right to access other parts of the documents.</p>

<h2>Limitations to the Right</h2>
<p>Limitations to the right to access to information are defined in <strong>Article 9 of the Law</strong>, establishing that legitimate limitation may derive if the requested information:</p>
<ul>
<li>Exposes to risk the life, health, safety or another vital interest of a person;</li>
<li>Obstacles the work of the judiciary;</li>
<li>Threatens national defense, national and public safety, international relations or the government's ability to manage the national economic processes.</li>
</ul>
<p>Finally, classified information is excluded from the right.</p>

<h2>Data Protection Authority: The Commissioner</h2>
<p>The authority in charge of monitoring respect for the Law is the <strong>Commissioner for Information of Public Importance and Personal Data Protection</strong>. The Commissioner is an independent, second-level appeal instance: if a public authority does not respond to the request within the deadline, the applicant may lodge a complaint with the Commissioner, except in cases prescribed by this Law (Art. 16).</p>
<p>The Commissioner is entitled by Law to issue decisions on disputed cases, and his/her decisions should be enforced by the Government of the Republic of Serbia if necessary (Art. 28). The Commissioner is appointed by the National Assembly of the Republic of Serbia on the proposal of the Committee of the National Assembly responsible for information.</p>
<p>Aside from examining individual complaints related to violations of the right to free access to information, the Commissioner also addresses citizens' requests asking how to exercise their right to information, provides state authorities with opinions about the implementation of the law, conducts trainings for law implementation, and takes part in activities related to the EU accession process.</p>
<p>It has been noted that a significant limitation of the right set forth in the Constitution is due to the restrictions applied to the admissibility of complaints against first-instance decisions: a complaint is not admissible if "lodged against decisions of the National Assembly, the President of the Republic, the Government of the Republic of Serbia, the Supreme Court of Serbia, the Constitutional Court, the National Bank of Serbia, and the Republic Public Prosecutor" (Art. 22).</p>

<h2>Novelties Introduced by the New DP Law (2018)</h2>
<p>The New DP Law introduced significant novelties and legislative changes in the sphere of personal data protection that commercial entities in the Serbian market need to comply with. Some of the key novelties are:</p>
<ul>
<li><strong>Cancellation of the Central Registry</strong> kept by the DPA, and cancellation of the obligation of data controllers to register with this Central Registry all personal data bases that they keep and maintain;</li>
<li>An obligation on data controllers and data processors to <strong>keep internal records on personal data processing activities</strong> if they employ 250 or more persons and/or if other prescribed conditions under the law are met (e.g. processing may cause significant risk to rights and freedoms of data subjects; if processing includes special categories of personal data such as health data);</li>
<li><strong>Change of legal grounds</strong> for personal data processing — besides the law and an informed written data subject's consent, the New DP Law sets several legal grounds on which personal data of a data subject can be processed;</li>
<li>Data subject's rights to <strong>data portability</strong> and the so-called <strong>"right to be forgotten"</strong>;</li>
<li>A possibility for a commercial entity to <strong>appoint a Data Protection Officer (DPO)</strong>;</li>
<li><strong>Change of rules regarding the transfer of personal data abroad</strong> — broadening the legal grounds that allow a transfer of personal data from Serbia, recognising the possibility to enter into model contractual clauses prepared by the DPA, and allowing a Serbian company that is part of an international group of companies to be subject to Binding Corporate Rules adopted at the group level, if the DPA approves such BCRs.</li>
</ul>

<h2>Lawful Basis for Processing</h2>
<p>Under the New DP Law, personal data may be processed on several legal grounds, including:</p>
<ul>
<li>The data subject's <strong>informed consent</strong> (written or otherwise);</li>
<li>Compliance with a <strong>legal obligation</strong> of the controller;</li>
<li>Performance of a <strong>contract</strong> to which the data subject is a party, or pre-contractual measures taken at the data subject's request;</li>
<li>Protection of the <strong>vital interests</strong> of the data subject or another natural person;</li>
<li>Performance of a task carried out in the <strong>public interest</strong> or in the exercise of official authority;</li>
<li>Realisation of the <strong>legitimate interests</strong> of the controller or a third party, subject to the rights and freedoms of the data subject.</li>
</ul>
<p>Where processing is based on consent, the data subject has the right to <strong>withdraw consent at any time</strong>, without affecting the lawfulness of processing based on consent before its withdrawal.</p>

<h2>Data Subject Rights</h2>
<p>Under the New DP Law, data subjects enjoy a comprehensive set of rights, including:</p>
<ul>
<li><strong>Right to be informed</strong> — about the identity of the controller, purposes of processing, recipients, retention period, and existence of rights;</li>
<li><strong>Right of access</strong> — to obtain confirmation as to whether personal data concerning them is being processed, and a copy of that data;</li>
<li><strong>Right to rectification</strong> — to have inaccurate or incomplete personal data corrected;</li>
<li><strong>Right to erasure ("right to be forgotten")</strong> — to have personal data deleted where there is no compelling reason for continued processing;</li>
<li><strong>Right to restriction of processing</strong> — in specified circumstances;</li>
<li><strong>Right to data portability</strong> — to receive personal data in a structured, commonly used, machine-readable format and transmit it to another controller;</li>
<li><strong>Right to object</strong> — to processing based on legitimate interests or for direct marketing purposes;</li>
<li><strong>Right not to be subject to automated decision-making</strong>, including profiling, where it produces legal or similarly significant effects;</li>
<li><strong>Right to lodge a complaint</strong> with the Commissioner.</li>
</ul>

<h2>Controller and Processor Obligations</h2>
<p>Controllers and processors have several obligations under the New DP Law, including:</p>
<ul>
<li>Implementing appropriate <strong>technical and organisational measures</strong> to ensure a level of security appropriate to the risk;</li>
<li>Maintaining <strong>internal records of processing activities</strong> (where the thresholds under the law are met);</li>
<li>Conducting a <strong>Data Protection Impact Assessment (DPIA)</strong> where processing is likely to result in a high risk to data subjects' rights and freedoms;</li>
<li>Notifying the Commissioner of a <strong>personal data breach without undue delay and, where feasible, within 72 hours</strong> of becoming aware of it, unless the breach is unlikely to result in a risk to data subjects;</li>
<li>Notifying affected data subjects <strong>without undue delay</strong> where the breach is likely to result in a high risk to their rights and freedoms;</li>
<li>Appointing a <strong>Data Protection Officer (DPO)</strong> where required by law — e.g. for public authorities, or where core activities involve large-scale systematic monitoring or large-scale processing of special categories of data;</li>
<li>Entering into <strong>data processing agreements</strong> with processors that meet the requirements of the law.</li>
</ul>

<h2>Cross-Border Data Transfer</h2>
<p>The New DP Law changed the rules regarding the transfer of personal data abroad, broadening the legal grounds that allow a transfer of personal data from Serbia. Cross-border transfers operate through a <strong>two-tier mechanism</strong>:</p>
<ul>
<li><strong>Tier 1 — Adequate countries:</strong> Transfers to countries on the Serbian Government's adequacy list — which incorporates EU adequacy decisions and Council of Europe Convention 108 parties — proceed without prior authorisation.</li>
<li><strong>Tier 2 — Non-adequate jurisdictions:</strong> Transfers to non-adequate countries require appropriate safeguards such as <strong>standard contractual clauses</strong> approved by the DPA, <strong>Binding Corporate Rules (BCRs)</strong> approved by the DPA (for multinational groups), or other legal grounds such as the data subject's explicit consent or the necessity of the transfer for contract performance.</li>
</ul>
<p>The DPA has been tasked with preparing model contractual clauses for transfers, and with maintaining the list of adequate countries. Organisations should verify the current status of these instruments with the Commissioner before relying on them.</p>

<h2>Data Protection Officer (DPO)</h2>
<p>A commercial entity may appoint a <strong>Data Protection Officer (DPO)</strong>. The appointment is mandatory where processing is carried out by a public authority or body (except for courts acting in their judicial capacity), or where the core activities of the controller or processor consist of processing operations which, by virtue of their nature, scope, and/or purposes, require regular and systematic monitoring of data subjects on a large scale, or of large-scale processing of special categories of data. The DPO must have expert knowledge of data protection law and practices and must be involved, properly and in a timely manner, in all issues relating to the protection of personal data.</p>

<h2>Penalties for Non-Compliance</h2>
<p>The penalties for non-compliance with the New DP Law are in the range of <strong>RSD 55,000 to RSD 2,150,000</strong> (approximately up to EUR 18,000) for the controller/processor and the responsible person. The New DP Law foresees a maximum fine that is two times the maximum fine prescribed under the Old DP Law — although this is still significantly lower than the enormous fines under the GDPR.</p>
<p>The Commissioner can impose administrative fines, issue warnings, order the controller or processor to bring processing operations into compliance with the law, and impose a temporary or definitive limitation on processing or data flows.</p>

<h2>Implementation Challenges and Practical Notes</h2>
<p>Despite the novelties and changes introduced by the New DP Law, certain issues in its interpretation are likely, especially due to the fact that a number of bylaws are yet to be adopted — particularly in the sphere of transfer of personal data to other countries (e.g. the list of countries which the Serbian Government deems to have an adequate level of protection, model clauses to be prepared by the DPA, etc.).</p>
<p>Furthermore, other national provisions needed to be aligned with the New DP Law by 2020 relating to the protection of personal data. There are also some aspects that the New DP Law does not regulate, such as <strong>video surveillance</strong>, which may be covered by separate regulations.</p>
<p>In its annual reports, the Commissioner has noted certain limitations to the effective implementation of the Law on Access to Information, particularly insufficient accountability for violations of the Law and inefficient mechanisms of enforcement of the Commissioner's decisions. Freedom House noted in 2016 that "despite the existence of the 2004 Law on Free Access to Information of Public Importance, authorities frequently obstruct journalists' efforts to obtain public information."</p>

<h2>Landmark Case: Youth Initiative for Human Rights v. Serbia</h2>
<p>A landmark case by the European Court of Human Rights (ECtHR) related to the right to access to information in Serbia. In 2006, the Belgrade-based NGO <strong>Youth Initiative for Human Rights (YIHR)</strong> filed a request to the Serbian Security Intelligence Agency demanding information concerning the use of electronic surveillance measures by that agency in 2005. The Agency denied access to the requested information twice — first on grounds of secrecy, and then, after a binding decision by the Commissioner for Information stating that the information should be made public, by declaring that it did not hold the requested information.</p>
<p>YIHR appealed to the ECtHR under Article 6 and Article 10 of the European Convention on Human Rights. In June 2013, the ECtHR defined as "unpersuasive" the argument used by the Agency that it did not hold the requested information, and found that the restrictions imposed by the Serbian intelligence agency were not justified by domestic law and hence constituted a <strong>violation of Article 10 of the European Convention on Human Rights</strong>.</p>

<h2>Quick Summary</h2>
<table>
<tbody>
<tr><td><strong>Full Name</strong></td><td>Law on Personal Data Protection (2018)</td></tr>
<tr><td><strong>Adopted</strong></td><td>November 2018</td></tr>
<tr><td><strong>Applicable From</strong></td><td>21 August 2019</td></tr>
<tr><td><strong>Replaced</strong></td><td>Law on Personal Data Protection (2008)</td></tr>
<tr><td><strong>Regulator</strong></td><td>Commissioner for Information of Public Importance and Personal Data Protection</td></tr>
<tr><td><strong>GDPR Alignment</strong></td><td>Highly aligned (translation of many GDPR provisions)</td></tr>
<tr><td><strong>Max Fine</strong></td><td>RSD 2,150,000 (approx. EUR 18,000)</td></tr>
<tr><td><strong>FOI Law</strong></td><td>Law on Free Access to Information of Public Importance (2003, amended 2021)</td></tr>
<tr><td><strong>FOI Ranking</strong></td><td>2nd globally (Global Right to Information Rating)</td></tr>
<tr><td><strong>EU Status</strong></td><td>Candidate country; pursuing EU adequacy</td></tr>
</tbody>
</table>
`,
    coordinates: { lat: 44.0, lng: 21.0 },
    color: '#22C55E',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Addressed', icon: 'Shield' },
      { title: "Children's Data", status: 'Partial', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Partial', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'Partial', icon: 'Scale' },
      { title: 'Data Localisation', status: 'None', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'None', icon: 'Shield' },
      { title: 'Government Data', status: 'Partial', icon: 'Building' },
    ],
  },
  {
    id: 'ukraine',
    name: 'Ukraine',
    flag: '🇺🇦',
    lawName: 'Law of Ukraine on Personal Data Protection (No. 2297-VI)',
    authority: 'Ukrainian Parliament Commissioner for Human Rights (Ombudsman)',
    region: 'Europe',
    level: 'Substantial',
    overview: "Ukraine's personal-data framework is based principally on the Law on Personal Data Protection, with oversight involving the Parliamentary Commissioner for Human Rights. Reforms and alignment with EU standards may evolve; verify current legislation.",
    coordinates: { lat: 49.0, lng: 32.0 },
    color: '#F59E0B',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Partial', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Partial', icon: 'Shield' },
      { title: 'Children\'s Data', status: 'Partial', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Partial', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'None', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'None', icon: 'Shield' },
      { title: 'Government Data', status: 'Partial', icon: 'Building' },
    ],
  },
    {
    id: 'north-macedonia',
    name: 'North Macedonia',
    flag: '🇲🇰',
    lawName: 'Law on Personal Data Protection (2020)',
    authority: 'Personal Data Protection Agency (AZLP)',
    region: 'Europe',
    level: 'Comprehensive',
    overview: "North Macedonia's data protection framework is governed by the Law on Personal Data Protection (Official Gazette no. 42/20, 294/21, and 101/2025), which entered into force on 24 February 2020. The law is heavily harmonized with the EU General Data Protection Regulation (GDPR), covering processing principles, data subject rights, controller and processor obligations, and DPO requirements. The supervisory authority is the Personal Data Protection Agency (AZLP), an independent state agency. Cross-border transfers to EU, EEA, or NATO member countries require notification to the DPA at least 15 days before the transfer. Transfers to third countries require an adequacy decision or appropriate safeguards. Administrative fines can reach up to 4% of global annual turnover for the most serious violations, mirroring the GDPR's penalty regime.",
    detailedContent: `
<h2>What is North Macedonia's Data Protection Law?</h2>
<p>North Macedonia regulates personal data protection through the <strong>Law on Personal Data Protection</strong> (Official Gazette of the Republic of North Macedonia, no. 42/20, 294/21, and 101/2025), which entered into force on <strong>24 February 2020</strong>.</p>
<p>The law is largely harmonized with the EU General Data Protection Regulation (GDPR), aligning North Macedonia's framework with European standards as part of its EU accession process. It covers processing principles, data subject rights, controller and processor obligations, cross-border transfers, and the establishment of an independent supervisory authority.</p>

<h2>Scope and Application</h2>
<p>The law applies to the processing of personal data wholly or partly by automated means, and to non-automated processing of data forming part of a filing system. It does not apply to processing by a natural person in the course of purely personal or household activities.</p>
<p>The law has <strong>extraterritorial scope</strong>. It applies to:</p>
<ul>
<li>Controllers or processors established in North Macedonia, regardless of whether processing takes place there;</li>
<li>Controllers or processors not established in North Macedonia, where processing relates to offering goods or services to data subjects in North Macedonia, or monitoring their behaviour within the country;</li>
<li>Processing by a controller not established in North Macedonia but where Macedonian law applies under international agreements.</li>
</ul>

<h2>Key Definitions</h2>
<h3>Personal Data</h3>
<p>Any information relating to an identified or identifiable natural person. An identifiable person is one who can be identified, directly or indirectly, by reference to an identifier such as a name, identification number, location data, online identifier, or factors specific to their physical, physiological, genetic, mental, economic, cultural, or social identity.</p>

<h3>Sensitive Personal Data (Special Categories)</h3>
<p>Personal data revealing:</p>
<ul>
<li>Racial or ethnic origin;</li>
<li>Political opinions;</li>
<li>Religious or philosophical beliefs;</li>
<li>Trade union membership;</li>
<li>Genetic data;</li>
<li>Biometric data for unique identification;</li>
<li>Data concerning health;</li>
<li>Data concerning sex life or sexual orientation.</li>
</ul>

<h3>Other Key Terms</h3>
<p>The law introduces GDPR-style definitions for <em>profiling</em>, <em>pseudonymisation</em>, <em>filing system</em>, <em>controller</em>, <em>processor</em>, <em>consent</em>, <em>personal data breach</em>, and <em>binding corporate rules</em>.</p>

<h2>Supervisory Authority: Personal Data Protection Agency (AZLP)</h2>
<p>The <strong>Personal Data Protection Agency (AZLP)</strong> is an independent state agency responsible for monitoring the lawfulness of personal data processing in North Macedonia and protecting the fundamental rights and freedoms of natural persons.</p>
<p>It is accountable to the Parliament of North Macedonia and has legal personality with its seat in Skopje. The Agency is completely politically, financially, and functionally independent.</p>
<p>The Agency is managed by a Director and a Deputy Director, both appointed by the Parliament for a five-year term (renewable twice). They must meet specific qualifications, including a law degree, at least 10 years of work experience, and proficiency in English.</p>

<h3>Main Tasks and Powers of the Agency</h3>
<ul>
<li>Monitor and enforce the application of the law;</li>
<li>Promote public awareness of data protection risks, rules, and rights;</li>
<li>Advise the Parliament, Government, and other institutions on legislative and administrative measures;</li>
<li>Handle complaints from data subjects and conduct investigations;</li>
<li>Cooperate with other supervisory authorities and conduct joint operations;</li>
<li>Adopt standard contractual clauses;</li>
<li>Approve binding corporate rules;</li>
<li>Accredit certification bodies and monitoring bodies for codes of conduct;</li>
<li>Impose administrative fines and corrective measures.</li>
</ul>

<h2>Principles of Processing</h2>
<p>The law establishes the following principles, mirroring the GDPR:</p>
<ul>
<li><strong>Lawfulness, fairness, and transparency;</strong></li>
<li><strong>Purpose limitation;</strong></li>
<li><strong>Data minimisation;</strong></li>
<li><strong>Accuracy;</strong></li>
<li><strong>Storage limitation;</strong></li>
<li><strong>Integrity and confidentiality.</strong></li>
</ul>
<p>The controller is responsible for demonstrating compliance (<strong>accountability</strong>).</p>

<h2>Lawful Grounds for Processing</h2>
<p>Processing is lawful only if at least one of the following applies:</p>
<ul>
<li>The <strong>data subject has given consent</strong> for specific purposes;</li>
<li>Processing is necessary for the <strong>performance of a contract</strong> with the data subject or pre-contractual steps;</li>
<li>Processing is necessary for compliance with a <strong>legal obligation</strong>;</li>
<li>Processing is necessary to protect <strong>vital interests</strong>;</li>
<li>Processing is necessary for a <strong>task in the public interest</strong> or exercise of official authority;</li>
<li>Processing is necessary for the <strong>legitimate interests</strong> of the controller or a third party, unless overridden by the data subject's rights and freedoms (this ground does not apply to processing by state administration bodies).</li>
</ul>

<h2>Consent Requirements</h2>
<p>Consent must be freely given, specific, informed, and unambiguous. The controller must demonstrate that the data subject consented. When consent is given in a written declaration that also concerns other matters, the consent request must be presented clearly and distinguishably. The data subject may withdraw consent at any time without affecting the lawfulness of prior processing.</p>

<h2>Children's Data</h2>
<p>For information society services offered directly to a child, processing is lawful where the child is at least <strong>14 years old</strong>. For children below 14, consent must be given or authorised by the holder of parental responsibility. Controllers must make reasonable efforts to verify parental consent, considering available technology.</p>

<h2>Special Categories of Personal Data</h2>
<p>Processing of special categories of data is <strong>prohibited</strong> as a general rule, with exceptions including:</p>
<ul>
<li>Explicit consent of the data subject;</li>
<li>Labour law, social security, and social protection obligations authorised by law;</li>
<li>Protection of vital interests where the data subject is physically or legally incapable of consenting;</li>
<li>Legitimate activities of non-profit organisations with appropriate safeguards;</li>
<li>Data manifestly made public by the data subject;</li>
<li>Establishment, exercise, or defence of legal claims;</li>
<li>Substantial public interest, based on law, proportionate to the aim pursued;</li>
<li>Preventive or occupational medicine, medical diagnosis, health care;</li>
<li>Public health reasons;</li>
<li>Archiving, scientific, historical, or statistical purposes, based on law.</li>
</ul>

<h2>Data Subject Rights</h2>
<p>Data subjects have a comprehensive set of rights, including:</p>
<ul>
<li><strong>Right to information</strong> (Articles 17 and 18): Controllers must provide detailed information at the time of data collection, including identity, contact details, purposes, legal basis, recipients, retention periods, and rights;</li>
<li><strong>Right of access</strong> (Article 19): To obtain confirmation of processing, a copy of data, and information about purposes, categories, recipients, and retention periods;</li>
<li><strong>Right to rectification</strong> (Article 20): To correct inaccurate or incomplete data within 15 days of request;</li>
<li><strong>Right to erasure</strong> (Article 21): The "right to be forgotten," subject to specific grounds and exceptions;</li>
<li><strong>Right to restriction of processing</strong> (Article 22);</li>
<li><strong>Notification obligation</strong> (Article 23): The controller must inform recipients of any rectification or erasure;</li>
<li><strong>Right to data portability</strong> (Article 24): To receive data in a structured, machine-readable format;</li>
<li><strong>Right to object</strong> (Article 25): Including the absolute right to object to direct marketing;</li>
<li><strong>Right not to be subject to automated decision-making</strong> (Article 26), including profiling, with specific exceptions.</li>
</ul>
<p>Controllers must respond to requests within <strong>one month</strong>, extendable by two further months for complex requests.</p>

<h2>Controller and Processor Obligations</h2>
<p>Controllers must implement appropriate technical and organisational measures to ensure compliance and demonstrate accountability. Key obligations include:</p>
<ul>
<li><strong>Data protection by design and by default</strong> (Article 29);</li>
<li><strong>Joint controller arrangements</strong> (Article 30);</li>
<li><strong>Appointment of a representative</strong> in North Macedonia for controllers/processors not established there (Article 31), subject to limited exceptions;</li>
<li><strong>Use of only processors providing sufficient guarantees</strong>, governed by a written contract (Article 32);</li>
<li><strong>Records of processing activities</strong> (Article 34) for enterprises with 50+ employees or where processing is high-risk, not occasional, or involves special categories of data;</li>
<li><strong>Security of processing</strong> (Article 36), including pseudonymisation, encryption, and regular testing of measures;</li>
<li><strong>Data protection impact assessments (DPIAs)</strong> (Article 39) for high-risk processing;</li>
<li><strong>Prior consultation with the Agency</strong> (Article 40) where a DPIA indicates high risk.</li>
</ul>

<h2>Data Protection Officer (DPO)</h2>
<p>Controllers and processors must appoint a DPO where:</p>
<ul>
<li>Processing is carried out by a public authority or body, except courts acting in their judicial capacity;</li>
<li>Core activities consist of processing operations requiring <strong>regular and systematic monitoring</strong> of data subjects on a <strong>large scale</strong>;</li>
<li>Core activities consist of <strong>large-scale processing</strong> of special categories of data or data relating to criminal convictions.</li>
</ul>
<p>The DPO must have expert knowledge of data protection law and practices. They may be a staff member or fulfil tasks on a service contract. The DPO's contact details must be published and communicated to the Agency.</p>
<p>The DPO's tasks include informing and advising, monitoring compliance, advising on DPIAs, cooperating with the Agency, and acting as a contact point.</p>

<h2>Data Breach Notification</h2>
<p>Controllers must notify the Agency of a personal data breach <strong>without undue delay and, where feasible, not later than 72 hours</strong> after becoming aware, unless the breach is unlikely to result in a risk to data subjects. If notification is made after 72 hours, it must be accompanied by reasons for the delay.</p>
<p>Processors must notify controllers without undue delay after becoming aware of a breach.</p>
<p>Where a breach is likely to result in a <strong>high risk</strong>, the controller must communicate it to affected data subjects without undue delay, describing the nature of the breach, contact details, likely consequences, and measures taken. Exceptions apply where protective measures (e.g., encryption) render data unintelligible, or where disproportionate effort applies (public communication may be used instead).</p>
<p>Controllers must document all breaches, including facts, effects, and remedial actions.</p>

<h2>Cross-Border Data Transfer</h2>
<p>The law establishes a comprehensive framework for international transfers:</p>
<ul>
<li><strong>EU/EEA/NATO Transfers:</strong> Entities must notify the Agency at least <strong>15 days before</strong> the transfer;</li>
<li><strong>Adequacy Decisions:</strong> Transfers to third countries or international organisations are permitted if the Agency has decided that the recipient ensures an adequate level of protection. The Agency assesses factors such as the rule of law, respect for human rights, the existence of independent supervisory authorities, and international commitments;</li>
<li><strong>Appropriate Safeguards:</strong> Where no adequacy decision exists, transfers may occur with appropriate safeguards, including legally binding instruments, binding corporate rules (BCRs), standard data protection clauses, approved codes of conduct, or certification mechanisms;</li>
<li><strong>Derogations:</strong> Specific situations (e.g., explicit consent, contract necessity, public interest, legal claims, vital interests) may permit transfers without adequacy or safeguards.</li>
</ul>
<p>The Agency has not yet adopted an adequacy decision but follows the EU's practice. Since 2022, it requires a <strong>Transfer Impact Assessment (TIA)</strong> with each Transfer Approval request.</p>

<h2>Security Requirements</h2>
<p>Controllers and processors must implement appropriate technical and organisational measures, including as appropriate:</p>
<ul>
<li>Pseudonymisation and encryption;</li>
<li>Ability to ensure ongoing confidentiality, integrity, availability, and resilience;</li>
<li>Ability to restore availability and access in the event of incidents;</li>
<li>Regular testing and evaluation of security measures.</li>
</ul>
<p>The <strong>Rulebook on the Security of Personal Data Processing</strong> (Official Gazette no. 266/2024) applies from <strong>1 July 2025</strong>, replacing the previous rulebook. It requires controllers to establish a functional and sustainable information system, prepare detailed documentation on processing, evaluate risks, and implement proportionate measures—including secure transmission protocols (TLS), certificate validation, browser security configurations, and cookie restrictions.</p>

<h2>Codes of Conduct and Certification</h2>
<p>The law encourages the development of codes of conduct by associations representing categories of controllers or processors, and the establishment of data protection certification mechanisms, seals, and marks. These are voluntary and aim to demonstrate compliance.</p>

<h2>Enforcement and Sanctions</h2>
<p>The Agency has investigative, corrective, and authorisation/opinion powers, including:</p>
<ul>
<li>Ordering controllers and processors to provide information;</li>
<li>Carrying out supervisions and audits;</li>
<li>Issuing warnings and reprimands;</li>
<li>Ordering compliance with data subject requests;</li>
<li>Imposing temporary or definitive limitations or bans on processing;</li>
<li>Initiating misdemeanour proceedings.</li>
</ul>

<h3>Administrative Fines</h3>
<p>The law provides for two categories of misdemeanours:</p>
<ul>
<li><strong>Category I (Article 110):</strong> Up to <strong>2% of total annual turnover</strong> for violations such as failure to appoint a DPO, failure to maintain records, failure to notify a breach, failure to conduct a DPIA, or non-compliance with direct marketing rules;</li>
<li><strong>Category II (Article 111):</strong> Up to <strong>4% of total annual turnover</strong> for violations of processing principles, lawful bases, consent conditions, special category processing rules, data subject rights, and cross-border transfer rules.</li>
</ul>
<p>Responsible persons at legal entities face fines of EUR 300–500, officials in state administration bodies face fines of EUR 100–500, and natural persons face fines of EUR 100–250.</p>
<p>Video surveillance violations carry fines of <strong>EUR 1,000 to EUR 10,000</strong> for legal entities.</p>
<p>Fines may be challenged before the Administrative Court of North Macedonia. The Criminal Code also includes a criminal offense for misuse of personal data punishable by a fine or imprisonment of up to one year.</p>

<h2>Specific Processing Scenarios</h2>
<ul>
<li><strong>Journalism and artistic expression:</strong> Exemptions may apply to reconcile data protection with freedom of expression;</li>
<li><strong>Public access to official documents:</strong> Personal data in official documents may be disclosed to fulfil a public interest task, reconciling public access with data protection;</li>
<li><strong>National identification number:</strong> Processing requires prior consent, legal obligation, or Agency approval for systematic and extensive processing;</li>
<li><strong>Health, genetic, and biometric data:</strong> Processing requires prior Agency approval (unless determined by law with safeguards);</li>
<li><strong>Employment context:</strong> Specific rules may be provided by law or collective agreements with safeguards;</li>
<li><strong>Archiving, research, and statistics:</strong> Processing must be subject to appropriate safeguards, including pseudonymisation;</li>
<li><strong>Churches and religious communities:</strong> Must apply safeguarding measures;</li>
<li><strong>Deceased persons:</strong> Data may be provided to authorised recipients or lawful successors, subject to the deceased's written prohibition;</li>
<li><strong>Video surveillance:</strong> Detailed rules apply, including notice requirements, prohibitions in changing rooms/toilets, a 30-day storage limit, and 70% consent for residential buildings.</li>
</ul>

<h2>Electronic Marketing and Cookies</h2>
<p>Processing personal data for electronic direct marketing, including profiling, is permitted only with the data subject's <strong>explicit consent</strong>. The data subject may withdraw consent at any time and has the right to object.</p>
<p>The Law on Electronic Communications requires consent for storing or accessing information on terminal equipment (cookies), with exceptions for technical transmission or explicitly requested services. Location data may only be processed in anonymous form or with prior consent.</p>

<h2>Quick Summary</h2>
<table>
<tbody>
<tr><td><strong>Full Name</strong></td><td>Law on Personal Data Protection (Official Gazette no. 42/20, 294/21, 101/2025)</td></tr>
<tr><td><strong>In Force From</strong></td><td>24 February 2020</td></tr>
<tr><td><strong>Regulator</strong></td><td>Personal Data Protection Agency (AZLP)</td></tr>
<tr><td><strong>GDPR Alignment</strong></td><td>Largely harmonized with the GDPR</td></tr>
<tr><td><strong>DPO</strong></td><td>Required in specific cases (public bodies, large-scale monitoring, large-scale special category processing)</td></tr>
<tr><td><strong>Breach Notification</strong></td><td>72 hours to the Agency; data subjects if high risk</td></tr>
<tr><td><strong>Children's Consent Age</strong></td><td>14 years (parental consent required below 14)</td></tr>
<tr><td><strong>Cross-Border Transfer</strong></td><td>Adequacy decision or appropriate safeguards; 15-day notification for EU/EEA/NATO transfers</td></tr>
<tr><td><strong>Max Administrative Fine</strong></td><td>Up to 2% of turnover (Category I) or 4% of turnover (Category II)</td></tr>
<tr><td><strong>Video Surveillance Fine</strong></td><td>EUR 1,000 to EUR 10,000</td></tr>
<tr><td><strong>Criminal Penalty</strong></td><td>Up to 1 year imprisonment for misuse of personal data</td></tr>
<tr><td><strong>Cookie/Adtech Regime</strong></td><td>Consent required; Security Rulebook 2025 applies</td></tr>
</tbody>
</table>
`,
    coordinates: { lat: 41.6, lng: 21.7 },
    color: '#3B82F6',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Addressed', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Addressed', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'Addressed', icon: 'Scale' },
      { title: 'Data Localisation', status: 'None', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'None', icon: 'Shield' },
      { title: 'Government Data', status: 'Partial', icon: 'Building' },
    ],
  },
  {
    id: 'georgia',
    name: 'Georgia',
    flag: '🇬🇪',
    lawName: 'Law on Personal Data Protection (2023)',
    authority: 'Personal Data Protection Service of Georgia',
    region: 'Europe',
    level: 'Substantial',
    overview: "Georgia's 2023 personal-data protection law sets out processing principles, individual rights, and controller obligations. The supervisory structure and implementation should be checked against current amendments and institutional changes.",
    coordinates: { lat: 42.0, lng: 43.5 },
    color: '#22C55E',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Partial', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Partial', icon: 'Shield' },
      { title: 'Children\'s Data', status: 'Partial', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Partial', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'None', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'None', icon: 'Shield' },
      { title: 'Government Data', status: 'Partial', icon: 'Building' },
    ],
  },
    {
    id: 'armenia',
    name: 'Armenia',
    flag: '🇦🇲',
    lawName: 'Law on Protection of Personal Data (HO-49-N, 2015)',
    authority: 'Personal Data Protection Agency, Ministry of Justice',
    region: 'Europe',
    level: 'Substantial',
    overview: "Armenia's data protection framework is governed by the Law on Protection of Personal Data (HO-49-N), adopted on 18 May 2015 and in force since 1 July 2015. The law establishes comprehensive rules for data processing, supervised by the Personal Data Protection Agency under the Ministry of Justice. Armenia does not impose a general data localisation requirement, but it regulates cross-border transfers through a tiered mechanism: transfers to countries that have ratified Council of Europe Convention 108 or appear on the Agency's adequacy list proceed without prior authorisation. Transfers to countries lacking adequate protection require either the data subject's explicit consent or the Agency's prior approval based on contractual safeguards. Processing of biometric and special-category data requires mandatory notification to the Agency. Breach notification is strict, requiring violation elimination and notification within three working days. Armenia is currently undergoing an EU-supported analysis of its data protection framework, signalling potential future reforms.",
    detailedContent: `
<h2>What is the Armenian Data Protection Law?</h2>
<p>Armenia's data protection regime is governed by the <strong>Law of the Republic of Armenia on Protection of Personal Data (HO-49-N)</strong>, adopted on 18 May 2015 and entered into force on 1 July 2015. The law replaced the older Law HO-422-N of 8 October 2002 "On Personal Data".</p>
<p>The law regulates the procedure and conditions for processing personal data, and the exercise of state control over such processing by state administration bodies, local self-government bodies, state or community institutions, legal entities, and natural persons.</p>
<p>The Law's scope excludes personal data processed exclusively for journalism, literary, and artistic purposes. It also defers to other laws for specific categories such as state secrets, banking secrecy, notarial secrecy, insurance secrecy, legal professional privilege, national security, defence, anti-money laundering, counter-terrorism, and operational-intelligence activities.</p>

<h2>Definitions under the Law</h2>
<h3>Personal Data</h3>
<p>Personal data is defined as any information relating to a natural person that allows or may allow direct or indirect identification of that person's identity.</p>

<h3>Special Category (Sensitive) Personal Data</h3>
<p>Special category personal data means information relating to a person's:</p>
<ul>
<li>Race;</li>
<li>National identity or ethnic origin;</li>
<li>Political views;</li>
<li>Religious or philosophical beliefs;</li>
<li>Membership in a professional union (trade union);</li>
<li>Health status; and</li>
<li>Sexual life.</li>
</ul>

<h3>Biometric Personal Data</h3>
<p>Biometric personal data means information characterising the physical, physiological, and biological characteristics of a person.</p>

<h3>Data on Personal Life</h3>
<p>Data on personal life is defined as any information on a person's:</p>
<ul>
<li>Personal life;</li>
<li>Family life;</li>
<li>Physical, physiological, mental, or social condition; or</li>
<li>Other similar information.</li>
</ul>

<h3>Publicly Available Personal Data</h3>
<p>Publicly available personal data means information that, by the data subject's consent or by conscious operations aimed at making personal data publicly available, becomes available to a certain scope of persons or the public at large, as well as information provided by law as publicly available.</p>

<h2>National Data Protection Authority</h2>
<p>The authorised body for personal data protection is the <strong>Personal Data Protection Agency</strong> of the Republic of Armenia, operating under the Ministry of Justice. It was designated by Decision N 573-A of the RA Prime Minister as of 3 July 2015.</p>
<p>The Agency operates independently under the Law and other legal acts. Its head is appointed for a five-year term by the Prime Minister, upon nomination of the Minister of Justice, based on joint recommendations of at least five non-governmental organisations carrying out law enforcement activities. The same person may not serve more than two consecutive terms.</p>
<p>In the second half of 2024, the Agency officially launched its website (pdpa.am) to assist citizens in safeguarding their personal data. The platform offers training courses, legislative acts, guidelines, templates, and other resources.</p>

<h2>Powers of the Authorised Body</h2>
<p>The Personal Data Protection Agency has the following powers:</p>
<ul>
<li>Check, on its initiative or on the basis of an application, the compliance of personal data processing with the Law;</li>
<li>Apply administrative sanctions prescribed by law in case of violations;</li>
<li>Require blocking, suspending, or terminating the processing of personal data violating the Law;</li>
<li>Require rectification, modification, blocking, or destruction of personal data where grounds exist;</li>
<li>Prohibit completely or partially the processing of personal data after examining the processor's notification;</li>
<li>Keep a register of processors of personal data;</li>
<li>Recognise electronic systems for processing personal data as having an adequate level of protection and include them in the register;</li>
<li>Check devices and documents, including existing data and computer software used for processing data;</li>
<li>Apply to court in cases provided for by law;</li>
<li>Consider applications of natural persons regarding personal data processing and deliver decisions;</li>
<li>Submit, once a year, a public report on the current situation in personal data protection and on the activities of the previous year;</li>
<li>Conduct research and provide advice on data processing;</li>
<li>Report to law enforcement bodies where doubts arise regarding violations of a criminal nature.</li>
</ul>
<p>Decisions of the Agency may be appealed through judicial procedure.</p>

<h2>Registration and Notification Requirements</h2>
<p><strong>Registration is voluntary</strong> unless otherwise specified by the authorised body. The processor has the right to notify the Agency of its intention to process data prior to processing. However, at the request of the Agency, the processor is obliged to send a notification.</p>
<p><strong>Mandatory notification</strong> applies prior to the processing of <strong>biometric or special category personal data</strong>. The notification must include:</p>
<ul>
<li>Name (surname, name, patronymic) of the processor or authorised person, registered office or place of registration;</li>
<li>Purpose and legal grounds for processing personal data;</li>
<li>Scope of personal data;</li>
<li>Scope of data subjects;</li>
<li>List of operations performed upon personal data and a general description of processing methods;</li>
<li>Description of measures undertaken for ensuring security of processing;</li>
<li>Date of starting the processing;</li>
<li>Time limits and conditions for completing the processing.</li>
</ul>
<p>The Agency enters the information into the register of processors within thirty days following receipt of the notification. If information is incomplete or inaccurate, the Agency may require the processor to specify it prior to entry into the register.</p>

<h2>Lawful Basis for Processing</h2>
<p>Processing of personal data is lawful where:</p>
<ul>
<li>The data have been processed in observance of the law, and the <strong>data subject has given consent</strong>, except for cases directly provided for by law; or</li>
<li>The data being processed have been <strong>obtained from publicly available sources</strong> of personal data.</li>
</ul>
<p>The data subject may give consent in person or through a representative, where a power of attorney specifically provides for such a power.</p>

<h2>Consent Requirements</h2>
<p>Consent is considered given and the processor has the right to process where:</p>
<ul>
<li>Personal data are indicated in a document addressed to the processor and signed by the data subject (unless the document, by its content, is an objection against processing);</li>
<li>The processor has obtained data on the basis of an agreement concluded with the data subject and uses it for the purposes prescribed by the agreement;</li>
<li>The data subject voluntarily transfers information on his or her personal data to the processor for use purposes.</li>
</ul>
<p>The data subject must give consent in writing or electronically, validated by electronic digital signature. In case of oral consent, it must be given through reliable operations that clearly attest the data subject's consent to using personal data.</p>
<p>The burden of proving the fact of obtaining consent lies with the processor. In case of incapacity, limited capacity, or being a minor <strong>under the age of 16</strong>, consent must be given by a legal representative or parent.</p>
<p>For obtaining consent, the processor must notify the data subject of the intention to process the data, including:</p>
<ul>
<li>The data subject's surname, name, patronymic;</li>
<li>Legal grounds and purpose of processing;</li>
<li>List of personal data subject to processing;</li>
<li>List of operations to be performed;</li>
<li>Scope of persons to whom personal data may be transferred;</li>
<li>Name and position of the processor or representative requesting consent, and registered office;</li>
<li>Information on the data subject's rights to rectification, destruction, termination of processing, or other operations;</li>
<li>Validity of the consent requested, as well as the procedure and consequences of withdrawing consent.</li>
</ul>

<h2>Data Processing Principles</h2>
<p>The Law enforces the following principles:</p>
<ul>
<li><strong>Lawfulness:</strong> Processing must be lawful and in observance of the law.</li>
<li><strong>Proportionality:</strong> Processing must pursue a legitimate purpose, and measures to achieve it must be suitable, necessary, and moderate. The processor must process the minimum volume of personal data necessary. Processing is prohibited where the purpose can be achieved in a depersonalised manner. Data must be stored so as to exclude identification for a period longer than necessary.</li>
<li><strong>Reliability:</strong> Data must be complete, accurate, simple, and kept up to date.</li>
<li><strong>Minimum engagement of subjects:</strong> Where state bodies can obtain personal data through a uniform electronic information system, the data subject shall not be required to submit personal data necessary for certain operations.</li>
</ul>

<h2>Processing Special Category and Biometric Data</h2>
<p>The processing of <strong>special category personal data without the person's consent is prohibited</strong>, except where processing is directly provided for by law. Processing must immediately terminate when the grounds and purpose of processing are eliminated.</p>
<p><strong>Biometric personal data</strong> shall be processed only with the data subject's consent, except for cases provided for by law and where the purpose pursued by law is possible to implement only through processing of these biometric data.</p>

<h2>Processing of Minors' Data</h2>
<p>In case of incapacity or limited capacity of the data subject, or of being a minor <strong>under the age of 16</strong>, consent for processing personal data shall be given by a legal representative or parent of the data subject.</p>
<p>In case of death of the data subject, consent to process personal data shall be given by all legal heirs. If there are no heirs, the head of the community of the place of opening the succession; if declared missing, the trust manager of the property. Personal data of a deceased person (name, gender, year, month, and day of birth and death) may be processed without consent. For deceased public figures in culture, arts, science, education, sport, religion, and other public fields, data on personal life may be processed without consent where <strong>50 years have elapsed</strong> from the day of death.</p>

<h2>Data Subject Rights</h2>
<p>Data subjects have the following rights under the Law:</p>
<ul>
<li><strong>Right to information:</strong> To be informed about personal data, processing, grounds and purposes, the processor, and the scope of persons to whom data may be transferred;</li>
<li><strong>Right of access:</strong> To get familiarised with personal data;</li>
<li><strong>Right to rectification, blocking, or destruction:</strong> Where data are incomplete, inaccurate, outdated, unlawfully obtained, or unnecessary for achieving processing purposes;</li>
<li><strong>Right to complain to the Agency:</strong> In case of doubts regarding rectification, blocking, or destruction by the processor;</li>
<li><strong>Right to information on processing:</strong> Including confirmation of processing, purposes, methods, recipients, list and source of data, time limits, and potential legal consequences;</li>
<li><strong>Right regarding automated decisions:</strong> It is prohibited to deliver decisions not stemming from processing purposes that give rise to legal consequences for the data subject or affect rights and legitimate interests, except with consent or where provided by law;</li>
<li><strong>Right to appeal:</strong> To appeal actions or inaction of the processor before the authorised body or through judicial procedure;</li>
<li><strong>Right to compensation:</strong> For damages as prescribed by law.</li>
</ul>
<p>Information shall be provided to the data subject free of charge, unless otherwise provided by law. The processor must provide information within <strong>five working days</strong> upon receipt of a written request.</p>

<h2>Processor Obligations</h2>
<p>The processor of personal data has the following obligations:</p>
<ul>
<li>Provide information to the data subject at the data subject's request;</li>
<li>Carry out necessary operations for completing, keeping up to date, rectifying, or destructing incomplete, inaccurate, outdated, unlawfully obtained, or unnecessary personal data;</li>
<li>Explain to the data subject in writing the consequences of failure to provide personal data, including the rights of the data subject;</li>
<li>Where data have been obtained not from the data subject, provide the data subject with the processor's name, purpose and legal ground, scope of potential users, and rights of the data subject;</li>
<li>Destruct or block personal data not necessary for achieving the legitimate purpose;</li>
<li>Use encryption keys to ensure the protection of information systems containing personal data against accidental loss, unauthorised access, unlawful use, recording, destruction, alteration, blocking, copying, dissemination, and other interference;</li>
<li>Prevent access by unauthorised persons to processing technologies and ensure that only lawful users access data subject to processing;</li>
<li>Maintain confidentiality during and after performing official or employment duties concerning personal data processing;</li>
<li>Follow the requirements for ensuring security prescribed by the Decision of the Government of the Republic of Armenia.</li>
</ul>
<p>Legal persons processing personal data may apply to the Agency for recognition of their electronic systems as having an adequate level of protection and inclusion in the register.</p>

<h2>Data Protection Officer (DPO)</h2>
<p><strong>There is no requirement to appoint a Data Protection Officer</strong> under the Armenian Law on Protection of Personal Data.</p>

<h2>Cross-Border Data Transfer</h2>
<p>Personal data may be transferred to another country with the data subject's consent or where the transfer stems from the purposes of processing and/or is necessary for implementing those purposes.</p>
<p>Personal data may be transferred to another state <strong>without the permission of the authorised body</strong> where the given state ensures an adequate level of protection. An adequate level of protection is considered ensured where:</p>
<ul>
<li>Personal data are transferred in compliance with international agreements; or</li>
<li>Personal data are transferred to any of the countries included in the list officially published by the authorised body (which incorporates Council of Europe Convention 108 parties and the Agency's adequacy list).</li>
</ul>
<p>Personal data may be transferred to the territory of a state <strong>not ensuring an adequate level of protection only by permission of the authorised body</strong>, where data are transferred on the basis of an agreement that provides safeguards approved by the Agency as ensuring adequate protection.</p>
<p>The processor must apply to the Agency for permission prior to the transfer, specifying the country, recipient description, content of personal data, purpose of processing and transferring, and the agreement or draft. The Agency must permit or reject the application <strong>within 30 days</strong>. The Agency may request additional information and, where it finds contractual safeguards insufficient, specify the necessary changes.</p>
<p>The Agency must regularly (at least once a year) revise the list of countries ensuring adequate protection and publish changes in the official journal and on its official website.</p>
<p>Personal data under the disposition of state bodies may be transferred to foreign state bodies only within the scope of interstate agreements, whereas to non-state bodies in accordance with the norms above.</p>

<h2>Data Breach Notification</h2>
<p>In case unlawful operations performed upon personal data are revealed, the processor must <strong>immediately, but not later than within three working days</strong>, eliminate the committed violations. If it is impossible to eliminate the violations, the processor must immediately destruct personal data. The processor must inform the data subject (or representative) and the authorised body (where requested) on the elimination of violations or destruction of data within <strong>three working days</strong>.</p>
<p>In case of an <strong>outflow of personal data from electronic systems</strong>, the processor must immediately publish an announcement, and report the outflow to the <strong>Police of the Republic of Armenia</strong> and the authorised body for personal data protection.</p>

<h2>Security Requirements</h2>
<p>The processor must use encryption keys and technical-organisational measures to protect information systems against accidental loss, unauthorised access, unlawful use, recording, destruction, alteration, blocking, copying, dissemination, and other interference. The requirements for security of processing in information systems, tangible media of biometric data, and technologies for storage outside information systems are prescribed by the Decision of the Government of the Republic of Armenia.</p>
<p>Use and storage of biometric personal data outside information systems may be carried out only through tangible media, technologies, or forms that ensure protection against unauthorised access, unlawful use, destruction, alteration, blocking, copying, and dissemination.</p>

<h2>Enforcement and Sanctions</h2>
<p>The authorised body may apply administrative sanctions prescribed by law in case of violations. It may also:</p>
<ul>
<li>Require blocking, suspending, or terminating the processing of personal data violating the Law;</li>
<li>Require rectification, modification, blocking, or destruction of personal data;</li>
<li>Prohibit completely or partially the processing of personal data;</li>
<li>Apply to court in cases provided for by law.</li>
</ul>
<p>Decisions of the authorised body may be appealed through judicial procedure. The Law does not prescribe specific maximum fine amounts in the main text; administrative liability is governed by the Code of Administrative Offences.</p>

<h2>Electronic Marketing and Cookies</h2>
<p>There is <strong>no specific regulation</strong> on electronic marketing under the Armenian data protection law. However, it is advised to obtain user consent, such as through appropriate disclaimers.</p>
<p>There is also <strong>no regulation on cookies and location data</strong>. However, it is advisable to obtain user consent, such as through appropriate disclaimers.</p>

<h2>Recent Developments</h2>
<p>In the second half of 2024, the Personal Data Protection Agency officially launched its website (pdpa.am) to assist citizens in safeguarding their personal data. The platform offers e-courses on personal data protection, guidelines, the privacy notice form, and access to legislative acts. Armenia is currently undergoing an EU-supported analysis of its data protection framework, signalling potential future reforms.</p>

<h2>Quick Summary</h2>
<table>
<tbody>
<tr><td><strong>Full Name</strong></td><td>Law of the Republic of Armenia on Protection of Personal Data (HO-49-N)</td></tr>
<tr><td><strong>Adopted</strong></td><td>18 May 2015</td></tr>
<tr><td><strong>In Force From</strong></td><td>1 July 2015</td></tr>
<tr><td><strong>Replaced</strong></td><td>Law HO-422-N of 8 October 2002 "On Personal Data"</td></tr>
<tr><td><strong>Regulator</strong></td><td>Personal Data Protection Agency, Ministry of Justice</td></tr>
<tr><td><strong>Registration</strong></td><td>Voluntary (mandatory for biometric and special-category data)</td></tr>
<tr><td><strong>DPO</strong></td><td>Not required</td></tr>
<tr><td><strong>Breach Notification</strong></td><td>Within 3 working days (Police + Agency for data outflow)</td></tr>
<tr><td><strong>Cross-Border Transfer</strong></td><td>Adequacy list / Convention 108 / Agency permission (30 days)</td></tr>
<tr><td><strong>Minors' Consent Age</strong></td><td>Under 16 (by legal representative/parent)</td></tr>
<tr><td><strong>Cookies/Marketing</strong></td><td>No specific regulation (consent advised)</td></tr>
</tbody>
</table>
`,
    coordinates: { lat: 40.2, lng: 45.0 },
    color: '#EF4444',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'None', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'None', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'Partial', icon: 'Scale' },
      { title: 'Data Localisation', status: 'None', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'None', icon: 'Shield' },
      { title: 'Government Data', status: 'Partial', icon: 'Building' },
    ],
  },
  {
    id: 'azerbaijan',
    name: 'Azerbaijan',
    flag: '🇦🇿',
    lawName: 'Law on Personal Data (2010)',
    authority: 'Relevant state bodies under the national personal-data framework',
    region: 'Europe',
    level: 'Moderate',
    overview: "Azerbaijan's Law on Personal Data provides a statutory framework for collection, processing, and protection of personal data. Institutional responsibilities and sectoral rules should be confirmed from current official sources.",
    coordinates: { lat: 40.4, lng: 47.7 },
    color: '#F59E0B',
    topics: [
      { title: 'Data Protection Authority', status: 'Partial', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Partial', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Partial', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Partial', icon: 'Shield' },
      { title: 'Children\'s Data', status: 'Partial', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Partial', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'None', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'None', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'None', icon: 'Shield' },
      { title: 'Government Data', status: 'Partial', icon: 'Building' },
    ],
  },
  {
    id: 'kazakhstan',
    name: 'Kazakhstan',
    flag: '🇰🇿',
    lawName: 'Law on Personal Data and Its Protection (2013)',
    authority: 'Ministry of Digital Development, Innovations and Aerospace Industry and designated state bodies',
    region: 'Asia',
    level: 'Substantial',
    overview: "Kazakhstan's 2013 law regulates personal-data collection, processing, storage, and protection, including localization-related requirements. The competent authority and current rules should be checked against the latest government structure.",
    coordinates: { lat: 48.0, lng: 68.0 },
    color: '#3B82F6',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Partial', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Partial', icon: 'Shield' },
      { title: 'Children\'s Data', status: 'Partial', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Partial', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'None', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'None', icon: 'Shield' },
      { title: 'Government Data', status: 'Partial', icon: 'Building' },
    ],
  },
    {
    id: 'uzbekistan',
    name: 'Uzbekistan',
    flag: '🇺🇿',
    lawName: 'Law on Personal Data (No. LRU-547, 2019)',
    authority: 'State Personalization Center under the Cabinet of Ministers',
    region: 'Asia',
    level: 'Substantial',
    overview: "Uzbekistan's data protection regime is governed by the Law on Personal Data (No. LRU-547), adopted on 2 July 2019 and in force since 1 October 2019. The law establishes a comprehensive framework for data processing, overseen by the State Personalization Center under the Cabinet of Ministers. Uzbekistan operates a mandatory notification-based registration system for personal databases in the State Register. A key feature of the law is its strict data localisation requirement (Article 27-1), mandating that personal data of Uzbek citizens be collected, systematized, and stored on technical means physically located within Uzbekistan. Cross-border transfers are permitted only to countries ensuring adequate protection or with the data subject's consent. The law is accompanied by a detailed Model Procedure for Processing Personal Data issued by the Ministry of Justice in November 2023, which provides operational guidance for controllers and operators.",
    detailedContent: `
<h2>What is the Law on Personal Data?</h2>
<p>Uzbekistan's primary data protection framework is the <strong>Law on Personal Data (No. LRU-547)</strong>, adopted by the Legislative Chamber on 16 April 2019, approved by the Senate on 21 June 2019, and signed by the President on 2 July 2019. The law entered into force on <strong>1 October 2019</strong>.</p>
<p>The purpose of the law is to regulate relations in the field of personal data processing, ensuring the protection of constitutional rights and freedoms of individuals. Where an international treaty to which Uzbekistan is a party establishes rules differing from domestic law, the rules of the international treaty prevail.</p>
<p>In November 2023, the Ministry of Justice approved a <strong>Model Procedure for the Processing of Personal Data</strong> (registered under No. 3478), which provides detailed operational guidance to support the implementation of the Law.</p>

<h2>Scope and Exclusions</h2>
<p>The law applies to relations arising from the processing and protection of personal data, regardless of the means of processing used, including information technology. However, it does not apply to:</p>
<ul>
<li>Processing of personal data by an individual for personal, domestic purposes and not related to professional or commercial activity;</li>
<li>The formation, storage, and use of documents of the National Archival Fund and other archival documents containing personal data;</li>
<li>Processing of personal data related to information constituting state secrets;</li>
<li>Processing of personal data obtained in the course of operational-search, intelligence, and counter-intelligence activities, combating crime, law enforcement, and counteracting the legalization of proceeds of crime.</li>
</ul>

<h2>Key Definitions</h2>
<h3>Personal Data</h3>
<p>Information recorded on electronic, paper, and/or other tangible media relating to a specific individual or giving the possibility of their identification.</p>

<h3>Personal Data Subject</h3>
<p>An individual to whom personal data relates.</p>

<h3>Personal Database</h3>
<p>A database in the form of an information system containing personal data.</p>

<h3>Processing of Personal Data</h3>
<p>The implementation of one or a combination of actions to collect, systematize, store, modify, supplement, use, provide, distribute, transfer, anonymize, and destroy personal data.</p>

<h3>Operator</h3>
<p>A state body, individual, and/or legal entity that processes personal data.</p>

<h3>Owner</h3>
<p>A state body, individual, and/or legal entity having the right to own, use, and dispose of a personal database.</p>

<h3>Special Personal Data</h3>
<p>Data on racial or social origin, political, religious, or ideological beliefs, membership in political parties and trade unions, as well as data relating to physical or mental health, private life, and criminal record.</p>

<h3>Biometric and Genetic Data</h3>
<p>Biometric data characterizes the anatomical and physiological characteristics of the subject. Genetic data relates to inherited or acquired characteristics resulting from biological analysis.</p>

<h2>State Regulation and Supervisory Authority</h2>
<p>State regulation in the field of personal data is carried out by the <strong>Cabinet of Ministers</strong> and the <strong>authorized state body</strong>.</p>

<h3>Cabinet of Ministers</h3>
<p>The Cabinet ensures the implementation of a unified state policy, approves state programs, determines the procedure for maintaining the State Register of Personal Databases, and sets requirements for security levels, data protection, and storage of biometric/genetic data.</p>

<h3>State Personalization Center</h3>
<p>The authorized state body is the <strong>State Personalization Center</strong> under the Cabinet of Ministers. Its functions include:</p>
<ul>
<li>Implementing state policy in the field of personal data;</li>
<li>Approving the model procedures for processing personal data and organizing the activities of responsible structural units;</li>
<li>Maintaining the State Register of Personal Databases;</li>
<li>Issuing registration certificates for personal databases;</li>
<li>Exercising state control over compliance;</li>
<li>Determining the necessary level of security of personal data;</li>
<li>Issuing binding orders to eliminate violations;</li>
<li>Cooperating with foreign authorities and international organizations.</li>
</ul>

<h2>Basic Principles of Processing</h2>
<p>The law establishes the following fundamental principles:</p>
<ul>
<li>Observance of constitutional rights and freedoms of humans and citizens;</li>
<li>Legitimacy of the purposes and methods of processing;</li>
<li>Accuracy and reliability of personal data;</li>
<li>Confidentiality and security of personal data;</li>
<li>Equality of rights of subjects, owners, and operators;</li>
<li>Security of the individual, society, and the state.</li>
</ul>

<h2>Lawful Conditions for Processing</h2>
<p>Personal data processing is permitted in the following cases:</p>
<ul>
<li>The <strong>subject's consent</strong> to the processing;</li>
<li>Processing is necessary to fulfill a <strong>contract</strong> to which the subject is a party, or to take pre-contractual measures at the subject's request;</li>
<li>Processing is necessary to fulfill the <strong>legal obligations</strong> of the owner/operator;</li>
<li>Processing is necessary to protect the <strong>legitimate interests</strong> of the subject or another person;</li>
<li>Processing is necessary to exercise the <strong>rights and legitimate interests</strong> of the owner/operator or a third party, or to achieve socially significant purposes (provided rights of subjects are not violated);</li>
<li>Processing for <strong>statistical or research purposes</strong>, subject to mandatory anonymization;</li>
<li>The data is obtained from <strong>publicly available sources</strong>.</li>
</ul>
<p>If processing is necessary to protect the rights and legitimate interests of the subject, it may be carried out without consent until such consent can be obtained.</p>

<h2>Consent Requirements</h2>
<p>The subject agrees to the processing of personal data in any form that confirms the fact of its receipt. However, for the processing of <strong>special personal data</strong> and for <strong>dissemination</strong> beyond original purposes, the subject's consent must be in <strong>writing</strong>, including in the form of an electronic document.</p>
<p>For incapacitated or limited-capacity subjects, written consent is given by the legal representative. For minors, consent is given by parents or guardians. In the event of death, consent is given by heirs if not previously provided by the subject.</p>
<p>The subject may withdraw consent in the form in which it was given, or in writing. Upon withdrawal, the operator must destroy the data within the timeframe specified in the Model Procedure (typically by the next working day).</p>

<h2>Registration of Personal Databases</h2>
<p>Uzbekistan operates a <strong>notification-based registration system</strong>. Personal databases are subject to registration in the <strong>State Register of Personal Databases</strong>.</p>
<p>The following databases are <strong>exempt from registration</strong>:</p>
<ul>
<li>Databases of public associations or religious organizations (if data is not distributed to third parties);</li>
<li>Data made publicly available by the subject;</li>
<li>Data containing only last name, first name, and patronymic;</li>
<li>Data necessary for a single pass to a territory;</li>
<li>Data included in state automated information systems;</li>
<li>Data processed without automation;</li>
<li>Data processed in accordance with labor law.</li>
</ul>
<p>Owners/operators must notify the authorized body of any change in registration data within <strong>10 calendar days</strong>.</p>

<h2>Data Subject Rights</h2>
<p>Subjects have the following rights:</p>
<ul>
<li><strong>Right to know:</strong> Whether the owner/operator holds their personal data and its composition;</li>
<li><strong>Right of access:</strong> To receive information about the processing (grounds, purposes, methods, recipients, retention periods, cross-border transfers);</li>
<li><strong>Right to rectification:</strong> To request change or addition of data within 3 days;</li>
<li><strong>Right to withdraw consent</strong> at any time;</li>
<li><strong>Right to object:</strong> To temporarily suspend processing if data is incomplete, outdated, inaccurate, illegally obtained, or unnecessary;</li>
<li><strong>Right to appeal:</strong> To the authorized body or court for protection of rights;</li>
<li><strong>Right regarding automated decisions:</strong> Not to be subject to a decision based solely on automated processing that affects legal rights (exceptions apply);</li>
<li><strong>Right to give consent for distribution</strong> in public sources.</li>
</ul>

<h2>Owner and Operator Obligations</h2>
<p>Owners and operators must:</p>
<ul>
<li>Comply with personal data laws;</li>
<li>Provide information upon request of the subject;</li>
<li>Approve the composition of personal data necessary for tasks;</li>
<li>Destroy data when purposes are achieved or consent is withdrawn;</li>
<li>Provide evidence of consent where required;</li>
<li>Change/add data upon documentary confirmation, or destroy if impossible;</li>
<li>Temporarily suspend or destroy data if violations are identified;</li>
<li>Notify subjects in writing of changes, destruction, or restrictions;</li>
<li>Notify subjects in writing within 3 days of transferring data to a third party;</li>
<li>Register personal databases;</li>
<li>Take legal, organizational, and technical measures to protect data;</li>
<li>Designate a <strong>structural unit or official</strong> responsible for processing and protection of personal data.</li>
</ul>

<h2>Data Protection Officer (DPO)</h2>
<p>Uzbekistan does not require the appointment of a Data Protection Officer in the GDPR sense. Instead, the owner/operator must designate a <strong>structural unit or official responsible for the work related to the processing and protection of personal data</strong>, and ensure its work in accordance with the Model Procedure. This is a functional equivalent of a DPO, tailored to the local administrative context.</p>

<h2>Processing of Special Personal Data</h2>
<p>The processing of special personal data is <strong>prohibited</strong> as a general rule, with exceptions including:</p>
<ul>
<li>Ensuring state security from external and internal threats by the authorized state body;</li>
<li>Written consent of the subject (including electronic form);</li>
<li>Data published by the subject in publicly available sources;</li>
<li>Protection of rights and legitimate interests of the subject or other persons;</li>
<li>Activities of courts and law enforcement agencies in criminal cases and enforcement proceedings;</li>
<li>Prosecution authorities countering money laundering and terrorism financing;</li>
<li>State statistics bodies (with mandatory anonymization);</li>
<li>Medical and social services, medical diagnosis, and treatment by medical professionals;</li>
<li>Labor relations;</li>
<li>Protection of legitimate interests of subjects with incapacity or limited capacity;</li>
<li>Disclosure of data of candidates for elected public office;</li>
<li>Activities of non-governmental non-profit organizations, religious organizations, political parties, or trade unions (regarding their members/employees);</li>
<li>Processing of data of children left without parental care;</li>
<li>Ensuring state security;</li>
<li>Processing of criminal record data by state bodies.</li>
</ul>

<h2>Biometric and Genetic Data</h2>
<p>Biometric and genetic data used to identify the subject may be processed only with the subject's consent, except for cases related to international treaties, administration of justice, enforcement proceedings, or other cases provided by law. The use and storage of biometric/genetic data in electronic form outside information systems may only be carried out on tangible media that exclude unauthorized access.</p>

<h2>Data Localisation Requirement (Article 27-1)</h2>
<p>This is a critical and distinctive feature of Uzbekistan's framework. When processing personal data of <strong>citizens of the Republic of Uzbekistan</strong> using information technologies (including the Internet), the owner and/or operator <strong>must ensure that such data is collected, systematized, and stored in technical means physically located on the territory of the Republic of Uzbekistan</strong>, and in personal data bases registered in the State Register.</p>
<p>This localisation requirement is strict and applies broadly to processing activities involving Uzbek citizens' data.</p>

<h2>Cross-Border Data Transfer</h2>
<p>Cross-border transfer is the transfer of personal data by the owner/operator outside the territory of Uzbekistan. Transfers are permitted to foreign states that <strong>ensure adequate protection</strong> of the rights of data subjects.</p>
<p>Transfers to states that do not provide adequate protection may be carried out only in the following cases:</p>
<ul>
<li>The subject's <strong>consent</strong> to the cross-border transfer;</li>
<li>Necessary to protect the <strong>constitutional order</strong>, public order, rights and freedoms of citizens, health, and morality;</li>
<li>Stipulated by <strong>international treaties</strong> of Uzbekistan.</li>
</ul>
<p>Cross-border transfer may be prohibited or restricted to protect the constitutional order, morality, health, rights, and legitimate interests of Uzbek citizens, or to ensure national defense and state security.</p>

<h2>Automated Decision-Making</h2>
<p>The subject has the right not to be subject to a decision based solely on automated processing that affects their rights and legitimate interests, except where:</p>
<ul>
<li>The subject has given <strong>written consent</strong>;</li>
<li>The decision is made pursuant to an <strong>agreement</strong> between the owner and the subject;</li>
<li>The decision is <strong>prescribed by law</strong>.</li>
</ul>
<p>The owner/operator must explain the decision-making procedure, provide an opportunity to object, and respond to objections within 10 days.</p>

<h2>Data Security Measures</h2>
<p>The owner/operator and third parties must take legal, organizational, and technical measures to ensure:</p>
<ul>
<li>Realization of the subject's right to protection from interference in private life;</li>
<li>Integrity and safety of personal data;</li>
<li>Confidentiality of personal data;</li>
<li>Prevention of illegal processing.</li>
</ul>
<p>The Model Procedure specifies detailed technical requirements, including separating publicly available and non-public data, determining access rights, installing information security tools, maintaining event logs, using cryptographic protection, and implementing user identification/authentication.</p>

<h2>Breach Notification</h2>
<p>Uzbekistan's Law on Personal Data does not establish a specific statutory deadline for breach notification to the authorized body (unlike GDPR's 72 hours or Rwanda's 48 hours). However, the general obligations to ensure security, prevent illegal processing, and temporarily suspend processing upon identifying violations serve as the functional equivalent. The Model Procedure requires the operator to take immediate measures to prevent unauthorized access, destruction, alteration, or distribution.</p>

<h2>Enforcement and Sanctions</h2>
<p>Persons guilty of violating personal data legislation are liable in the prescribed manner under Uzbek law. The authorized body may:</p>
<ul>
<li>Exercise state control over compliance;</li>
<li>Issue binding orders to eliminate violations;</li>
<li>Determine the necessary level of security;</li>
<li>Require blocking, suspension, or destruction of data.</li>
</ul>
<p>Specific penalties (administrative and criminal) are governed by the Code of Administrative Responsibility and the Criminal Code of Uzbekistan, which provide for fines and other sanctions depending on the nature and severity of the violation.</p>

<h2>Quick Summary</h2>
<table>
<tbody>
<tr><td><strong>Full Name</strong></td><td>Law of the Republic of Uzbekistan on Personal Data (No. LRU-547)</td></tr>
<tr><td><strong>Adopted</strong></td><td>2 July 2019</td></tr>
<tr><td><strong>In Force From</strong></td><td>1 October 2019</td></tr>
<tr><td><strong>Regulator</strong></td><td>State Personalization Center under the Cabinet of Ministers</td></tr>
<tr><td><strong>Registration</strong></td><td>Mandatory (State Register of Personal Databases, with exemptions)</td></tr>
<tr><td><strong>DPO</strong></td><td>Not required (responsible unit/official must be designated)</td></tr>
<tr><td><strong>Data Localisation</strong></td><td><strong>Yes</strong> (Article 27-1 — strict requirement for Uzbek citizens' data)</td></tr>
<tr><td><strong>Cross-Border Transfer</strong></td><td>Adequacy-based, with consent and public interest exceptions</td></tr>
<tr><td><strong>Breach Notification</strong></td><td>No specific statutory deadline (general security obligations apply)</td></tr>
<tr><td><strong>Special Data</strong></td><td>Prohibited by default, with specific exceptions</td></tr>
<tr><td><strong>Biometric/Genetic Data</strong></td><td>Consent required; secure tangible media for storage outside systems</td></tr>
<tr><td><strong>Automated Decisions</strong></td><td>Right to object unless consent, contract, or law applies</td></tr>
<tr><td><strong>Model Procedure</strong></td><td>Issued by Ministry of Justice (November 2023, No. 3478)</td></tr>
</tbody>
</table>
`,
    coordinates: { lat: 41.4, lng: 64.6 },
    color: '#22C55E',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Partial', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Partial', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'None', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'Partial', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Addressed', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'None', icon: 'Shield' },
      { title: 'Government Data', status: 'Addressed', icon: 'Building' },
    ],
  },
    {
    id: 'kyrgyzstan',
    name: 'Kyrgyzstan',
    flag: '🇰🇬',
    lawName: 'Law on Personal Data (No. 58, 2008)',
    authority: 'State Agency for Personal Data Protection under the Cabinet of Ministers',
    region: 'Asia',
    level: 'Moderate',
    overview: "Kyrgyzstan's data protection framework is governed by the Law on Personal Data No. 58, adopted on 14 April 2008. The law establishes a mandatory registration regime for holders of personal data arrays. However, practical enforcement remains limited. The State Agency for Personal Data Protection was established in 2021 but has faced operational challenges, including the lack of a fully functional electronic registration system. A significant legislative overhaul is underway: a new Digital Code (adopted in 2025) is expected to replace the 2008 law, introducing modern concepts and strengthening enforcement powers. Until the Digital Code is fully implemented, organizations should adhere to the 2008 law while preparing for the upcoming reforms.",
    detailedContent: `
<h2>What is Kyrgyzstan's Data Protection Law?</h2>
<p>Kyrgyzstan's data protection framework is primarily governed by the <strong>Constitution of the Kyrgyz Republic</strong>, which prohibits the collection, storage, use, and dissemination of confidential information (including private life information) without the subject's consent.</p>
<p>The core legislative instrument is the <strong>Law on Personal Data No. 58</strong>, adopted on 14 April 2008, and entered into force on 18 April 2008. The law has been amended several times, most recently on 29 November 2021.</p>
<p>The Law aims to regulate work with personal data based on standard international norms and principles, ensuring the protection of human rights and freedoms related to the collection, processing, and use of personal data.</p>

<h2>Scope and Exclusions</h2>
<p>The law applies to relations arising from working with personal data, regardless of the means of processing, including information technology.</p>
<p>However, it <strong>does not apply</strong> to the storage, processing, and use of personal data in connection with personal, family, or business affairs of an individual, unless the rights of personal data subjects are violated.</p>

<h2>Key Definitions</h2>
<h3>Personal Data</h3>
<p>Recorded information on a tangible medium about a specific person, identified or identifiable, directly or indirectly, by reference to one or more factors specific to their biological, economic, cultural, civil, or social identity. This includes biographical and identification data, personal characteristics, marital status, financial status, and health data.</p>

<h3>Sensitive Personal Data</h3>
<p>There is <strong>no clear statutory definition</strong> of sensitive personal data. However, under the Law, all personal data is classified as confidential. Processing of data revealing racial or ethnic origin, nationality, political opinions, religious or philosophical beliefs, health status, and sexual inclinations is prohibited solely for the purpose of revealing these factors (with limited exceptions).</p>

<h3>Personal Data Subject</h3>
<p>An individual to whom the relevant personal data relates.</p>

<h3>Holder (Owner) of Personal Data Array</h3>
<p>Public authorities, local authorities, and legal entities authorized to determine the purposes, categories of personal data, and control the collection, storage, processing, and use of personal data.</p>

<h3>Processor</h3>
<p>An individual or legal entity, determined by the holder (owner), who processes personal data on the basis of a contract.</p>

<h2>Supervisory Authority</h2>
<p>The <strong>State Agency for Personal Data Protection</strong> under the Cabinet of Ministers is the authorized state body. It was established by Presidential Decree No. 391 on 14 September 2021 and registered on 10 January 2022.</p>
<p>The Agency consists of two departments:</p>
<ul>
<li>Department of legislative expertise of personal data;</li>
<li>Department of ensuring protection and control of personal data processing.</li>
</ul>
<p>An <strong>Expert Council</strong> was also created, composed of independent experts and civil society representatives in cybersecurity and digital law, to recommend legislative amendments and propose new normative legal acts.</p>
<p>The Agency is responsible for:</p>
<ul>
<li>Ensuring control over compliance with personal data processing requirements;</li>
<li>Protecting the rights of personal data subjects;</li>
<li>Registering holders (owners) of personal data arrays;</li>
<li>Maintaining the Register of holders (owners) of personal data arrays;</li>
<li>Cooperating with foreign data protection authorities.</li>
</ul>

<h2>Principles of Processing</h2>
<p>The law establishes the following principles:</p>
<ul>
<li>Personal data must be received and processed in accordance with the law;</li>
<li>Data must be collected for precisely pre-defined, declared, and legitimate purposes and not used in contradiction with those purposes;</li>
<li>The initial data must be accurate and updated if necessary;</li>
<li>Personal data should be stored no longer than the purposes for which they were accumulated require;</li>
<li>Combining arrays collected for different purposes for automated processing is prohibited;</li>
<li>Data must be stored and protected from illegal access, amendments, changes, and destruction.</li>
</ul>

<h2>Lawful Grounds for Processing</h2>
<p>Processing is permitted in the following cases:</p>
<ul>
<li>The <strong>data subject has given consent</strong>;</li>
<li>Necessary for the fulfillment of powers by public authorities or local authorities established by law;</li>
<li>Necessary to achieve the <strong>legitimate interests</strong> of holders (owners), provided that it does not interfere with the rights and freedoms of data subjects;</li>
<li>Necessary to <strong>protect the interests</strong> of the data subject;</li>
<li>Processing is carried out exclusively for the purposes of journalism, artistic, or literary creativity (provided it is agreed with the subject and respects privacy and freedom of speech).</li>
</ul>

<h2>Consent Requirements</h2>
<p>The data subject independently decides whether to provide their personal data and gives consent to processing freely, consciously, and in a form that allows confirming the fact of its receipt. Consent must be expressed in <strong>writing on paper</strong> or in the form of an <strong>electronic document signed with an electronic signature</strong>.</p>
<p>Before providing personal data, the subject must be acquainted with the list of collected data, the grounds and purposes of collection and use, possible transfer to third parties, and other possible uses. The subject has the right not to indicate the reasons for refusing to provide their data.</p>

<h2>Registration Requirement</h2>
<p>This is a central feature of the Kyrgyz framework. Under Article 30, <strong>arrays of personal data and holders (owners) of these arrays are subject to mandatory registration</strong> with the authorized state body.</p>
<p>Registration involves:</p>
<ul>
<li>Name and details of the holder (owner);</li>
<li>Purposes and methods of collecting and using personal data;</li>
<li>Retention regimes and terms;</li>
<li>List of personal data to be collected;</li>
<li>Categories of data subjects;</li>
<li>Sources of collection;</li>
<li>Procedures for informing subjects;</li>
<li>Security and confidentiality measures;</li>
<li>The person responsible for handling personal data;</li>
<li>Recipients or categories of recipients;</li>
<li>Expected cross-border transfers.</li>
</ul>
<p>The registration procedure was approved by Cabinet of Ministers Regulation No. 638 dated 18 November 2022. It involves three stages: obtaining a registration number, completing electronic forms, and agreeing on lists of personal data.</p>
<p><strong>Practical Limitation:</strong> To date, the electronic registration system requires local registration data, meaning <strong>only local entities can realistically register</strong>. Foreign entities are practically excluded from this requirement.</p>

<h2>Data Protection Officer (DPO)</h2>
<p>The law <strong>does not explicitly require</strong> the appointment of a Data Protection Officer (DPO) in the GDPR sense. However, holders (owners) must indicate in their registration the name and contact details of the <strong>person responsible for working with personal data</strong>. This is a functional equivalent of a DPO, tailored to the local administrative context.</p>

<h2>Data Subject Rights</h2>
<p>Data subjects have the following rights:</p>
<ul>
<li><strong>Right to know:</strong> About the existence of a holder (owner) with their personal data and to have access to them;</li>
<li><strong>Right of access:</strong> To receive information about processing, including legal grounds, purposes, methods, recipients, retention periods, and cross-border transfers;</li>
<li><strong>Right to rectify:</strong> To demand amendments to their personal data if there are grounds confirmed by documents;</li>
<li><strong>Right to block:</strong> To demand blocking of data if its unreliability or illegality of actions is revealed;</li>
<li><strong>Right to appeal:</strong> To appeal illegal actions in court;</li>
<li><strong>Right to compensation:</strong> For damages and moral harm in court.</li>
</ul>
<p>Information about the availability and content of personal data must be provided within <strong>7 days</strong> from the date of application, free of charge (except for the cost of tangible media).</p>

<h2>Restrictions on Subject Rights</h2>
<p>Subject rights may be restricted in the following cases:</p>
<ul>
<li>For personal data subjects admitted to state secrets (regarding the right to provide data);</li>
<li>For personal data obtained as a result of operational-investigative activities (except in cases of violation of the law);</li>
<li>For data of subjects detained on suspicion of committing a crime, charged in a criminal case, or subject to preventive measures.</li>
</ul>
<p>No other restrictions are allowed.</p>

<h2>Cross-Border Data Transfer</h2>
<p>Cross-border transfer is the transfer of personal data by the holder (owner) to holders under the jurisdiction of other states. The law permits such transfers based on the following:</p>
<ul>
<li><strong>International agreement:</strong> The receiving party must ensure an adequate level of protection of the rights and freedoms of data subjects;</li>
<li><strong>Consent of the data subject;</strong></li>
<li>Transfer to countries that <strong>do not provide adequate protection</strong> is permitted only if:
  <ul>
    <li>The data subject consents;</li>
    <li>The transfer is necessary to protect the data subject's interests;</li>
    <li>The data is contained in a publicly accessible array.</li>
  </ul>
</li>
</ul>
<p>When transferring data via the Internet, the holder must ensure the necessary means of protection, respecting the confidentiality of the information.</p>

<h2>Data Security Measures</h2>
<p>The holder (owner) and processor must implement legal, organizational, and technical measures to protect personal data from unauthorized or accidental access, modification, blocking, copying, provision, distribution, and other unlawful actions. These include:</p>
<ul>
<li>Access control to equipment and data media;</li>
<li>Prevention of unauthorized reading, copying, modification, or removal of data;</li>
<li>Ensuring the ability to determine retroactively when, by whom, and what data was changed;</li>
<li>Security of data transmission systems;</li>
<li>Controlled access for each user to only authorized data;</li>
<li>Input control (ability to determine when, by whom, and what data was entered);</li>
<li>Transport control (prevention of unauthorized reading, copying, modification, or destruction during transmission);</li>
<li>Confidentiality of information during processing;</li>
<li>Compliance with Government requirements for data protection levels;</li>
<li>Recording of machine-readable media;</li>
<li>Recovery of data modified or destroyed due to unauthorized access.</li>
</ul>

<h2>Breach Notification</h2>
<p>If the holder (owner) transfers personal data <strong>without the consent</strong> of the data subject to a third party, they must inform the data subject <strong>within a week</strong>. There is no broader statutory breach notification obligation (e.g., to the regulator within 72 hours) under the current law.</p>

<h2>Enforcement and Practical Reality</h2>
<p>Although the Law on Personal Data has been adopted, there is <strong>no established enforcement practice</strong> of its provisions. The responsible agency (State Agency for Personal Data Protection) has been appointed, and enforcement practice may change once the agency is fully operational and the new Digital Code is implemented.</p>
<p>The current law provides for liability in accordance with the legislation of the Kyrgyz Republic, but specific sanctions are governed by the Code of Administrative Offences and the Criminal Code.</p>

<h2>Electronic Marketing and Online Privacy</h2>
<p>Sending electronic communications for advertising is generally subject to <strong>prior express consent</strong> of the recipient. The Law on Electrical and Postal Communication establishes that all databases of telecommunication operators must be confidential, and telecom operators are obliged to keep communication data confidential.</p>

<h2>Upcoming Reforms: The Digital Code (2025-2026)</h2>
<p>Kyrgyzstan is undergoing a fundamental legislative overhaul. A new <strong>Digital Code</strong>, adopted in 2025 and in force since 5 February 2026, is expected to replace the outdated 2008 Law on Personal Data.</p>
<p>The Digital Code is expected to:</p>
<ul>
<li>Replace the 2008 framework with a modern, comprehensive regime;</li>
<li>Strengthen the sanctioning power of the State Agency for Personal Data Protection;</li>
<li>Introduce graduated penalty regimes for violations of data processing rules, unlawful cross-border transfers, and failure to comply with Agency requests;</li>
<li>Maintain the Register of Personal Data Holders, though certain registration-related fines may be removed;</li>
<li>Address emerging challenges (though AI and cookie-specific rules may still be absent).</li>
</ul>
<p>Organizations processing Kyrgyz data should reassess compliance against the post-2026 regime rather than relying on the pre-Digital Code framework.</p>

<h2>Quick Summary</h2>
<table>
<tbody>
<tr><td><strong>Full Name</strong></td><td>Law of the Kyrgyz Republic on Personal Data (No. 58)</td></tr>
<tr><td><strong>Adopted</strong></td><td>14 April 2008</td></tr>
<tr><td><strong>In Force From</strong></td><td>18 April 2008</td></tr>
<tr><td><strong>Latest Amendment</strong></td><td>29 November 2021 (with major reforms expected under the new Digital Code)</td></tr>
<tr><td><strong>Regulator</strong></td><td>State Agency for Personal Data Protection under the Cabinet of Ministers</td></tr>
<tr><td><strong>Registration</strong></td><td>Mandatory for holders (owners) of personal data arrays (practical limitations exist)</td></tr>
<tr><td><strong>DPO</strong></td><td>Not explicitly required (a responsible person must be designated)</td></tr>
<tr><td><strong>Data Localisation</strong></td><td>No general requirement</td></tr>
<tr><td><strong>Cross-Border Transfer</strong></td><td>Adequacy-based, with consent and public interest exceptions</td></tr>
<tr><td><strong>Breach Notification</strong></td><td>Notification to data subject within 1 week for unauthorized transfers</td></tr>
<tr><td><strong>Enforcement</strong></td><td>Limited practical enforcement; strengthening expected under the Digital Code</td></tr>
<tr><td><strong>Upcoming Reform</strong></td><td>Digital Code (2025-2026) replacing the 2008 Law</td></tr>
</tbody>
</table>
`,
    coordinates: { lat: 41.2, lng: 74.8 },
    color: '#F59E0B',
    topics: [
      { title: 'Data Protection Authority', status: 'Partial', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Partial', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Partial', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Partial', icon: 'Shield' },
      { title: "Children's Data", status: 'Partial', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Partial', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'None', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'None', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'None', icon: 'Shield' },
      { title: 'Government Data', status: 'Partial', icon: 'Building' },
    ],
  },
  {
    id: 'tajikistan',
    name: 'Tajikistan',
    flag: '🇹🇯',
    lawName: 'Law on the Protection of Personal Data (2018)',
    authority: 'Designated state bodies under the national personal-data framework',
    region: 'Asia',
    level: 'Moderate',
    overview: "Tajikistan adopted a dedicated personal-data law in 2018. The law provides a statutory basis for personal-data processing, while public information on independent supervision and detailed implementation may be limited.",
    coordinates: { lat: 38.9, lng: 71.0 },
    color: '#8B5CF6',
    topics: [
      { title: 'Data Protection Authority', status: 'Partial', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Partial', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Partial', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Partial', icon: 'Shield' },
      { title: 'Children\'s Data', status: 'Partial', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Partial', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'None', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'None', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'None', icon: 'Shield' },
      { title: 'Government Data', status: 'Partial', icon: 'Building' },
    ],
  },
  {
    id: 'nepal',
    name: 'Nepal',
    flag: '🇳🇵',
    lawName: 'Privacy Act, 2018 (2075)',
    authority: 'Government bodies designated under the Privacy Act and related laws',
    region: 'Asia',
    level: 'Moderate',
    overview: "Nepal's Privacy Act, 2018 protects privacy and regulates certain personal information and records. Its framework differs from a single comprehensive GDPR-style regime, and sector-specific laws may also apply.",
    coordinates: { lat: 28.4, lng: 84.1 },
    color: '#EF4444',
    topics: [
      { title: 'Data Protection Authority', status: 'Partial', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Partial', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Partial', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Partial', icon: 'Shield' },
      { title: 'Children\'s Data', status: 'Partial', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Partial', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'None', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'None', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'None', icon: 'Shield' },
      { title: 'Government Data', status: 'Partial', icon: 'Building' },
    ],
  },
  {
    id: 'jamaica',
    name: 'Jamaica',
    flag: '🇯🇲',
    lawName: 'Data Protection Act, 2020',
    authority: 'Office of the Information Commissioner (OIC)',
    region: 'Americas',
    level: 'Substantial',
    overview: "Jamaica's Data Protection Act, 2020 establishes rules for the processing of personal data and provides for an Information Commissioner. The Act's commencement and regulatory guidance should be checked for current operational obligations.",
    coordinates: { lat: 18.1, lng: -77.3 },
    color: '#F59E0B',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Partial', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Partial', icon: 'Shield' },
      { title: 'Children\'s Data', status: 'Partial', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Partial', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'None', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'None', icon: 'Shield' },
      { title: 'Government Data', status: 'Partial', icon: 'Building' },
    ],
  },
  {
    id: 'mauritius',
    name: 'Mauritius',
    flag: '🇲🇺',
    lawName: 'Data Protection Act 2017',
    authority: 'Data Protection Office (DPO)',
    region: 'Africa',
    level: 'Comprehensive',
    overview: "Mauritius's Data Protection Act 2017 establishes data-subject rights, controller obligations, and oversight by the Data Protection Office. Cross-border transfers and registration requirements should be assessed under the current Act and regulations.",
    coordinates: { lat: -20.2, lng: 57.5 },
    color: '#22C55E',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Partial', icon: 'Shield' },
      { title: 'Children\'s Data', status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Partial', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'Partial', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'None', icon: 'Shield' },
      { title: 'Government Data', status: 'Partial', icon: 'Building' },
    ],
  },
  {
    id: 'botswana',
    name: 'Botswana',
    flag: '🇧🇼',
    lawName: 'Data Protection Act (2024)',
    authority: 'Information and Data Protection Commission (IDPC)',
    region: 'Africa',
    level: 'Substantial',
    overview: "Botswana enacted a modern data-protection framework in 2024, with commencement and implementation details governed by official notices and regulations. Check current IDPC guidance for operational compliance requirements.",
    coordinates: { lat: -22.0, lng: 24.0 },
    color: '#3B82F6',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Partial', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Partial', icon: 'Shield' },
      { title: 'Children\'s Data', status: 'Partial', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Partial', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'None', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'None', icon: 'Shield' },
      { title: 'Government Data', status: 'Partial', icon: 'Building' },
    ],
  },
  {
    id: 'zimbabwe',
    name: 'Zimbabwe',
    flag: '🇿🇼',
    lawName: 'Cyber and Data Protection Act [Chapter 12:07] (2021)',
    authority: 'Postal and Telecommunications Regulatory Authority of Zimbabwe (POTRAZ)',
    region: 'Africa',
    level: 'Substantial',
    overview: "Zimbabwe's Cyber and Data Protection Act regulates personal data and establishes regulatory functions involving POTRAZ. The framework includes registration and compliance obligations; verify current regulations and regulator guidance.",
    coordinates: { lat: -19.0, lng: 29.2 },
    color: '#F59E0B',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Partial', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Partial', icon: 'Shield' },
      { title: 'Children\'s Data', status: 'Partial', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Partial', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'None', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'None', icon: 'Shield' },
      { title: 'Government Data', status: 'Partial', icon: 'Building' },
    ],
  },
  {
    id: 'senegal',
    name: 'Senegal',
    flag: '🇸🇳',
    lawName: 'Law No. 2008-12 on Personal Data Protection',
    authority: 'Commission for the Protection of Personal Data (CDP)',
    region: 'Africa',
    level: 'Substantial',
    overview: "Senegal's Law No. 2008-12 establishes rules for personal-data processing and a supervisory commission, the CDP. Specific formalities and cross-border-transfer requirements should be checked against current CDP guidance.",
    coordinates: { lat: 14.5, lng: -14.5 },
    color: '#22C55E',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Partial', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Partial', icon: 'Shield' },
      { title: 'Children\'s Data', status: 'Partial', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Partial', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'None', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'None', icon: 'Shield' },
      { title: 'Government Data', status: 'Partial', icon: 'Building' },
    ],
  },
  {
    id: 'cote-divoire',
    name: 'Côte d\'Ivoire',
    flag: '🇨🇮',
    lawName: 'Law No. 2013-450 on Personal Data Protection',
    authority: 'Telecommunications/ICT Regulatory Authority of Côte d\'Ivoire (ARTCI)',
    region: 'Africa',
    level: 'Substantial',
    overview: "Côte d'Ivoire's Law No. 2013-450 regulates personal-data processing, with ARTCI carrying relevant supervisory responsibilities. Current implementing rules and applicable formalities should be confirmed with official guidance.",
    coordinates: { lat: 7.5, lng: -5.5 },
    color: '#EF4444',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Partial', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Partial', icon: 'Shield' },
      { title: 'Children\'s Data', status: 'Partial', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Partial', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'None', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'None', icon: 'Shield' },
      { title: 'Government Data', status: 'Partial', icon: 'Building' },
    ],
  },
  {
    id: 'tunisia',
    name: 'Tunisia',
    flag: '🇹🇳',
    lawName: 'Organic Act No. 2004-63 on the Protection of Personal Data',
    authority: 'National Authority for the Protection of Personal Data (INPDP)',
    region: 'Africa',
    level: 'Substantial',
    overview: "Tunisia's Organic Act No. 2004-63 establishes personal-data protections and an oversight authority, the INPDP. The framework predates many modern GDPR-style laws; check current reforms and implementation practice.",
    coordinates: { lat: 34.0, lng: 9.0 },
    color: '#3B82F6',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Partial', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Partial', icon: 'Shield' },
      { title: 'Children\'s Data', status: 'Partial', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Partial', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'None', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'None', icon: 'Shield' },
      { title: 'Government Data', status: 'Partial', icon: 'Building' },
    ],
  },
    {
    id: 'algeria',
    name: 'Algeria',
    flag: '🇩🇿',
    lawName: 'Law No. 18-07 on Personal Data Protection (as amended by Law No. 25-11)',
    authority: 'National Authority for the Protection of Personal Data (ANPDP)',
    region: 'Africa',
    level: 'Substantial',
    overview: "Algeria's data protection regime is built on Law No. 18-07 of June 10, 2018, substantially modernized by Law No. 25-11 of July 24, 2025. The amendment introduced key GDPR-era concepts—biometric data, profiling, pseudonymization, and personal data breach—while strengthening controller obligations and expanding the powers of the National Authority for the Protection of Personal Data (ANPDP). The ANPDP, an independent administrative authority, has been fully operational since August 2023 and now actively enforces compliance through notifications, authorizations, and inspections. Prior express consent remains the default legal basis for processing, with limited exceptions. Cross-border transfers require prior ANPDP authorization, and controllers must maintain processing registers and appoint a Data Protection Officer. Penalties can reach up to five years' imprisonment and fines of 500,000 Algerian dinars, doubled for repeat offenses. A dedicated AI and automated decision-making law has not yet been enacted, though the 2025 amendments' introduction of profiling rules signals incremental movement toward algorithmic accountability. Algeria's framework now demands serious compliance attention from any organization processing data of individuals in the country.",
    detailedContent: `
<h2>What is Algeria's Data Protection Law?</h2>
<p>Algeria's data protection framework is governed by <strong>Law No. 18-07 of 10 June 2018</strong> on the protection of natural persons with regard to the processing of personal data. This primary legislation was significantly amended and supplemented by <strong>Law No. 25-11 of 24 July 2025</strong>.</p>
<p>The law sets out conditions for the collection, recording, organization, conservation, adaptation, extraction, consultation, use, communication, interconnection, and destruction of any information relating to an identified or identifiable person—whether directly or indirectly, by reference to an identification number or factors specific to their physical, physiological, genetic, biometric, psychic, economic, cultural, or social identity.</p>
<p>The 2025 amendment marks a further step in Algeria's progressive alignment with international standards, particularly the GDPR, introducing stronger accountability, risk-based, and governance requirements.</p>

<h2>Entry into Force and Transition</h2>
<p>Although Law 18-07 was published in 2018, its entry into force was contingent upon the establishment of the supervisory authority. The President and members of the National Authority were appointed on 18 May 2022, and the authority was officially installed on 11 August 2022.</p>
<p>According to Article 75 of the Law, it became enforceable within a maximum period of one year from the date of installation, i.e., <strong>14 February 2023</strong>. Consequently, the Law has been fully applicable since August 2023.</p>

<h2>Key Definitions</h2>
<h3>Personal Data</h3>
<p>Any information, regardless of its medium, relating to an identified or identifiable natural person, directly or indirectly, in particular by reference to an identification number or to one or more elements specific to their physical, physiological, genetic, biometric, mental, economic, cultural, or social identity.</p>

<h3>Sensitive Personal Data</h3>
<p>Personal data revealing racial or ethnic origin, political opinions, religious or philosophical beliefs, trade union membership, or relating to health, including genetic data.</p>

<h3>Data Interconnection</h3>
<p>Any mechanism of connection involving the linking of processed data for a specific purpose with other processed data, whether for identical or different purposes, by the same data controller or by one or more other data controllers.</p>

<h2>National Data Protection Authority (ANPDP)</h2>
<p>The <strong>National Authority for the Protection of Personal Data (ANPDP)</strong> is an independent and autonomous administrative authority, established under Article 23 of Law 18-07. It is composed of magistrates, representatives of parliament, the senate, the human rights council, relevant ministries, and other individuals designated by the President based on legal and technical expertise.</p>
<p>The President and members are appointed by presidential decree for a renewable five-year term. The Authority ensures that personal data processing complies with the law and respects individual rights, public freedoms, and privacy.</p>

<h3>Main Functions of ANPDP</h3>
<ul>
<li>Drawing up rules of good conduct and ethics applicable to personal data processing;</li>
<li>Advising individuals and entities on the use of personal data;</li>
<li>Informing data subjects of their rights and data controllers of their obligations;</li>
<li>Receiving declarations and granting authorisations for data processing;</li>
<li>Handling complaints and authorising cross-border transfers;</li>
<li>Ordering modifications, closures, withdrawal, or destruction of non-compliant data;</li>
<li>Proposing improvements to the legal framework and issuing standards;</li>
<li>Publishing authorisations and opinions in the national register;</li>
<li>Cooperating with foreign data protection authorities;</li>
<li>Imposing administrative sanctions.</li>
</ul>
<p>Since February 2024, the Authority has begun field inspections of private-sector companies, extending later to individuals and public companies. It has also established regional branches dedicated to inspection and audit activities, strengthening its enforcement capabilities across the national territory.</p>

<h2>Registration and Prior Authorisation Regime</h2>
<p>Algeria operates a two-tier regime: <strong>prior declaration</strong> as the standard procedure, and <strong>prior authorisation</strong> for higher-risk processing.</p>

<h3>Prior Declaration</h3>
<p>Any processing of personal data by a public or private entity must be declared to the ANPDP before processing begins. The declaration must be renewed before any new data is processed. Entities must file a prior declaration whenever they are likely to receive, store, and process personal data.</p>

<h3>Prior Authorisation</h3>
<p>Authorisation is required for processing that presents significant risks, including:</p>
<ul>
<li>Transfer of personal data abroad;</li>
<li>Communication of data to a third party;</li>
<li>Interconnection of data belonging to one or more legal entities managing a public service for different public interest purposes;</li>
<li>Processing of sensitive data (subject to specific exceptions);</li>
<li>Processing of personal data for public interest research, study, or evaluation in the health field.</li>
</ul>
<p>Under Law 25-11, prior consultation with the Authority is also required before any processing forming part of a new filing system where a DPIA indicates a high risk that has not been mitigated, or where the processing presents a high risk due to the mechanisms or technologies used.</p>

<h2>Lawful Bases for Processing</h2>
<p>Personal data may be processed only with the <strong>express consent</strong> of the data subject (or the consent of the legal representatives of a child, failing which by authorisation of the competent judge). The data subject may withdraw consent at any time.</p>
<p>Consent is not required if processing is necessary:</p>
<ul>
<li>To comply with a legal obligation to which the data subject or the data controller is subject;</li>
<li>To protect the data subject's life;</li>
<li>For the performance of a contract to which the data subject is a party, or pre-contractual measures at their request;</li>
<li>To safeguard the vital interests of the person concerned, if they are physically or legally unable to give consent;</li>
<li>For the performance of a task in the public interest or exercise of official authority;</li>
<li>For the legitimate interests of the data controller or recipient, within the fundamental rights and freedoms of the data subject.</li>
</ul>

<h2>Data Processing Principles</h2>
<p>Under Article 9 of Law 18-07, personal data must be:</p>
<ul>
<li>Processed lawfully and fairly;</li>
<li>Collected for specified, explicit, and legitimate purposes and not further processed in an incompatible way;</li>
<li>Adequate, relevant, and not excessive in relation to the purposes;</li>
<li>Accurate, complete, and, where necessary, kept up to date;</li>
<li>Kept in a form permitting identification for no longer than necessary.</li>
</ul>

<h2>Processing of Sensitive Data</h2>
<p>Processing of sensitive personal data—revealing racial or ethnic origin, political opinions, religious or philosophical beliefs, trade union membership, or health (including genetic data)—is forbidden except when:</p>
<ul>
<li>Processing is necessary to safeguard the vital interests of the data subject or another person, and the data subject is physically or legally unable to give consent;</li>
<li>Processing is carried out with consent by a foundation, association, or non-profit organization of a political, philosophical, religious, or trade union nature, within its legitimate activities, provided data are not communicated to third parties without consent;</li>
<li>Processing relates to data clearly made public by the data subject;</li>
<li>Processing is necessary for the recognition, exercise, or defence of legal claims;</li>
<li>Processing of genetic data by doctors or biologists is necessary for preventive medicine, medical diagnostics, and administration of care or treatment.</li>
</ul>

<h2>Children's Data</h2>
<p>There is no specific age limit regarding the data subject under Law 18-07. However, processing of personal data relating to a child may only be carried out after obtaining the consent of the child's legal representative or, where applicable, the authorisation of the competent judge. The judge may authorise such processing even without the legal representative's consent where the best interests of the child so require, and may withdraw such authorisation at any time.</p>

<h2>Law Enforcement Processing</h2>
<p>Personal data relating to offences, penalties, and security measures may only be processed by the judicial authority, legally empowered public services, court officials, justice auxiliaries, and prison administration services, within their legal powers.</p>
<p>Law 25-11 introduced a new Title V bis governing processing for the prevention and detection of offences, investigations, criminal inquiries, prosecutions, enforcement, and application of penalties. Such processing may only be carried out by judicial authorities, authorized investigative bodies, judicial auxiliaries, and prison administration services. Prior consent is not required, and processing must comply with legal requirements regarding purpose, data security, and scope. Certain data subject rights may be restricted for law enforcement purposes.</p>

<h2>Data Subject Rights</h2>
<p>Data subjects enjoy the following rights:</p>
<ul>
<li><strong>Right to information:</strong> To be expressly and unequivocally informed in advance of the identity of the controller, purposes of processing, recipients, and the transfer of data abroad;</li>
<li><strong>Right of access:</strong> To obtain confirmation of whether data is processed, the purposes, categories of data, recipients, and a copy of the data in an intelligible form, along with information on its origin;</li>
<li><strong>Right to rectification:</strong> To obtain updating, rectification, erasure, or blocking of data that is incomplete, inaccurate, or unlawfully processed. The controller must make corrections at no cost within 10 days. If refused or unanswered, the data subject may request the Authority to investigate;</li>
<li><strong>Right to object:</strong> For legitimate reasons, to object to processing, including an absolute right to object to the use of data for prospecting or commercial purposes;</li>
<li><strong>Heirs' rights:</strong> The heirs of the person concerned may exercise the right to rectification.</li>
</ul>
<p>The data controller may request from the Authority an extension of the response time for legitimate access requests and may object to requests that are manifestly abusive (especially due to their number or repetitive nature). The burden of proof rests with the data controller.</p>

<h2>Automated Decision-Making and Profiling</h2>
<p>Court decisions requiring an assessment of a person's conduct may not be based solely on automated processing of personal data involving the evaluation of personality aspects. No other decision having legal effects on an individual may be taken solely on the basis of automated data processing designed to characterize an individual or evaluate aspects of their personality, including profiling.</p>
<p>The 2025 amendment explicitly recognizes profiling and implicitly introduces stricter requirements regarding transparency, proportionality, and the limitation of decisions based solely on automated processing.</p>

<h2>Data Protection Officer (DPO)</h2>
<p>Under Law 25-11, controllers and any public authority responsible for the prevention and detection of offences, investigations, inquiries, prosecutions, enforcement and execution of sentences, or any body exercising public authority and law enforcement powers, <strong>must appoint a Data Protection Officer (DPO)</strong>.</p>
<p>The DPO must be selected on the basis of professional qualities and expertise in data protection law and practices. The DPO's duties include:</p>
<ul>
<li>Informing and advising on compliance obligations;</li>
<li>Monitoring compliance with applicable data protection rules and internal policies;</li>
<li>Advising on data protection impact assessments (DPIAs);</li>
<li>Acting as the contact point with the National Authority.</li>
</ul>

<h2>Controller and Processor Obligations</h2>
<p>Controllers and processors must implement appropriate technical and organizational measures to protect personal data against accidental or unlawful destruction, loss, alteration, unauthorized dissemination or access. They must respect professional secrecy even after ceasing their functions (Article 40).</p>
<p>Law 25-11 imposes additional obligations:</p>
<ul>
<li><strong>Records of processing:</strong> Controllers and processors must maintain detailed records of processing activities (identity and contact details of the controller, purposes and legal basis, categories of data subjects and data, recipients, retention periods, security measures, and international transfers). These records must be made available to the Authority upon request;</li>
<li><strong>Automated logbook:</strong> Controllers must maintain an automated logbook of personal data processing operations;</li>
<li><strong>DPIAs:</strong> A data protection impact assessment is required before processing likely to result in a high risk to the rights and freedoms of natural persons, taking into account the nature, scope, context, and purposes of processing;</li>
<li><strong>Prior consultation:</strong> Where a DPIA indicates high risk not mitigated by the controller, prior consultation with the Authority is required.</li>
</ul>

<h2>Data Breach Notification</h2>
<p>Article 45 bis 8 of Law 25-11 introduces a mandatory obligation for the data controller to notify the Authority <strong>no later than five (5) days</strong> after becoming aware of a personal data breach. Where the notification is made after this deadline, the reasons for the delay must be provided.</p>
<p>Where the breach is likely to result in a high risk to individuals, the data subject must also be informed in clear and simple terms. Processors must inform the data controller of any breach as soon as they become aware of it.</p>
<p>Failure by a service provider to notify the Authority or the data subject of a personal data breach is punishable by imprisonment and a fine.</p>

<h2>Cross-Border Data Transfer</h2>
<p>The data controller may transfer personal data to a foreign State only with the <strong>authorisation of the National Authority</strong>, and only if that State ensures a sufficient level of protection of privacy and fundamental rights and freedoms. It is prohibited, in any case, to communicate or transfer data to a foreign country when such transfer is likely to endanger public security or the vital interests of the State.</p>
<p>Derogations from the general authorisation requirement (Article 45) allow transfers when:</p>
<ul>
<li>The data subject has expressly consented;</li>
<li>The transfer is necessary to preserve the life of the data subject, public interest, comply with obligations for legal claims, execute a contract, execute an international judicial cooperation measure, or prevent/diagnose/treat medical conditions;</li>
<li>The transfer is carried out pursuant to a bilateral or multilateral agreement to which Algeria is a party;</li>
<li>The transfer is authorised by the Authority where processing complies with the Law.</li>
</ul>
<p>Law 25-11 introduces Articles 45 bis 13 and 45 bis 14, requiring an <strong>adequacy-type assessment</strong> by the Authority prior to transfers to a foreign State or international organisation, and restricting onward transfers without the sender's prior consent, subject to narrow exceptions.</p>

<h2>Direct Marketing and Cookies</h2>
<p>Direct prospecting is forbidden except by email under certain conditions. Law 18-05 of 10 May 2018 on electronic commerce provides that e-providers collecting personal data must collect only data necessary for commercial transactions, obtain the consent of e-consumers prior to collection, guarantee the security and confidentiality of data, and comply with applicable provisions.</p>
<p>There is no specific provision related to cookies or adtech in Law 18-07 or Law 25-11.</p>

<h2>Enforcement and Sanctions</h2>

<h3>Administrative Sanctions</h3>
<p>The ANPDP may impose the following administrative sanctions:</p>
<ul>
<li>A warning;</li>
<li>A formal notice;</li>
<li>Provisional withdrawal (up to one year) or definitive withdrawal of the declaration receipt or authorisation;</li>
<li>A fine.</li>
</ul>
<p>The Authority may also impose fines on controllers that refuse data subject rights without legitimate reason, or that fail to make required notifications.</p>

<h3>Criminal Sanctions</h3>
<p>Various criminal offences are prescribed under Law 18-07 (Articles 47 to 74), including:</p>
<ul>
<li>Violation of the obligation to obtain explicit consent;</li>
<li>Failure to comply with the declaration regime;</li>
<li>Transfer of personal data without authorization;</li>
<li>Collection of data by fraudulent, unfair, or unlawful means;</li>
<li>Obstruction of the Authority's actions (opposing inspections, refusing to provide information, concealing or destroying documents, providing false information).</li>
</ul>
<p>Criminal sanctions range from <strong>two months to five years' imprisonment</strong> and fines ranging from <strong>20,000 DZD to 1,000,000 DZD</strong>. In the event of a repeat offence, sanctions are doubled. Additional penalties from the Criminal Code may apply.</p>

<h3>Other Enforcement Powers</h3>
<ul>
<li>To issue and publish information notices;</li>
<li>To confiscate the object of the offence for reassignment or destruction, with costs borne by the convicted party;</li>
<li>To order the erasure of all or part of the personal data involved in the processing;</li>
<li>To verify that erasure has been carried out.</li>
</ul>
<p>A data subject may also make a claim to the courts for compensation for material or non-material damage.</p>

<h2>Cybersecurity Framework</h2>
<p>Algeria does not have a single standalone cybersecurity law; instead, it relies on a combination of general provisions:</p>
<ul>
<li>The Criminal Code (Articles 394 bis and following) protects the integrity of automated data processing systems;</li>
<li>Law No. 09-04 of 5 August 2009 on the Prevention and Combating of Offences Related to Information and Communication Technologies;</li>
<li>Law No. 18-04 of 10 May 2018 on general rules relating to post and electronic communications;</li>
<li>Presidential Decree No. 20-05 of 20 January 2020 establishing the national information systems security framework, amended by Presidential Decree No. 25-298 of 10 November 2025, creating the National Council for the Security of Information Systems (CNSSI) and the National Agency for the Security of Information Systems (ANSSI);</li>
<li>Presidential Decree No. 25-320 of 30 December 2025 establishing a national data governance framework;</li>
<li>Presidential Decree No. 25-321 of 30 December 2025 approving the national information systems security strategy for 2025–2029;</li>
<li>Presidential Decree No. 26-07 of 7 January 2026 establishing dedicated cybersecurity units within public institutions.</li>
</ul>
<p>The national cybersecurity governance involves CNSSI (strategic coordination) and ANSSI (technical and operational execution), alongside the <strong>DZ-CERT</strong> (Algerian Computer Emergency Response Team) hosted by CERIST, which serves as the national operational center for cybersecurity incident response.</p>

<h2>Quick Summary</h2>
<table>
<tbody>
<tr><td><strong>Full Name</strong></td><td>Law No. 18-07 on the Protection of Natural Persons in Personal Data Processing</td></tr>
<tr><td><strong>Enacted</strong></td><td>10 June 2018</td></tr>
<tr><td><strong>Major Amendment</strong></td><td>Law No. 25-11 of 24 July 2025</td></tr>
<tr><td><strong>Fully Applicable Since</strong></td><td>August 2023</td></tr>
<tr><td><strong>Regulator</strong></td><td>National Authority for the Protection of Personal Data (ANPDP)</td></tr>
<tr><td><strong>Registration</strong></td><td>Mandatory (prior declaration; authorisation for high-risk processing)</td></tr>
<tr><td><strong>DPO</strong></td><td>Mandatory (controllers and public authorities)</td></tr>
<tr><td><strong>Breach Notification</strong></td><td>Within 5 days to the Authority; data subjects if high risk</td></tr>
<tr><td><strong>Cross-Border Transfer</strong></td><td>Prior authorisation required; adequacy assessment</td></tr>
<tr><td><strong>Children's Consent Age</strong></td><td>No specific age; legal representative consent required</td></tr>
<tr><td><strong>Max Administrative Fine</strong></td><td>Up to 1,000,000 DZD (criminal fines); administrative fines also apply</td></tr>
<tr><td><strong>Max Imprisonment</strong></td><td>Up to 5 years (doubled for repeat offences)</td></tr>
<tr><td><strong>Cookie/Adtech Regime</strong></td><td>No specific provision</td></tr>
<tr><td><strong>Risk Scale</strong></td><td>Moderate</td></tr>
</tbody>
</table>
`,
    coordinates: { lat: 28.0, lng: 1.7 },
    color: '#22C55E',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Addressed', icon: 'Shield' },
      { title: "Children's Data", status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'None', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'Partial', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'None', icon: 'Shield' },
      { title: 'Government Data', status: 'Partial', icon: 'Building' },
    ],
  },
  {
    id: 'ethiopia',
    name: 'Ethiopia',
    flag: '🇪🇹',
    lawName: 'Personal Data Protection Proclamation No. 1321/2024',
    authority: 'Ethiopian Communications Authority (ECA)',
    region: 'Africa',
    level: 'Substantial',
    overview: "Ethiopia's Personal Data Protection Proclamation No. 1321/2024 establishes a dedicated framework for personal-data processing. Implementation, supervisory powers, and commencement details should be verified against current official instruments.",
    coordinates: { lat: 9.1, lng: 40.5 },
    color: '#F59E0B',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Partial', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Partial', icon: 'Shield' },
      { title: 'Children\'s Data', status: 'Partial', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Partial', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'None', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'None', icon: 'Shield' },
      { title: 'Government Data', status: 'Partial', icon: 'Building' },
    ],
  },
  {
    id: 'angola',
    name: 'Angola',
    flag: '🇦🇴',
    lawName: 'Law No. 22/11 on Personal Data Protection',
    authority: 'Data Protection Agency (Agência de Protecção de Dados, APD)',
    region: 'Africa',
    level: 'Substantial',
    overview: "Angola's Law No. 22/11 regulates personal-data processing and provides for a dedicated Data Protection Agency. Operational requirements should be confirmed against current regulations and APD guidance.",
    coordinates: { lat: -12.5, lng: 18.5 },
    color: '#8B5CF6',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Partial', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Partial', icon: 'Shield' },
      { title: 'Children\'s Data', status: 'Partial', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Partial', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'None', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'None', icon: 'Shield' },
      { title: 'Government Data', status: 'Partial', icon: 'Building' },
    ],
  },
  {
    id: 'benin',
    name: 'Benin',
    flag: '🇧🇯',
    lawName: 'Digital Code (Code du numérique), Law No. 2017-20 (as amended)',
    authority: 'Personal Data Protection Authority (APDP)',
    region: 'Africa',
    level: 'Substantial',
    overview: "Benin's Digital Code contains personal-data protection provisions and establishes supervisory functions for the APDP. Consult current amendments and authority guidance for registration, transfer, and notification requirements.",
    coordinates: { lat: 9.5, lng: 2.3 },
    color: '#22C55E',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Partial', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Partial', icon: 'Shield' },
      { title: 'Children\'s Data', status: 'Partial', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Partial', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'None', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'None', icon: 'Shield' },
      { title: 'Government Data', status: 'Partial', icon: 'Building' },
    ],
  },
  {
    id: 'burkina-faso',
    name: 'Burkina Faso',
    flag: '🇧🇫',
    lawName: 'Law No. 001-2021/AN on the Protection of Persons with Regard to Personal Data Processing',
    authority: 'Commission on Information Technology and Civil Liberties (CIL)',
    region: 'Africa',
    level: 'Substantial',
    overview: "Burkina Faso's 2021 personal-data law sets rules for processing and provides for oversight by the CIL. Detailed obligations should be checked against official implementing texts and regulator guidance.",
    coordinates: { lat: 12.3, lng: -1.5 },
    color: '#EF4444',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Partial', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Partial', icon: 'Shield' },
      { title: 'Children\'s Data', status: 'Partial', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Partial', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'None', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'None', icon: 'Shield' },
      { title: 'Government Data', status: 'Partial', icon: 'Building' },
    ],
  },
  {
    id: 'cameroon',
    name: 'Cameroon',
    flag: '🇨🇲',
    lawName: 'Law No. 2024/017 on Personal Data Protection',
    authority: 'Personal Data Protection Authority under the 2024 framework (verify operational status)',
    region: 'Africa',
    level: 'Moderate',
    overview: "Cameroon adopted a personal-data protection law in 2024. Because commencement, implementing instruments, and institutional arrangements may still be developing, verify the latest official status before treating the framework as fully operational.",
    coordinates: { lat: 5.7, lng: 12.7 },
    color: '#F59E0B',
    topics: [
      { title: 'Data Protection Authority', status: 'Partial', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Partial', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Partial', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Partial', icon: 'Shield' },
      { title: 'Children\'s Data', status: 'Partial', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Partial', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'None', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'None', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'None', icon: 'Shield' },
      { title: 'Government Data', status: 'Partial', icon: 'Building' },
    ],
  },
    {
    id: 'madagascar',
    name: 'Madagascar',
    flag: '🇲🇬',
    lawName: 'Law No. 2014-038 on Personal Data Protection',
    authority: "Commission Malagasy de l'Informatique et des Libertés (CMIL)",
    region: 'Africa',
    level: 'Substantial',
    overview: "Madagascar's data protection regime rests on Law No. 2014-038 of January 9, 2015, a comprehensive statute that imposes prior declaration or authorization requirements on most personal data processing activities. Enforcement is entrusted to the Commission Malagasy de l'Informatique et des Libertés (CMIL), an independent administrative authority that only became fully operational in December 2023—nearly nine years after the law's enactment. Since then, the CMIL has begun exercising its supervisory powers, including warnings, compliance notices, authorization withdrawals, and financial sanctions of up to 5% of the previous financial year's pre-tax turnover. Criminal penalties for processing without prior declaration or authorization range from six months to two years' imprisonment. Organizations must also appoint a Data Protection Officer in certain cases and maintain detailed processing registers. Notably, the law does not establish a general obligation to notify the CMIL or affected individuals of data breaches—a gap that distinguishes Madagascar from GDPR-style frameworks. The 2024 ratification of the Malabo Convention signals Madagascar's intent to align further with continental data protection standards, though domestic implementing reforms remain pending.",
    detailedContent: `
<h2>What is Law No. 2014-038?</h2>
<p>Madagascar's data protection regime rests on <strong>Law No. 2014-038 relating to the protection of personal data</strong>, adopted by the National Assembly on 16 December 2014, promulgated by the President of the Republic on 9 January 2015, and published in the Official Gazette on 9 June 2015. The law is the main regulatory framework in Madagascar (the "Data Protection Law").</p>
<p>The Data Protection Law has been in force for nine years, but its application is not yet fully effective, as <strong>no implementing decree has been published</strong>. Generally, the provisions of the Data Protection Law are in line with the provisions of the Malabo Convention on Data Protection, and no amendments to the Data Protection Law are currently planned.</p>

<h2>Ratification of the Malabo Convention</h2>
<p>Law no. 2024-004 ratifying the <strong>African Union Convention on Cyber Security and Personal Data Protection</strong> (the "Malabo Convention") was adopted by the Senate and the National Assembly on 21 June 2024. The law was subject to a constitutionality review in accordance with High Constitutional Court Decision no. 01-HCC/D1 dated 10 July 2024, confirming the constitutionality of the ratification law and the Malabo Convention itself. Publication in the Official Gazette of the Republic of Madagascar is still pending.</p>
<p>The 2024 ratification of the Malabo Convention signals Madagascar's intent to align further with continental data protection standards, though domestic implementing reforms remain pending.</p>

<h2>Definition of Personal Data</h2>
<p>Personal data is any information relating to a natural person, whereby that person is or can be identified, directly or indirectly, by reference to a name, an identification number or to one or more elements specific to him/her relating to physical, physiological, psychical, economic, cultural or social.</p>

<h2>Definition of Sensitive Personal Data</h2>
<p>Sensitive personal data means data which includes information relating to:</p>
<ul>
<li>Racial origin;</li>
<li>Biometric and genetic information;</li>
<li>Political opinion;</li>
<li>Religious belief or other convictions;</li>
<li>Trade-union affiliation; and/or</li>
<li>Health or sexual life.</li>
</ul>

<h2>Data Protection Authority: CMIL</h2>
<p>The Data Protection Law provides for the creation of the <strong>Commission Malagasy sur l'Informatique et des Libertés ("CMIL")</strong>. The CMIL was established by the adoption of Decree no. 2023-1541 dated 06 December 2023 setting out CMIL's mission and organisation. A representative of the National Assembly was recently appointed to the CMIL towards the end of 2024. However, the CMIL will not be fully operational until all its members have been appointed, namely:</p>
<ul>
<li>A Member of the National Assembly elected at a plenary session;</li>
<li>A senator elected by the Permanent Bureau of the Senate;</li>
<li>A judge from the Court of Cassation elected by his peers;</li>
<li>One administrative judge from the Conseil d'Etat elected by his peers;</li>
<li>A financial judge from the Cour des Comptes elected by his peers;</li>
<li>A representative of the private sector, with experience in the field of information and communication technologies, appointed by the Fédération des Chambres du Commerce et de l'Industrie;</li>
<li>Two leading figures with expertise in information and communication technologies, appointed by the Fédération Nationale de l'ordre des ingénieurs;</li>
<li>One person with particular expertise in human rights, appointed by the Commission Nationale Indépendante des Droits de l'Homme.</li>
</ul>

<h2>Prior Declaration and Authorisation</h2>
<p>Except for certain data processing that is subject to exemption, authorisation, ministerial order or decree, the <strong>processing of personal data requires a prior declaration to the CMIL</strong>. The prior declaration to the CMIL shall specify, where relevant, inter alia:</p>
<ul>
<li>The identity and the address of the data controller (responsable du traitement);</li>
<li>The purpose(s) of the processing;</li>
<li>The interconnections between databases;</li>
<li>The types of personal data processed, their origins and the categories of persons affected by the processing;</li>
<li>The duration for which the data will be kept;</li>
<li>The department or persons in charge of implementing the data processing;</li>
<li>The existence of data transfer to other countries;</li>
<li>The measures taken in order to ensure the security of the processing;</li>
<li>The use of a data processor (sous-traitant).</li>
</ul>
<p>The CMIL has to issue its decision on any authorisation application <strong>2 months following receipt</strong> of the application. An additional time period of 2 months can be added to this period after decision of the President of the CMIL. The absence of decision of the CMIL during these periods is considered as a refusal of the application.</p>

<h2>Data Protection Officer (DPO)</h2>
<p>The Data Protection Law does require the appointment of a data protection officer (délégué à la protection des données à caractère personnel) in Madagascar provided that the CMIL is operational, because the appointed DPO should be notified to the CMIL. The appointment of a DPO <strong>exempts an entity from making prior declarations</strong> to the CMIL, but does not exempt an entity from requesting prior authorisation where necessary (for example, where there is a transfer of data to a country that does not provide an adequate level of protection). The DPO must be a resident of Madagascar.</p>

<h2>Data Protection Principles</h2>
<p>The following principles must be satisfied when personal data is collected and processed:</p>
<ul>
<li>All personal data must be processed fairly and lawfully for specific, explicit and legitimate purposes and subsequently processed in accordance with these purposes;</li>
<li>All personal data collected must be adequate, relevant and non-excessive in view of the purposes for which it is collected;</li>
<li>All personal data must be accurate and comprehensive and when necessary, kept up to date;</li>
<li>All personal data must be retained no longer than is necessary for the purposes for which it is processed.</li>
</ul>

<h2>Lawful Processing Conditions</h2>
<p>The processing of personal data must receive the data subject's prior consent or fulfill one of the following conditions:</p>
<ul>
<li>Compliance with a legal obligation of the data controller;</li>
<li>The purpose of the processing is to protect the individual's life;</li>
<li>The purpose of the processing is to carry out a public service;</li>
<li>The processing relates to the performance of a contract to which the concerned individual is a party, or pre-contractual measures requested by that individual;</li>
<li>Processing relates to the realisation of the legitimate interest of the data controller or the data recipient, subject to the interest and fundamental rights and liberties of the concerned individual.</li>
</ul>

<h2>Sensitive Personal Data</h2>
<p>The conditions for processing of sensitive personal data include most of the above conditions, but contain an additional list of more restrictive conditions that must also be satisfied, such as the requirement to obtain prior consent of the data subject, or in the absence of consent where the processing is undertaken to carry out a public service and is required by law or priorly authorised by the CMIL.</p>

<h2>Cross-Border Data Transfer</h2>
<p>The transfer of a data subject's personal data to a third party country is allowed only if the country <strong>guarantees to individuals a sufficient level of protection</strong> in terms of privacy and fundamental rights and liberties. The sufficiency of protection is assessed by considering all the circumstances surrounding the transfer, in particular the nature of the data, the purpose and duration of the proposed processing, country of origin and country of final destination, rules of law (both general and sectorial) in force in the country in question, and any relevant codes of conduct or other rules and security measures complied with in that country.</p>
<p>Data controllers may transfer personal data to a third country that is not deemed to offer adequate protection only if:</p>
<ul>
<li>The data subject consents and is duly informed of the absence of adequate protection;</li>
<li>The transfer is necessary for the performance of a contract between the data controller and the individual, or pre-contractual measures undertaken at the individual's request;</li>
<li>The transfer is necessary for the conclusion or performance of a contract in the interest of the individual, between the data controller and a third party;</li>
<li>The transfer is necessary for the protection of the public interest;</li>
<li>The transfer is necessary for consultation of a public register intended for the public's information;</li>
<li>The transfer is necessary to comply with obligations allowing the acknowledgment, exercise or defense of a legal right.</li>
</ul>
<p>In all cases, the data recipient in the third party country cannot transfer personal data to another country, except with the authorisation of the first data controller and the CMIL.</p>

<h2>Security Safeguards</h2>
<p>The data controller must take all useful precautions, with respect to the nature of the data and the risk presented by the processing, to preserve the security of the data and, amongst other things, prevent alteration, corruption or access by unauthorised third parties.</p>

<h2>Data Breach Notification</h2>
<p>The Data Protection Law <strong>does not set out any general or specific obligation to notify the CMIL or the data subject</strong> in the event of a data security breach. This gap distinguishes Madagascar from GDPR-style frameworks.</p>

<h2>Enforcement Powers of the CMIL</h2>
<p>The CMIL has the power to proceed with verifications of any data processing and, as the case may be, to request a copy of every document that it considers useful in respect of verifications. The CMIL agents are authorised to carry out online inspections and on-site verifications of a data controller or a data processor.</p>
<p>In cases where the CMIL is of the opinion that a data controller or a data processor has contravened the provisions of the Data Protection Law, it may serve, in accordance with the severity of the violation committed:</p>
<ul>
<li>Warnings and notices to comply with the obligations defined in the Data Protection Law;</li>
<li>Notice of withdrawal of the authorisation;</li>
<li>A financial sanction of up to <strong>5% of the last financial year pre-tax turnover</strong> (not deducted from tax turnover).</li>
</ul>

<h2>Criminal Penalties</h2>
<p>The Data Protection Law provides that any processing of personal data in contravention with its provisions is considered an offence. For example, processing of personal data without prior declaration to or authorisation of the CMIL can result in <strong>imprisonment of 6 months to 2 years</strong> (Article 62 of the Data Protection Law). In addition to any penalty, the Court may order the erasure of all or part of the personal data which was the object of the processing considered an offence.</p>

<h2>Electronic Marketing, Cookies & Location Data</h2>
<p>The Data Protection Law and the Malabo Convention do not provide specific restrictions on the use of electronic marketing. However, the data subject has a <strong>right to opt out</strong> of allowing their personal data to be used for marketing purposes without providing any reason.</p>
<p>The Data Protection Law does not yet address location data, cookies, local storage objects or other similar data-gathering tools.</p>
`,
    coordinates: { lat: -19.0, lng: 46.7 },
    color: '#3B82F6',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'None', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Addressed', icon: 'Shield' },
      { title: "Children's Data", status: 'Partial', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'None', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'None', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'None', icon: 'Scale' },
      { title: 'Data Localisation', status: 'None', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'None', icon: 'Shield' },
      { title: 'Government Data', status: 'Partial', icon: 'Building' },
    ],
  },
  {
    id: 'seychelles',
    name: 'Seychelles',
    flag: '🇸🇨',
    lawName: 'Data Protection Act 2023',
    authority: 'Designated data-protection supervisory authority (verify current appointment)',
    region: 'Africa',
    level: 'Substantial',
    overview: "Seychelles adopted a Data Protection Act in 2023. Check commencement notices, regulations, and the current designation of the supervisory authority before relying on specific compliance requirements.",
    coordinates: { lat: -4.7, lng: 55.5 },
    color: '#22C55E',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Partial', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Partial', icon: 'Shield' },
      { title: 'Children\'s Data', status: 'Partial', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Partial', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'None', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'None', icon: 'Shield' },
      { title: 'Government Data', status: 'Partial', icon: 'Building' },
    ],
  },
    {
    id: 'costa-rica',
    name: 'Costa Rica',
    flag: '🇨🇷',
    lawName: 'Law No. 8968 on the Protection of the Person Against the Processing of their Personal Data',
    authority: 'Agency for the Protection of the Personal Data of the Inhabitants (PRODHAB)',
    region: 'Americas',
    level: 'Substantial',
    overview: "Costa Rica's data protection framework is currently governed by Law No. 8968 of 2011 (Ley de Protección de la Persona Frente al Tratamiento de sus Datos Personales). The law is enforced by PRODHAB (Agencia de Protección de los Datos de los Habitantes), which is attached to the Ministry of Justice. While the law established early rights to access, rectification, and deletion, it is now considered outdated for the digital age. Consequently, Costa Rica is in the process of modernizing its framework. Two GDPR-inspired bills are currently in the legislative pipeline: Bill No. 22.388 (reforming Law 8968) and Bill No. 23.097 (a completely new Personal Data Protection Law). The new draft introduces modern concepts such as privacy by design, data portability, profiling rules, and a new, independent Data Protection Agency.",
    detailedContent: `
<h2>What is Costa Rica's Data Protection Law?</h2>
<p>Costa Rica's data protection regime is primarily governed by <strong>Law No. 8968 of 2011</strong> on the Protection of the Person Against the Processing of their Personal Data. The law has been enforceable since 7 July 2012 and applies to personal data contained in both automated and manual databases.</p>
<p>The law implements the constitutional right to privacy (Article 24 of the Political Constitution) and informational self-determination. It is supplemented by <strong>Executive Decree No. 37554-JP of 30 October 2012</strong>, which provides implementing regulations.</p>
<p>However, the current legal framework has not undergone substantive reforms to address the challenges of the modern digital economy. The OECD has recommended that Costa Rica modernize its data protection laws, leading to two draft bills currently in the legislative pipeline.</p>

<h2>Supervisory Authority: PRODHAB</h2>
<p>The supervisory authority is the <strong>Agency for the Protection of the Personal Data of the Inhabitants (PRODHAB)</strong>, which operates under the Ministry of Justice and Peace.</p>
<p>PRODHAB is responsible for:</p>
<ul>
<li>Maintaining the National Data Protection Registry (Registro Nacional de Datos Personales);</li>
<li>Enforcing compliance with Law No. 8968;</li>
<li>Investigating complaints and imposing sanctions;</li>
<li>Advising the government and the public on data protection matters.</li>
</ul>
<p>To date, PRODHAB has faced structural challenges, including chronic underfunding and staffing shortages, which have limited its practical enforcement capacity.</p>

<h2>Key Principles under Law 8968</h2>
<p>The law establishes several foundational principles for data processing:</p>
<ul>
<li><strong>Consent:</strong> Individuals must provide informed and voluntary consent for the collection and processing of their personal data.</li>
<li><strong>Purpose Limitation:</strong> Personal data must be collected and processed only for specific, legitimate, and clearly stated purposes.</li>
<li><strong>Data Quality:</strong> Personal data must be accurate, complete, and up-to-date.</li>
<li><strong>Security:</strong> Entities must implement appropriate technical and organizational measures to protect personal data from unauthorized access, alteration, loss, or destruction.</li>
<li><strong>Confidentiality:</strong> Entities must maintain the confidentiality of personal data and ensure that only authorized personnel have access to it.</li>
</ul>

<h2>Registration and Obligations</h2>
<p>Entities that process personal data must register their databases with the National Data Protection Registry, which is managed by PRODHAB.</p>
<p>Under Law 8968, controllers are also required to appoint a <strong>Data Protection Officer (DPO)</strong> responsible for overseeing compliance with the law and handling data subject requests.</p>

<h2>Data Subject Rights</h2>
<p>Under the current law, data subjects have the right to:</p>
<ul>
<li><strong>Access:</strong> To know what personal data is held and how it is being processed;</li>
<li><strong>Rectification:</strong> To correct inaccurate or incomplete data;</li>
<li><strong>Cancellation/Deletion:</strong> To request the deletion of data when it is no longer necessary for the purpose it was collected, or when processing is unlawful;</li>
<li><strong>Opposition:</strong> To object to the processing of their data for legitimate reasons.</li>
</ul>

<h2>Cross-Border Data Transfer</h2>
<p>Under Law 8968, international transfers of personal data are subject to a <strong>consent-centric rule</strong>. Transferring personal data of Costa Rican citizens or foreign residents to third-country databases without the data subject's consent constitutes a "most serious offense."</p>
<p>The 2013 implementing regulation further requires unequivocal consent for any transfer, with narrow exceptions. Transfers are permitted only if:</p>
<ul>
<li>The data subject has provided explicit consent for the transfer;</li>
<li>The recipient country provides an adequate level of protection; or</li>
<li>The transfer is necessary for public interest, legal claims, or the performance of a contract.</li>
</ul>

<h2>Breach Notification</h2>
<p>Under the current Law 8968, there is no explicit, general obligation to notify PRODHAB or affected data subjects of a data breach within a specific statutory timeframe. However, the general security and confidentiality obligations apply, and severe breaches may trigger sanctions under the Code of Administrative Offences.</p>

<h2>Enforcement and Sanctions</h2>
<p>The law establishes several sanctions for non-compliance:</p>
<ul>
<li><strong>Administrative fines:</strong> Ranging from 15 to 30 base judicial salaries (approximately USD 7,000 to USD 14,000) depending on the severity of the violation.</li>
<li><strong>Temporary or permanent suspension of the database:</strong> For one to six months for serious violations, with permanent closure possible for repeat offenses.</li>
<li><strong>Criminal penalties:</strong> In extreme cases, imprisonment may apply for specific violations of confidentiality.</li>
</ul>
<p>Data subjects may also file civil claims for compensation.</p>

<h2>The Future: New Data Protection Bills (2024)</h2>
<p>To address the shortcomings of Law 8968 in the digital age, Costa Rica's Legislative Assembly is considering two GDPR-inspired bills:</p>

<h3>Bill No. 22.388 (Comprehensive Reform)</h3>
<p>This bill aims to reform the existing Law 8968, providing an intermediate modernization. It seeks to update the regulatory framework while maintaining the existing institutional structure.</p>

<h3>Bill No. 23.097 (New Personal Data Protection Law)</h3>
<p>This bill proposes a completely new regulatory framework, heavily inspired by the EU GDPR. The latest draft (updated as of 27 February 2024) introduces significant modern provisions:</p>
<ul>
<li><strong>New Independent Authority:</strong> Replaces PRODHAB with a new, fully independent <strong>Data Protection Agency</strong> with expanded investigative and sanctioning powers;</li>
<li><strong>Privacy by Design and by Default:</strong> Controllers must implement preventive measures from the design stage of processing;</li>
<li><strong>Data Protection Impact Assessments (DPIAs):</strong> Mandatory for high-risk processing, such as large-scale sensitive data processing or systematic monitoring;</li>
<li><strong>Data Portability:</strong> Data subjects can request their data in a structured, machine-readable format and transfer it to another controller;</li>
<li><strong>Profiling and Automated Decisions:</strong> Stricter rules on automated decision-making, including the right not to be subject to a decision based solely on automated processing;</li>
<li><strong>Breach Notification (72 hours):</strong> Controllers must notify the Data Protection Agency and affected data subjects within 72 hours of becoming aware of a breach;</li>
<li><strong>Extraterritorial Scope:</strong> The law applies to organizations outside Costa Rica that offer goods/services to Costa Ricans or monitor their behavior;</li>
<li><strong>Binding Corporate Rules (BCRs):</strong> Explicitly recognized as a valid safeguard for international transfers within multinational groups;</li>
<li><strong>Video Surveillance & Workplace Monitoring:</strong> Specific rules for CCTV, geolocation, and employee monitoring.</li>
</ul>

<h2>Current Challenges and Enforcement Reality</h2>
<p>While the current law (Law 8968) provides a solid foundational framework, its practical enforcement has been limited. PRODHAB's capacity to investigate and sanction violations has been constrained by insufficient resources. As a result, organizations operating in Costa Rica should recognize that while the legal requirements are clear, the regulatory oversight may lag behind the statute's formal demands.</p>
<p>The upcoming bills (22.388 and 23.097) signal a clear legislative intent to align Costa Rica's data protection regime with international best practices, particularly the GDPR. Once enacted, these reforms will impose significantly stricter obligations and grant the new Data Protection Agency robust enforcement powers.</p>

<h2>Practical Advice for Organizations</h2>
<p>Organizations processing personal data in Costa Rica should:</p>
<ul>
<li>Ensure their databases are registered with PRODHAB;</li>
<li>Appoint a Data Protection Officer (DPO);</li>
<li>Maintain a clear, unambiguous consent mechanism for data processing and international transfers;</li>
<li>Implement strong security and confidentiality safeguards;</li>
<li>Monitor the progress of Bill 23.097, as it will introduce new obligations (e.g., 72-hour breach notification, DPIAs, privacy by design) that will require prompt compliance upon enactment.</li>
</ul>

<h2>Quick Summary</h2>
<table>
<tbody>
<tr><td><strong>Current Full Name</strong></td><td>Law No. 8968 on the Protection of the Person Against the Processing of their Personal Data</td></tr>
<tr><td><strong>Current Law Enacted</strong></td><td>2011 (effective July 7, 2012)</td></tr>
<tr><td><strong>Supervisory Authority</strong></td><td>Agency for the Protection of the Personal Data of the Inhabitants (PRODHAB)</td></tr>
<tr><td><strong>Registration</strong></td><td>Mandatory (National Data Protection Registry)</td></tr>
<tr><td><strong>DPO</strong></td><td>Required</td></tr>
<tr><td><strong>Breach Notification</strong></td><td>No explicit statutory deadline under current law</td></tr>
<tr><td><strong>Cross-Border Transfer</strong></td><td>Consent-centric; strict rule with narrow exceptions</td></tr>
<tr><td><strong>Upcoming Reform</strong></td><td>Bill No. 23,097 (GDPR-inspired, introduces 72-hour breach notification, DPIAs, and a new independent Data Protection Agency)</td></tr>
<tr><td><strong>Risk Scale</strong></td><td>Moderate (Current) / High (Upon enactment of Bill 23,097)</td></tr>
</tbody>
</table>
`,
    coordinates: { lat: 9.9, lng: -84.0 },
    color: '#EF4444',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Partial', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Addressed', icon: 'Shield' },
      { title: "Children's Data", status: 'Partial', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Partial', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'Partial', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'None', icon: 'Shield' },
      { title: 'Government Data', status: 'Partial', icon: 'Building' },
    ],
  },
  {
    id: 'panama',
    name: 'Panama',
    flag: '🇵🇦',
    lawName: 'Law 81 of 2019 on Personal Data Protection',
    authority: 'National Authority for Transparency and Access to Information (ANTAI)',
    region: 'Americas',
    level: 'Comprehensive',
    overview: "Panama's Law 81 of 2019 and its implementing regulation establish obligations for personal-data processing and rights for individuals. ANTAI supervises the framework; consult current regulatory guidance for sectoral and transfer requirements.",
    coordinates: { lat: 8.5, lng: -80.8 },
    color: '#3B82F6',
    topics: [
      { title: 'Data Protection Authority', status: 'Addressed', icon: 'Building' },
      { title: 'Consent Requirements', status: 'Addressed', icon: 'CheckCircle' },
      { title: 'Data Subject Rights', status: 'Addressed', icon: 'Users' },
      { title: 'Cross-Border Transfer', status: 'Addressed', icon: 'Globe' },
      { title: 'Breach Notification', status: 'Addressed', icon: 'AlertCircle' },
      { title: 'DPO Requirements', status: 'Partial', icon: 'Shield' },
      { title: 'Children\'s Data', status: 'Addressed', icon: 'Users' },
      { title: 'Penalties & Enforcement', status: 'Addressed', icon: 'AlertTriangle' },
      { title: 'Sector-Specific Rules', status: 'Partial', icon: 'Database' },
      { title: 'Cookie/Tracking', status: 'Partial', icon: 'FileText' },
      { title: 'AI & Automated Decisions', status: 'Partial', icon: 'Scale' },
      { title: 'Data Localisation', status: 'Partial', icon: 'Database' },
      { title: 'Significant Data Fiduciary', status: 'None', icon: 'Shield' },
      { title: 'Government Data', status: 'Partial', icon: 'Building' },
    ],
  },

];

// ===== HELPER FUNCTIONS =====
export const getRegions = () => {
  return [...new Set(countries.map(c => c.region))];
};

export const getLevels = () => {
  return [...new Set(countries.map(c => c.level))];
};

export const getCountryById = (id: string) => {
  return countries.find(c => c.id === id);
};

export const getCountriesByRegion = (region: string) => {
  return countries.filter(c => c.region === region);
};

export const getCountriesByLevel = (level: string) => {
  return countries.filter(c => c.level === level);
};
