import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Home from "./pages/Home";
import Benefits from "./pages/Benefits";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Users from "./pages/Users";
import NotFound from "./pages/NotFound";
import natureBackground from "./assets/nature.jpeg";
import "./i18n"; // Initialize i18n

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen relative">
          {/* Static background image covering entire application */}
          <div
            className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
            style={{
              backgroundImage: `url(${natureBackground})`
            }}
          >
            {/* Background overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          <div className="relative z-10 min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/benefits" element={<Benefits />} />
                <Route path="/about" element={<About />} />
                <Route path="/user-types" element={<Users />} />
                <Route path="/contact" element={<Contact />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
