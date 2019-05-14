FROM node:8

COPY . /src/ui-lib
WORKDIR /src/ui-lib

CMD ["npm", "run", "test:ci"]
