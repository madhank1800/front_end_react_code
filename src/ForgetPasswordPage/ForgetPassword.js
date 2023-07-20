import React, {  useState } from "react";
import "./ForgetPassword.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const ForgetPassword = () => {
  const [newDetails, setNewDetails] = useState({
    email: "",
    newPassword: "",
    confirmNewPassword: "",
  });

const navigate = useNavigate();

  const [signinerror, setSignInError] = useState({
    emailError: false,
    passwordError: false,
    confirmPasswordError: false,
    confirmPasswordSuccess: false,
  });

  const [isDisabledSignUpTag, SetDisabledSignUpTag] = useState(true);


  const [PasswordChangeSuccess, setPasswordChangeSuccess] = useState(false);


  const newDetailsHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    let fnameErrorName = event.target.dataset.firstnameerror;
    console.log(name);
    console.log(value);
    console.log(fnameErrorName);
    setNewDetails((previous) => {
      return { ...previous, [name]: value };
    });
    console.log("new details", newDetails);

    setSignInError((previous) => {
      console.log("signinerror1", signinerror);
      // return { ...previous, firstnameError: false };
      return { ...previous, [fnameErrorName]: false };
    });
     setPasswordChangeSuccess(false);
  };

  function validateData(event) {
    if (event.target.name === "email") {
      let emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
      let emailBooleanValue = emailPattern.test(event.target.value);
      console.log(emailBooleanValue);
      if (!emailBooleanValue) {
        setSignInError((previous) => {
          // console.log("signuperror", signinerror);
          return { ...previous, emailError: !emailBooleanValue };
        });
        console.log("signuperror5", signinerror);
      }
      setPasswordChangeSuccess(false);
      SetDisabledSignUpTag(true);
    }

    if (event.target.name === "newPassword") {
      let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      let passwordBooleanValue = passwordPattern.test(event.target.value);
      console.log(passwordBooleanValue);
      if (!passwordBooleanValue) {
        setSignInError((previous) => {
          // console.log("signuperror", signinerror);
          return { ...previous, passwordError: !passwordBooleanValue };
        });
        console.log("signuperror6", signinerror);
      }
      setPasswordChangeSuccess(false);
      SetDisabledSignUpTag(true);



  setSignInError((previous) => {
    return { ...previous, confirmPasswordError: false };
  });
  setSignInError((previous) => {
    return { ...previous, confirmPasswordSuccess: false };
  });

    }

    if (event.target.name === "confirmNewPassword") {
      setPasswordChangeSuccess(false);
      if (event.target.value === newDetails.newPassword) {
        setSignInError((previous) => {
          return { ...previous, confirmPasswordSuccess: true };
        });
        setSignInError((previous) => {
          return { ...previous, confirmPasswordError: false };
        });
        console.log("signuperror7", signinerror);
      } else {
        //setPasswordChangeSuccess(false);
        SetDisabledSignUpTag(true);
        setSignInError((previous) => {
          return { ...previous, confirmPasswordError: true };
        });
        setSignInError((previous) => {
          return { ...previous, confirmPasswordSuccess: false };
        });
        console.log("signuperror8", signinerror);
      }
    }
     

    if (newDetails.newPassword === newDetails.confirmNewPassword) {
      if (
        newDetails.email !== "" &&
        newDetails.newPassword !== "" &&
        newDetails.confirmNewPassword !== ""
      ) {
        SetDisabledSignUpTag(false);
      }

    }
  }

  const submitHandler =async (event) => {
    event.preventDefault();
    const detailsForget = newDetails;
    console.log("detailsForget", detailsForget);

    try {
      const response =await axios.put(
        "http://localhost:3001/routes/ForgetApi",
        detailsForget
      );
      console.log("response", response);
      console.log("response", response.data);
      console.log("response", response.status);
      let status = response.status;
      if (status === 200) {
        setPasswordChangeSuccess(true);
      } else {
            setPasswordChangeSuccess(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className="d-flex card w-50 flex-column from-group justify-content-center align-items-center mt-5 logcss bg-light bg-opacity-90 shadow-lg  rounded ">
          <form
          // className=" card w-30"
          // onSubmit={submitHandler}
          // method=""
          // action=""
          >
            <div className="row card-body ">
              <div>
                <input
                  className="form-control mb-5 mt-4"
                  // name="username"
                  type="text"
                  // name="firstname"
                  name="email"
                  value={newDetails.email}
                  onChange={newDetailsHandler}
                  data-firstnameerror="emailError"
                  placeholder="Enter email"
                  aria-describedby="emailHelp"
                  onBlur={validateData}
                />
              </div>
              <>
                {signinerror.emailError && (
                  <p className="text-danger errorDetail justify-content-start">
                    enter correct email id
                  </p>
                )}
              </>
              <div>
                <input
                  className="form-control mb-5"
                  type="password"
                  name="newPassword"
                  value={newDetails.newPassword}
                  data-firstnameerror="passwordError"
                  onChange={newDetailsHandler}
                  placeholder="enter new  password"
                  onBlur={validateData}
                />
              </div>
              <>
                {signinerror.passwordError && (
                  <p className="text-danger errorDetail justify-content-start">
                    enter correct password
                  </p>
                )}
              </>
              <div>
                <input
                  className="form-control mb-5"
                  type="password"
                  name="confirmNewPassword"
                  value={newDetails.confirmNewPassword}
                  onChange={newDetailsHandler}
                  placeholder="confirm new  password"
                  onBlur={validateData}
                />
              </div>
              <>
                {signinerror.confirmPasswordSuccess && (
                  <p id="passid" className="errorDetail ">
                    password mathced
                  </p>
                )}
                {signinerror.confirmPasswordError && (
                  <p className="text-danger errorDetail justify-content-start">
                    password not mathced
                  </p>
                )}
              </>
              <>
                {isDisabledSignUpTag ? (
                  // <div>
                  //     <input
                  //         className="form-control mb-5 btn btn--block btn--solid btn--med loginbg"
                  //         type="submit"
                  //         // name="commit"
                  //         value="change password"

                  //     />
                  //     </div>

                  <div className="form-control mb-5 btn btn--block btn--solid btn--med loginbg">
                    {/* <span onClick={submitHandler} className=" btnclass ml-5">
                Signup
              </span> */}
                    change password
                  </div>
                ) : (
                  // <div>
                  //   <input
                  //     className="form-control mb-5 btn btn--block btn--solid btn--med loginbg"
                  //     type="submit"
                  //     // name="commit"
                  //     value="change password"
                  //     onClick={submitHandler}
                  //   />
                  //                     </div>

                  <div
                    onClick={submitHandler}
                    className="form-control mb-5 btn btn--block btn--solid btn--med loginbg"
                  >
                    {/* <span onClick={submitHandler} className=" btnclass ml-5">
                Signup
              </span> */}
                    change password
                  </div>
                )}
              </>
            </div>
            <>
              {PasswordChangeSuccess && (
                <p id="passwordChangeSuccess" className="">
                  password changed successfully.
                </p>
              )}
            </>
          </form>
          <div>
            <input
              className="form-control mb-5 btn btn--block btn--solid btn--med loginbg"
              type="submit"
              // name="commit"
              value="login"
              onClick={() => {
                navigate("/login");
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default ForgetPassword;
