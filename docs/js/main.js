/*! For license information please see main.js.LICENSE.txt */
(function(){"use strict";var __webpack_modules__={"./src/components/App.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");\n/* harmony import */ var _pages_Enter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Enter */ "./src/pages/Enter/index.jsx");\n\n\n\n\n\nvar routes = [{\n  exact: true,\n  path: "/",\n  component: _pages_Enter__WEBPACK_IMPORTED_MODULE_3__["default"]\n}, {\n  exact: true,\n  path: "/home",\n  component: _pages_Enter__WEBPACK_IMPORTED_MODULE_3__["default"]\n}];\n\nfunction App() {\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    window.scrollTo(0, 0);\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Switch, null, routes.map(function (_ref, idx) {\n    var Component = _ref.component,\n        routeProps = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["component"]);\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n      key: idx\n    }, routeProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, null));\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Redirect, {\n    to: "/"\n  })));\n}\n\n/* harmony default export */ __webpack_exports__["default"] = (App);\n\n//# sourceURL=webpack://scifi-project/./src/components/App.jsx?')},"./src/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ "./src/components/App.jsx");\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_App__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById(\'root\'));\n\n//# sourceURL=webpack://scifi-project/./src/index.js?')},"./src/pages/Enter/index.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Footer */ "./src/pages/Footer/index.jsx");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! typewriter-effect */ "./node_modules/typewriter-effect/dist/react.js");\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(typewriter_effect__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nfunction Enter() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),\n      selectedQuadrant = _useState4[0],\n      setSelectedQuadrant = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState5, 2),\n      quadrants = _useState6[0],\n      setQuadrants = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState7, 2),\n      quadrantLines = _useState8[0],\n      setQuadrantLines = _useState8[1];\n\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState9, 2),\n      content = _useState10[0],\n      setContent = _useState10[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    setLoading(false);\n    setTimeout(function () {\n      setQuadrants(true);\n    }, 5700);\n    setTimeout(function () {\n      setQuadrantLines(true);\n    }, 5300);\n\n    _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n      var response;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return axios__WEBPACK_IMPORTED_MODULE_5___default().get("data/content.json?" + Math.floor(Math.random() * 100000));\n\n            case 3:\n              response = _context.sent;\n              setContent(response.data);\n              _context.next = 10;\n              break;\n\n            case 7:\n              _context.prev = 7;\n              _context.t0 = _context["catch"](0);\n              console.error(_context.t0);\n\n            case 10:\n            case "end":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 7]]);\n    }))();\n  }, []);\n\n  function handleQuadrant(event) {\n    setSelectedQuadrant(event);\n  }\n\n  return content.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "flex-container"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "load"\n  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "flex-container"\n  }, quadrants ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, selectedQuadrant == 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "quadrant-select-1"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "quadrant-1"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h1", null, content[1].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", {\n    className: "fade-in",\n    dangerouslySetInnerHTML: {\n      __html: content[1].body\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("a", {\n    onClick: function onClick() {\n      return handleQuadrant(0);\n    }\n  }, content[1].buttonBack)))) : selectedQuadrant == 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "quadrant-1 fade-in"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h1", null, content[1].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", {\n    dangerouslySetInnerHTML: {\n      __html: content[1].abstract\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("a", {\n    onClick: function onClick() {\n      return handleQuadrant(1);\n    }\n  }, content[1].buttonCTA))), selectedQuadrant == 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "quadrant-select-2"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "quadrant-2"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h1", null, content[2].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", {\n    className: "fade-in",\n    dangerouslySetInnerHTML: {\n      __html: content[2].body\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("a", {\n    onClick: function onClick() {\n      return handleQuadrant(0);\n    }\n  }, content[2].buttonBack)))) : selectedQuadrant == 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "quadrant-2 fade-in"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h1", null, content[2].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", {\n    dangerouslySetInnerHTML: {\n      __html: content[2].abstract\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("a", {\n    onClick: function onClick() {\n      return handleQuadrant(2);\n    }\n  }, content[2].buttonCTA))), selectedQuadrant == 3 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "quadrant-select-3"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "quadrant-3b"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h1", null, content[3].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", {\n    className: "fade-in",\n    dangerouslySetInnerHTML: {\n      __html: content[3].body\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("a", {\n    onClick: function onClick() {\n      return handleQuadrant(0);\n    }\n  }, content[3].buttonBack)))) : selectedQuadrant == 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "quadrant-3 fade-in"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h1", null, content[3].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", {\n    dangerouslySetInnerHTML: {\n      __html: content[3].abstract\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("a", {\n    onClick: function onClick() {\n      return handleQuadrant(3);\n    }\n  }, content[3].buttonCTA))), selectedQuadrant == 4 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "quadrant-select-4"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "quadrant-4b"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h1", null, content[4].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", {\n    className: "fade-in",\n    dangerouslySetInnerHTML: {\n      __html: content[4].body\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("a", {\n    onClick: function onClick() {\n      return handleQuadrant(0);\n    }\n  }, content[4].buttonBack)))) : selectedQuadrant == 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "quadrant-4 fade-in"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h1", null, content[4].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", {\n    dangerouslySetInnerHTML: {\n      __html: content[4].abstract\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("a", {\n    onClick: function onClick() {\n      return handleQuadrant(4);\n    }\n  }, content[4].buttonCTA)))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "follow"\n  }, selectedQuadrant == 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement((typewriter_effect__WEBPACK_IMPORTED_MODULE_6___default()), {\n    options: {\n      autoStart: true,\n      loop: false,\n      cursor: "",\n      delay: 12\n    },\n    onInit: function onInit(typewriter) {\n      typewriter.pauseFor(200).typeString("<h1>" + content[0].title + "</h1>").pauseFor(400).typeString("<h4>" + content[0].subtitle + "</h4>").pauseFor(1000).deleteAll(1).pasteString("<h2 class=\'fade-in\'>" + content[0].line1 + "</h2>").pauseFor(750).pasteString("<div class=\'nudge-md\'></div>").pasteString("<h2 class=\'pulse-turbo\'>" + content[0].line2 + "</h2>").pauseFor(1700).deleteAll(1).start();\n    }\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "row"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "flex-item-q" + selectedQuadrant\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("img", {\n    className: "zoom-out",\n    style: {\n      cursor: selectedQuadrant !== 0 ? "pointer" : "default"\n    },\n    onClick: function onClick() {\n      return handleQuadrant(0);\n    },\n    src: "img/logo-vm.png",\n    height: "72"\n  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "nudge-md"\n  }))), quadrantLines && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "flex-container-lineX-q" + selectedQuadrant\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "flex-container-lineY-q" + selectedQuadrant\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], null)));\n}\n\n/* harmony default export */ __webpack_exports__["default"] = (Enter);\n\n//# sourceURL=webpack://scifi-project/./src/pages/Enter/index.jsx?')},"./src/pages/Footer/index.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n\nvar REACT_VERSION = react__WEBPACK_IMPORTED_MODULE_0__.version;\n\nfunction Footer() {\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {});\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "footer"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "footer-left"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "footer-right"\n  }));\n}\n\n/* harmony default export */ __webpack_exports__["default"] = (Footer);\n\n//# sourceURL=webpack://scifi-project/./src/pages/Footer/index.jsx?')}},__webpack_module_cache__={},deferred;function __webpack_require__(_){var e=__webpack_module_cache__[_];if(void 0!==e)return e.exports;var t=__webpack_module_cache__[_]={exports:{}};return __webpack_modules__[_].call(t.exports,t,t.exports,__webpack_require__),t.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=function(_,e,t,n){if(!e){var r=1/0;for(o=0;o<deferred.length;o++){e=deferred[o][0],t=deferred[o][1],n=deferred[o][2];for(var a=!0,E=0;E<e.length;E++)(!1&n||r>=n)&&Object.keys(__webpack_require__.O).every((function(_){return __webpack_require__.O[_](e[E])}))?e.splice(E--,1):(a=!1,n<r&&(r=n));if(a){deferred.splice(o--,1);var c=t();void 0!==c&&(_=c)}}return _}n=n||0;for(var o=deferred.length;o>0&&deferred[o-1][2]>n;o--)deferred[o]=deferred[o-1];deferred[o]=[e,t,n]},__webpack_require__.n=function(_){var e=_&&_.__esModule?function(){return _.default}:function(){return _};return __webpack_require__.d(e,{a:e}),e},__webpack_require__.d=function(_,e){for(var t in e)__webpack_require__.o(e,t)&&!__webpack_require__.o(_,t)&&Object.defineProperty(_,t,{enumerable:!0,get:e[t]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(_){if("object"==typeof window)return window}}(),__webpack_require__.o=function(_,e){return Object.prototype.hasOwnProperty.call(_,e)},__webpack_require__.r=function(_){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(_,"__esModule",{value:!0})},function(){var _={main:0};__webpack_require__.O.j=function(e){return 0===_[e]};var e=function(e,t){var n,r,a=t[0],E=t[1],c=t[2],o=0;if(a.some((function(e){return 0!==_[e]}))){for(n in E)__webpack_require__.o(E,n)&&(__webpack_require__.m[n]=E[n]);if(c)var l=c(__webpack_require__)}for(e&&e(t);o<a.length;o++)r=a[o],__webpack_require__.o(_,r)&&_[r]&&_[r][0](),_[r]=0;return __webpack_require__.O(l)},t=self.webpackChunkscifi_project=self.webpackChunkscifi_project||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var __webpack_exports__=__webpack_require__.O(void 0,["vendor"],(function(){return __webpack_require__("./src/index.js")}));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();