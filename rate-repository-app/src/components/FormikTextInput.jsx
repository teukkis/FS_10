import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 1,
    marginBottom: 15,
    color: '#cc0000'
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;
  return (
    <>
      <View>
        <TextInput
          onChangeText={value => helpers.setValue(value)}
          onBlur={() => helpers.setTouched(true)}
          value={field.value}
          error={showError}
          isSecureField={name === 'password' ? true : false}
          {...props}
        />
        {showError && <Text style={styles.errorText}>{meta.error}</Text>}
        </View>
        
      </>
  );
};

export default FormikTextInput;