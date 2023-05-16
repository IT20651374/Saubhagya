import axios from 'axios';
import React, { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom';
import styles from "./styles.module.css";

function Create() {

    const [inputData, setInputData] = useState({
        organization_name: '',
        address: '',
        contact_no: '',
        email: '',
        no_of_children: '',
        no_of_adults: '',
        meals: '',
        food_preferences: '',
        other_required_nececities: '',
        logo:null
    
    })


    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("organization_name" , inputData.organization_name)
        formData.append("address" , inputData.address)
        formData.append("contact_no" , inputData.contact_no)
        formData.append("email" , inputData.email)
        formData.append("no_of_children" , inputData.no_of_children)
        formData.append("no_of_adults" , inputData.no_of_adults)
        formData.append("meals" , inputData.meals)
        formData.append("food_preferences" , inputData.food_preferences)
        formData.append("other_required_nececities" , inputData.other_required_nececities)
        formData.append("logo" , inputData.logo);
        
        try {
            await axios.post('http://localhost:3000/api/needypeople/store', formData);
            alert('Needy People Inserted Successfully!');
            navigate('/needy-people');
          } catch (error) {
            console.log(error);
          }
    }

    const handleFileChange=(e)=>{
        const image = e.target.files[0]
        setInputData({...inputData , logo:image})
    }

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
            <h1>Create New Needy People Organization</h1><br />
                
                    <label><h3>Organization Name</h3></label>
                    <input type='text' name='organization_name'placeholder="Name of the organization" className={styles.input} 
                    onChange={e => setInputData({...inputData, organization_name: e.target.value})}/>
                

               
                    <label><h3>Address</h3></label>
                    <input type='text' name='Address' placeholder="Organization address" className={styles.input} 
                    onChange={e => setInputData({...inputData, address: e.target.value})}/>
                

                
                    <label><h3>Phone</h3></label>
                    <input type='tel' name='contact_no' placeholder="071524280" className={styles.input} 
                    onChange={e => setInputData({...inputData, contact_no: e.target.value})}/>
                

                
                    <label><h3>Email</h3></label>
                    <input type='email' name='email' placeholder="Organization email address" className={styles.input} 
                    onChange={e => setInputData({...inputData, email: e.target.value})}/>
                

               
                    <label><h3>Children Qty</h3></label>
                    <input type='number' name='no_of_children' placeholder="No of children" className={styles.input} 
                    onChange={e => setInputData({...inputData, no_of_children: e.target.value})}/>
              

               
                    <label><h3>Adults Qty</h3></label>
                    <input type='number' name='no_of_adults' placeholder="No of adults" className={styles.input} 
                    onChange={e => setInputData({...inputData, no_of_adults: e.target.value})}/>
               

               
                    <label><h3>Meals</h3></label>
                    <input type='text' name='meals' placeholder="Specify meals the organization is taking" className={styles.input} 
                    onChange={e => setInputData({...inputData, meals: e.target.value})}/>
               

              
                    <label><h3>Food Preferences</h3></label>
                    <input type='textarea' name='food_preferences' placeholder="Specify the food preferences for the meals" maxlength='100' minlength='10' className={styles.input} 
                    onChange={e => setInputData({...inputData, food_preferences: e.target.value})}/>
             

              
                    <label><h3>Other Nececities</h3></label>
                    <input type='textarea' name='other_required_nececities' placeholder="Specify other required nececities" maxlength='100' minlength='10' className={styles.input} 
                    onChange={e => setInputData({...inputData, other_required_nececities: e.target.value})}/>
              

               
                    <label><h3>Organization Logo</h3></label>
                    <input type='file' name='logo'  className={styles.input}  
                    onChange={handleFileChange} /><br/>
               

                <button type="submit" className={styles.green_btn}>Submit</button>
              
            </form>

        </div>
        </div>
      
    </div>
  )
}

export default Create
