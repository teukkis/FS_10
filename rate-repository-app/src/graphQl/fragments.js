import { gql } from '@apollo/client';

export const REPOSITORY_CORE = gql`
  fragment repositoryCore on Repository {
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
`;
