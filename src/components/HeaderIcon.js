import React, { useContext } from 'react';
import { store } from '../App';
import './HeaderIcon.css'
import Popup from './Popup';

const HeaderIcon = () => {
  const { state, dispatch } = useContext(store)
  return (
    <div className="side-icon" style={state.isBackground ? { backgroundColor: "#18222C" } : {}}>
      <button className="icon-btn" onClick={() => dispatch({ type: "toggleAudioState" })} style={{ position: "relative" }}>{state.muted ? <span style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, display: "flex", justifyContent: "center", alignItems: "center", color: "darkred", pointerEvent: "none", fontSize: "20px" }}>
        <img src={require("../assets/img/MuteLine.png")} />
      </span> : null}<img src={require("../assets/img/Sound.png")} alt="" width="18.67px" height="12.27px" /></button>
      <button className="icon-btn icon2" onClick={() => { dispatch({ type: "toggleBackground" }) }} style={{ position: "relative"}}>{state.isBackground ? <span style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, display: "flex", justifyContent: "center", alignItems: "center", color: "darkred", pointerEvent: "none", fontSize: "20px" }}>
        <img src={require("../assets/img/MuteLine.png")} />
      </span> : null}<img src={require("../assets/img/Background.png")} alt="" width="22.89px"
        height="16.73px" /></button>
      <button className="icon-btn icon3"
       onClick={(e) => {
        e.stopPropagation();
        dispatch({ type: "toggleInfo", payload: state.info ? false : true })
      }} onBlur={() => {
        dispatch({ type: "toggleInfo", payload: false })
      }}><img src={require("../assets/img/Rules.png")} alt="" width="27.11px"
        height="26.77px" />
        {state.info ? <Popup /> : null}
      </button>
    </div>
  )
}

export default HeaderIcon