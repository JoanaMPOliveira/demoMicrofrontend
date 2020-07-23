import React from 'react';
import styled from 'styled-components';

const Input = styled.input.attrs({ type: 'text' })`
  height: 30px;
  font-size: 16px;
  color:grey;
  margin-left: 5px;
  border: none;
`;

const Label = styled.label`
  font-size: 16px;
  margin-left: 10px;
  background-color: white;
  padding: 5px 80px 5px 5px;
  color: grey;
`;

const TextInput = ({ label, value, onChange, ...props }) => (
  <Label {...props}>
    {label}
    <Input value={value} onChange={e => onChange(e.target.value)} />
  </Label>
);

export default TextInput;
