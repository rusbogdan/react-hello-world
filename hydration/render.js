import React from 'react';
import ReactDOMServer from 'react-dom/server';
import fs from 'fs';
import path from 'path';

import Hydrated from '../components/Hydrated'; 

// Render the component to static markup
const logoHtml = ReactDOMServer.renderToString(<Hydrated />);

// Define the output directory and file
const outputDir = path.join(process.cwd(), '../templates/');
const outputFile = path.join(outputDir, 'hydrated.html');

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Write the rendered HTML to a file
fs.writeFileSync(outputFile, logoHtml, 'utf8');

console.log(`Generated HTML saved to ${outputFile}`);