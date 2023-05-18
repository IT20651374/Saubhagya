import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const GenerateReport = () => {
	
	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					
					<h1>Saubhagya</h1>
					<Link to="/main">
						<button type="button" className={styles.white_btn}>
							Back
						</button>
					</Link>
                    <br></br>
                    <Link to="/">
						<button type="button" className={styles.white_btn}>
							Log out
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container}>
						<h1>Reports & Inquiries</h1>
						<Link to="/needy-people-report">
						<button type="button" className={styles.green_btn}>
							Needy People 
						</button>
                        </Link>

                        <Link to="/food-donations-report">
						<button type="button" className={styles.green_btn}>
							Food Donations
						</button>
                        </Link>

                        <Link to="/donar-partner-report">
						<button type="button" className={styles.green_btn}>
							Partners
						</button>
                        </Link>

                        <Link to="/food-donation-delivery-report">
						<button type="button" className={styles.green_btn}>
							Delivery Agents
						</button>
                        </Link>

						<Link to="/general-inquiries">
						<button type="button" className={styles.green_btn}>
							General Inquiries
						</button>
                        </Link>

					</form>
				</div>
			</div>
		</div>
	);
};

export default GenerateReport;
