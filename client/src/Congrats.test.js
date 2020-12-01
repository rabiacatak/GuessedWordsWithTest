import React from 'react';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme , {shallow} from "enzyme";
import {findByTestAttr} from "../../test/testUtils";
import Congrats from "./Congrats";

Enzyme.configure({adapter: new EnzymeAdapter()});



// setup enzyme React Adapter
/**
 * Factory function to create a ShallowWrapper for the CounterDeneme Component
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup=(props={})=>{
  //also we can achive the props like that
  //props={success:true}
  return shallow(<Congrats {...props}/>)
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

