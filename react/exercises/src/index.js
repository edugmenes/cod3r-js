import React from 'react';
import ReactDOM from 'react-dom/client';
import Salute from './components/Salute';
// import Multiples, { GoodNight } from './components/Multiples';
// import GoodMorning from './components/GoodMorning';
// import First from './components/First';

// Create root (React 18):
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render component (React 18):
root.render(
    <div>
        <Salute type="Good morning" name="Eduardo"/>
    </div>
);