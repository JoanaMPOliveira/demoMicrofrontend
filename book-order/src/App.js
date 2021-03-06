import React from 'react';
import { Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import { createBrowserHistory } from 'history';
import Book from './Book';

const MainColumn = styled.div`
  max-width: 1150px;
  margin: 0 auto;
`;

const defaultHistory = createBrowserHistory();

const App = ({ history = defaultHistory }) => (
  <Router history={history}>
    <MainColumn>
      <Route exact path="/book/:id" component={Book} />
    </MainColumn>
  </Router>
);

export default App;
