const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();

const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/reading-list', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology : true
})

mongoose.connection
.once('open', () => console.log('connected to db'))
.on('error', (err) => console.log(err))

const schema = require('./Schema/schema');

app.use("/graphql", graphqlHTTP({
    schema: schema,
    graphiql: true
}))

app.listen(3000, ()=>{
    console.log("now listening for requests on port 3000")
})