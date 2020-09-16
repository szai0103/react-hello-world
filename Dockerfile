# Stage 0, based on Node.js, to build and compile React
FROM node:9.11.1 as node
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN npm install --silent
RUN npm install react-scripts -g --silent
COPY . /usr/src/app
RUN npm run build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.13.12-alpine
COPY --from=node /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
