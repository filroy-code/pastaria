/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/spoon.png */ \"./src/images/spoon.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    --image-width: 60vw;\\n    --image-height: ;\\n}\\n\\nbody {\\n    background-color: rgb(165, 107, 31);\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    background-size: 75px;\\n    background-repeat: repeat;\\n    background-position: top left;\\n    display: flex;\\n}\\n\\n.body-content {\\n    background-color: black;\\n    color: whitesmoke;\\n    padding: 30px;\\n    margin-top: 20px;\\n    border: solid whitesmoke 5px;\\n}\\n\\n.contact {\\n    background-color: black;\\n    color: whitesmoke;\\n    padding: 30px;\\n    margin-top: 20px;\\n    border: solid whitesmoke 5px;\\n}\\n\\n.ourContact {\\n    border: 1px dotted whitesmoke;\\n    padding: 5px;\\n    max-width: 586px;\\n    margin: 2.5rem 0 1.5rem;\\n}\\n\\nlabel {\\n    display: block;\\n    padding: 2rem;\\n    font-size: 1.2rem;\\n}\\n\\ninput {\\n    display: inline;\\n    font-size: 1.2rem;\\n    background-color: whitesmoke;\\n}\\n\\ntextarea {\\n    font-size: 1rem;\\n    max-width: 95%;\\n    line-height: 1.6;\\n    background-color: whitesmoke;\\n}\\n\\nform > button {\\n    font-size: 1.2rem;\\n}\\n\\n\\n#main-logo {\\n    float: left;\\n    display: flex;\\n    width: auto;\\n    height: 90%;\\n    transition: height 0.3s;\\n}\\n\\n.main-section {\\n    width: 75%;\\n    padding: 5px;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    background-color: rgb(170, 122, 64);\\n    border: solid rgb(75, 39, 10) 5px;\\n    float: right;\\n}\\n\\n/* start of gallery */\\n\\n.container {\\n    display: flex;\\n    position: relative;\\n    justify-content: space-between;\\n    align-items: center;\\n    height: 80%;\\n    width: var(--image-width);\\n    overflow: hidden;\\n}\\n\\n.displayImage {\\n    display: flex;\\n    right: 0%;\\n    transition: right 1s;\\n}\\n\\n.image-carousel {\\n    display: flex;\\n    background-color: black;\\n    justify-content: center;\\n    align-items: center;\\n    height: calc(50vh + 4rem);\\n    border: solid whitesmoke 5px;\\n    border-top: 0;\\n}\\n\\n#gallery {\\n    display: flex;\\n    float:left;\\n    position: absolute;\\n    transition: left 0.7s;\\n}\\n\\n#gallery > img {\\n    display: flex;\\n    float:left;\\n    background-color: black;\\n    width: var(--image-width);\\n    display: block;\\n    transition: left 0.7s;\\n    position: relative;\\n}\\n\\n.buttonContainer {\\n    position: absolute;\\n    display: flex;\\n    justify-content: space-between;\\n}\\n\\n.leftnavButton {\\n    position: absolute;\\n    right: 80%;\\n}\\n\\n.navButton {\\n    position: absolute;\\n    top: 50%;\\n    height: 3rem;\\n    width: 3rem;\\n    background: rgba(0, 0, 0, 0.7);\\n    border-radius: 50%;\\n    font-size: 2rem;\\n    align-items: center;\\n    color: whitesmoke;\\n    border: none;\\n}\\n\\n.hudBanner {\\n    position: absolute;\\n    bottom: 0px;\\n    height: 15%;\\n    background-color: rgba(0, 0, 0, 0.61);\\n    width: 100%;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n}\\n\\n.hudButton {\\n    float: left;\\n    height: 2rem;\\n    width: 2rem;\\n    background: rgba(99, 97, 97, 0.7);\\n    border-radius: 50%;\\n    border: none;\\n}\\n\\n.hudButton:hover {\\n    background: rgba(85, 83, 83, 0.7);\\n}\\n\\n.hudButton:active {\\n    background: rgba(99, 97, 97, 0.952);\\n}\\n\\n.activeBubble {\\n    background: rgba(165, 107, 31, 0.664);\\n}\\n\\n.activeBubble:hover {\\n    background: rgba(165, 107, 31, 0.664);\\n}\\n\\n.galleryHUD {\\n    display: flex;\\n    gap: 20px;\\n    justify-self: center;\\n    align-self: center;\\n}\\n\\n.navButton:hover {\\n    background: rgba(0, 0, 0, 0.5);\\n}\\n\\n.navButton:active {\\n    background: rgba(0, 0, 0, 0.986);\\n}\\n\\n.rightnavButton {\\n    left: 80%;\\n}\\n\\n.galleryStatus {\\n    position: absolute;\\n    left: 40%;\\n    display: flex;\\n    font-size: 70px;\\n    justify-content: center;\\n    align-items: center;\\n    top: 0%;\\n}\\n\\n/* end of gallery */\\n\\nheader {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    height: 35vh;\\n    transform: scale(0.9);\\n    transition: transform 0.3s;\\n    overflow: hidden;\\n}\\n\\nheader:hover {\\n    transform: scale(0.98);\\n    transition: transform 0.3s;\\n    cursor: pointer;\\n}\\n\\nheader:active {\\n    transform: scale(1);\\n    transition: transform 0.1s;\\n}\\n\\n.sidebar {\\n    float: left;\\n    width: 19vw;\\n    /* background-color: rgb(75, 39, 10); */\\n    overflow: visible;\\n}\\n\\nnav {\\n    overflow: visible;\\n    position: sticky;\\n    top: 30%;\\n}\\n.navigation {\\n    border: solid rgb(75, 39, 10) 5px;\\n    background-color: rgb(82, 46, 17);\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    color: whitesmoke;\\n    width: 90%;\\n    height: 4rem;\\n    position: relative;\\n    transform: scale(0.95);\\n    transition: transform 0.3s;\\n}\\n\\n.navigation:hover {\\n    background-color: rgb(94, 53, 20);\\n    transition: background-color 0.45s;\\n    cursor: pointer;\\n    transform: scale(1);\\n    transition: transform 0.3s;\\n}\\n\\n.navigation:active {\\n    transform: scale(1);\\n    transition: transform 0.1s;\\n}\\n\\n.navigation > h2 {\\n    position: relative;\\n    padding: 0;\\n    margin: 0;\\n    user-select: none;\\n}\\n/*\\n.navigation > h2:hover {\\n    font-size: 3rem;\\n    transition: font-size 0.3s;\\n}\\n*/\\n.navigation:active {\\n    background-color: rgb(80, 45, 17);\\n}\\n\\n.menuItem {\\n    background-color: black;\\n    padding: 10px;\\n    height: 650px;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.menuItem:hover {\\n    background-color: rgb(31, 30, 30);\\n    transition: background-color 0.3s;\\n    cursor: pointer;\\n}\\n\\n.menu {\\n    margin-top: 20px;\\n    border: solid whitesmoke 5px;\\n    color: whitesmoke;\\n    background-color: black;\\n    padding: 5px;\\n    text-align: center;\\n}\\n.menu-items {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 60px;\\n    padding: 30px 0;\\n}\\n\\nul {\\n    display: flex;\\n    gap: 20px;\\n    justify-content: space-between;\\n    align-items: center;\\n    padding-left: 0;\\n}\\n\\nli {\\n    display: flex;\\n    justify-content: center;\\n    list-style: none;\\n    border: solid whitesmoke 1px;\\n}\\n\\n.item {\\n    width: 200px;\\n    height: 200px;\\n    border-radius: 60%;\\n    margin-bottom: 1rem;\\n}\\n\\n.spacer {\\n    border: dashed rgb(75, 39, 10) 5px;\\n}\\n\\nh1 {\\n    font-family: 'Londrina Outline', sans-serif;\\n    font-weight: 900;\\n    font-size: 4rem;\\n    padding: 10px;\\n}\\n\\nh2 {\\n    font-family: 'Londrina Outline', sans-serif;\\n    font-weight: 600;\\n    font-size: 2.5rem;\\n}\\n\\nh4 {\\n    font-size: 2rem;\\n    margin: 1rem 0;\\n    text-align: center;\\n}\\n\\nh5 {\\n    font-size: 1.7rem;\\n    margin: 1rem 0;\\n}\\n\\np {\\n    font-size: 1.2rem;\\n}\\n\\n@media screen and (max-width: 1230px) {\\n    .item {\\n        height: 150px;\\n        width: 150px;\\n    }\\n}\\n\\n@media screen and (max-width: 1050px) {\\n    .item {\\n        height: 120px;\\n        width: 120px;\\n    }\\n}\\n\\n@media screen and (max-width: 968px) {\\n    .item {\\n        height: 100px;\\n        width: 100px;\\n    }\\n\\n    .menuItem {\\n        height: 800px;\\n    }\\n}\\n\\n@media screen and (max-width: 735px) {\\n    h2 {\\n        font-size: 2rem;\\n    }\\n\\n    .main-section {\\n        flex-direction: column;\\n    }\\n\\n    .logo-text {\\n        margin-top: -10px;\\n    }\\n\\n    header {\\n        flex-direction: column;\\n    }\\n\\n    * {\\n        font-size: 0.7em;\\n    }\\n\\n    ul {\\n        flex-direction: column;\\n    }\\n\\n    .item {\\n        margin-top: -50px;\\n    }\\n    .menuItem {\\n        height: 550px;\\n    }\\n\\n    .image-carousel {\\n        height: calc(30vh + 4rem);\\n    }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _images_pasta_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/pasta-icon.png */ \"./src/images/pasta-icon.png\");\n/* harmony import */ var _images_shrimp_alfredo_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/shrimp-alfredo.jpg */ \"./src/images/shrimp-alfredo.jpg\");\n/* harmony import */ var _images_classic_bolognaise_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/classic-bolognaise.jpg */ \"./src/images/classic-bolognaise.jpg\");\n/* harmony import */ var _images_turkey_bolognaise_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/turkey-bolognaise.jpg */ \"./src/images/turkey-bolognaise.jpg\");\n/* harmony import */ var _images_spicy_chicken_pizza_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/spicy-chicken-pizza.jpg */ \"./src/images/spicy-chicken-pizza.jpg\");\n/* harmony import */ var _images_balsamic_glaze_pizza_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/balsamic-glaze-pizza.jpg */ \"./src/images/balsamic-glaze-pizza.jpg\");\n/* harmony import */ var _images_sausage_and_peppers_19_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/sausage-and-peppers-19.jpg */ \"./src/images/sausage-and-peppers-19.jpg\");\n/* harmony import */ var _images_highlight_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/highlight.jpg */ \"./src/images/highlight.jpg\");\n/* harmony import */ var _images_marmotte_mountain_chef_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/marmotte-mountain-chef.jpg */ \"./src/images/marmotte-mountain-chef.jpg\");\n/* harmony import */ var _images_chefs_kitchen_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/chefs-kitchen.jpg */ \"./src/images/chefs-kitchen.jpg\");\n\n\n\n\n\n\n\n\n\n\n\n\nlet activeTab = 0;\n\n//navigation pane\nconst sidebar = document.createElement('section')\nsidebar.classList.add('sidebar')\n\nconst navbar = document.createElement('nav')\n\nconst homeButton = document.createElement('div')\nhomeButton.classList.add('navigation')\nconst homeText = document.createElement('h2')\nhomeText.innerHTML = 'About'\nhomeButton.appendChild(homeText)\nconst menuButton = document.createElement('div')\nmenuButton.classList.add('navigation')\nconst menuText = document.createElement('h2')\nmenuText.innerHTML = 'Menu'\nmenuButton.appendChild(menuText)\nconst contactButton = document.createElement('div')\ncontactButton.classList.add('navigation')\nconst contactText = document.createElement('h2')\ncontactText.innerHTML = 'Contact'\ncontactButton.appendChild(contactText)\n\nnavbar.appendChild(homeButton)\nnavbar.appendChild(menuButton)\nnavbar.appendChild(contactButton)\n\nsidebar.appendChild(navbar)\ndocument.body.appendChild(sidebar)\n\n//header\nconst header = document.createElement('header')\n\nconst logo = document.createElement('img')\nlogo.setAttribute('src', `${_images_pasta_icon_png__WEBPACK_IMPORTED_MODULE_1__}`)\nlogo.setAttribute('alt', 'Pastaria Logo')\nlogo.setAttribute('id', 'main-logo')\n\nconst logoText = document.createElement('h1')\nlogoText.classList.add('logo-text')\nlogoText.innerHTML = \"THE PASTARIA\"\n\nheader.appendChild(logo)\nheader.appendChild(logoText)\n\n\n//spacer\nconst spacer = document.createElement('div')\nspacer.classList.add('spacer')\n\n\n//body content\nconst bodyContent = document.createElement('article')\nbodyContent.classList.add('body-content')\nconst mottoText = document.createElement('h2')\nmottoText.innerHTML = '\"Your satisfaction is our satisfaction.\"'\nconst mottoPara = document.createElement('p')\nmottoPara.innerHTML = 'Every dish at Pastaria is crafted with love and utmost attention to detail. Our ingredients are hand-picked by our master chefs and our staff are trained to stringent standards of quality.'\nbodyContent.appendChild(mottoText)\nbodyContent.appendChild(mottoPara)\n\n//image carousel\n\nconst carousel = document.createElement('section')\ncarousel.classList.add('image-carousel')\n\nconst carouselContainer = document.createElement('div')\ncarouselContainer.classList.add('container')\n\ncarousel.appendChild(carouselContainer)\n\nclass Picture {\n    constructor(source) {\n    this.source = source}\n\n    info() {\n        console.log(this.source)\n    }\n}\n\nconst gallery = document.createElement('div')\ngallery.setAttribute('id', 'gallery')\ncarouselContainer.appendChild(gallery)\n\nlet first = new Picture(_images_highlight_jpg__WEBPACK_IMPORTED_MODULE_8__)\nlet second = new Picture(_images_marmotte_mountain_chef_jpg__WEBPACK_IMPORTED_MODULE_9__)\nlet third = new Picture(_images_chefs_kitchen_jpg__WEBPACK_IMPORTED_MODULE_10__)\n\nlet pictures = [first, second, third]\n\nlet i = 0;\nlet x2 = 0;\n\npictures.forEach((picture) => {\n    picture = document.createElement('img')\n    picture.setAttribute('src', `${pictures[i].source}`)\n    picture.classList.add('gallery')\n    gallery.appendChild(picture)\n    i++\n})\n/*\nconst leftButton = document.createElement('button')\nconst rightButton = document.createElement('button')\n\nleftButton.classList.add('leftnavButton')\nrightButton.classList.add('rightnavButton')\nleftButton.classList.add('navButton')\nrightButton.classList.add('navButton')\nleftButton.innerHTML = \"←\"\nrightButton.innerHTML = \"→\"\n\ncarouselContainer.appendChild(leftButton)\ncarouselContainer.appendChild(rightButton)\nconst galleryHUD = document.createElement('div')\ngalleryHUD.classList.add('galleryHUD')\n\nlet ticker = 0;\npictures.forEach((picture) => {\n    picture = document.createElement('button')\n    picture.classList.add('hudButton')\n    picture.setAttribute('data-value', `${ticker}`)\n    galleryHUD.appendChild(picture)\n    ticker++;\n})\n*/\nconst hudBanner = document.createElement('div')\nhudBanner.classList.add('hudBanner')\ncarouselContainer.appendChild(hudBanner)\n\n//hudBanner.appendChild(galleryHUD)\n\nconst hud = document.querySelectorAll('.hudButton')\n\nhud.forEach((button) => {\n    button.addEventListener('click', (e) => {\n    x2 = +button.dataset.value;\n    slide(x2) })\n})\n/*\nleftButton.addEventListener('click', (e) => {\n    if (x2 === 0) {x2 = (pictures.length - 1)} else {x2--};\n    slide(x2)\n})\n\nrightButton.addEventListener('click', (e) => {\n    if (x2 === (pictures.length - 1)) {x2 = 0} else {x2++;};\n    slide(x2);\n})\n\nfunction updateHUD(x2) {\n    hud.forEach((bubble) => {\n        bubble.classList.remove('activeBubble')\n    })\n   // hud[x2].classList.add('activeBubble')\n}\n*/\nfunction slide(x2) {\n    let galleryPosition = (x2) * (-100);\n    gallery.style.left = `${galleryPosition}%`;\n   // updateHUD(x2)\n}\n\n// updateHUD(x2)\nslide(x2)\n\nlet slideTimer = setInterval(function(){\n    if (x2 === (pictures.length - 1)) {x2 = 0} else {x2++;};\n    slide(x2)\n}, 5000);\n\nconst allButtons = document.querySelectorAll('button')\nallButtons.forEach((button) => {\n    button.addEventListener('click', (e) => {\n        clearInterval(slideTimer);\n        slideTimer = setInterval(function(){\n            if (x2 === (pictures.length - 1)) {x2 = 0} else {x2++;};\n            slide(x2)\n        }, 5000);\n    })\n})\n\n//creating main section\nconst mainSection = document.createElement('div')\nmainSection.classList.add('main-section')\nmainSection.appendChild(header)\nmainSection.appendChild(spacer)\ndocument.body.appendChild(mainSection)\n\n\n//adding homepage to document\nfunction home() {\n    activeTab = 0;\n    mainSection.appendChild(bodyContent)\n    mainSection.appendChild(carousel)\n}\n\nfunction menuCreate() {\n    activeTab = 1;\n    mainSection.appendChild(menu)\n}\n\nfunction contactCreate() {\n    activeTab = 2;\n    mainSection.appendChild(contactSection)\n}\n\nhome();\n\n\n//menu section creation\nconst menu = document.createElement('section')\nmenu.classList.add('menu')\n\n\n//menu header\nconst menuTitle = document.createElement('h2')\nmenuTitle.innerHTML = \"Menu\"\nconst menuBlurb = document.createElement('p')\nmenuBlurb.innerHTML = \"Our carefully curated selection of Italian-inspired cuisine.\"\n\nmenu.appendChild(menuTitle)\nmenu.appendChild(menuBlurb)\n\nconst menuItems = document.createElement('section')\nmenuItems.classList.add('menu-items')\nconst menuListOne = document.createElement('ul')\nconst menuListTwo = document.createElement('ul')\nmenuItems.appendChild(menuListOne)\nmenuItems.appendChild(menuListTwo)\nmenu.appendChild(menuItems)\n\n\n//menu items\nclass Item {\n    constructor(name, price, description, image) {\n        this.name = name;\n        this.price = price;\n        this.description = description;\n        this.image = image;\n    }\n}\n\nconst shrimpFredo = new Item(\n    'Wild Shrimp Alfredo',\n    '$24.99',\n    'Our classic shrimp alfredo is made with the freshest Wild Blue Shrimp, tossed in rich creamy garlic alfredo sauce.',\n    _images_shrimp_alfredo_jpg__WEBPACK_IMPORTED_MODULE_2__,\n    )\n\nconst bolognaise = new Item(\n    'Classic Bolognaise Pasta',\n    '$24.99',\n    'Our classic bolognaise is made with hormone-free, grass-fed beef, marinated for 48 hours in robust house tomato sauce.',\n    _images_classic_bolognaise_jpg__WEBPACK_IMPORTED_MODULE_3__,\n)\n\nconst turkeyBolognaise = new Item(\n    'Turkey Bolognaise Pasta',\n    '$24.99',\n    'Our turkey bolognaise is made with ethically raised free-range turkey, tenderly simmered in spicy house tomato sauce.',\n    _images_turkey_bolognaise_jpg__WEBPACK_IMPORTED_MODULE_4__,\n)\n\nconst spicyPizza = new Item(\n    'Spicy Chicken Pizza',\n    '$32.99',\n    'Our spicy chicken pizza is made with organic free range chicken and garnished with marinara sauce, onions, pepperoni, and more.',\n    _images_spicy_chicken_pizza_jpg__WEBPACK_IMPORTED_MODULE_5__,\n)\n\nconst balsamicPizza = new Item(\n    'Balsamic Glaze Pizza',\n    '$33.99',\n    'Our balsamic glaze pizza is made with bold imported balsmic vinegar from Tuscany, and topped with spinach, sundried tomatoes, and mushrooms.',\n    _images_balsamic_glaze_pizza_jpg__WEBPACK_IMPORTED_MODULE_6__,\n)\n\nconst sausageHoagie = new Item(\n    'Italian Sausage Hoagie',\n    '$18.99',\n    'Our sausage-and-pepper hoagies are an upscale take on a street-food classic. Each order comes with two hoagies topped with our mesquite marinara sauce.',\n    _images_sausage_and_peppers_19_jpg__WEBPACK_IMPORTED_MODULE_7__,\n)\n\nlet menuArray = [\n    shrimpFredo,\n    bolognaise,\n    turkeyBolognaise,\n    spicyPizza,\n    balsamicPizza,\n    sausageHoagie\n]\n\nlet x = 0;\nmenuArray.forEach((item) => {\n    let list = document.createElement('li')\n    let container = document.createElement('article')\n    container.classList.add('menuItem')\n    let foodImage = document.createElement('img')\n    foodImage.classList.add('item')\n    foodImage.setAttribute('src', `${item.image}`)\n    let itemTitle = document.createElement('h4')\n    itemTitle.innerHTML = `${item.name}`\n    let itemPrice = document.createElement('h5')\n    itemPrice.innerHTML = `${item.price}`\n    let itemDescription = document.createElement('p')\n    itemDescription.innerHTML = `${item.description}`\n    container.appendChild(foodImage)\n    container.appendChild(itemTitle)\n    container.appendChild(itemPrice)\n    container.appendChild(itemDescription)\n    list.appendChild(container)\n    if (x < 3) {menuListOne.appendChild(list)} else {\n        menuListTwo.appendChild(list)\n    }\n    x++\n})\n\n//creating contact section\nconst contactSection = document.createElement('section')\ncontactSection.classList.add('contact')\n\nconst contactHeading = document.createElement('h2')\ncontactHeading.innerHTML = \"Contact Us\"\n\nconst ourContact = document.createElement('address')\nourContact.classList.add('ourContact')\nconst emailAddress = document.createElement('p')\nemailAddress.innerHTML = \"inquiries@pastaria.com\"\nconst phoneNumber = document.createElement('p')\nphoneNumber.innerHTML = \"(555)-555-5555\"\nconst address = document.createElement('p')\naddress.innerHTML = \"123 Fake Street, Toronto, ON, Canada\"\n\nourContact.appendChild(emailAddress)\nourContact.appendChild(phoneNumber)\nourContact.appendChild(address)\n\nconst customerForm = document.createElement('form')\ncustomerForm.setAttribute('action', 'placeholder') //send the form to 'placeholder'\ncustomerForm.setAttribute('method', 'post')\n\nconst nameInputLabel = document.createElement('label')\nnameInputLabel.setAttribute('for', 'yourName')\nnameInputLabel.innerHTML = \"Your Name:   \"\nconst nameInput = document.createElement('input')\nnameInput.setAttribute('type', 'text')\nnameInput.setAttribute('id', 'yourName')\nnameInput.setAttribute('placeholder', 'e.g. John Smith')\n\nconst emailInputLabel = document.createElement('label')\nemailInputLabel.setAttribute('for', 'yourName')\nemailInputLabel.innerHTML = \"Email Address:   \"\nconst emailInput = document.createElement('input')\nemailInput.setAttribute('type', 'email')\nemailInput.setAttribute('id', 'email')\nemailInput.setAttribute('placeholder', 'example@email.com')\n\nconst inquiryInputLabel = document.createElement('label')\ninquiryInputLabel.setAttribute('for', 'inquiry')\ninquiryInputLabel.innerHTML = \"Please tell us how we can assist you:   \"\nconst inquiryInput = document.createElement('textarea')\ninquiryInput.setAttribute('rows', '10')\ninquiryInput.setAttribute('cols', '60')\ninquiryInput.setAttribute('id', 'inquiry')\n\nconst submitButton = document.createElement('button')\nsubmitButton.setAttribute('type', 'submit')\nsubmitButton.innerHTML = \"Submit\"\n\nconst lineBreak = document.createElement('br')\nconst lineBreak2 = document.createElement('br')\nconst lineBreak3 = document.createElement('br')\nconst lineBreak4 = document.createElement('br')\n\ncustomerForm.appendChild(nameInputLabel)\ncustomerForm.appendChild(nameInput)\ncustomerForm.appendChild(emailInputLabel)\ncustomerForm.appendChild(emailInput)\ncustomerForm.appendChild(lineBreak)\ncustomerForm.appendChild(lineBreak2)\ncustomerForm.appendChild(inquiryInputLabel)\ncustomerForm.appendChild(inquiryInput)\ncustomerForm.appendChild(lineBreak3)\ncustomerForm.appendChild(lineBreak4)\ncustomerForm.appendChild(submitButton)\n\ncontactSection.appendChild(contactHeading)\ncontactSection.appendChild(ourContact)\ncontactSection.appendChild(customerForm)\n\n//sidebar buttons\n\nfunction removeTab() {\n    switch (activeTab) {\n        case 0: mainSection.removeChild(bodyContent);\n            mainSection.removeChild(carousel);\n            break\n        case 1: mainSection.removeChild(menu);\n            break;\n        case 2: mainSection.removeChild(contactSection);\n            break}\n}\nhomeButton.addEventListener('click', (e) => {\n    removeTab()\n    home();\n})\n\nmenuButton.addEventListener('click', (e) => {\n    removeTab()\n    menuCreate()\n})\n\ncontactButton.addEventListener('click', (e) => {\n    removeTab()\n    contactCreate()\n})\n\nconst headerButton = document.querySelector('header')\n\nheaderButton.addEventListener('click', (e) => {\n    removeTab()\n    home();\n})\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/images/balsamic-glaze-pizza.jpg":
/*!*********************************************!*\
  !*** ./src/images/balsamic-glaze-pizza.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eec14b21f4c205e98488.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/balsamic-glaze-pizza.jpg?");

/***/ }),

/***/ "./src/images/chefs-kitchen.jpg":
/*!**************************************!*\
  !*** ./src/images/chefs-kitchen.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"96665a679ba573139a2e.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/chefs-kitchen.jpg?");

/***/ }),

/***/ "./src/images/classic-bolognaise.jpg":
/*!*******************************************!*\
  !*** ./src/images/classic-bolognaise.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0cd4ccc8dec0d1e528b0.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/classic-bolognaise.jpg?");

/***/ }),

/***/ "./src/images/highlight.jpg":
/*!**********************************!*\
  !*** ./src/images/highlight.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0365fb984a91f6af1eea.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/highlight.jpg?");

/***/ }),

/***/ "./src/images/marmotte-mountain-chef.jpg":
/*!***********************************************!*\
  !*** ./src/images/marmotte-mountain-chef.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6bf203c63ec1d398b7e4.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/marmotte-mountain-chef.jpg?");

/***/ }),

/***/ "./src/images/pasta-icon.png":
/*!***********************************!*\
  !*** ./src/images/pasta-icon.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eaeadb5bc9a9301f9226.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/pasta-icon.png?");

/***/ }),

/***/ "./src/images/sausage-and-peppers-19.jpg":
/*!***********************************************!*\
  !*** ./src/images/sausage-and-peppers-19.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"39ef55ff6e75fcb3acf8.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/sausage-and-peppers-19.jpg?");

/***/ }),

/***/ "./src/images/shrimp-alfredo.jpg":
/*!***************************************!*\
  !*** ./src/images/shrimp-alfredo.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e3c2986bc8df61eaca10.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/shrimp-alfredo.jpg?");

/***/ }),

/***/ "./src/images/spicy-chicken-pizza.jpg":
/*!********************************************!*\
  !*** ./src/images/spicy-chicken-pizza.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"685ff9ecbf2dcc12e868.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/spicy-chicken-pizza.jpg?");

/***/ }),

/***/ "./src/images/spoon.png":
/*!******************************!*\
  !*** ./src/images/spoon.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9357e69261f3ef899af2.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/spoon.png?");

/***/ }),

/***/ "./src/images/turkey-bolognaise.jpg":
/*!******************************************!*\
  !*** ./src/images/turkey-bolognaise.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"746d7dc391c01a5b4d91.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/turkey-bolognaise.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;