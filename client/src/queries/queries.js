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

const getBookQuery = gql`
    query($id:ID){
      book(id: $id){
        id
        name
        genre
        author{
          id
          name
          age
          books{
            name
            id
          }
        }
      }
    }
`

export{ getAuthorsQuery, getBooksQuery, addBookMutation, getBookQuery };