const { hashPassword } = require("../models/user.jsx");
const db = require("../db");

async function seed() {
  await db.user.deleteMany();
  await db.user.createMany({
    data: [
      {
        name: "Cécile",
        email: "cecile.palavit@gmail.com",
        role: "admin",
        hashedPassword: await hashPassword("Pegasou"),
      },
      {
        name: "Bastien",
        email: "bastien@gmail.com",
        role: "admin",
        hashedPassword: await hashPassword("superadmin"),
      },
    ],
  });
  await db.article.deleteMany();
  await db.article.createMany({
    data: [
      {
        title: "Mon premier article",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempor porta tortor, fringilla hendrerit justo feugiat eu. Duis commodo odio vel suscipit dapibus. Praesent at euismod ipsum. Nullam non tempor risus. Nullam dignissim molestie eros, vitae pulvinar est elementum nec. Nulla facilisis, nunc facilisis sollicitudin aliquam, erat massa dignissim nisl, at pretium ex nibh imperdiet lacus. Mauris iaculis aliquet semper. Vivamus pellentesque imperdiet massa, porttitor vulputate magna convallis et. Fusce pretium volutpat molestie. Etiam imperdiet, urna at porta tempus, massa dolor ultricies magna, ut placerat eros mauris eget urna. Praesent eget cursus ligula, vel elementum massa. Cras lacinia, purus non pellentesque commodo, nisi velit hendrerit purus, in feugiat tortor mauris non eros. Sed et ligula vel dolor semper tempor ac sed ex. Sed dictum nulla non mi interdum, a consequat orci fringilla. Curabitur ut elementum eros, eu pellentesque dolor. Nulla ultricies libero et lorem ultricies bibendum. Donec ut arcu porta, eleifend purus et, ultrices nulla. Etiam venenatis dapibus diam, nec ultricies nulla facilisis id. Phasellus nec magna sed dui porttitor varius et quis lectus. Nam elementum scelerisque orci nec volutpat.",
        link: "https://www.lemoniteur.fr/immobilier/",
        summary: "Article assez long mais là c'est un résumé donc assez court",
      },
      {
        title: "Mon second article",
        description:
          "or sit amet, consectetur adipiscing elit. In tempor porta tortor, fringilla hendrerit justo feug",
        link: "https://www.lemoniteur.fr/technique/",
        summary: "Article assez court",
      },
    ],
  });
}

seed();

export default seed;
