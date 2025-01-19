import React from "react";
import { useNavigate } from "react-router-dom";

function SideBar() {
    const navigate = useNavigate();
    const handelPage = (page:string)=>{
        navigate(page);
    }
  return (
    <nav className="col-md-2 bg-primary text-white vh-100 p-3">
      <h5>Menu Gauche</h5>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link text-white"  onClick={() => handelPage('/')}>Game earn point</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white"  onClick={() => handelPage('/winning-the-memory-game')} >Wining game</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white"  onClick={() => handelPage('/about')}>About</a>
        </li>
      </ul>
    </nav>
  );
}
export default SideBar;
