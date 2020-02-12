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
    imageBaseUrl: "http://localhost:4001/",
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
  live: {
    port: 5977,
    db: {
      user: "saloncrm",
      password: "DFr533456yt",
      url: "mongodb://54.71.18.74:27017/saloncrm"
    },
    baseUrl: "http://bookapp.ch/",
    backendBaseUrl: "http://bookapp.ch/",
    imageBaseUrl: "http://bookapp.ch/",
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
