// Common Services Endpoints

const common_services = 'common_services/';
const quran = 'quran/';
const review_app = 'review_app/';
const quran_wiki = 'quran_wiki/';
const api = 'API/';

class apiEndpoints {
  // Common services Endpoints
  static login = common_services + 'login/';
  static categories = 'category/';

  // Quran App Endpoints
  static surahs = quran + 'surahs/';

  // Review App Endpoints

  static forms = review_app + 'forms/';

  // Quran Wiki App Endpoints
  static albums = quran_wiki + 'albums/';
}

export default apiEndpoints;
