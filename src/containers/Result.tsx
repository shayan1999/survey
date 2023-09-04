import { useSearchParams } from "react-router-dom";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";

const Result = () => {
  const data = {
    labels: [-20, -10, 0, 10, 20, 30],
    datasets: [
      {
        label: "Our Data",
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "indecisiveness Score",
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Frequency",
        },
      },
    },
  };

  const [searchParams] = useSearchParams();

  return (
    <div className="basic-container d-flex flex-column">
      <div className="w-100 flex-1 d-flex justify-content-center align-items-center p-4">
        <div className="chart-background">
          <Chart
            type="bar"
            data={data}
            style={{ width: "100%", height: "100%" }}
            // @ts-ignore
            options={options}
          />
        </div>
      </div>
      <div className="w-100 flex-1 bg-white justify-content-center align-items-center d-flex p-4">
        <span style={{ fontSize: 22, textAlign: "center" }}>
          your point is{" "}
          <b style={{ fontSize: 24 }}>{searchParams.get("point")}</b> and you
          can see other people's data on our chart
        </span>
      </div>
    </div>
  );
};

export default Result;
