import React from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./LoginPage/Login";
import Signup from "./SignupPage/Signup";
import Signin from "./SigninPage/SigninPage";
import Home from "./HOME/homePage";
import Protected from "./Protected/Protected";
import ForgetPassword from "./ForgetPasswordPage/ForgetPassword";
import Admin from './ADIMIN/admin';
import AdminMobile from './ADIMIN/mobilesAdmin';
import MobilePage from "./MobilesPage/MobilePage";
import GroceryPage from "./Grocery/groceryPage";
import BestGoodsPage from "./BestOfGoods/BestGoodsPage";
import CompanyDetails from './TOP_STORIES/TopStories'



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
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
          <Route path="/groceryadmin" element={<Admin />} />
          <Route path="/mobilesadmin" element={<AdminMobile />} />
          <Route path="/mobilesDetails" element={<MobilePage />} />
          <Route path="/groceryDetails" element={<GroceryPage />} />
          <Route path="/bestMobilesDetails" element={<BestGoodsPage />} />
          <Route path="/companyDetails" element={<CompanyDetails />} />
          <Route
            path="/home"
            element={
              <Protected>
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
