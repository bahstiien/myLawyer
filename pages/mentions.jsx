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
            <b>Client :</b> tout professionnel ou personne physique capable au
            sens des articles 1123 et suivants du Code civil, ou personne
            morale, qui visite le Site objet des présentes conditions générales.
            <br />
          </p>
        </div>
      </Layout>
    </div>
  );
};

export default mentions;
