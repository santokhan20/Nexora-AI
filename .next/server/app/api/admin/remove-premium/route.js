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
exports.id = "app/api/admin/remove-premium/route";
exports.ids = ["app/api/admin/remove-premium/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fremove-premium%2Froute&page=%2Fapi%2Fadmin%2Fremove-premium%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fremove-premium%2Froute.js&appDir=C%3A%5CUsers%5Csumon%5CDesktop%5CBACKUP%20AI%20WORKING%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csumon%5CDesktop%5CBACKUP%20AI%20WORKING&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fremove-premium%2Froute&page=%2Fapi%2Fadmin%2Fremove-premium%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fremove-premium%2Froute.js&appDir=C%3A%5CUsers%5Csumon%5CDesktop%5CBACKUP%20AI%20WORKING%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csumon%5CDesktop%5CBACKUP%20AI%20WORKING&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var C_Users_sumon_Desktop_BACKUP_AI_WORKING_app_api_admin_remove_premium_route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/api/admin/remove-premium/route.js */ \"(rsc)/./app/api/admin/remove-premium/route.js\");\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/admin/remove-premium/route\",\n        pathname: \"/api/admin/remove-premium\",\n        filename: \"route\",\n        bundlePath: \"app/api/admin/remove-premium/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\sumon\\\\Desktop\\\\BACKUP AI WORKING\\\\app\\\\api\\\\admin\\\\remove-premium\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_sumon_Desktop_BACKUP_AI_WORKING_app_api_admin_remove_premium_route_js__WEBPACK_IMPORTED_MODULE_2__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/admin/remove-premium/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhZG1pbiUyRnJlbW92ZS1wcmVtaXVtJTJGcm91dGUmcGFnZT0lMkZhcGklMkZhZG1pbiUyRnJlbW92ZS1wcmVtaXVtJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGYWRtaW4lMkZyZW1vdmUtcHJlbWl1bSUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNzdW1vbiU1Q0Rlc2t0b3AlNUNCQUNLVVAlMjBBSSUyMFdPUktJTkclNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q3N1bW9uJTVDRGVza3RvcCU1Q0JBQ0tVUCUyMEFJJTIwV09SS0lORyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDcUQ7QUFDcEg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDaUo7O0FBRWpKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWktY2hhdC1ncm9xLz8zNTVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHN1bW9uXFxcXERlc2t0b3BcXFxcQkFDS1VQIEFJIFdPUktJTkdcXFxcYXBwXFxcXGFwaVxcXFxhZG1pblxcXFxyZW1vdmUtcHJlbWl1bVxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYWRtaW4vcmVtb3ZlLXByZW1pdW0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hZG1pbi9yZW1vdmUtcHJlbWl1bVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYWRtaW4vcmVtb3ZlLXByZW1pdW0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxzdW1vblxcXFxEZXNrdG9wXFxcXEJBQ0tVUCBBSSBXT1JLSU5HXFxcXGFwcFxcXFxhcGlcXFxcYWRtaW5cXFxccmVtb3ZlLXByZW1pdW1cXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYWRtaW4vcmVtb3ZlLXByZW1pdW0vcm91dGVcIjtcbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fremove-premium%2Froute&page=%2Fapi%2Fadmin%2Fremove-premium%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fremove-premium%2Froute.js&appDir=C%3A%5CUsers%5Csumon%5CDesktop%5CBACKUP%20AI%20WORKING%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csumon%5CDesktop%5CBACKUP%20AI%20WORKING&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/admin/remove-premium/route.js":
/*!***********************************************!*\
  !*** ./app/api/admin/remove-premium/route.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();\nasync function POST(req) {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_0__.getServerSession)();\n        if (!session) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"].json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        // Check if user is admin\n        const adminUser = await prisma.user.findUnique({\n            where: {\n                email: session.user.email\n            }\n        });\n        if (!adminUser || adminUser.role !== \"admin\") {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"].json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        const formData = await req.formData();\n        const userId = formData.get(\"userId\");\n        if (!userId) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"].json({\n                error: \"User ID required\"\n            }, {\n                status: 400\n            });\n        }\n        // Remove premium from user\n        await prisma.user.update({\n            where: {\n                id: userId\n            },\n            data: {\n                isPremium: false\n            }\n        });\n        // Redirect back to admin page\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"].redirect(new URL(\"/admin\", req.url));\n    } catch (error) {\n        console.error(\"Remove premium error:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"].json({\n            error: \"Internal server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2FkbWluL3JlbW92ZS1wcmVtaXVtL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE0QztBQUNDO0FBQ0g7QUFFMUMsTUFBTUcsU0FBUyxJQUFJRix3REFBWUE7QUFFeEIsZUFBZUcsS0FBS0MsR0FBRztJQUM1QixJQUFJO1FBQ0YsTUFBTUMsVUFBVSxNQUFNTiwyREFBZ0JBO1FBRXRDLElBQUksQ0FBQ00sU0FBUztZQUNaLE9BQU9KLGtGQUFZQSxDQUFDSyxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBZSxHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDcEU7UUFFQSx5QkFBeUI7UUFDekIsTUFBTUMsWUFBWSxNQUFNUCxPQUFPUSxJQUFJLENBQUNDLFVBQVUsQ0FBQztZQUM3Q0MsT0FBTztnQkFBRUMsT0FBT1IsUUFBUUssSUFBSSxDQUFDRyxLQUFLO1lBQUM7UUFDckM7UUFFQSxJQUFJLENBQUNKLGFBQWFBLFVBQVVLLElBQUksS0FBSyxTQUFTO1lBQzVDLE9BQU9iLGtGQUFZQSxDQUFDSyxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBZSxHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDcEU7UUFFQSxNQUFNTyxXQUFXLE1BQU1YLElBQUlXLFFBQVE7UUFDbkMsTUFBTUMsU0FBU0QsU0FBU0UsR0FBRyxDQUFDO1FBRTVCLElBQUksQ0FBQ0QsUUFBUTtZQUNYLE9BQU9mLGtGQUFZQSxDQUFDSyxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBbUIsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3hFO1FBRUEsMkJBQTJCO1FBQzNCLE1BQU1OLE9BQU9RLElBQUksQ0FBQ1EsTUFBTSxDQUFDO1lBQ3ZCTixPQUFPO2dCQUFFTyxJQUFJSDtZQUFPO1lBQ3BCSSxNQUFNO2dCQUFFQyxXQUFXO1lBQU07UUFDM0I7UUFFQSw4QkFBOEI7UUFDOUIsT0FBT3BCLGtGQUFZQSxDQUFDcUIsUUFBUSxDQUFDLElBQUlDLElBQUksVUFBVW5CLElBQUlvQixHQUFHO0lBQ3hELEVBQUUsT0FBT2pCLE9BQU87UUFDZGtCLFFBQVFsQixLQUFLLENBQUMseUJBQXlCQTtRQUN2QyxPQUFPTixrRkFBWUEsQ0FBQ0ssSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBd0IsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDN0U7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2FpLWNoYXQtZ3JvcS8uL2FwcC9hcGkvYWRtaW4vcmVtb3ZlLXByZW1pdW0vcm91dGUuanM/YzVjMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoJ1xyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcclxuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInXHJcblxyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbigpXHJcbiAgICBcclxuICAgIGlmICghc2Vzc2lvbikge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ1VuYXV0aG9yaXplZCcgfSwgeyBzdGF0dXM6IDQwMSB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIGlmIHVzZXIgaXMgYWRtaW5cclxuICAgIGNvbnN0IGFkbWluVXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZTogeyBlbWFpbDogc2Vzc2lvbi51c2VyLmVtYWlsIH1cclxuICAgIH0pXHJcblxyXG4gICAgaWYgKCFhZG1pblVzZXIgfHwgYWRtaW5Vc2VyLnJvbGUgIT09ICdhZG1pbicpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdVbmF1dGhvcml6ZWQnIH0sIHsgc3RhdHVzOiA0MDEgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcS5mb3JtRGF0YSgpXHJcbiAgICBjb25zdCB1c2VySWQgPSBmb3JtRGF0YS5nZXQoJ3VzZXJJZCcpXHJcblxyXG4gICAgaWYgKCF1c2VySWQpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdVc2VyIElEIHJlcXVpcmVkJyB9LCB7IHN0YXR1czogNDAwIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVtb3ZlIHByZW1pdW0gZnJvbSB1c2VyXHJcbiAgICBhd2FpdCBwcmlzbWEudXNlci51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZDogdXNlcklkIH0sXHJcbiAgICAgIGRhdGE6IHsgaXNQcmVtaXVtOiBmYWxzZSB9XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIFJlZGlyZWN0IGJhY2sgdG8gYWRtaW4gcGFnZVxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKCcvYWRtaW4nLCByZXEudXJsKSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignUmVtb3ZlIHByZW1pdW0gZXJyb3I6JywgZXJyb3IpXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ludGVybmFsIHNlcnZlciBlcnJvcicgfSwgeyBzdGF0dXM6IDUwMCB9KVxyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJnZXRTZXJ2ZXJTZXNzaW9uIiwiUHJpc21hQ2xpZW50IiwiTmV4dFJlc3BvbnNlIiwicHJpc21hIiwiUE9TVCIsInJlcSIsInNlc3Npb24iLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJhZG1pblVzZXIiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiZW1haWwiLCJyb2xlIiwiZm9ybURhdGEiLCJ1c2VySWQiLCJnZXQiLCJ1cGRhdGUiLCJpZCIsImRhdGEiLCJpc1ByZW1pdW0iLCJyZWRpcmVjdCIsIlVSTCIsInVybCIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/admin/remove-premium/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fremove-premium%2Froute&page=%2Fapi%2Fadmin%2Fremove-premium%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fremove-premium%2Froute.js&appDir=C%3A%5CUsers%5Csumon%5CDesktop%5CBACKUP%20AI%20WORKING%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csumon%5CDesktop%5CBACKUP%20AI%20WORKING&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();