const express = require('express');
const hbs = require("hbs");
const app = express();
const path = require("path");
const scripts = [{ script: '/scripts/midi.js'}]
const { notes, scales, steps, strings, octaves } = require('./private/data');

app.use(express.static('public'));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
hbs.registerPartials(__dirname + "/views/partials");
console.log(__dirname + "/views/partials");
app.get('/', (request, response, next) => {
    let data = {
        notes: notes,
        scales: scales,
        steps: steps,
        strings: strings
    };
    console.log(request);
    response.render('index', data);
});

app.get('/home', (request, response, next) => {
    console.log(request);
    response.sendFile(__dirname + '/views/home-page.html');
});

app.get('/cat', (request, response, next) => {
    console.log(request);
    response.sendFile(__dirname + '/views/cat-page.html');
});

app.get('/notes', (request, response, next) => {
    console.log(request);
    let data = {
        notes: notes
    };
    response.render('notes', data);
});

app.get('/scales', (request, response, next) => {
    console.log(request);
    let data = {
        scales: scales,
    };
    response.render('scales', data);
});

app.get('/search', (request, response, next) => {
  console.log(request.query);
  let data = {
    notes : octaves.map((octave, index) => notes.map(note => ({
      name: note.name + index,
      octave: index,
      frequency: note.frequency*octave
    }))).flat(),
    scripts: scripts
  };
  response.render('notes', data );

});

app.listen(3000, () => console.log('My first app listening on port 3000! '));