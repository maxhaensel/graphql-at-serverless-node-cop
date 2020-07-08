/** @format */

import {ApolloServer, defaultPlaygroundOptions, gql} from 'apollo-server-lambda'
import axios from 'axios'

const hello = () => 'Hello world!'
const world = async () => {
  return await new Promise((resolve, reject) => {
    axios
      .get('https://reqres.in/api/users')
      .then(response => {
        resolve(JSON.stringify(response.data))
      })
      .catch(error => {
        resolve(JSON.stringify(error))
      })
  })
}
const obj = (obj: undefined, args: any, {context, event}: any, info: any) => {
  return {a: 'a', b: 'b', c: 'c', d: JSON.stringify({args, obj, context, info})}
}
const waitLong = async (obj: undefined, {wait}: {wait: number}, {context, event}: any, info: any) => {
  return await new Promise((resolve, reject) => {
    axios
      .get('https://reqres.in/api/users')
      .then(response => {
        setTimeout(() => {
          resolve(JSON.stringify({wait, obj, context, info}))
        }, wait | 5000)
      })
      .catch(error => {
        resolve(JSON.stringify(error))
      })
  })
}

const typeDefs = gql`
  type Obj {
    a: String
    b: String
    c: String
    d: String
  }
  type Query {
    hello: String
    obj: Obj
    world: String
    waitLong(wait: Int): String
  }
`

const resolvers = {
  Query: {
    hello,
    world,
    waitLong,
    obj,
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: defaultPlaygroundOptions,
  introspection: true,
})
exports.graphqlHandler = server.createHandler({
  cors: {
    origin: true,
    credentials: true,
  },
})
