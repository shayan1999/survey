import { useState } from "react";

type Props = {
  submit: (point: number, showResult?: boolean) => void;
  isLastQuestion: boolean;
};

const Answers = ({ submit, isLastQuestion }: Props) => {
  const [answer, setAnswer] = useState(-1);
  const answers = [0, 1, 2, 3, 4];

  const answerSelect = (id: number) => {
    setAnswer(id);
    for (let i = 0; i <= answers.length; i++) {
      if (i <= id) {
        document.getElementById(`circle-${i}`)?.classList.add("fill-circle");
      } else {
        document.getElementById(`circle-${i}`)?.classList.remove("fill-circle");
      }
    }
    document.getElementById(`circle-${id}`)?.classList.remove("half-opacity");
  };

  const submitAnswer = (getResult: boolean) => {
    submit(answer, getResult);
    answerSelect(-1);
    setAnswer(-1);
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center h-100 answers-box">
      <div className="d-flex flex-row justify-content-between align-items-center w-100">
        {answers.map((item) => {
          return (
            <div
              key={`key-${item}`}
              id={`circle-${item}`}
              className="circle-answer"
              onClick={() => answerSelect(item)}
              onMouseOut={() =>
                document
                  .getElementById(`circle-${item}`)
                  ?.classList.remove("half-opacity")
              }
              onMouseOver={() =>
                document
                  .getElementById(`circle-${item}`)
                  ?.classList.add("half-opacity")
              }
            />
          );
        })}
      </div>
      <div className="d-flex flex-row justify-content-between align-items-center w-100 mt-3">
        <span className="answer-hint">Disagree</span>
        <span className="answer-hint">Agree</span>
      </div>
      <div className="submit-buttons-container px-4">
        {isLastQuestion ? (
          <button
            onClick={() => submitAnswer(true)}
            className="submit-button flex-1 primary-button"
            disabled={answer === -1}
          >
            get result
          </button>
        ) : (
          <button
            onClick={() => submitAnswer(false)}
            className="submit-button flex-1 green-button"
            disabled={answer === -1}
          >
            submit answer
          </button>
        )}
      </div>
    </div>
  );
};

export default Answers;
