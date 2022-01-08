import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from '../graphQl/mutations';
import { useHistory } from 'react-router-native';

const useCreateReview = () => {
  const history = useHistory();
  const [ mutate, result ] = useMutation(CREATE_REVIEW, { fetchPolicy: 'no-cache' })

  const createReview = async ({ ownerName, repositoryName, rating, text }) => {
    console.log("lkjlkjlkj")
    const res = await mutate({ variables: { inputs: { ownerName, repositoryName, text, rating: parseInt(rating) }}});
    history.push(`/repositories/${res.data.createReview.repositoryId}`);
    return res.data;
  };
  return [createReview, result];
}

export default useCreateReview;