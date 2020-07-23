import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AppHeader from './AppHeader';
import MicroFrontend from './MicroFrontend';
import About from './About';

const {
  REACT_APP_BROWSE_HOST: browseHost,
  REACT_APP_BOOK_HOST: bookHost,
} = process.env;

let numBooks = 0;
fetch(`${process.env.REACT_APP_CONTENT_HOST}/books.json`)
  .then(res => res.json())
  .then(books => {
    numBooks = books.length;
  });
const getRandomBookId = () =>
  Math.floor(Math.random() * numBooks) + 1;

const Browse = ({ history }) => (
  <MicroFrontend history={history} host={browseHost} name="Browse" />
);
const Book = ({ history }) => (
  <MicroFrontend history={history} host={bookHost} name="Book" />
);
const Random = () => <Redirect to={`/book/${getRandomBookId()}`} />;

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <AppHeader />
      <Switch>
        <Route exact path="/" component={Browse} />
        <Route exact path="/book/:id" component={Book} />
        <Route exact path="/random" render={Random} />
        <Route exact path="/about" render={About} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default App;
