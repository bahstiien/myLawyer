import React from "react";

const Price = () => {
  return (
    <div className="bg-two rounded-3xl h-72 w-full">
      <div>
        <h2 className="font-third text-seven text-3xl text-center pt-8">
          Honoraires
        </h2>
        <div className="font-second text-center m-4 p-4">
          <p className="mt-2 text-lg text-seven">Premier échange non facturé</p>
          <p className="mt-2 text-lg text-seven">
            {" "}
            Devis / estimation préalable à tout commencement d&#39;éxécution
          </p>
          <p className="mt-2 text-lg text-seven">
            {" "}
            Prestations facturées au forfait ou taux horaire selon la nature du
            dossier
          </p>
        </div>
      </div>
    </div>
  );
};

export default Price;
