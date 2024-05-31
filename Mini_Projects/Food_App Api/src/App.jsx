import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Foodlist from "./FoodList"
import Navbar from "./Navbar";
import "./Card.css"

function App() {
  return (
    <>
    <Navbar/>
      <Foodlist />
    </>
  );
}

export default App;
