export type surveyStateType = {
  answers: number[];
  questionsAnswered: boolean;
  pool: string;
  education: string;
  age: string;
  gender: "man" | "woman" | "others";
};

export type surveyStateStore = surveyStateType & {
  setAnswer: (value: number, question: number) => void;
  setDemography: (
    pool: string,
    education: string,
    age: string,
    gender: "man" | "woman" | "others"
  ) => void;
  setQuestionSubmit: (submit: boolean) => void;
};
