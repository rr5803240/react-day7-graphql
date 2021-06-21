const express = require('express');
const expressGraphQL = require('express-graphql');
//Add Schema
const schema = require('./schema/schema_bk')
const port = 4800;

const app = express();

// Middle ware route to use graphl Playgorund
app.use('/graphql', expressGraphQL({
    schema,
    graphiql:true
}))

app.listen(port,() => {
    console.log(`listing to port ${port}`)
})



