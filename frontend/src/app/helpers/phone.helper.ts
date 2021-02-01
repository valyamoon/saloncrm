import { PhoneNumberUtil, PhoneNumberFormat } from "google-libphonenumber";

const PNU = PhoneNumberUtil.getInstance();

export const getCorrectPhone = (phone: string, countryCode: string): string => {
  const phoneNumber = PNU.parseAndKeepRawInput(phone, countryCode);
  return PNU.format(phoneNumber, PhoneNumberFormat.INTERNATIONAL);
};
