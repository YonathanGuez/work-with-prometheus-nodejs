const GetGlobalDataPrometeus = require('./queryDB/query-prometheus');
//http://localhost:9090/api/v1/query?query=http_request_duration_seconds_bucket
const query = 'http_requests_total{route="/me"}';
//&start=2015-07-01T20:10:30.781Z&end=2015-07-01T20:11:00.781Z&step=15s
//'http://localhost:9090/api/v1/query_range?query=up&start=2015-07-01T20:10:30.781Z&end=2015-07-01T20:11:00.781Z&step=15s'
var supp_minutes = function (dt, minutes) {
  return new Date(dt.getTime() - minutes * 60000);
};
let end_query = new Date();

let start_query = supp_minutes(end_query, 60); //15s
let time_limit =
  '&start=' + start_query.toJSON() + '&end=' + end_query.toJSON() + '&step=15s';
console.log(time_limit);

GetGlobalDataPrometeus.get(`/query_range?query=${query}` + time_limit)
  .then((response) => {
    // console.log(response);
    console.log(JSON.stringify(response));
  })
  .catch((err) => {
    console.log(err);
  });
