import React from "react";
import { useState } from "react";
import "./Login.css";
import axios from "../../utils/axios";
import { loginPost } from "../../utils/Constants";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { change } from "../../Redux/usernameReducer";
import Swal from "sweetalert2";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const body = JSON.stringify({
      email,
      password,
    });
    axios
      .post(loginPost, body, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(change(res.data.user));
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          position: "center",
          icon: "warning",
          title: err.response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div>
      {/* Section: Design Block */}
      <section className="text-center ">
        {/* Background image */}
        <div
          className="p-5 bg-image "
          style={{
            backgroundImage:
              // 'url("https://apkdone.com/wp-content/uploads/2020/12/OLX-poster.jpg")',
              'url("https://d2liqplnt17rh6.cloudfront.net/coverImages/olxcover_7eb25863-0853-4db0-a735-130377b58e56-111.jpeg")',
            height: 400, 
            width:'100%',
            backgroundColor: 'red',
            backgroundSize: '1400px',
            backgroundRepeat: "no-repeat",
            backgroundPosition :  '50% , 50%'
          }}
        />
        {/* Background image */}
        <div className="outer my-5 ">
          <div
            className="card shadow-lg mx-5 mx-md-5 shadow-5-strong w-50 outer bg-dardk"
            style={{
              marginTop: "-200px",
              background: "hsla(0, 0%, 100%, 0.8)",
              backdropFilter: "blur(10px)",
              // backgroundColor: 'red',
              borderRadius : '5%'
            }}
          >
            <div className="card-body py-3 px-md-5d ">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-9">
                  <h2 className="fw-bold mb-5">Sign In</h2>
                  <form onSubmit={handleLogin}>
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
                    {/* Submit button */}
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                    >
                      Login
                    </button>
                    <br />
                    <span>
                      Don't have an account? <Link to="/signup">Register</Link>{" "}
                    </span>
                    {/* Register buttons */}
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

export default Login;
