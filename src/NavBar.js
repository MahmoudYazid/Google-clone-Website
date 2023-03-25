import React from 'react'
import './NavBar.css'
import PointedImg from './public/icons8-circled-menu-24.png'
export default function NavBar() {
  return (
    <div className="MainCintainerNavBar" dir="rtl">
      <div className="Signinbtm">
        <p className="ParagrphOfSignin">Sign in</p>
      </div>
      <div className="SvgContainer">
        <img src={PointedImg} className="PointedImg"
        >
          
        </img>
      </div>
      <div className="NavWordContainer">
        <p className="NavWord">images</p>
        <p className="NavWord">Gmail</p>
      </div>
    </div>
  );
}
