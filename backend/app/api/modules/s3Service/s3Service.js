const AWS = require('aws-sdk');
const config = require("../../../config/config").get(
    process.env.NODE_ENV || "local"
);

class S3Service {
    static getInstance() {
        if (!S3Service._instance) {
            S3Service._instance = new S3Service();
        }

        return S3Service._instance;
    }

    static getS3Instance() {
        if (!S3Service._s3) {
            S3Service._s3 = new AWS.S3({
                accessKeyId: config.s3.accessKeyId,
                secretAccessKey: config.s3.secretAccessKey,
            });
        }

        return S3Service._s3;
    }

    async fileUpload (fileName, fileContent) {
        const s3 = S3Service.getS3Instance();
        const params = {
            Bucket: config.s3.bucketName,
            Key: `${config.s3.bucketDir}/${fileName}`,
            Body: fileContent,
        };

        return new Promise((resolve, reject) => s3.upload(params, (err, data) => {
            if (err) {
                console.log(JSON.stringify(err));
                reject(err);
            }

            resolve();
        }));
    }
}

module.exports = S3Service;
