import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client'
import DisplayData from './components/DisplayData';

function App() {

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    url: 'http://localhost:4000/graphql'
  });  

  return (
      <ApolloProvider client={client}>
        <div className='App'>
          <DisplayData></DisplayData>
        </div>
      </ApolloProvider>
  );
}

export default App;
