import { BookOpen, Users, TrendingUp, Award, Gamepad2, Sparkles, Palette, Code, Smile, Calculator, Database, Globe, Brain, Terminal, Server, Layers } from 'lucide-react';

export interface CourseData {
    title: string;
    description: string;
    syllabus: string[];
}

export const courses: Record<string, CourseData> = {
    // Web Development
    'web-basic': {
        title: 'Web Development Foundations - Basic',
        description: 'Start your journey into web development. Learn the core technologies that power the internet: HTML to structure content and CSS to style it beautifully.',
        syllabus: [
            'How the Web Works',
            'HTML5 semantic structure',
            'CSS3 Styling & Box Model',
            'Flexbox & Grid Layouts',
            'Responsive Design Principles',
            'Building a Personal Portfolio'
        ]
    },
    'web-advanced': {
        title: 'Web Development Foundations - Advanced',
        description: 'Master modern web development with JavaScript and backend concepts. Build interactive, data-driven applications.',
        syllabus: [
            'JavaScript ES6+ Features',
            'DOM Manipulation & Events',
            'Asynchronous JavaScript (Promises, Async/Await)',
            'Introduction to React',
            'Node.js & Express Basics',
            'Database Fundamentals',
            'Deployment & Hosting'
        ]
    },

    // Data Science
    'ds-basic': {
        title: 'Data Science - Basic',
        description: 'Learn how to handle data using Python. Understand the basics of data manipulation and visualization.',
        syllabus: [
            'Introduction to Data Science',
            'Python for Data Science',
            'Numpy & Pandas Essentials',
            'Data Cleaning Techniques',
            'Data Visualization with Matplotlib & Seaborn'
        ]
    },
    'ds-advanced': {
        title: 'Data Science - Advanced',
        description: 'Dive deep into statistical analysis, big data tools, and machine learning integration.',
        syllabus: [
            'Exploratory Data Analysis (EDA)',
            'Statistical Hypothesis Testing',
            'Feature Engineering',
            'Working with Big Data (Spark basics)',
            'Data Storytelling & Reporting',
            'Capstone Project'
        ]
    },

    // Machine Learning
    'ml-basic': {
        title: 'Machine Learning - Basic',
        description: 'Understand the intuition behind ML algorithms. Learn how machines learn from data.',
        syllabus: [
            'What is Machine Learning?',
            'Supervised vs Unsupervised Learning',
            'Linear Regression',
            'Logistic Regression',
            'K-Nearest Neighbors',
            'Model Evaluation Metrics'
        ]
    },
    'ml-advanced': {
        title: 'Machine Learning - Advanced',
        description: 'Build and deploy complex ML models across various domains using industry-standard libraries.',
        syllabus: [
            'Decision Trees & Random Forests',
            'Support Vector Machines',
            'Neural Networks Intro',
            'Deep Learning with TensorFlow/PyTorch',
            'Model Deployment',
            'Ethics in AI'
        ]
    },

    // Final Year Project
    'fyp-basic': {
        title: 'Final Year Project - Planning',
        description: 'Structuring your ideas into a viable project proposal and plan.',
        syllabus: [
            'Idea Generation',
            'Feasibility Study',
            'Requirement Analysis',
            'System Design',
            'Proposal Writing'
        ]
    },
    'fyp-advanced': {
        title: 'Final Year Project - Execution',
        description: 'Implementation, testing, and final documentation of your academic project.',
        syllabus: [
            'Agile Implementation',
            'Testing Strategies',
            'Documentation Standards',
            'Presentation Skills',
            'Viva Preparation'
        ]
    },

    // Tech Starter
    'tech-basic': {
        title: 'Tech Starter - Level 1',
        description: 'Fundamental computer skills and logical thinking for absolute beginners.',
        syllabus: [
            'Computer Basics',
            'Internet Safety',
            'Logic Puzzles',
            'Block-based Coding',
            'Digital Citizenship'
        ]
    },
    'tech-advanced': {
        title: 'Tech Starter - Level 2',
        description: 'Transition from user to creator with introductory coding and creation tools.',
        syllabus: [
            'Introduction to Python',
            'Building Simple Websites',
            'Basic Graphic Design',
            'Problem Solving Strategies',
            'Future Tech Trends'
        ]
    },

    // Logic and Math
    'logic-basic': {
        title: 'Logic and Math - Basic',
        description: 'Sharpen your mind with foundational logic and mathematical puzzles.',
        syllabus: [
            'Propositional Logic',
            'Set Theory Basics',
            'Number Patterns',
            'Logical Fallacies',
            'Sudoku & Grid Puzzles'
        ]
    },
    'logic-advanced': {
        title: 'Logic and Math - Advanced',
        description: 'Advanced problem-solving techniques for computer science and mathematics competitions.',
        syllabus: [
            'Combinatorics',
            'Graph Theory Basics',
            'Proof Techniques',
            'Game Theory Introduction',
            'Cryptography Basics'
        ]
    }

};
