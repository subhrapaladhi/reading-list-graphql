import React, { Component } from 'react';
import {ApolloClient, HttpLink, InMemoryCache} from 'apollo-boost'
import {ApolloProvider} from 'react-apollo';

// components
import BookList from './components/BookList';

const httpLink = new HttpLink({uri: 'http://localhost:4000/graphql'})

//apollo client setup
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})


class App extends Component {
  render(){
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Reading List</h1>
          <BookList/>
        </div>
      </ApolloProvider>
    )
  }
}

export default App;