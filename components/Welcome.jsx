import React from "react";
import Image from "next/image";
import cpalavit from "../public/img/cpalavit.jpg";
import style from "../styles/welcome.module.css";
import SectionLayout from "./Layout/SectionLayout";
import { LinkedinOutlined } from "@ant-design/icons";
import Link from "next/link";

const Welcome = () => {
  return (
    <section className=" h-screen w-screen" id="Welcome">
      <div className="">
        <h2 className="font-third text-seven text-5xl text-center">
          Maître Cécile Palavit
        </h2>
        <p className="font-third text-six text-xl text-center">
          Avocat au barreau de Lyon
        </p>
        <div className="flex justify-around mt-8 flex-col md:flex-row">
          <div className="w-full md:w-2/5">
            <p className={style.description}>
              Cécile Palavit est diplômée de l’université Paris 2 (Panthéon
              Assas) en droit public des affaires et en droit de l’immobilier et
              de la construction.
            </p>
            <p className={style.description}>
              Elle a prêté serment en 2016 devant la Cour d’Appel de Paris et a
              exercé durant 4 ans au sein des cabinets Gide Loyrette Nouel et
              Freshfields Bruckhaus Deringer avant de rejoindre la direction
              juridique du Paris-Saint-Germain.
            </p>
            <p className={style.description}>
              Depuis 2021, Me Palavit est inscrite au Barreau de Lyon. Elle
              exerce en qualité de collaboratrice libérale au sein du cabinet
              Adaltys et intervient en tant que consultante au sein du cabinet
              Lexinsight. Cécile Palavit conseille et représente des entreprises
              et des particuliers dans le cadre de leurs projets et
              problématiques immobilières
            </p>
          </div>
          <div className="hidden md:flex justify-end mx-24">
            <Image
              src={cpalavit}
              width={400}
              height={380}
              alt="photo of cecile palavit"
              className={style.photo}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            href="https://www.linkedin.com/in/c%C3%A9cile-palavit-5a765683/"
            passHref
          >
            <a target="_blank">
              <LinkedinOutlined
                style={{ fontSize: "48px", color: "#0077b5" }}
              />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
