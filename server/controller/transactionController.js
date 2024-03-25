const Item = require("./../models/item");
const home = async (req, res) => {
  try {
    const tableData = await Item.find();
    res.json(tableData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { home };

// try {
//   const tableData = await Item.find();
//   res.json(tableData);
//   console.log(tableData);
// } catch (err) {
//   console.log(`error from transaction get: ${err}`);
// }
