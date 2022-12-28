const express = require('express');

const app = express();

app.get('/clients', (req, res) => {
  const clients = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Bob Smith' },
    { id: 4, name: 'Jean Dupont' },
  ];

  res.send(clients);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
