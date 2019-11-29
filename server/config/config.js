"use strict";
const config = {
  local: {
    port: 3000,
    db: {
      url: "mongodb://localhost:27017/salonCRM",
      // url: 'mongodb://localhost:27017/Medicolegal',
      user: "",
      password: "",
      url: "mongodb://localhost:27017/salonCRM"
    },
    baseUrl: "http://localhost:3000/",
    backendBaseUrl: "http://localhost:3000/",
    imageBaseUrl: "http://localhost:3000",
    env: "local",
    smtp: {
      service: "gmail",
      username: "mdout123@gmail.com",
      password: "smart@mdout",
      mailUsername: "medicolegal.support@hotmail.com",
      host: "smtp.gmail.com",
      mailUsername: "mdout123@gmail.com",
      verificationMail: "mdout123@gmail.com"
    },
    aws_ses: {
      accessKeyId: "",
      secretAccessKey: "",
      region: "us--1",
      fromName: "noreply@mdout.com"
    },
    xero: {
      appType: "private",
      consumerKey: "G4TVK0HKZPO1TZUMFZMARTAXOOPI19",
      consumerSecret: "YG0GTLV6XGKOVQWKT30LDU6KQTC5BS",
      privateKeyPath: ".././privatekey.pem"
    }
  },
  staging: {
    port: 5597,
    db: {
      user: "saloncrm",
      password: "DFr533456yt",
      url: "mongodb://54.71.18.74:27017/saloncrm"
    },
    baseUrl: "http://54.71.18.74:5977/",
    backendBaseUrl: "http://54.71.18.74:5977/",
    imageBaseUrl: "http://54.71.18.74:5977/",
    env: "staging",
    smtp: {
      service: "gmail",
      username: "mdout123@gmail.com",
      password: "smart@mdout",
      host: "smtp.gmail.com",
      mailUsername: "mdout123@gmail.com",
      verificationMail: "mdout123@gmail.com"
    }
  }
};

// const config = {
//   port: 5977,
//   local: {
//     DATABASE: {
//       dbname: "saloncrm",
//       host: "mongodb://54.71.18.74:27017/saloncrm",
//       port: 5977,
//       username: "saloncrm",
//       password: "DFr533456yt"
//     },
//     SECRET: "lthp@$12&*01",
//     crypto: {
//       CRYPTOALGORITHM: "aes-256-ctr",
//       CRYPTOPASSWORD: "d6F3Efeq"
//     },
//     SMTP: {
//       service: "gmail",
//       host: "smtp.gmail.com",
//       secure: true,
//       port: 465,
//       authUser: "nadimshah.sdn@gmail.com",
//       authpass: "Mobile@1234",
//       tls: {
//         rejectUnauthorized: false
//       }
//     }
//   },
//   staging: {
//     port: 5977,
//     DATABASE: {
//       dbname: "saloncrm",
//       host: "mongodb://54.71.18.74:27017/saloncrm",
//       port: 5977,
//       username: "saloncrm",
//       password: "DFr533456yt"
//     },
//     SECRET: "lthp@$12&*01",
//     crypto: {
//       CRYPTOALGORITHM: "aes-256-ctr",
//       CRYPTOPASSWORD: "d6F3Efeq"
//     },
//     SMTP: {
//       service: "gmail",
//       host: "gsmtp.gmail.com",
//       secure: true,
//       port: 465,
//       authUser: "asthad.sdn@gmail.com",
//       authpass: "Mobile@1234",
//       tls: {
//         rejectUnauthorized: false
//       }
//     }
//   },
//   live: {
//     DATABASE: {
//       dbname: "",
//       host: "mongodb://localhost:29539/",
//       port: 0,
//       username: "",
//       password: ""
//     },
//     SECRET: "lthp@$12&*01",
//     crypto: {
//       CRYPTOALGORITHM: "aes-256-ctr",
//       CRYPTOPASSWORD: "d6F3Efeq"
//     },
//     SMTP: {
//       service: "gmail",
//       host: "gsmtp.gmail.com",
//       secure: true,
//       port: 465,
//       authUser: "asthad.sdn@gmail.com",
//       authpass: "Mobile@1234",
//       tls: {
//         rejectUnauthorized: false
//       }
//     }
//   }
// };

module.exports.get = function get(env) {
  return config[env] || config.default;
};
