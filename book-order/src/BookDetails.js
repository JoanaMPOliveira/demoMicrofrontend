import React from 'react';
import styled from 'styled-components';

const smallScreen = `@media(max-width: 1080px)`;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: calc(100vh - 80px);
  padding-top: 50px;
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-start;

  ${smallScreen} {
    flex-direction: column;
    align-items: center;
  }
`;

const Img = styled.img`
  width: 500px;
  max-width: 30%;
  margin-bottom: 10px;
`;

const InfoWrapper =  styled.div`
  width: 60%;
  height: 100%;
`;
const Title =  styled.h2`
  color: grey;
  font-weight: bold;
`;
const SubTiltle = styled.h3`
  font-style: italic;
  font-weight: lighter;

`;
const Price = styled.span`
  font-weight: bold;
  font-size: 16px;
  color: grey;
`;
const Description = styled.p`
  text-align: justify;
  color: grey;
`;

const OrderButton = styled.button`
  padding: 10px 15px;
  background: -webkit-linear-gradient(left, #00a1e4 0, #00a99d 100%);
  font-size: 18px;
  border: none;
  color: white;
`;

const BottomBar = styled.div`
  width: 100%;
  border-top: 1px solid grey;
  margin-top: 30px;
  padding: 20px 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const PriceWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

`;
const QuantityWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

`;
const QuantityInfo = styled.span`
  padding: 12px 30px;
  background: white;
  color: grey;
  font-size: 14px;
  min-width: 40px;
  text-align: center;
`;
const QuantityButton  = styled.button`
  padding: 8px 20px;
  background: transparent;
  font-size: 20px;
  font-weight: bold;
  border: none;
  color: grey;
`;
const TotalInfo = styled.span`
  color: grey;
`;

class BookDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    }
  }

  decrease = () => {
    this.setState(prevState => ({
      quantity: prevState.quantity - 1
    }))
  }
  increase = () => {
    this.setState(prevState => ({
      quantity: prevState.quantity + 1
    }))
  }

  submitOrder = () => {
    alert(
      `Thank you for your order:\n
      ${this.state.quantity}un ${this.props.book.name}, written by ${this.props.book.author}.\n
      Your order total price is ${parseFloat(this.props.book.price.replace(',', '.')).toFixed(2) * this.state.quantity}.  (${this.props.book.price}/un)\n
      Thank you for your preference.

(This is the end of the demo)`,
    );
  };

  render() {
    const {
      name,
      author,
      price,
      imageSrc,
      about,
    } = this.props.book;

    const { quantity } = this.state


    return (
      <Container>
        <ItemWrapper>
          <Img src={imageSrc} alt="" />
          <InfoWrapper>
            <Title>{name}</Title>
            <SubTiltle>{author}</SubTiltle>
            <Price>{price} €</Price>
            <Description>{ about }</Description>
            <BottomBar>
              <PriceWrapper>
                <QuantityWrapper>
                  <QuantityInfo>{ quantity }</QuantityInfo>
                  <QuantityButton onClick= {this.decrease} disabled={quantity === 0}>-</QuantityButton>
                  <QuantityButton onClick= {this.increase}>+</QuantityButton>
                </QuantityWrapper>
                <TotalInfo><i>Total: </i><strong>{parseFloat(price.replace(',', '.')).toFixed(2) * quantity} €</strong></TotalInfo>
              </PriceWrapper>
              <OrderButton onClick={this.submitOrder}>Order now</OrderButton>
            </BottomBar>
          </InfoWrapper>
        </ItemWrapper>
      </Container>
    );
  }
}
export default BookDetails;
