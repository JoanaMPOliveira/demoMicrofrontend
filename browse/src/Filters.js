import React from 'react';
import styled from 'styled-components';
import TextInput from './components/TextInput';
import Button from './components/Button';

const mediumScreen = `@media (max-width: 830px)`;

const FilterRow = styled.div`
  position:fixed;
  padding: 30px;
  font-size: 24px;
  display: flex;
  top: -10px;

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
    <TextInput label="search" value={name} onChange={setNameFilter} />
    <Button onClick={resetAll}>&times;</Button>
  </FilterRow>
);

export default Filters;
