const express = require('express');
const conn = require('./db');
const dotenv = require('dotenv');
const ejs = require('ejs');
const Post = require('./models/Post');

dotenv.config();

const app = express();

//Connect to MongoDB
conn();

//Template Engine
app.set('view engine', 'ejs');

//Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.get('/', async (req, res) => {
  const posts = await Post.find();
  res.render('index', { posts });
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/add', (req, res) => {
  res.render('add');
});
app.post('/posts', async (req, res) => {
  console.log(req.body);
  await Post.create(req.body);
  res.redirect('/');
});
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
