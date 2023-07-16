import React from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./LoginPage/Login";
import Signup from "./SignupPage/Signup";
import Signin from "./SigninPage/SigninPage";
import Home from "./HOME/HomePage";
 import Protected from './Protected/Protected';
//import Protected from "./Protected/Protected";
//import useCustoHook from "./useCustoHook";
function App() {
  //const [isauth] = useState(false);
  //const []=useCustoHook();

  //localStorage.setItem("authenticated", false);
  //const isauth = '';
  //console.log("local data", localStorage.getItem("authenticated"));
  //console.log("tutuut");
  //isauth={localStorage.getItem("authenticated")}
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route
            path="/home"
            element={
              <Protected >
                <Home />
              </Protected>
            }
          />
          {/* <Protected path="/home" element={<Home />} auth={false} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
