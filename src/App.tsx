import { useState } from 'react';
import './App.css';
import { LoopConfigScreen } from './components/LoopConfigScreen.jsx';
import { LearningScreen } from './components/LearningScreen.jsx';
import { curriculum } from '../data/curriculum.js';
import { microCourses } from '../data/courses.js';
import type { EnrichedCourse } from './types.js';

// --- Course and Curriculum Data Types ---
// Mock data load - in a real app, you would fetch this from an API
// Curriculum data (categories and course listings)
const curriculumData = curriculum;

// Detailed courses data (modules and content)
const coursesData = microCourses;

// Create a mapping of courses with their category information
const enrichedCourses: EnrichedCourse[] = coursesData.microCourses.map(
  (course) => {
    // Find the course info from the curriculum
    const courseInfo = curriculumData.courses.find((c) => c.id === course.id);

    if (courseInfo) {
      // Find the category for this course
      const category = curriculumData.categories.find(
        (cat) => cat.id === courseInfo.categoryId,
      );

      // Return the enriched course with category name
      return {
        ...course,
        categoryName: category ? category.name : 'Uncategorized',
      };
    }

    // If not found, assign a default category
    return {
      ...course,
      categoryName: 'Uncategorized',
    };
  },
);

// Group courses by category for the config screen
const coursesByCategory = enrichedCourses.reduce(
  (acc, course) => {
    const categoryName = course.categoryName;

    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }

    acc[categoryName].push(course);
    return acc;
  },
  {} as Record<string, EnrichedCourse[]>,
);

// Helper to initialize module indices state (start everyone at module 0)
const initialModuleIndices = enrichedCourses.reduce(
  (acc, course) => {
    acc[course.id] = 0;
    return acc;
  },
  {} as Record<string, number>,
);

export function App() {
  // App screen state
  const [currentScreen, setCurrentScreen] = useState<'config' | 'learning'>(
    'config',
  );

  // Active courses
  const [activeCourseIds, setActiveCourseIds] = useState<string[]>(
    enrichedCourses.map((course) => course.id),
  );

  // Filtered courses based on selection
  const activeCourses = enrichedCourses.filter((course) =>
    activeCourseIds.includes(course.id),
  );

  // State for the active course index (vertical position)
  const [activeCourseIndex, setActiveCourseIndex] = useState(0);

  // State for the current module index within each course (horizontal position)
  const [moduleIndices, setModuleIndices] =
    useState<Record<string, number>>(initialModuleIndices);

  // Handle start learning
  const handleStartLearning = (selectedCourseIds: string[]) => {
    if (selectedCourseIds.length === 0) {
      // Alert user they need to select at least one course
      alert('Please select at least one course to start learning');
      return;
    }

    setActiveCourseIds(selectedCourseIds);
    setCurrentScreen('learning');
  };

  // Handle go back
  const handleGoBack = () => {
    // Could navigate to a welcome screen or other previous screen
    console.log('Go back clicked');
  };

  // --- Handle Navigation ---
  const handleNextCourse = () => {
    setActiveCourseIndex((prevIndex) => (prevIndex + 1) % activeCourses.length); // Loop back
  };

  const handlePrevCourse = () => {
    setActiveCourseIndex(
      (prevIndex) =>
        (prevIndex - 1 + activeCourses.length) % activeCourses.length,
    ); // Loop back
  };

  const handleNextModule = () => {
    const currentCourse = activeCourses[activeCourseIndex];
    const currentModuleIndex = moduleIndices[currentCourse.id];

    setModuleIndices((prevIndices) => ({
      ...prevIndices,
      [currentCourse.id]: Math.min(
        currentModuleIndex + 1,
        currentCourse.modules.length - 1,
      ), // Don't go past last module
    }));
  };

  const handlePrevModule = () => {
    const currentCourse = activeCourses[activeCourseIndex];
    const currentModuleIndex = moduleIndices[currentCourse.id];

    setModuleIndices((prevIndices) => ({
      ...prevIndices,
      [currentCourse.id]: Math.max(currentModuleIndex - 1, 0), // Don't go before first module
    }));
  };

  // The current courses in use
  const courses = activeCourses;

  // Only proceed if we have at least one course
  if (courses.length === 0 && currentScreen === 'learning') {
    return (
      <view className="no-courses-message">
        <text>Please select at least one course to start learning.</text>
        <view
          className="back-to-config"
          bindtap={() => setCurrentScreen('config')}
        >
          <text>Back to Course Selection</text>
        </view>
      </view>
    );
  }

  // Render the current screen
  if (currentScreen === 'config') {
    return (
      <LoopConfigScreen
        onStart={handleStartLearning}
        onGoBack={handleGoBack}
        coursesByCategory={coursesByCategory}
        categories={curriculumData.categories}
      />
    );
  }

  return (
    <LearningScreen
      courses={courses}
      moduleIndices={moduleIndices}
      activeCourseIndex={activeCourseIndex}
      onConfigClick={() => setCurrentScreen('config')}
      onNextCourse={handleNextCourse}
      onPrevCourse={handlePrevCourse}
      onNextModule={handleNextModule}
      onPrevModule={handlePrevModule}
    />
  );
}
