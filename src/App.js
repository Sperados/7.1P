import React, { useEffect, useState } from 'react';
import { Container, Image } from 'semantic-ui-react';
import Header from './components/Header';
import FeaturedArticles from './components/FeaturedArticles';
import FeaturedTutorials from './components/FeaturedTutorials';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import { auth } from './firebase';
import { faker } from '@faker-js/faker';

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>; //Loading spinner
  }

  return (
    <Router>
      <Container>
        <Header user={user} />
        {user ? (
          <>
            <Image 
              src={faker.image.url(1200, 400)} 
              centered 
              style={{ marginTop: '20px', width: '100%', height: '500px' }} 
            />
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/* Authenticated Routes: This content will display after a user is authenticated */}
            </Routes>
            <FeaturedArticles />
            <FeaturedTutorials />
            <Subscribe />
            <Footer />
          </>
        ) : (
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        )}
      </Container>
    </Router>
  );
};

export default App;
