import React from "react";
import stylebtn from "../styles/button.module.css";

const Contact = () => {
  return (
    <section className=" h-screen w-screen font-main">
      <h2 className="font-third text-seven text-5xl text-center">Contact</h2>

      <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
        <form action="" method="post">
          <div className="md:flex items-center mt-12">
            <div className="w-full md:w-1/2 flex flex-col">
              <label className="font-semibold leading-none">Nom & prénom</label>
              <input
                type="text"
                className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-one border rounded border-gray-200"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
              <label className="font-semibold leading-none">Téléphone</label>
              <input
                type="email"
                className="leading-none text-seven p-3 focus:outline-none focus:border-blue-700 mt-4 bg-one border rounded border-gray-200"
              />
            </div>
          </div>
          <div className="md:flex items-center mt-8">
            <div className="w-full flex flex-col">
              <label className="font-semibold leading-none">Sujet</label>
              <input
                type="text"
                className="leading-none text-seven p-3 focus:outline-none focus:border-blue-700 mt-4 bg-one border rounded border-gray-200"
              />
            </div>
          </div>
          <div>
            <div className="w-full flex flex-col mt-8">
              <label className="font-semibold leading-none">Message</label>
              <textarea
                type="text"
                className="h-40 text-base leading-none text-seven p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-one border rounded border-gray-200"
              ></textarea>
            </div>
          </div>
          <div className="flex items-center justify-center w-full mt-16">
            <button className={stylebtn.button}>Envoyez votre message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
