import { gql } from '@apollo/client';

import { REPOSITORY_CORE } from './fragments';

export const GET_REPOSITORIES = gql`
  query {
    repositories{
      totalCount
    edges {
      cursor
      node {
        id
        ownerName
        name
        createdAt
        fullName
        ratingAverage
        reviewCount
        stargazersCount
        forksCount
        ownerAvatarUrl
        description
        language
      }
    }
    }
  }
`;