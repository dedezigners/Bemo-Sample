"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_componenets_Column_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/componenets/Column.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/componenets/Column.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Column",
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    cards: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  components: {
    Card: function Card() {
      return __webpack_require__.e(/*! import() */ "resources_js_componenets_Card_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./Card.vue */ "./resources/js/componenets/Card.vue"));
    }
  },
  mounted: function mounted() {
    this.updatedName = this.name;
  },
  data: function data() {
    return {
      canEdit: true,
      updatedName: "",
      addCard: false,
      cardTitle: ""
    };
  },
  methods: {
    updateName: function updateName() {
      if (this.updatedName) {
        this.$emit("update-column-name", this.id, this.updatedName);
      } else {
        this.updatedName = this.name;
      }

      this.canEdit = true;
    },
    createCard: function createCard() {
      if (this.cardTitle) {
        this.$emit('create-card', this.id, this.cardTitle);
        this.cardTitle = '';
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/componenets/Column.vue":
/*!*********************************************!*\
  !*** ./resources/js/componenets/Column.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Column_vue_vue_type_template_id_fdd0ea54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Column.vue?vue&type=template&id=fdd0ea54& */ "./resources/js/componenets/Column.vue?vue&type=template&id=fdd0ea54&");
/* harmony import */ var _Column_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Column.vue?vue&type=script&lang=js& */ "./resources/js/componenets/Column.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Column_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Column_vue_vue_type_template_id_fdd0ea54___WEBPACK_IMPORTED_MODULE_0__.render,
  _Column_vue_vue_type_template_id_fdd0ea54___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/componenets/Column.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/componenets/Column.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/componenets/Column.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Column_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Column.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/componenets/Column.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Column_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/componenets/Column.vue?vue&type=template&id=fdd0ea54&":
/*!****************************************************************************!*\
  !*** ./resources/js/componenets/Column.vue?vue&type=template&id=fdd0ea54& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Column_vue_vue_type_template_id_fdd0ea54___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Column_vue_vue_type_template_id_fdd0ea54___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Column_vue_vue_type_template_id_fdd0ea54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Column.vue?vue&type=template&id=fdd0ea54& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/componenets/Column.vue?vue&type=template&id=fdd0ea54&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/componenets/Column.vue?vue&type=template&id=fdd0ea54&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/componenets/Column.vue?vue&type=template&id=fdd0ea54& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col" }, [
    _c(
      "div",
      { staticClass: "col-content" },
      [
        _c("div", { staticClass: "col-content__header" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.updatedName,
                expression: "updatedName",
              },
            ],
            attrs: { type: "text", readonly: _vm.canEdit },
            domProps: { value: _vm.updatedName },
            on: {
              keypress: function ($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                return _vm.updateName.apply(null, arguments)
              },
              click: function ($event) {
                _vm.canEdit = false
              },
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.updatedName = $event.target.value
              },
            },
          }),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-icon",
              on: {
                click: function ($event) {
                  return _vm.$emit("delete-column", _vm.id)
                },
              },
            },
            [
              _c("span", { staticClass: "material-symbols-outlined icon" }, [
                _vm._v("close"),
              ]),
            ]
          ),
        ]),
        _vm._v(" "),
        _vm._l(_vm.cards, function (card, i) {
          return _c("card", {
            key: i,
            attrs: { id: card.id, title: card.title, desc: card.desc },
          })
        }),
        _vm._v(" "),
        !_vm.addCard
          ? _c(
              "button",
              {
                staticClass: "btn btn-add-card",
                on: {
                  click: function ($event) {
                    _vm.addCard = true
                  },
                },
              },
              [
                _c("span", { staticClass: "material-symbols-outlined icon" }, [
                  _vm._v(" add "),
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "text" }, [_vm._v(" Add a card ")]),
              ]
            )
          : _c("div", { staticClass: "add-card" }, [
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.cardTitle,
                    expression: "cardTitle",
                  },
                ],
                attrs: { placeholder: "Enter a title of this card..." },
                domProps: { value: _vm.cardTitle },
                on: {
                  keypress: function ($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.createCard.apply(null, arguments)
                  },
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.cardTitle = $event.target.value
                  },
                },
              }),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-secondary",
                  on: { click: _vm.createCard },
                },
                [_vm._v("\n        Add Card\n      ")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-icon",
                  on: {
                    click: function ($event) {
                      _vm.addCard = false
                    },
                  },
                },
                [
                  _c("span", { staticClass: "material-symbols-outlined" }, [
                    _vm._v(" close "),
                  ]),
                ]
              ),
            ]),
      ],
      2
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);