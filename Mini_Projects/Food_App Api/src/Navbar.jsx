import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FoodList from "./FoodList";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import menu from "./menu";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOption, setSortOption] = useState(""); // State for selected sort option
  const [suprisedItem, setsuprisedItem] = useState(null); // State for surprise item

  const lowtohighSort = () => {
    setSort("lowToHigh");
    setSortOption("Low to High");
  };

  const hightoLowSort = () => {
    setSort("highToLow");
    setSortOption("High to Low");
  };

  const handleCategoryClick = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const handleSurpriseClick = () => {
    const randomFoodItem = getRandomItem(menu); // Get a random food item
    console.log("Surprise Selection:", randomFoodItem); // Check if the random food item is logged
    setsuprisedItem(randomFoodItem);
  };

  const getRandomItem = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  // Get unique categories from menu
  const categories = [...new Set(menu.flatMap((item) => item.categories))];

  return (
    <Container>
      <h1 className="text-center mt-4">Food-Items</h1>
      <Form>
        <div className="home-page">
          <div className="body-container">
            <InputGroup className="my-2">
              <Form.Control
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Foods"
              />
            </InputGroup>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Sort By: {sortOption || "Select"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={lowtohighSort}>
                  Low to High
                </Dropdown.Item>
                <Dropdown.Item onClick={hightoLowSort}>
                  High To Low
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="category">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleCategoryClick("All")}
            >
              All
            </button>
            {categories.map((category, index) => (
              <button
                key={index}
                type="button"
                className="btn btn-secondary"
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
            <button
              type="button"
              className="btn btn-warning"
              onClick={handleSurpriseClick}
            >
              Surprise
            </button>
          </div>
        </div>
        {/* Pass handleCategoryClick instead of handleCategoryClick */}
        <FoodList
          search={search}
          sort={sort}
          category={category}
          onClickCategory={handleCategoryClick}
          suprisedItem={suprisedItem}
        />
      </Form>
    </Container>
  );
};

export default Navbar;
