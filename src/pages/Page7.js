import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { store } from '../App'
import Grid from '../components/Grid'
import HeaderIcon from '../components/HeaderIcon'
import SmallLayer from '../components/SmallLayer'
import './Page7.css'

const Page7 = () => {
    const navigate = useNavigate()
    const { state, dispatch } = useContext(store)
    return (
        <>
            <div className="roulette">
                <HeaderIcon />
                <div className="point" id='point'>
                    <span>X</span> &nbsp;
                    <span>{state.multiplier}</span>
                </div>

                <div className="layer2" style={{ boxShadow: "0px 0px 20px 6px #00ff00, inset 0px 0px 20px 6px #00ff00", border: "12px solid #00ff00", backgroundColor: "rgba(0 ,255, 0, 0.15)" }}>
                    <h1 style={{ marginTop: 0 }}>Roulette Revealed</h1>
                    <div className="num-box">
                        <h1>8</h1>
                    </div>
                    <div>
                        <h1 className="won-msg"><span>Congrats</span><br />
                            <span> you won {state.betAmount * state.multiplier} sol</span>
                        </h1>
                    </div>
                    <button className="flip-more btn" onClick={() => navigate("/")}>Spin More<div></div></button>
                </div>
                <Grid />
                <SmallLayer />
            </div>
        </>
    )
}

export default Page7