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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _loginComp_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loginComp/login.component */ "./src/app/loginComp/login.component.ts");
/* harmony import */ var _register_comp_register_comp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register-comp/register-comp.component */ "./src/app/register-comp/register-comp.component.ts");
/* harmony import */ var _contact_comp_contact_comp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-comp/contact-comp.component */ "./src/app/contact-comp/contact-comp.component.ts");
/* harmony import */ var _home_content_comp_home_content_comp_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-content-comp/home-content-comp.component */ "./src/app/home-content-comp/home-content-comp.component.ts");
/* harmony import */ var _sales_comp_sales_comp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sales-comp/sales-comp.component */ "./src/app/sales-comp/sales-comp.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'Login', component: _loginComp_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'Register', component: _register_comp_register_comp_component__WEBPACK_IMPORTED_MODULE_4__["RegisterCompComponent"] },
    { path: '', component: _home_content_comp_home_content_comp_component__WEBPACK_IMPORTED_MODULE_6__["HomeContentCompComponent"] },
    { path: 'Contact', component: _contact_comp_contact_comp_component__WEBPACK_IMPORTED_MODULE_5__["ContactCompComponent"] },
    { path: 'Sales', component: _sales_comp_sales_comp_component__WEBPACK_IMPORTED_MODULE_7__["SalesCompComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div id=\"wrapper\">\n\t\t<!-- start header -->\n\t\t<header style=\"font-family: 'Shrikhand', cursive;font-family: 'PT Sans', sans-serif;\">\n\t\t\t<div class=\"top\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t<ul class=\"topleft-info\">\n\t\t\t\t\t\t\t\t<li><i class=\"fa fa-phone\"></i> +94 076 914 7364</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- <div class=\"col-md-6\">\n\t\t\t\t\t\t\t<div id=\"sb-search\" class=\"sb-search\">\n\t\t\t\t\t\t\t\t<form>\n\t\t\t\t\t\t\t\t\t<input class=\"sb-search-input\" placeholder=\"Enter your search term...\" type=\"text\" value=\"\" name=\"search\" id=\"search\">\n\t\t\t\t\t\t\t\t\t<input class=\"sb-search-submit\" type=\"submit\" value=\"\">\n\t\t\t\t\t\t\t\t\t<span class=\"sb-icon-search\" title=\"Click to start searching\"></span>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<form class=\"form\" >\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\" style=\"padding-left: 20px; border-radius: 40px;\" id=\"mysearch\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-addon\" style=\"margin-left: -50px; z-index: 3; border-radius: 40px; background-color: transparent; border:none;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-warning btn-sm\" type=\"submit\" style=\"border-radius: 20px;\" id=\"search-btn\"><i class=\"fa fa-search\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"navbar navbar-default navbar-static-top\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div class=\"navbar-header\">\n\t\t\t\t\t\t<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                    </button>\n\t\t\t\t\t\t<a class=\"navbar-brand\" href=\"index.html\"><img src=\"../../assets/img/logo.png\" alt=\"\" width=\"199\" height=\"52\" /></a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"navbar-collapse collapse \">\n\t\t\t\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<li><a routerLink=\"\"  routerLinkActive=\"active-link\">Home</a></li>\n\t\t\t\t\t\t\t<li><a routerLink=\"/Login\"  routerLinkActive=\"active-link\">Login</a></li>\n\t\t\t\t\t\t\t<li><a routerLink=\"/Register\"  routerLinkActive=\"active-link\">Register</a></li>\n\t\t\t\t\t\t\t<li><a routerLink=\"/Sales\"  routerLinkActive=\"active-link\">Sales</a></li>\n\n\t\t\t\t\t\t\t<li><a routerLink=\"/Aboutus\" routerLinkActive=\"active-link\">About Us</a></li>\n\n\t\t\t\t\t\t\t\n              \n              <li class=\"dropdown\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"dropdown-toggle \" data-toggle=\"dropdown\" data-hover=\"dropdown\" data-delay=\"0\" data-close-others=\"false\">Reports <i class=\"fa fa-angle-down\"></i></a>\n\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Invoice</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Invoice History</a></li>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</ul>\n              </li>\n              \n\t\t\t\t\t\t\t<li><a routerLink=\"/Contact\" routerLinkActive=\"active-link\"> Contact</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</header>\n\t\t<!-- end header -->\n        <router-outlet></router-outlet>\n\t\t<footer>\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-3 col-lg-3\">\n\t\t\t\t\t\t<div class=\"widget\">\n\t\t\t\t\t\t\t<h4>Get in touch with us</h4>\n\t\t\t\t\t\t\t<address>\n\t\t\t\t\t<strong>Sailor company Inc</strong><br>\n\t\t\t\t\t Sailor suite room V124, DB 91<br>\n\t\t\t\t\t Someplace 71745 Earth </address>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<i class=\"icon-phone\"></i> (123) 456-7890 - (123) 555-7891 <br>\n\t\t\t\t\t\t\t\t<i class=\"icon-envelope-alt\"></i> email@domainname.com\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-3 col-lg-3\">\n\t\t\t\t\t\t<div class=\"widget\">\n\t\t\t\t\t\t\t<h4>Information</h4>\n\t\t\t\t\t\t\t<ul class=\"link-list\">\n\t\t\t\t\t\t\t\t<li><a href=\"#\">Press release</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\">Terms and conditions</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\">Privacy policy</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\">Career center</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\">Contact us</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-3 col-lg-3\">\n\t\t\t\t\t\t<div class=\"widget\">\n\t\t\t\t\t\t\t<h4>Pages</h4>\n\t\t\t\t\t\t\t<ul class=\"link-list\">\n\t\t\t\t\t\t\t\t<li><a href=\"#\">Press release</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\">Terms and conditions</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\">Privacy policy</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\">Career center</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\">Contact us</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-3 col-lg-3\">\n\t\t\t\t\t\t<div class=\"widget\">\n\t\t\t\t\t\t\t<h4>Newsletter</h4>\n\t\t\t\t\t\t\t<p>Fill your email and sign up for monthly newsletter to keep updated</p>\n\t\t\t\t\t\t\t<div class=\"form-group multiple-form-group input-group\">\n\t\t\t\t\t\t\t\t<input type=\"email\" name=\"email\" class=\"form-control\">\n\t\t\t\t\t\t\t\t<span class=\"input-group-btn\">\n                            <button type=\"button\" class=\"btn btn-theme btn-add\">Subscribe</button>\n                        </span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div id=\"sub-footer\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t\t<div class=\"copyright\">\n\t\t\t\t\t\t\t\t<p>&copy; Sailor Theme - All Right Reserved</p>\n\t\t\t\t\t\t\t\t<div class=\"credits\">\n\t\t\t\t\t\t\t\t\t<!--\n                    All the links in the footer should remain intact. \n                    You can delete the links only if you purchased the pro version.\n                    Licensing information: https://bootstrapmade.com/license/\n                    Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Sailor\n                  -->\n\t\t\t\t\t\t\t\t\tDesigned by <a href=\"https://bootstrapmade.com/\">BootstrapMade</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t\t<ul class=\"social-network\">\n\t\t\t\t\t\t\t\t<li><a href=\"#\" data-placement=\"top\" title=\"Facebook\"><i class=\"fa fa-facebook\"></i></a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\" data-placement=\"top\" title=\"Twitter\"><i class=\"fa fa-twitter\"></i></a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\" data-placement=\"top\" title=\"Linkedin\"><i class=\"fa fa-linkedin\"></i></a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\" data-placement=\"top\" title=\"Pinterest\"><i class=\"fa fa-pinterest\"></i></a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\" data-placement=\"top\" title=\"Google plus\"><i class=\"fa fa-google-plus\"></i></a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</footer>\n\t</div>\n\t<a href=\"#\" class=\"scrollup\"><i class=\"fa fa-angle-up active\"></i></a>\n   "

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ewrwr';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _loginComp_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loginComp/login.component */ "./src/app/loginComp/login.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _register_comp_register_comp_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register-comp/register-comp.component */ "./src/app/register-comp/register-comp.component.ts");
/* harmony import */ var _contact_comp_contact_comp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact-comp/contact-comp.component */ "./src/app/contact-comp/contact-comp.component.ts");
/* harmony import */ var _home_content_comp_home_content_comp_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home-content-comp/home-content-comp.component */ "./src/app/home-content-comp/home-content-comp.component.ts");
/* harmony import */ var _sales_comp_sales_comp_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sales-comp/sales-comp.component */ "./src/app/sales-comp/sales-comp.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//import { HomeContentCompComponent } from './home-content-comp/home-content-comp.component';
/*
const Routes = [
  { path: 'Login', component: LoginComponent }
];
*/
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _loginComp_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _register_comp_register_comp_component__WEBPACK_IMPORTED_MODULE_6__["RegisterCompComponent"],
                _contact_comp_contact_comp_component__WEBPACK_IMPORTED_MODULE_7__["ContactCompComponent"],
                _home_content_comp_home_content_comp_component__WEBPACK_IMPORTED_MODULE_8__["HomeContentCompComponent"],
                _sales_comp_sales_comp_component__WEBPACK_IMPORTED_MODULE_9__["SalesCompComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                //it is important for routing
                /* RouterModule.forRoot([
                  {path: 'Login1', component:LoginComponent },
                  { path: 'Register', component: RegisterCompComponent },
             
                 ]),
             */
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact-comp/contact-comp.component.css":
/*!*********************************************************!*\
  !*** ./src/app/contact-comp/contact-comp.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact-comp/contact-comp.component.html":
/*!**********************************************************!*\
  !*** ./src/app/contact-comp/contact-comp.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n\t<meta charset=\"utf-8\">\n\t<title>Sailor - Bootstrap 3 corporate template</title>\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\t<meta name=\"description\" content=\"Bootstrap 3 template for corporate business\" />\n\t<!-- css -->\n\t<!--<link href=\"css/bootstrap.min.css\" rel=\"stylesheet\" />\n\t<link href=\"css/cubeportfolio.min.css\" rel=\"stylesheet\" />\n\t<link href=\"css/style.css\" rel=\"stylesheet\" />\n  -->\n\n\t<!-- Theme skin -->\n  <!--\t<link id=\"t-colors\" href=\"skins/default.css\" rel=\"stylesheet\" />-->\n\n\t<!-- boxed bg -->\n  <!--\t<link id=\"bodybg\" href=\"bodybg/bg1.css\" rel=\"stylesheet\" type=\"text/css\" />-->\n\n\t<!-- =======================================================\n    Theme Name: Sailor\n    Theme URL: https://bootstrapmade.com/sailor-free-bootstrap-theme/\n    Author: BootstrapMade\n    Author URL: https://bootstrapmade.com\n\t======================================================= -->\n\n</head>\n\n<body>\n\n\n\t<div id=\"wrapper\">\n\t\t\n\t\t\n\t\t<section id=\"content\">\n\t\t\t<div class=\"map\">\n\t\t\t\t<div id=\"google-map\" data-latitude=\"40.713732\" data-longitude=\"-74.0092704\"></div>\n\t\t\t</div>\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-8 col-md-offset-2\">\n\t\t\t\t\t\t<h2>Contact us <small>get in touch with us by filling form below</small></h2>\n\t\t\t\t\t\t<hr class=\"colorgraph\">\n\t\t\t\t\t\t<div id=\"sendmessage\">Your message has been sent. Thank you!</div>\n\t\t\t\t\t\t<div id=\"errormessage\"></div>\n\t\t\t\t\t\t<form action=\"\" method=\"post\" role=\"form\" class=\"contactForm\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"name\" class=\"form-control\" id=\"name\" placeholder=\"Your Name\" data-rule=\"minlen:4\" data-msg=\"Please enter at least 4 chars\" />\n\t\t\t\t\t\t\t\t<div class=\"validation\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"Your Email\" data-rule=\"email\" data-msg=\"Please enter a valid email\" />\n\t\t\t\t\t\t\t\t<div class=\"validation\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"subject\" id=\"subject\" placeholder=\"Subject\" data-rule=\"minlen:4\" data-msg=\"Please enter at least 8 chars of subject\" />\n\t\t\t\t\t\t\t\t<div class=\"validation\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<textarea class=\"form-control\" name=\"message\" rows=\"5\" data-rule=\"required\" data-msg=\"Please write something for us\" placeholder=\"Message\"></textarea>\n\t\t\t\t\t\t\t\t<div class=\"validation\"></div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"text-center\"><button type=\"submit\" class=\"btn btn-theme btn-block btn-md\">Send Message</button></div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t\t<hr class=\"colorgraph\">\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</section>\n\t\t\n\t</div>\n\t<a href=\"#\" class=\"scrollup\"><i class=\"fa fa-angle-up active\"></i></a>\n\t<!-- javascript\n    ================================================== -->\n\t<!-- Placed at the end of the document so the pages load faster -->\n\t\n\t<script>\n\t\tjQuery(document).ready(function($) {\n\n\t\t\t//Google Map\n\t\t\tvar get_latitude = $('#google-map').data('latitude');\n\t\t\tvar get_longitude = $('#google-map').data('longitude');\n\n\t\t\tfunction initialize_google_map() {\n\t\t\t\tvar myLatlng = new google.maps.LatLng(get_latitude, get_longitude);\n\t\t\t\tvar mapOptions = {\n\t\t\t\t\tzoom: 14,\n\t\t\t\t\tscrollwheel: false,\n\t\t\t\t\tcenter: myLatlng\n\t\t\t\t};\n\t\t\t\tvar map = new google.maps.Map(document.getElementById('google-map'), mapOptions);\n\t\t\t\tvar marker = new google.maps.Marker({\n\t\t\t\t\tposition: myLatlng,\n\t\t\t\t\tmap: map\n\t\t\t\t});\n\t\t\t}\n\t\t\tgoogle.maps.event.addDomListener(window, 'load', initialize_google_map);\n\n\t\t});\n\t</script>\n\n\n</body>\n\n</html>\n"

/***/ }),

/***/ "./src/app/contact-comp/contact-comp.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contact-comp/contact-comp.component.ts ***!
  \********************************************************/
/*! exports provided: ContactCompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactCompComponent", function() { return ContactCompComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactCompComponent = /** @class */ (function () {
    function ContactCompComponent() {
    }
    ContactCompComponent.prototype.ngOnInit = function () {
    };
    ContactCompComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-comp',
            template: __webpack_require__(/*! ./contact-comp.component.html */ "./src/app/contact-comp/contact-comp.component.html"),
            styles: [__webpack_require__(/*! ./contact-comp.component.css */ "./src/app/contact-comp/contact-comp.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactCompComponent);
    return ContactCompComponent;
}());



/***/ }),

/***/ "./src/app/home-content-comp/home-content-comp.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/home-content-comp/home-content-comp.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {box-sizing: border-box;}\r\nbody {font-family: Verdana, sans-serif;}\r\n.mySlides {display: none;}\r\nimg {vertical-align: middle;}\r\n/* Slideshow container */\r\n.slideshow-container {\r\n  max-width: 1500px;\r\n  position: relative;\r\n  margin: auto;\r\n}\r\n/* Caption text */\r\n.text {\r\n  color: #f2f2f2;\r\n  font-size: 15px;\r\n  padding: 8px 12px;\r\n  position: absolute;\r\n  bottom: 8px;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n/* Number text (1/3 etc) */\r\n.numbertext {\r\n  color: #f2f2f2;\r\n  font-size: 12px;\r\n  padding: 8px 12px;\r\n  position: absolute;\r\n  top: 0;\r\n}\r\n/* The dots/bullets/indicators */\r\n.dot {\r\n  height: 15px;\r\n  width: 15px;\r\n  margin: 0 2px;\r\n  background-color: #bbb;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  transition: background-color 0.6s ease;\r\n}\r\n.active {\r\n  background-color: #717171;\r\n}\r\n/* Fading animation */\r\n.fade {\r\n  -webkit-animation-name: fade;\r\n  -webkit-animation-duration: 3s;\r\n  animation-name: fade;\r\n  animation-duration: 3s;\r\n}\r\n@-webkit-keyframes fade {\r\n  from {opacity: .4} \r\n  to {opacity: 1}\r\n}\r\n@keyframes fade {\r\n  from {opacity: .4} \r\n  to {opacity: 1}\r\n}\r\n/* On smaller screens, decrease text size */\r\n@media only screen and (max-width: 600px) {\r\n  .text {font-size: 11px}\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/home-content-comp/home-content-comp.component.html":
/*!********************************************************************!*\
  !*** ./src/app/home-content-comp/home-content-comp.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n\t<meta charset=\"utf-8\">\n\t<title>Sailor - Bootstrap 3 corporate template</title>\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\t<meta name=\"description\" content=\"Bootstrap 3 template for corporate business\" />\n\t<!-- css -->\n\t<!--<link href=\"css/bootstrap.min.css\" rel=\"stylesheet\" />\n\t<link href=\"plugins/flexslider/flexslider.css\" rel=\"stylesheet\" media=\"screen\" />\n\t<link href=\"css/cubeportfolio.min.css\" rel=\"stylesheet\" />\n  <link href=\"css/style.css\" rel=\"stylesheet\" />\n  -->\n\n\t<!-- Theme skin -->\n<!--\t<link id=\"t-colors\" href=\"skins/default.css\" rel=\"stylesheet\" />-->\n\n\t<!-- boxed bg -->\n<!--\t<link id=\"bodybg\" href=\"bodybg/bg1.css\" rel=\"stylesheet\" type=\"text/css\" />-->  \n\n\t<!-- =======================================================\n    Theme Name: Sailor\n    Theme URL: https://bootstrapmade.com/sailor-free-bootstrap-theme/\n    Author: BootstrapMade\n    Author URL: https://bootstrapmade.com\n\t======================================================= -->\n\t<script src=\"../../assets/js/slider.js\"></script> \n\t\n\n</head>\n\n<body>\n\t<!-- start slider -->\n\n\n\n\t\t\t\t\t\t\t\n\t\t\t\t<!-- <div class=\"slideshow-container\">\n\n\t\t\t\t\t<div id=\"mySlides\" class=\"mySlides fade\">\n\t\t\t\t\t  <div class=\"numbertext\">1 / 3</div>\n\t\t\t\t\t  <img src=\"../../assets/img/slides/flexslider/1.jpg\n\t\t\t\t\t  \" style=\"width:100%\">\n\t\t\t\t\t  <div class=\"text\">Caption Text</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div id=\"mySlides\" class=\"mySlides fade\">\n\t\t\t\t\t  <div class=\"numbertext\">2 / 3</div>\n\t\t\t\t\t  <img src=\"../../assets/img/slides/flexslider/2.jpg\n\t\t\t\t\t  \" style=\"width:100%\">\n\t\t\t\t\t  <div class=\"text\">Caption Two</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div id=\"mySlides\" class=\"mySlides fade\">\n\t\t\t\t\t  <div class=\"numbertext\">3 / 3</div>\n\t\t\t\t\t  <img src=\"../../assets/img/slides/flexslider/3.jpg\n\t\t\t\t\t  \" style=\"width:100%\">\n\t\t\t\t\t  <div class=\"text\">Caption Three</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<br>\n\t\t\t\t\t\n\t\t\t\t\t<div style=\"text-align:center\">\n\t\t\t\t\t  <span id=\"dot\" class=\"dot\"></span> \n\t\t\t\t\t  <span id=\"dot\" class=\"dot\"></span> \n\t\t\t\t\t  <span id=\"dot\" class=\"dot\"></span> \n\t\t\t\t\t</div> -->\n\n\t\t\t\t\t<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n\t\t\t\t\t\t\t<!-- Indicators -->\n\t\t\t\t\t\t\t<ol class=\"carousel-indicators\">\n\t\t\t\t\t\t\t  <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n\t\t\t\t\t\t\t  <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n\t\t\t\t\t\t\t  <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n\t\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t<!-- Wrapper for slides -->\n\t\t\t\t\t\t\t<div class=\"carousel-inner\">\n\t\t\t\t\t\t\t  <div class=\"item active\">\n\t\t\t\t\t\t\t\t<img src=\"../../assets/img/slides/flexslider/1.jpg\" alt=\"Los Angeles\" style=\"width:100%;\">\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t  <div class=\"item\">\n\t\t\t\t\t\t\t\t<img src=\"../../assets/img/slides/flexslider/2.jpg\" alt=\"Chicago\" style=\"width:100%;\">\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t  <div class=\"item\">\n\t\t\t\t\t\t\t\t<img src=\"../../assets/img/slides/flexslider/3.jpg\" alt=\"New york\" style=\"width:100%;\">\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t<!-- Left and right controls -->\n\t\t\t\t\t\t\t<a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n\t\t\t\t\t\t\t  <span class=\"glyphicon glyphicon-chevron-left\"></span>\n\t\t\t\t\t\t\t  <span class=\"sr-only\">Previous</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n\t\t\t\t\t\t\t  <span class=\"glyphicon glyphicon-chevron-right\"></span>\n\t\t\t\t\t\t\t  <span class=\"sr-only\">Next</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t  </div>\n\t<!-- end slider -->\n\t\t\t\t\t\n\n\n\t\n\n</body>\n\n</html>\n\t\t\t\n\n\t\t"

/***/ }),

/***/ "./src/app/home-content-comp/home-content-comp.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/home-content-comp/home-content-comp.component.ts ***!
  \******************************************************************/
/*! exports provided: HomeContentCompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeContentCompComponent", function() { return HomeContentCompComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeContentCompComponent = /** @class */ (function () {
    function HomeContentCompComponent() {
    }
    HomeContentCompComponent.prototype.ngOnInit = function () {
    };
    HomeContentCompComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-content-comp',
            template: __webpack_require__(/*! ./home-content-comp.component.html */ "./src/app/home-content-comp/home-content-comp.component.html"),
            styles: [__webpack_require__(/*! ./home-content-comp.component.css */ "./src/app/home-content-comp/home-content-comp.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], HomeContentCompComponent);
    return HomeContentCompComponent;
}());



/***/ }),

/***/ "./src/app/loginComp/login.component.css":
/*!***********************************************!*\
  !*** ./src/app/loginComp/login.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/loginComp/login.component.html":
/*!************************************************!*\
  !*** ./src/app/loginComp/login.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n\t<meta charset=\"utf-8\">\n\t<title>Sailor - Bootstrap 3 corporate template</title>\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\t<meta name=\"description\" content=\"Bootstrap 3 template for corporate business\" />\n\t<!-- css -->\n\t<!--<link href=\"css/bootstrap.min.css\" rel=\"stylesheet\" />\n\t<link href=\"css/cubeportfolio.min.css\" rel=\"stylesheet\" />\n\t<link href=\"css/style.css\" rel=\"stylesheet\" />\n\t-->\n\t\n\n\t<!-- Theme skin -->\n\t<!--<link id=\"t-colors\" href=\"skins/default.css\" rel=\"stylesheet\" />-->\n\n\t<!-- boxed bg -->\n<!--\t<link id=\"bodybg\" href=\"bodybg/bg1.css\" rel=\"stylesheet\" type=\"text/css\" />-->\n\n\t<!-- =======================================================\n    Theme Name: Sailor\n    Theme URL: https://bootstrapmade.com/sailor-free-bootstrap-theme/\n    Author: BootstrapMade\n    Author URL: https://bootstrapmade.com\n\t======================================================= -->\n\t<link href=\"https://fonts.googleapis.com/css?family=Encode+Sans+Condensed|Lato|PT+Sans|Shrikhand\" rel=\"stylesheet\"></head>\n\n<body>\n\n\n\n\t\n\t\t<!-- end header -->\n\n\t\t<section id=\"content\" >\n\t\t\t<div class=\"container\">\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3\">\n\t\t\t\t\t\t<form role=\"form\" class=\"register-form\" >\n\t\t\t\t\t\t\t<h2 style=\"font-family: 'Lato', sans-serif;\n\t\t\t\t\t\t\tfont-family: 'PT Sans', sans-serif;\n\t\t\t\t\t\t\tfont-family: 'Encode Sans Condensed', sans-serif;\n\t\t\t\t\t\t\tfont-family: 'Shrikhand', cursive;\">Sign in <small>manage your account</small></h2>\n\t\t\t\t\t\t\t<hr class=\"colorgraph\">\n\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<input type=\"email\" name=\"email\" id=\"email\" class=\"form-control input-lg\" placeholder=\"Email Address\" tabindex=\"4\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control input-lg\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-xs-4 col-sm-3 col-md-3\">\n\t\t\t\t\t\t\t\t\t<span class=\"button-checkbox\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn\" data-color=\"info\" tabindex=\"7\">Remember me</button>\n                        <input type=\"checkbox\" name=\"t_and_c\" id=\"t_and_c\" class=\"hidden\" value=\"1\">\n\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<hr class=\"colorgraph\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-md-6\"><input type=\"submit\" value=\"Sign in\" class=\"btn btn-primary btn-block btn-lg\" tabindex=\"7\"></div>\n\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-md-6\">Don't have an account? <a href=\"register.html\">Register</a></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</section>\n\n\t\t\n\n</body>\n\n</html>\n"

/***/ }),

/***/ "./src/app/loginComp/login.component.ts":
/*!**********************************************!*\
  !*** ./src/app/loginComp/login.component.ts ***!
  \**********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/loginComp/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/loginComp/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/register-comp/register-comp.component.css":
/*!***********************************************************!*\
  !*** ./src/app/register-comp/register-comp.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register-comp/register-comp.component.html":
/*!************************************************************!*\
  !*** ./src/app/register-comp/register-comp.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n\t<meta charset=\"utf-8\">\n\t<title>Sailor - Bootstrap 3 corporate template</title>\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\t<meta name=\"description\" content=\"Bootstrap 3 template for corporate business\" />\n\t<!-- css -->\n<!--\t<link href=\"css/bootstrap.min.css\" rel=\"stylesheet\" />\n\t<link href=\"css/cubeportfolio.min.css\" rel=\"stylesheet\" />\n  <link href=\"css/style.css\" rel=\"stylesheet\" />\n-->\n\n\t<!-- Theme skin -->\n\t<!--<link id=\"t-colors\" href=\"skins/default.css\" rel=\"stylesheet\" />-->\n\n\t<!-- boxed bg -->\n<!--\t<link id=\"bodybg\" href=\"bodybg/bg1.css\" rel=\"stylesheet\" type=\"text/css\" />-->\n\n\t<!-- =======================================================\n    Theme Name: Sailor\n    Theme URL: https://bootstrapmade.com/sailor-free-bootstrap-theme/\n    Author: BootstrapMade\n    Author URL: https://bootstrapmade.com\n\t======================================================= -->\n\n</head>\n\n<body>\n\n\n\t<div id=\"wrapper\">\n\t\n\t\t<section id=\"content\">\n\t\t\t<div class=\"container\">\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3\">\n\t\t\t\t\t\t<form role=\"form\" class=\"register-form\">\n\t\t\t\t\t\t\t<h2>Please Sign Up <small>It's free and always will be.</small></h2>\n\t\t\t\t\t\t\t<hr class=\"colorgraph\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-6\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"first_name\" id=\"first_name\" class=\"form-control input-lg\" placeholder=\"First Name\" tabindex=\"1\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-6\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"last_name\" id=\"last_name\" class=\"form-control input-lg\" placeholder=\"Last Name\" tabindex=\"2\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"display_name\" id=\"display_name\" class=\"form-control input-lg\" placeholder=\"Display Name\" tabindex=\"3\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<input type=\"email\" name=\"email\" id=\"email\" class=\"form-control input-lg\" placeholder=\"Email Address\" tabindex=\"4\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-6\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"password\" name=\"password\" id=\"password\" class=\"form-control input-lg\" placeholder=\"Password\" tabindex=\"5\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-6\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"password\" name=\"password_confirmation\" id=\"password_confirmation\" class=\"form-control input-lg\" placeholder=\"Confirm Password\" tabindex=\"6\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-xs-4 col-sm-3 col-md-3\">\n\t\t\t\t\t\t\t\t\t<span class=\"button-checkbox\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn\" data-color=\"info\" tabindex=\"7\">I Agree</button>\n                        <input type=\"checkbox\" name=\"t_and_c\" id=\"t_and_c\" class=\"hidden\" value=\"1\">\n\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-xs-8 col-sm-9 col-md-9\">\n\t\t\t\t\t\t\t\t\tBy clicking <strong class=\"label label-primary\">Register</strong>, you agree to the <a href=\"#\" data-toggle=\"modal\" data-target=\"#t_and_c_m\">Terms and Conditions</a> set out by this site, including our Cookie Use.\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<hr class=\"colorgraph\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-md-6\"><input type=\"submit\" value=\"Register\" class=\"btn btn-theme btn-block btn-lg\" tabindex=\"7\"></div>\n\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-md-6\">Already have an account? <a href=\"login.html\">Sign In</a></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Modal -->\n\t\t\t\t<div class=\"modal fade\" id=\"t_and_c_m\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n\t\t\t\t\t<div class=\"modal-dialog modal-lg\">\n\t\t\t\t\t\t<div class=\"modal-content\">\n\t\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n\t\t\t\t\t\t\t\t<h4 class=\"modal-title\" id=\"myModalLabel\">Terms & Conditions</h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>\n\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">I Agree</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- /.modal-content -->\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- /.modal-dialog -->\n\t\t\t\t</div>\n\t\t\t\t<!-- /.modal -->\n\t\t\t</div>\n\t\t</section>\n\n\t\n\n\t</div>\n\t<a href=\"#\" class=\"scrollup\"><i class=\"fa fa-angle-up active\"></i></a>\n\t\n\t\n\n</body>\n\n</html>\n"

/***/ }),

/***/ "./src/app/register-comp/register-comp.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/register-comp/register-comp.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterCompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterCompComponent", function() { return RegisterCompComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterCompComponent = /** @class */ (function () {
    function RegisterCompComponent() {
    }
    RegisterCompComponent.prototype.ngOnInit = function () {
    };
    RegisterCompComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register-comp',
            template: __webpack_require__(/*! ./register-comp.component.html */ "./src/app/register-comp/register-comp.component.html"),
            styles: [__webpack_require__(/*! ./register-comp.component.css */ "./src/app/register-comp/register-comp.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterCompComponent);
    return RegisterCompComponent;
}());



/***/ }),

/***/ "./src/app/sales-comp/sales-comp.component.css":
/*!*****************************************************!*\
  !*** ./src/app/sales-comp/sales-comp.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table { \r\n    width: 100%; \r\n    border-collapse: collapse; \r\n  }\r\n  /* Zebra striping */\r\n  tr:nth-of-type(odd) { \r\n    background: #eee; \r\n  }\r\n  th { \r\n    background: #333; \r\n    color: white; \r\n    font-weight: bold; \r\n  }\r\n  td, th { \r\n    padding: 6px; \r\n    border: 1px solid #ccc; \r\n    text-align: left; \r\n  }"

/***/ }),

/***/ "./src/app/sales-comp/sales-comp.component.html":
/*!******************************************************!*\
  !*** ./src/app/sales-comp/sales-comp.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n\t<meta charset=\"utf-8\">\n\t<title>Sailor - Bootstrap 3 corporate template</title>\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\t<meta name=\"description\" content=\"Bootstrap 3 template for corporate business\" />\n\t<!-- css -->\n\t<!--<link href=\"css/bootstrap.min.css\" rel=\"stylesheet\" />\n\t<link href=\"plugins/flexslider/flexslider.css\" rel=\"stylesheet\" media=\"screen\" />\n\t<link href=\"css/cubeportfolio.min.css\" rel=\"stylesheet\" />\n  <link href=\"css/style.css\" rel=\"stylesheet\" />\n  -->\n\n\t<!-- Theme skin -->\n<!--\t<link id=\"t-colors\" href=\"skins/default.css\" rel=\"stylesheet\" />-->\n\n\t<!-- boxed bg -->\n<!--\t<link id=\"bodybg\" href=\"bodybg/bg1.css\" rel=\"stylesheet\" type=\"text/css\" />-->  \n\n\t<!-- =======================================================\n    Theme Name: Sailor\n    Theme URL: https://bootstrapmade.com/sailor-free-bootstrap-theme/\n    Author: BootstrapMade\n    Author URL: https://bootstrapmade.com\n\t======================================================= -->\n\n</head>\n\n<body>\n\n\n\n\t<div id=\"wrapper\">\n\n\t\t\n    \n    <ul class=\"nav nav-tabs\">\n        <li class=\"active\"><a href=\"#one\" data-toggle=\"tab\"><i class=\"icon-briefcase\"></i> Sales</a></li>\n        <li><a href=\"#two\" data-toggle=\"tab\">Purchase</a></li>\n        <li><a href=\"#three\" data-toggle=\"tab\">Expenses</a></li>\n        <li><a href=\"#four\" data-toggle=\"tab\">Stock</a></li>\n        <li><a href=\"#five\" data-toggle=\"tab\">WAT</a></li>\n\n\n        \n      </ul>\n      <div class=\"tab-content\">\n        <div class=\"tab-pane active\" id=\"one\">\n            <table>\n                <thead>\n                <tr>\n                  <th>First Name</th>\n                  <th>Last Name</th>\n                  <th>Job Title</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr>\n                  <td>James</td>\n                  <td>Matman</td>\n                  <td>Chief Sandwich Eater</td>\n                </tr>\n                <tr>\n                  <td>The</td>\n                  <td>Tick</td>\n                  <td>Crimefighter Sorta</td>\n                </tr>\n                <tr>\n                    <td>The</td>\n                    <td>Tick</td>\n                    <td>Crimefighter Sorta</td>\n                  </tr>\n                </tbody>\n              </table>\n        </div>\n        <div class=\"tab-pane\" id=\"two\">\n          <p>\n            Purchase        \n          </p>\n        </div>\n        <div class=\"tab-pane\" id=\"three\">\n          <p>\n            Expenses\n          </p>\n        </div>\n        <div class=\"tab-pane\" id=\"four\">\n            <p>\n              Stock\n            </p>\n        </div>\n        <div class=\"tab-pane\" id=\"five\">\n            <p>\n              WAT\n            </p>\n        </div>\n      </div>\n\n      \n\t\t\n\t\t\n\t</div>\n\t<a href=\"#\" class=\"scrollup\"><i class=\"fa fa-angle-up active\"></i></a>\n\n\t\n\n</body>\n\n</html>\n\t\t\t\n\n\t\t"

/***/ }),

/***/ "./src/app/sales-comp/sales-comp.component.ts":
/*!****************************************************!*\
  !*** ./src/app/sales-comp/sales-comp.component.ts ***!
  \****************************************************/
/*! exports provided: SalesCompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesCompComponent", function() { return SalesCompComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SalesCompComponent = /** @class */ (function () {
    function SalesCompComponent() {
    }
    SalesCompComponent.prototype.ngOnInit = function () {
    };
    SalesCompComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sales-comp',
            template: __webpack_require__(/*! ./sales-comp.component.html */ "./src/app/sales-comp/sales-comp.component.html"),
            styles: [__webpack_require__(/*! ./sales-comp.component.css */ "./src/app/sales-comp/sales-comp.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SalesCompComponent);
    return SalesCompComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\Angular project with arshad\final-year-projectSalesWebSitegit\Sales-Web-Site\final-year-project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map