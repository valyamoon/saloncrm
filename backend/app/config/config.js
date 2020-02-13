"use strict";

const config = {
  local: {
    port: 4001,
    db: {
      user: "",
      password: "",
      url: "mongodb://localhost:27017/salonCRM"
    },
    baseUrl: "http://localhost:4001/",
    backendBaseUrl: "http://localhost:4001/",
    imageBaseUrl: "http://172.10.230.180:4001/",
    env: "local",
    smtp: {
      service: "gmail",
      username: "salon.sdn@gmail.com",
      password: "Smartdata@123",
      mailUsername: "",
      host: "gmail.com",
      mailUsername: "",
      verificationMail: ""
    }
  },
  staging: {
    port: 5977,
    db: {
      user: "saloncrm",
      password: "DFr533456yt",
      url: "mongodb://54.71.18.74:27017/saloncrm"
    },
    baseUrl: "http://54.71.18.74:5977/",
    backendBaseUrl: "http://54.71.18.74:5977/",
    imageBaseUrl: "http://54.71.18.74:5977",
    env: "staging",
    smtp: {
      service: "gmail",
      username: "salon.sdn@gmail.com",
      password: "Smartdata@123",
      mailUsername: "",
      host: "gmail.com",
      mailUsername: "",
      verificationMail: ""
    }
  },
  prod: {
    port: 5977,
    db: {
      user: "saloncrm",
      password: "SDfr456ty56",
      url: "mongodb://15.236.28.12:27017/saloncrm"
    },
    baseUrl: "http://15.236.28.12:5977/",
    backendBaseUrl: "http://15.236.28.12:5977/",
    imageBaseUrl: "http://15.236.28.12:5977/",
    env: "prod",
    smtp: {
      service: "gmail",
      username: "salon.sdn@gmail.com",
      password: "Smartdata@123",
      mailUsername: "",
      host: "gmail.com",
      mailUsername: "",
      verificationMail: ""
    }
  }
};
module.exports.get = function get(env) {
  return config[env] || config.default;
};
