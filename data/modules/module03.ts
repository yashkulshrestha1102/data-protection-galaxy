// data/modules/module03.ts

import { Module } from '@/app/types/course';

export const module03: Module = {
  id: 3,
  title: 'Constitution & Legal Background',
  description:
    'Understand the constitutional and legal foundations of data protection in India. This module covers fundamental rights, the evolution of privacy jurisprudence, and landmark judgments like Puttaswamy and Aadhaar.',
  duration: '6 Hours',
  icon: 'Building',
  learningObjectives: [
    'Analyze the constitutional provisions that protect privacy in India',
    'Understand the relationship between fundamental rights and data protection',
    'Study the landmark Puttaswamy judgment and its three-pronged test',
    'Analyze the Aadhaar judgment and its implications for privacy',
    'Understand how Indian courts have interpreted the right to privacy over time',
  ],
  chapters: [
    // ============================================================
    // CHAPTER 1: CONSTITUTIONAL PROVISIONS
    // ============================================================
    {
      id: 1,
      title: 'Constitutional Provisions',
      lessons: [
        {
          id: 1,
          title: 'Article 14 - Right to Equality',
          duration: '15 min',
          type: 'video',
          description: 'How the right to equality protects against discriminatory data processing.',
          content:
            'Article 14 guarantees equality before the law. In the context of data protection, this article is crucial because algorithmic profiling and automated decision-making can lead to discrimination based on data.',
          learningObjectives: [
            'Understand the scope of Article 14',
            'Analyze how data processing can violate equality',
            'Understand "reasonable classification" in data contexts',
          ],
          keyTakeaways: [
            'Article 14 prohibits arbitrary state action.',
            'Data-driven decisions (like credit scoring) must not discriminate.',
            'Algorithmic bias is a violation of the right to equality.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Text and Meaning',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Article 14 states: "The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India."',
                },
                {
                  type: 'paragraph',
                  content:
                    'This means that the law must treat equals equally and unequals unequally. In the context of data, if an AI system uses personal data to offer different prices or services to individuals based on their caste, religion, or gender, it violates Article 14.',
                },
                {
                  type: 'callout',
                  content:
                    'Data protection is not just about secrecy; it is also about fairness. If your data is used to discriminate against you, it is a violation of your fundamental right to equality.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Algorithmic Discrimination',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Modern companies use algorithms to make decisions—who gets a loan, who gets a job, who gets insurance. These algorithms are trained on historical data, which often contains human biases.',
                },
                {
                  type: 'example',
                  content:
                    'If a bank\'s loan algorithm is trained on data where women were historically denied loans, the AI will learn to deny loans to women. This is a direct violation of Article 14.',
                },
                {
                  type: 'paragraph',
                  content:
                    'Therefore, the DPDPA requires Data Fiduciaries to ensure data accuracy and fairness, and the Constitution provides the ultimate backstop against discriminatory data use.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Algorithmic Bias', definition: 'Systematic and repeatable errors in a computer system that create unfair outcomes, such as privileging one arbitrary group of users over others.' },
            { term: 'Reasonable Classification', definition: 'The legal principle that allows the state to treat different groups differently, provided there is a rational nexus to the objective.' },
          ],
          references: [
            { title: 'Constitution of India, Article 14', source: 'Government of India', year: '1950' },
          ],
        },
        {
          id: 2,
          title: 'Article 19 - Freedom of Speech',
          duration: '20 min',
          type: 'reading',
          description: 'The connection between privacy and the freedom of expression.',
          content:
            'Article 19(1)(a) guarantees freedom of speech and expression. But how does privacy relate to free speech? It is simple: without privacy, there is no free speech.',
          learningObjectives: [
            'Understand the "chilling effect" of surveillance',
            'Analyze how privacy enables free expression',
            'Study the limits of free speech regarding privacy',
          ],
          keyTakeaways: [
            'Surveillance chills free speech.',
            'Privacy protects the anonymity required for political dissent.',
            'Article 19 protects the right to receive and impart information.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Chilling Effect',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'When people know they are being watched, they change their behaviour. They stop searching for certain things, they stop criticizing the government, and they stop associating with certain groups. This is called the "chilling effect."',
                },
                {
                  type: 'paragraph',
                  content:
                    'The Supreme Court has repeatedly held that surveillance violates Article 19 because it prevents citizens from freely expressing themselves. In PUCL v. Union of India (1997), the Court held that telephone tapping is a serious invasion of privacy and violates free speech.',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Anonymity and Dissent',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Political dissent often requires anonymity. Whistleblowers, activists, and journalists rely on privacy to expose wrongdoing. If the state or corporations can track everyone, dissent becomes impossible.',
                },
                {
                  type: 'callout',
                  content:
                    'Privacy and free speech are two sides of the same coin. You cannot have a democratic society without both.',
                  calloutType: 'important',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Chilling Effect', definition: 'The suppression of speech or behaviour due to fear of legal or social consequences.' },
            { term: 'Whistleblower', definition: 'A person who exposes secretive information or activity within an organization that is deemed illegal or unethical.' },
          ],
          references: [
            { title: 'PUCL v. Union of India', source: 'Supreme Court of India', year: '1997' },
          ],
        },
        {
          id: 3,
          title: 'Article 21 - Right to Life',
          duration: '25 min',
          type: 'video',
          description: 'The most important constitutional provision for privacy in India.',
          content:
            'Article 21 guarantees the right to life and personal liberty. Over the decades, the Supreme Court has interpreted this article to include the right to privacy, dignity, and a clean environment.',
          learningObjectives: [
            'Understand the expansive interpretation of Article 21',
            'Analyze the Maneka Gandhi revolution',
            'Understand how Article 21 became the home for privacy rights',
          ],
          keyTakeaways: [
            'Article 21 is the "heart" of the Constitution.',
            'It protects the right to live with dignity.',
            'The right to privacy is an integral part of Article 21.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Text',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Article 21 states: "No person shall be deprived of his life or personal liberty except according to procedure established by law."',
                },
                {
                  type: 'paragraph',
                  content:
                    'On the surface, this seems like a simple procedural guarantee. But in 1978, in the Maneka Gandhi case, the Supreme Court held that the "procedure" must be fair, just, and reasonable. This opened the floodgates for the expansion of Article 21.',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'The Expansion',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Today, Article 21 includes a vast array of rights that are essential for a dignified life:',
                },
                {
                  type: 'list',
                  content: 'Rights under Article 21',
                  items: [
                    'Right to privacy',
                    'Right to shelter',
                    'Right to health',
                    'Right to a clean environment',
                    'Right to sleep',
                    'Right to food',
                    'Right to education (later moved to Article 21A)',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'When we talk about data protection, we are fundamentally talking about the right to life with dignity under Article 21. The DPDPA is just a statutory extension of this constitutional right.',
                  calloutType: 'important',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Maneka Gandhi v. Union of India', definition: 'A 1978 Supreme Court case that revolutionized fundamental rights by introducing substantive due process into Indian law.' },
          ],
          references: [
            { title: 'Constitution of India, Article 21', source: 'Government of India', year: '1950' },
          ],
        },
        {
          id: 4,
          title: 'Natural Justice',
          duration: '15 min',
          type: 'reading',
          description: 'The principles of fairness that apply to data processing.',
          content:
            'The principles of natural justice—notice, hearing, and impartiality—are essential when an organization takes decisions based on personal data.',
          learningObjectives: [
            'Understand the three principles of natural justice',
            'Apply natural justice to automated decision-making',
            'Understand why DPDPA requires notice and grievance redressal',
          ],
          keyTakeaways: [
            'Natural justice means fairness in decision-making.',
            'Notice and hearing are fundamental to data processing.',
            'You cannot penalize someone based on data they haven\'t seen.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Principles',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The principles of natural justice are common-law rules designed to ensure fairness. They apply to courts, tribunals, and increasingly, to algorithmic decision-making.',
                },
                {
                  type: 'list',
                  content: 'The Three Principles',
                  items: [
                    'Nemo Judex in Causa Sua (No one should be a judge in their own cause): Decision-makers must be impartial.',
                    'Audi Alteram Partem (Hear the other side): Everyone has the right to be heard.',
                    'Reasoned Decision: Decisions must be based on logic and evidence, not arbitrary whims.',
                  ],
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Application in Data Protection',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'When a company uses personal data to deny you a loan or a job, they are making a decision that affects your life. The principles of natural justice require that you be told why, and that you have a chance to correct any wrong data.',
                },
                {
                  type: 'paragraph',
                  content:
                    'This is why the DPDPA mandates a "Notice" (Section 5) and "Right to Grievance Redressal" (Section 13). These are statutory applications of natural justice.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Natural Justice', definition: 'Fundamental principles of fairness and due process in legal and administrative decision-making.' },
          ],
          references: [
            { title: 'Administrative Law', source: 'I.P. Massey', year: '2020' },
          ],
        },
        {
          id: 5,
          title: 'Reasonable Restriction',
          duration: '20 min',
          type: 'video',
          description: 'Privacy is not absolute. How the state can restrict it.',
          content:
            'Like all fundamental rights, the right to privacy is subject to reasonable restrictions. Understanding these restrictions is crucial for understanding the limits of data protection.',
          learningObjectives: [
            'Understand what constitutes a "reasonable restriction"',
            'Analyze the tests for restricting fundamental rights',
            'Understand how the state can access data under the DPDPA',
          ],
          keyTakeaways: [
            'Rights are not absolute; they are subject to reasonable restrictions.',
            'Restrictions must be backed by law, serve a legitimate aim, and be proportionate.',
            'The DPDPA has broad exemptions for the State (Section 17).',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Concept',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'You cannot shout "fire" in a crowded theatre. Similarly, you cannot claim privacy to hide a crime. The Constitution allows the state to impose reasonable restrictions on fundamental rights for specific purposes:',
                },
                {
                  type: 'list',
                  content: 'Grounds for Restriction',
                  items: [
                    'Sovereignty and integrity of India',
                    'Security of the State',
                    'Friendly relations with foreign States',
                    'Public order',
                    'Decency or morality',
                    'Contempt of court',
                    'Defamation',
                    'Incitement to an offence',
                  ],
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'The Proportionality Test',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The Puttaswamy judgment established that even if a restriction is for a legitimate aim, it must be "proportionate." This means the government cannot use a sledgehammer to crack a nut. If a less intrusive measure works, the government must use it.',
                },
                {
                  type: 'paragraph',
                  content:
                    'However, the DPDPA (Section 17) gives the State broad exemptions. The government can exempt its agencies from the Act for national security, investigation of crimes, etc. This is a controversial aspect of the law.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Proportionality', definition: 'A legal test that ensures the severity of a restriction is proportionate to the objective it seeks to achieve.' },
            { term: 'State Exemption', definition: 'Provisions in the DPDPA that allow government agencies to bypass certain data protection requirements.' },
          ],
          references: [
            { title: 'K.S. Puttaswamy v. Union of India', source: 'Supreme Court of India', year: '2017' },
          ],
        },
        {
          id: 6,
          title: 'Fundamental Rights',
          duration: '15 min',
          type: 'reading',
          description: 'An overview of the broader framework of fundamental rights.',
          content:
            'Privacy is just one of many fundamental rights. Understanding the overall structure of Part III of the Constitution helps you see how privacy interacts with other rights.',
          learningObjectives: [
            'Understand the structure of Part III',
            'See the relationship between privacy and other rights',
            'Understand the concept of "basic structure"',
          ],
          keyTakeaways: [
            'Part III contains the fundamental rights.',
            'Rights can be enforced directly in the Supreme Court (Article 32).',
            'Privacy intersects with equality, speech, religion, and life.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Framework',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The Indian Constitution guarantees six fundamental rights:',
                },
                {
                  type: 'list',
                  content: 'The Six Fundamental Rights',
                  items: [
                    'Right to Equality (Articles 14-18)',
                    'Right to Freedom (Articles 19-22)',
                    'Right against Exploitation (Articles 23-24)',
                    'Right to Freedom of Religion (Articles 25-28)',
                    'Cultural and Educational Rights (Articles 29-30)',
                    'Right to Constitutional Remedies (Article 32)',
                  ],
                },
                {
                  type: 'paragraph',
                  content:
                    'Privacy is not explicitly mentioned in any of these. It has been read into Article 21 (Right to Life) and Article 19 (Freedom of Speech) by the courts.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Article 32', definition: 'The "Right to Constitutional Remedies," often called the "heart and soul of the Constitution" by Dr. B.R. Ambedkar.' },
          ],
          references: [
            { title: 'Constitution of India, Part III', source: 'Government of India', year: '1950' },
          ],
        },
        {
          id: 7,
          title: 'Constitutional Morality',
          duration: '20 min',
          type: 'video',
          description: 'The underlying values that guide constitutional interpretation.',
          content:
            'Constitutional morality is the idea that the Constitution is not just a rulebook but a set of values. When interpreting privacy, courts often rely on this concept.',
          learningObjectives: [
            'Understand the concept of constitutional morality',
            'See how it applies to privacy cases',
            'Differentiate between popular morality and constitutional morality',
          ],
          keyTakeaways: [
            'Constitutional morality is the set of values underlying the Constitution.',
            'It protects the rights of minorities against the tyranny of the majority.',
            'Privacy is a core component of constitutional morality.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Concept',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The term was popularized by Dr. B.R. Ambedkar. He argued that merely having a constitution is not enough; we must cultivate a "constitutional morality"—a commitment to the principles of liberty, equality, and fraternity.',
                },
                {
                  type: 'paragraph',
                  content:
                    'In privacy terms, this means that even if a majority of people don\'t care about privacy, the state must still protect it. Privacy is a fundamental value that transcends popular opinion.',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Application',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'In the Navtej Singh Johar case (which decriminalized homosexuality), the Supreme Court used constitutional morality to strike down Section 377. Similarly, in the Puttaswamy case, the Court used it to recognize privacy as a fundamental right.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Constitutional Morality', definition: 'The principles and values enshrined in the Constitution, which guide judicial interpretation and protect against majoritarian tyranny.' },
          ],
          references: [
            { title: 'The Constitution of India', source: 'Government of India', year: '1950' },
          ],
        },
      ],
    },

    // ============================================================
    // CHAPTER 2: LANDMARK CASE LAWS
    // ============================================================
    {
      id: 2,
      title: 'Landmark Case Laws',
      lessons: [
        {
          id: 8,
          title: 'Puttaswamy Case',
          duration: '25 min',
          type: 'video',
          description: 'The landmark judgment that recognized privacy as a fundamental right.',
          content:
            'K.S. Puttaswamy v. Union of India (2017) is the most important privacy case in Indian history. A nine-judge bench of the Supreme Court unanimously held that privacy is a fundamental right.',
          learningObjectives: [
            'Understand the background of the Puttaswamy case',
            'Analyze the three-pronged test for restricting privacy',
            'Understand the impact of the judgment on the DPDPA',
          ],
          keyTakeaways: [
            'Privacy is protected under Article 21.',
            'Restrictions on privacy must be legal, necessary, and proportionate.',
            'Privacy is not just an individual right but a prerequisite for democracy.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Background',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The case was originally filed to challenge the Aadhaar scheme. However, the Supreme Court decided to refer the broader question of whether privacy is a fundamental right to a nine-judge bench. This was the largest bench ever assembled for a privacy case.',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'The Three-Pronged Test',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The Court held that privacy can be restricted, but only if the restriction meets three conditions:',
                },
                {
                  type: 'list',
                  content: 'The Puttaswamy Test',
                  items: [
                    'Legality: The restriction must be backed by a law.',
                    'Necessity: The restriction must be necessary for a legitimate state aim (like national security or public order).',
                    'Proportionality: The restriction must be proportionate to the aim, and no less restrictive alternative should be available.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The Puttaswamy test is now the gold standard for evaluating any privacy-restricting measure, including the DPDPA itself.',
                  calloutType: 'important',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Nine-Judge Bench', definition: 'The largest possible bench of the Supreme Court, reserved for the most critical constitutional questions.' },
            { term: 'Proportionality', definition: 'A legal test ensuring that the impact of a law is proportionate to its objective.' },
          ],
          references: [
            { title: 'K.S. Puttaswamy v. Union of India', source: 'Supreme Court of India', year: '2017' },
          ],
        },
        {
          id: 9,
          title: 'Aadhaar Case',
          duration: '20 min',
          type: 'reading',
          description: 'The Supreme Court\'s decision on the world\'s largest biometric ID system.',
          content:
            'In 2018, the Supreme Court delivered its verdict on the constitutionality of the Aadhaar Act. While it upheld Aadhaar, it struck down several provisions that violated privacy.',
          learningObjectives: [
            'Understand the Aadhaar architecture',
            'Analyze the Court\'s reasoning in upholding Aadhaar',
            'Understand why Section 57 was struck down',
          ],
          keyTakeaways: [
            'Aadhaar was upheld as a reasonable restriction on privacy.',
            'Linking Aadhaar to bank accounts and mobile phones was upheld.',
            'Section 57 (allowing private companies to use Aadhaar) was struck down.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Balance',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The Court had to balance the privacy rights of citizens with the government\'s interest in providing subsidies and preventing fraud. The Court held that Aadhaar does not violate privacy because it collects minimal biometric data and the benefits outweigh the risks.',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Striking Down Section 57',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Section 57 of the Aadhaar Act allowed private companies to use Aadhaar for authentication. The Court struck this down, holding that it was unconstitutional because it could lead to mass surveillance by private entities.',
                },
                {
                  type: 'example',
                  content:
                    'Before the judgment, you had to link Aadhaar to get a SIM card. After the judgment, this requirement was struck down, restoring privacy for mobile users.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Aadhaar', definition: 'India\'s 12-digit unique identity number based on biometric and demographic data.' },
            { term: 'Authentication', definition: 'The process of verifying a person\'s identity using their Aadhaar number and biometrics.' },
          ],
          references: [
            { title: 'K.S. Puttaswamy v. Union of India (Aadhaar)', source: 'Supreme Court of India', year: '2018' },
          ],
        },
        {
          id: 10,
          title: 'PUCL Case',
          duration: '15 min',
          type: 'video',
          description: 'The case that first recognized telephone tapping as a privacy violation.',
          content:
            'People\'s Union for Civil Liberties v. Union of India (1997) was a groundbreaking case that recognized the right to privacy in communications.',
          learningObjectives: [
            'Understand the facts of the case',
            'Analyze the Court\'s reasoning on telephone tapping',
            'Understand the impact on communication privacy',
          ],
          keyTakeaways: [
            'Telephone tapping violates privacy.',
            'Tapping is only allowed under strict safeguards.',
            'This was the first major case to recognize privacy in communications.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Context',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'In the 1990s, the government was using broad telephone tapping powers without any safeguards. The PUCL challenged this, arguing that it violated the right to privacy.',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'The Judgment',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The Supreme Court held that telephone tapping is a serious invasion of privacy. The Court laid down strict guidelines: tapping can only be done under a specific law, with authorization from a high-ranking official, and with a record of reasons. Without these safeguards, tapping is unconstitutional.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Telephone Tapping', definition: 'The monitoring of telephone conversations by a third party, often by covert means.' },
          ],
          references: [
            { title: 'PUCL v. Union of India', source: 'Supreme Court of India', year: '1997' },
          ],
        },
        {
          id: 11,
          title: 'Shreya Singhal Case',
          duration: '20 min',
          type: 'reading',
          description: 'The case that struck down Section 66A of the IT Act and protected online speech.',
          content:
            'Shreya Singhal v. Union of India (2015) was a landmark case for online free speech. It struck down a vague and draconian section of the IT Act.',
          learningObjectives: [
            'Understand Section 66A of the IT Act',
            'Analyze why it was struck down',
            'Understand its connection to privacy and surveillance',
          ],
          keyTakeaways: [
            'Section 66A criminalized "offensive" online speech.',
            'It was struck down for being vague and chilling free speech.',
            'This case reinforced the importance of anonymity and privacy online.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Problem with Section 66A',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Section 66A of the IT Act made it a crime to send "offensive" or "annoying" messages. The police used it to arrest people for social media posts. It had a massive chilling effect on free speech.',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'The Decision',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The Supreme Court struck down the law, holding that it violated Article 19(1)(a). The Court emphasized that the internet is a powerful medium for free speech and must be protected.',
                },
                {
                  type: 'callout',
                  content:
                    'While this case is about speech, it is deeply connected to privacy. The police often rely on IP addresses and user data to track down people who post "offensive" content. By limiting the law, the Court also reduced the need for surveillance.',
                  calloutType: 'note',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Section 66A', definition: 'A controversial provision of the IT Act that criminalized sending offensive online messages, struck down in 2015.' },
          ],
          references: [
            { title: 'Shreya Singhal v. Union of India', source: 'Supreme Court of India', year: '2015' },
          ],
        },
        {
          id: 12,
          title: 'Anuradha Bhasin Case',
          duration: '15 min',
          type: 'video',
          description: 'The case on internet shutdowns and the limits of state power.',
          content:
            'Anuradha Bhasin v. Union of India (2020) dealt with the prolonged internet shutdown in Jammu and Kashmir. It laid down rules for when the internet can be suspended.',
          learningObjectives: [
            'Understand the background of the Kashmir internet shutdown',
            'Analyze the Court\'s ruling on internet suspension',
            'Understand the relationship between internet access and privacy',
          ],
          keyTakeaways: [
            'Internet access is protected under Article 19.',
            'Internet shutdowns must be temporary, proportionate, and subject to judicial review.',
            'The government must publish orders for shutdowns.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Shutdown',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'In 2019, the government suspended all internet services in Jammu & Kashmir. Journalist Anuradha Bhasin challenged this, arguing that it violated free speech and privacy rights.',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'The Ruling',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The Supreme Court held that indefinite internet shutdowns are unconstitutional. The government must apply the proportionality test: the shutdown must be necessary and temporary, and there must be a mechanism to review it.',
                },
                {
                  type: 'paragraph',
                  content:
                    'This case is crucial because in the digital age, internet access is essential for exercising freedom of speech and for privacy.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Internet Shutdown', definition: 'The intentional disruption of internet access by a government or organization.' },
          ],
          references: [
            { title: 'Anuradha Bhasin v. Union of India', source: 'Supreme Court of India', year: '2020' },
          ],
        },
      ],
    },
  ],

  // ===== MODULE ASSIGNMENTS =====
  assignments: [
    {
      id: 1,
      title: 'Case Brief Writing',
      description:
        'Write a detailed case brief of the Puttaswamy judgment. Focus on the facts, issues, arguments, and the final decision.',
      deliverables: [
        'Case summary (facts and procedural history)',
        'Key issues identified',
        'The three-pronged test explained',
        'Implications for data protection',
      ],
    },
  ],

  // ===== MODULE QUIZ =====
  quiz: {
    questions: [
      {
        question: 'Article 21 of the Indian Constitution deals with:',
        options: ['Right to Equality', 'Right to Life', 'Freedom of Speech', 'Right to Education'],
        correct: 1,
        explanation: 'Article 21 protects the right to life and personal liberty, which has been interpreted to include privacy.',
      },
      {
        question: 'The Puttaswamy judgment was delivered by:',
        options: ['5-Judge Bench', '7-Judge Bench', '9-Judge Bench', '11-Judge Bench'],
        correct: 2,
        explanation: 'The Puttaswamy case was decided by a nine-judge bench, the largest ever for a privacy case.',
      },
      {
        question: 'Article 19 guarantees:',
        options: ['Right to Privacy', 'Freedom of Speech', 'Right to Education', 'Right to Work'],
        correct: 1,
        explanation: 'Article 19(1)(a) guarantees the freedom of speech and expression, which is closely linked to privacy.',
      },
      {
        question: 'The Aadhaar case was decided in:',
        options: ['2016', '2017', '2018', '2019'],
        correct: 2,
        explanation: 'The Aadhaar judgment was delivered by the Supreme Court in September 2018.',
      },
      {
        question: 'PUCL stands for:',
        options: ['People\'s Union for Civil Liberties', 'Public Union for Civil Law', 'People\'s Union for Constitutional Law', 'Public Union for Civil Liberties'],
        correct: 0,
        explanation: 'PUCL stands for People\'s Union for Civil Liberties, which filed the landmark telephone tapping case.',
      },
    ],
    passingScore: 80,
  },
};
