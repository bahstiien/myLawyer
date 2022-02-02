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
    <div className="relative font-second pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0"></div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="font-third text-seven text-5xl text-center">
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
                <div className="mt-6 flex items-center">
                  <div className="ml-3">
                    <div className="flex space-x-1 italic text-sm text-gray-500">
                      Publié le {dayjs(createDate).format("DD/MM/YYYY")}
                    </div>
                    <Link href={`article/${id}`} passHref>
                      <button className={stylebtn.button2}> Lire</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
// <section className=" h-screen w-screen">
//   <h2 className="font-third text-seven text-5xl text-center">
//     Publications
//   </h2>
//   <div className="flex justify-center flex-wrap shadow-5xl">
//     {articles.map(({ id, title, description, link }) => (
//         <div className="bg-one w-1/3 m-2 p-4 rounded-xl" key={id}>
//       <div className={style.article} key={id}>
//         <div>
//           <h3 className={style.title}>{title}</h3>
//         </div>

//         <button className={stylebtn.button}> Lire l&#39;article</button>
//       </div>
//     ))}
//   </div>
// </section>

export default News;
