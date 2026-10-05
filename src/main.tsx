import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import '@fontsource-variable/manrope/index.css';
import './styles/tokens.css';
import './styles/base.css';
import './styles/components.css';
import './styles/sections.css';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Root element #root was not found in the document.');
}

const tree = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

/**
 * The production build ships prerendered HTML for every route, so the app
 * hydrates that markup when it is present and falls back to a client render
 * during development or for pages generated on the fly.
 */
if (container.hasChildNodes()) {
  hydrateRoot(container, tree);
} else {
  createRoot(container).render(tree);
}
