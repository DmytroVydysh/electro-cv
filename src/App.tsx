import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Home } from './pages/auth-protected/Home';
import { ProfessionalProfile } from './pages/auth-protected/ProfessionalProfile';
import { BusinessProfile } from './pages/auth-protected/BusinessProfile';
import { SignIn } from './pages/public/SignIn';
import { SignUp } from './pages/public/SignUp';
import { Slash } from './pages/public/Slash';
import { useSelector } from 'react-redux';
import { AuthLayout } from './layouts/AuthLayout';
import { PublicLayout } from './layouts/PublicLayout';
import { ErrorLayout } from './layouts/ErrorLayout';
import { Error404 } from './pages/errors/404';
import { Error502 } from './pages/errors/502';
import { useDispatch } from 'react-redux';
import { setLanguage } from './store/src/langSlice';
import { setTheme } from './store/src/themeSlice';
import { useTranslation } from 'react-i18next';
import { setPageName } from './store/src/pageSlice';
import { AboutUs } from './pages/public/AboutUs';



// use memo to avoid re-rendering

const App: React.FC = () => {



  const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const { i18n: { changeLanguage } } = useTranslation();

  /**
   * Carica il tema salvato in locale
   */
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) dispatch(setTheme(theme));
  }, [dispatch]);

  /**
   * Carica la lingua salvata in locale
   */
  useEffect(() => {
    const lang = localStorage.getItem('lang');
    if (lang) {
      dispatch(setLanguage(lang));
      changeLanguage(lang);
    }
  }, [dispatch]);

  /**
   * Salva il nome della pagina
   * ad ogni cambio di pagina
   */
  useEffect(() => {
    dispatch(setPageName(window.location.pathname));
  }, [dispatch]);

  return (
    <Router>
      <Routes>

        {/* Pagine pubbliche che non richiedono l'autenticazione */}

        {/** Vetrina */}
        <Route path="/" element={<PublicLayout><Slash /></PublicLayout>} />
        <Route path="/about-us" element={<PublicLayout><AboutUs /></PublicLayout>} />

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
