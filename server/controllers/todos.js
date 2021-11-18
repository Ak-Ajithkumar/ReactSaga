import express from "express";
import mongoose from "mongoose";

import TodosModel from "../models/model.js";

const router = express.Router();

export const getTodos = async (req, res) => {
  try {
    const todos = await TodosModel.find({});
    console.log(todos);
    res.status(200).json(todos);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addTodo = async (req, res) => {
  console.log(req.body);
  const { id, value, statusValue, dateValue } = req.body;

  const newTodosModel = new TodosModel({
    id,
    value,
    statusValue,
    dateValue,
  });

  try {
    await newTodosModel.save();

    res.status(201).json(newTodosModel);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    if (id === "all") {
      const deleteAllTodo = await TodosModel.deleteMany({});
      res.send(deleteAllTodo);
    } else {
      const deleteTodo = await TodosModel.deleteOne({
        id,
      });
      res.send(deleteTodo);
    }
  } catch (err) {
    res.status(409).json({ message: error.message });
  }
};

export const updateTodo = async (req, res) => {
  console.log(req.body);

  try {
    const task = await TodosModel.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );
    res.status(200).json({status: "success"})
  } catch (error) {
    res.send(error);
  }

  // await TodosModel.findByIdAndUpdate(
  //   {
  //     _id: req.params._id,
  //   },
  //   {
  //     value: req.body.title,
  //     statusValue: req.body.status
  //   },
  //   (err, doc) => {
  //     if (err) res.status(400).json({status: "update failed"});
  //     res.status(200).json({status: "updated"});
  //   }
  // )
};

export default router;
