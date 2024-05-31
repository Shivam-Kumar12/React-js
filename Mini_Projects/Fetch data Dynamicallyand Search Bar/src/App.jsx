import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

const App = () => {
  const [searchvalue, setsearchvalue] = useState('')
  const [dropValue, setDropValue] = useState('')


  const allusers = [
    {
      "Sr no": 1,
      "name": "Rohan Sharma",
      "gender": "Male",
      "Phoneno": "1234567890"
    },
    {
      "Sr no": 2,
      "name": "Riya Jain",
      "gender": "Female",
      "Phoneno": "0987654321"
    },
    {
      "Sr no": 3,
      "name": "Aarav Singh",
      "gender": "Male",
      "Phoneno": "1112223333"
    },
    {
      "Sr no": 4,
      "name": "Aisha Khan",
      "gender": "Female",
      "Phoneno": "3332221111"
    },
    {
      "Sr no": 5,
      "name": "Kunal Mehta",
      "gender": "Male",
      "Phoneno": "4445556666"
    },
    {
      "Sr no": 6,
      "name": "Sania Patel",
      "gender": "Female",
      "Phoneno": "6665554444"
    },
    {
      "Sr no": 7,
      "name": "Rahul Gupta",
      "gender": "Male",
      "Phoneno": "7778889999"
    },
    {
      "Sr no": 8,
      "name": "Neha Sharma",
      "gender": "Female",
      "Phoneno": "9998887777"
    },
    {
      "Sr no": 9,
      "name": "Vikram Singh",
      "gender": "Male",
      "Phoneno": "2223331111"
    },
    {
      "Sr no": 10,
      "name": "Priya Rao",
      "gender": "Female",
      "Phoneno": "1113332222"
    }
  ];
  function handleSearch(e){
    setsearchvalue(e.target.value)
  }
  function dropChange(e){
    setDropValue(e.target.value)
  }
 
    const filtered_Data = allusers.filter(user =>{
      const searchBar = user.name.toLowerCase().includes(searchvalue.toLowerCase()) || user.Phoneno.includes(searchvalue);
      const dropSearch = dropValue === '' || user.gender.toLowerCase() === dropValue
      return searchBar && dropSearch
    })
  return (
    <div className='main-container'>
      <div className="container">
      <label htmlFor="search">
        Search
        <input id="search" type="text" value={searchvalue} onChange={handleSearch} />
      </label>
      <h4>Student Details</h4>
        <select className="form-select" value={dropValue} onChange={dropChange}>
         
          <option  selected value="">All</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
    
    
      </div>
      <table className="table table-striped table-dark unique">
        <thead>
          <tr>
            <th scope="col">Sr no</th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Phoneno</th>
          </tr>
        </thead>
        <tbody>
          {filtered_Data.map((user, index) => {
            return (
              <tr key={index}>
                <th scope="col">{user["Sr no"]}</th>
                <th scope="col">{user.name}</th>
                <th scope="col">{user.gender}</th>
                <th scope="col">{user.Phoneno}</th>
              </tr>
            );
          })}
        </tbody>
      </table>

    </div>
  );
};

export default App;