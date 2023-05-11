import axios from 'axios';
import React, { useEffect , useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from "./styles.module.css";


function Update() {

    const {id} = useParams();

    const [inputData, setInputData] = useState({
       
        organization_name: '',
        address: '',
        contact_no: '',
        email: '',
        mealtype: '',
        food_name: '',
        quantity: '',
        additionaldonateitems: '',
        pickupdate: '',
        needy_people_organization: '',
        logo:null
    })

    const [organization_name , setorganization_name] = useState('')
    const [address , setaddress] = useState('')
    const [contact_no , setcontact_no] = useState('')
    const [email , setemail] = useState('')
    const [mealtype , setmealtyp] = useState('')
    const [food_name , setfood_name] = useState('')
    const [quantity , setquantity] = useState('')
    const [additional_donate_items , setfadditional_donate_items] = useState('')
    const [pickupdate , setpickupdate] = useState('')
    const [needy_people_organization , setneedy_people_organization] = useState('')
    const [logo , setlogo] = useState('')

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3000/api/fooddonation/'+id)
        .then((res) => {
            console.log(res.data.fooddonation[0]._id);
            setorganization_name(res.data.fooddonation[0].organization_name) 
            setaddress(res.data.fooddonation[0].address) 
            setcontact_no(res.data.fooddonation[0].contact_no) 
            setemail(res.data.fooddonation[0].email) 
            setmeal_type(res.data.fooddonation[0].meal_type) 
            setfood_name(res.data.fooddonation[0].food_name) 
            setquantity(res.data.fooddonation[0].quantity)
            setadditional_donate_items(res.data.fooddonation[0].additional_donate_items)
            setpickupdate(res.data.fooddonation[0].pickupdate)
            setneedy_people_organization(res.data.fooddonation[0].needy_people_organization)

        })
        .catch((err) => {
            console.log(err);
        });

    },[]);

    const handleSubmit = async (event) => {

        const formData = new FormData();
        formData.append("organization_name" , inputData.organization_name)
        formData.append("address" , inputData.address)
        formData.append("contact_no" , inputData.contact_no)
        formData.append("email" , inputData.email)
        formData.append("meal_type" , inputData.meal_type)
        formData.append("food_name" , inputData.food_name)
        formData.append("quantity" , inputData.quantity)
        formData.append("additional_donate_items" , inputData.additional_donate_items)
        formData.append("pickupdate" , inputData.pickupdate)
        formData.append("needy_people_organization" , inputData.needy_people_organization)
        formData.append("logo" , inputData.logo);

        event.preventDefault();
        await axios.post('http://localhost:3000/api/fooddonation/update/'+id, formData)
        .then(res => {
            alert("Food Donation Updated Successfully!")
            navigate('/food_donation')
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
                        <Link to="/food_donation">
                            <button type="button" className={styles.white_btn}>
                                Back
                            </button>
                        </Link>

                        </div>
        <div className={styles.right}>
            <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Update Food Donation Organization Details</h1><br />

                
                    <label><h3>Organization Name</h3></label>
                    <input type='text' defaultValue={organization_name} name='organization_name' className={styles.input}  
                    onChange={e => setInputData({...inputData, organization_name: e.target.value})}/>
                

               
                    <label><h3>Address</h3></label>
                    <input type='text' defaultValue={address}  name='Address'  className={styles.input} 
                    onChange={e => setInputData({...inputData, address: e.target.value})}/>



                   <label><h3>Phone</h3></label>
                    <input type='tel' defaultValue={contact_no}  name='contact_no'  className={styles.input} 
                    onChange={e => setInputData({...inputData, contact_no: e.target.value})}/>
                

                
                    <label><h3>Email</h3></label>
                    <input type='email' defaultValue={email}  name='email' className={styles.input}  
                    onChange={e => setInputData({...inputData, email: e.target.value})}/>



                    <label><h3>meal_type</h3></label>
                    <input type='number' defaultValue={mealtype}  name='meal_type' className={styles.input} 
                    onChange={e => setInputData({...inputData, meal_type: e.target.value})}/>
                

              
                    <label><h3>food_name</h3></label>
                    <input type='number' defaultValue={food_name}  name='food_name'  className={styles.input} 
                    onChange={e => setInputData({...inputData, food_name: e.target.value})}/>
                    
               

                
                    <label><h3>quantity</h3></label>
                    <input type='text' name='quantity' defaultValue={quantity}  className={styles.input} 
                    onChange={e => setInputData({...inputData, quantity: e.target.value})}/>
              

             
                    <label><h3>additional_donate_items</h3></label>
                    <input type='textarea' defaultValue={additional_donate_items}  name='additional_donate_items'  maxlength='100'  className={styles.input} 
                    onChange={e => setInputData({...inputData, additional_donate_items: e.target.value})}/>
             

                
                    <label><h3>pickupdate</h3></label>
                    <input type='textarea' defaultValue={pickupdate}  name='pickupdate'  maxlength='100'  className={styles.input} 
                    onChange={e => setInputData({...inputData, pickupdate: e.target.value})}/>

               

                   <label><h3>needy_people_organization</h3></label>
                    <input type='textarea' defaultValue={needy_people_organization}  name='needy_people_organization'  maxlength='100'  className={styles.input} 
                    onChange={e => setInputData({...inputData, needy_people_organization: e.target.value})}/>



                    <label><h3>Organization Logo</h3></label>
                    <input type='file'  name='logo' accept="image/png, image/jpg" className={styles.input}  
                    onChange={handleFileChange}/><br/>
                

                <button type="submit" className={styles.green_btn}>Update</button>
            </form>

        </div>
        </div>
      
    </div>
  )
}

export default Update

              

