import React from "react";
import "./SigninPage.css";
import { useState } from "react";
import axios from "axios";
// import { Await } from "react-router-dom";

const Signin = () => {
  const [signupDetails, setSignupDetails] = useState({
    firstname: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  //   const [email, setemail] = useState("");
  const [signinerror, setSignInError] = useState({
    firstnameError: false,
    lastNameError: false,
    emailError: false,
    phoneError: false,
    passwordError: false,
    confirmPasswordError: false,
    confirmPasswordSuccess: false,
  });

  const [showPass, setShowPass] = useState("show");
  // const [showPassError, setShowPassError] = useState('');

  const [isDisabledSignUpTag, SetDisabledSignUpTag] = useState(true);

  const [isSignedUpSuccess, setSignUpSuccess] = useState(false);


  const [isSignUpMsg, setSignedUpMsg] = useState('');

  const [isUserExisted, setUserExisted] = useState(false);
  const [isUserExistedMsg, setUserExistedMsg] = useState('');



  const userExistedMethod = (data) => {
    setUserExistedMsg(data);
    setUserExisted(true);
       setSignUpSuccess(false);
}


  const SignUpSuccess = (data) => {
    setSignedUpMsg(data);
    setSignUpSuccess(true);
     setUserExisted(false);
  }
  
  function showPassword() {
    //let divtagPassword = document.getElementsByClassName('divtagPassword')[0];
    let divtagPassword = document.querySelector(".divtagPassword");
    // console.log(divtagPassword.getElementsByTagName('input'));
    let divtagChild = divtagPassword.querySelector(".divtagChild");
    console.log(divtagPassword);
    console.log("divtagChild", divtagChild);
    let inputPasswordValue = divtagChild.value;
    console.log(inputPasswordValue);
    let inputValuePasswordLength = divtagChild.length;
    console.log("inputValuePasswordLength ", inputValuePasswordLength);
    // if (inputValuePasswordLength >= 1) {
       if (divtagChild.type === "password") {
      divtagChild.type = "text";
      setShowPass("Hide");
    } else {
      divtagChild.type = "password";
      setShowPass("show");
      // setShowPassError("please enter values");
    }
  }
  function changeHandler(event) {
    let name = event.target.name;
    let value = event.target.value;
    // let fnameErrorName = event.target.firstnameerror;
    let fnameErrorName = event.target.dataset.firstnameerror;
    console.log(name);
    console.log(value);
    console.log("fnameErrorName tutu", fnameErrorName);
    setSignupDetails((previous) => {
      return { ...previous, [name]: value };
    });
    // setemail(event.target.value);
    // setEmailError(false);
    // if (!event.target.name === "confirmPassword") {
    setSignInError((previous) => {
      console.log("signinerror1", signinerror);
      // return { ...previous, firstnameError: false };
      return { ...previous, [fnameErrorName]: false };
    });
    // }
    console.log("signupdetails", signupDetails);
    console.log("signinerror2", signinerror);

    //   else if (event.target.name === "confirmPassword") {
    //        setSignInError((previous) => {
    //          console.log("signinerror9", signinerror);
    //          // return { ...previous, firstnameError: false };
    //          return { ...previous,confirmPasswordError: false ,confirmPasswordSuccess:false};
    //        });
    // }
  }
  function validateData(event) {
    // let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // let reemailval = emailPattern.test(event.target.value);
    // console.log(reemailval);
    // if (!reemailval) {
    //   setEmailError(true);
    //   }

    if (event.target.name === "firstname") {
      let firstNamePattern = /^[A-Za-z][A-Za-z0-9\s]*$/;
      let firstNameBooleanValue = firstNamePattern.test(event.target.value);
      console.log(firstNameBooleanValue);
      if (!firstNameBooleanValue) {
        setSignInError((previous) => {
          console.log("signuperror", signinerror);
          return { ...previous, firstnameError: !firstNameBooleanValue };
        });
        console.log("signinerror3", signinerror);
      }
    }

    if (event.target.name === "lastName") {
      let lastNamePattern = /^[A-Za-z][A-Za-z0-9\s]*$/;
      let lastNameBooleanValue = lastNamePattern.test(event.target.value);
      console.log(lastNameBooleanValue);
      if (!lastNameBooleanValue) {
        setSignInError((previous) => {
          // console.log("signuperror", signinerror);
          return { ...previous, lastNameError: !lastNameBooleanValue };
        });
        console.log("signuperror4", signinerror);
      }
    }

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
    }

    if (event.target.name === "phone") {
      let phonePattern = /^\+91\d{10}$/;
      let phoneBooleanValue = phonePattern.test(event.target.value);
      console.log(phoneBooleanValue);
      if (!phoneBooleanValue) {
        setSignInError((previous) => {
          // console.log("signuperror", signinerror);
          return { ...previous, phoneError: !phoneBooleanValue };
        });
        console.log("signuperror5", signinerror);
      }
    }
    if (event.target.name === "password") {
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
    }

    if (event.target.name === "confirmPassword") {
      if (event.target.value === signupDetails.password) {
        setSignInError((previous) => {
          return { ...previous, confirmPasswordSuccess: true };
        });
        setSignInError((previous) => {
          return { ...previous, confirmPasswordError: false };
        });
        console.log("signuperror7", signinerror);
      } else {
        setSignInError((previous) => {
          return { ...previous, confirmPasswordError: true };
        });
        setSignInError((previous) => {
          return { ...previous, confirmPasswordSuccess: false };
        });
        console.log("signuperror8", signinerror);
      }
    }

//setting the disabled and abled sign element
    
    
    if (signupDetails.firstname !== "" && signupDetails.lastName !== "" && signupDetails.email !== "" &&
         signupDetails.phone!=="" &&signupDetails.password!==""&&signupDetails.confirmPassword!==""
    ) {
      SetDisabledSignUpTag(false);
    }
    
    
    
    
    
    
    

  }
  // let dir = document.getElementById('mypasswordInputDiv');
  // function m1(event) {
  //   if (event.target.id === 'myinput') return 0;
  //   if (event.target.id === 'myPasswordInput') return 1;
  //   console.log(event)
  // }
  //console.log("dir",dir);
  //   const changeHandler = (event) => {
  //     const regexpre = event.target.pattern;
  //     console.log(regexpre);
  //     const reg = new RegExp(regexpre, "g");
  //     console.log(reg);
  //     const BOO = reg.test(event.target.value);
  // console.log(BOO);
  // let tag = event.target;
  // console.log("tag",tag);
  //     let name = event.target.name;
  //     let value = event.target.value;
  //     console.log("name:", name);
  //     console.log("value:", value);

  //     if (event.target.name === "firstname") {
  //       let di = document.getElementsByClassName("divtag")[0];
  //       console.log(di);

  //       if (di.hasChildNodes()) {
  //         if (errorCheckingflag) {
  //           console.log("erroe checking flag", errorCheckingflag);
  //           di.removeChild(di.children[1]);
  //         }
  //       }
  //     }
  //     if (event.target.name === "lastName") {
  //       let di = document.getElementsByClassName("divtag")[1];
  //       console.log(di);

  //       if (di.hasChildNodes()) {
  //         if (errorCheckingflag) {
  //           console.log("erroe checking flag", errorCheckingflag);
  //           di.removeChild(di.children[1]);
  //         }
  //       }
  //     }

  //     if (event.target.name === "password") {
  //       let di = document.getElementsByClassName("divtag")[2];
  //       console.log("dir", di);

  //       if (di.hasChildNodes()) {
  //         if (errorChecking) {
  //           console.log("error checking flag", errorChecking);
  //           di.removeChild(di.children[1]);
  //         }
  //       }
  //     }
  //     // if (event.target.name === "email") {
  //     //   let di = document.getElementsByClassName("divtag")[2];
  //     //   console.log("dir", di);

  //     //   if (di.hasChildNodes()) {
  //     //     if (errorChecking) {
  //     //       console.log("error checking flag", errorChecking);
  //     //       di.removeChild(di.children[1]);
  //     //     }
  //     //   }
  //     // }

  //     if (BOO) {
  //       setSignupDetails((previous) => {
  //         console.log("signupDetails", signupDetails);
  //         return { ...previous, [name]: value };
  //       });
  //     } else {
  //       console.log("enter valid");
  //       console.log(event.target);
  //       // let node = document.getElementById("myinput");
  //       // let errorBody = document.createElement("span");
  //       if (event.target.name === "firstname") {
  //         let node = document.getElementById("myinput");
  //         let errorBody = document.createElement("span");
  //         errorBody.textContent = `!invalid ${name}`;
  //         console.log(errorBody);
  //         node.insertAdjacentElement("afterend", errorBody);
  //         errorCheckingflag = true;
  //       } else if (event.target.name === "password") {
  //         let node = document.getElementById("myPasswordInput");
  //         let errorBody = document.createElement("span");
  //         errorBody.textContent = `!invalid ${name}`;
  //         console.log(errorBody);
  //         node.insertAdjacentElement("afterend", errorBody);
  //         errorChecking = true;
  //       } else if (event.target.name === "lastName") {
  //         let node = document.getElementById("mylastNameInput");
  //         let errorBody = document.createElement("span");
  //         errorBody.textContent = `!invalid ${name}`;
  //         console.log(errorBody);
  //         node.insertAdjacentElement("afterend", errorBody);
  //         errorCheckingflag = true;
  //       }
  //       // else if (event.target.name === "email") {
  //       //   let node = document.getElementById("myEmailInput");
  //       //   let errorBody = document.createElement("span");
  //       //   errorBody.textContent = `!invalid ${name}`;
  //       //   console.log(errorBody);
  //       //   node.insertAdjacentElement("afterend", errorBody);
  //       //   errorCheckingflag = true;
  //       // }
  //       // errorCheckingflag = true;
  //     }
  //   };

  const submitHandler = (event) => {
    event.preventDefault();
    const submitDetails = signupDetails;
    try {
      const response = axios.post("http://localhost:3001/routes/Signin", submitDetails);
      response.then((data) => {
        console.log("data", data);
        console.log("data", data.data);
        const msg = data.data;
        if (msg === "user already existed") {
          userExistedMethod(msg);
        } else {
          SignUpSuccess(data.data);
        }
      });
  
      
    } catch (err) {
      throw new Error("server error");
    }
    console.log("submitdetails", submitDetails);
    console.log("submitdetails", submitDetails);
   
  };
  return (
    <>
      <div className="m-4 d-flex form-group flex-column align-items-center justify-content-center mt-5 ">
        <h3>signup form</h3>
        <form
          className="card w-50"
          onSubmit={submitHandler}
          // action="/routes/Signin"
          // method="post"
          autoComplete="on"
        >
          <div className="row mt-4 card-body  justify-content-center">
            <div className="mb-4 divtag form-control border border-primary col-12 col-md-6">
              <input
                type="text"
                // className="form-control"
                className="inputTagClass"
                placeholder="Enter first name"
                name="firstname"
                id="myinput"
                value={signupDetails.firstname}
                data-firstnameerror="firstnameError"
                onChange={changeHandler}
                onBlur={validateData}
                // pattern="^([a-zA-Z])*$"
                // pattern="^[A-Za-z][A-Za-z0-9\s]*$"
                autoComplete="off"
              />
              {/* {signinerror.firstnameError && <p>enter correct firstName id</p>} */}
            </div>
            <>
              {signinerror.firstnameError && <p>enter correct firstName id</p>}
            </>
            <div className="mb-4 divtag form-control border border-primary">
              <input
                type="text"
                // className="form-control"
                className="inputTagClass"
                placeholder="Enter last Name"
                name="lastName"
                value={signupDetails.lastName}
                onChange={changeHandler}
                id="mylastNameInput"
                onBlur={validateData}
                data-firstnameerror="lastNameError"
                // pattern="^[A-Za-z][A-Za-z0-9\s]*$"
                autoComplete="on"
              />
              {/* {signinerror.lastNameError && <p>enter correct lastName id</p>} */}
            </div>
            <>{signinerror.lastNameError && <p>enter correct lastName id</p>}</>

            <div className="mb-4 divtag form-control border border-primary">
              <input
                type="email"
                //className="form-control"
                className="inputTagClass"
                placeholder="Enter email"
                name="email"
                // value={signupDetails.email}
                // onChange={changeHandler}
                value={signupDetails.email}
                onChange={changeHandler}
                data-firstnameerror="emailError"
                id="myEmailInput"
                // pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
                onBlur={validateData}
                required
                autoComplete="off"
              />
              {/* {signinerror.emailError && <p>enter correct email id</p>} */}
            </div>
            <>{signinerror.emailError && <p>enter correct email id</p>}</>
            <div className="mb-4 form-control border border-primary">
              <input
                type="tel"
                // className="form-control"
                className="inputTagClass"
                placeholder="Enter phone Number"
                name="phone"
                data-firstnameerror="phoneError"
                value={signupDetails.phone}
                onChange={changeHandler}
                onBlur={validateData}
                autoComplete="on"
              />
              {/* {signinerror.phoneError && <p>enter correct phone id</p>} */}
            </div>
            <> {signinerror.phoneError && <p>enter correct phone id</p>}</>

            <div className="mb-4 divtagPassword d-flex flex-row justify-content-between form-control border border-primary">
              <input
                type="password"
                // className="form-control divtagChild border-0"
                className="divtagChild  inputTagClass"
                placeholder="Enter password"
                name="password"
                data-firstnameerror="passwordError"
                value={signupDetails.password}
                onChange={changeHandler}
                id="myPasswordInput"
                onBlur={validateData}
                // pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                autoComplete="off"
                required
              />
              <button
                className="showPasswordClass border-0"
                onClick={showPassword}
              >
                {showPass}
              </button>
              {/* {signinerror.passwordError && <p>enter correct password</p>}
               */}
            </div>
            <>{signinerror.passwordError && <p>enter correct password</p>}</>

            <div className="mb-4 form-control border border-primary">
              <input
                type="password"
                // className="form-control"
                className="inputTagClass justify-content-end"
                placeholder="confirm password"
                name="confirmPassword"
                value={signupDetails.confirmPassword}
                onChange={changeHandler}
                onBlur={validateData}
                autoComplete="off"
                required
              />
              {/* {signinerror.confirmPasswordSuccess && (
                <p id="passid">password mathced</p>
              )}
              {signinerror.confirmPasswordError && <p>password not mathced</p>} */}
            </div>
            <>
              {signinerror.confirmPasswordSuccess && (
                <p id="passid">password mathced</p>
              )}
              {signinerror.confirmPasswordError && <p>password not mathced</p>}
            </>

            {/* <div className="mt-4">
              <button type="submit" className="btn btn-primary ml-4">
                Signup
              </button>
            </div> */}

            <>
              {isDisabledSignUpTag ? (
                <div className="mb-4 d-flex  border border-primary signbtnclass  ">
                  {/* <span onClick={submitHandler} className=" btnclass ml-5">
                Signup
              </span> */}
                  signup
                </div>
              ) : (
                <div
                  onClick={submitHandler}
                  className="mb-4 d-flex  border border-primary signbtnclass signbtnclass1 "
                >
                  {/* <span onClick={submitHandler} className=" btnclass ml-5">
                Signup
              </span> */}
                  signup
                </div>
              )}
            </>
            <>
              {isSignedUpSuccess && (
                <p id="success">
                  <i className="bi bi-check-circle-fill signupSuccessClass"></i>
                  {isSignUpMsg}
                </p>
              )}
            </>
            <>
              {isUserExisted && (
                <p id="userExisted">
                  <i className="bi bi-exclamation-circle-fill userExistClass"></i>
                  {isUserExistedMsg}
                </p>
              )}
            </>
          </div>
        </form>
      </div>
    </>
  );
};
export default Signin;
