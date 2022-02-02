import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Welcome from "../components/Welcome";
import Skill from "../components/Skill";
import News from "../components/News";
import Contact from "../components/Contact";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <div>
      <Layout>
        <Welcome />
        <Skill />
        <News />
        <Contact />
      </Layout>
    </div>
  );
}
