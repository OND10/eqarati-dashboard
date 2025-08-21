const APP_URL = 'https://instadar14-001-site1.Stempurl.com/API/';
export default APP_URL;
export function imagesUrl(trailing: string): string {
  if (!trailing) return '/assets/imgs/User.png';
  if (trailing.at(0) == '/') {
    trailing = trailing.slice(1);
  }
  return APP_URL + trailing;
}
