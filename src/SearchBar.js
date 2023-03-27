import React, { useState } from 'react'
import googlelogo from './public/googlelogo_light_color_272x92dp.png'
import "./SearchBar.css";
import searchbyCam from './public/searchbyCam.png'
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar() {
   const [Name_,SetNAME]=useState("")
    const HANDLEfUNC=()=>{
        const GetTextInput = document.getElementById("SeachInputText");
        const GetSearchInputBar = document.getElementById("SeachInputBar");
        GetTextInput.style.backgroundColor = " rgb(48, 49, 52)";
        GetSearchInputBar.style.backgroundColor = " rgb(48, 49, 52)";

    }
    const FocusOut=()=>{
         const GetTextInput = document.getElementById("SeachInputText");
         const GetSearchInputBar = document.getElementById("SeachInputBar");
         GetTextInput.style.backgroundColor = "   rgb(32, 33, 36)";
         GetSearchInputBar.style.backgroundColor =" rgb(32, 33, 36)";
         document.getElementById("SeachInputBar").style.height = "2.4rem";
       

            

    }
   

  return (
    <div
      className="SearchBarMainClass"
      onClick={() => {
        document.getElementById("mahmoudlink").style.visibility = "hidden";
      }}
    >
      <img src={googlelogo} alt="googlelogo" className="ImgLogo"></img>

      <div
        id="SeachInputBar"
        className="SearchBarDiv"
        onFocusCapture={HANDLEfUNC}
        onBlur={FocusOut}
      >
        <AiOutlineSearch className="AiOutlineSearch"></AiOutlineSearch>
        <input
          type="text"
          id="SeachInputText"
          className="SearchBarText"
          onFocus={HANDLEfUNC}
          onBlur={FocusOut}
          onChange={(e) => {
            if (e.target.value.length > 0) {
              document.getElementById("SeachInputBar").style.height = "100px";
              console.log(e.target.value);
              if (
                e.target.value == "mahmou" ||
                e.target.value == "m" ||
                e.target.value == "mah" ||
                e.target.value == "mahmoud"
              ) {
                document.getElementById("mahmoudlink").style.visibility =
                  "visible";
              } else {
                document.getElementById("mahmoudlink").style.visibility =
                  "hidden";

                document.getElementById("SeachInputBar").style.height = "6vh";
              }
              if (e.target.value == "") {
                document.getElementById("mahmoudlink").style.visibility =
                  "hidden";

                document.getElementById("SeachInputBar").style.height = "6vh";
              }
            }
            SetNAME(e.target.value);
          }}
          placeholder="Search for mahmoud"
        ></input>
        <img src={searchbyCam} alt="googlelogo" className="SearchByCam"></img>
        <a
          href="https://github.com/MahmoudYazid?tab=repositories"
          id="mahmoudlink"
        >
          MahmoudYazid : Frontend Developer
        </a>
      </div>
      <div
        className="SearchBtm"
        onClick={() => {
          if (Name_.toLowerCase() == "mahmoud") {
            window.location.href =
              "https://github.com/MahmoudYazid?tab=repositories";
          }
        }}
      >
        <p className="SearchBtmText">Google Search</p>
      </div>
      <div className="Feeling_Lucky">
        <p className="Feeling_LuckyText">I'm Feeling Lucky</p>
      </div>
      <p className="textUnderSearchContainer">
        <p style={{ display: "inline", marginRight: "10px" }}>
          Google offered in:
        </p>
        <p
          style={{
            color: "rgb(163, 196, 249)",
            display: "inline",
            cursor: "pointer",
          }}
          id="arabic"
        >
          العربية
        </p>
      </p>
    </div>
  );
}
