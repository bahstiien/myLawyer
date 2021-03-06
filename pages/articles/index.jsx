import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import style from "../../styles/articleList.module.css";
import stylebtn from "../../styles/button.module.css";
import Layout from "../../components/Layout/Layout";
import dayjs from "dayjs";
import Link from "next/link";
import { RollbackOutlined } from "@ant-design/icons";
import { getArticles } from "../../models/article";
import safeJsonStringify from "safe-json-stringify";

const Articles = ({ article }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
    axios
      .get("/api/article?limit=1000")
      .then((res) => setArticles(res.data))
      .catch(() => setError("could not retrive article from the API"));
  }, []);
  return (
    <Layout>
      <div className=" flex flex-col items-center">
        <h2 className="font-third text-seven text-5xl text-center">
          Actualités / Publications
        </h2>
        {articles.map(({ id, title, description, link, createdAt }) => (
          <div
            className="max-w-4xl px-10 my-4 py-6 font-second bg-one rounded-lg shadow-md"
            key={id}
          >
            <div className="flex justify-end items-center">
              <span className="font-light text-gray-600">
                Publié le {dayjs(createdAt).format("DD/MM/YYYY")} par Cécile
                Palavit
              </span>
            </div>
            <div className="mt-2">
              <a
                className="text-2xl text-gray-700 font-bold hover:text-gray-600"
                href="#"
              >
                {title}
              </a>
              <p className="mt-2 text-gray-600">{description}</p>
            </div>
            <div className="mt-8 text-center">
              <Link href={`${link}`} target="_blank" passHref>
                <a target="_blank">
                  Article complet publié dans la revue Le Moniteur
                </a>
              </Link>
            </div>
            <div>
              <Link href="/" passHref>
                <a className="flex items-center ">
                  <RollbackOutlined />
                  <span className="ml-2">Retour</span>
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Articles;

export const getStaticProps = async () => {
  try {
    const articles = await getArticles();
    const stringifiedData = safeJsonStringify(articles);
    const data = JSON.parse(stringifiedData);

    return {
      props: { data },
      revalidate: 10,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
