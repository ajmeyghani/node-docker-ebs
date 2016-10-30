const express = require('express');
const app = express();

app.get('/api/data', (req, res) => {
  res.json({
    data: 'all set stagin'
  });
});


app.listen(8000, () => {
  console.log('app running at 8000');
});
