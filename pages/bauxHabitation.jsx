import React from "react";
import Layout from "../components/Layout/Layout";
import style from "../styles/welcome.module.css";
import styleBtn from "../styles/button.module.css";
import Link from "next/link";

const bauxHabitation = () => {
  return (
    <Layout>
      <div>
        <h1 className={style.title}> Baux d&apos;habitation</h1>

        <p className={style.listTitle}>Vous êtes propriétaire :</p>

        <div className="container mb-2 flex mx-auto w-full items-center justify-center">
          <ul className="flex flex-col p-4">
            <li className=" m-4 flex flex-row">
              <div className="select-none flex flex-1 items-center transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl  p-6 hover:shadow-2xl hover:bg-teal-600">
                <div className="flex-1 pl-1 mr-16">
                  <div className="font-medium">
                    Vous êtes propriétaires d’un ou plusieurs biens que vous
                    souhaitez mettre en location nue ou meublée pour des
                    locataire qui en bénéficieront à usage de résidence
                    principale
                  </div>
                </div>
              </div>
            </li>

            <li className=" m-4 flex flex-row">
              <div className="select-none flex flex-1 items-center transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl  p-6 hover:shadow-2xl hover:bg-teal-600">
                <div className="flex-1 pl-1 mr-16">
                  <div className="font-medium">
                    Vous souhaitez obtenir un bail adapté à votre situation ou
                    un avis juridique sur la trame de bail qui vous est proposée
                    par votre agence où la plateforme de gestion via laquelle
                    vous assurez la gestion de votre bien{" "}
                  </div>
                </div>
              </div>
            </li>

            <li className=" m-4 flex flex-row">
              <div className="select-none flex flex-1 items-center transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl  p-6 hover:shadow-2xl hover:bg-teal-600">
                <div className="flex-1 pl-1 mr-16">
                  <div className="font-medium">
                    Vous avez des questions juridiques sur le régime de la loi
                    du 6 juillet 1989 qui est d’application obligatoire pour les
                    locations à usage de résidence principale
                  </div>
                </div>
              </div>
            </li>

            <li className=" m-4 flex flex-row">
              <div className="select-none flex flex-1 items-center transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl  p-6 hover:shadow-2xl hover:bg-teal-600">
                <div className="flex-1 pl-1 mr-16">
                  <div className="font-medium">
                    Vous souhaitez délivrer un congé à votre locataire dans les
                    formes légales et souhaitez vous faire conseiller
                  </div>
                </div>
              </div>
            </li>

            <li className=" m-4 flex flex-row">
              <div className="select-none flex flex-1 items-center transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl  p-6 hover:shadow-2xl hover:bg-teal-600">
                <div className="flex-1 pl-1 mr-16">
                  <div className="font-medium">
                    Vous êtes en précontentieux ou en litige avec votre
                    locataire qui ne règle plus ses loyers
                  </div>
                </div>
              </div>
            </li>

            <li className=" m-4 flex flex-row">
              <div className="select-none flex flex-1 items-center transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl  p-6 hover:shadow-2xl hover:bg-teal-600">
                <div className="flex-1 pl-1 mr-16">
                  <div className="font-medium">
                    Votre locataire vous a délivré un congé et vous souhaitez
                    vous faire accompagner dans le cadre de la restitution du
                    bien
                  </div>
                </div>
              </div>
            </li>

            <li className=" m-4 flex flex-row">
              <div className="select-none flex flex-1 items-center transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl  p-6 hover:shadow-2xl hover:bg-teal-600">
                <div className="flex-1 pl-1 mr-16">
                  <div className="font-medium">
                    Vous êtes en litige avec votre locataire concernant l’état
                    de restitution du bien et le sort du dépôt de garantie ;
                  </div>
                </div>
              </div>
            </li>

            <li className=" m-4 flex flex-row">
              <div className="select-none flex flex-1 items-center transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl  p-6 hover:shadow-2xl hover:bg-teal-600">
                <div className="flex-1 pl-1 mr-16">
                  <div className="font-medium">
                    Votre locataire sous-loue votre logement contre votre
                    volonté ou propose votre bien sur des plateformes de
                    locations saisonnières type « Airbnb »;
                  </div>
                </div>
              </div>
            </li>

            <li className=" m-4 flex flex-row">
              <div className="select-none flex flex-1 items-center transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl  p-6 hover:shadow-2xl hover:bg-teal-600">
                <div className="flex-1 pl-1 mr-16">
                  <div className="font-medium">
                    vous souhaitez vous faire accompagner et/ou représenter dans
                    le cadre d’une procédure de médiation amiable ou d’un
                    contentieux devant les juridictions;
                  </div>
                </div>
              </div>
            </li>

            <li className=" m-4 flex flex-row">
              <div className="select-none flex flex-1 items-center transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl  p-6 hover:shadow-2xl hover:bg-teal-600">
                <div className="flex-1 pl-1 mr-16">
                  <div className="font-medium">
                    Vous êtes en désaccod avec l’agence immobilière que vous
                    avez mandatée pour la gestion de votre bien
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <Link passHref href="/#Contact">
            <button className={styleBtn.button3}> Contactez moi </button>
          </Link>
        </div>
        <p className={style.listTitle}>Vous êtes locataire :</p>

        <div className="container mb-2 flex mx-auto w-full items-center justify-center">
          <ul className="flex flex-col p-4">
            <li className=" m-4 flex flex-row">
              <div className="select-none flex flex-1 items-center transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl  p-6 hover:shadow-2xl hover:bg-teal-600">
                <div className="flex-1 pl-1 mr-16">
                  <div className="font-medium">
                    vous souhaitez avoir un avis juridique sur le bail qui vous
                    est proposé{" "}
                  </div>
                </div>
              </div>
            </li>

            <li className=" m-4 flex flex-row">
              <div className="select-none flex flex-1 items-center transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl  p-6 hover:shadow-2xl hover:bg-teal-600">
                <div className="flex-1 pl-1 mr-16">
                  <div className="font-medium">
                    Vous êtes dans une zone soumise au plafonnement des loyers
                    et votre loyer est supérieur au plafond légal ;
                  </div>
                </div>
              </div>
            </li>

            <li className=" m-4 flex flex-row">
              <div className="select-none flex flex-1 items-center transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl  p-6 hover:shadow-2xl hover:bg-teal-600">
                <div className="flex-1 pl-1 mr-16">
                  <div className="font-medium">
                    Vous êtes en désaccord avec votre propriétaire sur la prise
                    en charge de certains travaux ou votre logement est
                    insalubre et souhaitez vous faire conseiller et accompagner
                    dans le cadre des actions à l’encontre de votre propriétaire
                  </div>
                </div>
              </div>
            </li>

            <li className=" m-4 flex flex-row">
              <div className="select-none flex flex-1 items-center transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl  p-6 hover:shadow-2xl hover:bg-teal-600">
                <div className="flex-1 pl-1 mr-16">
                  <div className="font-medium">
                    Vous avez reçu un congé de la part de votre propriétaire et
                    souhaitez vous faire conseiller dans ce cadre
                  </div>
                </div>
              </div>
            </li>

            <li className=" m-4 flex flex-row">
              <div className="select-none flex flex-1 items-center transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl  p-6 hover:shadow-2xl hover:bg-teal-600">
                <div className="flex-1 pl-1 mr-16">
                  <div className="font-medium">
                    Vous êtes en litige avec votre propriétaire concernant
                    l’état de restitution du bien et le sort du dépôt de
                    garantie
                  </div>
                </div>
              </div>
            </li>

            <li className=" m-4 flex flex-row">
              <div className="select-none flex flex-1 items-center transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl  p-6 hover:shadow-2xl hover:bg-teal-600">
                <div className="flex-1 pl-1 mr-16">
                  <div className="font-medium">
                    vous souhaitez vous faire accompagner et/ou représenter dans
                    le cadre d’une procédure de médiation amiable ou d’un
                    contentieux devant les juridictions avec votre propriétaire
                    ou avec l’intermédaire (agence immobilière) en charge de la
                    gestion du bien
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center">
        <Link passHref href="/#Contact">
          <button className={styleBtn.button3}> Contactez moi </button>
        </Link>
      </div>
    </Layout>
  );
};

export default bauxHabitation;
