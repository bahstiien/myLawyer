import React, { useState } from "react";
import Image from "next/image";
import cpalavit from "../public/img/cpalavit.jpg";
import style from "../styles/welcome.module.css";
import { LinkedinOutlined } from "@ant-design/icons";
import Link from "next/link";
import styleBtn from "../styles/button.module.css";

const Welcome = () => {
  const [showBio, setShowBio] = useState(false);

  const handleToggle = () => {
    setShowBio(!showBio);
  };

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
          <div className="w-full max-h-44 md:w-2/5">
            <p className={style.description}>
              Maître Cécile Palavit est avocat, inscrite au Barreau de Lyon.
              Elle exerce principalement en droit immobilier, droit public et
              droit des contrats, en conseil et contentieux.
            </p>

            <p className={style.description}>
              Me Palavit exerce, de manière complémentaire et dans le respect
              strict de la prévention des conflits d’intérêts :
            </p>

            <p className={style.description}>
              <li>
                {" "}
                A titre principal, en qualité de collaboratrice libérale du
                <Link href="https://adaltys.com/" passHref>
                  <a target="_blank"> cabinet Adaltys</a>
                </Link>
                (Lyon), au sein de l’équipe “droit immobilier” qui accompagne
                ses clients sur les problématiques immobilières diverses et
                montages complexes, en conseil et en contentieux{" "}
              </li>
            </p>
            <p className={style.description}>
              <li>
                {" "}
                En tant que consultante auprès du cabinet{" "}
                <Link
                  href="https://www.linkedin.com/company/lex-insight/?originalSubdomain=fr"
                  passHref
                >
                  <a target="_blank">cabinet Lexinsight</a>
                </Link>{" "}
                (Paris) pour les problématiques immobilières de ce cabinet
                spécialisé en conseil juridique et stratégique des entreprises{" "}
              </li>
            </p>

            <p className={style.description}>
              <li>
                A titre individuel, Me Palavit conseille et représente des
                entreprises et des particuliers dans le cadre de leurs projets
                et problématiques immobilières. Elle accompagne en particulier
                ses clients sur des problématiques liées aux baux commerciaux,
                baux d’habitation et contrats divers du secteur de la
                construction.{" "}
              </li>
            </p>
            <div className={showBio ? "hidden" : "flex justify-center"}>
              <button className={styleBtn.button3} onClick={handleToggle}>
                {" "}
                En savoir plus
              </button>
            </div>
            <div className={showBio ? "" : "hidden"}>
              <p className="italic"> Formation </p>
              <p className={style.description}>
                Cécile Palavit est diplômée de l’université Paris 2 (Panthéon
                Assas) en droit public de l’économie et en droit de l’immobilier
                et de la construction. Elle a réalisé sa formation d’avocat au
                sein de l’Ecole de Formation des Barreaux (Paris).
              </p>
              <p className="italic"> Expériences précédentes </p>
              <p className={style.description}>
                Cécile Palavit a prêté serment en 2016 devant la Cour d’Appel de
                Paris et a exercé durant 4 ans au sein des cabinets Gide
                Loyrette Nouel et Freshfields Bruckhaus Deringer (Paris) avant
                de rejoindre la direction juridique du Paris-Saint-Germain.
              </p>

              <p className={style.description}>
                Depuis 2021, Cécile Palavit est inscrite au Barreau de Lyon.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="hidden md:flex justify-end max-h-sm max-w-sm mx-24">
              <Image
                src={cpalavit}
                objectFit="cover"
                alt="photo of cecile palavit"
                className={style.photo}
              />
            </div>

            {/* <Link
              href="https://www.linkedin.com/in/c%C3%A9cile-palavit-5a765683/"
              passHref
            >
              <a target="_blank">
                <LinkedinOutlined
                  style={{ fontSize: "48px", color: "#0077b5" }}
                />
              </a>
            </Link> */}
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-4 mr-24"></div>
    </section>
  );
};

export default Welcome;
