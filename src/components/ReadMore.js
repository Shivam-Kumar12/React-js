// import React, { useState } from "react";
// import "../App.css";

// const ReadMore = ({ children }) => {
// const text = children;
// const [isReadMore, setIsReadMore] = useState(true);
// const toggleReadMore = () => {
// 	setIsReadMore(!isReadMore);
// };
// return (
// 	<p className="text">
// 	{isReadMore ? text.slice(0, 150) : text}
// 	<span onClick={toggleReadMore} className="read-or-hide">
// 		{isReadMore ? "...read more" : " show less"}
// 	</span>
// 	</p>
// );
// };

// const Content = () => {
// return (
// 	<div className="container">
// 		<div className="content">
// 	   <img src="https://media.istockphoto.com/id/1263908025/photo/upcoming-events-chalkboard-and-colored-balloons-on-a-wooden-background.jpg?s=170667a&w=0&k=20&c=4hQlis02eZnMuyFSr3sddhPN_gIZuXp_HC7vm1AK8Mo=" alt=""></img>
// 		</div><center><h1>EVENT</h1><ReadMore>
// 		GeeksforGeeks: A Computer Science portal for geeks.
// 		It contains well written, well thought and well explained
// 		computer science, programming articles and quizzes.
// 		It provides a variety of services for you to learn, so thrive
// 		and also have fun! Free Tutorials, Millions of Articles, Live,
// 		Online and Classroom Courses ,Frequent Coding Competitions,
// 		Webinars by Industry Experts, Internship opportunities, and Job
// 		Opportunities. Knowledge is power!
// 	</ReadMore>
// 		</center>

	
// 	<div className="button">
// 		<button className="btn1">Apply for Volunters</button>
// 		<button className="btn2">Apply</button>
// 	</div>
// 	</div>
// );
// };

// export default Content;

import React, { useState } from "react";
import { Switch, Route } from 'react-router-dom';
import { Router, useNavigate } from "react-router-dom";
import "../App.css";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

const Content = () => {
  const navigate = useNavigate();

  function handleApplyClick() {
    navigate("/apply");
  }

  function handleVolunteersClick() {
    navigate("/volunteers");
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="container">
            <div className="content">
              <img
                src="https://media.istockphoto.com/id/1263908025/photo/upcoming-events-chalkboard-and-colored-balloons-on-a-wooden-background.jpg?s=170667a&w=0&k=20&c=4hQlis02eZnMuyFSr3sddhPN_gIZuXp_HC7vm1AK8Mo="
                alt=""
              ></img>
            </div>
            <center>
              <h1>EVENT</h1>
              <ReadMore>
                GeeksforGeeks: A Computer Science portal for geeks. It contains
                well written, well thought and well explained computer
                science, programming articles and quizzes. It provides a
                variety of services for you to learn, so thrive and also have
                fun! Free Tutorials, Millions of Articles, Live, Online and
                Classroom Courses ,Frequent Coding Competitions, Webinars by
                Industry Experts, Internship opportunities, and Job
                Opportunities. Knowledge is power!
              </ReadMore>
            </center>

            <div className="button">
              <button className="btn1" onClick={handleVolunteersClick}>
                Apply for Volunteers
              </button>
              <button className="btn2" onClick={handleApplyClick}>
                Apply
              </button>
            </div>
          </div>
        </Route>

        <Route path="/apply">
          <h1>Apply page</h1>
        </Route>

        <Route path="/volunteers">
          <h1>Volunteers page</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default Content;
