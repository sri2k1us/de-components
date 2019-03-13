FROM node:8

COPY . /src/de-components
WORKDIR /src/de-components

CMD ["npm", "run", "test:ci"]
