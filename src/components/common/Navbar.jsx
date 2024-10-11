import React ,  {useState} from 'react'
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    // ------States--------
  const [leadDropdownOpen, setLeadDropdownOpen] = useState(false);
  const [quotationsDropdownOpen, setQuotationsDropdownOpen] = useState(false);
  const [isActive, setIsActive] = useState('');

   // ----handleToggles--------
  const leadtoggleDropdown = () => {
    setLeadDropdownOpen((prev) => !prev);
    setQuotationsDropdownOpen(false);
    setIsActive('leads')
  };
  const quotationstoggleDropdown = () => {
    setQuotationsDropdownOpen((prev) => !prev);
    setLeadDropdownOpen(false);
    setIsActive('quotations')
  };
  return (
    <>
    <div className="w-full md:h-14 bg-[#1B1C3F] ">
        <div className="w-1/2 h-14 flex  justify-start md:justify-around items-center font-poppins ">

          {/* --------Leads Tab---------- */}

          <div
            className="flex items-center mr-16 ml-8"
            onClick={leadtoggleDropdown}
          >
            <img
              style={{ height: "32px" }}
              src="./asset/images/icon/lead-icon.png"
              alt="lead-icon"
            />
            <div className={`${isActive === 'leads'?'text-[#A8A1E3]':'text-white'}  text-xl ml-5 mr-1 font-semibold cursor-pointer`}
            onClick={()=>setIsActive(true)}
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
            <img src="./asset/images/icon/arrow-icon.png" alt="lead-icon" />
          </div>

          {/* -------Quotations Tab------- */}

          <div
            className="flex items-center"
            onClick={quotationstoggleDropdown}
          >
            <img
              style={{ height: "32px" }}
              src="./asset/images/icon/quotation-icon.png"
              alt="quotation-icon"
            />
            <div className={`${isActive === 'quotations'?'text-[#A8A1E3]':'text-white'}  text-xl ml-5 mr-1 font-semibold cursor-pointer`}
            onClick={()=>setIsActive(true)}
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
            <img src="./asset/images/icon/arrow-icon.png" alt="lead-icon" />
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Navbar
