import React from 'react';
import EnzymeAdapter from 'enzyme-adapter-react-16';

// setup enzyme React Adapter
Enzyme.configure({adapter: new EnzymeAdapter()});

export const findByTestAttr=(wrapper,val)=> {
 return  wrapper.find(`#="${val}"`);

}
