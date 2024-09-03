import React from 'react';

import App from './components/App.jsx';
import { createRoot, hydrateRoot } from 'react-dom/client';
import Hydrated from './components/Hydrated.jsx';

const root = createRoot(document.getElementById('app'));
root.render(<App />);


const hydrateParent = document.getElementById('hydrateParent');
hydrateRoot(hydrateParent, <Hydrated />);
