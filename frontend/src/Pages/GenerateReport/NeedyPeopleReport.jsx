import React, { useState, useEffect } from "react";
import axios from "axios";
import { CSVLink } from "react-csv";

const CsvGenerator = () => {
  const [needyPeopleData, setNeedyPeopleData] = useState([]);

  const getData = async () => {
    await axios
      .get('http://localhost:3000/api/needypeople')
      .then((res) => {
        console.log(res.data.response);
        setNeedyPeopleData(res.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  let csvData = [];

  if (Array.isArray(needyPeopleData) && needyPeopleData.length > 0) {
    csvData = [
      ["Organization Name", "Address", "Phone", "Email", "Children Qty", "Adults Qty", "Meals", "Food Preferences", "Other Nececities"],
      ...needyPeopleData.map((needyPerson) => [
        needyPerson.organization_name,
        needyPerson.address,
        needyPerson.contact_no,
        needyPerson.email,
        needyPerson.no_of_children,
        needyPerson.no_of_adults,
        needyPerson.meals,
        needyPerson.food_preferences,
        needyPerson.other_required_nececities
      ]),
    ];
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <CSVLink data={csvData} filename={"Needy_People_Organizations_Report.csv"} className="button">
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
