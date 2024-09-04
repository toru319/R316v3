import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router,} from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ローディングシミュレーション
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        {loading ? (
          <LoadingScreen />
        ) : (
          <>
            <Navbar />
            <MainContent />
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
};

export default App;