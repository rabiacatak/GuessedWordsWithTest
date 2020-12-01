import React from 'react';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme , {shallow} from "enzyme";
import App from "./App";

Enzyme.configure({adapter: new EnzymeAdapter()});


test('renders without crashing', () => {
  const wrapper=shallow(<App/>)
  expect(wrapper).toBeTruthy()

});

// import React from 'react';
// import Header from "./Header";
// import {shallow} from "enzyme";
//
// describe('Header',()=> {
//   test('Rendering the simple component',()=>{
//     const wrapper=shallow(<Header/>);
//     expect(wrapper).toMatchSnapshot();
//   });
// });



