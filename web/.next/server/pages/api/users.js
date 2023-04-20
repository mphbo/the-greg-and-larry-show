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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"db\": () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys */ \"(api)/./utils/keys.ts\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst db = new pg__WEBPACK_IMPORTED_MODULE_1__.Pool({\n    // user: keys.pgUser,\n    // host: keys.pgHost,\n    // database: keys.pgDatabase,\n    // password: keys.pgPassword,\n    // port: Number(keys.pgPort),\n    connectionString: _keys__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pgConnectionString\n});\ndb.on(\"connect\", (client)=>{\n    client.query(\"CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, username VARCHAR(255), email VARCHAR(255), passwordhash VARCHAR(255))\").catch((error)=>console.error(error));\n//   .catch((error) => console.error(\"drop table error =====>\", error));\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9kYkNvbm5lY3QudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQjtBQUNBO0FBRW5CLE1BQU1FLEVBQUUsR0FBRyxJQUFJRCxvQ0FBSSxDQUFDO0lBQ3pCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0JFLGdCQUFnQixFQUFFSCxnRUFBdUI7Q0FDMUMsQ0FBQyxDQUFDO0FBRUhFLEVBQUUsQ0FBQ0csRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDQyxNQUFNLEdBQUs7SUFDM0JBLE1BQU0sQ0FDSEMsS0FBSyxDQUNKLGdJQUFnSSxDQUNqSSxDQUNBQyxLQUFLLENBQUMsQ0FBQ0MsS0FBSyxHQUFLQyxPQUFPLENBQUNELEtBQUssQ0FBQ0EsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUMxQyx3RUFBd0U7Q0FDekUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlLWdyZWctYW5kLWxhcnJ5LXNob3ctd2ViLWFwcC8uL3V0aWxzL2RiQ29ubmVjdC50cz81NDlkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBrZXlzIGZyb20gXCIuL2tleXNcIjtcbmltcG9ydCB7IFBvb2wgfSBmcm9tIFwicGdcIjtcblxuZXhwb3J0IGNvbnN0IGRiID0gbmV3IFBvb2woe1xuICAvLyB1c2VyOiBrZXlzLnBnVXNlcixcbiAgLy8gaG9zdDoga2V5cy5wZ0hvc3QsXG4gIC8vIGRhdGFiYXNlOiBrZXlzLnBnRGF0YWJhc2UsXG4gIC8vIHBhc3N3b3JkOiBrZXlzLnBnUGFzc3dvcmQsXG4gIC8vIHBvcnQ6IE51bWJlcihrZXlzLnBnUG9ydCksXG4gIGNvbm5lY3Rpb25TdHJpbmc6IGtleXMucGdDb25uZWN0aW9uU3RyaW5nLFxufSk7XG5cbmRiLm9uKFwiY29ubmVjdFwiLCAoY2xpZW50KSA9PiB7XG4gIGNsaWVudFxuICAgIC5xdWVyeShcbiAgICAgIFwiQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgdXNlcnMgKGlkIFNFUklBTCBQUklNQVJZIEtFWSwgdXNlcm5hbWUgVkFSQ0hBUigyNTUpLCBlbWFpbCBWQVJDSEFSKDI1NSksIHBhc3N3b3JkaGFzaCBWQVJDSEFSKDI1NSkpXCJcbiAgICApXG4gICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICAvLyAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoXCJkcm9wIHRhYmxlIGVycm9yID09PT09PlwiLCBlcnJvcikpO1xufSk7XG4iXSwibmFtZXMiOlsia2V5cyIsIlBvb2wiLCJkYiIsImNvbm5lY3Rpb25TdHJpbmciLCJwZ0Nvbm5lY3Rpb25TdHJpbmciLCJvbiIsImNsaWVudCIsInF1ZXJ5IiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/dbConnect.ts\n");

/***/ }),

/***/ "(api)/./utils/keys.ts":
/*!***********************!*\
  !*** ./utils/keys.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    pgUser: process.env.PGUSER,\n    pgHost: process.env.PGHOST,\n    pgDatabase: process.env.PGDATABASE,\n    pgPassword: process.env.PGPASSWORD,\n    pgPort: process.env.PGPORT,\n    pgConnectionString: \"postgres://postgres:CJvynKi0NBiIEYO@the-greg-and-larry-show-db.flycast:5432\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9rZXlzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFtQkEsaUVBQXNCO0lBQ3BCQSxNQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxNQUFNO0lBQzFCQyxNQUFNLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxNQUFNO0lBQzFCQyxVQUFVLEVBQUVMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxVQUFVO0lBQ2xDQyxVQUFVLEVBQUVQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTyxVQUFVO0lBQ2xDQyxNQUFNLEVBQUVULE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUyxNQUFNO0lBQzFCQyxrQkFBa0IsRUFBRVgsNkVBQThCO0NBWW5ELEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGUtZ3JlZy1hbmQtbGFycnktc2hvdy13ZWItYXBwLy4vdXRpbHMva2V5cy50cz8xM2E1Il0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBJS2V5cyB7XG4gIHBnVXNlcjogc3RyaW5nO1xuICBwZ0hvc3Q6IHN0cmluZztcbiAgcGdEYXRhYmFzZTogc3RyaW5nO1xuICBwZ1Bhc3N3b3JkOiBzdHJpbmc7XG4gIHBnUG9ydDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBwZ0Nvbm5lY3Rpb25TdHJpbmc6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgLy8gY2xvdWROYW1lOiBzdHJpbmc7XG4gIC8vIGNsb3VkQXBpS2V5OiBzdHJpbmc7XG4gIC8vIGNsb3VkQXBpU2VjcmV0OiBzdHJpbmc7XG5cbiAgLy8gbmV4dEF1dGhTZWNyZXQ6IHN0cmluZztcblxuICAvLyBhcHBJZDogc3RyaW5nO1xuICAvLyBrZXk6IHN0cmluZztcbiAgLy8gc2VjcmV0OiBzdHJpbmc7XG4gIC8vIGNsdXN0ZXI6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgPElLZXlzPntcbiAgcGdVc2VyOiBwcm9jZXNzLmVudi5QR1VTRVIsXG4gIHBnSG9zdDogcHJvY2Vzcy5lbnYuUEdIT1NULFxuICBwZ0RhdGFiYXNlOiBwcm9jZXNzLmVudi5QR0RBVEFCQVNFLFxuICBwZ1Bhc3N3b3JkOiBwcm9jZXNzLmVudi5QR1BBU1NXT1JELFxuICBwZ1BvcnQ6IHByb2Nlc3MuZW52LlBHUE9SVCxcbiAgcGdDb25uZWN0aW9uU3RyaW5nOiBwcm9jZXNzLmVudi5QR0NPTk5FQ1RJT05TVFJJTkcsXG5cbiAgLy8gY2xvdWROYW1lOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DTE9VRF9OQU1FLFxuICAvLyBjbG91ZEFwaUtleTogcHJvY2Vzcy5lbnYuQ0xPVURfQVBJX0tFWSxcbiAgLy8gY2xvdWRBcGlTZWNyZXQ6IHByb2Nlc3MuZW52LkNMT1VEX0FQSV9TRUNSRVQsXG5cbiAgLy8gbmV4dEF1dGhTZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcblxuICAvLyBhcHBJZDogcHJvY2Vzcy5lbnYuQVBQX0lELFxuICAvLyBrZXk6IHByb2Nlc3MuZW52LktFWSxcbiAgLy8gc2VjcmV0OiBwcm9jZXNzLmVudi5TRUNSRVQsXG4gIC8vIGNsdXN0ZXI6IHByb2Nlc3MuZW52LkNMVVNURVIsXG59O1xuIl0sIm5hbWVzIjpbInBnVXNlciIsInByb2Nlc3MiLCJlbnYiLCJQR1VTRVIiLCJwZ0hvc3QiLCJQR0hPU1QiLCJwZ0RhdGFiYXNlIiwiUEdEQVRBQkFTRSIsInBnUGFzc3dvcmQiLCJQR1BBU1NXT1JEIiwicGdQb3J0IiwiUEdQT1JUIiwicGdDb25uZWN0aW9uU3RyaW5nIiwiUEdDT05ORUNUSU9OU1RSSU5HIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/keys.ts\n");

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