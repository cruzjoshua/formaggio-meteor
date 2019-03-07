import React from 'react';
import { Container, Icon, Menu } from 'semantic-ui-react';

export default class TopIcons extends React.Component {
  render() {
    return (
        <Menu borderless className="topicons">
          <Container>
            <Menu.Item position='right'><Icon size='large' name="facebook f"/></Menu.Item>
            <Menu.Item><Icon size='large' name="twitter"/></Menu.Item>
            <Menu.Item><Icon size='large' name="instagram"/></Menu.Item>
            <Menu.Item><Icon size='large' name="tripadvisor"/></Menu.Item>
          </Container>
        </Menu>
    );
  }
}
