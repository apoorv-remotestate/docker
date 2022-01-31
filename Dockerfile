FROM node:lts-alpine
WORKDIR /docker
ENV NEXT_PUBLIC_TEST "hey"
COPY . .
RUN npm install --only=production
RUN npm run build
# CMD 'npm' 'run' 'dev'
CMD 'npm' 'start'