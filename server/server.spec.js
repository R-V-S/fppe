const data = require('./data.json')
const chai = require('chai')
const app = require('./server')
const expect = chai.expect
chai.use(require('chai-http'))

describe('server.js', () => {
  it('responds to a GET at /api/products', () => {
    const agent = chai.request.agent(app)
    return agent.get('/api/products').then((response) => {
      expect(response).to.have.status(200);
      expect(response.body).to.eql(data);
    });
  });
});