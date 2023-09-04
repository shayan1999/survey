import { useState } from "react";
import SurveyBasics from "../views/Survey/SurveyBasics";
import { questions } from "../utils/questions";
import { questionType } from "../utils/questions/types";
import { useNavigate } from "react-router-dom";

const Survey = () => {
  let navigate = useNavigate();
  const data: questionType[] = [...questions];
  const [point, setPoint] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);

  const setPointFunc = (newPoint: number, showResult?: boolean) => {
    let localPoint = point + newPoint;
    setPoint(localPoint);
    if (showResult) {
      navigate(`result?point=${localPoint}`);
    }
  };

  return (
    <SurveyBasics
      questions={data}
      questionNumber={questionNumber}
      setQuestion={(id) => setQuestionNumber(id)}
      setPoint={setPointFunc}
    />
  );
};

export default Survey;
