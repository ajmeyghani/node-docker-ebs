FROM aminmeyghani/node6-yarn
RUN node --version
RUN mkdir -p /usr/src/app
ADD . /usr/src/app
WORKDIR /usr/src/app
RUN yarn install
EXPOSE 8000
ENTRYPOINT ["node", "/usr/src/app/server.js"]
