
import React from "react";
import PropTypes from "prop-types";

const GuessedWords=(props)=> {
  let contents
  if(props.guessedWords.length===0){

    contents=(
      <span id="guessInstructions">
        Try to guess the secret word
      </span>
    )
  } else {
    const guessedWordRows=props.guessedWords.map(
      (word,index)=>
        <tr id="guessedWord" key={index}>
          <td>
            {word.guessedWords}
          </td>

          <td>
            {word.letterMatchCount}
          </td>

          <td>

          </td>
        </tr>
    );
    contents=(
      <div id="guessedWords">
        <h3>Guessed Words</h3>
        <table>
          <thead>
          <tr>
            <th>
              Guess
            </th>
            <th>
              Matching Letters
            </th>
          </tr>
          </thead>
        </table>

      </div>
    )
  }
  return(
    <div id="componentGuessedWords">
      {contents}
    </div>
  )
}

GuessedWords.propTypes={
  guessedWords:PropTypes.arrayOf(
    PropTypes.shape({
      guessedWords:PropTypes.string.isRequired,
      letterMatchCount:PropTypes.number.isRequired
    })
  ).isRequired
}

export default GuessedWords
