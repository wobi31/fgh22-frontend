import React from "react";
import BCA from "./assets/asset/BCA.png"

function footer{
  return(
    <footer className="flex-col bg-black h-[439px]  ">
    <div className="flex pt-16 justify-around ">
      <div>
        <div>img</div>
        <div className="w-72 text-left text-white">
          Stop waiting in line. Buy tickets conveniently, watch movies
          quietly.
        </div>
      </div>
      <div className="text-white">
        <div>
          <img />
        </div>
        <div><img src={BCA} alt="" /></div>
        <div>naruto</div>
        <div>naruto</div>
      </div>
      <div>
        <div>img</div>
        <div>img</div>
        <div>img</div>
        <div>img</div>
      </div>
      <div className="text-white">
        <div>Follow</div>
        <div>Follow</div>
        <div>Follow</div>
        <div>Follow</div>
      </div>
    </div>
    <div className="flex pt-52  bg-black text-white justify-center">
      © 2020 Tickitz. All Rights Reserved.
    </div>
  </footer>

  )
}

export default footer;