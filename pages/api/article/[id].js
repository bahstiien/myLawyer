import {
  ValidateArticle,
  updateArticle,
  getOneArticle,
  deleteOneArticle,
} from "../../../models/article";
import base from "../../../middlewares/commons";
// import { requireAdmin } from "../../../middleware/requireAdmin";

async function handlePatch({ query: { id }, body }, res) {
  const validationErrors = ValidateArticle(body, true);
  if (validationErrors) return res.status(422).send(validationErrors);
  const updated = await updateArticle(id, body);
  if (updated) res.status(200).send(updated);
  else res.status(404).send();
}

async function handleGetOne({ query: { id } }, res) {
  const article = await getOneArticle(id);
  if (article) res.send(article);
  else res.status(404).send();
}

async function handleDelete({ query: { id } }, res) {
  if (await deleteOneArticle(id)) res.status(204).send();
  else res.status(404).send();
}

export default base()
  // .use(requireAdmin)
  .get(handleGetOne)
  .patch(handlePatch)
  .delete(handleDelete);
