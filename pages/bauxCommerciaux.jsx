import React from "react";
import Image from "next/image";
import Layout from "../components/Layout/Layout";
import style from "../styles/welcome.module.css";
import contract from "../public/img/contract.jpeg";
import  styleBtn from "../styles/button.module.css";
import Link from "next/link";

const bauxCommerciaux = () => {
  return (
    <Layout>
      <div>
        <h1 className={style.title}> Baux commerciaux</h1>
        <div className="">
          <article className="flex m-4  italic ">
            {/* <div className={style.illustration}>
              <Image
                src={contract}
                height={1000}
                width={1600}
                alt="photo of cecile palavit"
              />
            </div> */}

            <div className="m-2">
              <p className={style.baux}>
                En France, le régime des baux commerciaux est encadré par les
                articles L.145-1 et suivants et R.145-1 et suivants du code de
                commerce. Il s’agit d’un statut qui s’applique de plein droit à
                certaines activités ou qui peut être choisi volontairement pour
                les parties pour les activités qui n’y sont pas obligatoirement
                soumises.
              </p>
              <p className={style.baux}>
                Ce régime est basé sur la protection du locataire commerçant qui
                exploite et développe un fonds de commerce pour lequel il
                détient la propriété commerciale.
              </p>
              <p className={style.baux}>
                Parmi les règles énoncées par les articles L.145-1 et suivants
                et R.145-1 et suivants du code de commerce, certaines sont
                d’ordre public (c’est-à-dire qu’il n’est pas possible d’y
                déroger par les stipulations d’un contrat) alors que d’autres
                peuvent être aménagées.
              </p>
              <p className={style.baux}>
                Les baux commerciaux sont conclus pour des durées de 9 ans
                minimum. Des durées plus courtes peuvent être exceptionnellement
                prévues sous certaines conditions dans le cadre de baux
                dérogatoires, précaires ou saisonniers.
              </p>
              <p className={style.baux}>
                Au-delà de la durée prévue contractuellement, les baux se
                poursuivent par tacite prolongation jusqu’à ce que l’une des
                parties délivre un congé avec ou sans offre de renouvellement.
              </p>
              <ul>
                <p className={style.baux}>
                  De multiples situations peuvent alors se présenter :
                </p>
                <li>
                  Le congé avec offre de renouvellement implique, une fois le
                  congé accepté sur le principe du renouvellement, de s’entendre
                  amiablement sur un montant de loyer ou de saisir le juge d’une
                  demande de fixation du loyer renouvelé. Dans certains cas, il
                  pourra être fixé à la valeur locative de marché alors que dans
                  d’autres, seule une hausse correspondant à la variation de
                  l’indice prévu au bail sera applicable ;
                </li>
                <li>
                  Le congé sans offre de renouvellement délivré par le bailleur
                  implique la fixation amiable ou judiciaire d’une indemnité
                  d’éviction visant à indemniser la perte du fonds de commerce
                  ou le déménagement du locataire (sauf cas de faute du
                  locataire ou perte du bénéfice du statut des baux commerciaux)
                  ainsi que la fixation d’une indemnité d’occupation.
                </li>
              </ul>
            </div>
          </article>
        </div>
        <div className="flex justify-center">
<Link passHref href="/#Contact">
      <button className={styleBtn.button3}> Contactez moi </button>
      </Link>
  </div>
      </div>

    

      <div className="container mb-2 flex mx-auto w-full items-center justify-center">
        <ul className="flex flex-col p-4">
          <li className=" m-4 flex flex-row">
            <div className="select-none flex flex-1 items-center transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl  p-6 hover:shadow-2xl hover:bg-teal-600">
              <div className="flex-1 pl-1 mr-16">
                <div className="font-medium">
                  Vous êtes propriétaire d’un bien que vous souhaitiez donner à
                  bail à une entreprise ou à un artisan
                </div>
              </div>
            </div>
          </li>
          <li className=" m-4 flex flex-row ">
            <div className="select-none flex flex-1 items-center transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl  p-6 hover:shadow-2xl hover:bg-teal-600">
              <div className="flex-1 pl-1 mr-16">
                <div className="font-medium">
                  Vous souhaitez actualiser ou renégocier un bail en cours ou
                  arrivé à échéance
                </div>
              </div>
            </div>
          </li>
          <li className=" m-4 flex flex-row">
            <div className="select-none flex flex-1 items-center transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl  p-6 hover:shadow-2xl hover:bg-teal-600">
              <div className="flex-1 pl-1 mr-16">
                <div className="font-medium">
                  Vous êtes un professionnel, commerçant, entreprise ou artisan
                  et souhaitez vous faire accompagner dans le cadre de la
                  rédaction et négociation de votre bail
                </div>
              </div>
            </div>
          </li>
          <li className=" m-4 flex flex-row">
            <div className="select-none flex flex-1 items-center transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl  p-6 hover:shadow-2xl hover:bg-teal-600">
              <div className="flex-1 pl-1 mr-16">
                <div className="font-medium">
                  Vous souhaitez délivrer ou avez reçu un congé avec ou sans
                  offre de renouvellement pour la date anniversaire du bail ou
                  en cours de tacite prolongation
                </div>
              </div>
            </div>
          </li>
      

          <li className=" m-4 flex flex-row">
            <div className="select-none flex flex-1 items-center transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl  p-6 hover:shadow-2xl hover:bg-teal-600">
              <div className="flex-1 pl-1 mr-16">
                <div className="font-medium">
                Vous souhaitez vous faire conseiller dans le cadre d’une procédure amiable ou judiciaire relative à la fixation du loyer de renouvellement, de l’indemnité d’éviction ou de l’indemnité d’occupation
                </div>
              </div>
            </div>
          </li>

          <li className=" m-4 flex flex-row">
            <div className="select-none flex flex-1 items-center transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl  p-6 hover:shadow-2xl hover:bg-teal-600">
              <div className="flex-1 pl-1 mr-16">
                <div className="font-medium">
                Vous avez des questions ou êtes en précontentieux ou en litige avec votre locataire ou votre propriétaire concernant la réalisation ou la prise en charge de travaux au sein des locaux
                </div>
              </div>
            </div>
          </li>

          <li className=" m-4 flex flex-row ">
            <div className="select-none flex flex-1 items-center transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl  p-6 hover:shadow-2xl hover:bg-teal-600">
              <div className="flex-1 pl-1 mr-16">
                <div className="font-medium">
                Vous avez des questions concernant la sous-location, la location-gérance, la cession d’un fonds de commerce ou souhaitez-vous faire accompagner dans le cadre de démarches relatives à ses situations
                </div>
              </div>
            </div>
          </li>

          <li className=" m-4 flex flex-row ">
            <div className="select-none flex flex-1 items-center transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl  p-6 hover:shadow-2xl hover:bg-teal-600">
              <div className="flex-1 pl-1 mr-16">
                <div className="font-medium">
                Vous souhaitez conclure un bail dérogatoire, un bail précaire ou un bail saisonnier et souhaitez vous faire accompagner dans le cadre de sa négociation et de sa rédaction
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
    </Layout>
  );
};

export default bauxCommerciaux;
