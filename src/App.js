import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import Header from './components/Header';
import FeaturedArticles from './components/FeaturedArticles';
import FeaturedTutorials from './components/FeaturedTutorials';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import { faker } from '@faker-js/faker';

const App = () => (
  <Container>
    <Header />
    <Image 
      src={faker.image.url(1200, 400)} 
      centered 
      style={{ marginTop: '20px', width: '100%', height: '500px' }} 
    />
    <FeaturedArticles />
    <FeaturedTutorials />
    <Subscribe />
    <Footer />
  </Container>
);

export default App;
