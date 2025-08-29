// Common Services Endpoints

const authentication = 'authentication/';

class apiEndpoints {
  // Authentication Endpoints
  static login = authentication + 'login/';
  static categories = 'category/';
  static register = authentication + 'register/';
  static changePassword = authentication + 'changePassword/';
  static resetPassword = authentication + 'resetPassword/';
}

export default apiEndpoints;
