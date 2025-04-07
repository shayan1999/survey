import { useMemo, useState } from "react";
import DemographyView from "../views/Survey/Demography";
import { useSurveyStore } from "../store/survey";
import { useAddResult } from "../apis/services/useAddResult";
import { useLocation, useNavigate } from "react-router-dom";
import { useAddResultSurvey } from "../apis/services/useAddResultSurvey";

const Demography = () => {
  let navigate = useNavigate();
  const [data, setData] = useState<{
    age: string;
    gender: "man" | "woman" | "others";
    education: "Highschool" | "Ba/BSc" | "MSc" | "PhD/above";
    pool: string;
  }>({
    age: "",
    gender: "man",
    education: "Highschool",
    pool: "",
  });
  const { isLoading, mutate } = useAddResult();
  const { isLoading: isSurveyLoading, mutate: surveyMutate } =
    useAddResultSurvey();
  const { setDemography, questionsAnswered, answers } = useSurveyStore();
  const onChange = ({ value, name }: { value: string; name: string }) => {
    setData({ ...data, [name]: value });
  };
  const location = useLocation();
  const surveyName = useMemo(() => location.pathname.split("/")[2], [location])==='indecision'?'survey':'closure';

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (data.pool && questionsAnswered) {
      setDemography(data.pool, data.education, data.age, data.gender);
      if (surveyName === "survey") {
        mutate(
          {
            answers: answers as any,
            pool: data.pool,
            age: data.age,
            gender: data.gender,
            education: data.education,
          },
          {
            onSuccess: ({ score, ageGroup }) => {
              navigate(`/survey/indecision/result/${score}/${data.gender}/${ageGroup}`);
            },
            onError: (e) => console.error(e),
          }
        );
      } else {
        surveyMutate(
          {
            answers: answers,
            pool: data.pool,
            age: data.age,
            gender: data.gender,
            education: data.education,
            survey: surveyName,
          },
          {
            onSuccess: () => {
              navigate(`/appreciate`);
            },
            onError: (e) => console.error(e),
          }
        );
      }
    } else {
      console.log("eee", questionsAnswered);
    }
  };

  return (
    <DemographyView
      data={data}
      onChange={onChange}
      onSubmit={onSubmit}
      loading={isLoading || isSurveyLoading}
    />
  );
};

export default Demography;
