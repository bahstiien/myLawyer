import { useState, useEffect } from "react";
import AdminLayout from "../../components/Layout/AdminLayout";
import Layout from "../../components/Layout/Layout";
import Link from "next/link";
import axios from "axios";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import style from "../../styles/dashboard.module.css";
import stylebtn from "../../styles/button.module.css";
import dayjs from "dayjs";

const Dashboard = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
    axios
      .get("/api/article")
      .then((res) => setArticles(res.data))
      .catch(() => setError("could not retrive article from the API"));
  }, []);

  const deleteArticle = async (id) => {
    if (confirm("Voulez vous vraiment supprimer ce projet définitivement ?")) {
      await axios.delete(`/api/article/${id}`);
      alert("Article bien supprimé");
      setArticles((articles) => articles.filter((a) => a.id !== id));
    }
  };
  return (
    <div className="">
      <Layout pageTitle="Dashboard">
        <AdminLayout>
          <div className="pt-32 flex justify-center">
            <Link href="dashboard/newArticle" passHref>
              <button className={stylebtn.button}>
                <span>Nouvel article</span>
              </button>
            </Link>
          </div>
          <div className="flex justify-center flex-wrap shadow-5xl">
            {articles.map(({ id, title, description, link, createDate }) => (
              <div className={style.card} key={id}>
                <div className="flex justify-between mb-4">
                  <span className={style.id}> article# {id}</span>
                  <span className={style.id}>
                    publié le {dayjs(createDate).format("DD/MM/YYYY")}
                  </span>

                  <div className="ml-4">
                    <Link href={`dashboard/${id}`} passHref>
                      <EditOutlined
                        style={{ fontSize: "24px" }}
                        className="mx-8"
                      />
                    </Link>
                    <DeleteOutlined
                      style={{ fontSize: "24px" }}
                      onClick={() => deleteArticle(id)}
                    />
                  </div>
                </div>
                <h3 className={style.title}>{title}</h3>
                <p>{description}</p>
                <p className={style.link}> {link}</p>
              </div>
            ))}
          </div>
        </AdminLayout>
      </Layout>
    </div>
  );
};

export default Dashboard;
