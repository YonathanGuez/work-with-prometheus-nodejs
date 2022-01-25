require('dotenv').config();

let RequestClient = require('reqclient').RequestClient;
const IP_PROMETHEUS = process.env.DOCKER_IP;

let GetGlobalDataPrometeus = new RequestClient({
  baseUrl: 'http://' + IP_PROMETHEUS + ':9000/api/v1',
});

module.exports = GetGlobalDataPrometeus;
