
import React from "react";
import PropTypes from "prop-types";

const GuessedWords=(props)=> {

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
