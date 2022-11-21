import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { store } from '../App'
import './SmallLayer.css'

const SmallLayer = () => {
  const { state, dispatch } = useContext(store)
  const navigate = useNavigate()
  return (
    
    <div className="layer3">
      <p>Bet Amount</p>
      <div className="sol">
        <button><i className="fa fa-minus-circle" aria-hidden="true"></i></button>
        <span>{state.betAmount} SOL</span>
        <button><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
      </div>
      <div className="min-max">
        <button onClick={() => {
          dispatch({
            type: "UpdateBetAmount",
            payload: state.minBet
          })
        }}>MIN</button>&nbsp;
        <button onClick={() => {
          dispatch({
            type: "UpdateBetAmount",
            payload: state.maxBet
          })
        }}>MAX</button>
      </div>
      <div className='flip-btn-div'>
      <button className="btn flip-btn">
        <div className="btn-shadow" ></div>
      Spin <div></div>
      </button>
      </div>
    </div>
  )
}

export default SmallLayer