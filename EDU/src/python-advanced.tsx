import React from 'react';
import { createRoot } from 'react-dom/client';
import CoursePage from './CoursePage.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error('Could not find root element to mount to');
}

const syllabus = [
    "Object-Oriented Programming (OOP)",
    "File Handling and I/O",
    "Error Handling and Exceptions",
    "Decorators and Generators",
    "Context Managers",
    "Libraries: Numpy and Pandas Basics",
    "API Interaction and JSON",
    "Final Project: Data Processing Application"
];

const root = createRoot(rootElement);
root.render(
    <React.StrictMode>
        <CoursePage
            title="Python Advanced"
            description="Take your Python skills to the next level. Learn advanced concepts, efficient coding practices, and how to build scalable applications using modern Python features."
            syllabus={syllabus}
        />
    </React.StrictMode>
);
