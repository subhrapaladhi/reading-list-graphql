import {gql} from 'apollo-boost';

const getBooksQuery = gql`
    query{
      books{
        name         
        id
      }   
    }
`

const getAuthorsQuery = gql`
    query{
      authors{
        name         
        id
      }
    }
`

const addBookMutation = gql`
    mutation($name: String!, $genre: String!, $authorID: ID!){
        addBook(name: $name, genre: $genre, authorID: $authorID){
            name
            id
        }
    }
`

export{ getAuthorsQuery, getBooksQuery, addBookMutation };