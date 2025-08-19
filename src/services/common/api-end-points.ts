// Common Services Endpoints

const common_services = "common_services/";
const quran = "quran/";
const review_app = "review_app/";
const quran_wiki = "quran_wiki/";

class apiEndpoints {
  // Common services Endpoints
  static login = common_services + "login/";
  static register = common_services + "register/";
  static logout = common_services + "logout/";
  static forgotPassword = common_services + "change_password/";
  static users = common_services + "users/";
  static profile = common_services + "profile/";
  static endpointPermissions = common_services + "endpoint_permissions/";
  static groups = common_services + "groups/";
  static systemVariables = common_services + "system_variables/";
  static refreshToken = common_services + "refresh_token/";
  static countries = common_services + "countries/";
  static resetPassword = common_services + "users/";
  static loggedInUsers = common_services + "logged_in_users/";

  // Quran App Endpoints
  static surahs = quran + "surahs/";
  static ayahs = quran + "ayahs/";
  static reciters = quran + "reciters/";
  static hizbs = quran + "hizbs/";
  static juzs = quran + "juzs/";
  static ayahAudios = quran + "ayah_audios/";
  static recitations = quran + "recitations/";
  static reciter_audios = quran + "reciter_audios/";
  static pages = quran + "pages/";
  static fonts = quran + "fonts/";
  static glyphs = quran + "glyphs/";
  static reciterTypes = quran + "reciter_types/";
  static bookmarks = quran + "bookmarks/";

  // Review App Endpoints

  static forms = review_app + "forms/";
  static editForms = review_app + "edit_forms/";
  static nodes = review_app + "nodes/";
  static paths = review_app + "paths/";
  static tables = review_app + "tables/";
  static editFormTransactions = review_app + "edit_form_transactions/";
  static formTransactions = review_app + "form_transactions/";

  // Quran Wiki App Endpoints
  static albums = quran_wiki + "albums/";
  static lectureInfoTypes = quran_wiki + "lecture_info_types/";
  static lecturers = quran_wiki + "lecturers/";
  static mediaTypes = quran_wiki + "media_types/";
  static personalInfoTypes = quran_wiki + "personal_info_types/";
  static personalInfos = quran_wiki + "personal_infos/";
  static personalMedia = quran_wiki + "personal_medias/";
  static tags = quran_wiki + "tags/";
  static textLinks = quran_wiki + "text_links/";
  static lectures = quran_wiki + "lectures/";
}

export default apiEndpoints;
