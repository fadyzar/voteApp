import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./AdminPage.css"
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://6572c87f192318b7db40fe96.mockapi.io/api/vote/vote')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  return (
    
    <div className='admin-page page'>
       <div className="dropdownAdmin">
        <button className="dropbtn">menu</button>
        <div className="dropdownAdmin-content">
        <button onClick={() => navigate('/')}>Logout</button>
        
        <button onClick={() => navigate('/vote')}>Vote</button>
          
        </div>
      </div>
      <h1>Admin Page</h1>
      <table>
        <thead>
          <tr>
            <th>User Email</th>
          
            <th>Voted</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.userName}</td>
              
              <td>{item.voted ? 'True' : 'False'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  );
  
};

export default AdminPage;
