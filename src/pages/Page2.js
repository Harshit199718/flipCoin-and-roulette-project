import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import Flipping from "../assets/lottie/#02_Fliping Coin Hand Animation 02.json"
import { store } from '../App';
import './Page2.css';

const Page2 = () => {
    const navigate = useNavigate()
    const { state, dispatch } = useContext(store)
    useEffect(() => {
        let tossResult = Math.random()
        if (tossResult >= 0.5) {
            tossResult = "Head"
        } else {
            tossResult = "Tail"
        }
        dispatch({
            type: "UpdateFlipResult",
            payload: tossResult
        })
        setTimeout(() => {
            navigate(tossResult == state.selectedCoinFace ? "/won" : "/lost")
        }, 2000)
    }, [])

    return (
        <>
            {/* <!-- Card Section --> */}
            <div className="layer1 justify-space-around">
                <h1 style={{marginBottom:0,marginTop:10}}>Flipping the coin...</h1>
                <div className="flipping-hand">
                    <Lottie animationData={Flipping} loop={true} />
                </div>
                <div>
                    <h4>Transaction Pending</h4>
                    <div className="progress-div1">
                        <div className="progress-div2">
                        </div>
                    </div>
                </div>

            </div></>
    )
}

export default Page2