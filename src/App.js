import logo from "./logo.svg";
import "./App.css";

function App() {
  const x = 10;
  return (
    <>
      <h1> Hello world!!</h1>
      <p>{x > 15 ? "x is Greater" : "x is Smaller"}</p>
    </>
  );
}

export default App;
