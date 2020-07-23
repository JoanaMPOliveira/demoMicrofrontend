import React from 'react';
import { shallow } from 'enzyme';
import BookList from '../BookList';

const books = [
  { name: 'R1', description: 'batman' },
  { name: 'R2', description: 'wonder woman' },
  { name: 'R3', description: 'superman' },
  { name: 'R4', description: 'aquaman' },
].map((r, i) => ({ ...r, id: `${i}`, imageSrc: '', imageDescription: '' }));

describe('BookList', () => {
  it('shows all Books if no filters are set', () => {
    const bookList = shallow(
      <BookList
        books={books}
        nameFilter=""
      />,
    );
    expect(bookList.find('BookCard')).toHaveLength(4);
  });

  it('can filter by price', () => {
    const bookList = shallow(
      <BookList
        books={books}
        nameFilter=""
      />,
    );
    expect(
      bookList.find('BookCard').prop('book').name,
    ).toEqual('R1');
  });

  it('can show multiple price ranges', () => {
    const bookList = shallow(
      <BookList
        books={books}
        nameFilter=""
      />,
    );
    const bookCards = bookList.find('BookCard');
    expect(bookCards).toHaveLength(2);
    expect(bookCards.at(0).prop('book').name).toEqual('R1');
    expect(bookCards.at(1).prop('book').name).toEqual('R2');
  });

  it('can filter by book name', () => {
    const bookList = shallow(
      <BookList
        books={books}
        nameFilter="R2"
      />,
    );
    expect(
      bookList.find('BookCard').prop('book').name,
    ).toEqual('R2');
  });

  it('can filter by book description', () => {
    const bookList = shallow(
      <BookList
        books={books}
        nameFilter="super"
      />,
    );
    expect(
      bookList.find('BookCard').prop('book').name,
    ).toEqual('R3');
  });

  it('is case-insensitive', () => {
    const bookList = shallow(
      <BookList
        books={books}
        nameFilter="AQUA"
      />,
    );
    expect(
      bookList.find('BookCard').prop('book').name,
    ).toEqual('R4');
  });

  it('can filter by both price and name at the same time', () => {
    const bookList = shallow(
      <BookList
        books={books}
        nameFilter="er"
      />,
    );
    expect(
      bookList.find('BookCard').prop('book').name,
    ).toEqual('R3');
  });
});
