interface User {}

export interface LoginModel {
  userName: string;
  password: string;
  device: Device;
  signatureName: string;
}

export interface Device {
  ip: string;
  name: string;
  deviceId: string;
  deviceToken: string;
  token: string;
  mac: string;
  version: string;
  release: string;
  machine: string;
  os: string;
}

export interface RegisterModel {
  description: string;
  fullName: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  isMale: boolean;
  profileTypeId: number;
  image: string;
  birthDate: string;
  device: Device;
  otp: Otp;
  profileActivity: number;
}

export interface Otp {
  id: number;
  code: string;
}

export interface ChangedPasswordModel {
  newPassword: string;
  confirmPassword: string;
}

export interface ResetPasswordModel {
  phoneNumber: string;
  newPassword: string;
  otpRequest: Otp;
}

export default User;
