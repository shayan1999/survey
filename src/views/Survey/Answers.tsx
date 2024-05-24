import { useState } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  submit: (point: number, showResult?: boolean) => void;
  isLastQuestion: boolean;
};

const Answers = ({ submit, isLastQuestion }: Props) => {
  const { t } = useTranslation();
  const [answer, setAnswer] = useState<number | null>(null);
  const answers = [-2, -1, 0, 1, 2];

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
              <div key={idx} className="d-flex flex-column align-items-center">
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
                {item % 2 === 0 ? (
                  <span className="answer-hint mt-4">
                    {item < 0
                      ? t("questions:indecision:situations:disagree")
                      : item === 0
                      ? t("questions:indecision:situations:neutral")
                      : t("questions:indecision:situations:agree")}
                  </span>
                ) : (
                  <span className="answer-hint mt-4">.</span>
                )}
              </div>
            );
          })}
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
