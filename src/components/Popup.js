import React from 'react'
import './Popup.css'

const Popup = () => {
  return (
    <div class="pop-up">
        <p class="popup-head">Welcome to the CoinFlip!</p>
        <br/>
        <p>In this game, you have two options. Select head or tail, place your bet and check the results.</p>
        <br/>
        <p> If the game outcome is equal to your bet, <span class="win">you win.</span></p>
        <br/>
        <p>Otherwise, <span class="lose">you lose...</span></p>
        <br/>
        <p>The house edge on this game is 2.5% (<a href="#">more info</a>) </p>
        <br/>
        <p class="luck">Good luck !</p>
    </div>
  )
}

export default Popup