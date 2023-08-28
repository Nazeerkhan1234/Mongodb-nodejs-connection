// console.log("hii");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
require("dotenv").config();

let main = async () => {
  return await mongoose.connect(
    "mongodb+srv://nazeerkhan9695:Nazeer%40123@nazeermongodb.t1zx4xy.mongodb.net/?retryWrites=true&w=majority"
  );
};

main()
  .then((data) => {
    //Lets define the schema
    //const ClassName = mongoose.model(CollectionName,SchemeDefination);
    const Friends = mongoose.model("Friends", {
      name: String,
    });

    app.post("/friend", (req, res) => {
      //2. Create an oject from the class
      //let object = new ClassName();
      let friendObject = new Friends({ name: req.body.name });
      friendObject.save().then((d) => {
          res.status(200).json({
            msg: "ok",
          });
        })
        .catch((e) => {
          res.status(400).json({
            msg: e.array(),
          });
        })
    });
  })


  .catch((e) => {
    console.log("Error");
  })

let port = process.env.port;
app.listen(port, () => {
  console.log("the server is running on the port  " + port);
});
