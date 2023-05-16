import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from './styles.module.css';

function Update() {
  const { id } = useParams();
  const navigate = useNavigate();

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
    needy_people_organization: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/donate/${id}`);
        const donation = response.data.foodDonator;

        setInputData({
          name: donation.name,
          organizationname: donation.organizationname,
          address: donation.address,
          phone: donation.phone,
          email: donation.email,
          mealtype: donation.mealtype,
          foodname: donation.foodname,
          quantity: donation.quantity,
          additionaldonateitems: donation.additionaldonateitems,
          pickupdate: donation.pickupdate,
          needy_people_organization: donation.needy_people_organization,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchNeedyPeopleOrgData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/needypeople');
        const orgData = response.data;

        setNeedyPeopleOrgData(orgData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNeedyPeopleOrgData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post(`http://localhost:3000/api/donate/update/${id}`, inputData);
      alert('Food Donation Updated Successfully!');
      navigate('/donations');
    } catch (error) {
      console.log(error);
    }
  };

  const [needyPeopleOrgData, setNeedyPeopleOrgData] = useState([]);


  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h1>Saubhagya</h1>
          <Link to="/view-needy-people/:id">
            <button type="button" className={styles.white_btn}>
              Needy People
            </button>
          </Link>
          <br />
          <Link to="/donations">
            <button type="button" className={styles.white_btn}>
              Back
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.right}>
        <form className={styles.form_container} onSubmit={handleSubmit}>
          <h1>Update Food Donation Details</h1>
          <br />

          <label>
            <h3>Name</h3>
          </label>
          <input
            type="text"
            name="name"
            className={styles.input}
            value={inputData.name || ''}
            onChange={(e) => setInputData({ ...inputData, name: e.target.value })}
          />

          <label>
            <h3>Organization Name</h3>
          </label>
          <input
            type="text"
            name="organizationname"
            className={styles.input}
            value={inputData.organizationname || ''}
            onChange={(e) => setInputData({ ...inputData, organizationname: e.target.value })}
          />

<label>
        <h3>Address</h3>
      </label>
      <input
        type="text"
        name="address"
        className={styles.input}
        value={inputData.address || ''}
        onChange={(e) => setInputData({ ...inputData, address: e.target.value })}
      />

      <label>
        <h3>Phone</h3>
      </label>
      <input
        type="tel"
        name="phone"
        className={styles.input}
        value={inputData.phone || ''}
        onChange={(e) => setInputData({ ...inputData, phone: e.target.value })}
      />

      <label>
        <h3>Email</h3>
      </label>
      <input
        type="email"
        name="email"
        className={styles.input}
        value={inputData.email || ''}
        onChange={(e) => setInputData({ ...inputData, email: e.target.value })}
      />

      <label>
        <h3>Meal Type</h3>
      </label>
      <input
        type="text"
        name="mealtype"
        className={styles.input}
        value={inputData.mealtype || ''}
        onChange={(e) => setInputData({ ...inputData, mealtype: e.target.value })}
      />

      <label>
        <h3>Food</h3>
      </label>
      <input
        type="text"
        name="foodname"
        className={styles.input}
        value={inputData.foodname || ''}
        onChange={(e) => setInputData({ ...inputData, foodname: e.target.value })}
      />

      <label>
        <h3>Quantity</h3>
      </label>
      <input
        type="number"
        name="quantity"
        className={styles.input}
        value={inputData.quantity || ''}
        onChange={(e) => setInputData({ ...inputData, quantity: e.target.value })}
      />

      <label>
        <h3>Additional Donate Items</h3>
      </label>
      <input
        type="text"
        name="additionaldonateitems"
        className={styles.input}
        value={inputData.additionaldonateitems || ''}
        onChange={(e) => setInputData({ ...inputData, additionaldonateitems: e.target.value })}
      />

      <label>
        <h3>Donate Date</h3>
      </label>
      <input
        type="date"
        name="pickupdate"
        className={styles.input}
        value={inputData.pickupdate || ''}
        onChange={(e) => setInputData({ ...inputData, pickupdate: e.target.value })}
      />

      <label>
        <h3>Needy People Organization</h3>
      </label>
      <select
        name="needy_people_organization"
        className={styles.input}
        value={inputData.needy_people_organization || ''}
        onChange={(e) => setInputData({ ...inputData, needy_people_organization: e.target.value })}
      >
        <option value="">Select Needy People Organization</option>
        {Array.isArray(needyPeopleOrgData) &&
          needyPeopleOrgData.map((org) => (
            <option key={org._id} value={org._id}>
              {org.organization_name}
            </option>
          ))}
      </select>
      <br />

      <button type="submit" className={styles.green_btn}>
        Update
      </button>
    </form>
  </div>
</div>


);
}
export default Update;