import React from 'react';
import { shallow } from 'enzyme';
import FavouriteForm from '../FavouriteForm';
import renderer from 'react-test-renderer';
import 'mock-local-storage';

describe('Favourite Form', () => { 
  const component = shallow(
    <FavouriteForm id={1} />
  );
  const handleSubmit = jest.fn({event: {target: {favourite: {value: true}}}});

  // Snapshot
  it('renders and matches the snapshot', () => {
    const component = renderer.create(
      <FavouriteForm id={1} onSubmit={handleSubmit} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Contains provided content
  it('contains the submit button', () => {
    expect(component.find('.favouite__button')).toHaveLength(1);
  });

  // Interactions
  it('calls', () => {
    component.instance().storeFavourited(1) ;
    expect(component.state("isFavourite")).toEqual(true);
  });
});
