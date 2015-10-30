# Pulling nodejs base image
FROM node:0.12

# Skip npm install if package.json didn't changed
ADD package.json /tmp/package.json

RUN cd /tmp && npm install --production

RUN mkdir -p /opt/home-automation && cp -a /tmp/node_modules /opt/home-automation

# Loading application code
WORKDIR /opt/home-automation
ADD . /opt/home-automation

# Expose API port
EXPOSE 9080

CMD ["node", "."]

