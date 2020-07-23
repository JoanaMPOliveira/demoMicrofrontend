import React from 'react';
import styled from 'styled-components';

const smallScreen = `@media(max-width: 1080px)`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;

  ${smallScreen} {
    flex-direction: column;
    align-items: center;
  }
`;

const MenuColumn = styled.section`
  display: flex;
  max-width: 100%;
  flex-direction: column;
  ${smallScreen} {
    width: 100%;
  }
`;

const ImageColumn = styled.section`
  max-width: 100%;
  ${smallScreen} {
    order: -1;
  }
`;

const RestaurantName = styled.h1`
  font-size: 40px;
  margin: 10px 0 20px;
`;

const Img = styled.img`
  width: 500px;
  max-width: 100%;
  margin-bottom: 10px;
`;

const Figure = styled.figure`
  margin: 0;
`;

const Caption = styled.figcaption`
  width: 500px;
  max-width: 100%;
  font-size: 30px;
`;

const Total = styled.div`
  align-self: flex-end;
  font-size: 30px;
  margin: 50px 0 0;

  ${smallScreen} {
    margin: 0;
  }
`;

const OrderButton = styled.button`
  padding: 10px 15px;
  margin-top: 15px;
  align-self: flex-end;
  border: none;
  background-color: #e79652;
  font-size: 25px;
`;

class BookDetails extends React.Component {
  constructor(props) {
    super(props);

  }

  submitOrder = () => {
    alert(
      `Thank you for your order of the following delicious JSON:\n
(This is the end of the demo)`,
    );
  };

  render() {
    const {
      name,
      imageSrc,
      about,
    } = this.props.book;


    return (
      <Container>
        <OrderButton onClick={this.submitOrder}>Order now</OrderButton>
        <ImageColumn>
          <RestaurantName>{name}</RestaurantName>
          <Figure>
            <Img src={imageSrc} alt="" />
            <Caption>{about}</Caption>
          </Figure>
        </ImageColumn>
      </Container>
    );
  }
}
export default BookDetails;
