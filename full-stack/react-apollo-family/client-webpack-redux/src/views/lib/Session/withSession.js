import React from 'react';
import { Query } from 'react-apollo';
import { GET_ME } from './queries';

const withSession = Component => {
  return function withSessionComponent(props) {
    return (
      <Query query={GET_ME}>
        {({ data, refetch }) => (
          <Component {...props} session={data} refetch={refetch} />
        )}
      </Query>
    );
  };
};

export default withSession;
