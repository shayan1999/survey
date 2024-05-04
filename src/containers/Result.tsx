import { useParams } from "react-router-dom";
import useGetStats from "../apis/services/useGetStats";
import { useState } from "react";
import ResultView from "../views/Survey/Result";

const Result = () => {
  const { gender, ageGroup, score } = useParams();
  const [animationEnd, setAnimationEnd] = useState(false);
  const [showPlots, setShowPlots] = useState(false);
  const { isLoading, data } = useGetStats(gender || "", ageGroup || "");

  return (
    <ResultView
      animationEnd={animationEnd}
      setAnimationEnd={setAnimationEnd}
      data={data}
      score={Number(score) | 0}
      isLoading={isLoading}
      showPlots={showPlots}
      setShowPlots={setShowPlots}
    />
  );
};

export default Result;
