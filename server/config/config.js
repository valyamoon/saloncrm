"use strict";

const config = {
  local: {
    DATABASE: {
      dbname: "saloncrm",
      host: "mongodb://localhost:27017/salonCRM",
      port: 3000,
      username: "",
      password: ""
    },
    SECRET: "lthp@$12&*01",
    crypto: {
      CRYPTOALGORITHM: "aes-256-ctr",
      CRYPTOPASSWORD: "d6F3Efeq"
    },
    SMTP: {
      service: "gmail",
      host: "smtp.gmail.com",
      secure: true,
      port: 465,
      authUser: "nadimshah.sdn@gmail.com",
      authpass: "Mobile@1234",
      tls: {
        rejectUnauthorized: false
      }
    },
    port: 3000
  },
  staging: {
    port: 5977,
    DATABASE: {
      dbname: "saloncrm",
      host: "54.71.18.74",
      port: 27017,
      username: "saloncrm",
      password: "DFr533456yt"
    },
    SECRET: "lthp@$12&*01",
    crypto: {
      CRYPTOALGORITHM: "aes-256-ctr",
      CRYPTOPASSWORD: "d6F3Efeq"
    },
    SMTP: {
      service: "gmail",
      host: "gsmtp.gmail.com",
      secure: true,
      port: 465,
      authUser: "asthad.sdn@gmail.com",
      authpass: "Mobile@1234",
      tls: {
        rejectUnauthorized: false
      }
    }
  },
  live: {
    DATABASE: {
      dbname: "",
      host: "mongodb://localhost:29539/",
      port: 0,
      username: "",
      password: ""
    },
    SECRET: "lthp@$12&*01",
    crypto: {
      CRYPTOALGORITHM: "aes-256-ctr",
      CRYPTOPASSWORD: "d6F3Efeq"
    },
    SMTP: {
      service: "gmail",
      host: "gsmtp.gmail.com",
      secure: true,
      port: 465,
      authUser: "asthad.sdn@gmail.com",
      authpass: "Mobile@1234",
      tls: {
        rejectUnauthorized: false
      }
    }
  }
};

module.exports.get = function get(env) {
  return config[env] || config.default;
};
