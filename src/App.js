import React, { useState } from 'react';

import Todotasklist from './components/Todotasklist.js';
import { TaskProvider } from './context/notes/TaskContext.js';
import Navbar from './components/Navbar.js';

function App() {
  
  const [filter, setFilter] = useState("all");

  return (
    <>
    <TaskProvider>
    <Navbar setFilter={setFilter} />
      <Todotasklist filter={filter} />
    </TaskProvider>
    </>
  );
}

export default App;