import React, { useState } from 'react';
import Result from './components/result';
import Search from './components/search';

function App() {

  const [search, setSearch] = useState({
    category : "people",
    id : "1",
  });


  return (
       <div class="flex">
        <Search search={search} setSearch={setSearch}/>
        <Result path="/:category/:id" search={search}/>
      </div>
  );
}

export default App;