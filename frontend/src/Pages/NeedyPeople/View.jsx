import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styles from "./styles.module.css";
import { Link } from 'react-router-dom';





const View = () => {
    const [NeedyPeople, setNeedyPeople] = useState([]);

    useEffect(() => {
        fetchNeedyPeople();
    }, []);

    const fetchNeedyPeople = () => {
        axios
            .get('http://localhost:3000/api/needypeople')
            .then((res) => {
                console.log(res.data.response);
                setNeedyPeople(res.data.response);
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
            
            <h1>Needy People Organizations</h1>
            <div className={styles.org_container}>
                {Array.isArray(NeedyPeople) && NeedyPeople.map((needyorg) => (
                    <div className={styles.card} key={needyorg._id}>
                        <img src={`http://localhost:3000/uploads/${needyorg.logo}`} alt='' />
                        <h3>{needyorg.organization_name}</h3>
                        <p>{needyorg.address}</p>
                        <p>{needyorg.contact_no}</p>
                        <p>{needyorg.email}</p>
                        <p>Children Qty: {needyorg.no_of_adults}</p>
                        <p>Adults Qty: {needyorg.no_of_children}</p>
                        <p>Meals: {needyorg.meals}</p>
                        <p>{needyorg.food_preferences}</p>
                        <p>Other nececities: {needyorg.other_required_nececities}</p><br />
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
