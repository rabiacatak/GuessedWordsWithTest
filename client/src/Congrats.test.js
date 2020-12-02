import React from 'react';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme , {shallow} from "enzyme";
import {findByTestAttr,checkProps} from "../../test/testUtils";
import Congrats from "./Congrats";
import checkPropTypes  from 'check-prrop-types';

Enzyme.configure({adapter: new EnzymeAdapter()});

const defaultProps={success:false}

// setup enzyme React Adapter
/**
 * Factory function to create a ShallowWrapper for the CounterDeneme Component
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup=(props={})=>{
  //also we can achive the props like that
  //props={success:true}
  const setupProps={...defaultProps,...props}
  return shallow(<Congrats {...setupProps}/>)
}

test('renders without error', () => {
  const wrapper=setup();
  const component=findByTestAttr(wrapper,'componentCongrats')
  expect(component.length).toBe(1)
});

test('renders no text when success is props is false', () => {
  const wrapper=setup({success:false});
  const component=findByTestAttr(wrapper,'componentCongrats')
  expect(component.length).toBe('')

});

test('renders non empty congrats message when success props is true', () => {
  const wrapper=setup({success:false});
  const message=findByTestAttr(wrapper,'congratsMessage')
  expect(message.text().length).toBe(0)


});

test('does not throw error when expecting warnings', () => {
  const expectedProps=setup({success:false});
  checkProps(Congrats,expectedProps)
});

