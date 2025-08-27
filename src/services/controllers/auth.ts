import {
  ChangedPasswordModel,
  LoginModel,
  RegisterModel,
  ResetPasswordModel
} from '@/features/types/user';
import apiEndpoints from '../api/common/api-end-points';
import { Login, Post, Register } from '../api/common/api-methods';

export class AuthController {
  public static async login(data: LoginModel) {
    return await Login(apiEndpoints.login, data);
  }
  public static async register(data: RegisterModel) {
    return await Register(apiEndpoints.register, data);
  }
  public static async changedPassword(data: ChangedPasswordModel) {
    return await Post<boolean, ChangedPasswordModel>(
      apiEndpoints.changePassword,
      data
    );
  }
  public static async resetPassword(data: ResetPasswordModel) {
    return await Post<boolean, ResetPasswordModel>(
      apiEndpoints.resetPassword,
      data
    );
  }
}
