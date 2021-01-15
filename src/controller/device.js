const deviceModel = require("../models/device");

const exportable = {
  create: async (req, res) => {
    try {
      const deviceDetails = req.body;
      const count = await deviceModel.count({});
      if (count < 10) {
        let data = await deviceModel.create(deviceDetails);
        data = JSON.parse(JSON.stringify(data));
        if (data) {
          res.send(data);
        } else {
          res.status(400).send({ message: "Error in inserting data" });
        }
      } else {
        res.status(400).send({ message: "Storage has already full" });
      }
    } catch (error) {
      res.status(400).send(error);
    }
  },
};

module.exports = exportable;
