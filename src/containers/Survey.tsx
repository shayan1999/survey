import { useState } from "react";
import SurveyBasics from "../views/Survey/SurveyBasics";
import { questionType } from "../utils/questions/types";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Survey = () => {
  const { t } = useTranslation();
  let navigate = useNavigate();
  const questions: questionType[] = t("questions:questions", {
    returnObjects: true,
  });
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
