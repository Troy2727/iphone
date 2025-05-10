import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    process.env.VITE_SENTRY_DSN ? sentryVitePlugin({
      org: "jsm-x9",
      project: "javascript-react",
      silent: true // Avoid warnings in CI
    }) : null
  ].filter(Boolean),

  build: {
    sourcemap: true
  }
})