const { Schema, model } = require("mongoose");

const date = new Date

const RequestSchema = new Schema(
  {
    Make: {
      type: String, 
    },
    Model: {
        type: String, 
    },
    Year: {
      type: Number,
      min: 1910,
      max: 2024,
    },
    Subject: {
        type: String
    },
    Notes: {
        type: String
    },
    UserEmail: {
      type: String
    }
  },
  { timestamps: true }
);

const Request = model("Request", RequestSchema);

//make this exportable to be accessed in `app.js`
module.exports = Request;
