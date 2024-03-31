document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  
  // Here you can perform validation or send data to a server for authentication
  
  if (username === 'abhijit' && password === 'abhijit453') {
    // If authentication is successful, redirect or show success message
    alert('HELLO MR. ABHIJIT');
  } else {
    // If authentication fails, show error message
    document.getElementById('error-message').innerText = 'Invalid username or password';
  }
});
// Assuming you have installed necessary packages like express and mysql
/*const express = require('express');
const mysql = require('mysql');

const app = express();

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'login_app'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected');
});

// API endpoint for user login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const sql = `SELECT * FROM users WHERE username = sonu AND password = sonu450`;
  db.query(sql, [username, password], (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Internal server error' });
    } else {
      if (result.length > 0) {
        res.json({ message: 'Login successful' });
      } else {
        res.status(401).json({ error: 'Invalid username or password' });
      }
    }
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});*/
