import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Welcome from "../components/Welcome";
import Skill from "../components/Skill";
import News from "../components/News";
import Layout from "../components/Layout/Layout";
import Last from "../components/Last";

export default function Home() {
  return (
    <div>
      <Layout>
        <Welcome />
        <Skill />
        <News />
        {/* <Last /> */}
      </Layout>
    </div>
  );
}
