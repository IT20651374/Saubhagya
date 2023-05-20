import axios from 'axios';
import React,{ useEffect, useState } from 'react';
import  { Link,useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

function Home() {

    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const getPartnerData = async () => {
      await axios
        .get('http://localhost:3000/api/partner')
        .then((res) => {
          console.log(res.data.response);
          setData(res.data.response);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    useEffect(() => {
        getPartnerData();
    }, []);
  
    
      function handleDelete(id) {
        const confirm = window.confirm('Are you sure you want to Delete?');
        if (confirm) {
          axios.delete('http://localhost:3000/api/partner/delete/' + id).then((res) => {
            alert('Record Deleted Successfully!');
            getPartnerData();
          });
        }
      }

      const handleLogout = () => {
        localStorage.removeItem('token');
        window.location = '/';
      };
    
      const searchProperties = ['partnerName', 'address', 'phone', 'email', 'shopName', 'shopAddress', 'foodDonator.name'];

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
          <button className={styles.white_btn} onClick={handleLogout}>
            Logout
          </button>
          
        </nav>

         <div>
        <h1>Food Donation Partners</h1>
        <br />
        <button style={{ backgroundColor: '#FF9F29', color: 'white', marginRight: '10px', width: '15%', height: '25px', fontSize: '15px', fontWeight: 'bold', marginLeft:'10px' }}>
        <Link to="/create-donation-partner" style={{ textDecoration: 'none', color: 'white' }}>
        + Add Partnership
        </Link>
        <br />
        </button>
        <br /><br />
        <input
          type="text"
          placeholder="Search... "
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          style={{ marginBottom: '10px' ,  width: '28%', height: '25px',marginLeft:'10px' }}
        />
        <button type="button" style={{ backgroundColor: '#24a19b', color: 'white', marginLeft: '20px', width: '8%', height: '25px' ,fontSize: '15px' , fontWeight: 'bold'}}>
          Search
        </button>
        <Link to="/main">
        <button type="button" style={{ backgroundColor: '#24a19b', color: 'white', marginLeft: '785px', width: '8%', height: '25px' ,fontSize: '15px', fontWeight: 'bold'}}>
              Home
            </button>
          </Link>
        <br />
        <br />
        <table style={{ borderCollapse: 'flex', width: '100%', marginBottom: '30px', fontWeight: '600'}}>
          <thead>
          <tr style={{ backgroundColor: '#24a19b', color: 'white' ,fontSize: '15px'}}>
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Shop Name</th>
              <th>Shop Address</th>
              <th>Purpose</th>
              <th>Quantity</th>
              <th>Partnership Type</th>
              <th>Donator Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody style={{ backgroundColor: '#dbdb', color: 'black' ,fontSize: '13px', textAlign: 'center'}}>
          {filteredData.map((d, i) => (
              <tr key={i}>
              <td>{d.partnerName}</td>
              <td>{d.address}</td>
              <td>{d.phone}</td>
              <td>{d.email}</td>
              <td>{d.shopName}</td>
              <td>{d.shopAddress}</td>
              <td>{d.purpose}</td>
              <td>{d.quantity}</td>
              <td>{d.partnershipType}</td>
              <td>{d.foodDonator.name}</td>
              <td><br/>
                <Link to={`/update-donation-partner/${d._id}`}>
                <button type="button" style={{ backgroundColor: '#FF9F29', color: 'white', marginRight: '10px', position: 'center' , width:'50px' }}>Update</button>
                </Link><br/>
                <button onClick={e => handleDelete(d._id)} style={{ backgroundColor: 'red', color: 'white', marginRight: '10px', position: 'center', width:'50px' }}>Delete</button> <br/>
                <Link to={`/view-donation-partner/${d._id}`}>
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
      

