import "./App.css";
import { BrowserRouter } from "react-router-dom";
import APIProvider from "./apis/APIProvider";
import RouterProvider from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <APIProvider>
      <BrowserRouter>
        <RouterProvider />
      </BrowserRouter>
    </APIProvider>
  );
}

export default App;
