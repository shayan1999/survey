import "./App.css";
import { BrowserRouter } from "react-router-dom";
import APIProvider from "./apis/APIProvider";
import RouterProvider from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import { RtlHandler } from "./components/RtlHandler";

function App() {
  return (
    <APIProvider>
      <RtlHandler>
        <BrowserRouter>
          <RouterProvider />
        </BrowserRouter>
      </RtlHandler>
    </APIProvider>
  );
}

export default App;
