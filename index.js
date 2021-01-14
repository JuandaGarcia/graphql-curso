'use strict'

const { graphql, buildSchema } = require('graphql')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')

const app = express()
const port = process.env.port || 3000

//Definiendo esquema
const schema = buildSchema(`
  type Query {
    hello: String
    saludo: String
  }
`)

//Configurar los resolvers
const resolvers = {
	hello: () => 'Hola Mundo',
	saludo: () => 'Hola a Todos',
}

//ejecutar el query hello
graphql(
	schema,
	`
		{
			saludo
		}
	`,
	resolvers
).then((data) => console.log(data))
