import axios from 'axios';
import React,{ useEffect, useState } from 'react';
import  { Link,useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

function Home() {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const getData = async () => {
        await axios
        .get('http://localhost:3000/api/donate')
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
          axios.post('http://localhost:3000/api/donate/delete/' + id).then((res) => {
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
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.address.toLowerCase().includes(searchTerm.toLowerCase())
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
        <h1>Food Donations</h1>
        <br />
        <button style={{ backgroundColor: '#FF9F29', color: 'white', marginRight: '10px',  width: '8%', height: '25px'  }}>
          <Link to="/create-donation" style={{ textDecoration: 'none', color: 'white'}}>
            + Add Donation
          </Link>
          <br />
        </button>
        <br /><br />
        <input
          type="text"
          placeholder="Search "
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          style={{ marginBottom: '10px' ,  width: '25%', height: '25px' }}
        />
        <button type="button" style={{ backgroundColor: '#24a19b', color: 'white', marginLeft: '20px', width: '8%', height: '25px' }}>
          Search
        </button>
        <br />
        <br />
        <table style={{ borderCollapse: 'collapse', width: '100%', marginBottom: '30px' }}>
          <thead>
            <tr style={{ backgroundColor: '#24a19b', color: 'white' }}>
              <th>Name</th>
              <th>Organization Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Meal Type</th>
              <th>Food Name</th>
              <th>Quantity</th>
              <th>Other Donations</th>
              <th>Donate Date</th>
              <th>Needy People Organization</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {filteredData.map((d, i) => (
              <tr key={i}>
              <td>{d.name}</td>
              <td>{d.organizationname}</td>
              <td>{d.address}</td>
              <td>{d.phone}</td>
              <td>{d.email}</td>
              <td>{d.mealtype}</td>
              <td>{d.foodname}</td>
              <td>{d.quantity}</td>
              <td>{d.additionaldonateitems}</td>
              <td>{d.pickupdate}</td>
              <td>{d.organization_name}</td>
              <td>
                <Link to={`/update-food-donation/${d._id}`}>
                  <button type="button" style={{ backgroundColor: '#FF9F29', color: 'white', marginRight: '10px', position: 'center' }}>Update</button>
                </Link><br/>
                <button onClick={e => handleDelete(d._id)} style={{ backgroundColor: 'red', color: 'white', marginRight: '10px' , position: 'center'}}>Delete</button> 
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
      

