import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  `;

const Card = styled.div`
  display: inline-block;
  width: 95%;
  max-width: 350px;
  margin: 0 5px 20px;
`;

const CardTitleRow = styled.div`
  background-color: white;
  color: grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  min-height: 125px;
`;
const TitlesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const CardTitle = styled.h2`
  margin: 0;
`;

const CardSubTitle = styled.p`
  color: grey;
  font-style: italic;

`;

const Price = styled.span`
  font-size: 16px;
  color: grey;
  font-weight: bold;
`;

const Img = styled.img`
  width: 100%;
`;

const BookCard = ({ book }) => (
  <Card>
    <StyledLink to={`/book/${book.id}`}>
      <Img src={book.imageSrc} alt='book image' />
      <CardTitleRow>
        <TitlesWrapper>
          <CardTitle>{book.name}</CardTitle>
          <CardSubTitle>{book.author}</CardSubTitle>

        </TitlesWrapper>
        <Price>{book.price} €</Price>
      </CardTitleRow>
    </StyledLink>
  </Card>
);

BookCard.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    priceRange: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookCard;
