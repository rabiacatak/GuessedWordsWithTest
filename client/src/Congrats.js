import React from "react";

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
