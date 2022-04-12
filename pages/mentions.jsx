import React from "react";
import Layout from "../components/Layout/Layout";
import style from "../styles/welcome.module.css";

const mentions = () => {
  return (
    <div>
      <Layout>
        <div className="m-6">
          <h2 className={style.title}>Mentions légales</h2>
          <p>
            En vertu de l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004
            pour la confiance dans l&apos;économie numérique, il est précisé aux
            utilisateurs du site internet{" "}
            <a href="http://cecile-palavit-avocat.com">
              cecile-palavit-avocat.com
            </a>{" "}
            l&apos;identité des différents intervenants dans le cadre de sa
            réalisation et de son suivi:
          </p>
          <br />
          <p>
            <strong>Propriétaire</strong> : Entreprise Individuelle Cécile
            Palavit - SIREN : N°822384517 - Numéro de TVA: FR79822384517 – 55
            boulevard des brotteaux 69006 Lyon <br /> <br />
            <strong>Responsable publication</strong> : Cécile Palavit –
            (personne physique) contact@cecile-palavit-avocat.com - 55 boulevard
            des Brotteaux 69006 LYON - 0761697971
            <br />
            <br />
            <strong> Hebergeur : </strong> société OVH, SAS au capital de 10 069
            020 €, RCS Lille Métropole 424 761 419 00045, Code APE 2620Z, N° TVA
            : FR 22 424 761 419, Siège social : 2 rue Kellermann – 59100 Roubaix
            – France. Téléphone : 09 72 10 10 07
            <br />
            <br />
            <strong>Webmaster</strong> : Bastien Le Calvez –
            bastien.lecalvez@gmail.com
            <br />
            <br />
            <strong> Monogramme</strong> : Marie Adam - m-adam@outlook.fr
          </p>
        </div>
      </Layout>
    </div>
  );
};

export default mentions;
