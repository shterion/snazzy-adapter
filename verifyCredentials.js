/**
 * Copyright 2019 Wice GmbH

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

const { getToken } = require('./lib/utils/snazzy');

async function verifyCredentials(credentials, cb) {
  console.log('Credentials passed for verification %j', credentials);

  try {
    const cfg = {
      username: credentials.username,
      password: credentials.password,
    };

    const token = await getToken(cfg);

    if (token) {
      cb(null, { verified: true });
      console.log('Credentials verified successfully');
      return true;
    }
    throw new Error('Error in validating credentials!');
    return false;
  } catch (e) {
    console.log(`${e}`);
    throw new Error(e);
  }
}

module.exports = verifyCredentials;
