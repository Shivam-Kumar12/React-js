// // import React from 'react';
// import GiftCard from './GiftCard';
// import data from './data';
// import React, { useState } from "react";
// // import './GiftCard.css'

// function App() {
//   const [showMore, setShowMore] = useState(false);
//   const { text } = data;
//   const handleRedeem = () => {
//     console.log('Gift card redeemed');
//   };

//   const handleCancel = () => {
//     console.log('Gift card cancelled');
//   };

//   return (
//     <div className="App">
      
//       <GiftCard
//         image="https://cdn.xxl.thumbs.canstockphoto.com/events-buzzword-colorful-cubes-series-drawing_csp5657670.jpg"
//         title="Event"
//         description="Gift card description goes here."
//         onRedeem={handleRedeem}
//         onCancel={handleCancel}
//       />
//       <h1>Show more/less button</h1>
//       <h6>{showMore ? text : `${text.substring(0, 250)}`}</h6>
//       <button className="btn" onClick={() => setShowMore(!showMore)}>
//         {showMore ? "Show less" : "Show more"}
//       </button>
//     </div>
//   );
// }

// export default App;
// import Content from './components/ReadMore'
// // import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// function App() {
// return (
// 	<Content />
// );
// }

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Content from "./components/ReadMore";
import VolunteerApplication from "./components/VolunteerApplication";
import Application from "./components/Application";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Content} />
        <Route path="/volunteer-application" component={VolunteerApplication} />
        <Route path="/application" component={Application} />
        <Route path="/content" component={Content} />
      </Switch>
    </Router>
  );
}

export default App;

