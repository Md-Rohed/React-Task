import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="mx-auto flex justify-between  bg-white border p-6 w-4/5 mt-9">
      <div className="text-2xl text-red-900 font-bold flex ">
        <img className="h-10" src={logo}></img>
        <span>Todo-Text</span>
      </div>
      <div className="text-2xl"> TODO-APP</div>
    </div>
  );
};

export default Header;
