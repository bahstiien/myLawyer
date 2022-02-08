import Head from "next/head";
import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <title>Cécile Palavit, avocate à Lyon</title>
        <meta
          name="description"
          content="Maitre Cécile Palavit est avocate en droit immobilier et en droit de la construction à Lyon"
        />
      </Head>
      <Navbar />
      <h1 className="font-second text-center text-5xl pt-32 "> {pageTitle}</h1>
      <main className="font-thrid pb-36 min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
