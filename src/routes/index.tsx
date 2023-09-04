import { Routes, Route } from "react-router-dom";
import Survey from "../containers/Survey";
import Result from "../containers/Result";

export default function RouterProvider() {
  return (
    <Routes>
      <Route path="/survey">
        <Route path="" element={<Survey />} />
        <Route path="result" element={<Result />} />
      </Route>
    </Routes>
  );
}
