import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { store } from '../App';
import './Page3.css';

const Page3 = () => {
    const navigate = useNavigate()
    const { state, dispatch } = useContext(store)
    return (
        <>
            <div className="layer1" style={{ boxShadow: "0px 0px 20px 6px #00ff00, inset 0px 0px 20px 6px #00ff00", border: "12px solid #00ff00", backgroundColor: "rgba(0 ,255, 0, 0.15)" }}>
                <h1 style={{ marginTop: 0 }}>Coin Revealed</h1>
                <div className="coin-img">
                {state.flipResult=="Head"?
                    <img src={require("../assets/img/won-coin.png")} alt="" className='lotte'/>
                    :
                    <img src={require("../assets/img/lost-coin.png")} alt="" className='lotte'/>
                    }
                </div>
                <div style={{ padding: "8px 12px", backgroundColor: "rgb(0 0 0 / 20%)", borderRadius: "50px" }}>
                    <h1 className="won-msg"><span>Congrats</span><br />
                        <span> you won {state.betAmount * state.multiplier} sol</span>
                    </h1>
                </div>
                <button className="flip-more btn" onClick={() => navigate("/")}>Flip More<div></div></button>
            </div>
        </>
    )
}

export default Page3