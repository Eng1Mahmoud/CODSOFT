import {useNavigate} from 'react-router-dom'
import studentImage from "../assets/student.png";
const Home = () => {

  const navigate = useNavigate()
  return (
    <div className={`home`}>
      <div className="content">
        <div  className="text">
      
        <p>
          We're thrilled to have you here. This is a platform where you can create and share your own tests, as well as take tests created by others.
        </p>
        <p>
          Creating a test is easy! Just click "Add Test" to get started and share your knowledge with the world. Or if you're ready to challenge yourself, click "Take Test" to explore a variety of tests available.
        </p>
        <div className="btn">
          <button onClick={()=> navigate("/addquestion")}> Add Test</button>
          <button onClick={()=> navigate("/testlist")} className='taketest'> Take Test</button>
        </div>
        </div>
        <div className="img">
          <img src={studentImage} alt="home" />
        </div>
       
      </div>
    </div>
  );
};

export default Home;
