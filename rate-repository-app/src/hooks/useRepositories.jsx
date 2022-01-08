import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES  } from '../graphQl/queries';

const useRepositories = (variables) => {
  const { data, error, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, { fetchPolicy: 'cache-and-network', variables });

  const handleFetchMore = () => {
    
    const canFetchMore = !loading && data && data.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) return;

    fetchMore({
      query: GET_REPOSITORIES,
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
         return {
          repositories: {
            ...fetchMoreResult.repositories,
            edges: [
              ...previousResult.repositories.edges,
              ...fetchMoreResult.repositories.edges,
            ],
          },
        };
      },
    });
  };

  if (!loading) {
    // Get the nodes from the edges array
    return {
      repositories: data ? data.repositories : [],
      fetchMore: handleFetchMore,
      loading,
      ...result,
    };

  } else {
    return "loading"
  }  
};

export default useRepositories;