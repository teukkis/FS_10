import { gql } from '@apollo/client';


export const LOGIN = gql`
  mutation authorize($credentials: AuthorizeInput) {
    authorize(credentials: $credentials) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation createReview($inputs: CreateReviewInput) {
    createReview(review: $inputs){
      id
      repositoryId
    }
  }
`

export const SIGN_UP = gql`
  mutation createUser($user: CreateUserInput){
    createUser(user: $user){
      username
    }
  }
`;
