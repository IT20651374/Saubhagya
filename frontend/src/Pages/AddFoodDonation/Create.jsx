import axios from 'axios';
import React,{ useState } from 'react'
import {Link,useNavigate } from 'react-router-dom';
import styles from "./styles.module.css";

function Create() {

    const [inputData, setInputData] = useState({
        organization_name: '',
        address: '',
        phone: '',
        email: '',
        mealtype: '',
        foodname: '',
        quantity: '',
        additionaldonateitems: '',
        pickupdate: '',
        needy_people_organization: '',
        logo:null

    })
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("organization_name" , inputData.organization_name)
        formData.append("address" , inputData.address)
        formData.append("phone" , inputData.phone)
        formData.append("email" , inputData.email)
        formData.append("mealtype" , inputData.mealtype)
        formData.append("foodname" , inputData.foodname)
        formData.append("quantity" , inputData.quantity)
        formData.append("additionaldonateitems" , inputData.additionaldonateitems)
        formData.append("pickupdate" , inputData.pickupdate)
        formData.append("needy_people_organization", inputData.needy_people_organization)
        formData.append("logo" , inputData.logo);



        await axios.post('http://localhost:3000/api/addfooddonation/store',formData)
        .then(res => {
            alert("Add Food Dnation Inserted Successfully!")
            navigate('/add-food-donation')
        })
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
					<Link to="/add-food-donations">
						<button type="button" className={styles.white_btn}>
							Back
						</button>
					</Link>
          </div>
          </div>
        <div className={styles.right}>
            <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Create New Add Food Donations</h1><br />

            <label><h3>Organization Name</h3></label>
                    <input type='text' name='organization_name'placeholder="Name of the organization" className={styles.input} 
                    onChange={e => setInputData({...inputData, organization_name: e.target.value})}/>

    )

           <label><h3>Address</h3></label>
                    <input type='text' name='Address' placeholder="Organization address" className={styles.input} 
                    onChange={e => setInputData({...inputData, address: e.target.value})}/>



          <label><h3>Phone</h3></label>
                    <input type='tel' name='contact_no' placeholder="071524280" className={styles.input} 
                    onChange={e => setInputData({...inputData, contact_no: e.target.value})}/>
                

                
         <label><h3>Email</h3></label>
                    <input type='email' name='email' placeholder="Organization email address" className={styles.input} 
                    onChange={e => setInputData({...inputData, email: e.target.value})}/>
                

               
         <label><h3>mealtype</h3></label>
                    <input type='number' name='mealtype' placeholder="mealtype" className={styles.input} 
                    onChange={e => setInputData({...inputData, mealtype: e.target.value})}/>
              

               
         <label><h3>Foodname</h3></label>
                    <input type='number' name='Foodname' placeholder="Foodname" className={styles.input} 
                    onChange={e => setInputData({...inputData, Foodname: e.target.value})}/>
               

               
         <label><h3>quantity</h3></label>
                    <input type='text' name='meals' placeholder="quantity" className={styles.input} 
                    onChange={e => setInputData({...inputData, quantity: e.target.value})}/>
               

              
         <label><h3>additionaldonateitems</h3></label>
                    <input type='textarea' name='additionaldonateitems' placeholder="additionaldonateitems" maxlength='100' minlength='10' className={styles.input} 
                    onChange={e => setInputData({...inputData, additionaldonateitems: e.target.value})}/>
             

              
         <label><h3>pickupdate</h3></label>
                    <input type='textarea' name='pickupdate' placeholder="pickupdate" maxlength='100' minlength='10' className={styles.input} 
                    onChange={e => setInputData({...inputData, pickupdate: e.target.value})}/>



         <label><h3>needy_people_organization</h3></label>
                    <input type='number' name='needy_people_organization' placeholder="needy_people_organization" className={styles.input} 
                    onChange={e => setInputData({...inputData, needy_people_organization: e.target.value})}/>   
              

               
         <label><h3>Organization Logo</h3></label>
                    <input type='file' name='logo'  className={styles.input}  
                    onChange={handleFileChange} /><br/>

           <button type="submit" className={styles.green_btn}>Submit</button> 

           </form>

           </div>
           </div>

         
    )
}
export default Create