import React from 'react';
import { mount } from 'enzyme';
import Filters from '../Filters';

describe('Filters', () => {
  it('renders the filter state', () => {
    const filters = mount(
      <Filters
        name="My fav"
      />,
    );
    expect(filters.find({ type: 'text' })).toHaveProp('value', 'My fav');
  });

  it('can change the filters', () => {
    const setNameFilter = jest.fn();
    const filters = mount(
      <Filters
        name="My fav"
        setNameFilter={setNameFilter}
      />,
    );
    filters
      .find({ type: 'text' })
      .simulate('change', { target: { value: 'blargle' } });

    expect(setNameFilter).toHaveBeenCalledWith('blargle');
  });
});
