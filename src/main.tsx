import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(
  <App />
);

// Signal first paint to index.html so deferred third-party tags (GTM, Meta
// Pixel) only boot after the LCP element has been painted by React.
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    (window as unknown as { __rrAppPainted?: boolean }).__rrAppPainted = true;
    window.dispatchEvent(new Event("rr:app-painted"));
  });
});
