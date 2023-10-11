
import './Login.css';
import '../../App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// function FetchNest() {
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     axios.get('https://organic-funicular-rx7757jxw5cwqrr-3000.app.github.dev/messages')
//       .then(response => {
//         setMessage(response.data.message);
//       })
//       .catch(error => {
//         console.error('Błąd podczas pobierania komunikatu:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <p>{message}</p>
//     </div>
//   );
// }



function Login() {
 
  const [FormData,setFormData] = useState({
    login: "",
    password: ""
  })

  function handleChange(e) {
    setFormData({
      ...FormData,
      [e.target.name] : e.target.value
    })
  }

  function sendData() {
    console.log(FormData)
  }

  return (
      <div className="container">
        <div className="container-login">

          <div className="container-login-header">
            <h2>Skorzystaj z platformy <span className='login-header-span'>sociali.se</span></h2>
            <h1>Zaloguj się</h1>
          </div>

          <div className="container-login-inputs">
            <input type="text" name="login" value={FormData.login} onChange={handleChange}></input>
            <input type="password" name="password" value={FormData.password} onChange={handleChange}></input>
          </div>

          <div className="container-login-buttons">
            <button className="login-button" onClick={sendData}>Zaloguj się</button>
            <h2 className="register-button"><u>Stwórz konto</u></h2>
          </div>
        </div>
      </div>
  );
}

export default Login;
