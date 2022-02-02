import { useState, useEffect } from "react";
import AdminLayout from "../components/Layout/AdminLayout";
import Layout from "../components/Layout/Layout";
import Link from "next/link";
import axios from "axios";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import style from "../styles/dashboard.module.css";

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
    <div className="bg-one">
      <Layout>
        <AdminLayout>
          <h1>Mes Articles</h1>
          <div className="flex">
            {articles.map(({ id, title, description, link }) => (
              //   <div className="bg-one w-1/3 m-2 p-4 rounded-xl" key={id}>
              <div className={style.card} key={id}>
                <div className="flex justify-around m-4">
                  <h3 className={style.title}>{title}</h3>
                  <div className="ml-4">
                    <EditOutlined style={{ fontSize: "24px" }} />
                    <DeleteOutlined
                      style={{ fontSize: "24px" }}
                      onClick={() => deleteArticle(id)}
                    />
                  </div>
                </div>
                <p>{description}</p>
                <p className="m-8"> {link}</p>
              </div>
            ))}
          </div>
        </AdminLayout>
      </Layout>
    </div>
  );
};

export default Dashboard;
