import React from 'react';

const Footer = () => (
  <div style={{ marginTop: '20px', padding: '20px', background: '#f0f0f0', textAlign: 'center' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
      <div>
        <h4>Explore</h4>
        <ul>
          <li>Home</li>
          <li>Questions</li>
          <li>Articles</li>
          <li>Tutorials</li>
        </ul>
      </div>
      <div>
        <h4>Support</h4>
        <ul>
          <li>FAQs</li>
          <li>Help</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div>
        <h4>Stay connected</h4>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </div>
    </div>
    <p>DEV@Deakin 2022 &copy; Privacy Policy | Terms | Code of Conduct</p>
  </div>
);

export default Footer;
