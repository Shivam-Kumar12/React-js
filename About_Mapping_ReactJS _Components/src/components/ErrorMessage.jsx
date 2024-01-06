import React from "react";
let ErrorMessage = ({items}) => {
    let foodItems =['Dal','Fish','Green Vegetables','Yogurt','Fruits','Ghee','Dahi']

    return items.length === 0 ? <h3>I am still hungry </h3> : null;
};

export default ErrorMessage;
