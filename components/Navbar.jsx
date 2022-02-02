import React from "react";
import Image from "next/image";
import CPLogo from "../public/img/cpLogoBlack.jpg";
import CPLogoTransparent from "../public/img/cpLogoTransparent.png";
import style from "../styles/NavBar.module.css";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-around bg-one h-20">
      <Image src={CPLogoTransparent} alt="CP logo" width={50} height={50} />
      <div className="justify-end font-main">
        <span className={style.link}> Compétences</span>
        <span className={style.link}> Actualités</span>
        <span className={style.link}>Contact</span>
      </div>
    </nav>
  );
};

export default Navbar;
