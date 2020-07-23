import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import styled from 'styled-components';
import Loading from './Loading';
import Filters from './Filters';
import BookList from './BookList';

const MainColumn = styled.div`
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const defaultFilters = {
  nameFilter: ''
};

const defaultHistory = createBrowserHistory();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      loading: true,
      error: false,
      ...defaultFilters,
    };
  }

  componentDidMount() {
    const host = process.env.REACT_APP_CONTENT_HOST;
    fetch(`${host}/books.json`)
      .then(result => result.json())
      .then(books => {
        this.setState({
          books: books.map(book => ({
            ...book,
            imageSrc: `${host}${book.imageSrc}`,
          })),
          loading: false,
        });
      })
      .catch(() => {
        this.setState({ loading: false, error: true });
      });
  }

  setNameFilter = value => this.setState({ nameFilter: value });

  resetAllFilters = () => this.setState(defaultFilters);

  render() {
    const {
      books,
      nameFilter,
      loading,
      error,
    } = this.state;

    if (loading) {
      return <Loading />;
    }

    if (error) {
      return (
        <MainColumn>
          Sorry, but the book list is unavailable right now
        </MainColumn>
      );
    }

    return (
      <Router history={this.props.history || defaultHistory}>
        <MainColumn>
          <Filters
            name={nameFilter}
            setNameFilter={this.setNameFilter}
            resetAll={this.resetAllFilters}
          />
          <BookList
            books={books}
            nameFilter={nameFilter}
          />
        </MainColumn>
      </Router>
    );
  }
}

export default App;
