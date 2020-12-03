
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
