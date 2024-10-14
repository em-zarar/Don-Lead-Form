import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

// -----import Components------

import Navbar from "./common/Navbar";
import DynamicDropdown from "./common/QuotationDropdown";
import DynamicDropdown2 from "./common/DynamicDropdown";

//-------import PopUp--------
import Swal from "sweetalert2";
import { AiOutlineClose } from "react-icons/ai";
import { Calendar } from "primereact/calendar";

function QuotationForm() {

  // ------Drop Down Data-----
  const productsOptions = [
    {
      PName: "LG C2 42 (106c m) 4K Smart",
      Manufacture: "Clear Solution",
      Price: 60.7,
    },
    {
      PName: "LG Smart TV 8K",
      Manufacture: "Clear Solution",
      Price: 223.5,
    },
  ];

   const leadsTypeOptions = ["Assistant"];
   const templateTypeOptions = ["Web Project template"];

   
  //-----------States----------------

  const [count, setCount] = useState(0);
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [dropdownSelectedProduct, setDropdownSelectedProduct] = useState({});

  const dropdownOptions = productsOptions.map((prod, index) => ({
    label: prod.PName,
    value: index,
  }));

  // -----useForm Hook---------

  const {
    setValue:quoteSetValue,
    handleSubmit:quoteSubmit,
    control:quoteControl,
    formState: { errors:quoteErrors }, 
    reset:quoteReset
  } = useForm();

  const {
    setValue:prodSetValue,
    register: prodRegister,
    handleSubmit: prodSubmit,
    control: prodControl,
    formState: { errors:prodErrors },
    watch, 
    reset:prodReset
  } = useForm({defaultValues: {
    leadStatus: '',
    desiredDate: null,
    rushFee: '',
    projectTemplate: '',
  },});

  // --------OnSubmit---------------

  const onProductSubmit = (data) => {
    console.log("Product Data Submitted:", data);
    Swal.fire({
      title: "Success",
      text: "Product form submitted successfully!",
      icon: "success",
    });
    prodReset();
  };
  
  const onQuoteSubmit = () => {
 
    if (count === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Product Quantity cannot be zero!",
      });
      return;
    } 

      const productToAdd = dropdownSelectedProduct.map(prod => ({
        ...prod,         
        Quantity: count,
      }));
      setAllProducts((prev) => [...prev, ...productToAdd]);
  

      Swal.fire({
        title: "Success",
        text: "Added Successfully",
        icon: "success",
      });
      setCount(0);
    
  };
  // -------OnChange-------------

  const handleOnChange = (selectedValue) => {
    setDropdownSelectedProduct(productsOptions?.filter((_, i) => i === selectedValue));
  };
  
  // -------Counter---------------

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
    quoteSetValue("Qty", count);
  };

  // -------handleRemove------------

  const handleDelete = (index) => {
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

      {/* ----Navbar--- */}
      <Navbar />

      <div className="flex items-center justify-around mt-8 font-poppins">
        <div className="w-[23%]">
          <img src="./asset/images/form-logo.png" alt="" />
        </div>
        <div className="text-[24px] md:text-4xl text-[#3B3F8B] font-semibold font-poppins mx-0 md:mx-24">
          Quote Form
        </div>
        <div>
          <button className="bg-[#1B1C3F] text-white rounded-[20px] py-2 md:py-[10px] px-2 md:px-8  text-[12px] md:text-[17px]">
            <span className="mr-1">+</span>
            <span>Add Quote</span>
          </button>
        </div>
      </div>

      {/* -----select lead------- */}

      <form onSubmit={quoteSubmit(onQuoteSubmit)}>
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
                  control={quoteControl}
                  placeholder="Select..."
                  onChange={handleOnChange}
                  required
                />
                <div className="selectProduct">
                  <p className="error">
                    {quoteErrors.selectProduct && <span>Product is required</span>}
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

    { 
    dropdownSelectedProduct.length > 0 && dropdownSelectedProduct.map((prod , index) =>(
        <div className="bg-[#F5F5F5] p-6 md:p-10 m-6 md:m-16 mb-10 rounded-3xl shadow-quote-shadow font-poppins para" key={index}>
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
          {prod.PName}
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
        <h2 className="text-3xl mt-3 font-medium ">${prod.Price}</h2>
      </div>
      ))
    }
      

      {/* ------Product Table--------- */}
      
    {
      allProducts.length <= 0 ? 
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
          <tbody>
            <tr className="">
              <td colSpan="6" className="text-xl text-center pt-12 pb-12">No Product</td>
            </tr>
          </tbody>
          
        </table>
      </div>
    </div>
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
                  <td className="p-4 flex justify-center items-center">
                    <button
                      type="submit"
                      className="block text-sm"
                      onClick={() => handleDelete(index)}
                    >
                      <AiOutlineClose className="text-[17px] font-extrabold"/>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td colSpan="6">
                  <div className="flex justify-end items-center mt-4 mb-4">
                    <div className="text-[#3B3F8B] font-semibold text-xl">
                      Grand Total :
                    </div>
                    <p className="font-medium text-2xl">${Math.round(total)}</p>
                  </div>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    }
      

      {/* Product and Deliveries */}

      <form className=" pt-10 mx-6 md:mx-24 font-poppins mb-24" onSubmit={prodSubmit(onProductSubmit)}>
        <div className="flex justify-start flex-wrap mb-10">

        <div className="flex flex-col mr-0 md:mr-7">
            <DynamicDropdown2
              name="leadStatus"
              options={leadsTypeOptions}
              control={prodControl}
              placeholder="Lead Status"
              required
            />
            <p className="error">
              {prodErrors.leadStatus && <span>Lead Status is required</span>}
            </p>
          </div>

          <div className="flex flex-col mr-0 md:mr-7">
            <Calendar
              className={`input-style text-gray-400`}
              value={watch('desiredDate')}
              onChange={(e) => prodSetValue('desiredDate', e.value)}
              placeholder="Desire to Have"
            />
            <p className="error">
              {prodErrors.desiredDate && <span>{errors2.desiredDate.message}</span>}
            </p>
          </div>


          <div className="flex flex-col mr-0 md:mr-7">
            <input
              className="input-style"
              type="number"
              {...prodRegister("rushFee", { required: "Rush Fee is Required" })}
              placeholder="Rush Fee"
            />
            <p className="error">{prodErrors.rushFee?.message}</p>
          </div>
          
          <div className="flex flex-col mr-0 md:mr-7">
            <DynamicDropdown2
              name="projectTemplate"
              options={templateTypeOptions}
              control={prodControl}
              placeholder="Select Project Template"
              required
            />
            <p className="error">
              {prodErrors.projectTemplate && <span>Project Template is required</span>}
            </p>
          </div>

        </div>
        <button type="submit"  className="button-style mb-20">Proceed</button>
      </form>
    </div>
  );
}

export default QuotationForm;
