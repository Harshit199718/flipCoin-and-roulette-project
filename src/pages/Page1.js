import React, { useContext } from 'react'
import Lottie from "lottie-react";
import { useNavigate } from 'react-router-dom'
import { store } from '../App'
import CoinRotate from "../assets/lottie/#03_Coin 3D Rotation Animation 02.json"
import './Page1.css'
import HeaderIcon from '../components/HeaderIcon';

const Page1 = () => {
  const { state, dispatch } = useContext(store)
  const navigate = useNavigate()
  return (
    <div className="layer1">
      <HeaderIcon />
      <Lottie animationData={CoinRotate} loop={true} className="lotte" />
      <div className="point">
        <span>X</span> &nbsp;
        <span>{state.multiplier}</span>
      </div>
      <div className="toss-btn">
        <button className={state.selectedCoinFace === "Head" ? "selected-face btn" : "btn"} onClick={() => {
          dispatch({
            type: "UpdateSelected",
            payload: "Head"
          })
        }}>
          <div className='btn-shadow'>
          </div>
          Head<div></div></button>
        <button className={state.selectedCoinFace === "Tail" ? "selected-face btn" : "btn"} onClick={() => {
          dispatch({
            type: "UpdateSelected",
            payload: "Tail"
          })
        }}>
          <div className='btn-shadow'>
          </div> Tail <div></div></button>
      </div>
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
      <div className='flip-btn-div'>
      <button className="btn flip-btn" disabled={!state.selectedCoinFace} onClick={() => {
        navigate("/flip")
      }}>
        <div className="btn-shadow" ></div>
      Flip <div></div>
      </button>
      </div>
      <p style={{ marginBottom: "0", padding: "8px 12px", background: "rgba(32,102,130,0.4)", borderRadius: "15px", fontFamily:'myFirstFont1' }}>Flip the coin and win {parseFloat(state.betAmount * state.multiplier).toFixed(2)} Sol</p>
    </div>
  )
}

export default Page1