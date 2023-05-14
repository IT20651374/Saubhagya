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

    })
    const [needyPeopleOrgData, setNeedyPeopleOrgData] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
        axios
          .get('http://localhost:3000/api/needyPeople')
          .then(response => {
            setNeedyPeopleOrgData(response.data);
          })
          .catch(error => {
            console.error('Error fetching Needy People Organization data:', error);
          });
      }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("name" , inputData.name)
        formData.append("organizationname" , inputData.organizationname)
        formData.append("address" , inputData.address)
        formData.append("phone" , inputData.phone)
        formData.append("email" , inputData.email)
        formData.append("mealtype" , inputData.mealtype)
        formData.append("foodname" , inputData.foodname)
        formData.append("quantity" , inputData.quantity)
        formData.append("additionaldonateitems" , inputData.additionaldonateitems)
        formData.append("pickupdate" , inputData.pickupdate)
        formData.append("needy_people_organization", inputData.needy_people_organization)
    

        await axios.post('http://localhost:3000/api/donate/store', formData)
        .then(res => {
          alert("Add Food Donation Inserted Successfully!");
          navigate('/add-food-donation');
        })
        .catch(error => {
          console.error('Error submitting the form:', error);
        });
    }

    return (
        <div className={styles.signup_container}>
        <div className={styles.signup_form_container}>
        <div className={styles.left}>
					<h1>Saubhagya</h1>
					<Link to="/add-food-donation">
						<button type="button" className={styles.white_btn}>
							Back
						</button>
					</Link>
          </div>
          </div>
        <div className={styles.right}>
            <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Add New Food Donation</h1><br />

            <label><h3>Name</h3></label>
                    <input type='text' name='name'placeholder="Name of the donar" className={styles.input} 
                    onChange={e => setInputData({...inputData, name: e.target.value})}/>

            <label><h3>Organization Name</h3></label>
                    <input type='text' name='organizationname' placeholder="Organization name" className={styles.input} 
                    onChange={e => setInputData({...inputData, address: e.target.value})}/> 

           <label><h3>Address</h3></label>
                    <input type='text' name='address' placeholder="Enter your address" className={styles.input} 
                    onChange={e => setInputData({...inputData, address: e.target.value})}/>



          <label><h3>Phone</h3></label>
                    <input type='tel' name='phone'  className={styles.input} 
                    onChange={e => setInputData({...inputData, phone: e.target.value})}/>
                

                
         <label><h3>Email</h3></label>
                    <input type='email' name='email' placeholder="Organization email address" className={styles.input} 
                    onChange={e => setInputData({...inputData, email: e.target.value})}/>
                

               
         <label><h3>Meal Type</h3></label>
                    <input type='text' name='mealtype' placeholder="Enter the meal type" className={styles.input} 
                    onChange={e => setInputData({...inputData, mealtype: e.target.value})}/>
              

               
         <label><h3>Foodname</h3></label>
                    <input type='text' name='foodname' placeholder="Enter the food donating" className={styles.input} 
                    onChange={e => setInputData({...inputData, foodname: e.target.value})}/>
               

               
         <label><h3>Quantity</h3></label>
                    <input type='number' name='quantity'  className={styles.input} 
                    onChange={e => setInputData({...inputData, quantity: e.target.value})}/>
               

              
         <label><h3>Additional Donate Items</h3></label>
                    <input type='text' name='additionaldonateitems' placeholder="Enter additional donate items" className={styles.input} 
                    onChange={e => setInputData({...inputData, additionaldonateitems: e.target.value})}/>
             

              
         <label><h3>Donate Date</h3></label>
                    <input type='date' name='pickupdate' placeholder="pickupdate" className={styles.input} 
                    onChange={e => setInputData({...inputData, pickupdate: e.target.value})}/>



        <label><h3>Needy People Organization</h3></label>
        <select
        name="needy_people_organization"
        className={styles.input}
        onChange={e =>
        setInputData({ ...inputData, needy_people_organization: e.target.value })
        }
        value={inputData.needy_people_organization}
    >
      <option value="">Select Needy People Organization</option>
      {Array.isArray(needyPeopleOrgData) &&
        needyPeopleOrgData.map(org => (
          <option key={org._id} value={org._id}>
            {org.organization_name}
          </option>
        ))}
    </select>

           <button type="submit" className={styles.green_btn}>Submit</button> 

           </form>

           </div>
           </div>

         
    )
}
export default Create