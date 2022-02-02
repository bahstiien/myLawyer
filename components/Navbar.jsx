import React from "react";
import Image from "next/image";
import CPLogo from "../public/img/cpLogoBlack.jpg";
import CPLogoTransparent from "../public/img/cpLogoTransparent.png";
import style from "../styles/NavBar.module.css";
import Link from "next/link";
import logo from "../public/img/cpLogoWithText.png";
const Navbar = () => {
  return (
    <div>
      <div className="antialiased ">
        <div className="w-full text-green-700 font-main z-10 fixed">
          <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
            <div className="flex flex-row items-center justify-between p-4">
              <Link href="/">
                <a className="text-lg font-semibold tracking-widest text-green-900 uppercase rounded-lg focus:outline-none focus:shadow-outline">
                  <Image
                    src={logo}
                    height={130}
                    width={195}
                    alt="photo of cecile palavit"
                  />
                </a>
              </Link>
              <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"></button>
            </div>
            <nav className="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
              <a
                className="px-4 py-2 mt-2 text-sm font-semibold text-seven bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-green-900 focus:text-green-900 hover:bg-green-200 focus:bg-green-200 focus:outline-none focus:shadow-outline"
                href="#"
              >
                Présentation
              </a>
              <a
                className="px-4 py-2 mt-2 text-sm font-semibold text-seven bg-transparent rounded-lg    md:mt-0 md:ml-4 hover:text-green-900 focus:text-green-900 hover:bg-green-200 focus:bg-green-200 focus:outline-none focus:shadow-outline"
                href="#"
              >
                Domaines de compétences
              </a>
              <a
                className="px-4 py-2 mt-2 text-sm font-semibold text-seven bg-transparent rounded-lg   md:mt-0 md:ml-4 hover:text-green-900 focus:text-green-900 hover:bg-green-200 focus:bg-green-200 focus:outline-none focus:shadow-outline"
                href="#"
              >
                Actualités / Publications
              </a>
              <a
                className="px-4 py-2 mt-2 text-sm font-semibold text-seven bg-transparent rounded-lg    md:mt-0 md:ml-4 hover:text-green-900 focus:text-green-900 hover:bg-green-200 focus:bg-green-200 focus:outline-none focus:shadow-outline"
                href="#"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>

    // <nav classNameName="flex items-center justify-around bg-one h-20">
    //   <Link href="/">
    //     <Image src={CPLogoTransparent} alt="CP logo" width={50} height={50} />
    //   </Link>
    //   <div classNameName="justify-end font-main">
    //     <span classNameName={style.link}> Compétences</span>
    //     <span classNameName={style.link}> Actualités</span>
    //     <span classNameName={style.link}>Contact</span>
    //   </div>
    // </nav>
  );
};

export default Navbar;
