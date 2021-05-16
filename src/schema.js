//nota: la estructura de graphql puede ser engorroso de montar ,pero es sumamente util en proyectos como scrapping
//se suspende hasta el viernes 14 de mayo , quede en minuto 26 url:
//https://www.youtube.com/watch?v=Wl8O6wW4FJU&t=1737s

const { makeExecutableSchema } = require('graphql-tools');
import {resolvers} from "./resolvers";
const typeDefs = `
    type Query{
        hello : String
    }
`;
export default makeExecutableSchema({
    typeDefs : typeDefs,
    resolvers: resolvers
});
