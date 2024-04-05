import React from "react";
import marvelLogo from "../../assets/Marvel_Logo.svg.png";
import { nav, brand, list } from "./mynavbar.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
const MyNavbar = () => {
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  return (
    <header>
      <nav id={nav}>
        <div id={brand}>
          <img className="img-fluid" src={marvelLogo} alt="Marvel's logo" />
        </div>
        <div id={list}>
          <ul className="fs-5">
            <a
              onClick={() => {
                navigate("/home");
                setParams({});
              }}
            >
              <li>Home</li>
            </a>
            <a
              onClick={() => {
                navigate("/");
                setParams({});
              }}
            >
              <li>Info</li>
            </a>
            {/* <a onClick={()=>{
              navigate('/aboutMe')
              setParams({})
            }}><li>About me</li></a> */}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default MyNavbar;
