import React from 'react';
import { View } from 'react-native';

import Text from './Text';

const AppBarTab = ({ text, color, fontWeight }) => {
  return (
  <View >
      <Text color={color} fontWeight={fontWeight}>{text}</Text>
  </View>
  );
};

export default AppBarTab;