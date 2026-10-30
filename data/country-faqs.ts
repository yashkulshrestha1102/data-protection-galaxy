// data/country-faqs.ts

import { countries } from './countries';

export interface CountryFAQ {
  q: string;
  a: string;
}

// =========================================================
// CUSTOM OVERRIDES (For E-E-A-T and Unique Content)
// =========================================================
const specialCountryFaqs: Record<string, CountryFAQ[]> = {
  // --- Top Countries ---
  india: [
    {
      q: "What is the penalty for a data breach under India's DPDP Act 2023?",
      a: "Under the DPDP Act 2023, failure to take reasonable security safeguards to prevent a personal data breach can attract a penalty of up to ₹250 crore. Failure to notify a breach can attract an additional penalty of up to ₹200 crore."
    },
    {
      q: "Does India's DPDP Act require data localisation?",
      a: "No, the DPDP Act does not mandate general data localisation. However, the government can restrict data transfers to specific countries. Additionally, sectoral laws like RBI's payment data rules and IRDAI regulations require localisation for specific data types."
    },
    {
      q: "Is a Data Protection Officer (DPO) mandatory in India?",
      a: "A DPO is mandatory only for Significant Data Fiduciaries (SDFs) notified by the Central Government under Section 10 of the DPDP Act. Regular Data Fiduciaries are not required to appoint a DPO."
    },
    {
      q: "Who is the regulatory authority in India for data protection?",
      a: "The Data Protection Board of India (DPBI) is the regulatory authority established under the DPDP Act 2023. It is responsible for enforcing the Act, investigating data breaches, and imposing penalties."
    }
  ],
  eu: [
    {
      q: "What is the maximum penalty for a data breach under GDPR?",
      a: "Under the GDPR, organizations can be fined up to €20 million or 4% of their global annual turnover (whichever is higher) for the most serious violations, including failure to protect personal data or unlawful processing."
    },
    {
      q: "Is data localisation required under GDPR?",
      a: "No. GDPR does not require data localisation. In fact, it promotes the free flow of data within the EU. However, transfers outside the EU require an adequacy decision or standard contractual clauses (SCCs)."
    },
    {
      q: "Is a DPO mandatory under GDPR?",
      a: "A Data Protection Officer (DPO) is mandatory for public authorities and organizations whose core activities involve regular and systematic monitoring of data subjects on a large scale, or large-scale processing of sensitive data."
    },
    {
      q: "Who enforces GDPR?",
      a: "The GDPR is enforced by the European Data Protection Board (EDPB) and national supervisory authorities (like the CNIL in France) in each EU member state."
    }
  ],
  usa: [
    {
      q: "What is the penalty for a data breach under US privacy laws like CCPA?",
      a: "Under the CCPA/CPRA in California, businesses can be fined up to $2,500 per violation, or $7,500 per intentional violation or violation involving minors. This can be significantly higher in a data breach affecting many consumers."
    },
    {
      q: "Does the US require data localisation?",
      a: "There is no general data localisation mandate in the US. However, specific sectors like healthcare (HIPAA) and finance (GLBA) have strict data security and residency requirements."
    },
    {
      q: "Who regulates data protection in the US?",
      a: "The US has a patchwork of state laws (like CCPA in California) enforced by State Attorneys General. At the federal level, the FTC and specific agencies (like HHS for HIPAA) enforce sectoral privacy rules."
    }
  ],
  uk: [
    {
      q: "What is the maximum penalty for a data breach under UK GDPR?",
      a: "Under the UK GDPR and Data Protection Act 2018, the maximum fine is £17.5 million or 4% of global annual turnover, whichever is higher."
    },
    {
      q: "Does the UK require data localisation?",
      a: "No, the UK does not require data localisation. The UK follows a similar approach to the EU, allowing international transfers to countries deemed adequate by the UK government."
    },
    {
      q: "Who regulates data protection in the UK?",
      a: "The Information Commissioner's Office (ICO) is the independent regulatory authority responsible for enforcing data protection laws in the UK."
    }
  ],

  // =========================================================
  // NEW CUSTOM OVERRIDES (To fix Thin Content & GSC Indexing)
  // =========================================================
  algeria: [
    {
      q: "Does Algeria require a Data Protection Officer (DPO)?",
      a: "Algeria's Law 18-07 does not mandate a DPO for every company. However, the ANPDP (regulator) requires organizations processing sensitive data (like health or financial records) to designate a 'Data Protection Correspondent'. Indian companies entering Algeria should appoint one for high-risk processing."
    },
    {
      q: "What are the breach notification requirements in Algeria?",
      a: "Algeria's law has limited breach notification requirements. Unlike GDPR's strict 72-hour deadline, there is no explicit mandate to notify the ANPDP or affected individuals immediately. However, organizations should still maintain robust internal incident response plans."
    },
    {
      q: "How does Algeria handle cross-border data transfers?",
      a: "Cross-border transfers are permitted only if the receiving country provides an 'adequate level of protection' as determined by the ANPDP. Transfers without adequate protection require explicit authorization from the ANPDP."
    }
  ],
  madagascar: [
    {
      q: "What are the breach notification requirements in Madagascar?",
      a: "Madagascar's Law 2014-038 has very limited breach notification requirements. It may only require notifying the CMIL (regulator) without mandating notification to affected individuals. Organizations should still follow best practices."
    },
    {
      q: "Does Madagascar require a Data Protection Officer (DPO)?",
      a: "Partially. The law may require a DPO only for specific high-risk organizations or public bodies. It is not universally mandatory for all private businesses."
    },
    {
      q: "How does Madagascar handle data localisation?",
      a: "Madagascar does not mandate general data localisation. However, specific sectoral laws (like finance or health) might require data to be stored locally. Cross-border transfers typically require adequate protection."
    }
  ],
  serbia: [
    {
      q: "Is Serbia's data protection law aligned with GDPR?",
      a: "Yes, Serbia's 2018 Law on Personal Data Protection is heavily aligned with GDPR. If your organization is already GDPR-compliant, you have completed about 80% of the work needed for Serbia."
    },
    {
      q: "Does Serbia require a Data Protection Officer (DPO)?",
      a: "A DPO is mandatory for public authorities and organizations conducting large-scale systematic monitoring or processing sensitive data. For most Indian SMEs, it is not mandatory unless they meet these thresholds."
    },
    {
      q: "How does Serbia regulate cross-border data transfers?",
      a: "Transfers outside Serbia are allowed only to countries on the 'adequate protection' list or under specific safeguards like Standard Contractual Clauses (SCCs) approved by the Commissioner."
    }
  ],
  armenia: [
    {
      q: "What are the data localisation rules in Armenia?",
      a: "Armenia does not have a general data localisation mandate. However, the law requires that cross-border transfers only happen to countries with 'adequate' protection. The Ministry of Justice maintains a list of such countries."
    },
    {
      q: "Does Armenia require a Data Protection Officer (DPO)?",
      a: "Partially. The Law on Protection of Personal Data (2015) may require a DPO only for specific high-risk organizations or sectors. It is not universally mandatory for all businesses."
    },
    {
      q: "What are the breach notification requirements in Armenia?",
      a: "Armenia's law has limited breach notification requirements. It may only require notifying the regulator (Ministry of Justice) without explicitly mandating notification to affected individuals."
    }
  ],
  rwanda: [
    {
      q: "Does Rwanda require a Data Protection Officer (DPO)?",
      a: "Yes, Rwanda's Law No. 058/2021 mandates the appointment of a Data Protection Officer (DPO) for all organizations processing personal data, making it stricter than many other African jurisdictions."
    },
    {
      q: "What are the breach notification timelines in Rwanda?",
      a: "Under the Law No. 058/2021, organizations must notify the National Cyber Security Authority (NCSA) and affected individuals 'without undue delay' in the event of a personal data breach."
    },
    {
      q: "How does Rwanda handle cross-border data transfers?",
      a: "Transfers are permitted to countries with adequate data protection laws. If transferred to a country without adequate protection, the data controller must ensure appropriate safeguards are in place or obtain explicit consent."
    }
  ],
  uzbekistan: [
    {
      q: "What are the data localisation rules in Uzbekistan?",
      a: "Uzbekistan's Law on Personal Data (2019) has strict localisation requirements. Personal data of Uzbek citizens must be stored on servers physically located within Uzbekistan. This is a critical requirement for Indian tech companies operating there."
    },
    {
      q: "Does Uzbekistan require a Data Protection Officer (DPO)?",
      a: "Partially. The law may require a DPO only for specific high-risk organizations or sectors. It is not universally mandatory for all businesses."
    },
    {
      q: "What are the breach notification requirements in Uzbekistan?",
      a: "Uzbekistan's law has limited breach notification requirements. It may only require notifying the regulator (Personalization Agency) without mandating notification to affected individuals."
    }
  ],
  kyrgyzstan: [
    {
      q: "What are the penalties for non-compliance in Kyrgyzstan?",
      a: "Kyrgyzstan's data protection framework (2008) is outdated and enforcement is weak. There are no significant penalties for non-compliance compared to modern laws like GDPR or DPDPA. However, organizations should still follow best practices."
    },
    {
      q: "Does Kyrgyzstan require a Data Protection Officer (DPO)?",
      a: "Partially. The law may require a DPO only for specific high-risk organizations or sectors. It is not universally mandatory for all businesses."
    },
    {
      q: "How does Kyrgyzstan handle cross-border data transfers?",
      a: "Cross-border transfers are generally permitted, but the law allows the state to restrict transfers to countries that do not provide adequate protection for personal data."
    }
  ],
  'north-macedonia': [
    {
      q: "Is North Macedonia's data protection law aligned with GDPR?",
      a: "Yes, North Macedonia's 2020 Law on Personal Data Protection is broadly aligned with European standards. The Agency for Personal Data Protection (AZLP) supervises compliance."
    },
    {
      q: "What are the breach notification requirements in North Macedonia?",
      a: "Under the 2020 Law, organizations must notify the Agency for Personal Data Protection (AZLP) and affected individuals without undue delay. This is similar to GDPR's 72-hour rule."
    },
    {
      q: "Does North Macedonia require a Data Protection Officer (DPO)?",
      a: "Partially. A DPO is required only for public authorities and organizations conducting large-scale monitoring or processing sensitive data. It is not universally mandatory."
    }
  ],
  'costa-rica': [
    {
      q: "What is the penalty for a data breach in Costa Rica?",
      a: "Under Law No. 8968, penalties for data breaches can include heavy fines and even criminal sanctions (imprisonment) depending on the severity of the breach and whether it was intentional."
    },
    {
      q: "Does Costa Rica require a Data Protection Officer (DPO)?",
      a: "Partially. While there is no universal DPO mandate, organizations processing sensitive data or large volumes of personal data are expected to have a designated privacy officer or department."
    },
    {
      q: "How does Costa Rica handle cross-border data transfers?",
      a: "Cross-border transfers require the receiving country to have an adequate level of data protection, or the transfer must be covered by specific contractual safeguards authorized by PRODHAB."
    }
  ]
};

// =========================================================
// DYNAMIC GENERATOR (For the remaining 80+ countries)
// =========================================================
const generateFaqsForCountry = (countryId: string): CountryFAQ[] => {
  // 1. Check if custom FAQs exist
  if (specialCountryFaqs[countryId]) {
    return specialCountryFaqs[countryId];
  }

  // 2. Generate default FAQs based on topics
  const country = countries.find(c => c.id === countryId);
  if (!country) return [];

  const dpoTopic = country.topics.find(t => t.title === 'DPO Requirements');
  const localisationTopic = country.topics.find(t => t.title === 'Data Localisation');
  const breachTopic = country.topics.find(t => t.title === 'Breach Notification');

  return [
    {
      q: `What is the primary data protection law in ${country.name}?`,
      a: `${country.name} is governed by the ${country.lawName}. The law is enforced by the ${country.authority}. According to our analysis, the country has a ${country.level} level of data protection framework.`
    },
    {
      q: `Does ${country.name} require a Data Protection Officer (DPO)?`,
      a: dpoTopic?.status === 'Addressed' 
        ? `Yes, under the ${country.lawName}, organizations are generally required to appoint a Data Protection Officer (DPO) or a similar privacy officer to ensure compliance.`
        : dpoTopic?.status === 'Partial'
        ? `Partially. The ${country.lawName} may require a DPO only for specific high-risk organizations or sectors. It is not universally mandatory for all businesses.`
        : `No, the ${country.lawName} does not explicitly mandate the appointment of a Data Protection Officer (DPO) for most organizations.`
    },
    {
      q: `What are the data localisation rules in ${country.name}?`,
      a: localisationTopic?.status === 'Addressed'
        ? `Yes, ${country.name} has strict data localisation requirements. The ${country.lawName} may require certain types of personal data to be stored within the country's borders.`
        : localisationTopic?.status === 'Partial'
        ? `Partially. While ${country.lawName} may not mandate general localisation, specific sectoral laws (like finance or health) might require data to be stored locally.`
        : `No, ${country.name} does not generally require data localisation under the ${country.lawName}. Cross-border transfers are typically allowed with certain safeguards.`
    },
    {
      q: `What are the breach notification requirements in ${country.name}?`,
      a: breachTopic?.status === 'Addressed'
        ? `Under the ${country.lawName}, organizations must notify the ${country.authority} and affected individuals without undue delay in the event of a personal data breach.`
        : breachTopic?.status === 'Partial'
        ? `The ${country.lawName} has limited breach notification requirements. It may only require notifying the regulator, without mandating notification to affected individuals.`
        : `Currently, the ${country.lawName} does not impose strict mandatory breach notification requirements for all data breaches.`
    }
  ];
};

// Main Export Function
export const getCountryFaqs = (countryId: string): CountryFAQ[] => {
  return generateFaqsForCountry(countryId);
};