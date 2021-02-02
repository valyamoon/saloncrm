import { PhoneNumberUtil, PhoneNumberFormat } from "google-libphonenumber";

const PNU = PhoneNumberUtil.getInstance();

export const getCorrectPhone = (phone: string, countryCode: string): string => {
  const phoneNumber = PNU.parseAndKeepRawInput(phone, countryCode);
  return PNU.format(phoneNumber, PhoneNumberFormat.INTERNATIONAL);
};

export const getCountryCode = (phone: string) => {
  const countryCode = PNU.parse(phone).getCountryCode();
  return countryCode;
};

export const getNationalNumber = (phone: string) => {
  const nationalNumber = PNU.parse(phone).getNationalNumber();
  return nationalNumber;
};
