import { useState } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  submit: (point: number, showResult?: boolean) => void;
  isLastQuestion: boolean;
  answers: number[];
};

const Answers = ({ submit, isLastQuestion, answers }: Props) => {
  const { t } = useTranslation();
  const [answer, setAnswer] = useState<number | null>(null);

  const answerSelect = (id: number | null) => {
    setAnswer(id);
    for (let i = answers[0]; i <= answers.length; i++) {
      if (i === id) {
        document.getElementById(`circle-${i}`)?.classList.add("fill-circle");
      } else {
        document.getElementById(`circle-${i}`)?.classList.remove("fill-circle");
      }
    }
    document.getElementById(`circle-${id}`)?.classList.remove("half-opacity");
  };

  const submitAnswer = (getResult: boolean) => {
    submit(answer as number, getResult);
    answerSelect(null);
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-between h-100 answers-box">
      <div />
      <div className="d-flex flex-column w-100">
        <div className="d-flex flex-row justify-content-between align-items-center w-100">
          {answers.map((item, idx) => {
            return (
              // <div key={idx} className="d-flex flex-column align-items-center">
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
        <div className="w-100 d-flex flex-row justify-content-between align-items-center">
          <span className="answer-hint mt-4 flex-1 text-start">
            {t("questions:indecision:situations:disagree")}
          </span>
          <div className="flex-1" />
          <span className="answer-hint mt-4 flex-1">
            {t("questions:indecision:situations:neutral")}
          </span>
          <div className="flex-1" />
          <span className="answer-hint mt-4 flex-1 text-end ">
            {t("questions:indecision:situations:agree")}
          </span>
        </div>
      </div>
      <div className="submit-buttons-container px-4">
        {isLastQuestion ? (
          <button
            onClick={() => submitAnswer(true)}
            className="submit-button flex-1 primary-button"
            disabled={answer === null}
          >
            {/* TODO: change the strategy of dictionary here for a more dynamic way */}
            {t("questions:indecision:buttons:result")}
          </button>
        ) : (
          <button
            onClick={() => submitAnswer(false)}
            className="submit-button flex-1 green-button"
            disabled={answer === null}
          >
            {t("questions:indecision:buttons:submit")}
          </button>
        )}
      </div>
    </div>
  );
};

export default Answers;
