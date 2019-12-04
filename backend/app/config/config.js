"use strict";

const config = {
  local: {
    port: 3001,
    db: {
      // url: 'mongodb://localhost:27017/Medicolegal'
      // url: 'mongodb://localhost:27017/Medicolegal',
      user: "",
      password: "",
      url: "mongodb://localhost:27017/salonCRM"
    },
    baseUrl: "http://localhost:3001/",
    backendBaseUrl: "http://localhost:3001/",
    imageBaseUrl: "http://localhost:3001/",
    env: "local",
    smtp: {
      service: "gmail",
      username: "",
      password: "",
      mailUsername: "",
      host: "",
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
    imageBaseUrl: "http://52.34.207.5:5977",
    env: "staging",
    smtp: {
      service: "gmail",
      username: "",
      password: "",
      host: "",
      mailUsername: "",
      verificationMail: ""
    }
  }
};
module.exports.get = function get(env) {
  return config[env] || config.default;
};
