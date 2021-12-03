import React from 'react';
import { useQuery } from '@apollo/client';
import { Text } from '../components/Text';


import { GET_REPOSITORIES  } from '../graphQl/queries';

const useRepositories = () => {

  const repositories = useQuery(GET_REPOSITORIES, {fetchPolicy: 'cache-and-network'});

  if (repositories.loading)  {
    return <Text>loading...</Text>;
  }

  // Get the nodes from the edges array
  const repositoryNodes = repositories.data
    ? repositories?.data?.repositories.edges.map(edge => {
      console.log(edge);
      return edge.node;
    })
    : [];


  return repositoryNodes;
};

export default useRepositories;