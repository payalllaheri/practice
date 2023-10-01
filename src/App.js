
import "./App.css";
import Table from "./components/Table";
import Heading from "./components/Heading";

import Timer from "./components/Timer";
import ScrollingPage from "./components/ScrollTo";
import Agenda from "./components/Agenda";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Agenda />
      <Table />
      <Heading title="Hello" />


      <Timer />
      <ScrollingPage />
      <Heading title="Hello" />
      <Timer />
      <ScrollingPage />
      <About/>
      <Agenda />
      <Table />
      <Home/>
    </div>
  );
}

export default App;
