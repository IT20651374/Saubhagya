import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styles from "./styles.module.css";
import { Link } from 'react-router-dom';





const View = () => {
    const [FoodDonation, setFoodDonation] = useState([]);

    useEffect(() => {
        fetchFoodDonation();
    }, []);

    const fetchFoodDonation = () => {
        axios
            .get('http://localhost:3000/api/fooddonation')
            .then((res) => {
                console.log(res.data.response);
                setFoodDonation(res.data.response);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <h1>Saubhagya</h1>
            <br></br>
            <br></br>
            <br></br>
            
            <h1>Food Donation Organizations</h1>
            <div className={styles.org_container}>
                {Array.isArray(FoodDonation) && FoodDonation.map((needyorg) => (
                    <div className={styles.card} key={needyorg._id}>
                        <img src={`http://localhost:3000/uploads/${needyorg.logo}`} alt='' />
                        <h3>{needyorg.organization_name}</h3>
                        <p>{needyorg.address}</p>
                        <p>{needyorg.contact_no}</p>
                        <p>{needyorg.email}</p>
                        <p>mealtype: {needyorg.mealtype}</p>
                        <p>foodname: {needyorg.foodname}</p>
                        <p>quantity: {needyorg.quantity}</p>
                        <p>{needyorg.additionaldonateitems}</p>
                        <p>pickupdate: {needyorg.pickupdate}</p><br />
                        <p>needy_people_organization: {needyorg.needy_people_organization}</p>
                        <Link to="/add-food-donation">
						<button type="button" className={styles.white_btn}>
							Donate Now
						</button>
					</Link>
                    </div>
                ))}
            </div>
        </div>
        
    );
};

export default View;