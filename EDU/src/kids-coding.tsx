import React from 'react';
import { createRoot } from 'react-dom/client';
import KidsHub from './components/KidsHub.tsx';
import { kidsData } from './data/hub-content.ts';

const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error('Could not find root element to mount to');
}

const root = createRoot(rootElement);
root.render(
    <React.StrictMode>
        <KidsHub data={kidsData} />
    </React.StrictMode>
);
