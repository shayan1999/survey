import { useState } from "react";
import SurveyBasics from "../../views/Survey/SurveyBasics";
import { questionType } from "../../utils/questions/types";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSurveyStore } from "../../store/survey";

const Survey = () => {
  const { t } = useTranslation();
  let navigate = useNavigate();
  const { setAnswer, setQuestionSubmit } = useSurveyStore();
  const questions: questionType[] = t("questions:indecision:questions", {
    returnObjects: true,
  });
  const data: questionType[] = [...questions];
  const [questionNumber, setQuestionNumber] = useState(0);

  const setPointFunc = (newPoint: number, showResult?: boolean) => {
    setAnswer(newPoint, questionNumber);
    if (showResult) {
      setQuestionSubmit(true);
      navigate(`/survey/demography`);
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
