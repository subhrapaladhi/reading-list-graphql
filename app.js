const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();

const schema = require('./Schema/schema');

app.use("/graphql", graphqlHTTP({
    schema: schema,
    graphiql: true
}))

app.listen(3000, ()=>{
    console.log("now listening for requests on port 3000")
})