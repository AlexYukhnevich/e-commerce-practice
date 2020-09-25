import React from 'react';
import Directory from '../../components/directory';

const HomePage = ({ history }) => {
  return (
    <div className="homepage">
      <Directory history={history} />
    </div>
  )
};

export default HomePage;