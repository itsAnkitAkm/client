import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Signup, Login, authRoute, Home } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <authRoute>
              <Home />
            </authRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
