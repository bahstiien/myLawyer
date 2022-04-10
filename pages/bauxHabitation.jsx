import React from "react";
import Layout from "../components/Layout/Layout";
import style from "../styles/welcome.module.css";

const bauxHabitation = () => {
  return (
    <Layout>
      <div>
        <h1 className={style.title}> Baux d&apos;habitation</h1>
        <article className={style.box}>
          <p className={style.listTitle}>Vous êtes propriétaires :</p>
          <ul className="list-disc">
            <li>
              Vous êtes propriétaires d’un ou plusieurs biens que vous souhaitez
              mettre en location nue ou meublée pour des locataire qui en
              bénéficieront à usage de résidence principale ;
            </li>
            <li>
              vous souhaitez obtenir un bail adapté à votre situation ou un avis
              juridique sur la trame de bail qui vous est proposée par votre
              agence où la plateforme de gestion via laquelle vous assurez la
              gestion de votre bien ;
            </li>
            <li>
              Vous avez des questions juridiques sur le régime de la loi du 6
              juillet 1989 qui est d’application obligatoire pour les locations
              à usage de résidence principale
            </li>
            <li>
              Vous souhaitez délivrer un congé à votre locataire dans les formes
              légales et souhaitez vous faire conseiller
            </li>
            <li>
              Vous êtes en précontentieux ou en litige avec votre locataire qui
              ne règle plus ses loyers
            </li>
            Votre locataire vous a délivré un congé et vous souhaitez vous faire
            accompagner dans le cadre de la restitution du bien
            <li>
              Vous êtes en litige avec votre locataire concernant l’état de
              restitution du bien et le sort du dépôt de garantie ;
            </li>
            <li>
              Vous êtes en litige avec votre locataire concernant l’état de
              restitution du bien et le sort du dépôt de garantie ;
            </li>
            <li>
              Votre locataire sous-loue votre logement contre votre volonté ou
              propose votre bien sur des plateformes de locations saisonnières
              type « Airbnb »;
            </li>
            <li>
              vous souhaitez vous faire accompagner et/ou représenter dans le
              cadre d’une procédure de médiation amiable ou d’un contentieux
              devant les juridictions;
            </li>
            <li>
              Vous êtes en désaccod avec l’agence immobilière que vous avez
              mandatée pour la gestion de votre bien
            </li>
          </ul>
        </article>

        <article className={style.box}>
          <p className={style.listTitle}>vous êtes locataires :</p>
          <ul className="list-disc">
            <li>
              vous souhaitez avoir un avis juridique sur le bail qui vous est
              proposé
            </li>
            <li>
              Vous êtes dans une zone soumise au plafonnement des loyers et
              votre loyer est supérieur au plafond légal ;
            </li>
            <li>
              Vous êtes en désaccord avec votre propriétaire sur la prise en
              charge de certains travaux ou votre logement est insalubre et
              souhaitez vous faire conseiller et accompagner dans le cadre des
              actions à l’encontre de votre propriétaire
            </li>
            <li>
              Vous avez reçu un congé de la part de votre propriétaire et
              souhaitez vous faire conseiller dans ce cadre
            </li>
            <li>
              Vous êtes en litige avec votre propriétaire concernant l’état de
              restitution du bien et le sort du dépôt de garantie
            </li>
            <li>
              vous souhaitez vous faire accompagner et/ou représenter dans le
              cadre d’une procédure de médiation amiable ou d’un contentieux
              devant les juridictions avec votre propriétaire ou avec
              l’intermédaire (agence immobilière) en charge de la gestion du
              bien
            </li>
          </ul>
        </article>
      </div>
    </Layout>
  );
};

export default bauxHabitation;
