const express = require('express');
const slug = require('slugs');

const app = express();
const port = 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));