import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";

const ExternalRedirect = ({ to }: { to: string }) => {
  useEffect(() => { window.location.replace(to); }, [to]);
  return null;
};
import Home from "./pages/Home";
import Reformer from "./pages/Reformer";
import ReformerSignup from "./pages/ReformerSignup";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reformer-signup" element={<ReformerSignup />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reformer" element={<ExternalRedirect to="/reformerpilates.html" />} />
          <Route path="/discover" element={<ExternalRedirect to="/reformerpilates.html" />} />
          <Route path="/reformerpilates" element={<ExternalRedirect to="/reformerpilates.html" />} />
          <Route path="/timetable" element={<ExternalRedirect to="/timetable/index.html" />} />
          <Route path="/teachwithus" element={<ExternalRedirect to="/teachwithus/index.html" />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
