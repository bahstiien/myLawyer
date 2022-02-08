import base from "../../../middlewares/commons";

import {
  ValidateArticle,
  getArticles,
  createArticle,
} from "../../../models/article.jsx";

const handleGet = async (req, res) => {
  const { limit } = req.query;
  res.send(
    await getArticles({
      limit,

      orderBy: {
        id: "DESC",
      },
    })
  );
};

async function handlePost(req, res) {
  const validationError = ValidateArticle(req.body);
  if (validationError) return res.status(422).send(validationError);
  const newArticle = await createArticle({
    ...req.body,
  });
  res.status(201).send(newArticle);
}

export default base().post(handlePost).get(handleGet);
