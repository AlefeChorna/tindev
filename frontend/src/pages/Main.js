import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import io from 'socket.io-client';

import api from '../services/api';

import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';
import itsamatch from '../assets/itsamatch.png';

import './Main.css';

export default function Main({ match }) {
  const [users, setUsers] = useState([]);
  const [matchDev, setMatchDev] = useState(null);

  useEffect(() => {
    const socket = io('http://localhost:3333', {
      query: { user: match.params.id }
    });

    socket.on('match', dev => {
      setMatchDev(dev);
    });
  }, [match.params.id]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('devs', {
        headers: { user: match.params.id }
      });

      setUsers(response.data);
    }

    loadUsers();
  }, [match.params.id]);

  async function handleLike(_prId) {
    await api.post(`/devs/${_prId}/likes`, null, {
      headers: { user: match.params.id }
    });

    setUsers(users.filter(user => user._id !== _prId));
  }

  async function handleDislike(_prId) {
    await api.post(`/devs/${_prId}/dislikes`, null, {
      headers: { user: match.params.id }
    });

    setUsers(users.filter(user => user._id !== _prId));
  }

  function closeMatchDev(_prState) {
    setMatchDev(_prState);
  }

  return (
    <div className="main-container">
      <Link to="/">
        <img src={logo} alt="TimDev" />
      </Link>

      { users.length ? (
          <ul>
            {users.map(user => (
              <li key={user._id}>
                <img
                  className="avatar"
                  src={user.avatar}
                  alt="TimDev" />
    
                <footer>
                  <strong>{user.name}</strong>
                  <p>{user.bio}</p>
                </footer>
    
                <div className="buttons">
                  <button 
                    type="button" 
                    onClick={() => handleDislike(user._id)}
                  >
                    <img src={dislike} alt="Dislike" />
                  </button>
    
                  <button 
                    type="button" 
                    onClick={() => handleLike(user._id)}
                  >
                    <img src={like} alt="Like" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="empty">
            Acabou :(
          </div>
        )}

        {matchDev && (
          <div className="match-container">
            <img src={itsamatch} alt="It's a match" />
            <img className="match-avatar" src={matchDev.avatar} alt="Developer" />
            <strong>{matchDev.name}</strong>
            <p>{matchDev.bio}</p>
            <button type="button" onClick={() => closeMatchDev(null)}>FECHAR</button>
          </div>  
        )}
    </div>
  );
}