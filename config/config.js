'use strict';

const config = {
    local: {        
        DATABASE: {
            dbname: 'local',
            host: 'mongodb://localhost:27017/',
            port: 0,
            username: '',
            password: ''
        },
        SECRET: 'lthp@$12&*01',
        crypto: {
            CRYPTOALGORITHM: "aes-256-ctr",
            CRYPTOPASSWORD: "d6F3Efeq"
        },
        SMTP: {
            service: 'gmail',
            host: 'smtp.gmail.com',
            secure: true,
            port: 465,
            authUser: 'asthad.sdn@gmail.com',
            authpass: 'Mobile@1234',
            tls: {
                rejectUnauthorized: false
            }
        }
    },
    staging: {        
        DATABASE: {
            dbname: 'howdykiosk',
            host: 'mongodb://54.71.18.74:27017/',
            port: 0,
            username: 'howdykiosk',
            password: 'rt543erw290'
        },
        SECRET: 'lthp@$12&*01',
        crypto: {
            CRYPTOALGORITHM: "aes-256-ctr",
            CRYPTOPASSWORD: "d6F3Efeq"
        },
        SMTP: {
            service: 'gmail',
            host: 'gsmtp.gmail.com',
            secure: true,
            port: 465,
            authUser: 'asthad.sdn@gmail.com',
            authpass: 'Mobile@1234',
            tls: {
                rejectUnauthorized: false
            }
        }
    },
    live: {        
        DATABASE: {
            dbname: '',
            host: 'mongodb://localhost:29539/',
            port: 0,
            username: '',
            password: ''
        },
        SECRET: 'lthp@$12&*01',
        crypto: {
            CRYPTOALGORITHM: "aes-256-ctr",
            CRYPTOPASSWORD: "d6F3Efeq"
        },
        SMTP: {
            service: 'gmail',
            host: 'gsmtp.gmail.com',
            secure: true,
            port: 465,
            authUser: 'asthad.sdn@gmail.com',
            authpass: 'Mobile@1234',
            tls: {
                rejectUnauthorized: false
            }
        },
    }
};
module.exports.get = function get(env) {
    return config[env] || config.default;
}
