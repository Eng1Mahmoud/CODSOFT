import jwt from "jsonwebtoken";
import Test from "../models/Test.mjs";
import dotenv from "dotenv";
dotenv.config();

export const AddTest = async (req, res) => {
    console.log(process.env.JWT_SECRET)
  const { testName, questions } = req.body;

console.log(req.user,"id")
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
    console.log(tests)
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

// get test by id 

export const getTestById = async (req, res) => {
  const { id } = req.params;
  console.log(id)
  try {
    const test = await Test.findById(id).populate("publisher");
    res.status(200).json(test);
  } catch (error) {
    res.json({ message: error.message });
  }
};