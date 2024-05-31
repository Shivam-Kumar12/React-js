import React from "react";
import Card from "./Card";
import menu from "./menu";

const Foodlist = ({
  search = "",
  sort,
  category,
  onClickCategory,
  suprisedItem,
}) => {
  // Filter menu based on search and category
  let filteredMenu = menu.filter(
    (food) =>
      (search === "" || food.title.toLowerCase().includes(search.trim())) &&
      (category === "All" || food.categories.includes(category))
  );

  // Sort the filtered menu based on sort criteria
  if (sort === "lowToHigh") {
    filteredMenu.sort((a, b) => a.price - b.price);
  } else if (sort === "highToLow") {
    filteredMenu.sort((a, b) => b.price - a.price);
  }

  // Determine if there are no items found
  const noItemsFound = search.trim() !== "" && filteredMenu.length === 0;

  return (
    <div className="container">
      <div className="found">
        {noItemsFound && (
          <div className="alert alert-danger danger" role="alert">
            No items found matching your search criteria.
          </div>
        )}
      </div>
      {suprisedItem ? ( // Check if there is a surprised item
      
          <Card
            key={suprisedItem.id}
            title={suprisedItem.title}
            image={suprisedItem.image}
            description={suprisedItem.description}
            price={suprisedItem.price}
            categories={suprisedItem.categories}
            
          />

      ) : (
        <div className="card-container">
          {filteredMenu.map((food, index) => (
            <Card
              key={index}
              title={food.title}
              image={food.image}
              description={food.description}
              price={food.price}
              categories={food.categories}
              onClickCategory={onClickCategory}
            />
          ))}
        </div>
      )}
    </div>
  );ā
};

export default Foodlist;
