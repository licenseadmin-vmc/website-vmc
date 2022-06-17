/*! For license information please see main.js.LICENSE.txt */
(function(){"use strict";var __webpack_modules__={"./src/components/App.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");\n/* harmony import */ var _pages_Enter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Enter */ "./src/pages/Enter/index.jsx");\n\n\n\n\n\nvar routes = [{\n  exact: true,\n  path: "/",\n  component: _pages_Enter__WEBPACK_IMPORTED_MODULE_3__["default"]\n}, {\n  exact: true,\n  path: "/home",\n  component: _pages_Enter__WEBPACK_IMPORTED_MODULE_3__["default"]\n}];\n\nfunction App() {\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    window.scrollTo(0, 0);\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Switch, null, routes.map(function (_ref, idx) {\n    var Component = _ref.component,\n        routeProps = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["component"]);\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n      key: idx\n    }, routeProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, null));\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Redirect, {\n    to: "/"\n  })));\n}\n\n/* harmony default export */ __webpack_exports__["default"] = (App);\n\n//# sourceURL=webpack://vmc/./src/components/App.jsx?')},"./src/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-gtm-module */ "./node_modules/react-gtm-module/dist/index.js");\n/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_gtm_module__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/App */ "./src/components/App.jsx");\n\n\n\n\nreact_gtm_module__WEBPACK_IMPORTED_MODULE_2___default().initialize({\n  gtmId: \'GTM-MLFLVWP\'\n});\nreact_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_App__WEBPACK_IMPORTED_MODULE_3__["default"], null), document.getElementById(\'root\'));\n\n//# sourceURL=webpack://vmc/./src/index.js?')},"./src/pages/Enter/index.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! typewriter-effect */ "./node_modules/typewriter-effect/dist/react.js");\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(typewriter_effect__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Footer */ "./src/pages/Footer/index.jsx");\n\n\n\n\n\n\n\n\n\nfunction Enter() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),\n      selectedQuadrant = _useState4[0],\n      setSelectedQuadrant = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState5, 2),\n      quadrants = _useState6[0],\n      setQuadrants = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState7, 2),\n      quadrantLines = _useState8[0],\n      setQuadrantLines = _useState8[1];\n\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState9, 2),\n      content = _useState10[0],\n      setContent = _useState10[1];\n\n  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      _useState12 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState11, 2),\n      intro = _useState12[0],\n      setIntro = _useState12[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    window.scrollTo(0, 0);\n    setLoading(false);\n    setTimeout(function () {\n      setSelectedQuadrant(1);\n    }, 6000);\n\n    _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n      var response, introResponse;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return axios__WEBPACK_IMPORTED_MODULE_5___default().get("data/content.json?" + Math.floor(Math.random() * 100000));\n\n            case 3:\n              response = _context.sent;\n              _context.next = 6;\n              return axios__WEBPACK_IMPORTED_MODULE_5___default().get("data/intro.json?" + Math.floor(Math.random() * 100000));\n\n            case 6:\n              introResponse = _context.sent;\n              setContent(response.data);\n              setIntro(introResponse.data);\n              console.log(response.data);\n              console.log(introResponse.data);\n              _context.next = 16;\n              break;\n\n            case 13:\n              _context.prev = 13;\n              _context.t0 = _context["catch"](0);\n              console.error(_context.t0);\n\n            case 16:\n            case "end":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 13]]);\n    }))();\n  }, []);\n\n  function handleQuadrant(event) {\n    setSelectedQuadrant(event);\n  }\n\n  return content.length > 0 && intro.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_4__.Helmet, {\n    titleTemplate: "VitroMetrics | %s"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("title", null, "Home")), loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "flex-container"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "load"\n  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "header"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "header-left",\n    onClick: function onClick() {\n      return handleQuadrant(1);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("img", {\n    src: "img/logo-vm.png",\n    height: "72"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement((typewriter_effect__WEBPACK_IMPORTED_MODULE_6___default()), {\n    options: {\n      autoStart: true,\n      loop: false,\n      cursor: \'\',\n      delay: 12\n    },\n    onInit: function onInit(typewriter) {\n      typewriter.pauseFor(4000).typeString("<h1>VitroMetrics</h1>").typeString("<h4>Your <strong>IVDR</strong> Solution</h4>").start();\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "header-right"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h3", null, "As of May 26th 2022, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("strong", null, " In Vitro Diagnostics Regulation "), " is in effect. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("strong", null, "VitroMetrics has your complete solution.")))), selectedQuadrant == 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "flex-container"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "follow"\n  }, selectedQuadrant == 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement((typewriter_effect__WEBPACK_IMPORTED_MODULE_6___default()), {\n    options: {\n      autoStart: true,\n      loop: false,\n      cursor: \'\',\n      delay: 12\n    },\n    onInit: function onInit(typewriter) {\n      typewriter.pauseFor(200).typeString(\'<h1>\' + intro[0].title + \'</h1>\').pauseFor(400).typeString(\'<h4>\' + intro[0].subtitle + \'</h4>\').pauseFor(1000).deleteAll(1).pasteString("<h2>" + intro[0].line1 + \'</h2>\').pauseFor(750).pasteString("<div class=\'nudge-md\'></div>").pasteString("<h2 class=\'pulse-turbo\'>" + intro[0].line2 + \'</h2>\').pauseFor(2000).deleteAll(1).start();\n    }\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "row"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "flex-item-q" + selectedQuadrant\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("img", {\n    className: "zoom-out",\n    style: {\n      cursor: selectedQuadrant !== 0 ? \'pointer\' : \'default\'\n    },\n    onClick: function onClick() {\n      return handleQuadrant(0);\n    },\n    src: "img/logo-vm.png",\n    height: "72"\n  }), \' \', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "nudge-md"\n  })))), selectedQuadrant == 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "left"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "full"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h1", {\n    onClick: function onClick() {\n      return handleQuadrant(1);\n    }\n  }, content[0].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "divide"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "subtle"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h1", {\n    onClick: function onClick() {\n      return handleQuadrant(2);\n    }\n  }, content[1].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "divide-off"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "subtle"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h1", {\n    onClick: function onClick() {\n      return handleQuadrant(3);\n    }\n  }, content[2].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "divide-off"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "subtle"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h1", {\n    onClick: function onClick() {\n      return handleQuadrant(4);\n    }\n  }, content[3].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "divide-off"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "subtle"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h1", {\n    onClick: function onClick() {\n      return handleQuadrant(5);\n    }\n  }, content[4].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "divide-off"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "right"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "paragraph"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h1", null, content[0].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {\n    className: "fade-in",\n    dangerouslySetInnerHTML: {\n      __html: content[0].text\n    }\n  })))), selectedQuadrant == 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "left"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "subtle"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h1", {\n    onClick: function onClick() {\n      return handleQuadrant(1);\n    }\n  }, content[0].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "divide-off"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "full"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h1", {\n    onClick: function onClick() {\n      return handleQuadrant(2);\n    }\n  }, content[1].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "divide"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "subtle"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h1", {\n    onClick: function onClick() {\n      return handleQuadrant(3);\n    }\n  }, content[2].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "divide-off"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "subtle"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h1", {\n    onClick: function onClick() {\n      return handleQuadrant(4);\n    }\n  }, content[3].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "divide-off"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "subtle"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h1", {\n    onClick: function onClick() {\n      return handleQuadrant(5);\n    }\n  }, content[4].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "divide-off"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "right"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "paragraph"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h1", null, content[1].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {\n    className: "fade-in",\n    dangerouslySetInnerHTML: {\n      __html: content[1].text\n    }\n  })))), selectedQuadrant == 3 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "left"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "subtle"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h1", {\n    onClick: function onClick() {\n      return handleQuadrant(1);\n    }\n  }, content[0].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "divide-off"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "subtle"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h1", {\n    onClick: function onClick() {\n      return handleQuadrant(2);\n    }\n  }, content[1].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "divide-off"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "full"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h1", {\n    onClick: function onClick() {\n      return handleQuadrant(3);\n    }\n  }, content[2].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "divide"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "subtle"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h1", {\n    onClick: function onClick() {\n      return handleQuadrant(4);\n    }\n  }, content[3].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "divide-off"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "subtle"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h1", {\n    onClick: function onClick() {\n      return handleQuadrant(5);\n    }\n  }, content[4].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "divide-off"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "right"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "paragraph"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h1", null, content[2].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {\n    className: "fade-in",\n    dangerouslySetInnerHTML: {\n      __html: content[2].text\n    }\n  })))), selectedQuadrant == 4 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "left"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "subtle"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h1", {\n    onClick: function onClick() {\n      return handleQuadrant(1);\n    }\n  }, content[0].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "divide-off"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "subtle"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h1", {\n    onClick: function onClick() {\n      return handleQuadrant(2);\n    }\n  }, content[1].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "divide-off"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "subtle"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h1", {\n    onClick: function onClick() {\n      return handleQuadrant(3);\n    }\n  }, content[2].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "divide-off"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "full"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h1", {\n    onClick: function onClick() {\n      return handleQuadrant(4);\n    }\n  }, content[3].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "divide"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "subtle"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h1", {\n    onClick: function onClick() {\n      return handleQuadrant(5);\n    }\n  }, content[4].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "divide-off"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "right"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "paragraph"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h1", null, content[3].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {\n    className: "fade-in",\n    dangerouslySetInnerHTML: {\n      __html: content[3].text\n    }\n  })))), selectedQuadrant == 5 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "left"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "subtle"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h1", {\n    onClick: function onClick() {\n      return handleQuadrant(1);\n    }\n  }, content[0].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "divide-off"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "subtle"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h1", {\n    onClick: function onClick() {\n      return handleQuadrant(2);\n    }\n  }, content[1].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "divide-off"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "subtle"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h1", {\n    onClick: function onClick() {\n      return handleQuadrant(3);\n    }\n  }, content[2].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "divide-off"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "subtle"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h1", {\n    onClick: function onClick() {\n      return handleQuadrant(4);\n    }\n  }, content[3].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "divide-off"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "full"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h1", {\n    onClick: function onClick() {\n      return handleQuadrant(5);\n    }\n  }, content[4].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "divide"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "right"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {\n    className: "paragraph"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h1", null, content[4].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {\n    className: "fade-in",\n    dangerouslySetInnerHTML: {\n      __html: content[4].text\n    }\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], null)));\n}\n\n/* harmony default export */ __webpack_exports__["default"] = (Enter);\n\n//# sourceURL=webpack://vmc/./src/pages/Enter/index.jsx?')},"./src/pages/Footer/index.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _material_ui_core_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/SwipeableDrawer */ "./node_modules/@material-ui/core/esm/SwipeableDrawer/SwipeableDrawer.js");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nfunction Footer() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n    right: false\n  }),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),\n      aboutDrawer = _useState2[0],\n      setAboutDrawer = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n    right: false\n  }),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),\n      contactDrawer = _useState4[0],\n      setContactDrawer = _useState4[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {});\n\n  var openAbout = function openAbout(side, open) {\n    return function () {\n      setAboutDrawer(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({\n        right: false\n      }, side, open));\n      setContactDrawer({\n        right: false\n      });\n    };\n  };\n\n  var toggleAbout = function toggleAbout(side, open) {\n    return function (event) {\n      setContactDrawer({\n        right: false\n      });\n      setAboutDrawer(_objectSpread(_objectSpread({}, aboutDrawer), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, side, open)));\n    };\n  };\n\n  var openContact = function openContact(side, open) {\n    return function () {\n      setContactDrawer(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({\n        right: false\n      }, side, open));\n      setAboutDrawer({\n        right: false\n      });\n    };\n  };\n\n  var toggleContact = function toggleContact(side, open) {\n    return function (event) {\n      setContactDrawer(_objectSpread(_objectSpread({}, contactDrawer), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, side, open)));\n      setAboutDrawer({\n        right: false\n      });\n    };\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {\n    className: "footer footer-slide-in"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {\n    className: "footer-left"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {\n    className: "footer-right"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("a", {\n    onClick: toggleAbout("right", true)\n  }, "ABOUT US"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("a", {\n    onClick: toggleContact("right", true)\n  }, "CONTACT US"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("i", {\n    className: "fa-regular fa-copyright"\n  }), " 2022 VitroMetrics Corp.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    anchor: "right",\n    open: aboutDrawer.right,\n    onClose: openAbout("right", false),\n    onOpen: toggleAbout("right", true),\n    id: "about"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("i", {\n    className: "fa-light fa-xmark",\n    onClick: toggleAbout("right", false)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h2", null, " ABOUT US"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum metus et ullamcorper laoreet. Ut tempor ante placerat, aliquet purus ac, ultricies erat. In eros ante, finibus molestie ligula in, ultrices dictum mauris. Etiam feugiat, mauris ac efficitur venenatis, nulla massa porttitor nulla, nec molestie lacus turpis at metus. In hac habitasse platea dictumst. Vestibulum pellentesque maximus volutpat. Ut eget cursus tortor, vitae tincidunt elit. Suspendisse potenti. Donec consequat malesuada tortor, a ultrices neque consequat in. Nam id lacinia purus.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    anchor: "right",\n    open: contactDrawer.right,\n    onClose: openContact("right", false),\n    onOpen: toggleContact("right", true),\n    id: "about"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("i", {\n    className: "fa-light fa-xmark",\n    onClick: toggleContact("right", false)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h2", null, "CONTACT US"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, "Ut eget cursus tortor, vitae tincidunt elit. Suspendisse potenti. Donec consequat malesuada tortor, a ultrices neque consequat in. Nam id lacinia purus."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    label: "Name",\n    autoComplete: "off",\n    spellCheck: "false",\n    name: "Name",\n    id: "Name",\n    defaultValue: "" // onChange={handleChange}\n    // error={!!formErrors.orgName}\n    // required={formData.userStatus === \'new\'}\n\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    label: "Email ",\n    autoComplete: "off",\n    spellCheck: "false",\n    name: "Name",\n    id: "Name",\n    defaultValue: "" // onChange={handleChange}\n    // error={!!formErrors.orgName}\n    // required={formData.userStatus === \'new\'}\n\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    label: "Which testing disciplines",\n    autoComplete: "off",\n    spellCheck: "false",\n    name: "Name",\n    id: "Name",\n    defaultValue: "" // onChange={handleChange}\n    // error={!!formErrors.orgName}\n    // required={formData.userStatus === \'new\'}\n\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    label: "Which regulatory markets besides EU",\n    autoComplete: "off",\n    spellCheck: "false",\n    name: "Name",\n    id: "Name",\n    defaultValue: "" // onChange={handleChange}\n    // error={!!formErrors.orgName}\n    // required={formData.userStatus === \'new\'}\n\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {\n    className: "nudge-lg"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("a", {\n    className: "link-default",\n    onClick: toggleContact("right", false)\n  }, "SUBMIT")));\n}\n\n/* harmony default export */ __webpack_exports__["default"] = (Footer);\n\n//# sourceURL=webpack://vmc/./src/pages/Footer/index.jsx?')}},__webpack_module_cache__={},deferred;function __webpack_require__(_){var e=__webpack_module_cache__[_];if(void 0!==e)return e.exports;var t=__webpack_module_cache__[_]={exports:{}};return __webpack_modules__[_].call(t.exports,t,t.exports,__webpack_require__),t.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=function(_,e,t,n){if(!e){var r=1/0;for(l=0;l<deferred.length;l++){e=deferred[l][0],t=deferred[l][1],n=deferred[l][2];for(var a=!0,E=0;E<e.length;E++)(!1&n||r>=n)&&Object.keys(__webpack_require__.O).every((function(_){return __webpack_require__.O[_](e[E])}))?e.splice(E--,1):(a=!1,n<r&&(r=n));if(a){deferred.splice(l--,1);var c=t();void 0!==c&&(_=c)}}return _}n=n||0;for(var l=deferred.length;l>0&&deferred[l-1][2]>n;l--)deferred[l]=deferred[l-1];deferred[l]=[e,t,n]},__webpack_require__.n=function(_){var e=_&&_.__esModule?function(){return _.default}:function(){return _};return __webpack_require__.d(e,{a:e}),e},__webpack_require__.d=function(_,e){for(var t in e)__webpack_require__.o(e,t)&&!__webpack_require__.o(_,t)&&Object.defineProperty(_,t,{enumerable:!0,get:e[t]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(_){if("object"==typeof window)return window}}(),__webpack_require__.o=function(_,e){return Object.prototype.hasOwnProperty.call(_,e)},__webpack_require__.r=function(_){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(_,"__esModule",{value:!0})},function(){var _={main:0};__webpack_require__.O.j=function(e){return 0===_[e]};var e=function(e,t){var n,r,a=t[0],E=t[1],c=t[2],l=0;if(a.some((function(e){return 0!==_[e]}))){for(n in E)__webpack_require__.o(E,n)&&(__webpack_require__.m[n]=E[n]);if(c)var o=c(__webpack_require__)}for(e&&e(t);l<a.length;l++)r=a[l],__webpack_require__.o(_,r)&&_[r]&&_[r][0](),_[r]=0;return __webpack_require__.O(o)},t=self.webpackChunkvmc=self.webpackChunkvmc||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var __webpack_exports__=__webpack_require__.O(void 0,["vendor"],(function(){return __webpack_require__("./src/index.js")}));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();