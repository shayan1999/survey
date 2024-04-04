import { create } from "zustand";
import { surveyStateStore } from "./types/survey";

export const useSurveyStore = create<surveyStateStore>()((set, get) => ({
  answers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  questionsAnswered: false,
  pool: "",
  education: "",
  gender: "man",
  age: "",
  setAnswer: (value, questionNumber) => {
    const answers = [...get().answers];
    answers[questionNumber] = value;
    // @ts-ignore
    set({ answers });
  },
  setDemography: (pool, education, age, gender) => {
    set({ pool, education, age, gender });
  },
  setQuestionSubmit: (submit: boolean) => {
    set({ questionsAnswered: submit });
  },
}));
