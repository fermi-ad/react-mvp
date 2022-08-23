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
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 0,
          translateY: 0,
          itemsSpacing: 2,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};
