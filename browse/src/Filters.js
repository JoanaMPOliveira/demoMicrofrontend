import React from 'react';
import styled from 'styled-components';
import TextInput from './components/TextInput';
import Button from './components/Button';

const mediumScreen = `@media (max-width: 830px)`;

const FilterRow = styled.div`
  padding: 30px;
  font-size: 24px;
  display: flex;

  ${mediumScreen} {
    flex-direction: column;
  }
`;

const Filters = ({
  name,
  setNameFilter,
  resetAll,
}) => (
  <FilterRow>
    <TextInput label="Search:" value={name} onChange={setNameFilter} />
    <Button onClick={resetAll}>Clear</Button>
  </FilterRow>
);

export default Filters;
