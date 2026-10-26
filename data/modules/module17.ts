// data/modules/module17.ts

import { Module } from '@/app/types/course';

export const module17: Module = {
  id: 17,
  title: 'AI & DPDPA',
  description:
    'Understand the intersection of artificial intelligence and data protection. This module explores how the DPDPA applies to AI systems, the risks of generative AI (like ChatGPT), algorithmic bias, and the emerging regulations for responsible AI governance.',
  duration: '8 Hours',
  icon: 'Brain',
  isNew: true,
  learningObjectives: [
    'Understand how AI systems use personal data',
    'Analyze the privacy risks of Generative AI and Large Language Models (LLMs)',
    'Learn how to apply DPDPA principles (consent, purpose limitation) to AI training',
    'Understand the concept of algorithmic bias and automated decision-making',
    'Explore the global landscape of AI regulation (EU AI Act, etc.)',
  ],
  chapters: [
    // ============================================================
    // CHAPTER 1: AI GOVERNANCE
    // ============================================================
    {
      id: 1,
      title: 'AI Governance',
      lessons: [
        {
          id: 1,
          title: 'Generative AI',
          duration: '20 min',
          type: 'video',
          description: 'How AI models are trained and why it is a privacy risk.',
          content:
            'Generative AI models (like ChatGPT or Midjourney) are trained on massive datasets scraped from the internet. This data often includes personal information.',
          learningObjectives: [
            'Understand how Generative AI works',
            'Analyze the privacy risks of training data',
          ],
          keyTakeaways: [
            'AI models need vast amounts of data to learn.',
            'If the training data includes personal data, the model may "memorize" it.',
            'The DPDPA applies to the processing of personal data for AI training.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Training Data Problem',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Generative AI models are trained on billions of web pages, books, and images. If a blog post contains your name, email, or health information, that data might be ingested by an AI model.',
                },
                {
                  type: 'paragraph',
                  content:
                    'Under the DPDPA, collecting this data without consent or a legitimate use is a violation. The Act requires a lawful basis for *any* processing, including AI training.',
                },
                {
                  type: 'callout',
                  content:
                    'If you scrape the internet to train an AI model, you are processing personal data. You must ensure you have a legal basis for this processing under the DPDPA.',
                  calloutType: 'warning',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Generative AI', definition: 'Artificial intelligence systems that can generate text, images, or other data in response to prompts.' },
            { term: 'Training Data', definition: 'The dataset used to teach an AI model how to perform its task.' },
          ],
          references: [
            { title: 'DPDPA Section 4', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 2,
          title: 'LLMs & ChatGPT',
          duration: '15 min',
          type: 'reading',
          description: 'The specific privacy issues with Large Language Models.',
          content:
            'Large Language Models (LLMs) can accidentally reveal sensitive personal data in their responses.',
          learningObjectives: [
            'Understand the concept of memorization in LLMs',
            'Learn about prompt injection and data leakage',
          ],
          keyTakeaways: [
            'LLMs can hallucinate (make up) personal data.',
            'LLMs can sometimes be tricked into revealing their training data.',
            'Companies must be careful about putting personal data into public AI tools.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Memorization and Leakage',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'If an LLM is trained on a dataset containing your phone number, and someone asks the model "What is [Your Name]\'s phone number?", the model might output the correct number if it has memorized it.',
                },
                {
                  type: 'paragraph',
                  content:
                    'Similarly, if an employee pastes customer data into ChatGPT to analyze it, that data becomes part of the AI provider\'s ecosystem, potentially violating the DPDPA.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'LLM', definition: 'Large Language Model, a type of AI trained on vast amounts of text data to understand and generate human-like language.' },
            { term: 'Hallucination', definition: 'When an AI model generates false or misleading information that is not based on its training data.' },
          ],
          references: [
            { title: 'AI Privacy Risks', source: 'Stanford HAI', year: '2023' },
          ],
        },
        {
          id: 3,
          title: 'AI Risk Assessment',
          duration: '20 min',
          type: 'video',
          description: 'How to assess the risks of an AI system.',
          content:
            'Before deploying an AI system, you must conduct an AI Risk Assessment, similar to a DPIA.',
          learningObjectives: [
            'Learn the steps of an AI risk assessment',
            'Understand the different categories of AI risk',
          ],
          keyTakeaways: [
            'AI risk assessment covers privacy, bias, and security.',
            'High-risk AI systems require stricter controls.',
            'Documentation is essential for compliance.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The AI Risk Framework',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'An AI risk assessment evaluates:',
                },
                {
                  type: 'list',
                  content: 'AI Risk Categories',
                  items: [
                    'Privacy Risk: Does the AI process personal data? Is there a lawful basis?',
                    'Bias Risk: Is the AI biased against certain groups based on race, gender, etc.?',
                    'Security Risk: Can the AI be manipulated or hacked?',
                    'Transparency Risk: Can the AI explain its decisions?',
                    'Human Oversight Risk: Is there a human in the loop for critical decisions?',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The DPDPA requires Data Fiduciaries to ensure data accuracy. If an AI makes decisions based on biased or inaccurate data, the company is liable.',
                  calloutType: 'important',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Algorithmic Bias', definition: 'Systematic and repeatable errors in a computer system that create unfair outcomes.' },
            { term: 'Human in the Loop', definition: 'A model that requires human interaction or oversight for decision-making.' },
          ],
          references: [
            { title: 'NIST AI Risk Management Framework', source: 'NIST', year: '2023' },
          ],
        },
      ],
    },
  ],

  // ===== MODULE ASSIGNMENTS =====
  assignments: [
    {
      id: 1,
      title: 'AI Risk Assessment Report',
      description:
        'Select an AI tool your company uses (or a hypothetical one) and conduct a brief AI risk assessment.',
      deliverables: [
        'Description of the AI system',
        'Privacy and bias risks identified',
        'Mitigation measures proposed',
      ],
    },
  ],

  // ===== MODULE QUIZ =====
  quiz: {
    questions: [
      {
        question: 'AI systems must:',
        options: ['Comply with DPDPA', 'Ignore DPDPA', 'Partially comply', 'No compliance needed'],
        correct: 0,
        explanation: 'The DPDPA applies to any processing of personal data, including processing by AI systems.',
      },
      {
        question: 'What is a risk of Generative AI?',
        options: ['It uses no data', 'It can memorize and reveal personal data', 'It is always accurate', 'It is free'],
        correct: 1,
        explanation: 'Generative AI models can memorize training data and potentially reveal personal information.',
      },
      {
        question: 'What does LLM stand for?',
        options: ['Large Language Model', 'Local Logic Machine', 'Linear Learning Method', 'Low Latency Memory'],
        correct: 0,
        explanation: 'LLM stands for Large Language Model, like ChatGPT.',
      },
      {
        question: 'Why is AI risk assessment important?',
        options: ['To increase sales', 'To identify privacy, bias, and security risks', 'To reduce costs', 'To train employees'],
        correct: 1,
        explanation: 'AI risk assessments help identify and mitigate risks related to privacy, bias, security, and transparency.',
      },
    ],
    passingScore: 80,
  },
};
