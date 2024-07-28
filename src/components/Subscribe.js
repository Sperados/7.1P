import React, { useState } from 'react';
import { Input, Button } from 'semantic-ui-react';

const Subscribe = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    fetch('http://localhost:3000/sendWelcomeEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => console.error('Error:', error));
  };

  return (
    <div style={{ margin: '20px 0', textAlign: 'center' }}>
      <h3>SIGN UP FOR OUR DAILY INSIDER</h3>
      <Input
        type='email'
        placeholder='Enter your email'
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <Button onClick={handleSubscribe}>Subscribe</Button>
    </div>
  );
};

export default Subscribe;
