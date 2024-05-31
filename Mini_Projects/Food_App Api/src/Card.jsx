import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";

const Card = ({
  title,
  image,
  description,
  price,
  categories,
 onClickCategory,
  isSurprised,
}) => {
  const handleClick = (category) => {
    onClickCategory(category);
  };

  return (
    <div className={"card" + (isSurprised ? " surprised" : "")}>
      {" "}
      {/* Add "surprised" class if it's a surprised item */}
      <img src={image} className="card-img-top img" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        {categories.map((category, index) => (
          <button
            key={index}
            type="button"
            className="btn btn-warning warning"
            onClick={() => handleClick(category)}
          >
            {category}
          </button>
        ))}
        <p className="card-text">
          <small className="text-body-primary large">Price: ${price}</small>
        </p>
      </div>
    </div>
  );
};

export default Card;
