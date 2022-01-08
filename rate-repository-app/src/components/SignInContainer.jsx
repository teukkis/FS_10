import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import SignInForm from './signInForm';

let validationSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

const SignInContainer = ({ onSubmit }) => {

  return (
    <View>
       <Formik 
        validationSchema={validationSchema} 
        initialValues={{ username: '', password: '' }} 
        onSubmit={onSubmit}
        >
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignInContainer;
