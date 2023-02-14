const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const posts = require('./routes/post.route');

app.use('/api/posts', posts);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Blog Server Express' });
});

app.use((req, res) => {
  res.status(404).json({ message: 'URL not found.' });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
