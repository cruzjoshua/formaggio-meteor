import React from 'react';
import { Container, Image, Menu } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    const itemStyle = { color: "white" };
    return (
        <Menu borderless className='topmenu'>
          <Container>
            <Menu.Item>
              <Image src="http://courses.ics.hawaii.edu/ics314s19/morea/ui-frameworks/formaggio-logo.png"/></Menu.Item>
            <Menu.Item style={itemStyle}>HOME</Menu.Item>
            <Menu.Item style={itemStyle}>MENU</Menu.Item>
            <Menu.Item style={itemStyle}>GALLERY</Menu.Item>
            <Menu.Item style={itemStyle}>EVENTS</Menu.Item>
            <Menu.Item style={itemStyle}>RESERVATION</Menu.Item>
            <Menu.Item style={itemStyle}>ABOUT US</Menu.Item>
            <Menu.Item style={itemStyle}>CONTACT</Menu.Item>
          </Container>
        </Menu>
    );
  }
}
