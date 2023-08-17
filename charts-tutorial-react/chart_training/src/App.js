import BubbleChart3Dfunction from './bubble-chart/BubbleChart3Dfunction';
import BubbleChart3Dclass from './bubble-chart/BubbleChart3Dclass';

import './App.css';

// const data = [
//   { value: 5, label: 'Hello' },
//   { value: 10, label: 'Ciao' },
//   { value: 15, label: 'Salut' },
// ];

const dataFunction = [
  { label: 'Hello', val: 10 },
  { label: 'Good bye', val: 9 },
  { label: 'Gracias', val: 9 },
  { label: 'Adios Tutti', val: 8 },
  { label: 'Ciao', val: 7 },
  { label: 'Salut', val: 5 },
  { label: 'Addios Tutti', val: 1 },
];

const dataClass = [
  { v: 100 },
  { v: 100 },
  { v: 100 },
  { v: 90 },
  { v: 80 },
  { v: 70 },
  { v: 60 },
  { v: 50 },
  { v: 40 },
  { v: 30 },
  { v: 20 },
  { v: 10 },
];

const App = () => {
  return (
    <div className='app-section'>
      <h5>BubbleChart3D function version</h5>
      <div className='app-article'>
        <BubbleChart3Dfunction
          data={dataFunction}
          width={1644}
          height={500}
          xPos={0}
          yPos={-15}
        />
      </div>
      <h5>BubbleChart3D class version</h5>
      <div className='app-article'>
        <BubbleChart3Dclass data={dataClass} width={1644} height={500} />
      </div>
    </div>
  );
};

export default App;
