import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import Text from '../components/Text';


import { GET_REPOSITORIES  } from '../graphQl/queries';

const useRepositories = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, { fetchPolicy: 'cache-and-network' });

  if (loading)  {
    return 'loading'
  }


  // Get the nodes from the edges array
  const repositoryNodes = data
    ? data?.repositories.edges.map(edge => {
      return edge.node;
    })
    : [];


  return repositoryNodes;
};

export default useRepositories;