import React, { useState, useEffect } from "react";
import axios from "axios";
import { CSVLink } from "react-csv";

const CsvGenerator = () => {
  const [foodDonationData, setfoodDonationData] = useState([]);

  const getData = async () => {
    await axios
      .get('http://localhost:3000/api/donate')
      .then((res) => {
        console.log(res.data.response);
        setfoodDonationData(res.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  let csvData = [];

  if (Array.isArray(foodDonationData) && foodDonationData.length > 0) {
    csvData = [
      ["Name", "Organization Name", "Address", "Phone", "Email", "Meal Type", "Food Name", "Quantity", "Other Donations" , "Donate Date" , "Needy People Organizaton"],
      ...foodDonationData.map((donation) => [
        donation.name,
        donation.organizationname,
        donation.address,
        donation.phone,
        donation.email,
        donation.mealtype,
        donation.foodname,
        donation.quantity,
        donation.additionaldonateitems,
        donation.pickupdate,
        donation.needy_people_organization.organization_name,
      ]),
    ];
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <CSVLink data={csvData} filename={"Saubhagya_Food_Donations_Report.csv"} className="button">
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
