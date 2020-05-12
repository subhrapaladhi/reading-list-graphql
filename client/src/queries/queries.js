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
    mutation{
        addBook(name: "kldssf", genre: "fasfd", authorID:"5eb60a32bf69d925f6a44a3e"){
            name
            id
        }
    }
`

export{ getAuthorsQuery, getBooksQuery, addBookMutation };