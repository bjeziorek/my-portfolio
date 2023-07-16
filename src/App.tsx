import React, { useState } from 'react';
import './App.css';
import { About } from './components/About';
import { Projects } from './components/Projects';

function App() {
  const [mode, setMode] = useState('projects');

  return (
    <div className="App">
      {/*<header className="App-header">
        <nav>
           <button onClick={()=>setMode('projects')}>Projects</button>
          <button onClick={()=>setMode('about')}>About</button> 
        </nav>
      </header>*/}
      <body>
        <main>
          {mode==='projects'
          ?<Projects/>
          :<About />
          }
          </main>
      </body>
    </div>
  );
}

export default App;
