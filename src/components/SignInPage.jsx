import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

function SignInPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    setUsername("");
    setPassword("");
  };

  return (
    <div
      style={{}}
      className="h-screen flex flex-col sm:flex-row justify-center items-center w-full"
    >
      <div className="h-full flex  justify-center items-center w-full  sm:w-2/4  ">
        <div className="signup-page-image">
          <div style={{ width:'100%', height:'100vh', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }} className="">  
            <h1
              style={{ fontSize: "4.1rem", lineHeight:'78px' }}
              className="w-full md:w-3/4 text-white font-poppins font-bold  text-left xl:text-center"
            >
              CLEAR SOLUTIONS
            </h1>

            <p className="w-full md:w-3/4  text-xl text-white mt-3 font-poppins text-left xl:text-center">
              Your Partner in Busniess Technonlgy
            </p>
          </div>
        </div>
      </div>
      <div className=" w-full  sm:w-2/4 flex flex-col  h-screen flex justify-evenly items-center mt-6">
        <div className="w-3/5 flex flex-col justify-center items-center">
          <div>
            <img src="./asset/images/form-logo.jfif" alt="form-logo" />
          </div>
          <h2 style={{ color: "#3B3F8B" }} className="text-2xl font-bold">
            Sign in
          </h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-col items-center w-full"
          >
            <input
              className="bg-[#F5F5F5] rounded-2xl mt-5 px-4 focus:outline-none focus:border-red-700 focus:ring-1"
              style={{ width: "100%", height: "50px" }}
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username/Email"
              required
            />
            <span className="password-span">
              <input
                className="bg-[#F5F5F5] rounded-2xl mt-5 px-4 focus:outline-none focus:border-red-700 focus:ring-1"
                style={{ width: "100%", height: "50px" }}
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <span className="show-password text-slate-500" onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
              </span>
            </span>

            <Link to='/leadform'><button className="button-style font-poppins">Proceed</button></Link>
          </form>
        </div>
        <p className="mt-20 px-8 text-center text-gray-400 font-poppins">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
}

export default SignInPage;
