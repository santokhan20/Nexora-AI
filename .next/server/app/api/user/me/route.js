"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/user/me/route";
exports.ids = ["app/api/user/me/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist\\client\\components\\action-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist\\client\\components\\request-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!*********************************************************************************************!*\
  !*** external "next/dist\\client\\components\\static-generation-async-storage.external.js" ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\static-generation-async-storage.external.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuser%2Fme%2Froute&page=%2Fapi%2Fuser%2Fme%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Fme%2Froute.js&appDir=C%3A%5CUsers%5Csumon%5CDesktop%5CBACKUP%20AI%20WORKING%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csumon%5CDesktop%5CBACKUP%20AI%20WORKING&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuser%2Fme%2Froute&page=%2Fapi%2Fuser%2Fme%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Fme%2Froute.js&appDir=C%3A%5CUsers%5Csumon%5CDesktop%5CBACKUP%20AI%20WORKING%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csumon%5CDesktop%5CBACKUP%20AI%20WORKING&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var C_Users_sumon_Desktop_BACKUP_AI_WORKING_app_api_user_me_route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/api/user/me/route.js */ \"(rsc)/./app/api/user/me/route.js\");\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/user/me/route\",\n        pathname: \"/api/user/me\",\n        filename: \"route\",\n        bundlePath: \"app/api/user/me/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\sumon\\\\Desktop\\\\BACKUP AI WORKING\\\\app\\\\api\\\\user\\\\me\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_sumon_Desktop_BACKUP_AI_WORKING_app_api_user_me_route_js__WEBPACK_IMPORTED_MODULE_2__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/user/me/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VyJTJGbWUlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnVzZXIlMkZtZSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnVzZXIlMkZtZSUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNzdW1vbiU1Q0Rlc2t0b3AlNUNCQUNLVVAlMjBBSSUyMFdPUktJTkclNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q3N1bW9uJTVDRGVza3RvcCU1Q0JBQ0tVUCUyMEFJJTIwV09SS0lORyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDd0M7QUFDdkc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDaUo7O0FBRWpKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWktY2hhdC1ncm9xLz85ZjlkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHN1bW9uXFxcXERlc2t0b3BcXFxcQkFDS1VQIEFJIFdPUktJTkdcXFxcYXBwXFxcXGFwaVxcXFx1c2VyXFxcXG1lXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS91c2VyL21lL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvdXNlci9tZVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvdXNlci9tZS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXHN1bW9uXFxcXERlc2t0b3BcXFxcQkFDS1VQIEFJIFdPUktJTkdcXFxcYXBwXFxcXGFwaVxcXFx1c2VyXFxcXG1lXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3VzZXIvbWUvcm91dGVcIjtcbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuser%2Fme%2Froute&page=%2Fapi%2Fuser%2Fme%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Fme%2Froute.js&appDir=C%3A%5CUsers%5Csumon%5CDesktop%5CBACKUP%20AI%20WORKING%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csumon%5CDesktop%5CBACKUP%20AI%20WORKING&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/user/me/route.js":
/*!**********************************!*\
  !*** ./app/api/user/me/route.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();\n// Define authOptions directly here to avoid import issues\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    secret: process.env.NEXTAUTH_SECRET\n};\nasync function GET() {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_0__.getServerSession)(authOptions);\n        if (!session?.user?.email) {\n            return new Response(JSON.stringify({\n                error: \"Not authenticated\"\n            }), {\n                status: 401\n            });\n        }\n        console.log(\"\\uD83D\\uDD0D Fetching user data for:\", session.user.email);\n        const user = await prisma.user.findUnique({\n            where: {\n                email: session.user.email\n            },\n            select: {\n                id: true,\n                name: true,\n                email: true,\n                image: true,\n                role: true,\n                isPremium: true,\n                messageCount: true\n            }\n        });\n        console.log(\"\\uD83D\\uDCCB User data from DB:\", user);\n        if (!user) {\n            return new Response(JSON.stringify({\n                error: \"User not found\"\n            }), {\n                status: 404\n            });\n        }\n        return new Response(JSON.stringify(user), {\n            status: 200,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    } catch (error) {\n        console.error(\"User API error:\", error);\n        return new Response(JSON.stringify({\n            error: \"Internal server error\"\n        }), {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3VzZXIvbWUvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTRDO0FBQ0M7QUFDVTtBQUV2RCxNQUFNRyxTQUFTLElBQUlGLHdEQUFZQTtBQUUvQiwwREFBMEQ7QUFDMUQsTUFBTUcsY0FBYztJQUNsQkMsV0FBVztRQUNUSCxzRUFBY0EsQ0FBQztZQUNiSSxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLGdCQUFnQjtZQUN0Q0MsY0FBY0gsUUFBUUMsR0FBRyxDQUFDRyxvQkFBb0I7UUFDaEQ7S0FDRDtJQUNEQyxRQUFRTCxRQUFRQyxHQUFHLENBQUNLLGVBQWU7QUFDckM7QUFFTyxlQUFlQztJQUNwQixJQUFJO1FBQ0YsTUFBTUMsVUFBVSxNQUFNZiwyREFBZ0JBLENBQUNJO1FBRXZDLElBQUksQ0FBQ1csU0FBU0MsTUFBTUMsT0FBTztZQUN6QixPQUFPLElBQUlDLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztnQkFBRUMsT0FBTztZQUFvQixJQUFJO2dCQUNsRUMsUUFBUTtZQUNWO1FBQ0Y7UUFFQUMsUUFBUUMsR0FBRyxDQUFDLHdDQUE4QlQsUUFBUUMsSUFBSSxDQUFDQyxLQUFLO1FBRTVELE1BQU1ELE9BQU8sTUFBTWIsT0FBT2EsSUFBSSxDQUFDUyxVQUFVLENBQUM7WUFDeENDLE9BQU87Z0JBQUVULE9BQU9GLFFBQVFDLElBQUksQ0FBQ0MsS0FBSztZQUFDO1lBQ25DVSxRQUFRO2dCQUNOQyxJQUFJO2dCQUNKQyxNQUFNO2dCQUNOWixPQUFPO2dCQUNQYSxPQUFPO2dCQUNQQyxNQUFNO2dCQUNOQyxXQUFXO2dCQUNYQyxjQUFjO1lBQ2hCO1FBQ0Y7UUFFQVYsUUFBUUMsR0FBRyxDQUFDLG1DQUF5QlI7UUFFckMsSUFBSSxDQUFDQSxNQUFNO1lBQ1QsT0FBTyxJQUFJRSxTQUFTQyxLQUFLQyxTQUFTLENBQUM7Z0JBQUVDLE9BQU87WUFBaUIsSUFBSTtnQkFDL0RDLFFBQVE7WUFDVjtRQUNGO1FBRUEsT0FBTyxJQUFJSixTQUFTQyxLQUFLQyxTQUFTLENBQUNKLE9BQU87WUFDeENNLFFBQVE7WUFDUlksU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7UUFDRjtJQUNGLEVBQUUsT0FBT2IsT0FBTztRQUNkRSxRQUFRRixLQUFLLENBQUMsbUJBQW1CQTtRQUNqQyxPQUFPLElBQUlILFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztZQUFFQyxPQUFPO1FBQXdCLElBQUk7WUFDdEVDLFFBQVE7UUFDVjtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haS1jaGF0LWdyb3EvLi9hcHAvYXBpL3VzZXIvbWUvcm91dGUuanM/YmNkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoJ1xyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcclxuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlJ1xyXG5cclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXHJcblxyXG4vLyBEZWZpbmUgYXV0aE9wdGlvbnMgZGlyZWN0bHkgaGVyZSB0byBhdm9pZCBpbXBvcnQgaXNzdWVzXHJcbmNvbnN0IGF1dGhPcHRpb25zID0ge1xyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xyXG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcclxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKVxyXG4gICAgXHJcbiAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmVtYWlsKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkJyB9KSwgeyBcclxuICAgICAgICBzdGF0dXM6IDQwMSBcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZygn8J+UjSBGZXRjaGluZyB1c2VyIGRhdGEgZm9yOicsIHNlc3Npb24udXNlci5lbWFpbClcclxuICAgIFxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZTogeyBlbWFpbDogc2Vzc2lvbi51c2VyLmVtYWlsIH0sXHJcbiAgICAgIHNlbGVjdDoge1xyXG4gICAgICAgIGlkOiB0cnVlLFxyXG4gICAgICAgIG5hbWU6IHRydWUsXHJcbiAgICAgICAgZW1haWw6IHRydWUsXHJcbiAgICAgICAgaW1hZ2U6IHRydWUsXHJcbiAgICAgICAgcm9sZTogdHJ1ZSxcclxuICAgICAgICBpc1ByZW1pdW06IHRydWUsXHJcbiAgICAgICAgbWVzc2FnZUNvdW50OiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgY29uc29sZS5sb2coJ/Cfk4sgVXNlciBkYXRhIGZyb20gREI6JywgdXNlcilcclxuXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IGVycm9yOiAnVXNlciBub3QgZm91bmQnIH0pLCB7IFxyXG4gICAgICAgIHN0YXR1czogNDA0IFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkodXNlciksIHtcclxuICAgICAgc3RhdHVzOiAyMDAsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVc2VyIEFQSSBlcnJvcjonLCBlcnJvcilcclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogJ0ludGVybmFsIHNlcnZlciBlcnJvcicgfSksIHsgXHJcbiAgICAgIHN0YXR1czogNTAwIFxyXG4gICAgfSlcclxuICB9XHJcbn0iXSwibmFtZXMiOlsiZ2V0U2VydmVyU2Vzc2lvbiIsIlByaXNtYUNsaWVudCIsIkdvb2dsZVByb3ZpZGVyIiwicHJpc21hIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJzZWNyZXQiLCJORVhUQVVUSF9TRUNSRVQiLCJHRVQiLCJzZXNzaW9uIiwidXNlciIsImVtYWlsIiwiUmVzcG9uc2UiLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyb3IiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwic2VsZWN0IiwiaWQiLCJuYW1lIiwiaW1hZ2UiLCJyb2xlIiwiaXNQcmVtaXVtIiwibWVzc2FnZUNvdW50IiwiaGVhZGVycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/user/me/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuser%2Fme%2Froute&page=%2Fapi%2Fuser%2Fme%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Fme%2Froute.js&appDir=C%3A%5CUsers%5Csumon%5CDesktop%5CBACKUP%20AI%20WORKING%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csumon%5CDesktop%5CBACKUP%20AI%20WORKING&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();