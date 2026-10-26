// data/authors.ts

export interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  credentials: string[];
  linkedin?: string;
}

export const authors: Record<string, Author> = {
  'shilpi-kulshrestha': {
    id: 'shilpi-kulshrestha',
    name: 'Shilpi Kulshrestha',
    role: 'Founder & Corporate Law Expert, BusinezExcellence',
    bio: 'Shilpi is a corporate lawyer with over a decade of experience in data protection, company law, and regulatory compliance. She has advised 50+ startups and enterprises on DPDPA readiness, privacy governance, and AI compliance. She is a Company Secretary and holds an LLB degree, and writes regularly on India\'s evolving data protection landscape.',
    image: '/images/profileoffounder.jpeg',
    credentials: ['Company Secretary (CS)', 'LLB', 'DPDPA Specialist'],
    linkedin: 'https://www.linkedin.com/company/businezexcellence-com/',
  },
};

export const getAuthorById = (id: string): Author | undefined => {
  return authors[id];
};

export const defaultAuthor = authors['shilpi-kulshrestha'];
