const express = require('express')
const app = express()
const port = 3000
app.use(express.json());

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

// --- GET ---
app.get('/users', (req, res) => {
  res.status(200).json({ status: 'success', data: [{ id: 1, name: 'Anne' }] });
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  if (id === '1') {
    res.status(200).json({ status: 'success', data: { id: 1, name: 'Anne' } });
  } else {
    res.status(404).json({ status: 'error', message: 'User not found' });
  }
});

// --- POST ---
app.post('/users', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ status: 'error', message: 'Name is required' });
  }
  res.status(201).json({ status: 'success', data: req.body });
});

app.post('/products', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ status: 'error', message: 'Name is required' });
  }
  res.status(201).json({ status: 'success', data: req.body });
});

// --- PUT ---
app.put('/users/:id', (req, res) => {
  res.status(200).json({ status: 'success', data: { id: req.params.id, ...req.body } });
});

app.put('/products/:id', (req, res) => {
  res.status(200).json({ status: 'success', data: { id: req.params.id, ...req.body } });
});

// --- PATCH ---
app.patch('/users/:id', (req, res) => {
  res.status(200).json({ status: 'success', data: { id: req.params.id, ...req.body } });
});

app.patch('/products/:id', (req, res) => {
  res.status(200).json({ status: 'success', data: { id: req.params.id, ...req.body } });
});

// --- DELETE ---
app.delete('/users/:id', (req, res) => {
  res.status(204).send();
});

app.delete('/products/:id', (req, res) => {
  res.status(204).send();
});

// --- TEST ERROR 500 ---
app.get('/error', (req, res, next) => {
  next(new Error('Test error'));
});

// --- MIDDLEWARE: 404 ---
app.use((req, res, next) => {
  res.status(404).json({ status: 'error', message: "Route not found" });
});

// --- MIDDLEWARE: 500 ---
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ status: 'error', message: 'Server error' });
});

// --- MIDDLEWARE: Request logger ---
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});