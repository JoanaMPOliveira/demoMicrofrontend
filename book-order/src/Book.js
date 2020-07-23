import React from 'react';
import BookDetails from './BookDetails';

class Book extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: false,
      restaurant: null,
    };
  }

  componentDidMount() {
    const host = process.env.REACT_APP_CONTENT_HOST;
    const id = this.props.match.params.id;

    fetch(`${host}/books/${id}.json`)
      .then(result => result.json())
      .then(book => {
        this.setState({
          book: {
            ...book,
            imageSrc: `${host}${book.imageSrc}`,
          },
          loading: false,
        });
      })
      .catch(() => {
        this.setState({ loading: false, error: true });
      });
  }

  render() {
    if (this.state.loading) {
      return 'Loading';
    }
    if (this.state.error) {
      return 'Sorry, but that book is currently unavailable.';
    }

    return <BookDetails book={this.state.book} />;
  }
}

export default Book;
