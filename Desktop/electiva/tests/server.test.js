process.env.NODE_ENV = 'test';

const request = require('supertest');
const app = require('../server');

describe('GET /tasks', () => {
  it('debería devolver 200 OK', async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).toBe(200);
  });
});

describe('POST /tasks', () => {
  it('debería agregar una tarea', async () => {
    const res = await request(app)
      .post('/tasks')
      .send({ name: 'Test tarea' });

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Test tarea');
  });
});
