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

  const onSubmit = (data) => {
    axios.post("/api/article", { title, description, link });
  };

  return (
    <div className="bg-one">
      <Layout pageTitle="Nouvel article">
        <div className="flex flex-col w-2/3">
          <form className="justify-center font-main">
            <div className="">
              <div className="">
                <label className={style.label}>Titre de l&#39;article</label>
                <input
                  className={style.input}
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="">
                <label className={style.label}>Description</label>
                <input
                  className={style.input}
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className={style.label}>Lien</label>
                <input
                  className={style.input}
                  type="text"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
              </div>
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
