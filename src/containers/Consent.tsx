import { useNavigate } from "react-router-dom";
import Agreement from "../views/Survey/Agreement";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";

const Consent = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const surveyName = useMemo(() => location.pathname.split("/")[1], [location]);

  const submitConsent = () => {
    navigate("questions");
  };

  return (
    <Agreement
      submit={submitConsent}
      survey={surveyName as "survey" | "closure"}
    />
  );
};

export default Consent;
