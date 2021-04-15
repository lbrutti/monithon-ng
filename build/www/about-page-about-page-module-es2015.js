(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-page-about-page-module"],{

/***/ "Ay1c":
/*!*********************************************************!*\
  !*** ./src/app/about-page/about-page-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AboutPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPagePageRoutingModule", function() { return AboutPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-page.page */ "SvuD");




const routes = [
    {
        path: '',
        component: _about_page_page__WEBPACK_IMPORTED_MODULE_3__["AboutPage"]
    }
];
let AboutPagePageRoutingModule = class AboutPagePageRoutingModule {
};
AboutPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AboutPagePageRoutingModule);



/***/ }),

/***/ "mp2p":
/*!*************************************************!*\
  !*** ./src/app/about-page/about-page.module.ts ***!
  \*************************************************/
/*! exports provided: AboutPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPagePageModule", function() { return AboutPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _about_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-page-routing.module */ "Ay1c");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");
/* harmony import */ var _about_page_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about-page.page */ "SvuD");








let AboutPagePageModule = class AboutPagePageModule {
};
AboutPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _about_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutPagePageRoutingModule"],
            _ngneat_transloco__WEBPACK_IMPORTED_MODULE_6__["TranslocoModule"]
        ],
        declarations: [_about_page_page__WEBPACK_IMPORTED_MODULE_7__["AboutPage"]]
    })
], AboutPagePageModule);



/***/ })

}]);
//# sourceMappingURL=about-page-about-page-module-es2015.js.map