FROM node:8

COPY . /src/de-components
WORKDIR /src/de-components
RUN npm install

CMD ["npm", "run", "test:ci"]
