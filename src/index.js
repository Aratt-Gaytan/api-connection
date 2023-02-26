
// index.js
const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios")
var engine = require('consolidate');


  
// set up port
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());


app.set('trust proxy', true);

// add routes
app.use(express.static(__dirname + '/public'));


app.get("/", (req, res)=>{
  res.render(__dirname+"/public/index.html");
});

app.get('/dato', async (req, res) => {
  const response = await axios.get('https://uselessfacts.jsph.pl/random.json?language=es')
  res.json(response.data)
})

app.get('/pais/:nombre', async (req, res) => {
  let pais = req.params.nombre
  const response = await axios.get(`https://restcountries.com/v3.1/name/${pais}`)
  res.json(response.data)
})

app.get('/peli/:nom/:año', async (req, res) => {
  let pelicula = req.params.nom
  let año =  req.params.año
  const response = await axios.get(`https://www.omdbapi.com/?t=${npelicula}&y=${año}&apikey=df9de972`)
  console.log(response); 
  res.json(response.data)
})


// run server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
