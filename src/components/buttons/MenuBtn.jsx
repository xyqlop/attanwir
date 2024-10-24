import { useState } from "react";
import { Close, Menu } from "../icons/menu";

function MenuBtn({ onClick = () => {}, showMenu = false }) {
  return (
    <button
      onClick={onClick}
      className="menu-btn flex items-center px-1 bg-[#18392A] bg-opacity-0 hover:bg-opacity-50 rounded-md"
    >
      {showMenu ? <Close /> : <Menu />}
    </button>
  );
}

export default MenuBtn;
