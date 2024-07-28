import React from 'react';
import { Card, Image, Rating, Container, Button } from 'semantic-ui-react';
import { faker } from '@faker-js/faker';

const articles = Array.from({ length: 3 }).map(() => ({
  title: faker.lorem.words(),
  description: faker.lorem.sentence(),
  author: faker.person.fullName(),
  rating: 5,
  image: faker.image.url()
}));

const FeaturedArticles = () => (
  <Container textAlign="center" style={{ marginTop: '40px' }}>
    <h2>Featured Articles</h2>
    <Card.Group centered>
      {articles.map((article, index) => (
        <Card key={index}>
          <Image src={article.image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{article.title}</Card.Header>
            <Card.Description>{article.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Rating icon="star" defaultRating={article.rating} maxRating={5} disabled />
            <span>{article.author}</span>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
    <Button basic color="grey" style={{ marginTop: '20px' }}>See all articles</Button>
  </Container>
);

export default FeaturedArticles;
