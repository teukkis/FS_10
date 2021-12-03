import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import SignInForm from './signInForm';


let validationSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

const SignIn = () => {

  const onSubmit = (values) => {
    console.log(values);
  };

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

export default SignIn;
