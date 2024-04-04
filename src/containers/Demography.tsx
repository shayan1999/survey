import React, { useState } from "react";
import DemographyView from "../views/Survey/Demography";
import { useSurveyStore } from "../store/survey";
import { useAddResult } from "../apis/services/useAddResult";
import { useNavigate } from "react-router-dom";

const Demography = () => {
  let navigate = useNavigate();
  const [data, setData] = useState<{
    age: string;
    gender: "man" | "woman" | "others";
    education: string;
    pool: string;
  }>({
    age: "",
    gender: "man",
    education: "",
    pool: "",
  });
  const { isLoading, mutate } = useAddResult();
  const { setDemography, questionsAnswered, answers } = useSurveyStore();
  const onChange = ({ value, name }: { value: string; name: string }) => {
    setData({ ...data, [name]: value });
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    if (data.pool && questionsAnswered) {
      setDemography(data.pool, data.education, data.age, data.gender);
      mutate(
        {
          answers,
          pool: data.pool,
          age: data.age,
          gender: data.gender,
          education: data.education,
        },
        {
          onSuccess: (res) => {
            console.log(res.message);
            navigate("/survey/result?point=12");
          },
          onError: (e) => console.error(e),
        }
      );
    } else {
      console.log("eee", questionsAnswered);
    }
  };

  return (
    <DemographyView
      data={data}
      onChange={onChange}
      onSubmit={onSubmit}
      loading={isLoading}
    />
  );
};

export default Demography;
