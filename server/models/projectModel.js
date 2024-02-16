const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectSchema = new Schema(
  {
    title: { type: String, required: true },
    year: { type: Number, required: true },
    category: { type: String, required: true },
    type: { type: String, required: true },
    location: { type: String, required: true },
    area: { type: String, required: true },
    description: { type: String, required: true },
    // imgUrl: { type: String, required: true },
    // photos: {
    //   main: { type: String, required: true },
    //   one: { type: String, required: true },
    //   two: { type: String, required: true },
    //   three: { type: String, required: true },
    //   four: { type: String, required: true },
    //   five: { type: String, required: true },
    //   six: { type: String, required: true },
    // },
},
  { timestamps: true }
);
const Projects = mongoose.model("Projects", projectSchema);

module.exports = Projects;
