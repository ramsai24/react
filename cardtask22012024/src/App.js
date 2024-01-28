// import logo from "./logo.svg";
import { dataList } from "./data.js";
import { Card } from "./cards/card";
import "./App.css";

function App() {
  return (
    <div className="App">
      {dataList.map((each) => (
        <Card data={each} key={each.id} />
      ))}
    </div>
  );
}

export default App;
