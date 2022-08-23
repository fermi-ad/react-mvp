import { Line } from "@nivo/line";
import { generateDrinkStats } from "@nivo/generators";

const data = generateDrinkStats(18);
const commonProperties = {
  width: 900,
  height: 400,
  margin: { top: 20, right: 20, bottom: 60, left: 80 },
  data,
  animate: true,
  enableSlices: "x",
};

export const ParamPlot = ({ drf, points }) => {
  return (
    <Line
      {...commonProperties}
      yScale={{
        type: "linear",
        min: 0,
        max: "auto",
      }}
      xScale={{
        type: "linear",
        min: 0,
        max: "auto",
      }}
      data={[{ id: drf, data: points }]}
      axisBottom={{
        tickValues: 4,
      }}
      axisLeft={{
        tickValues: 4,
      }}
      isInteractive={false}
      animate={false}
      enableArea={false}
    />
  );
};
