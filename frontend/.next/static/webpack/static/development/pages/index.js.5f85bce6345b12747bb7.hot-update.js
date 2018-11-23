webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/DeleteTodo.js":
/*!**********************************!*\
  !*** ./components/DeleteTodo.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Todos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Todos */ "./components/Todos.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/tg/projects/react-apollo-todo/frontend/components/DeleteTodo.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation DELETE_TODO_MUTATION($id: ID!) {\n    deleteTodo(id: $id) {\n      id\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var DELETE_TODO_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var update = function update() {
  //manually update the cache on the client, so it matches the server
  //1. read the cache for the items we want (re-use query from items page)
  //2. filter the deleted item out of the page
  //put the items back
  return;
};

var DeleteTodo = function DeleteTodo(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
    mutation: DELETE_TODO_MUTATION,
    variables: {
      id: props.id
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, function (deleteTodo, _ref) {
    var error = _ref.error;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      bg: "black",
      color: "white",
      onClick: function onClick() {
        if (confirm("Are you sure you want to delete this Todo")) {
          console.log('delete', props.id); // deleteTodo().catch(err => {
          //   alert(err.message)
          // })
          // update
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "X");
  });
};

/* harmony default export */ __webpack_exports__["default"] = (DeleteTodo);

/***/ })

})
//# sourceMappingURL=index.js.5f85bce6345b12747bb7.hot-update.js.map