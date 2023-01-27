import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  // the rest of the options
  webServer: {
    command: 'yarn start',
    url: 'http://localhost:3000/',
    timeout: 120000,
  },
  use: {
    baseURL: 'http://localhost:3000/',
  },
  // the rest of the options
};
export default config;
