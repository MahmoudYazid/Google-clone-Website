import React from 'react'
import './footer.css'
export default function Footer() {
  return (
    <div>
      <div className="footerOne">
        <p className="FooterOneText">Egypt</p>
      </div>

      <div className="footerTwo">
        <div className="TextContainerOne">
          <p className="TextContainerOneTxt">About </p>
          <p className="TextContainerOneTxt">Advertising </p>
          <p className="TextContainerOneTxt">Business </p>
          <p className="TextContainerOneTxt">How Search works </p>
        </div>
        <div className="TextContainerTwo">
          <p className="TextContainerTwoTxt">Privacy </p>
          <p className="TextContainerTwoTxt">Terms </p>
          <p className="TextContainerTwoTxt">Settings</p>
        </div>
      </div>
    </div>
  );
}
