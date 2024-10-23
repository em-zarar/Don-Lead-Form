import React, { useState } from "react";

// ---------import Prime DataTable-----------

import { FilterMatchMode } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { Paginator } from "primereact/paginator";


// ---------Xlsx-----------
import * as XLSX from "xlsx";

// ---------icon import-----------

import { AiOutlinePrinter } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

function CustomDataTable({
  firstLable,
  secondLabel,
  thirdLabel,
  forthLabel,
  fifthLabel,
  globalFilterFields,
  nameField,
  phoneField,
  emailField,
  statusField,
  dateField,
  customers,
  filename,
  emptyMessage
}) {
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });
  const [globalFilterValue, setGlobalFilterValue] = useState("");

  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  const onPageChange = (e) => {
    setFirst(e.first);
    setRows(e.rows);
  };

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };
    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  // -----Export TableData Content-----

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(customers);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, `${filename}.xlsx`);
  };

  // -----template for paginations

  const template = {
    layout: "CurrentPageReport PrevPageLink  NextPageLink",
    CurrentPageReport: (options) => {
      return (
        <span style={{ color: "#6E6E71", fontSize: "14px" }}>
          {options.first} - {options.last} of {options.totalRecords}
        </span>
      );
    },
    PrevPageLink: (options) => {
      return (
        <button
          onClick={options.onClick}
          disabled={options.disabled}
          className="bg-transparent border-none cursor-pointer disabled:opacity-50"
        >
          <img
            src=" ./images/icon/left-arrow-icon.png"
            alt="left-arrow"
          />
        </button>
      );
    },
    NextPageLink: (options) => {
      return (
        <button
          onClick={options.onClick}
          disabled={options.disabled}
          className="bg-transparent border-none cursor-pointer disabled:opacity-50"
        >
          <img
            src=" ./images/icon/right-arrow-icon.png"
            alt="right-arrow"
          />
        </button>
      );
    },
  };

  const renderHeader = () => {
    return (
      <div className="w-full flex flex-col sm:flex-row justify-between items-center mb-3 mt-1 pr-0 md:pr-8 py-6 md:py-8 font-poppins ">
        <div className="ml-3">
          <div className="w-full mb-6 md:mb-0 max-w-sm min-w-[200px] relative">
            <div className="relative">
              <IconField iconPosition="left">
                <button
                  className="absolute h-8 w-8 left-1 top-0.5 my-auto px-2 flex items-center bg-[#F6F6F7] rounded "
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    stroke="currentColor"
                    className="w-8 h-8 text-slate-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </button>
                <InputText
                  className="bg-[#F6F6F7] w-full pr-11 h-9 pl-12 py-2 bg-[#F6F6F6] placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-200 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                  value={globalFilterValue}
                  onChange={onGlobalFilterChange}
                  placeholder="Search"
                />
              </IconField>
            </div>
          </div>
        </div>
        {/* -----Paginator---- */}

        <div className="flex items-center font-sans text-sm font-poppins">
          <Paginator
            template={template}
            first={first}
            rows={rows}
            totalRecords={customers.length}
            onPageChange={onPageChange}
            className="justify-content-end"
          />
          <span className="h-2 "></span>
          <div className="ml-3 flex items-center space-x-4">
            <button className="bg-transparent border-none cursor-pointer">
              <AiOutlinePrinter className="w-5 h-5" />
            </button>
            <button
              className="bg-transparent border-none cursor-pointer"
              onClick={exportToExcel}
            >
              <BsDownload className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  const header = renderHeader();

  const paginatedCustomers = customers.slice(first, first + rows);

  return (
    <div className="mb-2 border-2 border-transparent">
      <div className="shadow-custom-shadow mt-6 md:mt-14 bg-white px-4 md:px-8 font-poppins rounded-xl">
        <div className="">
          {header}
          <div className="card mb-16 pb-4">
            <DataTable
              value={paginatedCustomers}
              paginator={false}
              filters={filters}
              scrollable
              scrollHeight="400px"
              globalFilterFields={[globalFilterFields]}
              emptyMessage={emptyMessage}
              className="p-datatable-customers"
            >
              <Column
                field={nameField}
                header={
                  <span className="font-medium text-sm top-4">
                    {firstLable}
                  </span>
                }
                className="border-b border-t border-slate-200 text-sm font-normal leading-none text-[#101018] font-semibold"
              />
              <Column
                field={phoneField}
                header={
                  <span className="font-medium text-sm">{secondLabel}</span>
                }
                className="border-b border-t border-slate-200 text-sm font-normal leading-none text-[#101018]"
              />
              <Column
                field={emailField}
                header={
                  <span className="font-medium text-sm">{thirdLabel}</span>
                }
                className="cursor-pointer border-b border-t border-slate-200 w-1/4 text-sm font-normal text-blue-600 underline leading-none"
              />
              <Column
                field={statusField}
                header={
                  <span className="font-medium text-sm">{forthLabel}</span>
                }
                className="border-b border-t border-slate-200"
                body={(rowData) => {
                  // ------Check Status and change style
                  const statusStyles = {
                    Verified: "bg-[#C9E8E8] text-[#105352]",
                    Ongoing: "bg-[#CBDCF9] text-[#103680]",
                    "On Hold": "bg-[#FFF3DD] text-[#AA8345]",
                    Rejected: "bg-[#F3D4D1] text-[#70241D]",
                  };

                  const currentStatusStyle =
                    statusStyles[rowData.status] || statusStyles.default;

                  return (
                    <span className={`${currentStatusStyle} px-3 py-1`}>
                      {rowData.status}
                    </span>
                  );
                }}
              />

              <Column
                field={dateField}
                header={<span className="font-medium text-sm">{fifthLabel}</span>}
                className="border-b border-t border-slate-200 text-sm font-normal leading-none text-[#101018]"
              />
              <Column
                header={<span className="font-medium text-sm">Actions</span>}
                body={(rowData) => (
                  <div className="flex space-x-2">
                    <button className="">
                      <MdOutlineEdit className="w-5 h-5" />
                    </button>
                    <button className="ml-2">
                      <RiDeleteBin6Line className="w-5 h-5" />
                    </button>
                  </div>
                )}
                className="p-4 border-b border-t border-slate-200 text-sm font-normal leading-none text-[#101018] font-semibold"
              />
            </DataTable>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomDataTable;
