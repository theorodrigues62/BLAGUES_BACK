const express = require('express');
const app = express();
const jokes = require('./jokes.json');

// Route pour consulter toutes les blagues
app.get('/api/jokes', (req, res) => {
  res.json(jokes);
});

// Route pour consulter une blague par id
app.get('/api/jokes/:id', (req, res) => {
  const jokeId = req.params.id;
  const joke = jokes.find(j => j.id === jokeId);
  if (!joke) {
    res.status(404).json({ error: 'Blague introuvable' });
  } else {
    res.json(joke);
  }
});

// Route pour consulter une blague au hasard
app.get('/api/jokes/random', (req, res) => {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  res.json(randomJoke);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});