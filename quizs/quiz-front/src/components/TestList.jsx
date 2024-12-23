import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
const TestList = () => {
  const navigate = useNavigate();
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (Cookies.get("token") === undefined || !Cookies.get("token")) {
      navigate("/signin");
    }
    const fetchTests = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://quizs-wg02.onrender.com/api/getTests",
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("token")}`,
            },
          }
        );

        setTests(response.data);
        setLoading(false);
      } catch (error) {}
    };

    fetchTests();
  }, [navigate]); // Empty dependency array to run only on component mount

  return (
    <div className="takeTest">
      <div className="content">
        <h1>Test List</h1>
        <div className="testList">
          {loading ? (
            <h2>Loading...</h2>
          ) : tests.length === 0 ? (
            <h2>No Tests Available</h2>
          ) : (
            tests.map((test) => (
              <div className="test" key={test._id}>
                <h3 className="title">{test.testName}</h3>
                <div className="publisher">
                  <p>Published by {test.publisher.fullName}</p>
                  <div className="contact">
                    <a
                      href={test.publisher.twitter}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillTwitterCircle />
                    </a>
                    <a
                      href={`mailto:${test.publisher.email}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BiLogoGmail />
                    </a>
                    <a
                      href={test.publisher.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillLinkedin />
                    </a>
                  </div>
                </div>

                <button onClick={() => navigate(`/taketest/${test._id}`)}>
                  Take Test
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TestList;
