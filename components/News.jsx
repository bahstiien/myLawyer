import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import style from "../styles/dashboard.module.css";
import stylebtn from "../styles/button.module.css";
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
    <section className="bg-one h-screen w-screen">
      <div className="flex justify-center flex-wrap shadow-5xl">
        {articles.map(({ id, title, description, link }) => (
          //   <div className="bg-one w-1/3 m-2 p-4 rounded-xl" key={id}>
          <div className={style.card} key={id}>
            <div>
              <h3 className={style.title}>{title}</h3>
            </div>

            <button className={stylebtn.button}> Lire l&#39;article</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
