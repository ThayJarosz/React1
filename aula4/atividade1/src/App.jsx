import { useState } from 'react';
import ColorSwitch from './ColorSwitch';

function App() {

  const [clicks, setClicks] = useState(0);

  function handleClickOutside() {
    setClicks(c => c + 1);
  }

  function getRandomLightColor() {
    let r = 150 + Math.round(100 * Math.random());
    let g = 150 + Math.round(100 * Math.random());
    let b = 150 + Math.round(100 * Math.random());
    return `rgb(${r}, ${g}, ${b})`;
  }

  function handleChangeColor(event) {
    let bodyStyle = document.body.style;
    bodyStyle.backgroundColor = getRandomLightColor();
    event.stopPropagation();
  }
  return (
    <div style={{ width: '100%', height: '100%' }} onClick={handleClickOutside}>
      <h1>Contador de Cliques: {clicks}</h1>
      <ColorSwitch onChangeColor={handleChangeColor} />
    </div>
  );
};

export default App;