import React, { useState, useEffect } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { t } from "i18next";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface GaussianPlotProps {
  mean: number;
  std: number;
  threshold: number;
  stepSize: number;
  desiredSum: number; // Desired total sum of all y-values
  plotName: string;
  show?: boolean;
}

const calculatePDF = (x: number, mean: number, std: number): number => {
  return (
    (1 / (std * Math.sqrt(2 * Math.PI))) *
    Math.exp(-0.5 * Math.pow((x - mean) / std, 2))
  );
};

const GaussianPlot: React.FC<GaussianPlotProps> = ({
  mean,
  std,
  threshold,
  stepSize,
  desiredSum,
  plotName,
  show = true,
}) => {
  const [data, setData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const start = -22;
    const end = 22;
    const points = Array.from(
      { length: Math.floor((end - start) / stepSize) + 1 },
      (_, i) => start + i * stepSize
    );
    const pdfData = points.map((x) => calculatePDF(x, mean, std));

    const currentSum = pdfData.reduce((acc, cur) => acc + cur, 0);
    const scalingFactor = desiredSum / currentSum;
    const scaledPdfData = pdfData.map((y) => y * scalingFactor);

    const datasets = [
      {
        label: t("result:below"),
        data: scaledPdfData.map((y, index) =>
          points[index] <= threshold ? y : NaN
        ),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.1)",
        fill: true,
      },
      {
        label: t("result:above"),
        data: scaledPdfData.map((y, index) =>
          points[index] >= threshold ? y : NaN
        ),
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.1)",
        fill: true,
      },
    ];

    setData({
      // @ts-ignore
      labels: points.map(String),
      // @ts-ignore
      datasets,
    });
  }, [mean, std, threshold, stepSize, desiredSum]);

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        type: "linear",
        ticks: {
          stepSize: stepSize,
        },
      },
    },
  };

  return (
    <div
      className={`w-100 mb-5 max-phone animation ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      <Line data={data} options={options as any} />
      <div className={`d-flex flex-row justify-content-center mt-3 `}>
        <span className="question-text">{t(`result:${plotName}`)}</span>
      </div>
    </div>
  );
};

export default GaussianPlot;
