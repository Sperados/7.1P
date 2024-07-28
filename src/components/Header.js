import React from 'react';
import { Input, Menu } from 'semantic-ui-react';

const Header = () => (
  <Menu secondary>
    <Menu.Item name="DEV@Deakin" />
    <Menu.Menu position="right" style={{ flex: 1 }}>
      <Input icon="search" placeholder="Search..." style={{ width: '100%' }} />
    </Menu.Menu>
    <Menu.Item name="Post" />
    <Menu.Item name="Login" />
  </Menu>
);

export default Header;
