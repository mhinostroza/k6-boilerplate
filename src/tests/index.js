import { K6_URL_BASE } from 'core/index';
import { check, sleep } from 'k6';
import http from 'k6/http';
import { Counter } from 'k6/metrics';

export const requests = new Counter('http_reqs');

export const options = {
  stages: [
    { target: 20, duration: '10s' },
    { target: 15, duration: '5s' },
    { target: 0, duration: '2s' },
  ],
  thresholds: {
    requests: ['count < 100'],
  },
};

export default () => {
  const res = http.get(K6_URL_BASE);

  sleep(1);

  const checking = check(res, {
    'status is 200': (r) => r.status === 200,
    'response body': (r) => r.body.indexOf('Feel free to browse') !== -1,
  });
};
