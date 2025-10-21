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
exports.id = "app/api/auth/session/route";
exports.ids = ["app/api/auth/session/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fsession%2Froute&page=%2Fapi%2Fauth%2Fsession%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fsession%2Froute.js&appDir=C%3A%5CUsers%5Csumon%5CDesktop%5CBACKUP%20AI%20WORKING%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csumon%5CDesktop%5CBACKUP%20AI%20WORKING&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fsession%2Froute&page=%2Fapi%2Fauth%2Fsession%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fsession%2Froute.js&appDir=C%3A%5CUsers%5Csumon%5CDesktop%5CBACKUP%20AI%20WORKING%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csumon%5CDesktop%5CBACKUP%20AI%20WORKING&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var C_Users_sumon_Desktop_BACKUP_AI_WORKING_app_api_auth_session_route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/api/auth/session/route.js */ \"(rsc)/./app/api/auth/session/route.js\");\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/session/route\",\n        pathname: \"/api/auth/session\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/session/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\sumon\\\\Desktop\\\\BACKUP AI WORKING\\\\app\\\\api\\\\auth\\\\session\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_sumon_Desktop_BACKUP_AI_WORKING_app_api_auth_session_route_js__WEBPACK_IMPORTED_MODULE_2__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/session/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGc2Vzc2lvbiUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGYXV0aCUyRnNlc3Npb24lMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZhdXRoJTJGc2Vzc2lvbiUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNzdW1vbiU1Q0Rlc2t0b3AlNUNCQUNLVVAlMjBBSSUyMFdPUktJTkclNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q3N1bW9uJTVDRGVza3RvcCU1Q0JBQ0tVUCUyMEFJJTIwV09SS0lORyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDNkM7QUFDNUc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDaUo7O0FBRWpKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWktY2hhdC1ncm9xLz85ODk1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHN1bW9uXFxcXERlc2t0b3BcXFxcQkFDS1VQIEFJIFdPUktJTkdcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXHNlc3Npb25cXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvc2Vzc2lvbi9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvc2Vzc2lvblwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9zZXNzaW9uL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcc3Vtb25cXFxcRGVza3RvcFxcXFxCQUNLVVAgQUkgV09SS0lOR1xcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcc2Vzc2lvblxcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdXRoL3Nlc3Npb24vcm91dGVcIjtcbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fsession%2Froute&page=%2Fapi%2Fauth%2Fsession%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fsession%2Froute.js&appDir=C%3A%5CUsers%5Csumon%5CDesktop%5CBACKUP%20AI%20WORKING%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csumon%5CDesktop%5CBACKUP%20AI%20WORKING&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.js":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_2__.PrismaClient();\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    callbacks: {\n        async signIn ({ user, account, profile }) {\n            try {\n                const existingUser = await prisma.user.findUnique({\n                    where: {\n                        email: user.email\n                    }\n                });\n                if (!existingUser) {\n                    await prisma.user.create({\n                        data: {\n                            email: user.email,\n                            name: user.name,\n                            image: user.image,\n                            role: \"user\",\n                            isPremium: false,\n                            messageCount: 0\n                        }\n                    });\n                } else {\n                    await prisma.user.update({\n                        where: {\n                            email: user.email\n                        },\n                        data: {\n                            name: user.name,\n                            image: user.image\n                        }\n                    });\n                }\n                return true;\n            } catch (error) {\n                console.error(\"Sign in error:\", error);\n                return false;\n            }\n        },\n        async jwt ({ token, user }) {\n            // Initial sign in\n            if (user) {\n                token.id = user.id;\n                token.role = user.role;\n                token.isPremium = user.isPremium;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            try {\n                // Get user data from database\n                const dbUser = await prisma.user.findUnique({\n                    where: {\n                        email: session.user.email\n                    },\n                    select: {\n                        id: true,\n                        name: true,\n                        email: true,\n                        image: true,\n                        role: true,\n                        isPremium: true,\n                        messageCount: true\n                    }\n                });\n                if (dbUser) {\n                    // Return complete session with user data\n                    return {\n                        ...session,\n                        user: {\n                            ...session.user,\n                            id: dbUser.id,\n                            role: dbUser.role,\n                            isPremium: dbUser.isPremium,\n                            messageCount: dbUser.messageCount\n                        }\n                    };\n                }\n                return session;\n            } catch (error) {\n                console.error(\"Session callback error:\", error);\n                return session;\n            }\n        }\n    },\n    pages: {\n        signIn: \"/auth/signin\",\n        error: \"/auth/signin\"\n    },\n    session: {\n        strategy: \"jwt\",\n        maxAge: 30 * 24 * 60 * 60\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFnQztBQUN1QjtBQUNWO0FBRTdDLE1BQU1HLFNBQVMsSUFBSUQsd0RBQVlBO0FBRXhCLE1BQU1FLGNBQWM7SUFDekJDLFdBQVc7UUFDVEosc0VBQWNBLENBQUM7WUFDYkssVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxnQkFBZ0I7WUFDdENDLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0csb0JBQW9CO1FBQ2hEO0tBQ0Q7SUFDREMsV0FBVztRQUNULE1BQU1DLFFBQU8sRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRTtZQUNyQyxJQUFJO2dCQUNGLE1BQU1DLGVBQWUsTUFBTWQsT0FBT1csSUFBSSxDQUFDSSxVQUFVLENBQUM7b0JBQ2hEQyxPQUFPO3dCQUFFQyxPQUFPTixLQUFLTSxLQUFLO29CQUFDO2dCQUM3QjtnQkFFQSxJQUFJLENBQUNILGNBQWM7b0JBQ2pCLE1BQU1kLE9BQU9XLElBQUksQ0FBQ08sTUFBTSxDQUFDO3dCQUN2QkMsTUFBTTs0QkFDSkYsT0FBT04sS0FBS00sS0FBSzs0QkFDakJHLE1BQU1ULEtBQUtTLElBQUk7NEJBQ2ZDLE9BQU9WLEtBQUtVLEtBQUs7NEJBQ2pCQyxNQUFNOzRCQUNOQyxXQUFXOzRCQUNYQyxjQUFjO3dCQUNoQjtvQkFDRjtnQkFDRixPQUFPO29CQUNMLE1BQU14QixPQUFPVyxJQUFJLENBQUNjLE1BQU0sQ0FBQzt3QkFDdkJULE9BQU87NEJBQUVDLE9BQU9OLEtBQUtNLEtBQUs7d0JBQUM7d0JBQzNCRSxNQUFNOzRCQUNKQyxNQUFNVCxLQUFLUyxJQUFJOzRCQUNmQyxPQUFPVixLQUFLVSxLQUFLO3dCQUNuQjtvQkFDRjtnQkFDRjtnQkFDQSxPQUFPO1lBQ1QsRUFBRSxPQUFPSyxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUMsa0JBQWtCQTtnQkFDaEMsT0FBTztZQUNUO1FBQ0Y7UUFFQSxNQUFNRSxLQUFJLEVBQUVDLEtBQUssRUFBRWxCLElBQUksRUFBRTtZQUN2QixrQkFBa0I7WUFDbEIsSUFBSUEsTUFBTTtnQkFDUmtCLE1BQU1DLEVBQUUsR0FBR25CLEtBQUttQixFQUFFO2dCQUNsQkQsTUFBTVAsSUFBSSxHQUFHWCxLQUFLVyxJQUFJO2dCQUN0Qk8sTUFBTU4sU0FBUyxHQUFHWixLQUFLWSxTQUFTO1lBQ2xDO1lBQ0EsT0FBT007UUFDVDtRQUVBLE1BQU1FLFNBQVEsRUFBRUEsT0FBTyxFQUFFRixLQUFLLEVBQUU7WUFDOUIsSUFBSTtnQkFDRiw4QkFBOEI7Z0JBQzlCLE1BQU1HLFNBQVMsTUFBTWhDLE9BQU9XLElBQUksQ0FBQ0ksVUFBVSxDQUFDO29CQUMxQ0MsT0FBTzt3QkFBRUMsT0FBT2MsUUFBUXBCLElBQUksQ0FBQ00sS0FBSztvQkFBQztvQkFDbkNnQixRQUFRO3dCQUNOSCxJQUFJO3dCQUNKVixNQUFNO3dCQUNOSCxPQUFPO3dCQUNQSSxPQUFPO3dCQUNQQyxNQUFNO3dCQUNOQyxXQUFXO3dCQUNYQyxjQUFjO29CQUNoQjtnQkFDRjtnQkFFQSxJQUFJUSxRQUFRO29CQUNWLHlDQUF5QztvQkFDekMsT0FBTzt3QkFDTCxHQUFHRCxPQUFPO3dCQUNWcEIsTUFBTTs0QkFDSixHQUFHb0IsUUFBUXBCLElBQUk7NEJBQ2ZtQixJQUFJRSxPQUFPRixFQUFFOzRCQUNiUixNQUFNVSxPQUFPVixJQUFJOzRCQUNqQkMsV0FBV1MsT0FBT1QsU0FBUzs0QkFDM0JDLGNBQWNRLE9BQU9SLFlBQVk7d0JBQ25DO29CQUNGO2dCQUNGO2dCQUVBLE9BQU9PO1lBQ1QsRUFBRSxPQUFPTCxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUMsMkJBQTJCQTtnQkFDekMsT0FBT0s7WUFDVDtRQUNGO0lBQ0Y7SUFDQUcsT0FBTztRQUNMeEIsUUFBUTtRQUNSZ0IsT0FBTztJQUNUO0lBQ0FLLFNBQVM7UUFDUEksVUFBVTtRQUNWQyxRQUFRLEtBQUssS0FBSyxLQUFLO0lBQ3pCO0lBQ0FDLFFBQVFqQyxRQUFRQyxHQUFHLENBQUNpQyxlQUFlO0FBQ3JDLEVBQUM7QUFFRCxNQUFNQyxVQUFVMUMsZ0RBQVFBLENBQUNJO0FBQ2lCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWktY2hhdC1ncm9xLy4vYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanM/ZGExYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJ1xyXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGUnXHJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xyXG5cclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXHJcblxyXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBHb29nbGVQcm92aWRlcih7XHJcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lELFxyXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVULFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBjYWxsYmFja3M6IHtcclxuICAgIGFzeW5jIHNpZ25Jbih7IHVzZXIsIGFjY291bnQsIHByb2ZpbGUgfSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nVXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgd2hlcmU6IHsgZW1haWw6IHVzZXIuZW1haWwgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmICghZXhpc3RpbmdVc2VyKSB7XHJcbiAgICAgICAgICBhd2FpdCBwcmlzbWEudXNlci5jcmVhdGUoe1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgICAgbmFtZTogdXNlci5uYW1lLFxyXG4gICAgICAgICAgICAgIGltYWdlOiB1c2VyLmltYWdlLFxyXG4gICAgICAgICAgICAgIHJvbGU6ICd1c2VyJyxcclxuICAgICAgICAgICAgICBpc1ByZW1pdW06IGZhbHNlLFxyXG4gICAgICAgICAgICAgIG1lc3NhZ2VDb3VudDogMCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYXdhaXQgcHJpc21hLnVzZXIudXBkYXRlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgZW1haWw6IHVzZXIuZW1haWwgfSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgIG5hbWU6IHVzZXIubmFtZSxcclxuICAgICAgICAgICAgICBpbWFnZTogdXNlci5pbWFnZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdTaWduIGluIGVycm9yOicsIGVycm9yKVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XHJcbiAgICAgIC8vIEluaXRpYWwgc2lnbiBpblxyXG4gICAgICBpZiAodXNlcikge1xyXG4gICAgICAgIHRva2VuLmlkID0gdXNlci5pZFxyXG4gICAgICAgIHRva2VuLnJvbGUgPSB1c2VyLnJvbGVcclxuICAgICAgICB0b2tlbi5pc1ByZW1pdW0gPSB1c2VyLmlzUHJlbWl1bVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0b2tlblxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyBHZXQgdXNlciBkYXRhIGZyb20gZGF0YWJhc2VcclxuICAgICAgICBjb25zdCBkYlVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcclxuICAgICAgICAgIHdoZXJlOiB7IGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWwgfSxcclxuICAgICAgICAgIHNlbGVjdDoge1xyXG4gICAgICAgICAgICBpZDogdHJ1ZSxcclxuICAgICAgICAgICAgbmFtZTogdHJ1ZSxcclxuICAgICAgICAgICAgZW1haWw6IHRydWUsXHJcbiAgICAgICAgICAgIGltYWdlOiB0cnVlLFxyXG4gICAgICAgICAgICByb2xlOiB0cnVlLFxyXG4gICAgICAgICAgICBpc1ByZW1pdW06IHRydWUsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VDb3VudDogdHJ1ZSxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChkYlVzZXIpIHtcclxuICAgICAgICAgIC8vIFJldHVybiBjb21wbGV0ZSBzZXNzaW9uIHdpdGggdXNlciBkYXRhXHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zZXNzaW9uLFxyXG4gICAgICAgICAgICB1c2VyOiB7XHJcbiAgICAgICAgICAgICAgLi4uc2Vzc2lvbi51c2VyLFxyXG4gICAgICAgICAgICAgIGlkOiBkYlVzZXIuaWQsXHJcbiAgICAgICAgICAgICAgcm9sZTogZGJVc2VyLnJvbGUsXHJcbiAgICAgICAgICAgICAgaXNQcmVtaXVtOiBkYlVzZXIuaXNQcmVtaXVtLFxyXG4gICAgICAgICAgICAgIG1lc3NhZ2VDb3VudDogZGJVc2VyLm1lc3NhZ2VDb3VudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBzZXNzaW9uXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignU2Vzc2lvbiBjYWxsYmFjayBlcnJvcjonLCBlcnJvcilcclxuICAgICAgICByZXR1cm4gc2Vzc2lvblxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcGFnZXM6IHtcclxuICAgIHNpZ25JbjogJy9hdXRoL3NpZ25pbicsXHJcbiAgICBlcnJvcjogJy9hdXRoL3NpZ25pbicsXHJcbiAgfSxcclxuICBzZXNzaW9uOiB7XHJcbiAgICBzdHJhdGVneTogJ2p3dCcsXHJcbiAgICBtYXhBZ2U6IDMwICogMjQgKiA2MCAqIDYwLCAvLyAzMCBkYXlzXHJcbiAgfSxcclxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcclxufVxyXG5cclxuY29uc3QgaGFuZGxlciA9IE5leHRBdXRoKGF1dGhPcHRpb25zKVxyXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH0iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHb29nbGVQcm92aWRlciIsIlByaXNtYUNsaWVudCIsInByaXNtYSIsImF1dGhPcHRpb25zIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiY2FsbGJhY2tzIiwic2lnbkluIiwidXNlciIsImFjY291bnQiLCJwcm9maWxlIiwiZXhpc3RpbmdVc2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiZW1haWwiLCJjcmVhdGUiLCJkYXRhIiwibmFtZSIsImltYWdlIiwicm9sZSIsImlzUHJlbWl1bSIsIm1lc3NhZ2VDb3VudCIsInVwZGF0ZSIsImVycm9yIiwiY29uc29sZSIsImp3dCIsInRva2VuIiwiaWQiLCJzZXNzaW9uIiwiZGJVc2VyIiwic2VsZWN0IiwicGFnZXMiLCJzdHJhdGVneSIsIm1heEFnZSIsInNlY3JldCIsIk5FWFRBVVRIX1NFQ1JFVCIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/session/route.js":
/*!***************************************!*\
  !*** ./app/api/auth/session/route.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nextauth_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../[...nextauth]/route */ \"(rsc)/./app/api/auth/[...nextauth]/route.js\");\n\n\nasync function GET() {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_0__.getServerSession)(_nextauth_route__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n    if (!session) {\n        return new Response(JSON.stringify({\n            valid: false\n        }), {\n            status: 401,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    }\n    return new Response(JSON.stringify({\n        valid: true,\n        user: {\n            id: session.user.id,\n            name: session.user.name,\n            email: session.user.email,\n            isPremium: session.user.isPremium\n        }\n    }), {\n        status: 200,\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvc2Vzc2lvbi9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTRDO0FBQ1E7QUFFN0MsZUFBZUU7SUFDcEIsTUFBTUMsVUFBVSxNQUFNSCwyREFBZ0JBLENBQUNDLHdEQUFXQTtJQUVsRCxJQUFJLENBQUNFLFNBQVM7UUFDWixPQUFPLElBQUlDLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztZQUFFQyxPQUFPO1FBQU0sSUFBSTtZQUNwREMsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtRQUNGO0lBQ0Y7SUFFQSxPQUFPLElBQUlMLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztRQUNqQ0MsT0FBTztRQUNQRyxNQUFNO1lBQ0pDLElBQUlSLFFBQVFPLElBQUksQ0FBQ0MsRUFBRTtZQUNuQkMsTUFBTVQsUUFBUU8sSUFBSSxDQUFDRSxJQUFJO1lBQ3ZCQyxPQUFPVixRQUFRTyxJQUFJLENBQUNHLEtBQUs7WUFDekJDLFdBQVdYLFFBQVFPLElBQUksQ0FBQ0ksU0FBUztRQUNuQztJQUNGLElBQUk7UUFDRk4sUUFBUTtRQUNSQyxTQUFTO1lBQ1AsZ0JBQWdCO1FBQ2xCO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2FpLWNoYXQtZ3JvcS8uL2FwcC9hcGkvYXV0aC9zZXNzaW9uL3JvdXRlLmpzPzhmMjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aCdcclxuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tICcuLi9bLi4ubmV4dGF1dGhdL3JvdXRlJ1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucylcclxuICBcclxuICBpZiAoIXNlc3Npb24pIHtcclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyB2YWxpZDogZmFsc2UgfSksIHsgXHJcbiAgICAgIHN0YXR1czogNDAxLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBcclxuICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgdXNlcjoge1xyXG4gICAgICBpZDogc2Vzc2lvbi51c2VyLmlkLFxyXG4gICAgICBuYW1lOiBzZXNzaW9uLnVzZXIubmFtZSxcclxuICAgICAgZW1haWw6IHNlc3Npb24udXNlci5lbWFpbCxcclxuICAgICAgaXNQcmVtaXVtOiBzZXNzaW9uLnVzZXIuaXNQcmVtaXVtLFxyXG4gICAgfVxyXG4gIH0pLCB7XHJcbiAgICBzdGF0dXM6IDIwMCxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH1cclxuICB9KVxyXG59Il0sIm5hbWVzIjpbImdldFNlcnZlclNlc3Npb24iLCJhdXRoT3B0aW9ucyIsIkdFVCIsInNlc3Npb24iLCJSZXNwb25zZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ2YWxpZCIsInN0YXR1cyIsImhlYWRlcnMiLCJ1c2VyIiwiaWQiLCJuYW1lIiwiZW1haWwiLCJpc1ByZW1pdW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/session/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fsession%2Froute&page=%2Fapi%2Fauth%2Fsession%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fsession%2Froute.js&appDir=C%3A%5CUsers%5Csumon%5CDesktop%5CBACKUP%20AI%20WORKING%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csumon%5CDesktop%5CBACKUP%20AI%20WORKING&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();