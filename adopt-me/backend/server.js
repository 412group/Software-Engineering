const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
   res.send('Hello from the back-end!');
});

app.listen(PORT, () => {
   console.log(`Server running on http://localhost:${PORT}`);
});