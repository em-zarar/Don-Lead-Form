import React, { useState } from "react";

// ------import component-------
import HeaderTitle from "./common/HeaderTitle";
import Navbar from "./common/Navbar";
import CustomDataTable from './common/CustomDataTable'

export default function AllQuotes() {

  // ---------data sample--------
  const [customers] = useState([
    {
      id: 1,
      name: "Brana",
      phone: "000333322",
      email: "bellice0@tinypic.com",
      status: "Verified",
      date: "06-Jan-2024",
    },
    {
      id: 2,
      name: "Nesta",
      phone: "000333322",
      email: "ndunsleve1@baidu.com",
      status: "Ongoing",
      date: "06-Jan-2024",
    },
    {
      id: 3,
      name: "Ashleigh",
      phone: "000333322",
      email: "anobriga2@mysql.com",
      status: "On Hold",
      date: "06-Jan-2024",
    },
    {
      id: 4,
      name: "Alain",
      phone: "000333322",
      email: "ahilling3@ca.gov",
      status: "Rejected",
      date: "06-Jan-2024",
    },
    {
      id: 1,
      name: "Brana",
      phone: "000333322",
      email: "bellice0@tinypic.com",
      status: "Verified",
      date: "06-Jan-2024",
    },
    {
      id: 2,
      name: "Nesta",
      phone: "000333322",
      email: "ndunsleve1@baidu.com",
      status: "Ongoing",
      date: "06-Jan-2024",
    },
    {
      id: 3,
      name: "Ashleigh",
      phone: "000333322",
      email: "anobriga2@mysql.com",
      status: "On Hold",
      date: "06-Jan-2024",
    },
    {
      id: 4,
      name: "Alain",
      phone: "000333322",
      email: "ahilling3@ca.gov",
      status: "Rejected",
      date: "06-Jan-2024",
    },
    {
      id: 1,
      name: "Brana",
      phone: "000333322",
      email: "bellice0@tinypic.com",
      status: "Verified",
      date: "06-Jan-2024",
    },
    {
      id: 2,
      name: "Nesta",
      phone: "000333322",
      email: "ndunsleve1@baidu.com",
      status: "Ongoing",
      date: "06-Jan-2024",
    },
    {
      id: 3,
      name: "Ashleigh",
      phone: "000333322",
      email: "anobriga2@mysql.com",
      status: "On Hold",
      date: "06-Jan-2024",
    },
    {
      id: 4,
      name: "Alain",
      phone: "000333322",
      email: "ahilling3@ca.gov",
      status: "Rejected",
      date: "06-Jan-2024",
    },
    {
      id: 13,
      name: "Patrica",
      phone: "Aksell",
      email: "paksellc@printfriendly.com",
      status: 'Verified',
      date: "11/11/2023",
    },
    {
      id: 14,
      name: "Wendye",
      phone: "Kayes",
      email: "wkayesd@ft.com",
      status: 'On Hold',
      date: "7/5/2024",
    },
    {
      id: 15,
      name: "Crosby",
      phone: "Jenckes",
      email: "cjenckese@archive.org",
      status: 'Rejected',
      date: "7/26/2024",
    },
    {
      id: 16,
      name: "Rolph",
      phone: "Durtnell",
      email: "rdurtnellf@tinypic.com",
      status: 'Verified',
      date: "5/9/2024",
    },
    {
      id: 17,
      name: "Kipper",
      phone: "Bram",
      email: "kbramg@umich.edu",
      status: 'Ongoing',
      date: "1/13/2024",
    },
    {
      id: 18,
      name: "Moritz",
      phone: "Rohloff",
      email: "mrohloffh@123-reg.co.uk",
      status: 'On Hold',
      date: "9/3/2024",
    },
    {
      id: 19,
      name: "Nicolai",
      phone: "Pringer",
      email: "npringeri@wisc.edu",
      status: 'Rejected',
      date: "3/15/2024",
    },
    {
      id: 20,
      name: "Verla",
      phone: "Eyres",
      email: "veyresj@cbslocal.com",
      status: "Verified",
      date: "1/13/2024",
    },
  ]);

  return (
    <div className="bg-img">
      <Navbar />
      <HeaderTitle title={"All Quotes"}/>
      <CustomDataTable
      globalFilterFields={'name'}
      nameField={'name'}
      phoneField={"phone"}
      emailField={"email"}
      statusField={"status"}
      dateField={"date"}
      firstLable={'Customer Name'}
      secondLabel={"Delivery Date"}
      thirdLabel={"Total Amount"}
      forthLabel={"Status"}
      fifthLabel={"Template"}
      customers={customers}
      filename={"QuotesTableData"}
      emptyMessage={"No Quotes found."}
      />
    </div>
  );
}
