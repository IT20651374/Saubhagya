import React, { useState, useEffect } from "react";
import axios from "axios";
import { CSVLink } from "react-csv";

const CsvGenerator = () => {
  const [foodDeliveryData, setfoodDeliveryData] = useState([]);

  const getData = async () => {
    await axios
      .get('http://localhost:3000/api/delivery')
      .then((res) => {
        console.log(res.data.response);
        setfoodDeliveryData(res.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  let csvData = [];

  if (Array.isArray(foodDeliveryData) && foodDeliveryData.length > 0) {
    csvData = [
      ["Name", "NIC", "Phone", "Email", "Donar Name", "Delivery Date", "Needy People Organization", "Location" , "Delivery Status"],
      ...foodDeliveryData.map((delivery) => [
        delivery.deliver_name,
        delivery.nic,
        delivery.phone,
        delivery.email,
        delivery.donar_name,
        delivery.delivery_date,
        delivery.needy_people_organization.organization_name,
        delivery.location,
        delivery.status,
        
      ]),
    ];
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <CSVLink data={csvData} filename={"Saubhagya_Donations_Delivery_Report.csv"} className="button">
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
