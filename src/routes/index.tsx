import { Routes, Route, Navigate } from "react-router-dom";
import Survey from "../containers/Survey";
import Result from "../containers/Result";
import Consent from "../containers/Consent";
import Demography from "../containers/Demography";

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
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
