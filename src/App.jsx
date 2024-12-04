import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="login"
            element={
              <GlobalStyles>
                <Login />
              </GlobalStyles>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
