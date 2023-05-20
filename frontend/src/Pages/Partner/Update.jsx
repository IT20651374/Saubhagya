import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from './styles.module.css';

function Update() {
  const { id } = useParams();
  const navigate = useNavigate();

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

  const [donatorData, setDonatorData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/partner/${id}`);
        const partnership = response.data.partner;
        console.log('partnership',partnership);
        console.log('response',response);

        setInputData({
          partnerName: partnership.partnerName,
          address: partnership.address,
          phone: partnership.phone,
          email: partnership.email,
          shopName: partnership.shopName,
          shopAddress: partnership.shopAddress,
          purpose: partnership.purpose,
          quantity: partnership.quantity,
          partnershipType: partnership.partnershipType,
          foodDonator: partnership.foodDonator,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchDonatorData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/donate');
        const dData = response.data.response;

        setDonatorData(dData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDonatorData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.put(`http://localhost:3000/api/partner/update/${id}`, inputData);
      alert('Partnership Updated Successfully!');
      navigate('/donation-partner');
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
          {/* <Link to="/view-donation-partner/:id">
            <button type="button" className={styles.white_btn}>
              Needy People
            </button>
          </Link> */}
          <br />
          <Link to="/donation-partner">
            <button type="button" className={styles.white_btn}>
              Back
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.right}>
        <form className={styles.form_container} onSubmit={handleSubmit}>
          <h1>Update Partnership Details</h1>
          <br />

          <label>
            <h3>Name</h3>
          </label>
          <input
            type="text"
            name="partnerName"
            placeholder="Name of the Partner"
            className={styles.input}
            value={inputData.partnerName}
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
        placeholder="email address"
        className={styles.input}
        value={inputData.email}
        onChange={handleInputChange}
        />

          <label>
            <h3>Shop Name</h3>
          </label>
          <input
            type="text"
            name="shopName"
            placeholder="Shop name"
            className={styles.input}
            value={inputData.shopName}
            onChange={handleInputChange}
          />

        <label>
        <h3>Shop Address</h3>
        </label>
        <input
        type="text"
        name="shopAddress"
        placeholder="Enter the shop address"
        className={styles.input}
        value={inputData.shopAddress}
        onChange={handleInputChange}
        />

        <label>
        <h3>Purpose</h3>
        </label>
        <input
        type="text"
        name="purpose"
        placeholder="Enter the purpose"
        className={styles.input}
        value={inputData.purpose}
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
        <h3>Partnership Type</h3>
      </label>
      <input
        type="text"
        name="partnershipType"
        placeholder="Enter partnership type"
        className={styles.input}
        value={inputData.partnershipType}
        onChange={handleInputChange}
      />

      <label>
        <h3>Food Donator</h3>
        </label>
     <select
      name="foodDonator"
      className={styles.input}
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

    {
      console.log(donatorData)
    } 
  </select><br/>

      <button type="submit" className={styles.green_btn}>
        Update
      </button>
    </form>
  </div>
</div>


);
}
export default Update;