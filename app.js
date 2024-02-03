const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db'); // Import the database module

const app = express();
const port = 3000;

// Pug configuration
app.set('view engine', 'pug');
app.set('views', './views');

// Body parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Define routes

// Home page
app.get('/', (req, res) => {
  res.render('index', { title: 'Help Desk Management System' });
});

// Users page
app.get('/users', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM users');
    const users = result.rows;
    res.render('users', { title: 'Users', users });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Tickets page
app.get('/tickets', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM tickets');
    const tickets = result.rows;
    res.render('tickets', { title: 'Tickets', tickets });
  } catch (error) {
    console.error('Error fetching tickets:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/comments', async (req, res) => {
    try {
      const result = await db.query('SELECT * FROM comments');
      const comments = result.rows;
      res.render('comments', { title: 'Comments', comments });
    } catch (error) {
      console.error('Error fetching tickets:', error);
      res.status(500).send('Internal Server Error');
    }
  });
app.get('/courses', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM courses');
    const courses = result.rows;
    res.render('courses', { title: 'Courses', courses });
  } catch (error) {
    console.error('Error fetching tickets:', error);
    res.status(500).send('Internal Server Error');
  }
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
