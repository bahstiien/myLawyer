import Head from "next/head";
import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <Head />
      <Navbar />
      <h1 className="font-second text-center text-5xl pt-32 "> {pageTitle}</h1>
      <main className="font-thrid pb-36 min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
