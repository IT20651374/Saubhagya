import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

function Create() {
  const [inputData, setInputData] = useState({
    deliver_name: '',
    nic: '',
    phone: '',
    email: '',
    donar_name: '',
    delivery_date: '',
    needy_people_organization: '',
    location: '',
    status:''
  });

  const navigate = useNavigate();
  const [needyPeopleOrgData, setNeedyPeopleOrgData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
    // Retrieve stored form data when component mounts
    const storedFormData = JSON.parse(sessionStorage.getItem('formData'));
    if (storedFormData) {
      setInputData(storedFormData);
    }
  }, []);

  useEffect(() => {
    // Store form data in sessionStorage whenever it changes
    sessionStorage.setItem('formData', JSON.stringify(inputData));
  }, [inputData]);

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
      await axios.post('http://localhost:3000/api/delivery/store', inputData);
      alert('Food Delivery Added Successfully!');
      navigate('/food-delivery');
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
          <Link to="/on-going-food-donations">
            <button type="button" className={styles.white_btn}>
              Food Donations
            </button>
          </Link><br/>
          <Link to="/view-needy-people/:id">
            <button type="button" className={styles.white_btn}>
              Needy People
            </button>
          </Link><br/>
          <Link to="/food-delivery">
            <button type="button" className={styles.white_btn}>
              Back
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.right}>
        <form className={styles.form_container} onSubmit={handleSubmit}>
          <h1>Add New Food Delivery</h1>
          <br />

          <label>
            <h3>Name</h3>
          </label>
          <input
            type="text"
            name="deliver_name"
            placeholder="Name of the delivery person"
            className={styles.input}
            value={inputData.deliver_name}
            onChange={handleInputChange}
          />

          <label>
            <h3>NIC</h3>
          </label>
          <input
            type="text"
            name="nic"
            placeholder="Enter your NIC number"
            className={styles.input}
            value={inputData.nic}
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
        placeholder="Enter email address"
        className={styles.input}
        value={inputData.email}
        onChange={handleInputChange}
        />

        <label>
        <h3>Donar Name</h3>
        </label>
        <input
        type="text"
        name="donar_name"
        placeholder="Enter donar name"
        className={styles.input}
        value={inputData.donar_name}
        onChange={handleInputChange}
        />

        <label>
        <h3>Delivery Date</h3>
        </label>
        <input
        type="date"
        name="delivery_date"
        placeholder="Pick the delivery date"
        className={styles.input}
        value={inputData.delivery_date}
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
        </select>


        <label>
        <h3>Location</h3>
        </label>
        <input
        type="text"
        name="location"
        placeholder="Enter the delivery location"
        className={styles.input}
        value={inputData.location}
        onChange={handleInputChange}
        />

        <label>
        <h3>Delivery Status</h3>
        </label>
        <select
        name="status"
        className={styles.input}
        value={inputData.status}
        onChange={handleInputChange}
        >
        <option value="">Select Delivery Status</option>
  
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Out for Delivery">Out for Delivery</option>
        <option value="Delivered">Delivered</option>
        <option value="Cancelled">Cancelled</option>
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