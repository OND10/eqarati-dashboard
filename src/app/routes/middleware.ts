// //All Middleware functions and use cases will be written here in the form of functions
// // with a unified entry point function called Main
// /**
//  * TO DO :
//  * 1- figure the cost of each function
//  *  */

// import {
//   AnyContext,
//   BeforeLoadContextOptions,
//   redirect,
// } from "@tanstack/react-router";

// import { userDetails } from "../../features/Authentication/types/user-details";
// import { isTokenExpired, tokenDetails } from "../../services/Auth/utils";
// import { store } from "../../services/Redux/store";
// import { PermissionsContext } from "../Providers/permissions/context";
// import { QueryClient } from "@tanstack/react-query";
// import { allRoutePaths } from './main';
// import { showToast } from "../../common/components/UI/toast/Toast-Singleton";
// import {
//   insertNewToken,
//   removeToken,
// } from "../../services/Redux/slices/auth-management";
// import { getCookie, removeCookie, setCookie } from "./utils";
// import { fetchUserPermissions } from "../Providers/permissions/api";
// import UserController from "../../services/api/common_services/user";
// import { insertUserDetailsInfo } from "../../services/Redux/slices/user-details";
// import { UserPartialResponse } from "../../features/common_services/types/user";

// //----------------INTERFACES---------------------------

// interface RouteArguments {
//   args: BeforeLoadContextOptions<
//     any,
//     undefined,
//     {},
//     {
//       queryClient: QueryClient;
//       authProvider: typeof PermissionsContext;
//       reduxProvider: typeof store;
//     },
//     AnyContext
//   >;
// }

// //--------------Main ENTRY POINT-----------------------

// export default async function main({ args }: RouteArguments) {
//   await checkAuthentication({ args });
//   await checkAuthorizedRoutes({args});
//   await handleRouting({ args });
//   await checkUserDetails ({args})
// }

// //---------------Utils Functions------------------------

// async function handleRouting({ args }: RouteArguments) {
//   //using LIFO stack to redirect the user to the last used page or the inputted url by the user
//   const authToken = args.context.reduxProvider.getState().authToken;
//   let stack: typeof allRoutePaths = [];
//   const visitedRoutes = localStorage.getItem("visited-routes");
//   const visArray: typeof allRoutePaths = visitedRoutes?.split(",") || [];
//   visitedRoutes?.split(",").map((value, index, array) => {
//     stack.push(value);
//   });

//   //To free up the local storage
//   if (stack.length > 50) {
//     const lastRoute = stack.pop() ?? "";
//     stack = [lastRoute];
//   }

//   if (args.location.pathname == "/signIn" && authToken.token.length > 1) {
//     // console.log(visArray)
//     console.error("restricted backward Routing");
//     showToast(
//       "وصول غير مصرح به",
//       "لا يمكن الوصول للصفحة المراده",
//       "error",
//       3000
//     );

//     console.log(visArray);
//     throw redirect({ to:visArray.length >= 1 ? visArray.at(-1) : "/" });
//   }

//   if (stack.at(-1) == args.location.pathname) {
//     return;
//   }

//   //unwanted routes in route stack
//   if (
//     args.location.pathname == "/signIn" ||
//     args.location.pathname == "/common-services/change-password" ||  args.location.pathname == "/forbidden"
//   ) {
//     return;
//   }

//   // const routeStatues = await checkAuthorizedRoutes({ args });
//   // if (!routeStatues) return;

//   stack.push(args.location.pathname);
//   localStorage.setItem("visited-routes", stack.join(","));
// }

// async function checkAuthentication({ args }: RouteArguments) {
//   const authToken = args.context.reduxProvider.getState().authToken;
//   const userStatus: Pick<userDetails, "password_changed"> = JSON.parse(
//     localStorage.getItem("user_status") ?? "{}"
//   );
//   const cookieToken = getCookie("t...n");
//   // args.abortController.signal.dispatchEvent(abortEvent);
//   // throw redirect({to:"/forbidden"})

//   /**
//    * The Following is just s temporary solution to keep the token alive after refresh
//    *                   ` FOR DEVELOPMENT ONLY `
//    *
//    * TODO : 1-uncomment the axios interceptor from the  API CLIENT FILE
//    *        2-remove the cookie implementation
//    *        3-add a beforeLoad listener for axios interceptor
//    */

//   if (!cookieToken && authToken.token.length != 0) {
//     setCookie("t...n", authToken.token, 30);
//   }

//   //Listen for Page refreshes and decide the Token status
//   //Don't remove/clean up this event
//   window.addEventListener("beforeunload", (e) => {
//     //To cancel any future conflict or abnormal behavior
//     e.stopPropagation();

//     //need the cookie to be locally scoped
//     //so it will get a new value before each refresh
//     const cookieToken = getCookie("t...n");

//     if (!cookieToken && authToken.token.length != 0) {
//       setCookie("t...n", authToken.token, 30);
//     } else {
//       throw redirect({
//         to: "/signIn",
//         replace: true,
//         ignoreBlocker: true,
//         reloadDocument: true,
//       });
//     }

//     if (
//       !cookieToken &&
//       authToken.token.length == 0 &&
//       args.location.pathname != "/signIn"
//     ) {
//           console.error("NO TOKEN FOUND");

//       throw redirect({
//         to: "/signIn",
//         replace: true,
//         ignoreBlocker: true,
//         reloadDocument: true,
//       });
//     }
//   });

//   //just to check after each routing if the access token
//   //is found in a cookie or cache else go to signIn

//   if ( authToken.token.length == 0 && !cookieToken && args.location.pathname != "/signIn") {
//     console.error("NO TOKEN FOUND");
//     throw redirect({
//       to: "/signIn",
//       replace: true,
//       ignoreBlocker: true,
//       reloadDocument: true,
//     });
//   }

//   await checkPasswordStatus({args})

//   //Check if the cookie token is expired and caches the token after each routing or refresh
//   if (cookieToken && authToken.token.length == 0 && args.location.pathname != "/signIn") {
//     if (isTokenExpired(cookieToken)) {
//       console.error("TOKEN IS EXPIRED");
//       throw redirect({
//         to: "/signIn",
//         replace: true,
//         ignoreBlocker: true,
//         reloadDocument: true,
//       });
//     }
//     args.context.reduxProvider.dispatch(insertNewToken(cookieToken));
//     return 1;
//   }

// }

// async function checkAuthorizedRoutes({args}: RouteArguments) {

//   const CACHED_ROUTES_PERMISSIONS = args.context.reduxProvider.getState().routePermission;
//   const AUTH_TOKEN = args.context.reduxProvider.getState().authToken;
//   const ALL_ROUTES_PERMISSIONS_FROM_CACHE = [
//     ...CACHED_ROUTES_PERMISSIONS.levelOne,
//     ...CACHED_ROUTES_PERMISSIONS.levelTwo,
//     ...CACHED_ROUTES_PERMISSIONS.levelThree,
//   ];

//   // alert("did i cooked")

//   if(args.location.pathname=="/signIn" || args.location.pathname == "/forbidden" || args.location.pathname == "/common-services/change-password"){
//     return
//   }

//   //first check the context if it doesn't have the permissions
//   //in case of a reload or a url injecting

//   if (ALL_ROUTES_PERMISSIONS_FROM_CACHE.length == 0) {
//     //check if the token exists in cache or not
//     if (AUTH_TOKEN.token.length == 0) {
//       // if no token in cache get it from the cookie
//       const cookieToken = getCookie("t...n");
//       //if no cookie exits throw an error with a redirect
//       if (!cookieToken && args.location.pathname != "/signIn") {
//         throw redirect({
//           to: "/signIn",
//           replace: true,
//           ignoreBlocker: true,
//           reloadDocument: true,
//         });
//         //if found token in cookie
//       }
//       if (!cookieToken) return false; // for null safety only and if we are already in /signIn

//       const userId = tokenDetails(cookieToken);
//       const data = await fetchUserPermissions(userId);
//       const levelOneFromApi = data.levelOne.map(
//         (permission) => permission.endpoint
//       );
//       const levelTwoFromApi = data.levelTwo.map(
//         (permission) => permission.endpoint
//       );
//       const levelThreeFromApi = data.levelThree.map(
//         (permission) => permission.endpoint
//       );
//       const allRoutesPermissionsFromAPI = [
//         ...levelOneFromApi,
//         ...levelTwoFromApi,
//         ...levelThreeFromApi,
//       ];
//       if (!allRoutesPermissionsFromAPI.includes(args.location.pathname) && allRoutePaths.includes(args.location.pathname)) {
//         console.error("CookieToken Triggered");
//         throw redirect({to:"/forbidden" , from:"/"}) ;
//       }

//       // if found a token in cache storage but no data in routePermission
//     } else {
//       const userId = tokenDetails(AUTH_TOKEN.token);
//       const data = await fetchUserPermissions(userId);
//       const levelOneFromApi = data.levelOne.map(
//         (permission) => permission.endpoint
//       );
//       const levelTwoFromApi = data.levelTwo.map(
//         (permission) => permission.endpoint
//       );
//       const levelThreeFromApi = data.levelThree.map(
//         (permission) => permission.endpoint
//       );
//       const allRoutesPermissionsFromAPI = [
//         ...levelOneFromApi,
//         ...levelTwoFromApi,
//         ...levelThreeFromApi,
//       ];

//       if (!allRoutesPermissionsFromAPI.includes(args.location.pathname) && allRoutePaths.includes(args.location.pathname)) {
//         console.error("authToken Triggered");
//         throw redirect({to:"/forbidden" , from:"/"}) ;
//       }
//   }

//   // if found in routePermission
// }else if (!ALL_ROUTES_PERMISSIONS_FROM_CACHE.includes(args.location.pathname) && allRoutePaths.includes(args.location.pathname)) {
//   console.log(ALL_ROUTES_PERMISSIONS_FROM_CACHE)
//   console.error("routePermission global state Triggered");
//   throw redirect({to:"/forbidden" , from:"/"}) ;
// }

// }

// //-----------------Helper Functions--------------------
// async function checkPasswordStatus({ args }: RouteArguments) {
//   const authToken = args.context.reduxProvider.getState().authToken;
//   const cookieToken = getCookie("t...n");
//   const userStatus: Pick<userDetails, "password_changed"> = JSON.parse(
//     localStorage.getItem("user_status") ?? "{}"
//   );
//   if (authToken.token.length == 0 && !cookieToken && args.location.pathname == "/signIn") {
//   console.error("NO TOKEN FOUND CPS ERROR");
//     localStorage.clear()
//     return
//   }

//   const obj = Object.values(userStatus);
//   //just to check if not null
//   if (obj.length >= 1) {

//     if (userStatus.password_changed == false && args.location.pathname != "/common-services/change-password") {
//       throw redirect({ to: "/common-services/change-password" });
//     }

//     if (userStatus.password_changed && args.location.pathname == "/common-services/change-password") {
//       //check and handle if the user should be able to change his password anytime
//     }
//   } else {
//     //pre caution if a token was injected without userDetails
//     console.error("no userStatus found");
//     removeCookie("t...n");
//     args.context.reduxProvider.dispatch(removeToken());
//     localStorage.removeItem("user_status");
//   }
// }

// async function checkUserDetails({ args }: RouteArguments){
//   const userInfo : UserPartialResponse =   args.context.reduxProvider.getState().userDetailsInfo

//   if(!userInfo.username && args.location.pathname != "/signIn"){
//    const response =  await UserController.profile()
//    args.context.reduxProvider.dispatch(insertUserDetailsInfo(response))
//   }

// }
