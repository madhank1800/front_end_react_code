import React from "react";
import './Signup.css'
import { useState } from "react";
const Signup = () => {
  const [signupDetails, setSignupDetails] = useState({
    firstname: "",
    lastName: "",
    // email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [email, setemail] = useState('');
  const [error, setEmailError] = useState(false);
  let errorCheckingflag = false;
  let errorChecking = false;
  function emailchangeHandler(event) {
      setemail(event.target.value);
    setEmailError
      (false);
  }
  function validateEmail(event) {
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let reemailval = emailPattern.test(event.target.value);
    console.log(reemailval);
    if (!reemailval) {
      setEmailError(true);
    }
  }
 // let dir = document.getElementById('mypasswordInputDiv');
  // function m1(event) {
  //   if (event.target.id === 'myinput') return 0;
  //   if (event.target.id === 'myPasswordInput') return 1;
  //   console.log(event)
  // }
  //console.log("dir",dir);
  const changeHandler = (event) => {
    const regexpre = event.target.pattern;
    console.log(regexpre);
    const reg = new RegExp(regexpre, "g");
    console.log(reg);
    const BOO = reg.test(event.target.value);
    console.log(BOO);
    // let tag = event.target;
    // console.log("tag",tag);
    let name = event.target.name;
    let value = event.target.value;
    console.log("name:", name);
    console.log("value:", value);
    
    if (event.target.name === 'firstname') {
      let di = document.getElementsByClassName('divtag')[0];
      console.log(di);
  
      if (di.hasChildNodes()) {
        if (errorCheckingflag) {
          console.log("erroe checking flag", errorCheckingflag);
          di.removeChild(di.children[1]);
        }
      }
    }
 if (event.target.name === "lastName") {
   let di = document.getElementsByClassName("divtag")[1];
   console.log(di);

   if (di.hasChildNodes()) {
     if (errorCheckingflag) {
       console.log("erroe checking flag", errorCheckingflag);
       di.removeChild(di.children[1]);
     }
   }
 }

      if (event.target.name === 'password') {
       let di = document.getElementsByClassName("divtag")[2];
         console.log("dir",di);

         if (di.hasChildNodes()) {
           if (errorChecking) {
             console.log("error checking flag", errorChecking);
             di.removeChild(di.children[1]);
           }
         }
    }
      // if (event.target.name === "email") {
      //   let di = document.getElementsByClassName("divtag")[2];
      //   console.log("dir", di);

      //   if (di.hasChildNodes()) {
      //     if (errorChecking) {
      //       console.log("error checking flag", errorChecking);
      //       di.removeChild(di.children[1]);
      //     }
      //   }
      // }
    
    if (BOO) {
     
    
      setSignupDetails((previous) => {
        console.log("signupDetails", signupDetails);
        return { ...previous, [name]: value };
      });
    } else {
      console.log("enter valid");
      console.log(event.target);
      // let node = document.getElementById("myinput");
      // let errorBody = document.createElement("span");
      if (event.target.name === "firstname") {
        let node = document.getElementById("myinput");
        let errorBody = document.createElement("span");
        errorBody.textContent = `!invalid ${name}`;
        console.log(errorBody);
        node.insertAdjacentElement("afterend", errorBody);
        errorCheckingflag = true;
      } else if (event.target.name === "password") {
        let node = document.getElementById("myPasswordInput");
        let errorBody = document.createElement("span");
        errorBody.textContent = `!invalid ${name}`;
        console.log(errorBody);
        node.insertAdjacentElement("afterend", errorBody);
        errorChecking = true;
      } else if (event.target.name === "lastName") {
        let node = document.getElementById("mylastNameInput");
        let errorBody = document.createElement("span");
        errorBody.textContent = `!invalid ${name}`;
        console.log(errorBody);
        node.insertAdjacentElement("afterend", errorBody);
        errorCheckingflag = true;
      }
      // else if (event.target.name === "email") {
      //   let node = document.getElementById("myEmailInput");
      //   let errorBody = document.createElement("span");
      //   errorBody.textContent = `!invalid ${name}`;
      //   console.log(errorBody);
      //   node.insertAdjacentElement("afterend", errorBody);
      //   errorCheckingflag = true;
      // }
  // errorCheckingflag = true;
    }
  };

  const submitHandler = () => {
    const submitDetails = signupDetails;
    console.log(submitDetails);
    console.log(submitDetails);
  };
  return (
    <>
      <div className="m-4 d-flex  flex-column align-items-center justify-content-center mt-5">
        <h3>signup from</h3>
        <form
          className="card w-50"
          onSubmit={submitHandler}
          action=""
          method="post"
        >
          <div className="row mt-4 card-body">
            <div className="mb-4 divtag">
              <input
                type="text"
                className="form-control"
                placeholder="Enter first name"
                name="firstname"
                id="myinput"
                value={signupDetails.firstname}
                onChange={changeHandler}
                // pattern="^([a-zA-Z])*$"
                pattern="^[A-Za-z][A-Za-z0-9\s]*$"
              />
            </div>
            <div className="mb-4 divtag">
              <input
                type="text"
                className="form-control"
                placeholder="Enter last Name"
                name="lastName"
                value={signupDetails.lastName}
                onChange={changeHandler}
                id="mylastNameInput"
                pattern="^[A-Za-z][A-Za-z0-9\s]*$"
              />
            </div>

            <div className="mb-4 divtag">
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                name="email"
                // value={signupDetails.email}
                // onChange={changeHandler}
                value={email}
                onChange={emailchangeHandler}
                id="myEmailInput"
                // pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
                onBlur={validateEmail}
              />
              {error && <p>enter correct email id</p>}
            </div>
            <div className="mb-4">
              <input
                type="tel"
                className="form-control"
                placeholder="Enter phone Number"
                name="phone"
                value={signupDetails.phone}
                onChange={changeHandler}
              />
            </div>

            <div className="mb-4 divtag ">
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                name="password"
                value={signupDetails.password}
                onChange={changeHandler}
                id="myPasswordInput"
                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="form-control"
                placeholder="confirm password"
                name="confirmPassword"
                value={signupDetails.confirmPassword}
                onChange={changeHandler}
              />
            </div>

            <div className="mt-4">
              <button type="submit" className="btn btn-primary ml-4">
                Signup
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Signup;
