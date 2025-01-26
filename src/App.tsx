import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './configs/i18n';
import { auth } from './configs/firebase'; // Import Firebase auth
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Footer from './components/Footer';
import PaintingGame from './components/PaintingGame';
import AdminPanel from './components/AdminPanel'; // Admin Panel component
import AdminLogin from './components/AdminLogin';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // Listen to authentication state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user); // Update state based on user authentication
    });

    return unsubscribe; // Clean up on unmount
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Routes>
          {/* Home Page (with Header and Footer) */}
          <Route
            path="/mina-art"
            element={
              <>
                <Header />
                <Hero />
                <Gallery />
                <PaintingGame />
                <About />
                <Footer />
              </>
            }
          />

          {/* Admin Panel Route (Protected, without Header and Footer) */}
          <Route
            path="/mina-art/admin"
            element={isAuthenticated ? <AdminPanel /> : <Navigate to="/mina-art/login" />}
          />

          {/* Login Route */}
          <Route path="/mina-art/login" element={<AdminLogin />} />

          {/* Redirect any unknown routes to Home */}
          <Route path="*" element={<Navigate to="/mina-art" />} />
        </Routes>
      </Router>
    </I18nextProvider>
  );
};

export default App;
