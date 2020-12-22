FROM utexas-glib-it-docker-local.jfrog.io/nodejs-12:1.0.0
# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
RUN npm i react-scripts@3.4.3 -g --silent
COPY . .
CMD ["npm", "start"]