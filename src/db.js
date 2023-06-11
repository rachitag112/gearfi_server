const mongoose = require("mongoose");
const URI = "mongodb+srv://gearfi_test:gearfi_test@cluster0.ocz9scm.mongodb.net/";

const connection = mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error);
  });

module.exports = connection;
