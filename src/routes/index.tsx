import { Routes, Route, Navigate } from "react-router-dom";
import Survey from "../containers/Surveys/Survey";
import Result from "../containers/Result";
import Consent from "../containers/Consent";
import Demography from "../containers/Demography";
import Closure from "../containers/Surveys/Closure";
import Appreciate from "../containers/Appreciate";

export default function RouterProvider() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/survey" replace />} />
      <Route path="/survey">
        <Route path="" element={<Consent />} />
        <Route path="questions" element={<Survey />} />
        <Route path="result" element={<Navigate to="/" replace />} />
        <Route path="result/:score/:gender/:ageGroup" element={<Result />} />
        <Route path="demography" element={<Demography />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
      <Route path="/closure">
        <Route path="" element={<Consent />} />
        <Route path="questions" element={<Closure />} />
        <Route path="demography" element={<Demography />} />
        <Route path="*" element={<Navigate to="/closure" replace />} />
      </Route>
      <Route path="appreciate" element={<Appreciate />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
