const APP_URL = "https://webtest.tabsera.net:8080/";
// const APP_URL = "http://127.0.0.1:8000/";
export default APP_URL;
export function imagesUrl(trailing: string): string {
  if (!trailing) return "/assets/imgs/User.png";
  if (trailing.at(0) == "/") {
    trailing = trailing.slice(1);
  }
  return APP_URL + trailing;
}
