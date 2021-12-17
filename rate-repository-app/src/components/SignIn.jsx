import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import SignInForm from './signInForm';
import useSignIn from '../hooks/useSignIn'

let validationSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

const SignIn = () => {

  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const  { data }  = await signIn({ username, password });

      console.log(data.authorize.accessToken, 'no onko sitä sisällä?');
    } catch (e) {
      console.log(e);
    }
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
