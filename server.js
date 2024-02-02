const express = require('express');
const path = require('path');
//may need to create api for later


const PORT = process.env.PORT || 3001;

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));
//app.use('api', api): maybe for later
app.use(express.static('public'));

app.get ('/notes', (req, res) =>
res.sendFile(path.join(__dirname, 'public/notes.html')))

app.get ('*', (req, res) => 
  res.sendFile(path.join(__dirname, 'public/index.html'))
);
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
