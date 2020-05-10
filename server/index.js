const {createServer} = require('http');
const {parse} = require('url');
const fs = require('fs');
const path = require('path');
const next = require('next');
const express = require('express');

const moviesData = require('./moviesData');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handler = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.get('/api/v1/movies', (req, res) => {
        res.json(moviesData);
    });

    server.get('/api/v1/movies/:id', (req, res) => {
        const {id} = req.query;
        const movies = JSON.parse(moviesData);
        res.json(JSON.stringify(movies[movies.findIndex(({mId}) => mId === id)]));
    });

    server.post('api/v1/movies', async (req, res) => {
        const movies = JSON.parse(moviesData);
        movies.push({...req.body, id: movies.length});
        const filePath = path.join(__dirname, '/movieData.json');
        const json = JSON.stringify(movies, null, 4);
        await fs.writeFile(filePath, json, err => {
            return res.status(422).send(err);
        });
        res.json({message: 'updated'});
    });

    server.get('*', (req, res) => {
        return handler(req, res);
    });

    const PORT = process.env.PORT || 3000;

    server.use(handler).listen(PORT, (err) => {
        if (err) throw err;
        console.log(`App is running on Port ${PORT}`);
    })
});