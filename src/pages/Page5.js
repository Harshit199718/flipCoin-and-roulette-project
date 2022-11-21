import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { store } from '../App'
import Grid from '../components/Grid'
import HeaderIcon from '../components/HeaderIcon'
import SmallLayer from '../components/SmallLayer'

import './Page5.css'

const Page5 = () => {
  const { state, dispatch } = useContext(store)
  const navigate = useNavigate()
  return (
    <>
      <div className="roulette">
          <HeaderIcon />
          <div className="point" id='point'>
            <span>X</span> &nbsp;
            <span>{state.multiplier}</span>
          </div>
        <div className="layer2">
          <div className="point">
            <span>X</span> &nbsp;
            <span>{state.multiplier}</span>
          </div>

          <div className="bet">
            <p>Bet Amount</p>
            <div className="sol">
              <button onClick={() => {
                dispatch({
                  type: "UpdateBetAmount",
                  payload: parseFloat(((state.betAmount - state.betInterval) >= state.minBet) ? (state.betAmount - state.betInterval) : state.betAmount).toFixed(2)
                })
              }}><i className="fa fa-minus-circle" aria-hidden="true"></i></button>
              <span>{state.betAmount} SOL</span>
              <button onClick={() => {
                dispatch({
                  type: "UpdateBetAmount",
                  payload: parseFloat(((state.betAmount + state.betInterval) <= state.maxBet) ? (state.betAmount + state.betInterval) : state.betAmount).toFixed(2)
                })
              }}><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
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
          </div>

          <div className='flip-btn-div'>
            <button className="btn flip-btn" disabled={!state.selectedCoinFace} onClick={() => {
              navigate("/flip")
            }}>
              <div className="btn-shadow" ></div>
              Spin <div></div>
            </button>
          </div>
          <p style={{ marginBottom: "0", padding: "8px 12px", borderRadius: "15px", fontFamily: 'myFirstFont1' }}>Spin the wheel and win {parseFloat(state.betAmount * state.multiplier).toFixed(2)} Sol</p>
        </div>

        <Grid />
        <SmallLayer />
      </div>
    </>
  )
}

export default Page5