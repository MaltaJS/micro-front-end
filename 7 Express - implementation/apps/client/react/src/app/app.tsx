import React from 'react';

import styled from 'styled-components';

import { Route, Link, BrowserRouter } from 'react-router-dom';

import { ReactFeatureList } from '@maltajs/react/feature-list';

import { ReactFeatureDetails } from '@maltajs/react/feature-details';

export const App = () => {
  return (
    <>
      <BrowserRouter basename="/react">
      <Route exact path="/" render={() => <ReactFeatureList />} />
      <Route 
        path="/:game" render={({ match }) => (
          <ReactFeatureDetails game={match.params.game} />
        )} />
      </BrowserRouter>
    </>
  );
};

export default App;
