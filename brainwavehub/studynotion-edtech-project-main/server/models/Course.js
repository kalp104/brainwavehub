const mongoose = require("mongoose");

const coursesSchema = new mongoose.Schema({
    courseName: {
        type : String,
    },
    courseDescription: { 
        type: String 
    },
    whatYouWillLearn: {
        type: String,
    },
    thumbnail: {
        type: String,
    },
    tag: {
        type: [String],
        required: true,
    },
    courseContent: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Section",
        },
    ],
    studentsEnroled: [
        {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "user",
        },
    ],
    instructions: {
        type: [String],
    },
    status: {
        type: String,
        enum: ["Draft", "Published"],
    },
    createdAt: { type: Date, default: Date.now },

})

module.exports = mongoose.model("course", coursesSchema)

