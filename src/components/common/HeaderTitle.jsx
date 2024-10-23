import React from 'react'

const HeaderTitle = ({title}) => {
  return (
    <>

    <div className="flex items-center justify-around mt-8 font-poppins ml-6 md:ml-0">
        <div className="">
          <img src="./images/form-logo.png" alt="logo" />
        </div>
        <div className="text-[29px] md:text-4xl  text-[#3B3F8B] font-semibold font-poppins ml-8 md:ml-0 mx-0 md:mx-24">
          {title}
        </div>
        <div></div>
      </div>
      
    </>
  )
}

export default HeaderTitle
