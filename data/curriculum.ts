export interface CurriculumData {
  categories: Category[];
  courses: CourseInfo[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface CourseInfo {
  id: string;
  categoryId: string;
  title: string;
  description: string;
  estimatedModules: number;
}

export const curriculum: CurriculumData = {
  categories: [
    { id: 'cat-sci', name: 'Science', icon: 'science_icon' },
    { id: 'cat-hist', name: 'History', icon: 'history_icon' },
    { id: 'cat-tech', name: 'Technology', icon: 'tech_icon' },
    { id: 'cat-art', name: 'Arts & Design', icon: 'art_icon' },
    { id: 'cat-life', name: 'Life Skills', icon: 'life_icon' },
  ],
  courses: [
    {
      id: 'course-phy-001',
      categoryId: 'cat-sci',
      title: 'Basics of Newtonian Physics',
      description: "Quick insights into Newton's fundamental laws of motion.",
      estimatedModules: 5,
    },
    {
      id: 'course-bio-001',
      categoryId: 'cat-sci',
      title: 'Introduction to Cell Biology',
      description: 'Explore the basic building blocks of life: cells.',
      estimatedModules: 6,
    },
    {
      id: 'course-ast-001',
      categoryId: 'cat-sci',
      title: 'Our Solar System at a Glance',
      description:
        'A quick tour of the planets and major bodies in our solar system.',
      estimatedModules: 7,
    },
    {
      id: 'course-hist-002',
      categoryId: 'cat-hist',
      title: 'The Silk Road Essentials',
      description:
        'Explore the ancient trade network connecting East and West.',
      estimatedModules: 4,
    },
    {
      id: 'course-hist-003',
      categoryId: 'cat-hist',
      title: 'Intro to the Roman Empire',
      description: 'Key moments and figures from ancient Rome.',
      estimatedModules: 6,
    },
    {
      id: 'course-code-003',
      categoryId: 'cat-tech',
      title: 'JavaScript: Data Types Intro',
      description: 'Understand the basic data types used in JavaScript.',
      estimatedModules: 5,
    },
    {
      id: 'course-code-004',
      categoryId: 'cat-tech',
      title: 'HTML Fundamentals',
      description: 'Learn the basic structure of web pages with HTML.',
      estimatedModules: 7,
    },
    {
      id: 'course-code-005',
      categoryId: 'cat-tech',
      title: 'Intro to Python Syntax',
      description: "Get started with Python's basic commands and structure.",
      estimatedModules: 6,
    },
    {
      id: 'course-sec-001',
      categoryId: 'cat-tech',
      title: 'Cybersecurity Basics: Phishing',
      description: 'Learn to recognize and avoid common phishing scams.',
      estimatedModules: 4,
    },
    {
      id: 'course-art-001',
      categoryId: 'cat-art',
      title: 'Color Theory Basics',
      description:
        'Understand the fundamentals of color mixing, harmony, and contrast.',
      estimatedModules: 5,
    },
    {
      id: 'course-art-002',
      categoryId: 'cat-art',
      title: 'Intro to Graphic Design Principles',
      description:
        'Learn about balance, alignment, repetition, contrast, and hierarchy.',
      estimatedModules: 6,
    },
    {
      id: 'course-life-001',
      categoryId: 'cat-life',
      title: 'Personal Finance: Budgeting 101',
      description: 'Simple steps to create and stick to a personal budget.',
      estimatedModules: 5,
    },
    {
      id: 'course-life-002',
      categoryId: 'cat-life',
      title: 'Effective Communication Snippets',
      description: 'Quick tips for clearer conversations and active listening.',
      estimatedModules: 4,
    },
  ],
};
