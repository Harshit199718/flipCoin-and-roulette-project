import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { store } from '../App';
import './Page4.css';

const Page4 = () => {
    const navigate = useNavigate()
    const { state, dispatch } = useContext(store)
    return (
        <>
            {/* <!-- Card Section --> */}

            <div className="layer1">
                <h1 style ={{marginTop:0}}>Coin Revealed</h1>
                <div className="coin-img">
                    {state.flipResult=="Head"?
                    <img src={require("../assets/img/won-coin.png")} alt="" className='lotte'/>
                    :
                    <img src={require("../assets/img/lost-coin.png")} alt="" className='lotte'/>
                    }
                </div>
                <div><h1 class="msg">You lost</h1></div>
                <button className="flip-more btn" onClick={() => navigate("/")}>Try Again<div></div></button>
            </div>
        </>
    )
}

export default Page4