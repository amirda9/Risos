import {NgModule} from '@angular/core';
import {APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions,ApolloLink, DefaultOptions, InMemoryCache} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';
import { setContext } from '@apollo/client/link/context';

const uri = 'https://api.risos.co/graphql/'; // <-- add the URL of the GraphQL server here

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const basic = setContext((operation, context) => ({
    headers: {
      Accept: 'charset=utf-8',
    } ,
    useMultipart: true,
  }));
  const auth = setContext((operation, context) => {
    const token = localStorage.getItem('AUTHTOKEN');
    if (token === null) {
      return {};
    } else {
      // console.log("graph module")
      return {
        headers: {
          Authorization: `JWT ${token}`
        }
      };
    }
  });

  return {
    link: ApolloLink.from([basic, auth, httpLink.create({ uri })]),
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions
  };


}




@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
