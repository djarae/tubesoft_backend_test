import express from "express";
import {schema} from "./schema";
const { graphqlHTTP } = require('express-graphql');
// const express = require('express');
// const graphqlHTTP = require('express-graphql');


const app = express();

app.get('/',(req,res)=>{

    res.json({
        message:"Hello World"
    })
})

// const schema = {}
app.use(
    '/graphql',
    graphqlHTTP({
      graphiql: true,
      schema : schema
    })
  );

app.listen(2002,()=> console.log("server on port 2002"));