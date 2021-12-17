import { useMutation, useApolloClient } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';
import { useHistory } from 'react-router-native';
import { LOGIN } from '../graphQl/mutations';


const useSignIn = () => {
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(LOGIN);
  const history = useHistory();
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    const data = await mutate({ variables: { credentials: { username, password } } });
    await authStorage.setAccessToken(data.data.authorize.accessToken);
    apolloClient.resetStore();
    history.push('/');
    return data
  };

  return [signIn, result];
};


export default useSignIn;