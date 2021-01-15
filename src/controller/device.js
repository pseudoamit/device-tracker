const deviceModel = require("../models/device");

const exportable = {
  // Functionality to add a device into the storage
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
        res.status(404).send({ message: "Storage has already full" });
      }
    } catch (error) {
      res.status(417).send({ message: "Unexpected error" });
    }
  },

  // Functionality to remove a device from the storage
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await deviceModel.findByIdAndDelete(id);
      if (data) {
        res.send({ message: "Device successfully removed from storage" });
      } else {
        res.status(208).send({ message: "No Such device found" });
      }
    } catch (error) {
      res.status(417).send({ message: "Unexpected error" });
    }
  },

  // Give the list of all devices available in the storage
  list: async (req, res) => {
    try {
      const data = await deviceModel.find();
      if (data) {
        res.send(data);
      } else {
        res.status(208).send({ message: "No device available" });
      }
    } catch (error) {
      res.status(417).send({ message: "Unexpected error" });
    }
  },

  // Give user feedback for a particular device
  feedback: async (req, res) => {
    try {
      const { id, feedback } = req.body;
      const data = await deviceModel.findByIdAndUpdate(
        id,
        { feedback },
        { new: true }
      );
      if (data) {
        res.send({ message: "Feedback given successfully" });
      } else {
        res.status(208).send({ message: "No Such device found" });
      }
    } catch (error) {
      res.status(417).send({ message: "Unexpected error" });
    }
  },

  // Functionalities to checkout a device
  checkout: async (req, res) => {
    try {
      const checkOutDetails = req.body;
      var timeToCheckOut = new Date().getHours();
      if (timeToCheckOut >= 9 && timeToCheckOut <= 19) {
        const needToUpdate = {
          lastCheckedOutBy: checkOutDetails.lastCheckedOutBy,
          lastCheckedOutDate: new Date(),
          isCheckedOut: true,
        };
        const data = await deviceModel.findOneAndUpdate(
          { _id: checkOutDetails.id, isCheckedOut: false },
          needToUpdate,
          {
            new: true,
          }
        );
        if (data) {
          res.send({ message: "Successfully checked out" });
        } else {
          res.status(208).send({ message: "No Such device found to checkout" });
        }
      } else {
        res.status(403).send({ message: "You can't checkout now" });
      }
    } catch (error) {
      res.status(417).send({ message: "Unexpected error" });
    }
  },

  // Functionality to check whether a device checked out for more than one week
  weeklyRecord: async (req, res) => {
    try {
      const data = await deviceModel.find({
        lastCheckedOutDate: {
          $gte: new Date(new Date() - 7 * 60 * 60 * 24 * 1000),
        },
        isCheckedOut: true,
      });
      if (data) {
        res.send(data);
      } else {
        res.status(208).send({
          message:
            "No device available which is checkedOut for more than a week",
        });
      }
    } catch (error) {
      res.status(417).send({ message: "Unexpected error" });
    }
  },
};

module.exports = exportable;
