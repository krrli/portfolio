function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<krrli-header></krrli-header>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n<krrli-footer></krrli-footer>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cv/cv.component.html":
  /*!****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cv/cv.component.html ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCvCvComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<p class=\"headertext\">\nSeit 2011 befasse ich mich damit, wie ich Benutzerinnen und Benutzern, Kundinnen und Kunden mit meiner Arbeit als\nSoftwareentwicklerin das Leben vereinfache. Durch mein analytisches Denken und meine\nNeugierde kann ich mich jeweils rasch in neue Projekte und Technologien einarbeiten.\nMein offener Kommunikationsstil erlaubt mir, mich schnell und erfolgreich in neue Teams\neinzubringen. Die Tätigkeiten bei drei Softwareunternehmen ermöglichten mir, vielfältige\nErfahrungen zu sammeln. Durch das Informatik-Studium an der Hochschule Luzern konnte\nich bereits bestehendes Wissen vertiefen und in den Bereichen Software Engineering und\nArchitektur viel dazulernen.\n</p>\n\n<div class=\"col mt-4\">\n  <div class=\"timeline-body\" *ngFor=\"let job of jobs\">\n      <div class=\"timeline-item\">\n        <div class=\"content\">\n          <h4>{{job.function}}</h4>\n          <h5>{{job.companyName}}</h5>\n          <h5 class=\"date\" *ngIf=\"dateTo(job.dateTo); else elseBlock\">{{job.dateFrom | date:'MMM yyyy'}} - {{job.dateTo | date:'MMM yyyy'}}</h5>          \n          <ng-template #elseBlock><h5 class=\"date\">{{job.dateFrom | date:'MMM yyyy'}} - heute</h5></ng-template>\n          <p class=\"description\">{{job.description}}</p>\n          \n        </div>\n      </div>\n  </div>\n</div>\n<div class=\"footerHack\">\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"mt-auto py-3 text-center\">\n\n  <small class=\"text-muted mb-2\">\n    <p>\n      <fa-icon [icon]=\"['fas', 'code']\"></fa-icon>\n      with\n      <fa-icon [icon]=\"['fas', 'heart']\"></fa-icon>\n      and\n      <fa-icon [icon]=\"['fas', 'coffee']\"></fa-icon>\n      by <strong>Carla Iten</strong>\n    </p>\n    <div class=\"container-fluid justify-content-center mx-1\">\n\n\n      <a href=\"https://github.com/krrli\"><fa-icon [icon]=\"['fab', 'github']\"></fa-icon></a>\n      <a href=\"https://www.linkedin.com/in/carla-iten-a59210122/\"><fa-icon [icon]=\"['fab', 'linkedin']\"></fa-icon></a>\n    </div>\n    </small>\n\n</footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-md bg-white navbar-light fixed-top\">\n\n  <a class=\"navbar-brand\" href=\"#\"><h1>Carla Iten</h1></a>\n  <div class=\"navbar-header\">\n\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n  </div>\n\n  <div class=\"collapse navbar-collapse collapse\" id=\"navbarCollapse\">\n    <ul class=\"navbar-nav ml-auto mr-1\">\n      <!--li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/hello\" routerLinkActive=\"active\">hello</a>\n      </li-->\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/cv\" routerLinkActive=\"active\">CV</a>\n      </li>\n      <!--li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/skills\" routerLinkActive=\"active\">Skills</a>\n      </li-->\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/projects\" routerLinkActive=\"active\">Projekte</a>\n      </li>\n    </ul>\n  </div>\n\n<!--\n<div class=\"navbar-collapse collapse\">\n  <ul class=\"nav navbar-nav\">\n      <li><a href=\"#\">Left</a></li>\n  </ul>\n  <ul class=\"nav navbar-nav navbar-center\">\n      <li><a href=\"#\">Center</a></li>\n      <li><a href=\"#\">Center</a></li>\n    <li><a href=\"#\">Center</a></li>\n  </ul>\n  <ul class=\"nav navbar-nav navbar-right\">\n      <li><a href=\"#\">Right</a></li>\n  </ul>\n  </div>\n  -->\n</nav>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/hello/hello.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hello/hello.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHelloHelloComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"row justify-content-center align-items-center p-4\">\n  <div class=\"col-lg-4 col-md-6 text-center mt-4\">\n\n    <!-- Fine Circle Responsive Image -->\n    <div id=\"container\" class=\"my-2\">\n      <div id=\"dummy\"></div>\n      <div id=\"element\">\n        <img src=\"./assets/carla.jpg\" alt=\"Carla\" class=\"circle-image wow animated zoomIn\" data-wow-delay=\".1s\">\n      </div>\n    </div>\n    <br/>\n    <br/>\n    <p class=\"text-muted wow animated slideInUp\" data-wow-delay=\".15s\">\"Trust me, I'm an engineer\"</p>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/project-detail/project-detail.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project-detail/project-detail.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectDetailProjectDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header\">\n\n  <h3>{{ project.title }}</h3>\n</div>\n\n<div>\n  <label>Id: </label>{{ project.id }}\n</div>\n    {{ project.description }}\n\n\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Merci!</button>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectsProjectsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-lg px-3 my-5 markdown-body\">\n\n  <div class=\"card-columns\">\n    <div *ngFor=\"let project of projects\">\n      <!--button class=\"btn btn-lg btn-outline-primary\" (click)=\"openDetails(project)\">blops</button-->\n\n\n      <!--div class=\"card project card\" routerLink =\"/project-detail/{{project.id}}\"-->\n      <div class=\"card project card\" (click)=\"openDetails(project)\">\n          <img class=\"card-img-top\" src={{project.image}}>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{project.title}}</h5>\n          <h6 class=\"card-subtitle mb-2 text-muted\">{{project.customer}}</h6>\n          <p class=\"card-text\">{{project.shortDescription}}</p>\n          <div class=\"card-text\">\n            <div class=\"badge badge-pill text-primary border border-primary\" *ngFor=\"let tag of project.tagsArray\">\n              {{tag}}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<div class=\"footerHack\"></div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skills.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skills.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSkillsSkillsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"timeline-body\" *ngFor=\"let skill of skills\">\n  <p>{{skill.title}} ({{skill.category}})</p>\n</div>\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./project-detail/project-detail.component */
    "./src/app/project-detail/project-detail.component.ts");
    /* harmony import */


    var _hello_hello_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./hello/hello.component */
    "./src/app/hello/hello.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");
    /* harmony import */


    var _cv_cv_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./cv/cv.component */
    "./src/app/cv/cv.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: 'cv',
      component: _cv_cv_component__WEBPACK_IMPORTED_MODULE_4__["CvComponent"]
    }, //{path: 'skills', component: SkillsComponent},
    {
      path: 'projects',
      component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"]
    }, {
      path: 'hello',
      component: _hello_hello_component__WEBPACK_IMPORTED_MODULE_2__["HelloComponent"]
    }, {
      path: 'project-detail/:id',
      component: _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_1__["ProjectDetailComponent"]
    }, {
      path: '',
      redirectTo: '/hello',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'portfolio';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _hello_hello_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./hello/hello.component */
    "./src/app/hello/hello.component.ts");
    /* harmony import */


    var _cv_cv_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./cv/cv.component */
    "./src/app/cv/cv.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @fortawesome/free-brands-svg-icons */
    "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _skills_skills_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./skills/skills.component */
    "./src/app/skills/skills.component.ts");
    /* harmony import */


    var _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./project-detail/project-detail.component */
    "./src/app/project-detail/project-detail.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    var AppModule = function AppModule(library) {
      _classCallCheck(this, AppModule);

      this.library = library;
      library.addIcons(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faCoffee"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faGithub"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faHeart"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faLinkedin"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faCode"]);
    };

    AppModule.ctorParameters = function () {
      return [{
        type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FaIconLibrary"]
      }];
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _hello_hello_component__WEBPACK_IMPORTED_MODULE_6__["HelloComponent"], _cv_cv_component__WEBPACK_IMPORTED_MODULE_7__["CvComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_14__["SkillsComponent"], _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_15__["ProjectDetailComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModalModule"]],
      exports: [_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_15__["ProjectDetailComponent"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
      entryComponents: [_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_15__["ProjectDetailComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/cv/cv.component.scss":
  /*!**************************************!*\
    !*** ./src/app/cv/cv.component.scss ***!
    \**************************************/

  /*! exports provided: default */

  /***/
  function srcAppCvCvComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".headertext {\n  padding-bottom: 30px;\n}\n\n.footerHack {\n  padding-top: 50px;\n}\n\n.timeline-body {\n  position: relative;\n  border-radius: 0 15px 15px 0;\n  padding: 5px 0;\n}\n\n.timeline-body:after {\n  content: \"\";\n  width: 4px;\n  height: 100%;\n  background-color: #6c757d;\n  position: absolute;\n  left: -4px;\n  top: 0;\n}\n\n.timeline-body .timeline-item {\n  position: relative;\n}\n\n.timeline-body .timeline-item:after {\n  content: \"\";\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  border: 4px solid #343a40;\n  background-color: #f8f9fa;\n  position: absolute;\n  left: -9px;\n  top: 8px;\n  z-index: 10;\n}\n\n.timeline-body .timeline-item .content {\n  margin-left: 40px;\n  padding-bottom: 20px;\n}\n\n.timeline-body .timeline-item .content .date {\n  margin-bottom: 15px;\n  color: #6c757d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3YvQzpcXENvZGVcXHBvcnRmb2xpby9zcmNcXGFwcFxcY3ZcXGN2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jdi9jdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY3YvQzpcXENvZGVcXHBvcnRmb2xpby9zcmNcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usb0JBQUE7QUNERjs7QURJQTtFQUNFLGlCQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtFQUVBLDRCQUFBO0VBQ0EsY0FBQTtBQ0ZGOztBREtFO0VBRUUsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBRUEseUJFakJRO0VGa0JSLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7QUNMSjs7QURRRTtFQUNFLGtCQUFBO0FDTko7O0FEUUk7RUFFRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJFNUJNO0VGNkJOLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDUE47O0FEVUk7RUFFRSxpQkFBQTtFQUdBLG9CQUFBO0FDWE47O0FEY007RUFFRSxtQkFBQTtFQUNBLGNFbkRJO0FEc0NaIiwiZmlsZSI6InNyYy9hcHAvY3YvY3YuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4uaGVhZGVydGV4dHtcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmZvb3RlckhhY2t7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi50aW1lbGluZS1ib2R5IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAkcm91bmRlZC1ib3JkZXJzICRyb3VuZGVkLWJvcmRlcnMgMDtcclxuICBwYWRkaW5nOiA1cHggMDsgIFxyXG4gIFxyXG5cclxuICAmOmFmdGVyIHtcclxuICAgIC8vIExlZnQgQm9yZGVyXHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDRweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTRweDtcclxuICAgIHRvcDogMDtcclxuICB9XHJcblxyXG4gIC50aW1lbGluZS1pdGVtIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgICAgXHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIC8vIENpcmNsZVxyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICB3aWR0aDogMTVweDtcclxuICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJvcmRlcjogNHB4IHNvbGlkICRwcmltYXJ5O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQ7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogLTlweDtcclxuICAgICAgdG9wOiA4cHg7XHJcbiAgICAgIHotaW5kZXg6IDEwOyAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgXHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gICAgICAvL21hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgIC8vbWFyZ2luOiA0MHB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgICAgLy9ib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICRkYXJrO1xyXG5cclxuICAgICAgLmRhdGUge1xyXG4gICAgICAgIC8vbWFyZ2luLXRvcDogLTVweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRlc2NyaXB0aW9ue1xyXG4gICAgICAvL3BhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuaGVhZGVydGV4dCB7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuXG4uZm9vdGVySGFjayB7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG4udGltZWxpbmUtYm9keSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMCAxNXB4IDE1cHggMDtcbiAgcGFkZGluZzogNXB4IDA7XG59XG4udGltZWxpbmUtYm9keTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiA0cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZjNzU3ZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtNHB4O1xuICB0b3A6IDA7XG59XG4udGltZWxpbmUtYm9keSAudGltZWxpbmUtaXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi50aW1lbGluZS1ib2R5IC50aW1lbGluZS1pdGVtOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDRweCBzb2xpZCAjMzQzYTQwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC05cHg7XG4gIHRvcDogOHB4O1xuICB6LWluZGV4OiAxMDtcbn1cbi50aW1lbGluZS1ib2R5IC50aW1lbGluZS1pdGVtIC5jb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuLnRpbWVsaW5lLWJvZHkgLnRpbWVsaW5lLWl0ZW0gLmNvbnRlbnQgLmRhdGUge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBjb2xvcjogIzZjNzU3ZDtcbn0iLCIkdGV4dC1jb2xvci1kYXJrOiMzNDNhNDA7XHJcbiR0ZXh0LWZvb3RlcjogIzZjNzU3ZDtcclxuXHJcblxyXG4vLyRwcmltYXJ5OiAgICMwMDdiZmY7XHJcbiRwcmltYXJ5OiAgICMzNDNhNDA7XHJcbiRzZWNvbmRhcnk6ICM2Yzc1N2Q7XHJcbiRzdWNjZXNzOiAgICMyOGE3NDU7XHJcbiRpbmZvOiAgICAgICMxN2EyYjg7XHJcbiR3YXJuaW5nOiAgICNmZmMxMDc7XHJcbiRkYW5nZXI6ICAgICNkYzM1NDU7XHJcbiRsaWdodDogICAgICNmOGY5ZmE7XHJcbiRkYXJrOiAgICAgICMzNDNhNDA7XHJcblxyXG4kcm91bmRlZC1ib3JkZXJzOiAxNXB4O1xyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/cv/cv.component.ts":
  /*!************************************!*\
    !*** ./src/app/cv/cv.component.ts ***!
    \************************************/

  /*! exports provided: CvComponent */

  /***/
  function srcAppCvCvComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CvComponent", function () {
      return CvComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var CvComponent =
    /*#__PURE__*/
    function () {
      function CvComponent(httpClient) {
        _classCallCheck(this, CvComponent);

        this.httpClient = httpClient;
        this.jobsJson = 'assets/jobs.json';
      }

      _createClass(CvComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.httpClient.get('assets/jobs.json').subscribe(function (jobData) {
            _this.jobs = jobData;
          });
        }
      }, {
        key: "dateTo",
        value: function dateTo(_dateTo) {
          if (_dateTo == '') {
            return false;
          }

          return true;
        }
      }]);

      return CvComponent;
    }();

    CvComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CvComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cv',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cv.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cv/cv.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cv.component.scss */
      "./src/app/cv/cv.component.scss")).default]
    })], CvComponent);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/footer/footer.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "footer {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  padding-bottom: 10px;\n  padding-top: 10px;\n  margin-bottom: -10px;\n  width: 100%;\n  text-align: center;\n  background-color: white;\n}\n\n.social {\n  text-decoration: none !important;\n  color: #6c757d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxDb2RlXFxwb3J0Zm9saW8vc3JjXFxhcHBcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNBRjs7QURHQTtFQUNFLGdDQUFBO0VBQ0EsY0FBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5mb290ZXJ7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IC0xMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNvY2lhbCB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICM2Yzc1N2QgO1xyXG59XHJcblxyXG4iLCJmb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5zb2NpYWwge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgY29sb3I6ICM2Yzc1N2Q7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'krrli-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/footer/footer.component.scss")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/header/header.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/header/header.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'krrli-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/header/header.component.scss")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/hello/hello.component.scss":
  /*!********************************************!*\
    !*** ./src/app/hello/hello.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHelloHelloComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#container {\n  display: inline-block;\n  position: relative;\n  width: 100%;\n}\n\n#dummy {\n  padding-top: 100%;\n  /* 1:1 aspect ratio */\n}\n\n#element {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.circle-image {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVsbG8vQzpcXENvZGVcXHBvcnRmb2xpby9zcmNcXGFwcFxcaGVsbG9cXGhlbGxvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWxsby9oZWxsby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDSEY7O0FETUE7RUFDRSxpQkFBQTtFQUFtQixxQkFBQTtBQ0ZyQjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQ0ZGOztBREtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSwwQkFBQTtLQUFBLHVCQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9oZWxsby9oZWxsby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZpbmUgQ2lyY2xlIFJlc3BvbnNpdmUgSW1hZ2VcclxuLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzY2MTU5OTQvMTAxOTQ4MTFcclxuXHJcblxyXG4jY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jZHVtbXkge1xyXG4gIHBhZGRpbmctdG9wOiAxMDAlOyAvKiAxOjEgYXNwZWN0IHJhdGlvICovXHJcbn1cclxuXHJcbiNlbGVtZW50IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4uY2lyY2xlLWltYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcbiIsIiNjb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNkdW1teSB7XG4gIHBhZGRpbmctdG9wOiAxMDAlO1xuICAvKiAxOjEgYXNwZWN0IHJhdGlvICovXG59XG5cbiNlbGVtZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5jaXJjbGUtaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/hello/hello.component.ts":
  /*!******************************************!*\
    !*** ./src/app/hello/hello.component.ts ***!
    \******************************************/

  /*! exports provided: HelloComponent */

  /***/
  function srcAppHelloHelloComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelloComponent", function () {
      return HelloComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HelloComponent =
    /*#__PURE__*/
    function () {
      function HelloComponent() {
        _classCallCheck(this, HelloComponent);
      }

      _createClass(HelloComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HelloComponent;
    }();

    HelloComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-hello',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./hello.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/hello/hello.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./hello.component.scss */
      "./src/app/hello/hello.component.scss")).default]
    })], HelloComponent);
    /***/
  },

  /***/
  "./src/app/project-detail/project-detail.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/project-detail/project-detail.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectDetailProjectDetailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QtZGV0YWlsL3Byb2plY3QtZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/project-detail/project-detail.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/project-detail/project-detail.component.ts ***!
    \************************************************************/

  /*! exports provided: ProjectDetailComponent */

  /***/
  function srcAppProjectDetailProjectDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectDetailComponent", function () {
      return ProjectDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../project.service */
    "./src/app/project.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    var ProjectDetailComponent =
    /*#__PURE__*/
    function () {
      function ProjectDetailComponent(projectService, route, router, activeModal) {
        _classCallCheck(this, ProjectDetailComponent);

        this.projectService = projectService;
        this.route = route;
        this.router = router;
        this.activeModal = activeModal;
      }

      _createClass(ProjectDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// is it better to hand the whole project over or just the id?

          /*
          this.project$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
              this.projectService.getProject(params.get('id')))
          );
          */
        }
      }]);

      return ProjectDetailComponent;
    }();

    ProjectDetailComponent.ctorParameters = function () {
      return [{
        type: _project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"]
      }];
    };

    ProjectDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'krrli-project-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./project-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/project-detail/project-detail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./project-detail.component.scss */
      "./src/app/project-detail/project-detail.component.scss")).default]
    })], ProjectDetailComponent);
    /***/
  },

  /***/
  "./src/app/project.service.ts":
  /*!************************************!*\
    !*** ./src/app/project.service.ts ***!
    \************************************/

  /*! exports provided: ProjectService */

  /***/
  function srcAppProjectServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectService", function () {
      return ProjectService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _assets_projects_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../assets/projects.json */
    "./src/assets/projects.json");

    var _assets_projects_json__WEBPACK_IMPORTED_MODULE_2___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! ../assets/projects.json */
    "./src/assets/projects.json", 1);

    var ProjectService =
    /*#__PURE__*/
    function () {
      function ProjectService() {
        _classCallCheck(this, ProjectService);
      }

      _createClass(ProjectService, [{
        key: "getProjects",
        value: function getProjects() {
          return _assets_projects_json__WEBPACK_IMPORTED_MODULE_2__;
        }
      }, {
        key: "getProject",
        value: function getProject(id) {
          return this.getProjects().filter(function (p) {
            return p.id.includes(id);
          }).sort(function (a, b) {
            return a.id.includes(id) && !b.id.includes(id) ? -1 : b.id.includes(id) && !a.id.includes(id) ? 1 : 0;
          });
        }
      }]);

      return ProjectService;
    }();

    ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProjectService);
    /***/
  },

  /***/
  "./src/app/projects/projects.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/projects/projects.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectsProjectsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".footerHack {\n  padding-top: 90px;\n}\n\n.badge {\n  margin-right: 5px;\n}\n\n.project.card {\n  border-radius: 15px;\n  text-decoration: none !important;\n}\n\n.project.card .card-img-top {\n  border-radius: 15px 15px 0 0;\n}\n\n.project.card:hover:not(.post) {\n  box-shadow: -2px 8px 40px -12px rgba(0, 0, 0, 0.24);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvQzpcXENvZGVcXHBvcnRmb2xpby9zcmNcXGFwcFxccHJvamVjdHNcXHByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvamVjdHMvQzpcXENvZGVcXHBvcnRmb2xpby9zcmNcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsaUJBQUE7QUNERjs7QURJQTtFQUNJLGlCQUFBO0FDREo7O0FETUE7RUFDRSxtQkVDZ0I7RUZBaEIsZ0NBQUE7QUNIRjs7QURNRTtFQUNFLDRCQUFBO0FDSko7O0FET0U7RUFDRSxtREFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4uZm9vdGVySGFja3tcclxuICBwYWRkaW5nLXRvcDogOTBweDtcclxufVxyXG5cclxuLmJhZGdle1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7ICAgIFxyXG4gICAgLy9jb2xvcjogJHNlY29uZGFyeSAhaW1wb3J0YW50O1xyXG4gICAgLy9ib3JkZXItY29sb3I6ICRzZWNvbmRhcnk7XHJcbn1cclxuXHJcbi5wcm9qZWN0LmNhcmQge1xyXG4gIGJvcmRlci1yYWRpdXM6ICRyb3VuZGVkLWJvcmRlcnM7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgLy9tYXJnaW46IDEwcHggYXV0bztcclxuXHJcbiAgLmNhcmQtaW1nLXRvcCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkcm91bmRlZC1ib3JkZXJzICRyb3VuZGVkLWJvcmRlcnMgMCAwO1xyXG4gIH1cclxuXHJcbiAgJjpob3Zlcjpub3QoLnBvc3QpIHtcclxuICAgIGJveC1zaGFkb3c6IC0ycHggOHB4IDQwcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxuICB9XHJcbn0iLCIuZm9vdGVySGFjayB7XG4gIHBhZGRpbmctdG9wOiA5MHB4O1xufVxuXG4uYmFkZ2Uge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnByb2plY3QuY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuLnByb2plY3QuY2FyZCAuY2FyZC1pbWctdG9wIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDAgMDtcbn1cbi5wcm9qZWN0LmNhcmQ6aG92ZXI6bm90KC5wb3N0KSB7XG4gIGJveC1zaGFkb3c6IC0ycHggOHB4IDQwcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbn0iLCIkdGV4dC1jb2xvci1kYXJrOiMzNDNhNDA7XHJcbiR0ZXh0LWZvb3RlcjogIzZjNzU3ZDtcclxuXHJcblxyXG4vLyRwcmltYXJ5OiAgICMwMDdiZmY7XHJcbiRwcmltYXJ5OiAgICMzNDNhNDA7XHJcbiRzZWNvbmRhcnk6ICM2Yzc1N2Q7XHJcbiRzdWNjZXNzOiAgICMyOGE3NDU7XHJcbiRpbmZvOiAgICAgICMxN2EyYjg7XHJcbiR3YXJuaW5nOiAgICNmZmMxMDc7XHJcbiRkYW5nZXI6ICAgICNkYzM1NDU7XHJcbiRsaWdodDogICAgICNmOGY5ZmE7XHJcbiRkYXJrOiAgICAgICMzNDNhNDA7XHJcblxyXG4kcm91bmRlZC1ib3JkZXJzOiAxNXB4O1xyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/projects/projects.component.ts":
  /*!************************************************!*\
    !*** ./src/app/projects/projects.component.ts ***!
    \************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../project-detail/project-detail.component */
    "./src/app/project-detail/project-detail.component.ts");
    /* harmony import */


    var _project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../project.service */
    "./src/app/project.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    var ProjectsComponent =
    /*#__PURE__*/
    function () {
      // constructor(private projectService: ProjectService) { }
      function ProjectsComponent(projectService, modalService) {
        _classCallCheck(this, ProjectsComponent);

        this.projectService = projectService;
        this.modalService = modalService;
      }

      _createClass(ProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.projects = this.projectService.getProjects();
        }
      }, {
        key: "openDetails",
        value: function openDetails(project) {
          var modalRef = this.modalService.open(_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_1__["ProjectDetailComponent"], {
            centered: true
          });
          modalRef.componentInstance.name = 'Detail';
          modalRef.componentInstance.project = project;
        }
      }]);

      return ProjectsComponent;
    }();

    ProjectsComponent.ctorParameters = function () {
      return [{
        type: _project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
      }];
    };

    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-projects',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projects.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projects.component.scss */
      "./src/app/projects/projects.component.scss")).default]
    })], ProjectsComponent);
    /***/
  },

  /***/
  "./src/app/skills/skills.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/skills/skills.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSkillsSkillsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/skills/skills.component.ts":
  /*!********************************************!*\
    !*** ./src/app/skills/skills.component.ts ***!
    \********************************************/

  /*! exports provided: SkillsComponent */

  /***/
  function srcAppSkillsSkillsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkillsComponent", function () {
      return SkillsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var SkillsComponent =
    /*#__PURE__*/
    function () {
      function SkillsComponent(httpClient) {
        _classCallCheck(this, SkillsComponent);

        this.httpClient = httpClient;
      }

      _createClass(SkillsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.httpClient.get('assets/skills.json').subscribe(function (skillData) {
            _this2.skills = skillData;
          });
        }
      }]);

      return SkillsComponent;
    }();

    SkillsComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'krrli-skills',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./skills.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skills.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./skills.component.scss */
      "./src/app/skills/skills.component.scss")).default]
    })], SkillsComponent);
    /***/
  },

  /***/
  "./src/assets/projects.json":
  /*!**********************************!*\
    !*** ./src/assets/projects.json ***!
    \**********************************/

  /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, default */

  /***/
  function srcAssetsProjectsJson(module) {
    module.exports = JSON.parse("[{\"id\":\"008\",\"customer\":\"carla.land\",\"title\":\"Portfolio\",\"tags\":\"Angular, Bootstrap, FontAwesome, GithubPages, Git\",\"tagsArray\":[\"Angular\",\"Bootstrap\",\"FontAwesome\",\"GithubPages\",\"Git\"],\"description\":\"\",\"shortDescription\":\"Portfolio Webseite, die du hier siehst. Erstellt mit Angular.\",\"image\":\"./assets/carla-bw.jpg\"},{\"id\":\"007\",\"customer\":\"Büro Babette\",\"title\":\"KoRe Excel\",\"tags\":\"Excel\",\"tagsArray\":[\"Excel\"],\"description\":\"Toller Spass!\",\"shortDescription\":\"\",\"image\":\"./assets/babette.png\"},{\"id\":\"007\",\"customer\":\"Byffel\",\"title\":\"Projekt Nebelhorn\",\"tags\":\"\",\"tagsArray\":[\"Angular\",\"JavaScript\",\"Editor.js\",\"Kanban\",\"Agile\",\"Docker\",\"Kubernetes\"],\"description\":\"Privates Projekt, welches noch nicht spruchreif ist. Deshalb noch keine Beschreibung. Dafür ein Bild von einem herzigen Büffel.\",\"shortDescription\":\"\",\"image\":\"\"},{\"id\":\"006\",\"customer\":\"Kundin der bbv Software Services AG\",\"title\":\"Sidegrade\",\"tags\":\"Java, Scrum, TDD, Clean Code, Code Review, Jira, Jenkins, Git, Eclipse, IntelliJ, JBoss, Websphere, JUnit, Gerrit\",\"tagsArray\":[],\"description\":\"\",\"shortDescription\":\"\",\"image\":\"\"},{\"id\":\"005\",\"customer\":\"WELCOME Immobilien AG\",\"title\":\"Bachelordiplomarbeit: mySTWEG\",\"tags\":\"SoDa, Ionic Framework, Angular, Typescript, Cordova, C#, MS SQL, VSTS, Azure Cloud, Webstorm, Visual Studio, SQL Server Management Studio, Visual Studio App Center, Git\",\"tagsArray\":[\"SoDa\",\"Ionic Framework\",\"Angular\",\"Typescript\",\"Cordova\",\"C#\",\"MS SQL\",\"VSTS\",\"Azure Cloud\",\"Webstorm\",\"Visual Studio\",\"SQL Server Management Studio\",\"Visual Studio App Center\",\"Git\"],\"description\":\"Um die Kommunikation unter Eigentümer und zwischen der Immobilienfirma bei Stockwerkeigentumswohnungen zu vereinfachen, möchte WELCOME Immobilien eine Plattform lancieren. Im Rahmen meiner Bachelordiplomarbeit befasste ich mich in einem Zweierteam mit der Entwicklung der Architektur, der Wahl der geeigneten Technologien und dem Erstellen eines Prototypen einer Kommunikationsplattform für Stockwerkeigentümer und Immobilienverwaltungen. Das Projekt wurde nach dem Projektmodell SoDa durchgeführt. Während der Initialisierungsphase habe ich die Anforderungen aufgenommen, die Architektur entwickelt und die geeigneten Technologien ausgewählt. Beim Entwickeln der Architektur musste berücksichtigt werden, dass die Lösung zu einem späteren Zeitpunkt als Software-as-a-Service eingesetzt werden soll (Skalierbarkeit). Ausserdem wurde das Architekturprinzip «Design for Change» mit in den Entwurf einbezogen. Anschliessen wurden die einzusetzenden Technologien in den Bereichen Datenbank, Front- und Backend evaluiert und ausgewählt. Während den darauffolgenden Sprints habe ich in der Rolle des Product Owners die User Stories priorisiert und in der Rolle der Entwicklerin umgesetzt. Als Scrummaster habe ich die Sprintreviews geleitet. Als Ergebnisse konnte ich der WELCOME Immobilien AG eine browserbasierte, responsive Webapplikation übergeben, die in allen gängigen Browsern und Betriebssystemen lauffähig ist. Zusätzlich zur Webapplikation wurde mithilfe von Cordova eine native Android App erstellt. Die dazugehörige Dokumentation soll die Weiterentwicklung von mySTWEG ermöglichen. Der entwickelte Prototyp ist bei der gesamten Belegschaft von WELCOME Immobilien AG auf Begeisterung gestossen. Auch andere Immobilienfirmen haben grosses Interesse am Prototypen gezeigt. SoDa: 'Software Development agile' - basiert auf dem Vorgehensmodell Scrum und bindet dieses in einen Projektmanagement-Rahmen ein (Scrum-Adaption der Hochschule Luzern)\",\"shortDescription\":\"Kommunikationsplattform für Stockwerkeigentümer und Immobilienverwaltungen - Android App und Website\",\"image\":\"./assets/mystweg.jpg\"},{\"id\":\"004\",\"customer\":\"HSLU\",\"title\":\"GoloLens\",\"tags\":\"SoDa, Pair Programming, Unity Game Engine, Visual Studio, C#.NET, Blender\",\"tagsArray\":[\"SoDa\",\"Pair Programming\",\"Unity Game Engine\",\"Visual Studio\",\"C#.NET\",\"Blender\"],\"description\":\"Das Ziel des Projekts ist es, einen Spiel-Prototypen für die Microsoft HoloLens zu entwickeln. Der Prototyp soll aufzeigen, was mit der Mixed Reality Brille möglich ist. Ich entwickelte als Teil eines Zweierteams ein Spiel in Unity Game Engine, welches die Microsoft HoloLens verwendet. Die dazugehörigen Scripts wurden mit C# entwickelt, die graphischen Elemente (Assets) mit Blender. Der Projektauftrag hat vorgesehen, ein Go Spiel zu entwickeln, welches von zwei Spielern mit je einer HoloLens im selben Raum gespielt werden kann. Als Projektvorgehensmodell wurde SoDa gewählt. Da das Projekt einen explorativen Charakter aufweist, haben wir eine lange Initialisierungsphase gewählt. Während dieser Phase konnten viele offenen Fragen geklärt und die geeignete Technologie ausgewählt werden. In den darauffolgenden Sprints wurde der Prototyp entwickelt. Das Informatikprojekt ist erfolgreich abgeschlossen und die HSLU verfügt über einen Prototypen, der für Vorführungen, sowie im Mixed Reality Lab der Hochschule verwendet werden kann. \",\"shortDescription\":\"Spielentwicklung für Microsoft HoloLens\",\"image\":\"\"},{\"id\":\"003\",\"customer\":\"HSLU\",\"title\":\"Webshop iCompany\",\"tags\":\"Java EE, JSF, JPA, JAX-WS, JAX-RS, JMS, Apache TomEE, Postman, SoapUI, IntelliJ, MySQL, Primefaces, Git\",\"tagsArray\":[\"Java EE\",\"JSF\",\"JPA\",\"JAX-WS\",\"JAX-RS\",\"JMS\",\"Apache TomEE\",\"Postman\",\"SoapUI\",\"IntelliJ\",\"MySQL\",\"Primefaces\",\"Git\"],\"description\":\"iCompany ist eine virtuelle Unternehmung, welche als Handelsunternehmen im Musikbereich konzipiert ist. Sie dient an der HSLU Informatik als «Übungsanlage» für die Lehre in verschiedenen Modulen. Im Modul Enterprise Applications habe ich einen Webshop für den Verkauf von Mediendateien konzipiert und entwickelt. Durch den vorgegebenen Technologiestack konnte ich so Erfahrungen mit Java EE sammeln. Die Mediendateien werden über eine Schnittstelle zum ERP-System der iCompany (Microsoft Dynamics NAV) ausgelesen und im Webshop angezeigt. Die Bezahlung der gekauften Artikel werden über das Zahlungssystem der PostFinance ausgeführt. Nachdem die Verkäufe abgewickelt sind, werden sie per JMS ins ERP-System gespeichert. Das Modul konnte ich erfolgreich abschliessen und einen Überblick über die Entwicklung einer Enterprise Applikation gewinnen.\",\"shortDescription\":\"\",\"image\":\"\"},{\"id\":\"002\",\"customer\":\"Sage Schweiz AG\",\"title\":\"Sage 200 Absenzenmanagement\",\"tags\":\"Scrum, C#, MS SQL, ASP.NET, TFS, HTML, CSS, JavaScript\",\"tagsArray\":[\"Scrum\",\"C#\",\"MS SQL\",\"ASP.NET\",\"TFS\",\"HTML\",\"CSS\",\"JavaScript\"],\"description\":\"Sage200 ist eine ERP-Software als Komplettlösung für mittelgrosse Unternehmen. Das Sage200 Personal Modul bietet Funktionen für die Erfassung von Absenzen für Mitarbeiter. Diese sollen einfacher zu benutzen und selbsterklärender gestaltet werden. Zusammen mit dem Scrum-Team habe ich die webbasierte Lösung «Absenzenmanagement» weiterentwickelt und gewartet. Dabei habe ich zusammen mit dem Product Owner die User Stories priorisiert und dann umgesetzt. Unterstützung erhielt ich beim Anpassen von konsumierten Services oder Fragen zu Best-Practices durch die Architektur-Abteilung. Das Tool «Absenzenmanagement» ermöglicht es den Sage200 Personal-Benutzern, einfacher Absenzen eintragen zu können, sowie die Übersicht über Absenzen innerhalb des Teams zu verbessern.\",\"shortDescription\":\"Sage200 Absenzenmanagement: Weblösung für Sage200 Benutzer\",\"image\":\"\"},{\"id\":\"001\",\"customer\":\"Sage Schweiz AG\",\"title\":\"Weiterentwicklung und Wartung Sage200 Personal und CRM\",\"tags\":\"Scrum, C#, MS SQL, CrystalReports, .NET Core, TFS\",\"tagsArray\":[\"Scrum\",\"C#\",\"MSSQL\",\"CrystalReports\",\".NET Core\",\"TFS\"],\"description\":\"Die Bedienung der Sage200 - Module Personal und CRM war erschwert und die Ergebnisse inkonsistent. Zusammen mit dem Scrum Team konnte ich die bestehenden Schwachstellen priorisieren und verbessern. Bestehende Unit Tests konnte ich korrigieren und fehlende neu hinzufügen. Durch die Scrum Team-übergreifenden Review Meetings und Abnahmetests konnte ich sicherstellen, dass die Schwachstellen behoben sind. Sage Schweiz AG freut sich über eine stabile Software mit konsistentem Verhalten. Die verbesserte Usability ermöglicht es den Benutzern, die Software ohne zusätzliche Hilfe durch den Support zu bedienen.\",\"shortDescription\":\"Beschreibung Anstellung bei Sage Schweiz AG\",\"image\":\"\"}]");
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Code\portfolio\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map