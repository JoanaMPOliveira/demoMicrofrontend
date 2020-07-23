import React from 'react';
import styled from 'styled-components';
import BookCard from './BookCard';

const CardContainer = styled.div`
  margin-top: 130px;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const BookList = ({ books, nameFilter }) => {
  const filteredBooks = books.filter(
    book =>
      book.name.toLowerCase().includes(nameFilter.toLowerCase()) ||
      book.about.toLowerCase().includes(nameFilter.toLowerCase()) ||
      book.author.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <CardContainer>
      {filteredBooks.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </CardContainer>
  );
};

export default BookList;
