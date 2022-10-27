const express = require("express");
const cors = require("cors");
const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectId;
const bodyparser = require("body-parser");
const multer = require("multer");
const upload = multer();
const mongoClient = mongodb.MongoClient;
const app = express();
const port = 9797;
const dbUrl =
  "mongodb+srv://innomatic:innomatic2121@cluster0.poayja3.mongodb.net/?retryWrites=true&w=majority";
app.use(cors());
app.use(bodyparser());

app.get("/accessdata", (req, res) => {
  mongoClient.connect(dbUrl, (error, cluster) => {
    if (error) {
      res.send("Error while connecting with database");
      console.log(error);
    } else {
      const dbRef = cluster.db("innomaticsDB");
      const collectionRef = dbRef.collection("innomaticCollection");
      collectionRef.find({}).toArray(function (err, data) {
        if (err) {
          res.send("Error while fetching the data from Database");
          console.log(err);
        } else {
          res.send(data);
        }
      });
    }
  });
}); // http://localhost:9797/accessdata

//app.get(function(){-----})

app.get("/specificUser/:id", (req, res) => {
  var id = req.params.id;
  console.log(id);
  mongoClient.connect(dbUrl, (error, cluster) => {
    if (error) {
      res.send("Error while connecting with DB");
      console.log(error);
    } else {
      var dbRef = cluster.db("innomaticsDB");
      var collectionRef = dbRef.collection("innomaticCollection");
      collectionRef
        .find({
          _id: ObjectId(id),
        })
        .toArray(function (err, data) {
          if (err) {
            console.log(err);
            res.send("Error while Accessing the data");
          } else {
            res.send({
              results: data,
              status: true,
            });
          }
        });
    }
  });
}); // http://localhost:9797/specificUser/101

app.post("/userdata", upload.none(), (req, res) => {
  var name = req.body.name;
  var city = req.body.city;
  var phone = req.body.phone;
  var email = req.body.email;

  console.log(req.body);
  console.log(name, city);

  var userdata = {
    name: name,
    city: city,
    phone: phone,
    email: email,
  };

  mongoClient.connect(dbUrl, (error, cluster) => {
    if (error) {
      res.send("error while connectiong");
    } else {
      const dbRef = cluster.db("innomaticsDB");
      const collectionRef = dbRef.collection("innomaticCollection");
      collectionRef.insertOne(userdata, function (err, Msg) {
        if (err) {
          res.send("Error while inserting the data");
        } else {
          res.send("Inserted Data Succesfully");
          console.log(Msg);
        }
      });
    }
  });
}); //http://localhost:9797/userdata

app.put("/update", upload.none(), (req, res) => {
  //http://localhost:9797/update?id=8888888888
  var id = req.query.id;

  var name = req.body.name;
  var city = req.body.city;
  var phone = req.body.phone;
  var email = req.body.email;
  console.log(id);
  console.log(name, city, phone);

  var updatedData = {
    $set: {
      name: name,
      phone: phone,
      city: city,
      email: email,
    },
  };

  mongoClient.connect(dbUrl, (error, cluster) => {
    if (error) {
      res.send("error while connectiong");
    } else {
      const dbRef = cluster.db("innomaticsDB");
      const collectionRef = dbRef.collection("innomaticCollection");
      collectionRef.updateOne(
        { _id: ObjectId(id) },
        updatedData,
        (error, msg) => {
          if (error) {
            res.send(error);
            console.log(error);
          } else {
            res.send("updated successfully");
          }
        }
      );
    }
  });
});

// delete end point

app.delete("/delete/:id", (req, res) => {
  console.log("hi");
  var id = req.params.id;
  mongoClient.connect(dbUrl, (error, cluster) => {
    if (error) {
      res.send("error while connectiong");
    } else {
      const dbRef = cluster.db("innomaticsDB");
      const collectionRef = dbRef.collection("innomaticCollection");
      collectionRef.deleteOne({ _id: ObjectId(id) }, (error, msg) => {
        if (error) {
          res.send(error);
        } else {
          res.send("Deleted Successfully");
        }
      });
    }
  });
}); //http://localhost:9797/delete/101

app.listen(port, () => {
  console.log("Server Started");
});
