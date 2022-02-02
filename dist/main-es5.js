(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! K:\Angular Apps\Ramanathan-Sks\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1zuJ":
    /*!***************************!*\
      !*** ./src/app/window.ts ***!
      \***************************/

    /*! exports provided: getWindow */

    /***/
    function zuJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getWindow", function () {
        return getWindow;
      });

      var getWindow = function getWindow() {
        return window;
      };
      /***/

    },

    /***/
    "7Sx4":
    /*!**********************************************************************!*\
      !*** ./src/app/not-found-component/not-found-component.component.ts ***!
      \**********************************************************************/

    /*! exports provided: NotFoundComponentComponent, OfflineComponent */

    /***/
    function Sx4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFoundComponentComponent", function () {
        return NotFoundComponentComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OfflineComponent", function () {
        return OfflineComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var NotFoundComponentComponent = /*#__PURE__*/function () {
        function NotFoundComponentComponent(title) {
          _classCallCheck(this, NotFoundComponentComponent);

          this.title = title;
          title.setTitle("404 $ | Ramanathan");
        }

        _createClass(NotFoundComponentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NotFoundComponentComponent;
      }();

      NotFoundComponentComponent.ɵfac = function NotFoundComponentComponent_Factory(t) {
        return new (t || NotFoundComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]));
      };

      NotFoundComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NotFoundComponentComponent,
        selectors: [["app-not-found-component"]],
        decls: 13,
        vars: 0,
        consts: [["id", "main"], [1, "fof"], ["src", "https://img.icons8.com/fluency/55/000000/error-cloud.png"], ["routerLink", ""], ["src", "https://img.icons8.com/glyph-neue/64/000000/circled-left-2.png"]],
        template: function NotFoundComponentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Error 404");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
        styles: ["*[_ngcontent-%COMP%] {\r\n    transition: all 0.6s;\r\n}\r\n\r\nhtml[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n    font-family: 'Lato', sans-serif;\r\n    color: #888;\r\n    margin: 0;\r\n}\r\n\r\n#main[_ngcontent-%COMP%] {\r\n    display: table;\r\n    width: 100%;\r\n    height: 100vh;\r\n    text-align: center;\r\n}\r\n\r\n.fof[_ngcontent-%COMP%] {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n\r\n.fof[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 50px;\r\n    display: inline-block;\r\n    padding-right: 12px;\r\n    animation: type .5s alternate infinite;\r\n}\r\n\r\n@keyframes type {\r\n    from {\r\n        box-shadow: inset -3px 0px 0px #888;\r\n    }\r\n    to {\r\n        box-shadow: inset -3px 0px 0px transparent;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC1jb21wb25lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsV0FBVztJQUNYLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSTtRQUNJLG1DQUFtQztJQUN2QztJQUNBO1FBQ0ksMENBQTBDO0lBQzlDO0FBQ0oiLCJmaWxlIjoibm90LWZvdW5kLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC42cztcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjODg4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jbWFpbiB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZvZiB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmZvZiBoMSB7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG4gICAgYW5pbWF0aW9uOiB0eXBlIC41cyBhbHRlcm5hdGUgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgdHlwZSB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtM3B4IDBweCAwcHggIzg4ODtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtM3B4IDBweCAwcHggdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbn0iXX0= */"]
      });

      var OfflineComponent = /*#__PURE__*/function () {
        function OfflineComponent(route, title) {
          _classCallCheck(this, OfflineComponent);

          this.route = route;
          this.title = title;
          title.setTitle("Offline | Ramanathan");
        }

        _createClass(OfflineComponent, [{
          key: "reload",
          value: function reload() {
            this.route.navigateByUrl("").then(function () {
              window.location.reload();
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OfflineComponent;
      }();

      OfflineComponent.ɵfac = function OfflineComponent_Factory(t) {
        return new (t || OfflineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]));
      };

      OfflineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OfflineComponent,
        selectors: [["app-offline-component"]],
        decls: 13,
        vars: 0,
        consts: [["id", "main"], [1, "fof"], [3, "click"], ["src", "https://img.icons8.com/fluency/48/000000/refresh.png"]],
        template: function OfflineComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Connecting... ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Offline");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OfflineComponent_Template_span_click_11_listener() {
              return ctx.reload();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["*[_ngcontent-%COMP%] {\r\n    transition: all 0.6s;\r\n}\r\n\r\nhtml[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n    font-family: 'Lato', sans-serif;\r\n    color: #888;\r\n    margin: 0;\r\n}\r\n\r\n#main[_ngcontent-%COMP%] {\r\n    display: table;\r\n    width: 100%;\r\n    height: 100vh;\r\n    text-align: center;\r\n}\r\n\r\n.fof[_ngcontent-%COMP%] {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n\r\n.fof[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 50px;\r\n    display: inline-block;\r\n    padding-right: 12px;\r\n    animation: type .5s alternate infinite;\r\n}\r\n\r\n@keyframes type {\r\n    from {\r\n        box-shadow: inset -3px 0px 0px #888;\r\n    }\r\n    to {\r\n        box-shadow: inset -3px 0px 0px transparent;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9mZmxpbmUtY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsV0FBVztJQUNYLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSTtRQUNJLG1DQUFtQztJQUN2QztJQUNBO1FBQ0ksMENBQTBDO0lBQzlDO0FBQ0oiLCJmaWxlIjoib2ZmbGluZS1jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC42cztcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjODg4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jbWFpbiB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZvZiB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmZvZiBoMSB7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG4gICAgYW5pbWF0aW9uOiB0eXBlIC41cyBhbHRlcm5hdGUgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgdHlwZSB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtM3B4IDBweCAwcHggIzg4ODtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtM3B4IDBweCAwcHggdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "84zG":
    /*!******************************************!*\
      !*** ./src/app/about/about.component.ts ***!
      \******************************************/

    /*! exports provided: AboutComponent */

    /***/
    function zG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
        return AboutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      var AboutComponent = /*#__PURE__*/function () {
        function AboutComponent(title) {
          _classCallCheck(this, AboutComponent);

          this.title = title;
          this.title.setTitle("About | Ramanathan");
        }

        _createClass(AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AboutComponent;
      }();

      AboutComponent.ɵfac = function AboutComponent_Factory(t) {
        return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]));
      };

      AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AboutComponent,
        selectors: [["app-about"]],
        decls: 17,
        vars: 0,
        consts: [[1, "about"], ["id", "about_me_title", 1, "abt"], [1, "about_me"]],
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Hello Gens, Welcome to my Page.. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Hi peps a warm welcome to my portfolio, Where you can find only links to my social media and some of my work :) You can ask, Why ? For What ? Why am I here ?, Well as you already gussed that by the idea of this portfolio. Yes.. this entire application is build myself and ofCourse Google.... ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Well this is About Me right !... So-So here we go\u2026 I\u2019m an Instrumentation Engineer, Who is passionate about photography and works in IT. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".abt[_ngcontent-%COMP%] {\r\n    padding-top: 65px;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-size: 40px;\r\n    color: rgb(23, 32, 23);\r\n    opacity: 80%;\r\n    text-align: center;\r\n    font-style: italic;\r\n    line-height: 50px;\r\n}\r\n\r\n.about[_ngcontent-%COMP%] {\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    padding: 2%;\r\n}\r\n\r\n.about_me[_ngcontent-%COMP%] {\r\n    height: auto;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    perspective: 1px;\r\n    height: 100vh;\r\n    transform-style: preserve-3d;\r\n    image-rendering: optimizeSpeed;\r\n    font-family: futura-pt;\r\n    font-weight: 300;\r\n    font-style: normal;\r\n    font-size: 20px;\r\n    letter-spacing: 0em;\r\n    line-height: 1.55em;\r\n    text-transform: none;\r\n}\r\n\r\nhtml[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    height: 100%;\r\n}\r\n\r\n@media(max-width:600px) {\r\n    body[_ngcontent-%COMP%] {\r\n        height: 100%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsNERBQTREO0lBQzVELGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksNERBQTREO0lBQzVELFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFidCB7XHJcbiAgICBwYWRkaW5nLXRvcDogNjVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGNvbG9yOiByZ2IoMjMsIDMyLCAyMyk7XHJcbiAgICBvcGFjaXR5OiA4MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxufVxyXG5cclxuLmFib3V0IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG59XHJcblxyXG4uYWJvdXRfbWUge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwZXJzcGVjdGl2ZTogMXB4O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICBpbWFnZS1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XHJcbiAgICBmb250LWZhbWlseTogZnV0dXJhLXB0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41NWVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo2MDBweCkge1xyXG4gICAgYm9keSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG59Il19 */"]
      });
      /***/
    },

    /***/
    "8973":
    /*!*****************************************!*\
      !*** ./src/app/imageservice.service.ts ***!
      \*****************************************/

    /*! exports provided: ImageserviceService */

    /***/
    function _(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageserviceService", function () {
        return ImageserviceService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");

      var ImageserviceService = /*#__PURE__*/function () {
        function ImageserviceService(firedb) {
          _classCallCheck(this, ImageserviceService);

          this.firedb = firedb;
          this.onFirstLoad = true;
        } //Image service


        _createClass(ImageserviceService, [{
          key: "getCarouselObs",
          value: function getCarouselObs() {
            this.CarouselObs = this.firedb.collection('gallery').valueChanges();
            return this.CarouselObs;
          }
        }, {
          key: "getTitlesObs",
          value: function getTitlesObs() {
            this.TitleObs = this.firedb.collection('tiles').valueChanges();
            return this.TitleObs;
          }
        }, {
          key: "getImgageObs",
          value: function getImgageObs() {
            this.ImageObs = this.firedb.collection('image').valueChanges();
            return this.ImageObs;
          }
        }, {
          key: "getCardImgObs",
          value: function getCardImgObs() {
            this.CardObs = this.firedb.collection('cards').valueChanges();
            return this.CardObs;
          } //service

        }, {
          key: "getMobileOperatingSystem",
          value: function getMobileOperatingSystem() {
            var userAgent = navigator.vendor;

            if (/windows phone|window|android/i.test(navigator.userAgent)) {
              return "WIN";
            }

            if (/iPad|iPhone|iPod/.test(userAgent)) {
              return "iOS";
            }

            return "unknown";
          }
        }]);

        return ImageserviceService;
      }();

      ImageserviceService.ɵfac = function ImageserviceService_Factory(t) {
        return new (t || ImageserviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]));
      };

      ImageserviceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ImageserviceService,
        factory: ImageserviceService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "9vUh":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function vUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _imageservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../imageservice.service */
      "8973");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["homebg"];

      function HomeComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HomeComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HomeComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", i_r3.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r3.des);
        }
      }

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(imgser, title) {
          _classCallCheck(this, HomeComponent);

          this.imgser = imgser;
          this.title = title;
          this.cardsimgList = [];
          this.isiosdev = false;
          this.title.setTitle("Ramanathan Sks");
          var device = this.imgser.getMobileOperatingSystem();
          if (device == "WIN") this.isiosdev = false;else this.isiosdev = true;
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.HomeSub = this.imgser.getCardImgObs().subscribe(function (i) {
              var cardObj = i;
              cardObj.map(function (img) {
                _this.cardsimgList.push(img);
              });
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.HomeSub.unsubscribe();
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_imageservice_service__WEBPACK_IMPORTED_MODULE_1__["ImageserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]));
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        viewQuery: function HomeComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.HomeBg = _t.first);
          }
        },
        decls: 16,
        vars: 3,
        consts: [["class", "wrapper", 4, "ngIf"], ["class", "homehtml", 4, "ngIf"], [1, "subtitle"], ["href", "https://www.instagram.com/ramanathan_sks/", "target", "_blank"], [1, "cardsRDEM"], [1, "box"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "wrapper"], [1, "section", "parallax", "bg1"], [1, "section", "static"], [1, "section", "parallax", "bg2"], [1, "section", "static1"], [1, "homehtml"], [1, "homebody"], ["id", "hero-1"], [1, "container"], ["id", "hero-2"], ["id", "hero-3"], ["id", "hero-4"], [1, "card"], [1, "imgBx"], ["draggable", "false", "matTooltipPosition", "right", "loading", "lazy", "alt", "images", 3, "src"], [1, "details"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 5, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_3_Template, 10, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Social");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Follow my work on ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Instagram");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HomeComponent_div_13_Template, 7, 2, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isiosdev);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isiosdev);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cardsimgList);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        styles: ["body[_ngcontent-%COMP%] {\r\n        margin: 0;\r\n        padding: 0;\r\n        height: 100%;\r\n        overflow-y: hidden;\r\n        overflow-x: hidden;\r\n        perspective: 1px;\r\n        transform-style: preserve-3d;\r\n        background: rgba(39, 39, 39, 0.87);\r\n        image-rendering: optimizeSpeed;\r\n        font-family: futura-pt;\r\n        font-weight: 300;\r\n        font-style: normal;\r\n        font-size: 20px;\r\n        letter-spacing: 0em;\r\n        line-height: 1.55em;\r\n        text-transform: none;\r\n        color: rgba(255, 255, 255, 0.973);\r\n    }\r\n    \r\n    html[_ngcontent-%COMP%] {\r\n        height: 100%;\r\n        overflow: hidden;\r\n    }\r\n    \r\n    section[_ngcontent-%COMP%] {\r\n        padding: 10vh;\r\n        position: relative;\r\n        min-height: 100vh;\r\n        width: 100vw;\r\n        transform-style: preserve-3d;\r\n    }\r\n    \r\n    section[_ngcontent-%COMP%], section[_ngcontent-%COMP%]:before {\r\n        background: 50% 50% / cover;\r\n    }\r\n    \r\n    section[_ngcontent-%COMP%]:before {\r\n        content: \"\";\r\n        position: absolute;\r\n        top: 0;\r\n        bottom: 0;\r\n        left: 0;\r\n        right: 0;\r\n    }\r\n    \r\n    #hero-3[_ngcontent-%COMP%]:before {\r\n        -webkit-background-image: url(\"https://firebasestorage.googleapis.com/v0/b/ram-port.appspot.com/o/home%2F2.jpeg?alt=media&token=71bf153b-f0fc-4db8-880b-34b40497487b\");\r\n        -moz-background-image: url(\"https://firebasestorage.googleapis.com/v0/b/ram-port.appspot.com/o/home%2F2.jpeg?alt=media&token=71bf153b-f0fc-4db8-880b-34b40497487b\");\r\n        -o-background-image: url(\"https://firebasestorage.googleapis.com/v0/b/ram-port.appspot.com/o/home%2F2.jpeg?alt=media&token=71bf153b-f0fc-4db8-880b-34b40497487b\");\r\n        background-image: url(\"https://firebasestorage.googleapis.com/v0/b/ram-port.appspot.com/o/home%2F2.jpeg?alt=media&token=71bf153b-f0fc-4db8-880b-34b40497487b\");\r\n        transform: translateZ(-1px) scale(1);\r\n        background-size: cover;\r\n        z-index: -1;\r\n    }\r\n    \r\n    #hero-4[_ngcontent-%COMP%]:before {\r\n        -webkit-background-image: url(\"https://firebasestorage.googleapis.com/v0/b/ram-port.appspot.com/o/home%2F4.jpeg?alt=media&token=ee6a801e-5175-4a2f-aacf-d3cf2b3d50e8\");\r\n        -moz-background-image: url(\"https://firebasestorage.googleapis.com/v0/b/ram-port.appspot.com/o/home%2F4.jpeg?alt=media&token=ee6a801e-5175-4a2f-aacf-d3cf2b3d50e8\");\r\n        -o-background-image: url(\"https://firebasestorage.googleapis.com/v0/b/ram-port.appspot.com/o/home%2F4.jpeg?alt=media&token=ee6a801e-5175-4a2f-aacf-d3cf2b3d50e8\");\r\n        background-image: url(\"https://firebasestorage.googleapis.com/v0/b/ram-port.appspot.com/o/home%2F4.jpeg?alt=media&token=ee6a801e-5175-4a2f-aacf-d3cf2b3d50e8\");\r\n        background-attachment: fixed;\r\n        background-size: cover;\r\n        z-index: -4;\r\n    }\r\n    \r\n    #hero-1[_ngcontent-%COMP%]:before {\r\n        -webkit-background-image: url(\"https://firebasestorage.googleapis.com/v0/b/ram-port.appspot.com/o/home%2F1.jpeg?alt=media&token=144d6157-4157-48e8-83ac-9c6567384c43\");\r\n        -moz-background-image: url(\"https://firebasestorage.googleapis.com/v0/b/ram-port.appspot.com/o/home%2F1.jpeg?alt=media&token=144d6157-4157-48e8-83ac-9c6567384c43\");\r\n        -o-background-image: url(\"https://firebasestorage.googleapis.com/v0/b/ram-port.appspot.com/o/home%2F1.jpeg?alt=media&token=144d6157-4157-48e8-83ac-9c6567384c43\");\r\n        background-image: url(\"https://firebasestorage.googleapis.com/v0/b/ram-port.appspot.com/o/home%2F1.jpeg?alt=media&token=144d6157-4157-48e8-83ac-9c6567384c43\");\r\n        transform: translateZ(-1px) scale(1);\r\n        background-size: cover;\r\n        z-index: -3;\r\n    }\r\n    \r\n    #hero-2[_ngcontent-%COMP%]:before {\r\n        -webkit-background-image: url(\"https://firebasestorage.googleapis.com/v0/b/ram-port.appspot.com/o/home%2F3.JPG?alt=media&token=294c79b3-4245-48ec-a8a0-4083a6165005\");\r\n        -moz-background-image: url(\"https://firebasestorage.googleapis.com/v0/b/ram-port.appspot.com/o/home%2F3.JPG?alt=media&token=294c79b3-4245-48ec-a8a0-4083a6165005\");\r\n        -o-background-image: url(\"https://firebasestorage.googleapis.com/v0/b/ram-port.appspot.com/o/home%2F3.JPG?alt=media&token=294c79b3-4245-48ec-a8a0-4083a6165005\");\r\n        background-image: url(\"https://firebasestorage.googleapis.com/v0/b/ram-port.appspot.com/o/home%2F3.JPG?alt=media&token=294c79b3-4245-48ec-a8a0-4083a6165005\");\r\n        background-attachment: fixed;\r\n        background-size: cover;\r\n        z-index: -4;\r\n    }\r\n    \r\n    \r\n    \r\n    .container[_ngcontent-%COMP%] {\r\n        color: #ccc;\r\n        font-size: 4vw;\r\n        margin: 0 auto;\r\n        padding: 5px 0;\r\n        text-align: center;\r\n        width: 100%;\r\n    }\r\n    \r\n    @media screen and (-webkit-min-device-pixel-ratio: 2) {\r\n        #section-5[_ngcontent-%COMP%]:before {\r\n            background-attachment: scroll;\r\n        }\r\n    }\r\n    \r\n    .subtitle[_ngcontent-%COMP%] {\r\n        padding-top: 10px;\r\n        text-align: center;\r\n        background-color: rgba(39, 39, 39, 0.87);\r\n        height: 100px;\r\n        text-decoration: none;\r\n    }\r\n    \r\n    .subtitle[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\r\n        text-decoration: none;\r\n    }\r\n    \r\n    h1[_ngcontent-%COMP%] {\r\n        font-family: Futura, \"Trebuchet MS\", Arial, sans-serif;\r\n        font-size: 24px;\r\n        font-style: normal;\r\n        font-variant: normal;\r\n        font-weight: 700;\r\n        line-height: 22px;\r\n        color: white;\r\n    }\r\n    \r\n    h3[_ngcontent-%COMP%] {\r\n        font-family: Futura, \"Trebuchet MS\", Arial, sans-serif;\r\n        font-size: 22px;\r\n        font-style: normal;\r\n        font-variant: normal;\r\n        font-weight: 700;\r\n        line-height: 15.4px;\r\n        color: white;\r\n    }\r\n    \r\n    p[_ngcontent-%COMP%] {\r\n        font-family: Futura, \"Trebuchet MS\", Arial, sans-serif;\r\n        font-size: 14px;\r\n        font-style: normal;\r\n        font-variant: normal;\r\n        font-weight: 400;\r\n        line-height: 20px;\r\n    }\r\n    \r\n    .cardsRDEM[_ngcontent-%COMP%] {\r\n        margin: 0;\r\n        padding: 0;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        min-height: 100vh;\r\n        background: rgba(39, 39, 39, 0.87);\r\n        font-family: sans-serif;\r\n    }\r\n    \r\n    img[_ngcontent-%COMP%] {\r\n        image-rendering: optimizeQuality;\r\n        border-radius: 15px;\r\n        -webkit-user-select: none;\r\n        user-select: none;\r\n        -webkit-touch-callout: none;\r\n    }\r\n    \r\n    .box[_ngcontent-%COMP%] {\r\n        width: 1200px;\r\n        padding-top: 25px;\r\n        padding-bottom: 85px;\r\n        display: grid;\r\n        grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));\r\n        grid-gap: 20px;\r\n        margin: 0 auto;\r\n    }\r\n    \r\n    .card[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        width: 250px;\r\n        height: 320px;\r\n        background: rgb(230, 230, 230);\r\n        margin: 0 auto;\r\n        border-radius: 10px;\r\n        box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\r\n    }\r\n    \r\n    .card[_ngcontent-%COMP%]:before, .card[_ngcontent-%COMP%]:after {\r\n        content: \"\";\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        width: 100%;\r\n        height: 100%;\r\n        border-radius: 4px;\r\n        background: rgb(31, 30, 30);\r\n        transition: 0.3s;\r\n        z-index: -1;\r\n    }\r\n    \r\n    .card[_ngcontent-%COMP%]:hover:before {\r\n        transform: rotate(10deg);\r\n        box-shadow: 0 2px 20px rgba(0, 0, 0, .2);\r\n    }\r\n    \r\n    .card[_ngcontent-%COMP%]:hover:after {\r\n        transform: rotate(-5deg);\r\n        box-shadow: 2 3px 30px rgba(0, 0, 0, 0.404);\r\n    }\r\n    \r\n    .card[_ngcontent-%COMP%]   .imgBx[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        bottom: 0;\r\n        right: 0;\r\n        background: #222;\r\n        border-radius: 15px;\r\n        transition: 0.3s;\r\n        transform-style: inherit;\r\n        z-index: 1;\r\n        filter: blur(0px);\r\n    }\r\n    \r\n    .card[_ngcontent-%COMP%]:hover   .imgBx[_ngcontent-%COMP%] {\r\n        bottom: 40px;\r\n        top: 1px;\r\n        border-radius: 10px;\r\n        filter: blur(.5px);\r\n    }\r\n    \r\n    .card[_ngcontent-%COMP%]   .imgBx[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        width: 100%;\r\n        height: 100%;\r\n        object-fit: cover;\r\n    }\r\n    \r\n    .card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        left: 10px;\r\n        right: 10px;\r\n        bottom: 10px;\r\n        height: 30px;\r\n        text-align: center;\r\n    }\r\n    \r\n    .card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        margin: 0;\r\n        padding: 0;\r\n        font-weight: 600;\r\n        font-size: 20px;\r\n        color: #777;\r\n        text-transform: uppercase;\r\n    }\r\n    \r\n    .wrapper[_ngcontent-%COMP%] {\r\n        height: 100vh;\r\n        overflow-x: hidden;\r\n        overflow-y: auto;\r\n        perspective: 8px;\r\n        -ms-overflow-style: unset;\r\n        -webkit-overflow-style: unset;\r\n        -o-overflow-style: unset\r\n    }\r\n    \r\n    .section[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        height: 100vh;\r\n        align-items: center;\r\n        justify-content: center;\r\n        color: white;\r\n    }\r\n    \r\n    .parallax[_ngcontent-%COMP%]::after {\r\n        content: \" \";\r\n        position: absolute;\r\n        top: 0;\r\n        right: 0;\r\n        bottom: 0;\r\n        left: 0;\r\n        height: 100vh;\r\n        width: 100%;\r\n        background-size: cover;\r\n        -webkit-background-position: center;\r\n        -moz-background-position: center;\r\n        -o-background-position: center;\r\n        background-position: center;\r\n        transform: translateZ(-1px) scale(1.1);\r\n        z-index: -4;\r\n    }\r\n    \r\n    @media(max-width:950px) {\r\n        .parallax[_ngcontent-%COMP%]::after {\r\n            content: \" \";\r\n            position: absolute;\r\n            top: 0;\r\n            right: 0;\r\n            bottom: 0;\r\n            left: 0;\r\n            height: 100vh;\r\n            width: 100%;\r\n            background-size: cover;\r\n            -webkit-background-position: center;\r\n            -moz-background-position: center;\r\n            -o-background-position: center;\r\n            background-position: center;\r\n            transform: translateZ(-1px) scale(1.3);\r\n            z-index: -4;\r\n        }\r\n    }\r\n    \r\n    .static[_ngcontent-%COMP%] {\r\n        background-size: cover;\r\n        -webkit-background-position: center;\r\n        -moz-background-position: center;\r\n        -o-background-position: center;\r\n        background-position: center;\r\n        background-image: url(\"https://firebasestorage.googleapis.com/v0/b/ram-port.appspot.com/o/home%2F2.jpeg?alt=media&token=71bf153b-f0fc-4db8-880b-34b40497487b\");\r\n    }\r\n    \r\n    .static1[_ngcontent-%COMP%] {\r\n        background-size: cover;\r\n        -webkit-background-position: center;\r\n        -moz-background-position: center;\r\n        -o-background-position: center;\r\n        background-position: center;\r\n        background-image: url(\"https://firebasestorage.googleapis.com/v0/b/ram-port.appspot.com/o/home%2F4.jpeg?alt=media&token=ee6a801e-5175-4a2f-aacf-d3cf2b3d50e8\");\r\n    }\r\n    \r\n    .bg1[_ngcontent-%COMP%]::after {\r\n        background-image: url(\"https://firebasestorage.googleapis.com/v0/b/ram-port.appspot.com/o/home%2F1.jpeg?alt=media&token=144d6157-4157-48e8-83ac-9c6567384c43\");\r\n    }\r\n    \r\n    .bg2[_ngcontent-%COMP%]::after {\r\n        background-image: url(\"https://firebasestorage.googleapis.com/v0/b/ram-port.appspot.com/o/home%2F3.JPG?alt=media&token=294c79b3-4245-48ec-a8a0-4083a6165005\");\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiSUFBSTtRQUNJLFNBQVM7UUFDVCxVQUFVO1FBQ1YsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLDRCQUE0QjtRQUM1QixrQ0FBa0M7UUFDbEMsOEJBQThCO1FBQzlCLHNCQUFzQjtRQUN0QixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLG9CQUFvQjtRQUNwQixpQ0FBaUM7SUFDckM7O0lBRUE7UUFDSSxZQUFZO1FBQ1osZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsWUFBWTtRQUNaLDRCQUE0QjtJQUNoQzs7SUFFQTs7UUFFSSwyQkFBMkI7SUFDL0I7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLE1BQU07UUFDTixTQUFTO1FBQ1QsT0FBTztRQUNQLFFBQVE7SUFDWjs7SUFFQTtRQUNJLHNLQUFzSztRQUN0SyxtS0FBbUs7UUFDbkssaUtBQWlLO1FBQ2pLLDhKQUE4SjtRQUk5SixvQ0FBb0M7UUFJcEMsc0JBQXNCO1FBQ3RCLFdBQVc7SUFDZjs7SUFFQTtRQUNJLHNLQUFzSztRQUN0SyxtS0FBbUs7UUFDbkssaUtBQWlLO1FBQ2pLLDhKQUE4SjtRQUM5Siw0QkFBNEI7UUFJNUIsc0JBQXNCO1FBQ3RCLFdBQVc7SUFDZjs7SUFFQTtRQUNJLHNLQUFzSztRQUN0SyxtS0FBbUs7UUFDbkssaUtBQWlLO1FBQ2pLLDhKQUE4SjtRQUk5SixvQ0FBb0M7UUFJcEMsc0JBQXNCO1FBQ3RCLFdBQVc7SUFDZjs7SUFFQTtRQUNJLHFLQUFxSztRQUNySyxrS0FBa0s7UUFDbEssZ0tBQWdLO1FBQ2hLLDZKQUE2SjtRQUM3Siw0QkFBNEI7UUFJNUIsc0JBQXNCO1FBQ3RCLFdBQVc7SUFDZjs7SUFDQTs7Ozs7O09BTUc7O0lBRUg7UUFDSSxXQUFXO1FBQ1gsY0FBYztRQUNkLGNBQWM7UUFDZCxjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLFdBQVc7SUFDZjs7SUFFQTtRQUNJO1lBQ0ksNkJBQTZCO1FBQ2pDO0lBQ0o7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLHdDQUF3QztRQUN4QyxhQUFhO1FBQ2IscUJBQXFCO0lBQ3pCOztJQUVBOztRQUVJLHFCQUFxQjtJQUN6Qjs7SUFFQTtRQUNJLHNEQUFzRDtRQUN0RCxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLG9CQUFvQjtRQUNwQixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxzREFBc0Q7UUFDdEQsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixvQkFBb0I7UUFDcEIsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksc0RBQXNEO1FBQ3RELGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsb0JBQW9CO1FBQ3BCLGdCQUFnQjtRQUNoQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxTQUFTO1FBQ1QsVUFBVTtRQUNWLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixrQ0FBa0M7UUFDbEMsdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksZ0NBQWdDO1FBQ2hDLG1CQUFtQjtRQUNuQix5QkFBeUI7UUFDekIsaUJBQWlCO1FBQ2pCLDJCQUEyQjtJQUMvQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsb0JBQW9CO1FBQ3BCLGFBQWE7UUFDYiwyREFBMkQ7UUFDM0QsY0FBYztRQUNkLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLGFBQWE7UUFDYiw4QkFBOEI7UUFDOUIsY0FBYztRQUNkLG1CQUFtQjtRQUNuQiw0RUFBNEU7SUFDaEY7O0lBRUE7O1FBRUksV0FBVztRQUNYLGtCQUFrQjtRQUNsQixNQUFNO1FBQ04sT0FBTztRQUNQLFdBQVc7UUFDWCxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLDJCQUEyQjtRQUMzQixnQkFBZ0I7UUFDaEIsV0FBVztJQUNmOztJQUVBO1FBQ0ksd0JBQXdCO1FBQ3hCLHdDQUF3QztJQUM1Qzs7SUFFQTtRQUNJLHdCQUF3QjtRQUN4QiwyQ0FBMkM7SUFDL0M7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsTUFBTTtRQUNOLE9BQU87UUFDUCxTQUFTO1FBQ1QsUUFBUTtRQUNSLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLHdCQUF3QjtRQUN4QixVQUFVO1FBQ1YsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLFFBQVE7UUFDUixtQkFBbUI7UUFDbkIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLE1BQU07UUFDTixPQUFPO1FBQ1AsV0FBVztRQUNYLFlBQVk7UUFDWixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFdBQVc7UUFDWCxZQUFZO1FBQ1osWUFBWTtRQUNaLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLFNBQVM7UUFDVCxVQUFVO1FBQ1YsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixXQUFXO1FBQ1gseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFFaEIsZ0JBQWdCO1FBQ2hCLHlCQUF5QjtRQUN6Qiw2QkFBNkI7UUFDN0I7SUFDSjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixNQUFNO1FBQ04sUUFBUTtRQUNSLFNBQVM7UUFDVCxPQUFPO1FBQ1AsYUFBYTtRQUNiLFdBQVc7UUFJWCxzQkFBc0I7UUFDdEIsbUNBQW1DO1FBQ25DLGdDQUFnQztRQUNoQyw4QkFBOEI7UUFDOUIsMkJBQTJCO1FBSTNCLHNDQUFzQztRQUN0QyxXQUFXO0lBQ2Y7O0lBRUE7UUFDSTtZQUNJLFlBQVk7WUFDWixrQkFBa0I7WUFDbEIsTUFBTTtZQUNOLFFBQVE7WUFDUixTQUFTO1lBQ1QsT0FBTztZQUNQLGFBQWE7WUFDYixXQUFXO1lBSVgsc0JBQXNCO1lBQ3RCLG1DQUFtQztZQUNuQyxnQ0FBZ0M7WUFDaEMsOEJBQThCO1lBQzlCLDJCQUEyQjtZQUkzQixzQ0FBc0M7WUFDdEMsV0FBVztRQUNmO0lBQ0o7O0lBRUE7UUFJSSxzQkFBc0I7UUFDdEIsbUNBQW1DO1FBQ25DLGdDQUFnQztRQUNoQyw4QkFBOEI7UUFDOUIsMkJBQTJCO1FBQzNCLDhKQUE4SjtJQUNsSzs7SUFFQTtRQUlJLHNCQUFzQjtRQUN0QixtQ0FBbUM7UUFDbkMsZ0NBQWdDO1FBQ2hDLDhCQUE4QjtRQUM5QiwyQkFBMkI7UUFDM0IsOEpBQThKO0lBQ2xLOztJQUVBO1FBQ0ksOEpBQThKO0lBQ2xLOztJQUVBO1FBQ0ksNkpBQTZKO0lBQ2pLIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICBib2R5IHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICBwZXJzcGVjdGl2ZTogMXB4O1xyXG4gICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgzOSwgMzksIDM5LCAwLjg3KTtcclxuICAgICAgICBpbWFnZS1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGZ1dHVyYS1wdDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41NWVtO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTczKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaHRtbCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNlY3Rpb24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwdmg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZWN0aW9uLFxyXG4gICAgc2VjdGlvbjpiZWZvcmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IDUwJSA1MCUgLyBjb3ZlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2VjdGlvbjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgI2hlcm8tMzpiZWZvcmUge1xyXG4gICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9yYW0tcG9ydC5hcHBzcG90LmNvbS9vL2hvbWUlMkYyLmpwZWc/YWx0PW1lZGlhJnRva2VuPTcxYmYxNTNiLWYwZmMtNGRiOC04ODBiLTM0YjQwNDk3NDg3YlwiKTtcclxuICAgICAgICAtbW96LWJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvcmFtLXBvcnQuYXBwc3BvdC5jb20vby9ob21lJTJGMi5qcGVnP2FsdD1tZWRpYSZ0b2tlbj03MWJmMTUzYi1mMGZjLTRkYjgtODgwYi0zNGI0MDQ5NzQ4N2JcIik7XHJcbiAgICAgICAgLW8tYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9yYW0tcG9ydC5hcHBzcG90LmNvbS9vL2hvbWUlMkYyLmpwZWc/YWx0PW1lZGlhJnRva2VuPTcxYmYxNTNiLWYwZmMtNGRiOC04ODBiLTM0YjQwNDk3NDg3YlwiKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL3JhbS1wb3J0LmFwcHNwb3QuY29tL28vaG9tZSUyRjIuanBlZz9hbHQ9bWVkaWEmdG9rZW49NzFiZjE1M2ItZjBmYy00ZGI4LTg4MGItMzRiNDA0OTc0ODdiXCIpO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0xcHgpIHNjYWxlKDEpO1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0xcHgpIHNjYWxlKDEpO1xyXG4gICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMXB4KSBzY2FsZSgxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTFweCkgc2NhbGUoMSk7XHJcbiAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICNoZXJvLTQ6YmVmb3JlIHtcclxuICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvcmFtLXBvcnQuYXBwc3BvdC5jb20vby9ob21lJTJGNC5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1lZTZhODAxZS01MTc1LTRhMmYtYWFjZi1kM2NmMmIzZDUwZThcIik7XHJcbiAgICAgICAgLW1vei1iYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL3JhbS1wb3J0LmFwcHNwb3QuY29tL28vaG9tZSUyRjQuanBlZz9hbHQ9bWVkaWEmdG9rZW49ZWU2YTgwMWUtNTE3NS00YTJmLWFhY2YtZDNjZjJiM2Q1MGU4XCIpO1xyXG4gICAgICAgIC1vLWJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvcmFtLXBvcnQuYXBwc3BvdC5jb20vby9ob21lJTJGNC5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1lZTZhODAxZS01MTc1LTRhMmYtYWFjZi1kM2NmMmIzZDUwZThcIik7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9yYW0tcG9ydC5hcHBzcG90LmNvbS9vL2hvbWUlMkY0LmpwZWc/YWx0PW1lZGlhJnRva2VuPWVlNmE4MDFlLTUxNzUtNGEyZi1hYWNmLWQzY2YyYjNkNTBlOFwiKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIHotaW5kZXg6IC00O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAjaGVyby0xOmJlZm9yZSB7XHJcbiAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL3JhbS1wb3J0LmFwcHNwb3QuY29tL28vaG9tZSUyRjEuanBlZz9hbHQ9bWVkaWEmdG9rZW49MTQ0ZDYxNTctNDE1Ny00OGU4LTgzYWMtOWM2NTY3Mzg0YzQzXCIpO1xyXG4gICAgICAgIC1tb3otYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9yYW0tcG9ydC5hcHBzcG90LmNvbS9vL2hvbWUlMkYxLmpwZWc/YWx0PW1lZGlhJnRva2VuPTE0NGQ2MTU3LTQxNTctNDhlOC04M2FjLTljNjU2NzM4NGM0M1wiKTtcclxuICAgICAgICAtby1iYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL3JhbS1wb3J0LmFwcHNwb3QuY29tL28vaG9tZSUyRjEuanBlZz9hbHQ9bWVkaWEmdG9rZW49MTQ0ZDYxNTctNDE1Ny00OGU4LTgzYWMtOWM2NTY3Mzg0YzQzXCIpO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvcmFtLXBvcnQuYXBwc3BvdC5jb20vby9ob21lJTJGMS5qcGVnP2FsdD1tZWRpYSZ0b2tlbj0xNDRkNjE1Ny00MTU3LTQ4ZTgtODNhYy05YzY1NjczODRjNDNcIik7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTFweCkgc2NhbGUoMSk7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTFweCkgc2NhbGUoMSk7XHJcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0xcHgpIHNjYWxlKDEpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMXB4KSBzY2FsZSgxKTtcclxuICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICB6LWluZGV4OiAtMztcclxuICAgIH1cclxuICAgIFxyXG4gICAgI2hlcm8tMjpiZWZvcmUge1xyXG4gICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9yYW0tcG9ydC5hcHBzcG90LmNvbS9vL2hvbWUlMkYzLkpQRz9hbHQ9bWVkaWEmdG9rZW49Mjk0Yzc5YjMtNDI0NS00OGVjLWE4YTAtNDA4M2E2MTY1MDA1XCIpO1xyXG4gICAgICAgIC1tb3otYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9yYW0tcG9ydC5hcHBzcG90LmNvbS9vL2hvbWUlMkYzLkpQRz9hbHQ9bWVkaWEmdG9rZW49Mjk0Yzc5YjMtNDI0NS00OGVjLWE4YTAtNDA4M2E2MTY1MDA1XCIpO1xyXG4gICAgICAgIC1vLWJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvcmFtLXBvcnQuYXBwc3BvdC5jb20vby9ob21lJTJGMy5KUEc/YWx0PW1lZGlhJnRva2VuPTI5NGM3OWIzLTQyNDUtNDhlYy1hOGEwLTQwODNhNjE2NTAwNVwiKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL3JhbS1wb3J0LmFwcHNwb3QuY29tL28vaG9tZSUyRjMuSlBHP2FsdD1tZWRpYSZ0b2tlbj0yOTRjNzliMy00MjQ1LTQ4ZWMtYThhMC00MDgzYTYxNjUwMDVcIik7XHJcbiAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICB6LWluZGV4OiAtNDtcclxuICAgIH1cclxuICAgIC8qIFxyXG4gICAgLm5vcm1hbC1zY3JvbGwge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWluLWhlaWdodDogMSU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCk7XHJcbiAgICB9ICovXHJcbiAgICBcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIGNvbG9yOiAjY2NjO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikge1xyXG4gICAgICAgICNzZWN0aW9uLTU6YmVmb3JlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc3VidGl0bGUge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgMzksIDAuODcpO1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc3VidGl0bGUsXHJcbiAgICBhIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGgxIHtcclxuICAgICAgICBmb250LWZhbWlseTogRnV0dXJhLCBcIlRyZWJ1Y2hldCBNU1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtdmFyaWFudDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoMyB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEZ1dHVyYSwgXCJUcmVidWNoZXQgTVNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNS40cHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwIHtcclxuICAgICAgICBmb250LWZhbWlseTogRnV0dXJhLCBcIlRyZWJ1Y2hldCBNU1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtdmFyaWFudDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jYXJkc1JERU0ge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDM5LCAzOSwgMzksIDAuODcpO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpbWcge1xyXG4gICAgICAgIGltYWdlLXJlbmRlcmluZzogb3B0aW1pemVRdWFsaXR5O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5ib3gge1xyXG4gICAgICAgIHdpZHRoOiAxMjAwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDg1cHg7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI3MHB4LCAxZnIpKTtcclxuICAgICAgICBncmlkLWdhcDogMjBweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjMwLCAyMzAsIDIzMCk7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDJweCAzcHggcmdiYSgxMCwgMTAsIDEwLCAwLjEpLCAwIDAgMCAxcHggcmdiYSgxMCwgMTAsIDEwLCAwLjEpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2FyZDpiZWZvcmUsXHJcbiAgICAuY2FyZDphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMzEsIDMwLCAzMCk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNhcmQ6aG92ZXI6YmVmb3JlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggMjBweCByZ2JhKDAsIDAsIDAsIC4yKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNhcmQ6aG92ZXI6YWZ0ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcclxuICAgICAgICBib3gtc2hhZG93OiAyIDNweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC40MDQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2FyZCAuaW1nQngge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzIyMjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBpbmhlcml0O1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgZmlsdGVyOiBibHVyKDBweCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jYXJkOmhvdmVyIC5pbWdCeCB7XHJcbiAgICAgICAgYm90dG9tOiA0MHB4O1xyXG4gICAgICAgIHRvcDogMXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgZmlsdGVyOiBibHVyKC41cHgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2FyZCAuaW1nQnggaW1nIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2FyZCAuZGV0YWlscyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jYXJkIC5kZXRhaWxzIGgyIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBjb2xvcjogIzc3NztcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAud3JhcHBlciB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiA4cHg7XHJcbiAgICAgICAgcGVyc3BlY3RpdmU6IDhweDtcclxuICAgICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IHVuc2V0O1xyXG4gICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc3R5bGU6IHVuc2V0O1xyXG4gICAgICAgIC1vLW92ZXJmbG93LXN0eWxlOiB1bnNldFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2VjdGlvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wYXJhbGxheDo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAtbW96LWJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAtby1iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0xcHgpIHNjYWxlKDEuMSk7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTFweCkgc2NhbGUoMS4xKTtcclxuICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTFweCkgc2NhbGUoMS4xKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTFweCkgc2NhbGUoMS4xKTtcclxuICAgICAgICB6LWluZGV4OiAtNDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQG1lZGlhKG1heC13aWR0aDo5NTBweCkge1xyXG4gICAgICAgIC5wYXJhbGxheDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIiBcIjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC1tb3otYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICAtby1iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTFweCkgc2NhbGUoMS4zKTtcclxuICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTFweCkgc2NhbGUoMS4zKTtcclxuICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0xcHgpIHNjYWxlKDEuMyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMXB4KSBzY2FsZSgxLjMpO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAtNDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zdGF0aWMge1xyXG4gICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIC1tb3otYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIC1vLWJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9yYW0tcG9ydC5hcHBzcG90LmNvbS9vL2hvbWUlMkYyLmpwZWc/YWx0PW1lZGlhJnRva2VuPTcxYmYxNTNiLWYwZmMtNGRiOC04ODBiLTM0YjQwNDk3NDg3YlwiKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnN0YXRpYzEge1xyXG4gICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIC1tb3otYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIC1vLWJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9yYW0tcG9ydC5hcHBzcG90LmNvbS9vL2hvbWUlMkY0LmpwZWc/YWx0PW1lZGlhJnRva2VuPWVlNmE4MDFlLTUxNzUtNGEyZi1hYWNmLWQzY2YyYjNkNTBlOFwiKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJnMTo6YWZ0ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvcmFtLXBvcnQuYXBwc3BvdC5jb20vby9ob21lJTJGMS5qcGVnP2FsdD1tZWRpYSZ0b2tlbj0xNDRkNjE1Ny00MTU3LTQ4ZTgtODNhYy05YzY1NjczODRjNDNcIik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5iZzI6OmFmdGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL3JhbS1wb3J0LmFwcHNwb3QuY29tL28vaG9tZSUyRjMuSlBHP2FsdD1tZWRpYSZ0b2tlbj0yOTRjNzliMy00MjQ1LTQ4ZWMtYThhMC00MDgzYTYxNjUwMDVcIik7XHJcbiAgICB9Il19 */"]
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        firebase: {
          apiKey: "AIzaSyBHY37xmpyX5iD4NHxX41GEY3r9IAQCLc4",
          authDomain: "ram-port.firebaseapp.com",
          projectId: "ram-port",
          storageBucket: "ram-port.appspot.com",
          messagingSenderId: "843189379022",
          appId: "1:843189379022:web:1017471ca5142d93c2559f",
          measurementId: "G-TEPTLRLNBS"
        }
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Ij5Q":
    /*!**********************************************!*\
      !*** ./src/app/gallery/gallery.component.ts ***!
      \**********************************************/

    /*! exports provided: GalleryComponent */

    /***/
    function Ij5Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GalleryComponent", function () {
        return GalleryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _imageservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../imageservice.service */
      "8973");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _crystalui_angular_lightbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @crystalui/angular-lightbox */
      "k/Yu");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");

      function GalleryComponent_mat_progress_bar_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 26);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r0.color)("mode", ctx_r0.mode);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "background": a0
        };
      };

      function GalleryComponent_mat_grid_tile_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tile_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, "url(" + tile_r3.url + ")"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", tile_r3.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "background-image": a0
        };
      };

      function GalleryComponent_div_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, "url(" + i_r4.url + ")"));
        }
      }

      var GalleryComponent = /*#__PURE__*/function () {
        function GalleryComponent(imgser, title) {
          _classCallCheck(this, GalleryComponent);

          this.imgser = imgser;
          this.carouselImgList = [];
          this.tilesImgList = [];
          this.imageList = [];
          this.color = 'primary';
          this.mode = 'indeterminate';
          this.loader = true;
          title.setTitle("Gallery | Ramanathan");
        }

        _createClass(GalleryComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this2 = this;

            setTimeout(function () {
              _this2.loader = false;
            }, 2000);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.CarouselSub = this.imgser.getCarouselObs().subscribe(function (i) {
              var carouselObj = i;
              carouselObj.map(function (img) {
                _this3.carouselImgList.push(img);
              });
            });
            this.TilesSub = this.imgser.getTitlesObs().subscribe(function (i) {
              var titleObj = i;
              titleObj.map(function (img) {
                _this3.tilesImgList.push(img);
              });
            });
            this.ImageListSub = this.imgser.getImgageObs().subscribe(function (i) {
              var imageObj = i;
              imageObj.map(function (img) {
                _this3.imageList.push(img);
              });
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.CarouselSub.unsubscribe();
            this.TilesSub.unsubscribe();
            this.ImageListSub.unsubscribe();
          }
        }]);

        return GalleryComponent;
      }();

      GalleryComponent.ɵfac = function GalleryComponent_Factory(t) {
        return new (t || GalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_imageservice_service__WEBPACK_IMPORTED_MODULE_1__["ImageserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]));
      };

      GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GalleryComponent,
        selectors: [["app-gallery"]],
        decls: 37,
        vars: 9,
        consts: [["style", "height: 7px;", "class", "example-margin;", 3, "color", "mode", 4, "ngIf"], [1, "space"], ["lightbox-group", "", 3, "hidden"], ["id", "carouselExampleFade", "data-bs-ride", "carousel", 1, "carousel", "slide", "carousel-fade"], [1, "carousel-indicators"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "0", "aria-current", "true", "aria-label", "Slide 1", 1, "active"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "1", "aria-label", "Slide 2"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "2", "aria-label", "Slide 3"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "3", "aria-label", "Slide 4"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "4", "aria-label", "Slide 5"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["loading", "lazy", "alt", "img1", "draggable", "false", 1, "d-block", "w-100", 3, "src"], [1, "carousel-item"], ["loading", "lazy", "alt", "img2", "draggable", "false", 1, "d-block", "w-100", 3, "src"], ["loading", "lazy", "alt", "img3", "draggable", "false", 1, "d-block", "w-100", 3, "src"], ["loading", "lazy", "alt", "img4", "draggable", "false", 1, "d-block", "w-100", 3, "src"], ["loading", "lazy", "alt", "img5", 1, "d-block", "w-100", 3, "src"], ["type", "button", "data-bs-target", "#carouselExampleFade", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselExampleFade", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], ["cols", "2", "rowHeight", "1.9:1.5 ", 1, "tiles"], [3, "ngStyle", 4, "ngFor", "ngForOf"], ["id", "imgList", 4, "ngFor", "ngForOf"], [1, "example-margin;", 2, "height", "7px", 3, "color", "mode"], [3, "ngStyle"], ["loading", "lazy", "lightbox", "", "alt", "img", "draggable", "false", 1, "d-block", "w-100", 3, "src"], ["id", "imgList"], ["loading", "lazy", 1, "box1", 3, "ngStyle"]],
        template: function GalleryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GalleryComponent_mat_progress_bar_2_Template, 1, 2, "mat-progress-bar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Previous");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-grid-list", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, GalleryComponent_mat_grid_tile_35_Template, 3, 4, "mat-grid-tile", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, GalleryComponent_div_36_Template, 2, 3, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loader);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.loader);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.carouselImgList[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.carouselImgList[4].url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.carouselImgList[3].url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.carouselImgList[1].url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.carouselImgList[2].url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tilesImgList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imageList);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _crystalui_angular_lightbox__WEBPACK_IMPORTED_MODULE_4__["LightboxGroupDirective"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBar"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridTile"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultStyleDirective"], _crystalui_angular_lightbox__WEBPACK_IMPORTED_MODULE_4__["LightboxDirective"]],
        styles: [".carousel-item[_ngcontent-%COMP%] {\r\n    background: no-repeat center center scroll;\r\n    background-size: cover;\r\n}\r\n\r\n*[_ngcontent-%COMP%] {\r\n    scroll-behavior: smooth;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.space[_ngcontent-%COMP%] {\r\n    height: 2px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    image-rendering: optimizeSpeed;\r\n    object-fit: fill;\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n    user-select: none;\r\n    -webkit-touch-callout: none;\r\n}\r\n\r\nmat-grid-tile[_ngcontent-%COMP%], img[_ngcontent-%COMP%] {\r\n    image-rendering: optimizeQuality;\r\n    width: auto;\r\n    height: auto;\r\n    object-fit: fill;\r\n    -webkit-user-select: none;\r\n    user-select: none;\r\n    -webkit-touch-callout: none;\r\n}\r\n\r\n.box1[_ngcontent-%COMP%] {\r\n    height: 100vh;\r\n    width: 100%;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    -webkit-background-position: center;\r\n    -moz-background-position: center;\r\n    -o-background-position: center;\r\n    background-position: center;\r\n    display: table;\r\n    background-attachment: fixed;\r\n}\r\n\r\n@supports (-webkit-touch-callout: none) {\r\n    .box1[_ngcontent-%COMP%] {\r\n        background-attachment: local;\r\n    }\r\n}\r\n\r\n@supports not (-webkit-touch-callout: none) {\r\n    .box1[_ngcontent-%COMP%] {\r\n        background-attachment: fixed;\r\n    }\r\n}\r\n\r\n@media only screen and (max-device-width: 1366px) {\r\n    .space[_ngcontent-%COMP%] {\r\n        height: 45px;\r\n    }\r\n}\r\n\r\n.tiles[_ngcontent-%COMP%] {\r\n    -webkit-backdrop-filter: blur(20px) contrast(110%);\r\n            backdrop-filter: blur(20px) contrast(110%);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbGxlcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBDQUEwQztJQUkxQyxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQiwyQkFBMkI7QUFDL0I7O0FBRUE7O0lBRUksZ0NBQWdDO0lBQ2hDLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFJWCxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLG1DQUFtQztJQUNuQyxnQ0FBZ0M7SUFDaEMsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQixjQUFjO0lBQ2QsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0k7UUFDSSw0QkFBNEI7SUFDaEM7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksNEJBQTRCO0lBQ2hDO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLGtEQUEwQztZQUExQywwQ0FBMEM7QUFDOUMiLCJmaWxlIjoiZ2FsbGVyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcm91c2VsLWl0ZW0ge1xyXG4gICAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgc2Nyb2xsO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbioge1xyXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnNwYWNlIHtcclxuICAgIGhlaWdodDogMnB4O1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgaW1hZ2UtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xyXG4gICAgb2JqZWN0LWZpdDogZmlsbDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxufVxyXG5cclxubWF0LWdyaWQtdGlsZSxcclxuaW1nIHtcclxuICAgIGltYWdlLXJlbmRlcmluZzogb3B0aW1pemVRdWFsaXR5O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBvYmplY3QtZml0OiBmaWxsO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xyXG59XHJcblxyXG4uYm94MSB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIC1tb3otYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgLW8tYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG59XHJcblxyXG5Ac3VwcG9ydHMgKC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZSkge1xyXG4gICAgLmJveDEge1xyXG4gICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogbG9jYWw7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBzdXBwb3J0cyBub3QgKC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZSkge1xyXG4gICAgLmJveDEge1xyXG4gICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEzNjZweCkge1xyXG4gICAgLnNwYWNlIHtcclxuICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50aWxlcyB7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCkgY29udHJhc3QoMTEwJSk7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent, barcodeDialog */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "barcodeDialog", function () {
        return barcodeDialog;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./window */
      "1zuJ");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _imageservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./imageservice.service */
      "8973");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");

      function AppComponent_mat_toolbar_51_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_mat_toolbar_51_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return _r0.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "RAMANATHAN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "HOME");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "GALLERY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "ABOUT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "CONNECT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(imgser, dialog, route, _snackBar) {
          _classCallCheck(this, AppComponent);

          this.imgser = imgser;
          this.dialog = dialog;
          this.route = route;
          this._snackBar = _snackBar;
          this.title = 'rdem';
          this.name = "";
          this.isOpen = false;
          this.status = "";
          this.stateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.col = "primary";
          this.durationInSeconds = 5;
          this.offsetFlag = true;

          if (this.imgser.onFirstLoad) {
            this.imgser.onFirstLoad = false;
          }
        }

        _createClass(AppComponent, [{
          key: "scrollToElement",
          value: function scrollToElement($element) {
            console.log($element);
            $element.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest"
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            var onLine = Object(_window__WEBPACK_IMPORTED_MODULE_1__["getWindow"])().navigator.onLine;
            this.status = onLine ? 'online' : 'offline';
            this.stateChange.emit(this.status);
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(Object(_window__WEBPACK_IMPORTED_MODULE_1__["getWindow"])(), 'online'), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(Object(_window__WEBPACK_IMPORTED_MODULE_1__["getWindow"])(), 'offline')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) {
              return x.type;
            })).subscribe(function (res) {
              _this4.status = res;

              _this4.stateChange.emit(res);

              if (res == 'offline') {
                _this4.route.navigateByUrl("b2ZmbGluZQ");
              }

              if (res == 'online') {
                _this4.route.navigateByUrl("");
              }
            });
          }
        }, {
          key: "getScrollHeight",
          value: function getScrollHeight(event) {
            if (window.pageYOffset > 2500) this.offsetFlag = false;else this.offsetFlag = true;
          }
        }, {
          key: "onRightClick",
          value: function onRightClick(event) {
            this.openSnackBar("Right Click - Disabled ⛔");
            event.preventDefault();
          }
        }, {
          key: "openbarcode",
          value: function openbarcode() {
            var bardialog = this.dialog.open(barcodeDialog, {
              width: "auto",
              position: {
                bottom: '6%'
              }
            });
            bardialog.afterClosed().subscribe(function (res) {
              console.log("INSTAGRAM LINK");
            });
          }
        }, {
          key: "closebarcode",
          value: function closebarcode() {
            this.dialog.closeAll();
          }
        }, {
          key: "openSnackBar",
          value: function openSnackBar(message) {
            this._snackBar.open(message, "", {
              duration: 1000
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_imageservice_service__WEBPACK_IMPORTED_MODULE_4__["ImageserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        hostBindings: function AppComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function AppComponent_scroll_HostBindingHandler($event) {
              return ctx.getScrollHeight($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("contextmenu", function AppComponent_contextmenu_HostBindingHandler($event) {
              return ctx.onRightClick($event);
            });
          }
        },
        outputs: {
          stateChange: "stateChange"
        },
        decls: 78,
        vars: 1,
        consts: [["role", "navigation", 1, "sidenavList"], ["sidenav", ""], [2, "height", "100px"], [3, "click"], ["matRipple", ""], ["mat-line", "", "routerLink", "", 1, "sidelink"], ["mat-list-icon", ""], ["src", "https://img.icons8.com/plumpy/22/000000/home-page.png"], ["mat-line", "", "routerLink", "gallery", 1, "sidelink"], ["src", "https://img.icons8.com/plumpy/22/000000/image-gallery.png"], ["mat-line", "", "routerLink", "about", 1, "sidelink"], ["src", "https://img.icons8.com/plumpy/22/000000/about.png"], [1, "container"], [1, "text-muted"], ["target", "_blank", "href", "https://github.com/Ramanathan87", 1, "sidenavSM"], ["src", "https://img.icons8.com/fluent/35/000000/github.png", "draggable", "false"], ["target", "_blank", "href", "https://twitter.com/RamanathanSks", 1, "sidenavSM"], ["src", "https://img.icons8.com/fluent/35/000000/twitter.png", "draggable", "false"], ["target", "_blank", "href", "https://www.instagram.com/ramanathan_sks/", 1, "sidenavSM"], ["src", "https://img.icons8.com/fluent/35/000000/instagram-new.png", "draggable", "false"], ["target", "_blank", "href", "https://www.facebook.com/ramakiphotograph", 1, "sidenavSM"], ["src", "https://img.icons8.com/fluent/35/000000/facebook-new.png", "draggable", "false"], ["target", "_blank", "href", "https://500px.com/p/ramanathansks", 1, "sidenavSM"], ["src", "https://img.icons8.com/windows/30/000000/500px-new.png", "draggable", "false"], ["class", "toolbar", "matRipple", "", 4, "ngIf"], ["matRipple", "", "id", "sm", 1, "footer"], [1, "footCon"], [1, "footTxt"], ["matTooltip", "github", 1, "text-muted"], ["target", "_blank", "href", "https://github.com/Ramanathan87", 1, "smlnk"], ["src", "https://img.icons8.com/fluent/42/000000/github.png", "draggable", "false"], ["matTooltip", "twitter", 1, "text-muted"], ["target", "_blank", "href", "https://twitter.com/RamanathanSks", 1, "smlnk"], ["src", "https://img.icons8.com/fluent/42/000000/twitter.png", "draggable", "false"], [1, "smlnk"], ["src", "https://img.icons8.com/fluent/42/000000/instagram-new.png", "draggable", "false", 3, "mouseenter"], ["matTooltip", "facebook", 1, "text-muted"], ["target", "_blank", "href", "https://www.facebook.com/ramakiphotograph", 1, "smlnk"], ["src", "https://img.icons8.com/fluent/42/000000/facebook-new.png", "draggable", "false"], ["matTooltip", "500px", 1, "text-muted"], ["target", "_blank", "href", "https://500px.com/p/ramanathansks", 1, "smlnk"], ["src", "https://img.icons8.com/windows/37/000000/500px-new.png", "draggable", "false"], ["matRipple", "", 1, "toolbar"], ["fxHide.gt-xs", ""], ["mat-icon-button", "", 3, "click"], ["src", "https://img.icons8.com/plumpy/24/000000/menu--v1.png", "draggable", "false"], ["routerLink", ""], [1, "title"], ["fxFlex", "", "fxLayout", "", "fxLayoutAlign", "end", "fxHide.xs", ""], ["fxLayout", "", "fxLayoutGap", "15px", 1, "nav-item"], ["routerLink", "", 1, "fontcl"], ["routerLink", "gallery", 1, "fontcl"], ["routerLink", "about", 1, "fontcl"], ["href", "#sm", 1, "fontcl"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-list", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_mat_list_click_4_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

              return _r0.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-list-item", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\xA0\xA0\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "HOME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-list-item", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \xA0\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "GALLERY");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-list-item", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \xA0\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "ABOUT");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-sidenav-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, AppComponent_mat_toolbar_51_Template, 22, 0, "mat-toolbar", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "main");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "footer", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h1", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "CONNECT");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "img", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function AppComponent_Template_img_mouseenter_69_listener() {
              return ctx.openbarcode();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " \xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " \xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.offsetFlag);
          }
        },
        directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatList"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDivider"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRipple"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatLine"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListIconCssMatStyler"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltip"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbar"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_16__["DefaultShowHideDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__["DefaultLayoutGapDirective"]],
        styles: [".spacer[_ngcontent-%COMP%] {\r\n    flex: 1 1 auto;\r\n}\r\n\r\n*[_ngcontent-%COMP%] {\r\n    scroll-behavior: smooth;\r\n}\r\n\r\nmat-sidenav-conatiner[_ngcontent-%COMP%], mat-sidenav-content[_ngcontent-%COMP%], mat-sidenav[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    background-color: rgba(145, 145, 145, 0.137);\r\n}\r\n\r\n.sidenavList[_ngcontent-%COMP%] {\r\n    -webkit-backdrop-filter: blur(50px);\r\n    backdrop-filter: blur(50px);\r\n}\r\n\r\n.fontcl[_ngcontent-%COMP%] {\r\n    color: rgb(243, 243, 243);\r\n    opacity: 80%;\r\n}\r\n\r\n.fontcl[_ngcontent-%COMP%]:hover {\r\n    transition: cubic-bezier(0.075, 0.82, 0.165, 1);\r\n    opacity: 100%;\r\n    zoom: 105%;\r\n    color: white;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n    margin-bottom: 17px;\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n    text-shadow: rgba(0, 0, 0, 0.616);\r\n    font-family: \"Roboto Condensed\", sans-serif;\r\n    font-size: small;\r\n    letter-spacing: 3px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n    font-family: \"Roboto Condensed\", sans-serif;\r\n    font-size: 23px;\r\n    font-optical-sizing: auto;\r\n    letter-spacing: 3px;\r\n    text-transform: uppercase;\r\n    color: rgb(230, 230, 230);\r\n}\r\n\r\n.title[_ngcontent-%COMP%]:hover {\r\n    color: white;\r\n    zoom: 101%;\r\n}\r\n\r\nmat-sidenav[_ngcontent-%COMP%] {\r\n    width: 250px;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    position: -webkit-sticky;\r\n    top: 0;\r\n    z-index: 1000;\r\n    -webkit-background-color: rgba(39, 39, 39, 0.40);\r\n    -moz-background-color: rgba(39, 39, 39, 0.40);\r\n    -o-background-color: rgba(39, 39, 39, 0.40);\r\n    background-color: rgba(39, 39, 39, 0.40);\r\n    -webkit-backdrop-filter: blur(10px) contrast(90%);\r\n    -moz-backdrop-filter: blur(10px) contrast(90%);\r\n    -o-backdrop-filter: blur(10px) contrast(90%);\r\n    backdrop-filter: blur(10px) contrast(90%);\r\n    transition: all .9s ease-in-out !important;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0;\r\n    text-align: center;\r\n    width: 100%;\r\n    height: 130px;\r\n    padding-top: 20px;\r\n    line-height: 50px;\r\n    -webkit-background-color: rgba(15, 15, 15, 0.692);\r\n    -moz-background-color: rgba(15, 15, 15, 0.692);\r\n    -o-background-color: rgba(15, 15, 15, 0.692);\r\n    background-color: rgba(15, 15, 15, 0.692);\r\n    -webkit-backdrop-filter: blur(10px);\r\n    -moz-backdrop-filter: blur(10px);\r\n    -o-backdrop-filter: blur(10px);\r\n    backdrop-filter: blur(10px);\r\n    transition: all .9s ease-in-out !important;\r\n}\r\n\r\n.footTxt[_ngcontent-%COMP%] {\r\n    font-family: Futura, \"Trebuchet MS\", Arial, sans-serif;\r\n    font-size: 24px;\r\n    font-style: normal;\r\n    font-variant: normal;\r\n    font-weight: 600;\r\n    line-height: 22px;\r\n    animation: type .5s alternate infinite;\r\n}\r\n\r\n.footCon[_ngcontent-%COMP%] {\r\n    color: ivory;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.smlnk[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n\r\n.sidenavSM[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n\r\n.sidelink[_ngcontent-%COMP%] {\r\n    font-family: \"Roboto Condensed\", sans-serif;\r\n    text-transform: uppercase;\r\n    height: 50px;\r\n    color: rgb(194, 194, 194);\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    text-align: center;\r\n    max-width: 680px;\r\n    padding: 0 15px;\r\n}\r\n\r\nmat-sidenav-container[_ngcontent-%COMP%] {\r\n    margin: 0%;\r\n}\r\n\r\n.nav-item[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    background-color: rgb(243, 243, 243);\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n\r\na.hover.a.active[_ngcontent-%COMP%] {\r\n    color: rgb(255, 255, 255);\r\n}\r\n\r\nmat-toolbar[_ngcontent-%COMP%] {\r\n    \r\n    height: 60px;\r\n}\r\n\r\n@media(max-width:950px) {\r\n    mat-toolbar[_ngcontent-%COMP%] {\r\n        border-radius: 0px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTs7O0lBR0ksWUFBWTtJQUNaLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQywyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLCtDQUErQztJQUMvQyxhQUFhO0lBQ2IsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsMkNBQTJDO0lBQzNDLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksMkNBQTJDO0lBQzNDLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsTUFBTTtJQUNOLGFBQWE7SUFDYixnREFBZ0Q7SUFDaEQsNkNBQTZDO0lBQzdDLDJDQUEyQztJQUMzQyx3Q0FBd0M7SUFDeEMsaURBQWlEO0lBQ2pELDhDQUE4QztJQUM5Qyw0Q0FBNEM7SUFDNUMseUNBQXlDO0lBSXpDLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixpREFBaUQ7SUFDakQsOENBQThDO0lBQzlDLDRDQUE0QztJQUM1Qyx5Q0FBeUM7SUFDekMsbUNBQW1DO0lBQ25DLGdDQUFnQztJQUNoQyw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBSTNCLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLHNEQUFzRDtJQUN0RCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUdBLHNCQUFzQjs7QUFFdEI7SUFDSSxxQkFBcUI7QUFDekI7O0FBR0EsOEJBQThCOztBQUU5QjtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFHQSxZQUFZOztBQUVaO0lBQ0ksMkNBQTJDO0lBQzNDLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsU0FBUztJQUNULGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtEQUFrRDtJQUNsRCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFjZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbioge1xyXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2LWNvbmF0aW5lcixcclxubWF0LXNpZGVuYXYtY29udGVudCxcclxubWF0LXNpZGVuYXYge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDUsIDE0NSwgMTQ1LCAwLjEzNyk7XHJcbn1cclxuXHJcbi5zaWRlbmF2TGlzdCB7XHJcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig1MHB4KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1MHB4KTtcclxufVxyXG5cclxuLmZvbnRjbCB7XHJcbiAgICBjb2xvcjogcmdiKDI0MywgMjQzLCAyNDMpO1xyXG4gICAgb3BhY2l0eTogODAlO1xyXG59XHJcblxyXG4uZm9udGNsOmhvdmVyIHtcclxuICAgIHRyYW5zaXRpb246IGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xyXG4gICAgb3BhY2l0eTogMTAwJTtcclxuICAgIHpvb206IDEwNSU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTdweDtcclxufVxyXG5cclxubGkge1xyXG4gICAgdGV4dC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC42MTYpO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgZm9udC1vcHRpY2FsLXNpemluZzogYXV0bztcclxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6IHJnYigyMzAsIDIzMCwgMjMwKTtcclxufVxyXG5cclxuLnRpdGxlOmhvdmVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHpvb206IDEwMSU7XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2IHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxufVxyXG5cclxuLnRvb2xiYXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDM5LCAwLjQwKTtcclxuICAgIC1tb3otYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDM5LCAwLjQwKTtcclxuICAgIC1vLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCAzOSwgMC40MCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgMzksIDAuNDApO1xyXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCkgY29udHJhc3QoOTAlKTtcclxuICAgIC1tb3otYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpIGNvbnRyYXN0KDkwJSk7XHJcbiAgICAtby1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCkgY29udHJhc3QoOTAlKTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KSBjb250cmFzdCg5MCUpO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjlzIGVhc2UtaW4tb3V0ICFpbXBvcnRhbnQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuOXMgZWFzZS1pbi1vdXQgIWltcG9ydGFudDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAuOXMgZWFzZS1pbi1vdXQgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuOXMgZWFzZS1pbi1vdXQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1LCAxNSwgMTUsIDAuNjkyKTtcclxuICAgIC1tb3otYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNSwgMTUsIDE1LCAwLjY5Mik7XHJcbiAgICAtby1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1LCAxNSwgMTUsIDAuNjkyKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUsIDE1LCAxNSwgMC42OTIpO1xyXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbiAgICAtbW96LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuICAgIC1vLWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC45cyBlYXNlLWluLW91dCAhaW1wb3J0YW50O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjlzIGVhc2UtaW4tb3V0ICFpbXBvcnRhbnQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgLjlzIGVhc2UtaW4tb3V0ICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjlzIGVhc2UtaW4tb3V0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb290VHh0IHtcclxuICAgIGZvbnQtZmFtaWx5OiBGdXR1cmEsIFwiVHJlYnVjaGV0IE1TXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC12YXJpYW50OiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBhbmltYXRpb246IHR5cGUgLjVzIGFsdGVybmF0ZSBpbmZpbml0ZTtcclxufVxyXG5cclxuLmZvb3RDb24ge1xyXG4gICAgY29sb3I6IGl2b3J5O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuLyogc29jaWFsIG1lZGlhIGxpbmsgKi9cclxuXHJcbi5zbWxuayB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcblxyXG4vKiBzaWRlbmF2IHNvY2lhbCBtZWRpYSBsaW5rICovXHJcblxyXG4uc2lkZW5hdlNNIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuXHJcbi8qIHNpZGVuYXYgKi9cclxuXHJcbi5zaWRlbGluayB7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG8gQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgY29sb3I6IHJnYigxOTQsIDE5NCwgMTk0KTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1heC13aWR0aDogNjgwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDAlO1xyXG59XHJcblxyXG4ubmF2LWl0ZW0ge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDI0MywgMjQzKTtcclxufVxyXG5cclxuYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmEuaG92ZXIuYS5hY3RpdmUge1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxufVxyXG5cclxubWF0LXRvb2xiYXIge1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDEsIDE5NSwgMTk1LCAwLjIwNSk7ICovXHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6OTUwcHgpIHtcclxuICAgIG1hdC10b29sYmFyIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"]
      });

      var barcodeDialog = function barcodeDialog() {
        _classCallCheck(this, barcodeDialog);
      };

      barcodeDialog.ɵfac = function barcodeDialog_Factory(t) {
        return new (t || barcodeDialog)();
      };

      barcodeDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: barcodeDialog,
        selectors: [["barcode"]],
        decls: 11,
        vars: 0,
        consts: [["lang", "en"], ["charset", "UTF-8"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["href", "https://www.instagram.com/ramanathan_sks/", "target", "_blank"], ["matTooltip", "Instagram", "matTooltipPosition", "below", "height", "200px", "width", "200px", "src", "https://firebasestorage.googleapis.com/v0/b/ram-port.appspot.com/o/insta_barcode.jpeg?alt=media&token=b202ceca-4dfc-4429-ba6b-237134cf858d", "alt", "barcode", "draggable", "false"]],
        template: function barcodeDialog_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Click (or) Scan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltip"]],
        styles: ["a[_ngcontent-%COMP%] {\n            outline: none;\n        }\n        \n        p[_ngcontent-%COMP%] {\n            text-align: center;\n        }"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire */
      "spgP");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/storage */
      "Vaw3");
      /* harmony import */


      var _material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./material/material.module */
      "hctd");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _crystalui_angular_lightbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @crystalui/angular-lightbox */
      "k/Yu");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./gallery/gallery.component */
      "Ij5Q");
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./about/about.component */
      "84zG");
      /* harmony import */


      var _not_found_component_not_found_component_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./not-found-component/not-found-component.component */
      "7Sx4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_1__["AngularFireModule"].initializeApp({
          apiKey: "AIzaSyBHY37xmpyX5iD4NHxX41GEY3r9IAQCLc4",
          authDomain: "ram-port.firebaseapp.com",
          projectId: "ram-port",
          storageBucket: "ram-port.appspot.com",
          messagingSenderId: "843189379022",
          appId: "1:843189379022:web:1017471ca5142d93c2559f",
          measurementId: "G-TEPTLRLNBS"
        }), _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorageModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestoreModule"], _crystalui_angular_lightbox__WEBPACK_IMPORTED_MODULE_6__["CrystalLightboxModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _app_component__WEBPACK_IMPORTED_MODULE_8__["barcodeDialog"], _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_11__["GalleryComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"], _not_found_component_not_found_component_component__WEBPACK_IMPORTED_MODULE_13__["NotFoundComponentComponent"], _not_found_component_not_found_component_component__WEBPACK_IMPORTED_MODULE_13__["OfflineComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_1__["AngularFireModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorageModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestoreModule"], _crystalui_angular_lightbox__WEBPACK_IMPORTED_MODULE_6__["CrystalLightboxModule"]]
        });
      })();
      /***/

    },

    /***/
    "hctd":
    /*!*********************************************!*\
      !*** ./src/app/material/material.module.ts ***!
      \*********************************************/

    /*! exports provided: MaterialModule */

    /***/
    function hctd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
        return MaterialModule;
      });
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/clipboard */
      "UXJo");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "5+WD");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "+rOU");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "vxfF");
      /* harmony import */


      var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/stepper */
      "B/XX");
      /* harmony import */


      var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/table */
      "f6nW");
      /* harmony import */


      var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/tree */
      "FvrZ");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/badge */
      "TU8p");
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      "2ChS");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "jaxi");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/material/slider */
      "5RNC");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! @angular/material/tree */
      "8yBR");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "rDax");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MaterialModule = function MaterialModule() {
        _classCallCheck(this, MaterialModule);
      };

      MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_43__["ɵɵdefineNgModule"]({
        type: MaterialModule
      });
      MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_43__["ɵɵdefineInjector"]({
        factory: function MaterialModule_Factory(t) {
          return new (t || MaterialModule)();
        },
        imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__["ClipboardModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_42__["OverlayModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_37__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_43__["ɵɵsetNgModuleScope"](MaterialModule, {
          exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__["ClipboardModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_42__["OverlayModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_37__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"]]
        });
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./gallery/gallery.component */
      "Ij5Q");
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./about/about.component */
      "84zG");
      /* harmony import */


      var _not_found_component_not_found_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./not-found-component/not-found-component.component */
      "7Sx4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
      }, {
        path: "gallery",
        component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__["GalleryComponent"]
      }, {
        path: "about",
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
      }, {
        path: "b2ZmbGluZQ",
        component: _not_found_component_not_found_component_component__WEBPACK_IMPORTED_MODULE_4__["OfflineComponent"]
      }, {
        path: '404',
        component: _not_found_component_not_found_component_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponentComponent"]
      }, {
        path: '**',
        redirectTo: '/404'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map