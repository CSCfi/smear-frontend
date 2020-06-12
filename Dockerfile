# build environment
FROM node:12.18.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . ./
RUN yarn install
RUN yarn build

# production environment
FROM nginx:1.18-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
