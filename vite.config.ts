import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'conditional-scripts',
      transformIndexHtml(html) {
        if (process.env.VITE_METRICS_SCRIPT_URL) {
          html.replace(
            '</head>',
            '<meta name="fdwe-service" content="SMARTSMEAR" /> \
            <meta name="fdwe-scope" /> \
            <script src="%VITE_METRICS_SCRIPT_URL%" ></script> \
            </head>'
          )
        }
        if (process.env.VITE_SSO_URL) {
          html.replace(
            '</head>',
            '<link rel="stylesheet" type="text/css" href="%VITE_SSO_URL%/notification.css" /> \
            <script defer src="%VITE_SSO_URL%/notification.js"></script> \
            </head>'
          )
        }
        return html
      }
    }
  ],
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: ['smear.fd-dev.csc.fi'],
    hmr: {
      clientPort: 3000,
      host: "localhost",
      protocol: "ws",
    },
    cors: {
      origin: 'https://smear-backend.fd-dev.csc.fi',
    },
  },
  build: {
    outDir: 'build',
    manifest: true,
  },
});
