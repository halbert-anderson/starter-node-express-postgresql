const categoriesService = require("./categories.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");



async function list(req, res) {
  const data = await categoriesService.list();
  res.json({ data });
}



module.exports = {
  list: asyncErrorBoundary(list),
};

// function list(req, res, next) {
//   categoriesService
//     .list()
//     .then((data) => res.json({ data }))
//     .catch(next);
// }

// module.exports = {
//   list,
// };

// async function list(req, res, next) {
//   res.json({
//     data: [
//       { category_name: "category 1" },
//       { category_name: "category 2" },
//       { category_name: "category 3" },
//     ],
//   });
// }

// module.exports = {
//   list: [list],
// };
