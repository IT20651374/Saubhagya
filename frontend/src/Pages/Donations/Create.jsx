import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

function Create() {
  const [inputData, setInputData] = useState({
    name: '',
    organizationname: '',
    address: '',
    phone: '',
    email: '',
    mealtype: '',
    foodname: '',
    quantity: '',
    additionaldonateitems: '',
    pickupdate: '',
    needy_people_organization: ''
  });

  const navigate = useNavigate();
  const [needyPeopleOrgData, setNeedyPeopleOrgData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/needypeople');
      setNeedyPeopleOrgData(response.data.response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('http://localhost:3000/api/donate/store', inputData);
      alert('Food Donation Added Successfully!');
      navigate('/donations');
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h1>Saubhagya</h1>
          <Link to="/view-needy-people/:id">
            <button type="button" className={styles.white_btn}>
              Needy People
            </button>
          </Link><br/>
          <Link to="/donations">
            <button type="button" className={styles.white_btn}>
              Back
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.right}>
        <form className={styles.form_container} onSubmit={handleSubmit}>
          <h1>Add New Food Donation</h1>
          <br />

          <label>
            <h3>Name</h3>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name of the Donator"
            className={styles.input}
            value={inputData.name}
            onChange={handleInputChange}
          />

          <label>
            <h3>Organization Name</h3>
          </label>
          <input
            type="text"
            name="organizationname"
            placeholder="Organization name"
            className={styles.input}
            value={inputData.organizationname}
            onChange={handleInputChange}
          />

          <label>
            <h3>Address</h3>
          </label>
          <input
            type="text"
            name="address"
            placeholder="Enter your address"
            className={styles.input}
            value={inputData.address}
            onChange={handleInputChange}
          />

          <label>
          <h3>Phone</h3>
          </label>
          <input
          type="tel"
          name="phone"
          placeholder="0112100100"
          className={styles.input}
          value={inputData.phone}
          onChange={handleInputChange}
          />

        <label>
        <h3>Email</h3>
        </label>
        <input
        type="email"
        name="email"
        placeholder="Organization email address"
        className={styles.input}
        value={inputData.email}
        onChange={handleInputChange}
        />

        <label>
        <h3>Meal Type</h3>
        </label>
        <input
        type="text"
        name="mealtype"
        placeholder="Enter the meal type"
        className={styles.input}
        value={inputData.mealtype}
        onChange={handleInputChange}
        />

        <label>
        <h3>Food</h3>
        </label>
        <input
        type="text"
        name="foodname"
        placeholder="Enter the food donating"
        className={styles.input}
        value={inputData.foodname}
        onChange={handleInputChange}
        />

      <label>
        <h3>Quantity</h3>
      </label>
      <input
        type="number"
        name="quantity"
        placeholder="Enter food quantity"
        className={styles.input}
        value={inputData.quantity}
        onChange={handleInputChange}
      />

      <label>
        <h3>Additional Donate Items</h3>
      </label>
      <input
        type="text"
        name="additionaldonateitems"
        placeholder="Enter additional donate items"
        className={styles.input}
        value={inputData.additionaldonateitems}
        onChange={handleInputChange}
      />

      <label>
        <h3>Donate Date</h3>
      </label>
      <input
        type="date"
        name="pickupdate"
        placeholder="pickupdate"
        className={styles.input}
        value={inputData.pickupdate}
        onChange={handleInputChange}
      />

      <label>
        <h3>Needy People Organization</h3>
      </label>
      <select
      name="needy_people_organization"
      className={styles.input}
      value={inputData.needy_people_organization}
      onChange={handleInputChange}
      >
      <option value="">Select Needy People Organization</option>
      {Array.isArray(needyPeopleOrgData) &&
      needyPeopleOrgData.map((org) => (
        
      <option key={org._id} value={org._id}>
        {org.organization_name}
      </option>
    ))}
    </select><br/>


      <button type="submit" className={styles.green_btn}>
        Submit
      </button>
    </form>
  </div>
</div>
  
    )
}
export default Create