import { Routes, Route } from "react-router-dom";

export default function RouterProvider() {
  return (
    <Routes>
      <Route path="/survey">
        <Route path="" element={<div className="d-flex">hello</div>} />
      </Route>
    </Routes>
  );
}
