import React from "react";
import Image from "next/image";
import { LinkedinOutlined } from "@ant-design/icons";
import Link from "next/link";
import cpalavitLogo from "../public/img/cpLogoWithText.png";

const Footer = () => {
  return (
    <footer className="mt-36">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex  justify-center space-x-6 md:order-2">
          <LinkedinOutlined style={{ fontSize: "48px", color: "#F8EDE3" }} />
        </div>
        <Image
          src={cpalavitLogo}
          height={200}
          width={260}
          alt="photo of cecile palavit"
        />

        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-900 opacity-60">
            &copy; 2022 Création{" "}
            <span>
              <Link href="https://www.linkedin.com/in/bastien-le-calvez/">
                Bastien Le Calvez
              </Link>
            </span>{" "}
            - Monogramme{" "}
            <span>
              <Link href="https://www.linkedin.com/in/marie-adam-930a8175/">
                Marie Adam
              </Link>
            </span>{" "}
            - Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;