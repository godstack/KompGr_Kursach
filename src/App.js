import React from "react";
import { Header } from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from "./routes";
import "./App.css";

function App() {
  const routes = useRoutes();
  return (
    <Router>
      <Header />
      <div className="app">{routes}</div>
    </Router>
  );
}

export default App;
