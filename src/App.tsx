import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Loading from "./components/Loading";

const Home = lazy(() => import("./pages/Home"));
const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));
const ResumePage = lazy(() => import("./pages/ResumePage"));

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
