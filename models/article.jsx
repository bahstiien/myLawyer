const db = require("../db");
const Joi = require("joi");

const ValidateArticle = (data, forUpdate = false) => {
  return Joi.object({
    title: Joi.string().presence(forUpdate ? "optional" : "required"),
    description: Joi.string().presence(forUpdate ? "optional" : "required"),
    link: Joi.string().presence(forUpdate ? "optional" : "required"),
    summary: Joi.string()
      .max(200)
      .presence(forUpdate ? "optional" : "required"),
  }).validate(data, { abortEarly: false }).error;
};

const articleToShow = {
  id: true,
  title: true,
  description: true,
  link: true,
  summary: true,
  createdAt: true,
};

const getArticles = async (limit) => {
  return db.article.findMany({
    //take: limit,
    select: articleToShow,
    orderBy: {
      createdAt: "asc",
    },
  });
};

const getAllArticles = async () => {
  return db.article.findMany({
    select: articleToShow,
    orderBy: {
      createdAt: "asc",
    },
  });
};

const getOneArticle = (id) => {
  return db.article.findUnique({
    where: { id: parseInt(id, 10) },
    select: articleToShow,
  });
};

const deleteOneArticle = (id) => {
  return db.article
    .delete({ where: { id: parseInt(id, 10) } })
    .catch((_) => false);
};

const createArticle = async ({ title, description, link, summary }) => {
  return await db.article.create({
    data: {
      title,
      description,
      link,
      summary,
    },
  });
};

const updateArticle = (id, data) => {
  return db.article
    .update({ where: { id: parseInt(id, 10) }, data })
    .catch(() => false);
};

module.exports = {
  ValidateArticle,
  getArticles,
  getOneArticle,
  deleteOneArticle,
  createArticle,
  updateArticle,
  getAllArticles,
};
