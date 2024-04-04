import { useTranslation } from "react-i18next";
import { questionType } from "../../utils/questions/types";
import Answers from "./Answers";
import { LangSwitcher } from "../../components/LangSwitcher";

type Props = {
  questions: questionType[];
  questionNumber: number;
  setQuestion: (id: number) => void;
  setPoint: (newPoint: number, showResult?: boolean) => void;
};

const SurveyBasics = ({
  questions,
  questionNumber,
  setQuestion,
  setPoint,
}: Props) => {
  const { t } = useTranslation();
  const submitAnswer = (point: number, showResult?: boolean) => {
    document.getElementById("question-header")?.classList.add("hide-question");
    document.getElementById("question-text")?.classList.add("hide-question");
    setTimeout(() => {
      setPoint(point, showResult);
      if (questions.length - 1 > questionNumber)
        setQuestion(questionNumber + 1);
      document
        .getElementById("question-header")
        ?.classList.remove("hide-question");
      document
        .getElementById("question-text")
        ?.classList.remove("hide-question");
    }, 500);
  };

  return (
    <div className="basic-container d-flex flex-column">
      <div className="w-100 flex-1 d-flex flex-column justify-content-center align-items-center p-4">
        <div className="progress-container">
          <div className="progress-bar-custom">
            <div
              className="fill-progress"
              style={{
                width: `${((questionNumber + 1) / questions.length) * 100}%`,
              }}
            >{`${(((questionNumber + 1) / questions.length) * 100).toFixed(
              2
            )}%`}</div>
          </div>
        </div>
        <h2 id="question-header" className="text-white mb-3 animation">
          {t("questions:question")} {questionNumber + 1}
        </h2>
        <span id="question-text" className="quetsion-text animation">
          {questions[questionNumber].description}
        </span>
        <div style={{ position: "absolute", right: 20, top: 50 }}>
          <LangSwitcher />
        </div>
      </div>
      <div className="w-100 flex-1 bg-white justify-content-center align-items-center d-flex p-4">
        <Answers
          isLastQuestion={questions.length === questionNumber + 1}
          submit={submitAnswer}
        />
      </div>
    </div>
  );
};

export default SurveyBasics;
