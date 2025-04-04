type ModuleType = 'video' | 'text' | 'animation' | 'quiz';

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

export const microCourses: CourseData = {
  microCourses: [
    {
      id: 'course-phy-001',
      title: 'Basics of Newtonian Physics',
      description: "Quick insights into Newton's fundamental laws of motion.",
      modules: [
        {
          id: 'mod-phy001-01',
          moduleType: 'video',
          content: {
            title: 'Introduction: Who was Newton?',
            videoUrl: 'https://example.com/videos/newton_intro.mp4',
            thumbnailUrl: 'https://example.com/thumbs/newton_intro.jpg',
            duration: 45,
          },
        },
        {
          id: 'mod-phy001-02',
          moduleType: 'text',
          content: {
            title: "Newton's First Law: Inertia",
            markupContent:
              '### Law 1: The Law of Inertia\n\nAn object at rest stays at rest, and an object in motion stays in motion with the same speed and in the same direction *unless* acted upon by an unbalanced force.\n\n**Think:** A hockey puck gliding on ice.',
            imageUrl: 'https://example.com/images/inertia_puck.jpg',
          },
        },
        {
          id: 'mod-phy001-03',
          moduleType: 'animation',
          content: {
            title: "Newton's Second Law: F=ma",
            animationUrl: 'https://example.com/animations/f_equals_ma.json',
            type: 'lottie',
            caption:
              'Force equals mass times acceleration. More force = more acceleration!',
          },
        },
        {
          id: 'mod-phy001-04',
          moduleType: 'text',
          content: {
            title: "Newton's Third Law: Action-Reaction",
            markupContent:
              '### Law 3: Action-Reaction\n\nFor every action, there is an equal and opposite reaction.\n\n**Example:** When you push a wall (action), the wall pushes back on you with equal force (reaction).',
          },
        },
        {
          id: 'mod-phy001-05',
          moduleType: 'quiz',
          content: {
            questionText:
              'Which law explains why you feel pushed back into your seat when a car accelerates forward?',
            options: [
              {
                id: 'q-phy001-01',
                text: 'First Law (Inertia)',
                isCorrect: true,
              },
              {
                id: 'q-phy001-02',
                text: 'Second Law (F=ma)',
                isCorrect: false,
              },
              {
                id: 'q-phy001-03',
                text: 'Third Law (Action-Reaction)',
                isCorrect: false,
              },
            ],
            feedbackCorrect:
              'Correct! Your body wants to stay at rest (inertia).',
            feedbackIncorrect:
              "Not quite. That's related to inertia (the First Law).",
          },
        },
      ],
    },
    {
      id: 'course-bio-001',
      title: 'Introduction to Cell Biology',
      description: 'Explore the basic building blocks of life: cells.',
      modules: [
        {
          id: 'mod-bio001-01',
          moduleType: 'video',
          content: {
            title: 'What is a Cell?',
            videoUrl: 'https://example.com/videos/cell_intro.mp4',
            thumbnailUrl: 'https://example.com/thumbs/cell_intro.jpg',
            duration: 55,
          },
        },
        {
          id: 'mod-bio001-02',
          moduleType: 'text',
          content: {
            title: 'Prokaryotic vs Eukaryotic',
            markupContent:
              '### Two Main Types:\n\n*   **Prokaryotic:** Simple cells (like bacteria) lacking a nucleus.\n*   **Eukaryotic:** Complex cells (like plant and animal cells) with a nucleus and other organelles.\n\nWe are made of Eukaryotic cells!',
            imageUrl: 'https://example.com/images/pro_vs_euk.jpg',
          },
        },
        {
          id: 'mod-bio001-03',
          moduleType: 'animation',
          content: {
            title: 'Inside an Animal Cell',
            animationUrl: 'https://example.com/animations/animal_cell.json',
            type: 'lottie',
            caption:
              'Key organelles like the nucleus, mitochondria, and cell membrane.',
          },
        },
        {
          id: 'mod-bio001-04',
          moduleType: 'text',
          content: {
            title: 'The Nucleus: Control Center',
            markupContent:
              "### The Nucleus\n\nContains the cell's genetic material (DNA) and controls the cell's growth and reproduction.",
          },
        },
        {
          id: 'mod-bio001-05',
          moduleType: 'text',
          content: {
            title: 'Mitochondria: Powerhouse',
            markupContent:
              "### Mitochondria\n\nResponsible for generating most of the cell's supply of adenosine triphosphate (ATP), used as a source of chemical energy.",
          },
        },
        {
          id: 'mod-bio001-06',
          moduleType: 'quiz',
          content: {
            questionText: 'Which type of cell has a true nucleus?',
            options: [
              {
                id: 'q-bio001-01',
                text: 'Prokaryotic',
                isCorrect: false,
              },
              { id: 'q-bio001-02', text: 'Eukaryotic', isCorrect: true },
              { id: 'q-bio001-03', text: 'Both Types', isCorrect: false },
            ],
            feedbackCorrect: 'Correct! Eukaryotic cells have a nucleus.',
            feedbackIncorrect:
              'Incorrect. Prokaryotic cells lack a true nucleus.',
          },
        },
      ],
    },
    {
      id: 'course-ast-001',
      title: 'Our Solar System at a Glance',
      description:
        'A quick tour of the planets and major bodies in our solar system.',
      modules: [
        {
          id: 'mod-ast001-01',
          moduleType: 'video',
          content: {
            title: 'Welcome to the Solar System!',
            videoUrl: 'https://example.com/videos/solar_system_intro.mp4',
            thumbnailUrl: 'https://example.com/thumbs/solar_system_intro.jpg',
            duration: 60,
          },
        },
        {
          id: 'mod-ast001-02',
          moduleType: 'text',
          content: {
            title: 'The Sun: Our Star',
            markupContent:
              '### The Centerpiece\n\nThe Sun is a star that holds the Solar System together with its gravity. It provides light and heat essential for life on Earth.',
          },
        },
        {
          id: 'mod-ast001-03',
          moduleType: 'animation',
          content: {
            title: 'Inner Planets (Terrestrial)',
            animationUrl: 'https://example.com/animations/inner_planets.gif',
            type: 'gif',
            caption:
              'Mercury, Venus, Earth, Mars - rocky planets closer to the Sun.',
          },
        },
        {
          id: 'mod-ast001-04',
          moduleType: 'animation',
          content: {
            title: 'Outer Planets (Gas/Ice Giants)',
            animationUrl: 'https://example.com/animations/outer_planets.gif',
            type: 'gif',
            caption:
              'Jupiter, Saturn, Uranus, Neptune - large planets further from the Sun.',
          },
        },
        {
          id: 'mod-ast001-05',
          moduleType: 'text',
          content: {
            title: 'Asteroid Belt & Kuiper Belt',
            markupContent:
              '### Belts of Debris\n\n*   **Asteroid Belt:** Located between Mars and Jupiter, full of rocky asteroids.\n*   **Kuiper Belt:** Beyond Neptune, home to dwarf planets (like Pluto) and icy bodies.',
            imageUrl: 'https://example.com/images/belts.jpg',
          },
        },
        {
          id: 'mod-ast001-06',
          moduleType: 'text',
          content: {
            title: 'What about Pluto?',
            markupContent:
              "### Dwarf Planet\n\nIn 2006, Pluto was reclassified as a 'dwarf planet' because it hasn't cleared its orbital neighborhood of other objects. It resides in the Kuiper Belt.",
          },
        },
        {
          id: 'mod-ast001-07',
          moduleType: 'quiz',
          content: {
            questionText: "Which planet is known as the 'Red Planet'?",
            options: [
              { id: 'q-ast001-01', text: 'Venus', isCorrect: false },
              { id: 'q-ast001-02', text: 'Mars', isCorrect: true },
              { id: 'q-ast001-03', text: 'Jupiter', isCorrect: false },
            ],
            feedbackCorrect:
              'Correct! Mars gets its reddish appearance from iron oxide.',
            feedbackIncorrect:
              'Incorrect. Think about the planet known for its rusty color.',
          },
        },
      ],
    },
    {
      id: 'course-hist-002',
      title: 'The Silk Road Essentials',
      description:
        'Explore the ancient trade network connecting East and West.',
      modules: [
        {
          id: 'mod-hist002-01',
          moduleType: 'video',
          content: {
            title: 'What Was the Silk Road?',
            videoUrl: 'https://example.com/videos/silkroad_intro.mp4',
            thumbnailUrl: 'https://example.com/thumbs/silkroad_intro.jpg',
            duration: 60,
          },
        },
        {
          id: 'mod-hist002-02',
          moduleType: 'text',
          content: {
            title: 'Key Goods Traded',
            markupContent:
              "### More Than Just Silk!\n\nWhile silk from China was highly prized, many goods traveled the routes:\n\n*   **East to West:** Silk, tea, spices, paper, gunpowder.\n*   **West to East:** Horses, glassware, gold, silver, grapes.\n\nIt wasn't just goods, but also ideas!",
            imageUrl: 'https://example.com/images/silkroad_goods.jpg',
          },
        },
        {
          id: 'mod-hist002-03',
          moduleType: 'animation',
          content: {
            title: 'Mapping the Routes',
            animationUrl: 'https://example.com/animations/silkroad_map.gif',
            type: 'gif',
            caption:
              'A network of land and sea routes spanning thousands of miles.',
          },
        },
        {
          id: 'mod-hist002-04',
          moduleType: 'quiz',
          content: {
            questionText:
              'Besides silk, what important invention traveled West along the Silk Road?',
            options: [
              {
                id: 'q-hist002-01',
                text: 'Glassmaking',
                isCorrect: false,
              },
              {
                id: 'q-hist002-02',
                text: 'Papermaking',
                isCorrect: true,
              },
              {
                id: 'q-hist002-03',
                text: 'Horse Breeding',
                isCorrect: false,
              },
            ],
            feedbackCorrect:
              'Yes! Papermaking technology spread from China via the Silk Road.',
            feedbackIncorrect: 'Try again! Think about writing materials.',
          },
        },
      ],
    },
    {
      id: 'course-hist-003',
      title: 'Intro to the Roman Empire',
      description: 'Key moments and figures from ancient Rome.',
      modules: [
        {
          id: 'mod-hist003-01',
          moduleType: 'video',
          content: {
            title: 'From Republic to Empire',
            videoUrl: 'https://example.com/videos/rome_intro.mp4',
            thumbnailUrl: 'https://example.com/thumbs/rome_intro.jpg',
            duration: 70,
          },
        },
        {
          id: 'mod-hist003-02',
          moduleType: 'text',
          content: {
            title: 'Pax Romana: Roman Peace',
            markupContent:
              '### Era of Stability\n\nA long period of relative peace and minimal expansion (~27 BCE - 180 CE). Known for stability, infrastructure (roads, aqueducts), and prosperity across the vast empire.',
          },
        },
        {
          id: 'mod-hist003-03',
          moduleType: 'animation',
          content: {
            title: 'Extent of the Empire',
            animationUrl:
              'https://example.com/animations/roman_empire_map.json',
            type: 'lottie',
            caption:
              'At its height, the Roman Empire spanned from Britain to North Africa and the Middle East.',
          },
        },
        {
          id: 'mod-hist003-04',
          moduleType: 'text',
          content: {
            title: 'Key Figures: Julius Caesar',
            markupContent:
              '### Ambitious General & Statesman\n\nPivotal in the demise of the Roman Republic and the rise of the Empire. Famous for his military campaigns in Gaul.',
          },
        },
        {
          id: 'mod-hist003-05',
          moduleType: 'text',
          content: {
            title: 'Key Figures: Augustus',
            markupContent:
              "### First Roman Emperor\n\nCaesar's adopted son, Octavian, became Augustus. He ushered in the Pax Romana and reformed Roman society and government.",
          },
        },
        {
          id: 'mod-hist003-06',
          moduleType: 'quiz',
          content: {
            questionText: "The 'Pax Romana' refers to a period of Roman...",
            options: [
              { id: 'q-hist003-01', text: 'Civil War', isCorrect: false },
              {
                id: 'q-hist003-02',
                text: 'Rapid Conquest',
                isCorrect: false,
              },
              {
                id: 'q-hist003-03',
                text: 'Peace and Stability',
                isCorrect: true,
              },
            ],
            feedbackCorrect: "Correct! Pax Romana means 'Roman Peace'.",
            feedbackIncorrect: "Not quite. Think about the meaning of 'Pax'.",
          },
        },
      ],
    },
    {
      id: 'course-code-003',
      title: 'JavaScript: Data Types Intro',
      description: 'Understand the basic data types used in JavaScript.',
      modules: [
        {
          id: 'mod-code003-01',
          moduleType: 'text',
          content: {
            title: 'What are Data Types?',
            markupContent:
              'Data types are classifications that specify which type of value a variable holds.\n\nThink of them like categories for information (numbers, text, true/false, etc.). JavaScript needs to know the type to work correctly.',
          },
        },
        {
          id: 'mod-code003-02',
          moduleType: 'text',
          content: {
            title: 'Strings: Representing Text',
            markupContent:
              '### Strings\n\nUsed for text. Enclose them in single (\' \') or double (" ") quotes.\n\n```javascript\nlet greeting = "Hello, World!";\nlet name = \'LearnLoop\';\n```',
          },
        },
        {
          id: 'mod-code003-03',
          moduleType: 'text',
          content: {
            title: 'Numbers: Integers & Floats',
            markupContent:
              '### Numbers\n\nRepresent numeric values. Can be whole numbers (integers) or have decimals (floats).\n\n```javascript\nlet age = 25;        // Integer\nlet price = 99.95;   // Float\n```\n\n*No quotes needed!*',
          },
        },
        {
          id: 'mod-code003-04',
          moduleType: 'text',
          content: {
            title: 'Booleans: True or False',
            markupContent:
              '### Booleans\n\nRepresent logical values: `true` or `false`.\n\n```javascript\nlet isActive = true;\nlet isLoggedIn = false;\n```\n\nUsed heavily in decision making (if/else).',
          },
        },
        {
          id: 'mod-code003-05',
          moduleType: 'quiz',
          content: {
            questionText:
              "Which data type would you use to store a user's email address?",
            options: [
              { id: 'q-code003-01', text: 'Number', isCorrect: false },
              { id: 'q-code003-02', text: 'Boolean', isCorrect: false },
              { id: 'q-code003-03', text: 'String', isCorrect: true },
            ],
            feedbackCorrect:
              'Correct! Email addresses are represented as text (strings).',
            feedbackIncorrect:
              'Not quite. An email address is text information.',
          },
        },
      ],
    },
    {
      id: 'course-code-004',
      title: 'HTML Fundamentals',
      description: 'Learn the basic structure of web pages with HTML.',
      modules: [
        {
          id: 'mod-code004-01',
          moduleType: 'text',
          content: {
            title: 'What is HTML?',
            markupContent:
              '### HyperText Markup Language\n\nHTML is the standard markup language for creating web pages. It describes the *structure* of a web page using elements (tags).',
          },
        },
        {
          id: 'mod-code004-02',
          moduleType: 'text',
          content: {
            title: 'Basic Structure',
            markupContent:
              '### The Skeleton\n\nEvery HTML document has a basic structure:\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Page Title</title>\n</head>\n<body>\n  <h1>My First Heading</h1>\n  <p>My first paragraph.</p>\n</body>\n</html>\n```',
          },
        },
        {
          id: 'mod-code004-03',
          moduleType: 'text',
          content: {
            title: 'HTML Elements (Tags)',
            markupContent:
              '### Building Blocks\n\nHTML elements are represented by tags, usually in pairs like `<p>` and `</p>`.\n\n*   `<h1>` to `<h6>`: Headings\n*   `<p>`: Paragraphs\n*   `<a>`: Links (Anchors)\n*   `<img>`: Images',
          },
        },
        {
          id: 'mod-code004-04',
          moduleType: 'animation',
          content: {
            title: 'Nesting Elements',
            animationUrl: 'https://example.com/animations/html_nesting.gif',
            type: 'gif',
            caption:
              'Elements can be placed inside other elements, creating a hierarchy.',
          },
        },
        {
          id: 'mod-code004-05',
          moduleType: 'text',
          content: {
            title: 'Attributes',
            markupContent:
              '### Providing More Info\n\nAttributes provide additional information about elements.\n\n```html\n<a href="https://example.com">Link Text</a>\n<img src="image.jpg" alt="Description">\n```\n*`href` and `src` are attributes.*',
          },
        },
        {
          id: 'mod-code004-06',
          moduleType: 'text',
          content: {
            title: 'Comments',
            markupContent:
              '### Notes for Humans\n\nHTML comments are ignored by the browser.\n\n```html\n<!-- This is a comment -->\n```',
          },
        },
        {
          id: 'mod-code004-07',
          moduleType: 'quiz',
          content: {
            questionText:
              'Which tag is used to define the main content of an HTML document?',
            options: [
              { id: 'q-code004-01', text: '<head>', isCorrect: false },
              { id: 'q-code004-02', text: '<title>', isCorrect: false },
              { id: 'q-code004-03', text: '<body>', isCorrect: true },
            ],
            feedbackCorrect:
              'Correct! The `<body>` tag contains the visible page content.',
            feedbackIncorrect:
              'Incorrect. The `<head>` contains meta-information, and `<title>` sets the browser tab title.',
          },
        },
      ],
    },
    {
      id: 'course-code-005',
      title: 'Intro to Python Syntax',
      description: "Get started with Python's basic commands and structure.",
      modules: [
        {
          id: 'mod-code005-01',
          moduleType: 'video',
          content: {
            title: 'Why Python?',
            videoUrl: 'https://example.com/videos/python_intro.mp4',
            thumbnailUrl: 'https://example.com/thumbs/python_intro.jpg',
            duration: 50,
          },
        },
        {
          id: 'mod-code005-02',
          moduleType: 'text',
          content: {
            title: 'Printing Output',
            markupContent:
              '### Saying Hello\n\nThe `print()` function displays output to the console.\n\n```python\nprint("Hello, LearnLoop!")\n```',
          },
        },
        {
          id: 'mod-code005-03',
          moduleType: 'text',
          content: {
            title: 'Variables',
            markupContent:
              '### Storing Data\n\nVariables store data values. You don\'t need to declare the type explicitly.\n\n```python\nmessage = "This is a string"\ncount = 10\npi = 3.14\nis_active = True\n```',
          },
        },
        {
          id: 'mod-code005-04',
          moduleType: 'text',
          content: {
            title: 'Indentation Matters!',
            markupContent:
              '### Whitespace is Significant\n\nPython uses indentation (spaces or tabs) to define code blocks (like loops or if-statements). Consistency is key!\n\n```python\nif count > 5:\n    print("Count is greater than 5") # Indented\nprint("Done") # Not indented\n```',
          },
        },
        {
          id: 'mod-code005-05',
          moduleType: 'text',
          content: {
            title: 'Comments',
            markupContent:
              '### Explaining Your Code\n\nComments start with `#` and are ignored by Python.\n\n```python\n# This is a single-line comment\nmessage = "Hello" # This comment is after code\n```',
          },
        },
        {
          id: 'mod-code005-06',
          moduleType: 'quiz',
          content: {
            questionText: 'How do you print text to the console in Python?',
            options: [
              {
                id: 'q-code005-01',
                text: 'console.log("text")',
                isCorrect: false,
              },
              {
                id: 'q-code005-02',
                text: 'print("text")',
                isCorrect: true,
              },
              {
                id: 'q-code005-03',
                text: 'echo "text"',
                isCorrect: false,
              },
            ],
            feedbackCorrect:
              'Correct! `print()` is the standard function for output.',
            feedbackIncorrect:
              'Not quite. `console.log` is JavaScript, `echo` is often shell command.',
          },
        },
      ],
    },
    {
      id: 'course-sec-001',
      title: 'Cybersecurity Basics: Phishing',
      description: 'Learn to recognize and avoid common phishing scams.',
      modules: [
        {
          id: 'mod-sec001-01',
          moduleType: 'video',
          content: {
            title: 'What is Phishing?',
            videoUrl: 'https://example.com/videos/phishing_intro.mp4',
            thumbnailUrl: 'https://example.com/thumbs/phishing_intro.jpg',
            duration: 65,
          },
        },
        {
          id: 'mod-sec001-02',
          moduleType: 'text',
          content: {
            title: 'Common Red Flags',
            markupContent:
              '### Warning Signs:\n\n*   Urgent calls to action ("Account suspended!")\n*   Requests for sensitive info (passwords, SSN)\n*   Generic greetings ("Dear Customer")\n*   Suspicious links or attachments\n*   Poor grammar/spelling\n*   Mismatched sender email address',
            imageUrl: 'https://example.com/images/phishing_flags.jpg',
          },
        },
        {
          id: 'mod-sec001-03',
          moduleType: 'animation',
          content: {
            title: 'Hover Before You Click!',
            animationUrl: 'https://example.com/animations/hover_link.gif',
            type: 'gif',
            caption:
              'Always hover your mouse over links (without clicking!) to see the actual destination URL.',
          },
        },
        {
          id: 'mod-sec001-04',
          moduleType: 'quiz',
          content: {
            questionText:
              "An email asks for your password due to a 'security update'. Should you provide it?",
            options: [
              {
                id: 'q-sec001-01',
                text: 'Yes, if it looks official',
                isCorrect: false,
              },
              {
                id: 'q-sec001-02',
                text: 'No, legitimate services rarely ask for passwords via email',
                isCorrect: true,
              },
              {
                id: 'q-sec001-03',
                text: 'Only if the sender email looks correct',
                isCorrect: false,
              },
            ],
            feedbackCorrect:
              "Correct! Never give out your password via email. It's a classic phishing tactic.",
            feedbackIncorrect:
              'Incorrect! Legitimate organizations will almost never ask for your password directly in an email.',
          },
        },
      ],
    },
    {
      id: 'course-art-001',
      title: 'Color Theory Basics',
      description:
        'Understand the fundamentals of color mixing, harmony, and contrast.',
      modules: [
        {
          id: 'mod-art001-01',
          moduleType: 'video',
          content: {
            title: 'Intro to the Color Wheel',
            videoUrl: 'https://example.com/videos/color_wheel.mp4',
            thumbnailUrl: 'https://example.com/thumbs/color_wheel.jpg',
            duration: 60,
          },
        },
        {
          id: 'mod-art001-02',
          moduleType: 'text',
          content: {
            title: 'Primary, Secondary, Tertiary',
            markupContent:
              '### Color Categories:\n\n*   **Primary:** Red, Yellow, Blue (Cannot be mixed from others)\n*   **Secondary:** Green, Orange, Violet (Mixed from primaries)\n*   **Tertiary:** Yellow-Orange, Red-Violet, etc. (Mixed from primary + secondary)',
            imageUrl: 'https://example.com/images/color_types.jpg',
          },
        },
        {
          id: 'mod-art001-03',
          moduleType: 'animation',
          content: {
            title: 'Hue, Saturation, Value (HSV)',
            animationUrl: 'https://example.com/animations/hsv.json',
            type: 'lottie',
            caption:
              'Understanding how to adjust Hue (the color itself), Saturation (intensity), and Value (lightness/darkness).',
          },
        },
        {
          id: 'mod-art001-04',
          moduleType: 'text',
          content: {
            title: 'Color Harmony: Complementary',
            markupContent:
              '### Complementary Colors\n\nColors directly opposite each other on the color wheel (e.g., Red & Green, Blue & Orange). They create high contrast and visual excitement when placed side-by-side.',
          },
        },
        {
          id: 'mod-art001-05',
          moduleType: 'quiz',
          content: {
            questionText: 'What type of colors are Red, Yellow, and Blue?',
            options: [
              {
                id: 'q-art001-01',
                text: 'Secondary Colors',
                isCorrect: false,
              },
              {
                id: 'q-art001-02',
                text: 'Primary Colors',
                isCorrect: true,
              },
              {
                id: 'q-art001-03',
                text: 'Tertiary Colors',
                isCorrect: false,
              },
            ],
            feedbackCorrect:
              'Correct! Red, Yellow, and Blue are the primary colors.',
            feedbackIncorrect:
              'Incorrect. Think about the colors you start with to mix others.',
          },
        },
      ],
    },
    {
      id: 'course-art-002',
      title: 'Intro to Graphic Design Principles',
      description:
        'Learn about balance, alignment, repetition, contrast, and hierarchy.',
      modules: [
        {
          id: 'mod-art002-01',
          moduleType: 'video',
          content: {
            title: 'Why Design Principles Matter',
            videoUrl: 'https://example.com/videos/design_principles_intro.mp4',
            thumbnailUrl:
              'https://example.com/thumbs/design_principles_intro.jpg',
            duration: 55,
          },
        },
        {
          id: 'mod-art002-02',
          moduleType: 'text',
          content: {
            title: 'Alignment: Creating Order',
            markupContent:
              '### Alignment\n\nNothing should be placed arbitrarily. Every element should have a visual connection to another element on the page. Creates a cleaner, more organized look.',
            imageUrl: 'https://example.com/images/alignment_example.jpg',
          },
        },
        {
          id: 'mod-art002-03',
          moduleType: 'text',
          content: {
            title: 'Repetition: Strengthening Unity',
            markupContent:
              '### Repetition\n\nRepeat visual elements (colors, fonts, shapes) throughout the design. Helps to unify and strengthen the piece.',
          },
        },
        {
          id: 'mod-art002-04',
          moduleType: 'text',
          content: {
            title: 'Contrast: Creating Emphasis',
            markupContent:
              '### Contrast\n\nMaking elements different to make them stand out (e.g., big vs. small text, light vs. dark colors). Helps draw the eye and create focal points.',
          },
        },
        {
          id: 'mod-art002-05',
          moduleType: 'text',
          content: {
            title: 'Hierarchy: Guiding the Eye',
            markupContent:
              "### Visual Hierarchy\n\nArranging elements to show their order of importance. Using size, color, and placement to guide the viewer's eye through the content logically.",
          },
        },
        {
          id: 'mod-art002-06',
          moduleType: 'quiz',
          content: {
            questionText:
              'Using the same font style for all headings in a document is an example of which principle?',
            options: [
              { id: 'q-art002-01', text: 'Contrast', isCorrect: false },
              { id: 'q-art002-02', text: 'Alignment', isCorrect: false },
              { id: 'q-art002-03', text: 'Repetition', isCorrect: true },
            ],
            feedbackCorrect:
              'Correct! Repeating the font style creates unity and consistency.',
            feedbackIncorrect:
              'Not quite. Think about which principle involves using elements consistently.',
          },
        },
      ],
    },
    {
      id: 'course-life-001',
      title: 'Personal Finance: Budgeting 101',
      description: 'Simple steps to create and stick to a personal budget.',
      modules: [
        {
          id: 'mod-life001-01',
          moduleType: 'video',
          content: {
            title: 'Why Budget?',
            videoUrl: 'https://example.com/videos/budget_intro.mp4',
            thumbnailUrl: 'https://example.com/thumbs/budget_intro.jpg',
            duration: 50,
          },
        },
        {
          id: 'mod-life001-02',
          moduleType: 'text',
          content: {
            title: 'Step 1: Track Your Spending',
            markupContent:
              '### Know Where Your Money Goes\n\nFor a week or a month, record *everything* you spend money on. Use an app, spreadsheet, or notebook. Be honest!',
          },
        },
        {
          id: 'mod-life001-03',
          moduleType: 'text',
          content: {
            title: 'Step 2: Categorize Expenses',
            markupContent:
              '### Fixed vs. Variable\n\n*   **Fixed:** Same amount each month (Rent/Mortgage, Car Payment)\n*   **Variable:** Fluctuates (Groceries, Gas, Entertainment)\nGroup your tracked spending into categories.',
          },
        },
        {
          id: 'mod-life001-04',
          moduleType: 'text',
          content: {
            title: 'Step 3: Set Goals & Make Adjustments',
            markupContent:
              '### Plan Your Spending\n\nCompare your income to your expenses. Set limits for variable spending categories. Where can you cut back to save or pay off debt? (e.g., The 50/30/20 Rule: 50% Needs, 30% Wants, 20% Savings/Debt)',
          },
        },
        {
          id: 'mod-life001-05',
          moduleType: 'quiz',
          content: {
            questionText:
              'Your monthly rent payment is typically considered what type of expense?',
            options: [
              {
                id: 'q-life001-01',
                text: 'Variable Expense',
                isCorrect: false,
              },
              {
                id: 'q-life001-02',
                text: 'Fixed Expense',
                isCorrect: true,
              },
              {
                id: 'q-life001-03',
                text: 'Discretionary Expense',
                isCorrect: false,
              },
            ],
            feedbackCorrect:
              'Correct! Fixed expenses generally stay the same each month.',
            feedbackIncorrect:
              'Incorrect. Variable expenses change month-to-month.',
          },
        },
      ],
    },
    {
      id: 'course-life-002',
      title: 'Effective Communication Snippets',
      description: 'Quick tips for clearer conversations and active listening.',
      modules: [
        {
          id: 'mod-life002-01',
          moduleType: 'video',
          content: {
            title: 'The Power of Clear Communication',
            videoUrl: 'https://example.com/videos/comm_intro.mp4',
            thumbnailUrl: 'https://example.com/thumbs/comm_intro.jpg',
            duration: 45,
          },
        },
        {
          id: 'mod-life002-02',
          moduleType: 'text',
          content: {
            title: 'Active Listening: Pay Attention',
            markupContent:
              "### More Than Just Hearing\n\n*   Put away distractions (phones!).\n*   Make eye contact.\n*   Nod and provide verbal cues ('uh-huh', 'I see').\n*   Focus on understanding, not just waiting to speak.",
          },
        },
        {
          id: 'mod-life002-03',
          moduleType: 'text',
          content: {
            title: 'Asking Clarifying Questions',
            markupContent:
              '### Avoid Misunderstandings\n\nDon\'t assume you know what someone means. Ask questions like:\n\n*   "Could you tell me more about...?"\n*   "So, if I understand correctly, you\'re saying...?"\n*   "What did you mean when you said...?"',
          },
        },
        {
          id: 'mod-life002-04',
          moduleType: 'quiz',
          content: {
            questionText:
              'Checking your phone while someone is talking to you is a sign of:',
            options: [
              {
                id: 'q-life002-01',
                text: 'Active Listening',
                isCorrect: false,
              },
              {
                id: 'q-life002-02',
                text: 'Poor Listening / Distraction',
                isCorrect: true,
              },
              {
                id: 'q-life002-03',
                text: 'Efficient Multitasking',
                isCorrect: false,
              },
            ],
            feedbackCorrect:
              'Correct! Active listening requires minimizing distractions.',
            feedbackIncorrect:
              'Incorrect. Paying attention is key to active listening.',
          },
        },
      ],
    },
  ],
};
