import { useNavigate } from "react-router-dom";
import Agreement from "../views/Survey/Agreement";

const Consent = () => {
  let navigate = useNavigate();

  const submitConsent = () => {
    navigate("questions");
  };

  return <Agreement submit={submitConsent} />;
};

export default Consent;
