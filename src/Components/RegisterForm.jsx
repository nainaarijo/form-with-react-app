import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";



function RegisterForm() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmPassword: "",
  });

  const [userErr, setUserErr] = useState({
    emailErr: false,
    passwordErr: false,
    confirmPasswordErr: false,
    firstNameErr: false,
    lastNameErr: false,
  });

  const signInHandler = (e) => {
    e.preventDefault();

    if (
      userDetails.firstName === "" ||
      userDetails.lastName === "" ||
      userDetails.email === "" ||
      userDetails.password === "" ||
      userDetails.confirmPassword === ""
    ) {
      setUserErr({
        firstNameErr: userDetails.firstName === "",
        lastNameErr: userDetails.lastName === "",
        emailErr: userDetails.email === "",
        passwordErr: userDetails.password === "",
        confirmPasswordErr: userDetails.confirmPassword === "",
      });
    }

    console.log(userDetails);
  };

  useEffect(() => {
    if (userDetails.firstName !== "") {
      setUserErr((prevErr) => ({ ...prevErr, firstNameErr: false }));
    }

    if (userDetails.lastName !== "") {
      setUserErr((prevErr) => ({ ...prevErr, lastNameErr: false }));
    }

    if (userDetails.email !== "") {
      setUserErr((prevErr) => ({ ...prevErr, emailErr: false }));
    }

    if (userDetails.password !== "") {
      setUserErr((prevErr) => ({ ...prevErr, passwordErr: false }));
    }

    if (userDetails.confirmPassword !== "") {
      setUserErr((prevErr) => ({ ...prevErr, confirmPasswordErr: false }));
    }
  }, [userDetails]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f4f4f4",
      }}
    >
      <main
        style={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "black",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <form onSubmit={signInHandler}>
          <h1 className="h3 mb-3 fw-medium text-center text-info fw-bold">Please Register here!</h1>

          <div className="form-floating text-white">
            <h6>First Name</h6>
            <input
              type="text"
              className="form-control"
              id="floatingInputFirstName"
              placeholder="Enter your first name"
              value={userDetails.firstName}
              onChange={(e) =>
                setUserDetails({ ...userDetails, firstName: e.target.value })
              }
              style={{
                border: userErr.firstNameErr ? "2px solid red" : "",
                padding: "10px",
              }}
            />
            {userErr.firstNameErr && (
              <span className="text-danger">Enter your first name.</span>
            )}
          </div>

          <div className="form-floating mt-3 text-white">
            <h6>Last Name</h6>
            <input
              type="text"
              className="form-control"
              id="floatingInputLastName"
              placeholder="Enter your last name"
              value={userDetails.lastName}
              onChange={(e) =>
                setUserDetails({ ...userDetails, lastName: e.target.value })
              }
              style={{
                border: userErr.lastNameErr ? "2px solid red" : "",
                padding: "10px",
              }}
            />
            {userErr.lastNameErr && (
              <span className="text-danger">Enter your last name.</span>
            )}
          </div>

          <div className="form-floating mt-3 text-white">
            <h6>Email Address</h6>
            <input
              type="email"
              className="form-control"
              id="floatingInputEmail"
              placeholder="name@example.com"
              value={userDetails.email}
              onChange={(e) =>
                setUserDetails({ ...userDetails, email: e.target.value })
              }
              style={{
                border: userErr.emailErr ? "2px solid red" : "",
                padding: "10px",
              }}
            />
            {userErr.emailErr && (
              <span className="text-danger">Enter your email.</span>
            )}
          </div>

          <div className="form-floating mt-3 text-white">
            <h6>Password</h6>
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={userDetails.password}
              onChange={(e) =>
                setUserDetails({ ...userDetails, password: e.target.value })
              }
              style={{
                border: userErr.passwordErr ? "3px solid red" : "",
                padding: "10px",
              }}
            />
            {userErr.passwordErr && (
              <span className="text-danger">Enter your password.</span>
            )}
          </div>

          <div className="form-floating mt-3 text-white">
            <h6>Confirm Password</h6>
            <input
              type="password"
              className="form-control"
              id="floatingConfirmPassword"
              placeholder="Confirm Password"
              value={userDetails.confirmPassword}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  confirmPassword: e.target.value,
                })
              }
              style={{
                border: userErr.confirmPasswordErr ? "2px solid red" : "",
                padding: "10px",
              }}
            />
            {userErr.confirmPasswordErr && (
              <span className="text-danger">Confirm your password.</span>
            )}
          </div>

          <div className="checkbox mb-3 mt-3 text-white">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>

          <button
            className="w-100 btn btn-lg btn-danger"
            type="submit"
            style={{
              padding: "10px",
              borderRadius: "5px",
              fontSize: "16px",
            }}
          >
            Sign in
          </button>
        
        </form>
      </main>
    </div>
  );
}

export default RegisterForm;
