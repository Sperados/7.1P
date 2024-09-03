import React from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Header = () => (
  <Menu secondary>
    <Menu.Item name="DEV@Deakin" as={Link} to="/" />
    <Menu.Menu position="right" style={{ flex: 1 }}>
      <Input icon="search" placeholder="Search..." style={{ width: '100%' }} />
    </Menu.Menu>
    <Menu.Item name="Post" as={Link} to="/post" />
    <Menu.Item name="Login" as={Link} to="/login" />
  </Menu>
);

export default Header;
