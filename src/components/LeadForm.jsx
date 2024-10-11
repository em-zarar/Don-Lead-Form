import React, { useState } from "react";
import { useForm } from "react-hook-form";
//-------import PopUp--------
import Swal from "sweetalert2";

// ------Import Icons--------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStickyNote } from "@fortawesome/free-regular-svg-icons";

// -----import Components------
import HeaderTitle from '../components/common/HeaderTitle'
import Navbar from "./common/Navbar";
import DynamicDropdown from "./common/DynamicDropdown";


function LeadForm() {
  // ------Drop Down Data-----
  const businessTypeOptions = ["Freelancer", "Physical Busniess"];
  const stateTypeOptions = ["Punjab", "Islamabad"];
  const citiesTypeOptions = ["Lahore", "Multan"];

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    Swal.fire({
      title:"Success",
      text: "Form Submitted Successfully",
      icon: "success",
    });
    console.log(data);
    reset();
  };

  return (
    <div className="bg-img">
      <Navbar />
      <HeaderTitle title={"Lead Form"}/>

      {/* ---------Form--------------- */}

      <form
        className="mt-4 md:mt-14 p-4 md:ml-[7.8rem] ml-8 mr-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Personal Info field */}

        <label className="heading-style icon">
          <img
            src="./asset/images/icon/per-icon.png"
            style={{ width: "22px" }}
            alt=""
          />
          Personal Information
        </label>

        <div className="top-input-style">
          <div className="flex flex-col mr-0 md:mr-7">
            <input
              className="input-style"
              {...register("agentName", { required: "Agent Name is Required" })}
              placeholder="Agent Name"
            />
            <p className="error">{errors.agentName?.message}</p>
          </div>

          <div className="flex flex-col mr-0 md:mr-7">
            <input
              className="input-style "
              {...register("agentEmployer", {
                required: "Agent Employer is Required",
              })}
              placeholder="Agent Employer"
            />
            <p className="error">{errors.agentEmployer?.message}</p>
          </div>

          <div className="flex flex-col mr-0 md:mr-7">
            <input
              className="input-style "
              {...register("referredBy", {
                required: "Referred is Required",
              })}
              placeholder="Referred By"
            />
            <p className="error">{errors.referredBy?.message}</p>
          </div>
        </div>

        {/* Business Inquiries */}

        <label className="heading-style icon">
          <img
            src="./asset/images/icon/bus-icon.png"
            style={{ width: "22px" }}
            alt=""
          />
          Business Inquiries
        </label>

        <div className="top-input-style">
          <div className="flex flex-col mr-0 md:mr-7">
            <DynamicDropdown
              name="businessType"
              options={businessTypeOptions}
              control={control}
              placeholder="Type of business"
              required
            />
            <p className="error">
              {errors.businessType && <span>Business type is required</span>}
            </p>
          </div>
          <div className="flex flex-col mr-0 md:mr-7">
            <input
              className="input-style"
              {...register("company", {
                required: "Company Name is Required",
              })}
              placeholder="Company"
            />
            <p className="error">{errors.company?.message}</p>
          </div>
        </div>

        {/* Address */}

        <label className="heading-style icon">
          <img
            src="./asset/images/icon/loc-icon.png"
            style={{ width: "22px" }}
            alt=""
          />
          Address
        </label>

        <div className="top-input-style">
          <div className="flex flex-col mr-0 md:mr-7">
            <DynamicDropdown
              name="state"
              options={stateTypeOptions}
              control={control}
              placeholder="State"
              required
            />
            <p className="">{errors.state && <span>State is required</span>}</p>
          </div>

          <div className="flex flex-col mr-0 md:mr-7">
            <DynamicDropdown
              name="city"
              options={citiesTypeOptions}
              control={control}
              placeholder="City"
              required
            />
            <p className="error">{errors.city && <span>City is required</span>}</p>
          </div>

          <div className="flex flex-col mr-0 md:mr-7">
            <input
              className="input-style"
              {...register("street", {
                required: "Street is Required",
              })}
              placeholder="Street"
            />
            <p className="error">{errors.street?.message}</p>
          </div>

          <div className="flex flex-col mr-0 md:mr-7">
            <input
              className="input-style"
              type="number"
              {...register("zipCode", {
                required: "Zip Code is Required",
                minLength: { value: 4, message: "Min Value is 4" },
              })}
              placeholder="Zip Code"
            />
            <p className="error">{errors.zipCode?.message}</p>
          </div>
        </div>

        {/* Contact Info */}

        <label className="heading-style icon">
          <img
            src="./asset/images/icon/con-icon.png"
            style={{ width: "22px" }}
            alt=""
          />
          Contact Information
        </label>

        <div className="top-input-style">
          <div className="flex flex-col mr-0 md:mr-7">
            <input
              className="input-style"
              type="email"
              {...register("email", {
                required: "Email is Required",
              })}
              placeholder="Email"
            />
            <p className="error">{errors.email?.message}</p>
          </div>

          <div className="flex flex-col mr-0 md:mr-7">
            <input
              className="input-style"
              type="number"
              {...register("mobile", {
                required: "Mobile Number is Required",
                minLength: { value: 10, message: "Min length is 10" },
              })}
              placeholder="Mobile"
            />
            <p className="error">{errors.mobile?.message}</p>
          </div>

          <div className="flex flex-col mr-0 md:mr-7">
            <input
              className="input-style"
              type="number"
              {...register("phone", {
                required: "Phone Number is Required",
                minLength: { value: 10, message: "Min length is 10" },
              })}
              placeholder="Phone"
            />
            <p className="error">{errors.phone?.message}</p>
          </div>

          <div className="flex flex-col mr-0 md:mr-7">
            <input
              className="input-style"
              {...register("firstName", {
                required: "First Name is Required",
              })}
              placeholder="First Name"
            />
            <p className="error">{errors.firstName?.message}</p>
          </div>

          <div className="flex flex-col mr-0 md:mr-7">
            <input
              className="input-style"
              {...register("lastName", {
                required: "Last Name is Required",
              })}
              placeholder="Last Name"
            />
            <p className="error">{errors.lastName?.message}</p>
          </div>
        </div>

        {/* ------Note------ */}

        <label className="heading-style icon">
          <div className="note">
            <FontAwesomeIcon icon={faStickyNote} style={{ height: "18px" }} />
          </div>
          Note
        </label>
        <div className="flex flex-col mr-0 md:mr-7">
          <textarea
            className="input-style w-full md:w-4/5 h-[205px]"
            {...register("note")}
            placeholder="Type here..."
          />
          <p className="error">{errors.note?.message}</p>
        </div>
        <button type="submit" className="button-style">
          Proceed
        </button>
      </form>
    </div>
  );
}

export default LeadForm;
