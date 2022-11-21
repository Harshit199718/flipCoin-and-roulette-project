import React, { useContext } from 'react'
import { store } from '../App'
import "./MobileSidebar.css"
function MoblieSidebar() {
    const { state, dispatch } = useContext(store)
    return (
        <>
            <div class={`nav-right visible-xs ${!state.showMobileSidebar ? "init-position" : "move-to-left"}`} style={!state.showMobileSidebar ? { display: "none" } : {}}>
                <div style={{ flex: 1 }}></div>
                <div className="" style={{ flex: 6, textAlign: "center" }}>
                    <img src={require("../assets/img/logo.png")} width="70px" height="auto" alt="" />
                </div>
                <div id="button-toggle" className='active show-cross' onClick={() => {
                    dispatch({
                        type: "toggleMobileSidebar",
                        payload: false
                    })
                }}>
                    <div class="bar top"></div>
                    <div class="bar middle"></div>
                    <div class="bar bottom"></div>
                </div>
            </div>
            <div class={`sidebar-mobile ${!state.showMobileSidebar ? "init-position" : "move-to-left"}`} style={!state.showMobileSidebar ? { display: "none" } : {}}>
                <ul class="sidebar-list">
                    <li class={`sidebar-item ${state.showMobileSidebar ? "active" : ""}`}><a class="sidebar-anchor" onClick={e => e.preventDefault()}>CoinFlip</a></li>
                    <li class={`sidebar-item ${state.showMobileSidebar ? "active" : ""}`}><a class="sidebar-anchor" onClick={e => e.preventDefault()}>Roulette</a></li>
                    <li class={`sidebar-item ${state.showMobileSidebar ? "active" : ""}`}><a class="sidebar-anchor" onClick={e => e.preventDefault()}>About us</a></li>
                    <li class={`sidebar-item ${state.showMobileSidebar ? "active" : ""}`}><a class="sidebar-anchor" onClick={e => e.preventDefault()}>White Paper</a></li>
                    <li class={`sidebar-item ${state.showMobileSidebar ? "active" : ""}`}><a class="sidebar-anchor" onClick={e => e.preventDefault()}>Twitter</a></li>
                </ul>
            </div>
        </>
    )
}

export default MoblieSidebar