import Head from "next/head";
import React from "react";
import Navbar from "../Navbar";

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <Head />
      <Navbar />
      <h1 className="font-second text-center text-5xl"> {pageTitle}</h1>
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}
