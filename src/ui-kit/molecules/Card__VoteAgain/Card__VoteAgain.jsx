import React from "react"
import { EyebrowText, VoteAgainButton } from "../../atoms";

import "./Card__VoteAgain.scss"

export const Card__VoteAgain = ({ voteAgainAction, id }) =>  (
    <div className="Card__ButtonCont" >
      <EyebrowText>Thank you for your vote!</EyebrowText>
      <div>
       <VoteAgainButton voteAgainAction={() => voteAgainAction(id)} >Vote Again</VoteAgainButton>
      </div>
    </div>
)