import React from 'react';
import { TextInput as NativeTextInput } from 'react-native';


const TextInput = ({ isSecureField, ...props }) => {
  
  return <NativeTextInput secureTextEntry={isSecureField}  {...props}/>;
};

export default TextInput;