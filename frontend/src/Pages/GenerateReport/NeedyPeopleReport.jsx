import React, { Component } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";

class PdfGenerator extends Component {
  state = {
    needyPeopleData: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:3000/api/needypeople")
      .then((response) => {
        this.setState({ needyPeopleData: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  generatePdf = () => {
    const doc = new jsPDF();
    const tableColumn = [
      "Organization Name",
      "Address",
      "Phone",
      "Email",
      "Children Qty",
      "Adults Qty",
      "Meals",
      "Food Preferences",
      "Other Nececities",
    ];
    const tableRows = [];

    if (this.state.needyPeopleData && this.state.needyPeopleData.length > 0) {
      this.state.needyPeopleData.forEach((needyPerson) => {
        const rowData = [
          needyPerson.organization_name,
          needyPerson.address,
          needyPerson.contact_no,
          needyPerson.email,
          needyPerson.no_of_children,
          needyPerson.no_of_adults,
          needyPerson.meals,
          needyPerson.food_preferences,
          needyPerson.other_required_nececities,
        ];
        tableRows.push(rowData);
      });
    } else {
      console.log("No data found");
      return;
    }

    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    doc.text("Needy People Report", 14, 15);
    doc.save("Needy_People_Organizations_Report.pdf");
  };

  render() {
    return (
      <button onClick={this.generatePdf}>Generate Report</button>
    );
  }
}

export default PdfGenerator;
