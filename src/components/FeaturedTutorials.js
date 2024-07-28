import React from 'react';
import { Card, Image, Rating, Container, Button } from 'semantic-ui-react';
import { faker } from '@faker-js/faker';

const tutorials = Array.from({ length: 3 }).map(() => ({
  title: faker.lorem.words(),
  description: faker.lorem.sentence(),
  username: faker.internet.userName(),
  rating: faker.number.float({ min: 4, max: 5 }),
  image: faker.image.url()
}));

const FeaturedTutorials = () => (
  <Container textAlign="center" style={{ marginTop: '40px' }}>
    <h2>Featured Tutorials</h2>
    <Card.Group centered>
      {tutorials.map((tutorial, index) => (
        <Card key={index}>
          <Image src={tutorial.image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{tutorial.title}</Card.Header>
            <Card.Description>{tutorial.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Rating icon="star" defaultRating={Math.round(tutorial.rating)} maxRating={5} disabled />
            <span>{tutorial.username}</span>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
    <Button basic color="grey" style={{ marginTop: '20px', marginBottom: '20px' }}>See all tutorials</Button>
  </Container>
);

export default FeaturedTutorials;
