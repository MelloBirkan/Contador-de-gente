// src/PlotlyChart.js
import React from "react";
//import Plot from "react-plotly.js";
//esse import gera erro..
// ver https://github.com/plotly/react-plotly.js/issues/272
// sugestão do forum:
import dynamic from "next/dynamic";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

/* tentativa de colocar labels dentro das barras...

    textposition: "inside",
    textfont: {
      color: "white",
    },
    insidetextanchor: "start", // Set the anchor point to the start of the bar

*/

var PlotlyChart = ({ vetorX, vetorY, orientacao, nome }) => {
  var data = [
    {
      x: vetorX,
      y: vetorY,
      type: "bar",
      orientation: orientacao,
      marker: { color: "rgb(73, 161, 194)" },
    },
  ];

  var layout = {
    title: nome,
  };

  return (
    <div>
      <Plot
        data={data}
        layout={layout}
        useResizeHandler={true}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default PlotlyChart;
