import styled from 'styled-components';

const Button = styled.button.attrs({ type: 'button' })`
  position: absolute;
  right: 0;
  transform:translate(-60%, 0);
  height: 42px;
  width: 50px;
  font-size: 16px;
  font-weight: bold;
  background-color: transparent;
  color: grey;
  border-radius: 2px;
  border: none;
  &:hover {
    background-color: #dbda9a;
  }
  &:active {
    background-color: #f1d736;
  }
`;

export default Button;
