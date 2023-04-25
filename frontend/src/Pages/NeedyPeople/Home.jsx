import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import styles from "./styles.module.css";



function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate()

  const getData=async()=>{
    await axios.get('http://localhost:3000/api/needypeople')
    .then((res) => {
      console.log(res.data.response);
      setData(res.data.response);
    })
    .catch((err) => {
      console.log(err); 
    });
  }

  useEffect(() => {
    getData()
  }, []); 

  function handleDelete(id){
    const confirm = window.confirm("Are you sure you want to Delete?");
    if(confirm){
      axios.post('http://localhost:3000/api/needypeople/delete/'+id)
        .then(res => {
          alert("Record Deleted Successfully!");
          getData()
        })
    } 
  }

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
      

    <div>
      <h1>Needy People Organizations</h1><br />
      <button style={{ backgroundColor: '#FF9F29', color: 'white', marginRight: '10px' }}>
        <Link to="/create-needy-people" style={{ textDecoration: 'none', color: 'white' }}>Create New +</Link><br />
      </button>
      <br /><br />
      <table style={{ borderCollapse: 'collapse', width: '100%', marginBottom: '30px' }}>
        <thead>
          <tr style={{ backgroundColor: '#24a19b', color: 'white' }}>
            <th>Organization Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Children Qty</th>
            <th>Adults Qty</th>
            <th>Meals</th>
            <th>Food Preferences</th>
            <th>Other Nececities</th>
            <th>Org. Logo</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d,i)=>(
            <tr key={i}>
              <td>{d.organization_name}</td>
              <td>{d.address}</td>
              <td>{d.contact_no}</td>
              <td>{d.email}</td>
              <td>{d.no_of_children}</td>
              <td>{d.no_of_adults}</td>
              <td>{d.meals}</td>
              <td>{d.food_preferences}</td>
              <td>{d.other_required_nececities}</td>
              <td>{d.logo}</td>
              <td>
                <Link to={`/update-needy-people/${d._id}`}>
                  <button type="button" style={{ backgroundColor: '#FF9F29', color: 'white', marginRight: '10px' }}>Update</button>
                </Link><br/>
                <button onClick={e => handleDelete(d._id)} style={{ backgroundColor: 'red', color: 'white', marginRight: '10px' }}>Delete</button> <br/> 
                <Link to={`/view-needy-people/${d._id}`}>
                  <button type="button" style={{ backgroundColor: '#24a19b', color: 'white' }}>View</button><br /><br />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Home;

