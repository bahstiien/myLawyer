import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import Layout from "../../components/Layout/Layout";
import AdminLayout from "../../components/Layout/AdminLayout";
import style from "../../styles/form.module.css";
import styleBtn from "../../styles/button.module.css";

import Link from "next/link";

export default function ArticleDetails() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  const router = useRouter();
  const {
    query: { id },
  } = router;
  const isUpdate = id !== "new";

  const saveArticle = async () => {
    const formValues = {
      title,
      description,
      link,
    };
    try {
      if (isUpdate) {
        await axios.patch(`/api/article/${id}`, formValues);
      } else {
        await axios.post(`/api/article/${id}`, formValues);
      }
      router.push("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (id && isUpdate) {
      axios
        .get(`/api/article/${id}`)
        .then(({ data: { title, description, link } }) => {
          setTitle(title);
          setDescription(description), setLink(link);
        });
    }
  }, [isUpdate, id]);

  return (
    <Layout title="Modification du produit">
      <AdminLayout>
        <div className="flex flex-col">
          <div className="flex items-center justify-center w-full">
            <form
              className="w-full max-w-lg font-main"
              onSubmit={async (e) => {
                e.preventDefault();
                await saveArticle();
              }}
            >
              <div className=" -mx-3 mb-6">
                <div className="w-full  px-3 mb-4">
                  <label className={style.label}>Désignation</label>
                  <input
                    className={style.input}
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="w-full px-3">
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
              <button type="submit" className={styleBtn.button}>
                Modification de mon article
              </button>
            </form>
          </div>
        </div>
      </AdminLayout>
    </Layout>
  );
}
