// const setCookie = (name: string, value: string, min: number) => {
//   let expires = "";
//   if (min) {
//     const date = new Date();
//     date.setTime(date.getTime() + 60 * 1000 * min);
//     expires = "; expires=" + date.toUTCString();
//   }
//   document.cookie = name + "=" + value + expires + "; path=/" + ";secure=True";
// };

// const getCookie = (name: string) => {
//   const value = `; ${document.cookie}`;
//   const parts = value.split(`; ${name}=`);
//   if (parts.length === 2) return parts.pop()?.split(";").shift();
//   return null;
// };

// const removeCookie = (name: string, path: string = "/", domain?: string) => {
//   let cookieString = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path};`;

//   if (domain) {
//     cookieString += `domain=${domain};`;
//   }

//   document.cookie = cookieString;
// };

// export { setCookie, getCookie, removeCookie };
