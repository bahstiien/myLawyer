import Image from "next/image";
import React from "react";
import { ShopOutlined, HomeOutlined } from "@ant-design/icons";
import building from "../public/img/building.png";
import brick from "../public/img/brick.png";
import shop from "../public/img/shop.png";
import document from "../public/img/document.png";
import Link from "next/link";

const Skill = () => {
  return (
    <section className="h-full w-full md:h-screen md:w-screen pt-36" id="Skill">
      <h2 className="pt-24 font-third text-seven text-5xl text-center sm:pt-0 ">
        Domaines de compétences -
      </h2>

      <div className=" overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <svg
            className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
            />
          </svg>

          <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <p className="m-2 text-seven font-main">
                  Conseils & Contentieux
                </p>
              </h2>
            </div>
            <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
              <div>
                <dt>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md text-white">
                    <Image
                      src={shop}
                      width={"36px"}
                      height={"36px"}
                      alt="building"
                    />
                  </div>
                  <p className="mt-5 text-lg leading-6 font-medium text-gray-900">
                    Baux
                  </p>
                </dt>
                <Link href="/bauxCommerciaux" passHref>
                  <dd className="mt-2 text-base text-seven cursor-pointer">
                    Baux commerciaux
                  </dd>
                </Link>

                <Link href="/bauxHabitation" passHref>
                  <dd className="mt-2 text-base text-seven cursor-pointer">
                    Baux d&apos;habitation
                  </dd>
                </Link>
              </div>

              <div>
                <dt>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md text-white">
                    <Image
                      src={building}
                      width={"36px"}
                      height={"36px"}
                      alt="building"
                    />
                  </div>
                  <p className="mt-5 text-lg leading-6 font-medium text-gray-900">
                    Gestion immobilière
                  </p>
                </dt>
                <dd className="mt-2 text-base text-seven">Copropriété</dd>
                <dd className="mt-2 text-base text-seven">Mandats</dd>
                <dd className="mt-2 text-base text-seven">Loi Hoguet</dd>
                <dd className="mt-2 text-base text-seven">
                  Acquisitions / Ventes
                </dd>
              </div>

              <div>
                <dt>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md text-white">
                    <Image
                      src={brick}
                      width={"36px"}
                      height={"36px"}
                      alt="building"
                    />
                  </div>
                  <p className="mt-5 text-lg leading-6 font-medium text-gray-900">
                    Contrats privés / Droit de la construction
                  </p>
                </dt>
                <dd className="mt-2 text-base text-seven">
                  Contrats de construction
                </dd>
                <dd className="mt-2 text-base text-seven">
                  Contrats d’architecte
                </dd>
              </div>

              <div>
                <dt>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md text-white">
                    <Image
                      src={document}
                      width={"36px"}
                      height={"36px"}
                      alt="building"
                    />
                  </div>
                  <p className="mt-5 text-lg leading-6 font-medium text-gray-900">
                    Droit public
                  </p>
                </dt>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
