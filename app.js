'use strict';

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send("This is Gautam T 19MIC0092.").end();
});
app.get('/test', (req, res) => {
    res.status(200).send("This text is being displayed on request from '/test'").end();
});

const PORT = parseInt(process.env.PORT) || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

module.exports = app;
