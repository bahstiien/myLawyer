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
        <div className="flex justify-around mt-8 flex-col items-center md:flex-row ">
          <div className="w-full md:w-2/5">
            <p className={style.description}>
              Maître Cécile Palavit est avocat, inscrite au Barreau de Lyon.
              Elle exerce principalement en droit immobilier, droit public et
              droit des contrats, en conseil et contentieux devant les
              juridictions.
            </p>
          </div>
          <div className="hidden md:flex justify-end max-h-sm max-w-sm mx-24">
            <Image
              src={cpalavit}
              // layout={"fill"}
              objectFit="cover"
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
