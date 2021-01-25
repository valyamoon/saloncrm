'use strict';

const config = {
  local: {
    port: 4001,
    db: {
      user: 'bookapp',
      password: 'bookapp',
      url: 'mongodb+srv://cluster0.9zkw3.mongodb.net/saloncrm',
    },
    baseUrl: 'http://localhost:4001/',
    backendBaseUrl: 'http://localhost:4001/',
    imageBaseUrl: 'http://172.10.230.180:4001/',
    env: 'local',
    smtp: {
      service: 'gmail',
      username: 'salon.sdn@gmail.com',
      password: 'Smartdata@123',
      host: 'gmail.com',
      mailUsername: '',
      verificationMail: '',
    },
    s3: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      bucketName: process.env.AWS_BUCKET_NAME,
      bucketDir: process.env.AWS_BUCKET_DIR,
      bucketBaseUrl: `https://ba-upload.s3.eu-west-3.amazonaws.com/${process.env.AWS_BUCKET_DIR}`,
    },
  },
  staging: {
    port: process.env.PORT,
    db: {
      user: 'bookapp',
      password: 'bookapp',
      url: 'mongodb+srv://cluster0.9zkw3.mongodb.net/saloncrm',
    },
    baseUrl: 'https://bookapp-staging.herokuapp.com/',
    backendBaseUrl: 'https://bookapp-staging.herokuapp.com/',
    env: 'staging',
    smtp: {
      service: 'gmail',
      username: 'salon.sdn@gmail.com',
      password: 'Smartdata@123',
      host: 'gmail.com',
      mailUsername: '',
      verificationMail: '',
    },
    s3: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      bucketName: process.env.AWS_BUCKET_NAME,
      bucketDir: process.env.AWS_BUCKET_DIR,
      bucketBaseUrl: `https://ba-upload.s3.eu-west-3.amazonaws.com/${process.env.AWS_BUCKET_DIR}`,
    },
  },
  prod: {
    port: process.env.PORT,
    db: {
      user: 'bookapp',
      password: 'bookapp',
      url: 'mongodb+srv://cluster0.9zkw3.mongodb.net/saloncrm',
    },
    baseUrl: 'https://bookapp-ch-api.herokuapp.com/',
    backendBaseUrl: 'https://bookapp-ch-api.herokuapp.com/',
    env: 'prod',
    smtp: {
      service: 'gmail',
      username: 'salon.sdn@gmail.com',
      password: 'Smartdata@123',
      host: 'gmail.com',
      mailUsername: '',
      verificationMail: '',
    },
    s3: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      bucketName: process.env.AWS_BUCKET_NAME,
      bucketDir: process.env.AWS_BUCKET_DIR,
      bucketBaseUrl: `https://ba-upload.s3.eu-west-3.amazonaws.com/${process.env.AWS_BUCKET_DIR}`,
    },
  },
};

module.exports.get = function get(env) {
  return config[env] || config.default;
};
