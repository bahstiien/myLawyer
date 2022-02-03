import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import Link from "next/link";
import styleBtn from "../../styles/button.module.css";
import style from "../../styles/form.module.css";

export default function ArticleDetails() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [summary, setSummary] = useState("");

  const onSubmit = (data) => {
    axios.post("/api/article", { title, description, link, summary });
  };

  return (
    <div className="">
      <Layout pageTitle="Nouvel article">
        <div className="flex flex-col justify-center w-2/3 pt-32">
          <form className="justify-center font-main ml-24">
            <div className="">
              <div className="flex flex-col m-4">
                <label className={style.label}>Titre de l&#39;article</label>
                <input
                  className="h-12 w-auto ml-2 rounded-xl bg-one"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="flex flex-col m-4">
                <label className={style.label}>Description</label>
                <textarea
                  className="h-96 w-auto ml-2 rounded-xl bg-one p-2"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="flex flex-col m-4">
                {" "}
                <label className={style.label}>Résumé rapide</label>
                <input
                  className="h-12 w-auto ml-2 rounded-xl bg-one"
                  type="text"
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col m-4">
              <label className={style.label}>Lien</label>
              <input
                className="h-12 w-auto ml-2 rounded-xl bg-one"
                type="text"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
            <button
              type="submit"
              onClick={onSubmit}
              className={styleBtn.button}
            >
              Publiez un nouvel article
            </button>
          </form>
        </div>
      </Layout>
    </div>
  );
}
