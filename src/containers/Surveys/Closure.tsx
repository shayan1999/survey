import { useState } from "react";
import SurveyBasics from "../../views/Survey/SurveyBasics";
import { questionType } from "../../utils/questions/types";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSurveyStore } from "../../store/survey";

const Closure = () => {
  const { t } = useTranslation();
  let navigate = useNavigate();
  const { setAnswer, setQuestionSubmit, answers } = useSurveyStore();
  const questions: questionType[] = t("questions:closure:questions", {
    returnObjects: true,
  });
  const data: questionType[] = [...questions];
  const [questionNumber, setQuestionNumber] = useState(0);
  const setPointFunc = (newPoint: number, showResult?: boolean) => {
    setAnswer(newPoint, questionNumber);
    if (showResult) {
      const result= answers[0]+answers[1]+answers[2]+ answers[3]+answers[4]+answers[5]+6-answers[6]+1+6-answers[7]+1+answers[8]+answers[9]+answers[10]+ answers[11]+answers[12]+6-answers[13]+1+newPoint
      setQuestionSubmit(true);
      navigate(`/survey/closure/appreciate/${result}`);
      // navigate(`/survey/closure/demography`);
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

export default Closure;
