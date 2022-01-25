// const client = require('prom-client');
const express = require('express');
const promMid = require('express-prometheus-middleware');
const app = express();

//Midellware
app.use('/', function (req, res, next) {
  console.log('Request URL:', req.originalUrl);
  next();
});

app.use(
  promMid({
    metricsPath: '/metrics',
    collectDefaultMetrics: true,
    requestDurationBuckets: [0.1],
    // requestLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
    // responseLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
  })
);

// Start the Express server and listen to a port
app.listen(8081, () => {
  console.log(
    'Server is running on http://localhost:8081, metrics are exposed on http://localhost:8081/metrics'
  );
});
