"use strict";
// const config = {
//   local: {
//     port: 3000,
//     db: {
//       // url: 'mongodb://localhost:27017/Medicolegal'
//       // url: 'mongodb://localhost:27017/Medicolegal',
//       user: "",
//       password: "",
//       url: "mongodb://54.71.18.74:27017/salonCRM"
//     },
//     baseUrl: "http://localhost:1212/",
//     backendBaseUrl: "http://localhost:3000/",
//     imageBaseUrl: "http://localhost:3000",

//     // baseUrl: 'http://172.10.185.83:4200/',
//     // backendBaseUrl: 'http://172.10.185.83:10010/',
//     // imageBaseUrl: 'http://172.10.185.83:10010',

//     // 172.10.185.83
//     env: "local",
//     smtp: {
//       service: "gmail",
//       username: "mdout123@gmail.com",
//       password: "smart@mdout",
//       mailUsername: "medicolegal.support@hotmail.com",
//       host: "smtp.gmail.com",
//       mailUsername: "mdout123@gmail.com",
//       verificationMail: "mdout123@gmail.com"
//     },
//     aws_ses: {
//       accessKeyId: "",
//       secretAccessKey: "",
//       region: "us--1",
//       fromName: "noreply@mdout.com"
//     },
//     xero: {
//       appType: "private",
//       consumerKey: "G4TVK0HKZPO1TZUMFZMARTAXOOPI19",
//       consumerSecret: "YG0GTLV6XGKOVQWKT30LDU6KQTC5BS",
//       privateKeyPath: ".././privatekey.pem"
//     }
//   },

//   staging: {
//     port: 5958,
//     db: {
//       user: "saloncrm",
//       password: "DFr533456yt",
//       url: "mongodb://54.71.18.74:27017/saloncrm"
//     },
//     baseUrl: "http://54.71.18.74:5977/",
//     backendBaseUrl: "http://54.71.18.74:5977/",
//     imageBaseUrl: "http://54.71.18.74:5977/",
//     env: "staging",
//     smtp: {
//       service: "gmail",
//       username: "mdout123@gmail.com",
//       password: "smart@mdout",
//       host: "smtp.gmail.com",
//       mailUsername: "mdout123@gmail.com",
//       verificationMail: "mdout123@gmail.com"
//     },
//     aws_ses: {
//       accessKeyId: "AKIAJ5NVWXUZ3WEAPJHA",
//       secretAccessKey: "BPrKguLa4lTlTL7WxZUqnVhj+Ri5GtXaiOaYGlb8+aKe",
//       region: "us-east-1",
//       fromName: "noreply@mdout.com"
//     }
//   },

//   dev: {
//     port: 10010,
//     db: {
//       user: "MDout",
//       password: "MDout!!$@#2018",
//       url: "mongodb://localhost:27017/MDout"
//     },
//     baseUrl: "https://dev.mdout.com/",
//     backendBaseUrl: "https://dev.mdout.com/",
//     imageBaseUrl: "https://dev.mdout.com",
//     env: "dev",
//     smtp: {
//       service: "gmail",
//       username: "mdout123@gmail.com",
//       password: "smart@mdout",
//       host: "smtp.gmail.com",
//       mailUsername: "mdout123@gmail.com",
//       verificationMail: "mdout123@gmail.com"
//     },
//     aws_ses: {
//       accessKeyId: "AKIAJJCLRMCO2N7YE5MA",
//       secretAccessKey: "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",
//       region: "us-west-2",
//       fromName: "noreply@mdout.com"
//     }
//   },

//   prod: {
//     port: 5162,
//     db: {
//       user: "MDout",
//       password: "MDout!!$@#2018",
//       url: "mongodb://localhost:27017/MDout"
//     },
//     baseUrl: "https://www.mdout.com/",
//     backendBaseUrl: "https://www.mdout.com/",
//     imageBaseUrl: "https://www.mdout.com",
//     env: "prod",
//     smtp: {
//       service: "gmail",
//       username: "mdout123@gmail.com",
//       password: "smart@mdout",
//       host: "smtp.gmail.com",
//       mailUsername: "mdout123@gmail.com",
//       verificationMail: "mdout123@gmail.com"
//     },
//     aws_ses: {
//       accessKeyId: "AKIAJJCLRMCO2N7YE5MA",
//       secretAccessKey: "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",
//       region: "us-west-2",
//       fromName: "noreply@mdout.com"
//     }
//   }
// };

const config = {
  local: {
    DATABASE: {
      dbname: "salonCRM",
      host: "mongodb://localhost:27017/",
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
      host: "smtp.gmail.com",
      secure: true,
      port: 465,
      authUser: "nadimshah.sdn@gmail.com",
      authpass: "Mobile@1234",
      tls: {
        rejectUnauthorized: false
      }
    }
  },
  staging: {
    port: 5977,
    DATABASE: {
      dbname: "saloncrm",
      host: "mongodb://54.71.18.74:27017/saloncrm",
      port: 5977,
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
