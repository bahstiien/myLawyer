import React from "react";
import stylebtn from "../styles/button.module.css";
import emailjs from "emailjs-com";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const notify = () => toast("Wow so easy!");
  const form = useRef();
  function sendmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_scb7kbd",
        "template_ugua5ko",
        form.current,
        "user_HJJ9D5D81a0748P6oWLwv"
      )
      .then(
        toast.success("Merci pour votre message", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <section className=" z-20 font-main">
      <h2 className="font-third text-seven text-5xl mt-8 text-center">
        Contact
      </h2>

      <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
        <form ref={form} onSubmit={sendmail}>
          <div className="md:flex items-center mt-12">
            <div className="w-full md:w-1/2 flex flex-col">
              <label className="font-semibold leading-none">Nom & prénom</label>
              <input
                type="text"
                name="name"
                className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-one border rounded border-gray-200"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
              <label className="font-semibold leading-none">Téléphone</label>
              <input
                type="phone"
                name="phone"
                className="leading-none text-seven p-3 focus:outline-none focus:border-blue-700 mt-4 bg-one border rounded border-gray-200"
              />
            </div>
          </div>
          <div className="md:flex items-center mt-8">
            <div className="w-full flex flex-col">
              <label className="font-semibold leading-none">Email</label>
              <input
                type="email"
                name="email"
                className="leading-none text-seven p-3 focus:outline-none focus:border-blue-700 mt-4 bg-one border rounded border-gray-200"
              />
            </div>
          </div>
          <div className="md:flex items-center mt-8">
            <div className="w-full flex flex-col">
              <label className="font-semibold leading-none">Sujet</label>
              <input
                type="text"
                name="object"
                className="leading-none text-seven p-3 focus:outline-none focus:border-blue-700 mt-4 bg-one border rounded border-gray-200"
              />
            </div>
          </div>
          <div>
            <div className="w-full flex flex-col mt-8">
              <label className="font-semibold leading-none">Message</label>
              <textarea
                type="text"
                name="message"
                className="h-40 text-base leading-none text-seven p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-one border rounded border-gray-200"
              ></textarea>
            </div>
          </div>
          <div className="flex items-center justify-center w-full mt-2">
            <button className={stylebtn.button}>Envoyez votre message</button>
          </div>
          <ToastContainer />
        </form>
      </div>
    </section>
  );
};

export default Contact;
