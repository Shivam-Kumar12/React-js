import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

const App = () => {
  const [searchvalue, setsearchvalue] = useState('')

  const allitems = [
    {
      "SerialNo": 1,
      "ItemName": "TV",
      "ItemPrice": "₹ 50000 ",
      "Brand": "Samsung",
      "Count": 1
    },
    {
      "SerialNo": 2,
      "ItemName": "Watch",
      "ItemPrice": "₹ 25000 ",
      "Brand": "Apple",
      "Count": 1
    },
    {
      "SerialNo": 3,
      "ItemName": "Shoes",
      "ItemPrice":  "₹ 8000",
      "Brand": "Nike",
      "Count": 1
    },
    {
      "SerialNo": 4,
      "ItemName": "Laptop",
      "ItemPrice": "₹ 70000 ",
      "Brand": "Samsung",
      "Count": 1
    },
    {
      "SerialNo": 5,
      "ItemName": "Camera",
      "ItemPrice": "₹ 35000 ",
      "Brand": "Apple",
      "Count": 1
    },
    {
      "SerialNo": 6,
      "ItemName": "Headphones",
      "ItemPrice": "₹ 15000 ",
      "Brand": "Nike",
      "Count": 1
    },
    {
      "SerialNo": 7,
      "ItemName": "Refrigerator",
      "ItemPrice": "₹ 40000 ",
      "Brand": "Samsung",
      "Count": 1
    },
    {
      "SerialNo": 8,
      "ItemName": "TShirt",
      "ItemPrice":  "₹ 1200 ",
      "Brand": "Nike",
      "Count": 1
    },
    {
      "SerialNo": 9,
      "ItemName": "Tablet",
      "ItemPrice": "₹ 55000 ",
      "Brand": "Apple",
      "Count": 1
    }
  ];
  const [items, setItems] = useState(allitems);
  const [sorteditems, setSorteditems] = useState(allitems);
  const [totalPrice, setTotalPrice] = useState();

  function handleSearch(e){
    setsearchvalue(e.target.value)
  }

  function dropChange(e){
    // setDropValue(e.target.value)
    if (e.target.value === 'lowest') {
      setSorteditems(sortLowestToHighest(allitems));
    } else if (e.target.value === 'highest') {
      setSorteditems(sortHighestToLowest(allitems));
    } else {
      setSorteditems(allitems);
    }
  }

  function sortLowestToHighest(data) {
    return data.sort((a, b) => parseFloat(a.ItemPrice.replace('₹ ', '')) - parseFloat(b.ItemPrice.replace('₹ ', '')));
  }

  function sortHighestToLowest(data) {
    return data.sort((a, b) => parseFloat(b.ItemPrice.replace('₹ ', '')) - parseFloat(a.ItemPrice.replace('₹ ', '')));
  }

  const filtered_Data = sorteditems.filter(item => {
    const searchBar = item.ItemName.toLowerCase().includes(searchvalue.toLowerCase()) || item.Brand.includes(searchvalue);
    return searchBar
  })
const incrementCount=(index)=>{
  const newItems = [...items];
  newItems[index].Count += 1;
  setItems(newItems);
}
const decrementCount = (index) => {
  const newItems = [...items];
  if (newItems[index].Count > 1) {
    newItems[index].Count -= 1;
  }
  setItems(newItems);
}
useEffect(() => {
  let total = 0;
  items.forEach(item => {
    total += parseFloat(item.ItemPrice.replace('₹ ', '')) * item.Count;
  });
  setTotalPrice(total);
}, [items])


  return (
    <div className='main-container'>
<div className="container">
        <label htmlFor="search">
          Search
          <input id="search" type="text" value={searchvalue} onChange={handleSearch} />
        </label>
        <h4>Product Details</h4>
        <select className="form-select"  onChange={dropChange}>
          <option  selected value="">All</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
      <table className="table table-striped table-bordered unique">
        <thead>
          <tr>
            <th scope="col">SerialNo</th>
            <th scope="col">ItemName</th>
            <th scope="col">Brand</th>
            <th scope="col">ItemPrice</th>
            <th scope="col">AddItem</th>
            <th scope="col">Quantity</th>
            <th scope="col">RemoveItem</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {filtered_Data.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="col">{item["SerialNo"]}</th>
                <th scope="col">{item.ItemName}</th>
                <th scope="col">{item.Brand}</th>
                <th scope="col">{item.ItemPrice}</th>
                <td>
                <button className="btn btn-success" 
                 onClick={() => incrementCount(index)}>+</button>
              </td>
                <th scope="col">{item.Count}</th>
                <td>
                <button className="btn btn-danger " 
                 onClick={() => decrementCount(index)}>-</button>
              </td>
              <th scope='col'>{(item.ItemPrice.replace('₹ ', '')) * item.Count}
              
              </th>
          
              </tr>
            
            );
          })}
            
        </tbody>
        <thead>
            
               <tr className="table">
               <td colSpan={7}> <h1>Total cost </h1></td>
               <td >{totalPrice}</td>
             </tr>
              </thead>
      </table>

    </div>
  );
};

export default App;