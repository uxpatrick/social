
import './Login.css';
import '../../App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FetchNest() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('https://organic-funicular-rx7757jxw5cwqrr-3000.app.github.dev/messages')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('Błąd podczas pobierania komunikatu:', error);
      });
  }, []);

  return (
    <div>
      <p>{message}</p>
    </div>
  );
}



function Login() {
 
  return (
      <div className="container">
        <div className="container-login">

          <div className="container-login-header">
            <h2>Skorzystaj z platformy sociali.se</h2>
            <h1>Zaloguj się</h1>
          </div>

          <div className="container-login-inputs">
            <input type="text" name="username"></input>
            <input type="password" name="password"></input>
          </div>

          <div className="container-login-buttons">
            <button>Zaloguj się</button>
            <h2>Lub stwórz konto</h2>
          </div>
          <FetchNest/>
        </div>
      </div>
  );
}

export default Login;
