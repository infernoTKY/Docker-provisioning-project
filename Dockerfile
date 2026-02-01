FROM node:16-alpine as builder

WORKDIR '/app'

COPY package.json .
RUN npm install

COPY . .

ENV REACT_APP_NAME=production

RUN npm run build
#CMD ["npm", "run", "build"]

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
