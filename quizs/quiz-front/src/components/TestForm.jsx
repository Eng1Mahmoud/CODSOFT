import  { useState, useEffect } from "react";
import testImage from "../assets/test.png";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const TestForm = () => {
  const navigate = useNavigate();
  const [testName, setTestName] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({
    question: "",
    options: ["", "", "", ""],
    correctAnswer: "",
  });
  const [loading, setLoading] = useState(false);
  const [addedTest, setAddedTest] = useState({ added: false, message: "",error:false });

  const closePopup = () => {
    setAddedTest({ added: false, message: "" });
  };

  const handleTestNameChange = (event) => {
    setTestName(event.target.value);
  };

  const handleQuestionChange = (event) => {
    setCurrentQuestion({
      ...currentQuestion,
      question: event.target.value,
    });
  };

  const handleOptionChange = (optionIndex, event) => {
    const updatedOptions = [...currentQuestion.options];
    updatedOptions[optionIndex] = event.target.value;
    setCurrentQuestion({
      ...currentQuestion,
      options: updatedOptions,
    });
  };

  const handleCorrectAnswerChange = (event) => {
    setCurrentQuestion({
      ...currentQuestion,
      correctAnswer: event.target.value,
    });
  };

  const addQuestion = () => {
    const trimmedQuestion = currentQuestion.question.trim();
    const trimmedOptions = currentQuestion.options.map(option => option.trim());

    // Check if the question and all options are entered
    if (trimmedQuestion === "" || trimmedOptions.some(option => option === "")) {
      setAddedTest({ added: true, message: "Please Enter Question or Options",error:true });
      return;
    }

    setQuestions([...questions, { ...currentQuestion }]);
    setCurrentQuestion({
      question: "",
      options: ["", "", "", ""],
      correctAnswer: "",
    });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    // Check if test name is empty
    if (testName.trim() === "") {
    setAddedTest({ added: true, message: "Please enter a test name.",error:true })
    
      setLoading(false);
      return;
    }

    // Check if there are no questions
    if (questions.length === 0) {
      alert("Please add at least one question.");
      setLoading(false);
      return;
    }
    try {
      const res = await axios.post(
        "https://quizs-wg02.onrender.com/api/addTest",
        { testName, questions },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );

      setTestName("");
      setAddedTest({ added: res.data.added, message: res.data.message });
      setLoading(false);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    if (Cookies.get("token") === undefined || !Cookies.get("token")) {
      navigate("/signin");
    }
  }, [navigate]);

  return (
    <div className="container-test">
      {addedTest.added ? (
        <div className="popup" style={{ background: addedTest.error?"red":"green" }}>
          <p>{addedTest.message}</p>
          <AiOutlineClose className="close" onClick={closePopup} />
        </div>
      ) : null}
      <div className="image">
        <img src={testImage} alt="test" loading="lazy"/>
      </div>
      <div className="question-form-container">
        <form onSubmit={handleSubmit} className="question-form">
          <input
            type="text"
            placeholder="Test Name"
            value={testName}
            onChange={handleTestNameChange}
            className="input-field"
          />
          <input
            type="text"
            placeholder="Question"
            value={currentQuestion.question}
            onChange={handleQuestionChange}
            className="input-field"
          />
          {currentQuestion.options.map((option, optionIndex) => (
            <input
              key={optionIndex}
              type="text"
              placeholder={`Option ${optionIndex + 1}`}
              value={option}
              onChange={(e) => handleOptionChange(optionIndex, e)}
              className="input-field"
            />
          ))}
          <input
            type="text"
            placeholder="Correct Answer"
            value={currentQuestion.correctAnswer}
            onChange={handleCorrectAnswerChange}
            className="input-field"
          />
          <button type="button" onClick={addQuestion} className="action-button">
            Add Question
          </button>
          <button type="submit" className="action-button">
            {loading ? "Loading..." : "ADD TEST"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TestForm;
