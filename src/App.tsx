import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Home } from './pages/auth-protected/Home';
import { ProfessionalProfile } from './pages/auth-protected/ProfessionalProfile';
import { BusinessProfile } from './pages/auth-protected/BusinessProfile';
import { SignIn } from './pages/public/SignIn';
import { SignUp } from './pages/public/SignUp';
import { Slash } from './pages/public/Slash';
import { useSelector } from 'react-redux';
import { AuthLayout } from './layouts/AuthLayout';
import { ErrorLayout } from './layouts/ErrorLayout';
import { Error404 } from './pages/errors/404';
import { Error502 } from './pages/errors/502';
const App: React.FC = () => {
  const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);
  return (
    <Router>
      <Routes>

        {/* Pagine pubbliche che non richiedono l'autenticazione */}

        {/** Vetrina */}
        <Route path="/" element={<Slash />} />

        {/** Login */}
        <Route path="/sign-in" element={<AuthLayout><SignIn /></AuthLayout>} />

        {/** Login */}
        <Route path="/sign-up" element={<AuthLayout><SignUp /></AuthLayout>} />

        {/* Pagine che richiedono l'autenticazione */}


        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
        <Route path="/professional-profile" element={isAuthenticated ? <ProfessionalProfile /> : <Navigate to="/login" />} />
        <Route path="/business-profile" element={isAuthenticated ? <BusinessProfile /> : <Navigate to="/login" />} />


        {/* Pagine di errore */}

        {/** Errore 404 */}
        <Route path="/error-404" element={<ErrorLayout><Error404 /></ErrorLayout>} />

        {/** Errore 502 */}
        <Route path="/error-502" element={<ErrorLayout><Error502 /></ErrorLayout>} />



        <Route path="*" element={<Navigate to="/error-404" />} />
      </Routes>
    </Router>
  );
};

export default App;
