import logo from "./logo.svg";
import "./App.css";
import { FormRegis } from "./formRegis/register";

function App() {
  return (
    <div className="App">
      <FormRegis />

      
      <script
        src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
        crossorigin
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
        crossorigin
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin
      ></script>

      <script>var Alert = ReactBootstrap.Alert;</script>
    </div>
  );
}

export default App;
