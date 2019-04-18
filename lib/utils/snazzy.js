/**
 * Copyright 2018 Wice GmbH

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 */

const request = require('request-promise');

const BASE_URI = 'http://canary-api.snazzyapps.de/api/iam/login';

async function getToken(config) {
  const options = {
    uri: `${BASE_URI}`,
    json: true,
    body: {
      username: config.email,
      password: config.password,
    },
  };

  try {
    const tokenRequest = await request.post(options);
    const { token } = tokenRequest;
    return token;
  } catch (err) {
    console.log(`ERROR: ${err}`);
    // throw new Error(err);
    return err;
  }
}

module.exports = {
  getToken,
};