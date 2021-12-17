import { gql } from '@apollo/client';

import { REPOSITORY_CORE } from './fragments';

export const GET_REPOSITORIES = gql`
  query {
    repositories{
      totalCount
        pageInfo {
          hasPreviousPage
          hasNextPage
          startCursor
          endCursor
        }
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
            watchersCount
            forksCount
            openIssuesCount
            url
            ownerAvatarUrl
            description
            authorizedUserHasReviewed
            language
          }
        }
    }
  }
`;

export const GET_USERS = gql`
  query {
    users {
      edges {
        node {
          username
        }
      }
    }
  }
`;

export const IS_AUTHORIZED = gql`
  query {
    authorizedUser {
      id
      username
    }
  }
`;
