import Head from "next/head";
import React from "react";
import Navbar from "../Navbar";

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <Head />
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}
