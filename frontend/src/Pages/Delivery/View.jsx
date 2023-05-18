import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

function View() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const getData = async () => {
    await axios
      .get('http://localhost:3000/api/delivery')
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

  const searchProperties = [
    'deliver_name',
    'nic',
    'phone',
    'delivery_date',
    'needy_people_organization.organization_name',
    'location',
    'status',
  ];

  const filteredData = data.filter((item) =>
    searchProperties.some((prop) => {
      const propValue = getProperty(item, prop);
      if (propValue && typeof propValue === 'string') {
        return propValue.toLowerCase().includes(searchTerm.toLowerCase());
      }
      return false;
    })
  );

  // Helper function to access nested properties
  function getProperty(obj, prop) {
    const propParts = prop.split('.');
    return propParts.reduce((result, currentProp) => result && result[currentProp], obj);
  }

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>Welcome to Saubhagya</h1>
        <Link to="/login">
          <button className={styles.white_btn}>Sign In</button>
        </Link>
      </nav>

      <div>
        <h1>Food Donation Delivery Status</h1>
        <br />
        <br />
        <br />
        <input
          type="text"
          placeholder="Search (Status, Needy People, Location, Phone, Name) "
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          style={{ marginBottom: '10px', width: '28%', height: '25px' }}
        />
        <button
          type="button"
          style={{
            backgroundColor: '#24a19b',
            color: 'white',
            marginLeft: '20px',
            width: '8%',
            height: '25px',
            fontSize: '15px',
            fontWeight: 'bold',
          }}
        >
          Search
        </button>

        <br />
        <br />
        <table style={{ borderCollapse: 'flex', width: '100%', marginBottom: '30px', fontWeight: '600'}}>
          <thead>
          <tr style={{ backgroundColor: '#24a19b', color: 'white' ,fontSize: '15px'}}>
              <th>Name</th>
              <th>NIC</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Donar Name</th>
              <th>Delivery Date</th>
              <th>Needy People Organization</th>
              <th>Location</th>
              <th>Delivery Status</th>
              
            </tr>
          </thead>
          <tbody style={{ backgroundColor: '#dbdb', color: 'black' ,fontSize: '13px', textAlign: 'center'}}>
          {filteredData.map((d, i) => (
              <tr key={i}>
              <td>{d.deliver_name}</td>
              <td>{d.nic}</td>
              <td>{d.phone}</td>
              <td>{d.email}</td>
              <td>{d.donar_name}</td>
              <td>{d.delivery_date}</td>
              <td>{d.needy_people_organization.organization_name}</td>
              <td>{d.location}</td>
              <td>{d.status}</td>  
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    
    
  );
}

export default View;
