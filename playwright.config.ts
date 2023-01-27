// playwright.config.ts
import { defineConfig } from '@playwright/test';
export default defineConfig({
  webServer: {
    command: 'npm run start',
    port: 3000,
    timeout: 520000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:3000/',
  },
});
