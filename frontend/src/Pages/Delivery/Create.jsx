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
    status: ''
  });

  const navigate = useNavigate();
  const [needyPeopleOrgData, setNeedyPeopleOrgData] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    getData();
    // Retrieve stored form data when component mounts
    const storedFormData = JSON.parse(sessionStorage.getItem('formData'));
    if (storedFormData) {
      setInputData(storedFormData);
    }
  }, []);

  useEffect(() => {
    getData();
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

    if (validateForm()) {
      try {
        await axios.post('http://localhost:3000/api/delivery/store', inputData);
        alert('Food Delivery Added Successfully!');
        navigate('/food-delivery');
      } catch (error) {
        console.log(error);
      }
    }
  };

  const validateForm = () => {
    let valid = true;
    const errors = {};

    if (!inputData.deliver_name) {
      valid = false;
      errors.deliver_name = 'Please enter the delivery person\'s name';
    }

    if (!inputData.nic) {
      valid = false;
      errors.nic = 'Please enter the NIC number';
    }

    if (!inputData.phone) {
      valid = false;
      errors.phone = 'Please enter a valid phone number';
    }

    if (!inputData.email) {
      valid = false;
      errors.email = 'Please enter an email address';
    }

    if (!inputData.donar_name) {
      valid = false;
      errors.donar_name = 'Please enter the donar\'s name';
    }

    if (!inputData.delivery_date) {
      valid = false;
      errors.delivery_date = 'Please select a delivery date';
    } else {
      const currentDate = new Date();
      const selectedDate = new Date(inputData.delivery_date);
    
      if (selectedDate < currentDate) {
        valid = false;
        errors.delivery_date = 'Delivery date must be in the future';
      }
    }
    

    if (!inputData.needy_people_organization) {
      valid = false;
      errors.needy_people_organization = 'Please select a needy people organization';
    }

    if (!inputData.location) {
      valid = false;
      errors.location = 'Please enter the delivery location';
    }

    if (!inputData.status) {
      valid = false;
      errors.status = 'Please select the delivery status';
    }

    setErrors(errors);
    return valid;
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
            className={`${styles.input} ${errors.deliver_name && styles.red}`}
            value={inputData.deliver_name}
            onChange={handleInputChange}
          />
          {errors.deliver_name && <p className={`${styles.error_message} ${styles.red}`}>{errors.deliver_name}</p>}

          <label>
            <h3>NIC</h3>
          </label>
          <input
            type="text"
            name="nic"
            placeholder="Enter your NIC number"
            className={`${styles.input} ${errors.nic && styles.red}`}
            value={inputData.nic}
            onChange={handleInputChange}
          />
          {errors.nic && <p className={`${styles.error_message} ${styles.red}`}>{errors.nic}</p>}

          <label>
            <h3>Phone</h3>
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="0112100100"
            className={`${styles.input} ${errors.phone && styles.red}`}
            value={inputData.phone}
            onChange={handleInputChange}
          />
          {errors.phone && <p className={`${styles.error_message} ${styles.red}`}>{errors.phone}</p>}

          <label>
            <h3>Email</h3>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            className={`${styles.input} ${errors.email && styles.red}`}
            value={inputData.email}
            onChange={handleInputChange}
          />
          {errors.email && <p className={`${styles.error_message} ${styles.red}`}>{errors.email}</p>}

          <label>
            <h3>Donar Name</h3>
          </label>
          <input
            type="text"
            name="donar_name"
            placeholder="Enter donar name"
            className={`${styles.input} ${errors.donar_name && styles.red}`}
            value={inputData.donar_name}
            onChange={handleInputChange}
          />
          {errors.donar_name && <p className={`${styles.error_message} ${styles.red}`}>{errors.donar_name}</p>}

          <label>
            <h3>Delivery Date</h3>
          </label>
          <input
            type="date"
            name="delivery_date"
            placeholder="Pick the delivery date"
            className={`${styles.input} ${errors.delivery_date && styles.red}`}
            value={inputData.delivery_date}
            onChange={handleInputChange}
          />
          {errors.delivery_date && <p className={`${styles.error_message} ${styles.red}`}>{errors.delivery_date}</p>}

          <label>
            <h3>Needy People Organization</h3>
          </label>
          <select
            name="needy_people_organization"
            className={`${styles.input} ${errors.needy_people_organization && styles.red}`}
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
          {errors.needy_people_organization && (
            <p className={`${styles.error_message} ${styles.red}`}>{errors.needy_people_organization}</p>
          )}

          <label>
            <h3>Location</h3>
          </label>
          <input
            type="text"
            name="location"
            placeholder="Enter the delivery location"
            className={`${styles.input} ${errors.location && styles.red}`}
            value={inputData.location}
            onChange={handleInputChange}
          />
          {errors.location && <p className={`${styles.error_message} ${styles.red}`}>{errors.location}</p>}

          <label>
            <h3>Delivery Status</h3>
          </label>
          <select
            name="status"
            className={`${styles.input} ${errors.status && styles.red}`}
            value={inputData.status}
            onChange={handleInputChange}
          >
            <option value="">Select Delivery Status</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Out for Delivery">Out for Delivery</option>
            <option value="Delivered">Delivered</option>
            <option value="Cancelled">Cancelled</option>
          </select>
          {errors.status && <p className={`${styles.error_message} ${styles.red}`}>{errors.status}</p>}

          <button type="submit" className={styles.green_btn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;
