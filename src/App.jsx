import { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => setCount(count + multiplier);

  return (
    <div className="App">
      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img className="samosa" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Samosa_with_chutney.jpg/600px-Samosa_with_chutney.jpg" alt="Samosa" onClick={updateCount} />
      </div>
    </div>
  );
}

export default App;
