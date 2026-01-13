import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import CoursePage from './CoursePage.tsx';
import { courses } from './data/courses.ts';

const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error('Could not find root element to mount to');
}

const CourseLoader = () => {
    const [courseId, setCourseId] = useState<string | null>(null);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        setCourseId(params.get('id'));
    }, []);

    if (!courseId) {
        return <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">Loading...</div>;
    }

    const course = courses[courseId];

    if (!course) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
                <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
                <p className="text-gray-400">The requested course ID "{courseId}" does not exist.</p>
                <a href="/" className="mt-8 px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-500 transition-colors">Return Home</a>
            </div>
        );
    }

    return (
        <CoursePage
            title={course.title}
            description={course.description}
            syllabus={course.syllabus}
        />
    );
};

const root = createRoot(rootElement);
root.render(
    <React.StrictMode>
        <CourseLoader />
    </React.StrictMode>
);
