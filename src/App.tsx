import "./index.css";
import ExamplePage from "./ui/features/example/page";

import { BrowserRouter as Router } from "react-router-dom"; // use BrowserRouter

function App() {
  return (
    <Router>
      <ExamplePage />
    </Router>
  );
}

export default App;
