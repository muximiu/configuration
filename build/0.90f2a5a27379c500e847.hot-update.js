"use strict";
self["webpackHotUpdate_01_basic_environment_configuration"](0,{

/***/ 28:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function Giphy(id) {
  var iframe = document.createElement("iframe");
  iframe.src = "https://giphy.com/embed/".concat(id);
  iframe.width = "480";
  iframe.height = "270";
  iframe.frameBorder = "0";
  iframe.classList.add("giphy-embed");
  iframe.allowFullscreen = true;
  return iframe;
}
/* harmony default export */ __webpack_exports__["default"] = (Giphy);

/***/ }),

/***/ 27:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function Root(text) {
  var h1 = document.createElement("h1");
  h1.innerText = text;
  return h1;
}
/* harmony default export */ __webpack_exports__["default"] = (Root);

/***/ }),

/***/ 26:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Views_Root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _Components_Giphy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);
    this.$app = document.getElementById("app");
    this.render();
  }
  return _createClass(App, [{
    key: "render",
    value: function render() {
      this.$app.appendChild((0,_Views_Root__WEBPACK_IMPORTED_MODULE_0__["default"])("Test project works!"));
      this.$app.appendChild((0,_Components_Giphy__WEBPACK_IMPORTED_MODULE_1__["default"])("3o6Ztb6YB8qg3MvkgE"));
    }
  }]);
}();
new App();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "c99f8a69414997de2148"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45MGYyYTVhMjczNzljNTAwZTg0Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxTQUFTQSxLQUFLQSxDQUFDQyxFQUFFLEVBQUU7RUFDakIsSUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7RUFDL0NGLE1BQU0sQ0FBQ0csR0FBRyw4QkFBQUMsTUFBQSxDQUE4QkwsRUFBRSxDQUFFO0VBQzVDQyxNQUFNLENBQUNLLEtBQUssR0FBRyxLQUFLO0VBQ3BCTCxNQUFNLENBQUNNLE1BQU0sR0FBRyxLQUFLO0VBQ3JCTixNQUFNLENBQUNPLFdBQVcsR0FBRyxHQUFHO0VBQ3hCUCxNQUFNLENBQUNRLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztFQUNuQ1QsTUFBTSxDQUFDVSxlQUFlLEdBQUcsSUFBSTtFQUU3QixPQUFPVixNQUFNO0FBQ2Y7QUFFQSwrREFBZUYsS0FBSzs7Ozs7Ozs7QUNacEIsU0FBU2EsSUFBSUEsQ0FBQ0MsSUFBSSxFQUFFO0VBQ2xCLElBQU1DLEVBQUUsR0FBR1osUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDO0VBQ3ZDVyxFQUFFLENBQUNDLFNBQVMsR0FBR0YsSUFBSTtFQUNuQixPQUFPQyxFQUFFO0FBQ1g7QUFFQSwrREFBZUYsSUFBSTs7Ozs7Ozs7Ozs7Ozs7OztBQ05hO0FBQ087QUFBQSxJQUVqQ0ksR0FBRztFQUNQLFNBQUFBLElBQUEsRUFBYztJQUFBQyxlQUFBLE9BQUFELEdBQUE7SUFDWixJQUFJLENBQUNFLElBQUksR0FBR2hCLFFBQVEsQ0FBQ2lCLGNBQWMsQ0FBQyxLQUFLLENBQUM7SUFDMUMsSUFBSSxDQUFDQyxNQUFNLENBQUMsQ0FBQztFQUNmO0VBQUMsT0FBQUMsWUFBQSxDQUFBTCxHQUFBO0lBQUFNLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFILE1BQU1BLENBQUEsRUFBRztNQUNQLElBQUksQ0FBQ0YsSUFBSSxDQUFDTSxXQUFXLENBQUNaLHVEQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztNQUNsRCxJQUFJLENBQUNNLElBQUksQ0FBQ00sV0FBVyxDQUFDekIsNkRBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3BEO0VBQUM7QUFBQTtBQUdILElBQUlpQixHQUFHLENBQUMsQ0FBQzs7Ozs7Ozs7VUNmVCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8wMV9iYXNpY19lbnZpcm9ubWVudF9jb25maWd1cmF0aW9uLy4vanMvQ29tcG9uZW50cy9HaXBoeS5qcyIsIndlYnBhY2s6Ly8wMV9iYXNpY19lbnZpcm9ubWVudF9jb25maWd1cmF0aW9uLy4vanMvVmlld3MvUm9vdC5qcyIsIndlYnBhY2s6Ly8wMV9iYXNpY19lbnZpcm9ubWVudF9jb25maWd1cmF0aW9uLy4vanMvYXBwLmpzIiwid2VicGFjazovLzAxX2Jhc2ljX2Vudmlyb25tZW50X2NvbmZpZ3VyYXRpb24vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIEdpcGh5KGlkKSB7XG4gIGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gIGlmcmFtZS5zcmMgPSBgaHR0cHM6Ly9naXBoeS5jb20vZW1iZWQvJHtpZH1gO1xuICBpZnJhbWUud2lkdGggPSBcIjQ4MFwiO1xuICBpZnJhbWUuaGVpZ2h0ID0gXCIyNzBcIjtcbiAgaWZyYW1lLmZyYW1lQm9yZGVyID0gXCIwXCI7XG4gIGlmcmFtZS5jbGFzc0xpc3QuYWRkKFwiZ2lwaHktZW1iZWRcIik7XG4gIGlmcmFtZS5hbGxvd0Z1bGxzY3JlZW4gPSB0cnVlO1xuXG4gIHJldHVybiBpZnJhbWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdpcGh5OyIsImZ1bmN0aW9uIFJvb3QodGV4dCkge1xuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaDEuaW5uZXJUZXh0ID0gdGV4dDtcbiAgcmV0dXJuIGgxO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSb290OyIsImltcG9ydCBSb290IGZyb20gXCIuL1ZpZXdzL1Jvb3RcIjtcbmltcG9ydCBHaXBoeSBmcm9tIFwiLi9Db21wb25lbnRzL0dpcGh5XCI7XG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuJGFwcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy4kYXBwLmFwcGVuZENoaWxkKFJvb3QoXCJUZXN0IHByb2plY3Qgd29ya3MhXCIpKTtcbiAgICB0aGlzLiRhcHAuYXBwZW5kQ2hpbGQoR2lwaHkoXCIzbzZadGI2WUI4cWczTXZrZ0VcIikpO1xuICB9XG59XG5cbm5ldyBBcHAoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiYzk5ZjhhNjk0MTQ5OTdkZTIxNDhcIjsgfSJdLCJuYW1lcyI6WyJHaXBoeSIsImlkIiwiaWZyYW1lIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiY29uY2F0Iiwid2lkdGgiLCJoZWlnaHQiLCJmcmFtZUJvcmRlciIsImNsYXNzTGlzdCIsImFkZCIsImFsbG93RnVsbHNjcmVlbiIsIlJvb3QiLCJ0ZXh0IiwiaDEiLCJpbm5lclRleHQiLCJBcHAiLCJfY2xhc3NDYWxsQ2hlY2siLCIkYXBwIiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImFwcGVuZENoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==