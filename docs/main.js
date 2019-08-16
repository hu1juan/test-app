(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"test-app-wrapper\">\n  <section class=\"hero-banner\" id=\"hero-banner\">\n    <div class=\"uk-text-center\">\n      <p class=\"main-heading\">Hello World!</p>\n      <p class=\"sub-heading\">\n        lorem ipsum dolor sit amet, consectetuer adipisc elit\n      </p>\n      <a href=\"#contact\" uk-scroll>\n        <button class=\"uk-margin-top\">contact us</button></a\n      >\n    </div>\n  </section>\n\n  <section class=\"info\" id=\"info\">\n    <div class=\"uk-container\">\n      <div class=\"text-part\">\n        <p class=\"heading\">Pharetra Magna Etiam Mollis</p>\n        <p class=\"body\">\n          Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur\n          purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac,\n          vestibulum at eros. Aenean eu leo quam. Pallentesque ornare sem\n          lacinia quam venenatis vestibulum. Cras justo odio, dapibus ac\n          facilisis in, egestas eget quam.\n        </p>\n      </div>\n      <div class=\"img-part\">\n        <img src=\"./assets/orange.jpg\" alt=\"\" />\n      </div>\n    </div>\n    <div class=\"uk-text-center uk-margin-top\">\n      <a href=\"#footer\" uk-scroll>\n        <img\n          src=\"{{\n            isArrowHover\n              ? './assets/triangle-purple.svg'\n              : './assets/triangle-yellow.svg'\n          }}\"\n          (mouseenter)=\"isArrowHover = true\"\n          (mouseleave)=\"isArrowHover = false\"\n      /></a>\n    </div>\n  </section>\n\n  <section class=\"contact\" id=\"contact\">\n    <div class=\"uk-container\">\n      <div class=\"text-part\">\n        <p class=\"heading\">Contact Us!</p>\n        <p class=\"body\">\n          Nulla vitae elit libero, a pharetra augue. Curabitur blandit tempus\n          porttitor. Vestibulum id ligula porta felis euismod semper.\n        </p>\n      </div>\n      <div class=\"form-part\">\n        <form>\n          <fieldset class=\"uk-fieldset\">\n            <input class=\"uk-input\" type=\"text\" placeholder=\"My Name\" />\n            <input\n              class=\"uk-input uk-margin-top\"\n              type=\"email\"\n              placeholder=\"My Email\"\n            />\n            <textarea\n              class=\"uk-input uk-margin-top\"\n              placeholder=\"My Message\"\n            ></textarea>\n          </fieldset>\n          <div class=\"uk-text-right\">\n            <button class=\"uk-margin-top\">send</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"footer\" id=\"footer\">\n    <div class=\"uk-container\">\n      <span>@2020, Cre8ivClick ~ all rights reserved</span>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".test-app-wrapper section.hero-banner {\n  padding: 0 15px;\n  height: 100vh;\n  background-color: #310c3d;\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n  .test-app-wrapper section.hero-banner div {\n    max-width: 550px;\n    margin: 0 auto; }\n  .test-app-wrapper section.hero-banner div p.main-heading {\n      font-size: 36px;\n      color: #e8bf2e;\n      margin: 0; }\n  .test-app-wrapper section.hero-banner div p.sub-heading {\n      font-size: 18px;\n      color: #f18805;\n      margin: 0; }\n  .test-app-wrapper section.hero-banner div button {\n      background-color: #310c3d;\n      border: 2px solid #e8bf2e;\n      border-radius: 25px;\n      font-size: 14px;\n      padding: 10px 20px;\n      color: #e8bf2e;\n      font-weight: 800;\n      cursor: pointer; }\n  .test-app-wrapper section.hero-banner div button:hover {\n        background-color: #552f3a; }\n  .test-app-wrapper section.hero-banner div button:active {\n        background: #7a5337; }\n  .test-app-wrapper section.hero-banner div button a {\n        color: #e8bf2e; }\n  .test-app-wrapper section.hero-banner div button a:hover {\n          text-decoration: none; }\n  .test-app-wrapper section.info {\n  background-color: #f18805;\n  padding: 100px 0 50px; }\n  .test-app-wrapper section.info div.uk-container {\n    display: flex; }\n  .test-app-wrapper section.info div.uk-container div {\n      width: 50%;\n      color: #310c3d; }\n  .test-app-wrapper section.info div.uk-container div:first-child {\n        margin-right: 15px; }\n  .test-app-wrapper section.info div.uk-container div.text-part p.heading {\n        font-size: 28px;\n        font-weight: 800;\n        font-family: 'Alegreya', serif !important; }\n  .test-app-wrapper section.info div.uk-container div.text-part p.body {\n        font-size: 18px;\n        font-family: 'Alegreya', serif !important; }\n  .test-app-wrapper section.info div.uk-container div.img-part img {\n        border: 4px solid #310c3d;\n        border-radius: 50px; }\n  .test-app-wrapper section.contact::before {\n  opacity: 0; }\n  .test-app-wrapper section.contact {\n  background: linear-gradient(rgba(232, 191, 46, 0.8), rgba(232, 191, 46, 0.8)), url('network.png');\n  background-repeat: no-repeat;\n  background-position: 5% 50%;\n  background-size: 40% 300px;\n  padding: 100px 0 50px;\n  background-color: #e8bf2e; }\n  .test-app-wrapper section.contact div.uk-container {\n    display: flex; }\n  .test-app-wrapper section.contact div.uk-container div {\n      width: 50%;\n      color: #310c3d; }\n  .test-app-wrapper section.contact div.uk-container div:first-child {\n        margin-right: 15px; }\n  .test-app-wrapper section.contact div.uk-container div.text-part p.heading {\n        font-size: 28px;\n        font-weight: 800;\n        font-family: 'Alegreya', serif !important; }\n  .test-app-wrapper section.contact div.uk-container div.text-part p.body {\n        font-size: 18px;\n        font-family: 'Alegreya', serif !important; }\n  .test-app-wrapper section.contact div.uk-container div.form-part input[type='text'],\n      .test-app-wrapper section.contact div.uk-container div.form-part input[type='email'],\n      .test-app-wrapper section.contact div.uk-container div.form-part textarea {\n        color: #310c3d;\n        border: 1px solid #f18805;\n        background-color: rgba(241, 136, 5, 0.25);\n        font-size: 18px; }\n  .test-app-wrapper section.contact div.uk-container div.form-part input[type='text']::-webkit-input-placeholder,\n        .test-app-wrapper section.contact div.uk-container div.form-part input[type='email']::-webkit-input-placeholder,\n        .test-app-wrapper section.contact div.uk-container div.form-part textarea::-webkit-input-placeholder {\n          color: rgba(102, 102, 102, 0.4); }\n  .test-app-wrapper section.contact div.uk-container div.form-part input[type='text']::-moz-placeholder,\n        .test-app-wrapper section.contact div.uk-container div.form-part input[type='email']::-moz-placeholder,\n        .test-app-wrapper section.contact div.uk-container div.form-part textarea::-moz-placeholder {\n          color: rgba(102, 102, 102, 0.4); }\n  .test-app-wrapper section.contact div.uk-container div.form-part input[type='text']::-ms-input-placeholder,\n        .test-app-wrapper section.contact div.uk-container div.form-part input[type='email']::-ms-input-placeholder,\n        .test-app-wrapper section.contact div.uk-container div.form-part textarea::-ms-input-placeholder {\n          color: rgba(102, 102, 102, 0.4); }\n  .test-app-wrapper section.contact div.uk-container div.form-part input[type='text']::placeholder,\n        .test-app-wrapper section.contact div.uk-container div.form-part input[type='email']::placeholder,\n        .test-app-wrapper section.contact div.uk-container div.form-part textarea::placeholder {\n          color: rgba(102, 102, 102, 0.4); }\n  .test-app-wrapper section.contact div.uk-container div.form-part input[type='text']:focus,\n        .test-app-wrapper section.contact div.uk-container div.form-part input[type='email']:focus,\n        .test-app-wrapper section.contact div.uk-container div.form-part textarea:focus {\n          border: 1px solid #310c3d; }\n  .test-app-wrapper section.contact div.uk-container div.form-part input[type='text']:focus::-webkit-input-placeholder,\n          .test-app-wrapper section.contact div.uk-container div.form-part input[type='email']:focus::-webkit-input-placeholder,\n          .test-app-wrapper section.contact div.uk-container div.form-part textarea:focus::-webkit-input-placeholder {\n            color: #310c3d; }\n  .test-app-wrapper section.contact div.uk-container div.form-part input[type='text']:focus::-moz-placeholder,\n          .test-app-wrapper section.contact div.uk-container div.form-part input[type='email']:focus::-moz-placeholder,\n          .test-app-wrapper section.contact div.uk-container div.form-part textarea:focus::-moz-placeholder {\n            color: #310c3d; }\n  .test-app-wrapper section.contact div.uk-container div.form-part input[type='text']:focus::-ms-input-placeholder,\n          .test-app-wrapper section.contact div.uk-container div.form-part input[type='email']:focus::-ms-input-placeholder,\n          .test-app-wrapper section.contact div.uk-container div.form-part textarea:focus::-ms-input-placeholder {\n            color: #310c3d; }\n  .test-app-wrapper section.contact div.uk-container div.form-part input[type='text']:focus::placeholder,\n          .test-app-wrapper section.contact div.uk-container div.form-part input[type='email']:focus::placeholder,\n          .test-app-wrapper section.contact div.uk-container div.form-part textarea:focus::placeholder {\n            color: #310c3d; }\n  .test-app-wrapper section.contact div.uk-container div.form-part div {\n        width: 100%; }\n  .test-app-wrapper section.contact div.uk-container div.form-part div button {\n          background-color: transparent;\n          border: 2px solid #310c3d;\n          border-radius: 25px;\n          font-size: 14px;\n          padding: 10px 20px;\n          color: #310c3d;\n          font-weight: 800;\n          cursor: pointer; }\n  .test-app-wrapper section.contact div.uk-container div.form-part div button:hover {\n            background-color: #eab123; }\n  .test-app-wrapper section.contact div.uk-container div.form-part div button:active {\n            background-color: #f18805; }\n  .test-app-wrapper section.footer {\n  padding: 100px 0 25px;\n  background: linear-gradient(rgba(49, 12, 61, 0.7), rgba(49, 12, 61, 0.7)), url('bright-squares.png');\n  background-color: #310c3d;\n  text-align: center;\n  color: #e8bf2e; }\n  .test-app-wrapper section.footer span {\n    font-size: 12px;\n    font-weight: 500;\n    text-shadow: 0 0 6px #e8bf2e; }\n  @media screen and (max-width: 640px) {\n  .test-app-wrapper section.info {\n    padding: 25px 0; }\n    .test-app-wrapper section.info div.uk-container {\n      flex-flow: column wrap;\n      flex-direction: column-reverse; }\n      .test-app-wrapper section.info div.uk-container div {\n        width: 100%; }\n        .test-app-wrapper section.info div.uk-container div.text-part {\n          margin-top: 25px; }\n  .test-app-wrapper section.contact {\n    background-position: 50% 90%;\n    background-size: 70% 240px;\n    padding: 25px 0; }\n    .test-app-wrapper section.contact div.uk-container {\n      flex-flow: column wrap; }\n      .test-app-wrapper section.contact div.uk-container div {\n        width: 100%; }\n  .test-app-wrapper section.footer {\n    text-align: left; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFByb2plY3RzXFx0ZXN0LWFwcC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBS0ksZUFBZTtFQUNmLGFBQWE7RUFDYix5QkFOYztFQU9kLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCLEVBQUE7RUFWM0I7SUFZTSxnQkFBZ0I7SUFDaEIsY0FBYyxFQUFBO0VBYnBCO01BZ0JVLGVBQWU7TUFDZixjQWRRO01BZVIsU0FBUyxFQUFBO0VBbEJuQjtNQXFCVSxlQUFlO01BQ2YsY0FwQlE7TUFxQlIsU0FBUyxFQUFBO0VBdkJuQjtNQTJCUSx5QkExQlU7TUEyQlYseUJBekJVO01BMEJWLG1CQUFtQjtNQUNuQixlQUFlO01BQ2Ysa0JBQWtCO01BQ2xCLGNBN0JVO01BOEJWLGdCQUFnQjtNQUNoQixlQUFlLEVBQUE7RUFsQ3ZCO1FBb0NVLHlCQUF5QixFQUFBO0VBcENuQztRQXVDVSxtQkFBbUIsRUFBQTtFQXZDN0I7UUEwQ1UsY0F2Q1EsRUFBQTtFQUhsQjtVQTRDWSxxQkFBcUIsRUFBQTtFQTVDakM7RUFvREkseUJBbERjO0VBbURkLHFCQUFxQixFQUFBO0VBckR6QjtJQXVETSxhQUFhLEVBQUE7RUF2RG5CO01BeURRLFVBQVU7TUFDVixjQXpEVSxFQUFBO0VBRGxCO1FBNERVLGtCQUFrQixFQUFBO0VBNUQ1QjtRQWdFWSxlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLHlDQUF5QyxFQUFBO0VBbEVyRDtRQXFFWSxlQUFlO1FBQ2YseUNBQXlDLEVBQUE7RUF0RXJEO1FBMEVVLHlCQXpFUTtRQTBFUixtQkFBbUIsRUFBQTtFQTNFN0I7RUFpRkksVUFBVSxFQUFBO0VBakZkO0VBb0ZJLGlHQUk4QjtFQUU5Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLDBCQUEwQjtFQUUxQixxQkFBcUI7RUFDckIseUJBNUZjLEVBQUE7RUFIbEI7SUFpR00sYUFBYSxFQUFBO0VBakduQjtNQW1HUSxVQUFVO01BQ1YsY0FuR1UsRUFBQTtFQURsQjtRQXNHVSxrQkFBa0IsRUFBQTtFQXRHNUI7UUEwR1ksZUFBZTtRQUNmLGdCQUFnQjtRQUNoQix5Q0FBeUMsRUFBQTtFQTVHckQ7UUErR1ksZUFBZTtRQUNmLHlDQUF5QyxFQUFBO0VBaEhyRDs7O1FBdUhZLGNBdEhNO1FBdUhOLHlCQXRITTtRQXVITix5Q0FBeUM7UUFDekMsZUFBZSxFQUFBO0VBMUgzQjs7O1VBNEhjLCtCQUErQixFQUFBO0VBNUg3Qzs7O1VBNEhjLCtCQUErQixFQUFBO0VBNUg3Qzs7O1VBNEhjLCtCQUErQixFQUFBO0VBNUg3Qzs7O1VBNEhjLCtCQUErQixFQUFBO0VBNUg3Qzs7O1VBK0hjLHlCQTlISSxFQUFBO0VBRGxCOzs7WUFpSWdCLGNBaElFLEVBQUE7RUFEbEI7OztZQWlJZ0IsY0FoSUUsRUFBQTtFQURsQjs7O1lBaUlnQixjQWhJRSxFQUFBO0VBRGxCOzs7WUFpSWdCLGNBaElFLEVBQUE7RUFEbEI7UUFzSVksV0FBVyxFQUFBO0VBdEl2QjtVQXdJYyw2QkFBNkI7VUFDN0IseUJBeElJO1VBeUlKLG1CQUFtQjtVQUNuQixlQUFlO1VBQ2Ysa0JBQWtCO1VBQ2xCLGNBNUlJO1VBNklKLGdCQUFnQjtVQUNoQixlQUFlLEVBQUE7RUEvSTdCO1lBaUpnQix5QkFBeUIsRUFBQTtFQWpKekM7WUFvSmdCLHlCQWxKRSxFQUFBO0VBRmxCO0VBOEpJLHFCQUFxQjtFQUNyQixvR0FDcUM7RUFDckMseUJBaEtjO0VBaUtkLGtCQUFrQjtFQUNsQixjQWhLYyxFQUFBO0VBSGxCO0lBcUtNLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsNEJBcEtZLEVBQUE7RUF1S2hCO0VBMUtGO0lBNEtNLGVBQWUsRUFBQTtJQTVLckI7TUE4S1Esc0JBQXNCO01BQ3RCLDhCQUE4QixFQUFBO01BL0t0QztRQWlMVSxXQUFXLEVBQUE7UUFqTHJCO1VBbUxZLGdCQUFnQixFQUFBO0VBbkw1QjtJQXlMTSw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLGVBQWUsRUFBQTtJQTNMckI7TUE2TFEsc0JBQXNCLEVBQUE7TUE3TDlCO1FBK0xVLFdBQVcsRUFBQTtFQS9MckI7SUFxTU0sZ0JBQWdCLEVBQUEsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVzdC1hcHAtd3JhcHBlciB7XHJcbiAgJHB1cnBsZTogIzMxMGMzZDtcclxuICAkb3JhbmdlOiAjZjE4ODA1O1xyXG4gICR5ZWxsb3c6ICNlOGJmMmU7XHJcbiAgc2VjdGlvbi5oZXJvLWJhbm5lciB7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHB1cnBsZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBkaXYge1xyXG4gICAgICBtYXgtd2lkdGg6IDU1MHB4O1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgcCB7XHJcbiAgICAgICAgJi5tYWluLWhlYWRpbmcge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgICAgY29sb3I6ICR5ZWxsb3c7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuc3ViLWhlYWRpbmcge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgY29sb3I6ICRvcmFuZ2U7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHB1cnBsZTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkeWVsbG93O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICBjb2xvcjogJHllbGxvdztcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTJmM2E7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICM3YTUzMzc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgY29sb3I6ICR5ZWxsb3c7XHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VjdGlvbi5pbmZvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICBwYWRkaW5nOiAxMDBweCAwIDUwcHg7XHJcbiAgICBkaXYudWstY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZGl2IHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGNvbG9yOiAkcHVycGxlO1xyXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLnRleHQtcGFydCB7XHJcbiAgICAgICAgICBwLmhlYWRpbmcge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQWxlZ3JleWEnLCBzZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcC5ib2R5IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0FsZWdyZXlhJywgc2VyaWYgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi5pbWctcGFydCBpbWcge1xyXG4gICAgICAgICAgYm9yZGVyOiA0cHggc29saWQgJHB1cnBsZTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNlY3Rpb24uY29udGFjdDo6YmVmb3JlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIHNlY3Rpb24uY29udGFjdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgcmdiYSgyMzIsIDE5MSwgNDYsIDAuOCksXHJcbiAgICAgICAgcmdiYSgyMzIsIDE5MSwgNDYsIDAuOClcclxuICAgICAgKSxcclxuICAgICAgdXJsKCcuLi9hc3NldHMvbmV0d29yay5wbmcnKTtcclxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL25ldHdvcmsucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNSUgNTAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA0MCUgMzAwcHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGNvbG9yO1xyXG4gICAgcGFkZGluZzogMTAwcHggMCA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHllbGxvdztcclxuICAgIGRpdi51ay1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBkaXYge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgY29sb3I6ICRwdXJwbGU7XHJcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYudGV4dC1wYXJ0IHtcclxuICAgICAgICAgIHAuaGVhZGluZyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBbGVncmV5YScsIHNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwLmJvZHkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQWxlZ3JleWEnLCBzZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLmZvcm0tcGFydCB7XHJcbiAgICAgICAgICBpbnB1dFt0eXBlPSd0ZXh0J10sXHJcbiAgICAgICAgICBpbnB1dFt0eXBlPSdlbWFpbCddLFxyXG4gICAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICBjb2xvcjogJHB1cnBsZTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJG9yYW5nZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDEzNiwgNSwgMC4yNSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDEwMiwgMTAyLCAxMDIsIDAuNCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHB1cnBsZTtcclxuICAgICAgICAgICAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHB1cnBsZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRwdXJwbGU7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkcHVycGxlO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VhYjEyMztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlY3Rpb24uZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IDEwMHB4IDAgMjVweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDQ5LCAxMiwgNjEsIDAuNyksIHJnYmEoNDksIDEyLCA2MSwgMC43KSksXHJcbiAgICAgIHVybCgnLi4vYXNzZXRzL2JyaWdodC1zcXVhcmVzLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHB1cnBsZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAkeWVsbG93O1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgdGV4dC1zaGFkb3c6IDAgMCA2cHggJHllbGxvdztcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcclxuICAgIHNlY3Rpb24uaW5mbyB7XHJcbiAgICAgIHBhZGRpbmc6IDI1cHggMDtcclxuICAgICAgZGl2LnVrLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgJi50ZXh0LXBhcnQge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2VjdGlvbi5jb250YWN0IHtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDkwJTtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiA3MCUgMjQwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDI1cHggMDtcclxuICAgICAgZGl2LnVrLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2VjdGlvbi5mb290ZXIge1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.isArrowHover = false;
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\test-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map