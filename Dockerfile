# build environment
FROM docker.io/library/node:12.18.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . ./
RUN yarn install
RUN yarn build

# production environment
FROM docker.io/nginxinc/nginx-unprivileged:1.18-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
