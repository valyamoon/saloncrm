'use strict';
/*
 * commonQuery - commnQuery.js
 * Author: smartData Enterprises
 * 
 */
const mongoose = require('mongoose');
const CryptoJS = require('crypto-js');
const fs = require("fs");
const path = require('path');
const config = require('../config/config').get(process.env.NODE_ENV || 'staging');
var commonQuery = {};

let keySize = 256;
let ivSize = 128;
let iterations = 100;

commonQuery.encrypt = function encrypt(encText) {    
    return new Promise(function (resolve, reject) {
        try {  
            const salt = CryptoJS.lib.WordArray.random(128/8);   
            const key = CryptoJS.PBKDF2(config.SECRET, salt, {
                keySize: keySize/32,
                iterations: iterations
              });
            const iv = CryptoJS.lib.WordArray.random(128/8);  
            const encrypted = CryptoJS.AES.encrypt(encText, key, { 
                iv: iv, 
                padding: CryptoJS.pad.Pkcs7,
                mode: CryptoJS.mode.CBC                
            });
            const encryptedData = salt.toString()+ iv.toString() + encrypted.toString();   
            resolve(encryptedData);
        } catch (e) {
            console.log('dsfsdf ', e)
            reject(e);
        }
    })
}

commonQuery.decrypt = function decrypt1(decText) {
    return new Promise((resolve, reject) => {
        try {  
            const salt = CryptoJS.enc.Hex.parse(decText.substr(0, 32));
            const iv = CryptoJS.enc.Hex.parse(decText.substr(32, 32))
            const encrypted = decText.substring(64);
            
            const key = CryptoJS.PBKDF2(config.SECRET, salt, {
                keySize: keySize/32,
                iterations: iterations
                });

            const decrypted = CryptoJS.AES.decrypt(encrypted, key, { 
                iv: iv, 
                padding: CryptoJS.pad.Pkcs7,
                mode: CryptoJS.mode.CBC                
            }); 
            resolve(decrypted.toString(CryptoJS.enc.Utf8));           
        } catch (error) {
            console.log('dsfsdf ', error)
            reject(error);
        }
    })    
}

commonQuery.findoneData = function findoneData(model, condition, fetchVal) {    
    return new Promise(function (resolve, reject) {
        model.find(condition, fetchVal, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }

        });
    })
}
commonQuery.sortAllData = function sortAllData(model, field_name) {
    return new Promise(function (resolve, reject) {
        model.find().sort(field_name).exec(function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    })
}

commonQuery.lastInsertedIdPermissonId = function lastInsertedId(model) {
    return new Promise(function (resolve, reject) {
        model.findOne().sort({
            permission_id: -1
        }).exec(function (err, data) {
            if (err) {
                resolve(0);
            } else {
                if (data) {
                    var id = data.permission_id + 1;
                } else {
                    var id = 1;
                }
            }
            resolve(id);
        });
    })
}

commonQuery.InsertIntoCollection = function InsertIntoCollection(model, obj) {
    return new Promise(function (resolve, reject) {
        new model(obj).save(function (err, insertedData) {
            if (err) {
                console.log("errrrrrrrr", err)
                reject(err);
            } else {
                // console.log("insertedData", insertedData)
                resolve(insertedData);
            }
        });
    })
}

commonQuery.fileUpload = function fileUpload(imagePath, buffer) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path.resolve(imagePath), buffer, function (err) {
            if (err) {
                reject(err);
            } else {
                resolve('uploaded');
            }
        });
    });
}

commonQuery.deleteFile = function deleteFile(filePath) {
    return new Promise(function (resolve, reject) {
        fs.unlink(filePath, function (err) {
            if (err) {
                reject(err);
            } else {
                console.log("Success fully Deleted ");
                resolve("success");
            }
        });
    })
}

commonQuery.updateOneDocument = function updateOneDocument(model, updateCond, updateData) {
    return new Promise(function (resolve, reject) {
        model.findOneAndUpdate(updateCond, {
                $set: updateData
            }, {
                new: true
            })
            .lean().exec(function (err, updatedData) {
                if (err) {
                    console.log("errerrerrerrerrerr", err)
                    reject(0);
                } else {
                    console.log("updatedData", updatedData)
                    resolve(updatedData);
                }
            });
    })
}


commonQuery.updateOneDocumentWithOutInserting = (model, updateCond, updateData) => {
    return new Promise((resolve, reject) => {
        model.findOneAndUpdate(updateCond, {
            $set: updateData,
        }, {useFindAndModify: false}).exec((err, updatedData) => {
            if (err) {
                console.log(err);
                return reject(0);
            } else {
                return resolve(updatedData);
            }
        });
    })
}


commonQuery.updateAllDocument = function updateAllDocument(model, updateCond, userUpdateData) {
    return new Promise(function (resolve, reject) {
        model.update(updateCond, {
                $set: userUpdateData
            }, {
                multi: true
            })
            .lean().exec(function (err, userInfoData) {
                if (err) {
                    resolve(0);
                } else {
                    resolve(userInfoData);
                }
            });
    })
}


commonQuery.fetch_all = function fetch_all(model, cond = {}, fetchd = {}) {
    return new Promise(function (resolve, reject) {
        model.find(cond, fetchd).exec(function (err, userData) {
            if (err) {
                console.log("errrrrrr", err)
                reject(err);
            } else {

                resolve(userData);
            }

        });
    })
}
commonQuery.fetch_all_by_sort = function fetch_all_by_sort(model, cond = {}, fetchd = {}) {
    return new Promise(function (resolve, reject) {
        model.find(cond, fetchd).sort('createdAt').exec(function (err, userData) {
            if (err) {
                console.log("errrrrrr", err)
                reject(err);
            } else {

                resolve(userData);
            }

        });
    })
}
commonQuery.fetch_one = function fetch_one(model, cond = {}, fetchd = {}) {
    return new Promise(function (resolve, reject) {
        model.findOne(cond, fetchd).exec(function (err, userData) {
            if (err) {
                console.log("errrrrrr", err)
                reject(err);
            } else {

                resolve(userData);
            }

        });
    })
}

commonQuery.fetch_all_distinct = function fetch_all_distinct(model, ditinctVal, cond) {
    return new Promise(function (resolve, reject) {
        model.distinct(ditinctVal, cond).exec(function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }

        });
    })
}


commonQuery.countData = function countData(model, cond) {
    return new Promise(function (resolve, reject) {
        model.countDocuments(cond).exec(function (err, userData) {
            if (err) {
                reject(err);
            } else {
                resolve(userData);
            }

        });
    })
}

commonQuery.fetchAllLimit = function fetchAllLimit(query) {
    return new Promise(function (resolve, reject) {
        query.exec(function (err, userData) {
            if (err) {
                reject(err);
            } else {
                resolve(userData);
            }
        });
    })
}



commonQuery.uniqueInsertIntoCollection = function uniqueInsertIntoCollection(model, obj) {
    return new Promise(function (resolve, reject) {
        model.update(
                obj, {
                    $setOnInsert: obj
                }, {
                    upsert: true,
                    new: true,
                    setDefaultsOnInsert: true
                })
            .exec(function (err, data) {
                if (err) {
                    resolve(0);
                } else {
                    resolve(data);
                }
            });
    })
}


commonQuery.deleteOneDocument = function deleteOneDocument(model, cond) {
    return new Promise(function (resolve, reject) {
        model.deleteOne(cond).exec(function (err, userData) {
            if (err) {
                resolve(0);
            } else {
                resolve(1);
            }

        });
    })
}

commonQuery.InsertManyIntoCollection = function InsertManyIntoCollection(model, obj) {
    return new Promise(function (resolve, reject) {
        model.insertMany(obj, function (error, inserted) {
            if (error) {
                console.log('---------------------', error)
                resolve(error);
            } else {
                resolve(inserted);
            }

        });
    })
}


commonQuery.deleteManyfromCollection = function deleteManyfromCollection(model, obj) {
    return new Promise(function (resolve, reject) {
        model.deleteMany(obj, function (error, inserted) {
            if (error) {
                console.log("Reject", error);
                resolve(0);
            } else {
                console.log("Resolved");
                reject(1);
            }

        });
    })
}

commonQuery.mongoObjectId = function (data) {
    if (data && data !== null && data !== undefined) {
        return mongoose.Types.ObjectId(data);
    } else {
        return false;
    }
}
commonQuery.multiAggregateFunc = function multiAggregateFunc(model, aggregatQuery) {
    return new Promise(function (resolve, reject) {

        model.aggregate(aggregatQuery).exec(function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }

        });
    })
}

commonQuery.rollbackData = function() {
    return new Promise((reject, resolve) => {
        const session =  mongoose.startSession({defaultTransactionOptions: {
            readConcern: { level: 'local' },
            writeConcern: { w: 'majority' },
            readPreference: 'primary'
        }});
        if(session)
            resolve(session);
        reject('Unable to start session')        ;
    });
}
module.exports = commonQuery;