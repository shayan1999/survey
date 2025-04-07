import { useState } from "react";
import SurveyBasics from "../../views/Survey/SurveyBasics";
import { questionType } from "../../utils/questions/types";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSurveyStore } from "../../store/survey";

const Survey = () => {
  const { t } = useTranslation();
  let navigate = useNavigate();
  const { setAnswer, setQuestionSubmit, answers } = useSurveyStore();
  const questions: questionType[] = t("questions:indecision:questions", {
    returnObjects: true,
  });
  const data: questionType[] = [...questions];
  const [questionNumber, setQuestionNumber] = useState(0);

  const setPointFunc = (newPoint: number, showResult?: boolean) => {
    setAnswer(newPoint, questionNumber);
    if (showResult) {
      const result= answers[0]-answers[1]-answers[2]-answers[4]-answers[5]-answers[7]-answers[8]+answers[9]+answers[10]+answers[11]+newPoint
      setQuestionSubmit(true);
      // navigate(`/survey/indecision/demography`);
      navigate(`/survey/indecision/result/${result}/-/-`);
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
