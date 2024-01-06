import Item from "./Item";
const FoodItem = ({items}) => {
//   let foodItem = [
//     "Dal",
//     "Fish",
//     "Green Vegetables",
//     "Yogurt",
//     "Fruits",
//     "Ghee",
//     "Dahi",
//   ];
  return (
    <ul class="list-group">
      {items.map((item) => (
        <Item key={item} foodItem={item}></Item>
      ))}
    </ul>
  );
};
export default FoodItem;
