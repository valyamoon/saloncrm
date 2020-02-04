var mongoose = require("mongoose");

var emailTemplateSchema = mongoose.Schema(
  {
    title: { type: String, default: "" },
    unique_keyword: { type: String, default: "" },
    subject: { type: String, default: "" },
    description: { type: String, default: "" },
    isActive: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
    created_by_id: { type: mongoose.Types.ObjectId, ref: "users" },
    createdDate: { type: Date, default: new Date() },
    modifiedDate: { type: Date, default: new Date() }
  },
  {
    timestamps: true
  }
);
var emailtemplate = (module.exports = mongoose.model(
  "emailtemplate",
  emailTemplateSchema
));
//module.exports = mongoose.model("emailTemplate", emailTemplateSchema);
