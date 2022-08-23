import { useEffect, useState } from 'react';

import './App.css';
import { ParamLine } from './ParamLine';
import { ParamPlot } from './ParamPlot';

function App() {
  const [tempData, setTempData] = useState(50);
  const [tempPoints, setTempPoints] = useState([{ x: 0, y: 50 }]);
  const [amandaData, setAmandaData] = useState(50);
  const [amandaPoints, setAmandaPoints] = useState([{ x: 0, y: 50 }]);

  useEffect(() => {
    if (tempPoints.length >= 101) return;

    setTimeout(() => {
      setTempPoints((p) => {
        const prev = p[p.length - 1];
        const nextValue = Math.max(Math.min(prev.y + Math.random() * 10 - 5, 100), 0);

        setTempData(nextValue)

        return [
          ...p,
          {
            x: prev.x + 1,
            y: nextValue,
          },
        ];
      });
    }, 1000);
  }, [tempPoints, setTempPoints, tempData, setTempData]);

  useEffect(() => {
    setTimeout(() => {
      setAmandaPoints((p) => {
        const prev = p[p.length - 1];
        const nextValue = Math.max(Math.min(prev.y + Math.random() * 10 - 5, 100), 0);

        setAmandaData(nextValue)

        return [
          ...p,
          {
            x: prev.x + 1,
            y: nextValue,
          },
        ];
      });
    }, 1000);
  }, [amandaData, setAmandaData, amandaPoints, setAmandaPoints]);

  return (
    <div className="App">
      <ParamLine drf="M:OUTTMP" data={tempData} />
      <ParamPlot drf="M:OUTTMP" points={tempPoints} />
      <ParamLine drf="G:AMANDA" data={amandaData} />
      <ParamPlot drf="G:AMANDA" points={amandaPoints} />
    </div>
  );
}

export default App;
