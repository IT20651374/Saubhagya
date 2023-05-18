import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
        logo: null
    });

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const formData = new FormData();
        formData.append("organization_name", inputData.organization_name);
        formData.append("address", inputData.address);
        formData.append("contact_no", inputData.contact_no);
        formData.append("email", inputData.email);
        formData.append("no_of_children", inputData.no_of_children);
        formData.append("no_of_adults", inputData.no_of_adults);
        formData.append("meals", inputData.meals);
        formData.append("food_preferences", inputData.food_preferences);
        formData.append("other_required_nececities", inputData.other_required_nececities);
        formData.append("logo", inputData.logo);

        try {
            await axios.post('http://localhost:3000/api/needypeople/store', formData);
            alert('Needy People Inserted Successfully!');
            navigate('/needy-people');
        } catch (error) {
            console.log(error);
        }
    };

    const handleFileChange = (e) => {
        const image = e.target.files[0];
        setInputData({ ...inputData, logo: image });
    };

    const validateForm = () => {
        const errors = {};

        if (!inputData.organization_name.trim()) {
            errors.organization_name = 'Organization Name is required';
        }

        if (!inputData.address.trim()) {
            errors.address = 'Address is required';
        }

        if (!inputData.contact_no.trim()) {
            errors.contact_no = 'Phone is required';
        } else if (!/^\d+$/.test(inputData.contact_no.trim())) {
            errors.contact_no = 'Phone must contain only digits';
        }

        if (!inputData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(inputData.email.trim())) {
            errors.email = 'Email is invalid';
        }

        if (!inputData.no_of_children.trim()) {
            errors.no_of_children = 'Children Qty is required';
        } else if (!/^\d+$/.test(inputData.no_of_children.trim())) {
            errors.no_of_children = 'Children Qty must be a number';
        }

        if (!inputData.no_of_adults.trim()) {
            errors.no_of_adults = 'Adults Qty is required';
        } else if (!/^\d+$/.test(inputData.no_of_adults.trim())) {
            errors.no_of_adults = 'Adults Qty must be a number';
        }

        if (!inputData.meals.trim()) {
            errors.meals = 'Meals is required';
        }

        if (!inputData.food_preferences.trim()) {
            errors.food_preferences = 'Food Preferences is required';
        } else if (inputData.food_preferences.trim().length < 10) {
            errors.food_preferences = 'Food Preferences must be at least 10 characters long';
        }

        if (!inputData.other_required_nececities.trim()) {
            errors.other_required_nececities = 'Other Necessities is required';
        } else if (inputData.other_required_nececities.trim().length < 10) {
            errors.other_required_nececities = 'Other Necessities must be at least 10 characters long';
        }

        return errors;
    };

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
                        <input
                            type='text'
                            name='organization_name'
                            placeholder="Name of the organization"
                            className={styles.input}
                            value={inputData.organization_name}
                            onChange={e => setInputData({ ...inputData, organization_name: e.target.value })}
                        />
                        {errors.organization_name && <p className={`${styles.error} ${styles.red}`}>{errors.organization_name}</p>}

                        <label><h3>Address</h3></label>
                        <input
                            type='text'
                            name='Address'
                            placeholder="Organization address"
                            className={styles.input}
                            value={inputData.address}
                            onChange={e => setInputData({ ...inputData, address: e.target.value })}
                        />
                        {errors.address && <p className={`${styles.error} ${styles.red}`}>{errors.address}</p>}

                        <label><h3>Phone</h3></label>
                        <input
                            type='tel'
                            name='contact_no'
                            placeholder="071524280"
                            className={styles.input}
                            value={inputData.contact_no}
                            onChange={e => setInputData({ ...inputData, contact_no: e.target.value })}
                        />
                        {errors.contact_no && <p className={`${styles.error} ${styles.red}`}>{errors.contact_no}</p>}

                        <label><h3>Email</h3></label>
                        <input
                            type='email'
                            name='email'
                            placeholder="Organization email address"
                            className={styles.input}
                            value={inputData.email}
                            onChange={e => setInputData({ ...inputData, email: e.target.value })}
                        />
                        {errors.email && <p className={`${styles.error} ${styles.red}`}>{errors.email}</p>}

                        <label><h3>Children Qty</h3></label>
                        <input
                            type='number'
                            name='no_of_children'
                            placeholder="No of children"
                            className={styles.input}
                            value={inputData.no_of_children}
                            onChange={e => setInputData({ ...inputData, no_of_children: e.target.value })}
                        />
                        {errors.no_of_children && <p className={`${styles.error} ${styles.red}`}>{errors.no_of_children}</p>}

                        <label><h3>Adults Qty</h3></label>
                        <input
                            type='number'
                            name='no_of_adults'
                            placeholder="No of adults"
                            className={styles.input}
                            value={inputData.no_of_adults}
                            onChange={e => setInputData({ ...inputData, no_of_adults: e.target.value })}
                        />
                        {errors.no_of_adults && <p className={`${styles.error} ${styles.red}`}>{errors.no_of_adults}</p>}

                        <label><h3>Meals</h3></label>
                        <input
                            type='text'
                            name='meals'
                            placeholder="Specify meals the organization is taking"
                            className={styles.input}
                            value={inputData.meals}
                            onChange={e => setInputData({ ...inputData, meals: e.target.value })}
                        />
                        {errors.meals && <p className={`${styles.error} ${styles.red}`}>{errors.meals}</p>}

                        <label><h3>Food Preferences</h3></label>
                        <input
                            type='textarea'
                            name='food_preferences'
                            placeholder="Specify the food preferences for the meals"
                            maxLength='100'
                            minLength='10'
                            className={styles.input}
                            value={inputData.food_preferences}
                            onChange={e => setInputData({ ...inputData, food_preferences: e.target.value })}
                        />
                        {errors.food_preferences && <p className={`${styles.error} ${styles.red}`}>{errors.food_preferences}</p>}

                        <label><h3>Other Necessities</h3></label>
                        <input
                            type='textarea'
                            name='other_required_nececities'
                            placeholder="Specify other required necessities"
                            maxLength='100'
                            minLength='10'
                            className={styles.input}
                            value={inputData.other_required_nececities}
                            onChange={e => setInputData({ ...inputData, other_required_nececities: e.target.value })}
                        />
                        {errors.other_required_nececities && <p className={`${styles.error} ${styles.red}`}>{errors.other_required_nececities}</p>}

                        <label><h3>Organization Logo</h3></label>
                        <input
                            type='file'
                            name='logo'
                            className={styles.input}
                            onChange={handleFileChange}
                        /><br />

                        <button type="submit" className={styles.green_btn}>Submit</button>

                    </form>

                </div>
            </div>

        </div>
    );
}

export default Create;
