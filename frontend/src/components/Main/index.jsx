import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import Admin from '../../images/usermain/admin.png'
import Donations from '../../images/usermain/donations.png'
import NeedyPeople from '../../images/usermain/needypeople.png'
import DonatorPartner from '../../images/usermain/Donator-Partner.png'
import DeliveryAgent from '../../images/usermain/Delivery-Agent.png'



const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location ="/";
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar} >
				<h1>Welcome to Saubhagya</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
			<br></br>
			<div className={styles.org_container}>
			
			
			<div className={styles.card} >
			<Link to="/needy-people" onClick={Image}>
			<img src={NeedyPeople} alt="" /></Link>
			<h3>Needy People</h3>
			</div>
			
			<div className={styles.card} >
			<Link to="/donations" onClick={Image}>
			<img src={Donations} alt="" /></Link>
			<h3>Donations</h3>
			</div>

			<div className={styles.card} >
			<Link to="/donator-partner" onClick={Image}>
			<img src={DonatorPartner} alt="" /></Link>
			<h3>Donator Partner</h3>
			</div>

			<div className={styles.card} >
			<Link to="/food-delivery" onClick={Image}>
			<img src={DeliveryAgent} alt="" /></Link>
			<h3>Delivery Agent</h3>
			</div>

			<div className={styles.card} >
			<Link to="/generate-report" onClick={Image}>
			<img src={Admin} alt="" /></Link>
			<h3>Generate Report</h3>
			</div>

            </div>

		</div>
	);

	
};

export default Main;
