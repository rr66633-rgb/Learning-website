import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import SpeechTherapy from "./pages/SpeechTherapy";
import ExtendedCare from "./pages/ExtendedCare";
import ParentExperience from "./pages/ParentExperience";
import Safety from "./pages/Safety";
import Contact from "./pages/Contact";
import AdminDashboard from "./pages/AdminDashboard";
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/programs" component={Programs} />
        <Route path="/speech-therapy" component={SpeechTherapy} />
        <Route path="/extended-care" component={ExtendedCare} />
        <Route path="/parent-experience" component={ParentExperience} />
        <Route path="/safety" component={Safety} />
        <Route path="/contact" component={Contact} />
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
