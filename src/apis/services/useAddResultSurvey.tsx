import { useMutation } from "@tanstack/react-query";
import { client } from "../client";

type dataType = {
  answers: number[];
  pool: string;
  gender: "man" | "woman" | "others";
  education: string;
  age: string;
  survey: string;
};

const addResultSurvey = async (dataLocal: dataType) => {
  const body = {
    Pool: dataLocal.pool,
    Participant: +new Date(),
    Answers: dataLocal.answers,
    Age: dataLocal.age,
    Gender: dataLocal.gender,
    Education: dataLocal.education,
    Type: "Agreement",
    SurveyName: dataLocal.survey,
  };
  let { data } = await client.post("/result/custom/save", body);
  return data;
};

export function useAddResultSurvey() {
  return useMutation(addResultSurvey);
}
