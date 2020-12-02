import React from 'react';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import checkPropTypes  from 'check-prop-types';

// setup enzyme React Adapter
Enzyme.configure({adapter: new EnzymeAdapter()});

export const findByTestAttr=(wrapper,val)=> {
 return  wrapper.find(`#="${val}"`);
}

export const checkProps=(component,props)=> {
  const propError=checkPropTypes(component.propTypes,props,'prop',component.name)
  expect(propError).toBeUndefined()
}

