import { useEffect, useState } from "react";

import "./App.css";
import { ParamLine } from "./ParamLine";
import { ParamPlot } from "./ParamPlot";

function App() {
  const [tempData, setTempData] = useState(50);
  const [tempPoints, setTempPoints] = useState([{ x: 0, y: 50 }]);
  const [amandaData, setAmandaData] = useState(25);
  const [amandaPoints, setAmandaPoints] = useState([{ x: 0, y: 25 }]);
  const maxPlotPoints = 101;

  useEffect(() => {
    if (tempPoints.length >= maxPlotPoints) return;

    const timeout = setTimeout(() => {
      setTempPoints((p) => {
        const prev = p[p.length - 1];
        const nextValue = Math.max(
          Math.min(prev.y + Math.random() * 10 - 5, 100),
          0
        );

        setTempData(nextValue);

        return [
          ...p,
          {
            x: prev.x + 1,
            y: nextValue,
          },
        ];
      });
    }, 1000);

    return () => clearTimeout(timeout);
  }, [setTempData, setTempPoints, tempPoints]);

  const shiftQuarter = (array) => {
    const quarterLength = Math.floor(array.length / 4);

    return array.slice(quarterLength);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAmandaPoints((p) => {
        const prev = p[p.length - 1];

        if (amandaPoints.length >= maxPlotPoints) {
          p = shiftQuarter(p);
        }

        return [
          ...p,
          {
            x: prev.x + 1,
            y: amandaData,
          },
        ];
      });
    }, 1000);

    return () => clearTimeout(timeout);
  }, [amandaData, amandaPoints, setAmandaPoints]);

  return (
    <div className="App">
      <ParamLine device="M:OUTTMP" data={tempData} />
      <ParamPlot device="M:OUTTMP" points={tempPoints} />
      <ParamLine device="G:AMANDA" data={amandaData} setting={setAmandaData} />
      <ParamPlot device="G:AMANDA" points={amandaPoints} />
    </div>
  );
}

export default App;
