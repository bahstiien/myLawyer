import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import style from "../../styles/articleList.module.css";
import stylebtn from "../../styles/button.module.css";
import Layout from "../../components/Layout/Layout";
import dayjs from "dayjs";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
    axios
      .get("/api/article")
      .then((res) => setArticles(res.data))
      .catch(() => setError("could not retrive article from the API"));
  }, []);
  return (
    <Layout>
      <div className=" flex flex-col items-center">
        <h2 className="font-third text-seven text-5xl text-center mt-36">
          Actualités / Publications
        </h2>
        {articles.map(({ id, title, description, link, createDate }) => (
          <div
            className="max-w-4xl px-10 my-4 py-6 font-second bg-one rounded-lg shadow-md"
            key={id}
          >
            <div className="flex justify-end items-center">
              <span className="font-light text-gray-600">
                Publié le {dayjs(createDate).format("DD/MM/YYYY")} par Cécile
                Palavit
              </span>
              {/* <a
                  className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500"
                  href="#"
                >
                  {}
                </a> */}
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
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Articles;
