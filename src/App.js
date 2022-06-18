import React from 'react';
import data from './data';
import './styles.css';

function App() {
  return (
    <div>
      <ul>
        {data.map(txt => {
          return (
            <li>
              {txt.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
