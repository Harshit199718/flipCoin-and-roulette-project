import React from 'react'
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar" id='sideBar'>
        <ul className="nav-list">
          <li>
           <a to="#">
             <img src={require("../assets/img/nav-icons/link1.png")} alt="" />
             <span className="links_name">Coin Flip</span>
           </a>
           <span className="tooltip">Coin Flip</span>
         </li>
         <li>
           <a to="#">
            <img src={require("../assets/img/nav-icons/link2.png")} alt="" />
             <span className="links_name">Roulette</span>
           </a>
           <span className="tooltip">Roulette</span>
         </li>
         <li>
           <a to="#">
            <img src={require("../assets/img/nav-icons/link3.png")} alt="" />
             <span className="links_name">Coming soon</span>
           </a>
           <span className="tooltip">Coming soon</span>
         </li>
         <li>
           <a to="#">
            <img src={require("../assets/img/nav-icons/link4.png")} alt="" />
             <span className="links_name">Coming soon</span>
           </a>
           <span className="tooltip">Coming soon</span>
         </li>
         <div className="hr-div"></div>
         <li>
           <a to="#">
            <img src={require("../assets/img/nav-icons/link5.png")} alt="" />
             <span className="links_name">Coming soon</span>
           </a>
           <span className="tooltip">Coming soon</span>
         </li>
         <li>
           <a to="#">
            <img src={require("../assets/img/nav-icons/link6.png")} alt="" />
             <span className="links_name">About us</span>
           </a>
           <span className="tooltip">About us</span>
         </li>
         <li>
           <a to="#">
             <img className='book-icon' src={require("../assets/img/nav-icons/link7.png")} alt="" style={{height: "auto"}}/>
             <span className="links_name">White paper</span>
           </a>
           <span className="tooltip">White paper</span>
         </li>
         <li>
           <a to="#">
             <img src={require("../assets/img/nav-icons/link8.png")} alt="" />
             <span className="links_name">Twitter</span>
           </a>
           <span className="tooltip">Twitter</span>
          </li>
        </ul>
      </div>
  )
}

export default Sidebar