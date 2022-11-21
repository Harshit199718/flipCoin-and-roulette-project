import React, { useContext } from 'react';
import { store } from '../App';
import './Header.css'
import Popup from './Popup';
// import HeaderIcon from './HeaderIcon';

const Header = ({ }) => {
    const { state, dispatch } = useContext(store)
    return (
        <>
            <header id="header">
                <div className="toggle-btn" tabIndex={-1}
                >
                    <img src={require("../assets/img/bar.png")} alt="" 
                    onClick={e => {
                        dispatch({
                            type:"toggleMobileSidebar",
                            payload:true
                        })
                    //    document.getElementById("main-app").classList.toggle("move-to-left");
                    //    document.getElementById("button-toggle").classList.toggle("show-cross");
                    //    let sideItems = document.getElementsByClassName("sidebar-item")
                    //    for (var i = 0; i < sideItems.length; ++i) {
                    //        sideItems[i].classList.toggle("active");
                    //    }
                   }}
                    />
                </div>
                <div className="logo">
                    <img src={require("../assets/img/logo.png")} width="100px" height="100px" alt="" />
                </div>
                <div className="side-bar">
                    <div className="side-icon" style={state.isBackground ? { backgroundColor: "#18222C" } : {}}>
                        <button className="icon-btn" onClick={() => dispatch({ type: "toggleAudioState" })} style={{ position: "relative" }}>{state.muted ? <span style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, display: "flex", justifyContent: "center", alignItems: "center", color: "darkred", pointerEvent: "none", fontSize: "20px" }}>
                            <img src={require("../assets/img/MuteLine.png")} />
                        </span> : null}<img src={require("../assets/img/icon1.png")} alt="" width="18.67px" height="12.27px" /></button>
                        <button className="icon-btn icon2" onClick={() => { dispatch({ type: "toggleBackground" }) }} style={{ position: "relative",marginTop: '0.2rem' }}>{state.isBackground ? <span style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, display: "flex", justifyContent: "center", alignItems: "center", color: "darkred", pointerEvent: "none", fontSize: "20px" }}>
                            <img src={require("../assets/img/MuteLine.png")} />
                        </span> : null}<img src={require("../assets/img/icon2.png")} alt="" width="22.89px"
                            height="16.73px" /></button>
                        <button className="icon-btn icon3" style={{ position: "relative",marginTop: '0.2rem' }} onFocus={() => {
                            dispatch({ type: "toggleInfo", payload: true })
                        }} onBlur={() => {
                            dispatch({ type: "toggleInfo", payload: false })
                        }}><img src={require("../assets/img/icon3.png")} alt="" width="27.11px"
                            height="26.77px" />
                            {state.info ? <Popup /> : null}
                        </button>
                    </div>
                    <div className="side-connect-btn">
                        <button className="connect-btn connect-text-lg">Connect Wallet</button>
                        <button className="connect-btn connect-text">Connect</button>
                    </div>
                </div>

            </header>
        </>
    )
}

export default Header