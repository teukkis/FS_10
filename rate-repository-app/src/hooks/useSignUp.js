import { useMutation } from "@apollo/client";
import { SIGN_UP } from '../graphQl/mutations';
import { useHistory } from 'react-router-native';

const useSignUp = () => {
  const [mutate, result] = useMutation(SIGN_UP);
  const history = useHistory();

  const signUp = async ({ username, password }) => {
    const { data } = await mutate({
      variables: {
        user: { username, password }
      }
    });
    history.push('/signIn');
    return data;
  };
  return [signUp, result];
};

export default useSignUp;