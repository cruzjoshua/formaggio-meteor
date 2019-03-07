import React from 'react';
import { Image } from 'semantic-ui-react';

export default class BottomPicture extends React.Component {
  render() {
    return (
        <Image fluid
               src='http://courses.ics.hawaii.edu/ics314s19/morea/ui-frameworks/formaggio-wine-bottles.jpg'/>
    );
  }
}
