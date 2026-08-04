import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import Home from "./pages/Home";

const ExternalRedirect = ({ to }: { to: string }) => {
  useEffect(() => { window.location.replace(to); }, [to]);
  return null;
};

// Route-based code splitting: each page ships its own JS chunk.
const Pricing = lazy(() => import("./pages/Pricing"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Timetable = lazy(() => import("./pages/Timetable"));

const App = () => (
  <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          {/* Legacy pre-launch routes now redirect to live pages */}
          <Route path="/reformer" element={<Navigate to="/" replace />} />
          <Route path="/discover" element={<Navigate to="/" replace />} />
          <Route path="/reformer-signup" element={<Navigate to="/pricing" replace />} />
          <Route path="/reformerpilates" element={<ExternalRedirect to="/reformerpilates.html" />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/guides" element={<ExternalRedirect to="/guides.html" />} />
          <Route path="/faq" element={<ExternalRedirect to="/faq.html" />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
  </BrowserRouter>
);

export default App;
