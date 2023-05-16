import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from './styles.module.css';

function Update() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [inputData, setInputData] = useState({
    organization_name: null,
    address: null,
    contact_no: null,
    email: null,
    no_of_children: null,
    no_of_adults: null,
    meals: null,
    food_preferences: null,
    other_required_nececities: null,
    logo: null
  });

  const [organization_name, setOrganizationName] = useState('');
  const [address, setAddress] = useState('');
  const [contact_no, setContactNo] = useState('');
  const [email, setEmail] = useState('');
  const [no_of_children, setNoOfChildren] = useState('');
  const [no_of_adults, setNoOfAdults] = useState('');
  const [meals, setMeals] = useState('');
  const [food_preferences, setFoodPreferences] = useState('');
  const [other_required_nececities, setOtherRequiredNecessities] = useState('');
  const [logo, setLogo] = useState('');

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/needypeople/${id}`)
      .then((res) => {
        const needyPerson = res.data.needyPeople[0];
        setOrganizationName(needyPerson.organization_name);
        setAddress(needyPerson.address);
        setContactNo(needyPerson.contact_no);
        setEmail(needyPerson.email);
        setNoOfChildren(needyPerson.no_of_children);
        setNoOfAdults(needyPerson.no_of_adults);
        setMeals(needyPerson.meals);
        setFoodPreferences(needyPerson.food_preferences);
        setOtherRequiredNecessities(needyPerson.other_required_nececities);
        setLogo(needyPerson.logo);

        setInputData({
          ...inputData,
          organization_name: needyPerson.organization_name,
          address: needyPerson.address,
          contact_no: needyPerson.contact_no,
          email: needyPerson.email,
          no_of_children: needyPerson.no_of_children,
          no_of_adults: needyPerson.no_of_adults,
          meals: needyPerson.meals,
          food_preferences: needyPerson.food_preferences,
          other_required_nececities: needyPerson.other_required_nececities,
          logo: needyPerson.logo
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('organization_name', organization_name);
    formData.append('address', address);
    formData.append('contact_no', contact_no);
    formData.append('email', email);
    formData.append('no_of_children', no_of_children);
    formData.append('no_of_adults', no_of_adults);
    formData.append('meals', meals);
    formData.append('food_preferences', food_preferences);
    formData.append('other_required_nececities', other_required_nececities);
    formData.append('logo', inputData.logo);

    try {
      await axios.post(`http://localhost:3000/api/needypeople/update/${id}`, formData);
      alert('Needy People Updated Successfully!');
      navigate('/needy-people');
    } catch (error) {
      console.log(error);
    }
};

const handleFileChange = (e) => {
const image = e.target.files[0];
setInputData({ ...inputData, logo: image });
};

return (
<div className={styles.signup_container}>
<div className={styles.signup_form_container}>
<div className={styles.left}>
<h1>Saubhagya</h1>
<Link to="/needy-people">
<button type="button" className={styles.white_btn}>
Back
</button>
</Link>
</div>
<div className={styles.right}>
<form className={styles.form_container} onSubmit={handleSubmit}>
<h1>Update Needy People Organization Details</h1>
<br />
<label>
          <h3>Organization Name</h3>
        </label>
        <input
          type="text"
          defaultValue={organization_name}
          name="organization_name"
          className={styles.input}
          onChange={(e) => setOrganizationName(e.target.value)}
        />

        <label>
          <h3>Address</h3>
        </label>
        <input
          type="text"
          defaultValue={address}
          name="Address"
          className={styles.input}
          onChange={(e) => setAddress(e.target.value)}
        />

        <label>
          <h3>Phone</h3>
        </label>
        <input
          type="tel"
          defaultValue={contact_no}
          name="contact_no"
          className={styles.input}
          onChange={(e) => setContactNo(e.target.value)}
        />

        <label>
          <h3>Email</h3>
        </label>
        <input
          type="email"
          defaultValue={email}
          name="email"
          className={styles.input}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>
          <h3>Children Qty</h3>
        </label>
        <input
          type="number"
          defaultValue={no_of_children}
          name="no_of_children"
          className={styles.input}
          onChange={(e) => setNoOfChildren(e.target.value)}
        />

        <label>
          <h3>Adults Qty</h3>
        </label>
        <input
          type="number"
          defaultValue={no_of_adults}
          name="no_of_adults"
          className={styles.input}
          onChange={(e) => setNoOfAdults(e.target.value)}
        />

        <label>
          <h3>Meals</h3>
        </label>
        <input
          type="text"
          name="meals"
          defaultValue={meals}
          className={styles.input}
          onChange={(e) => setMeals(e.target.value)}
        />

        <label>
          <h3>Food Preferences</h3>
        </label>
        <input
          type="textarea"
          defaultValue={food_preferences}
          name="food_preferences"
          maxLength="100"
          className={styles.input}
          onChange={(e) => setFoodPreferences(e.target.value)}
        />

        <label>
          <h3>Other Necessities</h3>
        </label>
        <input
          type="textarea"
          defaultValue={other_required_nececities}
          name="other_required_nececities"
          maxLength="100"
          className={styles.input}
          onChange={(e) => setOtherRequiredNecessities(e.target.value)}
        />

        <label>
          <h3>Organization Logo</h3>
        </label>
        <input
          type="file"
          name="logo"
          accept="image/png,image/jpg"
          className={styles.input}
          onChange={handleFileChange}
          />
          <br />
          <button type="submit" className={styles.green_btn}>
          Update
        </button>
      </form>
    </div>
  </div>
</div>
);
}

export default Update;

