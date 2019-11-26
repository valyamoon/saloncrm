'use strict';
const Store = require('../../model/stores'),
    commonQuery = require('../../../lib/commonQuery'),
    constants = require('../../../lib/constants'),
    validators = require('../../../lib/validators'),
    response = require('../../../lib/response');
    const mongoose = require('mongoose');
module.exports = {
    storeList,
    addStore,
    updateStore,
    deleteStore,
    storeFetchOne,
    getStore
}

function storeList(req, res, next) {
   async function store_list() {
    try {       
        const condition ={

        };

        
        
        commonQuery.fetch_all(Store, condition)
          .then((result) => {
              if (result) {                  
                  return response.Response(res, result);
              } else {
                  return response.InternalServer(res);
              }
          }).catch((err) => {
              console.log(err);
              return response.Unauthorized(res);
          })
          
    } catch (error) {
        console.log('error', err);
        return response.Unauthorized(res); 
    }
   } store_list().then(data=>{}).catch(err=> console.log('Error in async', err));
}

function getStore(req, res, next) {
    async function getStore() {
        try {
            console.log('getStore', req.body)
            let store = await commonQuery.findoneData(Store, {_id: req.body.id},{})
            // if(store) {

            // }else{}
            .then((result) => {
                if (result) {
                    // console.log('result', result);
                    return response.Response(res, result);
                } else {
                    return response.InternalServer(res);
                }
            }).catch((err) => {
                console.log(err);
                return response.Unauthorized(res);
            })
        } catch (error) {
            console.log('error', err);
            return response.Unauthorized(res); 
        }
       } getStore();
}

function storeFetchOne(req, res, next) {
    async function store_list() {
     try {   
         console.log("bgnwjbgvhbdfeh")
         
           
     } catch (error) {
         console.log('error', err);
         return response.Unauthorized(res); 
     }
    } store_list();
 }

function addStore(req, res, next) {
    async function add_store() {
        try {
            const body= {
                name: req.body.name,
                email: req.body.email,
                address: req.body.address,
                phone_no: req.body.phone_no,
                imei_no: req.body.imei_no
              }
              commonQuery.InsertIntoCollection(Store, body)
              .then((result) => {
                  if (result) {
                      return response.Response(res);
                  } else {
                      return response.InternalServer(res);
                  }
              }).catch((err) => {
                  console.log(err);
                  return response.Unauthorized(res);
              })
              
        } catch (error) {
            console.log('error', err);
            return response.Unauthorized(res); 
        }

    } add_store().then(data=>{}).catch(err => console.log(`async catch ${err}`))
}
function updateStore(req, res, next) {
    async function update_store() {
        try {
            const body= {
                name: req.body.name,
                email: req.body.email,
                address: req.body.address,
                phone_no: req.body.phone_no,
                imei_no: req.body.imei_no
              }
              commonQuery.updateOneDocument(Store, body)
              .then((result) => {
                  if (result) {
                    //   console.log("result", result)
                      return response.Response(res);
                  } else {
                      return response.InternalServer(res);
                  }
              }).catch((err) => {
                  console.log(err);
                  return response.Unauthorized(res);
              })
              
        } catch (error) {
            console.log('error', err);
            return response(res, Constant.statusCode.ERROR_CODE, Constant.commonMessage.SOMETHING_WENT_WRONG); 
        }

    } update_store().then(data=>{}).catch(err => console.log(`async catch ${err}`))
}

function deleteStore(req, res, next) {
    async function delete_store() {
        try {
          
              commonQuery.deleteOneDocument(Store, {_id: req.body.id},{})
              .then((result) => {
                  if (result) {
                    //   console.log("result", result)
                      return response.Response(res);
                  } else {
                      return response.InternalServer(res);
                  }
              }).catch((err) => {
                  console.log(err);
                  return response.Unauthorized(res);
              })
              
        } catch (error) {
            console.log('error', err);
            return response(res, Constant.statusCode.ERROR_CODE, Constant.commonMessage.SOMETHING_WENT_WRONG); 
        }

    } delete_store().then(data=>{}).catch(err => console.log(`async catch ${err}`))
}



























