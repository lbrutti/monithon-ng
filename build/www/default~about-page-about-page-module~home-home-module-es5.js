(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~about-page-about-page-module~home-home-module"], {
    /***/
    "QVdJ":
    /*!*************************************************!*\
      !*** ./src/app/about-page/about-page.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function QVdJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".monithon-about-modal .modal-wrapper {\n  --background: white;\n}\n.monithon-about-modal .modal-wrapper .monithon-about-header {\n  background-image: unset;\n}\n.monithon-about-modal .modal-wrapper .monithon-close-modal {\n  background-image: url(\"data:image/svg+xml,%3Csvg width='28' height='28' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Ccircle cx='14' cy='14' r='12' stroke='white' stroke-width='2'/%3E%3Cpath d='M13.375 18.2351H15.2031V18.1136C15.2287 16.6435 15.6506 15.9851 16.7372 15.3139C17.8814 14.6236 18.5845 13.652 18.5845 12.2138C18.5845 10.1364 17.0121 8.73011 14.6662 8.73011C12.5121 8.73011 10.7862 9.98935 10.7031 12.2905H12.6463C12.723 10.9354 13.6882 10.3409 14.6662 10.3409C15.7528 10.3409 16.6349 11.0632 16.6349 12.1946C16.6349 13.147 16.0405 13.8182 15.2798 14.2912C14.0909 15.0199 13.3878 15.7422 13.375 18.1136V18.2351ZM14.3402 22.1214C15.0369 22.1214 15.6186 21.5526 15.6186 20.843C15.6186 20.1463 15.0369 19.571 14.3402 19.571C13.6371 19.571 13.0618 20.1463 13.0618 20.843C13.0618 21.5526 13.6371 22.1214 14.3402 22.1214Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 28px;\n  height: 28px;\n  cursor: pointer;\n}\n.monithon-about-modal .modal-wrapper .monithon-about-col {\n  margin: auto;\n}\n.monithon-about-modal .modal-wrapper .monithon-about-modal-content {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.monithon-about-modal .modal-wrapper .monithon-about-modal-content::-webkit-scrollbar {\n  width: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fib3V0LXBhZ2UucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vdGhlbWUvc2Nyb2xsYmFyLXdpZHRoLW1peGluLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSyxtQkFBQTtBQURMO0FBRUk7RUFDSSx1QkFBQTtBQUFSO0FBR0k7RUFDSSxvNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBRFI7QUFJSTtFQUNJLFlBQUE7QUFGUjtBQUtJO0VDWkEsd0JBQUE7RUFNQSxxQkFBQTtBREtKO0FDaEJJO0VBQ0ksbUJBQUE7QURrQlIiLCJmaWxlIjoiYWJvdXQtcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi90aGVtZS9zY3JvbGxiYXItd2lkdGgtbWl4aW4uc2Nzcyc7XG5cbi5tb25pdGhvbi1hYm91dC1tb2RhbCAubW9kYWwtd3JhcHBlciB7XG4gICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgLm1vbml0aG9uLWFib3V0LWhlYWRlciB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVuc2V0O1xuICAgIH1cblxuICAgIC5tb25pdGhvbi1jbG9zZS1tb2RhbCB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0Nzdmcgd2lkdGg9JzI4JyBoZWlnaHQ9JzI4JyB2aWV3Qm94PScwIDAgMjggMjgnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnJTNFJTNDY2lyY2xlIGN4PScxNCcgY3k9JzE0JyByPScxMicgc3Ryb2tlPSd3aGl0ZScgc3Ryb2tlLXdpZHRoPScyJy8lM0UlM0NwYXRoIGQ9J00xMy4zNzUgMTguMjM1MUgxNS4yMDMxVjE4LjExMzZDMTUuMjI4NyAxNi42NDM1IDE1LjY1MDYgMTUuOTg1MSAxNi43MzcyIDE1LjMxMzlDMTcuODgxNCAxNC42MjM2IDE4LjU4NDUgMTMuNjUyIDE4LjU4NDUgMTIuMjEzOEMxOC41ODQ1IDEwLjEzNjQgMTcuMDEyMSA4LjczMDExIDE0LjY2NjIgOC43MzAxMUMxMi41MTIxIDguNzMwMTEgMTAuNzg2MiA5Ljk4OTM1IDEwLjcwMzEgMTIuMjkwNUgxMi42NDYzQzEyLjcyMyAxMC45MzU0IDEzLjY4ODIgMTAuMzQwOSAxNC42NjYyIDEwLjM0MDlDMTUuNzUyOCAxMC4zNDA5IDE2LjYzNDkgMTEuMDYzMiAxNi42MzQ5IDEyLjE5NDZDMTYuNjM0OSAxMy4xNDcgMTYuMDQwNSAxMy44MTgyIDE1LjI3OTggMTQuMjkxMkMxNC4wOTA5IDE1LjAxOTkgMTMuMzg3OCAxNS43NDIyIDEzLjM3NSAxOC4xMTM2VjE4LjIzNTFaTTE0LjM0MDIgMjIuMTIxNEMxNS4wMzY5IDIyLjEyMTQgMTUuNjE4NiAyMS41NTI2IDE1LjYxODYgMjAuODQzQzE1LjYxODYgMjAuMTQ2MyAxNS4wMzY5IDE5LjU3MSAxNC4zNDAyIDE5LjU3MUMxMy42MzcxIDE5LjU3MSAxMy4wNjE4IDIwLjE0NjMgMTMuMDYxOCAyMC44NDNDMTMuMDYxOCAyMS41NTI2IDEzLjYzNzEgMjIuMTIxNCAxNC4zNDAyIDIyLjEyMTRaJyBmaWxsPSd3aGl0ZScvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFJTBBXCIpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICB3aWR0aDogMjhweDtcbiAgICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgLm1vbml0aG9uLWFib3V0LWNvbCB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG5cbiAgICAubW9uaXRob24tYWJvdXQtbW9kYWwtY29udGVudCB7XG4gICAgICAgIEBpbmNsdWRlIGhpZGVTY3JvbGxiYXIoKTtcbiAgICB9XG59IiwiQG1peGluIGhpZGVTY3JvbGxiYXIge1xuXG4gICAgLy8gaHR0cHM6Ly9ibG9ncy5tc2RuLm1pY3Jvc29mdC5jb20va3VybGFrLzIwMTMvMTEvMDMvaGlkaW5nLXZlcnRpY2FsLXNjcm9sbGJhcnMtd2l0aC1wdXJlLWNzcy1pbi1jaHJvbWUtaWUtNi1maXJlZm94LW9wZXJhLWFuZC1zYWZhcmkvXG4gICAgLy8gVGhlcmUgaXMgYSBDU1MgcnVsZSB0aGF0IGNhbiBoaWRlIHNjcm9sbGJhcnMgaW4gV2Via2l0LWJhc2VkIGJyb3dzZXJzIChDaHJvbWUgYW5kIFNhZmFyaSkuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICB3aWR0aDogMCAhaW1wb3J0YW50XG4gICAgfVxuXG4gICAgLy8gVGhlcmUgaXMgYSBDU1MgcnVsZSB0aGF0IGNhbiBoaWRlIHNjcm9sbGJhcnMgaW4gSUUgMTArLlxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcblxuICAgIC8vIFVzZSAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXIgaWYgeW91IHdpc2ggdG8gZGlzcGxheSBvbiBob3Zlci5cbiAgICAvLyAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcblxuICAgIC8vIFRoZXJlIHVzZWQgdG8gYmUgYSBDU1MgcnVsZSB0aGF0IGNvdWxkIGhpZGUgc2Nyb2xsYmFycyBpbiBGaXJlZm94LCBidXQgaXQgaGFzIHNpbmNlIGJlZW4gZGVwcmVjYXRlZC5cbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG59Il19 */";
      /***/
    },

    /***/
    "SvuD":
    /*!***********************************************!*\
      !*** ./src/app/about-page/about-page.page.ts ***!
      \***********************************************/

    /*! exports provided: AboutPage */

    /***/
    function SvuD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutPage", function () {
        return AboutPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_about_page_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./about-page.page.html */
      "mE4y");
      /* harmony import */


      var _about_page_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./about-page.page.scss */
      "QVdJ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngneat/transloco */
      "QPBi");

      var AboutPage = /*#__PURE__*/function () {
        function AboutPage(modalController, translocoService) {
          _classCallCheck(this, AboutPage);

          this.modalController = modalController;
          this.translocoService = translocoService;
        }

        _createClass(AboutPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "closeModal",
          value: function closeModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var close;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      close = "Modal Removed";
                      _context.next = 3;
                      return this.modalController.dismiss(close);

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return AboutPage;
      }();

      AboutPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_5__["TranslocoService"]
        }];
      };

      AboutPage.propDecorators = {
        modal_title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      AboutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-about-page',
        template: _raw_loader_about_page_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_about_page_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AboutPage);
      /***/
    },

    /***/
    "mE4y":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about-page/about-page.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function mE4y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"monithon-about-header\">\n    <ion-toolbar>\n        <ion-buttons slot=\"end\">\n            <ion-icon class=\"monithon-close-modal\" (click)=\"closeModal()\"></ion-icon>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content [fullscreen]=\"true\" [scrollY]=\"false\" class=\"monithon-about-modal-content\">\n    <ion-grid class=\"monithon-about-grid\">\n        <ion-row>\n            <ion-col text-center size-md=\"4\" size-sm=\"6\" class=\"monithon-about-col\">\n                <h1 class=\"monithon-about-titolo\">{{'about.titolo' | transloco}}</h1>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col text-center size-md=\"4\" size-sm=\"6\" class=\"monithon-about-col\">\n                <h3 class=\"monithon-about-titolo-sezione\">{{'about.sottotitolo' | transloco}}</h3>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col text-center size-md=\"4\" size-sm=\"6\" class=\"monithon-about-col\">\n                <h3 class=\"monithon-about-titolo-sezione\">{{'about.cosaPuoiFare'| transloco}}</h3>\n                <ul>\n                    <li>\n                        Cercare i progetti finanziati nella tua città o nel tuo quartiere, a ogni pallino corrisponde un\n                        progetto\n                    </li>\n                    <li>\n                        Selezionare i progetti filtrando per tema, categoria di progetto, budget, anno di inizio, stato\n                        di avanzamento.\n                    </li>\n                    <li>\n                        Scoprire i progetti sui quali è già stato pubblicato un Report di monitoraggio civico su\n                        <a href=\"https://www.monithon.eu\" target=\"_blank\"> Monithon </a>\n                    </li>\n                    <li>\n                        Scorrere l'elenco dei progetti selezionati ordinandoli per distanza, budget,\n                        tema e anno di inizio\n                    </li>\n                    <li>\n                        Leggere la sintesi del progetto e le sue principali caratteristiche\n                    </li>\n                    <li>\n                        INIZIARE IL MONITORAGGIO e accedere all'area di lavoro di Monithon! Lì potrai scoprire tutti i\n                        dettagli del progetto ed\n                        essere guidato passo-passo alla redazione del Report di monitoraggio civico.\n                    </li>\n                </ul>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col text-center size-md=\"4\" size-sm=\"6\" class=\"monithon-about-col\">\n                <h3 class=\"monithon-about-titolo-sezione\">{{'about.metodologia'| transloco}}</h3>\n                <ul>\n                    <li>\n                        La fonte dei dati è il Sistema Nazionale di Monitoraggio del MEF-IGRUE, pubblicati come dati\n                        aperti su <a href=\"https://opencoesione.gov.it/\" target=\"_blank\">OpenCoesione</a>.\n                    </li>\n                    <li>\n                        Sono considerati i progetti finanziati dal Fondo Europeo di Sviluppo Regionale (FESR) 2014-2020\n                    </li>\n                    <li>\n                        Sono stati inclusi i progetti classificati da OpenCoesione nei seguenti \"temi sintetici\":\n                        Ambiente, Energia, Cultura e\n                        Turismo. A questi sono stati aggiunti i progetti di mobilità sostenibile, considerando i \"campi\n                        di intervento\" 43 e 44.\n                    </li>\n                    <li>\n                        La posizione geografica deriva dalla georeferenziazione degli indirizzi dei progetti presenti\n                        nel Sistema di\n                        Monitoraggio (se non presenti, il progetto è stato localizzato al centro del comune). Sono\n                        esclusi i progetti di livello\n                        nazionale e regionale.\n                    </li>\n                    <li>\n                        L'aggiornamento dei dati è al 31 Dicembre 2020.\n                    </li>\n\n                </ul>\n            </ion-col>\n        </ion-row>\n\n        <ion-row class=\"monithon-credits-row\">\n            <ion-col size-md=\"4\" size-sm=\"6\" class=\"monithon-about-col monithon-credits-container\">\n                <h3 class=\"monithon-about-titolo-sezione\">{{'about.credits'| transloco}}</h3>\n                <p class=\"monithon-about-credit\"> Design: <a href=\"https://sheldon.studio/\"\n                        target=\"_blank\">Sheldon.studio</a> </p>\n\n                <p class=\"monithon-about-credit\"> Data analysis:\n                    <a href=\"https://www.monithon.eu\" target=\"_blank\">Team Monithon</a>\n                </p>\n\n                <p class=\"monithon-about-credit\"> Software development:\n                    <a href=\"https://sheldon.studio/\" target=\"_blank\">Sheldon.studio</a> & <a href=\"https://www.monithon.eu\" target=\"_blank\">Team Monithon</a>\n                </p>\n\n\n            </ion-col>\n        </ion-row>\n\n        <ion-row class=\"monithon-colophon-row\">\n            <ion-col size-md=\"4\" size-sm=\"6\" class=\"monithon-about-col monithon-colophon-container\">\n                <!-- <img class=\"monithon-about-eu-flag\" src=\"../../assets/img/Flag_of_Europe.svg\"> -->\n                <img class=\"monithon-about-eu-flag\" src=\"../../assets/img/eu_flag.png\">\n\n                <!-- <p class=\"monithon-about-colophon\"> {{\"about.colophon\" | transloco}} </p> -->\n\n            </ion-col>\n        </ion-row>\n\n    </ion-grid>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~about-page-about-page-module~home-home-module-es5.js.map