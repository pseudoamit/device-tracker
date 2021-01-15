const mongoose = require("mongoose");
const { Schema } = mongoose;

const deviceSchema = new Schema({
  deviceName: { type: String },
  os: { type: String },
  manufacturer: { type: String },
  lastCheckedOutDate: { type: Date },
  lastCheckedOutBy: { type: String },
  feedback: { type: String },
  isCheckedOut: { type: Boolean, default: false },
});

module.exports = mongoose.model("device", deviceSchema);
