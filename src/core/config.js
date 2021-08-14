/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
const { K6_URL_BASE } = JSON.parse(open(__ENV.MY_CONFIG_FILE));

export { K6_URL_BASE };
