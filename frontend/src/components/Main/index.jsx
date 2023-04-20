import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import MyActivity from '../../images/usermain/my-activity.png'
import Donations from '../../images/usermain/donations.png'
import NeedyPeople from '../../images/usermain/needypeople.png'



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
			<Link to="/userdashboard" onClick={Image}>
			<img src={MyActivity} alt="" /></Link>
			<h3>My Activity</h3>
			</div>
			
			<div className={styles.card} >
			<Link to="/needyPeople" onClick={Image}>
			<img src={NeedyPeople} alt="" /></Link>
			<h3>Needy People</h3>
			</div>
			
			<div className={styles.card} >
			<Link to="/" onClick={Image}>
			<img src={Donations} alt="" /></Link>
			<h3>Donations</h3>
			</div>

            </div>

		</div>
	);

	
};

export default Main;
