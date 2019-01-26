import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const allUsersQuery = gql`
  query allUsersQuery {
    allUsers {
      id
      username
    }
  }
`;

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Query query={allUsersQuery}>
          {({ loading, error, data }) => {
            if (loading)
              return <h4 style={{ textAlign: 'center' }}>loading..</h4>;
            if (error) console.log(error);

            return (
              <Fragment>
                {data.allUsers.map(i => (
                  <h4 key={i.id}>{i.username}</h4>
                ))}
              </Fragment>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default Home;
