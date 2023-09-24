import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useParams,useNavigate } from "react-router-dom";

const TakeTest = () => { 
    const navigate = useNavigate();
  const [test, setTest] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);

  const { quizId } = useParams();

  const handleAnswerOptionClick = (option, correctAnswer) => {
    if (selectedOption === null || correctAnswer === null) {
        if (option === correctAnswer) {
            setScore(score + 1);
            setCorrectAnswer(correctAnswer);
          }
        
          setSelectedOption(option);
    }
  
   
  };

  const handleNextQuestionClick = () => {
    if(selectedOption !== null || correctAnswer !== null) {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < test.questions.length) {
          setCurrentQuestion(nextQuestion);
          setSelectedOption(null);
          setCorrectAnswer(null);
        } else {
          setShowScore(true);
        }
    }
   
  };
  useEffect(() => {
      if( Cookies.get("token") === undefined || !Cookies.get("token") ){
      navigate("/signin");
    }
    const fetchTest = async () => {
      try {
        const response = await axios.get(
          `https://quizs-wg02.onrender.com/getTestById/${quizId}`,
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("token")}`,
            },
          }
        );
        setTest(response.data);
      } catch (error) {
        console.error("Error fetching test:", error);
        // Set test to null or handle error appropriately
        setTest(null);
      }
    };
    fetchTest();
  }, [quizId]);

  return (
    <div className="take-test">
      {test ? (
        showScore ? (
          <div className="score-section">
            <p>You scored {score} out of {test.questions.length}</p>
            <div className="control">
                 <button className="return" onClick={()=>navigate("/testlist")}> Test List</button>
            <button className="return" onClick={()=>navigate("/addquestion")}>Add Test</button>
            </div>
           
          </div>
        ) : (
          <div>
            <h1>{test.testName}</h1>
            <div className="question">
              <h2>{test.questions[currentQuestion].question}</h2>
              <div className="options">
                {test.questions[currentQuestion].options.map((option) => (
                  <div
                    key={option}
                    className={`option ${
                      selectedOption === option
                        ? option === correctAnswer
                          ? "Correct-Answer"
                          : "Wrong-Answer"
                        : ""
                    }`}
                    onClick={() =>
                      handleAnswerOptionClick(
                        option,
                        test.questions[currentQuestion].correctAnswer
                      )
                    }
                    style={{
                      cursor:
                        selectedOption || correctAnswer
                          ? "not-allowed"
                          : "pointer",
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            </div>
            <div className="controls">
              <button onClick={handleNextQuestionClick}>Next</button>
            </div>
          </div>
        )
      ) : (
        <p>Loading test...</p>
      )}
    </div>
  );
};

export default TakeTest;
