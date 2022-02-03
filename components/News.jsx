import React from "react";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";
import style from "../styles/articleList.module.css";
import stylebtn from "../styles/button.module.css";
import dayjs from "dayjs";
import Link from "next/link";

const News = () => {
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
    <div
      className="relative h-screen w-screen font-second pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
      id="News"
    >
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="font-third text-seven text-5xl pt-8 text-center">
            Publications
          </h2>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {articles.map(({ id, title, summary, link, createDate }) => (
            <div
              key={id}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-1 bg-one p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">{summary}</p>
                  </p>
                </div>
                <div className="mt-6 flex items-center ml-3">
                  <div className="flex space-x-1 italic text-sm text-gray-500 ">
                    Publié le {dayjs(createDate).format("DD/MM/YYYY")}
                  </div>
                  <div className="flex justify-center">
                    <Link href={`articles/${id}`} passHref>
                      <button className={stylebtn.button2}> Lire</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="bg-one rounded-lg justify-around shadow-lg overflow-hidden p-6 flex flex-col">
            <div className="items-center flex flex-col justify-center">
              <p className="text-xl font-semibold text-gray-900">
                Retrouvez l&#39;ensemble de mes Publications
              </p>
              <div className="flex justify-center">
                <Link href={`articles`} passHref>
                  <button className={stylebtn.button2}> Lire</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
