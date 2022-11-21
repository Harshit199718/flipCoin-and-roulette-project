import React, { createContext, useEffect, useReducer, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Page5 from './pages/Page5'
import Page6 from './pages/Page6'
import Sidebar from './components/Sidebar'
import MoblieSidebar from './components/MoblieSidebar'
import mySound from "./assets/sound.mp3";
import useSound from 'use-sound'
import Page7 from './pages/Page7'
import Page8 from './pages/Page8'

const store = createContext()
const { Provider } = store
export { store }
const App = () => {
  const [playSound, { pause }] = useSound(mySound)
  const [state, dispatch] = useReducer((currentState, action) => {
    switch (action.type) {
      case "UpdateBetAmount":
        return {
          ...currentState,
          betAmount: parseFloat(action.payload)
        }
      case "UpdateFlipResult":
        return {
          ...currentState,
          flipResult: action.payload
        }
      case "UpdateSelected":
        return {
          ...currentState,
          selectedCoinFace: action.payload
        }
      case "toggleAudioState":
        return {
          ...currentState,
          muted: action.payload ? action.payload.state : !currentState.muted
        }
      case "toggleBackground":
        return {
          ...currentState,
          isBackground: !currentState.isBackground
        }
      case "toggleInfo":
        return {
          ...currentState,
          info: action.payload
        }
      case "toggleMobileSidebar":
        return {
          ...currentState,
          showMobileSidebar: action.payload
        }
      default:
        return currentState
    }
  }, {
    betAmount: 2,
    flipResult: "",
    selectedCoinFace: "Head",
    betInterval: 0.1,
    maxBet: 3,
    minBet: 1,
    multiplier: 1.95,
    muted: true,
    isBackground: false,
    showMobileSidebar: false,
    info: false
  })

  useEffect(() => {
    if (!state.muted) {
      playSound()
    } else {
      pause()
    }
  }, [state.muted])

  return (
    <>
      <div className={`App ${state.isBackground && 'gray-bg'}`} id="main-app">
        {/* <audio controls autoPlay hidden muted={state.muted} id="audio" preload='auto'>
          <source src={require("./assets/sound.mp3")} type="audio/mpeg" />unsupported !!</audio> */}
        <Provider value={{ state, dispatch }}>
          <BrowserRouter>
            <Header />
            <Sidebar />
            <MoblieSidebar />
            <Routes>
              <Route path="/" element={<Page1 />} />
              <Route path="/flip" element={<Page2 />} />
              <Route path="/won" element={<Page3 />} />
              <Route path="/lost" element={<Page4 />} />
              <Route path="/page5" element={<Page5 />} />
              <Route path="/page6" element={<Page6 />} />
              <Route path="/page7" element={<Page7/>} />
              <Route path="/page8" element={<Page8/>} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </div>
    </>
  )
}

export default App