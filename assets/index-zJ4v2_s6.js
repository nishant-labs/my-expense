import { r as reactExports, j as jsxRuntimeExports, S as Spinner, h as React, P as PropTypes, F as Form, B as Button, M as Modal, _ as _objectWithoutPropertiesLoose$2, s as commonjsGlobal, w as invariant, t as getDefaultExportFromCjs, x as warning, y as cx, z as _extends$2, D as isHTMLElement, E as getNodeName, G as popperGenerator, H as eventListeners, I as popperOffsets, J as computeStyles, K as offset, Q as flip, U as preventOverflow, V as arrow, W as hide, X as reactDomExports, Y as ReactDOM, Z as ownerDocument$1, $ as contains, a0 as useEventCallback, a1 as listen, a2 as Recoil_index_24, v as Recoil_index_20, n as Row, o as Col, q as Tab, a as Nav } from "./vendor-5_Ts9y2q.js";
import { f as formatNumberAsCurrency, u as useSourceSettings } from "./useSourceSettings-3hD7aP9K.js";
import { g as _defineProperty, e as _inherits, f as _classCallCheck, h as _assertThisInitialized, i as _createClass, c as _getPrototypeOf, d as _possibleConstructorReturn, b as _unsupportedIterableToArray, t as toggleGroupFetchAgainFlag, s as selectGroups, a as selectSources } from "./defineProperty--9rtS8ml.js";
import { G as GridBase } from "./index-GKlTsuxu.js";
import { i as insertNewGroup, d as deleteGroupById, u as updateGroupById } from "./index-sHCNIenN.js";
class ErrorBoundary extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  componentDidCatch(error, info) {
    console.error("Crash:", error, info);
  }
  render() {
    const { children } = this.props;
    const { error } = this.state;
    if (error) {
      const errorMessage = this.props.fallback || "Oops, something went wrong";
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: errorMessage });
    }
    return children;
  }
}
const AsyncDataLoader = ({ fallback, errorFallback, children }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: fallback || /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { animation: "border" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBoundary, { fallback: errorFallback, children }) });
};
const groupSettingsColDefs = (onDelete, onToggleStatus, onUpdateTransactions, onEdit, sourceList) => [
  {
    headerName: "Name",
    field: "name"
  },
  {
    headerName: "Transactions",
    field: "matchers",
    cellRenderer: "listItemWithEditCellRenderer",
    cellRendererParams: {
      updateItem: onUpdateTransactions
    },
    valueFormatter: (params) => {
      var _a;
      return (_a = params == null ? void 0 : params.value) == null ? void 0 : _a.join("");
    },
    width: 350,
    autoHeight: true
  },
  {
    headerName: "Budget",
    field: "budget",
    width: 100,
    valueFormatter: (params) => formatNumberAsCurrency(Number(params.value ?? 0), true, 0)
  },
  {
    headerName: "Chart Color",
    field: "chartColor",
    width: 110,
    cellStyle: (params) => ({
      backgroundColor: params.value,
      color: "white"
    }),
    valueFormatter: () => " "
  },
  {
    headerName: "Transaction Source",
    field: "sourceId",
    valueFormatter: (params) => {
      var _a;
      return ((_a = sourceList == null ? void 0 : sourceList.find((source) => source.id === params.value)) == null ? void 0 : _a.name) ?? "Source Not Found";
    }
  },
  {
    headerName: "Action",
    type: "rightAligned",
    width: 140,
    cellRenderer: "rowActionCellRenderer",
    cellRendererParams: {
      deleteItem: onDelete,
      toggleItem: onToggleStatus,
      editItem: onEdit
    }
  }
];
var _excluded$f = ["color", "size", "title"];
function _extends$1() {
  _extends$1 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
function _objectWithoutProperties$2(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var PencilSquare = /* @__PURE__ */ reactExports.forwardRef(function(_ref, ref) {
  var color = _ref.color, size = _ref.size, title = _ref.title, rest = _objectWithoutProperties$2(_ref, _excluded$f);
  return /* @__PURE__ */ React.createElement("svg", _extends$1({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: size,
    height: size,
    fill: color
  }, rest), title ? /* @__PURE__ */ React.createElement("title", null, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
  }));
});
PencilSquare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string
};
PencilSquare.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const PencilSquare$1 = PencilSquare;
var _excluded$e = ["color", "size", "title"];
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutProperties$1(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Trash = /* @__PURE__ */ reactExports.forwardRef(function(_ref, ref) {
  var color = _ref.color, size = _ref.size, title = _ref.title, rest = _objectWithoutProperties$1(_ref, _excluded$e);
  return /* @__PURE__ */ React.createElement("svg", _extends({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: size,
    height: size,
    fill: color
  }, rest), title ? /* @__PURE__ */ React.createElement("title", null, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
  }));
});
Trash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string
};
Trash.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const Trash$1 = Trash;
function useAsyncApiData(apiCaller, onDemandOnly = false) {
  const [apiState, setApiState] = reactExports.useState({
    data: null,
    loading: false,
    error: null
  });
  const fetchAgain = reactExports.useCallback(async () => {
    setApiState((prevState) => ({ ...prevState, loading: true }));
    const response = await apiCaller();
    if (response == null ? void 0 : response.error) {
      setApiState((prevState) => ({
        ...prevState,
        loading: false,
        error: response.error
      }));
    } else {
      setApiState((prevState) => ({
        ...prevState,
        loading: false,
        data: response
      }));
    }
  }, []);
  reactExports.useEffect(() => {
    if (!onDemandOnly) {
      fetchAgain();
    }
  }, []);
  return [apiState, fetchAgain];
}
const RowActionCellRenderer = ({ deleteItem, toggleItem, editItem, data }) => {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const deleteAsyncCaller = reactExports.useCallback(() => {
    setIsOpen(false);
    return deleteItem(data);
  }, [data, deleteItem]);
  const toggleAsyncCaller = reactExports.useCallback(() => toggleItem(data), [data, toggleItem]);
  const handleEdit = reactExports.useCallback(() => editItem(data), [data, editItem]);
  const [deleteApiState, handleDelete] = useAsyncApiData(deleteAsyncCaller, true);
  const [toggleApiState, handleToggle] = useAsyncApiData(toggleAsyncCaller, true);
  if (deleteApiState.loading || toggleApiState.loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { animation: "border" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Form.Check,
        {
          style: { display: "inline-grid" },
          type: "switch",
          name: `group-${data.id}`,
          checked: data.isEnabled,
          onChange: handleToggle
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "link", onClick: handleEdit, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PencilSquare$1, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "link", onClick: () => setIsOpen(true), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash$1, {}) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { show: isOpen, onHide: () => setIsOpen(false), backdrop: "static", keyboard: false, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Header, { closeButton: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Title, { children: [
        "Delete ",
        data.name
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Body, { children: "Are you sure, want to delete?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => setIsOpen(false), children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", onClick: handleDelete, children: "Delete" })
      ] })
    ] })
  ] });
};
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
freeGlobal || freeSelf || Function("return this")();
var ALIGN_VALUES = ["justify", "left", "right"];
var DEFAULT_LABELKEY = "label";
var SIZES = ["lg", "sm"];
function getStringLabelKey(labelKey) {
  return typeof labelKey === "string" ? labelKey : DEFAULT_LABELKEY;
}
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
var idCounter = 0;
function isFunction(value) {
  return typeof value === "function";
}
function isString(value) {
  return typeof value === "string";
}
function noop$1() {
}
function pick(obj, keys) {
  var result = {};
  keys.forEach(function(key) {
    result[key] = obj[key];
  });
  return result;
}
function uniqueId(prefix) {
  idCounter += 1;
  return (prefix == null ? "" : String(prefix)) + idCounter;
}
function getOptionLabel(option, labelKey) {
  if (!isString(option) && (hasOwnProperty(option, "paginationOption") || hasOwnProperty(option, "customOption"))) {
    return option[getStringLabelKey(labelKey)];
  }
  var optionLabel;
  if (isFunction(labelKey)) {
    optionLabel = labelKey(option);
  } else if (isString(option)) {
    optionLabel = option;
  } else {
    optionLabel = option[labelKey];
  }
  !isString(optionLabel) ? invariant(false) : void 0;
  return optionLabel;
}
function addCustomOption(results, props) {
  var allowNew = props.allowNew, labelKey = props.labelKey, text = props.text;
  if (!allowNew || !text.trim()) {
    return false;
  }
  if (isFunction(allowNew)) {
    return allowNew(results, props);
  }
  return !results.some(function(o2) {
    return getOptionLabel(o2, labelKey) === text;
  });
}
var fastDeepEqual = function equal(a, b) {
  if (a === b)
    return true;
  if (a && b && typeof a == "object" && typeof b == "object") {
    if (a.constructor !== b.constructor)
      return false;
    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length)
        return false;
      for (i = length; i-- !== 0; )
        if (!equal(a[i], b[i]))
          return false;
      return true;
    }
    if (a.constructor === RegExp)
      return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf)
      return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString)
      return a.toString() === b.toString();
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length)
      return false;
    for (i = length; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
        return false;
    for (i = length; i-- !== 0; ) {
      var key = keys[i];
      if (!equal(a[key], b[key]))
        return false;
    }
    return true;
  }
  return a !== a && b !== b;
};
const isEqual$1 = /* @__PURE__ */ getDefaultExportFromCjs(fastDeepEqual);
function getOptionProperty(option, key) {
  if (isString(option)) {
    return void 0;
  }
  return option[key];
}
var map = [{
  base: "A",
  letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"
}, {
  base: "AA",
  letters: "Ꜳ"
}, {
  base: "AE",
  letters: "ÆǼǢ"
}, {
  base: "AO",
  letters: "Ꜵ"
}, {
  base: "AU",
  letters: "Ꜷ"
}, {
  base: "AV",
  letters: "ꜸꜺ"
}, {
  base: "AY",
  letters: "Ꜽ"
}, {
  base: "B",
  letters: "BⒷＢḂḄḆɃƂƁ"
}, {
  base: "C",
  letters: "CⒸＣĆĈĊČÇḈƇȻꜾ"
}, {
  base: "D",
  letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹÐ"
}, {
  base: "DZ",
  letters: "ǱǄ"
}, {
  base: "Dz",
  letters: "ǲǅ"
}, {
  base: "E",
  letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"
}, {
  base: "F",
  letters: "FⒻＦḞƑꝻ"
}, {
  base: "G",
  letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"
}, {
  base: "H",
  letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"
}, {
  base: "I",
  letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"
}, {
  base: "J",
  letters: "JⒿＪĴɈ"
}, {
  base: "K",
  letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"
}, {
  base: "L",
  letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"
}, {
  base: "LJ",
  letters: "Ǉ"
}, {
  base: "Lj",
  letters: "ǈ"
}, {
  base: "M",
  letters: "MⓂＭḾṀṂⱮƜ"
}, {
  base: "N",
  letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"
}, {
  base: "NJ",
  letters: "Ǌ"
}, {
  base: "Nj",
  letters: "ǋ"
}, {
  base: "O",
  letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"
}, {
  base: "OI",
  letters: "Ƣ"
}, {
  base: "OO",
  letters: "Ꝏ"
}, {
  base: "OU",
  letters: "Ȣ"
}, {
  base: "OE",
  letters: "Œ"
}, {
  base: "oe",
  letters: "œ"
}, {
  base: "P",
  letters: "PⓅＰṔṖƤⱣꝐꝒꝔ"
}, {
  base: "Q",
  letters: "QⓆＱꝖꝘɊ"
}, {
  base: "R",
  letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"
}, {
  base: "S",
  letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"
}, {
  base: "T",
  letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"
}, {
  base: "TZ",
  letters: "Ꜩ"
}, {
  base: "U",
  letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"
}, {
  base: "V",
  letters: "VⓋＶṼṾƲꝞɅ"
}, {
  base: "VY",
  letters: "Ꝡ"
}, {
  base: "W",
  letters: "WⓌＷẀẂŴẆẄẈⱲ"
}, {
  base: "X",
  letters: "XⓍＸẊẌ"
}, {
  base: "Y",
  letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"
}, {
  base: "Z",
  letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"
}, {
  base: "a",
  letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"
}, {
  base: "aa",
  letters: "ꜳ"
}, {
  base: "ae",
  letters: "æǽǣ"
}, {
  base: "ao",
  letters: "ꜵ"
}, {
  base: "au",
  letters: "ꜷ"
}, {
  base: "av",
  letters: "ꜹꜻ"
}, {
  base: "ay",
  letters: "ꜽ"
}, {
  base: "b",
  letters: "bⓑｂḃḅḇƀƃɓ"
}, {
  base: "c",
  letters: "cⓒｃćĉċčçḉƈȼꜿↄ"
}, {
  base: "d",
  letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ"
}, {
  base: "dz",
  letters: "ǳǆ"
}, {
  base: "e",
  letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"
}, {
  base: "f",
  letters: "fⓕｆḟƒꝼ"
}, {
  base: "g",
  letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"
}, {
  base: "h",
  letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"
}, {
  base: "hv",
  letters: "ƕ"
}, {
  base: "i",
  letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"
}, {
  base: "j",
  letters: "jⓙｊĵǰɉ"
}, {
  base: "k",
  letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"
}, {
  base: "l",
  letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"
}, {
  base: "lj",
  letters: "ǉ"
}, {
  base: "m",
  letters: "mⓜｍḿṁṃɱɯ"
}, {
  base: "n",
  letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"
}, {
  base: "nj",
  letters: "ǌ"
}, {
  base: "o",
  letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"
}, {
  base: "oi",
  letters: "ƣ"
}, {
  base: "ou",
  letters: "ȣ"
}, {
  base: "oo",
  letters: "ꝏ"
}, {
  base: "p",
  letters: "pⓟｐṕṗƥᵽꝑꝓꝕ"
}, {
  base: "q",
  letters: "qⓠｑɋꝗꝙ"
}, {
  base: "r",
  letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"
}, {
  base: "s",
  letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"
}, {
  base: "t",
  letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"
}, {
  base: "tz",
  letters: "ꜩ"
}, {
  base: "u",
  letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"
}, {
  base: "v",
  letters: "vⓥｖṽṿʋꝟʌ"
}, {
  base: "vy",
  letters: "ꝡ"
}, {
  base: "w",
  letters: "wⓦｗẁẃŵẇẅẘẉⱳ"
}, {
  base: "x",
  letters: "xⓧｘẋẍ"
}, {
  base: "y",
  letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"
}, {
  base: "z",
  letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ"
}].reduce(function(acc, _ref) {
  var base = _ref.base, letters = _ref.letters;
  letters.split("").forEach(function(letter) {
    acc[letter] = base;
  });
  return acc;
}, {});
var latin = "̀-ͯ";
var japanese = "゙゚";
function stripDiacritics(str) {
  return str.normalize("NFD").replace(new RegExp("[".concat(latin).concat(japanese, "]"), "g"), "").replace(/[^\u0000-\u007E]/g, function(a) {
    return map[a] || a;
  });
}
var warned = {};
function warn(falseToWarn, message) {
  if (!falseToWarn && message.indexOf("deprecated") !== -1) {
    if (warned[message]) {
      return;
    }
    warned[message] = true;
  }
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  warning.apply(void 0, [falseToWarn, "[react-bootstrap-typeahead] ".concat(message)].concat(args));
}
function isMatch(input, string, props) {
  var searchStr = input;
  var str = string;
  if (!props.caseSensitive) {
    searchStr = searchStr.toLowerCase();
    str = str.toLowerCase();
  }
  if (props.ignoreDiacritics) {
    searchStr = stripDiacritics(searchStr);
    str = stripDiacritics(str);
  }
  return str.indexOf(searchStr) !== -1;
}
function defaultFilterBy(option, props) {
  var filterBy = props.filterBy, labelKey = props.labelKey, multiple = props.multiple, selected = props.selected, text = props.text;
  if (multiple && selected.some(function(o2) {
    return isEqual$1(o2, option);
  })) {
    return false;
  }
  if (isFunction(labelKey)) {
    return isMatch(text, labelKey(option), props);
  }
  var fields = filterBy.slice();
  if (isString(labelKey)) {
    if (fields.indexOf(labelKey) === -1) {
      fields.unshift(labelKey);
    }
  }
  if (isString(option)) {
    warn(fields.length <= 1, "You cannot filter by properties when `option` is a string.");
    return isMatch(text, option, props);
  }
  return fields.some(function(field) {
    var value = getOptionProperty(option, field);
    if (!isString(value)) {
      warn(false, "Fields passed to `filterBy` should have string values. Value will be converted to a string; results may be unexpected.");
      value = String(value);
    }
    return isMatch(text, value, props);
  });
}
function isSelectable(inputNode) {
  return inputNode.selectionStart != null;
}
function defaultSelectHint(e2, selectHint) {
  var shouldSelectHint = false;
  if (e2.key === "ArrowRight") {
    shouldSelectHint = isSelectable(e2.currentTarget) ? e2.currentTarget.selectionStart === e2.currentTarget.value.length : true;
  }
  if (e2.key === "Tab") {
    e2.preventDefault();
    shouldSelectHint = true;
  }
  return selectHint ? selectHint(shouldSelectHint, e2) : shouldSelectHint;
}
var CASE_INSENSITIVE = "i";
var COMBINING_MARKS = /[\u0300-\u036F]/;
function escapeStringRegexp(str) {
  !(typeof str === "string") ? invariant(false) : void 0;
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function getMatchBounds(subject, str) {
  var search = new RegExp(escapeStringRegexp(stripDiacritics(str)), CASE_INSENSITIVE);
  var matches = search.exec(stripDiacritics(subject));
  if (!matches) {
    return null;
  }
  var start = matches.index;
  var matchLength = matches[0].length;
  if (COMBINING_MARKS.test(subject)) {
    for (var ii = 0; ii <= start; ii++) {
      if (COMBINING_MARKS.test(subject[ii])) {
        start += 1;
      }
    }
    for (var _ii = start; _ii <= start + matchLength; _ii++) {
      if (COMBINING_MARKS.test(subject[_ii])) {
        matchLength += 1;
      }
    }
  }
  return {
    end: start + matchLength,
    start
  };
}
function getHintText(_ref) {
  var activeIndex = _ref.activeIndex, initialItem = _ref.initialItem, isFocused = _ref.isFocused, isMenuShown = _ref.isMenuShown, labelKey = _ref.labelKey, multiple = _ref.multiple, selected = _ref.selected, text = _ref.text;
  if (
    // No text entered.
    !text || // The input is not focused.
    !isFocused || // The menu is hidden.
    !isMenuShown || // No item in the menu.
    !initialItem || // The initial item is a custom option.
    !isString(initialItem) && hasOwnProperty(initialItem, "customOption") || // One of the menu items is active.
    activeIndex > -1 || // There's already a selection in single-select mode.
    !!selected.length && !multiple
  ) {
    return "";
  }
  var initialItemStr = getOptionLabel(initialItem, labelKey);
  var bounds = getMatchBounds(initialItemStr.toLowerCase(), text.toLowerCase());
  if (!(bounds && bounds.start === 0)) {
    return "";
  }
  return text + initialItemStr.slice(bounds.end, initialItemStr.length);
}
function getMenuItemId() {
  var id = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  var position = arguments.length > 1 ? arguments[1] : void 0;
  return "".concat(id, "-item-").concat(position);
}
var _excluded$d = ["activeIndex", "id", "isFocused", "isMenuShown", "multiple", "onClick", "onFocus", "placeholder"];
function ownKeys$a(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e2);
    r2 && (o2 = o2.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o2);
  }
  return t2;
}
function _objectSpread$a(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$a(Object(t2), true).forEach(function(r3) {
      _defineProperty(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$a(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var getInputProps = function getInputProps2(_ref) {
  var activeIndex = _ref.activeIndex, id = _ref.id, isFocused = _ref.isFocused, isMenuShown = _ref.isMenuShown, multiple = _ref.multiple, onClick = _ref.onClick, onFocus = _ref.onFocus, placeholder = _ref.placeholder, props = _objectWithoutProperties(_ref, _excluded$d);
  return function() {
    var _cx;
    var inputProps = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var className = hasOwnProperty(inputProps, "className") ? String(inputProps.className) : void 0;
    return _objectSpread$a(_objectSpread$a(_objectSpread$a(_objectSpread$a({
      // These props can be overridden by values in `inputProps`.
      autoComplete: "off",
      placeholder,
      type: "text"
    }, inputProps), props), {}, {
      "aria-activedescendant": activeIndex >= 0 ? getMenuItemId(id, activeIndex) : void 0,
      "aria-autocomplete": "both",
      "aria-expanded": isMenuShown,
      "aria-haspopup": "listbox",
      "aria-multiselectable": multiple || void 0,
      "aria-owns": isMenuShown ? id : void 0,
      className: cx((_cx = {}, _defineProperty(_cx, className || "", !multiple), _defineProperty(_cx, "focus", isFocused), _cx))
    }, multiple && {
      inputClassName: className
    }), {}, {
      onClick,
      onFocus,
      role: "combobox"
    });
  };
};
function getInputText(props) {
  var activeItem = props.activeItem, labelKey = props.labelKey, multiple = props.multiple, selected = props.selected, text = props.text;
  if (activeItem) {
    return getOptionLabel(activeItem, labelKey);
  }
  if (!multiple && selected.length && selected[0]) {
    return getOptionLabel(selected[0], labelKey);
  }
  return text;
}
function getIsOnlyResult(props) {
  var allowNew = props.allowNew, highlightOnlyResult = props.highlightOnlyResult, results = props.results;
  if (!highlightOnlyResult || allowNew) {
    return false;
  }
  return results.length === 1 && !getOptionProperty(results[0], "disabled");
}
function getTruncatedOptions(options, maxResults) {
  if (!maxResults || maxResults >= options.length) {
    return options;
  }
  return options.slice(0, maxResults);
}
function isDisabledOption(index, items) {
  var option = items[index];
  return !!option && !!getOptionProperty(option, "disabled");
}
function skipDisabledOptions(currentIndex, key, items) {
  var newIndex = currentIndex;
  while (isDisabledOption(newIndex, items)) {
    newIndex += key === "ArrowUp" ? -1 : 1;
  }
  return newIndex;
}
function getUpdatedActiveIndex(currentIndex, key, items) {
  var newIndex = currentIndex;
  newIndex += key === "ArrowUp" ? -1 : 1;
  newIndex = skipDisabledOptions(newIndex, key, items);
  if (newIndex === items.length) {
    newIndex = -1;
  } else if (newIndex === -2) {
    newIndex = items.length - 1;
    newIndex = skipDisabledOptions(newIndex, key, items);
  }
  return newIndex;
}
function isShown(_ref) {
  var open = _ref.open, minLength = _ref.minLength, showMenu = _ref.showMenu, text = _ref.text;
  if (open || open === false) {
    return open;
  }
  if (text.length < minLength) {
    return false;
  }
  return showMenu;
}
function preventInputBlur(e2) {
  e2.preventDefault();
}
function isSizeLarge(size) {
  return size === "lg";
}
function isSizeSmall(size) {
  return size === "sm";
}
var _excluded$c = ["className", "isInvalid", "isValid", "size"];
function ownKeys$9(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e2);
    r2 && (o2 = o2.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o2);
  }
  return t2;
}
function _objectSpread$9(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$9(Object(t2), true).forEach(function(r3) {
      _defineProperty(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$9(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
function propsWithBsClassName(_ref) {
  var className = _ref.className, isInvalid = _ref.isInvalid, isValid = _ref.isValid, size = _ref.size, props = _objectWithoutProperties(_ref, _excluded$c);
  return _objectSpread$9(_objectSpread$9({}, props), {}, {
    className: cx("form-control", "rbt-input", {
      "form-control-lg": isSizeLarge(size),
      "form-control-sm": isSizeSmall(size),
      "is-invalid": isInvalid,
      "is-valid": isValid
    }, className)
  });
}
function validateSelectedPropChange(prevSelected, selected) {
  var uncontrolledToControlled = !prevSelected && selected;
  var controlledToUncontrolled = prevSelected && !selected;
  var from, to, precedent;
  if (uncontrolledToControlled) {
    from = "uncontrolled";
    to = "controlled";
    precedent = "an";
  } else {
    from = "controlled";
    to = "uncontrolled";
    precedent = "a";
  }
  var message = "You are changing ".concat(precedent, " ").concat(from, " typeahead to be ").concat(to, ". ") + "Input elements should not switch from ".concat(from, " to ").concat(to, " (or vice versa). ") + "Decide between using a controlled or uncontrolled element for the lifetime of the component.";
  warn(!(uncontrolledToControlled || controlledToUncontrolled), message);
}
var INPUT_PROPS_BLACKLIST = [{
  alt: "onBlur",
  prop: "onBlur"
}, {
  alt: "onInputChange",
  prop: "onChange"
}, {
  alt: "onFocus",
  prop: "onFocus"
}, {
  alt: "onKeyDown",
  prop: "onKeyDown"
}];
var sizeType = PropTypes.oneOf(SIZES);
function checkPropType(validator, callback) {
  return function(props, propName, componentName) {
    PropTypes.checkPropTypes(_defineProperty({}, propName, validator), props, "prop", componentName);
    isFunction(callback) && callback(props, propName, componentName);
  };
}
function caseSensitiveType(props) {
  var caseSensitive = props.caseSensitive, filterBy = props.filterBy;
  warn(!caseSensitive || typeof filterBy !== "function", "Your `filterBy` function will override the `caseSensitive` prop.");
}
function defaultInputValueType(props) {
  var defaultInputValue = props.defaultInputValue, defaultSelected = props.defaultSelected, multiple = props.multiple, selected = props.selected;
  var name = defaultSelected.length ? "defaultSelected" : "selected";
  warn(!(!multiple && defaultInputValue && (defaultSelected.length || selected && selected.length)), "`defaultInputValue` will be overridden by the value from `".concat(name, "`."));
}
function defaultSelectedType(props) {
  var defaultSelected = props.defaultSelected, multiple = props.multiple;
  warn(multiple || defaultSelected.length <= 1, "You are passing multiple options to the `defaultSelected` prop of a Typeahead in single-select mode. The selections will be truncated to a single selection.");
}
function highlightOnlyResultType(_ref) {
  var allowNew = _ref.allowNew, highlightOnlyResult = _ref.highlightOnlyResult;
  warn(!(highlightOnlyResult && allowNew), "`highlightOnlyResult` will not work with `allowNew`.");
}
function ignoreDiacriticsType(props) {
  var filterBy = props.filterBy, ignoreDiacritics = props.ignoreDiacritics;
  warn(ignoreDiacritics || typeof filterBy !== "function", "Your `filterBy` function will override the `ignoreDiacritics` prop.");
}
function inputPropsType(_ref2) {
  var inputProps = _ref2.inputProps;
  if (!(inputProps && Object.prototype.toString.call(inputProps) === "[object Object]")) {
    return;
  }
  INPUT_PROPS_BLACKLIST.forEach(function(_ref3) {
    var alt = _ref3.alt, prop = _ref3.prop;
    var msg = alt ? " Use the top-level `".concat(alt, "` prop instead.") : null;
    warn(!inputProps[prop], "The `".concat(prop, "` property of `inputProps` will be ignored.").concat(msg));
  });
}
function isRequiredForA11y(props, propName, componentName) {
  warn(props[propName] != null, "The prop `".concat(propName, "` is required to make `").concat(componentName, "` ") + "accessible for users of assistive technologies such as screen readers.");
}
function labelKeyType(_ref4) {
  var allowNew = _ref4.allowNew, labelKey = _ref4.labelKey;
  warn(!(isFunction(labelKey) && allowNew), "`labelKey` must be a string when `allowNew={true}`.");
}
var optionType = PropTypes.oneOfType([PropTypes.object, PropTypes.string]);
function selectedType(_ref5) {
  var multiple = _ref5.multiple, onChange = _ref5.onChange, selected = _ref5.selected;
  warn(multiple || !selected || selected.length <= 1, "You are passing multiple options to the `selected` prop of a Typeahead in single-select mode. This may lead to unexpected behaviors or errors.");
  warn(!selected || selected && isFunction(onChange), "You provided a `selected` prop without an `onChange` handler. If you want the typeahead to be uncontrolled, use `defaultSelected`. Otherwise, set `onChange`.");
}
({
  /**
   * Delay, in milliseconds, before performing search.
   */
  delay: PropTypes.number,
  /**
   * Whether or not a request is currently pending. Necessary for the
   * container to know when new results are available.
   */
  isLoading: PropTypes.bool.isRequired,
  /**
   * Number of input characters that must be entered before showing results.
   */
  minLength: PropTypes.number,
  /**
   * Callback to perform when the search is executed.
   */
  onSearch: PropTypes.func.isRequired,
  /**
   * Options to be passed to the typeahead. Will typically be the query
   * results, but can also be initial default options.
   */
  options: PropTypes.arrayOf(optionType),
  /**
   * Message displayed in the menu when there is no user input.
   */
  promptText: PropTypes.node,
  /**
   * Message displayed in the menu while the request is pending.
   */
  searchText: PropTypes.node,
  /**
   * Whether or not the component should cache query results.
   */
  useCache: PropTypes.bool
});
var defaultContext = {
  activeIndex: -1,
  hintText: "",
  id: "",
  initialItem: null,
  inputNode: null,
  isOnlyResult: false,
  onActiveItemChange: noop$1,
  onAdd: noop$1,
  onInitialItemChange: noop$1,
  onMenuItemClick: noop$1,
  setItem: noop$1
};
var TypeaheadContext = /* @__PURE__ */ reactExports.createContext(defaultContext);
var useTypeaheadContext = function useTypeaheadContext2() {
  return reactExports.useContext(TypeaheadContext);
};
function ownKeys$8(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e2);
    r2 && (o2 = o2.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o2);
  }
  return t2;
}
function _objectSpread$8(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$8(Object(t2), true).forEach(function(r3) {
      _defineProperty(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$8(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var inputPropKeys = ["activeIndex", "disabled", "id", "inputRef", "isFocused", "isMenuShown", "multiple", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "placeholder"];
var propKeys = ["activeIndex", "hideMenu", "isMenuShown", "labelKey", "onClear", "onHide", "onRemove", "results", "selected", "text", "toggleMenu"];
var contextKeys = ["activeIndex", "id", "initialItem", "inputNode", "onActiveItemChange", "onAdd", "onInitialItemChange", "onMenuItemClick", "setItem"];
var TypeaheadManager = function TypeaheadManager2(props) {
  var allowNew = props.allowNew, children = props.children, initialItem = props.initialItem, isMenuShown = props.isMenuShown, onAdd = props.onAdd, onInitialItemChange = props.onInitialItemChange, onKeyDown = props.onKeyDown, onMenuToggle = props.onMenuToggle, results = props.results, selectHint = props.selectHint;
  var hintText = getHintText(props);
  reactExports.useEffect(function() {
    if (!(allowNew || results.length)) {
      onInitialItemChange();
    }
  });
  var isInitialRender = reactExports.useRef(true);
  reactExports.useEffect(function() {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    onMenuToggle(isMenuShown);
  }, [isMenuShown, onMenuToggle]);
  var handleKeyDown = function handleKeyDown2(e2) {
    onKeyDown(e2);
    if (!initialItem) {
      return;
    }
    var addOnlyResult = e2.key === "Enter" && getIsOnlyResult(props);
    var shouldSelectHint = hintText && defaultSelectHint(e2, selectHint);
    if (addOnlyResult || shouldSelectHint) {
      onAdd(initialItem);
    }
  };
  var childProps = _objectSpread$8(_objectSpread$8({}, pick(props, propKeys)), {}, {
    getInputProps: getInputProps(_objectSpread$8(_objectSpread$8({}, pick(props, inputPropKeys)), {}, {
      onKeyDown: handleKeyDown,
      value: getInputText(props)
    }))
  });
  var contextValue = _objectSpread$8(_objectSpread$8({}, pick(props, contextKeys)), {}, {
    hintText,
    isOnlyResult: getIsOnlyResult(props)
  });
  return /* @__PURE__ */ React.createElement(TypeaheadContext.Provider, {
    value: contextValue
  }, isFunction(children) ? children(childProps) : children);
};
function ownKeys$7(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e2);
    r2 && (o2 = o2.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o2);
  }
  return t2;
}
function _objectSpread$7(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$7(Object(t2), true).forEach(function(r3) {
      _defineProperty(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$7(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
function getInitialState(props) {
  var defaultInputValue = props.defaultInputValue, defaultOpen = props.defaultOpen, defaultSelected = props.defaultSelected, maxResults = props.maxResults, multiple = props.multiple;
  var selected = props.selected ? props.selected.slice() : defaultSelected.slice();
  var text = defaultInputValue;
  if (!multiple && selected.length) {
    text = getOptionLabel(selected[0], props.labelKey);
    if (selected.length > 1) {
      selected = selected.slice(0, 1);
    }
  }
  return {
    activeIndex: -1,
    activeItem: void 0,
    initialItem: void 0,
    isFocused: false,
    selected,
    showMenu: defaultOpen,
    shownResults: maxResults,
    text
  };
}
function clearTypeahead(state, props) {
  return _objectSpread$7(_objectSpread$7({}, getInitialState(props)), {}, {
    isFocused: state.isFocused,
    selected: [],
    text: ""
  });
}
function clickOrFocusInput(state) {
  return _objectSpread$7(_objectSpread$7({}, state), {}, {
    isFocused: true,
    showMenu: true
  });
}
function hideMenu(state, props) {
  var _getInitialState = getInitialState(props), activeIndex = _getInitialState.activeIndex, activeItem = _getInitialState.activeItem, initialItem = _getInitialState.initialItem, shownResults = _getInitialState.shownResults;
  return _objectSpread$7(_objectSpread$7({}, state), {}, {
    activeIndex,
    activeItem,
    initialItem,
    showMenu: false,
    shownResults
  });
}
function toggleMenu(state, props) {
  return state.showMenu ? hideMenu(state, props) : _objectSpread$7(_objectSpread$7({}, state), {}, {
    showMenu: true
  });
}
var _excluded$b = ["onChange"];
function ownKeys$6(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e2);
    r2 && (o2 = o2.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o2);
  }
  return t2;
}
function _objectSpread$6(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$6(Object(t2), true).forEach(function(r3) {
      _defineProperty(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$6(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
function _createSuper$1(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$1();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$1() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
var propTypes$7 = {
  /**
   * Allows the creation of new selections on the fly. Note that any new items
   * will be added to the list of selections, but not the list of original
   * options unless handled as such by `Typeahead`'s parent.
   *
   * If a function is specified, it will be used to determine whether a custom
   * option should be included. The return value should be true or false.
   */
  allowNew: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  /**
   * Autofocus the input when the component initially mounts.
   */
  autoFocus: PropTypes.bool,
  /**
   * Whether or not filtering should be case-sensitive.
   */
  caseSensitive: checkPropType(PropTypes.bool, caseSensitiveType),
  /**
   * The initial value displayed in the text input.
   */
  defaultInputValue: checkPropType(PropTypes.string, defaultInputValueType),
  /**
   * Whether or not the menu is displayed upon initial render.
   */
  defaultOpen: PropTypes.bool,
  /**
   * Specify any pre-selected options. Use only if you want the component to
   * be uncontrolled.
   */
  defaultSelected: checkPropType(PropTypes.arrayOf(optionType), defaultSelectedType),
  /**
   * Either an array of fields in `option` to search, or a custom filtering
   * callback.
   */
  filterBy: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string.isRequired), PropTypes.func]),
  /**
   * Highlights the menu item if there is only one result and allows selecting
   * that item by hitting enter. Does not work with `allowNew`.
   */
  highlightOnlyResult: checkPropType(PropTypes.bool, highlightOnlyResultType),
  /**
   * An html id attribute, required for assistive technologies such as screen
   * readers.
   */
  id: checkPropType(PropTypes.oneOfType([PropTypes.number, PropTypes.string]), isRequiredForA11y),
  /**
   * Whether the filter should ignore accents and other diacritical marks.
   */
  ignoreDiacritics: checkPropType(PropTypes.bool, ignoreDiacriticsType),
  /**
   * Specify the option key to use for display or a function returning the
   * display string. By default, the selector will use the `label` key.
   */
  labelKey: checkPropType(PropTypes.oneOfType([PropTypes.string, PropTypes.func]), labelKeyType),
  /**
   * Maximum number of results to display by default. Mostly done for
   * performance reasons so as not to render too many DOM nodes in the case of
   * large data sets.
   */
  maxResults: PropTypes.number,
  /**
   * Number of input characters that must be entered before showing results.
   */
  minLength: PropTypes.number,
  /**
   * Whether or not multiple selections are allowed.
   */
  multiple: PropTypes.bool,
  /**
   * Invoked when the input is blurred. Receives an event.
   */
  onBlur: PropTypes.func,
  /**
   * Invoked whenever items are added or removed. Receives an array of the
   * selected options.
   */
  onChange: PropTypes.func,
  /**
   * Invoked when the input is focused. Receives an event.
   */
  onFocus: PropTypes.func,
  /**
   * Invoked when the input value changes. Receives the string value of the
   * input.
   */
  onInputChange: PropTypes.func,
  /**
   * Invoked when a key is pressed. Receives an event.
   */
  onKeyDown: PropTypes.func,
  /**
   * Invoked when menu visibility changes.
   */
  onMenuToggle: PropTypes.func,
  /**
   * Invoked when the pagination menu item is clicked. Receives an event.
   */
  onPaginate: PropTypes.func,
  /**
   * Whether or not the menu should be displayed. `undefined` allows the
   * component to control visibility, while `true` and `false` show and hide
   * the menu, respectively.
   */
  open: PropTypes.bool,
  /**
   * Full set of options, including pre-selected options. Must either be an
   * array of objects (recommended) or strings.
   */
  options: PropTypes.arrayOf(optionType).isRequired,
  /**
   * Give user the ability to display additional results if the number of
   * results exceeds `maxResults`.
   */
  paginate: PropTypes.bool,
  /**
   * The selected option(s) displayed in the input. Use this prop if you want
   * to control the component via its parent.
   */
  selected: checkPropType(PropTypes.arrayOf(optionType), selectedType)
};
var defaultProps$1 = {
  allowNew: false,
  autoFocus: false,
  caseSensitive: false,
  defaultInputValue: "",
  defaultOpen: false,
  defaultSelected: [],
  filterBy: [],
  highlightOnlyResult: false,
  ignoreDiacritics: true,
  labelKey: DEFAULT_LABELKEY,
  maxResults: 100,
  minLength: 0,
  multiple: false,
  onBlur: noop$1,
  onFocus: noop$1,
  onInputChange: noop$1,
  onKeyDown: noop$1,
  onMenuToggle: noop$1,
  onPaginate: noop$1,
  paginate: true
};
function triggerInputChange(input, value) {
  var inputValue = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value");
  inputValue && inputValue.set && inputValue.set.call(input, value);
  var e2 = new Event("input", {
    bubbles: true
  });
  input.dispatchEvent(e2);
}
var Typeahead$1 = /* @__PURE__ */ function(_React$Component) {
  _inherits(Typeahead2, _React$Component);
  var _super = _createSuper$1(Typeahead2);
  function Typeahead2() {
    var _this;
    _classCallCheck(this, Typeahead2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "state", getInitialState(_this.props));
    _defineProperty(_assertThisInitialized(_this), "inputNode", null);
    _defineProperty(_assertThisInitialized(_this), "isMenuShown", false);
    _defineProperty(_assertThisInitialized(_this), "items", []);
    _defineProperty(_assertThisInitialized(_this), "blur", function() {
      _this.inputNode && _this.inputNode.blur();
      _this.hideMenu();
    });
    _defineProperty(_assertThisInitialized(_this), "clear", function() {
      _this.setState(clearTypeahead);
    });
    _defineProperty(_assertThisInitialized(_this), "focus", function() {
      _this.inputNode && _this.inputNode.focus();
    });
    _defineProperty(_assertThisInitialized(_this), "getInput", function() {
      return _this.inputNode;
    });
    _defineProperty(_assertThisInitialized(_this), "inputRef", function(inputNode) {
      _this.inputNode = inputNode;
    });
    _defineProperty(_assertThisInitialized(_this), "setItem", function(item, position) {
      _this.items[position] = item;
    });
    _defineProperty(_assertThisInitialized(_this), "hideMenu", function() {
      _this.setState(hideMenu);
    });
    _defineProperty(_assertThisInitialized(_this), "toggleMenu", function() {
      _this.setState(toggleMenu);
    });
    _defineProperty(_assertThisInitialized(_this), "_handleActiveIndexChange", function(activeIndex) {
      _this.setState(function(state) {
        return {
          activeIndex,
          activeItem: activeIndex >= 0 ? state.activeItem : void 0
        };
      });
    });
    _defineProperty(_assertThisInitialized(_this), "_handleActiveItemChange", function(activeItem) {
      if (!isEqual$1(activeItem, _this.state.activeItem)) {
        _this.setState({
          activeItem
        });
      }
    });
    _defineProperty(_assertThisInitialized(_this), "_handleBlur", function(e2) {
      e2.persist();
      _this.setState({
        isFocused: false
      }, function() {
        return _this.props.onBlur(e2);
      });
    });
    _defineProperty(_assertThisInitialized(_this), "_handleChange", function(selected) {
      _this.props.onChange && _this.props.onChange(selected);
    });
    _defineProperty(_assertThisInitialized(_this), "_handleClear", function() {
      _this.inputNode && triggerInputChange(_this.inputNode, "");
      _this.setState(clearTypeahead, function() {
        if (_this.props.multiple) {
          _this._handleChange([]);
        }
      });
    });
    _defineProperty(_assertThisInitialized(_this), "_handleClick", function(e2) {
      var _this$props$inputProp;
      e2.persist();
      var onClick = (_this$props$inputProp = _this.props.inputProps) === null || _this$props$inputProp === void 0 ? void 0 : _this$props$inputProp.onClick;
      _this.setState(clickOrFocusInput, function() {
        return isFunction(onClick) && onClick(e2);
      });
    });
    _defineProperty(_assertThisInitialized(_this), "_handleFocus", function(e2) {
      e2.persist();
      _this.setState(clickOrFocusInput, function() {
        return _this.props.onFocus(e2);
      });
    });
    _defineProperty(_assertThisInitialized(_this), "_handleInitialItemChange", function(initialItem) {
      if (!isEqual$1(initialItem, _this.state.initialItem)) {
        _this.setState({
          initialItem
        });
      }
    });
    _defineProperty(_assertThisInitialized(_this), "_handleInputChange", function(e2) {
      e2.persist();
      var text = e2.currentTarget.value;
      var _this$props = _this.props, multiple = _this$props.multiple, onInputChange = _this$props.onInputChange;
      var shouldClearSelections = _this.state.selected.length && !multiple;
      _this.setState(function(state, props) {
        var _getInitialState = getInitialState(props), activeIndex = _getInitialState.activeIndex, activeItem = _getInitialState.activeItem, shownResults = _getInitialState.shownResults;
        return {
          activeIndex,
          activeItem,
          selected: shouldClearSelections ? [] : state.selected,
          showMenu: true,
          shownResults,
          text
        };
      }, function() {
        onInputChange(text, e2);
        shouldClearSelections && _this._handleChange([]);
      });
    });
    _defineProperty(_assertThisInitialized(_this), "_handleKeyDown", function(e2) {
      var activeItem = _this.state.activeItem;
      if (!_this.isMenuShown) {
        if (e2.key === "ArrowUp" || e2.key === "ArrowDown") {
          _this.setState({
            showMenu: true
          });
        }
        _this.props.onKeyDown(e2);
        return;
      }
      switch (e2.key) {
        case "ArrowUp":
        case "ArrowDown":
          e2.preventDefault();
          _this._handleActiveIndexChange(getUpdatedActiveIndex(_this.state.activeIndex, e2.key, _this.items));
          break;
        case "Enter":
          e2.preventDefault();
          activeItem && _this._handleMenuItemSelect(activeItem, e2);
          break;
        case "Escape":
        case "Tab":
          _this.hideMenu();
          break;
      }
      _this.props.onKeyDown(e2);
    });
    _defineProperty(_assertThisInitialized(_this), "_handleMenuItemSelect", function(option, e2) {
      if (getOptionProperty(option, "paginationOption")) {
        _this._handlePaginate(e2);
      } else {
        _this._handleSelectionAdd(option);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "_handlePaginate", function(e2) {
      e2.persist();
      _this.setState(function(state, props) {
        return {
          shownResults: state.shownResults + props.maxResults
        };
      }, function() {
        return _this.props.onPaginate(e2, _this.state.shownResults);
      });
    });
    _defineProperty(_assertThisInitialized(_this), "_handleSelectionAdd", function(option) {
      var _this$props2 = _this.props, multiple = _this$props2.multiple, labelKey = _this$props2.labelKey;
      var selected;
      var selection = option;
      var text;
      if (!isString(selection) && selection.customOption) {
        selection = _objectSpread$6(_objectSpread$6({}, selection), {}, {
          id: uniqueId("new-id-")
        });
      }
      if (multiple) {
        selected = _this.state.selected.concat(selection);
        text = "";
      } else {
        selected = [selection];
        text = getOptionLabel(selection, labelKey);
      }
      _this.setState(function(state, props) {
        return _objectSpread$6(_objectSpread$6({}, hideMenu(state, props)), {}, {
          initialItem: selection,
          selected,
          text
        });
      }, function() {
        return _this._handleChange(selected);
      });
    });
    _defineProperty(_assertThisInitialized(_this), "_handleSelectionRemove", function(selection) {
      var selected = _this.state.selected.filter(function(option) {
        return !isEqual$1(option, selection);
      });
      _this.focus();
      _this.setState(function(state, props) {
        return _objectSpread$6(_objectSpread$6({}, hideMenu(state, props)), {}, {
          selected
        });
      }, function() {
        return _this._handleChange(selected);
      });
    });
    return _this;
  }
  _createClass(Typeahead2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.autoFocus && this.focus();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props3 = this.props, labelKey = _this$props3.labelKey, multiple = _this$props3.multiple, selected = _this$props3.selected;
      validateSelectedPropChange(selected, prevProps.selected);
      if (selected && !isEqual$1(selected, prevState.selected)) {
        this.setState({
          selected
        });
        if (!multiple) {
          this.setState({
            text: selected.length ? getOptionLabel(selected[0], labelKey) : ""
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props;
      _this$props4.onChange;
      var props = _objectWithoutProperties(_this$props4, _excluded$b);
      var mergedPropsAndState = _objectSpread$6(_objectSpread$6({}, props), this.state);
      var filterBy = mergedPropsAndState.filterBy, labelKey = mergedPropsAndState.labelKey, options = mergedPropsAndState.options, paginate = mergedPropsAndState.paginate, shownResults = mergedPropsAndState.shownResults, text = mergedPropsAndState.text;
      this.isMenuShown = isShown(mergedPropsAndState);
      this.items = [];
      var results = [];
      if (this.isMenuShown) {
        var cb = isFunction(filterBy) ? filterBy : defaultFilterBy;
        results = options.filter(function(option) {
          return cb(option, mergedPropsAndState);
        });
        var shouldPaginate = paginate && results.length > shownResults;
        results = getTruncatedOptions(results, shownResults);
        if (addCustomOption(results, mergedPropsAndState)) {
          results.push(_defineProperty({
            customOption: true
          }, getStringLabelKey(labelKey), text));
        }
        if (shouldPaginate) {
          var _results$push2;
          results.push((_results$push2 = {}, _defineProperty(_results$push2, getStringLabelKey(labelKey), ""), _defineProperty(_results$push2, "paginationOption", true), _results$push2));
        }
      }
      return /* @__PURE__ */ React.createElement(TypeaheadManager, _extends$2({}, mergedPropsAndState, {
        hideMenu: this.hideMenu,
        inputNode: this.inputNode,
        inputRef: this.inputRef,
        isMenuShown: this.isMenuShown,
        onActiveItemChange: this._handleActiveItemChange,
        onAdd: this._handleSelectionAdd,
        onBlur: this._handleBlur,
        onChange: this._handleInputChange,
        onClear: this._handleClear,
        onClick: this._handleClick,
        onFocus: this._handleFocus,
        onHide: this.hideMenu,
        onInitialItemChange: this._handleInitialItemChange,
        onKeyDown: this._handleKeyDown,
        onMenuItemClick: this._handleMenuItemSelect,
        onRemove: this._handleSelectionRemove,
        results,
        setItem: this.setItem,
        toggleMenu: this.toggleMenu
      }));
    }
  }]);
  return Typeahead2;
}(React.Component);
_defineProperty(Typeahead$1, "propTypes", propTypes$7);
_defineProperty(Typeahead$1, "defaultProps", defaultProps$1);
var _excluded$a = ["className", "label", "onClick", "onKeyDown", "size"];
var propTypes$6 = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  size: sizeType
};
var ClearButton = function ClearButton2(_ref) {
  var className = _ref.className, _ref$label = _ref.label, label = _ref$label === void 0 ? "Clear" : _ref$label, _onClick = _ref.onClick, _onKeyDown = _ref.onKeyDown, size = _ref.size, props = _objectWithoutProperties(_ref, _excluded$a);
  return /* @__PURE__ */ React.createElement("button", _extends$2({}, props, {
    "aria-label": label,
    className: cx("close", "btn-close", "rbt-close", {
      "rbt-close-lg": isSizeLarge(size),
      "rbt-close-sm": isSizeSmall(size)
    }, className),
    onClick: function onClick(e2) {
      e2.stopPropagation();
      _onClick && _onClick(e2);
    },
    onKeyDown: function onKeyDown(e2) {
      if (e2.key === "Backspace") {
        e2.preventDefault();
      }
      _onKeyDown && _onKeyDown(e2);
    },
    type: "button"
  }), /* @__PURE__ */ React.createElement("span", {
    "aria-hidden": "true",
    className: "rbt-close-content"
  }, "×"), /* @__PURE__ */ React.createElement("span", {
    className: "sr-only visually-hidden"
  }, label));
};
ClearButton.propTypes = propTypes$6;
var propTypes$5 = {
  label: PropTypes.string
};
var Loader = function Loader2(_ref) {
  var _ref$label = _ref.label, label = _ref$label === void 0 ? "Loading..." : _ref$label;
  return /* @__PURE__ */ React.createElement("div", {
    className: "rbt-loader spinner-border spinner-border-sm",
    role: "status"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only visually-hidden"
  }, label));
};
Loader.propTypes = propTypes$5;
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit(r2, l2) {
  var t2 = null == r2 ? null : "undefined" != typeof Symbol && r2[Symbol.iterator] || r2["@@iterator"];
  if (null != t2) {
    var e2, n2, i, u, a = [], f = true, o2 = false;
    try {
      if (i = (t2 = t2.call(r2)).next, 0 === l2) {
        if (Object(t2) !== t2)
          return;
        f = false;
      } else
        for (; !(f = (e2 = i.call(t2)).done) && (a.push(e2.value), a.length !== l2); f = true)
          ;
    } catch (r3) {
      o2 = true, n2 = r3;
    } finally {
      try {
        if (!f && null != t2["return"] && (u = t2["return"](), Object(u) !== u))
          return;
      } finally {
        if (o2)
          throw n2;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
var fromEntries = function fromEntries2(entries) {
  return entries.reduce(function(acc, _ref) {
    var key = _ref[0], value = _ref[1];
    acc[key] = value;
    return acc;
  }, {});
};
var useIsomorphicLayoutEffect = typeof window !== "undefined" && window.document && window.document.createElement ? reactExports.useLayoutEffect : reactExports.useEffect;
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
const applyStyles$1 = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect,
  requires: ["computeStyles"]
};
var defaultModifiers = [eventListeners, popperOffsets, computeStyles, applyStyles$1, offset, flip, preventOverflow, arrow, hide];
var createPopper = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});
var hasElementType = typeof Element !== "undefined";
var hasMap = typeof Map === "function";
var hasSet = typeof Set === "function";
var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
function equal2(a, b) {
  if (a === b)
    return true;
  if (a && b && typeof a == "object" && typeof b == "object") {
    if (a.constructor !== b.constructor)
      return false;
    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length)
        return false;
      for (i = length; i-- !== 0; )
        if (!equal2(a[i], b[i]))
          return false;
      return true;
    }
    var it;
    if (hasMap && a instanceof Map && b instanceof Map) {
      if (a.size !== b.size)
        return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0]))
          return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!equal2(i.value[1], b.get(i.value[0])))
          return false;
      return true;
    }
    if (hasSet && a instanceof Set && b instanceof Set) {
      if (a.size !== b.size)
        return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0]))
          return false;
      return true;
    }
    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length)
        return false;
      for (i = length; i-- !== 0; )
        if (a[i] !== b[i])
          return false;
      return true;
    }
    if (a.constructor === RegExp)
      return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === "function" && typeof b.valueOf === "function")
      return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString && typeof a.toString === "function" && typeof b.toString === "function")
      return a.toString() === b.toString();
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length)
      return false;
    for (i = length; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
        return false;
    if (hasElementType && a instanceof Element)
      return false;
    for (i = length; i-- !== 0; ) {
      if ((keys[i] === "_owner" || keys[i] === "__v" || keys[i] === "__o") && a.$$typeof) {
        continue;
      }
      if (!equal2(a[keys[i]], b[keys[i]]))
        return false;
    }
    return true;
  }
  return a !== a && b !== b;
}
var reactFastCompare = function isEqual(a, b) {
  try {
    return equal2(a, b);
  } catch (error) {
    if ((error.message || "").match(/stack|recursion/i)) {
      console.warn("react-fast-compare cannot handle circular refs");
      return false;
    }
    throw error;
  }
};
const isEqual2 = /* @__PURE__ */ getDefaultExportFromCjs(reactFastCompare);
var EMPTY_MODIFIERS = [];
var usePopper = function usePopper2(referenceElement, popperElement, options) {
  if (options === void 0) {
    options = {};
  }
  var prevOptions = reactExports.useRef(null);
  var optionsWithDefaults = {
    onFirstUpdate: options.onFirstUpdate,
    placement: options.placement || "bottom",
    strategy: options.strategy || "absolute",
    modifiers: options.modifiers || EMPTY_MODIFIERS
  };
  var _React$useState = reactExports.useState({
    styles: {
      popper: {
        position: optionsWithDefaults.strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), state = _React$useState[0], setState = _React$useState[1];
  var updateStateModifier = reactExports.useMemo(function() {
    return {
      name: "updateState",
      enabled: true,
      phase: "write",
      fn: function fn2(_ref) {
        var state2 = _ref.state;
        var elements = Object.keys(state2.elements);
        reactDomExports.flushSync(function() {
          setState({
            styles: fromEntries(elements.map(function(element) {
              return [element, state2.styles[element] || {}];
            })),
            attributes: fromEntries(elements.map(function(element) {
              return [element, state2.attributes[element]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []);
  var popperOptions = reactExports.useMemo(function() {
    var newOptions = {
      onFirstUpdate: optionsWithDefaults.onFirstUpdate,
      placement: optionsWithDefaults.placement,
      strategy: optionsWithDefaults.strategy,
      modifiers: [].concat(optionsWithDefaults.modifiers, [updateStateModifier, {
        name: "applyStyles",
        enabled: false
      }])
    };
    if (isEqual2(prevOptions.current, newOptions)) {
      return prevOptions.current || newOptions;
    } else {
      prevOptions.current = newOptions;
      return newOptions;
    }
  }, [optionsWithDefaults.onFirstUpdate, optionsWithDefaults.placement, optionsWithDefaults.strategy, optionsWithDefaults.modifiers, updateStateModifier]);
  var popperInstanceRef = reactExports.useRef();
  useIsomorphicLayoutEffect(function() {
    if (popperInstanceRef.current) {
      popperInstanceRef.current.setOptions(popperOptions);
    }
  }, [popperOptions]);
  useIsomorphicLayoutEffect(function() {
    if (referenceElement == null || popperElement == null) {
      return;
    }
    var createPopper$1 = options.createPopper || createPopper;
    var popperInstance = createPopper$1(referenceElement, popperElement, popperOptions);
    popperInstanceRef.current = popperInstance;
    return function() {
      popperInstance.destroy();
      popperInstanceRef.current = null;
    };
  }, [referenceElement, popperElement, options.createPopper]);
  return {
    state: popperInstanceRef.current ? popperInstanceRef.current.state : null,
    styles: state.styles,
    attributes: state.attributes,
    update: popperInstanceRef.current ? popperInstanceRef.current.update : null,
    forceUpdate: popperInstanceRef.current ? popperInstanceRef.current.forceUpdate : null
  };
};
function ownKeys$5(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e2);
    r2 && (o2 = o2.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o2);
  }
  return t2;
}
function _objectSpread$5(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$5(Object(t2), true).forEach(function(r3) {
      _defineProperty(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$5(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var setPopperWidth = {
  enabled: true,
  fn: function fn(data) {
    data.state.styles.popper.width = "".concat(data.state.rects.reference.width, "px");
  },
  name: "setPopperWidth",
  phase: "write"
};
function getModifiers(props) {
  var modifiers = [{
    enabled: !!props.flip,
    name: "flip"
  }];
  if (props.align !== "right" && props.align !== "left") {
    modifiers.push(setPopperWidth);
  }
  return modifiers;
}
function getPlacement(props) {
  var x = props.align === "right" ? "end" : "start";
  var y = props.dropup ? "top" : "bottom";
  return "".concat(y, "-").concat(x);
}
function useOverlay(referenceElement, options) {
  var _useState = reactExports.useState(null), _useState2 = _slicedToArray(_useState, 2), popperElement = _useState2[0], attachRef = _useState2[1];
  var _usePopper = usePopper(referenceElement, popperElement, {
    modifiers: getModifiers(options),
    placement: getPlacement(options),
    strategy: options.positionFixed ? "fixed" : "absolute"
  }), attributes = _usePopper.attributes, styles = _usePopper.styles, forceUpdate = _usePopper.forceUpdate;
  var refElementHeight = referenceElement === null || referenceElement === void 0 ? void 0 : referenceElement.offsetHeight;
  reactExports.useEffect(function() {
    forceUpdate && forceUpdate();
  }, [refElementHeight]);
  return _objectSpread$5(_objectSpread$5({}, attributes.popper), {}, {
    innerRef: attachRef,
    style: styles.popper
  });
}
var _excluded$9 = ["referenceElement", "isMenuShown"];
var SafeElement = typeof Element === "undefined" ? noop$1 : Element;
var propTypes$4 = {
  /**
   * Specify menu alignment. The default value is `justify`, which makes the
   * menu as wide as the input and truncates long values. Specifying `left`
   * or `right` will align the menu to that side and the width will be
   * determined by the length of menu item values.
   */
  align: PropTypes.oneOf(ALIGN_VALUES),
  children: PropTypes.func.isRequired,
  /**
   * Specify whether the menu should appear above the input.
   */
  dropup: PropTypes.bool,
  /**
   * Whether or not to automatically adjust the position of the menu when it
   * reaches the viewport boundaries.
   */
  flip: PropTypes.bool,
  isMenuShown: PropTypes.bool,
  positionFixed: PropTypes.bool,
  // @ts-ignore
  referenceElement: PropTypes.instanceOf(SafeElement)
};
var Overlay = function Overlay2(_ref) {
  var referenceElement = _ref.referenceElement, isMenuShown = _ref.isMenuShown, props = _objectWithoutProperties(_ref, _excluded$9);
  var overlayProps = useOverlay(referenceElement, props);
  if (!isMenuShown) {
    return null;
  }
  return props.children(overlayProps);
};
Overlay.propTypes = propTypes$4;
function safeFindDOMNode(componentOrElement) {
  if (componentOrElement && "setState" in componentOrElement) {
    return ReactDOM.findDOMNode(componentOrElement);
  }
  return componentOrElement != null ? componentOrElement : null;
}
const ownerDocument = function(componentOrElement) {
  return ownerDocument$1(safeFindDOMNode(componentOrElement));
};
var escapeKeyCode = 27;
var noop = function noop2() {
};
function isLeftClickEvent(event) {
  return event.button === 0;
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
var getRefTarget = function getRefTarget2(ref) {
  return ref && ("current" in ref ? ref.current : ref);
};
function useRootClose$1(ref, onRootClose, _temp) {
  var _ref = _temp === void 0 ? {} : _temp, disabled = _ref.disabled, _ref$clickTrigger = _ref.clickTrigger, clickTrigger = _ref$clickTrigger === void 0 ? "click" : _ref$clickTrigger;
  var preventMouseRootCloseRef = reactExports.useRef(false);
  var onClose = onRootClose || noop;
  var handleMouseCapture = reactExports.useCallback(function(e2) {
    var _e$composedPath$;
    var currentTarget = getRefTarget(ref);
    warning(!!currentTarget, "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node");
    preventMouseRootCloseRef.current = !currentTarget || isModifiedEvent(e2) || !isLeftClickEvent(e2) || !!contains(currentTarget, (_e$composedPath$ = e2.composedPath == null ? void 0 : e2.composedPath()[0]) != null ? _e$composedPath$ : e2.target);
  }, [ref]);
  var handleMouse = useEventCallback(function(e2) {
    if (!preventMouseRootCloseRef.current) {
      onClose(e2);
    }
  });
  var handleKeyUp = useEventCallback(function(e2) {
    if (e2.keyCode === escapeKeyCode) {
      onClose(e2);
    }
  });
  reactExports.useEffect(function() {
    if (disabled || ref == null)
      return void 0;
    var currentEvent = window.event;
    var doc = ownerDocument(getRefTarget(ref));
    var removeMouseCaptureListener = listen(doc, clickTrigger, handleMouseCapture, true);
    var removeMouseListener = listen(doc, clickTrigger, function(e2) {
      if (e2 === currentEvent) {
        currentEvent = void 0;
        return;
      }
      handleMouse(e2);
    });
    var removeKeyupListener = listen(doc, "keyup", function(e2) {
      if (e2 === currentEvent) {
        currentEvent = void 0;
        return;
      }
      handleKeyUp(e2);
    });
    var mobileSafariHackListeners = [];
    if ("ontouchstart" in doc.documentElement) {
      mobileSafariHackListeners = [].slice.call(doc.body.children).map(function(el) {
        return listen(el, "mousemove", noop);
      });
    }
    return function() {
      removeMouseCaptureListener();
      removeMouseListener();
      removeKeyupListener();
      mobileSafariHackListeners.forEach(function(remove) {
        return remove();
      });
    };
  }, [ref, disabled, clickTrigger, handleMouseCapture, handleMouse, handleKeyUp]);
}
function useRootClose(onRootClose, options) {
  var rootElementRef = reactExports.useRef(null);
  useRootClose$1(rootElementRef.current, onRootClose, options);
  return rootElementRef;
}
var _excluded$8 = ["children", "onRootClose"];
function RootClose(_ref) {
  var children = _ref.children, onRootClose = _ref.onRootClose, props = _objectWithoutProperties(_ref, _excluded$8);
  var rootRef = useRootClose(onRootClose, props);
  return children(rootRef);
}
var _excluded$7 = ["onBlur", "onClick", "onFocus", "onRemove", "option"];
function ownKeys$4(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e2);
    r2 && (o2 = o2.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o2);
  }
  return t2;
}
function _objectSpread$4(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$4(Object(t2), true).forEach(function(r3) {
      _defineProperty(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$4(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
({
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onRemove: PropTypes.func,
  option: optionType.isRequired
});
function useToken(_ref) {
  var onBlur = _ref.onBlur, onClick = _ref.onClick, onFocus = _ref.onFocus, onRemove = _ref.onRemove, option = _ref.option, props = _objectWithoutProperties(_ref, _excluded$7);
  var _useState = reactExports.useState(false), _useState2 = _slicedToArray(_useState, 2), active = _useState2[0], setActive = _useState2[1];
  var _useState3 = reactExports.useState(null), _useState4 = _slicedToArray(_useState3, 2), rootElement = _useState4[0], attachRef = _useState4[1];
  var handleBlur = function handleBlur2(e2) {
    setActive(false);
    onBlur && onBlur(e2);
  };
  var handleClick = function handleClick2(e2) {
    setActive(true);
    onClick && onClick(e2);
  };
  var handleFocus = function handleFocus2(e2) {
    setActive(true);
    onFocus && onFocus(e2);
  };
  var handleRemove = function handleRemove2() {
    onRemove && onRemove(option);
  };
  var handleKeyDown = function handleKeyDown2(e2) {
    if (e2.key === "Backspace" && active) {
      e2.preventDefault();
      handleRemove();
    }
  };
  useRootClose$1(rootElement, handleBlur, _objectSpread$4(_objectSpread$4({}, props), {}, {
    disabled: !active
  }));
  return {
    active,
    onBlur: handleBlur,
    onClick: handleClick,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown,
    onRemove: isFunction(onRemove) ? handleRemove : void 0,
    ref: attachRef
  };
}
var _excluded$6 = ["active", "children", "className", "onRemove", "tabIndex"], _excluded2 = ["children", "option", "readOnly"], _excluded3 = ["ref"];
function ownKeys$3(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e2);
    r2 && (o2 = o2.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o2);
  }
  return t2;
}
function _objectSpread$3(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$3(Object(t2), true).forEach(function(r3) {
      _defineProperty(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$3(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var InteractiveToken = /* @__PURE__ */ reactExports.forwardRef(function(_ref, ref) {
  var active = _ref.active, children = _ref.children, className = _ref.className, onRemove = _ref.onRemove, tabIndex = _ref.tabIndex, props = _objectWithoutProperties(_ref, _excluded$6);
  return /* @__PURE__ */ React.createElement("div", _extends$2({}, props, {
    className: cx("rbt-token", "rbt-token-removeable", {
      "rbt-token-active": !!active
    }, className),
    ref,
    tabIndex: tabIndex || 0
  }), children, /* @__PURE__ */ React.createElement(ClearButton, {
    className: "rbt-token-remove-button",
    label: "Remove",
    onClick: onRemove,
    tabIndex: -1
  }));
});
var StaticToken = function StaticToken2(_ref2) {
  var children = _ref2.children, className = _ref2.className, disabled = _ref2.disabled, href = _ref2.href;
  var classnames = cx("rbt-token", {
    "rbt-token-disabled": disabled
  }, className);
  if (href && !disabled) {
    return /* @__PURE__ */ React.createElement("a", {
      className: classnames,
      href
    }, children);
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: classnames
  }, children);
};
var Token = function Token2(_ref3) {
  var children = _ref3.children, option = _ref3.option, readOnly = _ref3.readOnly, props = _objectWithoutProperties(_ref3, _excluded2);
  var _useToken = useToken(_objectSpread$3(_objectSpread$3({}, props), {}, {
    option
  })), ref = _useToken.ref, tokenProps = _objectWithoutProperties(_useToken, _excluded3);
  var child = /* @__PURE__ */ React.createElement("div", {
    className: "rbt-token-label"
  }, children);
  return !props.disabled && !readOnly && isFunction(tokenProps.onRemove) ? /* @__PURE__ */ React.createElement(InteractiveToken, _extends$2({}, props, tokenProps, {
    ref
  }), child) : /* @__PURE__ */ React.createElement(StaticToken, props, child);
};
function interpolateStyle(styles, attr) {
  var subattr = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
  if (subattr) {
    subattr = subattr.replace(subattr[0], subattr[0].toUpperCase());
  }
  return ["Top", "Right", "Bottom", "Left"].map(function(dir) {
    return styles["".concat(attr).concat(dir).concat(subattr)];
  }).join(" ");
}
function copyStyles(inputNode, hintNode) {
  var inputStyle = window.getComputedStyle(inputNode);
  hintNode.style.borderStyle = interpolateStyle(inputStyle, "border", "style");
  hintNode.style.borderWidth = interpolateStyle(inputStyle, "border", "width");
  hintNode.style.fontSize = inputStyle.fontSize;
  hintNode.style.fontWeight = inputStyle.fontWeight;
  hintNode.style.height = inputStyle.height;
  hintNode.style.lineHeight = inputStyle.lineHeight;
  hintNode.style.margin = interpolateStyle(inputStyle, "margin");
  hintNode.style.padding = interpolateStyle(inputStyle, "padding");
}
var useHint = function useHint2() {
  var _useTypeaheadContext = useTypeaheadContext(), hintText = _useTypeaheadContext.hintText, inputNode = _useTypeaheadContext.inputNode;
  var hintRef = reactExports.useRef(null);
  reactExports.useEffect(function() {
    if (inputNode && hintRef.current) {
      copyStyles(inputNode, hintRef.current);
    }
  });
  return {
    hintRef,
    hintText
  };
};
var Hint = function Hint2(_ref) {
  var children = _ref.children, className = _ref.className;
  var _useHint = useHint(), hintRef = _useHint.hintRef, hintText = _useHint.hintText;
  return /* @__PURE__ */ React.createElement("div", {
    className,
    style: {
      display: "flex",
      flex: 1,
      height: "100%",
      position: "relative"
    }
  }, children, /* @__PURE__ */ React.createElement("input", {
    "aria-hidden": true,
    className: "rbt-input-hint",
    ref: hintRef,
    readOnly: true,
    style: {
      backgroundColor: "transparent",
      borderColor: "transparent",
      boxShadow: "none",
      color: "rgba(0, 0, 0, 0.54)",
      left: 0,
      pointerEvents: "none",
      position: "absolute",
      top: 0,
      width: "100%"
    },
    tabIndex: -1,
    value: hintText
  }));
};
var Input = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  return /* @__PURE__ */ React.createElement("input", _extends$2({}, props, {
    className: cx("rbt-input-main", props.className),
    ref
  }));
});
var _excluded$5 = ["children", "className", "inputClassName", "inputRef", "referenceElementRef", "selected"];
function TypeaheadInputMulti(props) {
  var wrapperRef = React.useRef(null);
  var inputElem = React.useRef(null);
  var _propsWithBsClassName = propsWithBsClassName(props), children = _propsWithBsClassName.children, className = _propsWithBsClassName.className, inputClassName = _propsWithBsClassName.inputClassName;
  _propsWithBsClassName.inputRef;
  var referenceElementRef = _propsWithBsClassName.referenceElementRef, selected = _propsWithBsClassName.selected, rest = _objectWithoutProperties(_propsWithBsClassName, _excluded$5);
  function getInputRef(input) {
    inputElem.current = input;
    props.inputRef(input);
  }
  function handleContainerClickOrFocus(e2) {
    if (props.disabled) {
      e2.currentTarget.blur();
      return;
    }
    var inputNode = inputElem.current;
    if (!inputNode || // Ignore if the clicked element is a child of the container, ie: a token
    // or the input itself.
    e2.currentTarget.contains(e2.target) && e2.currentTarget !== e2.target) {
      return;
    }
    if (isSelectable(inputNode)) {
      inputNode.selectionStart = inputNode.value.length;
    }
    inputNode.focus();
  }
  function handleKeyDown(e2) {
    if (e2.key === "Backspace" && selected.length && !props.value) {
      var _wrapperRef$current;
      e2.preventDefault();
      var wrapperChildren = (_wrapperRef$current = wrapperRef.current) === null || _wrapperRef$current === void 0 ? void 0 : _wrapperRef$current.children;
      if (wrapperChildren !== null && wrapperChildren !== void 0 && wrapperChildren.length) {
        var lastToken = wrapperChildren[wrapperChildren.length - 2];
        lastToken === null || lastToken === void 0 || lastToken.focus();
      }
    }
    props.onKeyDown && props.onKeyDown(e2);
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: cx("rbt-input-multi", {
      disabled: props.disabled
    }, className),
    onClick: handleContainerClickOrFocus,
    onFocus: handleContainerClickOrFocus,
    ref: referenceElementRef,
    tabIndex: -1
  }, /* @__PURE__ */ React.createElement("div", {
    className: "rbt-input-wrapper",
    ref: wrapperRef
  }, children, /* @__PURE__ */ React.createElement(Hint, null, /* @__PURE__ */ React.createElement(Input, _extends$2({}, rest, {
    className: inputClassName,
    onKeyDown: handleKeyDown,
    ref: getInputRef,
    style: {
      backgroundColor: "transparent",
      border: 0,
      boxShadow: "none",
      cursor: "inherit",
      outline: "none",
      padding: 0,
      width: "100%",
      zIndex: 1
    }
  })))));
}
var _excluded$4 = ["inputRef", "referenceElementRef"];
var TypeaheadInputSingle = function TypeaheadInputSingle2(_ref) {
  var inputRef = _ref.inputRef, referenceElementRef = _ref.referenceElementRef, props = _objectWithoutProperties(_ref, _excluded$4);
  return /* @__PURE__ */ React.createElement(Hint, null, /* @__PURE__ */ React.createElement(Input, _extends$2({}, propsWithBsClassName(props), {
    ref: function ref(node) {
      inputRef(node);
      referenceElementRef(node);
    }
  })));
};
var propTypes$3 = {
  children: PropTypes.string.isRequired,
  highlightClassName: PropTypes.string,
  search: PropTypes.string.isRequired
};
var Highlighter = function Highlighter2(_ref) {
  var children = _ref.children, _ref$highlightClassNa = _ref.highlightClassName, highlightClassName = _ref$highlightClassNa === void 0 ? "rbt-highlight-text" : _ref$highlightClassNa, search = _ref.search;
  if (!search || !children) {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, children);
  }
  var matchCount = 0;
  var remaining = children;
  var highlighterChildren = [];
  while (remaining) {
    var bounds = getMatchBounds(remaining, search);
    if (!bounds) {
      highlighterChildren.push(remaining);
      break;
    }
    var nonMatch = remaining.slice(0, bounds.start);
    if (nonMatch) {
      highlighterChildren.push(nonMatch);
    }
    var match = remaining.slice(bounds.start, bounds.end);
    highlighterChildren.push(/* @__PURE__ */ React.createElement("mark", {
      className: highlightClassName,
      key: matchCount
    }, match));
    matchCount += 1;
    remaining = remaining.slice(bounds.end);
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, highlighterChildren);
};
Highlighter.propTypes = propTypes$3;
const t = (t2) => "object" == typeof t2 && null != t2 && 1 === t2.nodeType, e$1 = (t2, e2) => (!e2 || "hidden" !== t2) && ("visible" !== t2 && "clip" !== t2), n = (t2, n2) => {
  if (t2.clientHeight < t2.scrollHeight || t2.clientWidth < t2.scrollWidth) {
    const o2 = getComputedStyle(t2, null);
    return e$1(o2.overflowY, n2) || e$1(o2.overflowX, n2) || ((t3) => {
      const e2 = ((t4) => {
        if (!t4.ownerDocument || !t4.ownerDocument.defaultView)
          return null;
        try {
          return t4.ownerDocument.defaultView.frameElement;
        } catch (t5) {
          return null;
        }
      })(t3);
      return !!e2 && (e2.clientHeight < t3.scrollHeight || e2.clientWidth < t3.scrollWidth);
    })(t2);
  }
  return false;
}, o$1 = (t2, e2, n2, o2, l2, r2, i, s) => r2 < t2 && i > e2 || r2 > t2 && i < e2 ? 0 : r2 <= t2 && s <= n2 || i >= e2 && s >= n2 ? r2 - t2 - o2 : i > e2 && s < n2 || r2 < t2 && s > n2 ? i - e2 + l2 : 0, l = (t2) => {
  const e2 = t2.parentElement;
  return null == e2 ? t2.getRootNode().host || null : e2;
}, r = (e2, r2) => {
  var i, s, d, h;
  if ("undefined" == typeof document)
    return [];
  const { scrollMode: c, block: f, inline: u, boundary: a, skipOverflowHiddenElements: g } = r2, p = "function" == typeof a ? a : (t2) => t2 !== a;
  if (!t(e2))
    throw new TypeError("Invalid target");
  const m = document.scrollingElement || document.documentElement, w = [];
  let W = e2;
  for (; t(W) && p(W); ) {
    if (W = l(W), W === m) {
      w.push(W);
      break;
    }
    null != W && W === document.body && n(W) && !n(document.documentElement) || null != W && n(W, g) && w.push(W);
  }
  const b = null != (s = null == (i = window.visualViewport) ? void 0 : i.width) ? s : innerWidth, H = null != (h = null == (d = window.visualViewport) ? void 0 : d.height) ? h : innerHeight, { scrollX: y, scrollY: M } = window, { height: v, width: E, top: x, right: C, bottom: I, left: R } = e2.getBoundingClientRect(), { top: T, right: B, bottom: F, left: V } = ((t2) => {
    const e3 = window.getComputedStyle(t2);
    return { top: parseFloat(e3.scrollMarginTop) || 0, right: parseFloat(e3.scrollMarginRight) || 0, bottom: parseFloat(e3.scrollMarginBottom) || 0, left: parseFloat(e3.scrollMarginLeft) || 0 };
  })(e2);
  let k = "start" === f || "nearest" === f ? x - T : "end" === f ? I + F : x + v / 2 - T + F, D = "center" === u ? R + E / 2 - V + B : "end" === u ? C + B : R - V;
  const L = [];
  for (let t2 = 0; t2 < w.length; t2++) {
    const e3 = w[t2], { height: n2, width: l2, top: r3, right: i2, bottom: s2, left: d2 } = e3.getBoundingClientRect();
    if ("if-needed" === c && x >= 0 && R >= 0 && I <= H && C <= b && x >= r3 && I <= s2 && R >= d2 && C <= i2)
      return L;
    const h2 = getComputedStyle(e3), a2 = parseInt(h2.borderLeftWidth, 10), g2 = parseInt(h2.borderTopWidth, 10), p2 = parseInt(h2.borderRightWidth, 10), W2 = parseInt(h2.borderBottomWidth, 10);
    let T2 = 0, B2 = 0;
    const F2 = "offsetWidth" in e3 ? e3.offsetWidth - e3.clientWidth - a2 - p2 : 0, V2 = "offsetHeight" in e3 ? e3.offsetHeight - e3.clientHeight - g2 - W2 : 0, S = "offsetWidth" in e3 ? 0 === e3.offsetWidth ? 0 : l2 / e3.offsetWidth : 0, X = "offsetHeight" in e3 ? 0 === e3.offsetHeight ? 0 : n2 / e3.offsetHeight : 0;
    if (m === e3)
      T2 = "start" === f ? k : "end" === f ? k - H : "nearest" === f ? o$1(M, M + H, H, g2, W2, M + k, M + k + v, v) : k - H / 2, B2 = "start" === u ? D : "center" === u ? D - b / 2 : "end" === u ? D - b : o$1(y, y + b, b, a2, p2, y + D, y + D + E, E), T2 = Math.max(0, T2 + M), B2 = Math.max(0, B2 + y);
    else {
      T2 = "start" === f ? k - r3 - g2 : "end" === f ? k - s2 + W2 + V2 : "nearest" === f ? o$1(r3, s2, n2, g2, W2 + V2, k, k + v, v) : k - (r3 + n2 / 2) + V2 / 2, B2 = "start" === u ? D - d2 - a2 : "center" === u ? D - (d2 + l2 / 2) + F2 / 2 : "end" === u ? D - i2 + p2 + F2 : o$1(d2, i2, l2, a2, p2 + F2, D, D + E, E);
      const { scrollLeft: t3, scrollTop: h3 } = e3;
      T2 = 0 === X ? 0 : Math.max(0, Math.min(h3 + T2 / X, e3.scrollHeight - n2 / X + V2)), B2 = 0 === S ? 0 : Math.max(0, Math.min(t3 + B2 / S, e3.scrollWidth - l2 / S + F2)), k += h3 - T2, D += t3 - B2;
    }
    L.push({ el: e3, top: T2, left: B2 });
  }
  return L;
};
const o = (t2) => false === t2 ? { block: "end", inline: "nearest" } : ((t3) => t3 === Object(t3) && 0 !== Object.keys(t3).length)(t2) ? t2 : { block: "start", inline: "nearest" };
function e(e2, r$1) {
  if (!e2.isConnected || !((t2) => {
    let o2 = t2;
    for (; o2 && o2.parentNode; ) {
      if (o2.parentNode === document)
        return true;
      o2 = o2.parentNode instanceof ShadowRoot ? o2.parentNode.host : o2.parentNode;
    }
    return false;
  })(e2))
    return;
  const n2 = ((t2) => {
    const o2 = window.getComputedStyle(t2);
    return { top: parseFloat(o2.scrollMarginTop) || 0, right: parseFloat(o2.scrollMarginRight) || 0, bottom: parseFloat(o2.scrollMarginBottom) || 0, left: parseFloat(o2.scrollMarginLeft) || 0 };
  })(e2);
  if (((t2) => "object" == typeof t2 && "function" == typeof t2.behavior)(r$1))
    return r$1.behavior(r(e2, r$1));
  const l2 = "boolean" == typeof r$1 || null == r$1 ? void 0 : r$1.behavior;
  for (const { el: a, top: i, left: s } of r(e2, o(r$1))) {
    const t2 = i - n2.top + n2.bottom, o2 = s - n2.left + n2.right;
    a.scroll({ top: t2, left: o2, behavior: l2 });
  }
}
var _excluded$3 = ["label", "onClick", "option", "position"];
function ownKeys$2(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e2);
    r2 && (o2 = o2.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o2);
  }
  return t2;
}
function _objectSpread$2(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$2(Object(t2), true).forEach(function(r3) {
      _defineProperty(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$2(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
({
  option: optionType.isRequired,
  position: PropTypes.number
});
function useItem(_ref) {
  var label = _ref.label, onClick = _ref.onClick, option = _ref.option, position = _ref.position, props = _objectWithoutProperties(_ref, _excluded$3);
  var _useTypeaheadContext = useTypeaheadContext(), activeIndex = _useTypeaheadContext.activeIndex, id = _useTypeaheadContext.id, isOnlyResult = _useTypeaheadContext.isOnlyResult, onActiveItemChange = _useTypeaheadContext.onActiveItemChange, onInitialItemChange = _useTypeaheadContext.onInitialItemChange, onMenuItemClick = _useTypeaheadContext.onMenuItemClick, setItem = _useTypeaheadContext.setItem;
  var itemRef = reactExports.useRef(null);
  reactExports.useEffect(function() {
    if (position === 0) {
      onInitialItemChange(option);
    }
  });
  reactExports.useEffect(function() {
    if (position === activeIndex) {
      onActiveItemChange(option);
      var node = itemRef.current;
      node && e(node, {
        boundary: node.parentNode,
        scrollMode: "if-needed"
      });
    }
  }, [activeIndex, onActiveItemChange, option, position]);
  var handleClick = reactExports.useCallback(function(e2) {
    onMenuItemClick(option, e2);
    onClick && onClick(e2);
  }, [onClick, onMenuItemClick, option]);
  var active = isOnlyResult || activeIndex === position;
  setItem(option, position);
  return _objectSpread$2(_objectSpread$2({}, props), {}, {
    active,
    "aria-label": label,
    "aria-selected": active,
    id: getMenuItemId(id, position),
    onClick: handleClick,
    onMouseDown: preventInputBlur,
    ref: itemRef,
    role: "option"
  });
}
var _excluded$2 = ["active", "children", "className", "disabled", "onClick"];
var BaseMenuItem = /* @__PURE__ */ reactExports.forwardRef(function(_ref, ref) {
  var active = _ref.active, children = _ref.children, className = _ref.className, disabled = _ref.disabled, _onClick = _ref.onClick, props = _objectWithoutProperties(_ref, _excluded$2);
  return /* @__PURE__ */ React.createElement("a", _extends$2({}, props, {
    className: cx("dropdown-item", {
      active,
      disabled
    }, className),
    href: props.href || "#",
    onClick: function onClick(e2) {
      e2.preventDefault();
      !disabled && _onClick && _onClick(e2);
    },
    ref
  }), children);
});
function MenuItem(props) {
  return /* @__PURE__ */ React.createElement(BaseMenuItem, useItem(props));
}
var _excluded$1 = ["emptyLabel", "innerRef", "maxHeight", "style"];
function ownKeys$1(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e2);
    r2 && (o2 = o2.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o2);
  }
  return t2;
}
function _objectSpread$1(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$1(Object(t2), true).forEach(function(r3) {
      _defineProperty(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$1(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var MenuDivider = function MenuDivider2() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "dropdown-divider",
    role: "separator"
  });
};
var MenuHeader = function MenuHeader2(props) {
  return (
    // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
    /* @__PURE__ */ React.createElement("div", _extends$2({}, props, {
      className: "dropdown-header",
      role: "heading"
    }))
  );
};
var propTypes$2 = {
  "aria-label": PropTypes.string,
  /**
   * Message to display in the menu if there are no valid results.
   */
  emptyLabel: PropTypes.node,
  /**
   * Needed for accessibility.
   */
  id: checkPropType(PropTypes.oneOfType([PropTypes.number, PropTypes.string]), isRequiredForA11y),
  /**
   * Maximum height of the dropdown menu.
   */
  maxHeight: PropTypes.string
};
var Menu = function Menu2(_ref) {
  var _ref$emptyLabel = _ref.emptyLabel, emptyLabel = _ref$emptyLabel === void 0 ? "No matches found." : _ref$emptyLabel, innerRef = _ref.innerRef, _ref$maxHeight = _ref.maxHeight, maxHeight = _ref$maxHeight === void 0 ? "300px" : _ref$maxHeight, style = _ref.style, props = _objectWithoutProperties(_ref, _excluded$1);
  var children = reactExports.Children.count(props.children) === 0 ? /* @__PURE__ */ React.createElement(BaseMenuItem, {
    disabled: true,
    role: "option"
  }, emptyLabel) : props.children;
  return (
    /* eslint-disable jsx-a11y/interactive-supports-focus */
    /* @__PURE__ */ React.createElement("div", _extends$2({}, props, {
      "aria-label": props["aria-label"] || "menu-options",
      className: cx("rbt-menu", "dropdown-menu", "show", props.className),
      onMouseDown: (
        // Prevent input from blurring when clicking on the menu scrollbar.
        preventInputBlur
      ),
      ref: innerRef,
      role: "listbox",
      style: _objectSpread$1(_objectSpread$1({}, style), {}, {
        display: "block",
        maxHeight,
        overflow: "auto"
      })
    }), children)
  );
};
Menu.propTypes = propTypes$2;
Menu.Divider = MenuDivider;
Menu.Header = MenuHeader;
var _excluded = ["labelKey", "newSelectionPrefix", "options", "paginationText", "renderMenuItemChildren", "text"];
var propTypes$1 = {
  /**
   * Provides the ability to specify a prefix before the user-entered text to
   * indicate that the selection will be new. No-op unless `allowNew={true}`.
   */
  newSelectionPrefix: PropTypes.node,
  /**
   * Prompt displayed when large data sets are paginated.
   */
  paginationText: PropTypes.node,
  /**
   * Provides a hook for customized rendering of menu item contents.
   */
  renderMenuItemChildren: PropTypes.func
};
function renderMenuItemChildrenFn(option, props) {
  return /* @__PURE__ */ React.createElement(Highlighter, {
    search: props.text
  }, getOptionLabel(option, props.labelKey));
}
var TypeaheadMenu = function TypeaheadMenu2(props) {
  var labelKey = props.labelKey, _props$newSelectionPr = props.newSelectionPrefix, newSelectionPrefix = _props$newSelectionPr === void 0 ? "New selection: " : _props$newSelectionPr, options = props.options, _props$paginationText = props.paginationText, paginationText = _props$paginationText === void 0 ? "Display additional results..." : _props$paginationText, _props$renderMenuItem = props.renderMenuItemChildren, renderMenuItemChildren = _props$renderMenuItem === void 0 ? renderMenuItemChildrenFn : _props$renderMenuItem, text = props.text, menuProps = _objectWithoutProperties(props, _excluded);
  var renderMenuItem = function renderMenuItem2(option, position) {
    var label = getOptionLabel(option, labelKey);
    var menuItemProps = {
      disabled: !!getOptionProperty(option, "disabled"),
      label,
      option,
      position
    };
    if (getOptionProperty(option, "customOption")) {
      return /* @__PURE__ */ React.createElement(MenuItem, _extends$2({}, menuItemProps, {
        className: "rbt-menu-custom-option",
        key: position,
        label
      }), newSelectionPrefix, /* @__PURE__ */ React.createElement(Highlighter, {
        search: text
      }, label));
    }
    if (getOptionProperty(option, "paginationOption")) {
      return /* @__PURE__ */ React.createElement(React.Fragment, {
        key: "pagination-option-divider"
      }, /* @__PURE__ */ React.createElement(Menu.Divider, null), /* @__PURE__ */ React.createElement(MenuItem, _extends$2({}, menuItemProps, {
        className: "rbt-menu-pagination-option",
        label: (
          // TODO: Fix how (aria-)labels are passed to `MenuItem`.
          // `paginationText` can be a ReactNode.
          isString(paginationText) ? paginationText : ""
        )
      }), paginationText));
    }
    return /* @__PURE__ */ React.createElement(MenuItem, _extends$2({}, menuItemProps, {
      key: position
    }), renderMenuItemChildren(option, props, position));
  };
  return /* @__PURE__ */ React.createElement(Menu, _extends$2({}, menuProps, {
    key: (
      // Force a re-render if the text changes to ensure that menu
      // positioning updates correctly.
      text
    )
  }), options.map(renderMenuItem));
};
TypeaheadMenu.propTypes = propTypes$1;
function ownKeys(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e2);
    r2 && (o2 = o2.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o2);
  }
  return t2;
}
function _objectSpread(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys(Object(t2), true).forEach(function(r3) {
      _defineProperty(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
var propTypes = {
  /**
   * Displays a button to clear the input when there are selections.
   */
  clearButton: PropTypes.bool,
  /**
   * Props to be applied directly to the input. `onBlur`, `onChange`,
   * `onFocus`, and `onKeyDown` are ignored.
   */
  inputProps: checkPropType(PropTypes.object, inputPropsType),
  /**
   * Bootstrap 4 only. Adds the `is-invalid` classname to the `form-control`.
   */
  isInvalid: PropTypes.bool,
  /**
   * Indicate whether an asynchronous data fetch is happening.
   */
  isLoading: PropTypes.bool,
  /**
   * Bootstrap 4 only. Adds the `is-valid` classname to the `form-control`.
   */
  isValid: PropTypes.bool,
  /**
   * Callback for custom input rendering.
   */
  renderInput: PropTypes.func,
  /**
   * Callback for custom menu rendering.
   */
  renderMenu: PropTypes.func,
  /**
   * Callback for custom menu rendering.
   */
  renderToken: PropTypes.func,
  /**
   * Specifies the size of the input.
   */
  size: sizeType
};
var defaultProps = {
  isLoading: false
};
var defaultRenderMenu = function defaultRenderMenu2(results, menuProps, props) {
  return /* @__PURE__ */ React.createElement(TypeaheadMenu, _extends$2({}, menuProps, {
    labelKey: props.labelKey,
    options: results,
    text: props.text
  }));
};
var defaultRenderToken = function defaultRenderToken2(option, props, idx) {
  return /* @__PURE__ */ React.createElement(Token, {
    disabled: props.disabled,
    key: idx,
    onRemove: props.onRemove,
    option,
    tabIndex: props.tabIndex
  }, getOptionLabel(option, props.labelKey));
};
var overlayPropKeys = ["align", "dropup", "flip", "positionFixed"];
function getOverlayProps(props) {
  return pick(props, overlayPropKeys);
}
var TypeaheadComponent = /* @__PURE__ */ function(_React$Component) {
  _inherits(TypeaheadComponent2, _React$Component);
  var _super = _createSuper(TypeaheadComponent2);
  function TypeaheadComponent2() {
    var _this;
    _classCallCheck(this, TypeaheadComponent2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "_referenceElement", null);
    _defineProperty(_assertThisInitialized(_this), "referenceElementRef", function(referenceElement) {
      _this._referenceElement = referenceElement;
    });
    _defineProperty(_assertThisInitialized(_this), "_renderInput", function(inputProps, props) {
      var _this$props = _this.props, isInvalid = _this$props.isInvalid, isValid = _this$props.isValid, multiple = _this$props.multiple, renderInput = _this$props.renderInput, renderToken = _this$props.renderToken, size = _this$props.size;
      if (isFunction(renderInput)) {
        return renderInput(inputProps, props);
      }
      var commonProps = _objectSpread(_objectSpread({}, inputProps), {}, {
        isInvalid,
        isValid,
        size
      });
      if (!multiple) {
        return /* @__PURE__ */ React.createElement(TypeaheadInputSingle, commonProps);
      }
      var labelKey = props.labelKey, onRemove = props.onRemove, selected = props.selected;
      return /* @__PURE__ */ React.createElement(TypeaheadInputMulti, _extends$2({}, commonProps, {
        placeholder: selected.length ? "" : inputProps.placeholder,
        selected
      }), selected.map(function(option, idx) {
        return (renderToken || defaultRenderToken)(option, _objectSpread(_objectSpread({}, commonProps), {}, {
          labelKey,
          onRemove
        }), idx);
      }));
    });
    _defineProperty(_assertThisInitialized(_this), "_renderMenu", function(results, menuProps, props) {
      var _this$props2 = _this.props, emptyLabel = _this$props2.emptyLabel, id = _this$props2.id, maxHeight = _this$props2.maxHeight, newSelectionPrefix = _this$props2.newSelectionPrefix, paginationText = _this$props2.paginationText, renderMenu = _this$props2.renderMenu, renderMenuItemChildren = _this$props2.renderMenuItemChildren;
      return (renderMenu || defaultRenderMenu)(results, _objectSpread(_objectSpread({}, menuProps), {}, {
        emptyLabel,
        id,
        maxHeight,
        newSelectionPrefix,
        paginationText,
        renderMenuItemChildren
      }), props);
    });
    _defineProperty(_assertThisInitialized(_this), "_renderAux", function(_ref) {
      var onClear = _ref.onClear, selected = _ref.selected;
      var _this$props3 = _this.props, clearButton = _this$props3.clearButton, disabled = _this$props3.disabled, isLoading = _this$props3.isLoading, size = _this$props3.size;
      var content;
      if (isLoading) {
        content = /* @__PURE__ */ React.createElement(Loader, null);
      } else if (clearButton && !disabled && selected.length) {
        content = /* @__PURE__ */ React.createElement(ClearButton, {
          onClick: onClear,
          onMouseDown: preventInputBlur,
          size
        });
      }
      return content ? /* @__PURE__ */ React.createElement("div", {
        className: cx("rbt-aux", {
          "rbt-aux-lg": isSizeLarge(size)
        })
      }, content) : null;
    });
    return _this;
  }
  _createClass(TypeaheadComponent2, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props4 = this.props, children = _this$props4.children, className = _this$props4.className, instanceRef = _this$props4.instanceRef, open = _this$props4.open, options = _this$props4.options, style = _this$props4.style;
      return /* @__PURE__ */ React.createElement(Typeahead$1, _extends$2({}, this.props, {
        options,
        ref: instanceRef
      }), function(props) {
        var hideMenu2 = props.hideMenu, isMenuShown = props.isMenuShown, results = props.results;
        var auxContent = _this2._renderAux(props);
        return /* @__PURE__ */ React.createElement(RootClose, {
          disabled: open || !isMenuShown,
          onRootClose: hideMenu2
        }, function(ref) {
          return /* @__PURE__ */ React.createElement("div", {
            className: cx("rbt", {
              "has-aux": !!auxContent,
              "is-invalid": _this2.props.isInvalid,
              "is-valid": _this2.props.isValid
            }, className),
            ref,
            style: _objectSpread(_objectSpread({}, style), {}, {
              outline: "none",
              position: "relative"
            }),
            tabIndex: -1
          }, _this2._renderInput(_objectSpread(_objectSpread({}, props.getInputProps(_this2.props.inputProps)), {}, {
            referenceElementRef: _this2.referenceElementRef
          }), props), /* @__PURE__ */ React.createElement(Overlay, _extends$2({}, getOverlayProps(_this2.props), {
            isMenuShown,
            referenceElement: _this2._referenceElement
          }), function(menuProps) {
            return _this2._renderMenu(results, menuProps, props);
          }), auxContent, isFunction(children) ? children(props) : children);
        });
      });
    }
  }]);
  return TypeaheadComponent2;
}(React.Component);
_defineProperty(TypeaheadComponent, "propTypes", propTypes);
_defineProperty(TypeaheadComponent, "defaultProps", defaultProps);
const Typeahead = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  return /* @__PURE__ */ React.createElement(TypeaheadComponent, _extends$2({}, props, {
    instanceRef: ref
  }));
});
const TransactionSelectorInput = ({ options, selected, onChange }) => {
  const handleChange = reactExports.useCallback(
    (selectedTransactions) => {
      const matcherList = selectedTransactions.map((selectedInput) => {
        if (typeof selectedInput === "string") {
          return selectedInput;
        }
        return selectedInput == null ? void 0 : selectedInput.matcher;
      });
      onChange(matcherList);
    },
    [onChange]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Typeahead,
    {
      id: "transactionSelector",
      labelKey: "matcher",
      onChange: handleChange,
      options: options ?? [],
      placeholder: "Select transactions",
      selected,
      multiple: true,
      allowNew: true
    }
  );
};
const ListItemWithEditCellRenderer = ({
  value,
  data,
  updateItem
}) => {
  const [show, setShow] = reactExports.useState(false);
  const [updatedList, setUpdatedList] = reactExports.useState(value);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleUpdate = () => {
    handleClose();
    updateItem(data, updatedList);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    (value == null ? void 0 : value.length) === 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-truncate", children: value[0] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "list-renderer", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "small m-0", children: value == null ? void 0 : value.map((valueItem, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "lh-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-truncate", children: valueItem }) }, `${data == null ? void 0 : data.id}-${index}`)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PencilSquare$1, { style: { float: "right", cursor: "pointer", marginBottom: "5px" }, onClick: handleShow }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { show, onHide: handleClose, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Header, { closeButton: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Title, { children: "Edit Transactions" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Body, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TransactionSelectorInput, { selected: updatedList, onChange: setUpdatedList }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: handleClose, children: "Close" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", onClick: handleUpdate, children: "Save Changes" })
      ] })
    ] })
  ] });
};
const settingsGridComponents = {
  rowActionCellRenderer: RowActionCellRenderer,
  listItemWithEditCellRenderer: ListItemWithEditCellRenderer
};
function useGroupSettings() {
  const triggerToggle = Recoil_index_24(toggleGroupFetchAgainFlag);
  const groupList = Recoil_index_20(selectGroups);
  const sourceList = Recoil_index_20(selectSources);
  const [error, setError] = reactExports.useState("");
  const onSave = reactExports.useCallback(
    async (matchers, name, chartColor, sourceId, budget) => {
      setError("");
      const response = await insertNewGroup({
        name,
        matchers,
        chartColor,
        sourceId,
        budget
      });
      if (response.error) {
        setError("Failed to create new group");
      } else {
        triggerToggle(true);
      }
      return response;
    },
    [triggerToggle]
  );
  const onDelete = reactExports.useCallback(
    async (group) => {
      setError("");
      const response = await deleteGroupById(group.id);
      if (response.error) {
        setError(`Failed to delete group with id ${group.id}`);
      } else {
        triggerToggle(true);
      }
      return response;
    },
    [triggerToggle]
  );
  const onToggleStatus = reactExports.useCallback(
    async (group) => {
      setError("");
      const response = await updateGroupById(group.id, {
        isEnabled: !group.isEnabled
      });
      if (response.error) {
        setError(`Failed to toggle status for ${group.name}`);
      } else {
        triggerToggle(true);
      }
      return response;
    },
    [triggerToggle]
  );
  const onUpdate = reactExports.useCallback(
    async (id, matchers, name, chartColor, sourceId, budget) => {
      setError("");
      const response = await updateGroupById(id, {
        name,
        matchers,
        chartColor,
        sourceId,
        budget
      });
      if (response.error) {
        setError(`Failed to update for ${name}`);
      } else {
        triggerToggle(true);
      }
      return response;
    },
    [triggerToggle]
  );
  const onUpdateTransactions = reactExports.useCallback(
    async (group, matchers) => {
      setError("");
      const response = await updateGroupById(group.id, { matchers });
      if (response.error) {
        setError(`Failed to update transaction for ${group.name}`);
      } else {
        triggerToggle(true);
      }
      return response;
    },
    [triggerToggle]
  );
  return {
    groupList,
    sourceList,
    error,
    onSave,
    onDelete,
    onUpdate,
    onToggleStatus,
    onUpdateTransactions
  };
}
const GroupSettings = () => {
  const { groupList, sourceList, error, onDelete, onSave, onUpdate, onToggleStatus, onUpdateTransactions } = useGroupSettings();
  const [editId, setEditId] = reactExports.useState(null);
  const [newMatchers, setNewMatchers] = reactExports.useState([]);
  const [color, setColor] = reactExports.useState("#000000");
  const [newLabel, setNewLabel] = reactExports.useState("");
  const [sourceId, setSourceId] = reactExports.useState("");
  const [budget, setBudget] = reactExports.useState("");
  const handleClear = reactExports.useCallback(() => {
    setEditId(null);
    setNewMatchers([]);
    setNewLabel("");
    setColor("");
    setSourceId("");
    setBudget("");
  }, []);
  const handleSave = reactExports.useCallback(() => {
    onSave(newMatchers, newLabel, color, sourceId, parseInt(budget)).then(() => {
      handleClear();
    });
  }, [onSave, newMatchers, newLabel, color, sourceId, budget, handleClear]);
  const handleUpdate = reactExports.useCallback(() => {
    onUpdate(editId, newMatchers, newLabel, color, sourceId, parseInt(budget)).then(() => {
      handleClear();
    });
  }, [onUpdate, editId, newMatchers, newLabel, color, sourceId, budget, handleClear]);
  const handleEdit = reactExports.useCallback((group) => {
    var _a;
    setEditId(group.id);
    setNewMatchers(group.matchers);
    setNewLabel(group.name);
    setColor(group.chartColor);
    setSourceId(group.sourceId);
    setBudget(((_a = group.budget) == null ? void 0 : _a.toString()) || "");
  }, []);
  const colDefs = reactExports.useMemo(
    () => groupSettingsColDefs(onDelete, onToggleStatus, onUpdateTransactions, handleEdit, sourceList),
    [handleEdit, onDelete, onToggleStatus, onUpdateTransactions, sourceList]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Form.Control,
        {
          placeholder: "Enter Label",
          value: newLabel,
          onChange: (event) => setNewLabel(event.target.value)
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TransactionSelectorInput, { selected: newMatchers, options: newMatchers, onChange: setNewMatchers }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Form.Control,
        {
          placeholder: "Enter Budget",
          type: "number",
          step: "any",
          min: "1",
          value: budget,
          onChange: (event) => setBudget(event.target.value)
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Form.Control,
        {
          type: "color",
          value: color,
          onChange: (event) => setColor(event.target.value),
          title: "Choose your color"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Form.Select,
        {
          "aria-label": "Source Selector",
          value: sourceId,
          onChange: (event) => setSourceId(event.target.value),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Select Source" }),
            sourceList.map((source, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: source.id, children: source.name }, `source-${index}`))
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { className: "text-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          className: "mx-2",
          disabled: !newLabel || newMatchers.length === 0 || !color || !sourceId,
          onClick: editId ? handleUpdate : handleSave,
          children: editId ? "Update" : "Add Group"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline-secondary", onClick: handleClear, children: "Clear" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GridBase, { colDefs, rowData: groupList, components: settingsGridComponents })
    ] }) })
  ] });
};
const sourceSettingsColDefs = (onDelete, onToggleStatus, onEdit) => [
  {
    headerName: "Name",
    field: "name"
  },
  {
    headerName: "Expense flag",
    field: "isExpense"
  },
  {
    headerName: "Chart Color",
    field: "chartColor",
    width: 100,
    cellStyle: (params) => ({
      backgroundColor: params.value,
      color: "white"
    })
  },
  {
    headerName: "Action",
    type: "rightAligned",
    width: 140,
    cellRenderer: "rowActionCellRenderer",
    cellRendererParams: {
      deleteItem: onDelete,
      toggleItem: onToggleStatus,
      editItem: onEdit
    }
  }
];
const SourceSettings = () => {
  const { error, sourceList, onDelete, onSave, onToggleStatus, onUpdate } = useSourceSettings();
  const [editId, setEditId] = reactExports.useState(null);
  const [color, setColor] = reactExports.useState("#000000");
  const [newLabel, setNewLabel] = reactExports.useState("");
  const [expenseFlag, setExpenseFlag] = reactExports.useState(null);
  const handleClear = reactExports.useCallback(() => {
    setEditId(null);
    setNewLabel("");
    setColor("");
    setExpenseFlag(null);
  }, []);
  const handleSave = reactExports.useCallback(() => {
    onSave(newLabel, color, expenseFlag).then(() => {
      handleClear();
    });
  }, [onSave, newLabel, color, expenseFlag, handleClear]);
  const handleUpdate = reactExports.useCallback(() => {
    onUpdate(editId, newLabel, color, expenseFlag).then(() => {
      handleClear();
    });
  }, [onUpdate, editId, newLabel, color, expenseFlag, handleClear]);
  const handleEdit = reactExports.useCallback((source) => {
    setEditId(source.id);
    setNewLabel(source.name);
    setColor(source.chartColor);
    setExpenseFlag(source.isExpense);
  }, []);
  const colDefs = reactExports.useMemo(
    () => sourceSettingsColDefs(onDelete, onToggleStatus, handleEdit),
    [onDelete, onToggleStatus, handleEdit]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Form.Control,
        {
          placeholder: "Enter Label",
          value: newLabel,
          onChange: (event) => setNewLabel(event.target.value)
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Form.Check,
        {
          onChange: (event) => setExpenseFlag(event.target.checked),
          checked: expenseFlag,
          label: "Expense",
          type: "checkbox"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Form.Control,
        {
          type: "color",
          value: color,
          onChange: (event) => setColor(event.target.value),
          title: "Choose your color"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { className: "text-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "mx-2", disabled: !newLabel || !color, onClick: editId ? handleUpdate : handleSave, children: editId ? "Update" : "Add Source" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline-secondary", onClick: handleClear, children: "Clear" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GridBase, { colDefs, rowData: sourceList, components: settingsGridComponents })
    ] }) })
  ] });
};
const settingsComponentMapping = [
  {
    eventKey: "source",
    title: "Source Settings",
    component: /* @__PURE__ */ jsxRuntimeExports.jsx(SourceSettings, {})
  },
  {
    eventKey: "group",
    title: "Group Settings",
    component: /* @__PURE__ */ jsxRuntimeExports.jsx(GroupSettings, {})
  }
];
const Settings = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: "calc(100vh - 150px)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Tab.Container, { defaultActiveKey: "source", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "h-100", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: 2, className: "border-end ", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { className: "flex-column h-100", children: settingsComponentMapping.map(({ eventKey, title }, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Nav.Item, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Nav.Link, { eventKey, children: title }) }, `nav-menu-${index}`)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: 10, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Tab.Content, { children: settingsComponentMapping.map(({ eventKey, component }, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Tab.Pane, { eventKey, unmountOnExit: true, mountOnEnter: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AsyncDataLoader, { errorFallback: "Something went wrong!", children: component }) }, `nav-content-${index}`)) }) })
  ] }) }) });
};
export {
  Settings as default
};
