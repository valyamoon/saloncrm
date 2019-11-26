

const messages = {

    alreadyEmailErr: "Email id already registered to system.",
    registerationEmail: "Welcome to ReddiClub!",
    registerSuccessfully: "Registered Successfully",
    userLoggedOutOk: "User logged out successfully.",
    genericErrMsg: "Oops some error occured, please try again.",
    invalidCred: "Invalid Credentials.",
    userStatus: "User not found.",
    userSaved: "User successfully saved.",
    ProfileResult: "Your profile successfully updated.",
    tokenFailure: "Token is required",
    tokenSuccess: "Token Successfully verfied",
    adminApproval: "Welcome to ReddiClub!",
    userComment: "Prescription Date has been saved.",
    profileimageUpdate: "Profile image updated succesfully.",
    prescriptionUpdate: "Prescription image updated succesfully.",
    "successRetreivingData": "Data retrieved successfully from the collection",
    "sessionExpired": "Session expired, please login again!",
    //forgot password
    successSendingForgotPasswordEmail: "Reset password link sent successfully on email : ",
    "oldNewPasswordSameError": "Old password and new password can't be same.",
    passwordChangedSuccess: "Password changed successfully.",
    "oldPasswordIncorrect": "Current password is incorrect.",

    //reset password
    "resetpasstokenexpire": "Token has been expired! Try Again",
    "resetpasstokenused": "Token is already used.",
    "resetpasstokenupdated": "Token has been updated successfully.",
    "resetpasstokenupdaterr": "Error updating the token.",
    "resetpasserror": "Can't process your request!",
    "resetpasstokenmissing": "Token is missing",
    "resetpasspasswordmissing": "New password is missing",
    "resetpasswordsuccess": "Password has been updated successfully",
    "noTemplates": "User created but email not sent due to no templates in database.",
    "noData": "No record to display.",
    "recordNotExist": "Record doesn't exist in the system.",

    "userLoggedInOk": "User logged in successfully.",
    "noProfileEr": "Profile data is not available for user.",


    invalidToken: "The provided token is invalid.",
    tokenNotPresent: "The token has expired.",
    barCodeBooked: "The inventory with entered bar code is booked during the choosen rental dates.",

    // Form Validation Messages
    idReq: "ID is required",
    idInvalid: "ID is invalid.",
    passwordReq: "Password is required.",
    fisrtNameReq: " name is required.",
    lastNameReq: "Last name is required.",
    emailReq: "Email is required.",
    userTypeReq: "User type is required.",
    loginIdReq: "Login ID is required.",
    loginIdInvalid: "Login ID is invalid.",
    companyIdReq: "Company ID is required.",
    companyIdInvalid: "Company ID is invalid.",
    storeIdReq: "Store ID is required.",
    storeIdInvalid: "Store ID is invalid.",
    userTypeReq: "User type is required.",
    userTypeInvalid: "User type is invalid.",
    createdByReq: "Created by ID is required",
    createdByInvalid: "Created by ID is invalid.",
    creatorTypeReq: "Creator type is required",
    updatedByReq: "Updated by ID is required",
    updatedByInvalid: "Updated by ID is invalid.",
    updaterTypeReq: "Updater type is required",
    statusReq: "Status is required.",
    statusInvalid: "Invalid status value, must be boolean true or false",
    uploadedFileNotFound: "Could not find the uploaded file.",
    nameReq: "Name is required.",
    categoryIdReq: "Category ID is required.",
    categoryIdInvalid: "Category ID is invalid.",
    emailPresent: "Email ID is present in the present.",
    emailNotPresent: "Email ID is not present in the system.",
    emailSentForgotPass: "An email has been sent to the entered email ID. Please click on the link to change the password.",
    tokenReq: "Token not present in the request.",
    passChanged: "Password has been changed successfully.",
    imageDeleted: "Requested image has been deleted successfully.",
    imageNumberExceded: "You have exceeded the number of images that you can attach to a product. You can delete a previous image to make space for new image",
    s3ImageRemoveError: "Some error occured while deleting the S3 image.",
    imageUploadWithErr: "Image has been upload with some errors.",
    imageUploadSuccess: "Image has been upload successfully.",
    isParentReq: "isParent field is missing.",
    isParentInvalid: "isParent field value is invalid, must be boolean.",
    rentalPriceReq: "Rental price is reqired.",
    originalCostReq: "Original product cost is required",
    parentIdInvalid: "Parent ID is invalid.",
    yearReq: "Year is required.",
    dateReq: "Date is required.",
    titleReq: "Title is required.",
    typeReq: "Discount type is required.",
    discountsReq: "Discounts are required.",
    taxValueReq: "Tax value is required.",
    addressReq: "Address is required",
    cityReq: "City is required.",
    stateReq: "State is required",
    zipCodeReq: "Zip Code is required.",
    phoneReq: "Phone is required.",
    productIdReq: "ProductId is required",
    tangopurchaserequire: "you must complete your profile to buy reward.",

    // data related messages
    noReqData: "Request payload empty.",
    statusChanged: "Status has been changed successfully.",
    statusChangedError: "Status has been changed successfully. with errors",
    invalidForm: "Invalid form data values.",
    //Admin / sub-admin
    dataFound: "Data found as per criteria.",
    userFound: "User data found.",
    userDeleted: "Requested user has been deleted successfully.",
    userDeletedPer: "Requested user has been deleted Permanently.",

    // Products module:
    productNameReq: "Product name is required.",
    serialNumberReq: "Product serial number is required.",
    rentalPrice: "Rental price is required.",
    originalCost: "Original cost is required.",
    productParentPresent: "Product with this name is already present in the system.",

    productAdded: "Product has been added successfully.",
    updatedProduct: "Product has been updated successfully.",
    updatedProductChildError: "Error occured while updating child products.",
    productDeletedWithError: "Requested product has been deleted successfully with some errors.",
    productDeleted: "Requested product has been deleted successfully.",
    productDeletedPer: "Requested product has been deleted Permanently.",
    productFound: "Product data found.",



    // Rental Module:


    // Phase 2 message
    sponsor_verfied_success: 'Club Sponsor verified successfully',
    login_successfull: 'Login successful',
    unauthorized: 'Sorry!! You are not authorized',
    badRequest: 'Bad request!! Please try again',
    notValidMongoId: (field) => {
        return field +' is not a valid'
    },
    missingRequiredFields: (fields = '') => {
        return 'Missing required fields.' + (String(fields).split(',').length ? ' Please provide '+ fields.split(','): '');
    },
    dataUpdated: (what_is_updated = 'Data') => {
        return what_is_updated +' updated successfully'
    },
    dataSaved: (what_is_saved = 'Data') => {
        return what_is_saved +' saved successfully'
    },
    dataNotSaved: (what_is_not_saved = 'Data') => {
        return what_is_not_saved +' not saved'
    },
    dataFound: (what_is_found = 'Data') => {
        return what_is_found +' found'
    },
    dataNotFound: (what_is_not_found = 'Data') => {
        return what_is_not_found +' not found'
    }


}


const gmailSMTPCredentials = {
    "service": "gmail",
    "host": "smtp.gmail.com",
    "username": "jitendrak.smartdata@gmail.com",
    "password": "smartsdn@#$9059JM",
    "port": 465
}


const httpStatus = {
    success: 200,
    noContent: 204,
    badRequest: 400,
    created: 201,
    accepted: 202,
    nonAuthInfo: 203,
    unauthorized: 401,
    forbidden: 403,
    subscriptionRequired: 402,
    notAcceptable: 406,
    internalServerErr: 500,
    conflict: 409,
    found: 302,
    processing: 102,
    noDataFound: 410,
    methodNotAllowed: 405,
    notFound: 404
}

const cycleConstant = {
    registrationcycle: 7,
    weeklycycle: 7,
    monthlycycle: 30,
    monthlyPillToTake: 27,
    weeklyPillToTake: 7,
    prescriptionCycle: 29,

    // registerationType: 1,
    weeklyType: 1,
    monthlyType: 2
}

const tangoDetail = {
    //Production

    accountIdentifier: "A75131317",
    customerIdentifier: "G24650124",
    //sender detail
    senderemail: "gary@overtoneventures.com",
    senderfirstname: "Gary",
    senderlastname: "DePew",
    noOfAttempts: 5,
    tangousername: "OvertoneVentures",
    tangopassword: "XbSza?ISXWAiQKW!cUlk@Mq@YbgrH&OOSOPMWroYIvB$",
    tangourl: "https://api.tangocard.com/raas/v2/catalogs",
    tangoorder: "https://api.tangocard.com/raas/v2/orders",
    tangoaccount: "https://api.tangocard.com/raas/v2/accounts",
    tangocustomer: "https://api.tangocard.com/raas/v2/customers",
    tangopurchaserequire: "you must complete your profile to buy reward.",
    tangouploadprescs: "Upload prescription image to buy a reward",
    prescriexpired: "Prescription image expired. Upload new prescription",
    tangosuppliererror: "Supplier error, please try again.",
    tangoweekreward: "Reach 100% to earn the following:",
    tangomonthreward: "Reach 90% to earn the following:",
 }

const refillMessages = {
    refillValidprescription: "Please Enter Valid Prescription Date",
    refillPrescriptionSuccess: "Prescription date successfully updated",
    refillEnterPrescriptionDate: "Please Enter Prescription Date First",
    refillReminderSuccess: "Reminder Date Successfully saved",
    refillInvalidReminder: "Oops, that would remind you after your prescription expires!",
    refillEndDateCycle: 29
}



const PRIVATE_KEY = "Farma@1$*q.Club_+ReddiApp";

const obj = {
    messages: messages,
    httpStatus: httpStatus,
    cycleConstant: cycleConstant,
    tangoDetail: tangoDetail,
    refillMessages: refillMessages,
    gmailSMTPCredentials: gmailSMTPCredentials,
    PRIVATE_KEY

};


module.exports = obj;