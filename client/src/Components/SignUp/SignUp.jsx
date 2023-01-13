import React from "react";
import { useState } from "react";
import axios from "../../utils/axios";
import { signUpPost } from "../../utils/Constants";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const body = JSON.stringify({
      username,
      email,
      password,
    });

    e.preventDefault();
    axios
      .post(signUpPost, body, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        if (response.data.status === "ok") {
          navigate("/login");
        } else {
          // Swal.fire({
          //   position: "center",
          //   icon: "warning",
          //   title: response.data.error+'sss',
          // });
          
          Swal.fire({
            position: 'bottom-end',
            // icon: 'error',
            // title: 'Oops...',
            title: '❌   '+response.data.error,
            timer: 1500,
              showConfirmButton: false,
            
          })
        }
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: err.data.error+'eee',
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div>
      {/* Section: Design Block */}
      <section className="background-radial-gradient overflow-hidden" style={{
        // backgroundImage :'url(https://static.vecteezy.com/system/resources/previews/007/343/586/non_2x/blue-gradient-background-with-curved-elements-used-for-banner-poster-and-website-design-free-vector.jpg)'
        backgroundImage :'url(https://uploads-ssl.webflow.com/5a9ee6416e90d20001b20038/5afec1d5269cda26f59b1f2d_planet-1_1x.jpg)'
      }}>
        <style 
        
          // dangerouslySetInnerHTML={{
          //   __html:
          //     // "\n    .background-radial-gradient {\n      background-color: hsl(218, 41%, 15%);\n      background-image: radial-gradient(650px circle at 0% 0%,\n          hsl(218, 41%, 35%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%),\n        radial-gradient(1250px circle at 100% 100%,\n          hsl(218, 41%, 45%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%);\n    }\n\n    #radius-shape-1 {\n      height: 220px;\n      width: 220px;\n      top: -60px;\n      left: -130px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    #radius-shape-2 {\n      border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;\n      bottom: -60px;\n      right: -110px;\n      width: 300px;\n      height: 300px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    .bg-glass {\n      background-color: hsla(0, 0%, 100%, 0.9) !important;\n      backdrop-filter: saturate(200%) blur(25px);\n    }\n  ",
          // }}
        />
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
              <h1
                className="my-5 display-5 fw-bold ls-tight"
                style={{ color: "hsl(218, 81%, 95%)" }}
              >
                The best offer <br />
                <span style={{ color: "hsl(218, 81%, 75%)" }}>
                  for your business
                </span>
              </h1>
              <p
                className="mb-4 opacity-70"
                style={{ color: "hsl(218, 81%, 85%)" }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                ab ipsum nisi dolorem modi. Quos?
              </p>
            </div>
            <div className=" col-lg-6 mb-5 mb-lg-0 position-relative">
              <div
                id="radius-shape-1"
                className="shadow-lg position-absolute rounded-circle shadow-5-strong"
              />
              <div
                id="radius-shape-2"
                className="position-absolute shadow-5-strong"
              />

              <div className="card bg-glass">
                <div className="card-body px-4 py-5 px-md-5">
                  <h2>Sign Up</h2>
                  <form onSubmit={handleSubmit}>
                    {/* 2 column grid layout with text inputs for the first and last names */}
                    <div className="row">
                      <div className=" mb-4">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="form3Example1">
                            User name
                          </label>
                          <input
                            type="text"
                            id="form3Example1"
                            className="form-control"
                            value={username}
                            onChange={(e) => {
                              setUsername(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    {/* Email input */}
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example3">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="form3Example3"
                        className="form-control"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                    {/* Password input */}
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example4">
                        Password
                      </label>
                      <input
                        type="password"
                        id="form3Example4"
                        className="form-control"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>
                    {/* Checkbox */}
                    {/* <div className="form-check d-flex justify-content-center mb-4">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        defaultValue=""
                        id="form2Example33"
                        defaultChecked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form2Example33"
                      >
                        Subscribe to our newsletter
                      </label>
                    </div> */}
                    {/* Submit button */}
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                    >
                      Sign up
                    </button>
                    {/* Register buttons */}
                    <div className="text-center">
                      <p>
                        Already have an account?{" "}
                        <h6 className="d-inline"
                          style={{ cursor: "pointer" }}
                          onClick={() => navigate("/login")}
                        >
                          Login
                        </h6>{" "}
                      </p>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-facebook-f" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-google" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-twitter" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-github" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section: Design Block */}
    </div>
  );
}

export default SignUp;
