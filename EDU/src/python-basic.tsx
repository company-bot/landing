import React from 'react';
import { createRoot } from 'react-dom/client';
import CoursePage from './CoursePage.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error('Could not find root element to mount to');
}

const syllabus = [
    "Introduction to Programming Logic",
    "Setting Up Python Environment",
    "Variables and Data Types",
    "Control Structures: If/Else",
    "Loops: For and While",
    "Functions and Parameters",
    "Basic Data Structures: Lists and Dictionaries",
    "Final Project: Simple Calculator"
];

const root = createRoot(rootElement);
root.render(
    <React.StrictMode>
        <CoursePage
            title="Python Basic"
            description="Master the fundamentals of Python programming. This course is designed for absolute beginners, focusing on core concepts, syntax, and problem-solving skills to build a strong foundation."
            syllabus={syllabus}
        />
    </React.StrictMode>
);
