import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './configs/i18n';
import { auth } from './configs/firebase';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Footer from './components/Footer';
import PaintingGame from './components/PaintingGame';
import AdminPanel from './components/AdminPanel';
import AdminLogin from './components/AdminLogin';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const location = useLocation();  // To track route changes
  useEffect(() => {
    // Listen to authentication state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user); // Update state based on user authentication
    });

    return unsubscribe; // Clean up on unmount
  }, []);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    const navLinks = document.querySelectorAll('header nav ul li a');
    const sections = document.querySelectorAll('section');

    // Function to update active link based on scroll position
    function updateActiveLink() {
      let closestSection: HTMLElement | null = null;
      let closestOffset = Number.POSITIVE_INFINITY;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const offset = Math.abs(rect.top);

        if (offset < closestOffset) {
          closestOffset = offset;
          closestSection = section;
        }
      });

      // Ensure last section is active when scrolled to the bottom
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        closestSection = sections[sections.length - 1];
      }

      if (closestSection) {
        navLinks.forEach((link) => link.classList.remove('active'));
        const activeLink = document.querySelector(
          `header nav ul li a[href="#${closestSection.id}"]`
        );
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    }

    // Smooth scroll functionality
    function handleClick(e: Event) {
      e.preventDefault();
      const anchor = e.currentTarget as HTMLAnchorElement;
      const href = anchor.getAttribute('href');

      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      const targetTop = target.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetTop - startPosition;
      const duration = 1000;
      let startTime: number | null = null;

      function easeInOutQuad(t: number, b: number, c: number, d: number) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      }

      function animateScroll(currentTime: number) {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) {
          requestAnimationFrame(animateScroll);
        } else {
          updateActiveLink(); // Ensure active state updates after scrolling
        }
      }

      requestAnimationFrame(animateScroll);
    }

    // Apply the smooth scroll functionality only for non-touch devices
    if (!isTouchDevice) {
      navLinks.forEach(anchor => anchor.addEventListener('click', handleClick));
    }

    // Set up scroll listener to update active link
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Ensure active link is set on initial load

    // Adjust iframe size based on viewport size
    function adjustIframeSize() {
      const iframe = document.querySelector('.painting-game iframe') as HTMLIFrameElement;
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      const isPortrait = window.innerHeight > window.innerWidth;

      if (iframe) {
        if (isPortrait) {
          iframe.style.width = '90vw';
          iframe.style.height = `${window.innerHeight - headerHeight - 120}px`;
        } else {
          iframe.style.width = '85vw';
          iframe.style.height = `${window.innerHeight - headerHeight - 100}px`;
        }
      }
    }

    window.addEventListener('load', adjustIframeSize);
    window.addEventListener('resize', adjustIframeSize);

    return () => {
      if (!isTouchDevice) {
        navLinks.forEach(anchor => anchor.removeEventListener('click', handleClick));
      }
      window.removeEventListener('scroll', updateActiveLink);
      window.removeEventListener('load', adjustIframeSize);
      window.removeEventListener('resize', adjustIframeSize);
    };
  }, [location]); // Re-run the effect when location changes

  // Intersection Observer for fade-in animation on scroll
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.section-fade');
    const observerOptions = {
      root: null,
      rootMargin: '-50px', // Adjust to trigger fade-in earlier
      threshold: [0, 0.5, 1]
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        const element = entry.target as HTMLElement;

        if (entry.isIntersecting) {
          element.style.transition = 'opacity 1.7s ease';
          element.style.opacity = '1';
        } else {
          element.style.transition = 'none';
          element.style.opacity = '0';
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    animatedElements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      animatedElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <Router basename="/mina-art"> {/* Ensure proper basename for GitHub Pages */}
        <Routes>
          <Route
            path="/"
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

          <Route
            path="/admin"
            element={isAuthenticated ? <AdminPanel /> : <Navigate to="/login" />}
          />

          <Route path="/login" element={<AdminLogin />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </I18nextProvider>
  );
};

export default App;
