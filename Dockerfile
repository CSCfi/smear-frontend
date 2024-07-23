# build environment
FROM node:12.18.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
# For deployment, uncomment these REACT_APP_ lines and define as required
# ENV REACT_APP_API_URL=https://smear-backend.2.rahtiapp.fi/
# ENV REACT_APP_METRICS_SCRIPT_URL=https://metrics.fairdata.fi/fdwe.js

COPY . ./
RUN yarn install
RUN yarn build

# production environment
FROM nginxinc/nginx-unprivileged:1.18-alpine
# For deployment, uncomment these REACT_APP_ lines and define as required
# ENV REACT_APP_API_URL=https://smear-backend.2.rahtiapp.fi/
# ENV REACT_APP_METRICS_SCRIPT_URL=https://metrics.fairdata.fi/fdwe.js
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
