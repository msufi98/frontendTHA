import Card from "./components/Card"
import "./styles.css"

let foodList =[ {food: "Pizza", calories: 3000},
  {food: "Burger", calories: 2000},
  {food: "MilkShake", calories: 400},
  {food: "Salad", calories: 50},
  {food: "Milk", calories: 70},
  {food: "Fruit", calories: 200},
  {food: "Roti", calories: 40},]

function App() {
  return (
    <div className="App">
      <h1>Calorie Read Only List</h1>
      <div className="ScrollableContainer">
        <Card>{foodList[0]}</Card>
        <Card>{foodList[1]}</Card>
        <Card>{foodList[2]}</Card>
        <Card>{foodList[3]}</Card>
        <Card>{foodList[4]}</Card>
        <Card>{foodList[5]}</Card>
        <Card>{foodList[6]}</Card>
      </div>
      
    </div>
  );
}

export default App;
