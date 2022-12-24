import { useState } from 'react';
import './App.css';
import Lazy from './Lazy';

function App() {
  const [name, setName] = useState('');

  return (
    <div className="App">
      <h1>glob-import-alias</h1>
      <div className="card">
        <p>Type the name of the component you want to load</p>
        <p>Available components: Awesome, NestedUi, VueRules</p>
        <input type="text" onInput={e => setName((e.target as HTMLInputElement).value)} />
        {
          name && <Lazy name={name} />
        }
      </div>
    </div>
  );
}

export default App;
