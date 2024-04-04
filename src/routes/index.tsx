import { Routes, Route } from "react-router-dom";
import Survey from "../containers/Survey";
import Result from "../containers/Result";
import Consent from "../containers/Consent";
import Demography from "../containers/Demography";

export default function RouterProvider() {
  return (
    <Routes>
      <Route path="/survey">
        <Route path="" element={<Consent />} />
        <Route path="questions" element={<Survey />} />
        <Route path="result" element={<Result />} />
        <Route path="demography" element={<Demography />} />
      </Route>
    </Routes>
  );
}
