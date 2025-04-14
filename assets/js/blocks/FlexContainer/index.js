/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/src/block-editor/controls-auxiliary/device-switcher/device-switcher-control.jsx":
/*!***************************************************************************************************!*\
  !*** ./assets/js/src/block-editor/controls-auxiliary/device-switcher/device-switcher-control.jsx ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeviceSwitcher: () => (/* binding */ DeviceSwitcher)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.development.esm.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _device_switcher_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./device-switcher-styles */ "./assets/js/src/block-editor/controls-auxiliary/device-switcher/device-switcher-styles.jsx");

/** @jsx jsx */;





function DeviceSwitcher() {
  const currentDevice = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => select('core/edit-post').__experimentalGetPreviewDeviceType().toLowerCase());
  const [device, setDevice] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(currentDevice);
  const onClickHandler = device => {
    setDevice(device);
    const deviceCapitalized = device.charAt(0).toUpperCase() + device.slice(1);
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)('core/edit-post').__experimentalSetPreviewDeviceType(deviceCapitalized);
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setDevice(currentDevice);
  }, [currentDevice]);
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
    css: _device_switcher_styles__WEBPACK_IMPORTED_MODULE_4__.styles.buttonGroup,
    className: "atblocks-component-device-switcher"
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    css: _device_switcher_styles__WEBPACK_IMPORTED_MODULE_4__.styles.button,
    className: device === 'desktop' ? 'is-active' : '',
    onClick: () => onClickHandler('desktop')
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
    css: _device_switcher_styles__WEBPACK_IMPORTED_MODULE_4__.styles.icon,
    icon: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
      width: "15",
      height: "15",
      viewBox: "0 0 40 40",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("rect", {
      fill: "none",
      stroke: "#212121",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      height: "24",
      rx: "2",
      ry: "2",
      width: "30",
      x: "1",
      y: "1"
    }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("polygon", {
      fill: "none",
      stroke: "#212121",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "21 31 11 31 12 25 20 25 21 31"
    }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("line", {
      fill: "none",
      stroke: "#212121",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      x1: "9",
      x2: "23",
      y1: "31",
      y2: "31"
    }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("line", {
      fill: "none",
      stroke: "#212121",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      x1: "1",
      x2: "31",
      y1: "21",
      y2: "21"
    }))
  })), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    css: _device_switcher_styles__WEBPACK_IMPORTED_MODULE_4__.styles.button,
    className: device === 'tablet' ? 'is-active' : '',
    onClick: () => onClickHandler('tablet')
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
    css: _device_switcher_styles__WEBPACK_IMPORTED_MODULE_4__.styles.icon,
    icon: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
      width: "15",
      height: "15",
      viewBox: "-4 0 40 40",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("rect", {
      fill: "none",
      stroke: "#212121",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      height: "30",
      rx: "2",
      ry: "2",
      width: "22",
      x: "5",
      y: "1"
    }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("line", {
      fill: "none",
      stroke: "#212121",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      x1: "14",
      x2: "18",
      y1: "27",
      y2: "27"
    }))
  })), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    css: _device_switcher_styles__WEBPACK_IMPORTED_MODULE_4__.styles.button,
    className: device === 'mobile' ? 'is-active' : '',
    onClick: () => onClickHandler('mobile')
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
    css: _device_switcher_styles__WEBPACK_IMPORTED_MODULE_4__.styles.icon,
    icon: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
      width: "15",
      height: "15",
      viewBox: "0 0 40 40",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("rect", {
      fill: "none",
      stroke: "#212121",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      height: "30",
      rx: "2",
      ry: "2",
      width: "18",
      x: "7",
      y: "1"
    }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("line", {
      fill: "none",
      stroke: "#212121",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      x1: "15",
      x2: "17",
      y1: "27",
      y2: "27"
    }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
      fill: "none",
      stroke: "#212121",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M20,1V3a2,2,0,0,1-2,2H14a2,2,0,0,1-2-2V1"
    }))
  })));
}
;

/***/ }),

/***/ "./assets/js/src/block-editor/controls-auxiliary/device-switcher/device-switcher-styles.jsx":
/*!**************************************************************************************************!*\
  !*** ./assets/js/src/block-editor/controls-auxiliary/device-switcher/device-switcher-styles.jsx ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   styles: () => (/* binding */ styles)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.development.esm.js");

const styles = {
  buttonGroup: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)`
        display: flex;
        align-items: center;
    `,
  button: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)`
        padding: 2px;
        box-shadow: none !important;
        height: auto;

        &.is-active {
            svg {
                rect, polygon, line, path {
                    stroke: var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));
                }
            }
        }
    `,
  icon: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)`
        width: 12px;
        height: auto;

        rect, polygon, line, path {
            stroke: #212121;
        }
    `
};


/***/ }),

/***/ "./assets/js/src/block-editor/controls-auxiliary/reset-values/reset-values-control.jsx":
/*!*********************************************************************************************!*\
  !*** ./assets/js/src/block-editor/controls-auxiliary/reset-values/reset-values-control.jsx ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResetValues: () => (/* binding */ ResetValues)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.development.esm.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/rotate-left.js");
/* harmony import */ var _reset_values_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-values-styles */ "./assets/js/src/block-editor/controls-auxiliary/reset-values/reset-values-styles.jsx");

/** @jsx jsx */;



function ResetValues(props) {
  const {
    onClick
  } = props;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
    css: _reset_values_styles__WEBPACK_IMPORTED_MODULE_1__.styles.button,
    className: "atblocks-component-reset-values",
    onClick: onClick
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"], {
    css: _reset_values_styles__WEBPACK_IMPORTED_MODULE_1__.styles.icon,
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"]
  }));
}
;

/***/ }),

/***/ "./assets/js/src/block-editor/controls-auxiliary/reset-values/reset-values-styles.jsx":
/*!********************************************************************************************!*\
  !*** ./assets/js/src/block-editor/controls-auxiliary/reset-values/reset-values-styles.jsx ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   styles: () => (/* binding */ styles)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.development.esm.js");

const styles = {
  button: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)`
        padding: 2px;
        box-shadow: none !important;
        height: auto;
        background: none;
        border: 0;
        cursor: pointer;
        outline: none;

        &.is-active {
            svg {
                rect, polygon, line, path {
                    stroke: var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));
                }
            }
        }
    `,
  icon: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)`
        width: 12px;
        height: auto;

        rect, polygon, line, path {
            stroke: #212121;
        }
    `
};


/***/ }),

/***/ "./assets/js/src/block-editor/controls-auxiliary/unit-switcher/unit-switcher-control.jsx":
/*!***********************************************************************************************!*\
  !*** ./assets/js/src/block-editor/controls-auxiliary/unit-switcher/unit-switcher-control.jsx ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnitSwitcher: () => (/* binding */ UnitSwitcher)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.development.esm.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _unit_switcher_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./unit-switcher-styles */ "./assets/js/src/block-editor/controls-auxiliary/unit-switcher/unit-switcher-styles.jsx");

/** @jsx jsx */;





function UnitSwitcher(props) {
  if (!props) {
    return null;
  }
  const {
    units,
    value,
    onChange
  } = props;
  const options = units.map(item => {
    return {
      label: item,
      value: item
    };
  });
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    css: _unit_switcher_styles__WEBPACK_IMPORTED_MODULE_4__.styles.auxiliaryWrapper,
    className: "atblocks-control-auxiliary-wrapper"
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    css: _unit_switcher_styles__WEBPACK_IMPORTED_MODULE_4__.styles.select,
    className: "atblocks-component-unit-switcher",
    label: "",
    value: value,
    options: options,
    onChange: onChange
  }));
}
;

/***/ }),

/***/ "./assets/js/src/block-editor/controls-auxiliary/unit-switcher/unit-switcher-styles.jsx":
/*!**********************************************************************************************!*\
  !*** ./assets/js/src/block-editor/controls-auxiliary/unit-switcher/unit-switcher-styles.jsx ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   styles: () => (/* binding */ styles)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.development.esm.js");

const styles = {
  auxiliaryWrapper: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)`
        > .components-base-control,
        > .components-base-control > .components-base-control__field {
            margin: 0;
        }
    `,
  select: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)`
        select {
            padding: 8px 21px 5px 4px !important;
            line-height: 1 !important;
            min-height: 0 !important;
            height: auto !important;
            margin-top: -7px !important;
        }

        .components-input-control__backdrop {
            border: none !important;
        }
    `
};


/***/ }),

/***/ "./assets/js/src/block-editor/controls/advanced-panel/advanced-panel.jsx":
/*!*******************************************************************************!*\
  !*** ./assets/js/src/block-editor/controls/advanced-panel/advanced-panel.jsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dimensions_dimensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dimensions/dimensions */ "./assets/js/src/block-editor/controls/dimensions/dimensions.jsx");
/* harmony import */ var _block_editor_controls_switch_toggle_switch_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../block-editor/controls/switch-toggle/switch-toggle */ "./assets/js/src/block-editor/controls/switch-toggle/switch-toggle.jsx");
/* harmony import */ var _block_editor_controls_color_picker_color_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../block-editor/controls/color-picker/color-picker */ "./assets/js/src/block-editor/controls/color-picker/color-picker.jsx");
/* harmony import */ var _block_editor_controls_animation_animation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../block-editor/controls/animation/animation */ "./assets/js/src/block-editor/controls/animation/animation.jsx");
/* harmony import */ var _block_editor_controls_range_slider_range_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../block-editor/controls/range-slider/range-slider */ "./assets/js/src/block-editor/controls/range-slider/range-slider.jsx");
/* harmony import */ var _block_editor_controls_border_border__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../block-editor/controls/border/border */ "./assets/js/src/block-editor/controls/border/border.jsx");
/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../utils/settings */ "./assets/js/src/utils/settings.jsx");












const AdvancedPanel = props => {
  const {
    attributes,
    setAttributes,
    attributesDefaults,
    updateAttribute,
    setUpdateCss,
    blockName,
    isPanelOpened,
    onTogglePanelBodyHandler
  } = props;
  const atts = attributes;
  const currentDevice = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select('core/edit-post').__experimentalGetPreviewDeviceType().toLowerCase());
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Panel, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Layout', 'botiga-pro'),
    initialOpen: false,
    opened: isPanelOpened('layout'),
    onToggle: () => onTogglePanelBodyHandler('layout')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_dimensions_dimensions__WEBPACK_IMPORTED_MODULE_5__.Dimensions, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding', 'athemes-blocks'),
    directions: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top', 'athemes-blocks'),
      value: 'top'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Right', 'athemes-blocks'),
      value: 'right'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bottom', 'athemes-blocks'),
      value: 'bottom'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Left', 'athemes-blocks'),
      value: 'left'
    }],
    value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getDimensionsSettingValue)('padding', currentDevice, atts),
    defaultUnit: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getSettingUnit)('padding', currentDevice, atts),
    directionsValue: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getDimensionsSettingDirectionsValue)('padding', currentDevice, atts),
    connect: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getDimensionsSettingConnectValue)('padding', currentDevice, atts),
    responsive: true,
    units: ['px', '%', 'em', 'rem', 'vh', 'vw'],
    reset: true,
    onChange: value => {
      console.log(value);
      updateAttribute('padding', {
        value: value.value,
        unit: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getSettingUnit)('padding', currentDevice, atts),
        connect: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getDimensionsSettingConnectValue)('padding', currentDevice, atts)
      }, currentDevice);
      setUpdateCss({
        settingId: 'padding',
        value: value.value
      });
    },
    onChangeUnit: value => {
      updateAttribute('padding', {
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getSettingValue)('padding', currentDevice, atts),
        unit: value,
        connect: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getDimensionsSettingConnectValue)('padding', currentDevice, atts)
      }, currentDevice);
      setUpdateCss({
        settingId: 'padding',
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getSettingValue)('padding', currentDevice, atts)
      });
    },
    onClickReset: () => {
      updateAttribute('padding', (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getDimensionsSettingDefaultValue)('padding', currentDevice, attributesDefaults), currentDevice);
      setUpdateCss({
        settingId: 'padding',
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getDimensionsSettingDefaultValue)('padding', currentDevice, attributesDefaults)
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_dimensions_dimensions__WEBPACK_IMPORTED_MODULE_5__.Dimensions, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Margin', 'athemes-blocks'),
    directions: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top', 'athemes-blocks'),
      value: 'top'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Right', 'athemes-blocks'),
      value: 'right'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bottom', 'athemes-blocks'),
      value: 'bottom'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Left', 'athemes-blocks'),
      value: 'left'
    }],
    value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getDimensionsSettingValue)('margin', currentDevice, atts),
    defaultUnit: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getSettingUnit)('margin', currentDevice, atts),
    directionsValue: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getDimensionsSettingDirectionsValue)('margin', currentDevice, atts),
    connect: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getDimensionsSettingConnectValue)('margin', currentDevice, atts),
    responsive: true,
    units: ['px', '%', 'em', 'rem', 'vh', 'vw'],
    reset: true,
    onChange: value => {
      updateAttribute('margin', {
        value: value.value,
        unit: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getSettingUnit)('margin', currentDevice, atts),
        connect: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getDimensionsSettingConnectValue)('margin', currentDevice, atts)
      }, currentDevice);
      setUpdateCss({
        settingId: 'margin',
        value: value.value
      });
    },
    onChangeUnit: value => {
      updateAttribute('margin', {
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getSettingValue)('margin', currentDevice, atts),
        unit: value,
        connect: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getDimensionsSettingConnectValue)('margin', currentDevice, atts)
      }, currentDevice);
      setUpdateCss({
        settingId: 'margin',
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getSettingValue)('margin', currentDevice, atts)
      });
    },
    onClickReset: () => {
      updateAttribute('margin', (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getDimensionsSettingDefaultValue)('margin', currentDevice, attributesDefaults), currentDevice);
      setUpdateCss({
        settingId: 'margin',
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getDimensionsSettingDefaultValue)('margin', currentDevice, attributesDefaults)
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_editor_controls_range_slider_range_slider__WEBPACK_IMPORTED_MODULE_9__.RangeSlider, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Z-Index', 'athemes-blocks'),
    defaultValue: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getSettingValue)('zIndex', currentDevice, atts),
    defaultUnit: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getSettingUnit)('zIndex', currentDevice, atts),
    min: -10,
    max: 10,
    responsive: true,
    reset: true,
    units: false,
    onChange: value => {
      updateAttribute('zIndex', {
        value: value,
        unit: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getSettingUnit)('zIndex', currentDevice, atts)
      }, currentDevice);
      setUpdateCss({
        settingId: 'zIndex',
        value: value
      });
    },
    onClickReset: () => {
      updateAttribute('zIndex', {
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getSettingDefaultValue)('zIndex', currentDevice, attributesDefaults),
        unit: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getSettingDefaultUnit)('zIndex', currentDevice, attributesDefaults)
      }, currentDevice);
      setUpdateCss({
        settingId: 'zIndex',
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getSettingDefaultValue)('zIndex', currentDevice, attributesDefaults)
      });
    }
  })), ['athemes-blocks/flex-container'].includes(blockName) === false && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background', 'athemes-blocks'),
    initialOpen: false,
    opened: isPanelOpened('background'),
    onToggle: () => onTogglePanelBodyHandler('background')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_editor_controls_color_picker_color_picker__WEBPACK_IMPORTED_MODULE_7__.ColorPicker, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color', 'athemes-blocks'),
    value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getSettingValue)('backgroundColor', 'desktop', atts),
    hover: true,
    responsive: false,
    reset: true,
    defaultStateOnChangeComplete: value => {
      updateAttribute('backgroundColor', {
        value: {
          defaultState: value.hex,
          hoverState: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getColorPickerSettingValue)('backgroundColor', 'desktop', 'hoverState', atts)
        }
      }, 'desktop');
      setUpdateCss({
        settingId: 'backgroundColor',
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getColorPickerSettingValue)('backgroundColor', 'desktop', 'defaultState', atts)
      });
    },
    hoverStateOnChangeComplete: value => {
      updateAttribute('backgroundColor', {
        value: {
          defaultState: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getColorPickerSettingValue)('backgroundColor', 'desktop', 'defaultState', atts),
          hoverState: value.hex
        }
      }, 'desktop');
      setUpdateCss({
        settingId: 'backgroundColor',
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getColorPickerSettingValue)('backgroundColor', 'desktop', 'hoverState', atts)
      });
    },
    onClickReset: () => {
      updateAttribute('backgroundColor', {
        value: {
          defaultState: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getColorPickerSettingDefaultValue)('backgroundColor', 'desktop', 'defaultState', attributesDefaults),
          hoverState: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getColorPickerSettingDefaultValue)('backgroundColor', 'desktop', 'hoverState', attributesDefaults)
        }
      }, 'desktop');
      setUpdateCss({
        settingId: 'backgroundColor',
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getColorPickerSettingDefaultValue)('backgroundColor', 'desktop', 'defaultState', attributesDefaults)
      });
    }
  })), ['athemes-blocks/heading'].includes(blockName) === true && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border', 'botiga-pro'),
    initialOpen: false,
    opened: isPanelOpened('border'),
    onToggle: () => onTogglePanelBodyHandler('border')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_editor_controls_border_border__WEBPACK_IMPORTED_MODULE_10__.Border, {
    label: "",
    settingId: "border",
    attributes: atts,
    setAttributes: setAttributes,
    attributesDefaults: attributesDefaults,
    setUpdateCss: setUpdateCss,
    subFields: ['borderStyle', 'borderWidth', 'borderRadius', 'borderColor']
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Animation', 'botiga-pro'),
    initialOpen: false,
    opened: isPanelOpened('animation'),
    onToggle: () => onTogglePanelBodyHandler('animation')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_editor_controls_animation_animation__WEBPACK_IMPORTED_MODULE_8__.Animation, {
    label: "",
    settingId: "animation",
    attributes: atts,
    setAttributes: setAttributes,
    attributesDefaults: attributesDefaults,
    setUpdateCss: setUpdateCss,
    subFields: ['entranceAnimation', 'animationDuration', 'animationDelay']
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Responsive', 'athemes-blocks'),
    initialOpen: false,
    opened: isPanelOpened('responsive'),
    onToggle: () => onTogglePanelBodyHandler('responsive')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_editor_controls_switch_toggle_switch_toggle__WEBPACK_IMPORTED_MODULE_6__.SwitchToggle, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hide On Desktop', 'athemes-blocks'),
    value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getSettingValue)('hideOnDesktop', 'desktop', atts),
    responsive: false,
    reset: true,
    onChange: value => {
      updateAttribute('hideOnDesktop', {
        value: value
      }, 'desktop');
    },
    onClickReset: () => {
      updateAttribute('hideOnDesktop', {
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getSettingDefaultValue)('hideOnDesktop', 'desktop', attributesDefaults)
      }, 'desktop');
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_editor_controls_switch_toggle_switch_toggle__WEBPACK_IMPORTED_MODULE_6__.SwitchToggle, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hide On Tablet', 'athemes-blocks'),
    value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getSettingValue)('hideOnTablet', 'desktop', atts),
    responsive: false,
    reset: true,
    onChange: value => {
      updateAttribute('hideOnTablet', {
        value: value
      }, 'desktop');
    },
    onClickReset: () => {
      updateAttribute('hideOnTablet', {
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getSettingDefaultValue)('hideOnTablet', 'desktop', attributesDefaults)
      }, 'desktop');
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_editor_controls_switch_toggle_switch_toggle__WEBPACK_IMPORTED_MODULE_6__.SwitchToggle, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hide On Mobile', 'athemes-blocks'),
    value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getSettingValue)('hideOnMobile', 'desktop', atts),
    responsive: false,
    reset: true,
    onChange: value => {
      updateAttribute('hideOnMobile', {
        value: value
      }, 'desktop');
    },
    onClickReset: () => {
      updateAttribute('hideOnMobile', {
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getSettingDefaultValue)('hideOnMobile', 'desktop', attributesDefaults)
      }, 'desktop');
    }
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdvancedPanel);

/***/ }),

/***/ "./assets/js/src/block-editor/controls/animation/animation.jsx":
/*!*********************************************************************!*\
  !*** ./assets/js/src/block-editor/controls/animation/animation.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Animation: () => (/* binding */ Animation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _controls_auxiliary_device_switcher_device_switcher_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../controls-auxiliary/device-switcher/device-switcher-control */ "./assets/js/src/block-editor/controls-auxiliary/device-switcher/device-switcher-control.jsx");
/* harmony import */ var _controls_auxiliary_reset_values_reset_values_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../controls-auxiliary/reset-values/reset-values-control */ "./assets/js/src/block-editor/controls-auxiliary/reset-values/reset-values-control.jsx");
/* harmony import */ var _dimensions_dimensions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dimensions/dimensions */ "./assets/js/src/block-editor/controls/dimensions/dimensions.jsx");
/* harmony import */ var _select_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../select/select */ "./assets/js/src/block-editor/controls/select/select.jsx");
/* harmony import */ var _block_editor_controls_color_picker_color_picker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../block-editor/controls/color-picker/color-picker */ "./assets/js/src/block-editor/controls/color-picker/color-picker.jsx");
/* harmony import */ var _range_slider_range_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../range-slider/range-slider */ "./assets/js/src/block-editor/controls/range-slider/range-slider.jsx");
/* harmony import */ var _utils_block_attributes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../utils/block-attributes */ "./assets/js/src/utils/block-attributes.jsx");
/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../utils/settings */ "./assets/js/src/utils/settings.jsx");













function Animation(props) {
  const {
    label,
    settingId,
    attributes,
    setAttributes,
    attributesDefaults,
    setUpdateCss,
    subFields
  } = props;
  const currentDevice = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select('core/edit-post').__experimentalGetPreviewDeviceType().toLowerCase());
  const {
    entranceAnimation,
    animationDuration,
    animationDelay
  } = attributes[settingId].innerSettings;
  const updateInnerControlAttribute = (0,_utils_block_attributes__WEBPACK_IMPORTED_MODULE_11__.createInnerControlAttributeUpdater)(settingId, attributes, setAttributes);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "atblocks-component-header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "atblocks-component-header__title"
  }, label)), subFields && subFields.includes('entranceAnimation') && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_select_select__WEBPACK_IMPORTED_MODULE_8__.Select, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Entrance Animation', 'athemes-blocks'),
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Default', 'athemes-blocks'),
      value: 'default'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fade In', 'athemes-blocks'),
      value: 'fade-in'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Slide In', 'athemes-blocks'),
      value: 'slide-in'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Zoom In', 'athemes-blocks'),
      value: 'zoom-in'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Rotate In', 'athemes-blocks'),
      value: 'rotate-in'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Flip In', 'athemes-blocks'),
      value: 'flip-in'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Slide In', 'athemes-blocks'),
      value: 'slide-in'
    }],
    value: entranceAnimation.default[currentDevice].value,
    responsive: true,
    reset: true,
    onChange: value => {
      updateInnerControlAttribute('entranceAnimation', value, currentDevice);
      setUpdateCss({
        type: 'inner-control',
        settingId: settingId,
        innerSettingId: 'entranceAnimation',
        value: value
      });
    },
    onClickReset: () => {
      updateInnerControlAttribute('entranceAnimation', attributesDefaults[settingId].default.innerSettings.entranceAnimation.default[currentDevice].value, currentDevice);
      setUpdateCss({
        type: 'inner-control',
        settingId: settingId,
        innerSettingId: 'entranceAnimation',
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_12__.getInnerSettingDefaultValue)(settingId, 'entranceAnimation', currentDevice, attributesDefaults)
      });
    }
  }), entranceAnimation.default[currentDevice].value !== 'default' && subFields && subFields.includes('animationDuration') && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_select_select__WEBPACK_IMPORTED_MODULE_8__.Select, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Animation Duration', 'athemes-blocks'),
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Normal', 'athemes-blocks'),
      value: 'normal'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fast', 'athemes-blocks'),
      value: 'fast'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Slow', 'athemes-blocks'),
      value: 'slow'
    }],
    value: animationDuration.default[currentDevice].value,
    responsive: true,
    reset: true,
    onChange: value => {
      updateInnerControlAttribute('animationDuration', value, currentDevice);
      setUpdateCss({
        type: 'inner-control',
        settingId: settingId,
        innerSettingId: 'animationDuration',
        value: value
      });
    },
    onClickReset: () => {
      updateInnerControlAttribute('animationDuration', attributesDefaults[settingId].default.innerSettings.animationDuration.default[currentDevice].value, currentDevice);
      setUpdateCss({
        type: 'inner-control',
        settingId: settingId,
        innerSettingId: 'animationDuration',
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_12__.getInnerSettingDefaultValue)(settingId, 'animationDuration', currentDevice, attributesDefaults)
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_range_slider_range_slider__WEBPACK_IMPORTED_MODULE_10__.RangeSlider, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Animation Delay (ms)', 'athemes-blocks'),
    defaultValue: animationDelay.default[currentDevice].value,
    defaultUnit: animationDelay.default[currentDevice].unit,
    min: 0,
    max: 15000,
    responsive: true,
    reset: true,
    units: false,
    onChange: value => {
      updateInnerControlAttribute('animationDelay', {
        value: value,
        unit: animationDelay.default[currentDevice].unit
      }, currentDevice);
      setUpdateCss({
        type: 'inner-control',
        settingId: settingId,
        innerSettingId: 'animationDelay',
        value: value
      });
    },
    onChangeUnit: value => {
      updateInnerControlAttribute('animationDelay', {
        value: fontSize.default[currentDevice].value,
        unit: value
      }, currentDevice);
      setUpdateCss({
        type: 'inner-control',
        settingId: settingId,
        innerSettingId: 'animationDelay',
        value: value
      });
    },
    onClickReset: () => {
      updateInnerControlAttribute('animationDelay', {
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_12__.getInnerSettingDefaultValue)(settingId, 'animationDelay', currentDevice, attributesDefaults),
        unit: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_12__.getInnerSettingDefaultUnit)(settingId, 'animationDelay', currentDevice, attributesDefaults)
      }, currentDevice);
      setUpdateCss({
        type: 'inner-control',
        settingId: settingId,
        innerSettingId: 'animationDelay',
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_12__.getInnerSettingDefaultValue)(settingId, 'animationDelay', currentDevice, attributesDefaults)
      });
    }
  })));
}

/***/ }),

/***/ "./assets/js/src/block-editor/controls/border/border.jsx":
/*!***************************************************************!*\
  !*** ./assets/js/src/block-editor/controls/border/border.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Border: () => (/* binding */ Border)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _controls_auxiliary_device_switcher_device_switcher_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../controls-auxiliary/device-switcher/device-switcher-control */ "./assets/js/src/block-editor/controls-auxiliary/device-switcher/device-switcher-control.jsx");
/* harmony import */ var _controls_auxiliary_reset_values_reset_values_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../controls-auxiliary/reset-values/reset-values-control */ "./assets/js/src/block-editor/controls-auxiliary/reset-values/reset-values-control.jsx");
/* harmony import */ var _dimensions_dimensions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dimensions/dimensions */ "./assets/js/src/block-editor/controls/dimensions/dimensions.jsx");
/* harmony import */ var _select_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../select/select */ "./assets/js/src/block-editor/controls/select/select.jsx");
/* harmony import */ var _block_editor_controls_color_picker_color_picker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../block-editor/controls/color-picker/color-picker */ "./assets/js/src/block-editor/controls/color-picker/color-picker.jsx");
/* harmony import */ var _utils_block_attributes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utils/block-attributes */ "./assets/js/src/utils/block-attributes.jsx");
/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../utils/settings */ "./assets/js/src/utils/settings.jsx");












function Border(props) {
  const {
    label,
    settingId,
    attributes,
    setAttributes,
    attributesDefaults,
    setUpdateCss,
    subFields
  } = props;
  const currentDevice = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select('core/edit-post').__experimentalGetPreviewDeviceType().toLowerCase());
  const {
    borderStyle,
    borderWidth,
    borderRadius,
    borderColor
  } = attributes[settingId].innerSettings;
  const updateInnerControlAttribute = (0,_utils_block_attributes__WEBPACK_IMPORTED_MODULE_10__.createInnerControlAttributeUpdater)(settingId, attributes, setAttributes);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "atblocks-component-header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "atblocks-component-header__title"
  }, label)), subFields && subFields.includes('borderStyle') && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_select_select__WEBPACK_IMPORTED_MODULE_8__.Select, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Style', 'athemes-blocks'),
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Default', 'athemes-blocks'),
      value: 'default'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('None', 'athemes-blocks'),
      value: 'none'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Solid', 'athemes-blocks'),
      value: 'solid'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dashed', 'athemes-blocks'),
      value: 'dashed'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dotted', 'athemes-blocks'),
      value: 'dotted'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Double', 'athemes-blocks'),
      value: 'double'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Groove', 'athemes-blocks'),
      value: 'groove'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Ridge', 'athemes-blocks'),
      value: 'ridge'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Outset', 'athemes-blocks'),
      value: 'outset'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hidden', 'athemes-blocks'),
      value: 'hidden'
    }],
    value: borderStyle.default[currentDevice].value,
    responsive: true,
    reset: true,
    onChange: value => {
      updateInnerControlAttribute('borderStyle', value, currentDevice);
      setUpdateCss({
        type: 'inner-control',
        settingId: settingId,
        innerSettingId: 'borderStyle',
        value: value
      });
    },
    onClickReset: () => {
      updateInnerControlAttribute('borderStyle', attributesDefaults[settingId].default.innerSettings.borderStyle.default[currentDevice].value, currentDevice);
      setUpdateCss({
        type: 'inner-control',
        settingId: settingId,
        innerSettingId: 'borderStyle',
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getInnerSettingDefaultValue)(settingId, 'borderStyle', currentDevice, attributesDefaults)
      });
    }
  }), borderStyle.default[currentDevice].value !== 'none' && borderStyle.default[currentDevice].value !== 'default' && subFields && subFields.includes('borderWidth') && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_dimensions_dimensions__WEBPACK_IMPORTED_MODULE_7__.Dimensions, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Width', 'athemes-blocks'),
    directions: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top', 'athemes-blocks'),
      value: 'top'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Right', 'athemes-blocks'),
      value: 'right'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bottom', 'athemes-blocks'),
      value: 'bottom'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Left', 'athemes-blocks'),
      value: 'left'
    }],
    value: borderWidth.default[currentDevice].value,
    defaultUnit: borderWidth.default[currentDevice].unit,
    directionsValue: borderWidth.default[currentDevice].value,
    connect: borderWidth.default[currentDevice].connect,
    responsive: true,
    units: ['px'],
    reset: true,
    onChange: value => {
      updateInnerControlAttribute('borderWidth', value, currentDevice);
      setUpdateCss({
        type: 'inner-control',
        settingId: settingId,
        innerSettingId: 'borderWidth',
        value: value
      });
    },
    onChangeUnit: value => {
      updateInnerControlAttribute('borderWidth', {
        value: borderWidth.default[currentDevice].value,
        unit: value
      }, currentDevice);
      setUpdateCss({
        type: 'inner-control',
        settingId: settingId,
        innerSettingId: 'borderWidth',
        value: value
      });
    },
    onClickReset: () => {
      updateInnerControlAttribute('borderWidth', {
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getInnerSettingDefaultValue)(settingId, 'borderWidth', currentDevice, attributesDefaults),
        unit: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getInnerSettingDefaultUnit)(settingId, 'borderWidth', currentDevice, attributesDefaults)
      }, currentDevice);
      setUpdateCss({
        type: 'inner-control',
        settingId: settingId,
        innerSettingId: 'borderWidth',
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getInnerSettingDefaultValue)(settingId, 'borderWidth', currentDevice, attributesDefaults)
      });
    }
  }), borderStyle.default[currentDevice].value !== 'default' && subFields && subFields.includes('borderRadius') && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_dimensions_dimensions__WEBPACK_IMPORTED_MODULE_7__.Dimensions, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Radius', 'athemes-blocks'),
    directions: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top', 'athemes-blocks'),
      value: 'top'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Right', 'athemes-blocks'),
      value: 'right'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bottom', 'athemes-blocks'),
      value: 'bottom'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Left', 'athemes-blocks'),
      value: 'left'
    }],
    value: borderRadius.default[currentDevice].value,
    defaultUnit: borderRadius.default[currentDevice].unit,
    directionsValue: borderRadius.default[currentDevice].value,
    connect: borderRadius.default[currentDevice].connect,
    responsive: true,
    units: ['px'],
    reset: true,
    onChange: value => {
      updateInnerControlAttribute('borderRadius', value, currentDevice);
      setUpdateCss({
        type: 'inner-control',
        settingId: settingId,
        innerSettingId: 'borderRadius',
        value: value
      });
    },
    onChangeUnit: value => {
      updateInnerControlAttribute('borderRadius', {
        value: borderRadius.default[currentDevice].value,
        unit: value
      }, currentDevice);
      setUpdateCss({
        type: 'inner-control',
        settingId: settingId,
        innerSettingId: 'borderRadius',
        value: value
      });
    },
    onClickReset: () => {
      updateInnerControlAttribute('borderRadius', {
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getInnerSettingDefaultValue)(settingId, 'borderRadius', currentDevice, attributesDefaults),
        unit: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getInnerSettingDefaultUnit)(settingId, 'borderRadius', currentDevice, attributesDefaults)
      }, currentDevice);
      setUpdateCss({
        type: 'inner-control',
        settingId: settingId,
        innerSettingId: 'borderRadius',
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getInnerSettingDefaultValue)(settingId, 'borderRadius', currentDevice, attributesDefaults)
      });
    }
  }), borderStyle.default[currentDevice].value !== 'none' && borderStyle.default[currentDevice].value !== 'default' && subFields && subFields.includes('borderColor') && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_editor_controls_color_picker_color_picker__WEBPACK_IMPORTED_MODULE_9__.ColorPicker, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color', 'athemes-blocks'),
    value: borderColor.default[currentDevice].value,
    hover: true,
    responsive: true,
    reset: true,
    defaultStateOnChangeComplete: value => {
      updateInnerControlAttribute('borderColor', {
        defaultState: value.hex,
        hoverState: borderColor.default[currentDevice].value.hoverState
      }, currentDevice);
      setUpdateCss({
        type: 'inner-control',
        settingId: settingId,
        innerSettingId: 'borderColor',
        value: borderColor.default[currentDevice].value.defaultState
      });
    },
    hoverStateOnChangeComplete: value => {
      updateInnerControlAttribute('borderColor', {
        defaultState: borderColor.default[currentDevice].value.defaultState,
        hoverState: value.hex
      }, currentDevice);
      setUpdateCss({
        type: 'inner-control',
        settingId: settingId,
        innerSettingId: 'borderColor',
        value: borderColor.default[currentDevice].value.hoverState
      });
    },
    onClickReset: () => {
      updateInnerControlAttribute('borderColor', {
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getInnerSettingDefaultValue)(settingId, 'borderColor', currentDevice, attributesDefaults)
      }, currentDevice);
      setUpdateCss({
        type: 'inner-control',
        settingId: settingId,
        innerSettingId: 'borderColor',
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__.getInnerSettingDefaultValue)(settingId, 'borderColor', currentDevice, attributesDefaults)
      });
    }
  }));
}

/***/ }),

/***/ "./assets/js/src/block-editor/controls/color-picker/color-picker.jsx":
/*!***************************************************************************!*\
  !*** ./assets/js/src/block-editor/controls/color-picker/color-picker.jsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorPicker: () => (/* binding */ ColorPicker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _controls_auxiliary_device_switcher_device_switcher_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../controls-auxiliary/device-switcher/device-switcher-control */ "./assets/js/src/block-editor/controls-auxiliary/device-switcher/device-switcher-control.jsx");
/* harmony import */ var _controls_auxiliary_reset_values_reset_values_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../controls-auxiliary/reset-values/reset-values-control */ "./assets/js/src/block-editor/controls-auxiliary/reset-values/reset-values-control.jsx");
/* harmony import */ var colord__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! colord */ "./node_modules/colord/index.mjs");







function ColorPicker(props) {
  const {
    label,
    value,
    hover,
    responsive,
    reset,
    onChange,
    onClickReset,
    defaultStateOnChangeComplete,
    hoverStateOnChangeComplete
  } = props;
  const {
    defaultState,
    hoverState
  } = value;
  const colorObjectDefaultState = (0,colord__WEBPACK_IMPORTED_MODULE_6__.colord)(defaultState);
  const colorObjectHoverState = (0,colord__WEBPACK_IMPORTED_MODULE_6__.colord)(hoverState);

  // Popover State (default)
  const [isDefaultVisible, setIsDefaultVisible] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const toggleDefaultVisible = () => {
    setIsDefaultVisible(state => !state);
  };

  // Popover State (hover)
  const [isHoverVisible, setIsHoverVisible] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const toggleHoverVisible = () => {
    setIsHoverVisible(state => !state);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "atblocks-component-header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "atblocks-component-header__title"
  }, label), responsive && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_auxiliary_device_switcher_device_switcher_control__WEBPACK_IMPORTED_MODULE_4__.DeviceSwitcher, null), reset && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_auxiliary_reset_values_reset_values_control__WEBPACK_IMPORTED_MODULE_5__.ResetValues, {
    onClick: onClickReset
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    label: "",
    variant: "secondary",
    onClick: toggleDefaultVisible,
    style: {
      backgroundColor: defaultState,
      textIndent: '-99999px',
      width: '25px',
      height: '25px',
      boxShadow: 'none',
      outlineColor: '#adadad',
      borderRadius: '100%',
      marginLeft: !hover ? 0 : 'auto',
      marginRight: !hover ? 0 : '10px'
    }
  }, isDefaultVisible && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Popover, {
    onClick: event => event.stopPropagation(),
    onFocusOutside: toggleDefaultVisible
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
    color: colorObjectDefaultState,
    enableAlpha: true,
    onChangeComplete: defaultStateOnChangeComplete
  }))), hover && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    label: "",
    variant: "secondary",
    onClick: toggleHoverVisible,
    style: {
      backgroundColor: hoverState,
      textIndent: '-99999px',
      width: '25px',
      height: '25px',
      boxShadow: 'none',
      outlineColor: '#adadad',
      borderRadius: '100%'
    }
  }, isHoverVisible && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Popover, {
    onClick: event => event.stopPropagation(),
    onFocusOutside: toggleHoverVisible
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
    color: colorObjectHoverState,
    enableAlpha: true,
    onChangeComplete: hoverStateOnChangeComplete
  }))));
}

/***/ }),

/***/ "./assets/js/src/block-editor/controls/dimensions/dimensions.jsx":
/*!***********************************************************************!*\
  !*** ./assets/js/src/block-editor/controls/dimensions/dimensions.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dimensions: () => (/* binding */ Dimensions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.development.esm.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/link.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/link-off.js");
/* harmony import */ var _controls_auxiliary_device_switcher_device_switcher_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../controls-auxiliary/device-switcher/device-switcher-control */ "./assets/js/src/block-editor/controls-auxiliary/device-switcher/device-switcher-control.jsx");
/* harmony import */ var _controls_auxiliary_unit_switcher_unit_switcher_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../controls-auxiliary/unit-switcher/unit-switcher-control */ "./assets/js/src/block-editor/controls-auxiliary/unit-switcher/unit-switcher-control.jsx");
/* harmony import */ var _controls_auxiliary_reset_values_reset_values_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../controls-auxiliary/reset-values/reset-values-control */ "./assets/js/src/block-editor/controls-auxiliary/reset-values/reset-values-control.jsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles */ "./assets/js/src/block-editor/controls/dimensions/styles.jsx");

/** @jsx jsx */;









function Dimensions(props) {
  const {
    label,
    value,
    defaultUnit,
    directionsValue,
    directions,
    connect,
    responsive,
    units,
    reset,
    onChange,
    onChangeUnit,
    onClickReset
  } = props;
  const [inputNumberValues, setInputNumberValues] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(directionsValue);
  const [valueUnit, setValueUnit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(defaultUnit);
  const [valueToReturn, setValueToReturn] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(value);
  const [isConnected, setIsConnected] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(connect);
  const onChangeNumberInput = (direction, newValue) => {
    const directionKey = direction.value;
    setInputNumberValues({
      ...inputNumberValues,
      [directionKey]: newValue
    });
    if (isConnected) {
      setValueToReturn({
        ...value,
        value: {
          top: newValue,
          right: newValue,
          bottom: newValue,
          left: newValue
        },
        unit: valueUnit,
        connect: true
      });
    } else {
      setValueToReturn({
        ...value,
        value: {
          ...inputNumberValues,
          [directionKey]: newValue
        },
        unit: valueUnit,
        connect: false
      });
    }
  };
  const onClickConnectValuesToggle = () => {
    setIsConnected(!isConnected);
    if (isConnected) {
      setValueToReturn({
        ...value,
        value: {
          top: inputNumberValues.top,
          right: inputNumberValues.top,
          bottom: inputNumberValues.top,
          left: inputNumberValues.top
        },
        unit: valueUnit,
        connect: false
      });
    } else {
      setValueToReturn({
        ...value,
        value: {
          top: inputNumberValues.top,
          right: inputNumberValues.right,
          bottom: inputNumberValues.bottom,
          left: inputNumberValues.left
        },
        unit: valueUnit,
        connect: true
      });
    }
  };

  // Update directionsValue, the input number values.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setInputNumberValues(directionsValue);
    setValueUnit(defaultUnit);
  }, [value, defaultUnit]);

  // Update the value to return to the main control.
  // It must return an object with the value with this data structure:
  // {
  //     value: {
  //         top: 0,
  //         right: 0,
  //         bottom: 0,
  //         left: 0
  //     },
  //     unit: 'px'
  // }
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    onChange(valueToReturn);
  }, [valueToReturn]);
  console.log(inputNumberValues);
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    className: "atblocks-control-dimensions"
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
    className: "atblocks-component-header"
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
    className: "atblocks-component-header__title"
  }, label), responsive && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(_controls_auxiliary_device_switcher_device_switcher_control__WEBPACK_IMPORTED_MODULE_4__.DeviceSwitcher, null), reset && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(_controls_auxiliary_reset_values_reset_values_control__WEBPACK_IMPORTED_MODULE_6__.ResetValues, {
    onClick: onClickReset
  }), units && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(_controls_auxiliary_unit_switcher_unit_switcher_control__WEBPACK_IMPORTED_MODULE_5__.UnitSwitcher, {
    units: units,
    value: valueUnit,
    onChange: onChangeUnit
  })), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
    css: _styles__WEBPACK_IMPORTED_MODULE_7__.styles.control,
    className: "atblocks-dimensions-control"
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
    css: _styles__WEBPACK_IMPORTED_MODULE_7__.styles.inputWrapper,
    className: "atblocks-dimensions-control__input-wrapper"
  }, directions.map((direction, index) => {
    const directionKey = direction.value;
    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      key: index,
      css: _styles__WEBPACK_IMPORTED_MODULE_7__.styles.inputItem,
      className: "atblocks-dimensions-control__input-item"
    }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalNumberControl, {
      __next40pxDefaultSize: true,
      label: "",
      onChange: newValue => onChangeNumberInput(direction, newValue),
      value: inputNumberValues[directionKey]
    }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)("label", {
      css: _styles__WEBPACK_IMPORTED_MODULE_7__.styles.inputLabel,
      className: "atblocks-dimensions-control__input-label"
    }, direction.label));
  })), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
    css: _styles__WEBPACK_IMPORTED_MODULE_7__.styles.connectValuesToggle,
    className: "atblocks-dimensions-control__connect-values-toggle"
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    className: isConnected ? 'is-active' : '',
    icon: isConnected ? _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"] : _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__["default"],
    label: "",
    onClick: onClickConnectValuesToggle
  }))));
}

/***/ }),

/***/ "./assets/js/src/block-editor/controls/dimensions/styles.jsx":
/*!*******************************************************************!*\
  !*** ./assets/js/src/block-editor/controls/dimensions/styles.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   styles: () => (/* binding */ styles)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.development.esm.js");

const styles = {
  control: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)`
        display: flex;
        flex-wrap: nowrap;
    `,
  inputWrapper: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)`
        display: flex;
        flex-wrap: nowrap;
    `,
  inputItem: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)`
        display: flex;
        flex-direction: column;
        gap: 2px;
        flex: 1;

        input {
            height: auto !important;
            min-width: 0;
            min-height: 0 !important;
            padding: 7px 0px 8px 7px !important;
        }

        .components-base-control {
            margin: 0;
        }

        .components-input-control__backdrop {
            border-color: #e7e4e4 !important;
            border-left: 0;
        }

        label {
            font-size: 8px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: #989898;
        }

        &:first-child {
            .components-input-control__backdrop {
                border-left: 1px solid #e7e4e4 !important;
            }
        }
    `,
  inputLabel: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)`
        
    `,
  connectValuesToggle: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)`
        svg {
            width: 17px;
            height: auto;
        }

        .components-button {
            &.is-active {
                svg {
                    path {
                        fill: var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));
                    }
                }
            }
        }
    `
};


/***/ }),

/***/ "./assets/js/src/block-editor/controls/radio-buttons/radio-buttons.jsx":
/*!*****************************************************************************!*\
  !*** ./assets/js/src/block-editor/controls/radio-buttons/radio-buttons.jsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RadioButtons: () => (/* binding */ RadioButtons)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.development.esm.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _controls_auxiliary_device_switcher_device_switcher_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../controls-auxiliary/device-switcher/device-switcher-control */ "./assets/js/src/block-editor/controls-auxiliary/device-switcher/device-switcher-control.jsx");
/* harmony import */ var _controls_auxiliary_reset_values_reset_values_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../controls-auxiliary/reset-values/reset-values-control */ "./assets/js/src/block-editor/controls-auxiliary/reset-values/reset-values-control.jsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./assets/js/src/block-editor/controls/radio-buttons/styles.jsx");

/** @jsx jsx */;







function RadioButtons(props) {
  const {
    label,
    options,
    defaultValue,
    responsive,
    reset,
    hidden,
    onChange,
    onClickReset
  } = props;
  const [value, setValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(defaultValue);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setValue(defaultValue);
  }, [defaultValue]);
  if (hidden) {
    return null;
  }
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    css: _styles__WEBPACK_IMPORTED_MODULE_6__.styles.wrapper,
    className: "atblocks-component-radio-buttons"
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
    className: "atblocks-component-header"
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
    className: "atblocks-component-header__title"
  }, label), responsive && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(_controls_auxiliary_device_switcher_device_switcher_control__WEBPACK_IMPORTED_MODULE_4__.DeviceSwitcher, null), reset && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(_controls_auxiliary_reset_values_reset_values_control__WEBPACK_IMPORTED_MODULE_5__.ResetValues, {
    onClick: onClickReset
  })), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControl, {
    __next40pxDefaultSize: true,
    __nextHasNoMarginBottom: true,
    label: "",
    className: "atblocks-radio-buttons",
    isBlock: true,
    onChange: onChange,
    value: value
  }, options.map((option, index) => {
    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, {
      key: index,
      label: option.label,
      value: option.value
    });
  })));
}

/***/ }),

/***/ "./assets/js/src/block-editor/controls/radio-buttons/styles.jsx":
/*!**********************************************************************!*\
  !*** ./assets/js/src/block-editor/controls/radio-buttons/styles.jsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   styles: () => (/* binding */ styles)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.development.esm.js");

const styles = {
  wrapper: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)`
        .components-base-control__field {
            .components-base-control__label {
                display: none;
            }
        }
    `
};


/***/ }),

/***/ "./assets/js/src/block-editor/controls/range-slider/range-slider.jsx":
/*!***************************************************************************!*\
  !*** ./assets/js/src/block-editor/controls/range-slider/range-slider.jsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RangeSlider: () => (/* binding */ RangeSlider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _controls_auxiliary_device_switcher_device_switcher_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../controls-auxiliary/device-switcher/device-switcher-control */ "./assets/js/src/block-editor/controls-auxiliary/device-switcher/device-switcher-control.jsx");
/* harmony import */ var _controls_auxiliary_unit_switcher_unit_switcher_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../controls-auxiliary/unit-switcher/unit-switcher-control */ "./assets/js/src/block-editor/controls-auxiliary/unit-switcher/unit-switcher-control.jsx");
/* harmony import */ var _controls_auxiliary_reset_values_reset_values_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../controls-auxiliary/reset-values/reset-values-control */ "./assets/js/src/block-editor/controls-auxiliary/reset-values/reset-values-control.jsx");







function RangeSlider(props) {
  let {
    label,
    description,
    options,
    defaultValue,
    defaultUnit,
    min,
    max,
    responsive,
    units,
    reset,
    onChange,
    onChangeUnit,
    onClickReset
  } = props;
  const [value, setValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(defaultValue);
  const [valueUnit, setValueUnit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(defaultUnit);

  // Depending on the unit, the max value should be 100.
  if (valueUnit === '%' || valueUnit === 'vw' || valueUnit === 'vh') {
    max = 100;
  }

  // Some controls needs to have different min/max values for each unit.
  // This is the object data structure accepted: 
  // {
  //     px: 150,
  //     em: 10,
  //     rem: 10,
  // }
  if (typeof max === 'object' && max !== null) {
    if (max.px && valueUnit === 'px') {
      max = max.px;
    }
    if (max.em && valueUnit === 'em') {
      max = max.em;
    }
    if (max.rem && valueUnit === 'rem') {
      max = max.rem;
    }
  }
  if (typeof min === 'object' && min !== null) {
    if (min.px && valueUnit === 'px') {
      min = min.px;
    }
    if (min.em && valueUnit === 'em') {
      min = min.em;
    }
    if (min.rem && valueUnit === 'rem') {
      min = min.rem;
    }
  }

  // Step.
  let step = 1;
  if (valueUnit === 'em' || valueUnit === 'rem') {
    step = 0.1;
  }
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setValue(defaultValue);
    setValueUnit(defaultUnit);
  }, [defaultValue, defaultUnit]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    className: "atblocks-component-range-slider"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "atblocks-component-header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "atblocks-component-header__title"
  }, label), responsive && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_auxiliary_device_switcher_device_switcher_control__WEBPACK_IMPORTED_MODULE_4__.DeviceSwitcher, null), reset && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_auxiliary_reset_values_reset_values_control__WEBPACK_IMPORTED_MODULE_6__.ResetValues, {
    onClick: onClickReset
  }), units && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_auxiliary_unit_switcher_unit_switcher_control__WEBPACK_IMPORTED_MODULE_5__.UnitSwitcher, {
    units: units,
    value: valueUnit,
    onChange: onChangeUnit
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    __next40pxDefaultSize: true,
    __nextHasNoMarginBottom: true,
    help: description,
    initialPosition: value,
    value: value,
    label: "",
    max: max,
    min: min,
    step: step,
    onBlur: () => {},
    onChange: onChange,
    onFocus: () => {},
    onMouseLeave: () => {},
    onMouseMove: () => {}
  }));
}

/***/ }),

/***/ "./assets/js/src/block-editor/controls/select/select.jsx":
/*!***************************************************************!*\
  !*** ./assets/js/src/block-editor/controls/select/select.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Select: () => (/* binding */ Select)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _controls_auxiliary_device_switcher_device_switcher_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../controls-auxiliary/device-switcher/device-switcher-control */ "./assets/js/src/block-editor/controls-auxiliary/device-switcher/device-switcher-control.jsx");
/* harmony import */ var _controls_auxiliary_reset_values_reset_values_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../controls-auxiliary/reset-values/reset-values-control */ "./assets/js/src/block-editor/controls-auxiliary/reset-values/reset-values-control.jsx");






function Select(props) {
  const {
    label,
    value,
    options,
    responsive,
    reset,
    onChange,
    onClickReset
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "atblocks-component-header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "atblocks-component-header__title"
  }, label), responsive && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_auxiliary_device_switcher_device_switcher_control__WEBPACK_IMPORTED_MODULE_4__.DeviceSwitcher, null), reset && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_auxiliary_reset_values_reset_values_control__WEBPACK_IMPORTED_MODULE_5__.ResetValues, {
    onClick: onClickReset
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    __next40pxDefaultSize: true,
    __nextHasNoMarginBottom: true,
    label: "",
    value: value,
    options: options,
    onChange: onChange
  }));
}

/***/ }),

/***/ "./assets/js/src/block-editor/controls/switch-toggle/switch-toggle.jsx":
/*!*****************************************************************************!*\
  !*** ./assets/js/src/block-editor/controls/switch-toggle/switch-toggle.jsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SwitchToggle: () => (/* binding */ SwitchToggle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _controls_auxiliary_device_switcher_device_switcher_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../controls-auxiliary/device-switcher/device-switcher-control */ "./assets/js/src/block-editor/controls-auxiliary/device-switcher/device-switcher-control.jsx");
/* harmony import */ var _controls_auxiliary_reset_values_reset_values_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../controls-auxiliary/reset-values/reset-values-control */ "./assets/js/src/block-editor/controls-auxiliary/reset-values/reset-values-control.jsx");






function SwitchToggle(props) {
  const {
    label,
    value,
    responsive,
    reset,
    onChange,
    onClickReset
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "atblocks-component-header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "atblocks-component-header__title"
  }, label), responsive && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_auxiliary_device_switcher_device_switcher_control__WEBPACK_IMPORTED_MODULE_4__.DeviceSwitcher, null), reset && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_auxiliary_reset_values_reset_values_control__WEBPACK_IMPORTED_MODULE_5__.ResetValues, {
    onClick: onClickReset
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    __next40pxDefaultSize: true,
    __nextHasNoMarginBottom: true,
    label: "",
    checked: value,
    onChange: onChange
  }));
}

/***/ }),

/***/ "./assets/js/src/block-editor/controls/tabs/tabs-navigation.jsx":
/*!**********************************************************************!*\
  !*** ./assets/js/src/block-editor/controls/tabs/tabs-navigation.jsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsNavigation: () => (/* binding */ TabsNavigation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/icons */ "./assets/js/src/utils/icons.jsx");
/* harmony import */ var _store_persistent_tabs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/persistent-tabs-store */ "./assets/js/src/block-editor/store/persistent-tabs-store.jsx");







function TabsNavigation(props) {
  const {
    options
  } = props;
  const currentTab = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select('persistent-tabs-store').getCurrentTab());
  const [tab, setTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(currentTab);
  const {
    switchTabTo,
    lastPanelOpened
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_store_persistent_tabs_store__WEBPACK_IMPORTED_MODULE_6__.store);
  const onClickHandler = tabId => {
    setTab(tabId);
    switchTabTo(tabId);
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setTab(currentTab);
  }, [currentTab]);

  // Hide the 'Advanced' panel if the current tab is 'advanced'.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (tab === 'advanced') {
      const advancedPanel = document.querySelector('.block-editor-block-inspector__advanced');
      if (advancedPanel) {
        advancedPanel.style.display = 'block';
      }
    } else {
      const advancedPanel = document.querySelector('.block-editor-block-inspector__advanced');
      if (advancedPanel) {
        advancedPanel.style.display = 'none';
      }
    }
  }, [tab]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "atblocks-tabs-navigation"
  }, options.map((option, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      key: index,
      className: `atblocks-tabs-navigation__item ${tab === option.value ? 'is-active' : ''}`,
      "data-tab": option.value,
      onClick: () => onClickHandler(option.value)
    }, option.value === 'advanced' && _utils_icons__WEBPACK_IMPORTED_MODULE_5__.icons.advanced, option.value === 'style' && _utils_icons__WEBPACK_IMPORTED_MODULE_5__.icons.style, option.value === 'general' && _utils_icons__WEBPACK_IMPORTED_MODULE_5__.icons.general, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "atblocks-tabs-navigation__item-label"
    }, option.label));
  }));
}

/***/ }),

/***/ "./assets/js/src/block-editor/controls/text-input/text-input.jsx":
/*!***********************************************************************!*\
  !*** ./assets/js/src/block-editor/controls/text-input/text-input.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextInput: () => (/* binding */ TextInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _controls_auxiliary_device_switcher_device_switcher_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../controls-auxiliary/device-switcher/device-switcher-control */ "./assets/js/src/block-editor/controls-auxiliary/device-switcher/device-switcher-control.jsx");
/* harmony import */ var _controls_auxiliary_reset_values_reset_values_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../controls-auxiliary/reset-values/reset-values-control */ "./assets/js/src/block-editor/controls-auxiliary/reset-values/reset-values-control.jsx");





function TextInput(props) {
  const {
    label,
    value,
    responsive,
    reset,
    onChange,
    onClickReset
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "atblocks-component-header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "atblocks-component-header__title"
  }, label), responsive && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_auxiliary_device_switcher_device_switcher_control__WEBPACK_IMPORTED_MODULE_3__.DeviceSwitcher, null), reset && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_auxiliary_reset_values_reset_values_control__WEBPACK_IMPORTED_MODULE_4__.ResetValues, {
    onClick: onClickReset
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    value: value,
    onChange: onChange
  }));
}

/***/ }),

/***/ "./assets/js/src/block-editor/hoc/with-advanced-tab.jsx":
/*!**************************************************************!*\
  !*** ./assets/js/src/block-editor/hoc/with-advanced-tab.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   withAdvancedTab: () => (/* binding */ withAdvancedTab)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _controls_advanced_panel_advanced_panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../controls/advanced-panel/advanced-panel */ "./assets/js/src/block-editor/controls/advanced-panel/advanced-panel.jsx");
/* harmony import */ var _utils_block_attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/block-attributes */ "./assets/js/src/utils/block-attributes.jsx");







const withAdvancedTab = (WrappedComponent, attributesDefaults) => {
  return props => {
    const {
      attributes,
      setAttributes,
      setUpdateCss,
      onTogglePanelBodyHandler,
      isPanelOpened
    } = props;
    const updateAttribute = (0,_utils_block_attributes__WEBPACK_IMPORTED_MODULE_6__.createAttributeUpdater)(attributes, setAttributes);
    const currentTab = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select('persistent-tabs-store').getCurrentTab());
    const blockName = props.name;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, currentTab === 'advanced' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_advanced_panel_advanced_panel__WEBPACK_IMPORTED_MODULE_5__["default"], {
      blockName: blockName,
      attributes: attributes,
      setAttributes: setAttributes,
      attributesDefaults: attributesDefaults,
      updateAttribute: updateAttribute,
      setUpdateCss: setUpdateCss,
      onTogglePanelBodyHandler: onTogglePanelBodyHandler,
      isPanelOpened: isPanelOpened
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
      group: "advanced"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('CSS ID', 'athemes-blocks'),
      value: attributes.cssID || '',
      onChange: value => {
        setAttributes({
          cssID: value
        });
      },
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add a unique ID to this block. This can be used for anchor links or custom CSS targeting.', 'athemes-blocks')
    })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WrappedComponent, {
      ...props
    }));
  };
};

/***/ }),

/***/ "./assets/js/src/block-editor/hoc/with-dynamic-css.jsx":
/*!*************************************************************!*\
  !*** ./assets/js/src/block-editor/hoc/with-dynamic-css.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   withDynamicCSS: () => (/* binding */ withDynamicCSS)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/css */ "./assets/js/src/utils/css.jsx");



const withDynamicCSS = (WrappedComponent, attributesDefaults) => {
  return props => {
    const {
      attributes,
      clientId
    } = props;
    const [updateCss, setUpdateCss] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

    // Watch for changes in the updateCss state and apply the CSS
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
      if (updateCss) {
        if (updateCss.type === 'all') {
          updateCss.settings.forEach(setting => {
            const cssData = {
              css: setting.css,
              settingId: setting.settingId,
              innerSettingId: setting?.innerSettingId ? setting.innerSettingId : null
            };
            const css = (0,_utils_css__WEBPACK_IMPORTED_MODULE_2__.getControlCSS)(cssData, clientId, attributes);
            (0,_utils_css__WEBPACK_IMPORTED_MODULE_2__.applyPreviewCSS)(css, clientId, setting.settingId, setting.innerSettingId);
          });
        } else if (updateCss.type === 'inner-control') {
          const cssData = {
            css: attributesDefaults[updateCss.settingId].default?.innerSettings[updateCss.innerSettingId]?.css,
            settingId: updateCss.settingId,
            innerSettingId: updateCss.innerSettingId
          };
          const css = (0,_utils_css__WEBPACK_IMPORTED_MODULE_2__.getControlCSS)(cssData, clientId, attributes);
          (0,_utils_css__WEBPACK_IMPORTED_MODULE_2__.applyPreviewCSS)(css, clientId, updateCss.settingId, updateCss.innerSettingId);
        } else {
          const settingId = updateCss?.settingId;
          const cssData = {
            css: attributesDefaults[settingId]?.css,
            settingId: settingId
          };
          const css = (0,_utils_css__WEBPACK_IMPORTED_MODULE_2__.getControlCSS)(cssData, clientId, attributes);
          (0,_utils_css__WEBPACK_IMPORTED_MODULE_2__.applyPreviewCSS)(css, clientId, settingId);
        }
      }
    }, [updateCss]);

    // Render the CSS for the first load
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
      const allSettings = Object.keys(attributesDefaults);
      const allSettingsStyles = [];
      allSettings.forEach(settingId => {
        const isInnerSetting = attributesDefaults[settingId]?.default?.innerSettings;
        if (isInnerSetting) {
          const allInnerSettings = Object.keys(attributesDefaults[settingId].default.innerSettings);
          allInnerSettings.forEach(innerSettingId => {
            allSettingsStyles.push({
              type: 'inner-setting',
              settingId: settingId,
              innerSettingId: innerSettingId,
              css: attributesDefaults[settingId].default.innerSettings[innerSettingId].css
            });
          });
        } else {
          allSettingsStyles.push({
            type: 'setting',
            settingId: settingId,
            css: attributesDefaults[settingId].css
          });
        }
      });
      setUpdateCss({
        type: 'all',
        settings: allSettingsStyles
      });
    }, []);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WrappedComponent, {
      ...props,
      setUpdateCss: setUpdateCss
    });
  };
};

/***/ }),

/***/ "./assets/js/src/block-editor/hoc/with-persistent-panel-toggle.jsx":
/*!*************************************************************************!*\
  !*** ./assets/js/src/block-editor/hoc/with-persistent-panel-toggle.jsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   withPersistentPanelToggle: () => (/* binding */ withPersistentPanelToggle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_persistent_tabs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/persistent-tabs-store */ "./assets/js/src/block-editor/store/persistent-tabs-store.jsx");



const withPersistentPanelToggle = WrappedComponent => {
  return props => {
    const currentTab = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => select('persistent-tabs-store')?.getCurrentTab() || 'general');
    const lastPanelOpened = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => select('persistent-tabs-store')?.getLastPanelOpened() || null);
    const {
      setLastPanelOpened
    } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_store_persistent_tabs_store__WEBPACK_IMPORTED_MODULE_2__.store);
    const onTogglePanelBodyHandler = panelId => {
      if (lastPanelOpened === `${currentTab}-${panelId}`) {
        setLastPanelOpened(null);
      } else {
        setLastPanelOpened(`${currentTab}-${panelId}`);
      }
    };
    const isPanelOpened = panelId => {
      return lastPanelOpened === `${currentTab}-${panelId}`;
    };
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WrappedComponent, {
      ...props,
      isPanelOpened: isPanelOpened,
      onTogglePanelBodyHandler: onTogglePanelBodyHandler
    });
  };
};

/***/ }),

/***/ "./assets/js/src/block-editor/hoc/with-tabs-navigation.jsx":
/*!*****************************************************************!*\
  !*** ./assets/js/src/block-editor/hoc/with-tabs-navigation.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   withTabsNavigation: () => (/* binding */ withTabsNavigation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _controls_tabs_tabs_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controls/tabs/tabs-navigation */ "./assets/js/src/block-editor/controls/tabs/tabs-navigation.jsx");





const withTabsNavigation = WrappedComponent => {
  return props => {
    const currentTab = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select('persistent-tabs-store').getCurrentTab());
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_tabs_tabs_navigation__WEBPACK_IMPORTED_MODULE_4__.TabsNavigation, {
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('General', 'botiga-pro'),
        value: 'general'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Style', 'botiga-pro'),
        value: 'style'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Advanced', 'botiga-pro'),
        value: 'advanced'
      }]
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WrappedComponent, {
      ...props
    }));
  };
};

/***/ }),

/***/ "./assets/js/src/block-editor/store/persistent-tabs-store.jsx":
/*!********************************************************************!*\
  !*** ./assets/js/src/block-editor/store/persistent-tabs-store.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   store: () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);

console.log(333);
// Defaults.
const DEFAULT_STATE = {
  currentTab: 'general',
  lastPanelOpened: null
};

// Actions.
const actions = {
  switchTabTo(tabId) {
    return {
      type: 'SWITCH_TAB',
      tabId
    };
  },
  setLastPanelOpened(lastPanelOpened) {
    return {
      type: 'SET_LAST_PANEL_OPENED',
      lastPanelOpened
    };
  }
};

// Reducer.
const reducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'SWITCH_TAB':
      return {
        ...state,
        currentTab: action.tabId
      };
    case 'SET_LAST_PANEL_OPENED':
      return {
        ...state,
        lastPanelOpened: action.lastPanelOpened
      };
    default:
      return state;
  }
};

// Selectors.
const selectors = {
  getCurrentTab(state) {
    return state.currentTab;
  },
  getLastPanelOpened(state) {
    return state.lastPanelOpened;
  }
};
let store = {};
if (!window.__PERSISTENT_TABS_STORE_IS_REGISTERED__) {
  store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)('persistent-tabs-store', {
    reducer,
    actions,
    selectors
  });
  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(store);
  window.__PERSISTENT_TABS_STORE_IS_REGISTERED__ = true;
  window.__PERSISTENT_TABS_STORE__ = store;
} else {
  store = window.__PERSISTENT_TABS_STORE__;
}


/***/ }),

/***/ "./assets/js/src/blocks/FlexContainer/block.json":
/*!*******************************************************!*\
  !*** ./assets/js/src/blocks/FlexContainer/block.json ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"athemes-blocks/flex-container","version":"1.0.0","title":"Container","category":"athemes-blocks","icon":"formatBold","description":"A container block that allows you to create a flex layout.","textdomain":"athemes-blocks","render":"file:./render.php","editorScript":"file:./index.js","style":"file:./style.css","editorStyle":"file:./editor.css"}');

/***/ }),

/***/ "./assets/js/src/blocks/FlexContainer/edit.jsx":
/*!*****************************************************!*\
  !*** ./assets/js/src/blocks/FlexContainer/edit.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _block_editor_store_persistent_tabs_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../block-editor/store/persistent-tabs-store */ "./assets/js/src/block-editor/store/persistent-tabs-store.jsx");
/* harmony import */ var _block_editor_controls_radio_buttons_radio_buttons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../block-editor/controls/radio-buttons/radio-buttons */ "./assets/js/src/block-editor/controls/radio-buttons/radio-buttons.jsx");
/* harmony import */ var _block_editor_controls_range_slider_range_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../block-editor/controls/range-slider/range-slider */ "./assets/js/src/block-editor/controls/range-slider/range-slider.jsx");
/* harmony import */ var _block_editor_controls_select_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../block-editor/controls/select/select */ "./assets/js/src/block-editor/controls/select/select.jsx");
/* harmony import */ var _block_editor_controls_text_input_text_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../block-editor/controls/text-input/text-input */ "./assets/js/src/block-editor/controls/text-input/text-input.jsx");
/* harmony import */ var _block_editor_controls_switch_toggle_switch_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../block-editor/controls/switch-toggle/switch-toggle */ "./assets/js/src/block-editor/controls/switch-toggle/switch-toggle.jsx");
/* harmony import */ var _block_editor_controls_color_picker_color_picker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../block-editor/controls/color-picker/color-picker */ "./assets/js/src/block-editor/controls/color-picker/color-picker.jsx");
/* harmony import */ var _block_editor_controls_border_border__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../block-editor/controls/border/border */ "./assets/js/src/block-editor/controls/border/border.jsx");
/* harmony import */ var _utils_block_attributes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/block-attributes */ "./assets/js/src/utils/block-attributes.jsx");
/* harmony import */ var _block_editor_hoc_with_tabs_navigation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../block-editor/hoc/with-tabs-navigation */ "./assets/js/src/block-editor/hoc/with-tabs-navigation.jsx");
/* harmony import */ var _block_editor_hoc_with_advanced_tab__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../block-editor/hoc/with-advanced-tab */ "./assets/js/src/block-editor/hoc/with-advanced-tab.jsx");
/* harmony import */ var _block_editor_hoc_with_dynamic_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../block-editor/hoc/with-dynamic-css */ "./assets/js/src/block-editor/hoc/with-dynamic-css.jsx");
/* harmony import */ var _block_editor_hoc_with_persistent_panel_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../block-editor/hoc/with-persistent-panel-toggle */ "./assets/js/src/block-editor/hoc/with-persistent-panel-toggle.jsx");
/* harmony import */ var _utils_block_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../utils/block-animations */ "./assets/js/src/utils/block-animations.jsx");
/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../utils/settings */ "./assets/js/src/utils/settings.jsx");
/* harmony import */ var _layout_selector__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./layout-selector */ "./assets/js/src/blocks/FlexContainer/layout-selector.jsx");























const attributesDefaults = FlexContainerBlockData.attributes;
const Edit = props => {
  const {
    attributes,
    setAttributes,
    clientId,
    setUpdateCss,
    isPanelOpened,
    onTogglePanelBodyHandler
  } = props;
  const atts = attributes;
  const updateAttribute = (0,_utils_block_attributes__WEBPACK_IMPORTED_MODULE_15__.createAttributeUpdater)(attributes, setAttributes);
  const currentDevice = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select('core/edit-post').__experimentalGetPreviewDeviceType().toLowerCase());
  const currentTab = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select('persistent-tabs-store').getCurrentTab());
  const {
    switchTabTo
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_block_editor_store_persistent_tabs_store__WEBPACK_IMPORTED_MODULE_7__.store);
  const [selectedLayout, setSelectedLayout] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(null);

  // Detect if this block is a child of a flex-container block.
  const parentBlock = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    const parents = select('core/block-editor').getBlockParents(clientId);
    if (parents.length === 0) return null;

    // Get the immediate parent block
    const parentId = parents[parents.length - 1];
    const parentBlock = select('core/block-editor').getBlock(parentId);
    return parentBlock?.name === 'athemes-blocks/flex-container' ? parentBlock : null;
  }, [clientId]);
  const isChildOfFlexContainer = parentBlock !== null;

  // Remove some attributes when it is a child block from a flex-container block (nested flex-container).
  if (isChildOfFlexContainer) {
    atts.containerWidth = {
      desktop: {
        value: 'custom'
      },
      tablet: {
        value: 'custom'
      },
      mobile: {
        value: 'custom'
      }
    };
  }

  // Check if has inner blocks.
  const hasInnerBlocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    const {
      getBlockCount
    } = select('core/block-editor');
    return getBlockCount(clientId) > 0;
  }, [clientId]);
  const handleLayoutSelect = layout => {
    Object.entries(layout.attributes).forEach(([key, value]) => {
      setAttributes({
        [key]: value
      });
    });
    setSelectedLayout(layout);
  };
  const {
    // General - Type settings.
    containerWidth,
    contentWidth,
    contentBoxWidth,
    customWidth,
    minHeight,
    htmlTag,
    htmlTagLink,
    htmlTagLinkOpenInNewWindow,
    overflow,
    // General - Layout settings.
    layout,
    direction,
    columnsGap,
    rowsGap,
    childrenWidth,
    alignItems,
    justifyContent,
    wrap,
    alignContent,
    // Style.
    backgroundColor,
    textColor,
    linkColor,
    // Advanced.
    hideOnDesktop,
    hideOnTablet,
    hideOnMobile
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return {
      // General - Type settings.
      containerWidth: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingValue)('containerWidth', 'desktop', atts),
      contentWidth: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingValue)('contentWidth', 'desktop', atts),
      contentBoxWidth: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingValue)('contentBoxWidth', currentDevice, atts),
      customWidth: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingValue)('customWidth', currentDevice, atts),
      minHeight: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingValue)('minHeight', currentDevice, atts),
      htmlTag: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingValue)('htmlTag', 'desktop', atts),
      htmlTagLink: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingValue)('htmlTagLink', 'desktop', atts),
      htmlTagLinkOpenInNewWindow: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingValue)('htmlTagLinkOpenInNewWindow', 'desktop', atts),
      overflow: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingValue)('overflow', currentDevice, atts),
      // General - Layout settings.
      layout: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingValue)('layout', 'desktop', atts),
      direction: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingValue)('direction', currentDevice, atts),
      columnsGap: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingValue)('columnsGap', currentDevice, atts),
      rowsGap: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingValue)('rowsGap', currentDevice, atts),
      childrenWidth: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingValue)('childrenWidth', 'desktop', atts),
      alignItems: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingValue)('alignItems', currentDevice, atts),
      justifyContent: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingValue)('justifyContent', currentDevice, atts),
      wrap: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingValue)('wrap', currentDevice, atts),
      alignContent: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingValue)('alignContent', currentDevice, atts),
      // Style.
      backgroundColor: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingValue)('backgroundColor', 'desktop', atts),
      textColor: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingValue)('textColor', 'desktop', atts),
      linkColor: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingValue)('linkColor', 'desktop', atts),
      // Advanced.
      hideOnDesktop: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingValue)('hideOnDesktop', 'desktop', atts),
      hideOnTablet: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingValue)('hideOnTablet', 'desktop', atts),
      hideOnMobile: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingValue)('hideOnMobile', 'desktop', atts)
    };
  }, [atts, currentDevice]);

  // Save the Client ID to attributes.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setAttributes({
      clientId: clientId
    });
  }, [clientId]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (isChildOfFlexContainer) {
      setAttributes({
        direction: {
          desktop: {
            value: 'column'
          },
          tablet: {
            value: 'column'
          },
          mobile: {
            value: 'column'
          }
        }
      });
    }
  }, []);

  // Move renderAppender outside the render cycle.
  const renderAppender = () => hasInnerBlocks ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InnerBlocks.DefaultBlockAppender, null) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InnerBlocks.ButtonBlockAppender, null);
  const innerBlocks = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InnerBlocks, {
      template: selectedLayout?.template || [],
      templateLock: false,
      renderAppender: renderAppender,
      orientation: isChildOfFlexContainer && direction === 'column' ? 'vertical' : 'horizontal',
      prioritizedInserterBlocks: ['athemes-blocks/flex-container']
    });
  }, [renderAppender, selectedLayout]);

  // Prevent the default click event handler for the block if the html tag is 'a'.
  const blockRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (blockRef === null) {
      return;
    }
    if (htmlTag === 'a' && blockRef.current) {
      const handleClick = event => {
        event.preventDefault();
      };
      if (blockRef.current) {
        blockRef.current.addEventListener('click', handleClick);
      }
      return () => {
        if (blockRef.current) {
          blockRef.current.removeEventListener('click', handleClick);
        }
      };
    }
  }, [htmlTag]);
  if (!hasInnerBlocks && !selectedLayout && !isChildOfFlexContainer) {
    switchTabTo('general');
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls, null, currentTab === 'general' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Panel, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Type', 'botiga-pro'),
    initialOpen: false,
    opened: isPanelOpened('type'),
    onToggle: () => onTogglePanelBodyHandler('type')
  }, isChildOfFlexContainer === false && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_editor_controls_radio_buttons_radio_buttons__WEBPACK_IMPORTED_MODULE_8__.RadioButtons, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Container Width', 'athemes-blocks'),
    defaultValue: containerWidth,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Full Width', 'athemes-blocks'),
      value: 'full-width'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Boxed', 'athemes-blocks'),
      value: 'boxed'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Custom', 'athemes-blocks'),
      value: 'custom'
    }],
    responsive: false,
    reset: true,
    onChange: value => {
      updateAttribute('containerWidth', {
        value: value
      }, 'desktop');
      setUpdateCss({
        settingId: 'containerWidth',
        value: value
      });
    },
    onClickReset: () => {
      updateAttribute('containerWidth', {
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingDefaultValue)('containerWidth', 'desktop', attributesDefaults)
      }, 'desktop');
      setUpdateCss({
        settingId: 'containerWidth',
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingDefaultValue)('containerWidth', 'desktop', attributesDefaults)
      });
    }
  }), containerWidth === 'full-width' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_editor_controls_radio_buttons_radio_buttons__WEBPACK_IMPORTED_MODULE_8__.RadioButtons, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Content Width', 'athemes-blocks'),
    defaultValue: contentWidth,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Boxed', 'athemes-blocks'),
      value: 'boxed'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Full Width', 'athemes-blocks'),
      value: 'full-width'
    }],
    responsive: false,
    reset: true,
    onChange: value => {
      updateAttribute('contentWidth', {
        value: value
      }, 'desktop');
      setUpdateCss({
        settingId: 'contentWidth',
        value: value
      });
    },
    onClickReset: () => {
      updateAttribute('contentWidth', {
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingDefaultValue)('contentWidth', 'desktop', attributesDefaults)
      }, 'desktop');
      setUpdateCss({
        settingId: 'contentWidth',
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingDefaultValue)('contentWidth', 'desktop', attributesDefaults)
      });
    }
  }), contentWidth === 'boxed' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_editor_controls_range_slider_range_slider__WEBPACK_IMPORTED_MODULE_9__.RangeSlider, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Content Box Width', 'athemes-blocks'),
    defaultValue: contentBoxWidth,
    defaultUnit: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingUnit)('contentBoxWidth', currentDevice, atts),
    min: 10,
    max: 2000,
    responsive: true,
    reset: true,
    units: ['px', '%', 'vw'],
    onChange: value => {
      updateAttribute('contentBoxWidth', {
        value: value,
        unit: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingUnit)('contentBoxWidth', currentDevice, atts)
      }, currentDevice);
      setUpdateCss({
        settingId: 'contentBoxWidth',
        value: value
      });
    },
    onChangeUnit: value => {
      updateAttribute('contentBoxWidth', {
        value: contentBoxWidth,
        unit: value
      }, currentDevice);
      setUpdateCss({
        settingId: 'contentBoxWidth',
        value: value
      });
    },
    onClickReset: () => {
      updateAttribute('contentBoxWidth', {
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingDefaultValue)('contentBoxWidth', currentDevice, attributesDefaults),
        unit: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingDefaultUnit)('contentBoxWidth', currentDevice, attributesDefaults)
      }, currentDevice);
      setUpdateCss({
        settingId: 'contentBoxWidth',
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingDefaultValue)('contentBoxWidth', currentDevice, attributesDefaults)
      });
    }
  })), containerWidth === 'custom' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_editor_controls_range_slider_range_slider__WEBPACK_IMPORTED_MODULE_9__.RangeSlider, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Custom Width', 'athemes-blocks'),
    defaultValue: customWidth,
    defaultUnit: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingUnit)('customWidth', currentDevice, atts),
    min: 0,
    max: 2000,
    responsive: true,
    reset: true,
    units: ['px', '%', 'vw'],
    onChange: value => {
      updateAttribute('customWidth', {
        value: value,
        unit: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingUnit)('customWidth', currentDevice, atts)
      }, currentDevice);
      setUpdateCss({
        settingId: 'customWidth',
        value: value
      });
    },
    onChangeUnit: value => {
      updateAttribute('customWidth', {
        value: customWidth,
        unit: value
      }, currentDevice);
      setUpdateCss({
        settingId: 'customWidth',
        value: value
      });
    },
    onClickReset: () => {
      updateAttribute('customWidth', {
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingDefaultValue)('customWidth', currentDevice, attributesDefaults),
        unit: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingDefaultUnit)('customWidth', currentDevice, attributesDefaults)
      }, currentDevice);
      setUpdateCss({
        settingId: 'customWidth',
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingDefaultValue)('customWidth', currentDevice, attributesDefaults)
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_editor_controls_range_slider_range_slider__WEBPACK_IMPORTED_MODULE_9__.RangeSlider, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Minimum Height', 'athemes-blocks'),
    defaultValue: minHeight,
    defaultUnit: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingUnit)('minHeight', currentDevice, atts),
    min: 10,
    max: 200,
    responsive: true,
    reset: true,
    units: ['px', 'vh'],
    onChange: value => {
      updateAttribute('minHeight', {
        value: value,
        unit: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingUnit)('minHeight', currentDevice, atts)
      }, currentDevice);
      setUpdateCss({
        settingId: 'minHeight',
        value: value
      });
    },
    onChangeUnit: value => {
      updateAttribute('minHeight', {
        value: minHeight,
        unit: value
      }, currentDevice);
      setUpdateCss({
        settingId: 'minHeight',
        value: value
      });
    },
    onClickReset: () => {
      updateAttribute('minHeight', {
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingDefaultValue)('minHeight', currentDevice, attributesDefaults),
        unit: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingDefaultUnit)('minHeight', currentDevice, attributesDefaults)
      }, currentDevice);
      setUpdateCss({
        settingId: 'minHeight',
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingDefaultValue)('minHeight', currentDevice, attributesDefaults)
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_editor_controls_select_select__WEBPACK_IMPORTED_MODULE_10__.Select, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('HTML Tag', 'athemes-blocks'),
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Div', 'athemes-blocks'),
      value: 'div'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Header', 'athemes-blocks'),
      value: 'header'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Footer', 'athemes-blocks'),
      value: 'footer'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Main', 'athemes-blocks'),
      value: 'main'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Article', 'athemes-blocks'),
      value: 'article'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Section', 'athemes-blocks'),
      value: 'section'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Aside', 'athemes-blocks'),
      value: 'aside'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Figure', 'athemes-blocks'),
      value: 'figure'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Figcaption', 'athemes-blocks'),
      value: 'figcaption'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Summary', 'athemes-blocks'),
      value: 'summary'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Nav', 'athemes-blocks'),
      value: 'nav'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Link', 'athemes-blocks'),
      value: 'a'
    }],
    value: htmlTag,
    responsive: false,
    reset: true,
    onChange: value => {
      updateAttribute('htmlTag', {
        value: value
      }, 'desktop');
      setUpdateCss({
        settingId: 'htmlTag',
        value: value
      });
    },
    onClickReset: () => {
      updateAttribute('htmlTag', {
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingDefaultValue)('htmlTag', 'desktop', attributesDefaults)
      }, 'desktop');
      setUpdateCss({
        settingId: 'htmlTag',
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingDefaultValue)('htmlTag', 'desktop', attributesDefaults)
      });
    }
  }), htmlTag === 'a' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_editor_controls_text_input_text_input__WEBPACK_IMPORTED_MODULE_11__.TextInput, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Link', 'athemes-blocks'),
    value: htmlTagLink,
    responsive: false,
    reset: true,
    onChange: value => {
      updateAttribute('htmlTagLink', {
        value: value
      }, 'desktop');
    },
    onClickReset: () => {
      updateAttribute('htmlTagLink', {
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingDefaultValue)('htmlTagLink', 'desktop', attributesDefaults)
      }, 'desktop');
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_editor_controls_switch_toggle_switch_toggle__WEBPACK_IMPORTED_MODULE_12__.SwitchToggle, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Open in new window', 'athemes-blocks'),
    value: htmlTagLinkOpenInNewWindow,
    responsive: false,
    reset: true,
    onChange: value => {
      updateAttribute('htmlTagLinkOpenInNewWindow', {
        value: value
      }, 'desktop');
    },
    onClickReset: () => {
      updateAttribute('htmlTagLinkOpenInNewWindow', {
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingDefaultValue)('htmlTagLinkOpenInNewWindow', 'desktop', attributesDefaults)
      }, 'desktop');
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_editor_controls_radio_buttons_radio_buttons__WEBPACK_IMPORTED_MODULE_8__.RadioButtons, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Overflow', 'athemes-blocks'),
    defaultValue: overflow,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Visible', 'athemes-blocks'),
      value: 'visible'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hidden', 'athemes-blocks'),
      value: 'hidden'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Auto', 'athemes-blocks'),
      value: 'auto'
    }],
    responsive: true,
    reset: true,
    onChange: value => {
      updateAttribute('overflow', {
        value: value
      }, currentDevice);
      setUpdateCss({
        settingId: 'overflow',
        value: value
      });
    },
    onClickReset: () => {
      updateAttribute('overflow', {
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingDefaultValue)('overflow', currentDevice, attributesDefaults)
      }, currentDevice);
      setUpdateCss({
        settingId: 'overflow',
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingDefaultValue)('overflow', currentDevice, attributesDefaults)
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Layout', 'botiga-pro'),
    initialOpen: false,
    opened: isPanelOpened('layout'),
    onToggle: () => onTogglePanelBodyHandler('layout')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_editor_controls_radio_buttons_radio_buttons__WEBPACK_IMPORTED_MODULE_8__.RadioButtons, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Layout', 'athemes-blocks'),
    defaultValue: layout,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Flex', 'athemes-blocks'),
      value: 'flex'
    }
    // { label: __( 'Grid', 'athemes-blocks' ), value: 'grid' },
    ],
    responsive: false,
    reset: true,
    hidden: true,
    onChange: value => {
      updateAttribute('layout', {
        value: value
      }, currentDevice);
      setUpdateCss({
        settingId: 'layout',
        value: value
      });
    },
    onClickReset: () => {
      updateAttribute('layout', {
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingDefaultValue)('layout', currentDevice, attributesDefaults)
      }, currentDevice);
      setUpdateCss({
        settingId: 'layout',
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingDefaultValue)('layout', currentDevice, attributesDefaults)
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_editor_controls_radio_buttons_radio_buttons__WEBPACK_IMPORTED_MODULE_8__.RadioButtons, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Direction', 'athemes-blocks'),
    defaultValue: direction,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Row', 'athemes-blocks'),
      value: 'row'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Column', 'athemes-blocks'),
      value: 'column'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Row Reverse', 'athemes-blocks'),
      value: 'row-reverse'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Column Reverse', 'athemes-blocks'),
      value: 'column-reverse'
    }],
    responsive: true,
    reset: true,
    onChange: value => {
      updateAttribute('direction', {
        value: value
      }, currentDevice);
      setUpdateCss({
        settingId: 'direction',
        value: value
      });
    },
    onClickReset: () => {
      updateAttribute('direction', {
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingDefaultValue)('direction', currentDevice, attributesDefaults)
      }, currentDevice);
      setUpdateCss({
        settingId: 'direction',
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingDefaultValue)('direction', currentDevice, attributesDefaults)
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_editor_controls_range_slider_range_slider__WEBPACK_IMPORTED_MODULE_9__.RangeSlider, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Columns Gap', 'athemes-blocks'),
    defaultValue: columnsGap,
    defaultUnit: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingUnit)('columnsGap', currentDevice, atts),
    min: 0,
    max: 200,
    responsive: true,
    reset: true,
    units: ['px', '%', 'vw'],
    onChange: value => {
      updateAttribute('columnsGap', {
        value: value,
        unit: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingUnit)('columnsGap', currentDevice, atts)
      }, currentDevice);
      setUpdateCss({
        settingId: 'columnsGap',
        value: value
      });
    },
    onChangeUnit: value => {
      updateAttribute('columnsGap', {
        value: columnsGap,
        unit: value
      }, currentDevice);
      setUpdateCss({
        settingId: 'columnsGap',
        value: value
      });
    },
    onClickReset: () => {
      updateAttribute('columnsGap', {
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingDefaultValue)('columnsGap', currentDevice, attributesDefaults),
        unit: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingDefaultUnit)('columnsGap', currentDevice, attributesDefaults)
      }, currentDevice);
      setUpdateCss({
        settingId: 'columnsGap',
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingDefaultValue)('columnsGap', currentDevice, attributesDefaults)
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_editor_controls_range_slider_range_slider__WEBPACK_IMPORTED_MODULE_9__.RangeSlider, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Rows Gap', 'athemes-blocks'),
    defaultValue: rowsGap,
    defaultUnit: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingUnit)('rowsGap', currentDevice, atts),
    min: 0,
    max: 200,
    responsive: true,
    reset: true,
    units: ['px', '%', 'vw'],
    onChange: value => {
      updateAttribute('rowsGap', {
        value: value,
        unit: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingUnit)('rowsGap', currentDevice, atts)
      }, currentDevice);
      setUpdateCss({
        settingId: 'rowsGap',
        value: value
      });
    },
    onChangeUnit: value => {
      updateAttribute('rowsGap', {
        value: rowsGap,
        unit: value
      }, currentDevice);
      setUpdateCss({
        settingId: 'rowsGap',
        value: value
      });
    },
    onClickReset: () => {
      updateAttribute('rowsGap', {
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingDefaultValue)('rowsGap', currentDevice, attributesDefaults),
        unit: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingDefaultUnit)('rowsGap', currentDevice, attributesDefaults)
      }, currentDevice);
      setUpdateCss({
        settingId: 'rowsGap',
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingDefaultValue)('rowsGap', currentDevice, attributesDefaults)
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_editor_controls_radio_buttons_radio_buttons__WEBPACK_IMPORTED_MODULE_8__.RadioButtons, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Children Width', 'athemes-blocks'),
    defaultValue: childrenWidth,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Auto', 'athemes-blocks'),
      value: 'auto'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Equal', 'athemes-blocks'),
      value: 'equal'
    }],
    responsive: false,
    reset: true,
    onChange: value => {
      updateAttribute('childrenWidth', {
        value: value
      }, currentDevice);
      setUpdateCss({
        settingId: 'childrenWidth',
        value: value
      });
    },
    onClickReset: () => {
      updateAttribute('childrenWidth', {
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingDefaultValue)('childrenWidth', currentDevice, attributesDefaults)
      }, currentDevice);
      setUpdateCss({
        settingId: 'childrenWidth',
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingDefaultValue)('childrenWidth', currentDevice, attributesDefaults)
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_editor_controls_radio_buttons_radio_buttons__WEBPACK_IMPORTED_MODULE_8__.RadioButtons, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Align Items', 'athemes-blocks'),
    defaultValue: alignItems,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Flex Start', 'athemes-blocks'),
      value: 'flex-start'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Center', 'athemes-blocks'),
      value: 'center'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Flex End', 'athemes-blocks'),
      value: 'flex-end'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Stretch', 'athemes-blocks'),
      value: 'stretch'
    }],
    responsive: true,
    reset: true,
    onChange: value => {
      updateAttribute('alignItems', {
        value: value
      }, currentDevice);
      setUpdateCss({
        settingId: 'alignItems',
        value: value
      });
    },
    onClickReset: () => {
      updateAttribute('alignItems', {
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingDefaultValue)('alignItems', currentDevice, attributesDefaults)
      }, currentDevice);
      setUpdateCss({
        settingId: 'alignItems',
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingDefaultValue)('alignItems', currentDevice, attributesDefaults)
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_editor_controls_radio_buttons_radio_buttons__WEBPACK_IMPORTED_MODULE_8__.RadioButtons, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Justify Content', 'athemes-blocks'),
    defaultValue: justifyContent,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Flex Start', 'athemes-blocks'),
      value: 'flex-start'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Center', 'athemes-blocks'),
      value: 'center'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Flex End', 'athemes-blocks'),
      value: 'flex-end'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Space Between', 'athemes-blocks'),
      value: 'space-between'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Space Around', 'athemes-blocks'),
      value: 'space-around'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Space Evenly', 'athemes-blocks'),
      value: 'space-evenly'
    }],
    responsive: true,
    reset: true,
    onChange: value => {
      updateAttribute('justifyContent', {
        value: value
      }, currentDevice);
      setUpdateCss({
        settingId: 'justifyContent',
        value: value
      });
    },
    onClickReset: () => {
      updateAttribute('justifyContent', {
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingDefaultValue)('justifyContent', currentDevice, attributesDefaults)
      }, currentDevice);
      setUpdateCss({
        settingId: 'justifyContent',
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingDefaultValue)('justifyContent', currentDevice, attributesDefaults)
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_editor_controls_radio_buttons_radio_buttons__WEBPACK_IMPORTED_MODULE_8__.RadioButtons, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Wrap', 'athemes-blocks'),
    defaultValue: wrap,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Wrap', 'athemes-blocks'),
      value: 'wrap'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No Wrap', 'athemes-blocks'),
      value: 'nowrap'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Wrap Reverse', 'athemes-blocks'),
      value: 'wrap-reverse'
    }],
    responsive: true,
    reset: true,
    onChange: value => {
      updateAttribute('wrap', {
        value: value
      }, currentDevice);
      setUpdateCss({
        settingId: 'wrap',
        value: value
      });
    },
    onClickReset: () => {
      updateAttribute('wrap', {
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingDefaultValue)('wrap', currentDevice, attributesDefaults)
      }, currentDevice);
      setUpdateCss({
        settingId: 'wrap',
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingDefaultValue)('wrap', currentDevice, attributesDefaults)
      });
    }
  }), wrap !== 'nowrap' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_editor_controls_radio_buttons_radio_buttons__WEBPACK_IMPORTED_MODULE_8__.RadioButtons, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Align Content', 'athemes-blocks'),
    defaultValue: alignContent,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Flex Start', 'athemes-blocks'),
      value: 'flex-start'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Center', 'athemes-blocks'),
      value: 'center'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Flex End', 'athemes-blocks'),
      value: 'flex-end'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Space Between', 'athemes-blocks'),
      value: 'space-between'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Space Around', 'athemes-blocks'),
      value: 'space-around'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Space Evenly', 'athemes-blocks'),
      value: 'space-evenly'
    }],
    responsive: true,
    reset: true,
    onChange: value => {
      updateAttribute('alignContent', {
        value: value
      }, currentDevice);
      setUpdateCss({
        settingId: 'alignContent',
        value: value
      });
    },
    onClickReset: () => {
      updateAttribute('alignContent', {
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingDefaultValue)('alignContent', currentDevice, attributesDefaults)
      }, currentDevice);
      setUpdateCss({
        settingId: 'alignContent',
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getSettingDefaultValue)('alignContent', currentDevice, attributesDefaults)
      });
    }
  }))), currentTab === 'style' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Panel, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background', 'botiga-pro'),
    initialOpen: false,
    opened: isPanelOpened('background'),
    onToggle: () => onTogglePanelBodyHandler('background')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_editor_controls_color_picker_color_picker__WEBPACK_IMPORTED_MODULE_13__.ColorPicker, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color', 'athemes-blocks'),
    value: backgroundColor,
    hover: false,
    responsive: false,
    reset: true,
    defaultStateOnChangeComplete: value => {
      updateAttribute('backgroundColor', {
        value: {
          defaultState: value.hex,
          hoverState: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getColorPickerSettingValue)('backgroundColor', 'desktop', 'hoverState', atts)
        }
      }, 'desktop');
      setUpdateCss({
        settingId: 'backgroundColor',
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getColorPickerSettingValue)('backgroundColor', 'desktop', 'defaultState', atts)
      });
    },
    hoverStateOnChangeComplete: value => {
      updateAttribute('backgroundColor', {
        value: {
          defaultState: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getColorPickerSettingValue)('backgroundColor', 'desktop', 'defaultState', atts),
          hoverState: value.hex
        }
      }, 'desktop');
      setUpdateCss({
        settingId: 'backgroundColor',
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getColorPickerSettingValue)('backgroundColor', 'desktop', 'hoverState', atts)
      });
    },
    onClickReset: () => {
      updateAttribute('backgroundColor', {
        value: {
          defaultState: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getColorPickerSettingDefaultValue)('backgroundColor', 'desktop', 'defaultState', attributesDefaults),
          hoverState: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getColorPickerSettingDefaultValue)('backgroundColor', 'desktop', 'hoverState', attributesDefaults)
        }
      }, 'desktop');
      setUpdateCss({
        settingId: 'backgroundColor',
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getColorPickerSettingDefaultValue)('backgroundColor', 'desktop', 'defaultState', attributesDefaults)
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color', 'botiga-pro'),
    initialOpen: false,
    opened: isPanelOpened('color'),
    onToggle: () => onTogglePanelBodyHandler('color')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_editor_controls_color_picker_color_picker__WEBPACK_IMPORTED_MODULE_13__.ColorPicker, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Color', 'athemes-blocks'),
    value: textColor,
    hover: true,
    responsive: false,
    reset: true,
    defaultStateOnChangeComplete: value => {
      updateAttribute('textColor', {
        value: {
          defaultState: value.hex,
          hoverState: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getColorPickerSettingValue)('textColor', 'desktop', 'hoverState', atts)
        }
      }, 'desktop');
      setUpdateCss({
        settingId: 'textColor',
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getColorPickerSettingValue)('textColor', 'desktop', 'defaultState', atts)
      });
    },
    hoverStateOnChangeComplete: value => {
      updateAttribute('textColor', {
        value: {
          defaultState: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getColorPickerSettingValue)('textColor', 'desktop', 'defaultState', atts),
          hoverState: value.hex
        }
      }, 'desktop');
      setUpdateCss({
        settingId: 'textColor',
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getColorPickerSettingValue)('textColor', 'desktop', 'hoverState', atts)
      });
    },
    onClickReset: () => {
      updateAttribute('textColor', {
        value: {
          defaultState: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getColorPickerSettingDefaultValue)('textColor', 'desktop', 'defaultState', attributesDefaults),
          hoverState: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getColorPickerSettingDefaultValue)('textColor', 'desktop', 'hoverState', attributesDefaults)
        }
      }, 'desktop');
      setUpdateCss({
        settingId: 'textColor',
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getColorPickerSettingDefaultValue)('textColor', 'desktop', 'defaultState', attributesDefaults)
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_editor_controls_color_picker_color_picker__WEBPACK_IMPORTED_MODULE_13__.ColorPicker, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Link Color', 'athemes-blocks'),
    value: linkColor,
    hover: true,
    responsive: false,
    reset: true,
    defaultStateOnChangeComplete: value => {
      updateAttribute('linkColor', {
        value: {
          defaultState: value.hex,
          hoverState: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getColorPickerSettingValue)('linkColor', 'desktop', 'hoverState', atts)
        }
      }, 'desktop');
      setUpdateCss({
        settingId: 'linkColor',
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getColorPickerSettingValue)('linkColor', 'desktop', 'defaultState', atts)
      });
    },
    hoverStateOnChangeComplete: value => {
      updateAttribute('linkColor', {
        value: {
          defaultState: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getColorPickerSettingValue)('linkColor', 'desktop', 'defaultState', atts),
          hoverState: value.hex
        }
      }, 'desktop');
      setUpdateCss({
        settingId: 'linkColor',
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getColorPickerSettingValue)('linkColor', 'desktop', 'hoverState', atts)
      });
    },
    onClickReset: () => {
      updateAttribute('linkColor', {
        value: {
          defaultState: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getColorPickerSettingDefaultValue)('linkColor', 'desktop', 'defaultState', attributesDefaults),
          hoverState: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getColorPickerSettingDefaultValue)('linkColor', 'desktop', 'hoverState', attributesDefaults)
        }
      }, 'desktop');
      setUpdateCss({
        settingId: 'linkColor',
        value: (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__.getColorPickerSettingDefaultValue)('linkColor', 'desktop', 'defaultState', attributesDefaults)
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border', 'botiga-pro'),
    initialOpen: false,
    opened: isPanelOpened('border'),
    onToggle: () => onTogglePanelBodyHandler('border')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_editor_controls_border_border__WEBPACK_IMPORTED_MODULE_14__.Border, {
    label: "",
    settingId: "border",
    attributes: atts,
    setAttributes: setAttributes,
    attributesDefaults: attributesDefaults,
    setUpdateCss: setUpdateCss,
    subFields: ['borderStyle', 'borderWidth', 'borderRadius', 'borderColor']
  })))), (() => {
    const Tag = htmlTag;
    let blockPropsClassName = `at-block at-block-flex-container at-block-flex-container--container-${containerWidth}`;
    if (layout === 'flex' && childrenWidth === 'equal') {
      blockPropsClassName += ' at-block-flex-container--children-w-equal';
    } else if (layout === 'flex' && childrenWidth === 'auto') {
      blockPropsClassName += ' at-block-flex-container--children-w-auto';
    }
    let blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps)({
      className: blockPropsClassName
    });

    // Add link properties if the tag is 'a'.
    if (htmlTag === 'a' && htmlTagLink) {
      blockProps.href = htmlTagLink;
      if (htmlTagLinkOpenInNewWindow) {
        blockProps.target = '_blank';
      }
    }
    if (hasInnerBlocks) {
      blockProps.className += ' has-inner-blocks';
    }
    if (hideOnDesktop) {
      blockProps.className += ' atb-hide-desktop';
    }
    if (hideOnTablet) {
      blockProps.className += ' atb-hide-tablet';
    }
    if (hideOnMobile) {
      blockProps.className += ' atb-hide-mobile';
    }
    if (isChildOfFlexContainer) {
      blockProps.className += ' is-child-container';
    }

    // Animation.
    blockProps = (0,_utils_block_animations__WEBPACK_IMPORTED_MODULE_20__.blockPropsWithAnimation)(blockProps, attributes);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tag, {
      ...blockProps,
      ref: (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__.useMergeRefs)([blockProps.ref, blockRef])
    }, !hasInnerBlocks && !selectedLayout && !isChildOfFlexContainer ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_layout_selector__WEBPACK_IMPORTED_MODULE_22__["default"], {
      onSelect: handleLayoutSelect
    }) : containerWidth === 'full-width' && contentWidth === 'boxed' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "at-block-flex-container__inner-blocks-wrapper"
    }, innerBlocks) : innerBlocks);
  })());
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_block_editor_hoc_with_dynamic_css__WEBPACK_IMPORTED_MODULE_18__.withDynamicCSS)((0,_block_editor_hoc_with_tabs_navigation__WEBPACK_IMPORTED_MODULE_16__.withTabsNavigation)((0,_block_editor_hoc_with_persistent_panel_toggle__WEBPACK_IMPORTED_MODULE_19__.withPersistentPanelToggle)((0,_block_editor_hoc_with_advanced_tab__WEBPACK_IMPORTED_MODULE_17__.withAdvancedTab)(Edit, attributesDefaults))), attributesDefaults));

/***/ }),

/***/ "./assets/js/src/blocks/FlexContainer/layout-selector.jsx":
/*!****************************************************************!*\
  !*** ./assets/js/src/blocks/FlexContainer/layout-selector.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/grid.js");




const LAYOUTS = [{
  name: '1-column',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('1 Column', 'athemes-blocks'),
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "columns-icon columns-icon--1"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "columns-icon__column"
  })),
  template: [['athemes-blocks/flex-container', {
    padding: {
      desktop: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      tablet: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      mobile: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      }
    }
  }]],
  attributes: {
    direction: {
      desktop: {
        value: 'column'
      },
      tablet: {
        value: 'column'
      },
      mobile: {
        value: 'column'
      }
    },
    childrenWidth: {
      desktop: {
        value: 'equal'
      },
      tablet: {
        value: 'equal'
      },
      mobile: {
        value: 'equal'
      }
    }
  }
}, {
  name: '2-columns',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('2 Columns', 'athemes-blocks'),
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "columns-icon columns-icon--2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "columns-icon__column"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "columns-icon__column"
  })),
  template: [['athemes-blocks/flex-container', {
    padding: {
      desktop: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      tablet: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      mobile: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      }
    }
  }], ['athemes-blocks/flex-container', {
    padding: {
      desktop: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      tablet: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      mobile: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      }
    }
  }]],
  attributes: {
    direction: {
      desktop: {
        value: 'row'
      },
      tablet: {
        value: 'row'
      },
      mobile: {
        value: 'column'
      }
    },
    childrenWidth: {
      desktop: {
        value: 'equal'
      },
      tablet: {
        value: 'equal'
      },
      mobile: {
        value: 'equal'
      }
    }
  }
}, {
  name: '3-columns',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('3 Columns', 'athemes-blocks'),
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "columns-icon columns-icon--3"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "columns-icon__column"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "columns-icon__column"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "columns-icon__column"
  })),
  template: [['athemes-blocks/flex-container', {
    padding: {
      desktop: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      tablet: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      mobile: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      }
    }
  }], ['athemes-blocks/flex-container', {
    padding: {
      desktop: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      tablet: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      mobile: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      }
    }
  }], ['athemes-blocks/flex-container', {
    padding: {
      desktop: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      tablet: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      mobile: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      }
    }
  }]],
  attributes: {
    direction: {
      desktop: {
        value: 'row'
      },
      tablet: {
        value: 'row'
      },
      mobile: {
        value: 'column'
      }
    },
    childrenWidth: {
      desktop: {
        value: 'equal'
      },
      tablet: {
        value: 'equal'
      },
      mobile: {
        value: 'equal'
      }
    }
  }
}, {
  name: '4-columns',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('4 Columns', 'athemes-blocks'),
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "columns-icon columns-icon--4"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "columns-icon__column"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "columns-icon__column"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "columns-icon__column"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "columns-icon__column"
  })),
  template: [['athemes-blocks/flex-container', {
    padding: {
      desktop: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      tablet: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      mobile: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      }
    }
  }], ['athemes-blocks/flex-container', {
    padding: {
      desktop: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      tablet: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      mobile: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      }
    }
  }], ['athemes-blocks/flex-container', {
    padding: {
      desktop: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      tablet: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      mobile: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      }
    }
  }], ['athemes-blocks/flex-container', {
    padding: {
      desktop: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      tablet: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      mobile: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      }
    }
  }]],
  attributes: {
    direction: {
      desktop: {
        value: 'row'
      },
      tablet: {
        value: 'row'
      },
      mobile: {
        value: 'column'
      }
    },
    childrenWidth: {
      desktop: {
        value: 'equal'
      },
      tablet: {
        value: 'equal'
      },
      mobile: {
        value: 'equal'
      }
    }
  }
}, {
  name: '4-columns-grid',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('4 Columns Grid', 'athemes-blocks'),
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "columns-icon columns-icon--4-grid"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "columns-icon__column"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "columns-icon__column"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "columns-icon__column"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "columns-icon__column"
  })),
  template: [['athemes-blocks/flex-container', {
    padding: {
      desktop: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      tablet: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      mobile: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      }
    }
  }], ['athemes-blocks/flex-container', {
    padding: {
      desktop: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      tablet: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      mobile: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      }
    }
  }], ['athemes-blocks/flex-container', {
    padding: {
      desktop: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      tablet: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      mobile: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      }
    }
  }], ['athemes-blocks/flex-container', {
    padding: {
      desktop: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      tablet: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      mobile: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      }
    }
  }]],
  attributes: {
    direction: {
      desktop: {
        value: 'row'
      },
      tablet: {
        value: 'row'
      },
      mobile: {
        value: 'column'
      }
    },
    childrenWidth: {
      desktop: {
        value: 'equal'
      },
      tablet: {
        value: 'equal'
      },
      mobile: {
        value: 'equal'
      }
    }
  }
}, {
  name: '6-columns-grid',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('6 Columns Grid', 'athemes-blocks'),
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "columns-icon columns-icon--6-grid"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "columns-icon__column"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "columns-icon__column"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "columns-icon__column"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "columns-icon__column"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "columns-icon__column"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "columns-icon__column"
  })),
  template: [['athemes-blocks/flex-container', {
    padding: {
      desktop: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      tablet: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      mobile: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      }
    }
  }], ['athemes-blocks/flex-container', {
    padding: {
      desktop: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      tablet: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      mobile: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      }
    }
  }], ['athemes-blocks/flex-container', {
    padding: {
      desktop: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      tablet: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      mobile: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      }
    }
  }], ['athemes-blocks/flex-container', {
    padding: {
      desktop: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      tablet: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      mobile: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      }
    }
  }], ['athemes-blocks/flex-container', {
    padding: {
      desktop: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      tablet: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      mobile: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      }
    }
  }], ['athemes-blocks/flex-container', {
    padding: {
      desktop: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      tablet: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      mobile: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      }
    }
  }]],
  attributes: {
    direction: {
      desktop: {
        value: 'row'
      },
      tablet: {
        value: 'row'
      },
      mobile: {
        value: 'column'
      }
    },
    childrenWidth: {
      desktop: {
        value: 'equal'
      },
      tablet: {
        value: 'equal'
      },
      mobile: {
        value: 'equal'
      }
    }
  }
}, {
  name: '2-columns-left-small',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('2 Columns Left Small', 'athemes-blocks'),
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "columns-icon columns-icon--2-left-small"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "columns-icon__column"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "columns-icon__column"
  })),
  template: [['athemes-blocks/flex-container', {
    customWidth: {
      desktop: {
        value: 25,
        unit: '%'
      },
      tablet: {
        value: 25,
        unit: '%'
      },
      mobile: {
        value: 100,
        unit: '%'
      }
    },
    padding: {
      desktop: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      tablet: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      mobile: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      }
    }
  }], ['athemes-blocks/flex-container', {
    customWidth: {
      desktop: {
        value: 75,
        unit: '%'
      },
      tablet: {
        value: 75,
        unit: '%'
      },
      mobile: {
        value: 100,
        unit: '%'
      }
    },
    padding: {
      desktop: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      tablet: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      mobile: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      }
    }
  }]],
  attributes: {
    direction: {
      desktop: {
        value: 'row'
      },
      tablet: {
        value: 'row'
      },
      mobile: {
        value: 'column'
      }
    },
    childrenWidth: {
      desktop: {
        value: 'equal'
      },
      tablet: {
        value: 'equal'
      },
      mobile: {
        value: 'equal'
      }
    }
  }
}, {
  name: '3-columns-left-right-small',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('3 Columns Left Right Small', 'athemes-blocks'),
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "columns-icon columns-icon--3-left-right-small"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "columns-icon__column"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "columns-icon__column"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "columns-icon__column"
  })),
  template: [['athemes-blocks/flex-container', {
    customWidth: {
      desktop: {
        value: 25,
        unit: '%'
      },
      tablet: {
        value: 25,
        unit: '%'
      },
      mobile: {
        value: 100,
        unit: '%'
      }
    },
    padding: {
      desktop: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      tablet: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      mobile: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      }
    }
  }], ['athemes-blocks/flex-container', {
    customWidth: {
      desktop: {
        value: 50,
        unit: '%'
      },
      tablet: {
        value: 50,
        unit: '%'
      },
      mobile: {
        value: 100,
        unit: '%'
      }
    },
    padding: {
      desktop: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      tablet: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      mobile: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      }
    }
  }], ['athemes-blocks/flex-container', {
    customWidth: {
      desktop: {
        value: 25,
        unit: '%'
      },
      tablet: {
        value: 25,
        unit: '%'
      },
      mobile: {
        value: 100,
        unit: '%'
      }
    },
    padding: {
      desktop: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      tablet: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      mobile: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      }
    }
  }]],
  attributes: {
    direction: {
      desktop: {
        value: 'row'
      },
      tablet: {
        value: 'row'
      },
      mobile: {
        value: 'column'
      }
    },
    childrenWidth: {
      desktop: {
        value: 'equal'
      },
      tablet: {
        value: 'equal'
      },
      mobile: {
        value: 'equal'
      }
    }
  }
}, {
  name: '2-columns-right-small',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('2 Columns Right Small', 'athemes-blocks'),
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "columns-icon columns-icon--2-right-small"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "columns-icon__column"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "columns-icon__column"
  })),
  template: [['athemes-blocks/flex-container', {
    customWidth: {
      desktop: {
        value: 75,
        unit: '%'
      },
      tablet: {
        value: 75,
        unit: '%'
      },
      mobile: {
        value: 100,
        unit: '%'
      }
    },
    padding: {
      desktop: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      tablet: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      mobile: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      }
    }
  }], ['athemes-blocks/flex-container', {
    customWidth: {
      desktop: {
        value: 25,
        unit: '%'
      },
      tablet: {
        value: 25,
        unit: '%'
      },
      mobile: {
        value: 100,
        unit: '%'
      }
    },
    padding: {
      desktop: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      tablet: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      mobile: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      }
    }
  }]],
  attributes: {
    direction: {
      desktop: {
        value: 'row'
      },
      tablet: {
        value: 'row'
      },
      mobile: {
        value: 'column'
      }
    },
    childrenWidth: {
      desktop: {
        value: 'equal'
      },
      tablet: {
        value: 'equal'
      },
      mobile: {
        value: 'equal'
      }
    }
  }
}, {
  name: '3-columns-top-small',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('3 Columns Top Small', 'athemes-blocks'),
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "columns-icon columns-icon--3-top-small"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "columns-icon__column"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "columns-icon__column"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "columns-icon__column"
  })),
  template: [['athemes-blocks/flex-container', {
    padding: {
      desktop: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      tablet: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      mobile: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      }
    }
  }], ['athemes-blocks/flex-container', {
    padding: {
      desktop: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      tablet: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      mobile: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      }
    }
  }], ['athemes-blocks/flex-container', {
    padding: {
      desktop: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      tablet: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      },
      mobile: {
        value: {
          top: '',
          right: 15,
          bottom: '',
          left: 15
        },
        unit: 'px',
        connect: false
      }
    }
  }]],
  attributes: {
    direction: {
      desktop: {
        value: 'row'
      },
      tablet: {
        value: 'row'
      },
      mobile: {
        value: 'column'
      }
    },
    childrenWidth: {
      desktop: {
        value: 'equal'
      },
      tablet: {
        value: 'equal'
      },
      mobile: {
        value: 'equal'
      }
    }
  }
}];
const LayoutSelector = ({
  onSelect
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "at-block-flex-container__layout-selector"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "at-block-flex-container__layout-selector-title"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_2__["default"], {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Flex Container', 'athemes-blocks'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "at-block-flex-container__layout-selector-description"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select a container layout to get started.', 'athemes-blocks')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "at-block-flex-container__layout-selector-grid"
  }, LAYOUTS.map(layout => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    key: layout.name,
    className: "at-block-flex-container__layout-selector-item",
    onClick: () => onSelect(layout)
  }, layout.content))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayoutSelector);

/***/ }),

/***/ "./assets/js/src/blocks/FlexContainer/save.jsx":
/*!*****************************************************!*\
  !*** ./assets/js/src/blocks/FlexContainer/save.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function save() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null);
}

/***/ }),

/***/ "./assets/js/src/utils/block-animations.jsx":
/*!**************************************************!*\
  !*** ./assets/js/src/utils/block-animations.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockPropsWithAnimation: () => (/* binding */ blockPropsWithAnimation),
/* harmony export */   getBlockAnimationProps: () => (/* binding */ getBlockAnimationProps)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/settings */ "./assets/js/src/utils/settings.jsx");



/**
 * Extend block props with animation classes and attributes
 * 
 * @param {Object} blockProps Block properties
 * @param {Object} attributes Block attributes
 * @returns {Object} Extended block properties
 */
const blockPropsWithAnimation = (blockProps, attributes) => {
  const {
    animation
  } = attributes;
  if (!animation) {
    return blockProps;
  }
  const currentDevice = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => select('core/edit-post').__experimentalGetPreviewDeviceType().toLowerCase());
  const entranceAnimation = (0,_utils_settings__WEBPACK_IMPORTED_MODULE_1__.getInnerSettingValue)('animation', 'entranceAnimation', currentDevice, attributes);
  const animationDuration = (0,_utils_settings__WEBPACK_IMPORTED_MODULE_1__.getInnerSettingValue)('animation', 'animationDuration', currentDevice, attributes);
  const animationDelay = (0,_utils_settings__WEBPACK_IMPORTED_MODULE_1__.getInnerSettingValue)('animation', 'animationDelay', currentDevice, attributes);
  if (entranceAnimation === 'default') {
    return blockProps;
  }
  if (entranceAnimation) {
    blockProps['data-atb-animation'] = `${entranceAnimation}`;
    blockProps.className += ` atb-animation-${entranceAnimation}`;
  }
  if (animationDuration) {
    blockProps.className += ` atb-animation-duration-${animationDuration}`;
  }
  if (animationDelay) {
    blockProps['data-atb-animation-delay'] = `${animationDelay}ms`;
  }
  return blockProps;
};

/**
 * Get animation classes and attributes for a block
 * 
 * @param {Object} attributes Block attributes
 * @returns {Object} Object containing classes and attributes
 */
const getBlockAnimationProps = attributes => {
  const {
    entranceAnimation,
    animationDuration,
    animationDelay
  } = attributes;
  const classes = [];
  const attrs = {};

  // Add animation class if set
  if (entranceAnimation) {
    classes.push(`has-animation-${entranceAnimation}`);
  }

  // Add duration if set
  if (animationDuration) {
    attrs['data-animation-duration'] = `${animationDuration}ms`;
  }

  // Add delay if set
  if (animationDelay) {
    attrs['data-animation-delay'] = `${animationDelay}ms`;
  }
  return {
    classes: classes.join(' '),
    attributes: attrs
  };
};

/***/ }),

/***/ "./assets/js/src/utils/block-attributes.jsx":
/*!**************************************************!*\
  !*** ./assets/js/src/utils/block-attributes.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAttributeUpdater: () => (/* binding */ createAttributeUpdater),
/* harmony export */   createInnerControlAttributeUpdater: () => (/* binding */ createInnerControlAttributeUpdater)
/* harmony export */ });
/**
 * A curried function to update attributes.
 *
 * @param {Object} attributes - The current attributes object.
 * @param {Function} setAttributes - The setAttributes function from the block editor.
 * 
 * @returns {Function} - A function that updates a specific attribute.
 */
const createAttributeUpdater = (attributes, setAttributes) => {
  return (settingId, value, device = null) => {
    const valueIsObject = typeof value === 'object';

    // Update the attribute for the current device
    if (device) {
      setAttributes({
        [settingId]: {
          ...attributes[settingId],
          [device]: valueIsObject ? {
            ...attributes[settingId][device].value,
            ...value
          } : value
        }
      });
      return;
    }

    // Update the attribute for all devices
    if (valueIsObject) {
      setAttributes({
        [settingId]: {
          ...attributes[settingId].value,
          ...value
        }
      });
      return;
    }
    setAttributes({
      [settingId]: value
    });
  };
};

/**
 * A curried function to update inner control attributes.
 * 
 * @param {string} settingId - The ID of the inner control attribute.
 * @param {Object} attributes - The current attributes object.
 * @param {Function} setAttributes - The setAttributes function from the block editor.
 * 
 * @returns {Function} - A function that updates a specific inner control attribute.
 */
const createInnerControlAttributeUpdater = (settingId, attributes, setAttributes) => {
  return (innerSettingId, value, device = null) => {
    const valueIsObject = typeof value === 'object';

    // Update the attribute for the current device
    if (device) {
      setAttributes({
        [settingId]: {
          innerSettings: {
            ...attributes[settingId]?.innerSettings,
            [innerSettingId]: {
              ...attributes[settingId]?.innerSettings[innerSettingId],
              ...{
                default: {
                  ...attributes[settingId]?.innerSettings[innerSettingId]?.default,
                  [device]: valueIsObject && value?.value ? {
                    ...attributes[settingId]?.innerSettings[innerSettingId]?.default[device],
                    ...value
                  } : valueIsObject && !value?.value ? {
                    ...attributes[settingId]?.innerSettings[innerSettingId]?.default[device],
                    value: {
                      ...attributes[settingId]?.innerSettings[innerSettingId]?.default[device].value,
                      ...value
                    }
                  } : {
                    ...attributes[settingId]?.innerSettings[innerSettingId]?.default[device],
                    value
                  }
                }
              }
            }
          }
        }
      });
      return;
    }

    // Update the attribute for all devices
    if (valueIsObject) {
      setAttributes({
        [settingId]: {
          ...attributes[settingId].innerSettings,
          [innerSettingId]: {
            ...attributes[settingId].innerSettings[innerSettingId].default[device].value,
            ...value
          }
        }
      });
      return;
    }
    setAttributes({
      [settingId]: {
        ...attributes[settingId],
        innerSettings: {
          ...attributes[settingId].innerSettings,
          [innerSettingId]: {
            ...attributes[settingId].innerSettings[innerSettingId],
            default: value
          }
        }
      }
    });
  };
};

/***/ }),

/***/ "./assets/js/src/utils/css.jsx":
/*!*************************************!*\
  !*** ./assets/js/src/utils/css.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyPreviewCSS: () => (/* binding */ applyPreviewCSS),
/* harmony export */   getControlCSS: () => (/* binding */ getControlCSS)
/* harmony export */ });
/**
 * Apply the CSS to the block preview. 
 * This will append the CSS to the block editor iframe.
 * 
 * @param {string} css - The CSS to apply.
 * @param {string} clientId - The client ID of the block.
 * @param {string} settingId - The ID of the setting.
 * 
 * @returns {void}
 */
function applyPreviewCSS(css, clientId, settingId, innerSettingId = null) {
  const blockIframe = document.querySelector(`iframe[name="editor-canvas"]`);
  const styleTagId = innerSettingId ? `athemes-blocks-editor-preview-css-${settingId}-${innerSettingId}-${clientId}` : `athemes-blocks-editor-preview-css-${settingId}-${clientId}`;
  const applyCss = doc => {
    if (!doc) return;
    let styleTag = doc.getElementById(styleTagId);
    if (!styleTag) {
      styleTag = doc.createElement('style');
      styleTag.id = styleTagId;
      doc.head.appendChild(styleTag);
    }
    styleTag.innerHTML = css;
  };
  if (blockIframe?.contentDocument) {
    applyCss(blockIframe.contentDocument);
  } else {
    applyCss(document);
  }
}
;

/**
 * Get the CSS for a control.
 * 
 * @param {Object} cssData - The CSS data.
 * @param {string} clientId - The client ID of the block.
 * @param {Object} attributes - The block attributes.
 * 
 * @returns {string} - The CSS for the control.
 */
function getControlCSS(cssData, clientId, attributes) {
  if (!cssData.css) {
    return '';
  }
  const {
    selectors,
    property,
    important = false
  } = cssData.css;
  const settingId = cssData.settingId;
  const innerSettingId = cssData?.innerSettingId;

  // Ensure the keys are always in this order. It is crucial for the CSS to work correctly.
  const sortedKeys = ['desktop', 'tablet', 'mobile'];
  const sortedAttributeValue = {};
  sortedKeys.forEach(key => {
    if (innerSettingId) {
      sortedAttributeValue[key] = attributes[settingId].innerSettings[innerSettingId].default[key];
    } else {
      sortedAttributeValue[key] = attributes[settingId][key];
    }
  });
  const isColorPicker = ['defaultState', 'hoverState'].some(prop => Object.prototype.hasOwnProperty.call(sortedAttributeValue.desktop.value, prop));
  const isDimensions = ['top', 'right', 'bottom', 'left'].some(prop => Object.prototype.hasOwnProperty.call(sortedAttributeValue.desktop.value, prop));
  const isBorderRadius = property.indexOf('-radius') !== -1;

  // Generate the CSS for each device.
  let css = '';
  for (const device in sortedAttributeValue) {
    if (sortedAttributeValue[device]) {
      const valueIsObject = typeof sortedAttributeValue[device].value === 'object';
      const unit = sortedAttributeValue[device].unit ? sortedAttributeValue[device].unit : '';
      if (sortedAttributeValue[device].value === '') {
        continue;
      }
      if (isColorPicker && valueIsObject) {
        if (sortedAttributeValue[device].value.defaultState === '' && sortedAttributeValue[device].value.hoverState === '') {
          continue;
        }
      }
      if (isDimensions && valueIsObject) {
        if (sortedAttributeValue[device].value.top === '' && sortedAttributeValue[device].value.right === '' && sortedAttributeValue[device].value.bottom === '' && sortedAttributeValue[device].value.left === '') {
          continue;
        }
      }
      const selectors_is_key_value_pair = selectors instanceof Object && selectors !== null && !Array.isArray(selectors);
      if (selectors_is_key_value_pair) {
        for (const [selector, selectorValue] of Object.entries(selectors)) {
          const replacedSelector = selector.replace('{{WRAPPER}}', `.wp-block[data-block="${clientId}"]`);
          let replacedSelectorValue = selectorValue.replace('{{VALUE}}', sortedAttributeValue[device].value).replace('{{UNIT}}', unit);
          if (isColorPicker) {
            replacedSelectorValue = selectorValue.replace('{{VALUE}}', sortedAttributeValue[device].value.defaultState).replace('{{HOVER}}', sortedAttributeValue[device].value.hoverState);
          }
          if (device === 'desktop') {
            if (valueIsObject) {
              if (isColorPicker) {
                css += `${replacedSelector} { ${property}: ${replacedSelectorValue}${important ? '!important' : ''}; }`;
              }
            } else {
              css += `${replacedSelector} { ${property}: ${replacedSelectorValue}${important ? '!important' : ''}; }`;
            }
          } else if (device === 'tablet') {
            if (valueIsObject) {
              if (isColorPicker) {
                css += `@media (max-width: 1024px) { ${replacedSelector} { ${property}: ${replacedSelectorValue}${important ? '!important' : ''}; } }`;
              }
            } else {
              css += `@media (max-width: 1024px) { ${replacedSelector} { ${property}: ${replacedSelectorValue}${important ? '!important' : ''}; } }`;
            }
          } else if (device === 'mobile') {
            if (valueIsObject) {
              if (isColorPicker) {
                css += `@media (max-width: 767px) { ${replacedSelector} { ${property}: ${replacedSelectorValue}${important ? '!important' : ''}; } }`;
              }
            } else {
              css += `@media (max-width: 767px) { ${replacedSelector} { ${property}: ${replacedSelectorValue}${important ? '!important' : ''}; } }`;
            }
          }
        }
      } else {
        if (device === 'desktop') {
          selectors.forEach(selector => {
            if (isColorPicker) {
              css += `${selector} { ${property}: ${sortedAttributeValue[device].value.defaultState}${important ? '!important' : ''}; }`;
              css += `${selector}:hover { ${property}: ${sortedAttributeValue[device].value.hoverState}${important ? '!important' : ''}; }`;
            } else if (isDimensions) {
              let replacedProperty = '';
              Object.entries(sortedAttributeValue[device].value).forEach(([direction, directionValue]) => {
                if (directionValue === '') {
                  return;
                }
                replacedProperty = property.replace('{{DIRECTION}}', direction);
                if (isBorderRadius) {
                  if (direction === 'top') {
                    replacedProperty = replacedProperty.replace('top', 'top-left');
                  } else if (direction === 'right') {
                    replacedProperty = replacedProperty.replace('right', 'top-right');
                  } else if (direction === 'bottom') {
                    replacedProperty = replacedProperty.replace('bottom', 'bottom-right');
                  } else if (direction === 'left') {
                    replacedProperty = replacedProperty.replace('left', 'bottom-left');
                  }
                }
                css += `${selector} { ${replacedProperty}: ${directionValue}${unit}${important ? '!important' : ''}; }`;
              });
            } else {
              css += `${selector} { ${property}: ${sortedAttributeValue[device].value}${unit}${important ? '!important' : ''}; }`;
            }
          });
        }
        if (device === 'tablet') {
          selectors.forEach(selector => {
            if (isColorPicker) {
              css += `@media (max-width: 1024px) { ${selector} { ${property}: ${sortedAttributeValue[device].value.defaultState}${important ? '!important' : ''}; } }`;
              css += `@media (max-width: 1024px) { ${selector}:hover { ${property}: ${sortedAttributeValue[device].value.hoverState}${important ? '!important' : ''}; } }`;
            } else if (isDimensions) {
              let replacedProperty = '';
              Object.entries(sortedAttributeValue[device].value).forEach(([direction, directionValue]) => {
                if (directionValue === '') {
                  return;
                }
                replacedProperty = property.replace('{{DIRECTION}}', direction);
                if (isBorderRadius) {
                  if (direction === 'top') {
                    replacedProperty = replacedProperty.replace('top', 'top-left');
                  } else if (direction === 'right') {
                    replacedProperty = replacedProperty.replace('right', 'top-right');
                  } else if (direction === 'bottom') {
                    replacedProperty = replacedProperty.replace('bottom', 'bottom-right');
                  } else if (direction === 'left') {
                    replacedProperty = replacedProperty.replace('left', 'bottom-left');
                  }
                }
                css += `@media (max-width: 1024px) { ${selector} { ${replacedProperty}: ${directionValue}${unit}${important ? '!important' : ''}; } }`;
              });
            } else {
              css += `@media (max-width: 1024px) { ${selector} { ${property}: ${sortedAttributeValue[device].value}${unit}${important ? '!important' : ''}; } }`;
            }
          });
        }
        if (device === 'mobile') {
          selectors.forEach(selector => {
            if (isColorPicker) {
              css += `@media (max-width: 767px) { ${selector} { ${property}: ${sortedAttributeValue[device].value.defaultState}${important ? '!important' : ''}; } }`;
              css += `@media (max-width: 767px) { ${selector}:hover { ${property}: ${sortedAttributeValue[device].value.hoverState}${important ? '!important' : ''}; } }`;
            } else if (isDimensions) {
              let replacedProperty = '';
              Object.entries(sortedAttributeValue[device].value).forEach(([direction, directionValue]) => {
                if (directionValue === '') {
                  return;
                }
                replacedProperty = property.replace('{{DIRECTION}}', direction);
                if (isBorderRadius) {
                  if (direction === 'top') {
                    replacedProperty = replacedProperty.replace('top', 'top-left');
                  } else if (direction === 'right') {
                    replacedProperty = replacedProperty.replace('right', 'top-right');
                  } else if (direction === 'bottom') {
                    replacedProperty = replacedProperty.replace('bottom', 'bottom-right');
                  } else if (direction === 'left') {
                    replacedProperty = replacedProperty.replace('left', 'bottom-left');
                  }
                }
                css += `@media (max-width: 767px) { ${selector} { ${replacedProperty}: ${directionValue}${unit}${important ? '!important' : ''}; } }`;
              });
            } else {
              css += `@media (max-width: 767px) { ${selector} { ${property}: ${sortedAttributeValue[device].value}${unit}${important ? '!important' : ''}; } }`;
            }
          });
        }
      }
    }
  }

  // Replace {{WRAPPER}} with the block's selector.
  css = css.replace(/{{WRAPPER}}/g, `.wp-block[data-block="${clientId}"]`);
  return css;
}

/***/ }),

/***/ "./assets/js/src/utils/icons.jsx":
/*!***************************************!*\
  !*** ./assets/js/src/utils/icons.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   icons: () => (/* binding */ icons)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/icon/index.js");


const icons = {
  general: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_1__["default"], {
    icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M17 1H3C1.89543 1 1 1.89543 1 3V17C1 18.1046 1.89543 19 3 19H17C18.1046 19 19 18.1046 19 17V3C19 1.89543 18.1046 1 17 1Z",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M1 7H19",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M7 19V7",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  }),
  style: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_1__["default"], {
    icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M13.2647 1.00654C13.6449 0.904684 14.0415 0.87872 14.4317 0.930132C14.822 0.981544 15.1983 1.10932 15.5392 1.30617C15.8801 1.50303 16.1788 1.76509 16.4184 2.07741C16.658 2.38973 16.8337 2.74618 16.9355 3.12642L19.8979 14.1803C19.9998 14.5605 20.0257 14.9571 19.9743 15.3473C19.9229 15.7376 19.7951 16.1139 19.5983 16.4548C19.4014 16.7956 19.1393 17.0944 18.827 17.334C18.5147 17.5736 18.1583 17.7493 17.778 17.8511L10.9367 19.6854C10.5563 19.7876 10.1595 19.8138 9.76901 19.7626C9.3785 19.7113 9.00193 19.5836 8.66081 19.3867C8.3197 19.1898 8.02073 18.9277 7.78099 18.6152C7.54126 18.3027 7.36547 17.946 7.26366 17.5655L4.30238 6.51168C4.20052 6.13145 4.17456 5.73489 4.22597 5.34463C4.27738 4.95438 4.40516 4.57807 4.60201 4.2372C4.79886 3.89633 5.06093 3.59757 5.37325 3.35798C5.68557 3.1184 6.04202 2.94268 6.42225 2.84086L13.2647 1.00654ZM4.29148 10.686L6.2119 17.8467C6.40058 18.5566 6.77796 19.2022 7.30399 19.7148L6.82116 19.6887C6.02742 19.647 5.28274 19.2917 4.75091 18.701C4.21908 18.1104 3.94365 17.3326 3.98521 16.5389L4.29148 10.686ZM13.6876 2.58582L6.84514 4.42123C6.49632 4.51473 6.1989 4.7429 6.01824 5.05559C5.83757 5.36827 5.78845 5.7399 5.88166 6.08879L8.84294 17.1438C8.88923 17.3166 8.96912 17.4786 9.07803 17.6206C9.18694 17.7625 9.32275 17.8816 9.47771 17.9711C9.63266 18.0606 9.80372 18.1187 9.98111 18.142C10.1585 18.1654 10.3388 18.1535 10.5116 18.1072L17.3551 16.2729C17.704 16.1794 18.0014 15.9512 18.182 15.6386C18.3627 15.3259 18.4118 14.9542 18.3186 14.6054L15.3562 3.5493C15.2627 3.20049 15.0346 2.90307 14.7219 2.7224C14.4092 2.54174 14.0376 2.49261 13.6887 2.58582H13.6876ZM3.28331 9.07515L2.89639 16.4822C2.85606 17.2429 3.02718 17.9666 3.35851 18.5966L2.90729 18.4211C2.53979 18.2801 2.20368 18.068 1.91814 17.7971C1.63259 17.5262 1.40322 17.2016 1.2431 16.842C1.08299 16.4824 0.995278 16.0948 0.984975 15.7013C0.974671 15.3078 1.04198 14.9162 1.18305 14.5487L3.28331 9.07515ZM8.58354 5.64629C8.72181 5.60922 8.86602 5.59974 9.00794 5.6184C9.14987 5.63707 9.28672 5.6835 9.4107 5.75505C9.53468 5.82661 9.64335 5.92188 9.73051 6.03543C9.81767 6.14898 9.88161 6.27859 9.91868 6.41685C9.95575 6.55512 9.96523 6.69933 9.94657 6.84125C9.9279 6.98318 9.88147 7.12003 9.80992 7.24401C9.73836 7.36799 9.64309 7.47667 9.52954 7.56382C9.41599 7.65098 9.28638 7.71492 9.14812 7.75199C9.00985 7.78906 8.86564 7.79854 8.72372 7.77988C8.5818 7.76122 8.44494 7.71478 8.32096 7.64323C8.07057 7.49872 7.88784 7.26066 7.81298 6.98143C7.73811 6.70219 7.77723 6.40466 7.92174 6.15427C8.06625 5.90388 8.30431 5.72115 8.58354 5.64629Z"
    }))
  }),
  advanced: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_1__["default"], {
    icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 22 22",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M11 13.7273C12.5062 13.7273 13.7273 12.5062 13.7273 11C13.7273 9.49377 12.5062 8.27273 11 8.27273C9.49375 8.27273 8.27271 9.49377 8.27271 11C8.27271 12.5062 9.49375 13.7273 11 13.7273Z",
      strokeWidth: "1.6",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M17.7273 13.7273C17.6063 14.0015 17.5702 14.3056 17.6236 14.6005C17.6771 14.8954 17.8177 15.1676 18.0273 15.3818L18.0818 15.4364C18.2509 15.6052 18.385 15.8057 18.4765 16.0265C18.568 16.2472 18.6151 16.4838 18.6151 16.7227C18.6151 16.9617 18.568 17.1983 18.4765 17.419C18.385 17.6397 18.2509 17.8402 18.0818 18.0091C17.913 18.1781 17.7124 18.3122 17.4917 18.4037C17.271 18.4952 17.0344 18.5423 16.7955 18.5423C16.5565 18.5423 16.3199 18.4952 16.0992 18.4037C15.8785 18.3122 15.678 18.1781 15.5091 18.0091L15.4545 17.9545C15.2403 17.745 14.9682 17.6044 14.6733 17.5509C14.3784 17.4974 14.0742 17.5335 13.8 17.6545C13.5311 17.7698 13.3018 17.9611 13.1403 18.205C12.9788 18.4489 12.8921 18.7347 12.8909 19.0273V19.1818C12.8909 19.664 12.6994 20.1265 12.3584 20.4675C12.0174 20.8084 11.5549 21 11.0727 21C10.5905 21 10.1281 20.8084 9.78708 20.4675C9.4461 20.1265 9.25455 19.664 9.25455 19.1818V19.1C9.24751 18.7991 9.15011 18.5073 8.97501 18.2625C8.79991 18.0176 8.55521 17.8312 8.27273 17.7273C7.99853 17.6063 7.69437 17.5702 7.39947 17.6236C7.10456 17.6771 6.83244 17.8177 6.61818 18.0273L6.56364 18.0818C6.39478 18.2509 6.19425 18.385 5.97353 18.4765C5.7528 18.568 5.51621 18.6151 5.27727 18.6151C5.03834 18.6151 4.80174 18.568 4.58102 18.4765C4.36029 18.385 4.15977 18.2509 3.99091 18.0818C3.82186 17.913 3.68775 17.7124 3.59626 17.4917C3.50476 17.271 3.45766 17.0344 3.45766 16.7955C3.45766 16.5565 3.50476 16.3199 3.59626 16.0992C3.68775 15.8785 3.82186 15.678 3.99091 15.5091L4.04545 15.4545C4.25503 15.2403 4.39562 14.9682 4.4491 14.6733C4.50257 14.3784 4.46647 14.0742 4.34545 13.8C4.23022 13.5311 4.03887 13.3018 3.79497 13.1403C3.55107 12.9788 3.26526 12.8921 2.97273 12.8909H2.81818C2.33597 12.8909 1.87351 12.6994 1.53253 12.3584C1.19156 12.0174 1 11.5549 1 11.0727C1 10.5905 1.19156 10.1281 1.53253 9.78708C1.87351 9.4461 2.33597 9.25455 2.81818 9.25455H2.9C3.2009 9.24751 3.49273 9.15011 3.73754 8.97501C3.98236 8.79991 4.16883 8.55521 4.27273 8.27273C4.39374 7.99853 4.42984 7.69437 4.37637 7.39947C4.3229 7.10456 4.18231 6.83244 3.97273 6.61818L3.91818 6.56364C3.74913 6.39478 3.61503 6.19425 3.52353 5.97353C3.43203 5.7528 3.38493 5.51621 3.38493 5.27727C3.38493 5.03834 3.43203 4.80174 3.52353 4.58102C3.61503 4.36029 3.74913 4.15977 3.91818 3.99091C4.08704 3.82186 4.28757 3.68775 4.50829 3.59626C4.72901 3.50476 4.96561 3.45766 5.20455 3.45766C5.44348 3.45766 5.68008 3.50476 5.9008 3.59626C6.12152 3.68775 6.32205 3.82186 6.49091 3.99091L6.54545 4.04545C6.75971 4.25503 7.03183 4.39562 7.32674 4.4491C7.62164 4.50257 7.9258 4.46647 8.2 4.34545H8.27273C8.54161 4.23022 8.77092 4.03887 8.93245 3.79497C9.09397 3.55107 9.18065 3.26526 9.18182 2.97273V2.81818C9.18182 2.33597 9.37338 1.87351 9.71435 1.53253C10.0553 1.19156 10.5178 1 11 1C11.4822 1 11.9447 1.19156 12.2856 1.53253C12.6266 1.87351 12.8182 2.33597 12.8182 2.81818V2.9C12.8193 3.19253 12.906 3.47834 13.0676 3.72224C13.2291 3.96614 13.4584 4.15749 13.7273 4.27273C14.0015 4.39374 14.3056 4.42984 14.6005 4.37637C14.8954 4.3229 15.1676 4.18231 15.3818 3.97273L15.4364 3.91818C15.6052 3.74913 15.8057 3.61503 16.0265 3.52353C16.2472 3.43203 16.4838 3.38493 16.7227 3.38493C16.9617 3.38493 17.1983 3.43203 17.419 3.52353C17.6397 3.61503 17.8402 3.74913 18.0091 3.91818C18.1781 4.08704 18.3122 4.28757 18.4037 4.50829C18.4952 4.72901 18.5423 4.96561 18.5423 5.20455C18.5423 5.44348 18.4952 5.68008 18.4037 5.9008C18.3122 6.12152 18.1781 6.32205 18.0091 6.49091L17.9545 6.54545C17.745 6.75971 17.6044 7.03183 17.5509 7.32674C17.4974 7.62164 17.5335 7.9258 17.6545 8.2V8.27273C17.7698 8.54161 17.9611 8.77092 18.205 8.93245C18.4489 9.09397 18.7347 9.18065 19.0273 9.18182H19.1818C19.664 9.18182 20.1265 9.37338 20.4675 9.71435C20.8084 10.0553 21 10.5178 21 11C21 11.4822 20.8084 11.9447 20.4675 12.2856C20.1265 12.6266 19.664 12.8182 19.1818 12.8182H19.1C18.8075 12.8193 18.5217 12.906 18.2778 13.0676C18.0339 13.2291 17.8425 13.4584 17.7273 13.7273V13.7273Z",
      strokeWidth: "1.6",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  })
};

/***/ }),

/***/ "./assets/js/src/utils/settings.jsx":
/*!******************************************!*\
  !*** ./assets/js/src/utils/settings.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getColorPickerSettingDefaultValue: () => (/* binding */ getColorPickerSettingDefaultValue),
/* harmony export */   getColorPickerSettingValue: () => (/* binding */ getColorPickerSettingValue),
/* harmony export */   getDimensionsSettingConnectValue: () => (/* binding */ getDimensionsSettingConnectValue),
/* harmony export */   getDimensionsSettingDefaultValue: () => (/* binding */ getDimensionsSettingDefaultValue),
/* harmony export */   getDimensionsSettingDirectionsValue: () => (/* binding */ getDimensionsSettingDirectionsValue),
/* harmony export */   getDimensionsSettingValue: () => (/* binding */ getDimensionsSettingValue),
/* harmony export */   getInnerSettingDefaultUnit: () => (/* binding */ getInnerSettingDefaultUnit),
/* harmony export */   getInnerSettingDefaultValue: () => (/* binding */ getInnerSettingDefaultValue),
/* harmony export */   getInnerSettingValue: () => (/* binding */ getInnerSettingValue),
/* harmony export */   getSettingDefaultUnit: () => (/* binding */ getSettingDefaultUnit),
/* harmony export */   getSettingDefaultValue: () => (/* binding */ getSettingDefaultValue),
/* harmony export */   getSettingUnit: () => (/* binding */ getSettingUnit),
/* harmony export */   getSettingValue: () => (/* binding */ getSettingValue)
/* harmony export */ });
/**
 * Get the value of a setting.
 * 
 * @param {string} settingId - The ID of the setting.
 * @param {string} device - The device type.
 * @param {Object} attributes - The attributes object.
 * 
 * @returns {string} - The value of the setting.
 */
function getSettingValue(settingId, device, attributes) {
  if (!device) {
    return attributes[settingId]?.value;
  }
  return attributes[settingId]?.[device]?.value;
}

/**
 * Get the unit value of a setting.
 * 
 * @param {string} settingId - The ID of the setting.
 * @param {string} device - The device type.
 * @param {Object} attributes - The attributes object.
 * 
 * @returns {string} - The unit of the setting.
 */
function getSettingUnit(settingId, device, attributes) {
  return attributes[settingId]?.[device]?.unit;
}

/**
 * Get the default value of a setting.
 * 
 * @param {string} settingId - The ID of the setting.
 * @param {string} device - The device type.
 * @param {Object} attributesDefaults - The default attributes object.
 * 
 * @returns {string} - The default value of the setting.
 */
function getSettingDefaultValue(settingId, device, attributesDefaults) {
  if (!device) {
    return attributesDefaults[settingId]?.default;
  }
  return attributesDefaults[settingId]?.default?.[device]?.value;
}

/**
 * Get the default unit value of a setting.
 * 
 * @param {string} settingId - The ID of the setting.
 * @param {string} device - The device type.
 * @param {Object} attributesDefaults - The default attributes object.
 * 
 * @returns {string} - The default unit of the setting.
 */
function getSettingDefaultUnit(settingId, device, attributesDefaults) {
  return attributesDefaults[settingId]?.default?.[device]?.unit;
}

/**
 * Get the value of a color picker setting.
 * 
 * @param {string} settingId - The ID of the setting.
 * @param {string} device - The device type.
 * @param {string} state - The state of the setting.
 * @param {Object} attributes - The attributes object.
 * 
 * @returns {string} - The value of the setting.
 */
function getColorPickerSettingValue(settingId, device, state, attributes) {
  return attributes[settingId]?.[device]?.value?.[state];
}

/**
 * Get the default value of a color picker setting.
 * 
 * @param {string} settingId - The ID of the setting.
 * @param {string} device - The device type.
 * @param {string} state - The state of the setting.
 * @param {Object} attributesDefaults - The default attributes object.
 * 
 * @returns {string} - The default value of the setting.
 */
function getColorPickerSettingDefaultValue(settingId, device, state, attributesDefaults) {
  return attributesDefaults[settingId]?.default?.[device]?.value?.[state];
}

/**
 * Get the value of a dimensions setting.
 * 
 * @param {string} settingId - The ID of the setting.
 * @param {string} device - The device type.
 * @param {Object} attributes - The attributes object.
 * 
 * @returns {string} - The value of the setting.
 */
function getDimensionsSettingValue(settingId, device, attributes) {
  return attributes[settingId]?.[device];
}

/**
 * Get the default value of a dimensions setting.
 * 
 * @param {string} settingId - The ID of the setting.
 * @param {string} device - The device type.
 * @param {Object} attributesDefaults - The default attributes object.
 * 
 * @returns {string} - The default value of the setting.
 */
function getDimensionsSettingDirectionsValue(settingId, device, attributes) {
  return attributes[settingId]?.[device]?.value;
}

/**
 * Get the default value of a dimensions setting.
 * 
 * @param {string} settingId - The ID of the setting.
 * @param {string} device - The device type.
 * @param {Object} attributesDefaults - The default attributes object.
 * 
 * @returns {string} - The default value of the setting.
 */
function getDimensionsSettingConnectValue(settingId, device, attributes) {
  return attributes[settingId]?.[device]?.connect;
}

/**
 * Get the default value of a dimensions setting.
 * 
 * @param {string} settingId - The ID of the setting.
 * @param {string} device - The device type.
 * @param {Object} attributesDefaults - The default attributes object.
 * 
 * @returns {string} - The default value of the setting.
 */
function getDimensionsSettingDefaultValue(settingId, device, attributesDefaults) {
  return attributesDefaults[settingId]?.default?.[device];
}

/**
 * Get the value of a inner setting.
 * 
 * @param {string} settingId - The ID of the setting.
 * @param {string} innerSettingId - The ID of the inner setting.
 * @param {string} device - The device type.
 * @param {Object} attributes - The attributes object.
 * 
 * @returns {string} - The value of the setting.
 */
function getInnerSettingValue(settingId, innerSettingId, device, attributes) {
  return attributes[settingId]?.innerSettings?.[innerSettingId]?.default?.[device]?.value;
}

/**
 * Get the default value of a inner setting.
 * 
 * @param {string} settingId - The ID of the setting.
 * @param {string} innerSettingId - The ID of the inner setting.
 * @param {string} device - The device type.
 * @param {Object} attributesDefaults - The default attributes object.
 * 
 * @returns {string} - The default value of the setting.
 */
function getInnerSettingDefaultValue(settingId, innerSettingId, device, attributesDefaults) {
  if (!device) {
    return attributesDefaults[settingId]?.default.innerSettings?.[innerSettingId]?.default;
  }
  return attributesDefaults[settingId]?.default.innerSettings?.[innerSettingId]?.default?.[device]?.value;
}

/**
 * Get the default unit value of a inner setting.
 * 
 * @param {string} settingId - The ID of the setting.
 * @param {string} innerSettingId - The ID of the inner setting.
 * @param {string} device - The device type.
 * @param {Object} attributesDefaults - The default attributes object.
 * 
 * @returns {string} - The default value of the setting.
 */
function getInnerSettingDefaultUnit(settingId, innerSettingId, device, attributesDefaults) {
  return attributesDefaults[settingId]?.default.innerSettings?.[innerSettingId]?.default?.[device]?.unit;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}


/***/ }),

/***/ "./node_modules/@emotion/cache/dist/emotion-cache.browser.development.esm.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@emotion/cache/dist/emotion-cache.browser.development.esm.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createCache)
/* harmony export */ });
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/sheet/dist/emotion-sheet.development.esm.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Tokenizer.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Utility.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Enum.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Serializer.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Middleware.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Parser.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js");
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js");





var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
  var previous = 0;
  var character = 0;

  while (true) {
    previous = character;
    character = (0,stylis__WEBPACK_IMPORTED_MODULE_3__.peek)(); // &\f

    if (previous === 38 && character === 12) {
      points[index] = 1;
    }

    if ((0,stylis__WEBPACK_IMPORTED_MODULE_3__.token)(character)) {
      break;
    }

    (0,stylis__WEBPACK_IMPORTED_MODULE_3__.next)();
  }

  return (0,stylis__WEBPACK_IMPORTED_MODULE_3__.slice)(begin, stylis__WEBPACK_IMPORTED_MODULE_3__.position);
};

var toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;

  do {
    switch ((0,stylis__WEBPACK_IMPORTED_MODULE_3__.token)(character)) {
      case 0:
        // &\f
        if (character === 38 && (0,stylis__WEBPACK_IMPORTED_MODULE_3__.peek)() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }

        parsed[index] += identifierWithPointTracking(stylis__WEBPACK_IMPORTED_MODULE_3__.position - 1, points, index);
        break;

      case 2:
        parsed[index] += (0,stylis__WEBPACK_IMPORTED_MODULE_3__.delimit)(character);
        break;

      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = (0,stylis__WEBPACK_IMPORTED_MODULE_3__.peek)() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += (0,stylis__WEBPACK_IMPORTED_MODULE_4__.from)(character);
    }
  } while (character = (0,stylis__WEBPACK_IMPORTED_MODULE_3__.next)());

  return parsed;
};

var getRules = function getRules(value, points) {
  return (0,stylis__WEBPACK_IMPORTED_MODULE_3__.dealloc)(toRules((0,stylis__WEBPACK_IMPORTED_MODULE_3__.alloc)(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


var fixedElements = /* #__PURE__ */new WeakMap();
var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1) {
    return;
  }

  var value = element.value;
  var parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;

  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  } // short-circuit for the simplest case


  if (element.props.length === 1 && value.charCodeAt(0) !== 58
  /* colon */
  && !fixedElements.get(parent)) {
    return;
  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


  if (isImplicitRule) {
    return;
  }

  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;

  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;

    if ( // charcode for l
    value.charCodeAt(0) === 108 && // charcode for b
    value.charCodeAt(2) === 98) {
      // this ignores label
      element["return"] = '';
      element.value = '';
    }
  }
};
var ignoreFlag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';

var isIgnoringComment = function isIgnoringComment(element) {
  return element.type === 'comm' && element.children.indexOf(ignoreFlag) > -1;
};

var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm(cache) {
  return function (element, index, children) {
    if (element.type !== 'rule' || cache.compat) return;
    var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);

    if (unsafePseudoClasses) {
      var isNested = !!element.parent; // in nested rules comments become children of the "auto-inserted" rule and that's always the `element.parent`
      //
      // considering this input:
      // .a {
      //   .b /* comm */ {}
      //   color: hotpink;
      // }
      // we get output corresponding to this:
      // .a {
      //   & {
      //     /* comm */
      //     color: hotpink;
      //   }
      //   .b {}
      // }

      var commentContainer = isNested ? element.parent.children : // global rule at the root level
      children;

      for (var i = commentContainer.length - 1; i >= 0; i--) {
        var node = commentContainer[i];

        if (node.line < element.line) {
          break;
        } // it is quite weird but comments are *usually* put at `column: element.column - 1`
        // so we seek *from the end* for the node that is earlier than the rule's `element` and check that
        // this will also match inputs like this:
        // .a {
        //   /* comm */
        //   .b {}
        // }
        //
        // but that is fine
        //
        // it would be the easiest to change the placement of the comment to be the first child of the rule:
        // .a {
        //   .b { /* comm */ }
        // }
        // with such inputs we wouldn't have to search for the comment at all
        // TODO: consider changing this comment placement in the next major version


        if (node.column < element.column) {
          if (isIgnoringComment(node)) {
            return;
          }

          break;
        }
      }

      unsafePseudoClasses.forEach(function (unsafePseudoClass) {
        console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
      });
    }
  };
};

var isImportRule = function isImportRule(element) {
  return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
};

var isPrependedWithRegularRules = function isPrependedWithRegularRules(index, children) {
  for (var i = index - 1; i >= 0; i--) {
    if (!isImportRule(children[i])) {
      return true;
    }
  }

  return false;
}; // use this to remove incorrect elements from further processing
// so they don't get handed to the `sheet` (or anything else)
// as that could potentially lead to additional logs which in turn could be overhelming to the user


var nullifyElement = function nullifyElement(element) {
  element.type = '';
  element.value = '';
  element["return"] = '';
  element.children = '';
  element.props = '';
};

var incorrectImportAlarm = function incorrectImportAlarm(element, index, children) {
  if (!isImportRule(element)) {
    return;
  }

  if (element.parent) {
    console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
    nullifyElement(element);
  } else if (isPrependedWithRegularRules(index, children)) {
    console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
    nullifyElement(element);
  }
};

/* eslint-disable no-fallthrough */

function prefix(value, length) {
  switch ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.hash)(value, length)) {
    // color-adjust
    case 5103:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + 'print-' + value + value;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)

    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921: // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break

    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005: // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,

    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855: // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)

    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + value;
    // appearance, user-select, transform, hyphens, text-size-adjust

    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MOZ + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + value + value;
    // flex, flex-direction

    case 6828:
    case 4268:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + value + value;
    // order

    case 6165:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + 'flex-' + value + value;
    // align-items

    case 5187:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /(\w+).+(:[^]+)/, stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + 'box-$1$2' + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + 'flex-$1$2') + value;
    // align-self

    case 5443:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + 'flex-item-' + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /flex-|-self/, '') + value;
    // align-content

    case 4675:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + 'flex-line-pack' + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /align-content|flex-|-self/, '') + value;
    // flex-shrink

    case 5548:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, 'shrink', 'negative') + value;
    // flex-basis

    case 5292:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, 'basis', 'preferred-size') + value;
    // flex-grow

    case 6060:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + 'box-' + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, '-grow', '') + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, 'grow', 'positive') + value;
    // transition

    case 4554:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /([^-])(transform)/g, '$1' + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + '$2') + value;
    // cursor

    case 6187:
      return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)((0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)((0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /(zoom-|grab)/, stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + '$1'), /(image-set)/, stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + '$1'), value, '') + value;
    // background, background-image

    case 5495:
    case 3959:
      return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /(image-set\([^]*)/, stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + '$1' + '$`$1');
    // justify-content

    case 4968:
      return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)((0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /(.+:)(flex-)?(.*)/, stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + 'box-pack:$3' + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + value;
    // (margin|padding)-inline-(start|end)

    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /(.+)-inline(.+)/, stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + '$1$2') + value;
    // (min|max)?(width|height|inline-size|block-size)

    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      // stretch, max-content, min-content, fill-available
      if ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.strlen)(value) - 1 - length > 6) switch ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.charat)(value, length + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          // -
          if ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.charat)(value, length + 4) !== 45) break;
        // (f)ill-available, (f)it-content

        case 102:
          return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /(.+:)(.+)-([^]+)/, '$1' + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + '$2-$3' + '$1' + stylis__WEBPACK_IMPORTED_MODULE_5__.MOZ + ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.charat)(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
        // (s)tretch

        case 115:
          return ~(0,stylis__WEBPACK_IMPORTED_MODULE_4__.indexof)(value, 'stretch') ? prefix((0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, 'stretch', 'fill-available'), length) + value : value;
      }
      break;
    // position: sticky

    case 4949:
      // (s)ticky?
      if ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.charat)(value, length + 1) !== 115) break;
    // display: (flex|inline-flex)

    case 6444:
      switch ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.charat)(value, (0,stylis__WEBPACK_IMPORTED_MODULE_4__.strlen)(value) - 3 - (~(0,stylis__WEBPACK_IMPORTED_MODULE_4__.indexof)(value, '!important') && 10))) {
        // stic(k)y
        case 107:
          return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, ':', ':' + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT) + value;
        // (inline-)?fl(e)x

        case 101:
          return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.charat)(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + '$2$3' + '$1' + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + '$2box$3') + value;
      }

      break;
    // writing-mode

    case 5936:
      switch ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.charat)(value, length + 11)) {
        // vertical-l(r)
        case 114:
          return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
        // vertical-r(l)

        case 108:
          return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
        // horizontal(-)tb

        case 45:
          return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
      }

      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + value + value;
  }

  return value;
}

var prefixer = function prefixer(element, index, children, callback) {
  if (element.length > -1) if (!element["return"]) switch (element.type) {
    case stylis__WEBPACK_IMPORTED_MODULE_5__.DECLARATION:
      element["return"] = prefix(element.value, element.length);
      break;

    case stylis__WEBPACK_IMPORTED_MODULE_5__.KEYFRAMES:
      return (0,stylis__WEBPACK_IMPORTED_MODULE_6__.serialize)([(0,stylis__WEBPACK_IMPORTED_MODULE_3__.copy)(element, {
        value: (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(element.value, '@', '@' + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT)
      })], callback);

    case stylis__WEBPACK_IMPORTED_MODULE_5__.RULESET:
      if (element.length) return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.combine)(element.props, function (value) {
        switch ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.match)(value, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ':read-only':
          case ':read-write':
            return (0,stylis__WEBPACK_IMPORTED_MODULE_6__.serialize)([(0,stylis__WEBPACK_IMPORTED_MODULE_3__.copy)(element, {
              props: [(0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /:(read-\w+)/, ':' + stylis__WEBPACK_IMPORTED_MODULE_5__.MOZ + '$1')]
            })], callback);
          // :placeholder

          case '::placeholder':
            return (0,stylis__WEBPACK_IMPORTED_MODULE_6__.serialize)([(0,stylis__WEBPACK_IMPORTED_MODULE_3__.copy)(element, {
              props: [(0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /:(plac\w+)/, ':' + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + 'input-$1')]
            }), (0,stylis__WEBPACK_IMPORTED_MODULE_3__.copy)(element, {
              props: [(0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /:(plac\w+)/, ':' + stylis__WEBPACK_IMPORTED_MODULE_5__.MOZ + '$1')]
            }), (0,stylis__WEBPACK_IMPORTED_MODULE_3__.copy)(element, {
              props: [(0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /:(plac\w+)/, stylis__WEBPACK_IMPORTED_MODULE_5__.MS + 'input-$1')]
            })], callback);
        }

        return '';
      });
  }
};

var defaultStylisPlugins = [prefixer];
var getSourceMap;

{
  var sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;

  getSourceMap = function getSourceMap(styles) {
    var matches = styles.match(sourceMapPattern);
    if (!matches) return;
    return matches[matches.length - 1];
  };
}

var createCache = function createCache(options) {
  var key = options.key;

  if (!key) {
    throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\n" + "If multiple caches share the same key they might \"fight\" for each other's style elements.");
  }

  if (key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
    // note this very very intentionally targets all style elements regardless of the key to ensure
    // that creating a cache works inside of render of a React component

    Array.prototype.forEach.call(ssrStyles, function (node) {
      // we want to only move elements which have a space in the data-emotion attribute value
      // because that indicates that it is an Emotion 11 server-side rendered style elements
      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
      // will not result in the Emotion 10 styles being destroyed
      var dataEmotionAttribute = node.getAttribute('data-emotion');

      if (dataEmotionAttribute.indexOf(' ') === -1) {
        return;
      }

      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }

  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

  {
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var inserted = {};
  var container;
  var nodesToHydrate = [];

  {
    container = options.container || document.head;
    Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
      var attrib = node.getAttribute("data-emotion").split(' ');

      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }

      nodesToHydrate.push(node);
    });
  }

  var _insert;

  var omnipresentPlugins = [compat, removeLabel];

  {
    omnipresentPlugins.push(createUnsafeSelectorsAlarm({
      get compat() {
        return cache.compat;
      }

    }), incorrectImportAlarm);
  }

  {
    var currentSheet;
    var finalizingPlugins = [stylis__WEBPACK_IMPORTED_MODULE_6__.stringify, function (element) {
      if (!element.root) {
        if (element["return"]) {
          currentSheet.insert(element["return"]);
        } else if (element.value && element.type !== stylis__WEBPACK_IMPORTED_MODULE_5__.COMMENT) {
          // insert empty rule in non-production environments
          // so @emotion/jest can grab `key` from the (JS)DOM for caches without any rules inserted yet
          currentSheet.insert(element.value + "{}");
        }
      }
    } ];
    var serializer = (0,stylis__WEBPACK_IMPORTED_MODULE_7__.middleware)(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

    var stylis = function stylis(styles) {
      return (0,stylis__WEBPACK_IMPORTED_MODULE_6__.serialize)((0,stylis__WEBPACK_IMPORTED_MODULE_8__.compile)(styles), serializer);
    };

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;

      if (getSourceMap) {
        var sourceMap = getSourceMap(serialized.styles);

        if (sourceMap) {
          currentSheet = {
            insert: function insert(rule) {
              sheet.insert(rule + sourceMap);
            }
          };
        }
      }

      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }

  var cache = {
    key: key,
    sheet: new _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__.StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};




/***/ }),

/***/ "./node_modules/@emotion/hash/dist/emotion-hash.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/hash/dist/emotion-hash.esm.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ murmur2)
/* harmony export */ });
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}




/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ memoize)
/* harmony export */ });
function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}




/***/ }),

/***/ "./node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.development.esm.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.development.esm.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ hoistNonReactStatics)
/* harmony export */ });
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0__);


// this file isolates this package that is not tree-shakeable
// and if this module doesn't actually contain any logic of its own
// then Rollup just use 'hoist-non-react-statics' directly in other chunks

var hoistNonReactStatics = (function (targetComponent, sourceComponent) {
  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0___default()(targetComponent, sourceComponent);
});




/***/ }),

/***/ "./node_modules/@emotion/react/dist/emotion-element-489459f2.browser.development.esm.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@emotion/react/dist/emotion-element-489459f2.browser.development.esm.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ CacheProvider),
/* harmony export */   E: () => (/* binding */ Emotion$1),
/* harmony export */   T: () => (/* binding */ ThemeContext),
/* harmony export */   _: () => (/* binding */ __unsafe_useEmotionCache),
/* harmony export */   a: () => (/* binding */ ThemeProvider),
/* harmony export */   b: () => (/* binding */ withTheme),
/* harmony export */   c: () => (/* binding */ createEmotionProps),
/* harmony export */   h: () => (/* binding */ hasOwn),
/* harmony export */   u: () => (/* binding */ useTheme),
/* harmony export */   w: () => (/* binding */ withEmotionCache)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/emotion-cache.browser.development.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js");
/* harmony import */ var _isolated_hnrs_dist_emotion_react_isolated_hnrs_browser_development_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.development.esm.js */ "./node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.development.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/emotion-serialize.development.esm.js");
/* harmony import */ var _emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/use-insertion-effect-with-fallbacks */ "./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js");










var EmotionCacheContext = /* #__PURE__ */react__WEBPACK_IMPORTED_MODULE_0__.createContext( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? /* #__PURE__ */(0,_emotion_cache__WEBPACK_IMPORTED_MODULE_1__["default"])({
  key: 'css'
}) : null);

{
  EmotionCacheContext.displayName = 'EmotionCacheContext';
}

var CacheProvider = EmotionCacheContext.Provider;
var __unsafe_useEmotionCache = function useEmotionCache() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(EmotionCacheContext);
};

var withEmotionCache = function withEmotionCache(func) {
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, ref) {
    // the cache will never be null in the browser
    var cache = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(EmotionCacheContext);
    return func(props, cache, ref);
  });
};

var ThemeContext = /* #__PURE__ */react__WEBPACK_IMPORTED_MODULE_0__.createContext({});

{
  ThemeContext.displayName = 'EmotionThemeContext';
}

var useTheme = function useTheme() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(ThemeContext);
};

var getTheme = function getTheme(outerTheme, theme) {
  if (typeof theme === 'function') {
    var mergedTheme = theme(outerTheme);

    if ((mergedTheme == null || typeof mergedTheme !== 'object' || Array.isArray(mergedTheme))) {
      throw new Error('[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!');
    }

    return mergedTheme;
  }

  if ((theme == null || typeof theme !== 'object' || Array.isArray(theme))) {
    throw new Error('[ThemeProvider] Please make your theme prop a plain object');
  }

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, outerTheme, theme);
};

var createCacheWithTheme = /* #__PURE__ */(0,_emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_3__["default"])(function (outerTheme) {
  return (0,_emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_3__["default"])(function (theme) {
    return getTheme(outerTheme, theme);
  });
});
var ThemeProvider = function ThemeProvider(props) {
  var theme = react__WEBPACK_IMPORTED_MODULE_0__.useContext(ThemeContext);

  if (props.theme !== theme) {
    theme = createCacheWithTheme(theme)(props.theme);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemeContext.Provider, {
    value: theme
  }, props.children);
};
function withTheme(Component) {
  var componentName = Component.displayName || Component.name || 'Component';
  var WithTheme = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function render(props, ref) {
    var theme = react__WEBPACK_IMPORTED_MODULE_0__.useContext(ThemeContext);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      theme: theme,
      ref: ref
    }, props));
  });
  WithTheme.displayName = "WithTheme(" + componentName + ")";
  return (0,_isolated_hnrs_dist_emotion_react_isolated_hnrs_browser_development_esm_js__WEBPACK_IMPORTED_MODULE_7__["default"])(WithTheme, Component);
}

var hasOwn = {}.hasOwnProperty;

var getLastPart = function getLastPart(functionName) {
  // The match may be something like 'Object.createEmotionProps' or
  // 'Loader.prototype.render'
  var parts = functionName.split('.');
  return parts[parts.length - 1];
};

var getFunctionNameFromStackTraceLine = function getFunctionNameFromStackTraceLine(line) {
  // V8
  var match = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(line);
  if (match) return getLastPart(match[1]); // Safari / Firefox

  match = /^([A-Za-z0-9$.]+)@/.exec(line);
  if (match) return getLastPart(match[1]);
  return undefined;
};

var internalReactFunctionNames = /* #__PURE__ */new Set(['renderWithHooks', 'processChild', 'finishClassComponent', 'renderToString']); // These identifiers come from error stacks, so they have to be valid JS
// identifiers, thus we only need to replace what is a valid character for JS,
// but not for CSS.

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var getLabelFromStackTrace = function getLabelFromStackTrace(stackTrace) {
  if (!stackTrace) return undefined;
  var lines = stackTrace.split('\n');

  for (var i = 0; i < lines.length; i++) {
    var functionName = getFunctionNameFromStackTraceLine(lines[i]); // The first line of V8 stack traces is just "Error"

    if (!functionName) continue; // If we reach one of these, we have gone too far and should quit

    if (internalReactFunctionNames.has(functionName)) break; // The component name is the first function in the stack that starts with an
    // uppercase letter

    if (/^[A-Z]/.test(functionName)) return sanitizeIdentifier(functionName);
  }

  return undefined;
};

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var createEmotionProps = function createEmotionProps(type, props) {
  if (typeof props.css === 'string' && // check if there is a css declaration
  props.css.indexOf(':') !== -1) {
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" + props.css + "`");
  }

  var newProps = {};

  for (var _key in props) {
    if (hasOwn.call(props, _key)) {
      newProps[_key] = props[_key];
    }
  }

  newProps[typePropName] = type; // Runtime labeling is an opt-in feature because:
  // - It causes hydration warnings when using Safari and SSR
  // - It can degrade performance if there are a huge number of elements
  //
  // Even if the flag is set, we still don't compute the label if it has already
  // been determined by the Babel plugin.

  if (typeof globalThis !== 'undefined' && !!globalThis.EMOTION_RUNTIME_AUTO_LABEL && !!props.css && (typeof props.css !== 'object' || !('name' in props.css) || typeof props.css.name !== 'string' || props.css.name.indexOf('-') === -1)) {
    var label = getLabelFromStackTrace(new Error().stack);
    if (label) newProps[labelPropName] = label;
  }

  return newProps;
};

var Insertion = function Insertion(_ref) {
  var cache = _ref.cache,
      serialized = _ref.serialized,
      isStringTag = _ref.isStringTag;
  (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_4__.registerStyles)(cache, serialized, isStringTag);
  (0,_emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_6__.useInsertionEffectAlwaysWithSyncFallback)(function () {
    return (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_4__.insertStyles)(cache, serialized, isStringTag);
  });

  return null;
};

var Emotion = /* #__PURE__ */withEmotionCache(function (props, cache, ref) {
  var cssProp = props.css; // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var WrappedComponent = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_4__.getRegisteredStyles)(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_5__.serializeStyles)(registeredStyles, undefined, react__WEBPACK_IMPORTED_MODULE_0__.useContext(ThemeContext));

  if (serialized.name.indexOf('-') === -1) {
    var labelFromStack = props[labelPropName];

    if (labelFromStack) {
      serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_5__.serializeStyles)([serialized, 'label:' + labelFromStack + ';']);
    }
  }

  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var _key2 in props) {
    if (hasOwn.call(props, _key2) && _key2 !== 'css' && _key2 !== typePropName && (_key2 !== labelPropName)) {
      newProps[_key2] = props[_key2];
    }
  }

  newProps.className = className;

  if (ref) {
    newProps.ref = ref;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Insertion, {
    cache: cache,
    serialized: serialized,
    isStringTag: typeof WrappedComponent === 'string'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(WrappedComponent, newProps));
});

{
  Emotion.displayName = 'EmotionCssPropInternal';
}

var Emotion$1 = Emotion;




/***/ }),

/***/ "./node_modules/@emotion/react/dist/emotion-react.browser.development.esm.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@emotion/react/dist/emotion-react.browser.development.esm.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CacheProvider: () => (/* reexport safe */ _emotion_element_489459f2_browser_development_esm_js__WEBPACK_IMPORTED_MODULE_0__.C),
/* harmony export */   ClassNames: () => (/* binding */ ClassNames),
/* harmony export */   Global: () => (/* binding */ Global),
/* harmony export */   ThemeContext: () => (/* reexport safe */ _emotion_element_489459f2_browser_development_esm_js__WEBPACK_IMPORTED_MODULE_0__.T),
/* harmony export */   ThemeProvider: () => (/* reexport safe */ _emotion_element_489459f2_browser_development_esm_js__WEBPACK_IMPORTED_MODULE_0__.a),
/* harmony export */   __unsafe_useEmotionCache: () => (/* reexport safe */ _emotion_element_489459f2_browser_development_esm_js__WEBPACK_IMPORTED_MODULE_0__._),
/* harmony export */   createElement: () => (/* binding */ jsx),
/* harmony export */   css: () => (/* binding */ css),
/* harmony export */   jsx: () => (/* binding */ jsx),
/* harmony export */   keyframes: () => (/* binding */ keyframes),
/* harmony export */   useTheme: () => (/* reexport safe */ _emotion_element_489459f2_browser_development_esm_js__WEBPACK_IMPORTED_MODULE_0__.u),
/* harmony export */   withEmotionCache: () => (/* reexport safe */ _emotion_element_489459f2_browser_development_esm_js__WEBPACK_IMPORTED_MODULE_0__.w),
/* harmony export */   withTheme: () => (/* reexport safe */ _emotion_element_489459f2_browser_development_esm_js__WEBPACK_IMPORTED_MODULE_0__.b)
/* harmony export */ });
/* harmony import */ var _emotion_element_489459f2_browser_development_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emotion-element-489459f2.browser.development.esm.js */ "./node_modules/@emotion/react/dist/emotion-element-489459f2.browser.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js");
/* harmony import */ var _emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/use-insertion-effect-with-fallbacks */ "./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/emotion-serialize.development.esm.js");
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/emotion-cache.browser.development.esm.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_8__);












var isDevelopment = true;

var pkg = {
	name: "@emotion/react",
	version: "11.14.0",
	main: "dist/emotion-react.cjs.js",
	module: "dist/emotion-react.esm.js",
	types: "dist/emotion-react.cjs.d.ts",
	exports: {
		".": {
			types: {
				"import": "./dist/emotion-react.cjs.mjs",
				"default": "./dist/emotion-react.cjs.js"
			},
			development: {
				"edge-light": {
					module: "./dist/emotion-react.development.edge-light.esm.js",
					"import": "./dist/emotion-react.development.edge-light.cjs.mjs",
					"default": "./dist/emotion-react.development.edge-light.cjs.js"
				},
				worker: {
					module: "./dist/emotion-react.development.edge-light.esm.js",
					"import": "./dist/emotion-react.development.edge-light.cjs.mjs",
					"default": "./dist/emotion-react.development.edge-light.cjs.js"
				},
				workerd: {
					module: "./dist/emotion-react.development.edge-light.esm.js",
					"import": "./dist/emotion-react.development.edge-light.cjs.mjs",
					"default": "./dist/emotion-react.development.edge-light.cjs.js"
				},
				browser: {
					module: "./dist/emotion-react.browser.development.esm.js",
					"import": "./dist/emotion-react.browser.development.cjs.mjs",
					"default": "./dist/emotion-react.browser.development.cjs.js"
				},
				module: "./dist/emotion-react.development.esm.js",
				"import": "./dist/emotion-react.development.cjs.mjs",
				"default": "./dist/emotion-react.development.cjs.js"
			},
			"edge-light": {
				module: "./dist/emotion-react.edge-light.esm.js",
				"import": "./dist/emotion-react.edge-light.cjs.mjs",
				"default": "./dist/emotion-react.edge-light.cjs.js"
			},
			worker: {
				module: "./dist/emotion-react.edge-light.esm.js",
				"import": "./dist/emotion-react.edge-light.cjs.mjs",
				"default": "./dist/emotion-react.edge-light.cjs.js"
			},
			workerd: {
				module: "./dist/emotion-react.edge-light.esm.js",
				"import": "./dist/emotion-react.edge-light.cjs.mjs",
				"default": "./dist/emotion-react.edge-light.cjs.js"
			},
			browser: {
				module: "./dist/emotion-react.browser.esm.js",
				"import": "./dist/emotion-react.browser.cjs.mjs",
				"default": "./dist/emotion-react.browser.cjs.js"
			},
			module: "./dist/emotion-react.esm.js",
			"import": "./dist/emotion-react.cjs.mjs",
			"default": "./dist/emotion-react.cjs.js"
		},
		"./jsx-runtime": {
			types: {
				"import": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
				"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
			},
			development: {
				"edge-light": {
					module: "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.esm.js",
					"import": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.mjs",
					"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.js"
				},
				worker: {
					module: "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.esm.js",
					"import": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.mjs",
					"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.js"
				},
				workerd: {
					module: "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.esm.js",
					"import": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.mjs",
					"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.js"
				},
				browser: {
					module: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.esm.js",
					"import": "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.cjs.mjs",
					"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.cjs.js"
				},
				module: "./jsx-runtime/dist/emotion-react-jsx-runtime.development.esm.js",
				"import": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.cjs.mjs",
				"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.cjs.js"
			},
			"edge-light": {
				module: "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.esm.js",
				"import": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.mjs",
				"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.js"
			},
			worker: {
				module: "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.esm.js",
				"import": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.mjs",
				"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.js"
			},
			workerd: {
				module: "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.esm.js",
				"import": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.mjs",
				"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.js"
			},
			browser: {
				module: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
				"import": "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.cjs.mjs",
				"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.cjs.js"
			},
			module: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js",
			"import": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
			"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
		},
		"./_isolated-hnrs": {
			types: {
				"import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
				"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
			},
			development: {
				"edge-light": {
					module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.esm.js",
					"import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.mjs",
					"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.js"
				},
				worker: {
					module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.esm.js",
					"import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.mjs",
					"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.js"
				},
				workerd: {
					module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.esm.js",
					"import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.mjs",
					"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.js"
				},
				browser: {
					module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.development.esm.js",
					"import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.development.cjs.mjs",
					"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.development.cjs.js"
				},
				module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.esm.js",
				"import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.cjs.mjs",
				"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.cjs.js"
			},
			"edge-light": {
				module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.esm.js",
				"import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.mjs",
				"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.js"
			},
			worker: {
				module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.esm.js",
				"import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.mjs",
				"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.js"
			},
			workerd: {
				module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.esm.js",
				"import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.mjs",
				"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.js"
			},
			browser: {
				module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
				"import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.cjs.mjs",
				"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.cjs.js"
			},
			module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js",
			"import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
			"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
		},
		"./jsx-dev-runtime": {
			types: {
				"import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
				"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
			},
			development: {
				"edge-light": {
					module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.esm.js",
					"import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.mjs",
					"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.js"
				},
				worker: {
					module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.esm.js",
					"import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.mjs",
					"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.js"
				},
				workerd: {
					module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.esm.js",
					"import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.mjs",
					"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.js"
				},
				browser: {
					module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.development.esm.js",
					"import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.development.cjs.mjs",
					"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.development.cjs.js"
				},
				module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.esm.js",
				"import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.cjs.mjs",
				"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.cjs.js"
			},
			"edge-light": {
				module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.esm.js",
				"import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.mjs",
				"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.js"
			},
			worker: {
				module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.esm.js",
				"import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.mjs",
				"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.js"
			},
			workerd: {
				module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.esm.js",
				"import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.mjs",
				"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.js"
			},
			browser: {
				module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
				"import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.cjs.mjs",
				"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.cjs.js"
			},
			module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js",
			"import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
			"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
		},
		"./package.json": "./package.json",
		"./types/css-prop": "./types/css-prop.d.ts",
		"./macro": {
			types: {
				"import": "./macro.d.mts",
				"default": "./macro.d.ts"
			},
			"default": "./macro.js"
		}
	},
	imports: {
		"#is-development": {
			development: "./src/conditions/true.ts",
			"default": "./src/conditions/false.ts"
		},
		"#is-browser": {
			"edge-light": "./src/conditions/false.ts",
			workerd: "./src/conditions/false.ts",
			worker: "./src/conditions/false.ts",
			browser: "./src/conditions/true.ts",
			"default": "./src/conditions/is-browser.ts"
		}
	},
	files: [
		"src",
		"dist",
		"jsx-runtime",
		"jsx-dev-runtime",
		"_isolated-hnrs",
		"types/css-prop.d.ts",
		"macro.*"
	],
	sideEffects: false,
	author: "Emotion Contributors",
	license: "MIT",
	scripts: {
		"test:typescript": "dtslint types"
	},
	dependencies: {
		"@babel/runtime": "^7.18.3",
		"@emotion/babel-plugin": "^11.13.5",
		"@emotion/cache": "^11.14.0",
		"@emotion/serialize": "^1.3.3",
		"@emotion/use-insertion-effect-with-fallbacks": "^1.2.0",
		"@emotion/utils": "^1.4.2",
		"@emotion/weak-memoize": "^0.4.0",
		"hoist-non-react-statics": "^3.3.1"
	},
	peerDependencies: {
		react: ">=16.8.0"
	},
	peerDependenciesMeta: {
		"@types/react": {
			optional: true
		}
	},
	devDependencies: {
		"@definitelytyped/dtslint": "0.0.112",
		"@emotion/css": "11.13.5",
		"@emotion/css-prettifier": "1.2.0",
		"@emotion/server": "11.11.0",
		"@emotion/styled": "11.14.0",
		"@types/hoist-non-react-statics": "^3.3.5",
		"html-tag-names": "^1.1.2",
		react: "16.14.0",
		"svg-tag-names": "^1.1.1",
		typescript: "^5.4.5"
	},
	repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
	publishConfig: {
		access: "public"
	},
	"umd:main": "dist/emotion-react.umd.min.js",
	preconstruct: {
		entrypoints: [
			"./index.ts",
			"./jsx-runtime.ts",
			"./jsx-dev-runtime.ts",
			"./_isolated-hnrs.ts"
		],
		umdName: "emotionReact",
		exports: {
			extra: {
				"./types/css-prop": "./types/css-prop.d.ts",
				"./macro": {
					types: {
						"import": "./macro.d.mts",
						"default": "./macro.d.ts"
					},
					"default": "./macro.js"
				}
			}
		}
	}
};

var jsx = function jsx(type, props) {
  // eslint-disable-next-line prefer-rest-params
  var args = arguments;

  if (props == null || !_emotion_element_489459f2_browser_development_esm_js__WEBPACK_IMPORTED_MODULE_0__.h.call(props, 'css')) {
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement.apply(undefined, args);
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = _emotion_element_489459f2_browser_development_esm_js__WEBPACK_IMPORTED_MODULE_0__.E;
  createElementArgArray[1] = (0,_emotion_element_489459f2_browser_development_esm_js__WEBPACK_IMPORTED_MODULE_0__.c)(type, props);

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  }

  return react__WEBPACK_IMPORTED_MODULE_1__.createElement.apply(null, createElementArgArray);
};

(function (_jsx) {
  var JSX;

  (function (_JSX) {})(JSX || (JSX = _jsx.JSX || (_jsx.JSX = {})));
})(jsx || (jsx = {}));

var warnedAboutCssPropForGlobal = false; // maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag

var Global = /* #__PURE__ */(0,_emotion_element_489459f2_browser_development_esm_js__WEBPACK_IMPORTED_MODULE_0__.w)(function (props, cache) {
  if (!warnedAboutCssPropForGlobal && ( // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // I don't really want to add it to the type since it shouldn't be used
  'className' in props && props.className || 'css' in props && props.css)) {
    console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
    warnedAboutCssPropForGlobal = true;
  }

  var styles = props.styles;
  var serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__.serializeStyles)([styles], undefined, react__WEBPACK_IMPORTED_MODULE_1__.useContext(_emotion_element_489459f2_browser_development_esm_js__WEBPACK_IMPORTED_MODULE_0__.T));
  // but it is based on a constant that will never change at runtime
  // it's effectively like having two implementations and switching them out
  // so it's not actually breaking anything


  var sheetRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef();
  (0,_emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_3__.useInsertionEffectWithLayoutFallback)(function () {
    var key = cache.key + "-global"; // use case of https://github.com/emotion-js/emotion/issues/2675

    var sheet = new cache.sheet.constructor({
      key: key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    });
    var rehydrating = false;
    var node = document.querySelector("style[data-emotion=\"" + key + " " + serialized.name + "\"]");

    if (cache.sheet.tags.length) {
      sheet.before = cache.sheet.tags[0];
    }

    if (node !== null) {
      rehydrating = true; // clear the hash so this node won't be recognizable as rehydratable by other <Global/>s

      node.setAttribute('data-emotion', key);
      sheet.hydrate([node]);
    }

    sheetRef.current = [sheet, rehydrating];
    return function () {
      sheet.flush();
    };
  }, [cache]);
  (0,_emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_3__.useInsertionEffectWithLayoutFallback)(function () {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0],
        rehydrating = sheetRefCurrent[1];

    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }

    if (serialized.next !== undefined) {
      // insert keyframes
      (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_2__.insertStyles)(cache, serialized.next, true);
    }

    if (sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }

    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]);
  return null;
});

{
  Global.displayName = 'EmotionGlobal';
}

function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__.serializeStyles)(args);
}

function keyframes() {
  var insertable = css.apply(void 0, arguments);
  var name = "animation-" + insertable.name;
  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            if (arg.styles !== undefined && arg.name !== undefined) {
              console.error('You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n' + '`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.');
            }

            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_2__.getRegisteredStyles)(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var Insertion = function Insertion(_ref) {
  var cache = _ref.cache,
      serializedArr = _ref.serializedArr;
  (0,_emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_3__.useInsertionEffectAlwaysWithSyncFallback)(function () {

    for (var i = 0; i < serializedArr.length; i++) {
      (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_2__.insertStyles)(cache, serializedArr[i], false);
    }
  });

  return null;
};

var ClassNames = /* #__PURE__ */(0,_emotion_element_489459f2_browser_development_esm_js__WEBPACK_IMPORTED_MODULE_0__.w)(function (props, cache) {
  var hasRendered = false;
  var serializedArr = [];

  var css = function css() {
    if (hasRendered && isDevelopment) {
      throw new Error('css can only be used during render');
    }

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__.serializeStyles)(args, cache.registered);
    serializedArr.push(serialized); // registration has to happen here as the result of this might get consumed by `cx`

    (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_2__.registerStyles)(cache, serialized, false);
    return cache.key + "-" + serialized.name;
  };

  var cx = function cx() {
    if (hasRendered && isDevelopment) {
      throw new Error('cx can only be used during render');
    }

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return merge(cache.registered, css, classnames(args));
  };

  var content = {
    css: css,
    cx: cx,
    theme: react__WEBPACK_IMPORTED_MODULE_1__.useContext(_emotion_element_489459f2_browser_development_esm_js__WEBPACK_IMPORTED_MODULE_0__.T)
  };
  var ele = props.children(content);
  hasRendered = true;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Insertion, {
    cache: cache,
    serializedArr: serializedArr
  }), ele);
});

{
  ClassNames.displayName = 'EmotionClassNames';
}

{
  var isBrowser = typeof document !== 'undefined'; // #1727, #2905 for some reason Jest and Vitest evaluate modules twice if some consuming module gets mocked

  var isTestEnv = typeof jest !== 'undefined' || typeof vi !== 'undefined';

  if (isBrowser && !isTestEnv) {
    // globalThis has wide browser support - https://caniuse.com/?search=globalThis, Node.js 12 and later
    var globalContext = typeof globalThis !== 'undefined' ? globalThis // eslint-disable-line no-undef
    : isBrowser ? window : __webpack_require__.g;
    var globalKey = "__EMOTION_REACT_" + pkg.version.split('.')[0] + "__";

    if (globalContext[globalKey]) {
      console.warn('You are loading @emotion/react when it is already loaded. Running ' + 'multiple instances may cause problems. This can happen if multiple ' + 'versions are used, or if multiple builds of the same version are ' + 'used.');
    }

    globalContext[globalKey] = true;
  }
}




/***/ }),

/***/ "./node_modules/@emotion/serialize/dist/emotion-serialize.development.esm.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@emotion/serialize/dist/emotion-serialize.development.esm.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   serializeStyles: () => (/* binding */ serializeStyles)
/* harmony export */ });
/* harmony import */ var _emotion_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/hash */ "./node_modules/@emotion/hash/dist/emotion-hash.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/emotion-unitless.esm.js");
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js");




var isDevelopment = true;

var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = /* #__PURE__ */(0,_emotion_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (_emotion_unitless__WEBPACK_IMPORTED_MODULE_1__["default"][key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

{
  var contentValuePattern = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
  var contentValues = ['normal', 'none', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    var processed = oldProcessStyleValue(key, value);

    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }

    return processed;
  };
}

var noComponentSelectorMessage = 'Component selectors can only be used in conjunction with ' + '@emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware ' + 'compiler transform.';

function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }

  var componentSelector = interpolation;

  if (componentSelector.__emotion_styles !== undefined) {
    if (String(componentSelector) === 'NO_COMPONENT_SELECTOR') {
      throw new Error(noComponentSelectorMessage);
    }

    return componentSelector;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        var keyframes = interpolation;

        if (keyframes.anim === 1) {
          cursor = {
            name: keyframes.name,
            styles: keyframes.styles,
            next: cursor
          };
          return keyframes.name;
        }

        var serializedStyles = interpolation;

        if (serializedStyles.styles !== undefined) {
          var next = serializedStyles.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = serializedStyles.styles + ";";
          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        } else {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        break;
      }

    case 'string':
      {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (_match, _p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });

        if (matched.length) {
          console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(matched, ["`" + replaced + "`"]).join('\n') + "\n\nYou should wrap it with `css` like this:\n\ncss`" + replaced + "`");
        }
      }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  var asString = interpolation;

  if (registered == null) {
    return asString;
  }

  var cached = registered[asString];
  return cached !== undefined ? cached : asString;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var key in obj) {
      var value = obj[key];

      if (typeof value !== 'object') {
        var asString = value;

        if (registered != null && registered[asString] !== undefined) {
          string += key + "{" + registered[asString] + "}";
        } else if (isProcessableValue(asString)) {
          string += processStyleName(key) + ":" + processStyleValue(key, asString) + ";";
        }
      } else {
        if (key === 'NO_COMPONENT_SELECTOR' && isDevelopment) {
          throw new Error(noComponentSelectorMessage);
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(key) + ":" + processStyleValue(key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);

          switch (key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if (key === 'undefined') {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }

                string += key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;{]+)\s*(;|$)/g; // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list

var cursor;
function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    var asTemplateStringsArr = strings;

    if (asTemplateStringsArr[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }

    styles += asTemplateStringsArr[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);

    if (stringMode) {
      var templateStringsArr = strings;

      if (templateStringsArr[i] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles += templateStringsArr[i];
    }
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + match[1];
  }

  var name = (0,_emotion_hash__WEBPACK_IMPORTED_MODULE_0__["default"])(styles) + identifierName;

  {
    var devStyles = {
      name: name,
      styles: styles,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
    return devStyles;
  }
}




/***/ }),

/***/ "./node_modules/@emotion/sheet/dist/emotion-sheet.development.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@emotion/sheet/dist/emotion-sheet.development.esm.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StyleSheet: () => (/* binding */ StyleSheet)
/* harmony export */ });
var isDevelopment = true;

/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/

function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  } // this function should always return with a value
  // TS can't understand it though so we make it stop complaining here


  return undefined;
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}

var StyleSheet = /*#__PURE__*/function () {
  // Using Node instead of HTMLElement since container may be a ShadowRoot
  function StyleSheet(options) {
    var _this = this;

    this._insertTag = function (tag) {
      var before;

      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }

      _this.container.insertBefore(tag, before);

      _this.tags.push(tag);
    };

    this.isSpeedy = options.speedy === undefined ? !isDevelopment : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }

    var tag = this.tags[this.tags.length - 1];

    {
      var isImportRule = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;

      if (isImportRule && this._alreadyInsertedOrderInsensitiveRule) {
        // this would only cause problem in speedy mode
        // but we don't want enabling speedy to affect the observable behavior
        // so we report this error at all times
        console.error("You're attempting to insert the following rule:\n" + rule + '\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.');
      }

      this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule;
    }

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if (!/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(rule)) {
          console.error("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    this.tags.forEach(function (tag) {
      var _tag$parentNode;

      return (_tag$parentNode = tag.parentNode) == null ? void 0 : _tag$parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;

    {
      this._alreadyInsertedOrderInsensitiveRule = false;
    }
  };

  return StyleSheet;
}();




/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/emotion-unitless.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/emotion-unitless.esm.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ unitlessKeys)
/* harmony export */ });
var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};




/***/ }),

/***/ "./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useInsertionEffectAlwaysWithSyncFallback: () => (/* binding */ useInsertionEffectAlwaysWithSyncFallback),
/* harmony export */   useInsertionEffectWithLayoutFallback: () => (/* binding */ useInsertionEffectWithLayoutFallback)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var syncFallback = function syncFallback(create) {
  return create();
};

var useInsertionEffect = react__WEBPACK_IMPORTED_MODULE_0__['useInsertion' + 'Effect'] ? react__WEBPACK_IMPORTED_MODULE_0__['useInsertion' + 'Effect'] : false;
var useInsertionEffectAlwaysWithSyncFallback = useInsertionEffect || syncFallback;
var useInsertionEffectWithLayoutFallback = useInsertionEffect || react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect;




/***/ }),

/***/ "./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRegisteredStyles: () => (/* binding */ getRegisteredStyles),
/* harmony export */   insertStyles: () => (/* binding */ insertStyles),
/* harmony export */   registerStyles: () => (/* binding */ registerStyles)
/* harmony export */ });
var isBrowser = true;

function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ";");
    } else if (className) {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false ) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};




/***/ }),

/***/ "./node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ weakMemoize)
/* harmony export */ });
var weakMemoize = function weakMemoize(func) {
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // Use non-null assertion because we just checked that the cache `has` it
      // This allows us to remove `undefined` from the return value
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};




/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/icon/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/icon/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */


/** @typedef {{icon: JSX.Element, size?: number} & import('@wordpress/primitives').SVGProps} IconProps */

/**
 * Return an SVG icon.
 *
 * @param {IconProps}                                 props icon is the SVG component to render
 *                                                          size is a number specifiying the icon size in pixels
 *                                                          Other props will be passed to wrapped SVG component
 * @param {import('react').ForwardedRef<HTMLElement>} ref   The forwarded ref to the SVG element.
 *
 * @return {JSX.Element}  Icon component
 */
function Icon({
  icon,
  size = 24,
  ...props
}, ref) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(icon, {
    width: size,
    height: size,
    ...props,
    ref
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Icon));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/grid.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/grid.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const grid = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "m3 5c0-1.10457.89543-2 2-2h13.5c1.1046 0 2 .89543 2 2v13.5c0 1.1046-.8954 2-2 2h-13.5c-1.10457 0-2-.8954-2-2zm2-.5h6v6.5h-6.5v-6c0-.27614.22386-.5.5-.5zm-.5 8v6c0 .2761.22386.5.5.5h6v-6.5zm8 0v6.5h6c.2761 0 .5-.2239.5-.5v-6zm0-8v6.5h6.5v-6c0-.27614-.2239-.5-.5-.5z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (grid);
//# sourceMappingURL=grid.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/link-off.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/link-off.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const linkOff = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M17.031 4.703 15.576 4l-1.56 3H14v.03l-2.324 4.47H9.5V13h1.396l-1.502 2.889h-.95a3.694 3.694 0 0 1 0-7.389H10V7H8.444a5.194 5.194 0 1 0 0 10.389h.17L7.5 19.53l1.416.719L15.049 8.5h.507a3.694 3.694 0 0 1 0 7.39H14v1.5h1.556a5.194 5.194 0 0 0 .273-10.383l1.202-2.304Z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (linkOff);
//# sourceMappingURL=link-off.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/link.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/link.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const link = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (link);
//# sourceMappingURL=link.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/rotate-left.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/rotate-left.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const rotateLeft = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12 4V2.2L9 4.8l3 2.5V5.5c3.6 0 6.5 2.9 6.5 6.5 0 2.9-1.9 5.3-4.5 6.2v.2l-.1-.2c-.4.1-.7.2-1.1.2l.2 1.5c.3 0 .6-.1 1-.2 3.5-.9 6-4 6-7.7 0-4.4-3.6-8-8-8zm-7.9 7l1.5.2c.1-1.2.5-2.3 1.2-3.2l-1.1-.9C4.8 8.2 4.3 9.6 4.1 11zm1.5 1.8l-1.5.2c.1.7.3 1.4.5 2 .3.7.6 1.3 1 1.8l1.2-.8c-.3-.5-.6-1-.8-1.5s-.4-1.1-.4-1.7zm1.5 5.5c1.1.9 2.4 1.4 3.8 1.6l.2-1.5c-1.1-.1-2.2-.5-3.1-1.2l-.9 1.1z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rotateLeft);
//# sourceMappingURL=rotate-left.js.map

/***/ }),

/***/ "./node_modules/colord/index.mjs":
/*!***************************************!*\
  !*** ./node_modules/colord/index.mjs ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Colord: () => (/* binding */ j),
/* harmony export */   colord: () => (/* binding */ w),
/* harmony export */   extend: () => (/* binding */ k),
/* harmony export */   getFormat: () => (/* binding */ I),
/* harmony export */   random: () => (/* binding */ E)
/* harmony export */ });
var r={grad:.9,turn:360,rad:360/(2*Math.PI)},t=function(r){return"string"==typeof r?r.length>0:"number"==typeof r},n=function(r,t,n){return void 0===t&&(t=0),void 0===n&&(n=Math.pow(10,t)),Math.round(n*r)/n+0},e=function(r,t,n){return void 0===t&&(t=0),void 0===n&&(n=1),r>n?n:r>t?r:t},u=function(r){return(r=isFinite(r)?r%360:0)>0?r:r+360},a=function(r){return{r:e(r.r,0,255),g:e(r.g,0,255),b:e(r.b,0,255),a:e(r.a)}},o=function(r){return{r:n(r.r),g:n(r.g),b:n(r.b),a:n(r.a,3)}},i=/^#([0-9a-f]{3,8})$/i,s=function(r){var t=r.toString(16);return t.length<2?"0"+t:t},h=function(r){var t=r.r,n=r.g,e=r.b,u=r.a,a=Math.max(t,n,e),o=a-Math.min(t,n,e),i=o?a===t?(n-e)/o:a===n?2+(e-t)/o:4+(t-n)/o:0;return{h:60*(i<0?i+6:i),s:a?o/a*100:0,v:a/255*100,a:u}},b=function(r){var t=r.h,n=r.s,e=r.v,u=r.a;t=t/360*6,n/=100,e/=100;var a=Math.floor(t),o=e*(1-n),i=e*(1-(t-a)*n),s=e*(1-(1-t+a)*n),h=a%6;return{r:255*[e,i,o,o,s,e][h],g:255*[s,e,e,i,o,o][h],b:255*[o,o,s,e,e,i][h],a:u}},g=function(r){return{h:u(r.h),s:e(r.s,0,100),l:e(r.l,0,100),a:e(r.a)}},d=function(r){return{h:n(r.h),s:n(r.s),l:n(r.l),a:n(r.a,3)}},f=function(r){return b((n=(t=r).s,{h:t.h,s:(n*=((e=t.l)<50?e:100-e)/100)>0?2*n/(e+n)*100:0,v:e+n,a:t.a}));var t,n,e},c=function(r){return{h:(t=h(r)).h,s:(u=(200-(n=t.s))*(e=t.v)/100)>0&&u<200?n*e/100/(u<=100?u:200-u)*100:0,l:u/2,a:t.a};var t,n,e,u},l=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,p=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,v=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,m=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,y={string:[[function(r){var t=i.exec(r);return t?(r=t[1]).length<=4?{r:parseInt(r[0]+r[0],16),g:parseInt(r[1]+r[1],16),b:parseInt(r[2]+r[2],16),a:4===r.length?n(parseInt(r[3]+r[3],16)/255,2):1}:6===r.length||8===r.length?{r:parseInt(r.substr(0,2),16),g:parseInt(r.substr(2,2),16),b:parseInt(r.substr(4,2),16),a:8===r.length?n(parseInt(r.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(r){var t=v.exec(r)||m.exec(r);return t?t[2]!==t[4]||t[4]!==t[6]?null:a({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:void 0===t[7]?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(t){var n=l.exec(t)||p.exec(t);if(!n)return null;var e,u,a=g({h:(e=n[1],u=n[2],void 0===u&&(u="deg"),Number(e)*(r[u]||1)),s:Number(n[3]),l:Number(n[4]),a:void 0===n[5]?1:Number(n[5])/(n[6]?100:1)});return f(a)},"hsl"]],object:[[function(r){var n=r.r,e=r.g,u=r.b,o=r.a,i=void 0===o?1:o;return t(n)&&t(e)&&t(u)?a({r:Number(n),g:Number(e),b:Number(u),a:Number(i)}):null},"rgb"],[function(r){var n=r.h,e=r.s,u=r.l,a=r.a,o=void 0===a?1:a;if(!t(n)||!t(e)||!t(u))return null;var i=g({h:Number(n),s:Number(e),l:Number(u),a:Number(o)});return f(i)},"hsl"],[function(r){var n=r.h,a=r.s,o=r.v,i=r.a,s=void 0===i?1:i;if(!t(n)||!t(a)||!t(o))return null;var h=function(r){return{h:u(r.h),s:e(r.s,0,100),v:e(r.v,0,100),a:e(r.a)}}({h:Number(n),s:Number(a),v:Number(o),a:Number(s)});return b(h)},"hsv"]]},N=function(r,t){for(var n=0;n<t.length;n++){var e=t[n][0](r);if(e)return[e,t[n][1]]}return[null,void 0]},x=function(r){return"string"==typeof r?N(r.trim(),y.string):"object"==typeof r&&null!==r?N(r,y.object):[null,void 0]},I=function(r){return x(r)[1]},M=function(r,t){var n=c(r);return{h:n.h,s:e(n.s+100*t,0,100),l:n.l,a:n.a}},H=function(r){return(299*r.r+587*r.g+114*r.b)/1e3/255},$=function(r,t){var n=c(r);return{h:n.h,s:n.s,l:e(n.l+100*t,0,100),a:n.a}},j=function(){function r(r){this.parsed=x(r)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return r.prototype.isValid=function(){return null!==this.parsed},r.prototype.brightness=function(){return n(H(this.rgba),2)},r.prototype.isDark=function(){return H(this.rgba)<.5},r.prototype.isLight=function(){return H(this.rgba)>=.5},r.prototype.toHex=function(){return r=o(this.rgba),t=r.r,e=r.g,u=r.b,i=(a=r.a)<1?s(n(255*a)):"","#"+s(t)+s(e)+s(u)+i;var r,t,e,u,a,i},r.prototype.toRgb=function(){return o(this.rgba)},r.prototype.toRgbString=function(){return r=o(this.rgba),t=r.r,n=r.g,e=r.b,(u=r.a)<1?"rgba("+t+", "+n+", "+e+", "+u+")":"rgb("+t+", "+n+", "+e+")";var r,t,n,e,u},r.prototype.toHsl=function(){return d(c(this.rgba))},r.prototype.toHslString=function(){return r=d(c(this.rgba)),t=r.h,n=r.s,e=r.l,(u=r.a)<1?"hsla("+t+", "+n+"%, "+e+"%, "+u+")":"hsl("+t+", "+n+"%, "+e+"%)";var r,t,n,e,u},r.prototype.toHsv=function(){return r=h(this.rgba),{h:n(r.h),s:n(r.s),v:n(r.v),a:n(r.a,3)};var r},r.prototype.invert=function(){return w({r:255-(r=this.rgba).r,g:255-r.g,b:255-r.b,a:r.a});var r},r.prototype.saturate=function(r){return void 0===r&&(r=.1),w(M(this.rgba,r))},r.prototype.desaturate=function(r){return void 0===r&&(r=.1),w(M(this.rgba,-r))},r.prototype.grayscale=function(){return w(M(this.rgba,-1))},r.prototype.lighten=function(r){return void 0===r&&(r=.1),w($(this.rgba,r))},r.prototype.darken=function(r){return void 0===r&&(r=.1),w($(this.rgba,-r))},r.prototype.rotate=function(r){return void 0===r&&(r=15),this.hue(this.hue()+r)},r.prototype.alpha=function(r){return"number"==typeof r?w({r:(t=this.rgba).r,g:t.g,b:t.b,a:r}):n(this.rgba.a,3);var t},r.prototype.hue=function(r){var t=c(this.rgba);return"number"==typeof r?w({h:r,s:t.s,l:t.l,a:t.a}):n(t.h)},r.prototype.isEqual=function(r){return this.toHex()===w(r).toHex()},r}(),w=function(r){return r instanceof j?r:new j(r)},S=[],k=function(r){r.forEach(function(r){S.indexOf(r)<0&&(r(j,y),S.push(r))})},E=function(){return new j({r:255*Math.random(),g:255*Math.random(),b:255*Math.random()})};


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/stylis/src/Enum.js":
/*!*****************************************!*\
  !*** ./node_modules/stylis/src/Enum.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CHARSET: () => (/* binding */ CHARSET),
/* harmony export */   COMMENT: () => (/* binding */ COMMENT),
/* harmony export */   COUNTER_STYLE: () => (/* binding */ COUNTER_STYLE),
/* harmony export */   DECLARATION: () => (/* binding */ DECLARATION),
/* harmony export */   DOCUMENT: () => (/* binding */ DOCUMENT),
/* harmony export */   FONT_FACE: () => (/* binding */ FONT_FACE),
/* harmony export */   FONT_FEATURE_VALUES: () => (/* binding */ FONT_FEATURE_VALUES),
/* harmony export */   IMPORT: () => (/* binding */ IMPORT),
/* harmony export */   KEYFRAMES: () => (/* binding */ KEYFRAMES),
/* harmony export */   LAYER: () => (/* binding */ LAYER),
/* harmony export */   MEDIA: () => (/* binding */ MEDIA),
/* harmony export */   MOZ: () => (/* binding */ MOZ),
/* harmony export */   MS: () => (/* binding */ MS),
/* harmony export */   NAMESPACE: () => (/* binding */ NAMESPACE),
/* harmony export */   PAGE: () => (/* binding */ PAGE),
/* harmony export */   RULESET: () => (/* binding */ RULESET),
/* harmony export */   SUPPORTS: () => (/* binding */ SUPPORTS),
/* harmony export */   VIEWPORT: () => (/* binding */ VIEWPORT),
/* harmony export */   WEBKIT: () => (/* binding */ WEBKIT)
/* harmony export */ });
var MS = '-ms-'
var MOZ = '-moz-'
var WEBKIT = '-webkit-'

var COMMENT = 'comm'
var RULESET = 'rule'
var DECLARATION = 'decl'

var PAGE = '@page'
var MEDIA = '@media'
var IMPORT = '@import'
var CHARSET = '@charset'
var VIEWPORT = '@viewport'
var SUPPORTS = '@supports'
var DOCUMENT = '@document'
var NAMESPACE = '@namespace'
var KEYFRAMES = '@keyframes'
var FONT_FACE = '@font-face'
var COUNTER_STYLE = '@counter-style'
var FONT_FEATURE_VALUES = '@font-feature-values'
var LAYER = '@layer'


/***/ }),

/***/ "./node_modules/stylis/src/Middleware.js":
/*!***********************************************!*\
  !*** ./node_modules/stylis/src/Middleware.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   middleware: () => (/* binding */ middleware),
/* harmony export */   namespace: () => (/* binding */ namespace),
/* harmony export */   prefixer: () => (/* binding */ prefixer),
/* harmony export */   rulesheet: () => (/* binding */ rulesheet)
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/stylis/src/Utility.js");
/* harmony import */ var _Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tokenizer.js */ "./node_modules/stylis/src/Tokenizer.js");
/* harmony import */ var _Serializer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Serializer.js */ "./node_modules/stylis/src/Serializer.js");
/* harmony import */ var _Prefixer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Prefixer.js */ "./node_modules/stylis/src/Prefixer.js");






/**
 * @param {function[]} collection
 * @return {function}
 */
function middleware (collection) {
	var length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(collection)

	return function (element, index, children, callback) {
		var output = ''

		for (var i = 0; i < length; i++)
			output += collection[i](element, index, children, callback) || ''

		return output
	}
}

/**
 * @param {function} callback
 * @return {function}
 */
function rulesheet (callback) {
	return function (element) {
		if (!element.root)
			if (element = element.return)
				callback(element)
	}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 */
function prefixer (element, index, children, callback) {
	if (element.length > -1)
		if (!element.return)
			switch (element.type) {
				case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.DECLARATION: element.return = (0,_Prefixer_js__WEBPACK_IMPORTED_MODULE_2__.prefix)(element.value, element.length, children)
					return
				case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.KEYFRAMES:
					return (0,_Serializer_js__WEBPACK_IMPORTED_MODULE_3__.serialize)([(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {value: (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(element.value, '@', '@' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT)})], callback)
				case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.RULESET:
					if (element.length)
						return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.combine)(element.props, function (value) {
							switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(value, /(::plac\w+|:read-\w+)/)) {
								// :read-(only|write)
								case ':read-only': case ':read-write':
									return (0,_Serializer_js__WEBPACK_IMPORTED_MODULE_3__.serialize)([(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(read-\w+)/, ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + '$1')]})], callback)
								// :placeholder
								case '::placeholder':
									return (0,_Serializer_js__WEBPACK_IMPORTED_MODULE_3__.serialize)([
										(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(plac\w+)/, ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'input-$1')]}),
										(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(plac\w+)/, ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + '$1')]}),
										(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(plac\w+)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'input-$1')]})
									], callback)
							}

							return ''
						})
			}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 */
function namespace (element) {
	switch (element.type) {
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.RULESET:
			element.props = element.props.map(function (value) {
				return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.combine)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.tokenize)(value), function (value, index, children) {
					switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, 0)) {
						// \f
						case 12:
							return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(value, 1, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(value))
						// \0 ( + > ~
						case 0: case 40: case 43: case 62: case 126:
							return value
						// :
						case 58:
							if (children[++index] === 'global')
								children[index] = '', children[++index] = '\f' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(children[index], index = 1, -1)
						// \s
						case 32:
							return index === 1 ? '' : value
						default:
							switch (index) {
								case 0: element = value
									return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(children) > 1 ? '' : value
								case index = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(children) - 1: case 2:
									return index === 2 ? value + element + element : value + element
								default:
									return value
							}
					}
				})
			})
	}
}


/***/ }),

/***/ "./node_modules/stylis/src/Parser.js":
/*!*******************************************!*\
  !*** ./node_modules/stylis/src/Parser.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   comment: () => (/* binding */ comment),
/* harmony export */   compile: () => (/* binding */ compile),
/* harmony export */   declaration: () => (/* binding */ declaration),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   ruleset: () => (/* binding */ ruleset)
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/stylis/src/Utility.js");
/* harmony import */ var _Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tokenizer.js */ "./node_modules/stylis/src/Tokenizer.js");




/**
 * @param {string} value
 * @return {object[]}
 */
function compile (value) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.dealloc)(parse('', null, null, null, [''], value = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.alloc)(value), 0, [0], value))
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */
function parse (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0
	var offset = 0
	var length = pseudo
	var atrule = 0
	var property = 0
	var previous = 0
	var variable = 1
	var scanning = 1
	var ampersand = 1
	var character = 0
	var type = ''
	var props = rules
	var children = rulesets
	var reference = rule
	var characters = type

	while (scanning)
		switch (previous = character, character = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.next)()) {
			// (
			case 40:
				if (previous != 108 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.charat)(characters, length - 1) == 58) {
					if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.indexof)(characters += (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.delimit)(character), '&', '&\f'), '&\f') != -1)
						ampersand = -1
					break
				}
			// " ' [
			case 34: case 39: case 91:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.delimit)(character)
				break
			// \t \n \r \s
			case 9: case 10: case 13: case 32:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.whitespace)(previous)
				break
			// \
			case 92:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.escaping)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.caret)() - 1, 7)
				continue
			// /
			case 47:
				switch ((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.peek)()) {
					case 42: case 47:
						;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(comment((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.commenter)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.next)(), (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.caret)()), root, parent), declarations)
						break
					default:
						characters += '/'
				}
				break
			// {
			case 123 * variable:
				points[index++] = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) * ampersand
			// } ; \0
			case 125 * variable: case 59: case 0:
				switch (character) {
					// \0 }
					case 0: case 125: scanning = 0
					// ;
					case 59 + offset: if (ampersand == -1) characters = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(characters, /\f/g, '')
						if (property > 0 && ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) - length))
							(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(characters, ' ', '') + ';', rule, parent, length - 2), declarations)
						break
					// @ ;
					case 59: characters += ';'
					// { rule/at-rule
					default:
						;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets)

						if (character === 123)
							if (offset === 0)
								parse(characters, root, reference, reference, props, rulesets, length, points, children)
							else
								switch (atrule === 99 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.charat)(characters, 3) === 110 ? 100 : atrule) {
									// d l m s
									case 100: case 108: case 109: case 115:
										parse(value, reference, reference, rule && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children)
										break
									default:
										parse(characters, reference, reference, reference, [''], children, 0, points, children)
								}
				}

				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo
				break
			// :
			case 58:
				length = 1 + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters), property = previous
			default:
				if (variable < 1)
					if (character == 123)
						--variable
					else if (character == 125 && variable++ == 0 && (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.prev)() == 125)
						continue

				switch (characters += (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.from)(character), character * variable) {
					// &
					case 38:
						ampersand = offset > 0 ? 1 : (characters += '\f', -1)
						break
					// ,
					case 44:
						points[index++] = ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) - 1) * ampersand, ampersand = 1
						break
					// @
					case 64:
						// -
						if ((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.peek)() === 45)
							characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.delimit)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.next)())

						atrule = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.peek)(), offset = length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(type = characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.identifier)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.caret)())), character++
						break
					// -
					case 45:
						if (previous === 45 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) == 2)
							variable = 0
				}
		}

	return rulesets
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @return {object}
 */
function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length) {
	var post = offset - 1
	var rule = offset === 0 ? rules : ['']
	var size = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.sizeof)(rule)

	for (var i = 0, j = 0, k = 0; i < index; ++i)
		for (var x = 0, y = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, post + 1, post = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.abs)(j = points[i])), z = value; x < size; ++x)
			if (z = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.trim)(j > 0 ? rule[x] + ' ' + y : (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(y, /&\f/g, rule[x])))
				props[k++] = z

	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.node)(value, root, parent, offset === 0 ? _Enum_js__WEBPACK_IMPORTED_MODULE_2__.RULESET : type, props, children, length)
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @return {object}
 */
function comment (value, root, parent) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.node)(value, root, parent, _Enum_js__WEBPACK_IMPORTED_MODULE_2__.COMMENT, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.from)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.char)()), (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, 2, -2), 0)
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @return {object}
 */
function declaration (value, root, parent, length) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.node)(value, root, parent, _Enum_js__WEBPACK_IMPORTED_MODULE_2__.DECLARATION, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, 0, length), (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, length + 1, -1), length)
}


/***/ }),

/***/ "./node_modules/stylis/src/Prefixer.js":
/*!*********************************************!*\
  !*** ./node_modules/stylis/src/Prefixer.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prefix: () => (/* binding */ prefix)
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/stylis/src/Utility.js");



/**
 * @param {string} value
 * @param {number} length
 * @param {object[]} children
 * @return {string}
 */
function prefix (value, length, children) {
	switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.hash)(value, length)) {
		// color-adjust
		case 5103:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'print-' + value + value
		// animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
		case 5737: case 4201: case 3177: case 3433: case 1641: case 4457: case 2921:
		// text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
		case 5572: case 6356: case 5844: case 3191: case 6645: case 3005:
		// mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
		case 6391: case 5879: case 5623: case 6135: case 4599: case 4855:
		// background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
		case 4215: case 6389: case 5109: case 5365: case 5621: case 3829:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + value
		// tab-size
		case 4789:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + value + value
		// appearance, user-select, transform, hyphens, text-size-adjust
		case 5349: case 4246: case 4810: case 6968: case 2756:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + value + value
		// writing-mode
		case 5936:
			switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 11)) {
				// vertical-l(r)
				case 114:
					return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /[svh]\w+-[tblr]{2}/, 'tb') + value
				// vertical-r(l)
				case 108:
					return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value
				// horizontal(-)tb
				case 45:
					return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /[svh]\w+-[tblr]{2}/, 'lr') + value
				// default: fallthrough to below
			}
		// flex, flex-direction, scroll-snap-type, writing-mode
		case 6828: case 4268: case 2903:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + value + value
		// order
		case 6165:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-' + value + value
		// align-items
		case 5187:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(\w+).+(:[^]+)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'box-$1$2' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-$1$2') + value
		// align-self
		case 5443:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-item-' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /flex-|-self/g, '') + (!(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(value, /flex-|baseline/) ? _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'grid-row-' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /flex-|-self/g, '') : '') + value
		// align-content
		case 4675:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-line-pack' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /align-content|flex-|-self/g, '') + value
		// flex-shrink
		case 5548:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'shrink', 'negative') + value
		// flex-basis
		case 5292:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'basis', 'preferred-size') + value
		// flex-grow
		case 6060:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'box-' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, '-grow', '') + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'grow', 'positive') + value
		// transition
		case 4554:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /([^-])(transform)/g, '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$2') + value
		// cursor
		case 6187:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(zoom-|grab)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1'), /(image-set)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1'), value, '') + value
		// background, background-image
		case 5495: case 3959:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(image-set\([^]*)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1' + '$`$1')
		// justify-content
		case 4968:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+:)(flex-)?(.*)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'box-pack:$3' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + value
		// justify-self
		case 4200:
			if (!(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(value, /flex-|baseline/)) return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'grid-column-align' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(value, length) + value
			break
		// grid-template-(columns|rows)
		case 2592: case 3360:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'template-', '') + value
		// grid-(row|column)-start
		case 4384: case 3616:
			if (children && children.some(function (element, index) { return length = index, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(element.props, /grid-\w+-end/) })) {
				return ~(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.indexof)(value + (children = children[length].value), 'span') ? value : (_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, '-start', '') + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'grid-row-span:' + (~(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.indexof)(children, 'span') ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(children, /\d+/) : +(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(children, /\d+/) - +(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(value, /\d+/)) + ';')
			}
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, '-start', '') + value
		// grid-(row|column)-end
		case 4896: case 4128:
			return (children && children.some(function (element) { return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(element.props, /grid-\w+-start/) })) ? value : _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, '-end', '-span'), 'span ', '') + value
		// (margin|padding)-inline-(start|end)
		case 4095: case 3583: case 4068: case 2532:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+)-inline(.+)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1$2') + value
		// (min|max)?(width|height|inline-size|block-size)
		case 8116: case 7059: case 5753: case 5535:
		case 5445: case 5701: case 4933: case 4677:
		case 5533: case 5789: case 5021: case 4765:
			// stretch, max-content, min-content, fill-available
			if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(value) - 1 - length > 6)
				switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 1)) {
					// (m)ax-content, (m)in-content
					case 109:
						// -
						if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 4) !== 45)
							break
					// (f)ill-available, (f)it-content
					case 102:
						return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+:)(.+)-([^]+)/, '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$2-$3' + '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 3) == 108 ? '$3' : '$2-$3')) + value
					// (s)tretch
					case 115:
						return ~(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.indexof)(value, 'stretch') ? prefix((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'stretch', 'fill-available'), length, children) + value : value
				}
			break
		// grid-(column|row)
		case 5152: case 5920:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function (_, a, b, c, d, e, f) { return (_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + a + ':' + b + f) + (c ? (_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + a + '-span:' + (d ? e : +e - +b)) + f : '') + value })
		// position: sticky
		case 4949:
			// stick(y)?
			if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 6) === 121)
				return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, ':', ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT) + value
			break
		// display: (flex|inline-flex|grid|inline-grid)
		case 6444:
			switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, 14) === 45 ? 18 : 11)) {
				// (inline-)?fle(x)
				case 120:
					return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$2$3' + '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + '$2box$3') + value
				// (inline-)?gri(d)
				case 100:
					return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, ':', ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS) + value
			}
			break
		// scroll-margin, scroll-margin-(top|right|bottom|left)
		case 5719: case 2647: case 2135: case 3927: case 2391:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'scroll-', 'scroll-snap-') + value
	}

	return value
}


/***/ }),

/***/ "./node_modules/stylis/src/Serializer.js":
/*!***********************************************!*\
  !*** ./node_modules/stylis/src/Serializer.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   serialize: () => (/* binding */ serialize),
/* harmony export */   stringify: () => (/* binding */ stringify)
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/stylis/src/Utility.js");



/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function serialize (children, callback) {
	var output = ''
	var length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(children)

	for (var i = 0; i < length; i++)
		output += callback(children[i], i, children, callback) || ''

	return output
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function stringify (element, index, children, callback) {
	switch (element.type) {
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.LAYER: if (element.children.length) break
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.IMPORT: case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.DECLARATION: return element.return = element.return || element.value
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.COMMENT: return ''
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.KEYFRAMES: return element.return = element.value + '{' + serialize(element.children, callback) + '}'
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.RULESET: element.value = element.props.join(',')
	}

	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
}


/***/ }),

/***/ "./node_modules/stylis/src/Tokenizer.js":
/*!**********************************************!*\
  !*** ./node_modules/stylis/src/Tokenizer.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alloc: () => (/* binding */ alloc),
/* harmony export */   caret: () => (/* binding */ caret),
/* harmony export */   char: () => (/* binding */ char),
/* harmony export */   character: () => (/* binding */ character),
/* harmony export */   characters: () => (/* binding */ characters),
/* harmony export */   column: () => (/* binding */ column),
/* harmony export */   commenter: () => (/* binding */ commenter),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   dealloc: () => (/* binding */ dealloc),
/* harmony export */   delimit: () => (/* binding */ delimit),
/* harmony export */   delimiter: () => (/* binding */ delimiter),
/* harmony export */   escaping: () => (/* binding */ escaping),
/* harmony export */   identifier: () => (/* binding */ identifier),
/* harmony export */   length: () => (/* binding */ length),
/* harmony export */   line: () => (/* binding */ line),
/* harmony export */   next: () => (/* binding */ next),
/* harmony export */   node: () => (/* binding */ node),
/* harmony export */   peek: () => (/* binding */ peek),
/* harmony export */   position: () => (/* binding */ position),
/* harmony export */   prev: () => (/* binding */ prev),
/* harmony export */   slice: () => (/* binding */ slice),
/* harmony export */   token: () => (/* binding */ token),
/* harmony export */   tokenize: () => (/* binding */ tokenize),
/* harmony export */   tokenizer: () => (/* binding */ tokenizer),
/* harmony export */   whitespace: () => (/* binding */ whitespace)
/* harmony export */ });
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/stylis/src/Utility.js");


var line = 1
var column = 1
var length = 0
var position = 0
var character = 0
var characters = ''

/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {number} length
 */
function node (value, root, parent, type, props, children, length) {
	return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: ''}
}

/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */
function copy (root, props) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.assign)(node('', null, null, '', null, null, 0), root, {length: -root.length}, props)
}

/**
 * @return {number}
 */
function char () {
	return character
}

/**
 * @return {number}
 */
function prev () {
	character = position > 0 ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(characters, --position) : 0

	if (column--, character === 10)
		column = 1, line--

	return character
}

/**
 * @return {number}
 */
function next () {
	character = position < length ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(characters, position++) : 0

	if (column++, character === 10)
		column = 1, line++

	return character
}

/**
 * @return {number}
 */
function peek () {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(characters, position)
}

/**
 * @return {number}
 */
function caret () {
	return position
}

/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function slice (begin, end) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(characters, begin, end)
}

/**
 * @param {number} type
 * @return {number}
 */
function token (type) {
	switch (type) {
		// \0 \t \n \r \s whitespace token
		case 0: case 9: case 10: case 13: case 32:
			return 5
		// ! + , / > @ ~ isolate token
		case 33: case 43: case 44: case 47: case 62: case 64: case 126:
		// ; { } breakpoint token
		case 59: case 123: case 125:
			return 4
		// : accompanied token
		case 58:
			return 3
		// " ' ( [ opening delimit token
		case 34: case 39: case 40: case 91:
			return 2
		// ) ] closing delimit token
		case 41: case 93:
			return 1
	}

	return 0
}

/**
 * @param {string} value
 * @return {any[]}
 */
function alloc (value) {
	return line = column = 1, length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(characters = value), position = 0, []
}

/**
 * @param {any} value
 * @return {any}
 */
function dealloc (value) {
	return characters = '', value
}

/**
 * @param {number} type
 * @return {string}
 */
function delimit (type) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.trim)(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
}

/**
 * @param {string} value
 * @return {string[]}
 */
function tokenize (value) {
	return dealloc(tokenizer(alloc(value)))
}

/**
 * @param {number} type
 * @return {string}
 */
function whitespace (type) {
	while (character = peek())
		if (character < 33)
			next()
		else
			break

	return token(type) > 2 || token(character) > 3 ? '' : ' '
}

/**
 * @param {string[]} children
 * @return {string[]}
 */
function tokenizer (children) {
	while (next())
		switch (token(character)) {
			case 0: (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)(identifier(position - 1), children)
				break
			case 2: ;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)(delimit(character), children)
				break
			default: ;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.from)(character), children)
		}

	return children
}

/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */
function escaping (index, count) {
	while (--count && next())
		// not 0-9 A-F a-f
		if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
			break

	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32))
}

/**
 * @param {number} type
 * @return {number}
 */
function delimiter (type) {
	while (next())
		switch (character) {
			// ] ) " '
			case type:
				return position
			// " '
			case 34: case 39:
				if (type !== 34 && type !== 39)
					delimiter(character)
				break
			// (
			case 40:
				if (type === 41)
					delimiter(type)
				break
			// \
			case 92:
				next()
				break
		}

	return position
}

/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */
function commenter (type, index) {
	while (next())
		// //
		if (type + character === 47 + 10)
			break
		// /*
		else if (type + character === 42 + 42 && peek() === 47)
			break

	return '/*' + slice(index, position - 1) + '*' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.from)(type === 47 ? type : next())
}

/**
 * @param {number} index
 * @return {string}
 */
function identifier (index) {
	while (!token(peek()))
		next()

	return slice(index, position)
}


/***/ }),

/***/ "./node_modules/stylis/src/Utility.js":
/*!********************************************!*\
  !*** ./node_modules/stylis/src/Utility.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   abs: () => (/* binding */ abs),
/* harmony export */   append: () => (/* binding */ append),
/* harmony export */   assign: () => (/* binding */ assign),
/* harmony export */   charat: () => (/* binding */ charat),
/* harmony export */   combine: () => (/* binding */ combine),
/* harmony export */   from: () => (/* binding */ from),
/* harmony export */   hash: () => (/* binding */ hash),
/* harmony export */   indexof: () => (/* binding */ indexof),
/* harmony export */   match: () => (/* binding */ match),
/* harmony export */   replace: () => (/* binding */ replace),
/* harmony export */   sizeof: () => (/* binding */ sizeof),
/* harmony export */   strlen: () => (/* binding */ strlen),
/* harmony export */   substr: () => (/* binding */ substr),
/* harmony export */   trim: () => (/* binding */ trim)
/* harmony export */ });
/**
 * @param {number}
 * @return {number}
 */
var abs = Math.abs

/**
 * @param {number}
 * @return {string}
 */
var from = String.fromCharCode

/**
 * @param {object}
 * @return {object}
 */
var assign = Object.assign

/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */
function hash (value, length) {
	return charat(value, 0) ^ 45 ? (((((((length << 2) ^ charat(value, 0)) << 2) ^ charat(value, 1)) << 2) ^ charat(value, 2)) << 2) ^ charat(value, 3) : 0
}

/**
 * @param {string} value
 * @return {string}
 */
function trim (value) {
	return value.trim()
}

/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */
function match (value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value
}

/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */
function replace (value, pattern, replacement) {
	return value.replace(pattern, replacement)
}

/**
 * @param {string} value
 * @param {string} search
 * @return {number}
 */
function indexof (value, search) {
	return value.indexOf(search)
}

/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */
function charat (value, index) {
	return value.charCodeAt(index) | 0
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function substr (value, begin, end) {
	return value.slice(begin, end)
}

/**
 * @param {string} value
 * @return {number}
 */
function strlen (value) {
	return value.length
}

/**
 * @param {any[]} value
 * @return {number}
 */
function sizeof (value) {
	return value.length
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function append (value, array) {
	return array.push(value), value
}

/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */
function combine (array, callback) {
	return array.map(callback).join('')
}


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*****************************************************!*\
  !*** ./assets/js/src/blocks/FlexContainer/index.js ***!
  \*****************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./assets/js/src/blocks/FlexContainer/edit.jsx");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./assets/js/src/blocks/FlexContainer/save.jsx");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./assets/js/src/blocks/FlexContainer/block.json");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/grid.js");






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  icon: {
    src: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"], {
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],
      className: "icon"
    })
  },
  /**
   * @see ./attributes.js
   */
  attributes: FlexContainerBlockData.attributes,
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map