import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useEmail } from "../../ContextApi";

function Navbar() {
  const navigate = useNavigate();
  const { userEmail } = useEmail();
  // ------States--------
  const [leadDropdownOpen, setLeadDropdownOpen] = useState(false);
  const [quotationsDropdownOpen, setQuotationsDropdownOpen] = useState(false);
  const [isActive, setIsActive] = useState("");
  const [logout, setLogout] = useState(false);

  // ----handleToggles--------
  const leadtoggleDropdown = () => {
    setLeadDropdownOpen((prev) => !prev);
    setQuotationsDropdownOpen(false);
    setIsActive("leads");
  };
  const quotationstoggleDropdown = () => {
    setQuotationsDropdownOpen((prev) => !prev);
    setLeadDropdownOpen(false);
    setIsActive("quotations");
  };

  const toggleLogoutDropdown = () => {
    setLogout((prev) => !prev);
  };
  const handleLogout = () => {
    navigate('/sign-in')
  };

  const firstLetter = userEmail ? userEmail.charAt(0).toUpperCase() : "";

  return (
    <>
      <div className="w-full flex md:h-14 bg-[#1B1C3F] ">
        <div className="w-1/2 h-14 flex  justify-start md:justify-around items-center font-poppins ">
          {/* --------Leads Tab---------- */}

          <div
            className="flex items-center mr-16 ml-8"
            onClick={leadtoggleDropdown}
          >
            <img
              style={{ height: "32px" }}
              src="./images/icon/lead-icon.png"
              alt="lead-icon"
            />
            <div
              className={`${
                isActive === "leads" ? "text-[#A8A1E3]" : "text-white"
              }  text-xl ml-5 mr-1 font-semibold cursor-pointer`}
              onClick={() => setIsActive(true)}
            >
              Leads
            </div>

            {/* -------Leads Drop Down Tab------- */}

            {leadDropdownOpen && (
              <div className="absolute z-10 w-32 mt-2 top-11 bg-[#1B1C3F]  text-white rounded-br-2xl rounded-bl-2xl shadow-lg">
                <ul className="flex flex-col">
                  <li
                    className="py-2 px-4 cursor-pointer text-sm border-b w-32 border-[#636363] "
                    onClick={() => {
                      setLeadDropdownOpen(false);
                      navigate("/all-leads");
                    }}
                  >
                    All Leads
                  </li>
                  <li
                    className="py-2 px-4 cursor-pointer text-sm"
                    onClick={() => {
                      setLeadDropdownOpen(false);
                      navigate("/leadform");
                    }}
                  >
                    Create New
                  </li>
                </ul>
              </div>
            )}
            <img src="./images/icon/arrow-icon.png" alt="lead-icon" />
          </div>

          {/* -------Quotations Tab------- */}

          <div className="flex items-center" onClick={quotationstoggleDropdown}>
            <img
              style={{ height: "32px" }}
              src="./images/icon/quotation-icon.png"
              alt="quotation-icon"
            />
            <div
              className={`${
                isActive === "quotations" ? "text-[#A8A1E3]" : "text-white"
              }  text-xl ml-5 mr-1 font-semibold cursor-pointer`}
              onClick={() => setIsActive(true)}
            >
              Quotations
            </div>

            {/* -------Quotations Drop Down Tab------- */}

            {quotationsDropdownOpen && (
              <div className="absolute w-44 z-10 mt-2 top-11 bg-[#1B1C3F]  text-white rounded-br-2xl rounded-bl-2xl shadow-lg">
                <ul className="flex flex-col">
                  <li
                    className="py-2 px-4 cursor-pointer text-sm border-b w-42 border-[#636363]"
                    onClick={() => {
                      setQuotationsDropdownOpen(false);
                      navigate("/all-quotes");
                    }}
                  >
                    All Quotes
                  </li>
                  <li
                    className="py-2 px-4 cursor-pointer text-sm"
                    onClick={() => {
                      setQuotationsDropdownOpen(false);
                      navigate("/quotations");
                    }}
                  >
                    Create New
                  </li>
                </ul>
              </div>
            )}
            <img src="./images/icon/arrow-icon.png" alt="lead-icon" />
          </div>
          <div></div>
        </div>
        <div className="w-1/2 h-14 mr-4 flex text-white justify-end items-center font-poppins ">
          {userEmail && (
            <div className="flex items-center mr-2">
              <div
                className="flex items-center justify-center bg-[#A8A1E3] rounded-full text-white font-bold"
                style={{ width: "36px", height: "36px" }}
              >
                {firstLetter}
              </div>
              <div className="ml-2 mr-2 hidden md:block">{userEmail}</div>
              <img
                className="cursor-pointer"
                src="./images/icon/arrow-icon.png"
                alt="arrow-icon"
                onClick={toggleLogoutDropdown}
              />
              {logout && (
                <div className="absolute z-10 w-30 mt-2 right-0 top-12 bg-[#1B1C3F] text-white rounded-br-2xl rounded-bl-2xl shadow-lg">
                  <ul className="flex flex-col">
                    <li
                      className="py-2 px-4 cursor-pointer text-center text-sm  w-22"
                      onClick={handleLogout}
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
