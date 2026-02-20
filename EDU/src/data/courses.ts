import { BookOpen, Users, TrendingUp, Award, Gamepad2, Sparkles, Palette, Code, Smile, Calculator, Database, Globe, Brain, Terminal, Server, Layers } from 'lucide-react';

export interface Week {
    weekNumber: number;
    title: string;
    topics: string[];
    isLocked: boolean;
}

export interface CourseData {
    title: string;
    description: string;
    weeks: Week[];
}

export const courses: Record<string, CourseData> = {
    // Web Development
    'web-basic': {
        title: 'Web Development Foundations - Basic',
        description: 'Start your journey into web development. Learn the core technologies that power the internet: HTML to structure content and CSS to style it beautifully.',
        weeks: [
            {
                weekNumber: 1,
                title: 'RAPID CORE',
                topics: ['How the Web Works', 'HTML5 semantic structure', 'Basic HTML elements and attributes'],
                isLocked: false
            },
            {
                weekNumber: 2,
                title: 'FAST-TRACK STRUCTURES',
                topics: ['CSS3 Styling & Box Model', 'Flexbox Layouts', 'Grid Layouts'],
                isLocked: false
            },
            {
                weekNumber: 3,
                title: 'RESPONSIVE MASTERY',
                topics: ['Responsive Design Principles', 'Media queries', 'Mobile-first approach'],
                isLocked: true
            },
            {
                weekNumber: 4,
                title: 'PORTFOLIO PROJECT',
                topics: ['Building a Personal Portfolio', 'Best practices', 'Deployment'],
                isLocked: true
            }
        ]
    },
    'web-advanced': {
        title: 'Web Development Foundations - Advanced',
        description: 'Master modern web development with JavaScript and backend concepts. Build interactive, data-driven applications.',
        weeks: [
            {
                weekNumber: 1,
                title: 'RAPID CORE',
                topics: ['JavaScript ES6+ Features', 'Spread, rest, destructuring', 'Arrow functions'],
                isLocked: false
            },
            {
                weekNumber: 2,
                title: 'FAST-TRACK STRUCTURES',
                topics: ['DOM Manipulation & Events', 'Event listeners', 'Dynamic content'],
                isLocked: false
            },
            {
                weekNumber: 3,
                title: 'ASYNC MASTERY',
                topics: ['Asynchronous JavaScript', 'Promises & Async/Await', 'Fetch API'],
                isLocked: true
            },
            {
                weekNumber: 4,
                title: 'REACT FOUNDATIONS',
                topics: ['Introduction to React', 'Components & Props', 'State management'],
                isLocked: true
            },
            {
                weekNumber: 5,
                title: 'BACKEND BASICS',
                topics: ['Node.js & Express Basics', 'RESTful APIs', 'Database Fundamentals'],
                isLocked: true
            },
            {
                weekNumber: 6,
                title: 'DEPLOYMENT',
                topics: ['Deployment & Hosting', 'CI/CD basics', 'Production best practices'],
                isLocked: true
            }
        ]
    },

    // Data Science
    'ds-basic': {
        title: 'Data Science - Basic',
        description: 'Learn how to handle data using Python. Understand the basics of data manipulation and visualization.',
        weeks: [
            {
                weekNumber: 1,
                title: 'RAPID CORE',
                topics: ['Introduction to Data Science', 'Python for Data Science', 'Python basics review'],
                isLocked: false
            },
            {
                weekNumber: 2,
                title: 'FAST-TRACK STRUCTURES',
                topics: ['Numpy & Pandas Essentials', 'DataFrames', 'Series operations'],
                isLocked: false
            },
            {
                weekNumber: 3,
                title: 'DATA CLEANING',
                topics: ['Data Cleaning Techniques', 'Handling missing values', 'Data transformation'],
                isLocked: true
            },
            {
                weekNumber: 4,
                title: 'VISUALIZATION',
                topics: ['Data Visualization with Matplotlib', 'Seaborn advanced plots', 'Storytelling with data'],
                isLocked: true
            }
        ]
    },
    'ds-advanced': {
        title: 'Data Science - Advanced',
        description: 'Dive deep into statistical analysis, big data tools, and machine learning integration.',
        weeks: [
            {
                weekNumber: 1,
                title: 'RAPID CORE',
                topics: ['Exploratory Data Analysis (EDA)', 'Distribution analysis', 'Correlation patterns'],
                isLocked: false
            },
            {
                weekNumber: 2,
                title: 'FAST-TRACK STRUCTURES',
                topics: ['Statistical Hypothesis Testing', 'P-values & significance', 'A/B testing'],
                isLocked: false
            },
            {
                weekNumber: 3,
                title: 'FEATURE ENGINEERING',
                topics: ['Feature Engineering', 'Feature selection', 'Dimensionality reduction'],
                isLocked: true
            },
            {
                weekNumber: 4,
                title: 'BIG DATA',
                topics: ['Working with Big Data', 'Spark basics', 'Distributed computing'],
                isLocked: true
            },
            {
                weekNumber: 5,
                title: 'STORYTELLING',
                topics: ['Data Storytelling & Reporting', 'Dashboard creation', 'Presentation skills'],
                isLocked: true
            },
            {
                weekNumber: 6,
                title: 'CAPSTONE PROJECT',
                topics: ['Final Project', 'Real-world problem solving', 'Portfolio piece'],
                isLocked: true
            }
        ]
    },

    // Machine Learning
    'ml-basic': {
        title: 'Machine Learning - Basic',
        description: 'Understand the intuition behind ML algorithms. Learn how machines learn from data.',
        weeks: [
            {
                weekNumber: 1,
                title: 'RAPID CORE',
                topics: ['What is Machine Learning?', 'Supervised vs Unsupervised Learning', 'ML workflow'],
                isLocked: false
            },
            {
                weekNumber: 2,
                title: 'FAST-TRACK STRUCTURES',
                topics: ['Linear Regression', 'Logistic Regression', 'Cost functions'],
                isLocked: false
            },
            {
                weekNumber: 3,
                title: 'ALGORITHMS',
                topics: ['K-Nearest Neighbors', 'Distance metrics', 'Classification patterns'],
                isLocked: true
            },
            {
                weekNumber: 4,
                title: 'EVALUATION',
                topics: ['Model Evaluation Metrics', 'Accuracy, Precision, Recall', 'Cross-validation'],
                isLocked: true
            }
        ]
    },
    'ml-advanced': {
        title: 'Machine Learning - Advanced',
        description: 'Build and deploy complex ML models across various domains using industry-standard libraries.',
        weeks: [
            {
                weekNumber: 1,
                title: 'RAPID CORE',
                topics: ['Decision Trees & Random Forests', 'Ensemble methods', 'Boosting'],
                isLocked: false
            },
            {
                weekNumber: 2,
                title: 'FAST-TRACK STRUCTURES',
                topics: ['Support Vector Machines', 'Kernel trick', 'Hyperplane optimization'],
                isLocked: false
            },
            {
                weekNumber: 3,
                title: 'NEURAL NETWORKS',
                topics: ['Neural Networks Intro', 'Backpropagation', 'Activation functions'],
                isLocked: true
            },
            {
                weekNumber: 4,
                title: 'DEEP LEARNING',
                topics: ['Deep Learning with TensorFlow/PyTorch', 'CNNs', 'RNNs'],
                isLocked: true
            },
            {
                weekNumber: 5,
                title: 'DEPLOYMENT',
                topics: ['Model Deployment', 'API creation', 'Production systems'],
                isLocked: true
            },
            {
                weekNumber: 6,
                title: 'ETHICS & FUTURE',
                topics: ['Ethics in AI', 'Bias detection', 'Responsible AI'],
                isLocked: true
            }
        ]
    },

    // Final Year Project
    'fyp-basic': {
        title: 'Final Year Project - Planning',
        description: 'Structuring your ideas into a viable project proposal and plan.',
        weeks: [
            {
                weekNumber: 1,
                title: 'RAPID CORE',
                topics: ['Idea Generation', 'Brainstorming techniques', 'Problem identification'],
                isLocked: false
            },
            {
                weekNumber: 2,
                title: 'FAST-TRACK STRUCTURES',
                topics: ['Feasibility Study', 'Resource assessment', 'Technical viability'],
                isLocked: false
            },
            {
                weekNumber: 3,
                title: 'REQUIREMENTS',
                topics: ['Requirement Analysis', 'Functional requirements', 'Non-functional requirements'],
                isLocked: true
            },
            {
                weekNumber: 4,
                title: 'DESIGN',
                topics: ['System Design', 'Architecture planning', 'Proposal Writing'],
                isLocked: true
            }
        ]
    },
    'fyp-advanced': {
        title: 'Final Year Project - Execution',
        description: 'Implementation, testing, and final documentation of your academic project.',
        weeks: [
            {
                weekNumber: 1,
                title: 'RAPID CORE',
                topics: ['Agile Implementation', 'Sprint planning', 'Version control'],
                isLocked: false
            },
            {
                weekNumber: 2,
                title: 'FAST-TRACK STRUCTURES',
                topics: ['Testing Strategies', 'Unit testing', 'Integration testing'],
                isLocked: false
            },
            {
                weekNumber: 3,
                title: 'DOCUMENTATION',
                topics: ['Documentation Standards', 'Technical writing', 'User manuals'],
                isLocked: true
            },
            {
                weekNumber: 4,
                title: 'PRESENTATION',
                topics: ['Presentation Skills', 'Demo preparation', 'Viva Preparation'],
                isLocked: true
            }
        ]
    },

    // Tech Starter
    'tech-basic': {
        title: 'Tech Starter - Level 1',
        description: 'Fundamental computer skills and logical thinking for absolute beginners.',
        weeks: [
            {
                weekNumber: 1,
                title: 'RAPID CORE',
                topics: ['Computer Basics', 'Hardware & Software', 'Operating system basics'],
                isLocked: false
            },
            {
                weekNumber: 2,
                title: 'FAST-TRACK STRUCTURES',
                topics: ['Internet Safety', 'Digital footprint', 'Online privacy'],
                isLocked: false
            },
            {
                weekNumber: 3,
                title: 'LOGIC TRAINING',
                topics: ['Logic Puzzles', 'Pattern recognition', 'Problem solving'],
                isLocked: true
            },
            {
                weekNumber: 4,
                title: 'CODING START',
                topics: ['Block-based Coding', 'Scratch programming', 'Digital Citizenship'],
                isLocked: true
            }
        ]
    },
    'tech-advanced': {
        title: 'Tech Starter - Level 2',
        description: 'Transition from user to creator with introductory coding and creation tools.',
        weeks: [
            {
                weekNumber: 1,
                title: 'RAPID CORE',
                topics: ['Introduction to Python', 'Variables & data types', 'Basic operations'],
                isLocked: false
            },
            {
                weekNumber: 2,
                title: 'FAST-TRACK STRUCTURES',
                topics: ['Building Simple Websites', 'HTML basics', 'CSS styling'],
                isLocked: false
            },
            {
                weekNumber: 3,
                title: 'CREATIVE TOOLS',
                topics: ['Basic Graphic Design', 'Canva basics', 'Design principles'],
                isLocked: true
            },
            {
                weekNumber: 4,
                title: 'FUTURE READY',
                topics: ['Problem Solving Strategies', 'Future Tech Trends', 'Innovation mindset'],
                isLocked: true
            }
        ]
    },

    // Logic and Math
    'logic-basic': {
        title: 'Logic and Math - Basic',
        description: 'Sharpen your mind with foundational logic and mathematical puzzles.',
        weeks: [
            {
                weekNumber: 1,
                title: 'RAPID CORE',
                topics: ['Propositional Logic', 'Truth tables', 'Logical operators'],
                isLocked: false
            },
            {
                weekNumber: 2,
                title: 'FAST-TRACK STRUCTURES',
                topics: ['Set Theory Basics', 'Unions & intersections', 'Venn diagrams'],
                isLocked: false
            },
            {
                weekNumber: 3,
                title: 'PATTERNS',
                topics: ['Number Patterns', 'Sequences', 'Logical Fallacies'],
                isLocked: true
            },
            {
                weekNumber: 4,
                title: 'PUZZLE SOLVING',
                topics: ['Sudoku & Grid Puzzles', 'Strategy development', 'Advanced techniques'],
                isLocked: true
            }
        ]
    },
    'logic-advanced': {
        title: 'Logic and Math - Advanced',
        description: 'Advanced problem-solving techniques for computer science and mathematics competitions.',
        weeks: [
            {
                weekNumber: 1,
                title: 'RAPID CORE',
                topics: ['Combinatorics', 'Permutations', 'Combinations'],
                isLocked: false
            },
            {
                weekNumber: 2,
                title: 'FAST-TRACK STRUCTURES',
                topics: ['Graph Theory Basics', 'Nodes & edges', 'Graph traversal'],
                isLocked: false
            },
            {
                weekNumber: 3,
                title: 'PROOF MASTERY',
                topics: ['Proof Techniques', 'Direct proofs', 'Proof by contradiction'],
                isLocked: true
            },
            {
                weekNumber: 4,
                title: 'GAME THEORY',
                topics: ['Game Theory Introduction', 'Nash equilibrium', 'Strategic thinking'],
                isLocked: true
            },
            {
                weekNumber: 5,
                title: 'CRYPTOGRAPHY',
                topics: ['Cryptography Basics', 'Encryption methods', 'Security concepts'],
                isLocked: true
            }
        ]
    }

};
