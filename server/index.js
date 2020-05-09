const {createServer} = require('http');
const {parse} = require('url');
const next = require('next');
const express = require('express');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handler = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();
    server.get('*', (req, res) => {
        return handler(req, res);
    });

    const PORT = process.env.PORT || 3000;

    server.use(handler).listen(PORT, (err) => {
        if (err) throw err;
        console.log(`App is running on Port ${PORT}`);
    })
});