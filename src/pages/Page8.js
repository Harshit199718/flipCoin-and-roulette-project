import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { store } from '../App'
import Grid from '../components/Grid'
import HeaderIcon from '../components/HeaderIcon'
import SmallLayer from '../components/SmallLayer'
import './Page8.css'

const Page8 = () => {
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

                <div className="layer2">
                    <h1 style={{ marginTop: 0 }}>Roulette Revealed</h1>
                    <div className="num-box">
                        <h1>8</h1>
                    </div>
                    <div>
                        <div><h1 class="msg">You lost</h1></div>
                    </div>
                    <button className="flip-more btn" onClick={() => navigate("/")}>Try again<div></div></button>
                </div>
                <Grid />
                <SmallLayer />

            </div>
        </>
    )
}

export default Page8