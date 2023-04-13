const { gql } = require("apollo-server")

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends: [User!]
        favoriteMovies: [Movie]
    }
    
    type Movie {
        id: ID!
        name: String!
        yearOfPublication: Int!
        isInTheaters: Boolean!
    }

    type Query {
        users: [User!]!
        user(id: ID!): User!
        movies: [Movie!]!
        movie(name: String!): Movie!
    }
    


    input CreateUserInput {
        name: String!
        username: String!
        age: Int!
        nationality: Nationality = SRI_LANKA
    }

    type Mutation {
        createUser(input: CreateUserInput!): User
        updateUserName(id: ID!, newUserName: String!): User
        deleteUser(id: ID!): User
    }




    enum Nationality {
        CANADA
        SRI_LANKA
        INDIA
    }


`

module.exports = {typeDefs}