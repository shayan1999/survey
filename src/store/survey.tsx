import { create } from "zustand";
import { surveyStateStore } from "./types/survey";

export const useSurveyStore = create<surveyStateStore>()((set, get) => ({
  answers: [],
  questionsAnswered: false,
  pool: "",
  education: "",
  gender: "man",
  age: "",
  setAnswer: (value, question) => {
    const answers = question < get().answers.length ? [] : [...get().answers];
    answers.push(value);
    set({ answers });
  },
  setDemography: (pool, education, age, gender) => {
    set({ pool, education, age, gender });
  },
  setQuestionSubmit: (submit: boolean) => {
    set({ questionsAnswered: submit });
  },
}));
