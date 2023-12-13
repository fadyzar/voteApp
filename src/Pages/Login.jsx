import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import VotePage from './VotePage';
import { useNavigate } from 'react-router-dom';;

export default function Login() {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Check if the user exists
      const response = await axios.get(`https://6572c87f192318b7db40fe96.mockapi.io/api/vote/vote?search=${userName}`);
      
     
      if (response.data.length === 0) {
        // User does not exist, add a new user
        await axios.post('https://6572c87f192318b7db40fe96.mockapi.io/api/vote/vote', {
          userName,
          userPassword,
        });
        alert('User added successfully!')
        console.log('User added successfully!');
        
        navigate('/vote');
        
      } else {
        
  
        console.log('User already exists!');
        checkPassword(userPassword);
        // navigate('/vote');
      }
    } catch (error) {
      console.error('Error user:', error);
    }
  };

  const checkPassword = async (userPassword) => {
    try {
      
     
      const pass = await axios.get(`https://6572c87f192318b7db40fe96.mockapi.io/api/vote/vote?search=${userPassword}`);
    console.log(`userPassword= ${userPassword}`)
    console.log(`pass.data= ${pass}`)
    
      if (userPassword !== '12345') {
        alert('wrong password please try again')
      
        }
       
        
      else {
      
        navigate('/vote');
      }
    } catch (error) {
      console.error('Error user:', error);
    }
  };

  return (
    <div className='login-body'>
    <div className="login-page page" style={{ backgroundImage: 'url("../images/image2.jpg") !important', /* Additional styles */ }}>
      <div className="row">
        <div >
          

          <div className="form-login">
            <img src="" alt="" />
            <h4>Login</h4>

            {/* ###inputes## */}
            <input
              type="text"
              id="userName"
              className="form-control input-sm chat-input"
              placeholder="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}//get username input from user
            />
            <br />
            <br />

            <input
              type="password"
              id="userPassword"
              className="form-control input-sm chat-input"
              placeholder="password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}//get password input from user
            />
            <br />
            <br />
            <br />
            <div>
              <span >
                <button className="btn" onClick={handleLogin}>
                  login 
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <p>© 2023 Unique Login Form. All rights reserved | Design by Fady zarka</p>
      </div>
    </div>
    </div>
  );
}
