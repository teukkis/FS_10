import { useApolloClient } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';
import { useHistory } from 'react-router-native';


const useSignOut = () => {
  const authStorage = useAuthStorage();
  const history = useHistory();
  const apolloClient = useApolloClient();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    history.push('/');
    return data
  };

  return signOut;
};


export default useSignOut;