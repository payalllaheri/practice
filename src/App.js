import logo from "./logo.svg";
import "./App.css";
import Table from "./components/Table";
import Heading from "./components/Heading";
import About from "./components/About";
import Home from "./components/Home";
import Timer from "./components/Timer";
import ScrollingPage from "./components/ScrollTo";
import Agenda from "./components/Agenda";

function App() {
  return (
    <div className="App">
      <Agenda />
      <Table />
      <Heading title="Hello" />

      <Heading title="Hello" />

      <Timer />
      <ScrollingPage />
    </div>
  );
}

export default App;
