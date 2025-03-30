import { useState } from 'react';
import type { Category, EnrichedCourse } from '../types.tsx';
import { getCategoryIconClass } from '../utils.js';

interface LoopConfigScreenProps {
  onStart: (selectedCourseIds: string[]) => void;
  onGoBack: () => void;
  coursesByCategory: Record<string, EnrichedCourse[]>;
  categories: Category[];
}

export function LoopConfigScreen({
  onStart,
  onGoBack,
  coursesByCategory,
  categories,
}: LoopConfigScreenProps) {
  // State for expanded categories
  const [expandedCategories, setExpandedCategories] = useState<
    Record<string, boolean>
  >(() => {
    // Initialize with all categories expanded
    const initialState: Record<string, boolean> = {};
    categories.forEach((category) => {
      initialState[category.name] = true;
    });
    return initialState;
  });

  // State for selected courses (all enabled by default)
  const [selectedCourseIds, setSelectedCourseIds] = useState<string[]>(
    Object.values(coursesByCategory)
      .flat()
      .map((course) => course.id),
  );

  // Toggle a course selection
  const toggleCourse = (courseId: string) => {
    setSelectedCourseIds((prev) => {
      if (prev.includes(courseId)) {
        return prev.filter((id) => id !== courseId);
      } else {
        return [...prev, courseId];
      }
    });
  };

  // Toggle a category expansion
  const toggleCategory = (categoryName: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  return (
    <view className="loop-config-screen">
      <view className="config-header">
        <text className="app-title">LearnLoop</text>
        <text className="config-title">Fine-tune your Loop</text>
        <text className="config-subtitle">
          Select the courses you want to include in your learning loop
        </text>
      </view>

      <scroll-view
        className="categories-container-scroll"
        scroll-orientation="vertical"
      >
        <view className="categories-container">
          {categories.map((category) => {
            const coursesInCategory = coursesByCategory[category.name] || [];

            return (
              <view key={category.id} className="category-section">
                <view
                  className="category-header"
                  bindtap={() => toggleCategory(category.name)}
                >
                  <text className="category-arrow">
                    {expandedCategories[category.name] ? '▼' : '▶'}
                  </text>
                  <view className="category-icon">
                    <text
                      className={getCategoryIconClass(category.icon)}
                    ></text>
                  </view>
                  <text className="category-title">
                    {category.name} ({coursesInCategory.length})
                  </text>
                </view>

                {expandedCategories[category.name] && (
                  <view className="category-courses">
                    {coursesInCategory.length > 0 ? (
                      coursesInCategory.map((course) => (
                        <view key={course.id} className="course-option">
                          <view
                            className={`course-checkbox ${selectedCourseIds.includes(course.id) ? 'checked' : ''}`}
                            bindtap={() => toggleCourse(course.id)}
                          >
                            {selectedCourseIds.includes(course.id) && (
                              <text>✓</text>
                            )}
                          </view>
                          <view className="course-info">
                            <text className="course-title">{course.title}</text>
                            <text className="course-description">
                              {course.description}
                            </text>
                          </view>
                        </view>
                      ))
                    ) : (
                      <text className="no-courses-in-category">
                        No courses available in this category
                      </text>
                    )}
                  </view>
                )}
              </view>
            );
          })}
        </view>
      </scroll-view>

      <view className="config-footer">
        <view className="selection-summary">
          <text className="selection-count">
            {selectedCourseIds.length} course
            {selectedCourseIds.length !== 1 ? 's' : ''} selected
          </text>
        </view>

        <view className="config-actions">
          <view
            className="start-button"
            bindtap={() => onStart(selectedCourseIds)}
          >
            <text>
              {selectedCourseIds.length > 0
                ? 'Start Learning →'
                : 'Please select at least one course'}
            </text>
          </view>
          <view className="back-button" bindtap={onGoBack}>
            <text>← Go Back</text>
          </view>
        </view>
      </view>
    </view>
  );
}
