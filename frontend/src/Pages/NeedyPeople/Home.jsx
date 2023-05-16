import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

function Home() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const getData = async () => {
    await axios
      .get('http://localhost:3000/api/needypeople')
      .then((res) => {
        console.log(res.data.response);
        setData(res.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  function handleDelete(id) {
    const confirm = window.confirm('Are you sure you want to Delete?');
    if (confirm) {
      axios.post('http://localhost:3000/api/needypeople/delete/' + id).then((res) => {
        alert('Record Deleted Successfully!');
        getData();
      });
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location = '/';
  };

  const filteredData = data.filter((item) => {
    return (
      item.organization_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.address.toLowerCase().includes(searchTerm.toLowerCase())||
      item.contact_no.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>Welcome to Saubhagya</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>

      <div>
        <h1>Needy People Organizations</h1>
        <br />
        <button style={{ backgroundColor: '#FF9F29', color: 'white', marginRight: '10px',  width: '8%', height: '25px' ,fontSize: '15px', fontWeight: 'bold' }}>
          <Link to="/create-needy-people" style={{ textDecoration: 'none', color: 'white'}}>
            Create New +
          </Link>
          <br />
        </button>
        <br /><br />
        <input
          type="text"
          placeholder="Search (Organization Name, Address, Phone)"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          style={{ marginBottom: '10px' ,  width: '22%', height: '25px' }}
        />
        <button type="button" style={{ backgroundColor: '#24a19b', color: 'white', marginLeft: '20px', width: '8%', height: '25px' ,fontSize: '15px', fontWeight: 'bold'}}>
          Search
        </button>
        <Link to="/main">
        <button type="button" style={{ backgroundColor: '#24a19b', color: 'white', marginLeft: '820px', width: '8%', height: '25px' ,fontSize: '15px', fontWeight: 'bold'}}>
              Home
            </button>
          </Link>
        <br />
        <br />
        <table style={{ borderCollapse: 'flex', width: '100%', marginBottom: '30px', fontWeight: '600'}}>
          <thead>
            <tr style={{ backgroundColor: '#24a19b', color: 'white' ,fontSize: '15px'}}>
              <th>Organization Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Children</th>
              <th>Adults</th>
              <th>Meals</th>
              <th>Food Preferences</th>
              <th>Other Nececities</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody style={{ backgroundColor: '#dbdb', color: 'black' ,fontSize: '13px', textAlign: 'center'}}>
            {filteredData.map((d, i) => (
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
              <td><br/>
                <Link to={`/update-needy-people/${d._id}`}>
                  <button type="button" style={{ backgroundColor: '#FF9F29', color: 'white', marginRight: '10px', position: 'center', width:'50px' }}>Update</button>
                </Link><br/>
                <button onClick={e => handleDelete(d._id)} style={{ backgroundColor: 'red', color: 'white', marginRight: '10px', position: 'center', width:'50px' }}>Delete</button> <br/> 
                <Link to={`/view-needy-people/${d._id}`}>
                  <button type="button" style={{ backgroundColor: '#24a19b', color: 'white', marginRight: '10px' , position: 'center', width:'50px'}}>View</button><br /><br />
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


