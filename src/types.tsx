// Category types
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

export interface CurriculumData {
  categories: Category[];
  courses: CourseInfo[];
}

// Module types
export type ModuleType = 'video' | 'text' | 'animation' | 'quiz';

export interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface VideoContent {
  title: string;
  videoUrl: string;
  thumbnailUrl: string;
  duration: number;
}

export interface TextContent {
  title: string;
  markupContent: string;
  imageUrl?: string;
}

export interface AnimationContent {
  title: string;
  animationUrl: string;
  type: string;
  caption: string;
}

export interface QuizContent {
  questionText: string;
  options: Option[];
  feedbackCorrect: string;
  feedbackIncorrect: string;
}

export interface Module {
  id: string;
  moduleType: ModuleType;
  content: VideoContent | TextContent | AnimationContent | QuizContent;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  modules: Module[];
}

// Enriched course with category information
export interface EnrichedCourse extends Course {
  categoryName: string;
}

export interface CourseData {
  microCourses: Course[];
}
