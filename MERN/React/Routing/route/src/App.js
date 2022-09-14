import React from "react";
import {
  Routes,
  Route,
  Link 
} from "react-router-dom";
    
const Home = (props) => {
  return (
    <div>
        <h1 style={{color: "red"}}>Home Component</h1>
        <Link to={"/about"}>Go to About </Link>
    </div>
  );
}
    
const About = (props) => {
  return (
    <div>
        <h1 style={{color: "blue"}}>About Component</h1>
        <Link to={"/"}>Go Home</Link> 
    </div>
  );
}
    
function App() {
  return (
    <div>
      <h1>Routing Example</h1>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
    
export default App