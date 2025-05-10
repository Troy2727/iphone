import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Check if Sentry DSN is available in environment
const hasSentryDSN = typeof process !== 'undefined' &&
                     process.env &&
                     process.env.VITE_SENTRY_DSN;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    hasSentryDSN ? sentryVitePlugin({
      org: "jsm-x9",
      project: "javascript-react",
      silent: true // Avoid warnings in CI
    }) : null
  ].filter(Boolean),

  build: {
    sourcemap: true
  }
})