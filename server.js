const express = require('express');
const app = express();

app.get('/api/data', (req, res) => {
  res.json({
    data: 'all set'
  });
});


app.listen(8185, () => {
  console.log('app running at 8185');
});
