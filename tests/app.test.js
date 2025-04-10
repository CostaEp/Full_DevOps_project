const request = require('supertest');
const app = require('../src/app');
let server;

beforeAll((done) => {
  server = app.listen(4000, () => {
    console.log('Test server running on port 4000');
    done();
  });
});

afterAll((done) => {
  server.close(done);
});

describe('Health Check API', () => {
  it('should return status OK', async () => {
    const res = await request(server).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'OK');
  });
});