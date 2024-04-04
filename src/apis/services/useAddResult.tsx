import { useMutation } from "@tanstack/react-query";
import { client } from "../client";

type dataType = {
  answers: [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
  ];
  pool: string;
  gender: "man" | "woman" | "others";
  education: string;
  age: string;
};

const addResult = async (dataLocal: dataType) => {
  const body = {
    Pool: dataLocal.pool,
    Participant: +new Date(),
    Item1: dataLocal.answers[0],
    Item10: dataLocal.answers[9],
    Item11: dataLocal.answers[10],
    Item12: dataLocal.answers[11],
    Item15: dataLocal.answers[14],
    Item2: dataLocal.answers[1],
    Item3: dataLocal.answers[2],
    Item5: dataLocal.answers[4],
    Item6: dataLocal.answers[5],
    Item8: dataLocal.answers[7],
    Item9: dataLocal.answers[8],
    Age: dataLocal.age,
    Gender: dataLocal.gender,
    Education: dataLocal.education,
    Type: "Agreement",
  };
  let { data } = await client.post("/result/save", body);
  return data;
};

export function useAddResult() {
  return useMutation(addResult);
}
