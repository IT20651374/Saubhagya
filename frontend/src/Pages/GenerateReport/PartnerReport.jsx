import React, { useState, useEffect } from "react";
import axios from "axios";
import { CSVLink } from "react-csv";

const CsvGenerator = () => {
  const [foodPartnershipData, setfoodPartnershipData] = useState([]);

  const getData = async () => {
    await axios
      .get('http://localhost:3000/api/partner')
      .then((res) => {
        console.log(res.data.response);
        setfoodPartnershipData(res.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  let csvData = [];

  if (Array.isArray(foodPartnershipData) && foodPartnershipData.length > 0) {
    csvData = [
      ["Name", "Address", "Phone", "Email","Shop Name", "Shop Address", "Purpose", "Quantity", "Partnership Type" ,"Food Donator"],
      ...foodPartnershipData.map((partnership) => [
        partnership.partnerName,
        partnership.address,
        partnership.phone,
        partnership.email,
        partnership.shopName,
        partnership.shopAddress,
        partnership.purpose,
        partnership.quantity,
        partnership.partnershipType,
        partnership.foodDonator.name,
      ]),
    ];
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <CSVLink data={csvData} filename={"Saubhagya_Food_Partnerships_Report.csv"} className="button">
        Generate Report
      </CSVLink>
      <style jsx>{`
        .button {
          padding: 1rem 2rem;
          background-color: #4caf50;
          color: white;
          font-size: 1.2rem;
          text-transform: uppercase;
          border-radius: 2rem;
          text-decoration: none;
          transition: background-color 0.3s ease;
          cursor: pointer;
        }

        .button:hover {
          background-color: #3e8e41;
        }
      `}</style>
    </div>
  );
};

export default CsvGenerator;
