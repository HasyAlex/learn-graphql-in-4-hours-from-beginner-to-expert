const UserList = [
    {
        id: 1,
        name: "Hasitha",
        username: "Hasy",
        age: 30,
        nationality: "CANADA"
    },
    {
        id: 2,
        name: "Kavindu",
        username: "Kavi",
        age: 30,
        nationality: "SRI_LANKA"
    },
    {
        id: 3,
        name: "Alex",
        username: "Sharma",
        age: 30,
        nationality: "INDIA",
        friends: [
            {
                id: 1,
                name: "Kavindu",
                username: "Kavi",
                age: 30,
                nationality: "SRI_LANKA"
            }
        ]
    }
]


const MovieList = [
    {   
        id: 1,
        name: "Avengers",
        yearOfPublication: 2009,
        isInTheaters: false
    },    
    {   
        id: 2,
        name: "SuperMan",
        yearOfPublication: 2002,
        isInTheaters: false
    },    
    {   
        id: 1,
        name: "Tin Tin",
        yearOfPublication: 2012,
        isInTheaters: false
    },
]

module.exports = {UserList, MovieList};