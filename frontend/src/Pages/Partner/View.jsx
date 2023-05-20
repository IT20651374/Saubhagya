import axios from 'axios';
import React,{ useEffect, useState } from 'react';
import  { Link,useNavigate,useParams } from 'react-router-dom';
import styles from './styles.module.css';

function View() {
  const { id } = useParams();
    const [data, setData] = useState({
    partnerName: '',
    address: '',
    phone: '',
    email: '',
    shopName: '',
    shopAddress: '',
    purpose: '',
    quantity: '',
    partnershipType: '',
    // foodDonator: ''
    });
    const [donatorData, setDonatorData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/api/partner/show/${id}`);
          const partnership = response.data.partner;
          console.log('partnership',partnership);
          console.log('response',response);
  
          setData({
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
      <form className={styles.form_container} >
        <h1>Partnership Details</h1>
        <br />

        <label>
          <h3>Name</h3>
        </label>
        <input
          type="text"
          name="partnerName"
          className={styles.input}
          value={data.partnerName}
          readOnly
        />

        <label>
          <h3>Address</h3>
        </label>
        <input
          type="text"
          name="address"
          className={styles.input}
          value={data.address}
          readOnly
        />

        <label>
        <h3>Phone</h3>
        </label>
        <input
        type="tel"
        name="phone"
        className={styles.input}
        value={data.phone}
        readOnly
        />

      <label>
      <h3>Email</h3>
      </label>
      <input
      type="email"
      name="email"
      className={styles.input}
      value={data.email}
      readOnly
      />

        <label>
          <h3>Shop Name</h3>
        </label>
        <input
          type="text"
          name="shopName"
          className={styles.input}
          value={data.shopName}
          readOnly
        />

      <label>
      <h3>Shop Address</h3>
      </label>
      <input
      type="text"
      name="shopAddress"
      className={styles.input}
      value={data.shopAddress}
      readOnly
      />

      <label>
      <h3>Purpose</h3>
      </label>
      <input
      type="text"
      name="purpose"
      className={styles.input}
      value={data.purpose}
      readOnly
      />

    <label>
      <h3>Quantity</h3>
    </label>
    <input
      type="number"
      name="quantity"
      className={styles.input}
      value={data.quantity}
      readOnly
    />

    <label>
      <h3>Partnership Type</h3>
    </label>
    <input
      type="text"
      name="partnershipType"
      className={styles.input}
      value={data.partnershipType}
      readOnly
    />
{/* <label>
      <h3>Food Donator</h3>
    </label>
    <input
      type="text"
      name="foodDonator"
      className={styles.input}
      value={donatorData.name}
    /> */}
  </form>
</div>
</div>


);
}
  export default View;     
      

