import React, { useState } from "react"
import { useQuery, gql, useLazyQuery } from "@apollo/client"

const QUERY_ALL_USERS = gql`
    query GetAllUsers {
        users {
        id
        age
        name
        nationality
        username
        friends {
            age
            nationality
            name
        }
    }
}
`

const QUERY_ALL_MOVIES = gql`
    query GetAllMovies {
        movies {
            name
        }
    }
`

const GET_MOVIE_BY_NAME = gql`
    query Movie($name: String!) {
        movie(name: $name) {
            name
            yearOfPublication
        }
    }
`

function DisplayData() {
    const { data, loading, error } = useQuery(QUERY_ALL_USERS)
    const { data: movieData, loading: movieLoading, error: movieError } = useQuery(QUERY_ALL_MOVIES)
    
    const [movieSearched, setMovieSearched] = useState("")
    const [fetchMovie, {data: movieSearchedData, error: movieSearchError }] = useLazyQuery(GET_MOVIE_BY_NAME)


    if(error)
        return <h3>{error}</h3>    

    // if(loading)
    //     return <h3>loading...</h3>

    if(data)
        console.log(data);

    return <div>
        {data && data.user.map((user)=>{
            return(
                <div>
                    {""}
                    <h1>Name: {user.name}</h1>
                </div>
            )
        })}

        {movieData && movieData.movies.map((movie)=>{
            return <h1>Name: {movie.name}</h1>
        })}

        <div>
            <input type="text" placeholder="Type The Movie Name" onChange={(event)=>{setMovieSearched(event.target.value)}}></input>
            <button onClick={ () => { fetchMovie({variables: {
                name: movieSearched
            }}) }}>Fetch Data</button>

            {movieSearchedData && <div>
                    <span>
                    {movieSearchedData.movie.name} {" - "} {movieSearchedData.movie.yearOfPublication}
                    </span>
                </div>}
            {movieSearchError && <h3>Error Fetching The Data</h3>}
        </div>
    </div>
}

export default DisplayData;