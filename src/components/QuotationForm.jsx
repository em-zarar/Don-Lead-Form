import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

// -----import Components------
import Navbar from "./common/Navbar";
import DynamicDropdown from "./common/QuotationDropdown";
//-------import PopUp--------
import Swal from "sweetalert2";

import { Calendar } from "primereact/calendar";

function QuotationForm() {
  // ------Drop Down Data-----
  const productsOptions = [
    {
      PName: "LG C2 42 (106c m) 4K Smart",
      Manufacture: "Clear Solution",
      Price: 60,
    },
    {
      PName: "LG Smart TV 8K",
      Manufacture: "Clear Solution",
      Price: 23,
    },
  ];
  //-----------States----------------

  const [activeIndex, setActiveIndex] = useState();
  const [count, setCount] = useState(0);
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);

  const dropdownOptions = productsOptions.map((prod, index) => ({
    label: prod.PName,
    value: index,
  }));

  const {
    setValue,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(count);
    if (count === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Product Quantity cannot be zero!",
      });
    } else {
      const selectedProductIndex = data.selectProduct;
      const selectedProduct = productsOptions[selectedProductIndex];

      const productToAdd = {
        ...selectedProduct,
        Quantity: count,
      };

      setAllProducts((prev) => [...prev, productToAdd]);

      Swal.fire({
        title: "Success",
        text: "Form Submitted Successfully",
        icon: "success",
      });
      reset();
      setCount(0);
    }
  };

  // ----------Drop Down Data--------
  const leads = ["Assistant"];
  const template = ["Web Project template"];

  // -------handleClick--------------

  // const handleClick = (index) => {
  //   setActiveIndex(index);
  // };

  const handleAdd = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleSubtract = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 0));
  };

  const formatCount = (num) => {
    return num.toString().padStart(2, "0");
  };

  // -------handleQunatity------------

  const handleAddProduct = (e) => {
    setValue("Qty", count);
  };

  // -------handleRemove------------

  const handleDelete = (index) => {
    console.log(index);
    const deletedProduct = allProducts.filter((_, i) => i !== index);
    setAllProducts(deletedProduct);
    Swal.fire({
      title: "Success",
      text: "Delete Product Successfully",
      icon: "success",
    });
  };
  // ------------Total Price----------------

  useEffect(() => {
    const handleTotalPrice = () => {
      const totalPrice = allProducts.reduce(
        (acc, product) => acc + product.Price * product.Quantity,
        0
      );
      setTotal(totalPrice);
    };
    handleTotalPrice();
  }, [allProducts]);

  return (
    <div className="bg-img">
      <Navbar />
      <div className="flex items-center justify-around mt-8 font-poppins">
        <div className="hidden md:block">
          <img src="./asset/images/form-logo.png" alt="" />
        </div>
        <div className="text-[29px] md:text-4xl text-[#3B3F8B] font-semibold font-poppins mx-0 md:mx-24">
          Quote Form
        </div>
        <div>
          <button className="bg-[#1B1C3F] text-white rounded-[20px] py-[10px] px-8 text-[17px]">
            <span className="mr-1">+</span>
            <span>Add Quote</span>
          </button>
        </div>
      </div>

      {/* -----select lead------- */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col md:flex-row items-start md:items-end justify-start mt-16 px-6 md:px-20 font-poppins gap-5 md:gap-12">
          <div className=" w-full md:w-2/4">
            <label htmlFor="" className="heading-style icon">
              <img
                src="./asset/images/icon/pro-icon.png"
                style={{ width: "22px" }}
                alt=""
              />
              Select Lead
            </label>
            <div className="flex justify-start flex-wrap">
              <div className="flex flex-col !w-full !md:w-full mt-2 mr-0">
                <DynamicDropdown
                  className=""
                  name="selectProduct"
                  options={dropdownOptions}
                  control={control}
                  placeholder="Select..."
                  required
                />
                <div className="selectProduct">
                  <p className="error">
                    {errors.selectProduct && <span>State is required</span>}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center text-white gap-[1px] mb-2">
            <button
              className="bg-[#3B3F8B] px-5 py-1 rounded-bl-[18px] rounded-tl-[18px] text-3xl"
              type="button"
              onClick={handleSubtract}
            >
              -
            </button>
            <div className="bg-[#3B3F8B] px-5 py-1 text-[24px]">
              {formatCount(count)}
            </div>
            <button
              className="bg-[#3B3F8B] px-5 py-1 rounded-br-[18px] rounded-tr-[18px] text-3xl"
              type="button"
              onClick={handleAdd}
            >
              +
            </button>
          </div>
          <div>
            <button
              className="bg-[#E73C17] text-white rounded-[20px] py-[10px] px-8 text-[17px] mb-2"
              type="submit"
              onClick={handleAddProduct}
            >
              Add Product
            </button>
          </div>
        </div>
      </form>
      {/* -------Detail show Box----- */}

      <div className="bg-[#F5F5F5] p-6 md:p-10 m-6 md:m-16 mb-10 rounded-3xl shadow-quote-shadow font-poppins para">
        <div className="flex items-center mb-2">
          <h3 className="h3">Brand :</h3>
          <p>CS Labor - Q</p>
        </div>
        <div className="flex items-center  mb-2">
          <h3 className="h3">Manufacturer :</h3>
          <p>Clear Solutions</p>
        </div>
        <div className="flex items-center  mb-2">
          <h3 className="h3">Availability :</h3>
          <p>Only 2 in Stock</p>
        </div>
        <h2 className="text-3xl my-3 font-medium ">
          LG C2 42 (106c m) 4K Smart OLED evo TV | WebOS | Cinema HDR
        </h2>
        <hr className="border-1.9 border-slate-400 w-2/4 mb-3" />
        <ul>
          <li>
            <div className="flex  mb-2">
              <h3 className="h3">Item Group Name : </h3>
              <p>Location Setup - Labor</p>
            </div>
          </li>
          <li>
            <div className="flex  mb-2">
              <h3 className="h3">Item Type : </h3>
              <p> Sales and Purchase Items (Service)</p>
            </div>
          </li>
          <li>
            <div className="flex  mb-2">
              <h3 className="h3">Unit : </h3>
              <p> Ea.</p>
            </div>
          </li>
          <li>
            <div className="flex  mb-2">
              <h3 className="h3">Description </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod temp
              </p>
            </div>
          </li>
        </ul>
        <hr className="border-1.9 border-slate-400 w-2/4 mb-3" />
        <div className="text-sm">USD(incl. of all taxes)</div>
        <h2 className="text-3xl mt-3 font-medium ">$600.72</h2>
      </div>

      {/* ------Product Table--------- */}
    {
      allProducts.length <= 0 ? 
     <div className="heading-style text-center pb-8">Add Products</div>
      :
      <div className="bg-[#F5F5F5] px-6 md:px-10 pt-10 mx-6 md:mx-24 rounded-3xl shadow-quote-shadow font-poppins">
        <div className="w-full ">
          <label htmlFor="" className="heading-style icon">
            <img
              src="./asset/images/icon/pro-icon.png"
              style={{ width: "22px" }}
              alt=""
            />
            Products
          </label>
        </div>
        <div className="relative flex flex-col w-full h-full overflow-scroll  bg-clip-border">
          <table className="w-full text-left table-auto min-w-max text-center border-collapse font-poppins">
            <thead className="bg-[#3B3F8B] text-white ">
              <tr>
                <th className="p-4 ">
                  <p className="block text-sm font-normal leading-none">Sr</p>
                </th>
                <th className="p-4 ">
                  <p className="block text-sm font-normal leading-none">
                    Product Name
                  </p>
                </th>
                <th className="p-4 ">
                  <p className="block text-sm font-normal leading-none">
                    Manufacture
                  </p>
                </th>
                <th className="p-4 ">
                  <p className="block text-sm font-normal leading-none">
                    Price
                  </p>
                </th>
                <th className="p-4 ">
                  <p className="block text-sm font-normal leading-none">Qty</p>
                </th>
                <th className="p-4 ">
                  <p className="block text-sm font-normal leading-none">
                    Action
                  </p>
                </th>
              </tr>
            </thead>
            {allProducts?.map((prod, index) => (
              <tbody className="product-p" key={index}>
                <tr className="">
                  <td className="p-4">
                    <p className="block text-sm">{index + 1}</p>
                  </td>
                  <td className="p-4">
                    <p className="block text-sm">{prod.PName}</p>
                  </td>
                  <td className="p-4">
                    <p className="block text-sm">{prod.Manufacture}</p>
                  </td>
                  <td className="p-4">
                    <p className="block text-sm">{prod.Price}</p>
                  </td>
                  <td className="p-4">
                    <p className="block text-sm">{prod.Quantity}</p>
                  </td>
                  <td className="p-4">
                    <button
                      type="submit"
                      className="block text-sm"
                      onClick={() => handleDelete(index)}
                    >
                      X
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
          <div className="flex items-center justify-end w-full mt-4 mb-4">
            <div className="text-[#3B3F8B] font-semibold text-xl">
              Grand Total :
            </div>
            <p className="font-medium text-xl">${total}</p>
          </div>
        </div>
      </div>
    }
      

      {/* Product and Deliveries */}

      {/* <form className=" pt-10 mx-6 md:mx-24 font-poppins mb-24" onSubmit={handleSubmit}>
        <div className="flex justify-start flex-wrap mb-10">
        <Dropdown
            className={`input-style text-gray-400 ${
              activeIndex === 2 ? "active" : ""
            }`}
            value={formData.leadStatus}
            onChange={(e) =>
              setFormData((prevState) => ({
                ...prevState,
                leadStatus: e.value,
              }))
            }
            onClick={() => handleClick(2)}
            options={leads.map((e) => ({ name: e }))}
            optionLabel="name"
            placeholder="Lead Status"
          />
          <Calendar
            className={`input-style text-gray-400 ${
              activeIndex === 3 ? "active" : ""
            }`}
            value={formData.desiredDate}
            onChange={(e) =>
              setFormData((prevState) => ({
                ...prevState,
                desiredDate: e.value,
              }))
            }
            onClick={() => handleClick(3)}
            type="date"
            name="desiredDate"
            placeholder="Desire to Have"
          />
          <input
            className="input-style "
            type="number"
            name="rushFee"
            placeholder="Rush Fee"
            value={formData.rushFee}
            onChange={handleChange}
          />
           <Dropdown
            className={`input-style text-gray-400 ${
              activeIndex === 4 ? "active" : ""
            }`}
            value={formData.projectTemplate}
            onChange={(e) =>
              setFormData((prevState) => ({
                ...prevState,
                projectTemplate: e.value,
              }))
            }
            onClick={() => handleClick(4)}
            options={template.map((e) => ({ name: e }))}
            optionLabel="name"
            placeholder="Select Project Template"
          />
        </div>
        <button className="button-style mb-20">Proceed</button>
      </form> */}
    </div>
  );
}

export default QuotationForm;
