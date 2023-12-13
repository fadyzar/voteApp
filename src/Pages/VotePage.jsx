import React, { useState } from 'react';
import './VotePage.css';
import { useNavigate } from 'react-router-dom';
export default function VotePage() {
  const [VoteCounterN, setVoteCounterN] = useState(0);
  const [VoteCounterR, setVoteCounterR] = useState(0);
  const [VoteCounterM, setVoteCounterM] = useState(0);
  const [VoteCounterMb, setVoteCounterMb] = useState(0);
  const navigate = useNavigate();
  

  function handleVoteCounterNeymar() {
    setVoteCounterN(VoteCounterN + 1);
    if(VoteCounterN === 1){
        setVoteCounterN(VoteCounterN - 1);
    }
    
  }
  function handleVoteCounterMbappe() {
    setVoteCounterMb(VoteCounterMb + 1);
    if(VoteCounterMb === 1 ) {
        setVoteCounterMb(VoteCounterMb - 1);
    }
  }
  function handleVoteCounterMessi() {
    setVoteCounterM(VoteCounterM + 1);
    if(VoteCounterM === 1){
        setVoteCounterM(VoteCounterM - 1);
    }
  }
  function handleVoteCounterRonaldo() {
    setVoteCounterR(VoteCounterR + 1);
    if(VoteCounterR === 1){
        setVoteCounterR(VoteCounterR - 1);
    }
  }

  return (

    <div className='vote-page page' >
      {/* Dropdown Navbar */}
      <div className="dropdown">
        <button className="dropbtn">menu</button>
        <div className="dropdown-content">
        <button onClick={() => navigate('/')}>Logout</button>
        <br />
        <button onClick={() => navigate('/admin')}>Admin</button>
          
        </div>
      </div>

      {/* Vote cards */}
      <div className="containerVote page">
        <div className="row">
          <div className="column">
            <div className="card messi"></div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <button onClick={handleVoteCounterMessi}>VOTE for Messi</button>
            <h2>{VoteCounterM}</h2>
            
          </div>

          <div className="column">
            <div className="card ronaldo"></div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <button onClick={handleVoteCounterRonaldo}>VOTE for Ronaldo</button>
            
            <h2>{VoteCounterR}</h2>
          </div>

          <div className="column">
            <div className="card neymar"></div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <button onClick={handleVoteCounterNeymar}>VOTE for Neymar</button>
            <h2>{VoteCounterN}</h2>
          </div>

          <div className="column">
            <div className="card mbappe"></div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <button onClick={handleVoteCounterMbappe}>VOTE for Mbappe</button>
            <h2>{VoteCounterMb}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
