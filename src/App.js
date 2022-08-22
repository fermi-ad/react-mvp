import { useEffect, useState } from 'react';

import './App.css';
import { ParamLine } from './ParamLine';
import { ParamPlot } from './ParamPlot';

function App() {
  const [data, setData] = useState(50);
  const [points, setPoints] = useState([{ x: 0, y: 50 }]);

  useEffect(() => {
    if (points.length >= 101) return;

    setTimeout(() => {
      setPoints((p) => {
        const prev = p[p.length - 1];
        const nextValue = Math.max(Math.min(prev.y + Math.random() * 10 - 5, 100), 0);

        setData(nextValue)

        return [
          ...p,
          {
            x: prev.x + 1,
            y: nextValue,
          },
        ];
      });
    }, 1000);
  }, [points, setPoints, data, setData]);

  return (
    <div style={{height: "30vh"}}>
      <ParamLine data={data} />
      <ParamPlot points={points} />
    </div>
  );
}

export default App;
