import { useState, useEffect } from 'react';
import type {
  EnrichedCourse,
  Module,
  VideoContent,
  TextContent,
  AnimationContent,
  QuizContent,
} from '../types';
import { MarkdownRenderer } from './MarkdownRenderer';

interface LearningScreenProps {
  courses: EnrichedCourse[];
  moduleIndices: Record<string, number>;
  activeCourseIndex: number;
  onConfigClick: () => void;
  onNextCourse: () => void;
  onPrevCourse: () => void;
  onNextModule: () => void;
  onPrevModule: () => void;
}

export function LearningScreen({
  courses,
  moduleIndices,
  activeCourseIndex,
  onConfigClick,
  onNextCourse,
  onPrevCourse,
  onNextModule,
  onPrevModule,
}: LearningScreenProps) {
  // State for touch events
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // State for showing feedback in quiz
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  // Hide indicators after some time
  const [showIndicators, setShowIndicators] = useState(true);

  const currentCourse = courses[activeCourseIndex];
  const currentModuleIndex = moduleIndices[currentCourse.id];
  const currentModule = currentCourse.modules[currentModuleIndex];

  // --- Touch Event Handlers ---
  const handleTouchStart = (e: any) => {
    if (e.touches && e.touches.length > 0) {
      setTouchStartY(e.touches[0].clientY);
      setTouchStartX(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = (e: any) => {
    if (
      touchStartY === null ||
      touchStartX === null ||
      !e.changedTouches ||
      e.changedTouches.length === 0
    )
      return;

    const yDiff = e.changedTouches[0].clientY - touchStartY;
    const xDiff = e.changedTouches[0].clientX - touchStartX;

    // Determine if it's a vertical or horizontal swipe
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      // Horizontal swipe
      if (xDiff > 50) {
        // Swipe right - go to previous module
        onPrevModule();
      } else if (xDiff < -50) {
        // Swipe left - go to next module
        onNextModule();
      }
    } else {
      // Vertical swipe
      if (yDiff > 50) {
        // Swipe down - go to previous course
        onPrevCourse();
      } else if (yDiff < -50) {
        // Swipe up - go to next course
        onNextCourse();
      }
    }

    setTouchStartY(null);
    setTouchStartX(null);
  };

  // Handle quiz option selection
  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
  };

  // Handle quiz submission
  const handleQuizSubmit = () => {
    if (selectedOption) {
      setShowFeedback(true);
    }
  };

  // Hide indicators after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIndicators(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Render module content based on type
  const renderModuleContent = (module: Module) => {
    switch (module.moduleType) {
      case 'video':
        const videoContent = module.content as VideoContent;
        return (
          <view className="video-module">
            <text className="module-title">{videoContent.title}</text>
            <view className="video-placeholder">
              <image src={videoContent.thumbnailUrl} />
              <view className="play-button">
                <text>▶</text>
              </view>
              <view className="video-duration">
                <text>{videoContent.duration}s</text>
              </view>
            </view>
          </view>
        );

      case 'text':
        const textContent = module.content as TextContent;
        return (
          <view className="text-module">
            <text className="module-title">{textContent.title}</text>
            <view className="text-content">
              <MarkdownRenderer content={textContent.markupContent} />
            </view>
            {textContent.imageUrl && (
              <image className="content-image" src={textContent.imageUrl} />
            )}
          </view>
        );

      case 'animation':
        const animationContent = module.content as AnimationContent;
        return (
          <view className="animation-module">
            <text className="module-title">{animationContent.title}</text>
            <view className="animation-container">
              <image src={animationContent.animationUrl} />
            </view>
            <text className="animation-caption">
              {animationContent.caption}
            </text>
          </view>
        );

      case 'quiz':
        const quizContent = module.content as QuizContent;
        const isCorrect = selectedOption
          ? quizContent.options.find((opt) => opt.id === selectedOption)
              ?.isCorrect
          : null;

        return (
          <view className="quiz-module">
            <text className="module-title">Quiz</text>
            <text className="question-text">{quizContent.questionText}</text>

            <view className="quiz-options">
              {quizContent.options.map((option) => (
                <view
                  key={option.id}
                  className={`quiz-option ${selectedOption === option.id ? 'selected' : ''} ${
                    showFeedback && selectedOption === option.id
                      ? option.isCorrect
                        ? 'correct'
                        : 'incorrect'
                      : ''
                  }`}
                  bindtap={() => !showFeedback && handleOptionSelect(option.id)}
                >
                  <text>{option.text}</text>
                </view>
              ))}
            </view>

            {!showFeedback ? (
              <view
                className="quiz-submit"
                bindtap={handleQuizSubmit}
                style={{ opacity: selectedOption ? 1 : 0.5 }}
              >
                <text>Submit Answer</text>
              </view>
            ) : (
              <view className="quiz-feedback">
                <text>
                  {isCorrect
                    ? quizContent.feedbackCorrect
                    : quizContent.feedbackIncorrect}
                </text>
              </view>
            )}
          </view>
        );

      default:
        return (
          <view>
            <text>Unknown module type</text>
          </view>
        );
    }
  };

  return (
    <view
      className="app-container"
      bindtouchstart={handleTouchStart}
      bindtouchend={handleTouchEnd}
    >
      {/* Logo and app header */}
      <view className="app-header">
        <text className="app-title">LearnLoop</text>
      </view>

      {/* Vertical Swiper Container */}
      <view
        className="vertical-swiper"
        style={{ transform: `translateY(-${activeCourseIndex * 100}vh)` }}
      >
        {courses.map((course, courseIndex) => (
          <view
            key={course.id}
            className={`course-container course-${courseIndex % 3}`}
          >
            {/* Horizontal Swiper Container */}
            <view
              className="horizontal-swiper"
              style={{
                transform: `translateX(-${moduleIndices[course.id] * 100}vw)`,
              }}
            >
              {course.modules.map((module, moduleIndex) => (
                <view key={module.id} className="module-slide">
                  {/* Top Bar with Course Title and Progress */}
                  <view className="module-header">
                    <text className="course-title">{course.title}</text>
                    <view className="module-progress">
                      <text className="module-counter">
                        {moduleIndex + 1}/{course.modules.length}
                      </text>
                    </view>
                  </view>

                  {/* Module Content Area */}
                  <view className="module-content">
                    {renderModuleContent(module)}
                  </view>

                  {/* Pagination Dots */}
                  <view className="module-pagination">
                    {course.modules.map((_, idx) => (
                      <view
                        key={idx}
                        className={`dot ${idx === moduleIndices[course.id] ? 'active' : ''}`}
                      />
                    ))}
                  </view>
                </view>
              ))}
            </view>
          </view>
        ))}
      </view>

      {/* Swipe Gesture Indicators (visual cues) */}
      {showIndicators && (
        <view className="swipe-indicators">
          <view className="vertical-indicator">
            <text>⟡ Swipe up/down to change courses ⟡</text>
          </view>
          <view className="horizontal-indicator">
            <text>⟠ Swipe left/right to navigate modules ⟠</text>
          </view>
        </view>
      )}

      {/* Config Button */}
      <view className="config-button" bindtap={onConfigClick}>
        <text>⚙️</text>
      </view>

      {/* --- Temporary Navigation Controls --- */}
      <view className="dev-controls">
        <view className="vertical-controls">
          <view className="control-button" bindtap={onPrevCourse}>
            <text>Prev Course ↑</text>
          </view>
          <view className="control-button" bindtap={onNextCourse}>
            <text>Next Course ↓</text>
          </view>
        </view>
        <view className="horizontal-controls">
          <view className="control-button" bindtap={onPrevModule}>
            <text>← Prev Module</text>
          </view>
          <view className="control-button" bindtap={onNextModule}>
            <text>Next Module →</text>
          </view>
        </view>
        <view className="location-info">
          <text>
            Course: {activeCourseIndex + 1}/{courses.length} (
            {currentCourse.title})
          </text>
          <text>
            Module: {currentModuleIndex + 1}/{currentCourse.modules.length} (
            {(currentModule.content as any).title || 'Quiz'})
          </text>
        </view>
      </view>
    </view>
  );
}
