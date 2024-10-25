import { useState } from "react";
import { Close, Menu } from "../icons/menu";

function MenuBtn({ onClick = () => {}, showMenu = false }) {
  return (
    <button
      onClick={onClick}
      className="menu-btn flex items-center rounded-md bg-[#18392A] bg-opacity-0 px-1 hover:bg-opacity-50"
    >
      {showMenu ? <Close /> : <Menu />}
    </button>
  );
}

export default MenuBtn;
