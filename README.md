# SmartSMEAR Frontend

React/TypeScript frontend for the [SmartSMEAR](https://smear.avaa.csc.fi/) research data service — a portal for browsing and downloading atmospheric and environmental measurement data from Finnish research stations.

## Local development

```bash
yarn install
yarn dev
```

The app runs at `http://localhost:3000`.

## Environment variables

Copy `.env.template` to `.env` and fill in the values.

| Variable                | Required | Description |
| ----------------------- | -------- | ----------- |
| `VITE_API_URL`          | yes      | URL of the backend API. Default: `http://localhost:8080`. Dev backend in Rahti: `https://smear-backend-dev.2.rahtiapp.fi` |
| `VITE_METRICS_SCRIPT_URL` | no     | URL of the Fairdata metrics tracking script. Tracking is disabled when not set. |
| `VITE_SSO_URL`          | no       | URL of the Fairdata SSO server. Login functionality is disabled when not set. |
| `VITE_NEW_UI`           | no       | Set to `true` to enable new SmartSMEAR features (login, etc.). |
| `HOST`                  | no       | FQDN of the frontend server. Required when using Nginx with SSO. |

## Scripts

| Command           | Description |
| ----------------- | ----------- |
| `yarn dev`        | Start development server |
| `yarn build`      | Type-check and build for production |
| `yarn preview`    | Preview the production build locally |
| `yarn lint`       | Run ESLint |
| `yarn prettier`   | Format source files |

## Docker

### Development

```bash
docker build . -f Dockerfile.dev -t smear-frontend:dev
docker run --rm --name smear-frontend -v $PWD/src:/app/src -p 3000:3000 -d -it smear-frontend:dev
```

### Production

Environment variables are baked in at build time, so set them in `.env` before building.

```bash
docker build . -f Dockerfile -t smear-frontend:prod
docker run --rm --name smear-frontend -p 8081:8080 -d -it smear-frontend:prod
```