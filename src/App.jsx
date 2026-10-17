import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import Home from './pages/Home';
import QuoteForm from './pages/QuoteForm';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import AboutUs from './pages/AboutUs';
import MarketplacePlans from './pages/MarketplacePlans';
import IndividualPlans from './pages/IndividualPlans';
import FamilyPlans from './pages/FamilyPlans';
import SelfEmployed from './pages/SelfEmployed';
import ShortTermMedical from './pages/ShortTermMedical';
import HealthInsuranceGuide from './pages/HealthInsuranceGuide';
// Add page imports here

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
    // For unknown errors, still render the app (it's a public site)
  }

  // Render the main app
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lander" element={<Home />} />
      <Route path="/quote" element={<QuoteForm />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-use" element={<TermsOfUse />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/marketplace-plans" element={<MarketplacePlans />} />
      <Route path="/individual" element={<IndividualPlans />} />
      <Route path="/family" element={<FamilyPlans />} />
      <Route path="/self-employed" element={<SelfEmployed />} />
      <Route path="/short-term-medical" element={<ShortTermMedical />} />
      <Route path="/health-insurance-guide" element={<HealthInsuranceGuide />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};


function App() {

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App