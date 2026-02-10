import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Campaigns from "./pages/Campaigns";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import VerifyEmail from "./pages/VerifyEmail";
import StartCampaign from "./pages/StartCampaign";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/campaigns"} component={Campaigns} />
      <Route path={"/how-it-works"} component={HowItWorks} />
      <Route path={"/about"} component={About} />
      <Route path={"/login"} component={Login} />
      <Route path={"/register"} component={Register} />
      <Route path={"/dashboard"} component={Dashboard} />
      <Route path={"/verify-email"} component={VerifyEmail} />
      <Route path={"/start-campaign"} component={StartCampaign} />
      <Route path={"/ 404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </AuthProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
