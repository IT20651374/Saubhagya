import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

function Create() {
  const [inputData, setInputData] = useState({
    partnerName: '',
    address: '',
    phone: '',
    email: '',
    shopName: '',
    shopAddress: '',
    purpose: '',
    quantity: '',
    partnershipType: '',
    foodDonator: ''
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const [donatorData, setDonatorData] = useState([]);

  useEffect(() => {
    getData();
    console.log(getData);
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
      const response = await axios.get('http://localhost:3000/api/donate');
      console.log(response);
      setDonatorData(response.data.response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      try {
        await axios.post('http://localhost:3000/api/partner/store', inputData);
        alert('Partnership Added Successfully!');
        navigate('/donation-partner');
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    let valid = true;
    const errors = {};

    if (!inputData.partnerName) {
      valid = false;
      errors.partnerName = 'Please enter your name';
    }

    if (!inputData.address) {
      valid = false;
      errors.address = 'Please enter your address';
    }

    if (!inputData.phone) {
      valid = false;
      errors.phone = 'Please enter your phone number';
    } else if (!/^\d{10}$/.test(inputData.phone)) {
      valid = false;
      errors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!inputData.email) {
      valid = false;
      errors.email = 'Please enter your email address';
    } else if (!/\S+@\S+\.\S+/.test(inputData.email)) {
      valid = false;
      errors.email = 'Please enter a valid email address';
    }

    // if (!inputData.shopName) {
    //     valid = false;
    //     errors.shopName = 'Please enter yuor shop name (optional)';
    //   }

    // if (!inputData.shopAddress) {
    //   valid = false;
    //   errors.shopAddress = 'Please enter your shop address';
    // }

    if (!inputData.purpose) {
      valid = false;
      errors.purpose = 'Please enter the purpose of food donating';
    }

    if (!inputData.quantity) {
      valid = false;
      errors.quantity = 'Please enter the food quantity';
    } else if (!/^\d+$/.test(inputData.quantity)) {
      valid = false;
      errors.quantity = 'Please enter a valid quantity';
    }

    if (!inputData.partnershipType) {
      valid = false;
      errors.partnershipType = 'Please select the partnership type';
    }

        if (!inputData.foodDonator) {
      valid = false;
      errors.foodDonator = 'Please select a donator';
    }

    setErrors(errors);
    return valid;
  };

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h1>Saubhagya</h1>
          {/* <Link to="/view-donation-partner/:id">
            <button type="button" className={styles.white_btn}>
              Donation Partner
            </button>
          </Link><br/> */}
          <Link to="/donation-partner">
            <button type="button" className={styles.white_btn}>
              Back
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.right}>
        <form className={styles.form_container} onSubmit={handleSubmit}>
          <h1>Add New Partnership</h1>
          <br />

          <label>
            <h3>Name</h3>
          </label>
          <input
            type="text"
            name="partnerName"
            placeholder="Name of the Partner"
            className={`${styles.input} ${errors.partnerName && styles.red}`}
            value={inputData.partnerName}
            onChange={handleInputChange}
          />
          {errors.partnerName && <p className={`${styles.error_message} ${styles.red}`}>{errors.partnerName}</p>}

          <label>
            <h3>Address</h3>
          </label>
          <input
            type="text"
            name="address"
            placeholder="Enter your address"
            className={`${styles.input} ${errors.address && styles.red}`}
            value={inputData.address}
            onChange={handleInputChange}
          />
          {errors.address && <p className={`${styles.error_message} ${styles.red}`}>{errors.address}</p>}

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
            placeholder="Email Address"
            className={`${styles.input} ${errors.email && styles.red}`}
            value={inputData.email}
            onChange={handleInputChange}
          />
          {errors.email && <p className={`${styles.error_message} ${styles.red}`}>{errors.email}</p>}

          <label>
            <h3>Shop Name</h3>
          </label>
          <input
            type="text"
            name="shopName"
            placeholder="Shop Name (Optional)"
            className={`${styles.input} ${errors.shopName && styles.red}`}
            value={inputData.shopName}
            onChange={handleInputChange}
          />
          {errors.shopName && <p className={`${styles.error_message} ${styles.red}`}>{errors.shopName}</p>}

          <label>
            <h3>Shop Address</h3>
          </label>
          <input
            type="text"
            name="shopAddress"
            placeholder="Shop Address (Optional)"
            className={`${styles.input} ${errors.shopAddress && styles.red}`}
            value={inputData.shopAddress}
            onChange={handleInputChange}
          />
          {errors.shopAddress && <p className={`${styles.error_message} ${styles.red}`}>{errors.shopAddress}</p>}

          <label>
            <h3>purpose</h3>
          </label>
          <input
            type="text"
            name="purpose"
            placeholder="Enter the purpose of food donating"
            className={`${styles.input} ${errors.purpose && styles.red}`}
            value={inputData.purpose}
            onChange={handleInputChange}
          />
          {errors.purpose && <p className={`${styles.error_message} ${styles.red}`}>{errors.purpose}</p>}

          <label>
            <h3>Partnership Type</h3>
          </label>
          <input
            type="text"
            name="partnershipType"
            placeholder="Select the partnership type"
            className={`${styles.input} ${errors.partnershipType && styles.red}`}
            value={inputData.partnershipType}
            onChange={handleInputChange}
          />
          {errors.partnershipType && <p className={`${styles.error_message} ${styles.red}`}>{errors.partnershipType}</p>}

          <label>
            <h3>Quantity</h3>
          </label>
          <input
            type="number"
            name="quantity"
            placeholder="Enter food quantity"
            className={`${styles.input} ${errors.quantity && styles.red}`}
            value={inputData.quantity}
            onChange={handleInputChange}
          />
          {errors.quantity && <p className={`${styles.error_message} ${styles.red}`}>{errors.quantity}</p>}

          <label>
            <h3>foodDonator</h3>
          </label>
          <select
            name="foodDonator"
            className={`${styles.input} ${errors.foodDonator && styles.red}`}
            value={inputData.foodDonator}
            onChange={handleInputChange}
          >
          <option value="">Select Food Donator</option>
            {Array.isArray(donatorData) &&
              donatorData.map((d) => (
                <option key={d._id} value={d._id}>
                  {d.name}
                </option>
              ))}
          </select>
          {errors.foodDonator && <p className={`${styles.error_message} ${styles.red}`}>{errors.needy_people_organization}</p>}

          <button type="submit" className={styles.green_btn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;
