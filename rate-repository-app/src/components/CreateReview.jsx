
import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import FormikTextInput from './FormikTextInput';
import { View, TouchableWithoutFeedback, StyleSheet, Alert } from 'react-native';
import Text from './Text';
import useCreateReview from '../hooks/useCreateReview';
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#cccccc'
  },
  button: {
    backgroundColor: theme.backgrounds.languageTag,
    color: 'white',
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 5,
  }
});


const CreateReviewForm = ({ onSubmit }) => {

  return (
    <View style={styles.container}>
      <FormikTextInput name="ownerName" placeholder="Repository owner name" />
      <FormikTextInput name="repositoryName" placeholder="Repository name" />
      <FormikTextInput name="rating" placeholder="Rating between 0 and 100 characters" />
      <FormikTextInput name="text" placeholder="Review" multiline={true} />
      <TouchableWithoutFeedback onPress={onSubmit} >
        <Text style={styles.button}>{'Create a review'}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: ''
};

const validationSchema = yup.object().shape({
  ownerName: yup.string()
    .required('Repository owner name is required')
    .lowercase()
    .trim(),
  repositoryName: yup.string()
    .required('Repository name is a required string')
    .lowercase()
    .trim(),
  rating: yup
    .number().required('Rating is required')
    .typeError('Rating is a required number between 0 and 100')
    .min(0, 'Rating is a required number between 0 and 100')
    .max(100, 'Rating is a required number between 0 and 100'),
  text: yup
    .string()
    .trim(),
});

export const CreateReviewFormContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema} >
      { ({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const CreateReview = () => {
  const [createReview] = useCreateReview();
  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;
    try {
      await createReview({ ownerName, repositoryName, rating, text });
    } catch (e) {
      console.log(e)
    }
  };

  return <CreateReviewFormContainer onSubmit={onSubmit} />;
};

export default CreateReview;