FROM node:lts-alpine
WORKDIR /docker
ARG NEXT_PUBLIC_TEST_VAR
ENV NEXT_PUBLIC_TEST ${NEXT_PUBLIC_TEST_VAR}
COPY . .
RUN npm install --only=production
RUN npm run build
# CMD 'npm' 'run' 'dev'
CMD 'npm' 'start'