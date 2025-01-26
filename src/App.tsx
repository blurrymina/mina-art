import React, { useEffect, useState } from 'react';
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
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // Listen to authentication state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user); // Update state based on user authentication
    });

    return unsubscribe; // Clean up on unmount
  }, []);

  // Define the routes using createBrowserRouter
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Hero />
          <Gallery />
          <PaintingGame />
          <About />
          <Footer />
        </>
      ),
    },
    {
      path: "/mina-art/admin",
      element: isAuthenticated ? <AdminPanel /> : <AdminLogin />,
    },
    {
      path: "/mina-art/login",
      element: <AdminLogin />,
    },
    {
      path: "*",
      element: <Navigate to="/mina-art" />,
    },
  ]);

  return (
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} />
    </I18nextProvider>
  );
};

export default App;
