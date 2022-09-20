import React from 'react';
import Main from './views/Main';
import Detail from './views/Detail';
import { Routes, Route } from 'react-router-dom';


// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Main/>
//     </div>
//   );
// }

function App() {
  return (
  <div className="App">
       <Routes>
           <Route element={<Main/>} path="/api/products/" />
           <Route element={<Detail/>} path="/api/products/:id" />
       </Routes>                         
  </div>
  );
}



export default App;
