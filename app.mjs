import express from 'express';
import log from '@ajar/marker';
import cors from 'cors';
import morgan from 'morgan';

// const { PORT = 3333, HOST = '0.0.0.0' } = process.env;

const PORT = 3333;
const HOST = '0.0.0.0';


const app = express()

app.use( express.json() );
app.use( cors() );
app.use( morgan('dev') );

app.get('/',  (req, res) => {
    res.status(200).send('Hello Express!')
})

app.get('/users', (req, res) => {
    res.status(200).send('Get all Users')
})
// /search?food=burger&town=ashdod
app.get('/search', (req, res) => {
    log.v('town',req.query.town)
    res.status(200).json(req.query)
})

app.post('/game', (req, res) => {
    log.v('score',req.body.score)
    res.status(200).json(req.body)
})

app.use('*',  (req, res) => {
    res.status(404).send('My 404 not found')
})

app.listen(PORT, HOST,  ()=> {
    log.magenta(`🌎  listening on`,`http://${HOST}:${PORT}`);
});

