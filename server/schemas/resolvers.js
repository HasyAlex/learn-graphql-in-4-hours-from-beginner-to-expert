const { UserList, MovieList } = require("../FakeData")
const _ = require("lodash")

const resolvers = {
    Query: {
        //User Resolvers
        users: () => {
            return UserList
        },
        user: (parent, args) =>{
            const id = args.id
            const user = _.find(UserList, {id: Number(id)})
            return user
        },

        //Movie Resolvers
        movies: () =>{
            return MovieList
        },
        movie: (parent, args) =>{
            const name = args.name
            const movie = _.find(MovieList, {name})
            return movie
        },
    },

    // query GetAllUsers {
    //     users {
    //       id
    //       age
    //       name
    //       nationality
    //       username
    //       friends {
    //         age
    //         nationality
    //         name
    //       }
    //     }
    // }

    // query GetSingleUser($userId: ID!) {
    //     user(id: $userId) {
    //       name
    //     }
    // }      

    User: {
        favoriteMovies: () => {
            return _.filter(
                MovieList,
                (movie) => movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010
            );
        }
    },


    // query getAllMovies{
    //     movies {
    //       id
    //       name
    //       yearOfPublication
    //       isInTheaters
    //     }
    // }

    // query getOneMovie($name: String!){
    //     movie(name: $name) {
    //       name
    //       isInTheaters
    //       yearOfPublication
    //     }
    // }
    
    // query getUser($userId: ID!){
    //     user(id: $userId) {
    //       id
    //       name
    //       favoriteMovies {
    //         id
    //         name
    //       }
    //       friends {
    //         id
    //         name
    //       }
    //     }
    //   }
    
    Mutation: {
        createUser: (parent, args) =>{
            const user = args.input
            const lastId = UserList[UserList.length - 1].id
            user.id = lastId + 1
            UserList.push(user)

            console.log(user)
        },
        updateUserName: (parent, args) => {
            const {id, newUserName} = args
            const user = _.find(UserList,{id: Number(id)});
            user.name = newUserName
        },
        // mutation($updateUserNameId: ID!, $newUserName: String!){
        //     updateUserName(id: $updateUserNameId, newUserName: $newUserName) {
        //       id
        //     }
        // }
        //---------------------------------
        // {
        //     "updateUserNameId": 2,
        //     "newUserName": "Sudara"
        // }

        deleteUser: (parent, args) => {
            const {id} = args
            _.remove(UserList, (user) =>user.id === Number(id))
            return null
        }
        // mutation($deleteUserId: ID!) {
        //     deleteUser(id: $deleteUserId) {
        //       id
        //     }
        //   }
        //----------------------------------
        // {
        //    "deleteUserId": 3
        // }
    }
}

module.exports = { resolvers };