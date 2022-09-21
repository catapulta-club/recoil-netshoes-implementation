import React from 'react';
import {Image} from 'react-native';

const logo = require('../../assets/images/logo.png');

const LogoTitle = () => {
  return <Image style={{width: 150, height: 50}} source={logo} />;
};

export default LogoTitle;
