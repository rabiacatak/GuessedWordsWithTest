import React from "react";
import PropTypes from "prop-types";
git remote add origin https://github.com/rabiacatak/MyBlog.git
  git branch -M master
git push -u origin master
export default(props)=> {

    if (props.success){
      return(
      <div id="componentCongrats">
        <span id="congratsMessage">
          Congralutations!! You guessed the word
        </span>
      </div>
      )
    } else return(
      <div id="componentCongrats">

      </div>
    )

}
