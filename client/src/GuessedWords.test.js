import React from 'react';
import  {shallow} from "enzyme";
import {findByTestAttr,checkProps} from "../../test/testUtils";
import GuessedWords from "./GuessedWords";

const defaultProps=
  {
    guessedWords:[
      {guessedWords:'train',letterMatchCount:3}
    ]
  }
const setup=(props={})=>{
 const setupProps={...defaultProps,...props}
 return shallow(<GuessedWords {...setupProps}/>)
};

test('does not throw warning with expected props',()=>{
  checkProps(GuessedWords,defaultProps)
});

describe('If there are no words guests',()=>{
  let wrapper
  beforeEach(()=>{
    wrapper=setup({guessedWords: []})
  });
  test('render without error',()=>{
    const component=findByTestAttr(wrapper,'componentGuessedWords')
    expect(component.length).toBe(1)

  });
  test('renders instruction to guest a word',()=>{
    const instructions=findByTestAttr(wrapper,'guessInstructions')
    expect(instructions.text().length).not.toBe(0)

  })

});
describe('If there are  words guests',()=>{
  let wrapper;
  const guessedWords=[
    {guessedWord:'train',letterMatchCount:3},
    {guessedWord:'agile',letterMatchCount:1},
    {guessedWord:'party',letterMatchCount:5}
  ];
  beforeEach(()=>{
    wrapper=setup({guessedWords: []})
  });
  test('render without error',()=>{
    const guessedWordsNode=findByTestAttr(wrapper,'componentGuessedWords')
    expect(guessedWordsNode.length).toBe(1)
  });

  test('renders guessed words section',()=>{
    const guessedWordNodes=findByTestAttr(wrapper,'guessedWords')
    expect(guessedWordNodes.length).toBe(guessedWords.length)

  });
  test('correct number of guessed words',()=>{
    const component=findByTestAttr(wrapper,'guessedWord')
    expect(component.length).toBe(1)
  });
})

