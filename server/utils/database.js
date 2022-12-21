const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
mongoose.connect("mongodb://127.0.0.1:27017/OLX", (err) => {
  if (!err) console.log(`db connected - OLX - PORT 9000 `);
  else console.log(`db error${err}`);
});
