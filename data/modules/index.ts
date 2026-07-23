// data/modules/index.ts

import { Module, ExamData } from '@/app/types/course';

// ===== EXAM DATA =====
export const examData: ExamData = {
  totalQuestions: 100,
  duration: 120,
  passingScore: 80,
  correctNeeded: 80,
};

// ===== ALL 20 MODULES =====
export const fullModulesData: Module[] = [
  // ===== MODULE 1: Foundation of Privacy & DPDPA =====
  {
    id: 1,
    title: 'Foundation of Privacy & DPDPA',
    description: 'Build a strong foundation in privacy concepts and understand the DPDPA framework',
    duration: '6 Hours',
    icon: 'Shield',
    chapters: [
      {
        id: 1,
        title: 'Introduction to Privacy',
        lessons: [
          {
            id: 1,
            title: 'What is Privacy?',
            duration: '15 min',
            type: 'video',
            content: 'Privacy is the right of individuals to control their personal information...',
            learningObjectives: [
              'Define privacy in legal and social contexts',
              'Identify different dimensions of privacy',
              'Recognize privacy as a fundamental human right',
            ],
            keyTakeaways: [
              'Privacy is a multifaceted concept encompassing various aspects of personal autonomy',
              'The meaning of privacy has evolved significantly throughout history',
              'Privacy is recognized globally as a fundamental human right',
            ],
            sections: [
              {
                id: 'sec-1',
                title: 'Defining Privacy',
                content: [
                  {
                    type: 'paragraph',
                    content: 'Privacy is a fundamental concept that touches every aspect of human life. It encompasses the right to be left alone, the ability to control personal information, and the freedom to make decisions about one\'s personal life without interference.'
                  },
                  {
                    type: 'callout',
                    content: 'Privacy is not just about secrecy. It\'s about having control over who knows what about you.',
                    calloutType: 'important'
                  },
                  {
                    type: 'heading',
                    content: 'Key Dimensions of Privacy'
                  },
                  {
                    type: 'list',
                    content: 'Understanding the dimensions',
                    items: [
                      'Personal Privacy: Protection of personal space and decisions',
                      'Information Privacy: Control over personal data and information',
                      'Communication Privacy: Freedom from surveillance and monitoring',
                      'Territorial Privacy: Protection of physical spaces and boundaries'
                    ]
                  }
                ]
              },
              {
                id: 'sec-2',
                title: 'Historical Perspective',
                content: [
                  {
                    type: 'paragraph',
                    content: 'The concept of privacy has deep historical roots, though its formal recognition as a legal right is relatively modern.'
                  },
                  {
                    type: 'example',
                    content: 'Ancient civilizations recognized the need for private spaces. Roman law protected citizens against intrusion into their homes.'
                  }
                ]
              }
            ],
            glossary: [
              { term: 'Privacy', definition: 'The right to be left alone and to control personal information' },
              { term: 'Autonomy', definition: 'The capacity to make independent decisions about one\'s personal life' }
            ],
            references: [
              { title: 'Privacy and the Law', source: 'Harvard Law Review', year: '2020' },
              { title: 'Understanding Privacy', source: 'Stanford Encyclopedia of Philosophy', year: '2021' }
            ]
          },
          {
            id: 2,
            title: 'Types of Privacy',
            duration: '20 min',
            type: 'reading',
            content: 'Privacy is not a monolithic concept. It manifests in various dimensions...',
            learningObjectives: [
              'Identify and distinguish between different types of privacy',
              'Understand the scope of each privacy type',
            ],
            keyTakeaways: [
              'Privacy manifests in multiple dimensions',
              'Each type of privacy requires different protections',
            ],
            sections: [
              {
                id: 'sec-1',
                title: 'Understanding Privacy Types',
                content: [
                  {
                    type: 'paragraph',
                    content: 'Privacy is not a monolithic concept. It manifests in various dimensions, each requiring specific considerations and protections.'
                  },
                  {
                    type: 'heading',
                    content: 'Information Privacy'
                  },
                  {
                    type: 'paragraph',
                    content: 'Information privacy refers to the control individuals have over their personal data. This includes who collects it, how it\'s used, and who has access to it.'
                  },
                  {
                    type: 'callout',
                    content: 'Information privacy is increasingly important in the digital age where personal data is collected and processed at massive scales.',
                    calloutType: 'note'
                  }
                ]
              }
            ]
          },
          {
            id: 3,
            title: 'Importance of Privacy',
            duration: '15 min',
            type: 'video',
            content: 'Privacy is not just about keeping secrets. It is fundamental to human dignity...',
            learningObjectives: [
              'Understand the fundamental importance of privacy',
              'Analyze the social and individual benefits of privacy',
            ],
            keyTakeaways: [
              'Privacy is essential for human dignity and autonomy',
              'Privacy enables personal growth and identity formation',
            ],
            sections: [
              {
                id: 'sec-1',
                title: 'Why Privacy Matters',
                content: [
                  {
                    type: 'paragraph',
                    content: 'Privacy is not just about keeping secrets. It is fundamental to human dignity, personal development, and societal functioning.'
                  },
                  {
                    type: 'heading',
                    content: 'Individual Benefits of Privacy'
                  },
                  {
                    type: 'list',
                    content: 'How privacy benefits individuals',
                    items: [
                      'Protects personal autonomy and freedom',
                      'Allows for personal growth and experimentation',
                      'Enables intimate relationships and trust',
                      'Protects from identity theft and fraud'
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 4,
            title: 'Privacy vs Security',
            duration: '25 min',
            type: 'reading',
            content: 'While often used interchangeably, privacy and security are fundamentally different...',
            learningObjectives: [
              'Distinguish between privacy and security',
              'Understand the relationship between privacy and security',
            ],
            keyTakeaways: [
              'Privacy and security are distinct but interrelated concepts',
              'Security is a necessary condition for privacy protection',
            ],
            sections: [
              {
                id: 'sec-1',
                title: 'Defining Privacy and Security',
                content: [
                  {
                    type: 'paragraph',
                    content: 'While often used interchangeably, privacy and security are fundamentally different concepts that serve distinct purposes.'
                  },
                  {
                    type: 'heading',
                    content: 'Key Differences'
                  },
                  {
                    type: 'list',
                    content: 'Privacy vs Security differences',
                    items: [
                      'Privacy is about control over personal information',
                      'Security is about protection from unauthorized access',
                      'Privacy is a right, security is a measure',
                      'Privacy is about what happens to data, security is about how data is protected'
                    ]
                  },
                  {
                    type: 'callout',
                    content: 'Security is essential for privacy, but privacy is not the same as security.',
                    calloutType: 'important'
                  }
                ]
              }
            ]
          },
          {
            id: 5,
            title: 'Privacy Principles',
            duration: '20 min',
            type: 'video',
            content: 'Privacy principles are the guiding tenets that inform privacy policies...',
            learningObjectives: [
              'Understand core privacy principles',
              'Apply privacy principles to practical scenarios',
            ],
            keyTakeaways: [
              'Privacy principles form the foundation of data protection laws',
              'International frameworks have established common principles',
            ],
            sections: [
              {
                id: 'sec-1',
                title: 'Core Privacy Principles',
                content: [
                  {
                    type: 'paragraph',
                    content: 'Privacy principles are the guiding tenets that inform privacy policies, practices, and laws.'
                  },
                  {
                    type: 'heading',
                    content: 'OECD Privacy Principles'
                  },
                  {
                    type: 'list',
                    content: 'The OECD principles',
                    items: [
                      'Collection Limitation: Collect only necessary data',
                      'Data Quality: Ensure data is accurate and current',
                      'Purpose Specification: Clearly state why data is collected',
                      'Use Limitation: Only use data for specified purposes',
                      'Security Safeguards: Protect data from unauthorized access',
                      'Openness: Be transparent about data practices',
                      'Individual Participation: Allow individuals to access their data',
                      'Accountability: Be responsible for data protection'
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 2,
        title: 'Evolution of Privacy',
        lessons: [
          {
            id: 6,
            title: 'Ancient Concept of Privacy',
            duration: '15 min',
            type: 'reading',
            content: 'Privacy is not a modern invention. Ancient civilizations recognized the need for personal space...',
            learningObjectives: [
              'Explore privacy concepts in ancient civilizations',
              'Analyze how different cultures viewed privacy',
            ],
            keyTakeaways: [
              'Privacy has been valued since ancient times',
              'Different civilizations developed varied approaches to privacy',
            ],
            sections: [
              {
                id: 'sec-1',
                title: 'Privacy in Antiquity',
                content: [
                  {
                    type: 'paragraph',
                    content: 'Privacy is not a modern invention. Ancient civilizations recognized the need for personal space and protection from intrusion.'
                  },
                  {
                    type: 'example',
                    content: 'Roman law included protections against invasion of the home. The concept of "domus" (home) was considered sacred and protected.'
                  },
                  {
                    type: 'example',
                    content: 'Ancient Greek philosophy discussed concepts of private and public spheres.'
                  }
                ]
              }
            ]
          },
          {
            id: 7,
            title: 'International Development',
            duration: '20 min',
            type: 'video',
            content: 'Privacy protection has evolved through international instruments and cooperation...',
            learningObjectives: [
              'Track the development of privacy rights internationally',
              'Analyze key international instruments for privacy protection',
            ],
            keyTakeaways: [
              'Privacy protection has developed through international cooperation',
              'Different regions have adopted different privacy frameworks',
            ],
            sections: [
              {
                id: 'sec-1',
                title: 'International Privacy Frameworks',
                content: [
                  {
                    type: 'paragraph',
                    content: 'Privacy protection has evolved through international instruments and cooperation.'
                  },
                  {
                    type: 'heading',
                    content: 'Key International Instruments'
                  },
                  {
                    type: 'list',
                    content: 'Major international privacy documents',
                    items: [
                      'Universal Declaration of Human Rights (1948)',
                      'European Convention on Human Rights (1950)',
                      'OECD Privacy Guidelines (1980)',
                      'EU Data Protection Directive (1995)',
                      'GDPR (2018)'
                    ]
                  },
                  {
                    type: 'callout',
                    content: 'The GDPR has set the global standard for data protection and has influenced legislation worldwide.',
                    calloutType: 'important'
                  }
                ]
              }
            ]
          },
          {
            id: 8,
            title: 'Digital Revolution',
            duration: '15 min',
            type: 'reading',
            content: 'The digital revolution has transformed how personal information is collected, stored, and used...',
            learningObjectives: [
              'Analyze how the digital revolution changed privacy landscape',
              'Understand the privacy implications of digital technologies',
            ],
            keyTakeaways: [
              'Technology has fundamentally altered privacy expectations',
              'The scale of data collection has reached unprecedented levels',
            ],
            sections: [
              {
                id: 'sec-1',
                title: 'Digital Transformation and Privacy',
                content: [
                  {
                    type: 'paragraph',
                    content: 'The digital revolution has transformed how personal information is collected, stored, and used.'
                  },
                  {
                    type: 'heading',
                    content: 'Key Digital Challenges'
                  },
                  {
                    type: 'list',
                    content: 'Digital privacy challenges',
                    items: [
                      'Mass data collection and surveillance',
                      'Data breaches and cybersecurity threats',
                      'AI and algorithmic decision-making',
                      'IoT and connected devices'
                    ]
                  },
                  {
                    type: 'warning',
                    content: 'The scale of data collection in the digital age is unprecedented.'
                  }
                ]
              }
            ]
          },
          {
            id: 9,
            title: 'Modern Privacy Challenges',
            duration: '20 min',
            type: 'video',
            content: 'The modern privacy landscape presents unprecedented challenges...',
            learningObjectives: [
              'Identify contemporary privacy challenges',
              'Understand the intersection of technology and privacy',
            ],
            keyTakeaways: [
              'Modern privacy challenges are complex and multifaceted',
              'Technology creates new privacy risks',
            ],
            sections: [
              {
                id: 'sec-1',
                title: 'Modern Privacy Landscape',
                content: [
                  {
                    type: 'paragraph',
                    content: 'The modern privacy landscape presents unprecedented challenges that require sophisticated approaches to protection.'
                  },
                  {
                    type: 'heading',
                    content: 'Key Modern Challenges'
                  },
                  {
                    type: 'list',
                    content: 'Current privacy challenges',
                    items: [
                      'Data exploitation and monetization',
                      'Sophisticated data breaches',
                      'Government surveillance and access',
                      'Biometric data collection',
                      'AI and automated decision making',
                      'Cross-border data flows'
                    ]
                  },
                  {
                    type: 'callout',
                    content: 'Privacy challenges are no longer just about keeping secrets but about maintaining control over personal information.',
                    calloutType: 'note'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 3,
        title: 'Privacy in India',
        lessons: [
          {
            id: 10,
            title: 'Constitutional Rights',
            duration: '15 min',
            type: 'video',
            content: 'The Indian Constitution provides a comprehensive framework for privacy rights...',
            learningObjectives: [
              'Understand constitutional provisions for privacy',
              'Analyze the fundamental rights framework',
            ],
            keyTakeaways: [
              'The Indian Constitution provides for privacy through multiple provisions',
              'Privacy rights have evolved through judicial interpretation',
            ],
            sections: [
              {
                id: 'sec-1',
                title: 'Constitutional Framework',
                content: [
                  {
                    type: 'paragraph',
                    content: 'The Indian Constitution provides a comprehensive framework for the protection of privacy rights.'
                  },
                  {
                    type: 'heading',
                    content: 'Key Constitutional Provisions'
                  },
                  {
                    type: 'list',
                    content: 'Privacy-related constitutional provisions',
                    items: [
                      'Article 21: Right to Life and Personal Liberty',
                      'Article 19: Freedom of Speech and Expression',
                      'Article 14: Right to Equality',
                      'Article 20: Protection in respect of conviction for offences'
                    ]
                  },
                  {
                    type: 'callout',
                    content: 'The Supreme Court has interpreted these provisions broadly to protect privacy rights.',
                    calloutType: 'important'
                  }
                ]
              }
            ]
          },
          {
            id: 11,
            title: 'Article 21',
            duration: '20 min',
            type: 'reading',
            content: 'Article 21 guarantees that "No person shall be deprived of his life or personal liberty..."',
            learningObjectives: [
              'Understand the scope of Article 21',
              'Analyze judicial interpretation of Article 21',
            ],
            keyTakeaways: [
              'Article 21 is the foundation of privacy rights in India',
              'The Supreme Court has progressively expanded Article 21',
            ],
            sections: [
              {
                id: 'sec-1',
                title: 'Article 21 Framework',
                content: [
                  {
                    type: 'paragraph',
                    content: 'Article 21 of the Indian Constitution guarantees that "No person shall be deprived of his life or personal liberty except according to procedure established by law."'
                  },
                  {
                    type: 'heading',
                    content: 'Scope of Article 21'
                  },
                  {
                    type: 'list',
                    content: 'Expanding scope of Article 21',
                    items: [
                      'Protects life and personal liberty',
                      'Includes the right to privacy',
                      'Requires procedure established by law',
                      'Procedural due process as fair procedure'
                    ]
                  },
                  {
                    type: 'callout',
                    content: 'Article 21 is the most important constitutional provision for privacy rights in India.',
                    calloutType: 'important'
                  },
                  {
                    type: 'example',
                    content: 'In Maneka Gandhi v. Union of India, the Supreme Court held that "personal liberty" under Article 21 includes the right to privacy.'
                  }
                ]
              }
            ]
          },
          {
            id: 12,
            title: 'Right to Privacy',
            duration: '15 min',
            type: 'video',
            content: 'The right to privacy is a fundamental right in India...',
            learningObjectives: [
              'Define the right to privacy in the Indian context',
              'Analyze the scope of privacy rights',
            ],
            keyTakeaways: [
              'Privacy is a fundamental right in India',
              'Privacy rights are derived from multiple constitutional provisions',
            ],
            sections: [
              {
                id: 'sec-1',
                title: 'Right to Privacy Framework',
                content: [
                  {
                    type: 'paragraph',
                    content: 'The right to privacy is a fundamental right in India, recognized as an integral part of the right to life and personal liberty under Article 21.'
                  },
                  {
                    type: 'heading',
                    content: 'Scope of Privacy Rights'
                  },
                  {
                    type: 'list',
                    content: 'Dimensions of privacy rights',
                    items: [
                      'Informational Privacy: Control over personal data',
                      'Decisional Privacy: Freedom of personal decisions',
                      'Physical Privacy: Protection of physical space',
                      'Communicational Privacy: Privacy of communications'
                    ]
                  },
                  {
                    type: 'callout',
                    content: 'The right to privacy is not absolute and may be subject to reasonable restrictions for legitimate state interests.',
                    calloutType: 'note'
                  }
                ]
              }
            ]
          },
          {
            id: 13,
            title: 'Puttaswamy Judgment',
            duration: '25 min',
            type: 'video',
            content: 'The Supreme Court in K.S. Puttaswamy v. Union of India delivered a landmark judgment...',
            learningObjectives: [
              'Analyze the Puttaswamy judgment',
              'Understand the legal reasoning of the Court',
            ],
            keyTakeaways: [
              'The Puttaswamy judgment is a landmark decision on privacy',
              'The Court unanimously recognized privacy as a fundamental right',
            ],
            sections: [
              {
                id: 'sec-1',
                title: 'The Puttaswamy Decision',
                content: [
                  {
                    type: 'paragraph',
                    content: 'The Supreme Court in K.S. Puttaswamy v. Union of India delivered a landmark judgment recognizing privacy as a fundamental right under the Constitution.'
                  },
                  {
                    type: 'heading',
                    content: 'Key Holdings'
                  },
                  {
                    type: 'list',
                    content: 'Major rulings in the case',
                    items: [
                      'Privacy is a fundamental right under Article 21',
                      'Privacy is intrinsic to human dignity and autonomy',
                      'The right to privacy is not absolute',
                      'Privacy has both horizontal and vertical application',
                      'Data protection legislation is essential'
                    ]
                  },
                  {
                    type: 'callout',
                    content: 'The judgment established a three-pronged test: (i) legality, (ii) necessity, and (iii) proportionality.',
                    calloutType: 'important'
                  }
                ]
              }
            ]
          },
          {
            id: 14,
            title: 'Landmark Cases',
            duration: '20 min',
            type: 'reading',
            content: 'Several landmark cases have contributed to the development of privacy law in India...',
            learningObjectives: [
              'Identify landmark privacy cases in India',
              'Analyze judicial reasoning in key cases',
            ],
            keyTakeaways: [
              'Multiple landmark cases have shaped privacy rights',
              'Courts have progressively expanded privacy protection',
            ],
            sections: [
              {
                id: 'sec-1',
                title: 'Key Privacy Cases',
                content: [
                  {
                    type: 'paragraph',
                    content: 'Several landmark cases have contributed to the development of privacy law in India, establishing important principles and precedents.'
                  },
                  {
                    type: 'heading',
                    content: 'Important Cases'
                  },
                  {
                    type: 'list',
                    content: 'Landmark privacy cases',
                    items: [
                      'M.P. Sharma v. Satish Chandra (1954)',
                      'Kharak Singh v. State of U.P. (1964)',
                      'Gobind v. State of M.P. (1975)',
                      'Maneka Gandhi v. Union of India (1978)',
                      'K.S. Puttaswamy v. Union of India (2017)'
                    ]
                  },
                  {
                    type: 'warning',
                    content: 'These cases represent a journey from the initial denial of privacy as a fundamental right to its unequivocal recognition.'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 4,
        title: 'Why Data Protection?',
        lessons: [
          {
            id: 15,
            title: 'Digital Economy',
            duration: '15 min',
            type: 'video',
            content: 'Data is the currency of the digital economy...',
            learningObjectives: [
              'Understand the role of data in the digital economy',
              'Analyze the economic value of data',
            ],
            keyTakeaways: [
              'Data is the new oil of the digital economy',
              'Data drives economic growth and innovation',
            ],
            sections: [
              {
                id: 'sec-1',
                title: 'Digital Economy',
                content: [
                  {
                    type: 'paragraph',
                    content: 'Data is the currency of the digital economy. Organizations collect vast amounts of data to drive business decisions.'
                  },
                  {
                    type: 'heading',
                    content: 'Why Data is Valuable'
                  },
                  {
                    type: 'list',
                    content: 'Reasons data is valuable',
                    items: [
                      'Enables targeted advertising and marketing',
                      'Drives product development and innovation',
                      'Improves customer experience and personalization',
                      'Provides competitive advantage'
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 16,
            title: 'Data Monetization',
            duration: '20 min',
            type: 'reading',
            content: 'Data monetization refers to the process of using data to generate revenue...',
            learningObjectives: [
              'Understand data monetization strategies',
              'Identify risks associated with data monetization',
            ],
            keyTakeaways: [
              'Data can be monetized directly or indirectly',
              'Privacy risks increase with data monetization',
            ],
            sections: [
              {
                id: 'sec-1',
                title: 'Understanding Data Monetization',
                content: [
                  {
                    type: 'paragraph',
                    content: 'Data monetization refers to the process of using data to generate revenue.'
                  },
                  {
                    type: 'heading',
                    content: 'Types of Data Monetization'
                  },
                  {
                    type: 'list',
                    content: 'Data monetization types',
                    items: [
                      'Direct monetization: Selling data to third parties',
                      'Indirect monetization: Using data to improve products and services',
                      'Data sharing: Exchanging data for mutual benefit',
                      'Data analytics: Offering insights as a service'
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 17,
            title: 'Personal Data as Asset',
            duration: '15 min',
            type: 'video',
            content: 'Personal data is increasingly recognized as a valuable asset...',
            learningObjectives: [
              'Recognize personal data as a valuable asset',
              'Understand the implications of data as an asset',
            ],
            keyTakeaways: [
              'Personal data has significant economic value',
              'Data protection is essential to protect this asset',
            ],
            sections: [
              {
                id: 'sec-1',
                title: 'Data as an Asset',
                content: [
                  {
                    type: 'paragraph',
                    content: 'Personal data is increasingly recognized as a valuable asset that requires protection.'
                  },
                  {
                    type: 'callout',
                    content: 'In the digital economy, personal data is the most valuable asset for many organizations.',
                    calloutType: 'important'
                  }
                ]
              }
            ]
          },
          {
            id: 18,
            title: 'Data Breaches',
            duration: '20 min',
            type: 'reading',
            content: 'Data breaches have become increasingly common and costly...',
            learningObjectives: [
              'Understand the impact of data breaches',
              'Identify common causes of data breaches',
            ],
            keyTakeaways: [
              'Data breaches can have devastating consequences',
              'Prevention is better than cure',
            ],
            sections: [
              {
                id: 'sec-1',
                title: 'Data Breach Impact',
                content: [
                  {
                    type: 'paragraph',
                    content: 'Data breaches have become increasingly common and costly for organizations.'
                  },
                  {
                    type: 'heading',
                    content: 'Impact of Data Breaches'
                  },
                  {
                    type: 'list',
                    content: 'Consequences of data breaches',
                    items: [
                      'Financial losses and penalties',
                      'Reputational damage and loss of trust',
                      'Legal liability and lawsuits',
                      'Operational disruption'
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 19,
            title: 'Identity Theft',
            duration: '15 min',
            type: 'video',
            content: 'Identity theft is a growing concern in the digital age...',
            learningObjectives: [
              'Understand identity theft and its consequences',
              'Identify ways to prevent identity theft',
            ],
            keyTakeaways: [
              'Identity theft can have severe personal and financial consequences',
              'Data protection helps prevent identity theft',
            ],
            sections: [
              {
                id: 'sec-1',
                title: 'Identity Theft',
                content: [
                  {
                    type: 'paragraph',
                    content: 'Identity theft is a growing concern in the digital age.'
                  },
                  {
                    type: 'callout',
                    content: 'Data protection laws like DPDPA help prevent identity theft by protecting personal data.',
                    calloutType: 'important'
                  }
                ]
              }
            ]
          },
          {
            id: 20,
            title: 'Cyber Crimes',
            duration: '20 min',
            type: 'reading',
            content: 'Cyber crimes are increasingly targeting personal data...',
            learningObjectives: [
              'Identify common cyber crimes targeting data',
              'Understand the relationship between data protection and cyber security',
            ],
            keyTakeaways: [
              'Cyber crimes are a major threat to personal data',
              'Data protection is a key defense against cyber crimes',
            ],
            sections: [
              {
                id: 'sec-1',
                title: 'Cyber Crimes',
                content: [
                  {
                    type: 'paragraph',
                    content: 'Cyber crimes are increasingly targeting personal data.'
                  },
                  {
                    type: 'heading',
                    content: 'Common Cyber Crimes'
                  },
                  {
                    type: 'list',
                    content: 'Cyber crimes targeting data',
                    items: [
                      'Ransomware attacks',
                      'Phishing and social engineering',
                      'Data theft and espionage',
                      'DDoS attacks'
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 21,
            title: 'Privacy Risks',
            duration: '15 min',
            type: 'video',
            content: 'Privacy risks arise from the collection, use, and sharing of personal data...',
            learningObjectives: [
              'Identify privacy risks in data processing',
              'Understand how to mitigate privacy risks',
            ],
            keyTakeaways: [
              'Privacy risks are everywhere in the digital ecosystem',
              'Risk assessment is essential for data protection',
            ],
            sections: [
              {
                id: 'sec-1',
                title: 'Privacy Risks',
                content: [
                  {
                    type: 'paragraph',
                    content: 'Privacy risks arise from the collection, use, and sharing of personal data.'
                  },
                  {
                    type: 'heading',
                    content: 'Types of Privacy Risks'
                  },
                  {
                    type: 'list',
                    content: 'Privacy risk categories',
                    items: [
                      'Unauthorized access and data breaches',
                      'Data misuse and exploitation',
                      'Surveillance and tracking',
                      'Discrimination and bias'
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    assignments: [
      {
        id: 1,
        title: 'Personal Data Identification Exercise',
        description: 'Identify 50 types of personal data in your daily life',
        deliverables: [
          'List of 50 personal data types',
          'Classification of data types',
          'Privacy risk assessment'
        ]
      }
    ],
    quiz: {
      questions: [
        { question: 'When was the Puttaswamy judgment delivered?', options: ['2015', '2017', '2018', '2019'], correct: 1 },
        { question: 'How many types of privacy are there?', options: ['3', '4', '5', '6'], correct: 2 },
        { question: 'Article 21 of the Indian Constitution deals with?', options: ['Right to Education', 'Right to Life', 'Right to Equality', 'Right to Freedom'], correct: 1 },
        { question: 'Privacy vs Security: Which is broader?', options: ['Privacy', 'Security', 'Both are same', 'Neither'], correct: 0 },
        { question: 'What is data monetization?', options: ['Selling data', 'Using data for profit', 'Data analysis', 'Data storage'], correct: 1 }
      ],
      passingScore: 80
    },
    project: {
      title: 'Privacy Risk Analysis',
      description: 'Conduct a privacy risk analysis of a real-world organization',
      deliverables: ['Risk assessment report', 'Data flow diagram', 'Risk mitigation plan']
    }
  },
  // ===== MODULE 2: History of Data Protection =====
  {
    id: 2,
    title: 'History of Data Protection',
    description: 'Understand the global and Indian journey of data protection laws',
    duration: '5 Hours',
    icon: 'Clock',
    chapters: [
      {
        id: 1,
        title: 'Global Privacy Evolution',
        lessons: [
          { id: 1, title: 'OECD Guidelines', duration: '15 min', type: 'video', content: 'The OECD Privacy Guidelines of 1980...', learningObjectives: ['Understand OECD Guidelines'], keyTakeaways: ['OECD set global standards'], sections: [{ id: 'sec-1', title: 'OECD Guidelines', content: [{ type: 'paragraph', content: 'The OECD Privacy Guidelines were established in 1980...' }] }] },
          { id: 2, title: 'Convention 108', duration: '20 min', type: 'reading', content: 'The Council of Europe Convention 108...', learningObjectives: ['Understand Convention 108'], keyTakeaways: ['Convention 108 was first binding treaty'], sections: [{ id: 'sec-1', title: 'Convention 108', content: [{ type: 'paragraph', content: 'Convention 108 was adopted in 1981...' }] }] },
          { id: 3, title: 'APEC Privacy Framework', duration: '15 min', type: 'video', content: 'APEC Privacy Framework and its significance...', learningObjectives: ['Understand APEC Framework'], keyTakeaways: ['APEC promotes cross-border data flows'], sections: [{ id: 'sec-1', title: 'APEC Framework', content: [{ type: 'paragraph', content: 'APEC Privacy Framework was established in 2004...' }] }] },
          { id: 4, title: 'UN Guidelines', duration: '20 min', type: 'reading', content: 'United Nations guidelines on privacy...', learningObjectives: ['Understand UN Guidelines'], keyTakeaways: ['UN recognizes privacy as human right'], sections: [{ id: 'sec-1', title: 'UN Guidelines', content: [{ type: 'paragraph', content: 'UN Guidelines for the Regulation of Computerized Personal Data Files...' }] }] }
        ]
      },
      {
        id: 2,
        title: 'GDPR Journey',
        lessons: [
          { id: 5, title: 'History of GDPR', duration: '15 min', type: 'video', content: 'How GDPR came into existence...', learningObjectives: ['Understand GDPR history'], keyTakeaways: ['GDPR replaced Data Protection Directive'], sections: [{ id: 'sec-1', title: 'GDPR History', content: [{ type: 'paragraph', content: 'GDPR was adopted in 2016 and became enforceable in 2018...' }] }] },
          { id: 6, title: 'GDPR Objectives', duration: '20 min', type: 'reading', content: 'Objectives of the GDPR...', learningObjectives: ['Understand GDPR objectives'], keyTakeaways: ['GDPR aims to protect fundamental rights'], sections: [{ id: 'sec-1', title: 'GDPR Objectives', content: [{ type: 'list', content: 'GDPR objectives', items: ['Protect personal data', 'Harmonize data protection laws', 'Enable free flow of data'] }] }] },
          { id: 7, title: 'GDPR Structure', duration: '15 min', type: 'video', content: 'Understanding the GDPR structure...', learningObjectives: ['Understand GDPR structure'], keyTakeaways: ['GDPR has 99 articles'], sections: [{ id: 'sec-1', title: 'GDPR Structure', content: [{ type: 'paragraph', content: 'GDPR consists of 11 chapters and 99 articles...' }] }] },
          { id: 8, title: 'Important Articles', duration: '25 min', type: 'reading', content: 'Key articles of GDPR...', learningObjectives: ['Identify key GDPR articles'], keyTakeaways: ['Article 5-11 are key principles'], sections: [{ id: 'sec-1', title: 'Important Articles', content: [{ type: 'list', content: 'Key articles', items: ['Article 5: Principles', 'Article 6: Lawfulness', 'Article 7: Consent', 'Article 17: Right to Erasure'] }] }] },
          { id: 9, title: 'GDPR Penalties', duration: '15 min', type: 'video', content: 'Penalty structure under GDPR...', learningObjectives: ['Understand GDPR penalties'], keyTakeaways: ['Fines up to 20M or 4% of turnover'], sections: [{ id: 'sec-1', title: 'GDPR Penalties', content: [{ type: 'paragraph', content: 'GDPR provides for two tiers of fines...' }] }] },
          { id: 10, title: 'Lessons for India', duration: '20 min', type: 'reading', content: 'What India can learn from GDPR...', learningObjectives: ['Apply GDPR lessons to India'], keyTakeaways: ['GDPR provides valuable framework'], sections: [{ id: 'sec-1', title: 'Lessons for India', content: [{ type: 'paragraph', content: 'India can learn from GDPR\'s comprehensive approach...' }] }] }
        ]
      },
      {
        id: 3,
        title: "India's Journey",
        lessons: [
          { id: 11, title: 'Justice Shah Committee', duration: '15 min', type: 'video', content: 'The first committee on data protection...', learningObjectives: ['Understand Justice Shah Committee'], keyTakeaways: ['First step towards data protection law'], sections: [{ id: 'sec-1', title: 'Justice Shah Committee', content: [{ type: 'paragraph', content: 'The Justice Shah Committee was formed in 2011...' }] }] },
          { id: 12, title: 'Srikrishna Committee', duration: '20 min', type: 'reading', content: 'The Srikrishna Committee Report 2018...', learningObjectives: ['Understand Srikrishna Committee'], keyTakeaways: ['Srikrishna Committee proposed PDP Bill'], sections: [{ id: 'sec-1', title: 'Srikrishna Committee', content: [{ type: 'paragraph', content: 'The Srikrishna Committee submitted its report in 2018...' }] }] },
          { id: 13, title: 'PDP Bill 2018', duration: '15 min', type: 'video', content: 'The Personal Data Protection Bill 2018...', learningObjectives: ['Understand PDP Bill 2018'], keyTakeaways: ['First comprehensive data protection bill'], sections: [{ id: 'sec-1', title: 'PDP Bill 2018', content: [{ type: 'paragraph', content: 'The PDP Bill 2018 was introduced in Parliament...' }] }] },
          { id: 14, title: 'PDP Bill 2019', duration: '20 min', type: 'reading', content: 'The Personal Data Protection Bill 2019...', learningObjectives: ['Understand PDP Bill 2019'], keyTakeaways: ['Revised version with more provisions'], sections: [{ id: 'sec-1', title: 'PDP Bill 2019', content: [{ type: 'paragraph', content: 'The PDP Bill 2019 was a revised version...' }] }] },
          { id: 15, title: 'JPC Review', duration: '15 min', type: 'video', content: 'Joint Parliamentary Committee review...', learningObjectives: ['Understand JPC review'], keyTakeaways: ['JPC suggested significant changes'], sections: [{ id: 'sec-1', title: 'JPC Review', content: [{ type: 'paragraph', content: 'The JPC reviewed the bill and suggested changes...' }] }] },
          { id: 16, title: 'DPDP Bill', duration: '20 min', type: 'reading', content: 'The Digital Personal Data Protection Bill...', learningObjectives: ['Understand DPDP Bill'], keyTakeaways: ['New streamlined version'], sections: [{ id: 'sec-1', title: 'DPDP Bill', content: [{ type: 'paragraph', content: 'The DPDP Bill 2022 was a simplified version...' }] }] },
          { id: 17, title: 'DPDPA 2023', duration: '15 min', type: 'video', content: 'The final DPDPA 2023...', learningObjectives: ['Understand DPDPA 2023'], keyTakeaways: ['DPDPA 2023 is the final act'], sections: [{ id: 'sec-1', title: 'DPDPA 2023', content: [{ type: 'paragraph', content: 'DPDPA 2023 was passed in August 2023...' }] }] },
          { id: 18, title: 'Timeline', duration: '10 min', type: 'reading', content: 'Complete timeline of India\'s data protection journey...', learningObjectives: ['Create timeline'], keyTakeaways: ['Journey from 2011 to 2023'], sections: [{ id: 'sec-1', title: 'Timeline', content: [{ type: 'list', content: 'Key milestones', items: ['2011: Justice Shah Committee', '2017: Puttaswamy Judgment', '2018: Srikrishna Committee', '2023: DPDPA Passed'] }] }] }
        ]
      }
    ],
    assignments: [
      { id: 1, title: 'Create Privacy Timeline Poster', description: 'Create a visual timeline of data protection evolution', deliverables: ['Timeline poster', 'Key milestones', 'Comparative analysis'] }
    ],
    quiz: {
      questions: [
        { question: 'In which year were the OECD Guidelines published?', options: ['1970', '1980', '1990', '2000'], correct: 1 },
        { question: 'The Srikrishna Committee Report was published in:', options: ['2016', '2017', '2018', '2019'], correct: 2 },
        { question: 'Convention 108 was adopted in which year?', options: ['1981', '1991', '2001', '2011'], correct: 0 },
        { question: 'What is the maximum fine under GDPR?', options: ['€10M or 2%', '€15M or 3%', '€20M or 4%', '€25M or 5%'], correct: 2 },
        { question: 'The Justice Shah Committee was formed in:', options: ['2010', '2011', '2012', '2013'], correct: 1 }
      ],
      passingScore: 80
    },
    project: {
      title: 'Timeline Project',
      description: 'Create a comprehensive timeline of data protection evolution',
      deliverables: ['Visual timeline', 'Key events summary', 'Comparative analysis']
    }
  },
  // ===== MODULE 3: Constitution & Legal Background =====
  {
    id: 3,
    title: 'Constitution & Legal Background',
    description: 'Understand the constitutional and legal foundations of data protection in India',
    duration: '6 Hours',
    icon: 'Building',
    chapters: [
      {
        id: 1,
        title: 'Constitutional Provisions',
        lessons: [
          { id: 1, title: 'Article 14 - Right to Equality', duration: '15 min', type: 'video', content: 'Understanding Article 14...', learningObjectives: ['Understand Article 14'], keyTakeaways: ['Article 14 guarantees equality'], sections: [{ id: 'sec-1', title: 'Article 14', content: [{ type: 'paragraph', content: 'Article 14 guarantees equality before law...' }] }] },
          { id: 2, title: 'Article 19 - Freedom of Speech', duration: '20 min', type: 'reading', content: 'Article 19 and its implications...', learningObjectives: ['Understand Article 19'], keyTakeaways: ['Article 19 protects freedom of speech'], sections: [{ id: 'sec-1', title: 'Article 19', content: [{ type: 'paragraph', content: 'Article 19 guarantees freedom of speech and expression...' }] }] },
          { id: 3, title: 'Article 21 - Right to Life', duration: '25 min', type: 'video', content: 'Article 21 and the right to privacy...', learningObjectives: ['Understand Article 21'], keyTakeaways: ['Article 21 is the foundation of privacy'], sections: [{ id: 'sec-1', title: 'Article 21', content: [{ type: 'paragraph', content: 'Article 21 is the most important provision for privacy rights...' }] }] },
          { id: 4, title: 'Natural Justice', duration: '15 min', type: 'reading', content: 'Principles of natural justice...', learningObjectives: ['Understand natural justice'], keyTakeaways: ['Natural justice ensures fair procedure'], sections: [{ id: 'sec-1', title: 'Natural Justice', content: [{ type: 'paragraph', content: 'Principles of natural justice are fundamental to fair procedure...' }] }] },
          { id: 5, title: 'Reasonable Restriction', duration: '20 min', type: 'video', content: 'Reasonable restrictions on rights...', learningObjectives: ['Understand reasonable restrictions'], keyTakeaways: ['Rights can be restricted for public interest'], sections: [{ id: 'sec-1', title: 'Reasonable Restrictions', content: [{ type: 'paragraph', content: 'Reasonable restrictions can be imposed on fundamental rights...' }] }] },
          { id: 6, title: 'Fundamental Rights', duration: '15 min', type: 'reading', content: 'Overview of fundamental rights...', learningObjectives: ['Understand fundamental rights'], keyTakeaways: ['Fundamental rights are justiciable'], sections: [{ id: 'sec-1', title: 'Fundamental Rights', content: [{ type: 'paragraph', content: 'Fundamental rights are enshrined in Part III of the Constitution...' }] }] },
          { id: 7, title: 'Constitutional Morality', duration: '20 min', type: 'video', content: 'Understanding constitutional morality...', learningObjectives: ['Understand constitutional morality'], keyTakeaways: ['Constitutional morality guides interpretation'], sections: [{ id: 'sec-1', title: 'Constitutional Morality', content: [{ type: 'paragraph', content: 'Constitutional morality refers to the values underlying the Constitution...' }] }] }
        ]
      },
      {
        id: 2,
        title: 'Landmark Case Laws',
        lessons: [
          { id: 8, title: 'Puttaswamy Case', duration: '25 min', type: 'video', content: 'Detailed analysis of the Puttaswamy judgment...', learningObjectives: ['Analyze Puttaswamy case'], keyTakeaways: ['Landmark judgment on privacy'], sections: [{ id: 'sec-1', title: 'Puttaswamy Case', content: [{ type: 'paragraph', content: 'The Puttaswamy case was decided by a 9-judge bench...' }] }] },
          { id: 9, title: 'Aadhaar Case', duration: '20 min', type: 'reading', content: 'Aadhaar and privacy implications...', learningObjectives: ['Understand Aadhaar case'], keyTakeaways: ['Aadhaar case balanced privacy and welfare'], sections: [{ id: 'sec-1', title: 'Aadhaar Case', content: [{ type: 'paragraph', content: 'The Aadhaar case examined the constitutional validity of Aadhaar...' }] }] },
          { id: 10, title: 'PUCL Case', duration: '15 min', type: 'video', content: 'PUCL v. Union of India...', learningObjectives: ['Understand PUCL case'], keyTakeaways: ['PUCL case established right to food'], sections: [{ id: 'sec-1', title: 'PUCL Case', content: [{ type: 'paragraph', content: 'PUCL v. Union of India dealt with the right to food...' }] }] },
          { id: 11, title: 'Shreya Singhal Case', duration: '20 min', type: 'reading', content: 'Shreya Singhal v. Union of India...', learningObjectives: ['Understand Shreya Singhal case'], keyTakeaways: ['Section 66A struck down'], sections: [{ id: 'sec-1', title: 'Shreya Singhal Case', content: [{ type: 'paragraph', content: 'Shreya Singhal v. Union of India struck down Section 66A...' }] }] },
          { id: 12, title: 'Anuradha Bhasin Case', duration: '15 min', type: 'video', content: 'Anuradha Bhasin v. Union of India...', learningObjectives: ['Understand Anuradha Bhasin case'], keyTakeaways: ['Right to internet is a fundamental right'], sections: [{ id: 'sec-1', title: 'Anuradha Bhasin Case', content: [{ type: 'paragraph', content: 'Anuradha Bhasin case dealt with internet shutdowns in Kashmir...' }] }] }
        ]
      }
    ],
    assignments: [
      { id: 1, title: 'Case Brief Writing', description: 'Write a detailed case brief of the Puttaswamy judgment', deliverables: ['Case summary', 'Key holdings', 'Constitutional analysis', 'Implications'] }
    ],
    quiz: {
      questions: [
        { question: 'Article 21 of the Indian Constitution deals with:', options: ['Right to Equality', 'Right to Life', 'Freedom of Speech', 'Right to Education'], correct: 1 },
        { question: 'The Puttaswamy judgment was delivered by:', options: ['5-Judge Bench', '7-Judge Bench', '9-Judge Bench', '11-Judge Bench'], correct: 2 },
        { question: 'Article 19 guarantees:', options: ['Right to Privacy', 'Freedom of Speech', 'Right to Education', 'Right to Work'], correct: 1 },
        { question: 'The Aadhaar case was decided in:', options: ['2016', '2017', '2018', '2019'], correct: 1 },
        { question: 'PUCL stands for:', options: ['People\'s Union for Civil Liberties', 'Public Union for Civil Law', 'People\'s Union for Constitutional Law', 'Public Union for Civil Liberties'], correct: 0 }
      ],
      passingScore: 80
    }
  },
  // ===== MODULE 4: Complete DPDPA Act =====
  {
    id: 4,
    title: 'Complete DPDPA Act',
    description: 'Read and understand every section of the DPDPA 2023 in detail',
    duration: '10 Hours',
    icon: 'FileText',
    chapters: [
      {
        id: 1,
        title: 'Reading the Act',
        lessons: [
          { id: 1, title: 'Section-wise Explanation', duration: '30 min', type: 'video', content: 'Complete section-by-section analysis...', learningObjectives: ['Understand all sections'], keyTakeaways: ['DPDPA has 40 sections'], sections: [{ id: 'sec-1', title: 'Section-wise Analysis', content: [{ type: 'paragraph', content: 'The DPDPA 2023 has 40 sections divided into 8 chapters...' }] }] },
          { id: 2, title: 'Every Clause Explained', duration: '25 min', type: 'reading', content: 'Understanding each clause...', learningObjectives: ['Understand clauses'], keyTakeaways: ['Clauses provide detailed provisions'], sections: [{ id: 'sec-1', title: 'Clause Analysis', content: [{ type: 'paragraph', content: 'Each section has multiple clauses that provide detailed provisions...' }] }] },
          { id: 3, title: 'Illustrations & Examples', duration: '20 min', type: 'video', content: 'Practical illustrations of provisions...', learningObjectives: ['Apply provisions'], keyTakeaways: ['Illustrations help understand provisions'], sections: [{ id: 'sec-1', title: 'Illustrations', content: [{ type: 'paragraph', content: 'Illustrations provide practical examples of how provisions apply...' }] }] },
          { id: 4, title: 'Understanding Exceptions', duration: '15 min', type: 'reading', content: 'Exceptions and their interpretation...', learningObjectives: ['Understand exceptions'], keyTakeaways: ['Exceptions are important for interpretation'], sections: [{ id: 'sec-1', title: 'Exceptions', content: [{ type: 'paragraph', content: 'Exceptions provide relief from certain provisions under specific circumstances...' }] }] }
        ]
      },
      {
        id: 2,
        title: 'Key Definitions',
        lessons: [
          { id: 5, title: 'Digital Personal Data', duration: '15 min', type: 'video', content: 'Definition of digital personal data...', learningObjectives: ['Define digital personal data'], keyTakeaways: ['Digital personal data is any data that identifies a person'], sections: [{ id: 'sec-1', title: 'Digital Personal Data', content: [{ type: 'paragraph', content: 'Digital personal data means any data that can identify a person...' }] }] },
          { id: 6, title: 'Processing', duration: '10 min', type: 'reading', content: 'Understanding processing...', learningObjectives: ['Define processing'], keyTakeaways: ['Processing includes collection, storage, use, sharing'], sections: [{ id: 'sec-1', title: 'Processing', content: [{ type: 'paragraph', content: 'Processing includes any operation performed on personal data...' }] }] },
          { id: 7, title: 'Consent', duration: '15 min', type: 'video', content: 'Definition and requirements of consent...', learningObjectives: ['Define consent'], keyTakeaways: ['Consent must be free, specific, informed, and unambiguous'], sections: [{ id: 'sec-1', title: 'Consent', content: [{ type: 'list', content: 'Consent requirements', items: ['Free consent', 'Specific consent', 'Informed consent', 'Unambiguous consent', 'Verifiable consent'] }] }] },
          { id: 8, title: 'Notice', duration: '10 min', type: 'reading', content: 'What constitutes valid notice...', learningObjectives: ['Define notice'], keyTakeaways: ['Notice must inform data principals of data processing'], sections: [{ id: 'sec-1', title: 'Notice', content: [{ type: 'paragraph', content: 'Notice must contain all relevant information about data processing...' }] }] },
          { id: 9, title: 'Data Fiduciary', duration: '15 min', type: 'video', content: 'Who is a Data Fiduciary...', learningObjectives: ['Define Data Fiduciary'], keyTakeaways: ['Data Fiduciary determines purpose and means of processing'], sections: [{ id: 'sec-1', title: 'Data Fiduciary', content: [{ type: 'paragraph', content: 'Data Fiduciary is any person who determines the purpose and means of processing...' }] }] },
          { id: 10, title: 'Processor', duration: '10 min', type: 'reading', content: 'Understanding the Processor role...', learningObjectives: ['Define Processor'], keyTakeaways: ['Processor processes data on behalf of Data Fiduciary'], sections: [{ id: 'sec-1', title: 'Processor', content: [{ type: 'paragraph', content: 'Processor is any person who processes data on behalf of the Data Fiduciary...' }] }] },
          { id: 11, title: 'Child & Guardian', duration: '15 min', type: 'video', content: 'Definitions related to children...', learningObjectives: ['Define child and guardian'], keyTakeaways: ['Child is a person under 18 years of age'], sections: [{ id: 'sec-1', title: 'Child & Guardian', content: [{ type: 'paragraph', content: 'A child is a person under the age of 18 years...' }] }] },
          { id: 12, title: 'Consent Manager', duration: '10 min', type: 'reading', content: 'Role of Consent Manager...', learningObjectives: ['Define Consent Manager'], keyTakeaways: ['Consent Manager manages consent on behalf of data principals'], sections: [{ id: 'sec-1', title: 'Consent Manager', content: [{ type: 'paragraph', content: 'Consent Manager is a registered entity that manages consent...' }] }] },
          { id: 13, title: 'Significant Data Fiduciary', duration: '15 min', type: 'video', content: 'What makes a Data Fiduciary significant...', learningObjectives: ['Define SDF'], keyTakeaways: ['SDF has additional obligations'], sections: [{ id: 'sec-1', title: 'SDF', content: [{ type: 'paragraph', content: 'Significant Data Fiduciary has enhanced obligations under the Act...' }] }] }
        ]
      }
    ],
    assignments: [
      { id: 1, title: 'Summarize Entire Act', description: 'Create a comprehensive summary of the DPDPA 2023', deliverables: ['Section-wise summary', 'Key provisions', 'Practical implications'] }
    ],
    quiz: {
      questions: [
        { question: 'How many sections are there in DPDPA 2023?', options: ['30', '32', '34', '36'], correct: 2 },
        { question: 'Who is a Data Fiduciary?', options: ['Person processing data', 'Person determining purpose', 'Person storing data', 'Person transferring data'], correct: 1 },
        { question: 'Consent must be:', options: ['Free, specific, informed', 'Free, general, informed', 'Specific, general, informed', 'Free, specific, general'], correct: 0 },
        { question: 'Children are defined as individuals under:', options: ['18 years', '16 years', '14 years', '12 years'], correct: 0 },
        { question: 'What is the role of a Consent Manager?', options: ['Store consent', 'Manage consent', 'Delete consent', 'Process consent'], correct: 1 }
      ],
      passingScore: 80
    }
  },
  // ===== MODULE 5: Consent Management Framework =====
  {
    id: 5,
    title: 'Consent Management Framework',
    description: 'Learn how to design and implement consent management systems',
    duration: '8 Hours',
    icon: 'CheckCircle',
    isNew: true,
    chapters: [
      {
        id: 1,
        title: 'Consent Architecture',
        lessons: [
          { id: 1, title: 'Consent Collection', duration: '15 min', type: 'video', content: 'Best practices for collecting consent...', learningObjectives: ['Design consent collection'], keyTakeaways: ['Consent collection must be user-friendly'], sections: [{ id: 'sec-1', title: 'Consent Collection', content: [{ type: 'paragraph', content: 'Consent collection should be transparent and user-friendly...' }] }] },
          { id: 2, title: 'Consent Withdrawal', duration: '20 min', type: 'reading', content: 'How to enable easy consent withdrawal...', learningObjectives: ['Implement consent withdrawal'], keyTakeaways: ['Withdrawal should be as easy as giving consent'], sections: [{ id: 'sec-1', title: 'Consent Withdrawal', content: [{ type: 'paragraph', content: 'Consent withdrawal mechanism must be simple and accessible...' }] }] },
          { id: 3, title: 'Consent Dashboard', duration: '25 min', type: 'video', content: 'Building a user-friendly consent dashboard...', learningObjectives: ['Build consent dashboard'], keyTakeaways: ['Dashboard should show all consents given'], sections: [{ id: 'sec-1', title: 'Consent Dashboard', content: [{ type: 'paragraph', content: 'Consent dashboard provides a single view of all consents...' }] }] },
          { id: 4, title: 'Consent Lifecycle', duration: '15 min', type: 'reading', content: 'Understanding the consent lifecycle...', learningObjectives: ['Understand consent lifecycle'], keyTakeaways: ['Consent has a lifecycle from collection to deletion'], sections: [{ id: 'sec-1', title: 'Consent Lifecycle', content: [{ type: 'list', content: 'Consent lifecycle stages', items: ['Collection', 'Storage', 'Use', 'Withdrawal', 'Deletion'] }] }] },
          { id: 5, title: 'Consent Receipts', duration: '20 min', type: 'video', content: 'Issuing and managing consent receipts...', learningObjectives: ['Implement consent receipts'], keyTakeaways: ['Consent receipts provide proof of consent'], sections: [{ id: 'sec-1', title: 'Consent Receipts', content: [{ type: 'paragraph', content: 'Consent receipts are issued to data principals as proof of consent...' }] }] },
          { id: 6, title: 'Logging & Audit Trail', duration: '15 min', type: 'reading', content: 'Maintaining consent logs...', learningObjectives: ['Design audit trail'], keyTakeaways: ['Audit trail ensures accountability'], sections: [{ id: 'sec-1', title: 'Audit Trail', content: [{ type: 'paragraph', content: 'Maintain logs of all consent events for accountability...' }] }] },
          { id: 7, title: 'Revocation', duration: '10 min', type: 'video', content: 'Consent revocation process...', learningObjectives: ['Implement revocation'], keyTakeaways: ['Revocation must be processed promptly'], sections: [{ id: 'sec-1', title: 'Revocation', content: [{ type: 'paragraph', content: 'Consent revocation must be processed within a reasonable time...' }] }] }
        ]
      },
      {
        id: 2,
        title: 'Notice & Accessibility',
        lessons: [
          { id: 8, title: 'Notice Writing', duration: '20 min', type: 'video', content: 'How to write effective privacy notices...', learningObjectives: ['Write effective notices'], keyTakeaways: ['Notices should be clear and concise'], sections: [{ id: 'sec-1', title: 'Notice Writing', content: [{ type: 'list', content: 'Notice best practices', items: ['Use plain language', 'Be transparent', 'Include all required information', 'Make it accessible'] }] }] },
          { id: 9, title: 'Layered Notices', duration: '15 min', type: 'reading', content: 'Designing layered notices...', learningObjectives: ['Design layered notices'], keyTakeaways: ['Layered notices improve user understanding'], sections: [{ id: 'sec-1', title: 'Layered Notices', content: [{ type: 'paragraph', content: 'Layered notices provide information in multiple layers...' }] }] },
          { id: 10, title: 'Multilingual Notice', duration: '20 min', type: 'video', content: 'Creating notices in multiple languages...', learningObjectives: ['Create multilingual notices'], keyTakeaways: ['Notices should be available in multiple languages'], sections: [{ id: 'sec-1', title: 'Multilingual Notices', content: [{ type: 'paragraph', content: 'Multilingual notices ensure accessibility for all users...' }] }] },
          { id: 11, title: 'Accessibility', duration: '15 min', type: 'reading', content: 'Making notices accessible to all...', learningObjectives: ['Design accessible notices'], keyTakeaways: ['Accessibility is a legal requirement'], sections: [{ id: 'sec-1', title: 'Accessibility', content: [{ type: 'paragraph', content: 'Notices must be accessible to persons with disabilities...' }] }] }
        ]
      }
    ],
    assignments: [
      { id: 1, title: 'Build Consent Flow', description: 'Design a complete consent management flow for a web application', deliverables: ['Consent collection UI', 'Consent dashboard design', 'Consent withdrawal process', 'Audit trail design'] }
    ],
    quiz: {
      questions: [
        { question: 'What is the first step in consent management?', options: ['Collection', 'Withdrawal', 'Logging', 'Dashboard'], correct: 0 },
        { question: 'Layered notices help with:', options: ['Legal compliance', 'User understanding', 'Data storage', 'Security'], correct: 1 },
        { question: 'Consent receipts are important for:', options: ['Legal evidence', 'User trust', 'Data storage', 'Security'], correct: 0 },
        { question: 'Accessibility in notices means:', options: ['Easy to find', 'Easy to understand', 'Easy to read', 'All of the above'], correct: 3 },
        { question: 'Consent dashboard should allow:', options: ['View consent', 'Withdraw consent', 'Modify consent', 'All of the above'], correct: 3 }
      ],
      passingScore: 80
    },
    project: {
      title: 'Design Consent Dashboard',
      description: 'Create a comprehensive consent management dashboard for users',
      deliverables: ['Dashboard design', 'User flow', 'Consent display', 'Withdrawal mechanism']
    }
  },
  // ===== MODULE 6: Rights & Duties of Data Principal =====
  {
    id: 6,
    title: 'Rights & Duties of Data Principal',
    description: 'Understand the rights of individuals and their duties under DPDPA',
    duration: '6 Hours',
    icon: 'Users',
    chapters: [
      {
        id: 1,
        title: 'Data Principal Rights',
        lessons: [
          { id: 1, title: 'Right to Access', duration: '15 min', type: 'video', content: 'The right to access personal data...', learningObjectives: ['Understand right to access'], keyTakeaways: ['Data principals can access their data'], sections: [{ id: 'sec-1', title: 'Right to Access', content: [{ type: 'paragraph', content: 'Data principals have the right to access their personal data...' }] }] },
          { id: 2, title: 'Right to Correction', duration: '15 min', type: 'reading', content: 'The right to correct inaccurate data...', learningObjectives: ['Understand right to correction'], keyTakeaways: ['Data principals can correct inaccurate data'], sections: [{ id: 'sec-1', title: 'Right to Correction', content: [{ type: 'paragraph', content: 'Data principals have the right to correct inaccurate personal data...' }] }] },
          { id: 3, title: 'Right to Erasure', duration: '15 min', type: 'video', content: 'The right to be forgotten...', learningObjectives: ['Understand right to erasure'], keyTakeaways: ['Data principals can request deletion'], sections: [{ id: 'sec-1', title: 'Right to Erasure', content: [{ type: 'paragraph', content: 'Data principals have the right to request erasure of their data...' }] }] },
          { id: 4, title: 'Right to Nomination', duration: '10 min', type: 'reading', content: 'The right to nominate a representative...', learningObjectives: ['Understand right to nomination'], keyTakeaways: ['Data principals can nominate representatives'], sections: [{ id: 'sec-1', title: 'Right to Nomination', content: [{ type: 'paragraph', content: 'Data principals have the right to nominate a representative...' }] }] },
          { id: 5, title: 'Right to Grievance', duration: '15 min', type: 'video', content: 'The right to file grievances...', learningObjectives: ['Understand right to grievance'], keyTakeaways: ['Data principals can file grievances'], sections: [{ id: 'sec-1', title: 'Right to Grievance', content: [{ type: 'paragraph', content: 'Data principals have the right to file grievances...' }] }] },
          { id: 6, title: 'Right to Complaint', duration: '15 min', type: 'reading', content: 'The right to complain to the Board...', learningObjectives: ['Understand right to complaint'], keyTakeaways: ['Data principals can complain to the Board'], sections: [{ id: 'sec-1', title: 'Right to Complaint', content: [{ type: 'paragraph', content: 'Data principals have the right to complain to the Data Protection Board...' }] }] }
        ]
      },
      {
        id: 2,
        title: 'Duties of Data Principal',
        lessons: [
          { id: 7, title: 'False Information', duration: '15 min', type: 'video', content: 'Duty to provide accurate information...', learningObjectives: ['Understand duty to provide accurate information'], keyTakeaways: ['Data principals must provide accurate information'], sections: [{ id: 'sec-1', title: 'False Information', content: [{ type: 'paragraph', content: 'Data principals have a duty to provide accurate and truthful information...' }] }] },
          { id: 8, title: 'False Complaints', duration: '15 min', type: 'reading', content: 'Liability for false complaints...', learningObjectives: ['Understand liability for false complaints'], keyTakeaways: ['False complaints can lead to penalties'], sections: [{ id: 'sec-1', title: 'False Complaints', content: [{ type: 'paragraph', content: 'Data principals can be held liable for filing false complaints...' }] }] },
          { id: 9, title: 'Legal Liability', duration: '15 min', type: 'video', content: 'Understanding legal liability...', learningObjectives: ['Understand legal liability'], keyTakeaways: ['Data principals are subject to legal liability'], sections: [{ id: 'sec-1', title: 'Legal Liability', content: [{ type: 'paragraph', content: 'Data principals are subject to legal liability under the Act...' }] }] }
        ]
      }
    ],
    assignments: [
      { id: 1, title: 'Handle 10 User Requests', description: 'Simulate handling 10 different data principal rights requests', deliverables: ['Request log', 'Response templates', 'Time tracking', 'Resolution summary'] }
    ],
    quiz: {
      questions: [
        { question: 'How many rights do data principals have under DPDPA?', options: ['3', '4', '5', '6'], correct: 2 },
        { question: 'The right to erasure is also known as:', options: ['Right to delete', 'Right to be forgotten', 'Right to remove', 'Right to correct'], correct: 1 },
        { question: 'Nomination allows:', options: ['Appoint a representative', 'Transfer data', 'Withdraw consent', 'File complaint'], correct: 0 },
        { question: 'What is the duty of a data principal?', options: ['Provide false information', 'Make false complaints', 'Provide accurate information', 'Ignore data rights'], correct: 2 },
        { question: 'Grievance redressal is:', options: ['A right', 'A duty', 'Both', 'Neither'], correct: 0 }
      ],
      passingScore: 80
    },
    project: {
      title: 'Create Rights Portal',
      description: 'Design a portal where data principals can exercise all their rights',
      deliverables: ['Portal design', 'Request forms', 'Tracking dashboard', 'Notification system']
    }
  },
  // ===== MODULE 7: Obligations of Data Fiduciary =====
  {
    id: 7,
    title: 'Obligations of Data Fiduciary',
    description: 'Learn all obligations of data fiduciaries under DPDPA',
    duration: '10 Hours',
    icon: 'Building',
    chapters: [
      {
        id: 1,
        title: 'Security Safeguards',
        lessons: [
          { id: 1, title: 'Encryption', duration: '15 min', type: 'video', content: 'Implementing encryption...', learningObjectives: ['Understand encryption'], keyTakeaways: ['Encryption protects data at rest and in transit'], sections: [{ id: 'sec-1', title: 'Encryption', content: [{ type: 'paragraph', content: 'Encryption is a key security safeguard for protecting personal data...' }] }] },
          { id: 2, title: 'Authentication', duration: '15 min', type: 'reading', content: 'Authentication mechanisms...', learningObjectives: ['Understand authentication'], keyTakeaways: ['Authentication ensures only authorized access'], sections: [{ id: 'sec-1', title: 'Authentication', content: [{ type: 'paragraph', content: 'Authentication mechanisms ensure that only authorized persons can access data...' }] }] },
          { id: 3, title: 'Logging', duration: '10 min', type: 'video', content: 'Maintaining logs...', learningObjectives: ['Understand logging'], keyTakeaways: ['Logging enables audit and monitoring'], sections: [{ id: 'sec-1', title: 'Logging', content: [{ type: 'paragraph', content: 'Maintaining logs is essential for monitoring and auditing...' }] }] },
          { id: 4, title: 'Monitoring', duration: '15 min', type: 'reading', content: 'Continuous monitoring...', learningObjectives: ['Understand monitoring'], keyTakeaways: ['Monitoring detects security incidents'], sections: [{ id: 'sec-1', title: 'Monitoring', content: [{ type: 'paragraph', content: 'Continuous monitoring helps detect security incidents early...' }] }] },
          { id: 5, title: 'Access Control', duration: '20 min', type: 'video', content: 'Implementing access controls...', learningObjectives: ['Understand access control'], keyTakeaways: ['Access control limits data access'], sections: [{ id: 'sec-1', title: 'Access Control', content: [{ type: 'paragraph', content: 'Access controls ensure that only authorized persons can access data...' }] }] }
        ]
      },
      {
        id: 2,
        title: 'Data Management',
        lessons: [
          { id: 6, title: 'Purpose Limitation', duration: '15 min', type: 'video', content: 'Purpose limitation principle...', learningObjectives: ['Understand purpose limitation'], keyTakeaways: ['Data must be used only for specified purposes'], sections: [{ id: 'sec-1', title: 'Purpose Limitation', content: [{ type: 'paragraph', content: 'Purpose limitation means data can only be used for specified purposes...' }] }] },
          { id: 7, title: 'Storage Limitation', duration: '15 min', type: 'reading', content: 'Storage limitation principle...', learningObjectives: ['Understand storage limitation'], keyTakeaways: ['Data must not be stored longer than necessary'], sections: [{ id: 'sec-1', title: 'Storage Limitation', content: [{ type: 'paragraph', content: 'Storage limitation means data must not be stored for longer than necessary...' }] }] },
          { id: 8, title: 'Deletion', duration: '10 min', type: 'video', content: 'Deletion requirements...', learningObjectives: ['Understand deletion requirements'], keyTakeaways: ['Data must be deleted when no longer needed'], sections: [{ id: 'sec-1', title: 'Deletion', content: [{ type: 'paragraph', content: 'Data must be deleted when the purpose is achieved or consent is withdrawn...' }] }] },
          { id: 9, title: 'Retention', duration: '15 min', type: 'reading', content: 'Data retention policies...', learningObjectives: ['Design retention policies'], keyTakeaways: ['Retention policies must be documented'], sections: [{ id: 'sec-1', title: 'Retention', content: [{ type: 'paragraph', content: 'Data retention policies must be clearly documented and implemented...' }] }] }
        ]
      },
      {
        id: 3,
        title: 'Contractual Obligations',
        lessons: [
          { id: 10, title: 'Processor Contracts', duration: '20 min', type: 'video', content: 'Contracts with processors...', learningObjectives: ['Draft processor contracts'], keyTakeaways: ['Processor contracts must include specific clauses'], sections: [{ id: 'sec-1', title: 'Processor Contracts', content: [{ type: 'list', content: 'Key contract clauses', items: ['Data processing terms', 'Security requirements', 'Sub-processing provisions', 'Audit rights'] }] }] },
          { id: 11, title: 'Vendor Due Diligence', duration: '15 min', type: 'reading', content: 'Vendor assessment...', learningObjectives: ['Conduct vendor due diligence'], keyTakeaways: ['Vendor due diligence is mandatory'], sections: [{ id: 'sec-1', title: 'Vendor Due Diligence', content: [{ type: 'paragraph', content: 'Vendor due diligence involves assessing vendor compliance capabilities...' }] }] },
          { id: 12, title: 'Children Data', duration: '20 min', type: 'video', content: 'Processing children data...', learningObjectives: ['Understand children data processing'], keyTakeaways: ['Children data requires special protection'], sections: [{ id: 'sec-1', title: 'Children Data', content: [{ type: 'paragraph', content: 'Processing children\'s data requires special safeguards and parental consent...' }] }] },
          { id: 13, title: 'Parental Consent', duration: '15 min', type: 'reading', content: 'Parental consent requirements...', learningObjectives: ['Understand parental consent'], keyTakeaways: ['Parental consent is required for children under 18'], sections: [{ id: 'sec-1', title: 'Parental Consent', content: [{ type: 'paragraph', content: 'Parental consent is required for processing data of children under 18...' }] }] },
          { id: 14, title: 'Advertising Restrictions', duration: '10 min', type: 'video', content: 'Restrictions on advertising to children...', learningObjectives: ['Understand advertising restrictions'], keyTakeaways: ['Targeted advertising to children is restricted'], sections: [{ id: 'sec-1', title: 'Advertising Restrictions', content: [{ type: 'paragraph', content: 'Targeted advertising to children is restricted under the Act...' }] }] }
        ]
      }
    ],
    assignments: [
      { id: 1, title: 'Company Compliance Checklist', description: 'Create a comprehensive compliance checklist for your organization', deliverables: ['Security checklist', 'Data management checklist', 'Contractual checklist', 'Children data checklist'] }
    ],
    quiz: {
      questions: [
        { question: 'Encryption is a:', options: ['Security safeguard', 'Data management', 'Contractual obligation', 'Processing method'], correct: 0 },
        { question: 'Purpose limitation means:', options: ['Limit data collection', 'Limit data use', 'Limit data storage', 'Limit data sharing'], correct: 1 },
        { question: 'Vendor due diligence is:', options: ['Optional', 'Mandatory', 'Recommended', 'Not required'], correct: 1 },
        { question: 'Children data requires:', options: ['Simple consent', 'Parental consent', 'No consent', 'Government consent'], correct: 1 },
        { question: 'Storage limitation means:', options: ['Store all data', 'Store limited data', 'Store data for limited time', 'Store no data'], correct: 2 }
      ],
      passingScore: 80
    },
    project: {
      title: 'Company Compliance Checklist',
      description: 'Create a comprehensive compliance checklist for your organization',
      deliverables: ['Security checklist', 'Data management checklist', 'Contractual checklist', 'Children data checklist']
    }
  },
  // ===== MODULE 8: Significant Data Fiduciary (SDF) =====
  {
    id: 8,
    title: 'Significant Data Fiduciary (SDF)',
    description: 'Understand enhanced obligations for Significant Data Fiduciaries',
    duration: '6 Hours',
    icon: 'Star',
    chapters: [
      {
        id: 1,
        title: 'SDF Framework',
        lessons: [
          { id: 1, title: 'Government Notification', duration: '15 min', type: 'video', content: 'How SDFs are notified...', learningObjectives: ['Understand SDF notification'], keyTakeaways: ['Government notifies SDFs'], sections: [{ id: 'sec-1', title: 'SDF Notification', content: [{ type: 'paragraph', content: 'The Central Government notifies Significant Data Fiduciaries...' }] }] },
          { id: 2, title: 'Eligibility Criteria', duration: '20 min', type: 'reading', content: 'Who qualifies as SDF...', learningObjectives: ['Understand SDF eligibility'], keyTakeaways: ['SDF criteria include volume and sensitivity of data'], sections: [{ id: 'sec-1', title: 'SDF Eligibility', content: [{ type: 'paragraph', content: 'Eligibility criteria for SDF include volume and sensitivity of data...' }] }] },
          { id: 3, title: 'Risk Assessment', duration: '15 min', type: 'video', content: 'SDF risk assessment...', learningObjectives: ['Conduct SDF risk assessment'], keyTakeaways: ['SDFs must conduct regular risk assessments'], sections: [{ id: 'sec-1', title: 'SDF Risk Assessment', content: [{ type: 'paragraph', content: 'Significant Data Fiduciaries must conduct regular risk assessments...' }] }] },
          { id: 4, title: 'DPO Requirements', duration: '20 min', type: 'reading', content: 'DPO for SDFs...', learningObjectives: ['Understand DPO requirements'], keyTakeaways: ['SDFs must appoint a DPO'], sections: [{ id: 'sec-1', title: 'DPO Requirements', content: [{ type: 'paragraph', content: 'Significant Data Fiduciaries must appoint a Data Protection Officer...' }] }] },
          { id: 5, title: 'Independent Audit', duration: '15 min', type: 'video', content: 'Audit requirements for SDFs...', learningObjectives: ['Understand audit requirements'], keyTakeaways: ['SDFs must undergo independent audits'], sections: [{ id: 'sec-1', title: 'Independent Audit', content: [{ type: 'paragraph', content: 'Significant Data Fiduciaries must undergo independent audits...' }] }] }
        ]
      },
      {
        id: 2,
        title: 'SDF Compliance',
        lessons: [
          { id: 6, title: 'DPIA for SDFs', duration: '20 min', type: 'video', content: 'Data Protection Impact Assessments...', learningObjectives: ['Conduct DPIA'], keyTakeaways: ['DPIA is mandatory for SDFs'], sections: [{ id: 'sec-1', title: 'DPIA', content: [{ type: 'paragraph', content: 'Data Protection Impact Assessment is mandatory for Significant Data Fiduciaries...' }] }] },
          { id: 7, title: 'Compliance Reporting', duration: '15 min', type: 'reading', content: 'Reporting requirements...', learningObjectives: ['Understand reporting requirements'], keyTakeaways: ['SDFs must submit compliance reports'], sections: [{ id: 'sec-1', title: 'Compliance Reporting', content: [{ type: 'paragraph', content: 'Significant Data Fiduciaries must submit compliance reports to the Board...' }] }] },
          { id: 8, title: 'Governance Framework', duration: '20 min', type: 'video', content: 'SDF governance framework...', learningObjectives: ['Design SDF governance'], keyTakeaways: ['SDFs need strong governance frameworks'], sections: [{ id: 'sec-1', title: 'Governance Framework', content: [{ type: 'paragraph', content: 'SDFs must establish robust governance frameworks...' }] }] }
        ]
      }
    ],
    assignments: [
      { id: 1, title: 'SDF Readiness Assessment', description: 'Assess if your organization qualifies as an SDF and prepare for compliance', deliverables: ['Eligibility assessment', 'Gap analysis', 'Compliance roadmap'] }
    ],
    quiz: {
      questions: [
        { question: 'SDF notification is done by:', options: ['Board', 'Government', 'SDF itself', 'Individual'], correct: 1 },
        { question: 'SDFs require:', options: ['DPO', 'Audit', 'DPIA', 'All of the above'], correct: 3 },
        { question: 'Independent audit for SDFs is:', options: ['Optional', 'Mandatory', 'Recommended', 'Not required'], correct: 1 },
        { question: 'DPIA for SDFs must be:', options: ['Simple', 'Detailed', 'Both', 'None'], correct: 1 },
        { question: 'SDF stands for:', options: ['Significant Data Fiduciary', 'Simple Data Fiduciary', 'Standard Data Fiduciary', 'Special Data Fiduciary'], correct: 0 }
      ],
      passingScore: 80
    },
    project: {
      title: 'Create DPIA Report',
      description: 'Create a comprehensive DPIA report for a significant data fiduciary',
      deliverables: ['DPIA report', 'Risk assessment', 'Mitigation plan', 'Implementation roadmap']
    }
  },
  // ===== MODULE 9: Data Protection Board =====
  {
    id: 9,
    title: 'Data Protection Board',
    description: 'Understand the structure, functions, and proceedings of the Data Protection Board',
    duration: '5 Hours',
    icon: 'Scale',
    chapters: [
      {
        id: 1,
        title: 'Board Structure',
        lessons: [
          { id: 1, title: 'Composition', duration: '15 min', type: 'video', content: 'Board composition...', learningObjectives: ['Understand Board composition'], keyTakeaways: ['Board has a Chairperson and members'], sections: [{ id: 'sec-1', title: 'Board Composition', content: [{ type: 'paragraph', content: 'The Board consists of a Chairperson and other members...' }] }] },
          { id: 2, title: 'Appointment', duration: '15 min', type: 'reading', content: 'Appointment process...', learningObjectives: ['Understand appointment process'], keyTakeaways: ['Central Government appoints Board members'], sections: [{ id: 'sec-1', title: 'Appointment', content: [{ type: 'paragraph', content: 'Board members are appointed by the Central Government...' }] }] },
          { id: 3, title: 'Tenure', duration: '10 min', type: 'video', content: 'Tenure of Board members...', learningObjectives: ['Understand tenure'], keyTakeaways: ['Board members serve 5-year terms'], sections: [{ id: 'sec-1', title: 'Tenure', content: [{ type: 'paragraph', content: 'Board members serve for a term of 5 years...' }] }] }
        ]
      },
      {
        id: 2,
        title: 'Board Proceedings',
        lessons: [
          { id: 4, title: 'Complaint Process', duration: '20 min', type: 'video', content: 'How complaints are filed and handled...', learningObjectives: ['Understand complaint process'], keyTakeaways: ['Complaints can be filed with the Board'], sections: [{ id: 'sec-1', title: 'Complaint Process', content: [{ type: 'paragraph', content: 'Data principals can file complaints with the Board...' }] }] },
          { id: 5, title: 'Orders', duration: '15 min', type: 'reading', content: 'Types of orders issued...', learningObjectives: ['Understand Board orders'], keyTakeaways: ['Board can issue various types of orders'], sections: [{ id: 'sec-1', title: 'Orders', content: [{ type: 'paragraph', content: 'The Board can issue orders including directions, penalties, and compensation...' }] }] },
          { id: 6, title: 'Appeals', duration: '15 min', type: 'video', content: 'Appeals against Board orders...', learningObjectives: ['Understand appeals process'], keyTakeaways: ['Appeals can be filed with the Appellate Tribunal'], sections: [{ id: 'sec-1', title: 'Appeals', content: [{ type: 'paragraph', content: 'Appeals against Board orders can be filed with the Appellate Tribunal...' }] }] },
          { id: 7, title: 'Investigation', duration: '20 min', type: 'reading', content: 'Investigation process...', learningObjectives: ['Understand investigation process'], keyTakeaways: ['Board has investigation powers'], sections: [{ id: 'sec-1', title: 'Investigation', content: [{ type: 'paragraph', content: 'The Board has the power to investigate complaints...' }] }] },
          { id: 8, title: 'Enforcement', duration: '15 min', type: 'video', content: 'Enforcement powers...', learningObjectives: ['Understand enforcement powers'], keyTakeaways: ['Board can enforce compliance'], sections: [{ id: 'sec-1', title: 'Enforcement', content: [{ type: 'paragraph', content: 'The Board has enforcement powers to ensure compliance...' }] }] },
          { id: 9, title: 'Penalties', duration: '20 min', type: 'reading', content: 'Penalty framework...', learningObjectives: ['Understand penalty framework'], keyTakeaways: ['Board can impose penalties'], sections: [{ id: 'sec-1', title: 'Penalties', content: [{ type: 'paragraph', content: 'The Board can impose penalties for violations of the Act...' }] }] }
        ]
      }
    ],
    assignments: [
      { id: 1, title: 'Case Study Analysis', description: 'Analyze a hypothetical Board proceeding', deliverables: ['Case summary', 'Legal analysis', 'Possible outcomes'] }
    ],
    quiz: {
      questions: [
        { question: 'The Data Protection Board is established under:', options: ['Section 8', 'Section 10', 'Section 12', 'Section 15'], correct: 1 },
        { question: 'Who appoints Board members?', options: ['President', 'Prime Minister', 'Central Government', 'State Government'], correct: 2 },
        { question: 'Appeals against Board orders go to:', options: ['Supreme Court', 'High Court', 'Appellate Tribunal', 'Central Government'], correct: 2 },
        { question: 'The Board can impose penalties up to:', options: ['₹100 crore', '₹200 crore', '₹250 crore', '₹500 crore'], correct: 2 },
        { question: 'Board members are appointed for:', options: ['2 years', '3 years', '4 years', '5 years'], correct: 3 }
      ],
      passingScore: 80
    }
  },
  // ===== MODULE 10: Penalties & Enforcement =====
  {
    id: 10,
    title: 'Penalties & Enforcement',
    description: 'Understand the penalty framework and enforcement mechanisms',
    duration: '5 Hours',
    icon: 'AlertTriangle',
    chapters: [
      {
        id: 1,
        title: 'Penalty Framework',
        lessons: [
          { id: 1, title: 'Penalty Matrix', duration: '20 min', type: 'video', content: 'Understanding the penalty matrix...', learningObjectives: ['Understand penalty matrix'], keyTakeaways: ['Penalties are based on severity of violation'], sections: [{ id: 'sec-1', title: 'Penalty Matrix', content: [{ type: 'paragraph', content: 'The penalty matrix provides for graduated penalties...' }] }] },
          { id: 2, title: 'Fine Calculation', duration: '15 min', type: 'reading', content: 'How fines are calculated...', learningObjectives: ['Understand fine calculation'], keyTakeaways: ['Fines are based on criteria like intent, impact, cooperation'], sections: [{ id: 'sec-1', title: 'Fine Calculation', content: [{ type: 'paragraph', content: 'Fines are calculated based on various factors...' }] }] },
          { id: 3, title: 'Grounds for Penalty', duration: '20 min', type: 'video', content: 'Grounds for imposing penalties...', learningObjectives: ['Understand grounds for penalty'], keyTakeaways: ['Penalties are imposed for violations of the Act'], sections: [{ id: 'sec-1', title: 'Grounds for Penalty', content: [{ type: 'list', content: 'Grounds for penalty', items: ['Violation of Act', 'Failure to comply with Board orders', 'Breach of obligations', 'Unlawful processing'] }] }] },
          { id: 4, title: 'Mitigation', duration: '15 min', type: 'reading', content: 'Factors that can mitigate penalties...', learningObjectives: ['Understand mitigation factors'], keyTakeaways: ['Mitigation factors can reduce penalties'], sections: [{ id: 'sec-1', title: 'Mitigation', content: [{ type: 'paragraph', content: 'Mitigation factors include cooperation, first violation, and corrective action...' }] }] }
        ]
      },
      {
        id: 2,
        title: 'Enforcement',
        lessons: [
          { id: 5, title: 'Enforcement Process', duration: '20 min', type: 'video', content: 'How enforcement works...', learningObjectives: ['Understand enforcement process'], keyTakeaways: ['Enforcement involves investigation and orders'], sections: [{ id: 'sec-1', title: 'Enforcement Process', content: [{ type: 'paragraph', content: 'The enforcement process includes investigation, hearing, and orders...' }] }] },
          { id: 6, title: 'Case Studies', duration: '25 min', type: 'reading', content: 'Real-world enforcement cases...', learningObjectives: ['Analyze enforcement cases'], keyTakeaways: ['Case studies provide practical understanding'], sections: [{ id: 'sec-1', title: 'Case Studies', content: [{ type: 'paragraph', content: 'Real-world case studies provide insights into enforcement...' }] }] }
        ]
      }
    ],
    assignments: [
      { id: 1, title: 'Penalty Analysis', description: 'Analyze a scenario and determine applicable penalties', deliverables: ['Scenario analysis', 'Penalty calculation', 'Mitigation recommendations'] }
    ],
    quiz: {
      questions: [
        { question: 'Maximum penalty for a data fiduciary is:', options: ['₹50 crore', '₹100 crore', '₹250 crore', '₹500 crore'], correct: 2 },
        { question: 'Penalty is determined by:', options: ['Board', 'Court', 'Government', 'Commissioner'], correct: 0 },
        { question: 'Mitigation factors include:', options: ['Intent', 'Cooperation', 'First violation', 'All of the above'], correct: 3 },
        { question: 'Enforcement is done by:', options: ['Police', 'Board', 'Court', 'Government'], correct: 1 },
        { question: 'Appeals against penalties can be made:', options: ['Within 30 days', 'Within 45 days', 'Within 60 days', 'Within 90 days'], correct: 2 }
      ],
      passingScore: 80
    }
  },
  // ===== MODULE 11: Cross Border Data Transfer =====
  {
    id: 11,
    title: 'Cross Border Data Transfer',
    description: 'Understand the rules and requirements for cross-border data transfers',
    duration: '5 Hours',
    icon: 'Globe',
    chapters: [
      {
        id: 1,
        title: 'Transfer Rules',
        lessons: [
          { id: 1, title: 'Transfer to Restricted Countries', duration: '20 min', type: 'video', content: 'Rules for restricted countries...', learningObjectives: ['Understand transfer rules'], keyTakeaways: ['Restricted countries have additional requirements'], sections: [{ id: 'sec-1', title: 'Transfer Rules', content: [{ type: 'paragraph', content: 'Cross-border data transfers to restricted countries require compliance...' }] }] },
          { id: 2, title: 'Cloud Storage', duration: '15 min', type: 'reading', content: 'Cloud storage requirements...', learningObjectives: ['Understand cloud storage requirements'], keyTakeaways: ['Cloud storage must comply with DPDPA'], sections: [{ id: 'sec-1', title: 'Cloud Storage', content: [{ type: 'paragraph', content: 'Cloud storage of personal data must comply with DPDPA requirements...' }] }] },
          { id: 3, title: 'International Vendors', duration: '15 min', type: 'video', content: 'Vendor requirements...', learningObjectives: ['Understand vendor requirements'], keyTakeaways: ['International vendors must comply with DPDPA'], sections: [{ id: 'sec-1', title: 'International Vendors', content: [{ type: 'paragraph', content: 'International vendors processing Indian data must comply with DPDPA...' }] }] }
        ]
      }
    ],
    assignments: [],
    quiz: {
      questions: [
        { question: 'Cross-border transfer rules are under Section:', options: ['14', '15', '16', '17'], correct: 2 }
      ],
      passingScore: 80
    }
  },
  // ===== MODULE 12: Privacy Engineering =====
  {
    id: 12,
    title: 'Privacy Engineering',
    description: 'Learn technical implementation of data protection',
    duration: '10 Hours',
    icon: 'Wrench',
    chapters: [
      {
        id: 1,
        title: 'Technical Controls',
        lessons: [
          { id: 1, title: 'Encryption', duration: '20 min', type: 'video', content: 'Encryption implementation...', learningObjectives: ['Implement encryption'], keyTakeaways: ['Encryption is a core technical control'], sections: [{ id: 'sec-1', title: 'Encryption', content: [{ type: 'paragraph', content: 'Encryption is essential for protecting personal data...' }] }] },
          { id: 2, title: 'Hashing', duration: '15 min', type: 'reading', content: 'Hashing techniques...', learningObjectives: ['Understand hashing'], keyTakeaways: ['Hashing is used for data integrity'], sections: [{ id: 'sec-1', title: 'Hashing', content: [{ type: 'paragraph', content: 'Hashing is used to verify data integrity...' }] }] },
          { id: 3, title: 'Masking', duration: '15 min', type: 'video', content: 'Data masking...', learningObjectives: ['Implement data masking'], keyTakeaways: ['Masking protects data in non-production environments'], sections: [{ id: 'sec-1', title: 'Masking', content: [{ type: 'paragraph', content: 'Data masking replaces sensitive data with realistic but non-real values...' }] }] },
          { id: 4, title: 'Tokenization', duration: '15 min', type: 'reading', content: 'Tokenization techniques...', learningObjectives: ['Understand tokenization'], keyTakeaways: ['Tokenization replaces sensitive data with tokens'], sections: [{ id: 'sec-1', title: 'Tokenization', content: [{ type: 'paragraph', content: 'Tokenization replaces sensitive data with unique tokens...' }] }] }
        ]
      }
    ],
    assignments: [],
    quiz: {
      questions: [
        { question: 'Encryption is a:', options: ['Technical control', 'Legal requirement', 'Organizational control', 'Contractual control'], correct: 0 }
      ],
      passingScore: 80
    }
  },
  // ===== MODULE 13: Data Governance =====
  {
    id: 13,
    title: 'Data Governance',
    description: 'Learn how to establish data governance frameworks',
    duration: '8 Hours',
    icon: 'Database',
    chapters: [
      {
        id: 1,
        title: 'Data Inventory',
        lessons: [
          { id: 1, title: 'Data Mapping', duration: '20 min', type: 'video', content: 'Data mapping techniques...', learningObjectives: ['Map data flows'], keyTakeaways: ['Data mapping is essential for compliance'], sections: [{ id: 'sec-1', title: 'Data Mapping', content: [{ type: 'paragraph', content: 'Data mapping helps understand data flows...' }] }] },
          { id: 2, title: 'Metadata Management', duration: '15 min', type: 'reading', content: 'Managing metadata...', learningObjectives: ['Manage metadata'], keyTakeaways: ['Metadata provides context for data'], sections: [{ id: 'sec-1', title: 'Metadata', content: [{ type: 'paragraph', content: 'Metadata management is crucial for data governance...' }] }] },
          { id: 3, title: 'Data Classification', duration: '20 min', type: 'video', content: 'Classifying data...', learningObjectives: ['Classify data'], keyTakeaways: ['Classification enables appropriate protection'], sections: [{ id: 'sec-1', title: 'Data Classification', content: [{ type: 'paragraph', content: 'Data classification helps apply appropriate safeguards...' }] }] }
        ]
      }
    ],
    assignments: [],
    quiz: {
      questions: [
        { question: 'Data mapping helps:', options: ['Understand data flows', 'Store data', 'Delete data', 'Share data'], correct: 0 }
      ],
      passingScore: 80
    }
  },
  // ===== MODULE 14: Privacy Operations =====
  {
    id: 14,
    title: 'Privacy Operations',
    description: 'Learn operational aspects of data protection compliance',
    duration: '8 Hours',
    icon: 'BarChart',
    chapters: [
      {
        id: 1,
        title: 'Compliance Monitoring',
        lessons: [
          { id: 1, title: 'Vendor Assessment', duration: '15 min', type: 'video', content: 'Assessing vendors...', learningObjectives: ['Assess vendors'], keyTakeaways: ['Vendor assessment is mandatory'], sections: [{ id: 'sec-1', title: 'Vendor Assessment', content: [{ type: 'paragraph', content: 'Vendor assessment ensures third-party compliance...' }] }] },
          { id: 2, title: 'Internal Policies', duration: '20 min', type: 'reading', content: 'Developing policies...', learningObjectives: ['Develop policies'], keyTakeaways: ['Policies must be documented and implemented'], sections: [{ id: 'sec-1', title: 'Internal Policies', content: [{ type: 'paragraph', content: 'Internal policies guide compliance implementation...' }] }] },
          { id: 3, title: 'Training & Awareness', duration: '15 min', type: 'video', content: 'Training programs...', learningObjectives: ['Design training programs'], keyTakeaways: ['Training is essential for compliance'], sections: [{ id: 'sec-1', title: 'Training', content: [{ type: 'paragraph', content: 'Training programs build awareness and capabilities...' }] }] }
        ]
      }
    ],
    assignments: [],
    quiz: {
      questions: [
        { question: 'Vendor assessment is:', options: ['Required', 'Recommended', 'Optional', 'Not needed'], correct: 0 }
      ],
      passingScore: 80
    }
  },
  // ===== MODULE 15: Incident Response =====
  {
    id: 15,
    title: 'Incident Response',
    description: 'Learn how to respond to data breaches and security incidents',
    duration: '8 Hours',
    icon: 'AlertTriangle',
    chapters: [
      {
        id: 1,
        title: 'Incident Management',
        lessons: [
          { id: 1, title: 'Incident Detection', duration: '15 min', type: 'video', content: 'Detecting incidents...', learningObjectives: ['Detect incidents'], keyTakeaways: ['Early detection is critical'], sections: [{ id: 'sec-1', title: 'Incident Detection', content: [{ type: 'paragraph', content: 'Incident detection involves monitoring and alerting...' }] }] },
          { id: 2, title: 'Containment', duration: '15 min', type: 'reading', content: 'Containing incidents...', learningObjectives: ['Contain incidents'], keyTakeaways: ['Containment limits damage'], sections: [{ id: 'sec-1', title: 'Containment', content: [{ type: 'paragraph', content: 'Containment prevents further damage...' }] }] },
          { id: 3, title: 'Recovery', duration: '15 min', type: 'video', content: 'Recovering from incidents...', learningObjectives: ['Recover from incidents'], keyTakeaways: ['Recovery restores operations'], sections: [{ id: 'sec-1', title: 'Recovery', content: [{ type: 'paragraph', content: 'Recovery restores normal operations...' }] }] },
          { id: 4, title: 'Notification', duration: '20 min', type: 'reading', content: 'Notification requirements...', learningObjectives: ['Understand notification requirements'], keyTakeaways: ['Notification must be timely'], sections: [{ id: 'sec-1', title: 'Notification', content: [{ type: 'paragraph', content: 'Notification to the Board and affected individuals is mandatory...' }] }] }
        ]
      }
    ],
    assignments: [],
    quiz: {
      questions: [
        { question: 'Breach notification timeline is:', options: ['24 hours', '48 hours', '72 hours', '96 hours'], correct: 2 }
      ],
      passingScore: 80
    }
  },
  // ===== MODULE 16: Documentation & Compliance =====
  {
    id: 16,
    title: 'Documentation & Compliance',
    description: 'Learn to create all required compliance documents',
    duration: '10 Hours',
    icon: 'FileText',
    chapters: [
      {
        id: 1,
        title: 'Required Documents',
        lessons: [
          { id: 1, title: 'Privacy Policy', duration: '20 min', type: 'video', content: 'Drafting privacy policies...', learningObjectives: ['Draft privacy policies'], keyTakeaways: ['Privacy policy is a key compliance document'], sections: [{ id: 'sec-1', title: 'Privacy Policy', content: [{ type: 'paragraph', content: 'Privacy policies must be clear and comprehensive...' }] }] },
          { id: 2, title: 'Cookie Policy', duration: '15 min', type: 'reading', content: 'Cookie policies...', learningObjectives: ['Draft cookie policies'], keyTakeaways: ['Cookie policy must explain cookie use'], sections: [{ id: 'sec-1', title: 'Cookie Policy', content: [{ type: 'paragraph', content: 'Cookie policies must disclose cookie usage...' }] }] },
          { id: 3, title: 'Vendor Agreements', duration: '20 min', type: 'video', content: 'Vendor agreement drafting...', learningObjectives: ['Draft vendor agreements'], keyTakeaways: ['Vendor agreements must include data protection clauses'], sections: [{ id: 'sec-1', title: 'Vendor Agreements', content: [{ type: 'paragraph', content: 'Vendor agreements must include data protection provisions...' }] }] }
        ]
      }
    ],
    assignments: [],
    quiz: {
      questions: [
        { question: 'Privacy policy must include:', options: ['Data collection', 'Data use', 'Data rights', 'All of the above'], correct: 3 }
      ],
      passingScore: 80
    }
  },
  // ===== MODULE 17: AI & DPDPA =====
  {
    id: 17,
    title: 'AI & DPDPA',
    description: 'Understand the intersection of AI and data protection',
    duration: '8 Hours',
    icon: 'Brain',
    isNew: true,
    chapters: [
      {
        id: 1,
        title: 'AI Governance',
        lessons: [
          { id: 1, title: 'Generative AI', duration: '20 min', type: 'video', content: 'Generative AI and privacy...', learningObjectives: ['Understand generative AI impacts'], keyTakeaways: ['Generative AI raises new privacy concerns'], sections: [{ id: 'sec-1', title: 'Generative AI', content: [{ type: 'paragraph', content: 'Generative AI systems create new content and raise privacy concerns...' }] }] },
          { id: 2, title: 'LLMs & ChatGPT', duration: '15 min', type: 'reading', content: 'LLM privacy concerns...', learningObjectives: ['Understand LLM privacy risks'], keyTakeaways: ['LLMs can expose personal data'], sections: [{ id: 'sec-1', title: 'LLM Privacy', content: [{ type: 'paragraph', content: 'LLMs and ChatGPT systems can expose personal data in outputs...' }] }] },
          { id: 3, title: 'AI Risk Assessment', duration: '20 min', type: 'video', content: 'Assessing AI risks...', learningObjectives: ['Conduct AI risk assessment'], keyTakeaways: ['AI risk assessment is essential'], sections: [{ id: 'sec-1', title: 'AI Risk Assessment', content: [{ type: 'paragraph', content: 'AI systems require comprehensive risk assessment...' }] }] }
        ]
      }
    ],
    assignments: [],
    quiz: {
      questions: [
        { question: 'AI systems must:', options: ['Comply with DPDPA', 'Ignore DPDPA', 'Partially comply', 'No compliance needed'], correct: 0 }
      ],
      passingScore: 80
    }
  },
  // ===== MODULE 18: Global Privacy Laws =====
  {
    id: 18,
    title: 'Global Privacy Laws',
    description: 'Compare DPDPA with global privacy frameworks',
    duration: '8 Hours',
    icon: 'Globe',
    chapters: [
      {
        id: 1,
        title: 'International Frameworks',
        lessons: [
          { id: 1, title: 'GDPR', duration: '20 min', type: 'video', content: 'GDPR overview...', learningObjectives: ['Understand GDPR'], keyTakeaways: ['GDPR is the gold standard'], sections: [{ id: 'sec-1', title: 'GDPR', content: [{ type: 'paragraph', content: 'GDPR is the European Union\'s data protection framework...' }] }] },
          { id: 2, title: 'CCPA', duration: '15 min', type: 'reading', content: 'CCPA overview...', learningObjectives: ['Understand CCPA'], keyTakeaways: ['CCPA provides strong consumer rights'], sections: [{ id: 'sec-1', title: 'CCPA', content: [{ type: 'paragraph', content: 'CCPA gives California residents strong data rights...' }] }] },
          { id: 3, title: 'Singapore PDPA', duration: '20 min', type: 'video', content: 'Singapore PDPA...', learningObjectives: ['Understand Singapore PDPA'], keyTakeaways: ['Singapore PDPA is similar to DPDPA'], sections: [{ id: 'sec-1', title: 'Singapore PDPA', content: [{ type: 'paragraph', content: 'Singapore\'s PDPA provides a comprehensive data protection framework...' }] }] }
        ]
      }
    ],
    assignments: [],
    quiz: {
      questions: [
        { question: 'GDPR is from:', options: ['EU', 'US', 'India', 'Singapore'], correct: 0 }
      ],
      passingScore: 80
    }
  },
  // ===== MODULE 19: Industry Compliance =====
  {
    id: 19,
    title: 'Industry Compliance',
    description: 'Learn sector-specific compliance requirements',
    duration: '10 Hours',
    icon: 'Building',
    chapters: [
      {
        id: 1,
        title: 'Sector Requirements',
        lessons: [
          { id: 1, title: 'Healthcare', duration: '15 min', type: 'video', content: 'Healthcare compliance...', learningObjectives: ['Understand healthcare compliance'], keyTakeaways: ['Healthcare data requires special protection'], sections: [{ id: 'sec-1', title: 'Healthcare', content: [{ type: 'paragraph', content: 'Healthcare sector has specific data protection requirements...' }] }] },
          { id: 2, title: 'Banking', duration: '15 min', type: 'reading', content: 'Banking compliance...', learningObjectives: ['Understand banking compliance'], keyTakeaways: ['Banking sector has additional obligations'], sections: [{ id: 'sec-1', title: 'Banking', content: [{ type: 'paragraph', content: 'Banking sector must comply with RBI and DPDPA requirements...' }] }] },
          { id: 3, title: 'E-Commerce', duration: '20 min', type: 'video', content: 'E-Commerce compliance...', learningObjectives: ['Understand e-commerce compliance'], keyTakeaways: ['E-commerce platforms process large volumes of data'], sections: [{ id: 'sec-1', title: 'E-Commerce', content: [{ type: 'paragraph', content: 'E-commerce platforms must comply with DPDPA requirements...' }] }] }
        ]
      }
    ],
    assignments: [],
    quiz: {
      questions: [
        { question: 'Healthcare compliance includes:', options: ['Patient data', 'Financial data', 'Marketing data', 'Location data'], correct: 0 }
      ],
      passingScore: 80
    }
  },
  // ===== MODULE 20: Master Capstone Project =====
  {
    id: 20,
    title: 'Master Capstone Project',
    description: 'Build a complete DPDPA compliance program from scratch',
    duration: '20 Hours',
    icon: 'Award',
    chapters: [
      {
        id: 1,
        title: 'Capstone Project',
        lessons: [
          { id: 1, title: 'Project Overview', duration: '15 min', type: 'video', content: 'Understanding the capstone project...', learningObjectives: ['Understand capstone scope'], keyTakeaways: ['Capstone is the final assessment'], sections: [{ id: 'sec-1', title: 'Capstone Overview', content: [{ type: 'paragraph', content: 'The capstone project brings together all learning...' }] }] },
          { id: 2, title: 'Data Inventory', duration: '20 min', type: 'reading', content: 'Creating data inventory...', learningObjectives: ['Create data inventory'], keyTakeaways: ['Data inventory is the first step'], sections: [{ id: 'sec-1', title: 'Data Inventory', content: [{ type: 'paragraph', content: 'Creating a data inventory is the foundation of compliance...' }] }] },
          { id: 3, title: 'Compliance Plan', duration: '25 min', type: 'video', content: 'Building the compliance plan...', learningObjectives: ['Build compliance plan'], keyTakeaways: ['Compliance plan must be comprehensive'], sections: [{ id: 'sec-1', title: 'Compliance Plan', content: [{ type: 'paragraph', content: 'The compliance plan addresses all DPDPA requirements...' }] }] }
        ]
      }
    ],
    assignments: [],
    quiz: {
      questions: [
        { question: 'A compliance program must include:', options: ['Data inventory', 'Risk assessment', 'Policies', 'All of the above'], correct: 3 }
      ],
      passingScore: 80
    }
  }
];