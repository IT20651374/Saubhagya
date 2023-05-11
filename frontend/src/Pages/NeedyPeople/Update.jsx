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
        no_of_children: '',
        no_of_adults: '',
        meals: '',
        food_preferences: '',
        other_required_nececities: '',
        logo: null
    })

    const [organization_name , setorganization_name] = useState('')
    const [address , setaddress] = useState('')
    const [contact_no , setcontact_no] = useState('')
    const [email , setemail] = useState('')
    const [no_of_children , setno_of_children] = useState('')
    const [no_of_adults , setno_of_adults] = useState('')
    const [meals , setmeals] = useState('')
    const [food_preferences , setfood_preferences] = useState('')
    const [other_required_nececities , setother_required_nececities] = useState('')
    const [logo , setlogo] = useState('')


    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3000/api/needypeople/'+id)
        .then((res) => {
            console.log(res.data.needyPeople[0]._id);
            setorganization_name(res.data.needyPeople[0].organization_name) 
            setaddress(res.data.needyPeople[0].address) 
            setcontact_no(res.data.needyPeople[0].contact_no) 
            setemail(res.data.needyPeople[0].email) 
            setno_of_children(res.data.needyPeople[0].no_of_children) 
            setno_of_adults(res.data.needyPeople[0].no_of_adults) 
            setmeals(res.data.needyPeople[0].meals)
            setfood_preferences(res.data.needyPeople[0].food_preferences)
            setother_required_nececities(res.data.needyPeople[0].other_required_nececities)
                
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
        formData.append("no_of_children" , inputData.no_of_children)
        formData.append("no_of_adults" , inputData.no_of_adults)
        formData.append("meals" , inputData.meals)
        formData.append("food_preferences" , inputData.food_preferences)
        formData.append("other_required_nececities" , inputData.other_required_nececities)
        formData.append("logo" , inputData.logo);

        event.preventDefault();
        await axios.post('http://localhost:3000/api/needypeople/update/'+id, formData)
        .then(res => {
            alert("Needy People Updated Successfully!")
            navigate('/needy-people')
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
					<Link to="/needy-people">
						<button type="button" className={styles.white_btn}>
							Back
						</button>
					</Link>
		</div>
        <div className={styles.right}>
            <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Update Needy People Organization Details</h1><br />

                
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
              

                
                    <label><h3>Children Qty</h3></label>
                    <input type='number' defaultValue={no_of_children}  name='no_of_children' className={styles.input} 
                    onChange={e => setInputData({...inputData, no_of_children: e.target.value})}/>
                

              
                    <label><h3>Adults Qty</h3></label>
                    <input type='number' defaultValue={no_of_adults}  name='no_of_adults'  className={styles.input} 
                    onChange={e => setInputData({...inputData, no_of_adults: e.target.value})}/>
                    
               

                
                    <label><h3>Meals</h3></label>
                    <input type='text' name='meals' defaultValue={meals}  className={styles.input} 
                    onChange={e => setInputData({...inputData, meals: e.target.value})}/>
              

             
                    <label><h3>Food Preferences</h3></label>
                    <input type='textarea' defaultValue={food_preferences}  name='food_preferences'  maxlength='100'  className={styles.input} 
                    onChange={e => setInputData({...inputData, food_preferences: e.target.value})}/>
             

                
                    <label><h3>Other Nececities</h3></label>
                    <input type='textarea' defaultValue={other_required_nececities}  name='other_required_nececities'  maxlength='100'  className={styles.input} 
                    onChange={e => setInputData({...inputData, other_required_nececities: e.target.value})}/>
               

                
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
