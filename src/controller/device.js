const deviceModel = require("../models/device");

const exportable = {
  create: async (req, res) => {
    try {
      res.send({ message: "Hii" });
    } catch (error) {
      res.status(400).send({ message: "Something went wrong" });
    }
  },
};

module.exports = exportable;
