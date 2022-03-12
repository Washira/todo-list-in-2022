const express = require("express")
const router = express.Router();

// Todolist Model
const todoSchema = require("./model");

//Create todo
router.route("/create").post((req, res, next) => {
  todoSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

//Read Todo
router.route("/").get((req, res, next) => {
  todoSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      return res.json(data);
    }
  });
});

//Get Single Todolist
router.route("/edit/:id").get((req, res, next) => {
  todoSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

//Update Todolist
router.route("/update/:id").put((req, res, next) => {
  todoSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        res.json(data);
        console.log("Todolist successfully updated");
      }
    }
  );
});

//Delete Todolist
router.route("/delete/:id").delete((req, res, next) => {
  todoSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({ msg: data });
    }
  });
});

module.exports = router;