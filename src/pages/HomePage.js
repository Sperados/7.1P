import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase'; // Import the auth module

const HomePage = () => {
  const history = useNavigate();
  const [loading, setLoading] = useState(true); // State to handle the loading status

  useEffect(() => {
    // Check if a user is authenticated
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setLoading(false); // End loading when user is detected
      } else {
        history('/login'); // Redirect to login if no user is authenticated
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [history]);

  if (loading) {
    return <div>Loading...</div>; //Show a loading spinner or message
  }
};

export default HomePage;
