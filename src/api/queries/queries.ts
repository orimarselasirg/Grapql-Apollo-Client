import { gql } from "@apollo/client";

export const GET_CHARACTER_BY_ID = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      name
      id
      status
      species
      gender
      image
      episode {
        name
      }
    }
  }
`;

export const GET_ALL_CHARACTERS = gql`
  query GetAllCharacters($page: Int!) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
        gender
      }
    }
  }
`;