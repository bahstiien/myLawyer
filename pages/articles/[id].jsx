import React from "react";
import Layout from "../../components/Layout/Layout";
import { getArticles, getOneArticle } from "../../models/article";
import dayjs from "dayjs";
import Link from "next/link";

export default function Article({
  article: { title, description, link, createdAt },
}) {
  return (
    <Layout pageTitle={title}>
      <div className=" bg-one rounded-3xl p-6 max-w-4xl m-auto mt-4">
        <p className="md:columns-2 m-6 lg:ml-0 gap-12 ">{description}</p>
        <p className="text-sm italic text-center">
          Article complet publié{" "}
          <Link href={`${link}`}>
            <a target="_blank">{link}</a>
          </Link>
        </p>
        <p className="text-sm italic text-center">
          Publié le {dayjs(createdAt).format("DD/MM/YYYY")} par Cécile Palavit
        </p>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const articles = await getArticles();
  const d = new Date();
  return {
    paths: articles.map((p) => {
      return { params: { id: p.id.toString() } };
    }),
    fallback: "blocking",
  };
}

export async function getStaticProps(ctx) {
  const article = await getOneArticle(ctx.params.id);
  return {
    props: { article },
    revalidate: 10,
  };
}
