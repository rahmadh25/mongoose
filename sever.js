const mongoose = require("mongoose");
const express = require("express");
const app = express();
const Person = require("./models/Person");

mongoose
  .connect(
    "mongodb+srv://rahmadhaouadi7:gPdg6LPIP45YOhVA@cluster0.hw6kgbx.mongodb.net/gmc?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));
// Person.insertMany([
//   {
//     name: "Ahmed",
//     age: 25,
//     favoriteFoods: ["Pizza", "hamberguer", "pasta"],
//   },
//   {
//     name: "Sara",
//     age: 22,
//     favoriteFoods: ["Pizza", "coscos", "salade"],
//   },
//   {
//     name: "Ameni",
//     age: 29,
//     favoriteFoods: ["cordon bleu", "coscos", "sea food"],
//   },
//   {
//     name: "Aymen",
//     age: 39,
//     favoriteFoods: ["chakchouka", "routi", "mlewi"],
//   },
// ]);
Person.find()
  .skip(2)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
// Person.findOne({ _id: "653f9a1df70e3118fd7e00bc" }):
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
// Person.findOne({ favoriteFoods: { $all: ["salade"] } })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// Person.findById("653f9a1df70e3118fd7e00bc")
//   .then((res) => console.log(res))
//   .then((err) => console.log(err));
// Person.findByIdAndUpdate("653f9a1df70e3118fd7e00be", { $push: { favoriteFoods: "gateau" } }, { new: true }).then((res) => console.log(res)).catch((err) => console.log(err));
// INSERT DATA
// let newPerson = new Person({
//   name: "Ameni",
//   age: 30,
//   favoriteFodds: ["kamouneya", "kafteji"],
// });
// newPerson
//   .save()
//   .then(() => console.log("person added successfully"))
//   .catch((err) => console.log(err));
// Person.deletMany({ Ameni }).then(() => console.log("person was deleted"))
// .catch((err)=>console.log(err))
app.listen(5000, () => {
  console.log("server is running");
});
