import React, { useContext } from 'react'
import './Page6.css'
import Lottie from "lottie-react";
import SpinningWheel from "../assets/lottie/#01_Roulette Wheel Animation.json"
import Grid from '../components/Grid';
import { useNavigate } from 'react-router-dom';
import HeaderIcon from '../components/HeaderIcon';
import { store } from '../App';
import SmallLayer from '../components/SmallLayer';

const Page6 = () => {
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

                <div className="layer2 justify-space-around">
                    <h1 style={{ marginBottom: 0, marginTop: 10 }}>Spinning...</h1>
                    <Lottie animationData={SpinningWheel} loop={true} className="lotte" />
                    <div>
                        <h4>Transaction Pending</h4>
                        <div className="progress-div1">
                            <div className="progress-div2">
                            </div>
                        </div>
                    </div>
                </div>
                <Grid />
                <SmallLayer />
            </div>
        </>
    )
}

export default Page6