"use strict";

module.exports = {
  acceptSalonRequest: {
    subject: "Salon Activation Successful",
    message: "Your request for salon activation has been accepted. Please login at "
  },

  rejectSalonRequest: {
    subject: "Salon Activation Failed",
    message:
      "Your request for salon activation has been rejected. Please contact admin"
  },

  accountSuspended: {
    subject: "Salon Account Suspended",
    message:
      "Your account has been suspended temporarily. Please renew your subscription"
  },

  refundInWallet: {
    message: "Your total amount will be refunded in your wallet"
  },

  bookingDeclined: {
    message:
      "Your booking has been declined by the salon. Please try another salon"
  }
};
