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
exports.id = "pages/api/users";
exports.ids = ["pages/api/users"];
exports.modules = {

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ "(api)/./pages/api/users/index.ts":
/*!**********************************!*\
  !*** ./pages/api/users/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dbConnect */ \"(api)/./utils/dbConnect.ts\");\n\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        const users = (await _utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__.db.query(\"SELECT * FROM users\")).rows;\n        res.json({\n            result: users,\n            isSuccess: true\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHOEM7QUFFL0IsZUFBZUMsT0FBTyxDQUNuQ0MsR0FBbUIsRUFDbkJDLEdBQW9ELEVBQ3BEO0lBQ0EsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssS0FBSyxFQUFFO1FBQ3hCLE1BQU1DLEtBQUssR0FBVyxDQUFDLE1BQU1MLHNEQUFRLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDTyxJQUFJO1FBRWxFSixHQUFHLENBQUNLLElBQUksQ0FBQztZQUFFQyxNQUFNLEVBQUVKLEtBQUs7WUFBRUssU0FBUyxFQUFFLElBQUk7U0FBRSxDQUFDLENBQUM7S0FDOUM7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZS1ncmVnLWFuZC1sYXJyeS1zaG93LXdlYi1hcHAvLi9wYWdlcy9hcGkvdXNlcnMvaW5kZXgudHM/ZThhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgU2VydmljZVJlc3BvbnNlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzL3NlcnZpY2UtcmVzcG9uc2VcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXMvVXNlclwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvZGJDb25uZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFNlcnZpY2VSZXNwb25zZTxVc2VyW10gfCBudWxsPj5cbikge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xuICAgIGNvbnN0IHVzZXJzOiBVc2VyW10gPSAoYXdhaXQgZGIucXVlcnkoXCJTRUxFQ1QgKiBGUk9NIHVzZXJzXCIpKS5yb3dzO1xuXG4gICAgcmVzLmpzb24oeyByZXN1bHQ6IHVzZXJzLCBpc1N1Y2Nlc3M6IHRydWUgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJkYiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ1c2VycyIsInF1ZXJ5Iiwicm93cyIsImpzb24iLCJyZXN1bHQiLCJpc1N1Y2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/index.ts\n");

/***/ }),

/***/ "(api)/./utils/dbConnect.ts":
/*!****************************!*\
  !*** ./utils/dbConnect.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"db\": () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys */ \"(api)/./utils/keys.ts\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst db = new pg__WEBPACK_IMPORTED_MODULE_1__.Pool({\n    user: _keys__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pgUser,\n    password: _keys__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pgPassword,\n    host: _keys__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pgHost,\n    port: Number(_keys__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pgPort),\n    database: _keys__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pgDatabase,\n    ssl: true\n});\ndb.on(\"connect\", (client)=>{\n    // client.query(\"DROP TABLE users\").catch((error) => console.error(error));\n    client.query(\"CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, username VARCHAR(255), firstName VARCHAR(255), lastName VARCHAR(255), email VARCHAR(255), passwordhash VARCHAR(255))\").catch((error)=>console.error(error));\n//   .catch((error) => console.error(\"drop table error =====>\", error));\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9kYkNvbm5lY3QudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQjtBQUNBO0FBRW5CLE1BQU1FLEVBQUUsR0FBRyxJQUFJRCxvQ0FBSSxDQUFDO0lBQ3pCRSxJQUFJLEVBQUVILG9EQUFXO0lBQ2pCSyxRQUFRLEVBQUVMLHdEQUFlO0lBQ3pCTyxJQUFJLEVBQUVQLG9EQUFXO0lBQ2pCUyxJQUFJLEVBQUVDLE1BQU0sQ0FBQ1Ysb0RBQVcsQ0FBQztJQUN6QlksUUFBUSxFQUFFWix3REFBZTtJQUN6QmMsR0FBRyxFQUFFLElBQUk7Q0FDVixDQUFDLENBQUM7QUFFSFosRUFBRSxDQUFDYSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUNDLE1BQU0sR0FBSztJQUMzQiwyRUFBMkU7SUFDM0VBLE1BQU0sQ0FDSEMsS0FBSyxDQUNKLCtLQUErSyxDQUNoTCxDQUNBQyxLQUFLLENBQUMsQ0FBQ0MsS0FBSyxHQUFLQyxPQUFPLENBQUNELEtBQUssQ0FBQ0EsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUMxQyx3RUFBd0U7Q0FDekUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlLWdyZWctYW5kLWxhcnJ5LXNob3ctd2ViLWFwcC8uL3V0aWxzL2RiQ29ubmVjdC50cz81NDlkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBrZXlzIGZyb20gXCIuL2tleXNcIjtcbmltcG9ydCB7IFBvb2wgfSBmcm9tIFwicGdcIjtcblxuZXhwb3J0IGNvbnN0IGRiID0gbmV3IFBvb2woe1xuICB1c2VyOiBrZXlzLnBnVXNlcixcbiAgcGFzc3dvcmQ6IGtleXMucGdQYXNzd29yZCxcbiAgaG9zdDoga2V5cy5wZ0hvc3QsXG4gIHBvcnQ6IE51bWJlcihrZXlzLnBnUG9ydCksXG4gIGRhdGFiYXNlOiBrZXlzLnBnRGF0YWJhc2UsXG4gIHNzbDogdHJ1ZSxcbn0pO1xuXG5kYi5vbihcImNvbm5lY3RcIiwgKGNsaWVudCkgPT4ge1xuICAvLyBjbGllbnQucXVlcnkoXCJEUk9QIFRBQkxFIHVzZXJzXCIpLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICBjbGllbnRcbiAgICAucXVlcnkoXG4gICAgICBcIkNSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIHVzZXJzIChpZCBTRVJJQUwgUFJJTUFSWSBLRVksIHVzZXJuYW1lIFZBUkNIQVIoMjU1KSwgZmlyc3ROYW1lIFZBUkNIQVIoMjU1KSwgbGFzdE5hbWUgVkFSQ0hBUigyNTUpLCBlbWFpbCBWQVJDSEFSKDI1NSksIHBhc3N3b3JkaGFzaCBWQVJDSEFSKDI1NSkpXCJcbiAgICApXG4gICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICAvLyAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoXCJkcm9wIHRhYmxlIGVycm9yID09PT09PlwiLCBlcnJvcikpO1xufSk7XG4iXSwibmFtZXMiOlsia2V5cyIsIlBvb2wiLCJkYiIsInVzZXIiLCJwZ1VzZXIiLCJwYXNzd29yZCIsInBnUGFzc3dvcmQiLCJob3N0IiwicGdIb3N0IiwicG9ydCIsIk51bWJlciIsInBnUG9ydCIsImRhdGFiYXNlIiwicGdEYXRhYmFzZSIsInNzbCIsIm9uIiwiY2xpZW50IiwicXVlcnkiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/dbConnect.ts\n");

/***/ }),

/***/ "(api)/./utils/keys.ts":
/*!***********************!*\
  !*** ./utils/keys.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    pgUser: \"doadmin\",\n    pgHost: \"the-greg-and-larry-show-do-user-13993196-0.b.db.ondigitalocean.com\",\n    pgDatabase: \"defaultdb\",\n    pgPassword: \"AVNS_L3Fx6vHEMb-52CuXH5M\",\n    pgPort: \"25060\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9rZXlzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFrQkEsaUVBQXNCO0lBQ3BCQSxNQUFNLEVBQUVDLFNBQWtCO0lBQzFCRyxNQUFNLEVBQUVILG9FQUFrQjtJQUMxQkssVUFBVSxFQUFFTCxXQUFzQjtJQUNsQ08sVUFBVSxFQUFFUCwwQkFBc0I7SUFDbENTLE1BQU0sRUFBRVQsT0FBa0I7Q0FZM0IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZS1ncmVnLWFuZC1sYXJyeS1zaG93LXdlYi1hcHAvLi91dGlscy9rZXlzLnRzPzEzYTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIElLZXlzIHtcbiAgcGdVc2VyOiBzdHJpbmc7XG4gIHBnSG9zdDogc3RyaW5nO1xuICBwZ0RhdGFiYXNlOiBzdHJpbmc7XG4gIHBnUGFzc3dvcmQ6IHN0cmluZztcbiAgcGdQb3J0OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIC8vIGNsb3VkTmFtZTogc3RyaW5nO1xuICAvLyBjbG91ZEFwaUtleTogc3RyaW5nO1xuICAvLyBjbG91ZEFwaVNlY3JldDogc3RyaW5nO1xuXG4gIC8vIG5leHRBdXRoU2VjcmV0OiBzdHJpbmc7XG5cbiAgLy8gYXBwSWQ6IHN0cmluZztcbiAgLy8ga2V5OiBzdHJpbmc7XG4gIC8vIHNlY3JldDogc3RyaW5nO1xuICAvLyBjbHVzdGVyOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IDxJS2V5cz57XG4gIHBnVXNlcjogcHJvY2Vzcy5lbnYuUEdVU0VSLFxuICBwZ0hvc3Q6IHByb2Nlc3MuZW52LlBHSE9TVCxcbiAgcGdEYXRhYmFzZTogcHJvY2Vzcy5lbnYuUEdEQVRBQkFTRSxcbiAgcGdQYXNzd29yZDogcHJvY2Vzcy5lbnYuUEdQQVNTV09SRCxcbiAgcGdQb3J0OiBwcm9jZXNzLmVudi5QR1BPUlQsXG5cbiAgLy8gY2xvdWROYW1lOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DTE9VRF9OQU1FLFxuICAvLyBjbG91ZEFwaUtleTogcHJvY2Vzcy5lbnYuQ0xPVURfQVBJX0tFWSxcbiAgLy8gY2xvdWRBcGlTZWNyZXQ6IHByb2Nlc3MuZW52LkNMT1VEX0FQSV9TRUNSRVQsXG5cbiAgLy8gbmV4dEF1dGhTZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcblxuICAvLyBhcHBJZDogcHJvY2Vzcy5lbnYuQVBQX0lELFxuICAvLyBrZXk6IHByb2Nlc3MuZW52LktFWSxcbiAgLy8gc2VjcmV0OiBwcm9jZXNzLmVudi5TRUNSRVQsXG4gIC8vIGNsdXN0ZXI6IHByb2Nlc3MuZW52LkNMVVNURVIsXG59O1xuIl0sIm5hbWVzIjpbInBnVXNlciIsInByb2Nlc3MiLCJlbnYiLCJQR1VTRVIiLCJwZ0hvc3QiLCJQR0hPU1QiLCJwZ0RhdGFiYXNlIiwiUEdEQVRBQkFTRSIsInBnUGFzc3dvcmQiLCJQR1BBU1NXT1JEIiwicGdQb3J0IiwiUEdQT1JUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/keys.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/index.ts"));
module.exports = __webpack_exports__;

})();