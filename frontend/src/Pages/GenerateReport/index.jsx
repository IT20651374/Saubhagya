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
						<h1>Generate Report</h1>
						<Link to="/needypeopleManage">
						<button type="button" className={styles.green_btn}>
							Needy People
						</button>
                        </Link>

                        <Link to="/donorManage">
						<button type="button" className={styles.green_btn}>
							Donator
						</button>
                        </Link>

                        <Link to="/partnerManage">
						<button type="button" className={styles.green_btn}>
							Partner
						</button>
                        </Link>

                        <Link to="/deliveryagentManage">
						<button type="button" className={styles.green_btn}>
							Delivery Agent
						</button>
                        </Link>

					</form>
				</div>
			</div>
		</div>
	);
};

export default GenerateReport;
