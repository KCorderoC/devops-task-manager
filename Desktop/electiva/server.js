const express = require('express');
const app = express();
app.use(express.json());

// Servir frontend
app.use(express.static('public'));

const port = 3000;

let tasks = []; // base de datos temporal

// Endpoints CRUD
app.get('/tasks', (req, res) => res.json(tasks));
app.post('/tasks', (req, res) => {
    const task = { id: tasks.length + 1, name: req.body.name };
    tasks.push(task);
    res.status(201).json(task);
});
app.delete('/tasks/:id', (req, res) => {
    tasks = tasks.filter(t => t.id != req.params.id);
    res.sendStatus(204);
});

// Health check
app.get('/health', (req, res) => res.send('OK'));

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
