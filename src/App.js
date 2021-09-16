import logo from "./logo.svg";
import "./App.css";
import Form from "vid-form";

function App() {
  console.log("test", Form);
  const handleSubmit = () => {
    console.log("cos pieknego");
  };
  return (
    <div className="App">
      <h1>Testing 111111</h1>

      <Form name="Name from videommerce app" handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
