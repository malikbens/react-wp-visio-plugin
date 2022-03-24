/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/VisioForm.js":
/*!*************************************!*\
  !*** ./src/components/VisioForm.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisioForm": function() { return /* binding */ VisioForm; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tab_components_DeviceTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab-components/DeviceTab */ "./src/components/tab-components/DeviceTab.js");
/* harmony import */ var _tab_components_InfoTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab-components/InfoTab */ "./src/components/tab-components/InfoTab.js");
/* harmony import */ var _tab_components_InfoTab__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tab_components_InfoTab__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tab_components_NeedTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tab-components/NeedTab */ "./src/components/tab-components/NeedTab.js");
/* harmony import */ var _tab_components_NeedTab__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tab_components_NeedTab__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tab_components_ProblemTab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab-components/ProblemTab */ "./src/components/tab-components/ProblemTab.js");
/* harmony import */ var _tab_components_ProblemTab__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tab_components_ProblemTab__WEBPACK_IMPORTED_MODULE_5__);


const {
  Component,
  render
} = wp.element;




class VisioForm extends Component {
  constructor() {
    super(...arguments);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      step: 1,
      device: '',
      brand: '',
      model: '',
      symptom: '',
      need: '',
      piece: '',
      prbDesc: '',
      deviceAge: '',
      access: '',
      level: '',
      tools: ''
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "nextStep", () => {
      const {
        step
      } = this.state;
      this.setState({
        step: step + 1
      });
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "prevStep", () => {
      const {
        step
      } = this.state;
      this.setState({
        step: step - 1
      });
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleChange", input => e => {
      this.setState({
        [input]: e.target.value
      });
    });
  }

  render() {
    const {
      step
    } = this.state;
    const {
      device,
      brand,
      model,
      symptom,
      need,
      piece,
      prbDesc,
      deviceAge,
      access,
      level,
      tools
    } = this.state;
    const values = {
      device,
      brand,
      model,
      symptom,
      need,
      piece,
      prbDesc,
      deviceAge,
      access,
      level,
      tools
    };

    switch (step) {
      case 1:
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_tab_components_DeviceTab__WEBPACK_IMPORTED_MODULE_2__["default"], {
          nextStep: this.nextStep,
          handleChange: this.handleChange,
          values: values
        });

      case 2:
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)((_tab_components_NeedTab__WEBPACK_IMPORTED_MODULE_4___default()), {
          nextStep: this.nextStep,
          prevStep: this.prevStep,
          handleChange: this.handleChange,
          values: values
        });

      case 3:
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)((_tab_components_ProblemTab__WEBPACK_IMPORTED_MODULE_5___default()), {
          nextStep: this.nextStep,
          prevStep: this.prevStep,
          handleChange: this.handleChange,
          values: values
        });

      case 4:
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)((_tab_components_InfoTab__WEBPACK_IMPORTED_MODULE_3___default()), {
          nextStep: this.nextStep,
          prevStep: this.prevStep,
          handleChange: this.handleChange,
          values: values
        });

      default:
        console.log('This is a multi-step form built with React.');
    }
  }

}
/* harmony default export */ __webpack_exports__["default"] = (VisioForm);

/***/ }),

/***/ "./src/components/tab-components/DeviceTab.js":
/*!****************************************************!*\
  !*** ./src/components/tab-components/DeviceTab.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DeviceTab; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  Component,
  render
} = wp.element;
class DeviceTab extends Component {
  render() {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "DeviceTab");
  }

}

/***/ }),

/***/ "./src/components/tab-components/InfoTab.js":
/*!**************************************************!*\
  !*** ./src/components/tab-components/InfoTab.js ***!
  \**************************************************/
/***/ (function() {



/***/ }),

/***/ "./src/components/tab-components/NeedTab.js":
/*!**************************************************!*\
  !*** ./src/components/tab-components/NeedTab.js ***!
  \**************************************************/
/***/ (function() {



/***/ }),

/***/ "./src/components/tab-components/ProblemTab.js":
/*!*****************************************************!*\
  !*** ./src/components/tab-components/ProblemTab.js ***!
  \*****************************************************/
/***/ (function() {



/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_VisioForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/VisioForm */ "./src/components/VisioForm.js");

const {
  Component,
  render
} = wp.element;


class Index extends Component {
  render() {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_VisioForm__WEBPACK_IMPORTED_MODULE_1__["default"], null));
  }

}

render((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Index, null), document.getElementById('app'));
}();
/******/ })()
;
//# sourceMappingURL=index.js.map