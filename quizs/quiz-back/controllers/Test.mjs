import jwt from "jsonwebtoken";
import Test from "../models/Test.mjs";
import dotenv from "dotenv";
dotenv.config();

export const AddTest = async (req, res) => {
  const { testName, questions } = req.body;
  const test = new Test({
    testName,
    questions,
    publisher: req.user.userId, // Link the user (publisher) to the test
  });
  try {
    await test.save();
    res.status(201).json({ added: true, message: "Test added successfully" });
  } catch (error) {
    res.status(409).json({ added: false, message: error.message });
  }
};

// get all test and publisher information use the populate method

export const getAllTests = async (req, res) => {
  try {
    const tests = await Test.find().populate("publisher");

    res.status(200).json(tests);

  } catch (error) {

  }
}

// get test by id 

export const getTestById = async (req, res) => {
  const { id } = req.params;

  try {
    const test = await Test.findById(id).populate("publisher");
    res.status(200).json(test);
  } catch (error) {
    res.json({ message: error.message });
  }
};