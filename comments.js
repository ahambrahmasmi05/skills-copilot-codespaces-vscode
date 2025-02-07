// Create web server
const express = require('express');
const app = express();

// Load comments
const comments = require('./comments.json');

// Create route to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create route to get comments by user
app.get('/comments/user/:username', (req, res) => {
  const username = req.params.username;
  const userComments = comments.filter(comment => {
    return comment.username === username;
  });
  res.json(userComments);
});

// Create route to get comments by id
app.get('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const comment = comments.find(comment => comment.id === id);
  res.json(comment);
});

// Start server
app.listen(4001, () => {
  console.log('Server listening on port 4001');
});