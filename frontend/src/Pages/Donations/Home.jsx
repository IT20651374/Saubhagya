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
    
      const searchProperties = ['name', 'organizationname', 'address', 'mealtype', 'foodname', 'pickupdate'];

      const filteredData = data.filter((item) =>
      searchProperties.some((prop) =>
      item[prop].toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

 
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
        <button style={{ backgroundColor: '#FF9F29', color: 'white', marginRight: '10px', width: '8%', height: '25px', fontSize: '15px', fontWeight: 'bold' }}>
        <Link to="/create-donation" style={{ textDecoration: 'none', color: 'white' }}>
        + Donate Food
        </Link>
        <br />
        </button>
        <br /><br />
        <input
          type="text"
          placeholder="Search (Name, Organization name, Adddress, Meal Type, Food, Date, Neeedy People) "
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          style={{ marginBottom: '10px' ,  width: '28%', height: '25px' }}
        />
        <button type="button" style={{ backgroundColor: '#24a19b', color: 'white', marginLeft: '20px', width: '8%', height: '25px' ,fontSize: '15px' , fontWeight: 'bold'}}>
          Search
        </button>
        <Link to="/main">
        <button type="button" style={{ backgroundColor: '#24a19b', color: 'white', marginLeft: '800px', width: '8%', height: '25px' ,fontSize: '15px', fontWeight: 'bold'}}>
              Home
            </button>
          </Link>
        <br />
        <br />
        <table style={{ borderCollapse: 'flex', width: '100%', marginBottom: '30px', fontWeight: '600'}}>
          <thead>
          <tr style={{ backgroundColor: '#24a19b', color: 'white' ,fontSize: '15px'}}>
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
          <tbody style={{ backgroundColor: '#dbdb', color: 'black' ,fontSize: '13px', textAlign: 'center'}}>
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
              <td>{d.needy_people_organization.organization_name}</td>
              <td><br/>
                <Link to={`/update-donation/${d._id}`}>
                <button type="button" style={{ backgroundColor: '#FF9F29', color: 'white', marginRight: '10px', position: 'center' , width:'50px' }}>Update</button>
                </Link><br/>
                <button onClick={e => handleDelete(d._id)} style={{ backgroundColor: 'red', color: 'white', marginRight: '10px', position: 'center', width:'50px' }}>Delete</button> <br/>
                <Link to={`/add-partnership`}>
                  <button type="button" style={{ backgroundColor: '#24a19b', color: 'white', marginRight: '10px' , position: 'center', width:'50px'}}>Partner</button><br /><br />
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
      

