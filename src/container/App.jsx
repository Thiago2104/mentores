import Home from "../pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import './App.scss';
import "./Variables.css";
import Mentors from "../pages/Mentors/Mentors";

const App =()=> {
  
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/mentores" element={<Mentors />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
