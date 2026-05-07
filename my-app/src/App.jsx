import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import SideNavBar from './components/SideNavBar';
import MobileHeader from './components/MobileHeader';
import StatusLine from './components/StatusLine';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import TechStack from './pages/TechStack';
import Status from './pages/Status';

function App() {
  const [status, setStatus] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Fetch data from the Rust backend
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080';
    fetch(`${apiUrl}/api/status`)
      .then(res => res.json())
      .then(data => setStatus(data))
      .catch(err => console.error("Failed to fetch system status:", err));
  }, []);

  // Construct dynamic status based on route
  const currentStatus = {
    ...status,
    file_path: location.pathname === '/' ? 'portfolio/index.html' : `portfolio${location.pathname}.jsx`,
  };

  return (
    <>
      <MobileHeader onMenuClick={() => setIsMobileMenuOpen(true)} />
      <SideNavBar 
        currentPath={location.pathname} 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <main className="flex-1 md:ml-64 flex flex-col min-h-screen pt-[65px] md:pt-0">
        <Routes>
          <Route path="/" element={<Home status={status} />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tech-stack" element={<TechStack />} />
          <Route path="/status" element={<Status status={status} />} />
        </Routes>
        <Footer />
        <StatusLine status={currentStatus} />
      </main>
    </>
  );
}

export default App;
