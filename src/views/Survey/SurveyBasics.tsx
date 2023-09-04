import { questionType } from "../../utils/questions/types";
import Answers from "./Answers";

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
  const submitAnswer = (point: number, showResult?: boolean) => {
    setPoint(questions[questionNumber].reversed ? -point : point, showResult);
    if (questions.length - 1 > questionNumber) setQuestion(questionNumber + 1);
  };

  return (
    <div className="basic-container d-flex flex-column">
      <div className="w-100 flex-1 d-flex justify-content-center align-items-center p-4">
        <span className="quetsion-text">
          {questions[questionNumber].description}
        </span>
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
