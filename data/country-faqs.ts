// data/country-faqs.ts

import { countries } from './countries';

export interface CountryFAQ {
  q: string;
  a: string;
}

// Special Hardcoded FAQs for Top Countries (For highest accuracy and GEO impact)
const specialCountryFaqs: Record<string, CountryFAQ[]> = {
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
  ]
};

// Helper function: Dynamically generate FAQs for the rest of the 80+ countries
const generateFaqsForCountry = (countryId: string): CountryFAQ[] => {
  // 1. Agar top country hai, toh hardcoded data return karo
  if (specialCountryFaqs[countryId]) {
    return specialCountryFaqs[countryId];
  }

  // 2. Agar baaki koi country hai, toh data extract karke FAQ banao
  const country = countries.find(c => c.id === countryId);
  if (!country) return [];

  // Check topics for specific statuses
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
