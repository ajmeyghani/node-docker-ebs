const FileStreamRotator = require('file-stream-rotator');
const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const path = require('path');

const app = express();
const logDirectory = path.join('/var/log', 'node-app');

// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

// create a rotating write stream
const accessLogStream = FileStreamRotator.getStream({
  date_format: 'YYYYMMDD',
  filename: path.join(logDirectory, 'access-%DATE%.log'),
  frequency: 'daily',
  verbose: false
});

// setup the logger
app.use(morgan('combined', {stream: accessLogStream}));


app.get('/api/data', (req, res) => {
  res.json({
    data: 'all set stagin 2'
  });
});


app.listen(8000, () => {
  console.log('app running at 8000');
});
