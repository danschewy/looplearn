interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

interface QuizContent {
  questionText: string;
  options: QuizOption[];
  feedbackCorrect: string;
  feedbackIncorrect: string;
}

interface VideoContent {
  title: string;
  videoUrl: string;
  thumbnailUrl: string;
  duration: number;
}

interface TextContent {
  title: string;
  markupContent: string;
  imageUrl?: string;
}

interface AnimationContent {
  title: string;
  animationUrl: string;
  type: 'lottie' | 'gif';
  caption?: string;
}

type ModuleContent =
  | VideoContent
  | TextContent
  | AnimationContent
  | QuizContent;

interface Module {
  id: string;
  moduleType: 'video' | 'text' | 'animation' | 'quiz';
  content: ModuleContent;
}

interface MicroCourse {
  id: string;
  title: string;
  description: string;
  modules: Module[];
}

interface MicroCoursesData {
  microCourses: MicroCourse[];
}

export type {
  QuizOption,
  QuizContent,
  VideoContent,
  TextContent,
  AnimationContent,
  ModuleContent,
  Module,
  MicroCourse,
  MicroCoursesData,
};

// Or, if you prefer a single default export:
// export default interface MicroCoursesData {
//   microCourses: MicroCourse[];
// }
