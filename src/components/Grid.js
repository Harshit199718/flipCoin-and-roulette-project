import React from 'react'
import './Grid.css'

const Grid = () => {
  return (
    <div className="contain">

          <div className="left-btn-1">
            <button className="item1">1<span>to</span>18</button>
            <button className="item1">E<br />V<br />E<br />N</button>
            <button className="item1" style={{ backgroundColor: "rgba(168, 51, 51, 0.75)" }}></button>
            <button className="item1" style={{ backgroundColor: "#262121" }}></button>
            <button className="item1">0<br />0<br />0</button>
            <button className="item1">19<span>to</span>36</button>
          </div>
          <div className="left-btn-2">
            <button className="item2">1<span>st</span> 12</button>
            <button className="item2">2<span>nd</span> 12</button>
            <button className="item2">3<span>rd</span> 12</button>

          </div>
          <div className="selection2"> 
            <div className="triangle">
            <img src={require("../assets/img/Polygon.png")} alt=""/>
              <p>0</p>
            </div>
            <div className="grid-layer">
              <button className="item">1</button>
              <button className="item">2</button>
              <button className="item">3</button>
              <button className="item">4</button>
              <button className="item">5</button>
              <button className="item">6</button>
              <button className="item">7</button>
              <button className="item">8</button>
              <button className="item">9</button>
              <button className="item">10</button>
              <button className="item">11</button>
              <button className="item">12</button>
              <button className="item">13</button>
              <button className="item">14</button>
              <button className="item">15</button>
              <button className="item">16</button>
              <button className="item">17</button>
              <button className="item">18</button>
              <button className="item">19</button>
              <button className="item">20</button>
              <button className="item">21</button>
              <button className="item">22</button>
              <button className="item">23</button>
              <button className="item">24</button>
              <button className="item">25</button>
              <button className="item">26</button>
              <button className="item">27</button>
              <button className="item">28</button>
              <button className="item">29</button>
              <button className="item">30</button>
              <button className="item">31</button>
              <button className="item">32</button>
              <button className="item">33</button>
              <button className="item">34</button>
              <button className="item">35</button>
              <button className="item">36</button>
            </div>
            <div className="bottom-selection grid-layer2">
              <button className="item">2<span>to</span>1</button>
              <button className="item">2<span>to</span>1</button>
              <button className="item">2<span>to</span>1</button>
            </div>
          </div>

        </div>
  )
}

export default Grid