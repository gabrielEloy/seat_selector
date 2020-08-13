FROM node:12.14.0

RUN mkdir /app

ADD package.json application/
ADD yarn.lock application/

COPY package.json ./

COPY yarn.lock ./

RUN yarn install
ADD . /app

COPY . .

EXPOSE 3000

CMD ["yarn","start"]
