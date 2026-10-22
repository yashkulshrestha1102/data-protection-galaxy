// data/modules/module-02.ts

import { Module } from '@/app/types/course';

export const module02: Module = {
  id: 2,
  title: 'History of Data Protection',
  description:
    'Understand the global and Indian journey of data protection laws. This module traces the evolution from the OECD guidelines and the GDPR to India\'s landmark journey culminating in the DPDPA 2023.',
  duration: '5 Hours',
  icon: 'Clock',
  learningObjectives: [
    'Trace the global evolution of privacy laws from the 1970s to today',
    'Understand the core principles established by the OECD and the GDPR',
    'Analyze India\'s legislative journey from the Shah Committee to the DPDPA',
    'Understand the impact of the Puttaswamy judgment on Indian data protection',
    'Compare the DPDPA with global frameworks like the GDPR',
  ],
  chapters: [
    // ============================================================
    // CHAPTER 1: GLOBAL PRIVACY EVOLUTION
    // ============================================================
    {
      id: 1,
      title: 'Global Privacy Evolution',
      lessons: [
        {
          id: 1,
          title: 'OECD Guidelines',
          duration: '15 min',
          type: 'video',
          description: 'The foundation of modern data protection laws — the 1980 OECD Privacy Guidelines.',
          content:
            'The OECD Privacy Guidelines, adopted in 1980, were the first internationally agreed-upon set of privacy principles. They established the foundation for data protection laws worldwide, including India\'s DPDPA.',
          learningObjectives: [
            'Understand why the OECD Guidelines were created',
            'Identify the eight core principles of the OECD',
            'Analyze the global impact of these guidelines',
          ],
          keyTakeaways: [
            'The OECD Guidelines were the first international consensus on data protection.',
            'They established eight principles that still form the bedrock of privacy laws.',
            'They balanced privacy protection with the free flow of information across borders.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Need for Global Standards',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'In the 1970s, as computers began to process vast amounts of personal data, governments realized the need for standardized privacy protections. Without common standards, international trade and data flows would become fragmented and risky.',
                },
                {
                  type: 'paragraph',
                  content:
                    'The Organisation for Economic Co-operation and Development (OECD) stepped in to create a harmonized framework. The result was the "OECD Guidelines on the Protection of Privacy and Transborder Flows of Personal Data," adopted in 1980.',
                },
                {
                  type: 'callout',
                  content:
                    'The OECD Guidelines were not a legally binding treaty, but they established a moral and political consensus that shaped subsequent laws globally.',
                  calloutType: 'note',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'The Eight Core Principles',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The OECD Guidelines established eight foundational principles that govern the collection and use of personal data:',
                },
                {
                  type: 'list',
                  content: 'The OECD Principles',
                  items: [
                    'Collection Limitation: Collect data lawfully, fairly, and with consent where appropriate.',
                    'Data Quality: Ensure data is relevant, accurate, complete, and up-to-date.',
                    'Purpose Specification: State the purpose of data collection at the time of collection.',
                    'Use Limitation: Use data only for specified purposes, unless authorized or consented to.',
                    'Security Safeguards: Protect data with reasonable security measures.',
                    'Openness: Be transparent about data policies and practices.',
                    'Individual Participation: Allow individuals to access, correct, and challenge data.',
                    'Accountability: Hold data controllers accountable for compliance.',
                  ],
                },
                {
                  type: 'paragraph',
                  content:
                    'These eight principles became the DNA of almost every data protection law that followed. When you read the DPDPA\'s provisions on consent, notice, security, and data principal rights, you are seeing the direct descendants of the 1980 OECD Guidelines.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Global Impact',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The OECD Guidelines influenced legislation worldwide. The EU Data Protection Directive (1995), the GDPR (2018), the UK Data Protection Act, and India\'s DPDPA all draw inspiration from these core principles.',
                },
                {
                  type: 'heading',
                  content: 'The Balance of Trade and Privacy',
                },
                {
                  type: 'paragraph',
                  content:
                    'A key contribution of the OECD Guidelines was addressing the tension between privacy and international trade. They recognized that data must flow across borders for the global economy to function, but it must be protected. The guidelines promoted "transborder data flows" while ensuring safeguards.',
                },
                {
                  type: 'paragraph',
                  content:
                    'This balance is exactly what India\'s DPDPA attempts with its cross-border data transfer rules (Section 16), which allow transfers by default but give the government the power to restrict them.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'OECD', definition: 'Organisation for Economic Co-operation and Development, a forum of 38 developed nations.' },
            { term: 'Transborder Data Flows', definition: 'The movement of personal data across international borders.' },
          ],
          references: [
            { title: 'OECD Privacy Guidelines', source: 'OECD', year: '1980 (updated 2013)' },
          ],
        },
        {
          id: 2,
          title: 'Convention 108',
          duration: '20 min',
          type: 'reading',
          description: 'The first legally binding international treaty on data protection.',
          content:
            'While the OECD Guidelines were soft law, the Council of Europe\'s Convention 108 was the first legally binding international treaty protecting individuals against abuses in the processing of personal data.',
          learningObjectives: [
            'Understand the difference between soft law and binding treaties',
            'Analyze the key provisions of Convention 108',
            'Understand its influence on modern privacy laws',
          ],
          keyTakeaways: [
            'Convention 108 (1981) was the first binding international privacy treaty.',
            'It applies to both the public and private sectors.',
            'It established special protections for sensitive data categories.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The First Binding Treaty',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Adopted in 1981, Convention 108 (Convention for the Protection of Individuals with regard to Automatic Processing of Personal Data) was a monumental step. It moved privacy from guidelines to binding law for signatory countries.',
                },
                {
                  type: 'paragraph',
                  content:
                    'Unlike the OECD Guidelines, which rely on voluntary compliance, Convention 108 requires countries to enact domestic legislation to enforce its principles.',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Key Provisions',
              content: [
                {
                  type: 'heading',
                  content: 'Quality of Data',
                },
                {
                  type: 'paragraph',
                  content:
                    'Data must be processed fairly and lawfully, stored for specified purposes, and be adequate, relevant, and not excessive.',
                },
                {
                  type: 'heading',
                  content: 'Sensitive Data',
                },
                {
                  type: 'paragraph',
                  content:
                    'Convention 108 introduced the concept of "special categories of data" (like health, sexual life, racial origin, and religion), which require stricter protection. The GDPR and DPDPA both build on this concept.',
                },
                {
                  type: 'heading',
                  content: 'Rights of Data Subjects',
                },
                {
                  type: 'paragraph',
                  content:
                    'It guaranteed individuals the right to know about data collection, access their data, and demand corrections.',
                },
                {
                  type: 'callout',
                  content:
                    'Convention 108 has been updated over time (Modernised Convention 108) to address the digital age, AI, and global data flows, keeping it relevant 40+ years later.',
                  calloutType: 'important',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Convention 108', definition: 'The Council of Europe\'s 1981 treaty on data protection, the first legally binding international privacy law.' },
            { term: 'Soft Law', definition: 'Non-binding guidelines or declarations that influence behaviour but lack strict enforcement mechanisms.' },
          ],
          references: [
            { title: 'Convention 108', source: 'Council of Europe', year: '1981' },
          ],
        },
        {
          id: 3,
          title: 'APEC Privacy Framework',
          duration: '15 min',
          type: 'video',
          description: 'How the Asia-Pacific region approached data protection to balance trade and privacy.',
          content:
            'The APEC Privacy Framework was developed to create a harmonized approach to privacy across the Asia-Pacific region, focusing heavily on enabling cross-border data flows.',
          learningObjectives: [
            'Understand the APEC framework and its goals',
            'Compare it with the EU and OECD approaches',
            'Analyze how it influences data flows in Asia',
          ],
          keyTakeaways: [
            'APEC focuses on avoiding barriers to trade while protecting privacy.',
            'It uses a flexible, risk-based approach.',
            'The Cross-Border Privacy Rules (CBPR) system was established under it.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The APEC Approach',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Established in 2004, the APEC Privacy Framework recognized that different economies have different legal systems. Instead of mandating a single strict law, it set out flexible principles to encourage data flow in the Asia-Pacific region.',
                },
                {
                  type: 'paragraph',
                  content:
                    'It includes principles similar to the OECD, such as preventing harm, notice, collection limitation, and accountability, but it leans more towards enabling trade.',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'The CBPR System',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A major output of the APEC framework is the Cross-Border Privacy Rules (CBPR) system. Companies can certify that they meet APEC privacy standards, allowing them to transfer data more freely across APEC member economies.',
                },
                {
                  type: 'example',
                  content:
                    'If a US company is CBPR certified, it can receive data from Japan or Singapore more easily, as those countries recognize the certification as proof of adequate protection.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'APEC', definition: 'Asia-Pacific Economic Cooperation, a regional economic forum.' },
            { term: 'CBPR', definition: 'Cross-Border Privacy Rules, a voluntary certification system for data flows under APEC.' },
          ],
          references: [
            { title: 'APEC Privacy Framework', source: 'APEC', year: '2005 (updated 2015)' },
          ],
        },
        {
          id: 4,
          title: 'UN Guidelines',
          duration: '20 min',
          type: 'reading',
          description: 'The United Nations\' role in recognizing privacy as a human right in the digital era.',
          content:
            'The United Nations has played a crucial role in recognizing privacy as a fundamental human right, especially in the context of mass surveillance and the digital age.',
          learningObjectives: [
            'Analyze the UN\'s stance on digital privacy',
            'Understand the 2015 UN resolution on privacy',
            'Recognize the human rights approach to data protection',
          ],
          keyTakeaways: [
            'The UN affirmed that privacy is a human right that applies online.',
            'It appointed a Special Rapporteur on the right to privacy.',
            'The UN guidelines stress that mass surveillance violates human rights.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Privacy as a Human Right',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Article 12 of the Universal Declaration of Human Rights (1948) protects privacy. However, as digital surveillance expanded following the 2013 Snowden revelations, the UN had to explicitly address digital privacy.',
                },
                {
                  type: 'paragraph',
                  content:
                    'In 2015, the UN General Assembly unanimously adopted a resolution affirming that the same rights that people have offline must also be protected online, including the right to privacy.',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'The Special Rapporteur',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The UN established a Special Rapporteur on the right to privacy. This independent expert investigates mass surveillance and advises countries on how to protect privacy.',
                },
                {
                  type: 'callout',
                  content:
                    'The UN\'s work makes it clear that data protection is not just an IT issue—it is a fundamental human rights issue. The Indian Supreme Court\'s Puttaswamy judgment referenced these global human rights frameworks.',
                  calloutType: 'important',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Special Rapporteur', definition: 'An independent expert appointed by the UN to investigate and report on a specific human rights issue.' },
            { term: 'Mass Surveillance', definition: 'Systematic monitoring of large populations, often by governments, which the UN views as a privacy violation.' },
          ],
          references: [
            { title: 'UN Resolution on the Right to Privacy', source: 'United Nations', year: '2015' },
          ],
        },
      ],
    },

    // ============================================================
    // CHAPTER 2: GDPR JOURNEY
    // ============================================================
    {
      id: 2,
      title: 'GDPR Journey',
      lessons: [
        {
          id: 5,
          title: 'History of GDPR',
          duration: '15 min',
          type: 'video',
          description: 'How the European Union created the world\'s most influential data protection law.',
          content:
            'The General Data Protection Regulation (GDPR) was a massive leap forward in privacy law. This lesson covers its origins and why it replaced the older 1995 Data Protection Directive.',
          learningObjectives: [
            'Understand why the 1995 Directive became outdated',
            'Analyze the legislative process behind the GDPR',
            'Understand the global impact of the GDPR',
          ],
          keyTakeaways: [
            'GDPR replaced the Data Protection Directive (1995).',
            'It was designed to unify data protection across the EU.',
            'It introduced massive fines and extraterritorial scope.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Pre-GDPR Era',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Before GDPR, the EU relied on the 1995 Data Protection Directive. The internet exploded in the early 2000s, making the 1995 rules inadequate. Companies like Facebook and Google were collecting data at unprecedented scales, crossing borders effortlessly.',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'The GDPR Revolution',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Adopted in 2016 and enforced in 2018, the GDPR replaced the Directive. It was a "Regulation" (not a Directive), meaning it applied directly to all EU member states without needing local laws.',
                },
                {
                  type: 'paragraph',
                  content:
                    'The GDPR introduced the concept of "privacy by design," gave individuals sweeping rights (like the right to be forgotten), and put the fear of God into companies with fines of up to 4% of global turnover or €20 million.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'GDPR', definition: 'General Data Protection Regulation, the EU\'s comprehensive data privacy law effective from 2018.' },
            { term: 'Directive vs. Regulation', definition: 'A Directive sets goals for member states to implement locally, while a Regulation is directly binding law across all member states.' },
          ],
          references: [
            { title: 'GDPR Full Text', source: 'European Union', year: '2016' },
          ],
        },
        {
          id: 6,
          title: 'GDPR Objectives',
          duration: '20 min',
          type: 'reading',
          description: 'The core goals the European Union wanted to achieve with the GDPR.',
          content:
            'The GDPR was designed to harmonize data privacy laws across Europe, protect citizens\' rights, and reshape how organizations approach data privacy.',
          learningObjectives: [
            'Understand GDPR\'s dual objective of protection and free flow',
            'Analyze how it empowers individuals',
            'Understand its impact on businesses',
          ],
          keyTakeaways: [
            'Goal 1: Harmonize data protection laws across the EU.',
            'Goal 2: Give individuals control over their personal data.',
            'Goal 3: Facilitate the free flow of data within the EU.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Harmonization',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Before GDPR, doing business across the EU meant complying with 28 different data protection laws. GDPR created a single, unified rulebook, reducing compliance costs and legal uncertainty.',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Empowering Individuals',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The GDPR shifted the balance of power from companies to individuals. It introduced rights like access, rectification, erasure, and portability, making it easier for people to control their digital lives.',
                },
                {
                  type: 'callout',
                  content:
                    'India\'s DPDPA adopts a similar objective: giving Data Principals rights over their data while allowing businesses to operate with clarity.',
                  calloutType: 'note',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Harmonization', definition: 'The process of making different laws consistent and unified across a region.' },
          ],
          references: [
            { title: 'GDPR Recitals', source: 'European Union', year: '2016' },
          ],
        },
        {
          id: 7,
          title: 'GDPR Structure',
          duration: '15 min',
          type: 'video',
          description: 'A high-level overview of how the GDPR is organized.',
          content:
            'The GDPR consists of 99 articles and 173 recitals. Understanding its structure is essential for compliance professionals.',
          learningObjectives: [
            'Understand the layout of the GDPR',
            'Differentiate between articles and recitals',
            'Navigate the law effectively',
          ],
          keyTakeaways: [
            'The GDPR has 11 chapters and 99 articles.',
            'Recitals provide context but are not legally binding on their own.',
            'The core obligations are found in Chapters 2, 3, and 4.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Chapters and Articles',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The GDPR is divided into 11 chapters. Chapter 1 defines scope. Chapter 2 lays out the famous principles. Chapter 3 details the rights of the data subject. Chapter 4 covers the obligations of controllers and processors.',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'The Recitals',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The 173 recitals act as explanatory notes. They explain the "why" behind the articles. Courts and regulators frequently refer to recitals to interpret ambiguities in the articles.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Recitals', definition: 'Introductory explanations in EU law that provide context but are not formal legislative provisions.' },
          ],
          references: [
            { title: 'GDPR Structure', source: 'European Commission', year: '2018' },
          ],
        },
        {
          id: 8,
          title: 'Important Articles',
          duration: '25 min',
          type: 'reading',
          description: 'A deep dive into the most critical articles of the GDPR.',
          content:
            'From consent to data protection officers, some GDPR articles are more important than others. Learn which ones form the core of GDPR compliance.',
          learningObjectives: [
            'Identify the core principles in Article 5',
            'Understand the lawful bases in Article 6',
            'Know the rights in Articles 15-22',
          ],
          keyTakeaways: [
            'Article 5 sets out the 7 principles of processing.',
            'Article 17 is the "Right to be Forgotten."',
            'Article 32 covers security of processing.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Core Obligations',
              content: [
                {
                  type: 'list',
                  content: 'Must-know GDPR Articles',
                  items: [
                    'Article 5: Principles (lawfulness, fairness, transparency, etc.)',
                    'Article 6: Lawful bases for processing (consent, contract, legal obligation, etc.)',
                    'Article 7: Conditions for consent (must be freely given, clear, easy to withdraw)',
                    'Article 13 & 14: Transparent information and privacy notices.',
                    'Article 17: Right to Erasure ("Right to be Forgotten")',
                    'Article 32: Security of Processing',
                    'Article 33: Breach notification (72 hours)',
                  ],
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Impact on India',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'India\'s DPDPA borrows heavily from these concepts. Article 6 mirrors Section 6 (Consent) and 7 (Legitimate Uses) of the DPDPA. Article 32 mirrors Section 8(5) of the DPDPA. However, DPDPA is much shorter (44 sections) compared to GDPR (99 articles).',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Right to be Forgotten', definition: 'The right of individuals to have their personal data erased by search engines and data controllers under certain conditions.' },
          ],
          references: [
            { title: 'Key GDPR Articles', source: 'EDPB', year: '2018' },
          ],
        },
        {
          id: 9,
          title: 'GDPR Penalties',
          duration: '15 min',
          type: 'video',
          description: 'The massive fines that changed corporate behaviour globally.',
          content:
            'GDPR introduced a two-tier penalty system that made privacy a boardroom issue.',
          learningObjectives: [
            'Understand the two-tier fine structure',
            'See real-world examples of GDPR fines',
            'Compare GDPR fines with DPDPA fines',
          ],
          keyTakeaways: [
            'Tier 1 fines: Up to €10 million or 2% of global turnover.',
            'Tier 2 fines: Up to €20 million or 4% of global turnover.',
            'Meta was fined €1.2 billion for data transfers.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Two-Tier System',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The GDPR distinguishes between less severe and more severe violations.',
                },
                {
                  type: 'list',
                  content: 'Penalty Tiers',
                  items: [
                    'Tier 1 (Lower): Up to €10 million or 2% of global annual turnover (whichever is higher) for violations like failing to keep records or not notifying a breach.',
                    'Tier 2 (Upper): Up to €20 million or 4% of global annual turnover for violations of core principles, consent rules, and data subject rights.',
                  ],
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Real-World Fines',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Meta (Facebook) was fined €1.2 billion in 2023 for transferring EU user data to the US without adequate safeguards. Amazon was fined €746 million for targeted advertising violations.',
                },
                {
                  type: 'callout',
                  content:
                    'India\'s DPDPA takes a different approach. Instead of turnover-based fines, it uses fixed maximums (up to ₹250 crore). For a small startup, a ₹50 crore fine is as devastating as a €20 million fine is for a multinational.',
                  calloutType: 'important',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Turnover-based fines', definition: 'Fines calculated as a percentage of a company\'s global annual revenue, ensuring the penalty scales with company size.' },
          ],
          references: [
            { title: 'GDPR Enforcement Tracker', source: 'CMS Law', year: '2024' },
          ],
        },
        {
          id: 10,
          title: 'Lessons for India',
          duration: '20 min',
          type: 'reading',
          description: 'What India learned from the GDPR and how it adapted it for the DPDPA.',
          content:
            'India did not copy the GDPR blindly. It took the core concepts but adapted them to the Indian context, creating a shorter, more flexible, but equally powerful law.',
          learningObjectives: [
            'Compare GDPR and DPDPA design philosophies',
            'Understand why DPDPA is shorter',
            'Identify key differences in enforcement and scope',
          ],
          keyTakeaways: [
            'India opted for a shorter, principle-based law.',
            'DPDPA uses a "blacklist" approach for data transfers, unlike GDPR\'s "adequacy" approach.',
            'DPDPA does not have a "legitimate interests" basis like GDPR.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Simplification',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The GDPR is famously complex, with 99 articles and thousands of pages of guidance. Indian policymakers wanted a law that small businesses could actually understand. The DPDPA has only 44 sections and is much easier to read.',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Key Differences',
              content: [
                {
                  type: 'list',
                  content: 'GDPR vs DPDPA',
                  items: [
                    'Lawful Basis: GDPR has 6 bases (including Legitimate Interests). DPDPA has only 2 (Consent and Legitimate Uses).',
                    'Data Transfer: GDPR requires "adequacy." DPDPA uses a blacklist (allowed unless restricted).',
                    'Penalties: GDPR is turnover-based. DPDPA is fixed amount.',
                    'DPO: GDPR requires a DPO for many companies. DPDPA only requires it for SDFs (Significant Data Fiduciaries).',
                  ],
                },
              ],
            },
          ],
          glossary: [
            { term: 'Adequacy Decision', definition: 'A GDPR mechanism where the EU officially recognizes a non-EU country as having adequate data protection laws.' },
          ],
          references: [
            { title: 'DPDPA vs GDPR', source: 'Legal Galaxy', year: '2024' },
          ],
        },
      ],
    },

    // ============================================================
    // CHAPTER 3: INDIA'S JOURNEY
    // ============================================================
    {
      id: 3,
      title: "India's Journey",
      lessons: [
        {
          id: 11,
          title: 'Justice Shah Committee',
          duration: '15 min',
          type: 'video',
          description: 'The first formal step India took toward a data protection law.',
          content:
            'Before the DPDPA, India took baby steps. The first was the Justice Shah Committee, which laid the groundwork for privacy legislation.',
          learningObjectives: [
            'Understand the mandate of the Justice Shah Committee',
            'Analyze its key recommendations',
            'Understand why its report was not immediately implemented',
          ],
          keyTakeaways: [
            'Formed in 2011, chaired by Justice A.P. Shah.',
            'It recommended a "Right to Privacy" framework and a draft bill.',
            'It introduced the concept of "data controllers" and "data processors" to India.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The First Step',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'In 2011, the Indian government recognized the need for a privacy law. It appointed a committee headed by former Chief Justice of Delhi High Court, Justice A.P. Shah.',
                },
                {
                  type: 'paragraph',
                  content:
                    'Their report, "Privacy and Data Protection in India," was submitted in 2012. It was a visionary document that recommended a comprehensive privacy law, the establishment of a Privacy Commissioner, and strong protections for sensitive data.',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Legacy',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Although the government did not pass the law immediately, the Shah Committee report became the intellectual foundation for all future privacy debates in India. When the DPDPA was drafted, many of its core concepts (like notice, consent, and data controller obligations) traced back to the Shah Committee.',
                },
                {
                  type: 'callout',
                  content:
                    'The Shah Committee was the first time India formally acknowledged that "privacy" as a fundamental right needed a dedicated statutory framework.',
                  calloutType: 'note',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Privacy Commissioner', definition: 'An independent regulatory authority proposed by the Shah Committee to oversee data protection.' },
          ],
          references: [
            { title: 'Report of the Group of Experts on Privacy', source: 'Planning Commission', year: '2012' },
          ],
        },
        {
          id: 12,
          title: 'Srikrishna Committee',
          duration: '20 min',
          type: 'reading',
          description: 'The pivotal committee whose report shaped the modern DPDPA.',
          content:
            'Following the Puttaswamy judgment, the government formed the Justice B.N. Srikrishna Committee to draft a robust data protection law for India.',
          learningObjectives: [
            'Understand the mandate of the Srikrishna Committee',
            'Analyze the core recommendations',
            'Understand its impact on the DPDPA',
          ],
          keyTakeaways: [
            'Formed in 2017, chaired by Justice B.N. Srikrishna.',
            'It produced the draft Personal Data Protection (PDP) Bill, 2018.',
            'It introduced concepts like Data Protection Authority, data localization, and consent managers.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Mandate',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'In the landmark Puttaswamy judgment (2017), the Supreme Court directed the government to establish a robust data protection regime. The government responded by forming a 10-member committee led by Justice B.N. Srikrishna.',
                },
                {
                  type: 'paragraph',
                  content:
                    'The committee was tasked with studying global laws (like GDPR) and recommending a framework for India that balances privacy with innovation.',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'The Srikrishna Report & Draft Bill',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'In July 2018, the committee released its famous report and the draft Personal Data Protection (PDP) Bill. Key features included:',
                },
                {
                  type: 'list',
                  content: 'Key Features',
                  items: [
                    'Establishment of a Data Protection Authority (DPA).',
                    'Data localization requirements (storing a copy of data in India).',
                    'Strong rights for data principals (fiduciaries).',
                    'Consent as the primary basis for processing.',
                  ],
                },
                {
                  type: 'paragraph',
                  content:
                    'The draft bill was a massive 180-page document. It was considered too complex and heavily regulated. However, it set the stage for the DPDPA.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Data Localisation', definition: 'The practice of storing data within a country\'s borders to ensure jurisdiction and security.' },
          ],
          references: [
            { title: 'A Free and Fair Digital Economy', source: 'MeitY', year: '2018' },
          ],
        },
        {
          id: 13,
          title: 'PDP Bill 2018',
          duration: '15 min',
          type: 'video',
          description: 'The introduction of the first comprehensive data protection bill in Indian history.',
          content:
            'The Personal Data Protection (PDP) Bill 2018 was the first major legislative attempt to codify privacy in India.',
          learningObjectives: [
            'Understand the structure of the PDP Bill 2018',
            'Analyze the controversies surrounding it',
            'Understand why it did not pass',
          ],
          keyTakeaways: [
            'It was introduced based on the Srikrishna Committee report.',
            'It had strict data localization mandates.',
            'It faced heavy pushback from tech companies.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Drafting Phase',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The PDP Bill 2018 was introduced in Parliament. It was intended to protect the privacy of individuals while ensuring the free flow of data.',
                },
                {
                  type: 'paragraph',
                  content:
                    'However, it contained complex provisions, such as mandatory localisation of all personal data, which the tech industry warned would stifle innovation and increase costs for startups.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'PDP Bill', definition: 'Personal Data Protection Bill, the precursor to the DPDPA.' },
          ],
          references: [
            { title: 'PDP Bill 2018', source: 'MeitY', year: '2018' },
          ],
        },
        {
          id: 14,
          title: 'PDP Bill 2019',
          duration: '20 min',
          type: 'reading',
          description: 'The revised version of the bill that addressed some, but not all, concerns.',
          content:
            'The PDP Bill 2019 was a revised, more mature version of the 2018 bill. It introduced new concepts and refined existing ones.',
          learningObjectives: [
            'Compare the 2018 and 2019 versions',
            'Identify new provisions like "social media intermediaries"',
            'Understand the political climate around it',
          ],
          keyTakeaways: [
            'Introduced the concept of Significant Data Fiduciaries (SDFs).',
            'Allowed the government to exempt itself for national security.',
            'Referred to a Joint Parliamentary Committee (JPC).',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Refinements',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The 2019 bill removed some of the harsher localisation requirements but added new powers for the government.',
                },
                {
                  type: 'paragraph',
                  content:
                    'It created the category of "Significant Data Fiduciaries"—organisations handling large amounts of sensitive data—who would face stricter obligations.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'SDF', definition: 'Significant Data Fiduciary, a category of organisations with enhanced data protection obligations.' },
          ],
          references: [
            { title: 'PDP Bill 2019', source: 'MeitY', year: '2019' },
          ],
        },
        {
          id: 15,
          title: 'JPC Review',
          duration: '15 min',
          type: 'video',
          description: 'The Joint Parliamentary Committee\'s review of the PDP Bill.',
          content:
            'The PDP Bill 2019 was sent to a Joint Parliamentary Committee (JPC) for review. The JPC took nearly two years to submit its report.',
          learningObjectives: [
            'Understand the role of the JPC',
            'Analyze the JPC\'s recommendations',
            'See how the JPC delayed the bill',
          ],
          keyTakeaways: [
            'The JPC was chaired by P.P. Chaudhary.',
            'It held hundreds of meetings with stakeholders.',
            'It recommended expanding the scope of the bill to cover non-personal data.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Review Process',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The JPC review was the longest phase in the bill\'s history. The committee heard from big tech companies, privacy activists, and government bodies.',
                },
                {
                  type: 'paragraph',
                  content:
                    'Its final report, submitted in December 2021, recommended over 150 amendments. One major recommendation was to include non-personal data within the bill\'s scope, which the government strongly opposed.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'JPC', definition: 'Joint Parliamentary Committee, a committee made up of members from both houses of Parliament.' },
          ],
          references: [
            { title: 'JPC Report on PDP Bill', source: 'Lok Sabha', year: '2021' },
          ],
        },
        {
          id: 16,
          title: 'DPDP Bill',
          duration: '20 min',
          type: 'reading',
          description: 'The new, simplified bill introduced in 2022 that replaced the complex PDP Bill.',
          content:
            'After years of debate, the government withdrew the PDP Bill and introduced a completely new, shorter bill: the Digital Personal Data Protection (DPDP) Bill, 2022.',
          learningObjectives: [
            'Understand why the PDP Bill was withdrawn',
            'Analyze the new DPDP Bill structure',
            'See how it simplified compliance',
          ],
          keyTakeaways: [
            'The DPDP Bill was much shorter (only 44 sections vs 99 articles).',
            'It removed the controversial data localisation mandate.',
            'It used simpler terminology (Data Principal vs Data Subject).',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'A Fresh Start',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'In August 2022, the government withdrew the PDP Bill 2019. It was clear that the complex bill could not pass. The government introduced a new, simplified DPDP Bill.',
                },
                {
                  type: 'paragraph',
                  content:
                    'This new bill was heavily criticized by privacy activists for being too lenient on the government and big tech. However, it was designed to be practical and easy to implement.',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Simplification',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The new bill introduced concepts like "Consent Managers"—a digital platform where individuals could manage their consent for multiple apps. It replaced the "Data Subject" with "Data Principal" and "Data Controller" with "Data Fiduciary".',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Consent Manager', definition: 'A registered entity that allows individuals to give, manage, and withdraw consent across multiple data fiduciaries.' },
          ],
          references: [
            { title: 'DPDP Bill 2022', source: 'MeitY', year: '2022' },
          ],
        },
        {
          id: 17,
          title: 'DPDPA 2023',
          duration: '15 min',
          type: 'video',
          description: 'The final act that became law in August 2023.',
          content:
            'The DPDP Bill was passed by both houses of Parliament and received Presidential assent on August 11, 2023, becoming the DPDPA.',
          learningObjectives: [
            'Understand the final timeline of the DPDPA',
            'Analyze its key features',
            'Understand the phased implementation',
          ],
          keyTakeaways: [
            'Passed in August 2023.',
            'It is a civil law, not a criminal law.',
            'Implementation is phased.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Passage of the Act',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The DPDPA 2023 was passed quickly in the monsoon session of Parliament. It was presented, debated, and passed within a week.',
                },
                {
                  type: 'paragraph',
                  content:
                    'While some opposition members walked out, the government argued that the law was a necessary step for India\'s digital economy and would bring massive changes to how data is handled.',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'The Final Law',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The DPDPA is the most significant privacy law in Indian history. It introduced the Data Protection Board, penalties up to ₹250 crore, and a comprehensive framework for data processing.',
                },
                {
                  type: 'callout',
                  content:
                    'The Act has been passed, but most of its provisions are not yet in force. The government is phasing in the implementation to give companies time to comply.',
                  calloutType: 'important',
                },
              ],
            },
          ],
          glossary: [
            { term: 'DPDPA 2023', definition: 'The Digital Personal Data Protection Act, 2023, India\'s comprehensive privacy law.' },
          ],
          references: [
            { title: 'Digital Personal Data Protection Act 2023', source: 'Gazette of India', year: '2023' },
          ],
        },
        {
          id: 18,
          title: 'Timeline',
          duration: '10 min',
          type: 'reading',
          description: 'A complete visual timeline of India\'s data protection journey.',
          content:
            'A concise summary of the 12-year journey from the Shah Committee to the DPDPA.',
          learningObjectives: [
            'Memorize key dates and milestones',
            'Understand the trajectory of privacy law in India',
          ],
          keyTakeaways: [
            '2011: Shah Committee formed.',
            '2017: Puttaswamy Judgment.',
            '2018: Srikrishna Committee and PDP Bill.',
            '2023: DPDPA Passed.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The 12-Year Journey',
              content: [
                {
                  type: 'table',
                  headers: ['Year', 'Milestone'],
                  rows: [
                    ['2011', 'Justice Shah Committee formed.'],
                    ['2012', 'Shah Committee submits report.'],
                    ['2017', 'Supreme Court delivers Puttaswamy judgment.'],
                    ['2018', 'Srikrishna Committee submits draft PDP Bill.'],
                    ['2019', 'PDP Bill 2019 introduced in Parliament.'],
                    ['2021', 'JPC submits report on PDP Bill.'],
                    ['2022', 'PDP Bill withdrawn, DPDP Bill 2022 introduced.'],
                    ['2023', 'DPDPA 2023 passed and gets Presidential assent.'],
                    ['2025-2027', 'DPDP Rules and phased implementation.'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'India\'s journey has been slow and iterative, but the resulting DPDPA is tailored to the Indian context—simpler than GDPR but with high penalties to ensure compliance.',
                  calloutType: 'note',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Puttaswamy Judgment', definition: 'The 2017 Supreme Court case that recognized privacy as a fundamental right.' },
          ],
          references: [
            { title: 'Timeline of Data Protection in India', source: 'Legal Galaxy', year: '2024' },
          ],
        },
      ],
    },
  ],

  // ===== MODULE ASSIGNMENTS =====
  assignments: [
    {
      id: 1,
      title: 'Comparative Timeline Poster',
      description:
        'Create a visual timeline comparing the global data protection journey (GDPR) and the Indian journey (DPDPA).',
      deliverables: [
        'Visual timeline poster (PDF or image)',
        'List of key milestones for both regions',
        'A short comparative analysis paragraph',
      ],
    },
  ],

  // ===== MODULE QUIZ =====
  quiz: {
    questions: [
      {
        question: 'In which year were the OECD Guidelines published?',
        options: ['1970', '1980', '1990', '2000'],
        correct: 1,
        explanation: 'The OECD Guidelines were published in 1980 and established the first international privacy principles.',
      },
      {
        question: 'The Srikrishna Committee Report was published in:',
        options: ['2016', '2017', '2018', '2019'],
        correct: 2,
        explanation: 'The Srikrishna Committee submitted its report and draft bill in July 2018.',
      },
      {
        question: 'Convention 108 was adopted in which year?',
        options: ['1981', '1991', '2001', '2011'],
        correct: 0,
        explanation: 'Convention 108 was adopted by the Council of Europe in 1981 and was the first legally binding international privacy treaty.',
      },
      {
        question: 'What is the maximum fine under GDPR?',
        options: ['€10M or 2%', '€15M or 3%', '€20M or 4%', '€25M or 5%'],
        correct: 2,
        explanation: 'The GDPR introduced a two-tier fine system, with the highest tier reaching €20 million or 4% of global annual turnover.',
      },
      {
        question: 'The Justice Shah Committee was formed in:',
        options: ['2010', '2011', '2012', '2013'],
        correct: 1,
        explanation: 'The Justice Shah Committee was formed in 2011 to recommend a privacy framework for India.',
      },
    ],
    passingScore: 80,
  },
};